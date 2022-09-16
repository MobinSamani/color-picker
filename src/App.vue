<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-8">
    <div class="flex flex-col gap-y-8 w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4">
      <div class="flex items-center justify-center gap-2 flex-wrap text-center">
        <div class="text-gray-600">A Vue Color Picker Component by</div>

        <a class="font-bold" href="https://MobinSamani.com" target="_blank">MobinSamani.com</a>
      </div>

      <div class="bg-white shadow rounded-lg p-8">
        <div class="flex flex-col gap-y-8">
          <div class="flex flex-col gap-y-4 opacity-25">
            <label for="firstName" class="block text-gray-700 text-sm font-bold">First Name</label>

            <input id="firstName" disabled class="rounded border border-gray-300 p-2 outline-none" type="text" placeholder="Edward" />
          </div>

          <div class="flex flex-col gap-y-4 opacity-25">
            <label for="lastName" class="block text-gray-700 text-sm font-bold">Last Name</label>

            <input id="lastName" disabled class="rounded border border-gray-300 p-2 outline-none" type="text" placeholder="Edward" />
          </div>

          <color-picker label="Favorite Color" v-model="color" />

          <button disabled class="bg-blue-900 text-white rounded p-2 opacity-25">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ColorPicker from "./components/color-picker.vue";

export default {
  name: "App",
  components: {
    ColorPicker
  },
  data() {
    return {
      color: "#8b5cf6"
    };
  }
};
</script>
