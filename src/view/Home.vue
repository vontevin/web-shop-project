<template>
  <div class="relative min-h-screen">
    <!-- Full background image with overlay -->
    <div 
      class="fixed inset-0 -z-2 bg-cover bg-center bg-no-repeat"
      style="background-image: url('https://png.pngtree.com/thumb_back/fh260/back_our/20190614/ourmid/pngtree-happy-shopping-light-spot-poster-background-image_122448.jpg');"
    >
      <div class="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
    </div>
    
    <!-- Gradient overlay at top -->
    <div class="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50/70 via-white/50 to-blue-100/70"></div>
    
    <!-- Content -->
    <div class="relative">
      <Navbar />
      <HomeSection :slides="slides" />
      <ShopSection :clothes="clothes" :toggleFavorite="toggleFavorite" />
      <ContactSection />
    </div>
  </div>
</template>

<script setup>
import { useClothesStore } from '../stores/clothes';
import Navbar from '../components/Navbar.vue';
import HomeSection from '../components/HomeSection.vue';
import ShopSection from '../components/ShopSection.vue';
import ContactSection from '../components/ContactSection.vue';

const { clothes, slides, toggleFavorite } = useClothesStore();
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>