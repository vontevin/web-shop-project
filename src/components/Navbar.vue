<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <!-- Main Navigation Bar -->
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo/Brand -->
      <div class="flex items-center space-x-4">
        <img 
          src="https://scontent.fpnh8-1.fna.fbcdn.net/v/t39.30808-6/434497542_314682004964622_5774944822969872687_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGWwB9pBCYmAZ9RKjudwFDA8MzO4AhD9uPwzM7gCEP246ku3ZiKNeHd1EvR9fgeWULZ9ER9pa0PHk27aBTvB2T2&_nc_ohc=SJb6yQB7mwUQ7kNvwF27CCZ&_nc_oc=AdnL_-6Tq36w1gJ_w_4GnNgwgGKDlrwtFnKjmIwhsDYOpsoXDP4FOWKAVOGWwegyeRM&_nc_zt=23&_nc_ht=scontent.fpnh8-1.fna&_nc_gid=pPZ-CB0k6jJjUoUVubiYZg&oh=00_AfJB7ka6TGTuOlPvqqAcqJlbBZuJJPkeAFoTcjF2YuE7xg&oe=683B69C5" 
          alt="Brand Logo"
          class="h-10 w-10 rounded-full object-cover shadow-md"
        />
        <h1 class="text-xl font-bold text-indigo-600">ឡាយ ឈុន</h1>
      </div>

      <!-- Desktop Menu & Cart -->
      <div class="hidden md:flex items-center space-x-8">
        <ul class="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#home" class="hover:text-indigo-600 transition-colors">Home</a></li>
          <li><a href="#shop" class="hover:text-indigo-600 transition-colors">Shop</a></li>
          <li><a href="#contact" class="hover:text-indigo-600 transition-colors">Contact</a></li>
        </ul>
        <router-link :to="{ name: 'Cart' }"  class="relative text-gray-700 hover:text-indigo-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span 
            v-if="cartCount > 0"
            class="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
          >
            {{ cartCount }}
          </span>
        </router-link>
      </div>


      <!-- Mobile Menu Button -->
      <router-link :to="{ name: 'Cart' }"  class="relative text-gray-700 hover:text-indigo-600 transition-colors md:hidden" style="margin-left: 120px;">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span 
            v-if="cartCount > 0"
            class="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center"
          >
            {{ cartCount }}
          </span>
      </router-link>
      <button 
        @click="toggleMobileMenu"
        class="md:hidden text-gray-700 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6 transition-transform duration-200"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          :class="isMenuOpen ? 'scale-90 opacity-70' : ''"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            :d="isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" 
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition name="fade">
      <div 
        v-if="isMenuOpen"
        @click="closeMenu"
        class="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
      ></div>
    </transition>

    <!-- Mobile Menu Content - Now on Left Side -->
    <transition name="slide-left">
      <aside 
        v-if="isMenuOpen"
        class="fixed top-0 left-0 h-full w-80 max-w-full bg-white shadow-xl z-50 flex flex-col md:hidden"
      >
        <!-- Menu Header -->
        <div class="p-4 border-b border-gray-100 flex justify-between items-center">
          <h2 class="text-xl font-bold text-indigo-600">Menu</h2>
          <button @click="closeMenu" class="p-1 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Menu Items -->
        <div class="flex-1 overflow-y-auto">
          <ul class="py-2">
            <li>
              <a 
                href="#home" 
                @click="closeMenu"
                class="block px-6 py-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-100"
              >
                <div class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Home</span>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="#shop" 
                @click="closeMenu"
                class="block px-6 py-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-100"
              >
                <div class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span>Shop</span>
                </div>
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                @click="closeMenu"
                class="block px-6 py-4 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border-b border-gray-100"
              >
                <div class="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Contact</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Cart Button -->
        <div class="p-4 border-t border-gray-100 bg-gray-50">
          <router-link
            :to="{ name: 'Cart' }" 
            @click="closeMenu"
            class="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span>View Cart ({{ cartCount }})</span>
          </router-link>
        </div>
      </aside>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useClothesStore } from '../stores/clothes'
import { RouterLink } from 'vue-router'



const isMenuOpen = ref(false)
const clothesStore = useClothesStore()

const cartCount = computed(() => clothesStore.cartCount)
const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : 'auto'
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = 'auto'
}
                                                                                                                                                                                                                
</script>

<style>
/* Transition effects */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active, .slide-left-leave-active {
  transition: transform 0.3s ease;
}
.slide-left-enter-from, .slide-left-leave-to {
  transform: translateX(-100%);
}
</style>