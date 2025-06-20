import { defineComponent as $, useCssVars as M, computed as d, ref as R, toValue as x, onMounted as U, withDirectives as H, createElementBlock as S, openBlock as a, createElementVNode as w, vShow as F, createBlock as f, normalizeClass as P, resolveDynamicComponent as q, mergeProps as _, withCtx as k, createCommentVNode as c, renderSlot as v, inject as K, onActivated as J, onDeactivated as Q, onBeforeUnmount as W, createVNode as E, createTextVNode as z, toDisplayString as B, unref as Y, withKeys as Z, Transition as V, KeepAlive as ee, Suspense as te, shallowRef as O, getCurrentInstance as oe, createApp as ne, h as X } from "vue";
const se = {
  class: "x-svg-icon",
  "aria-hidden": "true"
}, le = ["href", "fill"], ie = "icon", D = /* @__PURE__ */ $({
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
    M((i) => ({
      "4d93b69d": u.value,
      "4b142330": m.value
    }));
    const t = R(!1), o = e, l = (i) => i.includes("px") ? i : `${i}px`, n = d(() => `#${ie}-${o.name.toLowerCase()}`), s = d(() => {
      if (Array.isArray(o.size)) {
        const [g, p] = o.size;
        return {
          width: l(g),
          height: l(p)
        };
      }
      const i = l(o.size);
      return {
        width: i,
        height: i
      };
    }), u = d(() => x(s).width), m = d(() => x(s).height);
    return U(() => t.value = !0), (i, g) => H((a(), S("svg", se, [
      w("use", {
        href: n.value,
        fill: e.color
      }, null, 8, le)
    ], 512)), [
      [F, t.value]
    ]);
  }
}), ae = /* @__PURE__ */ $({
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
    const t = e, o = d(() => [
      "x-loader",
      `x-loader--color-${t.color}`,
      `x-loader--size-${t.size}`,
      { "x-loader--mini": t.mini }
    ]);
    return (l, n) => e.mini ? (a(), S("div", {
      key: 0,
      class: P(o.value)
    }, n[0] || (n[0] = [
      w("div", { class: "x-loader__dot" }, null, -1)
    ]), 2)) : (a(), f(D, {
      key: 1,
      class: P(o.value),
      name: "loader"
    }, null, 8, ["class"]));
  }
}), A = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, n] of t)
    o[l] = n;
  return o;
}, G = /* @__PURE__ */ A(ae, [["__scopeId", "data-v-2e151827"]]), re = { class: "x-button__content" }, ce = { class: "x-button__content-in" }, ue = /* @__PURE__ */ $({
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
    const t = e, o = d(() => t.to ? "router-link" : t.href ? "a" : "button"), l = d(() => t.to ? { to: t.to } : t.href ? {
      href: t.href,
      target: t.target || (t.download || t.download === "" ? null : "_blank"),
      download: t.download
    } : null), n = d(
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
    ), s = d(() => ["primary", "danger"].includes(t.color) ? "white" : "primary");
    return (u, m) => (a(), f(q(o.value), _({
      class: n.value,
      disabled: e.disabled
    }, l.value), {
      default: k(() => [
        w("div", re, [
          e.loading ? (a(), f(G, {
            key: 0,
            color: s.value,
            class: "x-button__loader",
            mini: ""
          }, null, 8, ["color"])) : c("", !0),
          w("div", ce, [
            e.prepend ? (a(), f(D, _({
              key: 0,
              name: e.prepend,
              size: e.iconSize,
              class: "x-button__prepend"
            }, e.iconProps), null, 16, ["name", "size"])) : c("", !0),
            e.icon ? (a(), f(D, _({
              key: 1,
              name: e.icon,
              size: e.iconSize,
              class: "x-button__icon"
            }, e.iconProps), null, 16, ["name", "size"])) : v(u.$slots, "default", { key: 2 }, void 0, !0),
            e.append ? (a(), f(D, _({
              key: 3,
              name: e.append,
              size: e.iconSize,
              class: "x-button__append"
            }, e.iconProps), null, 16, ["name", "size"])) : c("", !0),
            v(u.$slots, "append", {}, void 0, !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "disabled"]));
  }
}), I = /* @__PURE__ */ A(ue, [["__scopeId", "data-v-5f451524"]]);
/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */
var L;
(function(e) {
  e.pop = "pop", e.push = "push";
})(L || (L = {}));
var j;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(j || (j = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var T;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(T || (T = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const de = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function me() {
  return K(de);
}
/*!
 * vue-global-events v3.0.1
 * (c) 2019-2023 Eduardo San Martin Morote, Damian Dulisz
 * Released under the MIT License.
 */
let N;
function pe() {
  return N ?? (N = /msie|trident/.test(window.navigator.userAgent.toLowerCase()));
}
const fe = /^on(\w+?)((?:Once|Capture|Passive)*)$/, ve = /[OCP]/g;
function ge(e) {
  return e ? pe() ? e.includes("Capture") : e.replace(ve, ",$&").toLowerCase().slice(1).split(",").reduce((o, l) => (o[l] = !0, o), {}) : void 0;
}
const be = $({
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
    let o = /* @__PURE__ */ Object.create(null);
    const l = R(!0);
    return J(() => {
      l.value = !0;
    }), Q(() => {
      l.value = !1;
    }), U(() => {
      Object.keys(t).filter((n) => n.startsWith("on")).forEach((n) => {
        const s = t[n], u = Array.isArray(s) ? s : [s], m = n.match(fe);
        if (!m) {
          __DEV__ && console.warn(
            `[vue-global-events] Unable to parse "${n}". If this should work, you should probably open a new issue on https://github.com/shentao/vue-global-events.`
          );
          return;
        }
        let [, i, g] = m;
        i = i.toLowerCase();
        const p = u.map(
          (h) => (y) => {
            const r = Array.isArray(e.filter) ? e.filter : [e.filter];
            l.value && r.every((C) => C(y, h, i)) && (e.stop && y.stopPropagation(), e.prevent && y.preventDefault(), h(y));
          }
        ), b = ge(g);
        p.forEach((h) => {
          window[e.target].addEventListener(
            i,
            h,
            b
          );
        }), o[n] = [
          p,
          i,
          b
        ];
      });
    }), W(() => {
      for (const n in o) {
        const [s, u, m] = o[n];
        s.forEach((i) => {
          window[e.target].removeEventListener(u, i, m);
        });
      }
      o = {};
    }), () => null;
  }
}), he = be, ye = () => ({ $dialog: K("$dialog") }), xe = ["data-test-id"], Se = { class: "x-dialog__in" }, _e = ["title"], we = { class: "x-dialog__content-container" }, ke = {
  key: 0,
  class: "x-dialog__description"
}, $e = {
  key: 1,
  class: "x-dialog__loader"
}, Ee = {
  key: 2,
  class: "x-dialog__content"
}, Ce = { class: "x-dialog__actions" }, ze = /* @__PURE__ */ $({
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
    const o = me(), { $dialog: l } = ye(), n = t, s = e, u = d(() => [
      "x-dialog",
      `x-dialog--size-${s.size}`,
      {
        "x-dialog--promo": s.isPromo
      }
    ]), m = d(() => ({
      class: "x-dialog__button",
      block: !0,
      color: s.isPromo ? "primary" : "gray",
      size: "xs",
      disabled: s.cancelDisabled,
      ...s.cancelProps
    })), i = d(() => ({
      class: "x-dialog__button",
      block: !0,
      size: "xs",
      disabled: s.submitDisabled,
      ...s.submitProps
    })), g = d(() => ({
      class: "x-dialog__close-btn",
      icon: "close",
      size: "xxs",
      iconSize: "15",
      text: !0,
      color: "white"
    })), p = () => {
      n("close"), l.hide();
    };
    o.beforeEach(async (r, C) => {
      r.name !== C.name && p();
    });
    const b = () => {
      s.onCancel ? n("cancel") : (n("cancel"), l.hide());
    }, h = () => {
      s.persistent || b();
    }, y = () => {
      s.onSubmit ? n("submit") : (n("submit"), l.hide());
    };
    return (r, C) => (a(), S("div", {
      class: P(u.value),
      "data-test-id": e.testId,
      tabindex: "0"
    }, [
      w("div", Se, [
        e.title || r.$slots.title ? (a(), S("div", {
          key: 0,
          class: P(["x-dialog__title", { "x-dialog__title--center": e.centerTitle }]),
          title: e.title
        }, [
          v(r.$slots, "title", {}, () => [
            z(B(e.title), 1)
          ], !0)
        ], 10, _e)) : c("", !0),
        w("div", we, [
          e.description || r.$slots.description ? (a(), S("div", ke, [
            v(r.$slots, "description", {}, () => [
              z(B(e.description), 1)
            ], !0)
          ])) : c("", !0),
          e.loading ? (a(), S("div", $e, [
            E(G, { size: "m" })
          ])) : c("", !0),
          r.$slots.default ? (a(), S("div", Ee, [
            v(r.$slots, "default", {}, void 0, !0)
          ])) : c("", !0)
        ]),
        e.noActions ? c("", !0) : v(r.$slots, "footer", { key: 1 }, () => [
          w("div", Ce, [
            e.noCancel ? c("", !0) : v(r.$slots, "cancel", { key: 0 }, () => [
              E(I, _(m.value, { onClick: b }), {
                default: k(() => [
                  z(B(e.cancelText), 1)
                ]),
                _: 1
              }, 16)
            ], !0),
            e.noSubmit ? c("", !0) : v(r.$slots, "submit", { key: 1 }, () => [
              E(I, _(i.value, { onClick: y }), {
                default: k(() => [
                  z(B(e.submitText), 1)
                ]),
                _: 1
              }, 16)
            ], !0)
          ]),
          v(r.$slots, "extra-footer", {}, void 0, !0)
        ], !0)
      ]),
      e.persistent ? c("", !0) : (a(), f(I, _({ key: 0 }, g.value, { onClick: p }), null, 16)),
      E(Y(he), {
        onKeyup: Z(h, ["esc"])
      })
    ], 10, xe));
  }
}), Ne = /* @__PURE__ */ A(ze, [["__scopeId", "data-v-055f1520"]]), Be = {
  key: 0,
  class: "x-dialog-overlay"
}, De = /* @__PURE__ */ $({
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
    return (t, o) => (a(), f(V, {
      name: "x-dialog-overlay-fade",
      mode: "out-in",
      appear: ""
    }, {
      default: k(() => [
        e.show ? (a(), S("div", Be, [
          E(V, {
            name: "x-dialog-fade",
            mode: "out-in",
            appear: ""
          }, {
            default: k(() => [
              e.show ? (a(), f(ee, { key: 0 }, [
                (a(), f(te, null, {
                  default: k(() => [
                    e.component ? (a(), f(q(e.component), {
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
}), Pe = /* @__PURE__ */ A(De, [["__scopeId", "data-v-6dceab4c"]]), Ve = {
  install: (e, t) => {
    let o = null;
    const l = O(!1), n = O({}), s = O({}), u = {
      show(m, i) {
        const g = oe();
        if (!o) {
          const p = document.createElement("div");
          p.id = "x-dialog-container", document.body.appendChild(p);
          const b = ne({
            provide: () => ({ $dialog: u }),
            render: () => X(Pe, { show: x(l), component: x(s) })
          });
          Object.entries(t.globalProperties).forEach(([h, y]) => {
            b.config.globalProperties[h] = y;
          }), o = b.mount(`#${p.id}`);
        }
        x(s) && (n.value = x(s)), s.value = {
          render: () => X(
            m,
            Ae(g, i)
          )
        }, l.value = !0, o.$forceUpdate();
      },
      showPrevious() {
        x(n) && (s.value = x(n), n.value = null, o.$forceUpdate());
      },
      hide() {
        o && (s.value = null, n.value = null, l.value = !1, o.$forceUpdate());
      }
    };
    e.provide("$dialog", u);
  }
};
function Ae(e, t) {
  return t ? {
    ...t.props && t.props.call(e),
    ...Oe(t.on, e)
  } : {};
}
function Oe(e = {}, t) {
  const o = {};
  for (const l in e) {
    const n = `on${l.charAt(0).toUpperCase() + l.slice(1)}`;
    o[n] = e[l].bind(t);
  }
  return o;
}
export {
  I as XButton,
  Ne as XDialog,
  Ve as XDialogPlugin,
  G as XLoader,
  D as XSvgIcon
};
