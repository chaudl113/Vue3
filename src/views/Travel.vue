<template>
  <div class="pt-12">
    <h1 class="text-center text-black text-4xl font-semibold mb-5">
      Live anywhere
    </h1>
    <h2 class="text-center font-light text-xl text-gray-500 mb-10">
      Keep calm & travel on
    </h2>
    <div class="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div v-for="(item, index) in 3" :key="index">
        <div class="h-96 mb-5">
          <img
            class="w-full h-full rounded-lg object-cover"
            src="https://images.unsplash.com/photo-1615303927577-ceb34ac3997a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            alt=""
          />
        </div>
        <h3 class="text-center font-medium text-lg mb-3">
          Enjoy th great cold
        </h3>
        <span class="block text-center text-gray-400 text-sm">
          6,879 properties
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>