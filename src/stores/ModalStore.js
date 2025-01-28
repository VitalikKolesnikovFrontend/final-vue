import { defineStore } from "pinia";

export const useModalStore = defineStore("modalStore", {
  state: () => ({
    modal: false,
  }),
});
