<template>
  <section id="shop">
    <div 
      v-if="showToast" 
      class="fixed top-4 right-4 z-50 max-w-sm bg-white rounded-lg shadow-xl transform transition-all duration-300"
      :class="{'translate-x-0 opacity-100': showToast, 'translate-x-full opacity-0': !showToast}"
    >
      <div class="flex p-4 items-center space-x-3 border-l-4 border-green-500">
        <div class="flex-shrink-0">
          <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class="flex-1 text-sm font-medium text-gray-900">
          {{ toastMessage }}
        </div>
        <button 
          @click="showToast = false"
          class="flex-shrink-0 text-gray-400 hover:text-gray-500"
        >
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    <div class="sm:py-1 md:py-2 lg:py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 mb-6">
          សម្លៀកបំពាក់ថ្មីៗ
        </h1>
        <p class="text-center text-gray-600 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12">
          រក្សាទុកស្តាយរបស់អ្នកជាមួយសម្លៀកបំពាក់ថ្មីៗរបស់យើង
        </p>
      </div>
    </div>
    <!-- Category Filter Buttons -->
    <div class="flex justify-center mb-8 space-x-4">
      <button
        @click="selectedCategory = 'clothes'"
        :class="[
          'px-4 py-2 rounded-full font-semibold transition-all duration-200',
          selectedCategory === 'clothes'
            ? 'bg-indigo-600 text-white shadow-lg'
            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
        ]"
      >
        ទាំងអស់
      </button>
      <button
        @click="selectedCategory = 'Shirt'"
        :class="[
          'px-4 py-2 rounded-full font-semibold transition-all duration-200',
          selectedCategory === 'Shirt'
            ? 'bg-indigo-600 text-white shadow-lg'
            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
        ]"
      >
        អាវ
      </button>
      <button
        @click="selectedCategory = 'Pants'"
        :class="[
          'px-4 py-2 rounded-full font-semibold transition-all duration-200',
          selectedCategory === 'Pants'
            ? 'bg-indigo-600 text-white shadow-lg'
            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
        ]"
      >
        ខោរ
      </button>

      <button
        @click="selectedCategory = 'shoes'"
        :class="[
          'px-4 py-2 rounded-full font-semibold transition-all duration-200',
          selectedCategory === 'shoes'
            ? 'bg-indigo-600 text-white shadow-lg'
            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
        ]"
      >
        ស្បែកជើង
      </button>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="item in paginatedClothes"
        :key="item.id"
        class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 flex flex-col items-center relative group hover:-translate-y-1.5 cursor-pointer"
        @click="goToProductDetail(item)"
      >
        <!-- Favorite Heart -->
        <button
          @click="toggleFavorite(item)"
          class="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200 border border-gray-200"
        >
          <component
            :is="item.isFavorite ? HeartSolid : HeartOutline"
            :class="
              item.isFavorite
                ? 'text-red-500'
                : 'text-gray-400 hover:text-red-500'
            "
            class="w-4 h-4 sm:w-5 sm:h-5"
          />
        </button>

        <!-- Image Container -->
        <div
          class="relative w-full h-32 sm:h-40 md:h-48 lg:h-60 mb-3 sm:mb-4 md:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100"
        >
          <img
            :src="item.image"
            :alt="item.name"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>

        <!-- Product Info -->
        <div
          class="flex flex-col items-center text-center space-y-1 sm:space-y-2 md:space-y-3 mb-3 sm:mb-4 md:mb-6 flex-grow"
        >
          <h2
            class="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 leading-tight"
          >
            {{ item.name }}
          </h2>
          <p
            class="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-lg sm:text-xl md:text-2xl font-black text-transparent"
          >
            ${{ item.price.toFixed(2) }}
          </p>
        </div>

        <!-- Add to Cart Button -->
        <button
          @click.stop="addToCart(item)"
          class="w-full flex items-center justify-center gap-1 sm:gap-2 md:gap-3 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <span class="text-xs sm:text-sm md:text-base">ដាក់ចូលកន្ត្រាក់</span>
        </button>
      </div>
    </div>

      <!-- Enhanced Pagination -->
      <div class="flex flex-col sm:flex-row items-center justify-center mt-12 md:mt-16 space-y-4 sm:space-y-0 sm:space-x-4">
        <!-- Pagination controls -->
        <div class="flex items-center space-x-2 sm:space-x-3 order-1 sm:order-2">
          <!-- Previous button -->
          <button 
            @click="goToPage(currentPage - 1)" 
            :disabled="currentPage === 1" 
            class="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md text-sm sm:text-base"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span class="hidden sm:inline">Prev</span>
          </button>

          <!-- Page numbers -->
          <div class="flex items-center space-x-2">
            <!-- First page -->
            <button 
              v-if="showFirstPage"
              @click="goToPage(1)"
              class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-sm sm:text-base font-medium bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              1
            </button>
            
            <!-- Left ellipsis -->
            <span v-if="showLeftEllipsis" class="px-2 text-gray-400">...</span>
            
            <!-- Visible page numbers -->
            <button 
              v-for="page in visiblePages" 
              :key="page" 
              @click="goToPage(page)"
              :class="[
                'w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-sm sm:text-base font-medium transition-all duration-200 shadow-sm hover:shadow-md',
                currentPage === page 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-110' 
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
              ]"
            >
              {{ page }}
            </button>
            
            <!-- Right ellipsis -->
            <span v-if="showRightEllipsis" class="px-2 text-gray-400">...</span>
            
            <!-- Last page -->
            <button 
              v-if="showLastPage"
              @click="goToPage(totalPages)"
              class="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-sm sm:text-base font-medium bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {{ totalPages }}
            </button>
          </div>

          <!-- Next button -->
          <button 
            @click="goToPage(currentPage + 1)" 
            :disabled="currentPage === totalPages" 
            class="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md text-sm sm:text-base"
          >
            <span class="hidden sm:inline">Next</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'; // Add onUnmounted import
