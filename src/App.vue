<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white shadow rounded-lg p-8">
      <color-picker />
    </div>
  </div>
</template>

<script>
import ColorPicker from "./components/color-picker.vue";

export default {
  name: "App",
  components: {
    ColorPicker
  }
};
</script>
