<script setup lang="ts">

const {id} = defineProps<{ id: string }>();

</script>

<template>
  <section>
    <h1>{{ id }}</h1>
  </section>
</template>

<style scoped></style>