import { HeartIcon as HeartOutline } from '@heroicons/vue/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/vue/24/solid';
import { useClothesStore } from '../stores/clothes'
import { useRouter } from 'vue-router'

const props = defineProps({
  clothes: {
    type: Array,
    required: true,
  },
  toggleFavorite: {
    type: Function,
    required: true,
  },
});

onUnmounted(() => {
  if (showToast.value) {
    showToast.value = false
  }
})

const showToast = ref(false)
const toastMessage = ref('')
const clothesStore = useClothesStore()
const router = useRouter()

const goToProductDetail = (product) => {
  if (product && product.id) {
    router.push({
      name: 'ProductDetail',
      params: { id: product.id.toString() }
    });
  }
};

const emit = defineEmits(['add-to-cart']);

const itemsPerPage = ref(6); // Increased items per page for desktop
const currentPage = ref(1);

const paginatedClothes = computed(() => {
  const filtered = props.clothes.filter(item => 
    selectedCategory.value === 'shoes' ? item.category === 'shoes' : true
  );
  if (selectedCategory.value === 'Pants') {
    return filtered.filter(item => item.category === 'Pants');
  }
  if (selectedCategory.value === 'Shirt') {
    return filtered.filter(item => item.category === 'Shirt');
  }
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return filtered.slice(start, start + itemsPerPage.value);
});

const totalPages = computed(() =>
  Math.ceil(props.clothes.length / itemsPerPage.value)
);

const visiblePages = computed(() => {
  const pages = [];
  const total = totalPages.value;
  const current = currentPage.value;
  
  if (total <= 7) {
    // Show all pages if 7 or fewer
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    // Show pages around current page
    let start = Math.max(2, current - 1);
    let end = Math.min(total - 1, current + 1);
    
    // Adjust range if at beginning or end
    if (current <= 3) {
      end = 4;
    } else if (current >= total - 2) {
      start = total - 3;
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
  }
  
  return pages;
});

const showFirstPage = computed(() => {
  return totalPages.value > 7 && !visiblePages.value.includes(1);
});

const showLastPage = computed(() => {
  return totalPages.value > 7 && !visiblePages.value.includes(totalPages.value);
});

const showLeftEllipsis = computed(() => {
  return totalPages.value > 7 && visiblePages.value[0] > 2;
});

const showRightEllipsis = computed(() => {
  return totalPages.value > 7 && visiblePages.value[visiblePages.value.length - 1] < totalPages.value - 1;
});

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    // Smooth scroll to top of section
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

function addToCart(item) {
  try {
    clothesStore.addToCart({
      ...item,
      quantity: 1
    })
    
    toastMessage.value = `បានដាក់ ${item.name} ចូលក្នុងកន្រ្តក់របស់អ្នក`
    showToast.value = true
    
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  } catch (error) {
    toastMessage.value = 'មានបញ្ហាក្នុងការដាក់ទំនិញចូលកន្រ្តក់'
    showToast.value = true
    console.error('Error adding to cart:', error)
  }
}

const selectedCategory = ref('clothes'); // default category

const filteredClothes = computed(() => {
  return props.clothes.filter(item => item.category === selectedCategory.value);
});


</script>