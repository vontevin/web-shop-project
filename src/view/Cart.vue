<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button
        @click="$router.go(-1)"
        class="flex items-center text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
        ត្រឡប់ក្រោយ
      </button>
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div v-if="cartItems.length > 0" class="space-y-8">
        <!-- Cart Items -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <ul class="divide-y divide-gray-200">
            <li
              v-for="item in cartItems"
              :key="item.id"
              class="p-6 flex items-center space-x-4"
            >
              <img
                :src="item.image"
                :alt="item.name"
                class="w-20 h-20 object-cover rounded-lg"
              />

              <div class="flex-1">
                <h3 class="text-lg font-medium text-gray-900">
                  {{ item.name }}
                </h3>
                <p class="text-sm text-gray-500">
                  Size: {{ item.size }}, Color: {{ item.color }}
                </p>
                <p class="text-indigo-600 font-medium">
                  ${{ item.price.toFixed(2) }}
                </p>
              </div>

              <div class="flex items-center space-x-4">
                <div class="flex items-center border rounded-lg">
                  <button
                    @click="updateQuantity(item, -1)"
                    class="px-3 py-1 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span class="px-3 py-1">{{ item.quantity }}</span>
                  <button
                    @click="updateQuantity(item, 1)"
                    class="px-3 py-1 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  @click="removeItem(item)"
                  class="text-red-500 hover:text-red-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <!-- Add this before the Cart Summary section -->
        <div class="bg-white rounded-lg shadow p-6 mb-8">
          <h2 class="text-xl font-bold text-gray-900 mb-6">Shipping Details</h2>
          <form class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  v-model="shippingDetails.fullName"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  v-model="shippingDetails.phone"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Street Address
              </label>
              <input
                type="text"
                v-model="shippingDetails.address"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  v-model="shippingDetails.city"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Province
                </label>
                <select
                  v-model="shippingDetails.province"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">Select a province</option>
                  <option value="Phnom Penh">ភ្នំពេញ / Phnom Penh</option>
                  <option value="Kandal">កណ្តាល / Kandal</option>
                  <option value="Siem Reap">សៀមរាប / Siem Reap</option>
                  <option value="Battambang">បាត់ដំបង / Battambang</option>
                  <option value="Kampong Cham">កំពង់ចាម / Kampong Cham</option>
                  <option value="Kampong Speu">កំពង់ស្ពឺ / Kampong Speu</option>
                  <option value="Kampong Thom">កំពង់ធំ / Kampong Thom</option>
                  <option value="Kampot">កំពត / Kampot</option>
                  <option value="Kep">កែប / Kep</option>
                  <option value="Koh Kong">កោះកុង / Koh Kong</option>
                  <option value="Kratie">ក្រចេះ / Kratie</option>
                  <option value="Mondulkiri">មណ្ឌលគិរី / Mondulkiri</option>
                  <option value="Oddar Meanchey">
                    ឧត្តរមានជ័យ / Oddar Meanchey
                  </option>
                  <option value="Pailin">ប៉ៃលិន / Pailin</option>
                  <option value="Preah Vihear">ព្រះវិហារ / Preah Vihear</option>
                  <option value="Prey Veng">ព្រៃវែង / Prey Veng</option>
                  <option value="Pursat">ពោធិ៍សាត់ / Pursat</option>
                  <option value="Ratanakiri">រតនគិរី / Ratanakiri</option>
                  <option value="Sihanoukville">
                    ព្រះសីហនុ / Sihanoukville
                  </option>
                  <option value="Stung Treng">ស្ទឹងត្រែង / Stung Treng</option>
                  <option value="Svay Rieng">ស្វាយរៀង / Svay Rieng</option>
                  <option value="Takeo">តាកែវ / Takeo</option>
                  <option value="Tbong Khmum">ត្បូងឃ្មុំ / Tbong Khmum</option>
                  <option value="Banteay Meanchey">
                    បន្ទាយមានជ័យ / Banteay Meanchey
                  </option>
                  <option value="Kampong Chhnang">
                    កំពង់ឆ្នាំង / Kampong Chhnang
                  </option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Shipping Method
                </label>
                <select
                    v-model="shippingDetails.shippingMethod"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                >
                    <option value="">Select a shipping method</option>
                    <option value="j&t">J&T Express (ជេ អិន ធី)</option>
                    <option value="nham24">NHAM24 (ញ៉ាំ២៤)</option>
                    <option value="foodpanda">FoodPanda (ហ្វូដផាន់ដា)</option>
                    <option value="kerry">Kerry Express (ខឺរី)</option>
                    <option value="nationwide">Nationwide Express (ណេសិនវ៉ាយ)</option>
                    <option value="grab">Grab Express (ក្រាប់)</option>
                    <option value="rapid">Rapid Express (រ៉ាពីដ)</option>
                    <option value="aba">ABA MasterCard (អេប៊ីអេ ម៉ាស្ទ័រកាត)</option>
                    <option value="wing">Wing (វីង)</option>
                </select>
                </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes
              </label>
              <textarea
                v-model="shippingDetails.notes"
                rows="3"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
          </form>
        </div>
        <!-- Cart Summary -->
        <div class="bg-white rounded-lg shadow p-6">
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-600">Subtotal</span>
              <span class="font-medium">${{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Shipping</span>
              <span class="font-medium">$10.00</span>
            </div>
            <div class="border-t pt-2 flex justify-between">
              <span class="text-lg font-medium">Total</span>
              <span class="text-lg font-bold"
                >${{ (subtotal + 10).toFixed(2) }}</span
              >
            </div>
          </div>

          <button
            @click="handleCheckout"
            class="mt-6 w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      <div v-else class="text-center py-12">
        <h2 class="text-2xl font-medium text-gray-900 mb-4">
          Your cart is empty
        </h2>
        <p class="text-gray-500 mb-8">
          Add some items to your cart to continue shopping.
        </p>
        <router-link
          to="/"
          class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Continue Shopping
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useClothesStore } from '../stores/clothes';
import Navbar from '../components/Navbar.vue';

const router = useRouter();
const clothesStore = useClothesStore();

const cartItems = computed(() => clothesStore.cart);
const subtotal = computed(() =>
  cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
);

function updateQuantity(item, change) {
  if (item.quantity + change > 0) {
    item.quantity += change;
  }
}
const shippingDetails = ref({
  fullName: '',
  phone: '',
  address: '',
  city: '',
  province: '',
  shippingMethod: '',
  notes: '',
});
function handleCheckout() {
  const orderSummary = {
    orderId: Date.now(),
    items: cartItems.value.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      total: item.price * item.quantity,
      image: item.image,
    })),
    subtotal: subtotal.value,
    shipping: 10,
    total: subtotal.value + 10,
    date: new Date().toISOString(),
    shippingDetails: shippingDetails.value, // Add shipping details
  };

  // Update the formatted order to include shipping details
  const formattedOrder = `
    🛍️ New Order #${orderSummary.orderId}
    📅 ${new Date(orderSummary.date).toLocaleString()}

    👤 Customer Details:
    Name: ${shippingDetails.value.fullName}
    Phone: ${shippingDetails.value.phone}
    Address: ${shippingDetails.value.address}
    City: ${shippingDetails.value.city}
    Province: ${shippingDetails.value.province}
    Shipping Method: ${shippingDetails.value.shippingMethod}
    Notes: ${shippingDetails.value.notes}

    📦 Items:
    ${orderSummary.items
    .map(
        (item) => `
    - ${item.name}
    Quantity: ${item.quantity}
    Price: $${item.price}
    Total: $${item.total}
    Image: ${item.image}`
    )
    .join('\n')}

    💰 Summary:
    Subtotal: $${orderSummary.subtotal}
    Shipping: $${orderSummary.shipping}
    Total: $${orderSummary.total}
    `;
    // Save formatted order to local storage
        localStorage.setItem('lastOrder', formattedOrder)
        
        // Encode the message for URL
        const encodedMessage = encodeURIComponent(formattedOrder)
        
        // Navigate to Telegram with formatted message
        window.location.href = `https://t.me/clpus?text=${encodedMessage}`
}
function removeItem(item) {
  const index = cartItems.value.indexOf(item);
  if (index > -1) {
    cartItems.value.splice(index, 1);
  }
}
</script>

<style scoped>  
</style>