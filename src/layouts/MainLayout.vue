<template>
    <Nav />

    <main class="px-60 flex-shrink-0 mb-4">
        <router-view />
    </main>

    <footer class="px-60 footer mb-2 mt-auto">
        <div class="border-top py-3">
            &copy; How
            <Refs />
        </div>
    </footer>
</template>

<script>
    import Nav from "../components/Nav.vue";
    import Refs from "../components/Refs.vue";

    export default {
        name: "MainLayout",
        components: {
            Nav,
            Refs,
        },
    };
</script>
