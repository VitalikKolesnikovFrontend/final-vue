<script setup>
// import { ref } from "vue";
import AppModal from "./AppModal.vue";
import { useModalStore } from "@/stores/ModalStore";

// const visible = ref(false);
const store = useModalStore();
console.log(store.modal);

//----------------------------
</script>
<template>
  <div class="app-header">
    <h1 class="header-title">Vue News App</h1>
    <div class="header-auth">
      <Button @click="store.modal = true" class="header-button">SIGN UP</Button>
      <Button @click="store.modal = true" class="header-button">SIGN IN</Button>
    </div>
  </div>
  <AppModal
    :visible="store.modal"
    @update:visible="(value) => (store.modal = value)"
  />
</template>

<style scoped>
.app-header {
  width: 100%;
  height: 70px;
  background-color: rgb(100, 206, 126);
  position: fixed;
  display: flex;
  justify-content: space-between;
}
.header-title {
  margin-left: 20px;
  color: aliceblue;
}
.header-auth {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.header-button {
  border: none;
  background-color: inherit;
  color: aliceblue;
  cursor: pointer;
}
</style>
