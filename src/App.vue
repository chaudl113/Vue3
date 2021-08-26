<template>
  <component :is="layout" />
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";
import NetflixLayout from "./layouts/NetflixLayout.vue";

export default {
  components: {
    DefaultLayout,
    MainLayout,
    NetflixLayout,
  },
  data() {
    return {
      layout: null,
    };
  },
  watch: {
    $route(to) {
      console.log(this.layout);
      this.layout =
        to.meta.layout !== undefined ? to.meta.layout : "DefaultLayout";
    },
  },
};
</script>

