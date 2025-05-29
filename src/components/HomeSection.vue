<template>
  <section id="home" class="relative py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16">
    <div class="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      <!-- Slide container -->
      <div 
        class="relative overflow-hidden "
        @mouseenter="stopAutoplay"
        @mouseleave="startAutoplay"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <div
          class="flex transition-transform duration-700 ease-in-out"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="min-w-full"
          >
            <!-- Mobile Layout (< 768px) -->
            <div class="block md:hidden">
              <div class="relative">
                <!-- Image -->
                <div class="w-full h-48 xs:h-56 sm:h-64 overflow-hidden">
                  <img
                    :src="slide.image"
                    :alt="slide.title || 'Slide image'"
                    class="w-full h-full object-cover"
                  />
                </div>
                <!-- Content overlay on mobile -->
                <div class="absolute inset-0  flex items-end">
                  <div class="p-4 text-white w-full">
                    <h2 class="text-xl xs:text-2xl font-bold mb-2 leading-tight">
                      {{ slide.title }}
                    </h2>
                    <p class="text-sm xs:text-base opacity-90 mb-3 line-clamp-2">
                      {{ slide.description }}
                    </p>
                    <button 
                      v-if="slide.buttonText"
                      class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors duration-300"
                    >
                      {{ slide.buttonText }}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tablet & Desktop Layout (>= 768px) -->
            <div class="hidden md:flex items-center  p-6 lg:p-8 xl:p-12">
              <!-- Image -->
              <div class="w-full h-72 md:h-80 lg:h-[24rem] xl:h-[28rem] 2xl:h-[32rem] overflow-hidden rounded-lg shadow-md flex-shrink-0">
  <img
    :src="slide.image"
    :alt="slide.title || 'Slide image'"
    class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
  />
</div>

              
              <!-- Content -->
              <div class="w-1/2 space-y-4 lg:space-y-6">
                <h2 class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-gray-900 leading-tight">
                  {{ slide.title }}
                </h2>
                <p class="text-gray-600 text-base lg:text-lg xl:text-xl leading-relaxed">
                  {{ slide.description }}
                </p>
                <button 
                  v-if="slide.buttonText"
                  class="inline-block px-6 py-3 lg:px-8 lg:py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  {{ slide.buttonText }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation arrows - hidden on mobile -->
        <button
          v-if="slides.length > 1"
          class="hidden md:block absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 lg:w-12 lg:h-12 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          @click="previousSlide"
          :aria-label="'Previous slide'"
        >
          <svg class="w-5 h-5 lg:w-6 lg:h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          v-if="slides.length > 1"
          class="hidden md:block absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 lg:w-12 lg:h-12 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          @click="nextSlide"
          :aria-label="'Next slide'"
        >
          <svg class="w-5 h-5 lg:w-6 lg:h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Slide indicators -->
      <div v-if="slides.length > 1" class="flex justify-center mt-4 sm:mt-6 md:mt-8 mb-3 space-x-2">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          class="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          :class="currentSlide === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-blue-400'"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>

      <!-- Mobile swipe indicator -->
      <!-- <div class="block md:hidden text-center mt-4">
        <p class="text-xs text-gray-500">Swipe to navigate</p>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  slides: {
    type: Array,
    required: true,
    validator: (slides) => {
      return slides.every(slide => slide.image && (slide.title || slide.description))
    }
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 5000
  }
});

const currentSlide = ref(0);
let autoplayInterval = null;

// Touch handling
const touchStartX = ref(0);
const touchEndX = ref(0);

const goToSlide = (index) => {
  currentSlide.value = index;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.slides.length;
};

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 
    ? props.slides.length - 1 
    : currentSlide.value - 1;
};

const startAutoplay = () => {
  if (props.autoplay && props.slides.length > 1) {
    autoplayInterval = setInterval(() => {
      nextSlide();
    }, props.interval);
  }
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
};

const handleTouchStart = (e) => {
  touchStartX.value = e.changedTouches[0].screenX;
};

const handleTouchMove = (e) => {
  // Prevent default to avoid scrolling while swiping
  e.preventDefault();
};

const handleTouchEnd = (e) => {
  touchEndX.value = e.changedTouches[0].screenX;
  handleSwipe();
};

const handleSwipe = () => {
  const swipeThreshold = 50; // Minimum distance for swipe
  const swipeDistance = touchStartX.value - touchEndX.value;
  
  if (Math.abs(swipeDistance) > swipeThreshold) {
    if (swipeDistance > 0) {
      // Swiped left - next slide
      nextSlide();
    } else {
      // Swiped right - previous slide
      previousSlide();
    }
    
    // Restart autoplay after manual interaction
    if (props.autoplay) {
      stopAutoplay();
      setTimeout(startAutoplay, 1000);
    }
  }
};

// Keyboard navigation
const handleKeydown = (e) => {
  if (e.key === 'ArrowLeft') {
    previousSlide();
  } else if (e.key === 'ArrowRight') {
    nextSlide();
  }
};

onMounted(() => {
  startAutoplay();
  document.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  stopAutoplay();
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
/* Custom breakpoint for extra small screens */
@media (min-width: 475px) {
  .xs\:h-56 {
    height: 14rem;
  }
  .xs\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  .xs\:text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}

/* Line clamp utility for text truncation */

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2; /* Add this line for compatibility */
  -webkit-box-orient: vertical;
  box-orient: vertical; /* Add this line for compatibility */
  overflow: hidden;
}
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Focus styles for better accessibility */
button:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
</style>