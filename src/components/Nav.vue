<template>
  <div class="px-60">
    <nav class="flex justify-between mb-4 text-center p-5">
      <router-link
        :to="routes[0].path"
        class="flex text-dark text-decoration-none gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          viewBox="0 0 261.76 226.69"
        >
          <path
            d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z"
            fill="#41b883"
          />
          <path
            d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z"
            fill="#34495e"
          />
        </svg>
        <sup
          ><small class="badge rounded-full bg-green-500 py-1 px-2 text-white"
            >3</small
          ></sup
        >
        <svg
          height="32"
          viewBox="0 0 410 404"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z"
            fill="url(#paint1_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="6.00017"
              y1="32.9999"
              x2="235"
              y2="344"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#41D1FF" />
              <stop offset="1" stop-color="#BD34FE" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="194.651"
              y1="8.81818"
              x2="236.076"
              y2="292.989"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFEA83" />
              <stop offset="0.0833333" stop-color="#FFDD35" />
              <stop offset="1" stop-color="#FFA800" />
            </linearGradient>
          </defs>
        </svg>
        <sup
          ><small class="badge rounded-full bg-green-500 py-1 px-2 text-white"
            >1</small
          ></sup
        >
        <svg
          height="32"
          viewBox="0 0 256 154"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid"
        >
          <defs>
            <linearGradient
              x1="-2.77777778%"
              y1="32%"
              x2="100%"
              y2="67.5555556%"
              id="linearGradient-1"
            >
              <stop stop-color="#2298BD" offset="0%"></stop>
              <stop stop-color="#0ED7B5" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g>
            <path
              d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z"
              fill="url(#linearGradient-1)"
            ></path>
          </g>
        </svg>
        <sup
          ><small class="badge rounded-full bg-green-500 py-1 px-2 text-white"
            >2</small
          ></sup
        >
      </router-link>
      <button
        class="navbar-toggler border-0 shadow-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto flex gap-4">
          <li
            class="nav-item text-uppercase"
            v-for="route in routes"
            :key="route.path"
          >
            <router-link
              :to="route.path"
              class="nav-link hover:text-yellow-600"
              :title="route.name"
              :class="{ active: isActive(route.path) }"
            >
              <i class="bi bi-house-fill" v-if="route.path === '/'"></i>
              {{ route.path !== "/" ? route.name : "" }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { routes as rts } from "../router";

export default {
  setup() {
    const routes = rts;

    const router = useRouter();
    const activeRoute = computed(() => router.currentRoute.value.path);
    const isActive = (path) => path === activeRoute.value;

    return { isActive, routes };
  },
};
</script>

<style lang="scss" scoped>
$blc: #000;
$lblc: rgba($blc, 0.65);

a {
  text-decoration: none;
  color: $lblc;
  transition: all 0.25s;
}

ul {
  list-style: none;
}
</style>
