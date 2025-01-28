<script setup>
import { ref, watch } from "vue";

const props = defineProps({ visible: Boolean });
const localVisible = ref(props.visible);

watch(
  () => props.visible,
  (newValue) => (localVisible.value = newValue)
);

const emit = defineEmits(["update:visible"]);

const closeModal = () => {
  localVisible.value = false;
  emit("update:visible", false);
};
</script>
<template>
  <div class="card flex justify-center">
    <Dialog
      v-model:visible="localVisible"
      modal
      :closable="false"
      header="Registration/Authorization"
      :style="{ width: '25rem' }"
      class="custom-dialog"
    >
      <div class="flex items-center gap-4 mb-4">
        <label style="margin: 10px" for="username" class="font-semibold w-24"
          >Login</label
        >
        <InputText id="username" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex items-center gap-4 mb-4">
        <label style="margin: 15px" for="username" class="font-semibold w-24"
          >Pass</label
        >
        <InputText
          type="password"
          id="password"
          class="flex-auto"
          autocomplete="off"
        />
      </div>
      <div class="flex items-center gap-4 mb-8">
        <label style="margin: 10px" for="email" class="font-semibold w-24"
          >Email</label
        >
        <InputText id="email" class="flex-auto" autocomplete="off" />
      </div>
      <div class="flex justify-end gap-2">
        <Button
          style="margin: 10px"
          type="button"
          label="Cancel"
          severity="secondary"
          @click="closeModal"
        ></Button>
        <Button type="button" label="Save" @click="closeModal"></Button>
      </div>
    </Dialog>
  </div>
</template>

<style scoped></style>
