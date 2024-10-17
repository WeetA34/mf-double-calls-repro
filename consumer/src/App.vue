<template>
  <div class="content">
    <h1>Rsbuild with Vue</h1>
    <p>Start building amazing things with Rsbuild.</p>
    <MyDate />
</div>
</template>

<script setup lang="ts">
import {
  loadRemote,
  registerRemotes,
} from '@module-federation/enhanced/runtime';
import { defineAsyncComponent } from 'vue';
import ErrorComponent from './ErrorComponent.vue';

declare global {
  interface Window {
    __PRODUCER_PUBLIC_PATH__: string;
  }
}

registerRemotes([
  {
    name: 'producer',
    entry: `${window.__PRODUCER_PUBLIC_PATH__}mf-manifest.json`,
  },
]);

const MyDate = defineAsyncComponent({
  loader: () => loadRemote('producer/date'),
  errorComponent: ErrorComponent,
  timeout: 3000
});
</script>

<style scoped>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>
