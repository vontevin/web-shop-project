<template>
    <section id="contact" class="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white mt-5">
        <!-- Decorative elements -->
        <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        
        <div class="max-w-7xl mx-auto">
            <!-- Section header -->
            <div class="text-center mb-16">
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    ទំនាក់ទំនងជាមួយ<span class="text-indigo-600">ពួកយើង</span>
                </h2>
                <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                    យើងតែងតែរីករាយក្នុងការឮពីអ្នក! ទាក់ទងមកពួកយើងតាមរយៈវិធីណាមួយដែលអ្នកចូលចិត្ត។
                </p>
            </div>

            <!-- Contact methods grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <!-- Phone -->
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2 text-center">ទូរស័ព្ទ</h3>
                    <p class="text-gray-600 text-center mb-4">អាចទាក់ទងពេលវេលា 8:00 AM - 8:00 PM</p>
                    <a href="tel:0719350335" class="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors duration-200 block text-center">088 934 1111</a>
                </div>

                <!-- Telegram -->
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M21.3 3.7l-6.3 19c-.2.6-.9.8-1.4.4l-5.8-4.5-3.1 3c-.3.3-.9 0-.9-.4v-4.3l11.8-11.3c.2-.2-.1-.5-.3-.3L5.1 14.2l-3.7-1.9c-.5-.2-.5-.9.1-1.1l19.2-7.6c.5-.3 1.1.2.9.8z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2 text-center">Telegram</h3>
                    <p class="text-gray-600 text-center mb-4">សាររហ័ស និងងាយស្រួលបំផុត</p>
                    <a href="https://t.me/clpus" target="_blank" class="inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-colors duration-200 mx-auto" style="margin-left: 35px;">
                        ជាប់ទាក់ទងតាម Telegram
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>

                <!-- Email -->
                <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div class="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2 text-center">អ៊ីមែល</h3>
                    <p class="text-gray-600 text-center mb-4">ឆ្លើយតបយ៉ាងរហ័សក្នុង 24ម៉ោង</p>
                    <a href="mailto:info@clothingstore.com" class="text-xl font-medium text-pink-600 hover:text-pink-700 transition-colors duration-200 block text-center">linechhan1988@gmail.com</a>
                </div>
            </div>

            <!-- Copyright -->
            <div class="mt-16 pt-8 border-t border-gray-200 text-center">
                <p class="text-gray-500">
                    រក្សារសិទ្ធ© 2025, <span class="text-indigo-600 font-medium">Lay Chhun Shop</span>. រក្សារ​សិទ្ធិ​គ្រប់​យ៉ាង។
                </p>
                <p class="text-gray-400 text-sm mt-2">
                    ពួកយើងទទួលការបង់ប្រាក់តាម ABA, Wing, និងទូរទានផ្សេងៗ
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
/* Smooth hover transitions */
a, button {
    transition: all 0.3s ease;
}

/* Custom shadow for cards */
.shadow-lg {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.hover\:shadow-xl:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>