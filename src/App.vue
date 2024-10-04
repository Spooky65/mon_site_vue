
<template>
  <div class="wrapper">
    <Header>
      <component :is="currentView" />
    </Header>
    <body>
      <!-- <v-if :is="currentPath.value == '#/'"> -->
        <component :is="currentView" />
      <!-- </v-if> -->
    </body>
      <div id="body" class="bg-gray-900 text-white overflow-y-auto">
      </div>
    <Footer />
  </div>
</template>

<script setup>

import { ref, computed } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';


const routes = {
  '/': Portfolio,
  '/contact': Contact
}

var currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

tailwind.config = {
  theme: {
    extend: {},
  },
}
</script>

<style scoped>
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: var(--vt-c-black);
    --color-background-soft: var(--vt-c-black-soft);
    --color-background-mute: var(--vt-c-black-mute);

    --color-border: var(--vt-c-divider-dark-2);
    --color-border-hover: var(--vt-c-divider-dark-1);

    --color-heading: var(--vt-c-text-dark-1);
    --color-text: var(--vt-c-text-dark-2);
  }
}
  body {
    margin-top: 6rem;
    background: linear-gradient(0deg, #1c71d8 0%, #1a5fb4 25%, rgb(17 24 39) 90%);    color: white;
  }
</style>
