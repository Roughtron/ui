import { defineComponent as x, useCssVars as _, computed as n, ref as w, toValue as f, onMounted as B, withDirectives as $, createElementBlock as S, openBlock as i, createElementVNode as p, vShow as C, createBlock as s, normalizeClass as v, resolveDynamicComponent as P, mergeProps as d, withCtx as X, createCommentVNode as g, renderSlot as y } from "vue";
const I = {
  class: "x-svg-icon",
  "aria-hidden": "true"
}, q = ["href", "fill"], A = "icon", m = /* @__PURE__ */ x({
  __name: "XSvgIcon",
  props: {
    name: {
      type: String,
      required: !0
    },
    color: {
      type: String,
      default: null
    },
    size: {
      type: [String, Array],
      default: "20px"
    }
  },
  setup(e) {
    _((l) => ({
      "78a9d942": u.value,
      fa7b55aa: h.value
    }));
    const t = w(!1), o = e, a = (l) => l.includes("px") ? l : `${l}px`, r = n(() => `#${A}-${o.name.toLowerCase()}`), c = n(() => {
      if (Array.isArray(o.size)) {
        const [b, k] = o.size;
        return {
          width: a(b),
          height: a(k)
        };
      }
      const l = a(o.size);
      return {
        width: l,
        height: l
      };
    }), u = n(() => f(c).width), h = n(() => f(c).height);
    return B(() => t.value = !0), (l, b) => $((i(), S("svg", I, [
      p("use", {
        href: r.value,
        fill: e.color
      }, null, 8, q)
    ], 512)), [
      [C, t.value]
    ]);
  }
}), L = /* @__PURE__ */ x({
  __name: "XLoader",
  props: {
    color: {
      type: String,
      default: "primary",
      validator: (e) => ["primary", "gray", "white"].includes(e)
    },
    size: {
      type: String,
      default: "s",
      validator: (e) => ["xs", "s", "m", "l"].includes(e)
    },
    mini: Boolean
  },
  setup(e) {
    const t = e, o = n(() => [
      "x-loader",
      `x-loader--color-${t.color}`,
      `x-loader--size-${t.size}`,
      { "x-loader--mini": t.mini }
    ]);
    return (a, r) => e.mini ? (i(), S("div", {
      key: 0,
      class: v(o.value)
    }, r[0] || (r[0] = [
      p("div", { class: "x-loader__dot" }, null, -1)
    ]), 2)) : (i(), s(m, {
      key: 1,
      class: v(o.value),
      name: "loader"
    }, null, 8, ["class"]));
  }
}), z = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, r] of t)
    o[a] = r;
  return o;
}, V = /* @__PURE__ */ z(L, [["__scopeId", "data-v-2e151827"]]), O = { class: "x-button__content" }, j = { class: "x-button__content-in" }, D = /* @__PURE__ */ x({
  __name: "XButton",
  props: {
    color: {
      type: String,
      default: "primary",
      validator: (e) => ["primary", "gray", "danger", "promo", "stripe", "white", "black"].includes(e)
    },
    size: {
      type: String,
      default: "s",
      validator: (e) => ["xxxs", "xxs", "xs", "s", "m", "l"].includes(e)
    },
    iconSize: {
      type: [String, Array]
    },
    iconProps: {
      type: Object
    },
    disabled: Boolean,
    to: [String, Object],
    href: String,
    target: {
      type: String,
      validator: (e) => ["_self", "_blank", "_top"].includes(e)
    },
    download: [String, Boolean],
    outline: Boolean,
    block: Boolean,
    loading: Boolean,
    icon: String,
    ghost: Boolean,
    text: Boolean,
    prepend: String,
    append: String,
    square: Boolean,
    round: Boolean,
    table: Boolean
  },
  setup(e) {
    const t = e, o = n(() => t.to ? "router-link" : t.href ? "a" : "button"), a = n(() => t.to ? { to: t.to } : t.href ? {
      href: t.href,
      target: t.target || (t.download || t.download === "" ? null : "_blank"),
      download: t.download
    } : null), r = n(
      () => [
        "x-button",
        "x-button--size-" + t.size,
        "x-button--" + t.color,
        {
          "x-button--block": t.block,
          "x-button--outline": t.outline,
          "x-button--ghost": t.ghost,
          "x-button--text": t.text,
          "x-button--loading": t.loading,
          "x-button--square": t.square,
          "x-button--round": t.round,
          "x-button--table": t.table
        }
      ]
    ), c = n(() => ["primary", "danger"].includes(t.color) ? "white" : "primary");
    return (u, h) => (i(), s(P(o.value), d({
      class: r.value,
      disabled: e.disabled
    }, a.value), {
      default: X(() => [
        p("div", O, [
          e.loading ? (i(), s(V, {
            key: 0,
            color: c.value,
            class: "x-button__loader",
            mini: ""
          }, null, 8, ["color"])) : g("", !0),
          p("div", j, [
            e.prepend ? (i(), s(m, d({
              key: 0,
              name: e.prepend,
              size: e.iconSize,
              class: "x-button__prepend"
            }, e.iconProps), null, 16, ["name", "size"])) : g("", !0),
            e.icon ? (i(), s(m, d({
              key: 1,
              name: e.icon,
              size: e.iconSize,
              class: "x-button__icon"
            }, e.iconProps), null, 16, ["name", "size"])) : y(u.$slots, "default", { key: 2 }, void 0, !0),
            e.append ? (i(), s(m, d({
              key: 3,
              name: e.append,
              size: e.iconSize,
              class: "x-button__append"
            }, e.iconProps), null, 16, ["name", "size"])) : g("", !0),
            y(u.$slots, "append", {}, void 0, !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "disabled"]));
  }
}), N = /* @__PURE__ */ z(D, [["__scopeId", "data-v-21cbac7a"]]);
export {
  N as XButton,
  V as XLoader,
  m as XSvgIcon
};
