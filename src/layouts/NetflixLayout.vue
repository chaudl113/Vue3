<template>
  <Header />
  <main class="">
    <router-view />
  </main>
</template>

<script>
import Header from "../@core/netflix/components/Header.vue";

export default {
  name: "NetflixLayout",
  components: {
    Header,
  },
};
</script>
