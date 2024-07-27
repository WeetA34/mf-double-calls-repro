<template>
  <div id="datecontainer">Date is {{ value }}</div>
</template>
<script lang="ts" setup>
const value = new Date().toISOString();
</script>
<style scoped>
#datecontainer {
  color: green;
}
</style>