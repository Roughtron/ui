import { defineComponent as $e, useCssVars as Ia, computed as T, ref as Ue, toValue as H, onMounted as br, withDirectives as vt, createElementBlock as se, openBlock as F, createElementVNode as ie, vShow as Ft, createBlock as ve, normalizeClass as De, unref as M, resolveDynamicComponent as Ts, mergeProps as ke, withCtx as de, createCommentVNode as pe, renderSlot as ce, onActivated as Iu, onDeactivated as ju, onBeforeUnmount as ja, inject as La, createVNode as me, createTextVNode as je, toDisplayString as Te, withKeys as wt, Transition as ti, KeepAlive as Lu, Suspense as Ru, shallowRef as Xr, getCurrentInstance as fn, createApp as Bu, h as ts, pushScopeId as zu, popScopeId as Hu, nextTick as mt, normalizeProps as Mt, guardReactiveProps as Wt, resolveComponent as ns, withScopeId as Uu, normalizeStyle as Sn, Fragment as Et, useAttrs as Cn, renderList as pn, provide as rs, isRef as ni, watch as Ie, onUnmounted as Ps, reactive as Vt, toRef as is, readonly as qu, watchEffect as Ra, warn as Yu, useTemplateRef as ri, useSlots as Ba, withModifiers as We, resolveDirective as Xu, createSlots as Wu, toRefs as Vr, vModelDynamic as Gu } from "vue";
const Ku = {
  class: "x-svg-icon",
  "aria-hidden": "true"
}, Zu = ["href", "fill"], Ju = "icon", Je = /* @__PURE__ */ $e({
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
    Ia((l) => ({
      "7ee0a9e5": o.value,
      "436598e8": a.value
    }));
    const t = Ue(!1), n = e, r = (l) => l.includes("px") ? l : `${l}px`, i = T(() => `#${Ju}-${n.name.toLowerCase()}`), s = T(() => {
      if (Array.isArray(n.size)) {
        const [u, f] = n.size;
        return {
          width: r(u),
          height: r(f)
        };
      }
      const l = r(n.size);
      return {
        width: l,
        height: l
      };
    }), o = T(() => H(s).width), a = T(() => H(s).height);
    return br(() => t.value = !0), (l, u) => vt((F(), se("svg", Ku, [
      ie("use", {
        href: i.value,
        fill: e.color
      }, null, 8, Zu)
    ], 512)), [
      [Ft, t.value]
    ]);
  }
}), Qu = /* @__PURE__ */ $e({
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
    const t = e, n = T(() => [
      "x-loader",
      `x-loader--color-${t.color}`,
      `x-loader--size-${t.size}`,
      { "x-loader--mini": t.mini }
    ]);
    return (r, i) => e.mini ? (F(), se("div", {
      key: 0,
      class: De(n.value)
    }, i[0] || (i[0] = [
      ie("div", { class: "x-loader__dot" }, null, -1)
    ]), 2)) : (F(), ve(M(Je), {
      key: 1,
      class: De(n.value),
      name: "loader"
    }, null, 8, ["class"]));
  }
}), qe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
}, za = /* @__PURE__ */ qe(Qu, [["__scopeId", "data-v-2dc20739"]]), ec = { class: "x-button__content" }, tc = { class: "x-button__content-in" }, nc = /* @__PURE__ */ $e({
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
    const t = e, n = T(() => t.to ? "router-link" : t.href ? "a" : "button"), r = T(() => t.to ? { to: t.to } : t.href ? {
      href: t.href,
      target: t.target || (t.download || t.download === "" ? null : "_blank"),
      download: t.download
    } : null), i = T(
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
    ), s = T(() => ["primary", "danger"].includes(t.color) ? "white" : "primary");
    return (o, a) => (F(), ve(Ts(n.value), ke({
      class: i.value,
      disabled: e.disabled
    }, r.value), {
      default: de(() => [
        ie("div", ec, [
          e.loading ? (F(), ve(M(za), {
            key: 0,
            color: s.value,
            class: "x-button__loader",
            mini: ""
          }, null, 8, ["color"])) : pe("", !0),
          ie("div", tc, [
            e.prepend ? (F(), ve(M(Je), ke({
              key: 0,
              name: e.prepend,
              size: e.iconSize,
              class: "x-button__prepend"
            }, e.iconProps), null, 16, ["name", "size"])) : pe("", !0),
            e.icon ? (F(), ve(M(Je), ke({
              key: 1,
              name: e.icon,
              size: e.iconSize,
              class: "x-button__icon"
            }, e.iconProps), null, 16, ["name", "size"])) : ce(o.$slots, "default", { key: 2 }, void 0, !0),
            e.append ? (F(), ve(M(Je), ke({
              key: 3,
              name: e.append,
              size: e.iconSize,
              class: "x-button__append"
            }, e.iconProps), null, 16, ["name", "size"])) : pe("", !0),
            ce(o.$slots, "append", {}, void 0, !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "disabled"]));
  }
}), it = /* @__PURE__ */ qe(nc, [["__scopeId", "data-v-b9b9c2e3"]]);
/*!
 * vue-global-events v3.0.1
 * (c) 2019-2023 Eduardo San Martin Morote, Damian Dulisz
 * Released under the MIT License.
 */
let Ri;
function rc() {
  return Ri ?? (Ri = /msie|trident/.test(window.navigator.userAgent.toLowerCase()));
}
const ic = /^on(\w+?)((?:Once|Capture|Passive)*)$/, sc = /[OCP]/g;
function oc(e) {
  return e ? rc() ? e.includes("Capture") : e.replace(sc, ",$&").toLowerCase().slice(1).split(",").reduce((n, r) => (n[r] = !0, n), {}) : void 0;
}
const ac = $e({
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
    const r = Ue(!0);
    return Iu(() => {
      r.value = !0;
    }), ju(() => {
      r.value = !1;
    }), br(() => {
      Object.keys(t).filter((i) => i.startsWith("on")).forEach((i) => {
        const s = t[i], o = Array.isArray(s) ? s : [s], a = i.match(ic);
        if (!a) {
          __DEV__ && console.warn(
            `[vue-global-events] Unable to parse "${i}". If this should work, you should probably open a new issue on https://github.com/shentao/vue-global-events.`
          );
          return;
        }
        let [, l, u] = a;
        l = l.toLowerCase();
        const f = o.map(
          (h) => (p) => {
            const m = Array.isArray(e.filter) ? e.filter : [e.filter];
            r.value && m.every((y) => y(p, h, l)) && (e.stop && p.stopPropagation(), e.prevent && p.preventDefault(), h(p));
          }
        ), c = oc(u);
        f.forEach((h) => {
          window[e.target].addEventListener(
            l,
            h,
            c
          );
        }), n[i] = [
          f,
          l,
          c
        ];
      });
    }), ja(() => {
      for (const i in n) {
        const [s, o, a] = n[i];
        s.forEach((l) => {
          window[e.target].removeEventListener(o, l, a);
        });
      }
      n = {};
    }), () => null;
  }
}), lc = ac, uc = () => ({ $dialog: La("$dialog") }), cc = ["data-test-id"], dc = { class: "x-dialog__in" }, fc = ["title"], pc = { class: "x-dialog__content-container" }, hc = {
  key: 0,
  class: "x-dialog__description"
}, mc = {
  key: 1,
  class: "x-dialog__loader"
}, vc = {
  key: 2,
  class: "x-dialog__content"
}, gc = { class: "x-dialog__actions" }, yc = /* @__PURE__ */ $e({
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
    const { $dialog: n } = uc(), r = t, i = e, s = T(() => [
      "x-dialog",
      `x-dialog--size-${i.size}`,
      {
        "x-dialog--promo": i.isPromo
      }
    ]), o = T(() => ({
      class: "x-dialog__button",
      block: !0,
      color: i.isPromo ? "primary" : "gray",
      size: "xs",
      disabled: i.cancelDisabled,
      ...i.cancelProps
    })), a = T(() => ({
      class: "x-dialog__button",
      block: !0,
      size: "xs",
      disabled: i.submitDisabled,
      ...i.submitProps
    })), l = T(() => ({
      class: "x-dialog__close-btn",
      icon: "close",
      size: "xxs",
      iconSize: "15",
      text: !0,
      color: "white"
    })), u = () => {
      r("close"), n.hide();
    }, f = () => {
      i.onCancel ? r("cancel") : (r("cancel"), n.hide());
    }, c = () => {
      i.persistent || f();
    }, h = () => {
      i.onSubmit ? r("submit") : (r("submit"), n.hide());
    };
    return (p, m) => (F(), se("div", {
      class: De(s.value),
      "data-test-id": e.testId,
      tabindex: "0"
    }, [
      ie("div", dc, [
        e.title || p.$slots.title ? (F(), se("div", {
          key: 0,
          class: De(["x-dialog__title", { "x-dialog__title--center": e.centerTitle }]),
          title: e.title
        }, [
          ce(p.$slots, "title", {}, () => [
            je(Te(e.title), 1)
          ], !0)
        ], 10, fc)) : pe("", !0),
        ie("div", pc, [
          e.description || p.$slots.description ? (F(), se("div", hc, [
            ce(p.$slots, "description", {}, () => [
              je(Te(e.description), 1)
            ], !0)
          ])) : pe("", !0),
          e.loading ? (F(), se("div", mc, [
            me(M(za), { size: "m" })
          ])) : pe("", !0),
          p.$slots.default ? (F(), se("div", vc, [
            ce(p.$slots, "default", {}, void 0, !0)
          ])) : pe("", !0)
        ]),
        e.noActions ? pe("", !0) : ce(p.$slots, "footer", { key: 1 }, () => [
          ie("div", gc, [
            e.noCancel ? pe("", !0) : ce(p.$slots, "cancel", { key: 0 }, () => [
              me(M(it), ke(o.value, { onClick: f }), {
                default: de(() => [
                  je(Te(e.cancelText), 1)
                ]),
                _: 1
              }, 16)
            ], !0),
            e.noSubmit ? pe("", !0) : ce(p.$slots, "submit", { key: 1 }, () => [
              me(M(it), ke(a.value, { onClick: h }), {
                default: de(() => [
                  je(Te(e.submitText), 1)
                ]),
                _: 1
              }, 16)
            ], !0)
          ]),
          ce(p.$slots, "extra-footer", {}, void 0, !0)
        ], !0)
      ]),
      e.persistent ? pe("", !0) : (F(), ve(M(it), ke({ key: 0 }, l.value, { onClick: u }), null, 16)),
      me(M(lc), {
        onKeyup: wt(c, ["esc"])
      })
    ], 10, cc));
  }
}), uv = /* @__PURE__ */ qe(yc, [["__scopeId", "data-v-f110415e"]]), bc = {
  key: 0,
  class: "x-dialog-overlay"
}, wc = /* @__PURE__ */ $e({
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
    return (t, n) => (F(), ve(ti, {
      name: "x-dialog-overlay-fade",
      mode: "out-in",
      appear: ""
    }, {
      default: de(() => [
        e.show ? (F(), se("div", bc, [
          me(ti, {
            name: "x-dialog-fade",
            mode: "out-in",
            appear: ""
          }, {
            default: de(() => [
              e.show ? (F(), ve(Lu, { key: 0 }, [
                (F(), ve(Ru, null, {
                  default: de(() => [
                    e.component ? (F(), ve(Ts(e.component), {
                      key: e.component.name
                    })) : pe("", !0)
                  ]),
                  _: 1
                }))
              ], 1024)) : pe("", !0)
            ]),
            _: 1
          })
        ])) : pe("", !0)
      ]),
      _: 1
    }));
  }
}), xc = /* @__PURE__ */ qe(wc, [["__scopeId", "data-v-7b5367b0"]]), cv = {
  install: (e, t) => {
    let n = null;
    const r = Xr(!1), i = Xr({}), s = Xr({}), o = {
      show(a, l) {
        const u = fn();
        if (!n) {
          const f = document.createElement("div");
          f.id = "x-dialog-container", document.body.appendChild(f);
          const c = Bu({
            provide: () => ({ $dialog: o }),
            render: () => ts(xc, { show: H(r), component: H(s) })
          });
          Object.entries(t.globalProperties).forEach(([h, p]) => {
            c.config.globalProperties[h] = p;
          }), n = c.mount(`#${f.id}`);
        }
        H(s) && (i.value = H(s)), s.value = {
          render: () => ts(
            a,
            Sc(u, l)
          )
        }, r.value = !0, n.$forceUpdate();
      },
      showPrevious() {
        H(i) && (s.value = H(i), i.value = null, n.$forceUpdate());
      },
      hide() {
        n && (s.value = null, i.value = null, r.value = !1, n.$forceUpdate());
      }
    };
    e.provide("$dialog", o);
  }
};
function Sc(e, t) {
  return t ? {
    ...t.props && t.props.call(e),
    ...$c(t.on, e)
  } : {};
}
function $c(e = {}, t) {
  const n = {};
  for (const r in e) {
    const i = `on${r.charAt(0).toUpperCase() + r.slice(1)}`;
    n[i] = e[r].bind(t);
  }
  return n;
}
const kc = {
  key: 0,
  class: "x-mark__img"
}, _c = { class: "x-mark__text" }, Oc = /* @__PURE__ */ $e({
  __name: "XMark",
  props: {
    variant: {
      type: String,
      default: "default",
      validator: (e) => ["default", "filled"].includes(e)
    },
    icon: {
      type: String
    },
    iconProps: {
      type: Object,
      default: () => ({})
    },
    active: Boolean,
    disabled: Boolean,
    block: Boolean
  },
  setup(e) {
    const t = e, n = T(() => [
      "x-mark",
      `x-mark--${t.variant}`,
      {
        "x-mark--active": t.active,
        "x-mark--disabled": t.disabled,
        "x-mark--block": t.block
      }
    ]);
    return (r, i) => (F(), se("div", {
      class: De(n.value)
    }, [
      e.icon ? (F(), se("div", kc, [
        me(M(Je), ke({ name: e.icon }, e.iconProps), null, 16, ["name"])
      ])) : pe("", !0),
      ie("div", _c, [
        ce(r.$slots, "default", {}, void 0, !0)
      ]),
      i[0] || (i[0] = ie("div", { class: "x-mark__border" }, null, -1))
    ], 2));
  }
}), Ha = /* @__PURE__ */ qe(Oc, [["__scopeId", "data-v-0fd3413c"]]), Ec = ["top", "right", "bottom", "left"], wo = ["start", "end"], xo = /* @__PURE__ */ Ec.reduce((e, t) => e.concat(t, t + "-" + wo[0], t + "-" + wo[1]), []), fr = Math.min, bn = Math.max, Vc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ac = {
  start: "end",
  end: "start"
};
function ss(e, t, n) {
  return bn(e, fr(t, n));
}
function Tn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Bt(e) {
  return e.split("-")[0];
}
function Ot(e) {
  return e.split("-")[1];
}
function Ua(e) {
  return e === "x" ? "y" : "x";
}
function Ns(e) {
  return e === "y" ? "height" : "width";
}
function Gt(e) {
  return ["top", "bottom"].includes(Bt(e)) ? "y" : "x";
}
function Ds(e) {
  return Ua(Gt(e));
}
function qa(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ot(e), i = Ds(e), s = Ns(i);
  let o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (o = si(o)), [o, si(o)];
}
function Cc(e) {
  const t = si(e);
  return [ii(e), t, ii(t)];
}
function ii(e) {
  return e.replace(/start|end/g, (t) => Ac[t]);
}
function Tc(e, t, n) {
  const r = ["left", "right"], i = ["right", "left"], s = ["top", "bottom"], o = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? i : r : t ? r : i;
    case "left":
    case "right":
      return t ? s : o;
    default:
      return [];
  }
}
function Pc(e, t, n, r) {
  const i = Ot(e);
  let s = Tc(Bt(e), n === "start", r);
  return i && (s = s.map((o) => o + "-" + i), t && (s = s.concat(s.map(ii)))), s;
}
function si(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Vc[t]);
}
function Nc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ya(e) {
  return typeof e != "number" ? Nc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function rr(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: i
  } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n
  };
}
function So(e, t, n) {
  let {
    reference: r,
    floating: i
  } = e;
  const s = Gt(t), o = Ds(t), a = Ns(o), l = Bt(t), u = s === "y", f = r.x + r.width / 2 - i.width / 2, c = r.y + r.height / 2 - i.height / 2, h = r[a] / 2 - i[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: f,
        y: r.y - i.height
      };
      break;
    case "bottom":
      p = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: c
      };
      break;
    case "left":
      p = {
        x: r.x - i.width,
        y: c
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ot(t)) {
    case "start":
      p[o] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      p[o] += h * (n && u ? -1 : 1);
      break;
  }
  return p;
}
const Dc = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: o
  } = n, a = s.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let u = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: f,
    y: c
  } = So(u, r, l), h = r, p = {}, m = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: v,
      fn: x
    } = a[y], {
      x: _,
      y: V,
      data: X,
      reset: I
    } = await x({
      x: f,
      y: c,
      initialPlacement: r,
      placement: h,
      strategy: i,
      middlewareData: p,
      rects: u,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = _ ?? f, c = V ?? c, p = {
      ...p,
      [v]: {
        ...p[v],
        ...X
      }
    }, I && m <= 50 && (m++, typeof I == "object" && (I.placement && (h = I.placement), I.rects && (u = I.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : I.rects), {
      x: f,
      y: c
    } = So(u, h, l)), y = -1);
  }
  return {
    x: f,
    y: c,
    placement: h,
    strategy: i,
    middlewareData: p
  };
};
async function yi(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: i,
    platform: s,
    rects: o,
    elements: a,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: c = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = Tn(t, e), m = Ya(p), v = a[h ? c === "floating" ? "reference" : "floating" : c], x = rr(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(v))) == null || n ? v : v.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: f,
    strategy: l
  })), _ = c === "floating" ? {
    x: r,
    y: i,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, V = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), X = await (s.isElement == null ? void 0 : s.isElement(V)) ? await (s.getScale == null ? void 0 : s.getScale(V)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, I = rr(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: _,
    offsetParent: V,
    strategy: l
  }) : _);
  return {
    top: (x.top - I.top + m.top) / X.y,
    bottom: (I.bottom - x.bottom + m.bottom) / X.y,
    left: (x.left - I.left + m.left) / X.x,
    right: (I.right - x.right + m.right) / X.x
  };
}
const Fc = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: i,
      rects: s,
      platform: o,
      elements: a,
      middlewareData: l
    } = t, {
      element: u,
      padding: f = 0
    } = Tn(e, t) || {};
    if (u == null)
      return {};
    const c = Ya(f), h = {
      x: n,
      y: r
    }, p = Ds(i), m = Ns(p), y = await o.getDimensions(u), v = p === "y", x = v ? "top" : "left", _ = v ? "bottom" : "right", V = v ? "clientHeight" : "clientWidth", X = s.reference[m] + s.reference[p] - h[p] - s.floating[m], I = h[p] - s.reference[p], G = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
    let Y = G ? G[V] : 0;
    (!Y || !await (o.isElement == null ? void 0 : o.isElement(G))) && (Y = a.floating[V] || s.floating[m]);
    const te = X / 2 - I / 2, D = Y / 2 - y[m] / 2 - 1, K = fr(c[x], D), N = fr(c[_], D), re = K, fe = Y - y[m] - N, L = Y / 2 - y[m] / 2 + te, E = ss(re, L, fe), A = !l.arrow && Ot(i) != null && L !== E && s.reference[m] / 2 - (L < re ? K : N) - y[m] / 2 < 0, j = A ? L < re ? L - re : L - fe : 0;
    return {
      [p]: h[p] + j,
      data: {
        [p]: E,
        centerOffset: L - E - j,
        ...A && {
          alignmentOffset: j
        }
      },
      reset: A
    };
  }
});
function Mc(e, t, n) {
  return (e ? [...n.filter((i) => Ot(i) === e), ...n.filter((i) => Ot(i) !== e)] : n.filter((i) => Bt(i) === i)).filter((i) => e ? Ot(i) === e || (t ? ii(i) !== i : !1) : !0);
}
const Ic = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var n, r, i;
      const {
        rects: s,
        middlewareData: o,
        placement: a,
        platform: l,
        elements: u
      } = t, {
        crossAxis: f = !1,
        alignment: c,
        allowedPlacements: h = xo,
        autoAlignment: p = !0,
        ...m
      } = Tn(e, t), y = c !== void 0 || h === xo ? Mc(c || null, p, h) : h, v = await yi(t, m), x = ((n = o.autoPlacement) == null ? void 0 : n.index) || 0, _ = y[x];
      if (_ == null)
        return {};
      const V = qa(_, s, await (l.isRTL == null ? void 0 : l.isRTL(u.floating)));
      if (a !== _)
        return {
          reset: {
            placement: y[0]
          }
        };
      const X = [v[Bt(_)], v[V[0]], v[V[1]]], I = [...((r = o.autoPlacement) == null ? void 0 : r.overflows) || [], {
        placement: _,
        overflows: X
      }], G = y[x + 1];
      if (G)
        return {
          data: {
            index: x + 1,
            overflows: I
          },
          reset: {
            placement: G
          }
        };
      const Y = I.map((K) => {
        const N = Ot(K.placement);
        return [K.placement, N && f ? (
          // Check along the mainAxis and main crossAxis side.
          K.overflows.slice(0, 2).reduce((re, fe) => re + fe, 0)
        ) : (
          // Check only the mainAxis.
          K.overflows[0]
        ), K.overflows];
      }).sort((K, N) => K[1] - N[1]), D = ((i = Y.filter((K) => K[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Ot(K[0]) ? 2 : 3
      ).every((N) => N <= 0))[0]) == null ? void 0 : i[0]) || Y[0][0];
      return D !== a ? {
        data: {
          index: x + 1,
          overflows: I
        },
        reset: {
          placement: D
        }
      } : {};
    }
  };
}, jc = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: i,
        middlewareData: s,
        rects: o,
        initialPlacement: a,
        platform: l,
        elements: u
      } = t, {
        mainAxis: f = !0,
        crossAxis: c = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: y = !0,
        ...v
      } = Tn(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const x = Bt(i), _ = Gt(a), V = Bt(a) === a, X = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), I = h || (V || !y ? [si(a)] : Cc(a)), G = m !== "none";
      !h && G && I.push(...Pc(a, y, m, X));
      const Y = [a, ...I], te = await yi(t, v), D = [];
      let K = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (f && D.push(te[x]), c) {
        const L = qa(i, o, X);
        D.push(te[L[0]], te[L[1]]);
      }
      if (K = [...K, {
        placement: i,
        overflows: D
      }], !D.every((L) => L <= 0)) {
        var N, re;
        const L = (((N = s.flip) == null ? void 0 : N.index) || 0) + 1, E = Y[L];
        if (E && (!(c === "alignment" ? _ !== Gt(E) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        K.every((R) => R.overflows[0] > 0 && Gt(R.placement) === _)))
          return {
            data: {
              index: L,
              overflows: K
            },
            reset: {
              placement: E
            }
          };
        let A = (re = K.filter((j) => j.overflows[0] <= 0).sort((j, R) => j.overflows[1] - R.overflows[1])[0]) == null ? void 0 : re.placement;
        if (!A)
          switch (p) {
            case "bestFit": {
              var fe;
              const j = (fe = K.filter((R) => {
                if (G) {
                  const U = Gt(R.placement);
                  return U === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((U) => U > 0).reduce((U, W) => U + W, 0)]).sort((R, U) => R[1] - U[1])[0]) == null ? void 0 : fe[0];
              j && (A = j);
              break;
            }
            case "initialPlacement":
              A = a;
              break;
          }
        if (i !== A)
          return {
            reset: {
              placement: A
            }
          };
      }
      return {};
    }
  };
};
async function Lc(e, t) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Bt(n), a = Ot(n), l = Gt(n) === "y", u = ["left", "top"].includes(o) ? -1 : 1, f = s && l ? -1 : 1, c = Tn(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: m
  } = typeof c == "number" ? {
    mainAxis: c,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: c.mainAxis || 0,
    crossAxis: c.crossAxis || 0,
    alignmentAxis: c.alignmentAxis
  };
  return a && typeof m == "number" && (p = a === "end" ? m * -1 : m), l ? {
    x: p * f,
    y: h * u
  } : {
    x: h * u,
    y: p * f
  };
}
const Rc = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: i,
        y: s,
        placement: o,
        middlewareData: a
      } = t, l = await Lc(t, e);
      return o === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: i + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: o
        }
      };
    }
  };
}, Bc = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: i
      } = t, {
        mainAxis: s = !0,
        crossAxis: o = !1,
        limiter: a = {
          fn: (v) => {
            let {
              x,
              y: _
            } = v;
            return {
              x,
              y: _
            };
          }
        },
        ...l
      } = Tn(e, t), u = {
        x: n,
        y: r
      }, f = await yi(t, l), c = Gt(Bt(i)), h = Ua(c);
      let p = u[h], m = u[c];
      if (s) {
        const v = h === "y" ? "top" : "left", x = h === "y" ? "bottom" : "right", _ = p + f[v], V = p - f[x];
        p = ss(_, p, V);
      }
      if (o) {
        const v = c === "y" ? "top" : "left", x = c === "y" ? "bottom" : "right", _ = m + f[v], V = m - f[x];
        m = ss(_, m, V);
      }
      const y = a.fn({
        ...t,
        [h]: p,
        [c]: m
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [h]: s,
            [c]: o
          }
        }
      };
    }
  };
}, zc = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: i,
        rects: s,
        platform: o,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...u
      } = Tn(e, t), f = await yi(t, u), c = Bt(i), h = Ot(i), p = Gt(i) === "y", {
        width: m,
        height: y
      } = s.floating;
      let v, x;
      c === "top" || c === "bottom" ? (v = c, x = h === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (x = c, v = h === "end" ? "top" : "bottom");
      const _ = y - f.top - f.bottom, V = m - f.left - f.right, X = fr(y - f[v], _), I = fr(m - f[x], V), G = !t.middlewareData.shift;
      let Y = X, te = I;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (te = V), (r = t.middlewareData.shift) != null && r.enabled.y && (Y = _), G && !h) {
        const K = bn(f.left, 0), N = bn(f.right, 0), re = bn(f.top, 0), fe = bn(f.bottom, 0);
        p ? te = m - 2 * (K !== 0 || N !== 0 ? K + N : bn(f.left, f.right)) : Y = y - 2 * (re !== 0 || fe !== 0 ? re + fe : bn(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: te,
        availableHeight: Y
      });
      const D = await o.getDimensions(a.floating);
      return m !== D.width || y !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function St(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function It(e) {
  return St(e).getComputedStyle(e);
}
const $o = Math.min, ir = Math.max, oi = Math.round;
function Xa(e) {
  const t = It(e);
  let n = parseFloat(t.width), r = parseFloat(t.height);
  const i = e.offsetWidth, s = e.offsetHeight, o = oi(n) !== i || oi(r) !== s;
  return o && (n = i, r = s), { width: n, height: r, fallback: o };
}
function hn(e) {
  return Ga(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Ar;
function Wa() {
  if (Ar) return Ar;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Ar = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Ar) : navigator.userAgent;
}
function jt(e) {
  return e instanceof St(e).HTMLElement;
}
function ln(e) {
  return e instanceof St(e).Element;
}
function Ga(e) {
  return e instanceof St(e).Node;
}
function ko(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof St(e).ShadowRoot || e instanceof ShadowRoot;
}
function bi(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: i } = It(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function Hc(e) {
  return ["table", "td", "th"].includes(hn(e));
}
function os(e) {
  const t = /firefox/i.test(Wa()), n = It(e), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!r && r !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const s = n.contain;
    return s != null && s.includes(i);
  });
}
function Ka() {
  return !/^((?!chrome|android).)*safari/i.test(Wa());
}
function Fs(e) {
  return ["html", "body", "#document"].includes(hn(e));
}
function Za(e) {
  return ln(e) ? e : e.contextElement;
}
const Ja = { x: 1, y: 1 };
function Bn(e) {
  const t = Za(e);
  if (!jt(t)) return Ja;
  const n = t.getBoundingClientRect(), { width: r, height: i, fallback: s } = Xa(t);
  let o = (s ? oi(n.width) : n.width) / r, a = (s ? oi(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function pr(e, t, n, r) {
  var i, s;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Za(e);
  let l = Ja;
  t && (r ? ln(r) && (l = Bn(r)) : l = Bn(e));
  const u = a ? St(a) : window, f = !Ka() && n;
  let c = (o.left + (f && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, h = (o.top + (f && ((s = u.visualViewport) == null ? void 0 : s.offsetTop) || 0)) / l.y, p = o.width / l.x, m = o.height / l.y;
  if (a) {
    const y = St(a), v = r && ln(r) ? St(r) : r;
    let x = y.frameElement;
    for (; x && r && v !== y; ) {
      const _ = Bn(x), V = x.getBoundingClientRect(), X = getComputedStyle(x);
      V.x += (x.clientLeft + parseFloat(X.paddingLeft)) * _.x, V.y += (x.clientTop + parseFloat(X.paddingTop)) * _.y, c *= _.x, h *= _.y, p *= _.x, m *= _.y, c += V.x, h += V.y, x = St(x).frameElement;
    }
  }
  return { width: p, height: m, top: h, right: c + p, bottom: h + m, left: c, x: c, y: h };
}
function un(e) {
  return ((Ga(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function wi(e) {
  return ln(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Qa(e) {
  return pr(un(e)).left + wi(e).scrollLeft;
}
function hr(e) {
  if (hn(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || ko(e) && e.host || un(e);
  return ko(t) ? t.host : t;
}
function el(e) {
  const t = hr(e);
  return Fs(t) ? t.ownerDocument.body : jt(t) && bi(t) ? t : el(t);
}
function ai(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = el(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = St(r);
  return i ? t.concat(s, s.visualViewport || [], bi(r) ? r : []) : t.concat(r, ai(r));
}
function _o(e, t, n) {
  return t === "viewport" ? rr(function(r, i) {
    const s = St(r), o = un(r), a = s.visualViewport;
    let l = o.clientWidth, u = o.clientHeight, f = 0, c = 0;
    if (a) {
      l = a.width, u = a.height;
      const h = Ka();
      (h || !h && i === "fixed") && (f = a.offsetLeft, c = a.offsetTop);
    }
    return { width: l, height: u, x: f, y: c };
  }(e, n)) : ln(t) ? rr(function(r, i) {
    const s = pr(r, !0, i === "fixed"), o = s.top + r.clientTop, a = s.left + r.clientLeft, l = jt(r) ? Bn(r) : { x: 1, y: 1 };
    return { width: r.clientWidth * l.x, height: r.clientHeight * l.y, x: a * l.x, y: o * l.y };
  }(t, n)) : rr(function(r) {
    const i = un(r), s = wi(r), o = r.ownerDocument.body, a = ir(i.scrollWidth, i.clientWidth, o.scrollWidth, o.clientWidth), l = ir(i.scrollHeight, i.clientHeight, o.scrollHeight, o.clientHeight);
    let u = -s.scrollLeft + Qa(r);
    const f = -s.scrollTop;
    return It(o).direction === "rtl" && (u += ir(i.clientWidth, o.clientWidth) - a), { width: a, height: l, x: u, y: f };
  }(un(e)));
}
function Oo(e) {
  return jt(e) && It(e).position !== "fixed" ? e.offsetParent : null;
}
function Eo(e) {
  const t = St(e);
  let n = Oo(e);
  for (; n && Hc(n) && It(n).position === "static"; ) n = Oo(n);
  return n && (hn(n) === "html" || hn(n) === "body" && It(n).position === "static" && !os(n)) ? t : n || function(r) {
    let i = hr(r);
    for (; jt(i) && !Fs(i); ) {
      if (os(i)) return i;
      i = hr(i);
    }
    return null;
  }(e) || t;
}
function Uc(e, t, n) {
  const r = jt(t), i = un(t), s = pr(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (r || !r && n !== "fixed") if ((hn(t) !== "body" || bi(i)) && (o = wi(t)), jt(t)) {
    const l = pr(t, !0);
    a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
  } else i && (a.x = Qa(i));
  return { x: s.left + o.scrollLeft - a.x, y: s.top + o.scrollTop - a.y, width: s.width, height: s.height };
}
const qc = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
  const s = n === "clippingAncestors" ? function(u, f) {
    const c = f.get(u);
    if (c) return c;
    let h = ai(u).filter((v) => ln(v) && hn(v) !== "body"), p = null;
    const m = It(u).position === "fixed";
    let y = m ? hr(u) : u;
    for (; ln(y) && !Fs(y); ) {
      const v = It(y), x = os(y);
      (m ? x || p : x || v.position !== "static" || !p || !["absolute", "fixed"].includes(p.position)) ? p = v : h = h.filter((_) => _ !== y), y = hr(y);
    }
    return f.set(u, h), h;
  }(t, this._c) : [].concat(n), o = [...s, r], a = o[0], l = o.reduce((u, f) => {
    const c = _o(t, f, i);
    return u.top = ir(c.top, u.top), u.right = $o(c.right, u.right), u.bottom = $o(c.bottom, u.bottom), u.left = ir(c.left, u.left), u;
  }, _o(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: r } = e;
  const i = jt(n), s = un(n);
  if (n === s) return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && r !== "fixed") && ((hn(n) !== "body" || bi(s)) && (o = wi(n)), jt(n))) {
    const u = pr(n);
    a = Bn(n), l.x = u.x + n.clientLeft, l.y = u.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: ln, getDimensions: function(e) {
  return jt(e) ? Xa(e) : e.getBoundingClientRect();
}, getOffsetParent: Eo, getDocumentElement: un, getScale: Bn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: r } = e;
  const i = this.getOffsetParent || Eo, s = this.getDimensions;
  return { reference: Uc(t, await i(n), r), floating: { x: 0, y: 0, ...await s(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => It(e).direction === "rtl" }, Yc = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), i = { platform: qc, ...n }, s = { ...i.platform, _c: r };
  return Dc(e, t, { ...i, platform: s });
}, $n = {
  // Disable popper components
  disabled: !1,
  // Default position offset along main axis (px)
  distance: 5,
  // Default position offset along cross axis (px)
  skidding: 0,
  // Default container where the tooltip will be appended
  container: "body",
  // Element used to compute position and size boundaries
  boundary: void 0,
  // Skip delay & CSS transitions when another popper is shown, so that the popper appear to instanly move to the new position.
  instantMove: !1,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 150,
  // Triggers on the popper itself
  popperTriggers: [],
  // Positioning strategy
  strategy: "absolute",
  // Prevent overflow
  preventOverflow: !0,
  // Flip to the opposite placement if needed
  flip: !0,
  // Shift on the cross axis to prevent the popper from overflowing
  shift: !0,
  // Overflow padding (px)
  overflowPadding: 0,
  // Arrow padding (px)
  arrowPadding: 0,
  // Compute arrow overflow (useful to hide it)
  arrowOverflow: !0,
  /**
   * By default, compute autohide on 'click'.
   */
  autoHideOnMousedown: !1,
  // Themes
  themes: {
    tooltip: {
      // Default tooltip placement relative to target element
      placement: "top",
      // Default events that trigger the tooltip
      triggers: ["hover", "focus", "touch"],
      // Close tooltip on click on tooltip target
      hideTriggers: (e) => [...e, "click"],
      // Delay (ms)
      delay: {
        show: 200,
        hide: 0
      },
      // Update popper on content resize
      handleResize: !1,
      // Enable HTML content in directive
      html: !1,
      // Displayed when tooltip content is loading
      loadingContent: "..."
    },
    dropdown: {
      // Default dropdown placement relative to target element
      placement: "bottom",
      // Default events that trigger the dropdown
      triggers: ["click"],
      // Delay (ms)
      delay: 0,
      // Update popper on content resize
      handleResize: !0,
      // Hide on clock outside
      autoHide: !0
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function as(e, t) {
  let n = $n.themes[e] || {}, r;
  do
    r = n[t], typeof r > "u" ? n.$extend ? n = $n.themes[n.$extend] || {} : (n = null, r = $n[t]) : n = null;
  while (n);
  return r;
}
function Xc(e) {
  const t = [e];
  let n = $n.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = $n.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((r) => `v-popper--theme-${r}`);
}
function Vo(e) {
  const t = [e];
  let n = $n.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = $n.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let mr = !1;
if (typeof window < "u") {
  mr = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        mr = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let tl = !1;
typeof window < "u" && typeof navigator < "u" && (tl = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Wc = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Ao = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, Co = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function To(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Bi() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const gt = [];
let yn = null;
const Po = {};
function No(e) {
  let t = Po[e];
  return t || (t = Po[e] = []), t;
}
let ls = function() {
};
typeof window < "u" && (ls = window.Element);
function Ee(e) {
  return function(t) {
    return as(t.theme, e);
  };
}
const zi = "__floating-vue__popper", nl = () => $e({
  name: "VPopper",
  provide() {
    return {
      [zi]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [zi]: { default: null }
  },
  props: {
    theme: {
      type: String,
      required: !0
    },
    targetNodes: {
      type: Function,
      required: !0
    },
    referenceNode: {
      type: Function,
      default: null
    },
    popperNode: {
      type: Function,
      required: !0
    },
    shown: {
      type: Boolean,
      default: !1
    },
    showGroup: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: Ee("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: Ee("positioningDisabled")
    },
    placement: {
      type: String,
      default: Ee("placement"),
      validator: (e) => Wc.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: Ee("delay")
    },
    distance: {
      type: [Number, String],
      default: Ee("distance")
    },
    skidding: {
      type: [Number, String],
      default: Ee("skidding")
    },
    triggers: {
      type: Array,
      default: Ee("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: Ee("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: Ee("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: Ee("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: Ee("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: Ee("popperHideTriggers")
    },
    container: {
      type: [String, Object, ls, Boolean],
      default: Ee("container")
    },
    boundary: {
      type: [String, ls],
      default: Ee("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: Ee("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: Ee("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: Ee("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: Ee("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: Ee("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: Ee("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: Ee("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: Ee("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: Ee("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: Ee("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: Ee("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: Ee("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: Ee("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: Ee("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: Ee("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: Ee("flip")
    },
    shift: {
      type: Boolean,
      default: Ee("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: Ee("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: Ee("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: Ee("disposeTimeout")
    }
  },
  emits: {
    show: () => !0,
    hide: () => !0,
    "update:shown": (e) => !0,
    "apply-show": () => !0,
    "apply-hide": () => !0,
    "close-group": () => !0,
    "close-directive": () => !0,
    "auto-hide": () => !0,
    resize: () => !0
  },
  data() {
    return {
      isShown: !1,
      isMounted: !1,
      skipTransition: !1,
      classes: {
        showFrom: !1,
        showTo: !1,
        hideFrom: !1,
        hideTo: !0
      },
      result: {
        x: 0,
        y: 0,
        placement: "",
        strategy: this.strategy,
        arrow: {
          x: 0,
          y: 0,
          centerOffset: 0
        },
        transformOrigin: null
      },
      randomId: `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join("_")}`,
      shownChildren: /* @__PURE__ */ new Set(),
      lastAutoHide: !0,
      pendingHide: !1,
      containsGlobalTarget: !1,
      isDisposed: !0,
      mouseDownContains: !1
    };
  },
  computed: {
    popperId() {
      return this.ariaId != null ? this.ariaId : this.randomId;
    },
    shouldMountContent() {
      return this.eagerMount || this.isMounted;
    },
    slotData() {
      return {
        popperId: this.popperId,
        isShown: this.isShown,
        shouldMountContent: this.shouldMountContent,
        skipTransition: this.skipTransition,
        autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
        show: this.show,
        hide: this.hide,
        handleResize: this.handleResize,
        onResize: this.onResize,
        classes: {
          ...this.classes,
          popperClass: this.popperClass
        },
        result: this.positioningDisabled ? null : this.result,
        attrs: this.$attrs
      };
    },
    parentPopper() {
      var e;
      return (e = this[zi]) == null ? void 0 : e.parentPopper;
    },
    hasPopperShowTriggerHover() {
      var e, t;
      return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"));
    }
  },
  watch: {
    shown: "$_autoShowHide",
    disabled(e) {
      e ? this.dispose() : this.init();
    },
    async container() {
      this.isShown && (this.$_ensureTeleport(), await this.$_computePosition());
    },
    triggers: {
      handler: "$_refreshListeners",
      deep: !0
    },
    positioningDisabled: "$_refreshListeners",
    ...[
      "placement",
      "distance",
      "skidding",
      "boundary",
      "strategy",
      "overflowPadding",
      "arrowPadding",
      "preventOverflow",
      "shift",
      "shiftCrossAxis",
      "flip"
    ].reduce((e, t) => (e[t] = "$_computePosition", e), {})
  },
  created() {
    this.autoMinSize && console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
  },
  mounted() {
    this.init(), this.$_detachPopperNode();
  },
  activated() {
    this.$_autoShowHide();
  },
  deactivated() {
    this.hide();
  },
  beforeUnmount() {
    this.dispose();
  },
  methods: {
    show({ event: e = null, skipDelay: t = !1, force: n = !1 } = {}) {
      var r, i;
      (r = this.parentPopper) != null && r.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = !1, (n || !this.disabled) && (((i = this.parentPopper) == null ? void 0 : i.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
        this.$_showFrameLocked = !1;
      })), this.$emit("update:shown", !0));
    },
    hide({ event: e = null, skipDelay: t = !1 } = {}) {
      var n;
      if (!this.$_hideInProgress) {
        if (this.shownChildren.size > 0) {
          this.pendingHide = !0;
          return;
        }
        if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
          this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
            this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t }), this.parentPopper.lockedChild = null);
          }, 1e3));
          return;
        }
        ((n = this.parentPopper) == null ? void 0 : n.lockedChild) === this && (this.parentPopper.lockedChild = null), this.pendingHide = !1, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", !1);
      }
    },
    init() {
      var e;
      this.isDisposed && (this.isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = ((e = this.referenceNode) == null ? void 0 : e.call(this)) ?? this.$el, this.$_targetNodes = this.targetNodes().filter((t) => t.nodeType === t.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
    },
    dispose() {
      this.isDisposed || (this.isDisposed = !0, this.$_removeEventListeners(), this.hide({ skipDelay: !0 }), this.$_detachPopperNode(), this.isMounted = !1, this.isShown = !1, this.$_updateParentShownChildren(!1), this.$_swapTargetAttrs("data-original-title", "title"));
    },
    async onResize() {
      this.isShown && (await this.$_computePosition(), this.$emit("resize"));
    },
    async $_computePosition() {
      if (this.isDisposed || this.positioningDisabled)
        return;
      const e = {
        strategy: this.strategy,
        middleware: []
      };
      (this.distance || this.skidding) && e.middleware.push(Rc({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Ic({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Bc({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(jc({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Fc({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: r, rects: i, middlewareData: s }) => {
          let o;
          const { centerOffset: a } = s.arrow;
          return r.startsWith("top") || r.startsWith("bottom") ? o = Math.abs(a) > i.reference.width / 2 : o = Math.abs(a) > i.reference.height / 2, {
            data: {
              overflow: o
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const r = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: i, placement: s, middlewareData: o }) => {
            var a;
            if ((a = o.autoSize) != null && a.skip)
              return {};
            let l, u;
            return s.startsWith("top") || s.startsWith("bottom") ? l = i.reference.width : u = i.reference.height, this.$_innerNode.style[r === "min" ? "minWidth" : r === "max" ? "maxWidth" : "width"] = l != null ? `${l}px` : null, this.$_innerNode.style[r === "min" ? "minHeight" : r === "max" ? "maxHeight" : "height"] = u != null ? `${u}px` : null, {
              data: {
                skip: !0
              },
              reset: {
                rects: !0
              }
            };
          }
        });
      }
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(zc({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: r, availableHeight: i }) => {
          this.$_innerNode.style.maxWidth = r != null ? `${r}px` : null, this.$_innerNode.style.maxHeight = i != null ? `${i}px` : null;
        }
      })));
      const n = await Yc(this.$_referenceNode, this.$_popperNode, e);
      Object.assign(this.result, {
        x: n.x,
        y: n.y,
        placement: n.placement,
        strategy: n.strategy,
        arrow: {
          ...n.middlewareData.arrow,
          ...n.middlewareData.arrowOverflow
        }
      });
    },
    $_scheduleShow(e, t = !1) {
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), yn && this.instantMove && yn.instantMove && yn !== this.parentPopper) {
        yn.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (yn = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Bi(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...ai(this.$_referenceNode),
        ...ai(this.$_popperNode)
      ], "scroll", () => {
        this.$_computePosition();
      }));
    },
    async $_applyShowEffect() {
      if (this.$_hideInProgress)
        return;
      if (this.computeTransformOrigin) {
        const t = this.$_referenceNode.getBoundingClientRect(), n = this.$_popperNode.querySelector(".v-popper__wrapper"), r = n.parentNode.getBoundingClientRect(), i = t.x + t.width / 2 - (r.left + n.offsetLeft), s = t.y + t.height / 2 - (r.top + n.offsetTop);
        this.result.transformOrigin = `${i}px ${s}px`;
      }
      this.isShown = !0, this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      const e = this.showGroup;
      if (e) {
        let t;
        for (let n = 0; n < gt.length; n++)
          t = gt[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      gt.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Vo(this.theme))
        No(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Bi(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, To(gt, this), gt.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of Vo(this.theme)) {
        const r = No(n);
        To(r, this), r.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      yn === this && (yn = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Bi(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
    },
    $_autoShowHide() {
      this.shown ? this.show() : this.hide();
    },
    $_ensureTeleport() {
      if (this.isDisposed)
        return;
      let e = this.container;
      if (typeof e == "string" ? e = window.document.querySelector(e) : e === !1 && (e = this.$_targetNodes[0].parentNode), !e)
        throw new Error("No container for popover: " + this.container);
      e.appendChild(this.$_popperNode), this.isMounted = !0;
    },
    $_addEventListeners() {
      const e = (n) => {
        this.isShown && !this.$_hideInProgress || (n.usedByTooltip = !0, !this.$_preventShow && this.show({ event: n }));
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Ao, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Ao, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Co, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Co, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((r) => r.addEventListener(t, n, mr ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, n, r, i) {
      let s = n;
      r != null && (s = typeof r == "function" ? r(s) : r), s.forEach((o) => {
        const a = t[o];
        a && this.$_registerEventListeners(e, a, i);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((n) => {
        const { targetNodes: r, eventType: i, handler: s } = n;
        !e || e === i ? r.forEach((o) => o.removeEventListener(i, s)) : t.push(n);
      }), this.$_events = t;
    },
    $_refreshListeners() {
      this.isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
    },
    $_handleGlobalClose(e, t = !1) {
      this.$_showFrameLocked || (this.hide({ event: e }), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), t && (this.$_preventShow = !0, setTimeout(() => {
        this.$_preventShow = !1;
      }, 300)));
    },
    $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs(e, t) {
      for (const n of this.$_targetNodes) {
        const r = n.getAttribute(e);
        r && (n.removeAttribute(e), n.setAttribute(t, r));
      }
    },
    $_applyAttrsToTarget(e) {
      for (const t of this.$_targetNodes)
        for (const n in e) {
          const r = e[n];
          r == null ? t.removeAttribute(n) : t.setAttribute(n, r);
        }
    },
    $_updateParentShownChildren(e) {
      let t = this.parentPopper;
      for (; t; )
        e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()), t = t.parentPopper;
    },
    $_isAimingPopper() {
      const e = this.$_referenceNode.getBoundingClientRect();
      if (sr >= e.left && sr <= e.right && or >= e.top && or <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = sr - nn, r = or - rn, i = t.left + t.width / 2 - nn + (t.top + t.height / 2) - rn + t.width + t.height, s = nn + n * i, o = rn + r * i;
        return Cr(nn, rn, s, o, t.left, t.top, t.left, t.bottom) || // Left edge
        Cr(nn, rn, s, o, t.left, t.top, t.right, t.top) || // Top edge
        Cr(nn, rn, s, o, t.right, t.top, t.right, t.bottom) || // Right edge
        Cr(nn, rn, s, o, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (tl) {
    const e = mr ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Do(t), e), document.addEventListener("touchend", (t) => Fo(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Do(e), !0), window.addEventListener("click", (e) => Fo(e, !1), !0);
  window.addEventListener("resize", Zc);
}
function Do(e, t) {
  for (let n = 0; n < gt.length; n++) {
    const r = gt[n];
    try {
      r.mouseDownContains = r.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Fo(e, t) {
  Gc(e, t);
}
function Gc(e, t) {
  const n = {};
  for (let r = gt.length - 1; r >= 0; r--) {
    const i = gt[r];
    try {
      const s = i.containsGlobalTarget = i.mouseDownContains || i.popperNode().contains(e.target);
      i.pendingHide = !1, requestAnimationFrame(() => {
        if (i.pendingHide = !1, !n[i.randomId] && Mo(i, s, e)) {
          if (i.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && s) {
            let a = i.parentPopper;
            for (; a; )
              n[a.randomId] = !0, a = a.parentPopper;
            return;
          }
          let o = i.parentPopper;
          for (; o && Mo(o, o.containsGlobalTarget, e); )
            o.$_handleGlobalClose(e, t), o = o.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Mo(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || Kc(e, n) && !t;
}
function Kc(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function Zc() {
  for (let e = 0; e < gt.length; e++)
    gt[e].$_computePosition();
}
function Io() {
  for (let e = 0; e < gt.length; e++)
    gt[e].hide();
}
let nn = 0, rn = 0, sr = 0, or = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  nn = sr, rn = or, sr = e.clientX, or = e.clientY;
}, mr ? {
  passive: !0
} : void 0);
function Cr(e, t, n, r, i, s, o, a) {
  const l = ((o - i) * (t - s) - (a - s) * (e - i)) / ((a - s) * (n - e) - (o - i) * (r - t)), u = ((n - e) * (t - s) - (r - t) * (e - i)) / ((a - s) * (n - e) - (o - i) * (r - t));
  return l >= 0 && l <= 1 && u >= 0 && u <= 1;
}
const Jc = {
  extends: nl()
}, Ms = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
};
function Qc(e, t, n, r, i, s) {
  return F(), se("div", {
    ref: "reference",
    class: De(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    ce(e.$slots, "default", Mt(Wt(e.slotData)))
  ], 2);
}
const ed = /* @__PURE__ */ Ms(Jc, [["render", Qc]]);
function td() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var n = e.indexOf("Trident/");
  if (n > 0) {
    var r = e.indexOf("rv:");
    return parseInt(e.substring(r + 3, e.indexOf(".", r)), 10);
  }
  var i = e.indexOf("Edge/");
  return i > 0 ? parseInt(e.substring(i + 5, e.indexOf(".", i)), 10) : -1;
}
let Wr;
function us() {
  us.init || (us.init = !0, Wr = td() !== -1);
}
var xi = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    us(), mt(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Wr && this.$el.appendChild(e), e.data = "about:blank", Wr || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!Wr && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const nd = /* @__PURE__ */ Uu("data-v-b329ee4c");
zu("data-v-b329ee4c");
const rd = {
  class: "resize-observer",
  tabindex: "-1"
};
Hu();
const id = /* @__PURE__ */ nd((e, t, n, r, i, s) => (F(), ve("div", rd)));
xi.render = id;
xi.__scopeId = "data-v-b329ee4c";
xi.__file = "src/components/ResizeObserver.vue";
const rl = (e = "theme") => ({
  computed: {
    themeClass() {
      return Xc(this[e]);
    }
  }
}), sd = $e({
  name: "VPopperContent",
  components: {
    ResizeObserver: xi
  },
  mixins: [
    rl()
  ],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object
  },
  emits: [
    "hide",
    "resize"
  ],
  methods: {
    toPx(e) {
      return e != null && !isNaN(e) ? `${e}px` : null;
    }
  }
}), od = ["id", "aria-hidden", "tabindex", "data-popper-placement"], ad = {
  ref: "inner",
  class: "v-popper__inner"
}, ld = /* @__PURE__ */ ie("div", { class: "v-popper__arrow-outer" }, null, -1), ud = /* @__PURE__ */ ie("div", { class: "v-popper__arrow-inner" }, null, -1), cd = [
  ld,
  ud
];
function dd(e, t, n, r, i, s) {
  const o = ns("ResizeObserver");
  return F(), se("div", {
    id: e.popperId,
    ref: "popover",
    class: De(["v-popper__popper", [
      e.themeClass,
      e.classes.popperClass,
      {
        "v-popper__popper--shown": e.shown,
        "v-popper__popper--hidden": !e.shown,
        "v-popper__popper--show-from": e.classes.showFrom,
        "v-popper__popper--show-to": e.classes.showTo,
        "v-popper__popper--hide-from": e.classes.hideFrom,
        "v-popper__popper--hide-to": e.classes.hideTo,
        "v-popper__popper--skip-transition": e.skipTransition,
        "v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
        "v-popper__popper--no-positioning": !e.result
      }
    ]]),
    style: Sn(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = wt((a) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    ie("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (a) => e.autoHide && e.$emit("hide"))
    }),
    ie("div", {
      class: "v-popper__wrapper",
      style: Sn(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      ie("div", ad, [
        e.mounted ? (F(), se(Et, { key: 0 }, [
          ie("div", null, [
            ce(e.$slots, "default")
          ]),
          e.handleResize ? (F(), ve(o, {
            key: 0,
            onNotify: t[1] || (t[1] = (a) => e.$emit("resize", a))
          })) : pe("", !0)
        ], 64)) : pe("", !0)
      ], 512),
      ie("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: Sn(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, cd, 4)
    ], 4)
  ], 46, od);
}
const il = /* @__PURE__ */ Ms(sd, [["render", dd]]), sl = {
  methods: {
    show(...e) {
      return this.$refs.popper.show(...e);
    },
    hide(...e) {
      return this.$refs.popper.hide(...e);
    },
    dispose(...e) {
      return this.$refs.popper.dispose(...e);
    },
    onResize(...e) {
      return this.$refs.popper.onResize(...e);
    }
  }
};
let cs = function() {
};
typeof window < "u" && (cs = window.Element);
const fd = $e({
  name: "VPopperWrapper",
  components: {
    Popper: ed,
    PopperContent: il
  },
  mixins: [
    sl,
    rl("finalTheme")
  ],
  props: {
    theme: {
      type: String,
      default: null
    },
    referenceNode: {
      type: Function,
      default: null
    },
    shown: {
      type: Boolean,
      default: !1
    },
    showGroup: {
      type: String,
      default: null
    },
    // eslint-disable-next-line vue/require-prop-types
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    positioningDisabled: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: void 0
    },
    delay: {
      type: [String, Number, Object],
      default: void 0
    },
    distance: {
      type: [Number, String],
      default: void 0
    },
    skidding: {
      type: [Number, String],
      default: void 0
    },
    triggers: {
      type: Array,
      default: void 0
    },
    showTriggers: {
      type: [Array, Function],
      default: void 0
    },
    hideTriggers: {
      type: [Array, Function],
      default: void 0
    },
    popperTriggers: {
      type: Array,
      default: void 0
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: void 0
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: void 0
    },
    container: {
      type: [String, Object, cs, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, cs],
      default: void 0
    },
    strategy: {
      type: String,
      default: void 0
    },
    autoHide: {
      type: [Boolean, Function],
      default: void 0
    },
    handleResize: {
      type: Boolean,
      default: void 0
    },
    instantMove: {
      type: Boolean,
      default: void 0
    },
    eagerMount: {
      type: Boolean,
      default: void 0
    },
    popperClass: {
      type: [String, Array, Object],
      default: void 0
    },
    computeTransformOrigin: {
      type: Boolean,
      default: void 0
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: void 0
    },
    autoSize: {
      type: [Boolean, String],
      default: void 0
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: void 0
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: void 0
    },
    preventOverflow: {
      type: Boolean,
      default: void 0
    },
    overflowPadding: {
      type: [Number, String],
      default: void 0
    },
    arrowPadding: {
      type: [Number, String],
      default: void 0
    },
    arrowOverflow: {
      type: Boolean,
      default: void 0
    },
    flip: {
      type: Boolean,
      default: void 0
    },
    shift: {
      type: Boolean,
      default: void 0
    },
    shiftCrossAxis: {
      type: Boolean,
      default: void 0
    },
    noAutoFocus: {
      type: Boolean,
      default: void 0
    },
    disposeTimeout: {
      type: Number,
      default: void 0
    }
  },
  emits: {
    show: () => !0,
    hide: () => !0,
    "update:shown": (e) => !0,
    "apply-show": () => !0,
    "apply-hide": () => !0,
    "close-group": () => !0,
    "close-directive": () => !0,
    "auto-hide": () => !0,
    resize: () => !0
  },
  computed: {
    finalTheme() {
      return this.theme ?? this.$options.vPopperTheme;
    }
  },
  methods: {
    getTargetNodes() {
      return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
    }
  }
});
function pd(e, t, n, r, i, s) {
  const o = ns("PopperContent"), a = ns("Popper");
  return F(), ve(a, ke({ ref: "popper" }, e.$props, {
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: [
      e.themeClass
    ],
    onShow: t[0] || (t[0] = () => e.$emit("show")),
    onHide: t[1] || (t[1] = () => e.$emit("hide")),
    "onUpdate:shown": t[2] || (t[2] = (l) => e.$emit("update:shown", l)),
    onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
    onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
    onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
    onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
    onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
    onResize: t[8] || (t[8] = () => e.$emit("resize"))
  }), {
    default: de(({
      popperId: l,
      isShown: u,
      shouldMountContent: f,
      skipTransition: c,
      autoHide: h,
      show: p,
      hide: m,
      handleResize: y,
      onResize: v,
      classes: x,
      result: _
    }) => [
      ce(e.$slots, "default", {
        shown: u,
        show: p,
        hide: m
      }),
      me(o, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: u,
        mounted: f,
        "skip-transition": c,
        "auto-hide": h,
        "handle-resize": y,
        classes: x,
        result: _,
        onHide: m,
        onResize: v
      }, {
        default: de(() => [
          ce(e.$slots, "popper", {
            shown: u,
            hide: m
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const Is = /* @__PURE__ */ Ms(fd, [["render", pd]]), hd = {
  ...Is,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...Is
});
({
  ...Is
});
$e({
  name: "VTooltipDirective",
  components: {
    Popper: nl(),
    PopperContent: il
  },
  mixins: [
    sl
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => as(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => as(e.theme, "loadingContent")
    },
    targetNodes: {
      type: Function,
      required: !0
    }
  },
  data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync() {
      return typeof this.content == "function";
    },
    loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent() {
      return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
    }
  },
  watch: {
    content: {
      handler() {
        this.fetchContent(!0);
      },
      immediate: !0
    },
    async finalContent() {
      await this.$nextTick(), this.$refs.popper.onResize();
    }
  },
  created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent(e) {
      if (typeof this.content == "function" && this.$_isShown && (e || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null, this.$_loading = !0;
        const t = ++this.$_fetchId, n = this.content(this);
        n.then ? n.then((r) => this.onResult(t, r)) : this.onResult(t, n);
      }
    },
    onResult(e, t) {
      e === this.$_fetchId && (this.$_loading = !1, this.asyncContent = t);
    },
    onShow() {
      this.$_isShown = !0, this.fetchContent();
    },
    onHide() {
      this.$_isShown = !1;
    }
  }
});
const md = hd, vd = /* @__PURE__ */ $e({
  __name: "XDivider",
  props: {
    color: {
      type: String,
      default: "gray",
      validator: (e) => ["primary", "gray"].includes(e)
    },
    vertical: Boolean
  },
  setup(e) {
    const t = e, n = T(() => [
      "x-divider",
      "x-divider--" + t.color,
      { "x-divider--vertical": t.vertical }
    ]);
    return (r, i) => (F(), se("hr", {
      class: De(n.value)
    }, null, 2));
  }
}), gd = { class: "x-checkbox__control" }, yd = {
  key: 0,
  class: "x-checkbox__text"
}, bd = {
  key: 0,
  class: "x-checkbox__text"
}, wd = ["name", "checked", "value", "disabled", "data-test-id"], xd = /* @__PURE__ */ $e({
  inheritAttrs: !1,
  __name: "XCheckbox",
  props: {
    value: {
      type: null,
      default: null
    },
    modelValue: {
      type: null,
      default: null
    },
    name: {
      type: String,
      default: ""
    },
    testId: {
      type: String,
      default: ""
    },
    classic: Boolean,
    toggle: Boolean,
    bordered: Boolean,
    disabled: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = Cn(), r = e, i = t, s = T(() => r.modelValue instanceof Array ? r.modelValue.includes(r.value) : r.modelValue || r.value), o = T(() => ({
      ...n,
      iconProps: {
        style: {
          fill: "none",
          stroke: "none"
        }
      }
    })), a = T(() => [
      "x-checkbox",
      "x-checkbox--classic",
      { "x-checkbox--active": H(s) },
      { "x-checkbox--disabled": r.disabled },
      { "x-checkbox--bordered": r.bordered }
    ]), l = T(() => [
      "x-checkbox",
      "x-checkbox--toggle",
      { "x-checkbox--active": H(s) },
      { "x-checkbox--disabled": r.disabled }
    ]), u = (f) => {
      const h = f.target.checked;
      if (r.modelValue instanceof Array) {
        const p = [...r.modelValue];
        h ? p.push(r.value) : p.splice(p.indexOf(r.value), 1), i("update:modelValue", p, h);
      } else
        i("update:modelValue", h);
    };
    return (f, c) => (F(), se("label", null, [
      e.classic ? (F(), se("div", {
        key: 0,
        class: De(a.value)
      }, [
        ie("div", gd, [
          s.value ? (F(), ve(M(Je), {
            key: 0,
            name: "checkmark",
            class: "x-checkbox__mark",
            size: "12"
          })) : pe("", !0)
        ]),
        f.$slots.text ? (F(), se("div", yd, [
          ce(f.$slots, "text", {}, void 0, !0)
        ])) : pe("", !0)
      ], 2)) : e.toggle ? (F(), se("div", {
        key: 1,
        class: De(l.value)
      }, [
        f.$slots.text ? (F(), se("div", bd, [
          ce(f.$slots, "text", {}, void 0, !0)
        ])) : pe("", !0),
        ie("div", {
          class: De(["x-checkbox__control", { "x-checkbox__control--active": s.value }])
        }, null, 2)
      ], 2)) : (F(), ve(M(Ha), ke({ key: 2 }, o.value, {
        active: s.value,
        disabled: e.disabled
      }), {
        default: de(() => [
          ce(f.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 16, ["active", "disabled"])),
      vt(ie("input", {
        name: e.name,
        checked: s.value,
        value: e.value,
        disabled: e.disabled,
        "data-test-id": e.testId,
        type: "checkbox",
        onChange: u
      }, null, 40, wd), [
        [Ft, !1]
      ])
    ]));
  }
}), ol = /* @__PURE__ */ qe(xd, [["__scopeId", "data-v-99b428ca"]]), Sd = (e = 100) => {
  const t = Ue(0);
  return {
    handleThrottleEvent: (r) => {
      const i = (/* @__PURE__ */ new Date()).getTime();
      i - t.value < e && r.stopPropagation(), t.value = i;
    }
  };
}, $d = { class: "x-list-item__content" }, ds = /* @__PURE__ */ $e({
  inheritAttrs: !1,
  __name: "XListItem",
  props: {
    checkbox: Boolean,
    checked: Boolean,
    prependIcon: String,
    prependIconProps: Object,
    appendIcon: String,
    appendIconProps: Object,
    markSelectedOption: Boolean,
    isTruncate: Boolean,
    rounded: Boolean
  },
  setup(e) {
    const { handleThrottleEvent: t } = Sd(), n = e, r = T(() => [
      "x-list-item",
      {
        "x-list-item--checked": n.checked,
        "x-list-item--mark-selected-option": n.markSelectedOption,
        "x-list-item--truncate": n.isTruncate,
        "x-list-item--rounded": n.rounded
      }
    ]), i = T(() => [
      "x-list-item__checkmark",
      { "x-list-item__checkmark--checked": n.checked }
    ]);
    return (s, o) => (F(), se("button", {
      class: De(r.value),
      type: "button"
    }, [
      e.checkbox && !e.markSelectedOption ? (F(), se("div", {
        key: 0,
        class: "mr-2",
        onClick: o[0] || (o[0] = //@ts-ignore
        (...a) => M(t) && M(t)(...a))
      }, [
        me(M(ol), {
          value: e.checked,
          classic: ""
        }, null, 8, ["value"])
      ])) : pe("", !0),
      e.markSelectedOption && e.checked ? (F(), ve(M(Je), {
        key: 1,
        class: De(i.value),
        name: "checkmark",
        size: "16"
      }, null, 8, ["class"])) : pe("", !0),
      e.prependIcon ? (F(), ve(M(Je), ke({
        key: 2,
        name: e.prependIcon,
        size: "24",
        class: "x-list-item__prepend-icon"
      }, e.prependIconProps), null, 16, ["name"])) : pe("", !0),
      ie("div", $d, [
        ce(s.$slots, "default")
      ]),
      e.appendIcon ? (F(), ve(M(Je), ke({
        key: 3,
        name: e.appendIcon,
        size: "16",
        class: "x-list-item__append-icon"
      }, e.appendIconProps), null, 16, ["name"])) : pe("", !0)
    ], 2));
  }
}), kd = { class: "x-list" }, dv = /* @__PURE__ */ $e({
  inheritAttrs: !1,
  __name: "XList",
  props: {
    value: null,
    items: Array,
    itemText: Function,
    itemTextKey: String,
    itemValue: Function,
    itemValueKey: String,
    prependIcon: [Function, String],
    prependIconKey: String,
    prependIconProps: Object,
    appendIcon: [Function, String],
    appendIconKey: String,
    appendIconProps: Object
  },
  emits: ["input"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = T(() => Array.isArray(n.value)), s = (c, h) => n.itemText ? n.itemText(c, h) : n.itemTextKey ? c[n.itemTextKey] : c, o = (c, h) => n.itemValue ? n.itemValue(c, h) : n.itemValueKey ? c[n.itemValueKey] : c, a = (c, h) => {
      if (n.prependIcon)
        return typeof n.prependIcon == "string" ? n.prependIcon : n.prependIcon(c, h);
      if (n.prependIconKey) return c[n.prependIconKey];
    }, l = (c, h) => {
      if (n.appendIcon)
        return typeof n.appendIcon == "string" ? n.appendIcon : n.appendIcon(c, h);
      if (n.appendIconKey) return c[n.appendIconKey];
    }, u = (c) => H(i) ? n.value.includes(c) : n.value === c, f = (c) => {
      if (H(i)) {
        let h;
        const p = n.value.indexOf(c);
        if (p !== -1) {
          const m = [...n.value];
          m.splice(p, 1), h = m;
        } else
          h = n.value.concat(c);
        r("input", h);
      } else n.value !== c && r("input", c);
    };
    return (c, h) => (F(), se("div", kd, [
      (F(!0), se(Et, null, pn(e.items, (p, m) => (F(), ve(ds, {
        key: m,
        checked: u(o(p, m)),
        "prepend-icon": a(p, m),
        "prepend-icon-props": e.prependIconProps,
        "append-icon": l(p, m),
        "append-icon-props": e.appendIconProps,
        onClick: (y) => f(o(p, m))
      }, {
        default: de(() => [
          ce(c.$slots, "default", {
            item: p,
            index: m
          }, () => [
            je(Te(s(p, m)), 1)
          ])
        ]),
        _: 2
      }, 1032, ["checked", "prepend-icon", "prepend-icon-props", "append-icon", "append-icon-props", "onClick"]))), 128))
    ]));
  }
}), _d = { class: "x-tag__content" }, Od = /* @__PURE__ */ $e({
  __name: "XTag",
  props: {
    color: {
      type: String,
      default: "primary",
      validator: (e) => ["primary", "gray"].includes(e)
    },
    size: {
      type: String,
      default: "s",
      validator: (e) => ["s"].includes(e)
    },
    prependIcon: {
      type: String,
      default: ""
    },
    outline: Boolean,
    closable: Boolean,
    truncate: Boolean
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = T(() => [
      "x-tag",
      "x-tag--" + n.color,
      "x-tag--size-" + n.size,
      {
        "x-tag--outline": n.outline,
        "x-tag--truncate": n.truncate
      }
    ]), s = () => r("close");
    return (o, a) => (F(), se("div", {
      class: De(i.value)
    }, [
      e.prependIcon ? (F(), ve(M(Je), {
        key: 0,
        name: e.prependIcon,
        class: "x-tag__prepend-icon"
      }, null, 8, ["name"])) : pe("", !0),
      ie("div", _d, [
        ce(o.$slots, "default", {}, void 0, !0)
      ]),
      e.closable ? (F(), ve(M(Je), {
        key: 1,
        name: "close",
        class: "x-tag__close-icon",
        size: "10",
        onClick: s
      })) : pe("", !0)
    ], 2));
  }
}), jo = /* @__PURE__ */ qe(Od, [["__scopeId", "data-v-8779c487"]]);
/**
  * vee-validate v4.15.1
  * (c) 2025 Abdelrahman Awad
  * @license MIT
  */
function dt(e) {
  return typeof e == "function";
}
function al(e) {
  return e == null;
}
const mn = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function js(e) {
  return Number(e) >= 0;
}
function Ed(e) {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}
function Vd(e) {
  return typeof e == "object" && e !== null;
}
function Ad(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function Lo(e) {
  if (!Vd(e) || Ad(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function vr(e, t) {
  return Object.keys(t).forEach((n) => {
    if (Lo(t[n]) && Lo(e[n])) {
      e[n] || (e[n] = {}), vr(e[n], t[n]);
      return;
    }
    e[n] = t[n];
  }), e;
}
function Qn(e) {
  const t = e.split(".");
  if (!t.length)
    return "";
  let n = String(t[0]);
  for (let r = 1; r < t.length; r++) {
    if (js(t[r])) {
      n += `[${t[r]}]`;
      continue;
    }
    n += `.${t[r]}`;
  }
  return n;
}
const Cd = {};
function Td(e) {
  return Cd[e];
}
function Ro(e, t, n) {
  typeof n.value == "object" && (n.value = Ae(n.value)), !n.enumerable || n.get || n.set || !n.configurable || !n.writable || t === "__proto__" ? Object.defineProperty(e, t, n) : e[t] = n.value;
}
function Ae(e) {
  if (typeof e != "object") return e;
  var t = 0, n, r, i, s = Object.prototype.toString.call(e);
  if (s === "[object Object]" ? i = Object.create(e.__proto__ || null) : s === "[object Array]" ? i = Array(e.length) : s === "[object Set]" ? (i = /* @__PURE__ */ new Set(), e.forEach(function(o) {
    i.add(Ae(o));
  })) : s === "[object Map]" ? (i = /* @__PURE__ */ new Map(), e.forEach(function(o, a) {
    i.set(Ae(a), Ae(o));
  })) : s === "[object Date]" ? i = /* @__PURE__ */ new Date(+e) : s === "[object RegExp]" ? i = new RegExp(e.source, e.flags) : s === "[object DataView]" ? i = new e.constructor(Ae(e.buffer)) : s === "[object ArrayBuffer]" ? i = e.slice(0) : s.slice(-6) === "Array]" && (i = new e.constructor(e)), i) {
    for (r = Object.getOwnPropertySymbols(e); t < r.length; t++)
      Ro(i, r[t], Object.getOwnPropertyDescriptor(e, r[t]));
    for (t = 0, r = Object.getOwnPropertyNames(e); t < r.length; t++)
      Object.hasOwnProperty.call(i, n = r[t]) && i[n] === e[n] || Ro(i, n, Object.getOwnPropertyDescriptor(e, n));
  }
  return i || e;
}
const Ls = Symbol("vee-validate-form"), Pd = Symbol("vee-validate-form-context"), Nd = Symbol("vee-validate-field-instance"), Bo = Symbol("Default empty value"), ll = typeof window < "u";
function fs(e) {
  return dt(e) && !!e.__locatorRef;
}
function _t(e) {
  return !!e && dt(e.parse) && e.__type === "VVTypedSchema";
}
function li(e) {
  return !!e && dt(e.validate);
}
function ul(e) {
  return e === "checkbox" || e === "radio";
}
function Dd(e) {
  return mn(e) || Array.isArray(e);
}
function Fd(e) {
  return Array.isArray(e) ? e.length === 0 : mn(e) && Object.keys(e).length === 0;
}
function Si(e) {
  return /^\[.+\]$/i.test(e);
}
function Md(e) {
  return cl(e) && e.multiple;
}
function cl(e) {
  return e.tagName === "SELECT";
}
function dl(e) {
  return Rs(e) && e.target && "submit" in e.target;
}
function Rs(e) {
  return e ? !!(typeof Event < "u" && dt(Event) && e instanceof Event || e && e.srcElement) : !1;
}
function st(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var n, r, i;
    if (Array.isArray(e)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (!st(e[r], t[r]))
          return !1;
      return !0;
    }
    if (e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (r of e.entries())
        if (!t.has(r[0]))
          return !1;
      for (r of e.entries())
        if (!st(r[1], t.get(r[0])))
          return !1;
      return !0;
    }
    if (Ho(e) && Ho(t))
      return !(e.size !== t.size || e.name !== t.name || e.lastModified !== t.lastModified || e.type !== t.type);
    if (e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (r of e.entries())
        if (!t.has(r[0]))
          return !1;
      return !0;
    }
    if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (n = e.length, n != t.length)
        return !1;
      for (r = n; r-- !== 0; )
        if (e[r] !== t[r])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    if (e = zo(e), t = zo(t), i = Object.keys(e), n = i.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      var s = i[r];
      if (!st(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function zo(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function Ho(e) {
  return ll ? e instanceof File : !1;
}
function Bs(e) {
  return Si(e) ? e.replace(/\[|\]/gi, "") : e;
}
function ft(e, t, n) {
  return e ? Si(t) ? e[Bs(t)] : (t || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((i, s) => Dd(i) && s in i ? i[s] : n, e) : n;
}
function Pt(e, t, n) {
  if (Si(t)) {
    e[Bs(t)] = n;
    return;
  }
  const r = t.split(/\.|\[(\d+)\]/).filter(Boolean);
  let i = e;
  for (let s = 0; s < r.length; s++) {
    if (s === r.length - 1) {
      i[r[s]] = n;
      return;
    }
    (!(r[s] in i) || al(i[r[s]])) && (i[r[s]] = js(r[s + 1]) ? [] : {}), i = i[r[s]];
  }
}
function Hi(e, t) {
  if (Array.isArray(e) && js(t)) {
    e.splice(Number(t), 1);
    return;
  }
  mn(e) && delete e[t];
}
function Uo(e, t) {
  if (Si(t)) {
    delete e[Bs(t)];
    return;
  }
  const n = t.split(/\.|\[(\d+)\]/).filter(Boolean);
  let r = e;
  for (let s = 0; s < n.length; s++) {
    if (s === n.length - 1) {
      Hi(r, n[s]);
      break;
    }
    if (!(n[s] in r) || al(r[n[s]]))
      break;
    r = r[n[s]];
  }
  const i = n.map((s, o) => ft(e, n.slice(0, o).join(".")));
  for (let s = i.length - 1; s >= 0; s--)
    if (Fd(i[s])) {
      if (s === 0) {
        Hi(e, n[0]);
        continue;
      }
      Hi(i[s - 1], n[s - 1]);
    }
}
function at(e) {
  return Object.keys(e);
}
function fl(e, t = void 0) {
  const n = fn();
  return (n == null ? void 0 : n.provides[e]) || La(e, t);
}
function qo(e, t, n) {
  if (Array.isArray(e)) {
    const r = [...e], i = r.findIndex((s) => st(s, t));
    return i >= 0 ? r.splice(i, 1) : r.push(t), r;
  }
  return st(e, t) ? n : t;
}
function Id(e, t) {
  let n, r;
  return function(...i) {
    const s = this;
    return n || (n = !0, setTimeout(() => n = !1, t), r = e.apply(s, i)), r;
  };
}
function Yo(e, t = 0) {
  let n = null, r = [];
  return function(...i) {
    return n && clearTimeout(n), n = setTimeout(() => {
      const s = e(...i);
      r.forEach((o) => o(s)), r = [];
    }, t), new Promise((s) => r.push(s));
  };
}
function jd(e, t) {
  return mn(t) && t.number ? Ed(e) : e;
}
function ps(e, t) {
  let n;
  return async function(...i) {
    const s = e(...i);
    n = s;
    const o = await s;
    return s !== n ? o : (n = void 0, t(o, i));
  };
}
function hs(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
function Tr(e, t) {
  const n = {};
  for (const r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function Ld(e) {
  let t = null, n = [];
  return function(...r) {
    const i = mt(() => {
      if (t !== i)
        return;
      const s = e(...r);
      n.forEach((o) => o(s)), n = [], t = null;
    });
    return t = i, new Promise((s) => n.push(s));
  };
}
function Rd(e, t, n) {
  return t.slots.default ? typeof e == "string" || !e ? t.slots.default(n()) : {
    default: () => {
      var r, i;
      return (i = (r = t.slots).default) === null || i === void 0 ? void 0 : i.call(r, n());
    }
  } : t.slots.default;
}
function Ui(e) {
  if (pl(e))
    return e._value;
}
function pl(e) {
  return "_value" in e;
}
function Bd(e) {
  return e.type === "number" || e.type === "range" ? Number.isNaN(e.valueAsNumber) ? e.value : e.valueAsNumber : e.value;
}
function ui(e) {
  if (!Rs(e))
    return e;
  const t = e.target;
  if (ul(t.type) && pl(t))
    return Ui(t);
  if (t.type === "file" && t.files) {
    const n = Array.from(t.files);
    return t.multiple ? n : n[0];
  }
  if (Md(t))
    return Array.from(t.options).filter((n) => n.selected && !n.disabled).map(Ui);
  if (cl(t)) {
    const n = Array.from(t.options).find((r) => r.selected);
    return n ? Ui(n) : t.value;
  }
  return Bd(t);
}
function hl(e) {
  const t = {};
  return Object.defineProperty(t, "_$$isNormalized", {
    value: !0,
    writable: !1,
    enumerable: !1,
    configurable: !1
  }), e ? mn(e) && e._$$isNormalized ? e : mn(e) ? Object.keys(e).reduce((n, r) => {
    const i = zd(e[r]);
    return e[r] !== !1 && (n[r] = Xo(i)), n;
  }, t) : typeof e != "string" ? t : e.split("|").reduce((n, r) => {
    const i = Hd(r);
    return i.name && (n[i.name] = Xo(i.params)), n;
  }, t) : t;
}
function zd(e) {
  return e === !0 ? [] : Array.isArray(e) || mn(e) ? e : [e];
}
function Xo(e) {
  const t = (n) => typeof n == "string" && n[0] === "@" ? Ud(n.slice(1)) : n;
  return Array.isArray(e) ? e.map(t) : e instanceof RegExp ? [e] : Object.keys(e).reduce((n, r) => (n[r] = t(e[r]), n), {});
}
const Hd = (e) => {
  let t = [];
  const n = e.split(":")[0];
  return e.includes(":") && (t = e.split(":").slice(1).join(":").split(",")), { name: n, params: t };
};
function Ud(e) {
  const t = (n) => {
    var r;
    return (r = ft(n, e)) !== null && r !== void 0 ? r : n[e];
  };
  return t.__locatorRef = e, t;
}
function qd(e) {
  return Array.isArray(e) ? e.filter(fs) : at(e).filter((t) => fs(e[t])).map((t) => e[t]);
}
const Yd = {
  generateMessage: ({ field: e }) => `${e} is not valid.`,
  bails: !0,
  validateOnBlur: !0,
  validateOnChange: !0,
  validateOnInput: !1,
  validateOnModelUpdate: !0
};
let Xd = Object.assign({}, Yd);
const er = () => Xd;
async function ml(e, t, n = {}) {
  const r = n == null ? void 0 : n.bails, i = {
    name: (n == null ? void 0 : n.name) || "{field}",
    rules: t,
    label: n == null ? void 0 : n.label,
    bails: r ?? !0,
    formData: (n == null ? void 0 : n.values) || {}
  }, s = await Wd(i, e);
  return Object.assign(Object.assign({}, s), { valid: !s.errors.length });
}
async function Wd(e, t) {
  const n = e.rules;
  if (_t(n) || li(n))
    return Kd(t, Object.assign(Object.assign({}, e), { rules: n }));
  if (dt(n) || Array.isArray(n)) {
    const a = {
      field: e.label || e.name,
      name: e.name,
      label: e.label,
      form: e.formData,
      value: t
    }, l = Array.isArray(n) ? n : [n], u = l.length, f = [];
    for (let c = 0; c < u; c++) {
      const h = l[c], p = await h(t, a);
      if (!(typeof p != "string" && !Array.isArray(p) && p)) {
        if (Array.isArray(p))
          f.push(...p);
        else {
          const y = typeof p == "string" ? p : gl(a);
          f.push(y);
        }
        if (e.bails)
          return {
            errors: f
          };
      }
    }
    return {
      errors: f
    };
  }
  const r = Object.assign(Object.assign({}, e), { rules: hl(n) }), i = [], s = Object.keys(r.rules), o = s.length;
  for (let a = 0; a < o; a++) {
    const l = s[a], u = await Zd(r, t, {
      name: l,
      params: r.rules[l]
    });
    if (u.error && (i.push(u.error), e.bails))
      return {
        errors: i
      };
  }
  return {
    errors: i
  };
}
function Gd(e) {
  return !!e && e.name === "ValidationError";
}
function vl(e) {
  return {
    __type: "VVTypedSchema",
    async parse(n, r) {
      var i;
      try {
        return {
          output: await e.validate(n, { abortEarly: !1, context: (r == null ? void 0 : r.formData) || {} }),
          errors: []
        };
      } catch (s) {
        if (!Gd(s))
          throw s;
        if (!(!((i = s.inner) === null || i === void 0) && i.length) && s.errors.length)
          return { errors: [{ path: s.path, errors: s.errors }] };
        const o = s.inner.reduce((a, l) => {
          const u = l.path || "";
          return a[u] || (a[u] = { errors: [], path: u }), a[u].errors.push(...l.errors), a;
        }, {});
        return { errors: Object.values(o) };
      }
    }
  };
}
async function Kd(e, t) {
  const r = await (_t(t.rules) ? t.rules : vl(t.rules)).parse(e, { formData: t.formData }), i = [];
  for (const s of r.errors)
    s.errors.length && i.push(...s.errors);
  return {
    value: r.value,
    errors: i
  };
}
async function Zd(e, t, n) {
  const r = Td(n.name);
  if (!r)
    throw new Error(`No such validator '${n.name}' exists.`);
  const i = Jd(n.params, e.formData), s = {
    field: e.label || e.name,
    name: e.name,
    label: e.label,
    value: t,
    form: e.formData,
    rule: Object.assign(Object.assign({}, n), { params: i })
  }, o = await r(t, i, s);
  return typeof o == "string" ? {
    error: o
  } : {
    error: o ? void 0 : gl(s)
  };
}
function gl(e) {
  const t = er().generateMessage;
  return t ? t(e) : "Field is invalid";
}
function Jd(e, t) {
  const n = (r) => fs(r) ? r(t) : r;
  return Array.isArray(e) ? e.map(n) : Object.keys(e).reduce((r, i) => (r[i] = n(e[i]), r), {});
}
async function Qd(e, t) {
  const r = await (_t(e) ? e : vl(e)).parse(Ae(t), { formData: Ae(t) }), i = {}, s = {};
  for (const o of r.errors) {
    const a = o.errors, l = (o.path || "").replace(/\["(\d+)"\]/g, (u, f) => `[${f}]`);
    i[l] = { valid: !a.length, errors: a }, a.length && (s[l] = a[0]);
  }
  return {
    valid: !r.errors.length,
    results: i,
    errors: s,
    values: r.value,
    source: "schema"
  };
}
async function ef(e, t, n) {
  const i = at(e).map(async (u) => {
    var f, c, h;
    const p = (f = n == null ? void 0 : n.names) === null || f === void 0 ? void 0 : f[u], m = await ml(ft(t, u), e[u], {
      name: (p == null ? void 0 : p.name) || u,
      label: p == null ? void 0 : p.label,
      values: t,
      bails: (h = (c = n == null ? void 0 : n.bailsMap) === null || c === void 0 ? void 0 : c[u]) !== null && h !== void 0 ? h : !0
    });
    return Object.assign(Object.assign({}, m), { path: u });
  });
  let s = !0;
  const o = await Promise.all(i), a = {}, l = {};
  for (const u of o)
    a[u.path] = {
      valid: u.valid,
      errors: u.errors
    }, u.valid || (s = !1, l[u.path] = u.errors[0]);
  return {
    valid: s,
    results: a,
    errors: l,
    source: "schema"
  };
}
let Wo = 0;
function tf(e, t) {
  const { value: n, initialValue: r, setInitialValue: i } = nf(e, t.modelValue, t.form);
  if (!t.form) {
    let h = function(p) {
      var m;
      "value" in p && (n.value = p.value), "errors" in p && u(p.errors), "touched" in p && (c.touched = (m = p.touched) !== null && m !== void 0 ? m : c.touched), "initialValue" in p && i(p.initialValue);
    };
    const { errors: l, setErrors: u } = of(), f = Wo >= Number.MAX_SAFE_INTEGER ? 0 : ++Wo, c = sf(n, r, l, t.schema);
    return {
      id: f,
      path: e,
      value: n,
      initialValue: r,
      meta: c,
      flags: { pendingUnmount: { [f]: !1 }, pendingReset: !1 },
      errors: l,
      setState: h
    };
  }
  const s = t.form.createPathState(e, {
    bails: t.bails,
    label: t.label,
    type: t.type,
    validate: t.validate,
    schema: t.schema
  }), o = T(() => s.errors);
  function a(l) {
    var u, f, c;
    "value" in l && (n.value = l.value), "errors" in l && ((u = t.form) === null || u === void 0 || u.setFieldError(M(e), l.errors)), "touched" in l && ((f = t.form) === null || f === void 0 || f.setFieldTouched(M(e), (c = l.touched) !== null && c !== void 0 ? c : !1)), "initialValue" in l && i(l.initialValue);
  }
  return {
    id: Array.isArray(s.id) ? s.id[s.id.length - 1] : s.id,
    path: e,
    value: n,
    errors: o,
    meta: s,
    initialValue: r,
    flags: s.__flags,
    setState: a
  };
}
function nf(e, t, n) {
  const r = Ue(M(t));
  function i() {
    return n ? ft(n.initialValues.value, M(e), M(r)) : M(r);
  }
  function s(u) {
    if (!n) {
      r.value = u;
      return;
    }
    n.setFieldInitialValue(M(e), u, !0);
  }
  const o = T(i);
  if (!n)
    return {
      value: Ue(i()),
      initialValue: o,
      setInitialValue: s
    };
  const a = rf(t, n, o, e);
  return n.stageInitialValue(M(e), a, !0), {
    value: T({
      get() {
        return ft(n.values, M(e));
      },
      set(u) {
        n.setFieldValue(M(e), u, !1);
      }
    }),
    initialValue: o,
    setInitialValue: s
  };
}
function rf(e, t, n, r) {
  return ni(e) ? M(e) : e !== void 0 ? e : ft(t.values, M(r), M(n));
}
function sf(e, t, n, r) {
  const i = T(() => {
    var o, a, l;
    return (l = (a = (o = H(r)) === null || o === void 0 ? void 0 : o.describe) === null || a === void 0 ? void 0 : a.call(o).required) !== null && l !== void 0 ? l : !1;
  }), s = Vt({
    touched: !1,
    pending: !1,
    valid: !0,
    required: i,
    validated: !!M(n).length,
    initialValue: T(() => M(t)),
    dirty: T(() => !st(M(e), M(t)))
  });
  return Ie(n, (o) => {
    s.valid = !o.length;
  }, {
    immediate: !0,
    flush: "sync"
  }), s;
}
function of() {
  const e = Ue([]);
  return {
    errors: e,
    setErrors: (t) => {
      e.value = hs(t);
    }
  };
}
const ar = {}, lr = {}, ur = "vee-validate-inspector", lt = {
  error: 12405579,
  success: 448379,
  unknown: 5522283,
  white: 16777215,
  black: 0,
  blue: 218007,
  purple: 12157168,
  orange: 16099682,
  gray: 12304330
};
let Ke = null, Xt;
async function yl(e) {
  if (process.env.NODE_ENV !== "production") {
    if (!ll)
      return;
    (await import("./index-T3jqfug4.js")).setupDevtoolsPlugin({
      id: "vee-validate-devtools-plugin",
      label: "VeeValidate Plugin",
      packageName: "vee-validate",
      homepage: "https://vee-validate.logaretm.com/v4",
      app: e,
      logo: "https://vee-validate.logaretm.com/v4/logo.png"
    }, (n) => {
      Xt = n, n.addInspector({
        id: ur,
        icon: "rule",
        label: "vee-validate",
        noSelectionText: "Select a vee-validate node to inspect",
        actions: [
          {
            icon: "done_outline",
            tooltip: "Validate selected item",
            action: async () => {
              if (!Ke) {
                console.error("There is not a valid selected vee-validate node or component");
                return;
              }
              if (Ke.type === "field") {
                await Ke.field.validate();
                return;
              }
              if (Ke.type === "form") {
                await Ke.form.validate();
                return;
              }
              Ke.type === "pathState" && await Ke.form.validateField(Ke.state.path);
            }
          },
          {
            icon: "delete_sweep",
            tooltip: "Clear validation state of the selected item",
            action: () => {
              if (!Ke) {
                console.error("There is not a valid selected vee-validate node or component");
                return;
              }
              if (Ke.type === "field") {
                Ke.field.resetField();
                return;
              }
              Ke.type === "form" && Ke.form.resetForm(), Ke.type === "pathState" && Ke.form.resetField(Ke.state.path);
            }
          }
        ]
      }), n.on.getInspectorTree((r) => {
        if (r.inspectorId !== ur)
          return;
        const i = Object.values(ar), s = Object.values(lr);
        r.rootNodes = [
          ...i.map(uf),
          ...s.map((o) => df(o))
        ];
      }), n.on.getInspectorState((r) => {
        if (r.inspectorId !== ur)
          return;
        const { form: i, field: s, state: o, type: a } = ff(r.nodeId);
        if (n.unhighlightElement(), i && a === "form") {
          r.state = pf(i), Ke = { type: "form", form: i }, n.highlightElement(i._vm);
          return;
        }
        if (o && a === "pathState" && i) {
          r.state = Go(o), Ke = { type: "pathState", state: o, form: i };
          return;
        }
        if (s && a === "field") {
          r.state = Go({
            errors: s.errors.value,
            dirty: s.meta.dirty,
            valid: s.meta.valid,
            touched: s.meta.touched,
            value: s.value.value,
            initialValue: s.meta.initialValue
          }), Ke = { field: s, type: "field" }, n.highlightElement(s._vm);
          return;
        }
        Ke = null, n.unhighlightElement();
      });
    });
  }
}
const Hn = Id(() => {
  setTimeout(async () => {
    await mt(), Xt == null || Xt.sendInspectorState(ur), Xt == null || Xt.sendInspectorTree(ur);
  }, 100);
}, 100);
function af(e) {
  const t = fn();
  if (!Xt) {
    const n = t == null ? void 0 : t.appContext.app;
    if (!n)
      return;
    yl(n);
  }
  ar[e.formId] = Object.assign({}, e), ar[e.formId]._vm = t, Ps(() => {
    delete ar[e.formId], Hn();
  }), Hn();
}
function lf(e) {
  const t = fn();
  if (!Xt) {
    const n = t == null ? void 0 : t.appContext.app;
    if (!n)
      return;
    yl(n);
  }
  lr[e.id] = Object.assign({}, e), lr[e.id]._vm = t, Ps(() => {
    delete lr[e.id], Hn();
  }), Hn();
}
function uf(e) {
  const { textColor: t, bgColor: n } = wl(e.meta.value.valid), r = {};
  Object.values(e.getAllPathStates()).forEach((o) => {
    Pt(r, H(o.path), cf(o, e));
  });
  function i(o, a = []) {
    const l = [...a].pop();
    return "id" in o ? Object.assign(Object.assign({}, o), { label: l || o.label }) : mn(o) ? {
      id: `${a.join(".")}`,
      label: l || "",
      children: Object.keys(o).map((u) => i(o[u], [...a, u]))
    } : Array.isArray(o) ? {
      id: `${a.join(".")}`,
      label: `${l}[]`,
      children: o.map((u, f) => i(u, [...a, String(f)]))
    } : { id: "", label: "", children: [] };
  }
  const { children: s } = i(r);
  return {
    id: zs(e),
    label: e.name,
    children: s,
    tags: [
      {
        label: "Form",
        textColor: t,
        backgroundColor: n
      },
      {
        label: `${e.getAllPathStates().length} fields`,
        textColor: lt.white,
        backgroundColor: lt.unknown
      }
    ]
  };
}
function cf(e, t) {
  return {
    id: zs(t, e),
    label: H(e.path),
    tags: bl(e.multiple, e.fieldsCount, e.type, e.valid, t)
  };
}
function df(e, t) {
  return {
    id: zs(t, e),
    label: M(e.name),
    tags: bl(!1, 1, e.type, e.meta.valid, t)
  };
}
function bl(e, t, n, r, i) {
  const { textColor: s, bgColor: o } = wl(r);
  return [
    e ? void 0 : {
      label: "Field",
      textColor: s,
      backgroundColor: o
    },
    i ? void 0 : {
      label: "Standalone",
      textColor: lt.black,
      backgroundColor: lt.gray
    },
    n === "checkbox" ? {
      label: "Checkbox",
      textColor: lt.white,
      backgroundColor: lt.blue
    } : void 0,
    n === "radio" ? {
      label: "Radio",
      textColor: lt.white,
      backgroundColor: lt.purple
    } : void 0,
    e ? {
      label: "Multiple",
      textColor: lt.black,
      backgroundColor: lt.orange
    } : void 0
  ].filter(Boolean);
}
function zs(e, t) {
  const n = t ? "path" in t ? "pathState" : "field" : "form", r = t ? "path" in t ? t == null ? void 0 : t.path : H(t == null ? void 0 : t.name) : "", i = { f: e == null ? void 0 : e.formId, ff: (t == null ? void 0 : t.id) || r, type: n };
  return btoa(encodeURIComponent(JSON.stringify(i)));
}
function ff(e) {
  try {
    const t = JSON.parse(decodeURIComponent(atob(e))), n = ar[t.f];
    if (!n && t.ff) {
      const i = lr[t.ff];
      return i ? {
        type: t.type,
        field: i
      } : {};
    }
    if (!n)
      return {};
    const r = n.getPathState(t.ff);
    return {
      type: t.type,
      form: n,
      state: r
    };
  } catch {
  }
  return {};
}
function Go(e) {
  return {
    "Field state": [
      { key: "errors", value: e.errors },
      {
        key: "initialValue",
        value: e.initialValue
      },
      {
        key: "currentValue",
        value: e.value
      },
      {
        key: "touched",
        value: e.touched
      },
      {
        key: "dirty",
        value: e.dirty
      },
      {
        key: "valid",
        value: e.valid
      }
    ]
  };
}
function pf(e) {
  const { errorBag: t, meta: n, values: r, isSubmitting: i, isValidating: s, submitCount: o } = e;
  return {
    "Form state": [
      {
        key: "submitCount",
        value: o.value
      },
      {
        key: "isSubmitting",
        value: i.value
      },
      {
        key: "isValidating",
        value: s.value
      },
      {
        key: "touched",
        value: n.value.touched
      },
      {
        key: "dirty",
        value: n.value.dirty
      },
      {
        key: "valid",
        value: n.value.valid
      },
      {
        key: "initialValues",
        value: n.value.initialValues
      },
      {
        key: "currentValues",
        value: r
      },
      {
        key: "errors",
        value: at(t.value).reduce((a, l) => {
          var u;
          const f = (u = t.value[l]) === null || u === void 0 ? void 0 : u[0];
          return f && (a[l] = f), a;
        }, {})
      }
    ]
  };
}
function wl(e) {
  return {
    bgColor: e ? lt.success : lt.error,
    textColor: e ? lt.black : lt.white
  };
}
function hf(e, t, n) {
  return ul(n == null ? void 0 : n.type) ? vf(e, t, n) : xl(e, t, n);
}
function xl(e, t, n) {
  const { initialValue: r, validateOnMount: i, bails: s, type: o, checkedValue: a, label: l, validateOnValueUpdate: u, uncheckedValue: f, controlled: c, keepValueOnUnmount: h, syncVModel: p, form: m } = mf(n), y = c ? fl(Ls) : void 0, v = m || y, x = T(() => Qn(H(e))), _ = T(() => {
    if (H(v == null ? void 0 : v.schema))
      return;
    const B = M(t);
    return li(B) || _t(B) || dt(B) || Array.isArray(B) ? B : hl(B);
  }), V = !dt(_.value) && _t(H(t)), { id: X, value: I, initialValue: G, meta: Y, setState: te, errors: D, flags: K } = tf(x, {
    modelValue: r,
    form: v,
    bails: s,
    label: l,
    type: o,
    validate: _.value ? A : void 0,
    schema: V ? t : void 0
  }), N = T(() => D.value[0]);
  p && gf({
    value: I,
    prop: p,
    handleChange: j,
    shouldValidate: () => u && !K.pendingReset
  });
  const re = (C, B = !1) => {
    Y.touched = !0, B && L();
  };
  async function fe(C) {
    var B, we;
    if (v != null && v.validateSchema) {
      const { results: ge } = await v.validateSchema(C);
      return (B = ge[H(x)]) !== null && B !== void 0 ? B : { valid: !0, errors: [] };
    }
    return _.value ? ml(I.value, _.value, {
      name: H(x),
      label: H(l),
      values: (we = v == null ? void 0 : v.values) !== null && we !== void 0 ? we : {},
      bails: s
    }) : { valid: !0, errors: [] };
  }
  const L = ps(async () => (Y.pending = !0, Y.validated = !0, fe("validated-only")), (C) => (K.pendingUnmount[Q.id] || (te({ errors: C.errors }), Y.pending = !1, Y.valid = C.valid), C)), E = ps(async () => fe("silent"), (C) => (Y.valid = C.valid, C));
  function A(C) {
    return (C == null ? void 0 : C.mode) === "silent" ? E() : L();
  }
  function j(C, B = !0) {
    const we = ui(C);
    le(we, B);
  }
  br(() => {
    if (i)
      return L();
    (!v || !v.validateSchema) && E();
  });
  function R(C) {
    Y.touched = C;
  }
  function U(C) {
    var B;
    const we = C && "value" in C ? C.value : G.value;
    te({
      value: Ae(we),
      initialValue: Ae(we),
      touched: (B = C == null ? void 0 : C.touched) !== null && B !== void 0 ? B : !1,
      errors: (C == null ? void 0 : C.errors) || []
    }), Y.pending = !1, Y.validated = !1, E();
  }
  const W = fn();
  function le(C, B = !0) {
    I.value = W && p ? jd(C, W.props.modelModifiers) : C, (B ? L : E)();
  }
  function ye(C) {
    te({ errors: Array.isArray(C) ? C : [C] });
  }
  const q = T({
    get() {
      return I.value;
    },
    set(C) {
      le(C, u);
    }
  }), Q = {
    id: X,
    name: x,
    label: l,
    value: q,
    meta: Y,
    errors: D,
    errorMessage: N,
    type: o,
    checkedValue: a,
    uncheckedValue: f,
    bails: s,
    keepValueOnUnmount: h,
    resetField: U,
    handleReset: () => U(),
    validate: A,
    handleChange: j,
    handleBlur: re,
    setState: te,
    setTouched: R,
    setErrors: ye,
    setValue: le
  };
  if (rs(Nd, Q), ni(t) && typeof M(t) != "function" && Ie(t, (C, B) => {
    st(C, B) || (Y.validated ? L() : E());
  }, {
    deep: !0
  }), process.env.NODE_ENV !== "production" && (Q._vm = fn(), Ie(() => Object.assign(Object.assign({ errors: D.value }, Y), { value: I.value }), Hn, {
    deep: !0
  }), v || lf(Q)), !v)
    return Q;
  const he = T(() => {
    const C = _.value;
    return !C || dt(C) || li(C) || _t(C) || Array.isArray(C) ? {} : Object.keys(C).reduce((B, we) => {
      const ge = qd(C[we]).map((Ve) => Ve.__locatorRef).reduce((Ve, Fe) => {
        const Le = ft(v.values, Fe) || v.values[Fe];
        return Le !== void 0 && (Ve[Fe] = Le), Ve;
      }, {});
      return Object.assign(B, ge), B;
    }, {});
  });
  return Ie(he, (C, B) => {
    if (!Object.keys(C).length)
      return;
    !st(C, B) && (Y.validated ? L() : E());
  }), ja(() => {
    var C;
    const B = (C = H(Q.keepValueOnUnmount)) !== null && C !== void 0 ? C : H(v.keepValuesOnUnmount), we = H(x);
    if (B || !v || K.pendingUnmount[Q.id]) {
      v == null || v.removePathState(we, X);
      return;
    }
    K.pendingUnmount[Q.id] = !0;
    const ge = v.getPathState(we);
    if (Array.isArray(ge == null ? void 0 : ge.id) && (ge != null && ge.multiple) ? ge != null && ge.id.includes(Q.id) : (ge == null ? void 0 : ge.id) === Q.id) {
      if (ge != null && ge.multiple && Array.isArray(ge.value)) {
        const Fe = ge.value.findIndex((Le) => st(Le, H(Q.checkedValue)));
        if (Fe > -1) {
          const Le = [...ge.value];
          Le.splice(Fe, 1), v.setFieldValue(we, Le);
        }
        Array.isArray(ge.id) && ge.id.splice(ge.id.indexOf(Q.id), 1);
      } else
        v.unsetPathValue(H(x));
      v.removePathState(we, X);
    }
  }), Q;
}
function mf(e) {
  const t = () => ({
    initialValue: void 0,
    validateOnMount: !1,
    bails: !0,
    label: void 0,
    validateOnValueUpdate: !0,
    keepValueOnUnmount: void 0,
    syncVModel: !1,
    controlled: !0
  }), n = !!(e != null && e.syncVModel), r = typeof (e == null ? void 0 : e.syncVModel) == "string" ? e.syncVModel : (e == null ? void 0 : e.modelPropName) || "modelValue", i = n && !("initialValue" in (e || {})) ? ms(fn(), r) : e == null ? void 0 : e.initialValue;
  if (!e)
    return Object.assign(Object.assign({}, t()), { initialValue: i });
  const s = "valueProp" in e ? e.valueProp : e.checkedValue, o = "standalone" in e ? !e.standalone : e.controlled, a = (e == null ? void 0 : e.modelPropName) || (e == null ? void 0 : e.syncVModel) || !1;
  return Object.assign(Object.assign(Object.assign({}, t()), e || {}), {
    initialValue: i,
    controlled: o ?? !0,
    checkedValue: s,
    syncVModel: a
  });
}
function vf(e, t, n) {
  const r = n != null && n.standalone ? void 0 : fl(Ls), i = n == null ? void 0 : n.checkedValue, s = n == null ? void 0 : n.uncheckedValue;
  function o(a) {
    const l = a.handleChange, u = T(() => {
      const c = H(a.value), h = H(i);
      return Array.isArray(c) ? c.findIndex((p) => st(p, h)) >= 0 : st(h, c);
    });
    function f(c, h = !0) {
      var p, m;
      if (u.value === ((p = c == null ? void 0 : c.target) === null || p === void 0 ? void 0 : p.checked)) {
        h && a.validate();
        return;
      }
      const y = H(e), v = r == null ? void 0 : r.getPathState(y), x = ui(c);
      let _ = (m = H(i)) !== null && m !== void 0 ? m : x;
      r && (v != null && v.multiple) && v.type === "checkbox" ? _ = qo(ft(r.values, y) || [], _, void 0) : (n == null ? void 0 : n.type) === "checkbox" && (_ = qo(H(a.value), _, H(s))), l(_, h);
    }
    return Object.assign(Object.assign({}, a), {
      checked: u,
      checkedValue: i,
      uncheckedValue: s,
      handleChange: f
    });
  }
  return o(xl(e, t, n));
}
function gf({ prop: e, value: t, handleChange: n, shouldValidate: r }) {
  const i = fn();
  if (!i || !e) {
    process.env.NODE_ENV !== "production" && console.warn("Failed to setup model events because `useField` was not called in setup.");
    return;
  }
  const s = typeof e == "string" ? e : "modelValue", o = `update:${s}`;
  s in i.props && (Ie(t, (a) => {
    st(a, ms(i, s)) || i.emit(o, a);
  }), Ie(() => ms(i, s), (a) => {
    if (a === Bo && t.value === void 0)
      return;
    const l = a === Bo ? void 0 : a;
    st(l, t.value) || n(l, r());
  }));
}
function ms(e, t) {
  if (e)
    return e.props[t];
}
let yf = 0;
const Pr = ["bails", "fieldsCount", "id", "multiple", "type", "validate"];
function Sl(e) {
  const t = (e == null ? void 0 : e.initialValues) || {}, n = Object.assign({}, H(t)), r = M(e == null ? void 0 : e.validationSchema);
  return r && _t(r) && dt(r.cast) ? Ae(r.cast(n) || {}) : Ae(n);
}
function bf(e) {
  var t;
  const n = yf++, r = (e == null ? void 0 : e.name) || "Form";
  let i = 0;
  const s = Ue(!1), o = Ue(!1), a = Ue(0), l = [], u = Vt(Sl(e)), f = Ue([]), c = Ue({}), h = Ue({}), p = Ld(() => {
    h.value = f.value.reduce((g, b) => (g[Qn(H(b.path))] = b, g), {});
  });
  function m(g, b) {
    const $ = j(g);
    if (!$) {
      typeof g == "string" && (c.value[Qn(g)] = hs(b));
      return;
    }
    if (typeof g == "string") {
      const P = Qn(g);
      c.value[P] && delete c.value[P];
    }
    $.errors = hs(b), $.valid = !$.errors.length;
  }
  function y(g) {
    at(g).forEach((b) => {
      m(b, g[b]);
    });
  }
  e != null && e.initialErrors && y(e.initialErrors);
  const v = T(() => {
    const g = f.value.reduce((b, $) => ($.errors.length && (b[H($.path)] = $.errors), b), {});
    return Object.assign(Object.assign({}, c.value), g);
  }), x = T(() => at(v.value).reduce((g, b) => {
    const $ = v.value[b];
    return $ != null && $.length && (g[b] = $[0]), g;
  }, {})), _ = T(() => f.value.reduce((g, b) => (g[H(b.path)] = { name: H(b.path) || "", label: b.label || "" }, g), {})), V = T(() => f.value.reduce((g, b) => {
    var $;
    return g[H(b.path)] = ($ = b.bails) !== null && $ !== void 0 ? $ : !0, g;
  }, {})), X = Object.assign({}, (e == null ? void 0 : e.initialErrors) || {}), I = (t = e == null ? void 0 : e.keepValuesOnUnmount) !== null && t !== void 0 ? t : !1, { initialValues: G, originalInitialValues: Y, setInitialValues: te } = xf(f, u, e), D = wf(f, u, Y, x), K = T(() => f.value.reduce((g, b) => {
    const $ = ft(u, H(b.path));
    return Pt(g, H(b.path), $), g;
  }, {})), N = e == null ? void 0 : e.validationSchema;
  function re(g, b) {
    var $, P;
    const Z = T(() => ft(G.value, H(g))), ae = h.value[H(g)], ee = (b == null ? void 0 : b.type) === "checkbox" || (b == null ? void 0 : b.type) === "radio";
    if (ae && ee) {
      ae.multiple = !0;
      const Qe = i++;
      return Array.isArray(ae.id) ? ae.id.push(Qe) : ae.id = [ae.id, Qe], ae.fieldsCount++, ae.__flags.pendingUnmount[Qe] = !1, ae;
    }
    const Oe = T(() => ft(u, H(g))), xe = H(g), ue = U.findIndex((Qe) => Qe === xe);
    ue !== -1 && U.splice(ue, 1);
    const _e = T(() => {
      var Qe, tt, Tt, Qt;
      const en = H(N);
      if (_t(en))
        return (tt = (Qe = en.describe) === null || Qe === void 0 ? void 0 : Qe.call(en, H(g)).required) !== null && tt !== void 0 ? tt : !1;
      const Wn = H(b == null ? void 0 : b.schema);
      return _t(Wn) && (Qt = (Tt = Wn.describe) === null || Tt === void 0 ? void 0 : Tt.call(Wn).required) !== null && Qt !== void 0 ? Qt : !1;
    }), Se = i++, Pe = Vt({
      id: Se,
      path: g,
      touched: !1,
      pending: !1,
      valid: !0,
      validated: !!(!(($ = X[xe]) === null || $ === void 0) && $.length),
      required: _e,
      initialValue: Z,
      errors: Xr([]),
      bails: (P = b == null ? void 0 : b.bails) !== null && P !== void 0 ? P : !1,
      label: b == null ? void 0 : b.label,
      type: (b == null ? void 0 : b.type) || "default",
      value: Oe,
      multiple: !1,
      __flags: {
        pendingUnmount: { [Se]: !1 },
        pendingReset: !1
      },
      fieldsCount: 1,
      validate: b == null ? void 0 : b.validate,
      dirty: T(() => !st(M(Oe), M(Z)))
    });
    return f.value.push(Pe), h.value[xe] = Pe, p(), x.value[xe] && !X[xe] && mt(() => {
      Ct(xe, { mode: "silent" });
    }), ni(g) && Ie(g, (Qe) => {
      p();
      const tt = Ae(Oe.value);
      h.value[Qe] = Pe, mt(() => {
        Pt(u, Qe, tt);
      });
    }), Pe;
  }
  const fe = Yo(Sr, 5), L = Yo(Sr, 5), E = ps(async (g) => await (g === "silent" ? fe() : L()), (g, [b]) => {
    const $ = at(B.errorBag.value), Z = [
      .../* @__PURE__ */ new Set([...at(g.results), ...f.value.map((ae) => ae.path), ...$])
    ].sort().reduce((ae, ee) => {
      var Oe;
      const xe = ee, ue = j(xe) || R(xe), _e = ((Oe = g.results[xe]) === null || Oe === void 0 ? void 0 : Oe.errors) || [], Se = H(ue == null ? void 0 : ue.path) || xe, Pe = Sf({ errors: _e, valid: !_e.length }, ae.results[Se]);
      return ae.results[Se] = Pe, Pe.valid || (ae.errors[Se] = Pe.errors[0]), ue && c.value[Se] && delete c.value[Se], ue ? (ue.valid = Pe.valid, b === "silent" || b === "validated-only" && !ue.validated || m(ue, Pe.errors), ae) : (m(Se, _e), ae);
    }, {
      valid: g.valid,
      results: {},
      errors: {},
      source: g.source
    });
    return g.values && (Z.values = g.values, Z.source = g.source), at(Z.results).forEach((ae) => {
      var ee;
      const Oe = j(ae);
      Oe && b !== "silent" && (b === "validated-only" && !Oe.validated || m(Oe, (ee = Z.results[ae]) === null || ee === void 0 ? void 0 : ee.errors));
    }), Z;
  });
  function A(g) {
    f.value.forEach(g);
  }
  function j(g) {
    const b = typeof g == "string" ? Qn(g) : g;
    return typeof b == "string" ? h.value[b] : b;
  }
  function R(g) {
    return f.value.filter(($) => g.startsWith(H($.path))).reduce(($, P) => $ ? P.path.length > $.path.length ? P : $ : P, void 0);
  }
  let U = [], W;
  function le(g) {
    return U.push(g), W || (W = mt(() => {
      [...U].sort().reverse().forEach(($) => {
        Uo(u, $);
      }), U = [], W = null;
    })), W;
  }
  function ye(g) {
    return function($, P) {
      return function(ae) {
        return ae instanceof Event && (ae.preventDefault(), ae.stopPropagation()), A((ee) => ee.touched = !0), s.value = !0, a.value++, bt().then((ee) => {
          const Oe = Ae(u);
          if (ee.valid && typeof $ == "function") {
            const xe = Ae(K.value);
            let ue = g ? xe : Oe;
            return ee.values && (ue = ee.source === "schema" ? ee.values : Object.assign({}, ue, ee.values)), $(ue, {
              evt: ae,
              controlledValues: xe,
              setErrors: y,
              setFieldError: m,
              setTouched: Ht,
              setFieldTouched: Le,
              setValues: Ve,
              setFieldValue: we,
              resetForm: Ut,
              resetField: Jt
            });
          }
          !ee.valid && typeof P == "function" && P({
            values: Oe,
            evt: ae,
            errors: ee.errors,
            results: ee.results
          });
        }).then((ee) => (s.value = !1, ee), (ee) => {
          throw s.value = !1, ee;
        });
      };
    };
  }
  const Q = ye(!1);
  Q.withControlled = ye(!0);
  function he(g, b) {
    const $ = f.value.findIndex((Z) => Z.path === g && (Array.isArray(Z.id) ? Z.id.includes(b) : Z.id === b)), P = f.value[$];
    if (!($ === -1 || !P)) {
      if (mt(() => {
        Ct(g, { mode: "silent", warn: !1 });
      }), P.multiple && P.fieldsCount && P.fieldsCount--, Array.isArray(P.id)) {
        const Z = P.id.indexOf(b);
        Z >= 0 && P.id.splice(Z, 1), delete P.__flags.pendingUnmount[b];
      }
      (!P.multiple || P.fieldsCount <= 0) && (f.value.splice($, 1), xr(g), p(), delete h.value[g]);
    }
  }
  function C(g) {
    at(h.value).forEach((b) => {
      b.startsWith(g) && delete h.value[b];
    }), f.value = f.value.filter((b) => !b.path.startsWith(g)), mt(() => {
      p();
    });
  }
  const B = {
    name: r,
    formId: n,
    values: u,
    controlledValues: K,
    errorBag: v,
    errors: x,
    schema: N,
    submitCount: a,
    meta: D,
    isSubmitting: s,
    isValidating: o,
    fieldArrays: l,
    keepValuesOnUnmount: I,
    validateSchema: M(N) ? E : void 0,
    validate: bt,
    setFieldError: m,
    validateField: Ct,
    setFieldValue: we,
    setValues: Ve,
    setErrors: y,
    setFieldTouched: Le,
    setTouched: Ht,
    resetForm: Ut,
    resetField: Jt,
    handleSubmit: Q,
    useFieldModel: kr,
    defineInputBinds: Vi,
    defineComponentBinds: S,
    defineField: Xn,
    stageInitialValue: Ei,
    unsetInitialValue: xr,
    setFieldInitialValue: Yn,
    createPathState: re,
    getPathState: j,
    unsetPathValue: le,
    removePathState: he,
    initialValues: G,
    getAllPathStates: () => f.value,
    destroyPath: C,
    isFieldTouched: yt,
    isFieldDirty: Kt,
    isFieldValid: Zt
  };
  function we(g, b, $ = !0) {
    const P = Ae(b), Z = typeof g == "string" ? g : g.path;
    j(Z) || re(Z), Pt(u, Z, P), $ && Ct(Z);
  }
  function ge(g, b = !0) {
    at(u).forEach(($) => {
      delete u[$];
    }), at(g).forEach(($) => {
      we($, g[$], !1);
    }), b && bt();
  }
  function Ve(g, b = !0) {
    vr(u, g), l.forEach(($) => $ && $.reset()), b && bt();
  }
  function Fe(g, b) {
    const $ = j(H(g)) || re(g);
    return T({
      get() {
        return $.value;
      },
      set(P) {
        var Z;
        const ae = H(g);
        we(ae, P, (Z = H(b)) !== null && Z !== void 0 ? Z : !1);
      }
    });
  }
  function Le(g, b) {
    const $ = j(g);
    $ && ($.touched = b);
  }
  function yt(g) {
    const b = j(g);
    return b ? b.touched : f.value.filter(($) => $.path.startsWith(g)).some(($) => $.touched);
  }
  function Kt(g) {
    const b = j(g);
    return b ? b.dirty : f.value.filter(($) => $.path.startsWith(g)).some(($) => $.dirty);
  }
  function Zt(g) {
    const b = j(g);
    return b ? b.valid : f.value.filter(($) => $.path.startsWith(g)).every(($) => $.valid);
  }
  function Ht(g) {
    if (typeof g == "boolean") {
      A((b) => {
        b.touched = g;
      });
      return;
    }
    at(g).forEach((b) => {
      Le(b, !!g[b]);
    });
  }
  function Jt(g, b) {
    var $;
    const P = b && "value" in b ? b.value : ft(G.value, g), Z = j(g);
    Z && (Z.__flags.pendingReset = !0), Yn(g, Ae(P), !0), we(g, P, !1), Le(g, ($ = b == null ? void 0 : b.touched) !== null && $ !== void 0 ? $ : !1), m(g, (b == null ? void 0 : b.errors) || []), mt(() => {
      Z && (Z.__flags.pendingReset = !1);
    });
  }
  function Ut(g, b) {
    let $ = Ae(g != null && g.values ? g.values : Y.value);
    $ = b != null && b.force ? $ : vr(Y.value, $), $ = _t(N) && dt(N.cast) ? N.cast($) : $, te($, { force: b == null ? void 0 : b.force }), A((P) => {
      var Z;
      P.__flags.pendingReset = !0, P.validated = !1, P.touched = ((Z = g == null ? void 0 : g.touched) === null || Z === void 0 ? void 0 : Z[H(P.path)]) || !1, we(H(P.path), ft($, H(P.path)), !1), m(H(P.path), void 0);
    }), b != null && b.force ? ge($, !1) : Ve($, !1), y((g == null ? void 0 : g.errors) || {}), a.value = (g == null ? void 0 : g.submitCount) || 0, mt(() => {
      bt({ mode: "silent" }), A((P) => {
        P.__flags.pendingReset = !1;
      });
    });
  }
  async function bt(g) {
    const b = (g == null ? void 0 : g.mode) || "force";
    if (b === "force" && A((ee) => ee.validated = !0), B.validateSchema)
      return B.validateSchema(b);
    o.value = !0;
    const $ = await Promise.all(f.value.map((ee) => ee.validate ? ee.validate(g).then((Oe) => ({
      key: H(ee.path),
      valid: Oe.valid,
      errors: Oe.errors,
      value: Oe.value
    })) : Promise.resolve({
      key: H(ee.path),
      valid: !0,
      errors: [],
      value: void 0
    })));
    o.value = !1;
    const P = {}, Z = {}, ae = {};
    for (const ee of $)
      P[ee.key] = {
        valid: ee.valid,
        errors: ee.errors
      }, ee.value && Pt(ae, ee.key, ee.value), ee.errors.length && (Z[ee.key] = ee.errors[0]);
    return {
      valid: $.every((ee) => ee.valid),
      results: P,
      errors: Z,
      values: ae,
      source: "fields"
    };
  }
  async function Ct(g, b) {
    var $;
    const P = j(g);
    if (P && (b == null ? void 0 : b.mode) !== "silent" && (P.validated = !0), N) {
      const { results: ae } = await E((b == null ? void 0 : b.mode) || "validated-only");
      return ae[g] || { errors: [], valid: !0 };
    }
    return P != null && P.validate ? P.validate(b) : (!P && (($ = b == null ? void 0 : b.warn) !== null && $ !== void 0 ? $ : !0) && process.env.NODE_ENV !== "production" && Yu(`field with path ${g} was not found`), Promise.resolve({ errors: [], valid: !0 }));
  }
  function xr(g) {
    Uo(G.value, g);
  }
  function Ei(g, b, $ = !1) {
    Yn(g, b), Pt(u, g, b), $ && !(e != null && e.initialValues) && Pt(Y.value, g, Ae(b));
  }
  function Yn(g, b, $ = !1) {
    Pt(G.value, g, Ae(b)), $ && Pt(Y.value, g, Ae(b));
  }
  async function Sr() {
    const g = M(N);
    if (!g)
      return { valid: !0, results: {}, errors: {}, source: "none" };
    o.value = !0;
    const b = li(g) || _t(g) ? await Qd(g, u) : await ef(g, u, {
      names: _.value,
      bailsMap: V.value
    });
    return o.value = !1, b;
  }
  const $r = Q((g, { evt: b }) => {
    dl(b) && b.target.submit();
  });
  br(() => {
    if (e != null && e.initialErrors && y(e.initialErrors), e != null && e.initialTouched && Ht(e.initialTouched), e != null && e.validateOnMount) {
      bt();
      return;
    }
    B.validateSchema && B.validateSchema("silent");
  }), ni(N) && Ie(N, () => {
    var g;
    (g = B.validateSchema) === null || g === void 0 || g.call(B, "validated-only");
  }), rs(Ls, B), process.env.NODE_ENV !== "production" && (af(B), Ie(() => Object.assign(Object.assign({ errors: v.value }, D.value), { values: u, isSubmitting: s.value, isValidating: o.value, submitCount: a.value }), Hn, {
    deep: !0
  }));
  function Xn(g, b) {
    const $ = dt(b) || b == null ? void 0 : b.label, P = j(H(g)) || re(g, { label: $ }), Z = () => dt(b) ? b(Tr(P, Pr)) : b || {};
    function ae() {
      var _e;
      P.touched = !0, ((_e = Z().validateOnBlur) !== null && _e !== void 0 ? _e : er().validateOnBlur) && Ct(H(P.path));
    }
    function ee() {
      var _e;
      ((_e = Z().validateOnInput) !== null && _e !== void 0 ? _e : er().validateOnInput) && mt(() => {
        Ct(H(P.path));
      });
    }
    function Oe() {
      var _e;
      ((_e = Z().validateOnChange) !== null && _e !== void 0 ? _e : er().validateOnChange) && mt(() => {
        Ct(H(P.path));
      });
    }
    const xe = T(() => {
      const _e = {
        onChange: Oe,
        onInput: ee,
        onBlur: ae
      };
      return dt(b) ? Object.assign(Object.assign({}, _e), b(Tr(P, Pr)).props || {}) : b != null && b.props ? Object.assign(Object.assign({}, _e), b.props(Tr(P, Pr))) : _e;
    });
    return [Fe(g, () => {
      var _e, Se, Pe;
      return (Pe = (_e = Z().validateOnModelUpdate) !== null && _e !== void 0 ? _e : (Se = er()) === null || Se === void 0 ? void 0 : Se.validateOnModelUpdate) !== null && Pe !== void 0 ? Pe : !0;
    }), xe];
  }
  function kr(g) {
    return Array.isArray(g) ? g.map((b) => Fe(b, !0)) : Fe(g);
  }
  function Vi(g, b) {
    const [$, P] = Xn(g, b);
    function Z() {
      P.value.onBlur();
    }
    function ae(Oe) {
      const xe = ui(Oe);
      we(H(g), xe, !1), P.value.onInput();
    }
    function ee(Oe) {
      const xe = ui(Oe);
      we(H(g), xe, !1), P.value.onChange();
    }
    return T(() => Object.assign(Object.assign({}, P.value), {
      onBlur: Z,
      onInput: ae,
      onChange: ee,
      value: $.value
    }));
  }
  function S(g, b) {
    const [$, P] = Xn(g, b), Z = j(H(g));
    function ae(ee) {
      $.value = ee;
    }
    return T(() => {
      const ee = dt(b) ? b(Tr(Z, Pr)) : b || {};
      return Object.assign({ [ee.model || "modelValue"]: $.value, [`onUpdate:${ee.model || "modelValue"}`]: ae }, P.value);
    });
  }
  const d = Object.assign(Object.assign({}, B), { values: qu(u), handleReset: () => Ut(), submitForm: $r });
  return rs(Pd, d), d;
}
function wf(e, t, n, r) {
  const i = {
    touched: "some",
    pending: "some",
    valid: "every"
  }, s = T(() => !st(t, M(n)));
  function o() {
    const l = e.value;
    return at(i).reduce((u, f) => {
      const c = i[f];
      return u[f] = l[c]((h) => h[f]), u;
    }, {});
  }
  const a = Vt(o());
  return Ra(() => {
    const l = o();
    a.touched = l.touched, a.valid = l.valid, a.pending = l.pending;
  }), T(() => Object.assign(Object.assign({ initialValues: M(n) }, a), { valid: a.valid && !at(r.value).length, dirty: s.value }));
}
function xf(e, t, n) {
  const r = Sl(n), i = Ue(r), s = Ue(Ae(r));
  function o(a, l) {
    l != null && l.force ? (i.value = Ae(a), s.value = Ae(a)) : (i.value = vr(Ae(i.value) || {}, Ae(a)), s.value = vr(Ae(s.value) || {}, Ae(a))), l != null && l.updateFields && e.value.forEach((u) => {
      if (u.touched)
        return;
      const c = ft(i.value, H(u.path));
      Pt(t, H(u.path), Ae(c));
    });
  }
  return {
    initialValues: i,
    originalInitialValues: s,
    setInitialValues: o
  };
}
function Sf(e, t) {
  return t ? {
    valid: e.valid && t.valid,
    errors: [...e.errors, ...t.errors]
  } : e;
}
const $f = /* @__PURE__ */ $e({
  name: "Form",
  inheritAttrs: !1,
  props: {
    as: {
      type: null,
      default: "form"
    },
    validationSchema: {
      type: Object,
      default: void 0
    },
    initialValues: {
      type: Object,
      default: void 0
    },
    initialErrors: {
      type: Object,
      default: void 0
    },
    initialTouched: {
      type: Object,
      default: void 0
    },
    validateOnMount: {
      type: Boolean,
      default: !1
    },
    onSubmit: {
      type: Function,
      default: void 0
    },
    onInvalidSubmit: {
      type: Function,
      default: void 0
    },
    keepValues: {
      type: Boolean,
      default: !1
    },
    name: {
      type: String,
      default: "Form"
    }
  },
  setup(e, t) {
    const n = is(e, "validationSchema"), r = is(e, "keepValues"), { errors: i, errorBag: s, values: o, meta: a, isSubmitting: l, isValidating: u, submitCount: f, controlledValues: c, validate: h, validateField: p, handleReset: m, resetForm: y, handleSubmit: v, setErrors: x, setFieldError: _, setFieldValue: V, setValues: X, setFieldTouched: I, setTouched: G, resetField: Y } = bf({
      validationSchema: n.value ? n : void 0,
      initialValues: e.initialValues,
      initialErrors: e.initialErrors,
      initialTouched: e.initialTouched,
      validateOnMount: e.validateOnMount,
      keepValuesOnUnmount: r,
      name: e.name
    }), te = v((A, { evt: j }) => {
      dl(j) && j.target.submit();
    }, e.onInvalidSubmit), D = e.onSubmit ? v(e.onSubmit, e.onInvalidSubmit) : te;
    function K(A) {
      Rs(A) && A.preventDefault(), m(), typeof t.attrs.onReset == "function" && t.attrs.onReset();
    }
    function N(A, j) {
      return v(typeof A == "function" && !j ? A : j, e.onInvalidSubmit)(A);
    }
    function re() {
      return Ae(o);
    }
    function fe() {
      return Ae(a.value);
    }
    function L() {
      return Ae(i.value);
    }
    function E() {
      return {
        meta: a.value,
        errors: i.value,
        errorBag: s.value,
        values: o,
        isSubmitting: l.value,
        isValidating: u.value,
        submitCount: f.value,
        controlledValues: c.value,
        validate: h,
        validateField: p,
        handleSubmit: N,
        handleReset: m,
        submitForm: te,
        setErrors: x,
        setFieldError: _,
        setFieldValue: V,
        setValues: X,
        setFieldTouched: I,
        setTouched: G,
        resetForm: y,
        resetField: Y,
        getValues: re,
        getMeta: fe,
        getErrors: L
      };
    }
    return t.expose({
      setFieldError: _,
      setErrors: x,
      setFieldValue: V,
      setValues: X,
      setFieldTouched: I,
      setTouched: G,
      resetForm: y,
      validate: h,
      validateField: p,
      resetField: Y,
      getValues: re,
      getMeta: fe,
      getErrors: L,
      values: o,
      meta: a,
      errors: i
    }), function() {
      const j = e.as === "form" ? e.as : e.as ? Ts(e.as) : null, R = Rd(j, t, E);
      return j ? ts(j, Object.assign(Object.assign(Object.assign({}, j === "form" ? {
        // Disables native validation as vee-validate will handle it.
        novalidate: !0
      } : {}), t.attrs), { onSubmit: D, onReset: K }), R) : R;
    };
  }
}), kf = $f;
function $i(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qi, Ko;
function _f() {
  if (Ko) return qi;
  Ko = 1;
  function e(x) {
    this._maxSize = x, this.clear();
  }
  e.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, e.prototype.get = function(x) {
    return this._values[x];
  }, e.prototype.set = function(x, _) {
    return this._size >= this._maxSize && this.clear(), x in this._values || this._size++, this._values[x] = _;
  };
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, n = /^\d+$/, r = /^\d/, i = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, s = /^\s*(['"]?)(.*?)(\1)\s*$/, o = 512, a = new e(o), l = new e(o), u = new e(o);
  qi = {
    Cache: e,
    split: c,
    normalizePath: f,
    setter: function(x) {
      var _ = f(x);
      return l.get(x) || l.set(x, function(X, I) {
        for (var G = 0, Y = _.length, te = X; G < Y - 1; ) {
          var D = _[G];
          if (D === "__proto__" || D === "constructor" || D === "prototype")
            return X;
          te = te[_[G++]];
        }
        te[_[G]] = I;
      });
    },
    getter: function(x, _) {
      var V = f(x);
      return u.get(x) || u.set(x, function(I) {
        for (var G = 0, Y = V.length; G < Y; )
          if (I != null || !_) I = I[V[G++]];
          else return;
        return I;
      });
    },
    join: function(x) {
      return x.reduce(function(_, V) {
        return _ + (p(V) || n.test(V) ? "[" + V + "]" : (_ ? "." : "") + V);
      }, "");
    },
    forEach: function(x, _, V) {
      h(Array.isArray(x) ? x : c(x), _, V);
    }
  };
  function f(x) {
    return a.get(x) || a.set(
      x,
      c(x).map(function(_) {
        return _.replace(s, "$2");
      })
    );
  }
  function c(x) {
    return x.match(t) || [""];
  }
  function h(x, _, V) {
    var X = x.length, I, G, Y, te;
    for (G = 0; G < X; G++)
      I = x[G], I && (v(I) && (I = '"' + I + '"'), te = p(I), Y = !te && /^\d+$/.test(I), _.call(V, I, te, Y, G, x));
  }
  function p(x) {
    return typeof x == "string" && x && ["'", '"'].indexOf(x.charAt(0)) !== -1;
  }
  function m(x) {
    return x.match(r) && !x.match(n);
  }
  function y(x) {
    return i.test(x);
  }
  function v(x) {
    return !p(x) && (m(x) || y(x));
  }
  return qi;
}
var kn = _f(), Yi, Zo;
function Of() {
  if (Zo) return Yi;
  Zo = 1;
  const e = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, t = (f) => f.match(e) || [], n = (f) => f[0].toUpperCase() + f.slice(1), r = (f, c) => t(f).join(c).toLowerCase(), i = (f) => t(f).reduce(
    (c, h) => `${c}${c ? h[0].toUpperCase() + h.slice(1).toLowerCase() : h.toLowerCase()}`,
    ""
  );
  return Yi = {
    words: t,
    upperFirst: n,
    camelCase: i,
    pascalCase: (f) => n(i(f)),
    snakeCase: (f) => r(f, "_"),
    kebabCase: (f) => r(f, "-"),
    sentenceCase: (f) => n(r(f, " ")),
    titleCase: (f) => t(f).map(n).join(" ")
  }, Yi;
}
var Xi = Of(), Nr = { exports: {} }, Jo;
function Ef() {
  if (Jo) return Nr.exports;
  Jo = 1, Nr.exports = function(i) {
    return e(t(i), i);
  }, Nr.exports.array = e;
  function e(i, s) {
    var o = i.length, a = new Array(o), l = {}, u = o, f = n(s), c = r(i);
    for (s.forEach(function(p) {
      if (!c.has(p[0]) || !c.has(p[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); u--; )
      l[u] || h(i[u], u, /* @__PURE__ */ new Set());
    return a;
    function h(p, m, y) {
      if (y.has(p)) {
        var v;
        try {
          v = ", node was:" + JSON.stringify(p);
        } catch {
          v = "";
        }
        throw new Error("Cyclic dependency" + v);
      }
      if (!c.has(p))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(p));
      if (!l[m]) {
        l[m] = !0;
        var x = f.get(p) || /* @__PURE__ */ new Set();
        if (x = Array.from(x), m = x.length) {
          y.add(p);
          do {
            var _ = x[--m];
            h(_, c.get(_), y);
          } while (m);
          y.delete(p);
        }
        a[--o] = p;
      }
    }
  }
  function t(i) {
    for (var s = /* @__PURE__ */ new Set(), o = 0, a = i.length; o < a; o++) {
      var l = i[o];
      s.add(l[0]), s.add(l[1]);
    }
    return Array.from(s);
  }
  function n(i) {
    for (var s = /* @__PURE__ */ new Map(), o = 0, a = i.length; o < a; o++) {
      var l = i[o];
      s.has(l[0]) || s.set(l[0], /* @__PURE__ */ new Set()), s.has(l[1]) || s.set(l[1], /* @__PURE__ */ new Set()), s.get(l[0]).add(l[1]);
    }
    return s;
  }
  function r(i) {
    for (var s = /* @__PURE__ */ new Map(), o = 0, a = i.length; o < a; o++)
      s.set(i[o], o);
    return s;
  }
  return Nr.exports;
}
var Vf = Ef();
const Af = /* @__PURE__ */ $i(Vf), Cf = Object.prototype.toString, Tf = Error.prototype.toString, Pf = RegExp.prototype.toString, Nf = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Df = /^Symbol\((.*)\)(.*)$/;
function Ff(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Qo(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const n = typeof e;
  if (n === "number") return Ff(e);
  if (n === "string") return t ? `"${e}"` : e;
  if (n === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (n === "symbol") return Nf.call(e).replace(Df, "Symbol($1)");
  const r = Cf.call(e).slice(8, -1);
  return r === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : r === "Error" || e instanceof Error ? "[" + Tf.call(e) + "]" : r === "RegExp" ? Pf.call(e) : null;
}
function cn(e, t) {
  let n = Qo(e, t);
  return n !== null ? n : JSON.stringify(e, function(r, i) {
    let s = Qo(this[r], t);
    return s !== null ? s : i;
  }, 2);
}
function $l(e) {
  return e == null ? [] : [].concat(e);
}
let kl, _l, Ol, Mf = /\$\{\s*(\w+)\s*\}/g;
kl = Symbol.toStringTag;
class ea {
  constructor(t, n, r, i) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[kl] = "Error", this.name = "ValidationError", this.value = n, this.path = r, this.type = i, this.errors = [], this.inner = [], $l(t).forEach((s) => {
      if (ct.isError(s)) {
        this.errors.push(...s.errors);
        const o = s.inner.length ? s.inner : [s];
        this.inner.push(...o);
      } else
        this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
_l = Symbol.hasInstance;
Ol = Symbol.toStringTag;
class ct extends Error {
  static formatError(t, n) {
    const r = n.label || n.path || "this";
    return n = Object.assign({}, n, {
      path: r,
      originalPath: n.path
    }), typeof t == "string" ? t.replace(Mf, (i, s) => cn(n[s])) : typeof t == "function" ? t(n) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, n, r, i, s) {
    const o = new ea(t, n, r, i);
    if (s)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[Ol] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, ct);
  }
  static [_l](t) {
    return ea[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
  }
}
let Dt = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: e,
    type: t,
    value: n,
    originalValue: r
  }) => {
    const i = r != null && r !== n ? ` (cast from the value \`${cn(r, !0)}\`).` : ".";
    return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${cn(n, !0)}\`` + i : `${e} must match the configured type. The validated value was: \`${cn(n, !0)}\`` + i;
  }
}, ot = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  datetime: "${path} must be a valid ISO date-time",
  datetime_precision: "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
  datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
}, If = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, vs = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, jf = {
  isValue: "${path} field must be ${value}"
}, Gr = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, Lf = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, Rf = {
  notType: (e) => {
    const {
      path: t,
      value: n,
      spec: r
    } = e, i = r.types.length;
    if (Array.isArray(n)) {
      if (n.length < i) return `${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${cn(n, !0)}\``;
      if (n.length > i) return `${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${cn(n, !0)}\``;
    }
    return ct.formatError(Dt.notType, e);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: Dt,
  string: ot,
  number: If,
  date: vs,
  object: Gr,
  array: Lf,
  boolean: jf,
  tuple: Rf
});
const Hs = (e) => e && e.__isYupSchema__;
class ci {
  static fromOptions(t, n) {
    if (!n.then && !n.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: r,
      then: i,
      otherwise: s
    } = n, o = typeof r == "function" ? r : (...a) => a.every((l) => l === r);
    return new ci(t, (a, l) => {
      var u;
      let f = o(...a) ? i : s;
      return (u = f == null ? void 0 : f(l)) != null ? u : l;
    });
  }
  constructor(t, n) {
    this.fn = void 0, this.refs = t, this.refs = t, this.fn = n;
  }
  resolve(t, n) {
    let r = this.refs.map((s) => (
      // TODO: ? operator here?
      s.getValue(n == null ? void 0 : n.value, n == null ? void 0 : n.parent, n == null ? void 0 : n.context)
    )), i = this.fn(r, t, n);
    if (i === void 0 || // @ts-ignore this can be base
    i === t)
      return t;
    if (!Hs(i)) throw new TypeError("conditions must return a schema object");
    return i.resolve(n);
  }
}
const Dr = {
  context: "$",
  value: "."
};
class Pn {
  constructor(t, n = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Dr.context, this.isValue = this.key[0] === Dr.value, this.isSibling = !this.isContext && !this.isValue;
    let r = this.isContext ? Dr.context : this.isValue ? Dr.value : "";
    this.path = this.key.slice(r.length), this.getter = this.path && kn.getter(this.path, !0), this.map = n.map;
  }
  getValue(t, n, r) {
    let i = this.isContext ? r : this.isValue ? t : n;
    return this.getter && (i = this.getter(i || {})), this.map && (i = this.map(i)), i;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(t, n) {
    return this.getValue(t, n == null ? void 0 : n.parent, n == null ? void 0 : n.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(t) {
    return t && t.__isYupRef;
  }
}
Pn.prototype.__isYupRef = !0;
const xn = (e) => e == null;
function Dn(e) {
  function t({
    value: n,
    path: r = "",
    options: i,
    originalValue: s,
    schema: o
  }, a, l) {
    const {
      name: u,
      test: f,
      params: c,
      message: h,
      skipAbsent: p
    } = e;
    let {
      parent: m,
      context: y,
      abortEarly: v = o.spec.abortEarly,
      disableStackTrace: x = o.spec.disableStackTrace
    } = i;
    function _(N) {
      return Pn.isRef(N) ? N.getValue(n, m, y) : N;
    }
    function V(N = {}) {
      const re = Object.assign({
        value: n,
        originalValue: s,
        label: o.spec.label,
        path: N.path || r,
        spec: o.spec,
        disableStackTrace: N.disableStackTrace || x
      }, c, N.params);
      for (const L of Object.keys(re)) re[L] = _(re[L]);
      const fe = new ct(ct.formatError(N.message || h, re), n, re.path, N.type || u, re.disableStackTrace);
      return fe.params = re, fe;
    }
    const X = v ? a : l;
    let I = {
      path: r,
      parent: m,
      type: u,
      from: i.from,
      createError: V,
      resolve: _,
      options: i,
      originalValue: s,
      schema: o
    };
    const G = (N) => {
      ct.isError(N) ? X(N) : N ? l(null) : X(V());
    }, Y = (N) => {
      ct.isError(N) ? X(N) : a(N);
    };
    if (p && xn(n))
      return G(!0);
    let D;
    try {
      var K;
      if (D = f.call(I, n, I), typeof ((K = D) == null ? void 0 : K.then) == "function") {
        if (i.sync)
          throw new Error(`Validation test of type: "${I.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(D).then(G, Y);
      }
    } catch (N) {
      Y(N);
      return;
    }
    G(D);
  }
  return t.OPTIONS = e, t;
}
function Bf(e, t, n, r = n) {
  let i, s, o;
  return t ? (kn.forEach(t, (a, l, u) => {
    let f = l ? a.slice(1, a.length - 1) : a;
    e = e.resolve({
      context: r,
      parent: i,
      value: n
    });
    let c = e.type === "tuple", h = u ? parseInt(f, 10) : 0;
    if (e.innerType || c) {
      if (c && !u) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (n && h >= n.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);
      i = n, n = n && n[h], e = c ? e.spec.types[h] : e.innerType;
    }
    if (!u) {
      if (!e.fields || !e.fields[f]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);
      i = n, n = n && n[f], e = e.fields[f];
    }
    s = f, o = l ? "[" + a + "]" : "." + a;
  }), {
    schema: e,
    parent: i,
    parentPath: s
  }) : {
    parent: i,
    parentPath: t,
    schema: e
  };
}
class di extends Set {
  describe() {
    const t = [];
    for (const n of this.values())
      t.push(Pn.isRef(n) ? n.describe() : n);
    return t;
  }
  resolveAll(t) {
    let n = [];
    for (const r of this.values())
      n.push(t(r));
    return n;
  }
  clone() {
    return new di(this.values());
  }
  merge(t, n) {
    const r = this.clone();
    return t.forEach((i) => r.add(i)), n.forEach((i) => r.delete(i)), r;
  }
}
function Mn(e, t = /* @__PURE__ */ new Map()) {
  if (Hs(e) || !e || typeof e != "object") return e;
  if (t.has(e)) return t.get(e);
  let n;
  if (e instanceof Date)
    n = new Date(e.getTime()), t.set(e, n);
  else if (e instanceof RegExp)
    n = new RegExp(e), t.set(e, n);
  else if (Array.isArray(e)) {
    n = new Array(e.length), t.set(e, n);
    for (let r = 0; r < e.length; r++) n[r] = Mn(e[r], t);
  } else if (e instanceof Map) {
    n = /* @__PURE__ */ new Map(), t.set(e, n);
    for (const [r, i] of e.entries()) n.set(r, Mn(i, t));
  } else if (e instanceof Set) {
    n = /* @__PURE__ */ new Set(), t.set(e, n);
    for (const r of e) n.add(Mn(r, t));
  } else if (e instanceof Object) {
    n = {}, t.set(e, n);
    for (const [r, i] of Object.entries(e)) n[r] = Mn(i, t);
  } else
    throw Error(`Unable to clone ${e}`);
  return n;
}
class zt {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new di(), this._blacklist = new di(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(Dt.notType);
    }), this.type = t.type, this._typeCheck = t.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, t == null ? void 0 : t.spec), this.withMutation((n) => {
      n.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(t) {
    if (this._mutate)
      return t && Object.assign(this.spec, t), this;
    const n = Object.create(Object.getPrototypeOf(this));
    return n.type = this.type, n._typeCheck = this._typeCheck, n._whitelist = this._whitelist.clone(), n._blacklist = this._blacklist.clone(), n.internalTests = Object.assign({}, this.internalTests), n.exclusiveTests = Object.assign({}, this.exclusiveTests), n.deps = [...this.deps], n.conditions = [...this.conditions], n.tests = [...this.tests], n.transforms = [...this.transforms], n.spec = Mn(Object.assign({}, this.spec, t)), n;
  }
  label(t) {
    let n = this.clone();
    return n.spec.label = t, n;
  }
  meta(...t) {
    if (t.length === 0) return this.spec.meta;
    let n = this.clone();
    return n.spec.meta = Object.assign(n.spec.meta || {}, t[0]), n;
  }
  withMutation(t) {
    let n = this._mutate;
    this._mutate = !0;
    let r = t(this);
    return this._mutate = n, r;
  }
  concat(t) {
    if (!t || t === this) return this;
    if (t.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
    let n = this, r = t.clone();
    const i = Object.assign({}, n.spec, r.spec);
    return r.spec = i, r.internalTests = Object.assign({}, n.internalTests, r.internalTests), r._whitelist = n._whitelist.merge(t._whitelist, t._blacklist), r._blacklist = n._blacklist.merge(t._blacklist, t._whitelist), r.tests = n.tests, r.exclusiveTests = n.exclusiveTests, r.withMutation((s) => {
      t.tests.forEach((o) => {
        s.test(o.OPTIONS);
      });
    }), r.transforms = [...n.transforms, ...r.transforms], r;
  }
  isType(t) {
    return t == null ? !!(this.spec.nullable && t === null || this.spec.optional && t === void 0) : this._typeCheck(t);
  }
  resolve(t) {
    let n = this;
    if (n.conditions.length) {
      let r = n.conditions;
      n = n.clone(), n.conditions = [], n = r.reduce((i, s) => s.resolve(i, t), n), n = n.resolve(t);
    }
    return n;
  }
  resolveOptions(t) {
    var n, r, i, s;
    return Object.assign({}, t, {
      from: t.from || [],
      strict: (n = t.strict) != null ? n : this.spec.strict,
      abortEarly: (r = t.abortEarly) != null ? r : this.spec.abortEarly,
      recursive: (i = t.recursive) != null ? i : this.spec.recursive,
      disableStackTrace: (s = t.disableStackTrace) != null ? s : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(t, n = {}) {
    let r = this.resolve(Object.assign({
      value: t
    }, n)), i = n.assert === "ignore-optionality", s = r._cast(t, n);
    if (n.assert !== !1 && !r.isType(s)) {
      if (i && xn(s))
        return s;
      let o = cn(t), a = cn(s);
      throw new TypeError(`The value of ${n.path || "field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
` + (a !== o ? `result of cast: ${a}` : ""));
    }
    return s;
  }
  _cast(t, n) {
    let r = t === void 0 ? t : this.transforms.reduce((i, s) => s.call(this, i, t, this), t);
    return r === void 0 && (r = this.getDefault(n)), r;
  }
  _validate(t, n = {}, r, i) {
    let {
      path: s,
      originalValue: o = t,
      strict: a = this.spec.strict
    } = n, l = t;
    a || (l = this._cast(l, Object.assign({
      assert: !1
    }, n)));
    let u = [];
    for (let f of Object.values(this.internalTests))
      f && u.push(f);
    this.runTests({
      path: s,
      value: l,
      originalValue: o,
      options: n,
      tests: u
    }, r, (f) => {
      if (f.length)
        return i(f, l);
      this.runTests({
        path: s,
        value: l,
        originalValue: o,
        options: n,
        tests: this.tests
      }, r, i);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(t, n, r) {
    let i = !1, {
      tests: s,
      value: o,
      originalValue: a,
      path: l,
      options: u
    } = t, f = (y) => {
      i || (i = !0, n(y, o));
    }, c = (y) => {
      i || (i = !0, r(y, o));
    }, h = s.length, p = [];
    if (!h) return c([]);
    let m = {
      value: o,
      originalValue: a,
      path: l,
      options: u,
      schema: this
    };
    for (let y = 0; y < s.length; y++) {
      const v = s[y];
      v(m, f, function(_) {
        _ && (Array.isArray(_) ? p.push(..._) : p.push(_)), --h <= 0 && c(p);
      });
    }
  }
  asNestedTest({
    key: t,
    index: n,
    parent: r,
    parentPath: i,
    originalParent: s,
    options: o
  }) {
    const a = t ?? n;
    if (a == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const l = typeof a == "number";
    let u = r[a];
    const f = Object.assign({}, o, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: r,
      value: u,
      originalValue: s[a],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [l ? "index" : "key"]: a,
      path: l || a.includes(".") ? `${i || ""}[${l ? a : `"${a}"`}]` : (i ? `${i}.` : "") + t
    });
    return (c, h, p) => this.resolve(f)._validate(u, f, h, p);
  }
  validate(t, n) {
    var r;
    let i = this.resolve(Object.assign({}, n, {
      value: t
    })), s = (r = n == null ? void 0 : n.disableStackTrace) != null ? r : i.spec.disableStackTrace;
    return new Promise((o, a) => i._validate(t, n, (l, u) => {
      ct.isError(l) && (l.value = u), a(l);
    }, (l, u) => {
      l.length ? a(new ct(l, u, void 0, void 0, s)) : o(u);
    }));
  }
  validateSync(t, n) {
    var r;
    let i = this.resolve(Object.assign({}, n, {
      value: t
    })), s, o = (r = n == null ? void 0 : n.disableStackTrace) != null ? r : i.spec.disableStackTrace;
    return i._validate(t, Object.assign({}, n, {
      sync: !0
    }), (a, l) => {
      throw ct.isError(a) && (a.value = l), a;
    }, (a, l) => {
      if (a.length) throw new ct(a, t, void 0, void 0, o);
      s = l;
    }), s;
  }
  isValid(t, n) {
    return this.validate(t, n).then(() => !0, (r) => {
      if (ct.isError(r)) return !1;
      throw r;
    });
  }
  isValidSync(t, n) {
    try {
      return this.validateSync(t, n), !0;
    } catch (r) {
      if (ct.isError(r)) return !1;
      throw r;
    }
  }
  _getDefault(t) {
    let n = this.spec.default;
    return n == null ? n : typeof n == "function" ? n.call(this, t) : Mn(n);
  }
  getDefault(t) {
    return this.resolve(t || {})._getDefault(t);
  }
  default(t) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: t
    });
  }
  strict(t = !0) {
    return this.clone({
      strict: t
    });
  }
  nullability(t, n) {
    const r = this.clone({
      nullable: t
    });
    return r.internalTests.nullable = Dn({
      message: n,
      name: "nullable",
      test(i) {
        return i === null ? this.schema.spec.nullable : !0;
      }
    }), r;
  }
  optionality(t, n) {
    const r = this.clone({
      optional: t
    });
    return r.internalTests.optionality = Dn({
      message: n,
      name: "optionality",
      test(i) {
        return i === void 0 ? this.schema.spec.optional : !0;
      }
    }), r;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(t = Dt.defined) {
    return this.optionality(!1, t);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(t = Dt.notNull) {
    return this.nullability(!1, t);
  }
  required(t = Dt.required) {
    return this.clone().withMutation((n) => n.nonNullable(t).defined(t));
  }
  notRequired() {
    return this.clone().withMutation((t) => t.nullable().optional());
  }
  transform(t) {
    let n = this.clone();
    return n.transforms.push(t), n;
  }
  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */
  test(...t) {
    let n;
    if (t.length === 1 ? typeof t[0] == "function" ? n = {
      test: t[0]
    } : n = t[0] : t.length === 2 ? n = {
      name: t[0],
      test: t[1]
    } : n = {
      name: t[0],
      message: t[1],
      test: t[2]
    }, n.message === void 0 && (n.message = Dt.default), typeof n.test != "function") throw new TypeError("`test` is a required parameters");
    let r = this.clone(), i = Dn(n), s = n.exclusive || n.name && r.exclusiveTests[n.name] === !0;
    if (n.exclusive && !n.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return n.name && (r.exclusiveTests[n.name] = !!n.exclusive), r.tests = r.tests.filter((o) => !(o.OPTIONS.name === n.name && (s || o.OPTIONS.test === i.OPTIONS.test))), r.tests.push(i), r;
  }
  when(t, n) {
    !Array.isArray(t) && typeof t != "string" && (n = t, t = ".");
    let r = this.clone(), i = $l(t).map((s) => new Pn(s));
    return i.forEach((s) => {
      s.isSibling && r.deps.push(s.key);
    }), r.conditions.push(typeof n == "function" ? new ci(i, n) : ci.fromOptions(i, n)), r;
  }
  typeError(t) {
    let n = this.clone();
    return n.internalTests.typeError = Dn({
      message: t,
      name: "typeError",
      skipAbsent: !0,
      test(r) {
        return this.schema._typeCheck(r) ? !0 : this.createError({
          params: {
            type: this.schema.type
          }
        });
      }
    }), n;
  }
  oneOf(t, n = Dt.oneOf) {
    let r = this.clone();
    return t.forEach((i) => {
      r._whitelist.add(i), r._blacklist.delete(i);
    }), r.internalTests.whiteList = Dn({
      message: n,
      name: "oneOf",
      skipAbsent: !0,
      test(i) {
        let s = this.schema._whitelist, o = s.resolveAll(this.resolve);
        return o.includes(i) ? !0 : this.createError({
          params: {
            values: Array.from(s).join(", "),
            resolved: o
          }
        });
      }
    }), r;
  }
  notOneOf(t, n = Dt.notOneOf) {
    let r = this.clone();
    return t.forEach((i) => {
      r._blacklist.add(i), r._whitelist.delete(i);
    }), r.internalTests.blacklist = Dn({
      message: n,
      name: "notOneOf",
      test(i) {
        let s = this.schema._blacklist, o = s.resolveAll(this.resolve);
        return o.includes(i) ? this.createError({
          params: {
            values: Array.from(s).join(", "),
            resolved: o
          }
        }) : !0;
      }
    }), r;
  }
  strip(t = !0) {
    let n = this.clone();
    return n.spec.strip = t, n;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(t) {
    const n = (t ? this.resolve(t) : this).clone(), {
      label: r,
      meta: i,
      optional: s,
      nullable: o
    } = n.spec;
    return {
      meta: i,
      label: r,
      optional: s,
      nullable: o,
      default: n.getDefault(t),
      type: n.type,
      oneOf: n._whitelist.describe(),
      notOneOf: n._blacklist.describe(),
      tests: n.tests.map((l) => ({
        name: l.OPTIONS.name,
        params: l.OPTIONS.params
      })).filter((l, u, f) => f.findIndex((c) => c.name === l.name) === u)
    };
  }
}
zt.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"]) zt.prototype[`${e}At`] = function(t, n, r = {}) {
  const {
    parent: i,
    parentPath: s,
    schema: o
  } = Bf(this, t, n, r.context);
  return o[e](i && i[s], Object.assign({}, r, {
    parent: i,
    path: t
  }));
};
for (const e of ["equals", "is"]) zt.prototype[e] = zt.prototype.oneOf;
for (const e of ["not", "nope"]) zt.prototype[e] = zt.prototype.notOneOf;
const zf = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Hf(e) {
  const t = gs(e);
  if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let n = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (n = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (n = 0 - n)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + n, t.second, t.millisecond);
}
function gs(e) {
  var t, n;
  const r = zf.exec(e);
  return r ? {
    year: Yt(r[1]),
    month: Yt(r[2], 1) - 1,
    day: Yt(r[3], 1),
    hour: Yt(r[4]),
    minute: Yt(r[5]),
    second: Yt(r[6]),
    millisecond: r[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      Yt(r[7].substring(0, 3))
    ) : 0,
    precision: (t = (n = r[7]) == null ? void 0 : n.length) != null ? t : void 0,
    z: r[8] || void 0,
    plusMinus: r[9] || void 0,
    hourOffset: Yt(r[10]),
    minuteOffset: Yt(r[11])
  } : null;
}
function Yt(e, t = 0) {
  return Number(e) || t;
}
let Uf = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), qf = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), Yf = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, Xf = "^\\d{4}-\\d{2}-\\d{2}", Wf = "\\d{2}:\\d{2}:\\d{2}", Gf = "(([+-]\\d{2}(:?\\d{2})?)|Z)", Kf = new RegExp(`${Xf}T${Wf}(\\.\\d+)?${Gf}$`), Zf = (e) => xn(e) || e === e.trim(), Jf = {}.toString();
function tr() {
  return new El();
}
class El extends zt {
  constructor() {
    super({
      type: "string",
      check(t) {
        return t instanceof String && (t = t.valueOf()), typeof t == "string";
      }
    }), this.withMutation(() => {
      this.transform((t, n, r) => {
        if (!r.spec.coerce || r.isType(t) || Array.isArray(t)) return t;
        const i = t != null && t.toString ? t.toString() : t;
        return i === Jf ? t : i;
      });
    });
  }
  required(t) {
    return super.required(t).withMutation((n) => n.test({
      message: t || Dt.required,
      name: "required",
      skipAbsent: !0,
      test: (r) => !!r.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((t) => (t.tests = t.tests.filter((n) => n.OPTIONS.name !== "required"), t));
  }
  length(t, n = ot.length) {
    return this.test({
      message: n,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      skipAbsent: !0,
      test(r) {
        return r.length === this.resolve(t);
      }
    });
  }
  min(t, n = ot.min) {
    return this.test({
      message: n,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(r) {
        return r.length >= this.resolve(t);
      }
    });
  }
  max(t, n = ot.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: n,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(r) {
        return r.length <= this.resolve(t);
      }
    });
  }
  matches(t, n) {
    let r = !1, i, s;
    return n && (typeof n == "object" ? {
      excludeEmptyString: r = !1,
      message: i,
      name: s
    } = n : i = n), this.test({
      name: s || "matches",
      message: i || ot.matches,
      params: {
        regex: t
      },
      skipAbsent: !0,
      test: (o) => o === "" && r || o.search(t) !== -1
    });
  }
  email(t = ot.email) {
    return this.matches(Uf, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = ot.url) {
    return this.matches(qf, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = ot.uuid) {
    return this.matches(Yf, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  datetime(t) {
    let n = "", r, i;
    return t && (typeof t == "object" ? {
      message: n = "",
      allowOffset: r = !1,
      precision: i = void 0
    } = t : n = t), this.matches(Kf, {
      name: "datetime",
      message: n || ot.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: n || ot.datetime_offset,
      params: {
        allowOffset: r
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || r) return !0;
        const o = gs(s);
        return o ? !!o.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: n || ot.datetime_precision,
      params: {
        precision: i
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || i == null) return !0;
        const o = gs(s);
        return o ? o.precision === i : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = ot.trim) {
    return this.transform((n) => n != null ? n.trim() : n).test({
      message: t,
      name: "trim",
      test: Zf
    });
  }
  lowercase(t = ot.lowercase) {
    return this.transform((n) => xn(n) ? n : n.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (n) => xn(n) || n === n.toLowerCase()
    });
  }
  uppercase(t = ot.uppercase) {
    return this.transform((n) => xn(n) ? n : n.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (n) => xn(n) || n === n.toUpperCase()
    });
  }
}
tr.prototype = El.prototype;
let Qf = /* @__PURE__ */ new Date(""), ep = (e) => Object.prototype.toString.call(e) === "[object Date]";
class Us extends zt {
  constructor() {
    super({
      type: "date",
      check(t) {
        return ep(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, n, r) => !r.spec.coerce || r.isType(t) || t === null ? t : (t = Hf(t), isNaN(t) ? Us.INVALID_DATE : new Date(t)));
    });
  }
  prepareParam(t, n) {
    let r;
    if (Pn.isRef(t))
      r = t;
    else {
      let i = this.cast(t);
      if (!this._typeCheck(i)) throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);
      r = i;
    }
    return r;
  }
  min(t, n = vs.min) {
    let r = this.prepareParam(t, "min");
    return this.test({
      message: n,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(i) {
        return i >= this.resolve(r);
      }
    });
  }
  max(t, n = vs.max) {
    let r = this.prepareParam(t, "max");
    return this.test({
      message: n,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(i) {
        return i <= this.resolve(r);
      }
    });
  }
}
Us.INVALID_DATE = Qf;
function tp(e, t = []) {
  let n = [], r = /* @__PURE__ */ new Set(), i = new Set(t.map(([o, a]) => `${o}-${a}`));
  function s(o, a) {
    let l = kn.split(o)[0];
    r.add(l), i.has(`${a}-${l}`) || n.push([a, l]);
  }
  for (const o of Object.keys(e)) {
    let a = e[o];
    r.add(o), Pn.isRef(a) && a.isSibling ? s(a.path, o) : Hs(a) && "deps" in a && a.deps.forEach((l) => s(l, o));
  }
  return Af.array(Array.from(r), n).reverse();
}
function ta(e, t) {
  let n = 1 / 0;
  return e.some((r, i) => {
    var s;
    if ((s = t.path) != null && s.includes(r))
      return n = i, !0;
  }), n;
}
function Vl(e) {
  return (t, n) => ta(e, t) - ta(e, n);
}
const np = (e, t, n) => {
  if (typeof e != "string")
    return e;
  let r = e;
  try {
    r = JSON.parse(e);
  } catch {
  }
  return n.isType(r) ? r : e;
};
function Kr(e) {
  if ("fields" in e) {
    const t = {};
    for (const [n, r] of Object.entries(e.fields))
      t[n] = Kr(r);
    return e.setFields(t);
  }
  if (e.type === "array") {
    const t = e.optional();
    return t.innerType && (t.innerType = Kr(t.innerType)), t;
  }
  return e.type === "tuple" ? e.optional().clone({
    types: e.spec.types.map(Kr)
  }) : "optional" in e ? e.optional() : e;
}
const rp = (e, t) => {
  const n = [...kn.normalizePath(t)];
  if (n.length === 1) return n[0] in e;
  let r = n.pop(), i = kn.getter(kn.join(n), !0)(e);
  return !!(i && r in i);
};
let na = (e) => Object.prototype.toString.call(e) === "[object Object]";
function ra(e, t) {
  let n = Object.keys(e.fields);
  return Object.keys(t).filter((r) => n.indexOf(r) === -1);
}
const ip = Vl([]);
function Al(e) {
  return new Cl(e);
}
class Cl extends zt {
  constructor(t) {
    super({
      type: "object",
      check(n) {
        return na(n) || typeof n == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = ip, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      t && this.shape(t);
    });
  }
  _cast(t, n = {}) {
    var r;
    let i = super._cast(t, n);
    if (i === void 0) return this.getDefault(n);
    if (!this._typeCheck(i)) return i;
    let s = this.fields, o = (r = n.stripUnknown) != null ? r : this.spec.noUnknown, a = [].concat(this._nodes, Object.keys(i).filter((c) => !this._nodes.includes(c))), l = {}, u = Object.assign({}, n, {
      parent: l,
      __validating: n.__validating || !1
    }), f = !1;
    for (const c of a) {
      let h = s[c], p = c in i;
      if (h) {
        let m, y = i[c];
        u.path = (n.path ? `${n.path}.` : "") + c, h = h.resolve({
          value: y,
          context: n.context,
          parent: l
        });
        let v = h instanceof zt ? h.spec : void 0, x = v == null ? void 0 : v.strict;
        if (v != null && v.strip) {
          f = f || c in i;
          continue;
        }
        m = !n.__validating || !x ? (
          // TODO: use _cast, this is double resolving
          h.cast(i[c], u)
        ) : i[c], m !== void 0 && (l[c] = m);
      } else p && !o && (l[c] = i[c]);
      (p !== c in l || l[c] !== i[c]) && (f = !0);
    }
    return f ? l : i;
  }
  _validate(t, n = {}, r, i) {
    let {
      from: s = [],
      originalValue: o = t,
      recursive: a = this.spec.recursive
    } = n;
    n.from = [{
      schema: this,
      value: o
    }, ...s], n.__validating = !0, n.originalValue = o, super._validate(t, n, r, (l, u) => {
      if (!a || !na(u)) {
        i(l, u);
        return;
      }
      o = o || u;
      let f = [];
      for (let c of this._nodes) {
        let h = this.fields[c];
        !h || Pn.isRef(h) || f.push(h.asNestedTest({
          options: n,
          key: c,
          parent: u,
          parentPath: n.path,
          originalParent: o
        }));
      }
      this.runTests({
        tests: f,
        value: u,
        originalValue: o,
        options: n
      }, r, (c) => {
        i(c.sort(this._sortErrors).concat(l), u);
      });
    });
  }
  clone(t) {
    const n = super.clone(t);
    return n.fields = Object.assign({}, this.fields), n._nodes = this._nodes, n._excludedEdges = this._excludedEdges, n._sortErrors = this._sortErrors, n;
  }
  concat(t) {
    let n = super.concat(t), r = n.fields;
    for (let [i, s] of Object.entries(this.fields)) {
      const o = r[i];
      r[i] = o === void 0 ? s : o;
    }
    return n.withMutation((i) => (
      // XXX: excludes here is wrong
      i.setFields(r, [...this._excludedEdges, ...t._excludedEdges])
    ));
  }
  _getDefault(t) {
    if ("default" in this.spec)
      return super._getDefault(t);
    if (!this._nodes.length)
      return;
    let n = {};
    return this._nodes.forEach((r) => {
      var i;
      const s = this.fields[r];
      let o = t;
      (i = o) != null && i.value && (o = Object.assign({}, o, {
        parent: o.value,
        value: o.value[r]
      })), n[r] = s && "getDefault" in s ? s.getDefault(o) : void 0;
    }), n;
  }
  setFields(t, n) {
    let r = this.clone();
    return r.fields = t, r._nodes = tp(t, n), r._sortErrors = Vl(Object.keys(t)), n && (r._excludedEdges = n), r;
  }
  shape(t, n = []) {
    return this.clone().withMutation((r) => {
      let i = r._excludedEdges;
      return n.length && (Array.isArray(n[0]) || (n = [n]), i = [...r._excludedEdges, ...n]), r.setFields(Object.assign(r.fields, t), i);
    });
  }
  partial() {
    const t = {};
    for (const [n, r] of Object.entries(this.fields))
      t[n] = "optional" in r && r.optional instanceof Function ? r.optional() : r;
    return this.setFields(t);
  }
  deepPartial() {
    return Kr(this);
  }
  pick(t) {
    const n = {};
    for (const r of t)
      this.fields[r] && (n[r] = this.fields[r]);
    return this.setFields(n, this._excludedEdges.filter(([r, i]) => t.includes(r) && t.includes(i)));
  }
  omit(t) {
    const n = [];
    for (const r of Object.keys(this.fields))
      t.includes(r) || n.push(r);
    return this.pick(n);
  }
  from(t, n, r) {
    let i = kn.getter(t, !0);
    return this.transform((s) => {
      if (!s) return s;
      let o = s;
      return rp(s, t) && (o = Object.assign({}, s), r || delete o[t], o[n] = i(s)), o;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(np);
  }
  /**
   * Similar to `noUnknown` but only validates that an object is the right shape without stripping the unknown keys
   */
  exact(t) {
    return this.test({
      name: "exact",
      exclusive: !0,
      message: t || Gr.exact,
      test(n) {
        if (n == null) return !0;
        const r = ra(this.schema, n);
        return r.length === 0 || this.createError({
          params: {
            properties: r.join(", ")
          }
        });
      }
    });
  }
  stripUnknown() {
    return this.clone({
      noUnknown: !0
    });
  }
  noUnknown(t = !0, n = Gr.noUnknown) {
    typeof t != "boolean" && (n = t, t = !0);
    let r = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: n,
      test(i) {
        if (i == null) return !0;
        const s = ra(this.schema, i);
        return !t || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return r.spec.noUnknown = t, r;
  }
  unknown(t = !0, n = Gr.noUnknown) {
    return this.noUnknown(!t, n);
  }
  transformKeys(t) {
    return this.transform((n) => {
      if (!n) return n;
      const r = {};
      for (const i of Object.keys(n)) r[t(i)] = n[i];
      return r;
    });
  }
  camelCase() {
    return this.transformKeys(Xi.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Xi.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => Xi.snakeCase(t).toUpperCase());
  }
  describe(t) {
    const n = (t ? this.resolve(t) : this).clone(), r = super.describe(t);
    r.fields = {};
    for (const [s, o] of Object.entries(n.fields)) {
      var i;
      let a = t;
      (i = a) != null && i.value && (a = Object.assign({}, a, {
        parent: a.value,
        value: a.value[s]
      })), r.fields[s] = o.describe(a);
    }
    return r;
  }
}
Al.prototype = Cl.prototype;
const sp = ["onSubmit"], op = /* @__PURE__ */ $e({
  __name: "XForm",
  emits: ["submit"],
  setup(e, { expose: t, emit: n }) {
    const r = ri("form"), i = ri("form"), s = n, o = () => {
      var f;
      (f = r.value) == null || f.dispatchEvent(new Event("submit", { cancelable: !0 }));
    }, a = async () => {
      var f;
      return await ((f = i.value) == null ? void 0 : f.validate());
    }, l = () => {
      var f;
      (f = i.value) == null || f.resetForm();
    }, u = (f, c) => {
      s("submit", f, c);
    };
    return t({
      submit: o,
      validate: a,
      resetForm: l
    }), (f, c) => (F(), ve(M(kf), {
      ref_key: "veeform",
      ref: i,
      as: "div"
    }, {
      default: de(({ handleSubmit: h }) => [
        ie("form", {
          ref_key: "form",
          ref: r,
          onSubmit: (p) => h(p, u)
        }, [
          ce(f.$slots, "default")
        ], 40, sp)
      ]),
      _: 3
    }, 512));
  }
}), ap = (e, t) => {
  const n = Vt([...e]);
  return new Proxy(n, {
    set(r, i, s) {
      const o = Number(i);
      return isNaN(o) ? i === "length" && typeof s == "number" ? (r.length = s, t("update:modelValue", [...r]), !0) : (r[i] = s, !0) : (r[o] = s, t("update:modelValue", [...r]), !0);
    },
    deleteProperty(r, i) {
      const s = Number(i);
      return isNaN(s) ? (delete r[i], !0) : (r.splice(s, 1), t("update:modelValue", [...r]), !0);
    }
  });
}, fv = (e, t) => {
  const n = Vt({ ...e });
  return new Proxy(n, {
    set(r, i, s) {
      return r[i] = s, t("update:modelValue", { ...r }), !0;
    },
    deleteProperty(r, i) {
      return delete r[i], t("update:modelValue", { ...r }), !0;
    }
  });
}, lp = ["innerHTML"], up = /* @__PURE__ */ $e({
  __name: "XFieldError",
  props: {
    message: {
      type: String,
      default: null
    }
  },
  setup(e) {
    return (t, n) => e.message ? (F(), se("div", {
      key: 0,
      innerHTML: e.message,
      class: "x-field-error"
    }, null, 8, lp)) : pe("", !0);
  }
}), cp = /* @__PURE__ */ qe(up, [["__scopeId", "data-v-264fe63e"]]), wr = /* @__PURE__ */ $e({
  __name: "XValidationFormItem",
  props: {
    value: {
      type: null,
      default: ""
    },
    name: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, {
      value: n,
      errorMessage: r,
      handleBlur: i,
      handleChange: s
    } = hf(is(t, "name"), void 0, {
      syncVModel: !0,
      initialValue: t.value
    });
    return Ie(() => t.value, (o) => n.value = o), (o, a) => (F(), se("span", null, [
      ce(o.$slots, "default", Mt(Wt({ inputValue: M(n), handleBlur: M(i), handleChange: M(s) }))),
      ce(o.$slots, "error", Mt(Wt({ errorMessage: M(r) })), () => [
        me(M(cp), { message: M(r) }, null, 8, ["message"])
      ])
    ]));
  }
}), dp = { class: "x-label" }, fp = ["for"], pp = { key: 0 }, hp = /* @__PURE__ */ $e({
  __name: "XLabel",
  props: {
    htmlFor: {
      type: String
    },
    required: Boolean
  },
  setup(e) {
    const t = ri("label"), n = Cn(), r = e, i = () => {
      var o, a;
      if (r.htmlFor) return;
      const s = (a = (o = H(t)) == null ? void 0 : o.nextElementSibling) == null ? void 0 : a.querySelector("input");
      s && s.focus();
    };
    return (s, o) => (F(), se("div", dp, [
      ie("label", ke({
        for: e.htmlFor,
        ref_key: "label",
        ref: t
      }, M(n), { onClick: i }), [
        ce(s.$slots, "default", {}, void 0, !0),
        e.required ? (F(), se("span", pp, "*")) : pe("", !0)
      ], 16, fp),
      ce(s.$slots, "append", {}, void 0, !0)
    ]));
  }
}), mp = /* @__PURE__ */ qe(hp, [["__scopeId", "data-v-fe74dc87"]]), vp = { class: "x-form-item__append-label" }, gp = { class: "x-form-item__content" }, yp = /* @__PURE__ */ $e({
  __name: "XFormItem",
  props: {
    label: {
      type: String,
      default: null
    },
    htmlFor: {
      type: String
    },
    mode: {
      type: String,
      default: "default",
      validator: (e) => ["default", "inline", "flex"].includes(e)
    },
    required: Boolean,
    noLabel: Boolean
  },
  setup(e) {
    const t = Ba(), n = e, r = T(() => [
      "x-form-item",
      `x-form-item--${n.mode}`
    ]), i = T(() => [
      "x-form-item__label",
      { "x-form-item__label--block": t["append-label"] }
    ]), s = T(() => n.noLabel && n.label ? n.required ? `${n.label} *` : n.label : null);
    return (o, a) => (F(), se("div", {
      class: De(r.value)
    }, [
      !e.noLabel && (e.label || o.$slots.label) ? (F(), ve(M(mp), {
        key: 0,
        "html-for": e.htmlFor,
        required: e.required,
        class: De(i.value)
      }, {
        append: de(() => [
          ie("div", vp, [
            ce(o.$slots, "append-label", {}, void 0, !0)
          ])
        ]),
        default: de(() => [
          ce(o.$slots, "label", {}, () => [
            je(Te(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["html-for", "required", "class"])) : pe("", !0),
      ie("div", gp, [
        ce(o.$slots, "default", { placeholder: s.value }, void 0, !0)
      ])
    ], 2));
  }
}), Fr = /* @__PURE__ */ qe(yp, [["__scopeId", "data-v-f465520a"]]), bp = { class: "x-checkbox-group" }, wp = /* @__PURE__ */ $e({
  __name: "XCheckboxGroup",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      required: !0
    },
    fields: {
      type: Array,
      default: () => []
    },
    checkboxProps: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = T({
      get() {
        return n.modelValue;
      },
      set(s) {
        r("update:modelValue", s);
      }
    });
    return (s, o) => (F(), se("div", bp, [
      (F(!0), se(Et, null, pn(e.fields, (a) => (F(), ve(M(ol), ke({
        modelValue: i.value,
        "onUpdate:modelValue": o[0] || (o[0] = (l) => i.value = l),
        key: a.value,
        name: e.name
      }, { ref_for: !0 }, { ...a, ...e.checkboxProps }), {
        text: de(() => [
          ce(s.$slots, "text", ke({ ref_for: !0 }, a), void 0, !0)
        ]),
        default: de(() => [
          je(Te(a.label) + " ", 1)
        ]),
        _: 2
      }, 1040, ["modelValue", "name"]))), 128))
    ]));
  }
}), pv = /* @__PURE__ */ qe(wp, [["__scopeId", "data-v-11b46748"]]), hv = () => ({ formatter: (t, n, r) => t.map((i) => ({
  label: n[i],
  icon: r ? i : void 0,
  value: i
})) });
var Zr = { exports: {} }, xp = Zr.exports, ia;
function Sp() {
  return ia || (ia = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(xp, function() {
      var n = 1e3, r = 6e4, i = 36e5, s = "millisecond", o = "second", a = "minute", l = "hour", u = "day", f = "week", c = "month", h = "quarter", p = "year", m = "date", y = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, x = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, _ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(L) {
        var E = ["th", "st", "nd", "rd"], A = L % 100;
        return "[" + L + (E[(A - 20) % 10] || E[A] || E[0]) + "]";
      } }, V = function(L, E, A) {
        var j = String(L);
        return !j || j.length >= E ? L : "" + Array(E + 1 - j.length).join(A) + L;
      }, X = { s: V, z: function(L) {
        var E = -L.utcOffset(), A = Math.abs(E), j = Math.floor(A / 60), R = A % 60;
        return (E <= 0 ? "+" : "-") + V(j, 2, "0") + ":" + V(R, 2, "0");
      }, m: function L(E, A) {
        if (E.date() < A.date()) return -L(A, E);
        var j = 12 * (A.year() - E.year()) + (A.month() - E.month()), R = E.clone().add(j, c), U = A - R < 0, W = E.clone().add(j + (U ? -1 : 1), c);
        return +(-(j + (A - R) / (U ? R - W : W - R)) || 0);
      }, a: function(L) {
        return L < 0 ? Math.ceil(L) || 0 : Math.floor(L);
      }, p: function(L) {
        return { M: c, y: p, w: f, d: u, D: m, h: l, m: a, s: o, ms: s, Q: h }[L] || String(L || "").toLowerCase().replace(/s$/, "");
      }, u: function(L) {
        return L === void 0;
      } }, I = "en", G = {};
      G[I] = _;
      var Y = "$isDayjsObject", te = function(L) {
        return L instanceof re || !(!L || !L[Y]);
      }, D = function L(E, A, j) {
        var R;
        if (!E) return I;
        if (typeof E == "string") {
          var U = E.toLowerCase();
          G[U] && (R = U), A && (G[U] = A, R = U);
          var W = E.split("-");
          if (!R && W.length > 1) return L(W[0]);
        } else {
          var le = E.name;
          G[le] = E, R = le;
        }
        return !j && R && (I = R), R || !j && I;
      }, K = function(L, E) {
        if (te(L)) return L.clone();
        var A = typeof E == "object" ? E : {};
        return A.date = L, A.args = arguments, new re(A);
      }, N = X;
      N.l = D, N.i = te, N.w = function(L, E) {
        return K(L, { locale: E.$L, utc: E.$u, x: E.$x, $offset: E.$offset });
      };
      var re = function() {
        function L(A) {
          this.$L = D(A.locale, null, !0), this.parse(A), this.$x = this.$x || A.x || {}, this[Y] = !0;
        }
        var E = L.prototype;
        return E.parse = function(A) {
          this.$d = function(j) {
            var R = j.date, U = j.utc;
            if (R === null) return /* @__PURE__ */ new Date(NaN);
            if (N.u(R)) return /* @__PURE__ */ new Date();
            if (R instanceof Date) return new Date(R);
            if (typeof R == "string" && !/Z$/i.test(R)) {
              var W = R.match(v);
              if (W) {
                var le = W[2] - 1 || 0, ye = (W[7] || "0").substring(0, 3);
                return U ? new Date(Date.UTC(W[1], le, W[3] || 1, W[4] || 0, W[5] || 0, W[6] || 0, ye)) : new Date(W[1], le, W[3] || 1, W[4] || 0, W[5] || 0, W[6] || 0, ye);
              }
            }
            return new Date(R);
          }(A), this.init();
        }, E.init = function() {
          var A = this.$d;
          this.$y = A.getFullYear(), this.$M = A.getMonth(), this.$D = A.getDate(), this.$W = A.getDay(), this.$H = A.getHours(), this.$m = A.getMinutes(), this.$s = A.getSeconds(), this.$ms = A.getMilliseconds();
        }, E.$utils = function() {
          return N;
        }, E.isValid = function() {
          return this.$d.toString() !== y;
        }, E.isSame = function(A, j) {
          var R = K(A);
          return this.startOf(j) <= R && R <= this.endOf(j);
        }, E.isAfter = function(A, j) {
          return K(A) < this.startOf(j);
        }, E.isBefore = function(A, j) {
          return this.endOf(j) < K(A);
        }, E.$g = function(A, j, R) {
          return N.u(A) ? this[j] : this.set(R, A);
        }, E.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, E.valueOf = function() {
          return this.$d.getTime();
        }, E.startOf = function(A, j) {
          var R = this, U = !!N.u(j) || j, W = N.p(A), le = function(ge, Ve) {
            var Fe = N.w(R.$u ? Date.UTC(R.$y, Ve, ge) : new Date(R.$y, Ve, ge), R);
            return U ? Fe : Fe.endOf(u);
          }, ye = function(ge, Ve) {
            return N.w(R.toDate()[ge].apply(R.toDate("s"), (U ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Ve)), R);
          }, q = this.$W, Q = this.$M, he = this.$D, C = "set" + (this.$u ? "UTC" : "");
          switch (W) {
            case p:
              return U ? le(1, 0) : le(31, 11);
            case c:
              return U ? le(1, Q) : le(0, Q + 1);
            case f:
              var B = this.$locale().weekStart || 0, we = (q < B ? q + 7 : q) - B;
              return le(U ? he - we : he + (6 - we), Q);
            case u:
            case m:
              return ye(C + "Hours", 0);
            case l:
              return ye(C + "Minutes", 1);
            case a:
              return ye(C + "Seconds", 2);
            case o:
              return ye(C + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, E.endOf = function(A) {
          return this.startOf(A, !1);
        }, E.$set = function(A, j) {
          var R, U = N.p(A), W = "set" + (this.$u ? "UTC" : ""), le = (R = {}, R[u] = W + "Date", R[m] = W + "Date", R[c] = W + "Month", R[p] = W + "FullYear", R[l] = W + "Hours", R[a] = W + "Minutes", R[o] = W + "Seconds", R[s] = W + "Milliseconds", R)[U], ye = U === u ? this.$D + (j - this.$W) : j;
          if (U === c || U === p) {
            var q = this.clone().set(m, 1);
            q.$d[le](ye), q.init(), this.$d = q.set(m, Math.min(this.$D, q.daysInMonth())).$d;
          } else le && this.$d[le](ye);
          return this.init(), this;
        }, E.set = function(A, j) {
          return this.clone().$set(A, j);
        }, E.get = function(A) {
          return this[N.p(A)]();
        }, E.add = function(A, j) {
          var R, U = this;
          A = Number(A);
          var W = N.p(j), le = function(Q) {
            var he = K(U);
            return N.w(he.date(he.date() + Math.round(Q * A)), U);
          };
          if (W === c) return this.set(c, this.$M + A);
          if (W === p) return this.set(p, this.$y + A);
          if (W === u) return le(1);
          if (W === f) return le(7);
          var ye = (R = {}, R[a] = r, R[l] = i, R[o] = n, R)[W] || 1, q = this.$d.getTime() + A * ye;
          return N.w(q, this);
        }, E.subtract = function(A, j) {
          return this.add(-1 * A, j);
        }, E.format = function(A) {
          var j = this, R = this.$locale();
          if (!this.isValid()) return R.invalidDate || y;
          var U = A || "YYYY-MM-DDTHH:mm:ssZ", W = N.z(this), le = this.$H, ye = this.$m, q = this.$M, Q = R.weekdays, he = R.months, C = R.meridiem, B = function(Ve, Fe, Le, yt) {
            return Ve && (Ve[Fe] || Ve(j, U)) || Le[Fe].slice(0, yt);
          }, we = function(Ve) {
            return N.s(le % 12 || 12, Ve, "0");
          }, ge = C || function(Ve, Fe, Le) {
            var yt = Ve < 12 ? "AM" : "PM";
            return Le ? yt.toLowerCase() : yt;
          };
          return U.replace(x, function(Ve, Fe) {
            return Fe || function(Le) {
              switch (Le) {
                case "YY":
                  return String(j.$y).slice(-2);
                case "YYYY":
                  return N.s(j.$y, 4, "0");
                case "M":
                  return q + 1;
                case "MM":
                  return N.s(q + 1, 2, "0");
                case "MMM":
                  return B(R.monthsShort, q, he, 3);
                case "MMMM":
                  return B(he, q);
                case "D":
                  return j.$D;
                case "DD":
                  return N.s(j.$D, 2, "0");
                case "d":
                  return String(j.$W);
                case "dd":
                  return B(R.weekdaysMin, j.$W, Q, 2);
                case "ddd":
                  return B(R.weekdaysShort, j.$W, Q, 3);
                case "dddd":
                  return Q[j.$W];
                case "H":
                  return String(le);
                case "HH":
                  return N.s(le, 2, "0");
                case "h":
                  return we(1);
                case "hh":
                  return we(2);
                case "a":
                  return ge(le, ye, !0);
                case "A":
                  return ge(le, ye, !1);
                case "m":
                  return String(ye);
                case "mm":
                  return N.s(ye, 2, "0");
                case "s":
                  return String(j.$s);
                case "ss":
                  return N.s(j.$s, 2, "0");
                case "SSS":
                  return N.s(j.$ms, 3, "0");
                case "Z":
                  return W;
              }
              return null;
            }(Ve) || W.replace(":", "");
          });
        }, E.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, E.diff = function(A, j, R) {
          var U, W = this, le = N.p(j), ye = K(A), q = (ye.utcOffset() - this.utcOffset()) * r, Q = this - ye, he = function() {
            return N.m(W, ye);
          };
          switch (le) {
            case p:
              U = he() / 12;
              break;
            case c:
              U = he();
              break;
            case h:
              U = he() / 3;
              break;
            case f:
              U = (Q - q) / 6048e5;
              break;
            case u:
              U = (Q - q) / 864e5;
              break;
            case l:
              U = Q / i;
              break;
            case a:
              U = Q / r;
              break;
            case o:
              U = Q / n;
              break;
            default:
              U = Q;
          }
          return R ? U : N.a(U);
        }, E.daysInMonth = function() {
          return this.endOf(c).$D;
        }, E.$locale = function() {
          return G[this.$L];
        }, E.locale = function(A, j) {
          if (!A) return this.$L;
          var R = this.clone(), U = D(A, j, !0);
          return U && (R.$L = U), R;
        }, E.clone = function() {
          return N.w(this.$d, this);
        }, E.toDate = function() {
          return new Date(this.valueOf());
        }, E.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, E.toISOString = function() {
          return this.$d.toISOString();
        }, E.toString = function() {
          return this.$d.toUTCString();
        }, L;
      }(), fe = re.prototype;
      return K.prototype = fe, [["$ms", s], ["$s", o], ["$m", a], ["$H", l], ["$W", u], ["$M", c], ["$y", p], ["$D", m]].forEach(function(L) {
        fe[L[1]] = function(E) {
          return this.$g(E, L[0], L[1]);
        };
      }), K.extend = function(L, E) {
        return L.$i || (L(E, re, K), L.$i = !0), K;
      }, K.locale = D, K.isDayjs = te, K.unix = function(L) {
        return K(1e3 * L);
      }, K.en = G[I], K.Ls = G, K.p = {}, K;
    });
  }(Zr)), Zr.exports;
}
var $p = Sp();
const xt = /* @__PURE__ */ $i($p);
var Jr = { exports: {} }, kp = Jr.exports, sa;
function _p() {
  return sa || (sa = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(kp, function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d/, s = /\d\d/, o = /\d\d?/, a = /\d*[^-_:/,()\s\d]+/, l = {}, u = function(v) {
        return (v = +v) + (v > 68 ? 1900 : 2e3);
      }, f = function(v) {
        return function(x) {
          this[v] = +x;
        };
      }, c = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
        (this.zone || (this.zone = {})).offset = function(x) {
          if (!x || x === "Z") return 0;
          var _ = x.match(/([+-]|\d\d)/g), V = 60 * _[1] + (+_[2] || 0);
          return V === 0 ? 0 : _[0] === "+" ? -V : V;
        }(v);
      }], h = function(v) {
        var x = l[v];
        return x && (x.indexOf ? x : x.s.concat(x.f));
      }, p = function(v, x) {
        var _, V = l.meridiem;
        if (V) {
          for (var X = 1; X <= 24; X += 1) if (v.indexOf(V(X, 0, x)) > -1) {
            _ = X > 12;
            break;
          }
        } else _ = v === (x ? "pm" : "PM");
        return _;
      }, m = { A: [a, function(v) {
        this.afternoon = p(v, !1);
      }], a: [a, function(v) {
        this.afternoon = p(v, !0);
      }], Q: [i, function(v) {
        this.month = 3 * (v - 1) + 1;
      }], S: [i, function(v) {
        this.milliseconds = 100 * +v;
      }], SS: [s, function(v) {
        this.milliseconds = 10 * +v;
      }], SSS: [/\d{3}/, function(v) {
        this.milliseconds = +v;
      }], s: [o, f("seconds")], ss: [o, f("seconds")], m: [o, f("minutes")], mm: [o, f("minutes")], H: [o, f("hours")], h: [o, f("hours")], HH: [o, f("hours")], hh: [o, f("hours")], D: [o, f("day")], DD: [s, f("day")], Do: [a, function(v) {
        var x = l.ordinal, _ = v.match(/\d+/);
        if (this.day = _[0], x) for (var V = 1; V <= 31; V += 1) x(V).replace(/\[|\]/g, "") === v && (this.day = V);
      }], w: [o, f("week")], ww: [s, f("week")], M: [o, f("month")], MM: [s, f("month")], MMM: [a, function(v) {
        var x = h("months"), _ = (h("monthsShort") || x.map(function(V) {
          return V.slice(0, 3);
        })).indexOf(v) + 1;
        if (_ < 1) throw new Error();
        this.month = _ % 12 || _;
      }], MMMM: [a, function(v) {
        var x = h("months").indexOf(v) + 1;
        if (x < 1) throw new Error();
        this.month = x % 12 || x;
      }], Y: [/[+-]?\d+/, f("year")], YY: [s, function(v) {
        this.year = u(v);
      }], YYYY: [/\d{4}/, f("year")], Z: c, ZZ: c };
      function y(v) {
        var x, _;
        x = v, _ = l && l.formats;
        for (var V = (v = x.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(K, N, re) {
          var fe = re && re.toUpperCase();
          return N || _[re] || n[re] || _[fe].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(L, E, A) {
            return E || A.slice(1);
          });
        })).match(r), X = V.length, I = 0; I < X; I += 1) {
          var G = V[I], Y = m[G], te = Y && Y[0], D = Y && Y[1];
          V[I] = D ? { regex: te, parser: D } : G.replace(/^\[|\]$/g, "");
        }
        return function(K) {
          for (var N = {}, re = 0, fe = 0; re < X; re += 1) {
            var L = V[re];
            if (typeof L == "string") fe += L.length;
            else {
              var E = L.regex, A = L.parser, j = K.slice(fe), R = E.exec(j)[0];
              A.call(N, R), K = K.replace(R, "");
            }
          }
          return function(U) {
            var W = U.afternoon;
            if (W !== void 0) {
              var le = U.hours;
              W ? le < 12 && (U.hours += 12) : le === 12 && (U.hours = 0), delete U.afternoon;
            }
          }(N), N;
        };
      }
      return function(v, x, _) {
        _.p.customParseFormat = !0, v && v.parseTwoDigitYear && (u = v.parseTwoDigitYear);
        var V = x.prototype, X = V.parse;
        V.parse = function(I) {
          var G = I.date, Y = I.utc, te = I.args;
          this.$u = Y;
          var D = te[1];
          if (typeof D == "string") {
            var K = te[2] === !0, N = te[3] === !0, re = K || N, fe = te[2];
            N && (fe = te[2]), l = this.$locale(), !K && fe && (l = _.Ls[fe]), this.$d = function(j, R, U, W) {
              try {
                if (["x", "X"].indexOf(R) > -1) return new Date((R === "X" ? 1e3 : 1) * j);
                var le = y(R)(j), ye = le.year, q = le.month, Q = le.day, he = le.hours, C = le.minutes, B = le.seconds, we = le.milliseconds, ge = le.zone, Ve = le.week, Fe = /* @__PURE__ */ new Date(), Le = Q || (ye || q ? 1 : Fe.getDate()), yt = ye || Fe.getFullYear(), Kt = 0;
                ye && !q || (Kt = q > 0 ? q - 1 : Fe.getMonth());
                var Zt, Ht = he || 0, Jt = C || 0, Ut = B || 0, bt = we || 0;
                return ge ? new Date(Date.UTC(yt, Kt, Le, Ht, Jt, Ut, bt + 60 * ge.offset * 1e3)) : U ? new Date(Date.UTC(yt, Kt, Le, Ht, Jt, Ut, bt)) : (Zt = new Date(yt, Kt, Le, Ht, Jt, Ut, bt), Ve && (Zt = W(Zt).week(Ve).toDate()), Zt);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            }(G, D, Y, _), this.init(), fe && fe !== !0 && (this.$L = this.locale(fe).$L), re && G != this.format(D) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
          } else if (D instanceof Array) for (var L = D.length, E = 1; E <= L; E += 1) {
            te[1] = D[E - 1];
            var A = _.apply(this, te);
            if (A.isValid()) {
              this.$d = A.$d, this.$L = A.$L, this.init();
              break;
            }
            E === L && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else X.call(this, I);
        };
      };
    });
  }(Jr)), Jr.exports;
}
var Op = _p();
const Ep = /* @__PURE__ */ $i(Op), Vp = {}, Ap = { class: "row" };
function Cp(e, t) {
  return F(), se("div", Ap, [
    ce(e.$slots, "default")
  ]);
}
const Tp = /* @__PURE__ */ qe(Vp, [["render", Cp]]), oa = /* @__PURE__ */ $e({
  __name: "XCol",
  props: {
    col: {
      type: String,
      default: null
    },
    auto: Boolean
  },
  setup(e) {
    const t = e, n = T(() => [
      "col",
      { "col-auto": t.auto },
      { [`col-${t.col}`]: t.col }
    ]);
    return (r, i) => (F(), se("div", {
      class: De(n.value)
    }, [
      ce(r.$slots, "default")
    ], 2));
  }
});
function Wi(e) {
  return e === 0 ? !1 : Array.isArray(e) && e.length === 0 ? !0 : !e;
}
function Pp(e) {
  return (...t) => !e(...t);
}
function Np(e, t) {
  return e === void 0 && (e = "undefined"), e === null && (e = "null"), e === !1 && (e = "false"), e.toString().toLowerCase().indexOf(t.trim()) !== -1;
}
function Dp(e) {
  return e.filter((t) => !t.$isLabel);
}
function Gi(e, t) {
  return (n) => n.reduce((r, i) => i[e] && i[e].length ? (r.push({
    $groupLabel: i[t],
    $isLabel: !0
  }), r.concat(i[e])) : r, []);
}
const aa = (...e) => (t) => e.reduce((n, r) => r(n), t);
var Fp = {
  data() {
    return {
      search: "",
      isOpen: !1,
      preferredOpenDirection: "below",
      optimizedHeight: this.maxHeight
    };
  },
  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
      type: Boolean,
      default: !0
    },
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: !0
    },
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: !1
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
    },
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: !0
    },
    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: !1
    },
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: "Select option"
    },
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: !0
    },
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: !1
    },
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default(e, t) {
        return Wi(e) ? "" : t ? e[t] : e;
      }
    },
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: !1
    },
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
      type: String,
      default: "Press enter to create a tag"
    },
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
      type: String,
      default: "top"
    },
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
      type: [Number, Boolean],
      default: !1
    },
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
      default: null
    },
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
      type: Number,
      default: 1e3
    },
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
      type: String
    },
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
      type: String
    },
    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
      type: Boolean,
      default: !1
    },
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
      type: Boolean,
      default: !1
    },
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
      type: Boolean,
      default: !1
    },
    /**
     * Prevent autofocus
     * @default false
     * @type {Boolean}
     */
    preventAutofocus: {
      type: Boolean,
      default: !1
    },
    /**
     * Allows a custom function for sorting search/filtered results.
     * @default null
     * @type {Function}
     */
    filteringSortFunc: {
      type: Function,
      default: null
    }
  },
  mounted() {
    !this.multiple && this.max && console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."), this.preselectFirst && !this.internalValue.length && this.options.length && this.select(this.filteredOptions[0]);
  },
  computed: {
    internalValue() {
      return this.modelValue || this.modelValue === 0 ? Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue] : [];
    },
    filteredOptions() {
      const e = this.search || "", t = e.toLowerCase().trim();
      let n = this.options.concat();
      return this.internalSearch ? n = this.groupValues ? this.filterAndFlat(n, t, this.label) : this.filterOptions(n, t, this.label, this.customLabel) : n = this.groupValues ? Gi(this.groupValues, this.groupLabel)(n) : n, n = this.hideSelected ? n.filter(Pp(this.isSelected)) : n, this.taggable && t.length && !this.isExistingOption(t) && (this.tagPosition === "bottom" ? n.push({ isTag: !0, label: e }) : n.unshift({ isTag: !0, label: e })), n.slice(0, this.optionsLimit);
    },
    valueKeys() {
      return this.trackBy ? this.internalValue.map((e) => e[this.trackBy]) : this.internalValue;
    },
    optionKeys() {
      return (this.groupValues ? this.flatAndStrip(this.options) : this.options).map((t) => this.customLabel(t, this.label).toString().toLowerCase());
    },
    currentOptionLabel() {
      return this.multiple ? this.searchable ? "" : this.placeholder : this.internalValue.length ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? "" : this.placeholder;
    }
  },
  watch: {
    internalValue: {
      handler() {
        this.resetAfter && this.internalValue.length && (this.search = "", this.$emit("update:modelValue", this.multiple ? [] : null));
      },
      deep: !0
    },
    search() {
      this.$emit("search-change", this.search);
    }
  },
  emits: ["open", "search-change", "close", "select", "update:modelValue", "remove", "tag"],
  methods: {
    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    getValue() {
      return this.multiple ? this.internalValue : this.internalValue.length === 0 ? null : this.internalValue[0];
    },
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @return {Array} returns a filtered and flat options list
     */
    filterAndFlat(e, t, n) {
      return aa(
        this.filterGroups(t, n, this.groupValues, this.groupLabel, this.customLabel),
        Gi(this.groupValues, this.groupLabel)
      )(e);
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @return {Array} returns a flat options list without group labels
     */
    flatAndStrip(e) {
      return aa(
        Gi(this.groupValues, this.groupLabel),
        Dp
      )(e);
    },
    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch(e) {
      this.search = e;
    },
    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @return {Boolean} returns true if element is available
     */
    isExistingOption(e) {
      return this.options ? this.optionKeys.indexOf(e) > -1 : !1;
    },
    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected(e) {
      const t = this.trackBy ? e[this.trackBy] : e;
      return this.valueKeys.indexOf(t) > -1;
    },
    /**
     * Finds out if the given option is disabled
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is disabled
     */
    isOptionDisabled(e) {
      return !!e.$isDisabled;
    },
    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel(e) {
      if (Wi(e)) return "";
      if (e.isTag) return e.label;
      if (e.$isLabel) return e.$groupLabel;
      const t = this.customLabel(e, this.label);
      return Wi(t) ? "" : t;
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select(e, t) {
      if (e.$isLabel && this.groupSelect) {
        this.selectGroup(e);
        return;
      }
      if (!(this.blockKeys.indexOf(t) !== -1 || this.disabled || e.$isDisabled || e.$isLabel) && !(this.max && this.multiple && this.internalValue.length === this.max) && !(t === "Tab" && !this.pointerDirty)) {
        if (e.isTag)
          this.$emit("tag", e.label, this.id), this.search = "", this.closeOnSelect && !this.multiple && this.deactivate();
        else {
          if (this.isSelected(e)) {
            t !== "Tab" && this.removeElement(e);
            return;
          }
          this.multiple ? this.$emit("update:modelValue", this.internalValue.concat([e])) : this.$emit("update:modelValue", e), this.$emit("select", e, this.id), this.clearOnSelect && (this.search = "");
        }
        this.closeOnSelect && this.deactivate();
      }
    },
    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup(e) {
      const t = this.options.find((n) => n[this.groupLabel] === e.$groupLabel);
      if (t) {
        if (this.wholeGroupSelected(t)) {
          this.$emit("remove", t[this.groupValues], this.id);
          const n = this.trackBy ? t[this.groupValues].map((i) => i[this.trackBy]) : t[this.groupValues], r = this.internalValue.filter(
            (i) => n.indexOf(this.trackBy ? i[this.trackBy] : i) === -1
          );
          this.$emit("update:modelValue", r);
        } else {
          const n = t[this.groupValues].filter(
            (r) => !(this.isOptionDisabled(r) || this.isSelected(r))
          );
          this.max && n.splice(this.max - this.internalValue.length), this.$emit("select", n, this.id), this.$emit(
            "update:modelValue",
            this.internalValue.concat(n)
          );
        }
        this.closeOnSelect && this.deactivate();
      }
    },
    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected(e) {
      return e[this.groupValues].every(
        (t) => this.isSelected(t) || this.isOptionDisabled(t)
      );
    },
    /**
     * Helper to identify if all values in a group are disabled
     *
     * @param {Object} group to check for disabled values
     */
    wholeGroupDisabled(e) {
      return e[this.groupValues].every(this.isOptionDisabled);
    },
    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @return {type}        description
     */
    removeElement(e, t = !0) {
      if (this.disabled || e.$isDisabled) return;
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return;
      }
      const n = typeof e == "object" ? this.valueKeys.indexOf(e[this.trackBy]) : this.valueKeys.indexOf(e);
      if (this.multiple) {
        const r = this.internalValue.slice(0, n).concat(this.internalValue.slice(n + 1));
        this.$emit("update:modelValue", r);
      } else
        this.$emit("update:modelValue", null);
      this.$emit("remove", e, this.id), this.closeOnSelect && t && this.deactivate();
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement() {
      this.blockKeys.indexOf("Delete") === -1 && this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length && this.removeElement(this.internalValue[this.internalValue.length - 1], !1);
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate() {
      this.isOpen || this.disabled || (this.adjustPosition(), this.groupValues && this.pointer === 0 && this.filteredOptions.length && (this.pointer = 1), this.isOpen = !0, this.searchable ? (this.preserveSearch || (this.search = ""), this.preventAutofocus || this.$nextTick(() => this.$refs.search && this.$refs.search.focus())) : this.preventAutofocus || typeof this.$el < "u" && this.$el.focus(), this.$emit("open", this.id));
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate() {
      this.isOpen && (this.isOpen = !1, this.searchable ? this.$refs.search !== null && typeof this.$refs.search < "u" && this.$refs.search.blur() : typeof this.$el < "u" && this.$el.blur(), this.preserveSearch || (this.search = ""), this.$emit("close", this.getValue(), this.id));
    },
    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle() {
      this.isOpen ? this.deactivate() : this.activate();
    },
    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition() {
      if (typeof window > "u") return;
      const e = this.$el.getBoundingClientRect().top, t = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      t > this.maxHeight || t > e || this.openDirection === "below" || this.openDirection === "bottom" ? (this.preferredOpenDirection = "below", this.optimizedHeight = Math.min(t - 40, this.maxHeight)) : (this.preferredOpenDirection = "above", this.optimizedHeight = Math.min(e - 40, this.maxHeight));
    },
    /**
     * Filters and sorts the options ready for selection
     * @param {Array} options
     * @param {String} search
     * @param {String} label
     * @param {Function} customLabel
     * @returns {Array}
     */
    filterOptions(e, t, n, r) {
      return t ? e.filter((i) => Np(r(i, n), t)).sort((i, s) => typeof this.filteringSortFunc == "function" ? this.filteringSortFunc(i, s) : r(i, n).length - r(s, n).length) : e;
    },
    /**
     *
     * @param {String} search
     * @param {String} label
     * @param {String} values
     * @param {String} groupLabel
     * @param {function} customLabel
     * @returns {function(*): *}
     */
    filterGroups(e, t, n, r, i) {
      return (s) => s.map((o) => {
        if (!o[n])
          return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."), [];
        const a = this.filterOptions(o[n], e, t, i);
        return a.length ? {
          [r]: o[r],
          [n]: a
        } : [];
      });
    }
  }
}, Mp = {
  data() {
    return {
      pointer: 0,
      pointerDirty: !1
    };
  },
  props: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: !0
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition() {
      return this.pointer * this.optionHeight;
    },
    visibleElements() {
      return this.optimizedHeight / this.optionHeight;
    }
  },
  watch: {
    filteredOptions() {
      this.pointerAdjust();
    },
    isOpen() {
      this.pointerDirty = !1;
    },
    pointer() {
      this.$refs.search && this.$refs.search.setAttribute("aria-activedescendant", this.id + "-" + this.pointer.toString());
    }
  },
  methods: {
    optionHighlight(e, t) {
      return {
        "multiselect__option--highlight": e === this.pointer && this.showPointer,
        "multiselect__option--selected": this.isSelected(t)
      };
    },
    groupHighlight(e, t) {
      if (!this.groupSelect)
        return [
          "multiselect__option--disabled",
          { "multiselect__option--group": t.$isLabel }
        ];
      const n = this.options.find((r) => r[this.groupLabel] === t.$groupLabel);
      return n && !this.wholeGroupDisabled(n) ? [
        "multiselect__option--group",
        { "multiselect__option--highlight": e === this.pointer && this.showPointer },
        { "multiselect__option--group-selected": this.wholeGroupSelected(n) }
      ] : "multiselect__option--disabled";
    },
    addPointerElement({ key: e } = "Enter") {
      this.filteredOptions.length > 0 && this.select(this.filteredOptions[this.pointer], e), this.pointerReset();
    },
    pointerForward() {
      this.pointer < this.filteredOptions.length - 1 && (this.pointer++, this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight && (this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward()), this.pointerDirty = !0;
    },
    pointerBackward() {
      this.pointer > 0 ? (this.pointer--, this.$refs.list.scrollTop >= this.pointerPosition && (this.$refs.list.scrollTop = this.pointerPosition), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerBackward()) : this.filteredOptions[this.pointer] && this.filteredOptions[0].$isLabel && !this.groupSelect && this.pointerForward(), this.pointerDirty = !0;
    },
    pointerReset() {
      this.closeOnSelect && (this.pointer = 0, this.$refs.list && (this.$refs.list.scrollTop = 0));
    },
    pointerAdjust() {
      this.pointer >= this.filteredOptions.length - 1 && (this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0), this.filteredOptions.length > 0 && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward();
    },
    pointerSet(e) {
      this.pointer = e, this.pointerDirty = !0;
    }
  }
}, Tl = {
  name: "vue-multiselect",
  mixins: [Fp, Mp],
  compatConfig: {
    MODE: 3,
    ATTR_ENUMERATED_COERCION: !1
  },
  props: {
    /**
       * name attribute to match optional label element
       * @default ''
       * @type {String}
       */
    name: {
      type: String,
      default: ""
    },
    /**
       * Presets the selected options value.
       * @type {Object||Array||String||Integer}
       */
    modelValue: {
      type: null,
      default() {
        return [];
      }
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectLabel: {
      type: String,
      default: "Press enter to select"
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectGroupLabel: {
      type: String,
      default: "Press enter to select group"
    },
    /**
       * String to show next to selected option
       * @default 'Selected'
       * @type {String}
       */
    selectedLabel: {
      type: String,
      default: "Selected"
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectLabel: {
      type: String,
      default: "Press enter to remove"
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectGroupLabel: {
      type: String,
      default: "Press enter to deselect group"
    },
    /**
       * Decide whether to show pointer labels
       * @default true
       * @type {Boolean}
       */
    showLabels: {
      type: Boolean,
      default: !0
    },
    /**
       * Limit the display of selected options. The rest will be hidden within the limitText string.
       * @default 99999
       * @type {Integer}
       */
    limit: {
      type: Number,
      default: 99999
    },
    /**
       * Sets maxHeight style value of the dropdown
       * @default 300
       * @type {Integer}
       */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
       * Function that process the message shown when selected
       * elements pass the defined limit.
       * @default 'and * more'
       * @param {Int} count Number of elements more than limit
       * @type {Function}
       */
    limitText: {
      type: Function,
      default: (e) => `and ${e} more`
    },
    /**
       * Set true to trigger the loading spinner.
       * @default False
       * @type {Boolean}
       */
    loading: {
      type: Boolean,
      default: !1
    },
    /**
       * Disables the multiselect if true.
       * @default false
       * @type {Boolean}
       */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Enables search input's spellcheck if true.
     * @default false
     * @type {Boolean}
     */
    spellcheck: {
      type: Boolean,
      default: !1
    },
    /**
       * Fixed opening direction
       * @default ''
       * @type {String}
       */
    openDirection: {
      type: String,
      default: ""
    },
    /**
       * Shows slot with message about empty options
       * @default true
       * @type {Boolean}
       */
    showNoOptions: {
      type: Boolean,
      default: !0
    },
    showNoResults: {
      type: Boolean,
      default: !0
    },
    tabindex: {
      type: Number,
      default: 0
    },
    /**
     * Adds Required attribute to the input element when there is no value selected
     * @default false
     * @type {Boolean}
     */
    required: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    hasOptionGroup() {
      return this.groupValues && this.groupLabel && this.groupSelect;
    },
    isSingleLabelVisible() {
      return (this.singleValue || this.singleValue === 0) && (!this.isOpen || !this.searchable) && !this.visibleValues.length;
    },
    isPlaceholderVisible() {
      return !this.internalValue.length && (!this.searchable || !this.isOpen);
    },
    visibleValues() {
      return this.multiple ? this.internalValue.slice(0, this.limit) : [];
    },
    singleValue() {
      return this.internalValue[0];
    },
    deselectLabelText() {
      return this.showLabels ? this.deselectLabel : "";
    },
    deselectGroupLabelText() {
      return this.showLabels ? this.deselectGroupLabel : "";
    },
    selectLabelText() {
      return this.showLabels ? this.selectLabel : "";
    },
    selectGroupLabelText() {
      return this.showLabels ? this.selectGroupLabel : "";
    },
    selectedLabelText() {
      return this.showLabels ? this.selectedLabel : "";
    },
    inputStyle() {
      return this.searchable || this.multiple && this.modelValue && this.modelValue.length ? this.isOpen ? { width: "100%" } : { width: "0", position: "absolute", padding: "0" } : "";
    },
    contentStyle() {
      return this.options.length ? { display: "inline-block" } : { display: "block" };
    },
    isAbove() {
      return this.openDirection === "above" || this.openDirection === "top" ? !0 : this.openDirection === "below" || this.openDirection === "bottom" ? !1 : this.preferredOpenDirection === "above";
    },
    showSearchInput() {
      return this.searchable && (this.hasSingleSelectedSlot && (this.visibleSingleValue || this.visibleSingleValue === 0) ? this.isOpen : !0);
    },
    isRequired() {
      return this.required === !1 ? !1 : this.internalValue.length <= 0;
    }
  }
};
const Ip = ["tabindex", "aria-expanded", "aria-owns", "aria-activedescendant"], jp = {
  ref: "tags",
  class: "multiselect__tags"
}, Lp = { class: "multiselect__tags-wrap" }, Rp = ["textContent"], Bp = ["onKeypress", "onMousedown"], zp = ["textContent"], Hp = { class: "multiselect__spinner" }, Up = ["name", "id", "spellcheck", "placeholder", "required", "value", "disabled", "tabindex", "aria-label", "aria-controls"], qp = ["id", "aria-multiselectable"], Yp = { key: 0 }, Xp = { class: "multiselect__option" }, Wp = ["aria-selected", "id", "role"], Gp = ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"], Kp = ["data-select", "data-deselect", "onMouseenter", "onMousedown"], Zp = { class: "multiselect__option" }, Jp = { class: "multiselect__option" };
function Qp(e, t, n, r, i, s) {
  return F(), se("div", {
    tabindex: e.searchable ? -1 : n.tabindex,
    class: De([{ "multiselect--active": e.isOpen, "multiselect--disabled": n.disabled, "multiselect--above": s.isAbove, "multiselect--has-options-group": s.hasOptionGroup }, "multiselect"]),
    onFocus: t[14] || (t[14] = (o) => e.activate()),
    onBlur: t[15] || (t[15] = (o) => e.searchable ? !1 : e.deactivate()),
    onKeydown: [
      t[16] || (t[16] = wt(We((o) => e.pointerForward(), ["self", "prevent"]), ["down"])),
      t[17] || (t[17] = wt(We((o) => e.pointerBackward(), ["self", "prevent"]), ["up"]))
    ],
    onKeypress: t[18] || (t[18] = wt(We((o) => e.addPointerElement(o), ["stop", "self"]), ["enter", "tab"])),
    onKeyup: t[19] || (t[19] = wt((o) => e.deactivate(), ["esc"])),
    role: "combobox",
    "aria-expanded": e.isOpen,
    "aria-owns": "listbox-" + e.id,
    "aria-activedescendant": e.isOpen && e.pointer !== null ? e.id + "-" + e.pointer : null
  }, [
    ce(e.$slots, "caret", { toggle: e.toggle }, () => [
      ie(
        "div",
        {
          onMousedown: t[0] || (t[0] = We((o) => e.toggle(), ["prevent", "stop"])),
          class: "multiselect__select"
        },
        null,
        32
        /* NEED_HYDRATION */
      )
    ]),
    ce(e.$slots, "clear", { search: e.search }),
    ie(
      "div",
      jp,
      [
        ce(e.$slots, "selection", {
          search: e.search,
          remove: e.removeElement,
          values: s.visibleValues,
          isOpen: e.isOpen
        }, () => [
          vt(ie(
            "div",
            Lp,
            [
              (F(!0), se(
                Et,
                null,
                pn(s.visibleValues, (o, a) => ce(e.$slots, "tag", {
                  option: o,
                  search: e.search,
                  remove: e.removeElement
                }, () => [
                  (F(), se(
                    "span",
                    {
                      class: "multiselect__tag",
                      key: a,
                      onMousedown: t[1] || (t[1] = We(() => {
                      }, ["prevent"]))
                    },
                    [
                      ie("span", {
                        textContent: Te(e.getOptionLabel(o))
                      }, null, 8, Rp),
                      ie("i", {
                        tabindex: "1",
                        onKeypress: wt(We((l) => e.removeElement(o), ["prevent"]), ["enter"]),
                        onMousedown: We((l) => e.removeElement(o), ["prevent"]),
                        class: "multiselect__tag-icon"
                      }, null, 40, Bp)
                    ],
                    32
                    /* NEED_HYDRATION */
                  ))
                ])),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ],
            512
            /* NEED_PATCH */
          ), [
            [Ft, s.visibleValues.length > 0]
          ]),
          e.internalValue && e.internalValue.length > n.limit ? ce(e.$slots, "limit", { key: 0 }, () => [
            ie("strong", {
              class: "multiselect__strong",
              textContent: Te(n.limitText(e.internalValue.length - n.limit))
            }, null, 8, zp)
          ]) : pe("v-if", !0)
        ]),
        me(ti, { name: "multiselect__loading" }, {
          default: de(() => [
            ce(e.$slots, "loading", {}, () => [
              vt(ie(
                "div",
                Hp,
                null,
                512
                /* NEED_PATCH */
              ), [
                [Ft, n.loading]
              ])
            ])
          ]),
          _: 3
          /* FORWARDED */
        }),
        e.searchable ? (F(), se("input", {
          key: 0,
          ref: "search",
          name: n.name,
          id: e.id,
          type: "text",
          autocomplete: "off",
          spellcheck: n.spellcheck,
          placeholder: e.placeholder,
          required: s.isRequired,
          style: Sn(s.inputStyle),
          value: e.search,
          disabled: n.disabled,
          tabindex: n.tabindex,
          "aria-label": n.name + "-searchbox",
          onInput: t[2] || (t[2] = (o) => e.updateSearch(o.target.value)),
          onFocus: t[3] || (t[3] = We((o) => e.activate(), ["prevent"])),
          onBlur: t[4] || (t[4] = We((o) => e.deactivate(), ["prevent"])),
          onKeyup: t[5] || (t[5] = wt((o) => e.deactivate(), ["esc"])),
          onKeydown: [
            t[6] || (t[6] = wt(We((o) => e.pointerForward(), ["prevent"]), ["down"])),
            t[7] || (t[7] = wt(We((o) => e.pointerBackward(), ["prevent"]), ["up"])),
            t[9] || (t[9] = wt(We((o) => e.removeLastElement(), ["stop"]), ["delete"]))
          ],
          onKeypress: t[8] || (t[8] = wt(We((o) => e.addPointerElement(o), ["prevent", "stop", "self"]), ["enter"])),
          class: "multiselect__input",
          "aria-controls": "listbox-" + e.id
        }, null, 44, Up)) : pe("v-if", !0),
        s.isSingleLabelVisible ? (F(), se(
          "span",
          {
            key: 1,
            class: "multiselect__single",
            onMousedown: t[10] || (t[10] = We((...o) => e.toggle && e.toggle(...o), ["prevent"]))
          },
          [
            ce(e.$slots, "singleLabel", { option: s.singleValue }, () => [
              je(
                Te(e.currentOptionLabel),
                1
                /* TEXT */
              )
            ])
          ],
          32
          /* NEED_HYDRATION */
        )) : pe("v-if", !0),
        s.isPlaceholderVisible ? (F(), se(
          "span",
          {
            key: 2,
            class: "multiselect__placeholder",
            onMousedown: t[11] || (t[11] = We((...o) => e.toggle && e.toggle(...o), ["prevent"]))
          },
          [
            ce(e.$slots, "placeholder", {}, () => [
              je(
                Te(e.placeholder),
                1
                /* TEXT */
              )
            ])
          ],
          32
          /* NEED_HYDRATION */
        )) : pe("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ),
    me(ti, {
      name: "multiselect",
      persisted: ""
    }, {
      default: de(() => [
        vt(ie(
          "div",
          {
            class: "multiselect__content-wrapper",
            onFocus: t[12] || (t[12] = (...o) => e.activate && e.activate(...o)),
            tabindex: "-1",
            onMousedown: t[13] || (t[13] = We(() => {
            }, ["prevent"])),
            style: Sn({ maxHeight: e.optimizedHeight + "px" }),
            ref: "list"
          },
          [
            ie("ul", {
              class: "multiselect__content",
              style: Sn(s.contentStyle),
              role: "listbox",
              id: "listbox-" + e.id,
              "aria-multiselectable": e.multiple
            }, [
              ce(e.$slots, "beforeList"),
              e.multiple && e.max === e.internalValue.length ? (F(), se("li", Yp, [
                ie("span", Xp, [
                  ce(e.$slots, "maxElements", {}, () => [
                    je(
                      "Maximum of " + Te(e.max) + " options selected. First remove a selected option to select another.",
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])) : pe("v-if", !0),
              !e.max || e.internalValue.length < e.max ? (F(!0), se(
                Et,
                { key: 1 },
                pn(e.filteredOptions, (o, a) => (F(), se("li", {
                  class: "multiselect__element",
                  key: a,
                  "aria-selected": e.isSelected(o),
                  id: e.id + "-" + a,
                  role: o && (o.$isLabel || o.$isDisabled) ? null : "option"
                }, [
                  o && (o.$isLabel || o.$isDisabled) ? pe("v-if", !0) : (F(), se("span", {
                    key: 0,
                    class: De([e.optionHighlight(a, o), "multiselect__option"]),
                    onClick: We((l) => e.select(o), ["stop"]),
                    onMouseenter: We((l) => e.pointerSet(a), ["self"]),
                    "data-select": o && o.isTag ? e.tagPlaceholder : s.selectLabelText,
                    "data-selected": s.selectedLabelText,
                    "data-deselect": s.deselectLabelText
                  }, [
                    ce(e.$slots, "option", {
                      option: o,
                      search: e.search,
                      index: a
                    }, () => [
                      ie(
                        "span",
                        null,
                        Te(e.getOptionLabel(o)),
                        1
                        /* TEXT */
                      )
                    ])
                  ], 42, Gp)),
                  o && (o.$isLabel || o.$isDisabled) ? (F(), se("span", {
                    key: 1,
                    "data-select": e.groupSelect && s.selectGroupLabelText,
                    "data-deselect": e.groupSelect && s.deselectGroupLabelText,
                    class: De([e.groupHighlight(a, o), "multiselect__option"]),
                    onMouseenter: We((l) => e.groupSelect && e.pointerSet(a), ["self"]),
                    onMousedown: We((l) => e.selectGroup(o), ["prevent"])
                  }, [
                    ce(e.$slots, "option", {
                      option: o,
                      search: e.search,
                      index: a
                    }, () => [
                      ie(
                        "span",
                        null,
                        Te(e.getOptionLabel(o)),
                        1
                        /* TEXT */
                      )
                    ])
                  ], 42, Kp)) : pe("v-if", !0)
                ], 8, Wp))),
                128
                /* KEYED_FRAGMENT */
              )) : pe("v-if", !0),
              vt(ie(
                "li",
                null,
                [
                  ie("span", Zp, [
                    ce(e.$slots, "noResult", { search: e.search }, () => [
                      t[20] || (t[20] = je("No elements found. Consider changing the search query."))
                    ])
                  ])
                ],
                512
                /* NEED_PATCH */
              ), [
                [Ft, n.showNoResults && e.filteredOptions.length === 0 && e.search && !n.loading]
              ]),
              vt(ie(
                "li",
                null,
                [
                  ie("span", Jp, [
                    ce(e.$slots, "noOptions", {}, () => [
                      t[21] || (t[21] = je("List is empty."))
                    ])
                  ])
                ],
                512
                /* NEED_PATCH */
              ), [
                [Ft, n.showNoOptions && (e.options.length === 0 || s.hasOptionGroup === !0 && e.filteredOptions.length === 0) && !e.search && !n.loading]
              ]),
              ce(e.$slots, "afterList")
            ], 12, qp)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        ), [
          [Ft, e.isOpen]
        ])
      ]),
      _: 3
      /* FORWARDED */
    })
  ], 42, Ip);
}
Tl.render = Qp;
function eh(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let i = 0; i < r.length; i++) n[r[i]] = !0;
  return (i) => !!n[i];
}
const ys = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV === "production" || Object.freeze([]);
const Pl = () => {
}, th = /^on[^a-z]/, nh = (e) => th.test(e), At = Object.assign, rh = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ih = Object.prototype.hasOwnProperty, fi = (e, t) => ih.call(e, t), Re = Array.isArray, zn = (e) => _i(e) === "[object Map]", sh = (e) => _i(e) === "[object Set]", et = (e) => typeof e == "function", Lt = (e) => typeof e == "string", ki = (e) => typeof e == "symbol", ht = (e) => e !== null && typeof e == "object", oh = (e) => (ht(e) || et(e)) && et(e.then) && et(e.catch), ah = Object.prototype.toString, _i = (e) => ah.call(e), Nl = (e) => _i(e).slice(8, -1), lh = (e) => _i(e) === "[object Object]", qs = (e) => Lt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, uh = /* @__PURE__ */ ((e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
})((e) => e.charAt(0).toUpperCase() + e.slice(1)), Un = (e, t) => !Object.is(e, t), ch = (e, t, n) => {
  Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
};
let la;
const bs = () => la || (la = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ys(e) {
  if (Re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = Lt(r) ? hh(r) : Ys(r);
      if (i) for (const s in i) t[s] = i[s];
    }
    return t;
  }
  if (Lt(e) || ht(e)) return e;
}
const dh = /;(?![^(]*\))/g, fh = /:([^]+)/, ph = /\/\*[^]*?\*\//g;
function hh(e) {
  const t = {};
  return e.replace(ph, "").split(dh).forEach((n) => {
    if (n) {
      const r = n.split(fh);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Xs(e) {
  let t = "";
  if (Lt(e)) t = e;
  else if (Re(e)) for (let n = 0; n < e.length; n++) {
    const r = Xs(e[n]);
    r && (t += r + " ");
  }
  else if (ht(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function ua(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Dl;
const ws = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Fl = (e) => (e.w & on) > 0, Ml = (e) => (e.n & on) > 0, xs = /* @__PURE__ */ new WeakMap();
let nr = 0, on = 1;
const Ss = 30;
let ut;
const _n = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), $s = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class mh {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, function(i, s = Dl) {
      s && s.active && s.effects.push(i);
    }(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let t = ut, n = On;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return this.parent = ut, ut = this, On = !0, on = 1 << ++nr, nr <= Ss ? (({ deps: r }) => {
        if (r.length) for (let i = 0; i < r.length; i++) r[i].w |= on;
      })(this) : ca(this), this.fn();
    } finally {
      nr <= Ss && ((r) => {
        const { deps: i } = r;
        if (i.length) {
          let s = 0;
          for (let o = 0; o < i.length; o++) {
            const a = i[o];
            Fl(a) && !Ml(a) ? a.delete(r) : i[s++] = a, a.w &= ~on, a.n &= ~on;
          }
          i.length = s;
        }
      })(this), on = 1 << --nr, ut = this.parent, On = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ut === this ? this.deferStop = !0 : this.active && (ca(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ca(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let On = !0;
const Il = [];
function jl() {
  Il.push(On), On = !1;
}
function Ll() {
  const e = Il.pop();
  On = e === void 0 || e;
}
function $t(e, t, n) {
  if (On && ut) {
    let r = xs.get(e);
    r || xs.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || r.set(n, i = ws()), function(s, o) {
      let a = !1;
      nr <= Ss ? Ml(s) || (s.n |= on, a = !Fl(s)) : a = !s.has(ut), a && (s.add(ut), ut.deps.push(s), process.env.NODE_ENV !== "production" && ut.onTrack && ut.onTrack(At({ effect: ut }, o)));
    }(i, process.env.NODE_ENV !== "production" ? { effect: ut, target: e, type: t, key: n } : void 0);
  }
}
function dn(e, t, n, r, i, s) {
  const o = xs.get(e);
  if (!o) return;
  let a = [];
  if (t === "clear") a = [...o.values()];
  else if (n === "length" && Re(e)) {
    const u = Number(r);
    o.forEach((f, c) => {
      (c === "length" || !ki(c) && c >= u) && a.push(f);
    });
  } else switch (n !== void 0 && a.push(o.get(n)), t) {
    case "add":
      Re(e) ? qs(n) && a.push(o.get("length")) : (a.push(o.get(_n)), zn(e) && a.push(o.get($s)));
      break;
    case "delete":
      Re(e) || (a.push(o.get(_n)), zn(e) && a.push(o.get($s)));
      break;
    case "set":
      zn(e) && a.push(o.get(_n));
  }
  const l = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: r, oldValue: i, oldTarget: s } : void 0;
  if (a.length === 1) a[0] && (process.env.NODE_ENV !== "production" ? Mr(a[0], l) : Mr(a[0]));
  else {
    const u = [];
    for (const f of a) f && u.push(...f);
    process.env.NODE_ENV !== "production" ? Mr(ws(u), l) : Mr(ws(u));
  }
}
function Mr(e, t) {
  const n = Re(e) ? e : [...e];
  for (const r of n) r.computed && da(r, t);
  for (const r of n) r.computed || da(r, t);
}
function da(e, t) {
  (e !== ut || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(At({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const vh = eh("__proto__,__v_isRef,__isVue"), Rl = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ki)), fa = gh();
function gh() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = Ce(this);
      for (let s = 0, o = this.length; s < o; s++) $t(r, "get", s + "");
      const i = r[t](...n);
      return i === -1 || i === !1 ? r[t](...n.map(Ce)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      jl();
      const r = Ce(this)[t].apply(this, n);
      return Ll(), r;
    };
  }), e;
}
function yh(e) {
  const t = Ce(this);
  return $t(t, "has", e), t.hasOwnProperty(e);
}
class Bl {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, r) {
    const i = this._isReadonly, s = this._shallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return s;
    if (n === "__v_raw" && r === (i ? s ? Yl : ql : s ? Th : Ul).get(t)) return t;
    const o = Re(t);
    if (!i) {
      if (o && fi(fa, n)) return Reflect.get(fa, n, r);
      if (n === "hasOwnProperty") return yh;
    }
    const a = Reflect.get(t, n, r);
    return (ki(n) ? Rl.has(n) : vh(n)) ? a : (i || $t(t, "get", n), s ? a : pt(a) ? o && qs(n) ? a : a.value : ht(a) ? i ? Wl(a) : Xl(a) : a);
  }
}
class bh extends Bl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let s = t[n];
    if (An(s) && pt(s) && !pt(r)) return !1;
    if (!this._shallow && (ks(r) || An(r) || (s = Ce(s), r = Ce(r)), !Re(t) && pt(s) && !pt(r))) return s.value = r, !0;
    const o = Re(t) && qs(n) ? Number(n) < t.length : fi(t, n), a = Reflect.set(t, n, r, i);
    return t === Ce(i) && (o ? Un(r, s) && dn(t, "set", n, r, s) : dn(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = fi(t, n), i = t[n], s = Reflect.deleteProperty(t, n);
    return s && r && dn(t, "delete", n, void 0, i), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return ki(n) && Rl.has(n) || $t(t, "has", n), r;
  }
  ownKeys(t) {
    return $t(t, "iterate", Re(t) ? "length" : _n), Reflect.ownKeys(t);
  }
}
class zl extends Bl {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && ua(`Set operation on key "${String(n)}" failed: target is readonly.`, t), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && ua(`Delete operation on key "${String(n)}" failed: target is readonly.`, t), !0;
  }
}
const wh = new bh(), xh = new zl(), Sh = new zl(!0), Ws = (e) => e, Oi = (e) => Reflect.getPrototypeOf(e);
function Ir(e, t, n = !1, r = !1) {
  const i = Ce(e = e.__v_raw), s = Ce(t);
  n || (Un(t, s) && $t(i, "get", t), $t(i, "get", s));
  const { has: o } = Oi(i), a = r ? Ws : n ? Js : Zs;
  return o.call(i, t) ? a(e.get(t)) : o.call(i, s) ? a(e.get(s)) : void (e !== i && e.get(t));
}
function jr(e, t = !1) {
  const n = this.__v_raw, r = Ce(n), i = Ce(e);
  return t || (Un(e, i) && $t(r, "has", e), $t(r, "has", i)), e === i ? n.has(e) : n.has(e) || n.has(i);
}
function Lr(e, t = !1) {
  return e = e.__v_raw, !t && $t(Ce(e), "iterate", _n), Reflect.get(e, "size", e);
}
function pa(e) {
  e = Ce(e);
  const t = Ce(this);
  return Oi(t).has.call(t, e) || (t.add(e), dn(t, "add", e, e)), this;
}
function ha(e, t) {
  t = Ce(t);
  const n = Ce(this), { has: r, get: i } = Oi(n);
  let s = r.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Hl(n, r, e) : (e = Ce(e), s = r.call(n, e));
  const o = i.call(n, e);
  return n.set(e, t), s ? Un(t, o) && dn(n, "set", e, t, o) : dn(n, "add", e, t), this;
}
function ma(e) {
  const t = Ce(this), { has: n, get: r } = Oi(t);
  let i = n.call(t, e);
  i ? process.env.NODE_ENV !== "production" && Hl(t, n, e) : (e = Ce(e), i = n.call(t, e));
  const s = r ? r.call(t, e) : void 0, o = t.delete(e);
  return i && dn(t, "delete", e, void 0, s), o;
}
function va() {
  const e = Ce(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? zn(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && dn(e, "clear", void 0, void 0, n), r;
}
function Rr(e, t) {
  return function(n, r) {
    const i = this, s = i.__v_raw, o = Ce(s), a = t ? Ws : e ? Js : Zs;
    return !e && $t(o, "iterate", _n), s.forEach((l, u) => n.call(r, a(l), a(u), i));
  };
}
function Br(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, s = Ce(i), o = zn(s), a = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), f = n ? Ws : t ? Js : Zs;
    return !t && $t(s, "iterate", l ? $s : _n), { next() {
      const { value: c, done: h } = u.next();
      return h ? { value: c, done: h } : { value: a ? [f(c[0]), f(c[1])] : f(c), done: h };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function tn(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${uh(e)} operation ${n}failed: target is readonly.`, Ce(this));
    }
    return e !== "delete" && (e === "clear" ? void 0 : this);
  };
}
function $h() {
  const e = { get(i) {
    return Ir(this, i);
  }, get size() {
    return Lr(this);
  }, has: jr, add: pa, set: ha, delete: ma, clear: va, forEach: Rr(!1, !1) }, t = { get(i) {
    return Ir(this, i, !1, !0);
  }, get size() {
    return Lr(this);
  }, has: jr, add: pa, set: ha, delete: ma, clear: va, forEach: Rr(!1, !0) }, n = { get(i) {
    return Ir(this, i, !0);
  }, get size() {
    return Lr(this, !0);
  }, has(i) {
    return jr.call(this, i, !0);
  }, add: tn("add"), set: tn("set"), delete: tn("delete"), clear: tn("clear"), forEach: Rr(!0, !1) }, r = { get(i) {
    return Ir(this, i, !0, !0);
  }, get size() {
    return Lr(this, !0);
  }, has(i) {
    return jr.call(this, i, !0);
  }, add: tn("add"), set: tn("set"), delete: tn("delete"), clear: tn("clear"), forEach: Rr(!0, !0) };
  return ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    e[i] = Br(i, !1, !1), n[i] = Br(i, !0, !1), t[i] = Br(i, !1, !0), r[i] = Br(i, !0, !0);
  }), [e, n, t, r];
}
const [kh, _h, Oh, Eh] = $h();
function Gs(e, t) {
  const n = t ? e ? Eh : Oh : e ? _h : kh;
  return (r, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(fi(n, i) && i in r ? n : r, i, s);
}
const Vh = { get: Gs(!1, !1) }, Ah = { get: Gs(!0, !1) }, Ch = { get: Gs(!0, !0) };
function Hl(e, t, n) {
  const r = Ce(n);
  if (r !== n && t.call(e, r)) {
    const i = Nl(e);
    console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const Ul = /* @__PURE__ */ new WeakMap(), Th = /* @__PURE__ */ new WeakMap(), ql = /* @__PURE__ */ new WeakMap(), Yl = /* @__PURE__ */ new WeakMap();
function Xl(e) {
  return An(e) ? e : Ks(e, !1, wh, Vh, Ul);
}
function Wl(e) {
  return Ks(e, !0, xh, Ah, ql);
}
function zr(e) {
  return Ks(e, !0, Sh, Ch, Yl);
}
function Ks(e, t, n, r, i) {
  if (!ht(e)) return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
  const s = i.get(e);
  if (s) return s;
  const o = (a = e).__v_skip || !Object.isExtensible(a) ? 0 : function(u) {
    switch (u) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }(Nl(a));
  var a;
  if (o === 0) return e;
  const l = new Proxy(e, o === 2 ? r : n);
  return i.set(e, l), l;
}
function En(e) {
  return An(e) ? En(e.__v_raw) : !(!e || !e.__v_isReactive);
}
function An(e) {
  return !(!e || !e.__v_isReadonly);
}
function ks(e) {
  return !(!e || !e.__v_isShallow);
}
function Ki(e) {
  return En(e) || An(e);
}
function Ce(e) {
  const t = e && e.__v_raw;
  return t ? Ce(t) : e;
}
const Zs = (e) => ht(e) ? Xl(e) : e, Js = (e) => ht(e) ? Wl(e) : e;
function pt(e) {
  return !(!e || e.__v_isRef !== !0);
}
const Ph = { get: (e, t, n) => {
  return pt(r = Reflect.get(e, t, n)) ? r.value : r;
  var r;
}, set: (e, t, n, r) => {
  const i = e[t];
  return pt(i) && !pt(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
} }, wn = [];
function Rt(e, ...t) {
  if (process.env.NODE_ENV === "production") return;
  jl();
  const n = wn.length ? wn[wn.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = function() {
    let s = wn[wn.length - 1];
    if (!s) return [];
    const o = [];
    for (; s; ) {
      const a = o[0];
      a && a.vnode === s ? a.recurseCount++ : o.push({ vnode: s, recurseCount: 0 });
      const l = s.component && s.component.parent;
      s = l && l.vnode;
    }
    return o;
  }();
  if (r) Vn(r, n, 11, [e + t.join(""), n && n.proxy, i.map(({ vnode: s }) => `at <${Va(n, s.type)}>`).join(`
`), i]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    i.length && s.push(`
`, ...function(o) {
      const a = [];
      return o.forEach((l, u) => {
        a.push(...u === 0 ? [] : [`
`], ...function({ vnode: f, recurseCount: c }) {
          const h = c > 0 ? `... (${c} recursive calls)` : "", p = !!f.component && f.component.parent == null, m = ` at <${Va(f.component, f.type, p)}`, y = ">" + h;
          return f.props ? [m, ...Nh(f.props), y] : [m + y];
        }(l));
      }), a;
    }(i)), console.warn(...s);
  }
  Ll();
}
function Nh(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Gl(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Gl(e, t, n) {
  return Lt(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : pt(t) ? (t = Gl(e, Ce(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : et(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Ce(t), n ? t : [`${e}=`, t]);
}
const ga = { sp: "serverPrefetch hook", bc: "beforeCreate hook", c: "created hook", bm: "beforeMount hook", m: "mounted hook", bu: "beforeUpdate hook", u: "updated", bum: "beforeUnmount hook", um: "unmounted hook", a: "activated hook", da: "deactivated hook", ec: "errorCaptured hook", rtc: "renderTracked hook", rtg: "renderTriggered hook", 0: "setup function", 1: "render function", 2: "watcher getter", 3: "watcher callback", 4: "watcher cleanup function", 5: "native event handler", 6: "component event handler", 7: "vnode hook", 8: "directive hook", 9: "transition hook", 10: "app errorHandler", 11: "app warnHandler", 12: "ref function", 13: "async component loader", 14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core" };
function Vn(e, t, n, r) {
  let i;
  try {
    i = r ? e(...r) : e();
  } catch (s) {
    Kl(s, t, n);
  }
  return i;
}
function _s(e, t, n, r) {
  if (et(e)) {
    const s = Vn(e, t, n, r);
    return s && oh(s) && s.catch((o) => {
      Kl(o, t, n);
    }), s;
  }
  const i = [];
  for (let s = 0; s < e.length; s++) i.push(_s(e[s], t, n, r));
  return i;
}
function Kl(e, t, n, r = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const o = t.proxy, a = process.env.NODE_ENV !== "production" ? ga[n] : n;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let f = 0; f < u.length; f++) if (u[f](e, o, a) === !1) return;
      }
      s = s.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) return void Vn(l, null, 10, [e, o, a]);
  }
  (function(s, o, a, l = !0) {
    if (process.env.NODE_ENV !== "production") {
      const f = ga[o];
      if (a && (u = a, wn.push(u)), Rt("Unhandled error" + (f ? ` during execution of ${f}` : "")), a && wn.pop(), l) throw s;
      console.error(s);
    } else console.error(s);
    var u;
  })(e, n, i, r);
}
let pi = !1, Os = !1;
const kt = [];
let an = 0;
const In = [];
let Nt = null, sn = 0;
const Zl = Promise.resolve();
let Qs = null;
const Dh = 100;
function Jl(e) {
  const t = Qs || Zl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function eo(e) {
  kt.length && kt.includes(e, pi && e.allowRecurse ? an + 1 : an) || (e.id == null ? kt.push(e) : kt.splice(function(t) {
    let n = an + 1, r = kt.length;
    for (; n < r; ) {
      const i = n + r >>> 1, s = kt[i], o = gr(s);
      o < t || o === t && s.pre ? n = i + 1 : r = i;
    }
    return n;
  }(e.id), 0, e), Ql());
}
function Ql() {
  pi || Os || (Os = !0, Qs = Zl.then(tu));
}
function eu(e) {
  Re(e) ? In.push(...e) : Nt && Nt.includes(e, e.allowRecurse ? sn + 1 : sn) || In.push(e), Ql();
}
const gr = (e) => e.id == null ? 1 / 0 : e.id, Fh = (e, t) => {
  const n = gr(e) - gr(t);
  if (n === 0) {
    if (e.pre && !t.pre) return -1;
    if (t.pre && !e.pre) return 1;
  }
  return n;
};
function tu(e) {
  Os = !1, pi = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), kt.sort(Fh);
  const t = process.env.NODE_ENV !== "production" ? (n) => ya(e, n) : Pl;
  try {
    for (an = 0; an < kt.length; an++) {
      const n = kt[an];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n)) continue;
        Vn(n, null, 14);
      }
    }
  } finally {
    an = 0, kt.length = 0, function(n) {
      if (In.length) {
        const r = [...new Set(In)];
        if (In.length = 0, Nt) return void Nt.push(...r);
        for (Nt = r, process.env.NODE_ENV !== "production" && (n = n || /* @__PURE__ */ new Map()), Nt.sort((i, s) => gr(i) - gr(s)), sn = 0; sn < Nt.length; sn++) process.env.NODE_ENV !== "production" && ya(n, Nt[sn]) || Nt[sn]();
        Nt = null, sn = 0;
      }
    }(e), pi = !1, Qs = null, (kt.length || In.length) && tu(e);
  }
}
function ya(e, t) {
  if (e.has(t)) {
    const n = e.get(t);
    if (n > Dh) {
      const r = t.ownerInstance, i = r && ou(r.type);
      return Rt(`Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    }
    e.set(t, n + 1);
  } else e.set(t, 1);
}
const Kn = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (bs().__VUE_HMR_RUNTIME__ = { createRecord: Zi(function(e, t) {
  return Hr.has(e) ? !1 : (Hr.set(e, { initialDef: Zn(t), instances: /* @__PURE__ */ new Set() }), !0);
}), rerender: Zi(function(e, t) {
  const n = Hr.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Zn(r.type).render = t), r.renderCache = [], r.update();
  }));
}), reload: Zi(function(e, t) {
  const n = Hr.get(e);
  if (!n) return;
  t = Zn(t), ba(n.initialDef, t);
  const r = [...n.instances];
  for (const i of r) {
    const s = Zn(i.type);
    Kn.has(s) || (s !== n.initialDef && ba(s, t), Kn.add(s)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (Kn.add(s), i.ceReload(t.styles), Kn.delete(s)) : i.parent ? eo(i.parent.update) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  eu(() => {
    for (const i of r) Kn.delete(Zn(i.type));
  });
}) });
const Hr = /* @__PURE__ */ new Map();
function Zn(e) {
  return au(e) ? e.__vccOpts : e;
}
function ba(e, t) {
  At(e, t);
  for (const n in e) n === "__file" || n in t || delete e[n];
}
function Zi(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let cr = null, Mh = null;
const Ih = Symbol.for("v-ndc"), Ur = {};
function jh(e, t, { immediate: n, deep: r, flush: i, onTrack: s, onTrigger: o } = ys) {
  var a;
  process.env.NODE_ENV === "production" || t || (n !== void 0 && Rt('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), r !== void 0 && Rt('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (V) => {
    Rt("Invalid watch source: ", V, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u = Dl === ((a = qn) == null ? void 0 : a.scope) ? qn : null;
  let f, c, h = !1, p = !1;
  if (pt(e) ? (f = () => e.value, h = ks(e)) : En(e) ? (f = () => e, r = !0) : Re(e) ? (p = !0, h = e.some((V) => En(V) || ks(V)), f = () => e.map((V) => pt(V) ? V.value : En(V) ? jn(V) : et(V) ? Vn(V, u, 2) : void (process.env.NODE_ENV !== "production" && l(V)))) : et(e) ? f = t ? () => Vn(e, u, 2) : () => {
    if (!u || !u.isUnmounted) return c && c(), _s(e, u, 3, [m]);
  } : (f = Pl, process.env.NODE_ENV !== "production" && l(e)), t && r) {
    const V = f;
    f = () => jn(V());
  }
  let m = (V) => {
    c = _.onStop = () => {
      Vn(V, u, 4), c = _.onStop = void 0;
    };
  }, y = p ? new Array(e.length).fill(Ur) : Ur;
  const v = () => {
    if (_.active) if (t) {
      const V = _.run();
      (r || h || (p ? V.some((X, I) => Un(X, y[I])) : Un(V, y))) && (c && c(), _s(t, u, 3, [V, y === Ur ? void 0 : p && y[0] === Ur ? [] : y, m]), y = V);
    } else _.run();
  };
  let x;
  v.allowRecurse = !!t, i === "sync" ? x = v : i === "post" ? x = () => ka(v, u && u.suspense) : (v.pre = !0, u && (v.id = u.uid), x = () => eo(v));
  const _ = new mh(f, x);
  return process.env.NODE_ENV !== "production" && (_.onTrack = s, _.onTrigger = o), t ? n ? v() : y = _.run() : i === "post" ? ka(_.run.bind(_), u && u.suspense) : _.run(), () => {
    _.stop(), u && u.scope && rh(u.scope.effects, _);
  };
}
function Lh(e, t, n) {
  const r = this.proxy, i = Lt(e) ? e.includes(".") ? function(l, u) {
    const f = u.split(".");
    return () => {
      let c = l;
      for (let h = 0; h < f.length && c; h++) c = c[f[h]];
      return c;
    };
  }(r, e) : () => r[e] : e.bind(r, r);
  let s;
  et(t) ? s = t : (s = t.handler, n = t);
  const o = qn;
  Ea(this);
  const a = jh(i, s.bind(r), n);
  return o ? Ea(o) : qh(), a;
}
function jn(e, t) {
  if (!ht(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set()).has(e)) return e;
  if (t.add(e), pt(e)) jn(e.value, t);
  else if (Re(e)) for (let n = 0; n < e.length; n++) jn(e[n], t);
  else if (sh(e) || zn(e)) e.forEach((n) => {
    jn(n, t);
  });
  else if (lh(e)) for (const n in e) jn(e[n], t);
  return e;
}
const Es = (e) => e ? 4 & e.vnode.shapeFlag ? function(t) {
  if (t.exposed) return t.exposeProxy || (t.exposeProxy = new Proxy((r = t.exposed, ch(r, "__v_skip", !0), En(n = r) ? n : new Proxy(n, Ph)), { get: (i, s) => s in i ? i[s] : s in Ji ? Ji[s](t) : void 0, has: (i, s) => s in i || s in Ji }));
  var n, r;
}(e) || e.proxy : Es(e.parent) : null, Ji = At(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => process.env.NODE_ENV !== "production" ? zr(e.props) : e.props, $attrs: (e) => process.env.NODE_ENV !== "production" ? zr(e.attrs) : e.attrs, $slots: (e) => process.env.NODE_ENV !== "production" ? zr(e.slots) : e.slots, $refs: (e) => process.env.NODE_ENV !== "production" ? zr(e.refs) : e.refs, $parent: (e) => Es(e.parent), $root: (e) => Es(e.root), $emit: (e) => e.emit, $options: (e) => function(t) {
  const n = t.type, { mixins: r, extends: i } = n, { mixins: s, optionsCache: o, config: { optionMergeStrategies: a } } = t.appContext, l = o.get(n);
  let u;
  return l ? u = l : s.length || r || i ? (u = {}, s.length && s.forEach((f) => hi(u, f, a, !0)), hi(u, n, a)) : u = n, ht(n) && o.set(n, u), u;
}(e), $forceUpdate: (e) => e.f || (e.f = () => eo(e.update)), $nextTick: (e) => e.n || (e.n = Jl.bind(e.proxy)), $watch: (e) => Lh.bind(e) });
function wa(e) {
  return Re(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
process.env.NODE_ENV;
function hi(e, t, n, r = !1) {
  const { mixins: i, extends: s } = t;
  s && hi(e, s, n, !0), i && i.forEach((o) => hi(e, o, n, !0));
  for (const o in t) if (r && o === "expose") process.env.NODE_ENV !== "production" && Rt('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
  else {
    const a = Rh[o] || n && n[o];
    e[o] = a ? a(e[o], t[o]) : t[o];
  }
  return e;
}
const Rh = { data: xa, props: $a, emits: $a, methods: Jn, computed: Jn, beforeCreate: rt, created: rt, beforeMount: rt, mounted: rt, beforeUpdate: rt, updated: rt, beforeDestroy: rt, beforeUnmount: rt, destroyed: rt, unmounted: rt, activated: rt, deactivated: rt, errorCaptured: rt, serverPrefetch: rt, components: Jn, directives: Jn, watch: function(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = At(/* @__PURE__ */ Object.create(null), e);
  for (const r in t) n[r] = rt(e[r], t[r]);
  return n;
}, provide: xa, inject: function(e, t) {
  return Jn(Sa(e), Sa(t));
} };
function xa(e, t) {
  return t ? e ? function() {
    return At(et(e) ? e.call(this, this) : e, et(t) ? t.call(this, this) : t);
  } : t : e;
}
function Sa(e) {
  if (Re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function rt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Jn(e, t) {
  return e ? At(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function $a(e, t) {
  return e ? Re(e) && Re(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : At(/* @__PURE__ */ Object.create(null), wa(e), wa(t ?? {})) : t;
}
const ka = function(e, t) {
  t && t.pendingBranch ? Re(e) ? t.effects.push(...e) : t.effects.push(e) : eu(e);
}, nu = Symbol.for("v-fgt"), Bh = Symbol.for("v-txt"), zh = Symbol.for("v-cmt"), ru = "__vInternal", iu = ({ key: e }) => e ?? null, Qr = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? Lt(e) || pt(e) || et(e) ? { i: cr, r: e, k: t, f: !!n } : e : null), Hh = process.env.NODE_ENV !== "production" ? (...e) => _a(...e) : _a;
function _a(e, t = null, n = null, r = 0, i = null, s = !1) {
  if (e && e !== Ih || (process.env.NODE_ENV === "production" || e || Rt(`Invalid vnode type when creating vnode: ${e}.`), e = zh), (o = e) && o.__v_isVNode === !0) {
    const l = mi(e, t, !0);
    return n && Vs(l, n), l.patchFlag |= -2, l;
  }
  var o;
  if (au(e) && (e = e.__vccOpts), t) {
    t = function(f) {
      return f ? Ki(f) || ru in f ? At({}, f) : f : null;
    }(t);
    let { class: l, style: u } = t;
    l && !Lt(l) && (t.class = Xs(l)), ht(u) && (Ki(u) && !Re(u) && (u = At({}, u)), t.style = Ys(u));
  }
  const a = Lt(e) ? 1 : ((l) => l.__isSuspense)(e) ? 128 : ((l) => l.__isTeleport)(e) ? 64 : ht(e) ? 4 : et(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && 4 & a && Ki(e) && Rt("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e = Ce(e)), function(l, u = null, f = null, c = 0, h = null, p = l === nu ? 0 : 1, m = !1, y = !1) {
    const v = { __v_isVNode: !0, __v_skip: !0, type: l, props: u, key: u && iu(u), ref: u && Qr(u), scopeId: Mh, slotScopeIds: null, children: f, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: p, patchFlag: c, dynamicProps: h, dynamicChildren: null, appContext: null, ctx: cr };
    return y ? (Vs(v, f), 128 & p && l.normalize(v)) : f && (v.shapeFlag |= Lt(f) ? 8 : 16), process.env.NODE_ENV !== "production" && v.key != v.key && Rt("VNode created with invalid key (NaN). VNode type:", v.type), v;
  }(e, t, n, r, i, a, s, !0);
}
function mi(e, t, n = !1) {
  const { props: r, ref: i, patchFlag: s, children: o } = e, a = t ? function(...l) {
    const u = {};
    for (let f = 0; f < l.length; f++) {
      const c = l[f];
      for (const h in c) if (h === "class") u.class !== c.class && (u.class = Xs([u.class, c.class]));
      else if (h === "style") u.style = Ys([u.style, c.style]);
      else if (nh(h)) {
        const p = u[h], m = c[h];
        !m || p === m || Re(p) && p.includes(m) || (u[h] = p ? [].concat(p, m) : m);
      } else h !== "" && (u[h] = c[h]);
    }
    return u;
  }(r || {}, t) : r;
  return { __v_isVNode: !0, __v_skip: !0, type: e.type, props: a, key: a && iu(a), ref: t && t.ref ? n && i ? Re(i) ? i.concat(Qr(t)) : [i, Qr(t)] : Qr(t) : i, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: process.env.NODE_ENV !== "production" && s === -1 && Re(o) ? o.map(su) : o, target: e.target, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== nu ? s === -1 ? 16 : 16 | s : s, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: e.transition, component: e.component, suspense: e.suspense, ssContent: e.ssContent && mi(e.ssContent), ssFallback: e.ssFallback && mi(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
}
function su(e) {
  const t = mi(e);
  return Re(e.children) && (t.children = e.children.map(su)), t;
}
function Uh(e = " ", t = 0) {
  return Hh(Bh, null, e, t);
}
function Vs(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (Re(t)) n = 16;
  else if (typeof t == "object") {
    if (65 & r) {
      const i = t.default;
      return void (i && (i._c && (i._d = !1), Vs(e, i()), i._c && (i._d = !0)));
    }
    {
      n = 32;
      const i = t._;
      i || ru in t || (t._ctx = cr);
    }
  } else et(t) ? (t = { default: t, _ctx: cr }, n = 32) : (t = String(t), 64 & r ? (n = 16, t = [Uh(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
let to, Fn, qn = null, Oa = "__VUE_INSTANCE_SETTERS__";
(Fn = bs()[Oa]) || (Fn = bs()[Oa] = []), Fn.push((e) => qn = e), to = (e) => {
  Fn.length > 1 ? Fn.forEach((t) => t(e)) : Fn[0](e);
};
const Ea = (e) => {
  to(e), e.scope.on();
}, qh = () => {
  qn && qn.scope.off(), to(null);
}, Yh = /(?:^|[-_])(\w)/g, Xh = (e) => e.replace(Yh, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ou(e, t = !0) {
  return et(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Va(e, t, n = !1) {
  let r = ou(t);
  if (!r && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (r = i[1]);
  }
  if (!r && e && e.parent) {
    const i = (s) => {
      for (const o in s) if (s[o] === t) return o;
    };
    r = i(e.components || e.parent.type.components) || i(e.appContext.components);
  }
  return r ? Xh(r) : n ? "App" : "Anonymous";
}
function au(e) {
  return et(e) && "__vccOpts" in e;
}
function Qi(e) {
  return !(!e || !e.__v_isShallow);
}
function Aa(e, t, n) {
  if (arguments.length === 2) for (var r, i = 0, s = t.length; i < s; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
  return e.concat(r || Array.prototype.slice.call(t));
}
function lu(e, t) {
  if (e === t) return !0;
  if (typeof e == "object") {
    for (var n in e) if (!lu(e[n], t[n])) return !1;
    return !0;
  }
  return !1;
}
process.env.NODE_ENV !== "production" && function() {
  if (process.env.NODE_ENV === "production" || typeof window > "u") return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, i = { header: (c) => ht(c) ? c.__isVue ? ["div", e, "VueInstance"] : pt(c) ? ["div", {}, ["span", e, f(c)], "<", a(c.value), ">"] : En(c) ? ["div", {}, ["span", e, Qi(c) ? "ShallowReactive" : "Reactive"], "<", a(c), ">" + (An(c) ? " (readonly)" : "")] : An(c) ? ["div", {}, ["span", e, Qi(c) ? "ShallowReadonly" : "Readonly"], "<", a(c), ">"] : null : null, hasBody: (c) => c && c.__isVue, body(c) {
    if (c && c.__isVue) return ["div", {}, ...s(c.$)];
  } };
  function s(c) {
    const h = [];
    c.type.props && c.props && h.push(o("props", Ce(c.props))), c.setupState !== ys && h.push(o("setup", c.setupState)), c.data !== ys && h.push(o("data", Ce(c.data)));
    const p = l(c, "computed");
    p && h.push(o("computed", p));
    const m = l(c, "inject");
    return m && h.push(o("injected", m)), h.push(["div", {}, ["span", { style: r.style + ";opacity:0.66" }, "$ (internal): "], ["object", { object: c }]]), h;
  }
  function o(c, h) {
    return h = At({}, h), Object.keys(h).length ? ["div", { style: "line-height:1.25em;margin-bottom:0.6em" }, ["div", { style: "color:#476582" }, c], ["div", { style: "padding-left:1.25em" }, ...Object.keys(h).map((p) => ["div", {}, ["span", r, p + ": "], a(h[p], !1)])]] : ["span", {}];
  }
  function a(c, h = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", r, c] : ht(c) ? ["object", { object: h ? Ce(c) : c }] : ["span", n, String(c)];
  }
  function l(c, h) {
    const p = c.type;
    if (et(p)) return;
    const m = {};
    for (const y in c.ctx) u(p, y, h) && (m[y] = c.ctx[y]);
    return m;
  }
  function u(c, h, p) {
    const m = c[p];
    return !!(Re(m) && m.includes(h) || ht(m) && h in m) || !(!c.extends || !u(c.extends, h, p)) || !(!c.mixins || !c.mixins.some((y) => u(y, h, p))) || void 0;
  }
  function f(c) {
    return Qi(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}(), typeof SuppressedError == "function" && SuppressedError;
var Wh = function() {
  function e(t, n) {
    this.el = t, this.observer = null, this.frozen = !1, this.createObserver(n);
  }
  return Object.defineProperty(e.prototype, "threshold", { get: function() {
    return this.options.intersection && this.options.intersection.threshold || 0;
  }, enumerable: !1, configurable: !0 }), e.prototype.createObserver = function(t) {
    var n = this;
    if (this.observer && this.destroyObserver(), !this.frozen) {
      var r;
      if (this.options = typeof (r = t) == "function" ? { callback: r } : r, this.callback = function(s, o) {
        n.options.callback(s, o), s && n.options.once && (n.frozen = !0, n.destroyObserver());
      }, this.callback && this.options.throttle) {
        var i = (this.options.throttleOptions || {}).leading;
        this.callback = function(s, o, a) {
          var l, u, f;
          a === void 0 && (a = {});
          var c = function(h) {
            for (var p = [], m = 1; m < arguments.length; m++) p[m - 1] = arguments[m];
            if (f = p, !l || h !== u) {
              var y = a.leading;
              typeof y == "function" && (y = y(h, u)), l && h === u || !y || s.apply(void 0, Aa([h], f, !1)), u = h, clearTimeout(l), l = setTimeout(function() {
                s.apply(void 0, Aa([h], f, !1)), l = 0;
              }, o);
            }
          };
          return c._clear = function() {
            clearTimeout(l), l = null;
          }, c;
        }(this.callback, this.options.throttle, { leading: function(s) {
          return i === "both" || i === "visible" && s || i === "hidden" && !s;
        } });
      }
      this.oldResult = void 0, this.observer = new IntersectionObserver(function(s) {
        var o = s[0];
        if (s.length > 1) {
          var a = s.find(function(u) {
            return u.isIntersecting;
          });
          a && (o = a);
        }
        if (n.callback) {
          var l = o.isIntersecting && o.intersectionRatio >= n.threshold;
          if (l === n.oldResult) return;
          n.oldResult = l, n.callback(l, o);
        }
      }, this.options.intersection), Jl(function() {
        n.observer && n.observer.observe(n.el);
      });
    }
  }, e.prototype.destroyObserver = function() {
    this.observer && (this.observer.disconnect(), this.observer = null), this.callback && this.callback._clear && (this.callback._clear(), this.callback = null);
  }, e;
}(), Gh = { beforeMount: function(e, t) {
  var n = t.value;
  n && (typeof IntersectionObserver > "u" ? console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill") : e._vue_visibilityState = new Wh(e, n));
}, updated: function(e, t) {
  var n = t.value;
  if (!lu(n, t.oldValue)) {
    var r = e._vue_visibilityState;
    n && r && r.createObserver(n);
  }
}, unmounted: function(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
} };
const Kh = { class: "x-select__before-list" }, Zh = { class: "x-select__no-result" }, Jh = {
  directives: {
    observeVisibility: Gh
  }
}, Qh = /* @__PURE__ */ $e({
  ...Jh,
  inheritAttrs: !1,
  __name: "XSelect",
  props: {
    name: {
      type: String,
      required: !0
    },
    modelValue: {
      type: null,
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    },
    size: {
      value: String,
      default: "s",
      validator: (e) => ["xs", "s", "m", "l"].includes(e)
    },
    color: {
      value: String,
      default: "primary",
      validator: (e) => ["primary", "secondary", "tertiary", "dark"].includes(e)
    },
    width: {
      type: [Number, String]
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String
    },
    trackBy: {
      type: String
    },
    limit: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    searchable: Boolean,
    preselectFirst: Boolean,
    clearable: {
      type: Boolean,
      default: !0
    },
    placeholder: {
      type: String
    },
    prependIcon: {
      type: String,
      default: ""
    },
    prependIconProps: {
      type: Object,
      default: () => ({})
    },
    optionPrependIcon: {
      type: Function
    },
    optionAppendIcon: [String, Function],
    optionAppendIconProps: Object,
    tagsColor: {
      type: String
    },
    passed: {
      type: Boolean,
      default: !1
    },
    failed: {
      type: Boolean,
      default: !1
    },
    beforeListBtnAction: {
      type: String,
      default: null
    },
    beforeListBtnIcon: {
      type: String,
      default: null
    },
    beforeListBtnText: {
      type: String,
      default: ""
    },
    beforeListBtnTestId: {
      type: String,
      default: ""
    },
    openDirection: {
      type: String,
      default: null,
      validator: (e) => ["top", "bottom", "above", "below"].includes(e)
    },
    markSelectedOption: {
      type: Boolean,
      default: !0
    },
    groupValues: {
      type: String,
      default: ""
    },
    groupLabel: {
      type: String,
      default: ""
    },
    groupSelect: Boolean,
    flex: Boolean,
    flexWidth: {
      type: String,
      default: "320px"
    },
    rounded: Boolean,
    showNoResults: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["input", "search-change", "open", "close", "update:modelValue", "options-end"],
  setup(e, { emit: t }) {
    Ia((q) => ({
      "6d42b355": e.flexWidth
    }));
    const n = Cn(), r = Ue(null), i = t, s = e, o = Vt({
      search: "",
      isOpen: !1,
      hovered: !1,
      focused: !1
    }), a = "No matches", l = "List is empty", u = s.placeholder || "Not chosen", f = T(() => ({
      ...n,
      onOpen: j,
      onClose: R,
      "on-search-change": K
    })), c = T({
      get() {
        const q = s.trackBy;
        return Array.isArray(s.modelValue) && !s.groupValues ? s.modelValue.map((Q) => s.options.find((he) => typeof he == "object" ? he[q] === Q : he === Q)) : q && !s.groupValues ? s.options.find((Q) => typeof Q == "object" ? Q[q] === s.modelValue : Q === s.modelValue) : q && s.groupValues && !s.multiple ? s.options.map((Q) => Q[s.groupValues]).flat().find(
          (Q) => typeof Q == "object" ? Q[q] === s.modelValue : Q === s.modelValue
        ) : q && s.groupValues && s.multiple ? s.options.map((Q) => Q[s.groupValues]).flat().filter(
          (Q) => typeof Q == "object" ? s.modelValue.includes(Q[q]) : s.modelValue.includes(Q)
        ) : s.modelValue;
      },
      set(q) {
        const Q = s.trackBy;
        if (Array.isArray(q)) {
          const he = q.map((C) => typeof C == "object" ? C[Q] : C);
          return i("update:modelValue", he);
        }
        if (typeof q == "object")
          return i("update:modelValue", q[Q]);
        i("update:modelValue", q);
      }
    }), h = T(() => [
      "x-select",
      `x-select--size-${s.size}`,
      `x-select--${s.color}`,
      {
        "x-select--hovered": o.hovered,
        "x-select--focused": o.focused,
        "x-select--filled": H(m),
        "x-select--success": !o.focused && s.passed,
        "x-select--error": s.failed,
        "x-select--show-clear-icon": _,
        "x-select--mark-selected-option": s.markSelectedOption,
        "x-select--text-center": !s.markSelectedOption && !s.multiple,
        "x-select--flex": s.flex,
        "x-select--rounded": s.rounded
      }
    ]), p = T(() => s.width !== void 0 ? { width: typeof s.width == "number" ? s.width + "px" : s.width } : {}), m = T(() => s.modelValue instanceof Array ? s.modelValue.length > 0 : s.modelValue !== null && s.modelValue !== void 0), y = T(() => o.search !== ""), v = T(() => o.focused ? "dropdown-up" : "dropdown-down"), x = T(() => {
      if (s.prependIcon && s.modelValue)
        return !0;
    }), _ = T(() => s.clearable && !s.disabled && (H(G) && H(y) && o.focused || (s.multiple ? H(m) && (o.hovered || o.focused) : !H(Y) && H(m) && (o.hovered || o.focused)))), V = T(() => s.modelValue instanceof Array && s.modelValue.length > s.limit), X = T(() => s.modelValue instanceof Array ? s.modelValue.length - s.limit : 0), I = T(() => o.focused && !H(m) && !H(G)), G = T(() => s.searchable === void 0 ? s.options.length > 8 : s.searchable), Y = T(() => s.multiple ? !1 : s.preselectFirst === void 0 ? !0 : s.preselectFirst), te = T(() => H(m) && (s.multiple ? H(G) : o.focused) ? "" : u), D = () => {
      const q = s.modelValue instanceof Array ? [] : null;
      i("input", q);
    }, K = (q) => {
      o.search = q, i("search-change", q);
    }, N = () => {
      !H(y) && H(m) && (D(), o.focused && r.value && setTimeout(r.value.activate));
    }, re = (q) => !q.$isLabel, fe = (q) => {
      if (Array.isArray(s.modelValue)) {
        if (typeof q == "object" && Array.isArray(s.modelValue)) {
          if (q.$isLabel) return;
          const Q = s.trackBy, he = q[Q];
          return !!s.modelValue.find((C) => C === he);
        }
        return s.modelValue.includes(q);
      }
    }, L = (q) => {
      if (s.trackBy)
        return typeof s.modelValue == "object" && typeof q == "object" ? (s.modelValue || {})[s.trackBy] === q[s.trackBy] : typeof q == "object" && (typeof s.modelValue == "string" || typeof s.modelValue == "number") ? s.modelValue === q[s.trackBy] : s.modelValue === q;
    }, E = () => {
      o.hovered = !0;
    }, A = () => {
      o.hovered = !1;
    }, j = (q) => {
      o.isOpen = !0, o.focused = !0, o.hovered = !0, i("open", q);
    }, R = (q) => {
      o.isOpen = !1, o.focused = !1, o.hovered = !1, i("close", q);
    }, U = (q) => q ? q.$isLabel ? q.$groupLabel : typeof q == "object" ? q[s.label] : q : "", W = (q) => s.optionAppendIcon ? typeof s.optionAppendIcon == "string" ? s.optionAppendIcon : s.optionAppendIcon(q) : null, le = async (q) => {
      await mt(), q(s.modelValue);
    }, ye = () => i(s.beforeListBtnAction);
    return (q, Q) => {
      const he = Xu("observe-visibility");
      return F(), ve(M(wr), {
        name: e.name,
        value: e.modelValue
      }, {
        default: de(({ handleChange: C }) => [
          ie("div", {
            class: De(h.value),
            style: Sn(p.value),
            onMouseenter: E,
            onMouseleave: A
          }, [
            me(M(Tl), ke({
              ref_key: "select",
              ref: r
            }, f.value, {
              modelValue: c.value,
              "onUpdate:modelValue": Q[0] || (Q[0] = (B) => c.value = B),
              name: e.name,
              options: e.options,
              "group-values": s.groupValues,
              "group-label": s.groupLabel,
              "group-select": s.groupSelect,
              "show-labels": !1,
              label: e.label,
              "track-by": e.trackBy,
              multiple: e.multiple,
              "allow-empty": e.multiple,
              searchable: G.value,
              "preselect-first": Y.value,
              limit: e.limit,
              disabled: e.disabled,
              "close-on-select": !e.multiple,
              placeholder: te.value,
              "open-direction": e.openDirection,
              "show-no-results": e.showNoResults,
              onSelect: (B) => le(C)
            }), Wu({
              singleLabel: de(({ option: B }) => [
                B.$icon || e.optionPrependIcon ? (F(), ve(M(Je), {
                  key: 0,
                  name: B.$icon || e.optionPrependIcon && e.optionPrependIcon(B),
                  size: "24",
                  class: "x-select__option-prepend-icon"
                }, null, 8, ["name"])) : pe("", !0),
                ce(q.$slots, "single-label", Mt(Wt({ label: U(B), option: B })), () => [
                  je(Te(U(B)), 1)
                ]),
                e.optionAppendIcon ? (F(), ve(M(Je), ke({
                  key: 1,
                  name: W(B)
                }, e.optionAppendIconProps, { class: "x-select__option-append-icon" }), null, 16, ["name"])) : pe("", !0)
              ]),
              selection: de(({ remove: B, values: we }) => [
                ce(q.$slots, "selection", Mt(Wt({ selectedOptionsCount: X.value })), () => [
                  x.value ? (F(), ve(M(Je), ke({
                    key: 0,
                    name: e.prependIcon
                  }, e.prependIconProps, { class: "x-select__prepend-icon" }), null, 16, ["name"])) : pe("", !0),
                  I.value ? (F(), se(Et, { key: 1 }, [
                    je(Te(M(u)), 1)
                  ], 64)) : pe("", !0),
                  (F(!0), se(Et, null, pn(we, (ge, Ve) => (F(), ve(M(jo), {
                    key: Ve,
                    "prepend-icon": ge.$icon,
                    closable: "",
                    truncate: "",
                    onClose: (Fe) => B(ge)
                  }, {
                    default: de(() => [
                      je(Te(U(ge)), 1)
                    ]),
                    _: 2
                  }, 1032, ["prepend-icon", "onClose"]))), 128)),
                  V.value ? (F(), ve(M(jo), {
                    key: 2,
                    class: "x-select__limit"
                  }, {
                    default: de(() => [
                      je(" +" + Te(X.value), 1)
                    ]),
                    _: 1
                  })) : pe("", !0)
                ])
              ]),
              clear: de(() => [
                _.value ? (F(), ve(M(Je), {
                  key: 0,
                  class: "x-select__clear-icon",
                  name: "clear",
                  onMousedown: N
                })) : pe("", !0)
              ]),
              caret: de(({ toggle: B }) => [
                me(M(Je), {
                  class: "x-select__caret",
                  name: v.value,
                  onMousedown: We(B, ["prevent", "stop"])
                }, null, 8, ["name", "onMousedown"])
              ]),
              noResult: de(() => [
                ie("div", { class: "x-select__no-result" }, Te(a))
              ]),
              noOptions: de(() => [
                vt(ie("div", Zh, Te(l), 512), [
                  [Ft, e.showNoResults]
                ])
              ]),
              _: 2
            }, [
              e.beforeListBtnAction ? {
                name: "beforeList",
                fn: de(() => [
                  ce(q.$slots, "beforeList", {}, () => [
                    ie("div", Kh, [
                      me(M(it), {
                        append: e.beforeListBtnIcon,
                        "icon-props": { style: { color: "inherit" } },
                        "data-test-id": e.beforeListBtnTestId,
                        "icon-size": "16",
                        type: "button",
                        class: "x-select__before-list-btn",
                        ghost: "",
                        color: "gray",
                        block: "",
                        size: "xs",
                        onClick: ye
                      }, {
                        default: de(() => [
                          je(Te(e.beforeListBtnText), 1)
                        ]),
                        _: 1
                      }, 8, ["append", "data-test-id"]),
                      me(M(vd))
                    ])
                  ])
                ]),
                key: "0"
              } : void 0,
              e.multiple ? {
                name: "option",
                fn: de(({ option: B }) => [
                  me(M(ds), {
                    checkbox: re(B),
                    checked: fe(B),
                    "prepend-icon": B.$icon || e.optionPrependIcon && e.optionPrependIcon(B),
                    "append-icon": W(B),
                    "append-icon-props": e.optionAppendIconProps,
                    "is-truncate": e.flex,
                    "mark-selected-option": e.markSelectedOption,
                    rounded: e.rounded
                  }, {
                    default: de(() => [
                      je(Te(U(B)), 1)
                    ]),
                    _: 2
                  }, 1032, ["checkbox", "checked", "prepend-icon", "append-icon", "append-icon-props", "is-truncate", "mark-selected-option", "rounded"])
                ]),
                key: "1"
              } : {
                name: "option",
                fn: de(({ option: B }) => [
                  me(M(ds), {
                    checked: L(B),
                    "prepend-icon": B.$icon || e.optionPrependIcon && e.optionPrependIcon(B),
                    "append-icon": W(B),
                    "append-icon-props": e.optionAppendIconProps,
                    "mark-selected-option": e.markSelectedOption,
                    "is-truncate": e.flex,
                    rounded: e.rounded
                  }, {
                    default: de(() => [
                      ce(q.$slots, "list-option", Mt(Wt({ label: U(B), option: B })), () => [
                        je(Te(U(B)), 1)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["checked", "prepend-icon", "append-icon", "append-icon-props", "mark-selected-option", "is-truncate", "rounded"])
                ]),
                key: "2"
              },
              o.isOpen ? {
                name: "afterList",
                fn: de(() => [
                  vt(ie("div", null, null, 512), [
                    [he, { callback: () => i("options-end"), throttle: 500 }]
                  ])
                ]),
                key: "3"
              } : void 0
            ]), 1040, ["modelValue", "name", "options", "group-values", "group-label", "group-select", "label", "track-by", "multiple", "allow-empty", "searchable", "preselect-first", "limit", "disabled", "close-on-select", "placeholder", "open-direction", "show-no-results", "onSelect"]),
            Q[1] || (Q[1] = ie("div", { class: "x-select__border" }, null, -1))
          ], 38)
        ]),
        error: de(({ errorMessage: C }) => [
          ce(q.$slots, "error", Mt(Wt({ errorMessage: C })))
        ]),
        _: 3
      }, 8, ["name", "value"]);
    };
  }
});
var em = Object.defineProperty, tm = (e, t, n) => t in e ? em(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, dr = (e, t, n) => tm(e, typeof t != "symbol" ? t + "" : t, n);
const Ca = {
  "#": { pattern: /[0-9]/ },
  "@": { pattern: /[a-zA-Z]/ },
  "*": { pattern: /[a-zA-Z0-9]/ }
}, Ta = (e, t, n) => e.replaceAll(t, "").replace(n, ".").replace("..", ".").replace(/[^.\d]/g, ""), Pa = (e, t, n) => {
  var r;
  return new Intl.NumberFormat(((r = n.number) == null ? void 0 : r.locale) ?? "en", {
    minimumFractionDigits: e,
    maximumFractionDigits: t,
    roundingMode: "trunc"
  });
}, nm = (e, t = !0, n) => {
  var r, i, s, o;
  const a = ((r = n.number) == null ? void 0 : r.unsigned) !== !0 && e.startsWith("-") ? "-" : "", l = ((i = n.number) == null ? void 0 : i.fraction) ?? 0;
  let u = Pa(0, l, n);
  const f = u.formatToParts(1000.12), c = ((s = f.find((v) => v.type === "group")) == null ? void 0 : s.value) ?? " ", h = ((o = f.find((v) => v.type === "decimal")) == null ? void 0 : o.value) ?? ".", p = Ta(e, c, h);
  if (Number.isNaN(parseFloat(p))) return a;
  const m = p.split(".");
  if (m[1] != null && m[1].length >= 1) {
    const v = m[1].length <= l ? m[1].length : l;
    u = Pa(v, l, n);
  }
  let y = u.format(parseFloat(p));
  return t ? l > 0 && p.endsWith(".") && !p.slice(0, -1).includes(".") && (y += h) : y = Ta(y, c, h), a + y;
};
class rm {
  constructor(t = {}) {
    dr(this, "opts", {}), dr(this, "memo", /* @__PURE__ */ new Map());
    const n = { ...t };
    if (n.tokens != null) {
      n.tokens = n.tokensReplace ? { ...n.tokens } : { ...Ca, ...n.tokens };
      for (const r of Object.values(n.tokens))
        typeof r.pattern == "string" && (r.pattern = new RegExp(r.pattern));
    } else
      n.tokens = Ca;
    Array.isArray(n.mask) && (n.mask.length > 1 ? n.mask = [...n.mask].sort((r, i) => r.length - i.length) : n.mask = n.mask[0] ?? ""), n.mask === "" && (n.mask = null), this.opts = n;
  }
  masked(t) {
    return this.process(String(t), this.findMask(String(t)));
  }
  unmasked(t) {
    return this.process(String(t), this.findMask(String(t)), !1);
  }
  isEager() {
    return this.opts.eager === !0;
  }
  isReversed() {
    return this.opts.reversed === !0;
  }
  completed(t) {
    const n = this.findMask(String(t));
    if (this.opts.mask == null || n == null) return !1;
    const r = this.process(String(t), n).length;
    return typeof this.opts.mask == "string" ? r >= this.opts.mask.length : r >= n.length;
  }
  findMask(t) {
    const n = this.opts.mask;
    if (n == null)
      return null;
    if (typeof n == "string")
      return n;
    if (typeof n == "function")
      return n(t);
    const r = this.process(t, n.slice(-1).pop() ?? "", !1);
    return n.find((i) => this.process(t, i, !1).length >= r.length) ?? "";
  }
  escapeMask(t) {
    const n = [], r = [];
    return t.split("").forEach((i, s) => {
      i === "!" && t[s - 1] !== "!" ? r.push(s - r.length) : n.push(i);
    }), { mask: n.join(""), escaped: r };
  }
  process(t, n, r = !0) {
    if (this.opts.number != null) return nm(t, r, this.opts);
    if (n == null) return t;
    const i = `v=${t},mr=${n},m=${r ? 1 : 0}`;
    if (this.memo.has(i)) return this.memo.get(i);
    const { mask: s, escaped: o } = this.escapeMask(n), a = [], l = this.opts.tokens != null ? this.opts.tokens : {}, u = this.isReversed() ? -1 : 1, f = this.isReversed() ? "unshift" : "push", c = this.isReversed() ? 0 : s.length - 1, h = this.isReversed() ? () => v > -1 && x > -1 : () => v < s.length && x < t.length, p = (V) => !this.isReversed() && V <= c || this.isReversed() && V >= c;
    let m, y = -1, v = this.isReversed() ? s.length - 1 : 0, x = this.isReversed() ? t.length - 1 : 0, _ = !1;
    for (; h(); ) {
      const V = s.charAt(v), X = l[V], I = (X == null ? void 0 : X.transform) != null ? X.transform(t.charAt(x)) : t.charAt(x);
      if (!o.includes(v) && X != null ? (I.match(X.pattern) != null ? (a[f](I), X.repeated ? (y === -1 ? y = v : v === c && v !== y && (v = y - u), c === y && (v -= u)) : X.multiple && (_ = !0, v -= u), v += u) : X.multiple ? _ && (v += u, x -= u, _ = !1) : I === m ? m = void 0 : X.optional && (v += u, x -= u), x += u) : (r && !this.isEager() && a[f](V), I === V && !this.isEager() ? x += u : m = V, this.isEager() || (v += u)), this.isEager())
        for (; p(v) && (l[s.charAt(v)] == null || o.includes(v)); ) {
          if (r) {
            if (a[f](s.charAt(v)), t.charAt(x) === s.charAt(v)) {
              v += u, x += u;
              continue;
            }
          } else s.charAt(v) === t.charAt(x) && (x += u);
          v += u;
        }
    }
    return this.memo.set(i, a.join("")), this.memo.get(i);
  }
}
const uu = (e) => JSON.parse(e.replaceAll("'", '"')), im = (e, t = {}) => {
  const n = { ...t };
  e.dataset.maska != null && e.dataset.maska !== "" && (n.mask = sm(e.dataset.maska)), e.dataset.maskaEager != null && (n.eager = qr(e.dataset.maskaEager)), e.dataset.maskaReversed != null && (n.reversed = qr(e.dataset.maskaReversed)), e.dataset.maskaTokensReplace != null && (n.tokensReplace = qr(e.dataset.maskaTokensReplace)), e.dataset.maskaTokens != null && (n.tokens = om(e.dataset.maskaTokens));
  const r = {};
  return e.dataset.maskaNumberLocale != null && (r.locale = e.dataset.maskaNumberLocale), e.dataset.maskaNumberFraction != null && (r.fraction = parseInt(e.dataset.maskaNumberFraction)), e.dataset.maskaNumberUnsigned != null && (r.unsigned = qr(e.dataset.maskaNumberUnsigned)), (e.dataset.maskaNumber != null || Object.values(r).length > 0) && (n.number = r), n;
}, qr = (e) => e !== "" ? !!JSON.parse(e) : !0, sm = (e) => e.startsWith("[") && e.endsWith("]") ? uu(e) : e, om = (e) => {
  if (e.startsWith("{") && e.endsWith("}"))
    return uu(e);
  const t = {};
  return e.split("|").forEach((n) => {
    const r = n.split(":");
    t[r[0]] = {
      pattern: new RegExp(r[1]),
      optional: r[2] === "optional",
      multiple: r[2] === "multiple",
      repeated: r[2] === "repeated"
    };
  }), t;
};
class am {
  constructor(t, n = {}) {
    dr(this, "items", /* @__PURE__ */ new Map()), dr(this, "eventAbortController"), dr(this, "onInput", (r) => {
      if (r instanceof CustomEvent && r.type === "input" && !r.isTrusted && !r.bubbles)
        return;
      const i = r.target, s = this.items.get(i);
      if (s === void 0) return;
      const o = "inputType" in r && r.inputType.startsWith("delete"), a = s.isEager(), l = o && a && s.unmasked(i.value) === "" ? "" : i.value;
      this.fixCursor(i, o, () => this.setValue(i, l));
    }), this.options = n, this.eventAbortController = new AbortController(), this.init(this.getInputs(t));
  }
  update(t = {}) {
    this.options = { ...t }, this.init(Array.from(this.items.keys()));
  }
  updateValue(t) {
    var n;
    t.value !== "" && t.value !== ((n = this.processInput(t)) == null ? void 0 : n.masked) && this.setValue(t, t.value);
  }
  destroy() {
    this.eventAbortController.abort(), this.items.clear();
  }
  init(t) {
    const n = this.getOptions(this.options);
    for (const r of t) {
      if (!this.items.has(r)) {
        const { signal: s } = this.eventAbortController;
        r.addEventListener("input", this.onInput, { capture: !0, signal: s });
      }
      const i = new rm(im(r, n));
      this.items.set(r, i), queueMicrotask(() => this.updateValue(r)), r.selectionStart === null && i.isEager() && console.warn("Maska: input of `%s` type is not supported", r.type);
    }
  }
  getInputs(t) {
    return typeof t == "string" ? Array.from(document.querySelectorAll(t)) : "length" in t ? Array.from(t) : [t];
  }
  getOptions(t) {
    const { onMaska: n, preProcess: r, postProcess: i, ...s } = t;
    return s;
  }
  fixCursor(t, n, r) {
    var i, s;
    const o = t.selectionStart, a = t.value;
    if (r(), o === null || o === a.length && !n) return;
    const l = t.value, u = a.slice(0, o), f = l.slice(0, o), c = (i = this.processInput(t, u)) == null ? void 0 : i.unmasked, h = (s = this.processInput(t, f)) == null ? void 0 : s.unmasked;
    if (c === void 0 || h === void 0) return;
    let p = o;
    u !== f && (p += n ? l.length - a.length : c.length - h.length), t.setSelectionRange(p, p);
  }
  setValue(t, n) {
    const r = this.processInput(t, n);
    r !== void 0 && (t.value = r.masked, this.options.onMaska != null && (Array.isArray(this.options.onMaska) ? this.options.onMaska.forEach((i) => i(r)) : this.options.onMaska(r)), t.dispatchEvent(new CustomEvent("maska", { detail: r })), t.dispatchEvent(new CustomEvent("input", { detail: r.masked })));
  }
  processInput(t, n) {
    const r = this.items.get(t);
    if (r === void 0) return;
    let i = n ?? t.value;
    this.options.preProcess != null && (i = this.options.preProcess(i));
    let s = r.masked(i);
    return this.options.postProcess != null && (s = this.options.postProcess(s)), {
      masked: s,
      unmasked: r.unmasked(i),
      completed: r.completed(i)
    };
  }
}
const es = /* @__PURE__ */ new WeakMap(), lm = (e, t) => {
  if (e.arg == null || e.instance == null) return;
  const n = "setup" in e.instance.$.type;
  e.arg in e.instance ? e.instance[e.arg] = t : n && console.warn("Maska: please expose `%s` using defineExpose", e.arg);
}, um = (e, t) => {
  var n;
  const r = e instanceof HTMLInputElement ? e : e.querySelector("input");
  if (r == null || (r == null ? void 0 : r.type) === "file") return;
  let i = {};
  if (t.value != null && (i = typeof t.value == "string" ? { mask: t.value } : { ...t.value }), t.arg != null) {
    const s = (o) => {
      const a = t.modifiers.unmasked ? o.unmasked : t.modifiers.completed ? o.completed : o.masked;
      lm(t, a);
    };
    i.onMaska = i.onMaska == null ? s : Array.isArray(i.onMaska) ? [...i.onMaska, s] : [i.onMaska, s];
  }
  es.has(r) ? (n = es.get(r)) == null || n.update(i) : es.set(r, new am(r, i));
}, cm = {
  key: 0,
  class: "x-input__prepend"
}, dm = ["value", "onChange", "onBlur"], fm = {
  key: 2,
  class: "x-input__append"
}, pm = {
  key: 0,
  class: "x-input__spin-buttons"
}, hm = /* @__PURE__ */ $e({
  inheritAttrs: !1,
  __name: "XInput",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    name: {
      type: String,
      required: !0
    },
    size: {
      type: String,
      default: "s",
      validator: (e) => ["xxxs", "xxs", "xs", "s", "m"].includes(e)
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => ["primary", "dark", "promo", "secondary", "tertiary", "darkest-gray"].includes(e)
    },
    rounded: {
      type: [Boolean, String],
      default: !1,
      validator: (e) => typeof e == "boolean" || ["extra"].includes(e)
    },
    type: {
      type: String,
      default: "text"
    },
    append: {
      type: String,
      default: ""
    },
    appendIcon: {
      type: String,
      default: ""
    },
    appendIconProps: {
      type: Object,
      default: () => ({})
    },
    appendButton: {
      type: Object,
      default: null
    },
    onAppendClick: Function,
    prepend: {
      type: String,
      default: ""
    },
    prependIcon: {
      type: String,
      default: ""
    },
    prependIconProps: {
      type: Object,
      default: () => ({})
    },
    prependButton: {
      type: Object,
      default: null
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: Number.MAX_SAFE_INTEGER
    },
    modelModifiers: {
      type: Object,
      default: () => ({})
    },
    mask: {
      type: String,
      default: ""
    },
    showError: {
      type: Boolean,
      default: !0
    },
    onPrependClick: Function,
    disabled: Boolean,
    readonly: Boolean,
    invisible: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: n }) {
    const r = Cn(), i = Ue(), s = Vt({
      focused: !1
    }), o = e, a = n, { class: l = "", ...u } = r, f = T(() => (o.value || o.modelValue).toString()), c = T(() => typeof o.rounded == "boolean"), h = T(() => [
      "x-input",
      `x-input--size-${o.size}`,
      `x-input--${o.color}`,
      {
        "x-input--disabled": o.disabled,
        "x-input--focused": s.focused && !o.readonly,
        "x-input--readonly": o.readonly,
        "x-input--invisible": o.invisible,
        "x-input--hide-error": !o.showError,
        "x-input--rounded": H(c) && o.rounded,
        [`x-input--rounded-${o.rounded}`]: !H(c) && o.rounded
      },
      l
    ]), p = T(() => ({
      name: o.name,
      id: o.name,
      disabled: o.disabled,
      readonly: o.readonly,
      class: "x-input__field",
      type: o.type,
      ...u
    })), m = T(() => ({
      type: "button",
      text: !0,
      color: "gray",
      class: "x-input__prepend-btn",
      size: o.size,
      icon: o.prependIcon,
      iconProps: o.prependIconProps,
      disabled: o.disabled
    })), y = T(() => ({
      type: "button",
      text: !0,
      color: "gray",
      class: "x-input__append-btn",
      size: o.size,
      icon: o.appendIcon,
      iconProps: o.appendIconProps,
      disabled: o.disabled
    })), v = T(() => ({
      class: "x-input__spin-button",
      type: "button",
      iconSize: ["8px", "6px"],
      text: !0
    })), x = () => {
      var D;
      return (D = i.value) == null ? void 0 : D.focus();
    }, _ = () => s.focused = !0, V = (D) => {
      s.focused = !1, D();
    }, X = () => {
      o.onPrependClick && o.onPrependClick();
    }, I = () => {
      o.onAppendClick && o.onAppendClick();
    }, G = (D, K) => {
      const N = D.target;
      let { value: re } = N;
      K(D, !0), o.modelModifiers.lowercase && (re = re.toLowerCase()), a("update:modelValue", re);
    }, Y = () => {
      const D = (parseInt(H(f)) || 0) + 1;
      a("update:modelValue", D);
    }, te = () => {
      const D = (parseInt(H(f)) || 0) - 1;
      a("update:modelValue", D);
    };
    return t({
      focus: x
    }), (D, K) => (F(), ve(M(wr), {
      name: e.name,
      value: f.value,
      class: "x-input-container"
    }, {
      default: de(({ inputValue: N, handleChange: re, handleBlur: fe }) => [
        ie("div", {
          class: De(h.value),
          onClick: x
        }, [
          e.prepend || D.$slots.prepend ? (F(), se("div", cm, [
            ce(D.$slots, "prepend", {}, () => [
              je(Te(e.prepend), 1)
            ], !0)
          ])) : pe("", !0),
          e.onPrependClick ? (F(), ve(M(it), ke({ key: 1 }, m.value, { onClick: X }), null, 16)) : pe("", !0),
          vt(ie("input", ke({
            ref_key: "input",
            ref: i
          }, p.value, {
            value: N,
            onChange: (L) => G(L, re),
            onFocus: _,
            onBlur: (L) => V(fe)
          }), null, 16, dm), [
            [M(um), e.mask]
          ]),
          e.append || D.$slots.append || e.type === "number" ? (F(), se("div", fm, [
            e.type === "number" ? (F(), se("div", pm, [
              me(M(it), ke({ icon: "input-arrow-up" }, v.value, { onClick: Y }), null, 16),
              me(M(it), ke({ icon: "input-arrow-down" }, v.value, { onClick: te }), null, 16)
            ])) : ce(D.$slots, "append", { key: 1 }, () => [
              je(Te(e.append), 1)
            ], !0)
          ])) : pe("", !0),
          e.onAppendClick ? (F(), ve(M(it), ke({ key: 3 }, y.value, { onClick: I }), null, 16)) : pe("", !0)
        ], 2)
      ]),
      error: de(({ errorMessage: N }) => [
        ce(D.$slots, "error", Mt(Wt({ errorMessage: N })), void 0, !0)
      ]),
      _: 3
    }, 8, ["name", "value"]));
  }
}), Ln = /* @__PURE__ */ qe(hm, [["__scopeId", "data-v-eec20375"]]);
var yr = /* @__PURE__ */ ((e) => (e.LINE_CONTAINS = "Line contains", e.LINE_CONTAINS_REGEX_MATCH = "Line contains regex match", e))(yr || {});
const mm = [{
  name: "Line contains",
  id: yr.LINE_CONTAINS
}, {
  name: "Line contains regex match",
  id: yr.LINE_CONTAINS_REGEX_MATCH
}], vm = /* @__PURE__ */ $e({
  __name: "XSearch",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: "search"
    },
    placeholder: {
      type: String,
      default: "Search"
    },
    color: {
      type: String,
      default: "dark",
      validator: (e) => ["dark", "tertiary"].includes(e)
    },
    mode: {
      type: String,
      default: yr.LINE_CONTAINS
    },
    icon: {
      type: String,
      default: null
    },
    showMode: Boolean
  },
  emits: ["update:model-value", "update:mode", "clear"],
  setup(e, { emit: t }) {
    const n = Ba(), r = e, i = t, s = T({
      get() {
        return r.modelValue;
      },
      set(h) {
        i("update:model-value", h);
      }
    }), o = T({
      get() {
        return r.mode;
      },
      set(h) {
        i("update:mode", h), u();
      }
    }), a = T(() => [
      "x-search",
      { "x-search--fill": r.modelValue },
      { "x-search--select": r.showMode }
    ]), l = (h) => {
      if (n.append) return;
      const p = h.target;
      s.value = p.value;
    }, u = () => {
      i("clear", H(s));
    }, f = T(() => r.mode === yr.LINE_CONTAINS ? "203px" : "260px"), c = T(() => ({
      class: "x-search__icon",
      name: r.icon ?? "search-right",
      size: "16",
      stroke: null
    }));
    return (h, p) => (F(), se("div", {
      class: De(a.value)
    }, [
      e.showMode ? (F(), ve(M(Qh), {
        key: 0,
        modelValue: o.value,
        "onUpdate:modelValue": p[0] || (p[0] = (m) => o.value = m),
        options: M(mm),
        width: f.value,
        size: "xs",
        color: "secondary",
        name: "id",
        "track-by": "id",
        label: "name",
        "preselect-first": "",
        flex: "",
        rounded: ""
      }, null, 8, ["modelValue", "options", "width"])) : pe("", !0),
      me(M(Ln), {
        modelValue: s.value,
        "onUpdate:modelValue": p[1] || (p[1] = (m) => s.value = m),
        modelModifiers: { trim: !0 },
        placeholder: e.placeholder,
        name: e.name,
        color: e.color,
        autocomplete: "off",
        onInput: l
      }, {
        prepend: de(() => [
          s.value ? pe("", !0) : (F(), ve(M(Je), Mt(ke({ key: 0 }, c.value)), null, 16))
        ]),
        append: de(() => [
          ce(h.$slots, "append", {}, () => [
            s.value ? (F(), ve(M(it), {
              key: 0,
              icon: "close",
              color: "white",
              size: "xxs",
              "icon-size": "12",
              class: "x-search__clear",
              type: "button",
              square: "",
              text: "",
              onClick: u
            })) : pe("", !0)
          ], !0)
        ]),
        _: 3
      }, 8, ["modelValue", "placeholder", "name", "color"])
    ], 2));
  }
}), gm = /* @__PURE__ */ qe(vm, [["__scopeId", "data-v-e84a81bf"]]);
var ze = /* @__PURE__ */ ((e) => (e.MINUTE = "minute", e.HOUR = "hour", e.DAY = "day", e.TODAY = "today", e.YESTERDAY = "yesterday", e.BEFORE_YESTERDAY = "before-yesterday", e.WEEK = "week", e.MONTH = "month", e.RANGE = "range", e.ALL_TIME = "all-time", e))(ze || {});
const ym = {
  key: 0,
  class: "x-date-picker-quick-links-list"
}, bm = { class: "x-date-picker-quick-links-list__content" }, wm = { class: "x-date-picker-quick-links-list__in" }, xm = { key: 1 }, Sm = /* @__PURE__ */ $e({
  __name: "XDatePickerQuickLinksList",
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = T({
      get() {
        return n.modelValue;
      },
      set(o) {
        r("update:model-value", o);
      }
    }), s = (o) => {
      i.value = o;
    };
    return (o, a) => e.options.length ? (F(), se("div", ym, [
      ie("div", bm, [
        ie("ul", wm, [
          (F(!0), se(Et, null, pn(e.options, (l) => (F(), se("li", {
            key: l.id,
            class: De(["x-date-picker-quick-links-list__item", { "x-date-picker-quick-links-list__item--active": l.id === i.value.id }])
          }, [
            me(M(it), {
              type: "button",
              class: "x-date-picker-quick-links-list__link",
              color: "gray",
              size: "xs",
              ghost: "",
              onClick: (u) => s(l)
            }, {
              default: de(() => [
                je(Te(l.title), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]),
            l.id === i.value.id ? (F(), ve(M(Je), {
              key: 0,
              class: "x-date-picker-quick-links-list__check",
              name: "checkmark",
              size: "16"
            })) : pe("", !0)
          ], 2))), 128))
        ])
      ])
    ])) : (F(), se("div", xm, a[0] || (a[0] = [
      ie("p", { class: "x-date-picker-quick-links-list__empty" }, " No shortcuts found. ", -1),
      ie("p", { class: "x-date-picker-quick-links-list__empty" }, " 'Please adjust your search or try entering specific dates and times manually.' ", -1)
    ])));
  }
}), $m = /* @__PURE__ */ qe(Sm, [["__scopeId", "data-v-01f5a9c8"]]), km = { class: "x-date-picker-quick-links" }, _m = /* @__PURE__ */ $e({
  __name: "XDatePickerQuickLinks",
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = Vt({
      search: ""
    }), s = T({
      get() {
        return n.modelValue;
      },
      set(l) {
        r("update:model-value", l);
      }
    }), o = T(() => i.search ? n.options.filter(({ title: l }) => l.toLowerCase().includes(i.search.toLowerCase())) : n.options), a = () => {
      i.search = "";
    };
    return (l, u) => (F(), se("div", km, [
      me(M(gm), {
        modelValue: i.search,
        "onUpdate:modelValue": u[0] || (u[0] = (f) => i.search = f),
        "show-submit": !1,
        color: "tertiary",
        placeholder: "Search quick ranges",
        class: "mb-2",
        onClear: a
      }, null, 8, ["modelValue"]),
      me($m, {
        modelValue: s.value,
        "onUpdate:modelValue": u[1] || (u[1] = (f) => s.value = f),
        options: o.value
      }, null, 8, ["modelValue", "options"])
    ]));
  }
}), Om = "YYYY-MM-DD HH:mm", cu = "DD/MM/YYYY", du = "HH:mm", Em = `${cu} ${du}`, Vm = "00:00", vi = (e) => xt(e, cu, !0).isValid(), gi = (e) => xt(e, du, !0).isValid(), Rn = ({ date: e, time: t }) => xt(`${e} ${t || Vm}`, Em).format(Om), As = (e, t) => xt(e).isBefore(xt(t)), Am = Al({
  startDate: tr().test("is-valid-date", function(e = "") {
    if (!e && !this.parent.endDate) return !0;
    if (!vi(e)) return !1;
    if (!this.parent.endDate) return !0;
    const t = Rn({ date: e, time: this.parent.startTime }), n = Rn({ date: this.parent.endDate, time: this.parent.endTime || "23:59" });
    return As(t, n);
  }),
  startTime: tr().test("is-valid-time", function(e = "") {
    return e ? gi(e) : !0;
  }),
  endDate: tr().test("is-valid-date", function(e = "") {
    if (!e && !this.parent.startDate) return !0;
    if (!vi(e)) return !1;
    if (!this.parent.startDate) return !0;
    const t = Rn({ date: this.parent.startDate, time: this.parent.startTime }), n = Rn({ date: e, time: this.parent.endTime || "23:59" });
    return As(t, n);
  }),
  endTime: tr().test("is-valid-time", function(e = "") {
    return e ? gi(e) : !0;
  })
}), Cm = { class: "x-date-picker-form__fieldset" }, Tm = { class: "x-date-picker-form__fieldset" }, Pm = /* @__PURE__ */ $e({
  __name: "XDatePickerForm",
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = T({
      get() {
        return n.modelValue;
      },
      set(s) {
        r("update:model-value", s);
      }
    });
    return (s, o) => (F(), ve(M(op), {
      "validation-schema": M(Am),
      class: "x-date-picker-form"
    }, {
      default: de(() => [
        ie("fieldset", Cm, [
          me(M(Fr), {
            label: "Start date",
            "html-for": "startDate",
            class: "mb-2",
            "no-label": ""
          }, {
            default: de((a) => [
              me(M(Ln), ke({
                modelValue: i.value.startDate,
                "onUpdate:modelValue": o[0] || (o[0] = (l) => i.value.startDate = l)
              }, a, {
                "show-error": !1,
                name: "startDate",
                mask: "##/##/####",
                placeholder: "dd/mm/yyyy",
                size: "m",
                rounded: ""
              }), null, 16, ["modelValue"])
            ]),
            _: 1
          }),
          me(M(Fr), {
            label: "Start time",
            "html-for": "startTime",
            "no-label": ""
          }, {
            default: de((a) => [
              me(M(Ln), ke({
                modelValue: i.value.startTime,
                "onUpdate:modelValue": o[1] || (o[1] = (l) => i.value.startTime = l)
              }, a, {
                "show-error": !1,
                name: "startTime",
                mask: "##:##",
                placeholder: "hh:mm",
                size: "m",
                rounded: ""
              }), null, 16, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        ie("fieldset", Tm, [
          me(M(Fr), {
            label: "End date",
            "html-for": "endDate",
            class: "mb-2",
            "no-label": ""
          }, {
            default: de((a) => [
              me(M(Ln), ke({
                modelValue: i.value.endDate,
                "onUpdate:modelValue": o[2] || (o[2] = (l) => i.value.endDate = l)
              }, a, {
                "show-error": !1,
                name: "endDate",
                mask: "##/##/####",
                placeholder: "dd/mm/yyyy",
                size: "m",
                rounded: ""
              }), null, 16, ["modelValue"])
            ]),
            _: 1
          }),
          me(M(Fr), {
            label: "End time",
            "html-for": "endTime",
            "no-label": ""
          }, {
            default: de((a) => [
              me(M(Ln), ke({
                modelValue: i.value.endTime,
                "onUpdate:modelValue": o[3] || (o[3] = (l) => i.value.endTime = l)
              }, a, {
                "show-error": !1,
                name: "endTime",
                mask: "##:##",
                placeholder: "hh:mm",
                size: "m",
                rounded: ""
              }), null, 16, ["modelValue"])
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["validation-schema"]));
  }
}), Nm = /* @__PURE__ */ qe(Pm, [["__scopeId", "data-v-2e0976d0"]]), Dm = { class: "d-flex justify-between mt-6" }, Fm = /* @__PURE__ */ $e({
  __name: "XDatePickerContent",
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default: () => []
    },
    isWide: Boolean
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    xt.extend(Ep);
    const n = e, r = t, i = Vt({
      model: n.modelValue,
      form: {
        id: -1,
        title: "",
        value: -1,
        unit: ze.RANGE,
        startDate: n.modelValue.startDate ?? "",
        startTime: n.modelValue.startTime ?? "",
        endDate: n.modelValue.endDate ?? "",
        endTime: n.modelValue.endTime ?? ""
      }
    }), s = T(() => ({
      type: "button",
      color: "gray",
      size: "xs",
      block: !0
    })), o = T(() => ({
      type: "submit",
      size: "xs",
      block: !0,
      disabled: H(l) ? !H(u) || !H(a) : i.model.value === void 0
    })), a = T(() => {
      const { startDate: p, startTime: m = "", endDate: y, endTime: v = "" } = i.form;
      if (!p || !y || !vi(p) || !vi(y) || !gi(m || "00:00") || !gi(v || "23:59")) return !1;
      const x = Rn({ date: p, time: m }), _ = Rn({ date: y, time: v || "23:59" });
      return As(x, _);
    }), l = T(() => {
      const { startDate: p, startTime: m, endDate: y, endTime: v } = i.form;
      return p || m || y || v;
    }), u = T(() => {
      const { startDate: p, endDate: m } = i.form;
      return !!(p && m);
    }), f = () => {
      Io();
    }, c = () => {
      r(
        "update:model-value",
        i.model.unit ? i.model : {
          ...i.form,
          startTime: i.form.startTime || "00:00",
          endTime: i.form.endTime || "23:59"
        }
      ), Io();
    };
    Ie(() => n.modelValue, () => {
      n.modelValue.unit === ze.RANGE ? i.form = n.modelValue : i.model = n.modelValue;
    }), Ie(() => i.form, () => {
      i.model.value !== void 0 && H(l) && (i.model = {});
    }, { deep: !0 }), Ie(() => i.model, () => {
      i.model.value !== void 0 && H(l) && (i.form = {
        ...i.form,
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: ""
      });
    }, { deep: !0 });
    const h = T(() => [
      "x-date-picker-content",
      {
        "x-date-picker-content--wide": n.isWide
      }
    ]);
    return (p, m) => (F(), ve(M(Tp), {
      class: De(h.value)
    }, {
      default: de(() => [
        me(M(oa), {
          class: "x-date-picker-content__links",
          auto: ""
        }, {
          default: de(() => [
            me(_m, {
              modelValue: i.model,
              "onUpdate:modelValue": m[0] || (m[0] = (y) => i.model = y),
              options: e.options
            }, null, 8, ["modelValue", "options"])
          ]),
          _: 1
        }),
        me(M(oa), { auto: "" }, {
          default: de(() => [
            me(Nm, {
              modelValue: i.form,
              "onUpdate:modelValue": m[1] || (m[1] = (y) => i.form = y),
              class: "x-date-picker-content__form"
            }, null, 8, ["modelValue"]),
            ie("div", Dm, [
              me(M(it), ke(s.value, { onClick: f }), {
                default: de(() => m[2] || (m[2] = [
                  je(" Cancel ")
                ])),
                _: 1,
                __: [2]
              }, 16),
              me(M(it), ke(o.value, { onClick: c }), {
                default: de(() => m[3] || (m[3] = [
                  je(" Apply ")
                ])),
                _: 1,
                __: [3]
              }, 16)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), Mm = /* @__PURE__ */ qe(Fm, [["__scopeId", "data-v-9eba58f9"]]), Im = /* @__PURE__ */ $e({
  __name: "XDatePicker",
  props: {
    modelValue: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Array,
      default: () => []
    },
    placement: {
      type: String,
      default: "bottom"
    }
  },
  emits: ["update:model-value"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = Vt({
      isShow: !1
    }), s = T({
      get() {
        return n.modelValue;
      },
      set(c) {
        r("update:model-value", c);
      }
    }), o = T(() => i.isShow ? "arrow-up" : "arrow-down"), a = T(() => {
      const { title: c, startDate: h, startTime: p, endDate: m, endTime: y, unit: v } = H(s), x = h && m;
      return v !== ze.RANGE ? c : x ? `${h} ${p ?? "00:00"} - ${m} ${y ?? "23:59"}` : "Select date";
    }), l = T(() => n.placement === "bottom-start"), u = () => {
      i.isShow = !i.isShow;
    }, f = T(() => ({
      placement: n.placement,
      distance: 8,
      autoBoundaryMaxSize: !0,
      shown: i.isShow,
      triggers: [],
      class: "x-date-picker"
    }));
    return (c, h) => (F(), ve(M(md), ke(f.value, {
      onHide: h[1] || (h[1] = (p) => i.isShow = !1)
    }), {
      popper: de(() => [
        me(Mm, {
          modelValue: s.value,
          "onUpdate:modelValue": h[0] || (h[0] = (p) => s.value = p),
          options: e.options,
          "is-wide": l.value
        }, null, 8, ["modelValue", "options", "is-wide"])
      ]),
      default: de(() => [
        me(M(it), {
          append: o.value,
          "icon-size": "8",
          class: "x-date-picker__button",
          color: "gray",
          onClick: u
        }, {
          default: de(() => [
            je(Te(a.value), 1)
          ]),
          _: 1
        }, 8, ["append"])
      ]),
      _: 1
    }, 16));
  }
}), mv = /* @__PURE__ */ qe(Im, [["__scopeId", "data-v-a1436a82"]]);
var ei = { exports: {} }, jm = ei.exports, Na;
function Lm() {
  return Na || (Na = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(jm, function() {
      var n = "minute", r = /[+-]\d\d(?::?\d\d)?/g, i = /([+-]|\d\d)/g;
      return function(s, o, a) {
        var l = o.prototype;
        a.utc = function(y) {
          var v = { date: y, utc: !0, args: arguments };
          return new o(v);
        }, l.utc = function(y) {
          var v = a(this.toDate(), { locale: this.$L, utc: !0 });
          return y ? v.add(this.utcOffset(), n) : v;
        }, l.local = function() {
          return a(this.toDate(), { locale: this.$L, utc: !1 });
        };
        var u = l.parse;
        l.parse = function(y) {
          y.utc && (this.$u = !0), this.$utils().u(y.$offset) || (this.$offset = y.$offset), u.call(this, y);
        };
        var f = l.init;
        l.init = function() {
          if (this.$u) {
            var y = this.$d;
            this.$y = y.getUTCFullYear(), this.$M = y.getUTCMonth(), this.$D = y.getUTCDate(), this.$W = y.getUTCDay(), this.$H = y.getUTCHours(), this.$m = y.getUTCMinutes(), this.$s = y.getUTCSeconds(), this.$ms = y.getUTCMilliseconds();
          } else f.call(this);
        };
        var c = l.utcOffset;
        l.utcOffset = function(y, v) {
          var x = this.$utils().u;
          if (x(y)) return this.$u ? 0 : x(this.$offset) ? c.call(this) : this.$offset;
          if (typeof y == "string" && (y = function(I) {
            I === void 0 && (I = "");
            var G = I.match(r);
            if (!G) return null;
            var Y = ("" + G[0]).match(i) || ["-", 0, 0], te = Y[0], D = 60 * +Y[1] + +Y[2];
            return D === 0 ? 0 : te === "+" ? D : -D;
          }(y), y === null)) return this;
          var _ = Math.abs(y) <= 16 ? 60 * y : y, V = this;
          if (v) return V.$offset = _, V.$u = y === 0, V;
          if (y !== 0) {
            var X = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
            (V = this.local().add(_ + X, n)).$offset = _, V.$x.$localOffset = X;
          } else V = this.utc();
          return V;
        };
        var h = l.format;
        l.format = function(y) {
          var v = y || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return h.call(this, v);
        }, l.valueOf = function() {
          var y = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
          return this.$d.valueOf() - 6e4 * y;
        }, l.isUTC = function() {
          return !!this.$u;
        }, l.toISOString = function() {
          return this.toDate().toISOString();
        }, l.toString = function() {
          return this.toDate().toUTCString();
        };
        var p = l.toDate;
        l.toDate = function(y) {
          return y === "s" && this.$offset ? a(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : p.call(this);
        };
        var m = l.diff;
        l.diff = function(y, v, x) {
          if (y && this.$u === y.$u) return m.call(this, y, v, x);
          var _ = this.local(), V = a(y).local();
          return m.call(_, V, v, x);
        };
      };
    });
  }(ei)), ei.exports;
}
var Rm = Lm();
const Bm = /* @__PURE__ */ $i(Rm);
xt.extend(Bm);
const vv = () => ({ getDateTimeRange: (t, n) => {
  const r = "DD/MM/YYYY HH:mm", { end: i } = n ?? {}, s = i ? xt.utc(i) : xt.utc().local(), o = xt.utc().local(), { startDate: a, startTime: l, endDate: u, endTime: f } = t;
  let c = null, h = null, p, m, y, v;
  switch (t.unit) {
    case ze.RANGE:
      c = xt(`${a} ${l}`, r).toISOString(), h = xt(`${u} ${f}`, r).toISOString();
      break;
    case ze.WEEK:
      m = o.startOf(ze.WEEK).subtract(t.value, ze.WEEK), c = m.toISOString(), h = t.value ? m.endOf(ze.WEEK).toISOString() : o.toISOString();
      break;
    case ze.MONTH:
      y = o.startOf(ze.MONTH).subtract(t.value, ze.MONTH), c = y.toISOString(), h = t.value ? y.endOf(ze.MONTH).toISOString() : o.toISOString();
      break;
    case ze.HOUR:
    case ze.MINUTE:
      c = s.subtract(t.value, t.unit).toISOString(), h = s.toISOString();
      break;
    case ze.DAY:
      v = s.subtract(t.value, ze.DAY), c = v.toISOString(), h = s.toISOString();
      break;
    case ze.TODAY:
    case ze.YESTERDAY:
    case ze.BEFORE_YESTERDAY:
      p = o.subtract(t.value, ze.DAY), c = p.startOf(ze.DAY).toISOString(), h = p.endOf(ze.DAY).toISOString();
      break;
    case ze.ALL_TIME:
      c = null, h = null;
      break;
  }
  return { dateTimeFromUtc: c, dateTimeToUtc: h };
} }), zm = { class: "x-file-input" }, Hm = ["multiple", "name", "max", "accept"], Um = {
  key: 0,
  class: "x-file-input__header",
  for: "input"
}, qm = {
  key: 1,
  class: "x-file-input__preview"
}, Ym = ["src", "alt"], Xm = {
  key: 0,
  class: "x-file-input__add-item",
  for: "input"
}, Wm = /* @__PURE__ */ $e({
  __name: "XFileInput",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: "imageUploads"
    },
    maxFiles: {
      type: Number,
      default: 1 / 0,
      validator: (e) => e >= 1 || e === 1 / 0
    },
    maxFileSize: {
      type: Number,
      default: 5
    },
    accept: {
      type: String,
      default: "image/png, image/jpeg"
    },
    placeholder: {
      type: String,
      default: "Add your files here"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = ri("input"), i = t, s = T(() => ap(n.modelValue, i)), o = T(() => n.maxFiles === 1 / 0), a = T(() => H(o) || H(s).length < n.maxFiles), l = T(() => H(o) || n.maxFiles > 1), u = (c) => {
      const h = c.target, { maxFiles: p } = n;
      if (!h.files) return;
      const m = H(o) ? void 0 : p - H(s).length, y = s.value.map(({ fileName: x }) => x);
      Array.from(h.files).filter(({ name: x }) => !y.includes(x)).slice(0, m).forEach((x) => {
        const _ = new FileReader();
        _.onload = () => {
          const V = {
            fileName: x.name,
            contentBase64: _.result.split(",")[1],
            mimeType: x.type,
            preview: URL.createObjectURL(x)
          };
          s.value.push(V);
        }, _.readAsDataURL(x);
      }), r.value && (r.value.value = "");
    }, f = (c) => s.value.splice(c, 1);
    return (c, h) => (F(), ve(M(wr), {
      name: e.name,
      value: s.value
    }, {
      default: de(() => [
        ie("div", zm, [
          vt(ie("input", {
            ref_key: "input",
            ref: r,
            id: "input",
            multiple: l.value,
            name: e.name,
            max: e.maxFiles,
            accept: e.accept,
            type: "file",
            onChange: u
          }, null, 40, Hm), [
            [Ft, !1]
          ]),
          s.value.length ? (F(), se("ul", qm, [
            (F(!0), se(Et, null, pn(s.value, (p, m) => (F(), se("li", {
              key: m,
              class: "x-file-input__preview-item"
            }, [
              ie("img", {
                src: p.preview,
                alt: p.fileName,
                class: "x-file-input__preview-image"
              }, null, 8, Ym),
              me(M(it), {
                type: "button",
                class: "x-file-input__remove-button",
                icon: "close",
                color: "gray",
                "icon-size": "8px",
                size: "xxxs",
                round: "",
                onClick: (y) => f(m)
              }, null, 8, ["onClick"])
            ]))), 128)),
            a.value ? (F(), se("label", Xm, [
              me(M(it), {
                type: "button",
                class: "x-file-input__add-button",
                icon: "plus",
                color: "gray",
                size: "xxxs",
                text: ""
              })
            ])) : pe("", !0)
          ])) : (F(), se("label", Um, Te(e.placeholder), 1))
        ])
      ]),
      _: 1
    }, 8, ["name", "value"]));
  }
}), gv = /* @__PURE__ */ qe(Wm, [["__scopeId", "data-v-730f2c8d"]]), Gm = ["name", "checked", "value", "disabled"], Km = /* @__PURE__ */ $e({
  inheritAttrs: !1,
  __name: "XRadio",
  props: {
    value: {
      type: null,
      default: null
    },
    modelValue: {
      type: null,
      default: null
    },
    name: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "default",
      validator: (e) => ["default", "filled"].includes(e)
    },
    disabled: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = Cn(), r = e, i = t, s = T(() => r.modelValue === r.value), o = T(() => ({
      ...n,
      iconProps: {
        style: {
          fill: "none",
          stroke: "none"
        }
      }
    })), a = () => i("update:modelValue", r.value);
    return (l, u) => (F(), se("label", null, [
      me(M(Ha), ke(o.value, {
        active: s.value,
        disabled: e.disabled,
        variant: e.variant
      }), {
        default: de(() => [
          ce(l.$slots, "default", Mt(Wt({ active: s.value })))
        ]),
        _: 3
      }, 16, ["active", "disabled", "variant"]),
      vt(ie("input", {
        type: "radio",
        name: e.name,
        checked: s.value,
        value: e.value,
        disabled: e.disabled,
        onChange: a
      }, null, 40, Gm), [
        [Ft, !1]
      ])
    ]));
  }
}), Zm = /* @__PURE__ */ $e({
  __name: "XRadioGroup",
  props: {
    name: {
      type: String,
      required: !0
    },
    fields: {
      type: Array
    },
    modelValue: {
      type: [String, Number],
      required: !0
    },
    variant: {
      type: String,
      default: "default",
      validator: (e) => ["default", "filled"].includes(e)
    },
    block: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = T({
      get() {
        return n.modelValue;
      },
      set(o) {
        r("update:modelValue", o);
      }
    }), s = T(() => [
      "x-radio-group",
      { "x-radio-group--block": n.block }
    ]);
    return (o, a) => (F(), se(Et, null, [
      ie("div", {
        class: De(s.value)
      }, [
        (F(!0), se(Et, null, pn(e.fields, (l, u) => (F(), ve(M(Km), {
          modelValue: i.value,
          "onUpdate:modelValue": a[0] || (a[0] = (f) => i.value = f),
          key: u,
          icon: l.icon,
          value: l.value,
          disabled: l.disabled,
          name: e.name,
          block: e.block,
          variant: e.variant,
          "data-test-id": `radiogroup-item-${e.name}-${u}`
        }, {
          default: de(({ active: f }) => [
            ce(o.$slots, "default", ke({ ref_for: !0 }, { item: l, active: f }), () => [
              je(Te(l.label), 1)
            ], !0)
          ]),
          _: 2
        }, 1032, ["modelValue", "icon", "value", "disabled", "name", "block", "variant", "data-test-id"]))), 128))
      ], 2),
      me(M(Ln), {
        modelValue: i.value,
        "onUpdate:modelValue": a[1] || (a[1] = (l) => i.value = l),
        name: e.name,
        "data-test-id": `radiogroup-${e.name}`,
        invisible: ""
      }, null, 8, ["modelValue", "name", "data-test-id"])
    ], 64));
  }
}), yv = /* @__PURE__ */ qe(Zm, [["__scopeId", "data-v-af4446c0"]]);
function Yr(e) {
  return [null, void 0, !1].indexOf(e) !== -1;
}
function Jm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function fu(e) {
  var t = { exports: {} };
  return e(t, t.exports), t.exports;
}
var Da = fu(function(e, t) {
  e.exports = /* @__PURE__ */ function() {
    var n = ["decimals", "thousand", "mark", "prefix", "suffix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];
    function r(m) {
      return m.split("").reverse().join("");
    }
    function i(m, y) {
      return m.substring(0, y.length) === y;
    }
    function s(m, y) {
      return m.slice(-1 * y.length) === y;
    }
    function o(m, y, v) {
      if ((m[y] || m[v]) && m[y] === m[v]) throw new Error(y);
    }
    function a(m) {
      return typeof m == "number" && isFinite(m);
    }
    function l(m, y) {
      return m = m.toString().split("e"), (+((m = (m = Math.round(+(m[0] + "e" + (m[1] ? +m[1] + y : y)))).toString().split("e"))[0] + "e" + (m[1] ? +m[1] - y : -y))).toFixed(y);
    }
    function u(m, y, v, x, _, V, X, I, G, Y, te, D) {
      var K, N, re, fe = D, L = "", E = "";
      return V && (D = V(D)), !!a(D) && (m !== !1 && parseFloat(D.toFixed(m)) === 0 && (D = 0), D < 0 && (K = !0, D = Math.abs(D)), m !== !1 && (D = l(D, m)), (D = D.toString()).indexOf(".") !== -1 ? (re = (N = D.split("."))[0], v && (L = v + N[1])) : re = D, y && (re = r(re).match(/.{1,3}/g), re = r(re.join(r(y)))), K && I && (E += I), x && (E += x), K && G && (E += G), E += re, E += L, _ && (E += _), Y && (E = Y(E, fe)), E);
    }
    function f(m, y, v, x, _, V, X, I, G, Y, te, D) {
      var K, N = "";
      return te && (D = te(D)), !(!D || typeof D != "string") && (I && i(D, I) && (D = D.replace(I, ""), K = !0), x && i(D, x) && (D = D.replace(x, "")), G && i(D, G) && (D = D.replace(G, ""), K = !0), _ && s(D, _) && (D = D.slice(0, -1 * _.length)), y && (D = D.split(y).join("")), v && (D = D.replace(v, ".")), K && (N += "-"), (N = (N += D).replace(/[^0-9\.\-.]/g, "")) !== "" && (N = Number(N), X && (N = X(N)), !!a(N) && N));
    }
    function c(m) {
      var y, v, x, _ = {};
      for (m.suffix === void 0 && (m.suffix = m.postfix), y = 0; y < n.length; y += 1) if ((x = m[v = n[y]]) === void 0) v !== "negative" || _.negativeBefore ? v === "mark" && _.thousand !== "." ? _[v] = "." : _[v] = !1 : _[v] = "-";
      else if (v === "decimals") {
        if (!(x >= 0 && x < 8)) throw new Error(v);
        _[v] = x;
      } else if (v === "encoder" || v === "decoder" || v === "edit" || v === "undo") {
        if (typeof x != "function") throw new Error(v);
        _[v] = x;
      } else {
        if (typeof x != "string") throw new Error(v);
        _[v] = x;
      }
      return o(_, "mark", "thousand"), o(_, "prefix", "negative"), o(_, "prefix", "negativeBefore"), _;
    }
    function h(m, y, v) {
      var x, _ = [];
      for (x = 0; x < n.length; x += 1) _.push(m[n[x]]);
      return _.push(v), y.apply("", _);
    }
    function p(m) {
      if (!(this instanceof p)) return new p(m);
      typeof m == "object" && (m = c(m), this.to = function(y) {
        return h(m, u, y);
      }, this.from = function(y) {
        return h(m, f, y);
      });
    }
    return p;
  }();
}), Qm = Jm(fu(function(e, t) {
  (function(n) {
    function r(S) {
      return i(S) && typeof S.from == "function";
    }
    function i(S) {
      return typeof S == "object" && typeof S.to == "function";
    }
    function s(S) {
      S.parentElement.removeChild(S);
    }
    function o(S) {
      return S != null;
    }
    function a(S) {
      S.preventDefault();
    }
    function l(S) {
      return S.filter(function(d) {
        return !this[d] && (this[d] = !0);
      }, {});
    }
    function u(S, d) {
      return Math.round(S / d) * d;
    }
    function f(S, d) {
      var g = S.getBoundingClientRect(), b = S.ownerDocument, $ = b.documentElement, P = V(b);
      return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (P.x = 0), d ? g.top + P.y - $.clientTop : g.left + P.x - $.clientLeft;
    }
    function c(S) {
      return typeof S == "number" && !isNaN(S) && isFinite(S);
    }
    function h(S, d, g) {
      g > 0 && (v(S, d), setTimeout(function() {
        x(S, d);
      }, g));
    }
    function p(S) {
      return Math.max(Math.min(S, 100), 0);
    }
    function m(S) {
      return Array.isArray(S) ? S : [S];
    }
    function y(S) {
      var d = (S = String(S)).split(".");
      return d.length > 1 ? d[1].length : 0;
    }
    function v(S, d) {
      S.classList && !/\s/.test(d) ? S.classList.add(d) : S.className += " " + d;
    }
    function x(S, d) {
      S.classList && !/\s/.test(d) ? S.classList.remove(d) : S.className = S.className.replace(new RegExp("(^|\\b)" + d.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
    function _(S, d) {
      return S.classList ? S.classList.contains(d) : new RegExp("\\b" + d + "\\b").test(S.className);
    }
    function V(S) {
      var d = window.pageXOffset !== void 0, g = (S.compatMode || "") === "CSS1Compat";
      return { x: d ? window.pageXOffset : g ? S.documentElement.scrollLeft : S.body.scrollLeft, y: d ? window.pageYOffset : g ? S.documentElement.scrollTop : S.body.scrollTop };
    }
    function X() {
      return window.navigator.pointerEnabled ? { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" } : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" };
    }
    function I() {
      var S = !1;
      try {
        var d = Object.defineProperty({}, "passive", { get: function() {
          S = !0;
        } });
        window.addEventListener("test", null, d);
      } catch {
      }
      return S;
    }
    function G() {
      return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    function Y(S, d) {
      return 100 / (d - S);
    }
    function te(S, d, g) {
      return 100 * d / (S[g + 1] - S[g]);
    }
    function D(S, d) {
      return te(S, S[0] < 0 ? d + Math.abs(S[0]) : d - S[0], 0);
    }
    function K(S, d) {
      return d * (S[1] - S[0]) / 100 + S[0];
    }
    function N(S, d) {
      for (var g = 1; S >= d[g]; ) g += 1;
      return g;
    }
    function re(S, d, g) {
      if (g >= S.slice(-1)[0]) return 100;
      var b = N(g, S), $ = S[b - 1], P = S[b], Z = d[b - 1], ae = d[b];
      return Z + D([$, P], g) / Y(Z, ae);
    }
    function fe(S, d, g) {
      if (g >= 100) return S.slice(-1)[0];
      var b = N(g, d), $ = S[b - 1], P = S[b], Z = d[b - 1];
      return K([$, P], (g - Z) * Y(Z, d[b]));
    }
    function L(S, d, g, b) {
      if (b === 100) return b;
      var $ = N(b, S), P = S[$ - 1], Z = S[$];
      return g ? b - P > (Z - P) / 2 ? Z : P : d[$ - 1] ? S[$ - 1] + u(b - S[$ - 1], d[$ - 1]) : b;
    }
    var E, A;
    n.PipsMode = void 0, (A = n.PipsMode || (n.PipsMode = {})).Range = "range", A.Steps = "steps", A.Positions = "positions", A.Count = "count", A.Values = "values", n.PipsType = void 0, (E = n.PipsType || (n.PipsType = {}))[E.None = -1] = "None", E[E.NoValue = 0] = "NoValue", E[E.LargeValue = 1] = "LargeValue", E[E.SmallValue = 2] = "SmallValue";
    var j = function() {
      function S(d, g, b) {
        var $;
        this.xPct = [], this.xVal = [], this.xSteps = [], this.xNumSteps = [], this.xHighestCompleteStep = [], this.xSteps = [b || !1], this.xNumSteps = [!1], this.snap = g;
        var P = [];
        for (Object.keys(d).forEach(function(Z) {
          P.push([m(d[Z]), Z]);
        }), P.sort(function(Z, ae) {
          return Z[0][0] - ae[0][0];
        }), $ = 0; $ < P.length; $++) this.handleEntryPoint(P[$][1], P[$][0]);
        for (this.xNumSteps = this.xSteps.slice(0), $ = 0; $ < this.xNumSteps.length; $++) this.handleStepPoint($, this.xNumSteps[$]);
      }
      return S.prototype.getDistance = function(d) {
        for (var g = [], b = 0; b < this.xNumSteps.length - 1; b++) g[b] = te(this.xVal, d, b);
        return g;
      }, S.prototype.getAbsoluteDistance = function(d, g, b) {
        var $, P = 0;
        if (d < this.xPct[this.xPct.length - 1]) for (; d > this.xPct[P + 1]; ) P++;
        else d === this.xPct[this.xPct.length - 1] && (P = this.xPct.length - 2);
        b || d !== this.xPct[P + 1] || P++, g === null && (g = []);
        var Z = 1, ae = g[P], ee = 0, Oe = 0, xe = 0, ue = 0;
        for ($ = b ? (d - this.xPct[P]) / (this.xPct[P + 1] - this.xPct[P]) : (this.xPct[P + 1] - d) / (this.xPct[P + 1] - this.xPct[P]); ae > 0; ) ee = this.xPct[P + 1 + ue] - this.xPct[P + ue], g[P + ue] * Z + 100 - 100 * $ > 100 ? (Oe = ee * $, Z = (ae - 100 * $) / g[P + ue], $ = 1) : (Oe = g[P + ue] * ee / 100 * Z, Z = 0), b ? (xe -= Oe, this.xPct.length + ue >= 1 && ue--) : (xe += Oe, this.xPct.length - ue >= 1 && ue++), ae = g[P + ue] * Z;
        return d + xe;
      }, S.prototype.toStepping = function(d) {
        return d = re(this.xVal, this.xPct, d);
      }, S.prototype.fromStepping = function(d) {
        return fe(this.xVal, this.xPct, d);
      }, S.prototype.getStep = function(d) {
        return d = L(this.xPct, this.xSteps, this.snap, d);
      }, S.prototype.getDefaultStep = function(d, g, b) {
        var $ = N(d, this.xPct);
        return (d === 100 || g && d === this.xPct[$ - 1]) && ($ = Math.max($ - 1, 1)), (this.xVal[$] - this.xVal[$ - 1]) / b;
      }, S.prototype.getNearbySteps = function(d) {
        var g = N(d, this.xPct);
        return { stepBefore: { startValue: this.xVal[g - 2], step: this.xNumSteps[g - 2], highestStep: this.xHighestCompleteStep[g - 2] }, thisStep: { startValue: this.xVal[g - 1], step: this.xNumSteps[g - 1], highestStep: this.xHighestCompleteStep[g - 1] }, stepAfter: { startValue: this.xVal[g], step: this.xNumSteps[g], highestStep: this.xHighestCompleteStep[g] } };
      }, S.prototype.countStepDecimals = function() {
        var d = this.xNumSteps.map(y);
        return Math.max.apply(null, d);
      }, S.prototype.hasNoSize = function() {
        return this.xVal[0] === this.xVal[this.xVal.length - 1];
      }, S.prototype.convert = function(d) {
        return this.getStep(this.toStepping(d));
      }, S.prototype.handleEntryPoint = function(d, g) {
        var b;
        if (!c(b = d === "min" ? 0 : d === "max" ? 100 : parseFloat(d)) || !c(g[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
        this.xPct.push(b), this.xVal.push(g[0]);
        var $ = Number(g[1]);
        b ? this.xSteps.push(!isNaN($) && $) : isNaN($) || (this.xSteps[0] = $), this.xHighestCompleteStep.push(0);
      }, S.prototype.handleStepPoint = function(d, g) {
        if (g) if (this.xVal[d] !== this.xVal[d + 1]) {
          this.xSteps[d] = te([this.xVal[d], this.xVal[d + 1]], g, 0) / Y(this.xPct[d], this.xPct[d + 1]);
          var b = (this.xVal[d + 1] - this.xVal[d]) / this.xNumSteps[d], $ = Math.ceil(Number(b.toFixed(3)) - 1), P = this.xVal[d] + this.xNumSteps[d] * $;
          this.xHighestCompleteStep[d] = P;
        } else this.xSteps[d] = this.xHighestCompleteStep[d] = this.xVal[d];
      }, S;
    }(), R = { to: function(S) {
      return S === void 0 ? "" : S.toFixed(2);
    }, from: Number }, U = { target: "target", base: "base", origin: "origin", handle: "handle", handleLower: "handle-lower", handleUpper: "handle-upper", touchArea: "touch-area", horizontal: "horizontal", vertical: "vertical", background: "background", connect: "connect", connects: "connects", ltr: "ltr", rtl: "rtl", textDirectionLtr: "txt-dir-ltr", textDirectionRtl: "txt-dir-rtl", draggable: "draggable", drag: "state-drag", tap: "state-tap", active: "active", tooltip: "tooltip", pips: "pips", pipsHorizontal: "pips-horizontal", pipsVertical: "pips-vertical", marker: "marker", markerHorizontal: "marker-horizontal", markerVertical: "marker-vertical", markerNormal: "marker-normal", markerLarge: "marker-large", markerSub: "marker-sub", value: "value", valueHorizontal: "value-horizontal", valueVertical: "value-vertical", valueNormal: "value-normal", valueLarge: "value-large", valueSub: "value-sub" }, W = { tooltips: ".__tooltips", aria: ".__aria" };
    function le(S, d) {
      if (!c(d)) throw new Error("noUiSlider: 'step' is not numeric.");
      S.singleStep = d;
    }
    function ye(S, d) {
      if (!c(d)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
      S.keyboardPageMultiplier = d;
    }
    function q(S, d) {
      if (!c(d)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
      S.keyboardMultiplier = d;
    }
    function Q(S, d) {
      if (!c(d)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
      S.keyboardDefaultStep = d;
    }
    function he(S, d) {
      if (typeof d != "object" || Array.isArray(d)) throw new Error("noUiSlider: 'range' is not an object.");
      if (d.min === void 0 || d.max === void 0) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
      S.spectrum = new j(d, S.snap || !1, S.singleStep);
    }
    function C(S, d) {
      if (d = m(d), !Array.isArray(d) || !d.length) throw new Error("noUiSlider: 'start' option is incorrect.");
      S.handles = d.length, S.start = d;
    }
    function B(S, d) {
      if (typeof d != "boolean") throw new Error("noUiSlider: 'snap' option must be a boolean.");
      S.snap = d;
    }
    function we(S, d) {
      if (typeof d != "boolean") throw new Error("noUiSlider: 'animate' option must be a boolean.");
      S.animate = d;
    }
    function ge(S, d) {
      if (typeof d != "number") throw new Error("noUiSlider: 'animationDuration' option must be a number.");
      S.animationDuration = d;
    }
    function Ve(S, d) {
      var g, b = [!1];
      if (d === "lower" ? d = [!0, !1] : d === "upper" && (d = [!1, !0]), d === !0 || d === !1) {
        for (g = 1; g < S.handles; g++) b.push(d);
        b.push(!1);
      } else {
        if (!Array.isArray(d) || !d.length || d.length !== S.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        b = d;
      }
      S.connect = b;
    }
    function Fe(S, d) {
      switch (d) {
        case "horizontal":
          S.ort = 0;
          break;
        case "vertical":
          S.ort = 1;
          break;
        default:
          throw new Error("noUiSlider: 'orientation' option is invalid.");
      }
    }
    function Le(S, d) {
      if (!c(d)) throw new Error("noUiSlider: 'margin' option must be numeric.");
      d !== 0 && (S.margin = S.spectrum.getDistance(d));
    }
    function yt(S, d) {
      if (!c(d)) throw new Error("noUiSlider: 'limit' option must be numeric.");
      if (S.limit = S.spectrum.getDistance(d), !S.limit || S.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
    function Kt(S, d) {
      var g;
      if (!c(d) && !Array.isArray(d)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
      if (Array.isArray(d) && d.length !== 2 && !c(d[0]) && !c(d[1])) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
      if (d !== 0) {
        for (Array.isArray(d) || (d = [d, d]), S.padding = [S.spectrum.getDistance(d[0]), S.spectrum.getDistance(d[1])], g = 0; g < S.spectrum.xNumSteps.length - 1; g++) if (S.padding[0][g] < 0 || S.padding[1][g] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
        var b = d[0] + d[1], $ = S.spectrum.xVal[0];
        if (b / (S.spectrum.xVal[S.spectrum.xVal.length - 1] - $) > 1) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
      }
    }
    function Zt(S, d) {
      switch (d) {
        case "ltr":
          S.dir = 0;
          break;
        case "rtl":
          S.dir = 1;
          break;
        default:
          throw new Error("noUiSlider: 'direction' option was not recognized.");
      }
    }
    function Ht(S, d) {
      if (typeof d != "string") throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
      var g = d.indexOf("tap") >= 0, b = d.indexOf("drag") >= 0, $ = d.indexOf("fixed") >= 0, P = d.indexOf("snap") >= 0, Z = d.indexOf("hover") >= 0, ae = d.indexOf("unconstrained") >= 0, ee = d.indexOf("drag-all") >= 0, Oe = d.indexOf("smooth-steps") >= 0;
      if ($) {
        if (S.handles !== 2) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
        Le(S, S.start[1] - S.start[0]);
      }
      if (ae && (S.margin || S.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
      S.events = { tap: g || P, drag: b, dragAll: ee, smoothSteps: Oe, fixed: $, snap: P, hover: Z, unconstrained: ae };
    }
    function Jt(S, d) {
      if (d !== !1) if (d === !0 || i(d)) {
        S.tooltips = [];
        for (var g = 0; g < S.handles; g++) S.tooltips.push(d);
      } else {
        if ((d = m(d)).length !== S.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
        d.forEach(function(b) {
          if (typeof b != "boolean" && !i(b)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
        }), S.tooltips = d;
      }
    }
    function Ut(S, d) {
      if (d.length !== S.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
      S.handleAttributes = d;
    }
    function bt(S, d) {
      if (!i(d)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
      S.ariaFormat = d;
    }
    function Ct(S, d) {
      if (!r(d)) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
      S.format = d;
    }
    function xr(S, d) {
      if (typeof d != "boolean") throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
      S.keyboardSupport = d;
    }
    function Ei(S, d) {
      S.documentElement = d;
    }
    function Yn(S, d) {
      if (typeof d != "string" && d !== !1) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
      S.cssPrefix = d;
    }
    function Sr(S, d) {
      if (typeof d != "object") throw new Error("noUiSlider: 'cssClasses' must be an object.");
      typeof S.cssPrefix == "string" ? (S.cssClasses = {}, Object.keys(d).forEach(function(g) {
        S.cssClasses[g] = S.cssPrefix + d[g];
      })) : S.cssClasses = d;
    }
    function $r(S) {
      var d = { margin: null, limit: null, padding: null, animate: !0, animationDuration: 300, ariaFormat: R, format: R }, g = { step: { r: !1, t: le }, keyboardPageMultiplier: { r: !1, t: ye }, keyboardMultiplier: { r: !1, t: q }, keyboardDefaultStep: { r: !1, t: Q }, start: { r: !0, t: C }, connect: { r: !0, t: Ve }, direction: { r: !0, t: Zt }, snap: { r: !1, t: B }, animate: { r: !1, t: we }, animationDuration: { r: !1, t: ge }, range: { r: !0, t: he }, orientation: { r: !1, t: Fe }, margin: { r: !1, t: Le }, limit: { r: !1, t: yt }, padding: { r: !1, t: Kt }, behaviour: { r: !0, t: Ht }, ariaFormat: { r: !1, t: bt }, format: { r: !1, t: Ct }, tooltips: { r: !1, t: Jt }, keyboardSupport: { r: !0, t: xr }, documentElement: { r: !1, t: Ei }, cssPrefix: { r: !0, t: Yn }, cssClasses: { r: !0, t: Sr }, handleAttributes: { r: !1, t: Ut } }, b = { connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal", keyboardSupport: !0, cssPrefix: "noUi-", cssClasses: U, keyboardPageMultiplier: 5, keyboardMultiplier: 1, keyboardDefaultStep: 10 };
      S.format && !S.ariaFormat && (S.ariaFormat = S.format), Object.keys(g).forEach(function(ee) {
        if (o(S[ee]) || b[ee] !== void 0) g[ee].t(d, o(S[ee]) ? S[ee] : b[ee]);
        else if (g[ee].r) throw new Error("noUiSlider: '" + ee + "' is required.");
      }), d.pips = S.pips;
      var $ = document.createElement("div"), P = $.style.msTransform !== void 0, Z = $.style.transform !== void 0;
      d.transformRule = Z ? "transform" : P ? "msTransform" : "webkitTransform";
      var ae = [["left", "top"], ["right", "bottom"]];
      return d.style = ae[d.dir][d.ort], d;
    }
    function Xn(S, d, g) {
      var b, $, P, Z, ae, ee = X(), Oe = G() && I(), xe = S, ue = d.spectrum, _e = [], Se = [], Pe = [], Qe = 0, tt = {}, Tt = S.ownerDocument, Qt = d.documentElement || Tt.documentElement, en = Tt.body, Wn = Tt.dir === "rtl" || d.ort === 1 ? 0 : 100;
      function qt(w, k) {
        var O = Tt.createElement("div");
        return k && v(O, k), w.appendChild(O), O;
      }
      function pu(w, k) {
        var O = qt(w, d.cssClasses.origin), z = qt(O, d.cssClasses.handle);
        if (qt(z, d.cssClasses.touchArea), z.setAttribute("data-handle", String(k)), d.keyboardSupport && (z.setAttribute("tabindex", "0"), z.addEventListener("keydown", function(J) {
          return Eu(J, k);
        })), d.handleAttributes !== void 0) {
          var ne = d.handleAttributes[k];
          Object.keys(ne).forEach(function(J) {
            z.setAttribute(J, ne[J]);
          });
        }
        return z.setAttribute("role", "slider"), z.setAttribute("aria-orientation", d.ort ? "vertical" : "horizontal"), k === 0 ? v(z, d.cssClasses.handleLower) : k === d.handles - 1 && v(z, d.cssClasses.handleUpper), O;
      }
      function no(w, k) {
        return !!k && qt(w, d.cssClasses.connect);
      }
      function hu(w, k) {
        var O = qt(k, d.cssClasses.connects);
        $ = [], (P = []).push(no(O, w[0]));
        for (var z = 0; z < d.handles; z++) $.push(pu(k, z)), Pe[z] = z, P.push(no(O, w[z + 1]));
      }
      function mu(w) {
        return v(w, d.cssClasses.target), d.dir === 0 ? v(w, d.cssClasses.ltr) : v(w, d.cssClasses.rtl), d.ort === 0 ? v(w, d.cssClasses.horizontal) : v(w, d.cssClasses.vertical), v(w, getComputedStyle(w).direction === "rtl" ? d.cssClasses.textDirectionRtl : d.cssClasses.textDirectionLtr), qt(w, d.cssClasses.base);
      }
      function vu(w, k) {
        return !(!d.tooltips || !d.tooltips[k]) && qt(w.firstChild, d.cssClasses.tooltip);
      }
      function ro() {
        return xe.hasAttribute("disabled");
      }
      function Ai(w) {
        return $[w].hasAttribute("disabled");
      }
      function Ci() {
        ae && (Gn("update" + W.tooltips), ae.forEach(function(w) {
          w && s(w);
        }), ae = null);
      }
      function io() {
        Ci(), ae = $.map(vu), Fi("update" + W.tooltips, function(w, k, O) {
          if (ae && d.tooltips && ae[k] !== !1) {
            var z = w[k];
            d.tooltips[k] !== !0 && (z = d.tooltips[k].to(O[k])), ae[k].innerHTML = z;
          }
        });
      }
      function gu() {
        Gn("update" + W.aria), Fi("update" + W.aria, function(w, k, O, z, ne) {
          Pe.forEach(function(J) {
            var be = $[J], oe = _r(Se, J, 0, !0, !0, !0), Xe = _r(Se, J, 100, !0, !0, !0), He = ne[J], Me = String(d.ariaFormat.to(O[J]));
            oe = ue.fromStepping(oe).toFixed(1), Xe = ue.fromStepping(Xe).toFixed(1), He = ue.fromStepping(He).toFixed(1), be.children[0].setAttribute("aria-valuemin", oe), be.children[0].setAttribute("aria-valuemax", Xe), be.children[0].setAttribute("aria-valuenow", He), be.children[0].setAttribute("aria-valuetext", Me);
          });
        });
      }
      function yu(w) {
        if (w.mode === n.PipsMode.Range || w.mode === n.PipsMode.Steps) return ue.xVal;
        if (w.mode === n.PipsMode.Count) {
          if (w.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
          for (var k = w.values - 1, O = 100 / k, z = []; k--; ) z[k] = k * O;
          return z.push(100), so(z, w.stepped);
        }
        return w.mode === n.PipsMode.Positions ? so(w.values, w.stepped) : w.mode === n.PipsMode.Values ? w.stepped ? w.values.map(function(ne) {
          return ue.fromStepping(ue.getStep(ue.toStepping(ne)));
        }) : w.values : [];
      }
      function so(w, k) {
        return w.map(function(O) {
          return ue.fromStepping(k ? ue.getStep(O) : O);
        });
      }
      function bu(w) {
        function k(He, Me) {
          return Number((He + Me).toFixed(7));
        }
        var O = yu(w), z = {}, ne = ue.xVal[0], J = ue.xVal[ue.xVal.length - 1], be = !1, oe = !1, Xe = 0;
        return (O = l(O.slice().sort(function(He, Me) {
          return He - Me;
        })))[0] !== ne && (O.unshift(ne), be = !0), O[O.length - 1] !== J && (O.push(J), oe = !0), O.forEach(function(He, Me) {
          var Be, Ne, Ze, nt, Ge, mo, ji, vo, go, yo, Li = He, Nn = O[Me + 1], bo = w.mode === n.PipsMode.Steps;
          for (bo && (Be = ue.xNumSteps[Me]), Be || (Be = Nn - Li), Nn === void 0 && (Nn = Li), Be = Math.max(Be, 1e-7), Ne = Li; Ne <= Nn; Ne = k(Ne, Be)) {
            for (vo = (Ge = (nt = ue.toStepping(Ne)) - Xe) / (w.density || 1), yo = Ge / (go = Math.round(vo)), Ze = 1; Ze <= go; Ze += 1) z[(mo = Xe + Ze * yo).toFixed(5)] = [ue.fromStepping(mo), 0];
            ji = O.indexOf(Ne) > -1 ? n.PipsType.LargeValue : bo ? n.PipsType.SmallValue : n.PipsType.NoValue, !Me && be && Ne !== Nn && (ji = 0), Ne === Nn && oe || (z[nt.toFixed(5)] = [Ne, ji]), Xe = nt;
          }
        }), z;
      }
      function wu(w, k, O) {
        var z, ne, J = Tt.createElement("div"), be = ((z = {})[n.PipsType.None] = "", z[n.PipsType.NoValue] = d.cssClasses.valueNormal, z[n.PipsType.LargeValue] = d.cssClasses.valueLarge, z[n.PipsType.SmallValue] = d.cssClasses.valueSub, z), oe = ((ne = {})[n.PipsType.None] = "", ne[n.PipsType.NoValue] = d.cssClasses.markerNormal, ne[n.PipsType.LargeValue] = d.cssClasses.markerLarge, ne[n.PipsType.SmallValue] = d.cssClasses.markerSub, ne), Xe = [d.cssClasses.valueHorizontal, d.cssClasses.valueVertical], He = [d.cssClasses.markerHorizontal, d.cssClasses.markerVertical];
        function Me(Ne, Ze) {
          var nt = Ze === d.cssClasses.value, Ge = nt ? be : oe;
          return Ze + " " + (nt ? Xe : He)[d.ort] + " " + Ge[Ne];
        }
        function Be(Ne, Ze, nt) {
          if ((nt = k ? k(Ze, nt) : nt) !== n.PipsType.None) {
            var Ge = qt(J, !1);
            Ge.className = Me(nt, d.cssClasses.marker), Ge.style[d.style] = Ne + "%", nt > n.PipsType.NoValue && ((Ge = qt(J, !1)).className = Me(nt, d.cssClasses.value), Ge.setAttribute("data-value", String(Ze)), Ge.style[d.style] = Ne + "%", Ge.innerHTML = String(O.to(Ze)));
          }
        }
        return v(J, d.cssClasses.pips), v(J, d.ort === 0 ? d.cssClasses.pipsHorizontal : d.cssClasses.pipsVertical), Object.keys(w).forEach(function(Ne) {
          Be(Ne, w[Ne][0], w[Ne][1]);
        }), J;
      }
      function Ti() {
        Z && (s(Z), Z = null);
      }
      function Pi(w) {
        Ti();
        var k = bu(w), O = w.filter, z = w.format || { to: function(ne) {
          return String(Math.round(ne));
        } };
        return Z = xe.appendChild(wu(k, O, z));
      }
      function oo() {
        var w = b.getBoundingClientRect(), k = "offset" + ["Width", "Height"][d.ort];
        return d.ort === 0 ? w.width || b[k] : w.height || b[k];
      }
      function vn(w, k, O, z) {
        var ne = function(be) {
          var oe = xu(be, z.pageOffset, z.target || k);
          return !!oe && !(ro() && !z.doNotReject) && !(_(xe, d.cssClasses.tap) && !z.doNotReject) && !(w === ee.start && oe.buttons !== void 0 && oe.buttons > 1) && (!z.hover || !oe.buttons) && (Oe || oe.preventDefault(), oe.calcPoint = oe.points[d.ort], void O(oe, z));
        }, J = [];
        return w.split(" ").forEach(function(be) {
          k.addEventListener(be, ne, !!Oe && { passive: !0 }), J.push([be, ne]);
        }), J;
      }
      function xu(w, k, O) {
        var z = w.type.indexOf("touch") === 0, ne = w.type.indexOf("mouse") === 0, J = w.type.indexOf("pointer") === 0, be = 0, oe = 0;
        if (w.type.indexOf("MSPointer") === 0 && (J = !0), w.type === "mousedown" && !w.buttons && !w.touches) return !1;
        if (z) {
          var Xe = function(Be) {
            var Ne = Be.target;
            return Ne === O || O.contains(Ne) || w.composed && w.composedPath().shift() === O;
          };
          if (w.type === "touchstart") {
            var He = Array.prototype.filter.call(w.touches, Xe);
            if (He.length > 1) return !1;
            be = He[0].pageX, oe = He[0].pageY;
          } else {
            var Me = Array.prototype.find.call(w.changedTouches, Xe);
            if (!Me) return !1;
            be = Me.pageX, oe = Me.pageY;
          }
        }
        return k = k || V(Tt), (ne || J) && (be = w.clientX + k.x, oe = w.clientY + k.y), w.pageOffset = k, w.points = [be, oe], w.cursor = ne || J, w;
      }
      function ao(w) {
        var k = 100 * (w - f(b, d.ort)) / oo();
        return k = p(k), d.dir ? 100 - k : k;
      }
      function Su(w) {
        var k = 100, O = !1;
        return $.forEach(function(z, ne) {
          if (!Ai(ne)) {
            var J = Se[ne], be = Math.abs(J - w);
            (be < k || be <= k && w > J || be === 100 && k === 100) && (O = ne, k = be);
          }
        }), O;
      }
      function $u(w, k) {
        w.type === "mouseout" && w.target.nodeName === "HTML" && w.relatedTarget === null && Ni(w, k);
      }
      function ku(w, k) {
        if (navigator.appVersion.indexOf("MSIE 9") === -1 && w.buttons === 0 && k.buttonsProperty !== 0) return Ni(w, k);
        var O = (d.dir ? -1 : 1) * (w.calcPoint - k.startCalcPoint);
        lo(O > 0, 100 * O / k.baseSize, k.locations, k.handleNumbers, k.connect);
      }
      function Ni(w, k) {
        k.handle && (x(k.handle, d.cssClasses.active), Qe -= 1), k.listeners.forEach(function(O) {
          Qt.removeEventListener(O[0], O[1]);
        }), Qe === 0 && (x(xe, d.cssClasses.drag), Ii(), w.cursor && (en.style.cursor = "", en.removeEventListener("selectstart", a))), d.events.smoothSteps && (k.handleNumbers.forEach(function(O) {
          gn(O, Se[O], !0, !0, !1, !1);
        }), k.handleNumbers.forEach(function(O) {
          Ye("update", O);
        })), k.handleNumbers.forEach(function(O) {
          Ye("change", O), Ye("set", O), Ye("end", O);
        });
      }
      function Di(w, k) {
        if (!k.handleNumbers.some(Ai)) {
          var O;
          k.handleNumbers.length === 1 && (O = $[k.handleNumbers[0]].children[0], Qe += 1, v(O, d.cssClasses.active)), w.stopPropagation();
          var z = [], ne = vn(ee.move, Qt, ku, { target: w.target, handle: O, connect: k.connect, listeners: z, startCalcPoint: w.calcPoint, baseSize: oo(), pageOffset: w.pageOffset, handleNumbers: k.handleNumbers, buttonsProperty: w.buttons, locations: Se.slice() }), J = vn(ee.end, Qt, Ni, { target: w.target, handle: O, listeners: z, doNotReject: !0, handleNumbers: k.handleNumbers }), be = vn("mouseout", Qt, $u, { target: w.target, handle: O, listeners: z, doNotReject: !0, handleNumbers: k.handleNumbers });
          z.push.apply(z, ne.concat(J, be)), w.cursor && (en.style.cursor = getComputedStyle(w.target).cursor, $.length > 1 && v(xe, d.cssClasses.drag), en.addEventListener("selectstart", a, !1)), k.handleNumbers.forEach(function(oe) {
            Ye("start", oe);
          });
        }
      }
      function _u(w) {
        w.stopPropagation();
        var k = ao(w.calcPoint), O = Su(k);
        O !== !1 && (d.events.snap || h(xe, d.cssClasses.tap, d.animationDuration), gn(O, k, !0, !0), Ii(), Ye("slide", O, !0), Ye("update", O, !0), d.events.snap ? Di(w, { handleNumbers: [O] }) : (Ye("change", O, !0), Ye("set", O, !0)));
      }
      function Ou(w) {
        var k = ao(w.calcPoint), O = ue.getStep(k), z = ue.fromStepping(O);
        Object.keys(tt).forEach(function(ne) {
          ne.split(".")[0] === "hover" && tt[ne].forEach(function(J) {
            J.call(Er, z);
          });
        });
      }
      function Eu(w, k) {
        if (ro() || Ai(k)) return !1;
        var O = ["Left", "Right"], z = ["Down", "Up"], ne = ["PageDown", "PageUp"], J = ["Home", "End"];
        d.dir && !d.ort ? O.reverse() : d.ort && !d.dir && (z.reverse(), ne.reverse());
        var be, oe = w.key.replace("Arrow", ""), Xe = oe === ne[0], He = oe === ne[1], Me = oe === z[0] || oe === O[0] || Xe, Be = oe === z[1] || oe === O[1] || He, Ne = oe === J[0], Ze = oe === J[1];
        if (!(Me || Be || Ne || Ze)) return !0;
        if (w.preventDefault(), Be || Me) {
          var nt = Me ? 0 : 1, Ge = ho(k)[nt];
          if (Ge === null) return !1;
          Ge === !1 && (Ge = ue.getDefaultStep(Se[k], Me, d.keyboardDefaultStep)), Ge *= He || Xe ? d.keyboardPageMultiplier : d.keyboardMultiplier, Ge = Math.max(Ge, 1e-7), Ge *= Me ? -1 : 1, be = _e[k] + Ge;
        } else be = Ze ? d.spectrum.xVal[d.spectrum.xVal.length - 1] : d.spectrum.xVal[0];
        return gn(k, ue.toStepping(be), !0, !0), Ye("slide", k), Ye("update", k), Ye("change", k), Ye("set", k), !1;
      }
      function Vu(w) {
        w.fixed || $.forEach(function(k, O) {
          vn(ee.start, k.children[0], Di, { handleNumbers: [O] });
        }), w.tap && vn(ee.start, b, _u, {}), w.hover && vn(ee.move, b, Ou, { hover: !0 }), w.drag && P.forEach(function(k, O) {
          if (k !== !1 && O !== 0 && O !== P.length - 1) {
            var z = $[O - 1], ne = $[O], J = [k], be = [z, ne], oe = [O - 1, O];
            v(k, d.cssClasses.draggable), w.fixed && (J.push(z.children[0]), J.push(ne.children[0])), w.dragAll && (be = $, oe = Pe), J.forEach(function(Xe) {
              vn(ee.start, Xe, Di, { handles: be, handleNumbers: oe, connect: k });
            });
          }
        });
      }
      function Fi(w, k) {
        tt[w] = tt[w] || [], tt[w].push(k), w.split(".")[0] === "update" && $.forEach(function(O, z) {
          Ye("update", z);
        });
      }
      function Au(w) {
        return w === W.aria || w === W.tooltips;
      }
      function Gn(w) {
        var k = w && w.split(".")[0], O = k ? w.substring(k.length) : w;
        Object.keys(tt).forEach(function(z) {
          var ne = z.split(".")[0], J = z.substring(ne.length);
          k && k !== ne || O && O !== J || Au(J) && O !== J || delete tt[z];
        });
      }
      function Ye(w, k, O) {
        Object.keys(tt).forEach(function(z) {
          var ne = z.split(".")[0];
          w === ne && tt[z].forEach(function(J) {
            J.call(Er, _e.map(d.format.to), k, _e.slice(), O || !1, Se.slice(), Er);
          });
        });
      }
      function _r(w, k, O, z, ne, J, be) {
        var oe;
        return $.length > 1 && !d.events.unconstrained && (z && k > 0 && (oe = ue.getAbsoluteDistance(w[k - 1], d.margin, !1), O = Math.max(O, oe)), ne && k < $.length - 1 && (oe = ue.getAbsoluteDistance(w[k + 1], d.margin, !0), O = Math.min(O, oe))), $.length > 1 && d.limit && (z && k > 0 && (oe = ue.getAbsoluteDistance(w[k - 1], d.limit, !1), O = Math.min(O, oe)), ne && k < $.length - 1 && (oe = ue.getAbsoluteDistance(w[k + 1], d.limit, !0), O = Math.max(O, oe))), d.padding && (k === 0 && (oe = ue.getAbsoluteDistance(0, d.padding[0], !1), O = Math.max(O, oe)), k === $.length - 1 && (oe = ue.getAbsoluteDistance(100, d.padding[1], !0), O = Math.min(O, oe))), be || (O = ue.getStep(O)), !((O = p(O)) === w[k] && !J) && O;
      }
      function Mi(w, k) {
        var O = d.ort;
        return (O ? k : w) + ", " + (O ? w : k);
      }
      function lo(w, k, O, z, ne) {
        var J = O.slice(), be = z[0], oe = d.events.smoothSteps, Xe = [!w, w], He = [w, !w];
        z = z.slice(), w && z.reverse(), z.length > 1 ? z.forEach(function(Be, Ne) {
          var Ze = _r(J, Be, J[Be] + k, Xe[Ne], He[Ne], !1, oe);
          Ze === !1 ? k = 0 : (k = Ze - J[Be], J[Be] = Ze);
        }) : Xe = He = [!0];
        var Me = !1;
        z.forEach(function(Be, Ne) {
          Me = gn(Be, O[Be] + k, Xe[Ne], He[Ne], !1, oe) || Me;
        }), Me && (z.forEach(function(Be) {
          Ye("update", Be), Ye("slide", Be);
        }), ne != null && Ye("drag", be));
      }
      function uo(w, k) {
        return d.dir ? 100 - w - k : w;
      }
      function Cu(w, k) {
        Se[w] = k, _e[w] = ue.fromStepping(k);
        var O = "translate(" + Mi(uo(k, 0) - Wn + "%", "0") + ")";
        $[w].style[d.transformRule] = O, co(w), co(w + 1);
      }
      function Ii() {
        Pe.forEach(function(w) {
          var k = Se[w] > 50 ? -1 : 1, O = 3 + ($.length + k * w);
          $[w].style.zIndex = String(O);
        });
      }
      function gn(w, k, O, z, ne, J) {
        return ne || (k = _r(Se, w, k, O, z, !1, J)), k !== !1 && (Cu(w, k), !0);
      }
      function co(w) {
        if (P[w]) {
          var k = 0, O = 100;
          w !== 0 && (k = Se[w - 1]), w !== P.length - 1 && (O = Se[w]);
          var z = O - k, ne = "translate(" + Mi(uo(k, z) + "%", "0") + ")", J = "scale(" + Mi(z / 100, "1") + ")";
          P[w].style[d.transformRule] = ne + " " + J;
        }
      }
      function fo(w, k) {
        return w === null || w === !1 || w === void 0 ? Se[k] : (typeof w == "number" && (w = String(w)), (w = d.format.from(w)) !== !1 && (w = ue.toStepping(w)), w === !1 || isNaN(w) ? Se[k] : w);
      }
      function Or(w, k, O) {
        var z = m(w), ne = Se[0] === void 0;
        k = k === void 0 || k, d.animate && !ne && h(xe, d.cssClasses.tap, d.animationDuration), Pe.forEach(function(oe) {
          gn(oe, fo(z[oe], oe), !0, !1, O);
        });
        var J = Pe.length === 1 ? 0 : 1;
        if (ne && ue.hasNoSize() && (O = !0, Se[0] = 0, Pe.length > 1)) {
          var be = 100 / (Pe.length - 1);
          Pe.forEach(function(oe) {
            Se[oe] = oe * be;
          });
        }
        for (; J < Pe.length; ++J) Pe.forEach(function(oe) {
          gn(oe, Se[oe], !0, !0, O);
        });
        Ii(), Pe.forEach(function(oe) {
          Ye("update", oe), z[oe] !== null && k && Ye("set", oe);
        });
      }
      function Tu(w) {
        Or(d.start, w);
      }
      function Pu(w, k, O, z) {
        if (!((w = Number(w)) >= 0 && w < Pe.length)) throw new Error("noUiSlider: invalid handle number, got: " + w);
        gn(w, fo(k, w), !0, !0, z), Ye("update", w), O && Ye("set", w);
      }
      function po(w) {
        if (w === void 0 && (w = !1), w) return _e.length === 1 ? _e[0] : _e.slice(0);
        var k = _e.map(d.format.to);
        return k.length === 1 ? k[0] : k;
      }
      function Nu() {
        for (Gn(W.aria), Gn(W.tooltips), Object.keys(d.cssClasses).forEach(function(w) {
          x(xe, d.cssClasses[w]);
        }); xe.firstChild; ) xe.removeChild(xe.firstChild);
        delete xe.noUiSlider;
      }
      function ho(w) {
        var k = Se[w], O = ue.getNearbySteps(k), z = _e[w], ne = O.thisStep.step, J = null;
        if (d.snap) return [z - O.stepBefore.startValue || null, O.stepAfter.startValue - z || null];
        ne !== !1 && z + ne > O.stepAfter.startValue && (ne = O.stepAfter.startValue - z), J = z > O.thisStep.startValue ? O.thisStep.step : O.stepBefore.step !== !1 && z - O.stepBefore.highestStep, k === 100 ? ne = null : k === 0 && (J = null);
        var be = ue.countStepDecimals();
        return ne !== null && ne !== !1 && (ne = Number(ne.toFixed(be))), J !== null && J !== !1 && (J = Number(J.toFixed(be))), [J, ne];
      }
      function Du() {
        return Pe.map(ho);
      }
      function Fu(w, k) {
        var O = po(), z = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
        z.forEach(function(J) {
          w[J] !== void 0 && (g[J] = w[J]);
        });
        var ne = $r(g);
        z.forEach(function(J) {
          w[J] !== void 0 && (d[J] = ne[J]);
        }), ue = ne.spectrum, d.margin = ne.margin, d.limit = ne.limit, d.padding = ne.padding, d.pips ? Pi(d.pips) : Ti(), d.tooltips ? io() : Ci(), Se = [], Or(o(w.start) ? w.start : O, k);
      }
      function Mu() {
        b = mu(xe), hu(d.connect, b), Vu(d.events), Or(d.start), d.pips && Pi(d.pips), d.tooltips && io(), gu();
      }
      Mu();
      var Er = { destroy: Nu, steps: Du, on: Fi, off: Gn, get: po, set: Or, setHandle: Pu, reset: Tu, __moveHandles: function(w, k, O) {
        lo(w, k, Se, O);
      }, options: g, updateOptions: Fu, target: xe, removePips: Ti, removeTooltips: Ci, getPositions: function() {
        return Se.slice();
      }, getTooltips: function() {
        return ae;
      }, getOrigins: function() {
        return $;
      }, pips: Pi };
      return Er;
    }
    function kr(S, d) {
      if (!S || !S.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + S);
      if (S.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
      var g = Xn(S, $r(d), d);
      return S.noUiSlider = g, g;
    }
    var Vi = { __spectrum: j, cssClasses: U, create: kr };
    n.create = kr, n.cssClasses = U, n.default = Vi, Object.defineProperty(n, "__esModule", { value: !0 });
  })(t);
}));
function Fa(e, t) {
  if (!Array.isArray(e) || !Array.isArray(t)) return !1;
  const n = t.slice().sort();
  return e.length === t.length && e.slice().sort().every(function(r, i) {
    return r === n[i];
  });
}
var Cs = { name: "Slider", emits: ["input", "update:modelValue", "start", "slide", "drag", "update", "change", "set", "end"], props: { value: { validator: function(e) {
  return (t) => typeof t == "number" || t instanceof Array || t == null || t === !1;
}, required: !1 }, modelValue: { validator: function(e) {
  return (t) => typeof t == "number" || t instanceof Array || t == null || t === !1;
}, required: !1 }, id: { type: [String, Number], required: !1 }, disabled: { type: Boolean, required: !1, default: !1 }, min: { type: Number, required: !1, default: 0 }, max: { type: Number, required: !1, default: 100 }, step: { type: Number, required: !1, default: 1 }, orientation: { type: String, required: !1, default: "horizontal" }, direction: { type: String, required: !1, default: "ltr" }, tooltips: { type: Boolean, required: !1, default: !0 }, options: { type: Object, required: !1, default: () => ({}) }, merge: { type: Number, required: !1, default: -1 }, format: { type: [Object, Function, Boolean], required: !1, default: null }, classes: { type: Object, required: !1, default: () => ({}) }, showTooltip: { type: String, required: !1, default: "always" }, tooltipPosition: { type: String, required: !1, default: null }, lazy: { type: Boolean, required: !1, default: !0 }, ariaLabelledby: { type: String, required: !1, default: void 0 }, aria: { required: !1, type: Object, default: () => ({}) } }, setup(e, t) {
  const n = function(o, a, l) {
    const { value: u, modelValue: f, min: c } = Vr(o);
    let h = f && f.value !== void 0 ? f : u;
    const p = Ue(h.value);
    if (Yr(h.value) && (h = Ue(c.value)), Array.isArray(h.value) && h.value.length == 0) throw new Error("Slider v-model must not be an empty array");
    return { value: h, initialValue: p };
  }(e), r = function(o, a, l) {
    const { classes: u, showTooltip: f, tooltipPosition: c, orientation: h } = Vr(o), p = T(() => ({ target: "slider-target", focused: "slider-focused", tooltipFocus: "slider-tooltip-focus", tooltipDrag: "slider-tooltip-drag", ltr: "slider-ltr", rtl: "slider-rtl", horizontal: "slider-horizontal", vertical: "slider-vertical", textDirectionRtl: "slider-txt-dir-rtl", textDirectionLtr: "slider-txt-dir-ltr", base: "slider-base", connects: "slider-connects", connect: "slider-connect", origin: "slider-origin", handle: "slider-handle", handleLower: "slider-handle-lower", handleUpper: "slider-handle-upper", touchArea: "slider-touch-area", tooltip: "slider-tooltip", tooltipTop: "slider-tooltip-top", tooltipBottom: "slider-tooltip-bottom", tooltipLeft: "slider-tooltip-left", tooltipRight: "slider-tooltip-right", tooltipHidden: "slider-tooltip-hidden", active: "slider-active", draggable: "slider-draggable", tap: "slider-state-tap", drag: "slider-state-drag", pips: "slider-pips", pipsHorizontal: "slider-pips-horizontal", pipsVertical: "slider-pips-vertical", marker: "slider-marker", markerHorizontal: "slider-marker-horizontal", markerVertical: "slider-marker-vertical", markerNormal: "slider-marker-normal", markerLarge: "slider-marker-large", markerSub: "slider-marker-sub", value: "slider-value", valueHorizontal: "slider-value-horizontal", valueVertical: "slider-value-vertical", valueNormal: "slider-value-normal", valueLarge: "slider-value-large", valueSub: "slider-value-sub", ...u.value }));
    return { classList: T(() => {
      const m = { ...p.value };
      return Object.keys(m).forEach((y) => {
        m[y] = Array.isArray(m[y]) ? m[y].filter((v) => v !== null).join(" ") : m[y];
      }), f.value !== "always" && (m.target += ` ${f.value === "drag" ? m.tooltipDrag : m.tooltipFocus}`), h.value === "horizontal" && (m.tooltip += c.value === "bottom" ? ` ${m.tooltipBottom}` : ` ${m.tooltipTop}`), h.value === "vertical" && (m.tooltip += c.value === "right" ? ` ${m.tooltipRight}` : ` ${m.tooltipLeft}`), m;
    }) };
  }(e), i = function(o, a, l) {
    const { format: u, step: f } = Vr(o), c = l.value, h = l.classList, p = T(() => u && u.value ? typeof u.value == "function" ? { to: u.value } : Da({ ...u.value }) : Da({ decimals: f.value >= 0 ? 0 : 2 })), m = T(() => Array.isArray(c.value) ? c.value.map((y) => p.value) : p.value);
    return { tooltipFormat: p, tooltipsFormat: m, tooltipsMerge: (y, v, x) => {
      var _ = getComputedStyle(y).direction === "rtl", V = y.noUiSlider.options.direction === "rtl", X = y.noUiSlider.options.orientation === "vertical", I = y.noUiSlider.getTooltips(), G = y.noUiSlider.getOrigins();
      I.forEach(function(Y, te) {
        Y && G[te].appendChild(Y);
      }), y.noUiSlider.on("update", function(Y, te, D, K, N) {
        var re = [[]], fe = [[]], L = [[]], E = 0;
        I[0] && (re[0][0] = 0, fe[0][0] = N[0], L[0][0] = p.value.to(parseFloat(Y[0])));
        for (var A = 1; A < Y.length; A++) (!I[A] || Y[A] - Y[A - 1] > v) && (re[++E] = [], L[E] = [], fe[E] = []), I[A] && (re[E].push(A), L[E].push(p.value.to(parseFloat(Y[A]))), fe[E].push(N[A]));
        re.forEach(function(j, R) {
          for (var U = j.length, W = 0; W < U; W++) {
            var le = j[W];
            if (W === U - 1) {
              var ye = 0;
              fe[R].forEach(function(C) {
                ye += 1e3 - C;
              });
              var q = X ? "bottom" : "right", Q = V ? 0 : U - 1, he = 1e3 - fe[R][Q];
              ye = (_ && !X ? 100 : 0) + ye / U - he, I[le].innerHTML = L[R].join(x), I[le].style.display = "block", I[le].style[q] = ye + "%", h.value.tooltipHidden.split(" ").forEach((C) => {
                I[le].classList.contains(C) && I[le].classList.remove(C);
              });
            } else I[le].style.display = "none", h.value.tooltipHidden.split(" ").forEach((C) => {
              I[le].classList.add(C);
            });
          }
        });
      });
    } };
  }(e, 0, { value: n.value, classList: r.classList }), s = function(o, a, l) {
    const { orientation: u, direction: f, tooltips: c, step: h, min: p, max: m, merge: y, id: v, disabled: x, options: _, classes: V, format: X, lazy: I, ariaLabelledby: G, aria: Y } = Vr(o), te = l.value, D = l.initialValue, K = l.tooltipsFormat, N = l.tooltipsMerge, re = l.tooltipFormat, fe = l.classList, L = Ue(null), E = Ue(null), A = Ue(!1), j = T(() => {
      let C = { cssPrefix: "", cssClasses: fe.value, orientation: u.value, direction: f.value, tooltips: !!c.value && K.value, connect: "lower", start: Yr(te.value) ? p.value : te.value, range: { min: p.value, max: m.value } };
      if (h.value > 0 && (C.step = h.value), Array.isArray(te.value) && (C.connect = !0), G && G.value || Y && Object.keys(Y.value).length) {
        let B = Array.isArray(te.value) ? te.value : [te.value];
        C.handleAttributes = B.map((we) => Object.assign({}, Y.value, G && G.value ? { "aria-labelledby": G.value } : {}));
      }
      return X.value && (C.ariaFormat = re.value), C;
    }), R = T(() => {
      let C = { id: v && v.value ? v.value : void 0 };
      return x.value && (C.disabled = !0), C;
    }), U = T(() => Array.isArray(te.value)), W = () => {
      let C = E.value.get();
      return Array.isArray(C) ? C.map((B) => parseFloat(B)) : parseFloat(C);
    }, le = function(C) {
      let B = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
      E.value.set(C, B);
    }, ye = (C) => {
      a.emit("input", C), a.emit("update:modelValue", C), a.emit("update", C);
    }, q = () => {
      E.value = Qm.create(L.value, Object.assign({}, j.value, _.value)), c.value && U.value && y.value >= 0 && N(L.value, y.value, " - "), E.value.on("set", () => {
        const C = W();
        a.emit("change", C), a.emit("set", C), I.value && ye(C);
      }), E.value.on("update", () => {
        if (!A.value) return;
        const C = W();
        U.value && Fa(te.value, C) || !U.value && te.value == C ? a.emit("update", C) : I.value || ye(C);
      }), E.value.on("start", () => {
        a.emit("start", W());
      }), E.value.on("end", () => {
        a.emit("end", W());
      }), E.value.on("slide", () => {
        a.emit("slide", W());
      }), E.value.on("drag", () => {
        a.emit("drag", W());
      }), L.value.querySelectorAll("[data-handle]").forEach((C) => {
        C.onblur = () => {
          L.value && fe.value.focused.split(" ").forEach((B) => {
            L.value.classList.remove(B);
          });
        }, C.onfocus = () => {
          fe.value.focused.split(" ").forEach((B) => {
            L.value.classList.add(B);
          });
        };
      }), A.value = !0;
    }, Q = () => {
      E.value.off(), E.value.destroy(), E.value = null;
    }, he = (C, B) => {
      A.value = !1, Q(), q();
    };
    return br(q), Ps(Q), Ie(U, he, { immediate: !1 }), Ie(p, he, { immediate: !1 }), Ie(m, he, { immediate: !1 }), Ie(h, he, { immediate: !1 }), Ie(u, he, { immediate: !1 }), Ie(f, he, { immediate: !1 }), Ie(c, he, { immediate: !1 }), Ie(y, he, { immediate: !1 }), Ie(X, he, { immediate: !1, deep: !0 }), Ie(_, he, { immediate: !1, deep: !0 }), Ie(V, he, { immediate: !1, deep: !0 }), Ie(te, (C, B) => {
      B && (typeof B == "object" && typeof C == "object" && C && Object.keys(B) > Object.keys(C) || typeof B == "object" && typeof C != "object" || Yr(C)) && he();
    }, { immediate: !1 }), Ie(te, (C) => {
      if (Yr(C)) return void le(p.value, !1);
      let B = W();
      U.value && !Array.isArray(B) && (B = [B]), (U.value && !Fa(C, B) || !U.value && C != B) && le(C, !1);
    }, { deep: !0 }), { slider: L, slider$: E, isRange: U, sliderProps: R, init: q, destroy: Q, refresh: he, update: le, reset: () => {
      ye(D.value);
    } };
  }(e, t, { value: n.value, initialValue: n.initialValue, tooltipFormat: i.tooltipFormat, tooltipsFormat: i.tooltipsFormat, tooltipsMerge: i.tooltipsMerge, classList: r.classList });
  return { ...r, ...i, ...s };
} };
Cs.render = function(e, t, n, r, i, s) {
  return F(), se("div", ke(e.sliderProps, { ref: "slider" }), null, 16);
}, Cs.__file = "src/Slider.vue";
const ev = { class: "x-slider-input__prepend" }, tv = /* @__PURE__ */ $e({
  __name: "XSliderInput",
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    prepend: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => ["primary", "secondary"].includes(e)
    },
    readonly: Boolean,
    active: Boolean,
    disabled: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = t, i = Ue(n.modelValue), s = T(() => [
      "x-slider-input",
      `x-slider-input--${n.color}`,
      {
        "x-slider-input--active": n.active,
        "x-slider-input--disabled": n.disabled,
        "x-slider-input--readonly": n.readonly
      }
    ]), o = T(() => ({
      readonly: n.readonly,
      type: "number",
      min: 0,
      max: 9999,
      class: "x-slider-input__field"
    })), a = (l) => {
      const u = l.target;
      r("update:modelValue", Number(u.value));
    };
    return Ra(() => {
      i.value = String(n.modelValue);
    }), (l, u) => (F(), se("div", {
      class: De(s.value)
    }, [
      ie("div", ev, Te(e.prepend) + " ", 1),
      vt(ie("input", ke(o.value, {
        "onUpdate:modelValue": u[0] || (u[0] = (f) => i.value = f),
        onChange: a
      }), null, 16), [
        [Gu, i.value]
      ])
    ], 2));
  }
}), Ma = /* @__PURE__ */ qe(tv, [["__scopeId", "data-v-4f606fff"]]), nv = { class: "x-slider__boundaries" }, bv = /* @__PURE__ */ $e({
  inheritAttrs: !1,
  __name: "XSlider",
  props: {
    name: {
      type: String,
      required: !0
    },
    unit: {
      type: String,
      default: ""
    },
    modelValue: {
      type: [Number, Array],
      required: !0
    },
    size: {
      type: String,
      default: "s",
      validator: (e) => ["xs", "s"].includes(e)
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => ["primary", "secondary"].includes(e)
    },
    prepends: {
      type: Object,
      default: () => ({
        from: "from",
        to: "to"
      })
    },
    readonly: Boolean,
    float: Boolean,
    disabled: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = Cn(), r = e, i = t, s = T(() => [
      "x-slider",
      `x-slider--size-${r.size}`
    ]), o = T({
      get() {
        return Array.isArray(r.modelValue) ? r.modelValue[0] : r.modelValue;
      },
      set(p) {
        return Array.isArray(r.modelValue) ? l.value = [p, r.modelValue[1]] : l.value = p;
      }
    }), a = T({
      get() {
        return Array.isArray(r.modelValue) ? r.modelValue[1] : n.max ? Number(n.max) : 0;
      },
      set(p) {
        return Array.isArray(r.modelValue) && (l.value = [r.modelValue[0], Number(p)]), l.value = p;
      }
    }), l = T({
      get() {
        return r.modelValue;
      },
      set(p) {
        i("update:modelValue", p);
      }
    }), u = T(() => ({
      ...n,
      tooltips: !1,
      lazy: !1,
      disabled: r.disabled,
      class: "x-slider--custom",
      step: r.float ? -1 : 1
    })), f = T(() => Number(n.min) !== H(o)), c = T(
      () => Array.isArray(r.modelValue) ? Number(n.max) !== H(a) : H(o) === H(a)
    ), h = T(() => !Array.isArray(r.modelValue) || r.readonly);
    return (p, m) => (F(), ve(M(wr), {
      name: e.name,
      value: e.modelValue
    }, {
      default: de(({ handleChange: y }) => [
        ie("div", {
          class: De(s.value)
        }, [
          ie("div", nv, [
            me(Ma, {
              modelValue: o.value,
              "onUpdate:modelValue": m[0] || (m[0] = (v) => o.value = v),
              active: f.value,
              readonly: e.readonly,
              color: e.color,
              prepend: e.prepends.from
            }, null, 8, ["modelValue", "active", "readonly", "color", "prepend"]),
            me(Ma, {
              modelValue: a.value,
              "onUpdate:modelValue": m[1] || (m[1] = (v) => a.value = v),
              active: c.value,
              readonly: h.value,
              disabled: e.disabled,
              color: e.color,
              prepend: e.prepends.to
            }, null, 8, ["modelValue", "active", "readonly", "disabled", "color", "prepend"])
          ]),
          me(M(Cs), ke({
            modelValue: l.value,
            "onUpdate:modelValue": m[2] || (m[2] = (v) => l.value = v)
          }, u.value, { onChange: y }), null, 16, ["modelValue", "onChange"])
        ], 2)
      ]),
      _: 1
    }, 8, ["name", "value"]));
  }
}), rv = { class: "x-textarea__container" }, iv = ["value", "onInput", "onBlur"], sv = {
  key: 0,
  class: "x-textarea__placeholder"
}, ov = {
  key: 1,
  class: "x-textarea__append"
}, av = /* @__PURE__ */ $e({
  inheritAttrs: !1,
  __name: "XTextarea",
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      required: !0
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => ["primary", "secondary", "dark"].includes(e)
    },
    size: {
      type: String,
      default: "xs",
      validator: (e) => ["xs", "s"].includes(e)
    },
    rounded: Boolean
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = Cn(), r = e, i = t, s = T(() => r.value || r.modelValue), { class: o = "", ...a } = n, l = T(() => ({
      name: r.name,
      class: [
        "x-textarea__field",
        `x-textarea__field--${r.color}`,
        o
      ],
      ...a
    })), u = T(() => [
      "x-textarea",
      `x-textarea--${r.color}`,
      `x-textarea--${r.size}`,
      { "x-textarea--rounded": r.rounded }
    ]), f = (c, h) => {
      const p = c.target;
      h(c, !0), i("update:modelValue", p.value);
    };
    return (c, h) => (F(), ve(M(wr), {
      name: e.name,
      value: s.value,
      class: De(u.value)
    }, {
      default: de(({ inputValue: p, handleChange: m, handleBlur: y }) => [
        ie("div", rv, [
          ie("textarea", ke(l.value, {
            value: p,
            onInput: (v) => f(v, m),
            onBlur: y
          }), null, 16, iv),
          c.$slots.placeholder && !p ? (F(), se("div", sv, [
            ce(c.$slots, "placeholder", {}, void 0, !0)
          ])) : pe("", !0),
          c.$slots.append ? (F(), se("div", ov, [
            ce(c.$slots, "append", {}, void 0, !0)
          ])) : pe("", !0)
        ])
      ]),
      _: 3
    }, 8, ["name", "value", "class"]));
  }
}), wv = /* @__PURE__ */ qe(av, [["__scopeId", "data-v-7d3a1b09"]]);
export {
  ze as DatepickerUnit,
  yr as SearchMode,
  it as XButton,
  ol as XCheckbox,
  pv as XCheckboxGroup,
  oa as XCol,
  mv as XDatePicker,
  uv as XDialog,
  cv as XDialogPlugin,
  vd as XDivider,
  md as XDropdown,
  cp as XFieldError,
  gv as XFileInput,
  op as XForm,
  Fr as XFormItem,
  Ln as XInput,
  mp as XLabel,
  dv as XList,
  ds as XListItem,
  za as XLoader,
  Ha as XMark,
  Km as XRadio,
  yv as XRadioGroup,
  Tp as XRow,
  gm as XSearch,
  Qh as XSelect,
  bv as XSlider,
  Je as XSvgIcon,
  jo as XTag,
  wv as XTextarea,
  wr as XValidationFormItem,
  hv as useCheckboxGroup,
  vv as useDatepicker,
  uc as useDialog,
  ap as useReactiveArrayModel,
  fv as useReactiveObjectModel,
  Sd as useThrottleEvent
};
