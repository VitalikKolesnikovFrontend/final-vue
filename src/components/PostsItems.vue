<script setup>
import { usePostsStore } from "@/stores/PostsStore";
import PostsList from "./PostsList.vue";

const store = usePostsStore();
</script>

<template>
  <div class="container">
    <li class="post-list" v-for="item in store.posts" :key="item.id">
      <PostsList
        :title="item.title"
        :content="item.content"
        :image="item.image"
      />
    </li>
  </div>
</template>

<style scoped>
.post-list {
  list-style-type: none;
  margin-bottom: 5px;
  min-height: 885px;
  border: 1px solid grey;
  padding: 10px;
  margin-top: 80px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: space-around;
}
</style>
