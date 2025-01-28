<script setup>
const props = defineProps({
  title: String,
  content: String,
  image: String,
  author: String,
});
</script>
<template>
  <div class="container">
    <img :src="props.image" class="post-img" />
    <a style="margin-top: 15px" href="#">{{ props.author }}</a>
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
