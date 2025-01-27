<script setup>
const props = defineProps({ title: String, content: String, image: String });
</script>
<template>
  <div class="container">
    <img :src="props.image" class="post-img" />
    <h1>{{ props.title }}</h1>
    <p>{{ props.content }}</p>
  </div>
</template>

<style scoped>
.post-img {
  width: 500px;
  height: 400px;
}
.container {
  width: 500px;
}
</style>
