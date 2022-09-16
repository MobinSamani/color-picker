<template>
  <div class="flex flex-col gap-y-4">
    <slot name="label">
      <div class="block text-gray-700 text-sm font-bold">{{ label }}:</div>
    </slot>

    <div class="relative">
      <div class="rounded border border-gray-300 p-1">
        <button class="rounded flex items-center justify-center p-1 cursor-pointer w-full" :style="`background-color: ${model}`" @click="toggleShow">
          <div class="bg-white rounded-lg text-sm py-1 px-2">
            {{ model }}
          </div>
        </button>

        <div v-show="show" class="bg-white shadow-lg rounded p-4 absolute inset-x-0 top-[53px] z-10 flex flex-col gap-y-4">
          <div v-if="colors && colors.length" class="flex flex-wrap gap-2">
            <div
              v-for="color in colors"
              :key="color"
              class="w-[33px] h-[33px] rounded-lg cursor-pointer"
              :title="color"
              :style="`background-color: ${color}`"
              @click="setColor(color)"
            ></div>
          </div>

          <div class="flex items-center gap-x-4">
            <div class="text-gray-700 text-sm">Custom Color:</div>
            <input :id="name" type="color" class="grow rounded overflow-hidden" v-model="model" @change="toggleShow" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vModel from "../mixins/vModel.vue";

export default {
  name: "Color Picker",
  mixins: [vModel],
  props: {
    label: { type: String, default: "Color" },
    colors: {
      type: Array,
      default: () => [
        "#64748b",
        "#ef4444",
        "#f97316",
        "#f59e0b",
        "#eab308",
        "#84cc16",
        "#22c55e",
        "#10b981",
        "#14b8a6",
        "#06b6d4",
        "#0ea5e9",
        "#3b82f6",
        "#6366f1",
        "#8b5cf6",
        "#a855f7",
        "#d946ef",
        "#ec4899",
        "#f43f5e"
      ]
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    setColor(value) {
      this.model = value;
      this.toggleShow();
    }
  }
};
</script>
