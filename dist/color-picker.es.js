import { openBlock as n, createElementBlock as a, renderSlot as g, createElementVNode as e, toDisplayString as u, normalizeStyle as p, withDirectives as f, Fragment as b, renderList as h, createCommentVNode as _, vModelText as x, vShow as y, resolveComponent as v, createVNode as w, createStaticVNode as k } from "vue";
const C = {
  props: ["modelValue"],
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(o) {
        this.$emit("update:modelValue", o);
      }
    }
  }
}, m = (o, l) => {
  const s = o.__vccOpts || o;
  for (const [c, r] of l)
    s[c] = r;
  return s;
}, S = {
  name: "Color Picker",
  mixins: [C],
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
      show: !1
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    setColor(o) {
      this.model = o, this.toggleShow();
    }
  }
}, V = { class: "flex flex-col gap-y-4" }, $ = { class: "block text-gray-700 text-sm font-bold" }, N = { class: "relative" }, A = { class: "rounded border border-gray-300 p-1" }, E = { class: "bg-white rounded-lg text-sm py-1 px-2" }, j = { class: "bg-white shadow-lg rounded p-4 absolute inset-x-0 top-[53px] z-10 flex flex-col gap-y-4" }, F = {
  key: 0,
  class: "flex flex-wrap gap-2"
}, M = ["title", "onClick"], P = { class: "flex items-center gap-x-4" }, z = /* @__PURE__ */ e("div", { class: "text-gray-700 text-sm" }, "Custom Color:", -1);
function B(o, l, s, c, r, d) {
  return n(), a("div", V, [
    g(o.$slots, "label", {}, () => [
      e("div", $, u(s.label) + ":", 1)
    ]),
    e("div", N, [
      e("div", A, [
        e("button", {
          class: "rounded flex items-center justify-center p-1 cursor-pointer w-full",
          style: p(`background-color: ${o.model}`),
          onClick: l[0] || (l[0] = (...t) => d.toggleShow && d.toggleShow(...t))
        }, [
          e("div", E, u(o.model), 1)
        ], 4),
        f(e("div", j, [
          s.colors && s.colors.length ? (n(), a("div", F, [
            (n(!0), a(b, null, h(s.colors, (t) => (n(), a("div", {
              key: t,
              class: "w-[33px] h-[33px] rounded-lg cursor-pointer",
              title: t,
              style: p(`background-color: ${t}`),
              onClick: (i) => d.setColor(t)
            }, null, 12, M))), 128))
          ])) : _("", !0),
          e("div", P, [
            z,
            f(e("input", {
              type: "color",
              class: "grow rounded overflow-hidden",
              "onUpdate:modelValue": l[1] || (l[1] = (t) => o.model = t),
              onChange: l[2] || (l[2] = (...t) => d.toggleShow && d.toggleShow(...t))
            }, null, 544), [
              [x, o.model]
            ])
          ])
        ], 512), [
          [y, r.show]
        ])
      ])
    ])
  ]);
}
const D = /* @__PURE__ */ m(S, [["render", B]]), L = {
  name: "App",
  components: {
    ColorPicker: D
  },
  data() {
    return {
      color: "#8b5cf6"
    };
  }
}, U = { class: "min-h-screen bg-gray-100 flex items-center justify-center p-8" }, O = { class: "flex flex-col gap-y-8 w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4" }, T = /* @__PURE__ */ e("div", { class: "flex items-center justify-center gap-x-2" }, [
  /* @__PURE__ */ e("div", { class: "text-gray-600" }, "A Vue Color Picker Component by"),
  /* @__PURE__ */ e("a", {
    class: "font-bold",
    href: "https://MobinSamani.com",
    target: "_blank"
  }, "MobinSamani.com")
], -1), q = { class: "bg-white shadow rounded-lg p-8" }, G = { class: "flex flex-col gap-y-8" }, H = /* @__PURE__ */ k('<div class="flex flex-col gap-y-4 opacity-25"><label for="firstName" class="block text-gray-700 text-sm font-bold">First Name</label><input id="firstName" disabled class="rounded border border-gray-300 p-2 outline-none" type="text" placeholder="Edward"></div><div class="flex flex-col gap-y-4 opacity-25"><label for="lastName" class="block text-gray-700 text-sm font-bold">Last Name</label><input id="lastName" disabled class="rounded border border-gray-300 p-2 outline-none" type="text" placeholder="Edward"></div>', 2), I = /* @__PURE__ */ e("button", {
  disabled: "",
  class: "bg-blue-900 text-white rounded p-2 opacity-25"
}, "Submit", -1);
function J(o, l, s, c, r, d) {
  const t = v("color-picker");
  return n(), a("div", U, [
    e("div", O, [
      T,
      e("div", q, [
        e("div", G, [
          H,
          w(t, {
            label: "Favorite Color",
            modelValue: r.color,
            "onUpdate:modelValue": l[0] || (l[0] = (i) => r.color = i)
          }, null, 8, ["modelValue"]),
          I
        ])
      ])
    ])
  ]);
}
const Q = /* @__PURE__ */ m(L, [["render", J]]);
export {
  Q as default
};
