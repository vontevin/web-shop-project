<!-- views/ProductDetail.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Back button -->
      <button 
        @click="$router.go(-1)"
        class="flex items-center text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        ត្រឡប់ក្រោយ
      </button>

      <!-- Product Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <!-- Image Gallery -->
        <div class="space-y-4">
          <div class="bg-white rounded-xl shadow-md overflow-hidden">
            <img 
              :src="product.image" 
              :alt="product.name"
              class="w-full h-96 object-cover"
            >
          </div>
          <div class="grid grid-cols-4 gap-2">
            <div 
              v-for="(img, index) in product.images" 
              :key="index"
              class="bg-white rounded-md shadow cursor-pointer hover:ring-2 hover:ring-indigo-500 transition-all"
              @click="mainImage = img"
            >
              <img :src="img" class="w-full h-20 object-cover">
            </div>
          </div>
        </div>

        <!-- Product Info -->
        <div>
          <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ product.name }}</h1>
          <div class="flex items-center mb-4">
            <div class="flex items-center text-yellow-400 mr-2">
              <!-- Star ratings (you can implement this properly) -->
              <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span class="text-gray-600 text-sm">({{ product.reviews }} reviews)</span>
          </div>

          <p class="text-3xl font-bold text-indigo-600 mb-6">${{ product.price.toFixed(2) }}</p>

          <p class="text-gray-700 mb-6">{{ product.description }}</p>

          <!-- Size Selector -->
          <div class="mb-6">
            <h3 class="text-sm font-medium text-gray-900 mb-2">ជ្រើសរើសទំហំ</h3>
            <div class="flex flex-wrap gap-2">
              <button 
                v-for="size in ['S', 'M', 'L', 'XL']" 
                :key="size"
                @click="selectedSize = size"
                :class="[
                  'px-4 py-2 border rounded-md text-sm',
                  selectedSize === size 
                    ? 'bg-indigo-600 text-white border-indigo-600' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                ]"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <!-- Color Selector -->
          <div class="mb-8">
            <h3 class="text-sm font-medium text-gray-900 mb-2">ជ្រើសរើសពណ៌</h3>
            <div class="flex flex-wrap gap-2">
              <button 
                v-for="color in ['Black', 'White', 'Blue', 'Red']" 
                :key="color"
                @click="selectedColor = color"
                :class="[
                  'px-4 py-2 border rounded-md text-sm flex items-center',
                  selectedColor === color 
                    ? 'border-indigo-600 ring-2 ring-indigo-500' 
                    : 'border-gray-300 hover:bg-gray-50'
                ]"
              >
                <span 
                  class="w-4 h-4 rounded-full mr-2"
                  :style="{ backgroundColor: color.toLowerCase() }"
                ></span>
                {{ color }}
              </button>
            </div>
          </div>

          <!-- Quantity Selector -->
          <div class="mb-8">
            <h3 class="text-sm font-medium text-gray-900 mb-2">ចំនួន</h3>
            <div class="flex items-center">
              <button 
                @click="quantity > 1 ? quantity-- : null"
                class="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200"
              >
                -
              </button>
              <span class="px-4 py-1 border-t border-b border-gray-300 bg-white">
                {{ quantity }}
              </span>
              <button 
                @click="quantity++"
                class="px-3 py-1 border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <button
              @click="addToCart"
              class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              បញ្ចូលទំនិញក្នុងកន្ត្រៃ
            </button>
            <button
              @click="toggleFavorite"
              class="flex items-center justify-center gap-2 text-gray-700 hover:text-indigo-600 font-medium py-3 px-6 rounded-md border border-gray-300 hover:border-indigo-300 transition-colors"
            >
              <HeartIcon :class="isFavorite ? 'text-red-500' : 'text-gray-400'" class="w-5 h-5" />
              {{ isFavorite ? 'Remove from favorites' : 'Add to favorites' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Product Details Tabs -->
      <div class="mt-16">
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex space-x-8">
            <button 
              v-for="tab in tabs" 
              :key="tab.name"
              @click="activeTab = tab.name"
              :class="[
                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
                activeTab === tab.name
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              ]"
            >
              {{ tab.label }}
            </button>
          </nav>
        </div>
        <div class="py-6">
          <div v-if="activeTab === 'details'">
            <h3 class="text-lg font-medium text-gray-900 mb-4">ព័ត៌មានលម្អិត</h3>
            <p class="text-gray-700">{{ product.details || 'No additional details available' }}</p>
          </div>
          <div v-if="activeTab === 'reviews'">
            <h3 class="text-lg font-medium text-gray-900 mb-4">Reviews</h3>
            <!-- Reviews implementation would go here -->
            <p class="text-gray-500">No reviews yet</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useClothesStore } from '../stores/clothes'
import { HeartIcon } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'
import Navbar from '../components/Navbar.vue'

const route = useRoute()
const router = useRouter()
const clothesStore = useClothesStore()

const product = computed(() => {
  return clothesStore.clothes.find(item => item.id === parseInt(route.params.id))
})

const selectedSize = ref('M')
const selectedColor = ref('Black')
const quantity = ref(1)
const activeTab = ref('details')
const isFavorite = ref(false)

const tabs = [
  { name: 'details', label: 'ព័ត៌មានលម្អិត' },
  { name: 'reviews', label: 'ការវាយតម្លៃ' }
]

function addToCart() {
  const item = {
    ...product.value,
    size: selectedSize.value,
    color: selectedColor.value,
    quantity: quantity.value
  }
  clothesStore.addToCart(item)
  router.push('/cart') // Optional: redirect to cart
}

function toggleFavorite() {
  isFavorite.value = !isFavorite.value
  clothesStore.toggleFavorite(product.value.id)
}
</script>