import { defineComponent as w, useCssVars as R, computed as d, ref as L, toValue as h, onMounted as j, withDirectives as q, createElementBlock as y, openBlock as a, createElementVNode as _, vShow as F, createBlock as f, normalizeClass as E, resolveDynamicComponent as V, mergeProps as S, withCtx as $, createCommentVNode as c, renderSlot as p, onActivated as G, onDeactivated as K, onBeforeUnmount as M, inject as H, createVNode as k, createTextVNode as C, toDisplayString as z, unref as J, withKeys as Q, Transition as X, KeepAlive as W, Suspense as Y, shallowRef as A, getCurrentInstance as Z, createApp as ee, h as T } from "vue";
const te = {
  class: "x-svg-icon",
  "aria-hidden": "true"
}, oe = ["href", "fill"], ne = "icon", B = /* @__PURE__ */ w({
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
    R((i) => ({
      "5b2334e1": u.value,
      21172528: m.value
    }));
    const t = L(!1), n = e, s = (i) => i.includes("px") ? i : `${i}px`, o = d(() => `#${ne}-${n.name.toLowerCase()}`), l = d(() => {
      if (Array.isArray(n.size)) {
        const [v, g] = n.size;
        return {
          width: s(v),
          height: s(g)
        };
      }
      const i = s(n.size);
      return {
        width: i,
        height: i
      };
    }), u = d(() => h(l).width), m = d(() => h(l).height);
    return j(() => t.value = !0), (i, v) => q((a(), y("svg", te, [
      _("use", {
        href: o.value,
        fill: e.color
      }, null, 8, oe)
    ], 512)), [
      [F, t.value]
    ]);
  }
}), se = /* @__PURE__ */ w({
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
    const t = e, n = d(() => [
      "x-loader",
      `x-loader--color-${t.color}`,
      `x-loader--size-${t.size}`,
      { "x-loader--mini": t.mini }
    ]);
    return (s, o) => e.mini ? (a(), y("div", {
      key: 0,
      class: E(n.value)
    }, o[0] || (o[0] = [
      _("div", { class: "x-loader__dot" }, null, -1)
    ]), 2)) : (a(), f(B, {
      key: 1,
      class: E(n.value),
      name: "loader"
    }, null, 8, ["class"]));
  }
}), P = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, N = /* @__PURE__ */ P(se, [["__scopeId", "data-v-cefde415"]]), ie = { class: "x-button__content" }, le = { class: "x-button__content-in" }, ae = /* @__PURE__ */ w({
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
    const t = e, n = d(() => t.to ? "router-link" : t.href ? "a" : "button"), s = d(() => t.to ? { to: t.to } : t.href ? {
      href: t.href,
      target: t.target || (t.download || t.download === "" ? null : "_blank"),
      download: t.download
    } : null), o = d(
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
    ), l = d(() => ["primary", "danger"].includes(t.color) ? "white" : "primary");
    return (u, m) => (a(), f(V(n.value), S({
      class: o.value,
      disabled: e.disabled
    }, s.value), {
      default: $(() => [
        _("div", ie, [
          e.loading ? (a(), f(N, {
            key: 0,
            color: l.value,
            class: "x-button__loader",
            mini: ""
          }, null, 8, ["color"])) : c("", !0),
          _("div", le, [
            e.prepend ? (a(), f(B, S({
              key: 0,
              name: e.prepend,
              size: e.iconSize,
              class: "x-button__prepend"
            }, e.iconProps), null, 16, ["name", "size"])) : c("", !0),
            e.icon ? (a(), f(B, S({
              key: 1,
              name: e.icon,
              size: e.iconSize,
              class: "x-button__icon"
            }, e.iconProps), null, 16, ["name", "size"])) : p(u.$slots, "default", { key: 2 }, void 0, !0),
            e.append ? (a(), f(B, S({
              key: 3,
              name: e.append,
              size: e.iconSize,
              class: "x-button__append"
            }, e.iconProps), null, 16, ["name", "size"])) : c("", !0),
            p(u.$slots, "append", {}, void 0, !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "disabled"]));
  }
}), D = /* @__PURE__ */ P(ae, [["__scopeId", "data-v-2269c40d"]]);
/*!
 * vue-global-events v3.0.1
 * (c) 2019-2023 Eduardo San Martin Morote, Damian Dulisz
 * Released under the MIT License.
 */
let I;
function re() {
  return I ?? (I = /msie|trident/.test(window.navigator.userAgent.toLowerCase()));
}
const ce = /^on(\w+?)((?:Once|Capture|Passive)*)$/, ue = /[OCP]/g;
function de(e) {
  return e ? re() ? e.includes("Capture") : e.replace(ue, ",$&").toLowerCase().slice(1).split(",").reduce((n, s) => (n[s] = !0, n), {}) : void 0;
}
const me = w({
  name: "GlobalEvents",
  props: {
    target: {
      type: String,
      default: "document"
    },
    filter: {
      type: [Function, Array],
      default: () => () => !0
    },
    // global event options
    stop: Boolean,
    prevent: Boolean
    // Cannot be implemented because we don't have access to other modifiers at runtime
    // exact: Boolean,
  },
  setup(e, { attrs: t }) {
    let n = /* @__PURE__ */ Object.create(null);
    const s = L(!0);
    return G(() => {
      s.value = !0;
    }), K(() => {
      s.value = !1;
    }), j(() => {
      Object.keys(t).filter((o) => o.startsWith("on")).forEach((o) => {
        const l = t[o], u = Array.isArray(l) ? l : [l], m = o.match(ce);
        if (!m) {
          __DEV__ && console.warn(
            `[vue-global-events] Unable to parse "${o}". If this should work, you should probably open a new issue on https://github.com/shentao/vue-global-events.`
          );
          return;
        }
        let [, i, v] = m;
        i = i.toLowerCase();
        const g = u.map(
          (b) => (r) => {
            const O = Array.isArray(e.filter) ? e.filter : [e.filter];
            s.value && O.every((U) => U(r, b, i)) && (e.stop && r.stopPropagation(), e.prevent && r.preventDefault(), b(r));
          }
        ), x = de(v);
        g.forEach((b) => {
          window[e.target].addEventListener(
            i,
            b,
            x
          );
        }), n[o] = [
          g,
          i,
          x
        ];
      });
    }), M(() => {
      for (const o in n) {
        const [l, u, m] = n[o];
        l.forEach((i) => {
          window[e.target].removeEventListener(u, i, m);
        });
      }
      n = {};
    }), () => null;
  }
}), ge = me, fe = () => ({ $dialog: H("$dialog") }), pe = ["data-test-id"], ve = { class: "x-dialog__in" }, be = ["title"], he = { class: "x-dialog__content-container" }, ye = {
  key: 0,
  class: "x-dialog__description"
}, xe = {
  key: 1,
  class: "x-dialog__loader"
}, Se = {
  key: 2,
  class: "x-dialog__content"
}, _e = { class: "x-dialog__actions" }, $e = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "XDialog",
  props: {
    onCancel: Function,
    onSubmit: Function,
    title: String,
    description: String,
    cancelText: {
      type: String,
      default: "Cancel"
    },
    cancelDisabled: Boolean,
    cancelProps: Object,
    submitText: {
      type: String,
      default: "Submit"
    },
    submitDisabled: Boolean,
    submitProps: Object,
    centerTitle: Boolean,
    persistent: Boolean,
    noActions: Boolean,
    noCancel: Boolean,
    noSubmit: Boolean,
    loading: Boolean,
    size: {
      type: String,
      default: "s",
      validator: (e) => ["xs", "s", "m"].includes(e)
    },
    testId: {
      type: String,
      default: null
    },
    isPromo: Boolean
  },
  emits: ["cancel", "submit", "close"],
  setup(e, { emit: t }) {
    const { $dialog: n } = fe(), s = t, o = e, l = d(() => [
      "x-dialog",
      `x-dialog--size-${o.size}`,
      {
        "x-dialog--promo": o.isPromo
      }
    ]), u = d(() => ({
      class: "x-dialog__button",
      block: !0,
      color: o.isPromo ? "primary" : "gray",
      size: "xs",
      disabled: o.cancelDisabled,
      ...o.cancelProps
    })), m = d(() => ({
      class: "x-dialog__button",
      block: !0,
      size: "xs",
      disabled: o.submitDisabled,
      ...o.submitProps
    })), i = d(() => ({
      class: "x-dialog__close-btn",
      icon: "close",
      size: "xxs",
      iconSize: "15",
      text: !0,
      color: "white"
    })), v = () => {
      s("close"), n.hide();
    }, g = () => {
      o.onCancel ? s("cancel") : (s("cancel"), n.hide());
    }, x = () => {
      o.persistent || g();
    }, b = () => {
      o.onSubmit ? s("submit") : (s("submit"), n.hide());
    };
    return (r, O) => (a(), y("div", {
      class: E(l.value),
      "data-test-id": e.testId,
      tabindex: "0"
    }, [
      _("div", ve, [
        e.title || r.$slots.title ? (a(), y("div", {
          key: 0,
          class: E(["x-dialog__title", { "x-dialog__title--center": e.centerTitle }]),
          title: e.title
        }, [
          p(r.$slots, "title", {}, () => [
            C(z(e.title), 1)
          ], !0)
        ], 10, be)) : c("", !0),
        _("div", he, [
          e.description || r.$slots.description ? (a(), y("div", ye, [
            p(r.$slots, "description", {}, () => [
              C(z(e.description), 1)
            ], !0)
          ])) : c("", !0),
          e.loading ? (a(), y("div", xe, [
            k(N, { size: "m" })
          ])) : c("", !0),
          r.$slots.default ? (a(), y("div", Se, [
            p(r.$slots, "default", {}, void 0, !0)
          ])) : c("", !0)
        ]),
        e.noActions ? c("", !0) : p(r.$slots, "footer", { key: 1 }, () => [
          _("div", _e, [
            e.noCancel ? c("", !0) : p(r.$slots, "cancel", { key: 0 }, () => [
              k(D, S(u.value, { onClick: g }), {
                default: $(() => [
                  C(z(e.cancelText), 1)
                ]),
                _: 1
              }, 16)
            ], !0),
            e.noSubmit ? c("", !0) : p(r.$slots, "submit", { key: 1 }, () => [
              k(D, S(m.value, { onClick: b }), {
                default: $(() => [
                  C(z(e.submitText), 1)
                ]),
                _: 1
              }, 16)
            ], !0)
          ]),
          p(r.$slots, "extra-footer", {}, void 0, !0)
        ], !0)
      ]),
      e.persistent ? c("", !0) : (a(), f(D, S({ key: 0 }, i.value, { onClick: v }), null, 16)),
      k(J(ge), {
        onKeyup: Q(x, ["esc"])
      })
    ], 10, pe));
  }
}), Pe = /* @__PURE__ */ P($e, [["__scopeId", "data-v-cc52c06b"]]), we = {
  key: 0,
  class: "x-dialog-overlay"
}, ke = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "XDialogOverlay",
  props: {
    show: Boolean,
    component: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    return (t, n) => (a(), f(X, {
      name: "x-dialog-overlay-fade",
      mode: "out-in",
      appear: ""
    }, {
      default: $(() => [
        e.show ? (a(), y("div", we, [
          k(X, {
            name: "x-dialog-fade",
            mode: "out-in",
            appear: ""
          }, {
            default: $(() => [
              e.show ? (a(), f(W, { key: 0 }, [
                (a(), f(Y, null, {
                  default: $(() => [
                    e.component ? (a(), f(V(e.component), {
                      key: e.component.name
                    })) : c("", !0)
                  ]),
                  _: 1
                }))
              ], 1024)) : c("", !0)
            ]),
            _: 1
          })
        ])) : c("", !0)
      ]),
      _: 1
    }));
  }
}), Ce = /* @__PURE__ */ P(ke, [["__scopeId", "data-v-0ec1ee96"]]), Ae = {
  install: (e, t) => {
    let n = null;
    const s = A(!1), o = A({}), l = A({}), u = {
      show(m, i) {
        const v = Z();
        if (!n) {
          const g = document.createElement("div");
          g.id = "x-dialog-container", document.body.appendChild(g);
          const x = ee({
            provide: () => ({ $dialog: u }),
            render: () => T(Ce, { show: h(s), component: h(l) })
          });
          Object.entries(t.globalProperties).forEach(([b, r]) => {
            x.config.globalProperties[b] = r;
          }), n = x.mount(`#${g.id}`);
        }
        h(l) && (o.value = h(l)), l.value = {
          render: () => T(
            m,
            ze(v, i)
          )
        }, s.value = !0, n.$forceUpdate();
      },
      showPrevious() {
        h(o) && (l.value = h(o), o.value = null, n.$forceUpdate());
      },
      hide() {
        n && (l.value = null, o.value = null, s.value = !1, n.$forceUpdate());
      }
    };
    e.provide("$dialog", u);
  }
};
function ze(e, t) {
  return t ? {
    ...t.props && t.props.call(e),
    ...Be(t.on, e)
  } : {};
}
function Be(e = {}, t) {
  const n = {};
  for (const s in e) {
    const o = `on${s.charAt(0).toUpperCase() + s.slice(1)}`;
    n[o] = e[s].bind(t);
  }
  return n;
}
export {
  D as XButton,
  Pe as XDialog,
  Ae as XDialogPlugin,
  N as XLoader,
  B as XSvgIcon,
  fe as useDialog
};
