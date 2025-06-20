import { defineComponent as k, useCssVars as q, computed as d, ref as j, toValue as y, onMounted as V, withDirectives as F, createElementBlock as x, openBlock as a, createElementVNode as $, vShow as G, createBlock as f, normalizeClass as P, unref as p, resolveDynamicComponent as N, mergeProps as _, withCtx as w, createCommentVNode as c, renderSlot as v, onActivated as K, onDeactivated as M, onBeforeUnmount as H, inject as J, createVNode as C, createTextVNode as z, toDisplayString as B, withKeys as Q, Transition as T, KeepAlive as W, Suspense as Y, shallowRef as D, getCurrentInstance as Z, createApp as ee, h as L } from "vue";
const te = {
  class: "x-svg-icon",
  "aria-hidden": "true"
}, oe = ["href", "fill"], ne = "icon", E = /* @__PURE__ */ k({
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
    q((i) => ({
      "7ee0a9e5": u.value,
      "436598e8": m.value
    }));
    const t = j(!1), n = e, s = (i) => i.includes("px") ? i : `${i}px`, o = d(() => `#${ne}-${n.name.toLowerCase()}`), l = d(() => {
      if (Array.isArray(n.size)) {
        const [b, g] = n.size;
        return {
          width: s(b),
          height: s(g)
        };
      }
      const i = s(n.size);
      return {
        width: i,
        height: i
      };
    }), u = d(() => y(l).width), m = d(() => y(l).height);
    return V(() => t.value = !0), (i, b) => F((a(), x("svg", te, [
      $("use", {
        href: o.value,
        fill: e.color
      }, null, 8, oe)
    ], 512)), [
      [G, t.value]
    ]);
  }
}), se = /* @__PURE__ */ k({
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
    return (s, o) => e.mini ? (a(), x("div", {
      key: 0,
      class: P(n.value)
    }, o[0] || (o[0] = [
      $("div", { class: "x-loader__dot" }, null, -1)
    ]), 2)) : (a(), f(p(E), {
      key: 1,
      class: P(n.value),
      name: "loader"
    }, null, 8, ["class"]));
  }
}), A = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, U = /* @__PURE__ */ A(se, [["__scopeId", "data-v-2dc20739"]]), ie = { class: "x-button__content" }, le = { class: "x-button__content-in" }, ae = /* @__PURE__ */ k({
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
    return (u, m) => (a(), f(N(n.value), _({
      class: o.value,
      disabled: e.disabled
    }, s.value), {
      default: w(() => [
        $("div", ie, [
          e.loading ? (a(), f(p(U), {
            key: 0,
            color: l.value,
            class: "x-button__loader",
            mini: ""
          }, null, 8, ["color"])) : c("", !0),
          $("div", le, [
            e.prepend ? (a(), f(p(E), _({
              key: 0,
              name: e.prepend,
              size: e.iconSize,
              class: "x-button__prepend"
            }, e.iconProps), null, 16, ["name", "size"])) : c("", !0),
            e.icon ? (a(), f(p(E), _({
              key: 1,
              name: e.icon,
              size: e.iconSize,
              class: "x-button__icon"
            }, e.iconProps), null, 16, ["name", "size"])) : v(u.$slots, "default", { key: 2 }, void 0, !0),
            e.append ? (a(), f(p(E), _({
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
}), I = /* @__PURE__ */ A(ae, [["__scopeId", "data-v-b9b9c2e3"]]);
/*!
 * vue-global-events v3.0.1
 * (c) 2019-2023 Eduardo San Martin Morote, Damian Dulisz
 * Released under the MIT License.
 */
let O;
function re() {
  return O ?? (O = /msie|trident/.test(window.navigator.userAgent.toLowerCase()));
}
const ce = /^on(\w+?)((?:Once|Capture|Passive)*)$/, ue = /[OCP]/g;
function de(e) {
  return e ? re() ? e.includes("Capture") : e.replace(ue, ",$&").toLowerCase().slice(1).split(",").reduce((n, s) => (n[s] = !0, n), {}) : void 0;
}
const me = k({
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
    const s = j(!0);
    return K(() => {
      s.value = !0;
    }), M(() => {
      s.value = !1;
    }), V(() => {
      Object.keys(t).filter((o) => o.startsWith("on")).forEach((o) => {
        const l = t[o], u = Array.isArray(l) ? l : [l], m = o.match(ce);
        if (!m) {
          __DEV__ && console.warn(
            `[vue-global-events] Unable to parse "${o}". If this should work, you should probably open a new issue on https://github.com/shentao/vue-global-events.`
          );
          return;
        }
        let [, i, b] = m;
        i = i.toLowerCase();
        const g = u.map(
          (h) => (r) => {
            const X = Array.isArray(e.filter) ? e.filter : [e.filter];
            s.value && X.every((R) => R(r, h, i)) && (e.stop && r.stopPropagation(), e.prevent && r.preventDefault(), h(r));
          }
        ), S = de(b);
        g.forEach((h) => {
          window[e.target].addEventListener(
            i,
            h,
            S
          );
        }), n[o] = [
          g,
          i,
          S
        ];
      });
    }), H(() => {
      for (const o in n) {
        const [l, u, m] = n[o];
        l.forEach((i) => {
          window[e.target].removeEventListener(u, i, m);
        });
      }
      n = {};
    }), () => null;
  }
}), ge = me, fe = () => ({ $dialog: J("$dialog") }), pe = ["data-test-id"], ve = { class: "x-dialog__in" }, be = ["title"], he = { class: "x-dialog__content-container" }, ye = {
  key: 0,
  class: "x-dialog__description"
}, xe = {
  key: 1,
  class: "x-dialog__loader"
}, Se = {
  key: 2,
  class: "x-dialog__content"
}, _e = { class: "x-dialog__actions" }, $e = /* @__PURE__ */ k({
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
    })), b = () => {
      s("close"), n.hide();
    }, g = () => {
      o.onCancel ? s("cancel") : (s("cancel"), n.hide());
    }, S = () => {
      o.persistent || g();
    }, h = () => {
      o.onSubmit ? s("submit") : (s("submit"), n.hide());
    };
    return (r, X) => (a(), x("div", {
      class: P(l.value),
      "data-test-id": e.testId,
      tabindex: "0"
    }, [
      $("div", ve, [
        e.title || r.$slots.title ? (a(), x("div", {
          key: 0,
          class: P(["x-dialog__title", { "x-dialog__title--center": e.centerTitle }]),
          title: e.title
        }, [
          v(r.$slots, "title", {}, () => [
            z(B(e.title), 1)
          ], !0)
        ], 10, be)) : c("", !0),
        $("div", he, [
          e.description || r.$slots.description ? (a(), x("div", ye, [
            v(r.$slots, "description", {}, () => [
              z(B(e.description), 1)
            ], !0)
          ])) : c("", !0),
          e.loading ? (a(), x("div", xe, [
            C(p(U), { size: "m" })
          ])) : c("", !0),
          r.$slots.default ? (a(), x("div", Se, [
            v(r.$slots, "default", {}, void 0, !0)
          ])) : c("", !0)
        ]),
        e.noActions ? c("", !0) : v(r.$slots, "footer", { key: 1 }, () => [
          $("div", _e, [
            e.noCancel ? c("", !0) : v(r.$slots, "cancel", { key: 0 }, () => [
              C(p(I), _(u.value, { onClick: g }), {
                default: w(() => [
                  z(B(e.cancelText), 1)
                ]),
                _: 1
              }, 16)
            ], !0),
            e.noSubmit ? c("", !0) : v(r.$slots, "submit", { key: 1 }, () => [
              C(p(I), _(m.value, { onClick: h }), {
                default: w(() => [
                  z(B(e.submitText), 1)
                ]),
                _: 1
              }, 16)
            ], !0)
          ]),
          v(r.$slots, "extra-footer", {}, void 0, !0)
        ], !0)
      ]),
      e.persistent ? c("", !0) : (a(), f(p(I), _({ key: 0 }, i.value, { onClick: b }), null, 16)),
      C(p(ge), {
        onKeyup: Q(S, ["esc"])
      })
    ], 10, pe));
  }
}), Pe = /* @__PURE__ */ A($e, [["__scopeId", "data-v-f110415e"]]), we = {
  key: 0,
  class: "x-dialog-overlay"
}, ke = /* @__PURE__ */ k({
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
    return (t, n) => (a(), f(T, {
      name: "x-dialog-overlay-fade",
      mode: "out-in",
      appear: ""
    }, {
      default: w(() => [
        e.show ? (a(), x("div", we, [
          C(T, {
            name: "x-dialog-fade",
            mode: "out-in",
            appear: ""
          }, {
            default: w(() => [
              e.show ? (a(), f(W, { key: 0 }, [
                (a(), f(Y, null, {
                  default: w(() => [
                    e.component ? (a(), f(N(e.component), {
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
}), Ce = /* @__PURE__ */ A(ke, [["__scopeId", "data-v-7b5367b0"]]), Ae = {
  install: (e, t) => {
    let n = null;
    const s = D(!1), o = D({}), l = D({}), u = {
      show(m, i) {
        const b = Z();
        if (!n) {
          const g = document.createElement("div");
          g.id = "x-dialog-container", document.body.appendChild(g);
          const S = ee({
            provide: () => ({ $dialog: u }),
            render: () => L(Ce, { show: y(s), component: y(l) })
          });
          Object.entries(t.globalProperties).forEach(([h, r]) => {
            S.config.globalProperties[h] = r;
          }), n = S.mount(`#${g.id}`);
        }
        y(l) && (o.value = y(l)), l.value = {
          render: () => L(
            m,
            ze(b, i)
          )
        }, s.value = !0, n.$forceUpdate();
      },
      showPrevious() {
        y(o) && (l.value = y(o), o.value = null, n.$forceUpdate());
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
  I as XButton,
  Pe as XDialog,
  Ae as XDialogPlugin,
  U as XLoader,
  E as XSvgIcon,
  fe as useDialog
};
