import { defineComponent as $e, useCssVars as Fa, computed as T, ref as He, toValue as H, onMounted as yr, withDirectives as mt, createElementBlock as oe, openBlock as F, createElementVNode as se, vShow as Pt, createBlock as ve, normalizeClass as De, unref as D, resolveDynamicComponent as As, mergeProps as _e, withCtx as de, createCommentVNode as pe, renderSlot as ce, onActivated as Fu, onDeactivated as Mu, onBeforeUnmount as Ma, inject as Ia, createVNode as me, createTextVNode as Le, toDisplayString as Ne, withKeys as bt, Transition as Qr, KeepAlive as Iu, Suspense as ju, shallowRef as Xr, getCurrentInstance as cn, createApp as Lu, h as Qi, pushScopeId as Ru, popScopeId as Bu, nextTick as ht, normalizeProps as Nt, guardReactiveProps as qt, resolveComponent as es, withScopeId as zu, normalizeStyle as bn, Fragment as Wt, useAttrs as Vn, renderList as On, provide as ts, isRef as ei, watch as Ie, onUnmounted as Cs, reactive as kt, toRef as ns, readonly as Hu, watchEffect as ja, warn as Uu, useTemplateRef as ti, useSlots as La, withModifiers as Xe, resolveDirective as qu, createSlots as Xu, toRefs as Er, vModelDynamic as Wu } from "vue";
const Yu = {
  class: "x-svg-icon",
  "aria-hidden": "true"
}, Gu = ["href", "fill"], Ku = "icon", Ze = /* @__PURE__ */ $e({
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
    Fa((l) => ({
      "7ee0a9e5": o.value,
      "436598e8": a.value
    }));
    const t = He(!1), n = e, r = (l) => l.includes("px") ? l : `${l}px`, i = T(() => `#${Ku}-${n.name.toLowerCase()}`), s = T(() => {
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
    return yr(() => t.value = !0), (l, u) => mt((F(), oe("svg", Yu, [
      se("use", {
        href: i.value,
        fill: e.color
      }, null, 8, Gu)
    ], 512)), [
      [Pt, t.value]
    ]);
  }
}), Zu = /* @__PURE__ */ $e({
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
    return (r, i) => e.mini ? (F(), oe("div", {
      key: 0,
      class: De(n.value)
    }, i[0] || (i[0] = [
      se("div", { class: "x-loader__dot" }, null, -1)
    ]), 2)) : (F(), ve(D(Ze), {
      key: 1,
      class: De(n.value),
      name: "loader"
    }, null, 8, ["class"]));
  }
}), We = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
}, Ra = /* @__PURE__ */ We(Zu, [["__scopeId", "data-v-2dc20739"]]), Ju = { class: "x-button__content" }, Qu = { class: "x-button__content-in" }, ec = /* @__PURE__ */ $e({
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
    return (o, a) => (F(), ve(As(n.value), _e({
      class: i.value,
      disabled: e.disabled
    }, r.value), {
      default: de(() => [
        se("div", Ju, [
          e.loading ? (F(), ve(D(Ra), {
            key: 0,
            color: s.value,
            class: "x-button__loader",
            mini: ""
          }, null, 8, ["color"])) : pe("", !0),
          se("div", Qu, [
            e.prepend ? (F(), ve(D(Ze), _e({
              key: 0,
              name: e.prepend,
              size: e.iconSize,
              class: "x-button__prepend"
            }, e.iconProps), null, 16, ["name", "size"])) : pe("", !0),
            e.icon ? (F(), ve(D(Ze), _e({
              key: 1,
              name: e.icon,
              size: e.iconSize,
              class: "x-button__icon"
            }, e.iconProps), null, 16, ["name", "size"])) : ce(o.$slots, "default", { key: 2 }, void 0, !0),
            e.append ? (F(), ve(D(Ze), _e({
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
}), rt = /* @__PURE__ */ We(ec, [["__scopeId", "data-v-b9b9c2e3"]]);
/*!
 * vue-global-events v3.0.1
 * (c) 2019-2023 Eduardo San Martin Morote, Damian Dulisz
 * Released under the MIT License.
 */
let ji;
function tc() {
  return ji ?? (ji = /msie|trident/.test(window.navigator.userAgent.toLowerCase()));
}
const nc = /^on(\w+?)((?:Once|Capture|Passive)*)$/, rc = /[OCP]/g;
function ic(e) {
  return e ? tc() ? e.includes("Capture") : e.replace(rc, ",$&").toLowerCase().slice(1).split(",").reduce((n, r) => (n[r] = !0, n), {}) : void 0;
}
const sc = $e({
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
    const r = He(!0);
    return Fu(() => {
      r.value = !0;
    }), Mu(() => {
      r.value = !1;
    }), yr(() => {
      Object.keys(t).filter((i) => i.startsWith("on")).forEach((i) => {
        const s = t[i], o = Array.isArray(s) ? s : [s], a = i.match(nc);
        if (!a) {
          __DEV__ && console.warn(
            `[vue-global-events] Unable to parse "${i}". If this should work, you should probably open a new issue on https://github.com/shentao/vue-global-events.`
          );
          return;
        }
        let [, l, u] = a;
        l = l.toLowerCase();
        const f = o.map(
          (m) => (p) => {
            const h = Array.isArray(e.filter) ? e.filter : [e.filter];
            r.value && h.every((S) => S(p, m, l)) && (e.stop && p.stopPropagation(), e.prevent && p.preventDefault(), m(p));
          }
        ), c = ic(u);
        f.forEach((m) => {
          window[e.target].addEventListener(
            l,
            m,
            c
          );
        }), n[i] = [
          f,
          l,
          c
        ];
      });
    }), Ma(() => {
      for (const i in n) {
        const [s, o, a] = n[i];
        s.forEach((l) => {
          window[e.target].removeEventListener(o, l, a);
        });
      }
      n = {};
    }), () => null;
  }
}), oc = sc, ac = () => ({ $dialog: Ia("$dialog") }), lc = ["data-test-id"], uc = { class: "x-dialog__in" }, cc = ["title"], dc = { class: "x-dialog__content-container" }, fc = {
  key: 0,
  class: "x-dialog__description"
}, pc = {
  key: 1,
  class: "x-dialog__loader"
}, hc = {
  key: 2,
  class: "x-dialog__content"
}, mc = { class: "x-dialog__actions" }, vc = /* @__PURE__ */ $e({
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
    const { $dialog: n } = ac(), r = t, i = e, s = T(() => [
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
    }, m = () => {
      i.onSubmit ? r("submit") : (r("submit"), n.hide());
    };
    return (p, h) => (F(), oe("div", {
      class: De(s.value),
      "data-test-id": e.testId,
      tabindex: "0"
    }, [
      se("div", uc, [
        e.title || p.$slots.title ? (F(), oe("div", {
          key: 0,
          class: De(["x-dialog__title", { "x-dialog__title--center": e.centerTitle }]),
          title: e.title
        }, [
          ce(p.$slots, "title", {}, () => [
            Le(Ne(e.title), 1)
          ], !0)
        ], 10, cc)) : pe("", !0),
        se("div", dc, [
          e.description || p.$slots.description ? (F(), oe("div", fc, [
            ce(p.$slots, "description", {}, () => [
              Le(Ne(e.description), 1)
            ], !0)
          ])) : pe("", !0),
          e.loading ? (F(), oe("div", pc, [
            me(D(Ra), { size: "m" })
          ])) : pe("", !0),
          p.$slots.default ? (F(), oe("div", hc, [
            ce(p.$slots, "default", {}, void 0, !0)
          ])) : pe("", !0)
        ]),
        e.noActions ? pe("", !0) : ce(p.$slots, "footer", { key: 1 }, () => [
          se("div", mc, [
            e.noCancel ? pe("", !0) : ce(p.$slots, "cancel", { key: 0 }, () => [
              me(D(rt), _e(o.value, { onClick: f }), {
                default: de(() => [
                  Le(Ne(e.cancelText), 1)
                ]),
                _: 1
              }, 16)
            ], !0),
            e.noSubmit ? pe("", !0) : ce(p.$slots, "submit", { key: 1 }, () => [
              me(D(rt), _e(a.value, { onClick: m }), {
                default: de(() => [
                  Le(Ne(e.submitText), 1)
                ]),
                _: 1
              }, 16)
            ], !0)
          ]),
          ce(p.$slots, "extra-footer", {}, void 0, !0)
        ], !0)
      ]),
      e.persistent ? pe("", !0) : (F(), ve(D(rt), _e({ key: 0 }, l.value, { onClick: u }), null, 16)),
      me(D(oc), {
        onKeyup: bt(c, ["esc"])
      })
    ], 10, lc));
  }
}), tv = /* @__PURE__ */ We(vc, [["__scopeId", "data-v-f110415e"]]), gc = {
  key: 0,
  class: "x-dialog-overlay"
}, yc = /* @__PURE__ */ $e({
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
    return (t, n) => (F(), ve(Qr, {
      name: "x-dialog-overlay-fade",
      mode: "out-in",
      appear: ""
    }, {
      default: de(() => [
        e.show ? (F(), oe("div", gc, [
          me(Qr, {
            name: "x-dialog-fade",
            mode: "out-in",
            appear: ""
          }, {
            default: de(() => [
              e.show ? (F(), ve(Iu, { key: 0 }, [
                (F(), ve(ju, null, {
                  default: de(() => [
                    e.component ? (F(), ve(As(e.component), {
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
}), bc = /* @__PURE__ */ We(yc, [["__scopeId", "data-v-7b5367b0"]]), nv = {
  install: (e, t) => {
    let n = null;
    const r = Xr(!1), i = Xr({}), s = Xr({}), o = {
      show(a, l) {
        const u = cn();
        if (!n) {
          const f = document.createElement("div");
          f.id = "x-dialog-container", document.body.appendChild(f);
          const c = Lu({
            provide: () => ({ $dialog: o }),
            render: () => Qi(bc, { show: H(r), component: H(s) })
          });
          Object.entries(t.globalProperties).forEach(([m, p]) => {
            c.config.globalProperties[m] = p;
          }), n = c.mount(`#${f.id}`);
        }
        H(s) && (i.value = H(s)), s.value = {
          render: () => Qi(
            a,
            wc(u, l)
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
function wc(e, t) {
  return t ? {
    ...t.props && t.props.call(e),
    ...xc(t.on, e)
  } : {};
}
function xc(e = {}, t) {
  const n = {};
  for (const r in e) {
    const i = `on${r.charAt(0).toUpperCase() + r.slice(1)}`;
    n[i] = e[r].bind(t);
  }
  return n;
}
const Sc = {
  key: 0,
  class: "x-mark__img"
}, $c = { class: "x-mark__text" }, _c = /* @__PURE__ */ $e({
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
    return (r, i) => (F(), oe("div", {
      class: De(n.value)
    }, [
      e.icon ? (F(), oe("div", Sc, [
        me(D(Ze), _e({ name: e.icon }, e.iconProps), null, 16, ["name"])
      ])) : pe("", !0),
      se("div", $c, [
        ce(r.$slots, "default", {}, void 0, !0)
      ]),
      i[0] || (i[0] = se("div", { class: "x-mark__border" }, null, -1))
    ], 2));
  }
}), Ba = /* @__PURE__ */ We(_c, [["__scopeId", "data-v-0fd3413c"]]), kc = ["top", "right", "bottom", "left"], bo = ["start", "end"], wo = /* @__PURE__ */ kc.reduce((e, t) => e.concat(t, t + "-" + bo[0], t + "-" + bo[1]), []), dr = Math.min, vn = Math.max, Oc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ec = {
  start: "end",
  end: "start"
};
function rs(e, t, n) {
  return vn(e, dr(t, n));
}
function An(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function jt(e) {
  return e.split("-")[0];
}
function _t(e) {
  return e.split("-")[1];
}
function za(e) {
  return e === "x" ? "y" : "x";
}
function Ts(e) {
  return e === "y" ? "height" : "width";
}
function Xt(e) {
  return ["top", "bottom"].includes(jt(e)) ? "y" : "x";
}
function Ps(e) {
  return za(Xt(e));
}
function Ha(e, t, n) {
  n === void 0 && (n = !1);
  const r = _t(e), i = Ps(e), s = Ts(i);
  let o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (o = ri(o)), [o, ri(o)];
}
function Vc(e) {
  const t = ri(e);
  return [ni(e), t, ni(t)];
}
function ni(e) {
  return e.replace(/start|end/g, (t) => Ec[t]);
}
function Ac(e, t, n) {
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
function Cc(e, t, n, r) {
  const i = _t(e);
  let s = Ac(jt(e), n === "start", r);
  return i && (s = s.map((o) => o + "-" + i), t && (s = s.concat(s.map(ni)))), s;
}
function ri(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Oc[t]);
}
function Tc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ua(e) {
  return typeof e != "number" ? Tc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function nr(e) {
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
function xo(e, t, n) {
  let {
    reference: r,
    floating: i
  } = e;
  const s = Xt(t), o = Ps(t), a = Ts(o), l = jt(t), u = s === "y", f = r.x + r.width / 2 - i.width / 2, c = r.y + r.height / 2 - i.height / 2, m = r[a] / 2 - i[a] / 2;
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
  switch (_t(t)) {
    case "start":
      p[o] -= m * (n && u ? -1 : 1);
      break;
    case "end":
      p[o] += m * (n && u ? -1 : 1);
      break;
  }
  return p;
}
const Pc = async (e, t, n) => {
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
  } = xo(u, r, l), m = r, p = {}, h = 0;
  for (let S = 0; S < a.length; S++) {
    const {
      name: v,
      fn: x
    } = a[S], {
      x: k,
      y: C,
      data: G,
      reset: L
    } = await x({
      x: f,
      y: c,
      initialPlacement: r,
      placement: m,
      strategy: i,
      middlewareData: p,
      rects: u,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = k ?? f, c = C ?? c, p = {
      ...p,
      [v]: {
        ...p[v],
        ...G
      }
    }, L && h <= 50 && (h++, typeof L == "object" && (L.placement && (m = L.placement), L.rects && (u = L.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : L.rects), {
      x: f,
      y: c
    } = xo(u, m, l)), S = -1);
  }
  return {
    x: f,
    y: c,
    placement: m,
    strategy: i,
    middlewareData: p
  };
};
async function gi(e, t) {
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
    altBoundary: m = !1,
    padding: p = 0
  } = An(t, e), h = Ua(p), v = a[m ? c === "floating" ? "reference" : "floating" : c], x = nr(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(v))) == null || n ? v : v.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: f,
    strategy: l
  })), k = c === "floating" ? {
    x: r,
    y: i,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), G = await (s.isElement == null ? void 0 : s.isElement(C)) ? await (s.getScale == null ? void 0 : s.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, L = nr(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: k,
    offsetParent: C,
    strategy: l
  }) : k);
  return {
    top: (x.top - L.top + h.top) / G.y,
    bottom: (L.bottom - x.bottom + h.bottom) / G.y,
    left: (x.left - L.left + h.left) / G.x,
    right: (L.right - x.right + h.right) / G.x
  };
}
const Nc = (e) => ({
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
    } = An(e, t) || {};
    if (u == null)
      return {};
    const c = Ua(f), m = {
      x: n,
      y: r
    }, p = Ps(i), h = Ts(p), S = await o.getDimensions(u), v = p === "y", x = v ? "top" : "left", k = v ? "bottom" : "right", C = v ? "clientHeight" : "clientWidth", G = s.reference[h] + s.reference[p] - m[p] - s.floating[h], L = m[p] - s.reference[p], K = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
    let X = K ? K[C] : 0;
    (!X || !await (o.isElement == null ? void 0 : o.isElement(K))) && (X = a.floating[C] || s.floating[h]);
    const re = G / 2 - L / 2, M = X / 2 - S[h] / 2 - 1, Y = dr(c[x], M), N = dr(c[k], M), ne = Y, fe = X - S[h] - N, j = X / 2 - S[h] / 2 + re, E = rs(ne, j, fe), V = !l.arrow && _t(i) != null && j !== E && s.reference[h] / 2 - (j < ne ? Y : N) - S[h] / 2 < 0, I = V ? j < ne ? j - ne : j - fe : 0;
    return {
      [p]: m[p] + I,
      data: {
        [p]: E,
        centerOffset: j - E - I,
        ...V && {
          alignmentOffset: I
        }
      },
      reset: V
    };
  }
});
function Dc(e, t, n) {
  return (e ? [...n.filter((i) => _t(i) === e), ...n.filter((i) => _t(i) !== e)] : n.filter((i) => jt(i) === i)).filter((i) => e ? _t(i) === e || (t ? ni(i) !== i : !1) : !0);
}
const Fc = function(e) {
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
        allowedPlacements: m = wo,
        autoAlignment: p = !0,
        ...h
      } = An(e, t), S = c !== void 0 || m === wo ? Dc(c || null, p, m) : m, v = await gi(t, h), x = ((n = o.autoPlacement) == null ? void 0 : n.index) || 0, k = S[x];
      if (k == null)
        return {};
      const C = Ha(k, s, await (l.isRTL == null ? void 0 : l.isRTL(u.floating)));
      if (a !== k)
        return {
          reset: {
            placement: S[0]
          }
        };
      const G = [v[jt(k)], v[C[0]], v[C[1]]], L = [...((r = o.autoPlacement) == null ? void 0 : r.overflows) || [], {
        placement: k,
        overflows: G
      }], K = S[x + 1];
      if (K)
        return {
          data: {
            index: x + 1,
            overflows: L
          },
          reset: {
            placement: K
          }
        };
      const X = L.map((Y) => {
        const N = _t(Y.placement);
        return [Y.placement, N && f ? (
          // Check along the mainAxis and main crossAxis side.
          Y.overflows.slice(0, 2).reduce((ne, fe) => ne + fe, 0)
        ) : (
          // Check only the mainAxis.
          Y.overflows[0]
        ), Y.overflows];
      }).sort((Y, N) => Y[1] - N[1]), M = ((i = X.filter((Y) => Y[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        _t(Y[0]) ? 2 : 3
      ).every((N) => N <= 0))[0]) == null ? void 0 : i[0]) || X[0][0];
      return M !== a ? {
        data: {
          index: x + 1,
          overflows: L
        },
        reset: {
          placement: M
        }
      } : {};
    }
  };
}, Mc = function(e) {
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
        fallbackPlacements: m,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: S = !0,
        ...v
      } = An(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const x = jt(i), k = Xt(a), C = jt(a) === a, G = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), L = m || (C || !S ? [ri(a)] : Vc(a)), K = h !== "none";
      !m && K && L.push(...Cc(a, S, h, G));
      const X = [a, ...L], re = await gi(t, v), M = [];
      let Y = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (f && M.push(re[x]), c) {
        const j = Ha(i, o, G);
        M.push(re[j[0]], re[j[1]]);
      }
      if (Y = [...Y, {
        placement: i,
        overflows: M
      }], !M.every((j) => j <= 0)) {
        var N, ne;
        const j = (((N = s.flip) == null ? void 0 : N.index) || 0) + 1, E = X[j];
        if (E && (!(c === "alignment" ? k !== Xt(E) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Y.every((R) => R.overflows[0] > 0 && Xt(R.placement) === k)))
          return {
            data: {
              index: j,
              overflows: Y
            },
            reset: {
              placement: E
            }
          };
        let V = (ne = Y.filter((I) => I.overflows[0] <= 0).sort((I, R) => I.overflows[1] - R.overflows[1])[0]) == null ? void 0 : ne.placement;
        if (!V)
          switch (p) {
            case "bestFit": {
              var fe;
              const I = (fe = Y.filter((R) => {
                if (K) {
                  const U = Xt(R.placement);
                  return U === k || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((R) => [R.placement, R.overflows.filter((U) => U > 0).reduce((U, W) => U + W, 0)]).sort((R, U) => R[1] - U[1])[0]) == null ? void 0 : fe[0];
              I && (V = I);
              break;
            }
            case "initialPlacement":
              V = a;
              break;
          }
        if (i !== V)
          return {
            reset: {
              placement: V
            }
          };
      }
      return {};
    }
  };
};
async function Ic(e, t) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = jt(n), a = _t(n), l = Xt(n) === "y", u = ["left", "top"].includes(o) ? -1 : 1, f = s && l ? -1 : 1, c = An(t, e);
  let {
    mainAxis: m,
    crossAxis: p,
    alignmentAxis: h
  } = typeof c == "number" ? {
    mainAxis: c,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: c.mainAxis || 0,
    crossAxis: c.crossAxis || 0,
    alignmentAxis: c.alignmentAxis
  };
  return a && typeof h == "number" && (p = a === "end" ? h * -1 : h), l ? {
    x: p * f,
    y: m * u
  } : {
    x: m * u,
    y: p * f
  };
}
const jc = function(e) {
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
      } = t, l = await Ic(t, e);
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
}, Lc = function(e) {
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
              y: k
            } = v;
            return {
              x,
              y: k
            };
          }
        },
        ...l
      } = An(e, t), u = {
        x: n,
        y: r
      }, f = await gi(t, l), c = Xt(jt(i)), m = za(c);
      let p = u[m], h = u[c];
      if (s) {
        const v = m === "y" ? "top" : "left", x = m === "y" ? "bottom" : "right", k = p + f[v], C = p - f[x];
        p = rs(k, p, C);
      }
      if (o) {
        const v = c === "y" ? "top" : "left", x = c === "y" ? "bottom" : "right", k = h + f[v], C = h - f[x];
        h = rs(k, h, C);
      }
      const S = a.fn({
        ...t,
        [m]: p,
        [c]: h
      });
      return {
        ...S,
        data: {
          x: S.x - n,
          y: S.y - r,
          enabled: {
            [m]: s,
            [c]: o
          }
        }
      };
    }
  };
}, Rc = function(e) {
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
      } = An(e, t), f = await gi(t, u), c = jt(i), m = _t(i), p = Xt(i) === "y", {
        width: h,
        height: S
      } = s.floating;
      let v, x;
      c === "top" || c === "bottom" ? (v = c, x = m === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (x = c, v = m === "end" ? "top" : "bottom");
      const k = S - f.top - f.bottom, C = h - f.left - f.right, G = dr(S - f[v], k), L = dr(h - f[x], C), K = !t.middlewareData.shift;
      let X = G, re = L;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (re = C), (r = t.middlewareData.shift) != null && r.enabled.y && (X = k), K && !m) {
        const Y = vn(f.left, 0), N = vn(f.right, 0), ne = vn(f.top, 0), fe = vn(f.bottom, 0);
        p ? re = h - 2 * (Y !== 0 || N !== 0 ? Y + N : vn(f.left, f.right)) : X = S - 2 * (ne !== 0 || fe !== 0 ? ne + fe : vn(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: re,
        availableHeight: X
      });
      const M = await o.getDimensions(a.floating);
      return h !== M.width || S !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function wt(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Dt(e) {
  return wt(e).getComputedStyle(e);
}
const So = Math.min, rr = Math.max, ii = Math.round;
function qa(e) {
  const t = Dt(e);
  let n = parseFloat(t.width), r = parseFloat(t.height);
  const i = e.offsetWidth, s = e.offsetHeight, o = ii(n) !== i || ii(r) !== s;
  return o && (n = i, r = s), { width: n, height: r, fallback: o };
}
function dn(e) {
  return Wa(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Vr;
function Xa() {
  if (Vr) return Vr;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Vr = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Vr) : navigator.userAgent;
}
function Ft(e) {
  return e instanceof wt(e).HTMLElement;
}
function on(e) {
  return e instanceof wt(e).Element;
}
function Wa(e) {
  return e instanceof wt(e).Node;
}
function $o(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof wt(e).ShadowRoot || e instanceof ShadowRoot;
}
function yi(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: i } = Dt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function Bc(e) {
  return ["table", "td", "th"].includes(dn(e));
}
function is(e) {
  const t = /firefox/i.test(Xa()), n = Dt(e), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!r && r !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const s = n.contain;
    return s != null && s.includes(i);
  });
}
function Ya() {
  return !/^((?!chrome|android).)*safari/i.test(Xa());
}
function Ns(e) {
  return ["html", "body", "#document"].includes(dn(e));
}
function Ga(e) {
  return on(e) ? e : e.contextElement;
}
const Ka = { x: 1, y: 1 };
function jn(e) {
  const t = Ga(e);
  if (!Ft(t)) return Ka;
  const n = t.getBoundingClientRect(), { width: r, height: i, fallback: s } = qa(t);
  let o = (s ? ii(n.width) : n.width) / r, a = (s ? ii(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function fr(e, t, n, r) {
  var i, s;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Ga(e);
  let l = Ka;
  t && (r ? on(r) && (l = jn(r)) : l = jn(e));
  const u = a ? wt(a) : window, f = !Ya() && n;
  let c = (o.left + (f && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, m = (o.top + (f && ((s = u.visualViewport) == null ? void 0 : s.offsetTop) || 0)) / l.y, p = o.width / l.x, h = o.height / l.y;
  if (a) {
    const S = wt(a), v = r && on(r) ? wt(r) : r;
    let x = S.frameElement;
    for (; x && r && v !== S; ) {
      const k = jn(x), C = x.getBoundingClientRect(), G = getComputedStyle(x);
      C.x += (x.clientLeft + parseFloat(G.paddingLeft)) * k.x, C.y += (x.clientTop + parseFloat(G.paddingTop)) * k.y, c *= k.x, m *= k.y, p *= k.x, h *= k.y, c += C.x, m += C.y, x = wt(x).frameElement;
    }
  }
  return { width: p, height: h, top: m, right: c + p, bottom: m + h, left: c, x: c, y: m };
}
function an(e) {
  return ((Wa(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function bi(e) {
  return on(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Za(e) {
  return fr(an(e)).left + bi(e).scrollLeft;
}
function pr(e) {
  if (dn(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || $o(e) && e.host || an(e);
  return $o(t) ? t.host : t;
}
function Ja(e) {
  const t = pr(e);
  return Ns(t) ? t.ownerDocument.body : Ft(t) && yi(t) ? t : Ja(t);
}
function si(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = Ja(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = wt(r);
  return i ? t.concat(s, s.visualViewport || [], yi(r) ? r : []) : t.concat(r, si(r));
}
function _o(e, t, n) {
  return t === "viewport" ? nr(function(r, i) {
    const s = wt(r), o = an(r), a = s.visualViewport;
    let l = o.clientWidth, u = o.clientHeight, f = 0, c = 0;
    if (a) {
      l = a.width, u = a.height;
      const m = Ya();
      (m || !m && i === "fixed") && (f = a.offsetLeft, c = a.offsetTop);
    }
    return { width: l, height: u, x: f, y: c };
  }(e, n)) : on(t) ? nr(function(r, i) {
    const s = fr(r, !0, i === "fixed"), o = s.top + r.clientTop, a = s.left + r.clientLeft, l = Ft(r) ? jn(r) : { x: 1, y: 1 };
    return { width: r.clientWidth * l.x, height: r.clientHeight * l.y, x: a * l.x, y: o * l.y };
  }(t, n)) : nr(function(r) {
    const i = an(r), s = bi(r), o = r.ownerDocument.body, a = rr(i.scrollWidth, i.clientWidth, o.scrollWidth, o.clientWidth), l = rr(i.scrollHeight, i.clientHeight, o.scrollHeight, o.clientHeight);
    let u = -s.scrollLeft + Za(r);
    const f = -s.scrollTop;
    return Dt(o).direction === "rtl" && (u += rr(i.clientWidth, o.clientWidth) - a), { width: a, height: l, x: u, y: f };
  }(an(e)));
}
function ko(e) {
  return Ft(e) && Dt(e).position !== "fixed" ? e.offsetParent : null;
}
function Oo(e) {
  const t = wt(e);
  let n = ko(e);
  for (; n && Bc(n) && Dt(n).position === "static"; ) n = ko(n);
  return n && (dn(n) === "html" || dn(n) === "body" && Dt(n).position === "static" && !is(n)) ? t : n || function(r) {
    let i = pr(r);
    for (; Ft(i) && !Ns(i); ) {
      if (is(i)) return i;
      i = pr(i);
    }
    return null;
  }(e) || t;
}
function zc(e, t, n) {
  const r = Ft(t), i = an(t), s = fr(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (r || !r && n !== "fixed") if ((dn(t) !== "body" || yi(i)) && (o = bi(t)), Ft(t)) {
    const l = fr(t, !0);
    a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
  } else i && (a.x = Za(i));
  return { x: s.left + o.scrollLeft - a.x, y: s.top + o.scrollTop - a.y, width: s.width, height: s.height };
}
const Hc = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
  const s = n === "clippingAncestors" ? function(u, f) {
    const c = f.get(u);
    if (c) return c;
    let m = si(u).filter((v) => on(v) && dn(v) !== "body"), p = null;
    const h = Dt(u).position === "fixed";
    let S = h ? pr(u) : u;
    for (; on(S) && !Ns(S); ) {
      const v = Dt(S), x = is(S);
      (h ? x || p : x || v.position !== "static" || !p || !["absolute", "fixed"].includes(p.position)) ? p = v : m = m.filter((k) => k !== S), S = pr(S);
    }
    return f.set(u, m), m;
  }(t, this._c) : [].concat(n), o = [...s, r], a = o[0], l = o.reduce((u, f) => {
    const c = _o(t, f, i);
    return u.top = rr(c.top, u.top), u.right = So(c.right, u.right), u.bottom = So(c.bottom, u.bottom), u.left = rr(c.left, u.left), u;
  }, _o(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: r } = e;
  const i = Ft(n), s = an(n);
  if (n === s) return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && r !== "fixed") && ((dn(n) !== "body" || yi(s)) && (o = bi(n)), Ft(n))) {
    const u = fr(n);
    a = jn(n), l.x = u.x + n.clientLeft, l.y = u.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: on, getDimensions: function(e) {
  return Ft(e) ? qa(e) : e.getBoundingClientRect();
}, getOffsetParent: Oo, getDocumentElement: an, getScale: jn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: r } = e;
  const i = this.getOffsetParent || Oo, s = this.getDimensions;
  return { reference: zc(t, await i(n), r), floating: { x: 0, y: 0, ...await s(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Dt(e).direction === "rtl" }, Uc = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), i = { platform: Hc, ...n }, s = { ...i.platform, _c: r };
  return Pc(e, t, { ...i, platform: s });
}, wn = {
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
function ss(e, t) {
  let n = wn.themes[e] || {}, r;
  do
    r = n[t], typeof r > "u" ? n.$extend ? n = wn.themes[n.$extend] || {} : (n = null, r = wn[t]) : n = null;
  while (n);
  return r;
}
function qc(e) {
  const t = [e];
  let n = wn.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = wn.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((r) => `v-popper--theme-${r}`);
}
function Eo(e) {
  const t = [e];
  let n = wn.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = wn.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let hr = !1;
if (typeof window < "u") {
  hr = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        hr = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Qa = !1;
typeof window < "u" && typeof navigator < "u" && (Qa = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Xc = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Vo = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, Ao = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function Co(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Li() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const vt = [];
let mn = null;
const To = {};
function Po(e) {
  let t = To[e];
  return t || (t = To[e] = []), t;
}
let os = function() {
};
typeof window < "u" && (os = window.Element);
function Ee(e) {
  return function(t) {
    return ss(t.theme, e);
  };
}
const Ri = "__floating-vue__popper", el = () => $e({
  name: "VPopper",
  provide() {
    return {
      [Ri]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Ri]: { default: null }
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
      validator: (e) => Xc.includes(e)
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
      type: [String, Object, os, Boolean],
      default: Ee("container")
    },
    boundary: {
      type: [String, os],
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
      return (e = this[Ri]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(jc({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Fc({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Lc({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Mc({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Nc({
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Rc({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: r, availableHeight: i }) => {
          this.$_innerNode.style.maxWidth = r != null ? `${r}px` : null, this.$_innerNode.style.maxHeight = i != null ? `${i}px` : null;
        }
      })));
      const n = await Uc(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), mn && this.instantMove && mn.instantMove && mn !== this.parentPopper) {
        mn.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (mn = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Li(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...si(this.$_referenceNode),
        ...si(this.$_popperNode)
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
        for (let n = 0; n < vt.length; n++)
          t = vt[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      vt.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Eo(this.theme))
        Po(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Li(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Co(vt, this), vt.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of Eo(this.theme)) {
        const r = Po(n);
        Co(r, this), r.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      mn === this && (mn = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Li(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, Vo, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Vo, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Ao, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Ao, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((r) => r.addEventListener(t, n, hr ? {
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
      if (ir >= e.left && ir <= e.right && sr >= e.top && sr <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = ir - en, r = sr - tn, i = t.left + t.width / 2 - en + (t.top + t.height / 2) - tn + t.width + t.height, s = en + n * i, o = tn + r * i;
        return Ar(en, tn, s, o, t.left, t.top, t.left, t.bottom) || // Left edge
        Ar(en, tn, s, o, t.left, t.top, t.right, t.top) || // Top edge
        Ar(en, tn, s, o, t.right, t.top, t.right, t.bottom) || // Right edge
        Ar(en, tn, s, o, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Qa) {
    const e = hr ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => No(t), e), document.addEventListener("touchend", (t) => Do(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => No(e), !0), window.addEventListener("click", (e) => Do(e, !1), !0);
  window.addEventListener("resize", Gc);
}
function No(e, t) {
  for (let n = 0; n < vt.length; n++) {
    const r = vt[n];
    try {
      r.mouseDownContains = r.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Do(e, t) {
  Wc(e, t);
}
function Wc(e, t) {
  const n = {};
  for (let r = vt.length - 1; r >= 0; r--) {
    const i = vt[r];
    try {
      const s = i.containsGlobalTarget = i.mouseDownContains || i.popperNode().contains(e.target);
      i.pendingHide = !1, requestAnimationFrame(() => {
        if (i.pendingHide = !1, !n[i.randomId] && Fo(i, s, e)) {
          if (i.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && s) {
            let a = i.parentPopper;
            for (; a; )
              n[a.randomId] = !0, a = a.parentPopper;
            return;
          }
          let o = i.parentPopper;
          for (; o && Fo(o, o.containsGlobalTarget, e); )
            o.$_handleGlobalClose(e, t), o = o.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Fo(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || Yc(e, n) && !t;
}
function Yc(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function Gc() {
  for (let e = 0; e < vt.length; e++)
    vt[e].$_computePosition();
}
function Mo() {
  for (let e = 0; e < vt.length; e++)
    vt[e].hide();
}
let en = 0, tn = 0, ir = 0, sr = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  en = ir, tn = sr, ir = e.clientX, sr = e.clientY;
}, hr ? {
  passive: !0
} : void 0);
function Ar(e, t, n, r, i, s, o, a) {
  const l = ((o - i) * (t - s) - (a - s) * (e - i)) / ((a - s) * (n - e) - (o - i) * (r - t)), u = ((n - e) * (t - s) - (r - t) * (e - i)) / ((a - s) * (n - e) - (o - i) * (r - t));
  return l >= 0 && l <= 1 && u >= 0 && u <= 1;
}
const Kc = {
  extends: el()
}, Ds = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
};
function Zc(e, t, n, r, i, s) {
  return F(), oe("div", {
    ref: "reference",
    class: De(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    ce(e.$slots, "default", Nt(qt(e.slotData)))
  ], 2);
}
const Jc = /* @__PURE__ */ Ds(Kc, [["render", Zc]]);
function Qc() {
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
function as() {
  as.init || (as.init = !0, Wr = Qc() !== -1);
}
var wi = {
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
    as(), ht(() => {
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
const ed = /* @__PURE__ */ zu("data-v-b329ee4c");
Ru("data-v-b329ee4c");
const td = {
  class: "resize-observer",
  tabindex: "-1"
};
Bu();
const nd = /* @__PURE__ */ ed((e, t, n, r, i, s) => (F(), ve("div", td)));
wi.render = nd;
wi.__scopeId = "data-v-b329ee4c";
wi.__file = "src/components/ResizeObserver.vue";
const tl = (e = "theme") => ({
  computed: {
    themeClass() {
      return qc(this[e]);
    }
  }
}), rd = $e({
  name: "VPopperContent",
  components: {
    ResizeObserver: wi
  },
  mixins: [
    tl()
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
}), id = ["id", "aria-hidden", "tabindex", "data-popper-placement"], sd = {
  ref: "inner",
  class: "v-popper__inner"
}, od = /* @__PURE__ */ se("div", { class: "v-popper__arrow-outer" }, null, -1), ad = /* @__PURE__ */ se("div", { class: "v-popper__arrow-inner" }, null, -1), ld = [
  od,
  ad
];
function ud(e, t, n, r, i, s) {
  const o = es("ResizeObserver");
  return F(), oe("div", {
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
    style: bn(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = bt((a) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    se("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (a) => e.autoHide && e.$emit("hide"))
    }),
    se("div", {
      class: "v-popper__wrapper",
      style: bn(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      se("div", sd, [
        e.mounted ? (F(), oe(Wt, { key: 0 }, [
          se("div", null, [
            ce(e.$slots, "default")
          ]),
          e.handleResize ? (F(), ve(o, {
            key: 0,
            onNotify: t[1] || (t[1] = (a) => e.$emit("resize", a))
          })) : pe("", !0)
        ], 64)) : pe("", !0)
      ], 512),
      se("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: bn(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, ld, 4)
    ], 4)
  ], 46, id);
}
const nl = /* @__PURE__ */ Ds(rd, [["render", ud]]), rl = {
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
let ls = function() {
};
typeof window < "u" && (ls = window.Element);
const cd = $e({
  name: "VPopperWrapper",
  components: {
    Popper: Jc,
    PopperContent: nl
  },
  mixins: [
    rl,
    tl("finalTheme")
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
      type: [String, Object, ls, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, ls],
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
function dd(e, t, n, r, i, s) {
  const o = es("PopperContent"), a = es("Popper");
  return F(), ve(a, _e({ ref: "popper" }, e.$props, {
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
      autoHide: m,
      show: p,
      hide: h,
      handleResize: S,
      onResize: v,
      classes: x,
      result: k
    }) => [
      ce(e.$slots, "default", {
        shown: u,
        show: p,
        hide: h
      }),
      me(o, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: u,
        mounted: f,
        "skip-transition": c,
        "auto-hide": m,
        "handle-resize": S,
        classes: x,
        result: k,
        onHide: h,
        onResize: v
      }, {
        default: de(() => [
          ce(e.$slots, "popper", {
            shown: u,
            hide: h
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const Fs = /* @__PURE__ */ Ds(cd, [["render", dd]]), fd = {
  ...Fs,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...Fs
});
({
  ...Fs
});
$e({
  name: "VTooltipDirective",
  components: {
    Popper: el(),
    PopperContent: nl
  },
  mixins: [
    rl
  ],
  inheritAttrs: !1,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: (e) => ss(e.theme, "html")
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: (e) => ss(e.theme, "loadingContent")
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
const pd = fd, hd = /* @__PURE__ */ $e({
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
    return (r, i) => (F(), oe("hr", {
      class: De(n.value)
    }, null, 2));
  }
}), md = { class: "x-checkbox__control" }, vd = {
  key: 0,
  class: "x-checkbox__text"
}, gd = {
  key: 0,
  class: "x-checkbox__text"
}, yd = ["name", "checked", "value", "disabled", "data-test-id"], bd = /* @__PURE__ */ $e({
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
    const n = Vn(), r = e, i = t, s = T(() => r.modelValue instanceof Array ? r.modelValue.includes(r.value) : r.modelValue || r.value), o = T(() => ({
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
      const m = f.target.checked;
      if (r.modelValue instanceof Array) {
        const p = [...r.modelValue];
        m ? p.push(r.value) : p.splice(p.indexOf(r.value), 1), i("update:modelValue", p, m);
      } else
        i("update:modelValue", m);
    };
    return (f, c) => (F(), oe("label", null, [
      e.classic ? (F(), oe("div", {
        key: 0,
        class: De(a.value)
      }, [
        se("div", md, [
          s.value ? (F(), ve(D(Ze), {
            key: 0,
            name: "checkmark",
            class: "x-checkbox__mark",
            size: "12"
          })) : pe("", !0)
        ]),
        f.$slots.text ? (F(), oe("div", vd, [
          ce(f.$slots, "text", {}, void 0, !0)
        ])) : pe("", !0)
      ], 2)) : e.toggle ? (F(), oe("div", {
        key: 1,
        class: De(l.value)
      }, [
        f.$slots.text ? (F(), oe("div", gd, [
          ce(f.$slots, "text", {}, void 0, !0)
        ])) : pe("", !0),
        se("div", {
          class: De(["x-checkbox__control", { "x-checkbox__control--active": s.value }])
        }, null, 2)
      ], 2)) : (F(), ve(D(Ba), _e({ key: 2 }, o.value, {
        active: s.value,
        disabled: e.disabled
      }), {
        default: de(() => [
          ce(f.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 16, ["active", "disabled"])),
      mt(se("input", {
        name: e.name,
        checked: s.value,
        value: e.value,
        disabled: e.disabled,
        "data-test-id": e.testId,
        type: "checkbox",
        onChange: u
      }, null, 40, yd), [
        [Pt, !1]
      ])
    ]));
  }
}), il = /* @__PURE__ */ We(bd, [["__scopeId", "data-v-99b428ca"]]), wd = (e = 100) => {
  const t = He(0);
  return {
    handleThrottleEvent: (r) => {
      const i = (/* @__PURE__ */ new Date()).getTime();
      i - t.value < e && r.stopPropagation(), t.value = i;
    }
  };
}, xd = { class: "x-list-item__content" }, us = /* @__PURE__ */ $e({
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
    const { handleThrottleEvent: t } = wd(), n = e, r = T(() => [
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
    return (s, o) => (F(), oe("button", {
      class: De(r.value),
      type: "button"
    }, [
      e.checkbox && !e.markSelectedOption ? (F(), oe("div", {
        key: 0,
        class: "mr-2",
        onClick: o[0] || (o[0] = //@ts-ignore
        (...a) => D(t) && D(t)(...a))
      }, [
        me(D(il), {
          value: e.checked,
          classic: ""
        }, null, 8, ["value"])
      ])) : pe("", !0),
      e.markSelectedOption && e.checked ? (F(), ve(D(Ze), {
        key: 1,
        class: De(i.value),
        name: "checkmark",
        size: "16"
      }, null, 8, ["class"])) : pe("", !0),
      e.prependIcon ? (F(), ve(D(Ze), _e({
        key: 2,
        name: e.prependIcon,
        size: "24",
        class: "x-list-item__prepend-icon"
      }, e.prependIconProps), null, 16, ["name"])) : pe("", !0),
      se("div", xd, [
        ce(s.$slots, "default")
      ]),
      e.appendIcon ? (F(), ve(D(Ze), _e({
        key: 3,
        name: e.appendIcon,
        size: "16",
        class: "x-list-item__append-icon"
      }, e.appendIconProps), null, 16, ["name"])) : pe("", !0)
    ], 2));
  }
}), Sd = { class: "x-list" }, rv = /* @__PURE__ */ $e({
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
    const n = e, r = t, i = T(() => Array.isArray(n.value)), s = (c, m) => n.itemText ? n.itemText(c, m) : n.itemTextKey ? c[n.itemTextKey] : c, o = (c, m) => n.itemValue ? n.itemValue(c, m) : n.itemValueKey ? c[n.itemValueKey] : c, a = (c, m) => {
      if (n.prependIcon)
        return typeof n.prependIcon == "string" ? n.prependIcon : n.prependIcon(c, m);
      if (n.prependIconKey) return c[n.prependIconKey];
    }, l = (c, m) => {
      if (n.appendIcon)
        return typeof n.appendIcon == "string" ? n.appendIcon : n.appendIcon(c, m);
      if (n.appendIconKey) return c[n.appendIconKey];
    }, u = (c) => H(i) ? n.value.includes(c) : n.value === c, f = (c) => {
      if (H(i)) {
        let m;
        const p = n.value.indexOf(c);
        if (p !== -1) {
          const h = [...n.value];
          h.splice(p, 1), m = h;
        } else
          m = n.value.concat(c);
        r("input", m);
      } else n.value !== c && r("input", c);
    };
    return (c, m) => (F(), oe("div", Sd, [
      (F(!0), oe(Wt, null, On(e.items, (p, h) => (F(), ve(us, {
        key: h,
        checked: u(o(p, h)),
        "prepend-icon": a(p, h),
        "prepend-icon-props": e.prependIconProps,
        "append-icon": l(p, h),
        "append-icon-props": e.appendIconProps,
        onClick: (S) => f(o(p, h))
      }, {
        default: de(() => [
          ce(c.$slots, "default", {
            item: p,
            index: h
          }, () => [
            Le(Ne(s(p, h)), 1)
          ])
        ]),
        _: 2
      }, 1032, ["checked", "prepend-icon", "prepend-icon-props", "append-icon", "append-icon-props", "onClick"]))), 128))
    ]));
  }
}), $d = { class: "x-tag__content" }, _d = /* @__PURE__ */ $e({
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
    return (o, a) => (F(), oe("div", {
      class: De(i.value)
    }, [
      e.prependIcon ? (F(), ve(D(Ze), {
        key: 0,
        name: e.prependIcon,
        class: "x-tag__prepend-icon"
      }, null, 8, ["name"])) : pe("", !0),
      se("div", $d, [
        ce(o.$slots, "default", {}, void 0, !0)
      ]),
      e.closable ? (F(), ve(D(Ze), {
        key: 1,
        name: "close",
        class: "x-tag__close-icon",
        size: "10",
        onClick: s
      })) : pe("", !0)
    ], 2));
  }
}), Io = /* @__PURE__ */ We(_d, [["__scopeId", "data-v-8779c487"]]);
/**
  * vee-validate v4.15.1
  * (c) 2025 Abdelrahman Awad
  * @license MIT
  */
function ct(e) {
  return typeof e == "function";
}
function sl(e) {
  return e == null;
}
const fn = (e) => e !== null && !!e && typeof e == "object" && !Array.isArray(e);
function Ms(e) {
  return Number(e) >= 0;
}
function kd(e) {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}
function Od(e) {
  return typeof e == "object" && e !== null;
}
function Ed(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
function jo(e) {
  if (!Od(e) || Ed(e) !== "[object Object]")
    return !1;
  if (Object.getPrototypeOf(e) === null)
    return !0;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function mr(e, t) {
  return Object.keys(t).forEach((n) => {
    if (jo(t[n]) && jo(e[n])) {
      e[n] || (e[n] = {}), mr(e[n], t[n]);
      return;
    }
    e[n] = t[n];
  }), e;
}
function Zn(e) {
  const t = e.split(".");
  if (!t.length)
    return "";
  let n = String(t[0]);
  for (let r = 1; r < t.length; r++) {
    if (Ms(t[r])) {
      n += `[${t[r]}]`;
      continue;
    }
    n += `.${t[r]}`;
  }
  return n;
}
const Vd = {};
function Ad(e) {
  return Vd[e];
}
function Lo(e, t, n) {
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
      Lo(i, r[t], Object.getOwnPropertyDescriptor(e, r[t]));
    for (t = 0, r = Object.getOwnPropertyNames(e); t < r.length; t++)
      Object.hasOwnProperty.call(i, n = r[t]) && i[n] === e[n] || Lo(i, n, Object.getOwnPropertyDescriptor(e, n));
  }
  return i || e;
}
const Is = Symbol("vee-validate-form"), Cd = Symbol("vee-validate-form-context"), Td = Symbol("vee-validate-field-instance"), Ro = Symbol("Default empty value"), ol = typeof window < "u";
function cs(e) {
  return ct(e) && !!e.__locatorRef;
}
function $t(e) {
  return !!e && ct(e.parse) && e.__type === "VVTypedSchema";
}
function oi(e) {
  return !!e && ct(e.validate);
}
function al(e) {
  return e === "checkbox" || e === "radio";
}
function Pd(e) {
  return fn(e) || Array.isArray(e);
}
function Nd(e) {
  return Array.isArray(e) ? e.length === 0 : fn(e) && Object.keys(e).length === 0;
}
function xi(e) {
  return /^\[.+\]$/i.test(e);
}
function Dd(e) {
  return ll(e) && e.multiple;
}
function ll(e) {
  return e.tagName === "SELECT";
}
function ul(e) {
  return js(e) && e.target && "submit" in e.target;
}
function js(e) {
  return e ? !!(typeof Event < "u" && ct(Event) && e instanceof Event || e && e.srcElement) : !1;
}
function it(e, t) {
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
        if (!it(e[r], t[r]))
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
        if (!it(r[1], t.get(r[0])))
          return !1;
      return !0;
    }
    if (zo(e) && zo(t))
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
    if (e = Bo(e), t = Bo(t), i = Object.keys(e), n = i.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      var s = i[r];
      if (!it(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Bo(e) {
  return Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0));
}
function zo(e) {
  return ol ? e instanceof File : !1;
}
function Ls(e) {
  return xi(e) ? e.replace(/\[|\]/gi, "") : e;
}
function dt(e, t, n) {
  return e ? xi(t) ? e[Ls(t)] : (t || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((i, s) => Pd(i) && s in i ? i[s] : n, e) : n;
}
function At(e, t, n) {
  if (xi(t)) {
    e[Ls(t)] = n;
    return;
  }
  const r = t.split(/\.|\[(\d+)\]/).filter(Boolean);
  let i = e;
  for (let s = 0; s < r.length; s++) {
    if (s === r.length - 1) {
      i[r[s]] = n;
      return;
    }
    (!(r[s] in i) || sl(i[r[s]])) && (i[r[s]] = Ms(r[s + 1]) ? [] : {}), i = i[r[s]];
  }
}
function Bi(e, t) {
  if (Array.isArray(e) && Ms(t)) {
    e.splice(Number(t), 1);
    return;
  }
  fn(e) && delete e[t];
}
function Ho(e, t) {
  if (xi(t)) {
    delete e[Ls(t)];
    return;
  }
  const n = t.split(/\.|\[(\d+)\]/).filter(Boolean);
  let r = e;
  for (let s = 0; s < n.length; s++) {
    if (s === n.length - 1) {
      Bi(r, n[s]);
      break;
    }
    if (!(n[s] in r) || sl(r[n[s]]))
      break;
    r = r[n[s]];
  }
  const i = n.map((s, o) => dt(e, n.slice(0, o).join(".")));
  for (let s = i.length - 1; s >= 0; s--)
    if (Nd(i[s])) {
      if (s === 0) {
        Bi(e, n[0]);
        continue;
      }
      Bi(i[s - 1], n[s - 1]);
    }
}
function ot(e) {
  return Object.keys(e);
}
function cl(e, t = void 0) {
  const n = cn();
  return (n == null ? void 0 : n.provides[e]) || Ia(e, t);
}
function Uo(e, t, n) {
  if (Array.isArray(e)) {
    const r = [...e], i = r.findIndex((s) => it(s, t));
    return i >= 0 ? r.splice(i, 1) : r.push(t), r;
  }
  return it(e, t) ? n : t;
}
function Fd(e, t) {
  let n, r;
  return function(...i) {
    const s = this;
    return n || (n = !0, setTimeout(() => n = !1, t), r = e.apply(s, i)), r;
  };
}
function qo(e, t = 0) {
  let n = null, r = [];
  return function(...i) {
    return n && clearTimeout(n), n = setTimeout(() => {
      const s = e(...i);
      r.forEach((o) => o(s)), r = [];
    }, t), new Promise((s) => r.push(s));
  };
}
function Md(e, t) {
  return fn(t) && t.number ? kd(e) : e;
}
function ds(e, t) {
  let n;
  return async function(...i) {
    const s = e(...i);
    n = s;
    const o = await s;
    return s !== n ? o : (n = void 0, t(o, i));
  };
}
function fs(e) {
  return Array.isArray(e) ? e : e ? [e] : [];
}
function Cr(e, t) {
  const n = {};
  for (const r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function Id(e) {
  let t = null, n = [];
  return function(...r) {
    const i = ht(() => {
      if (t !== i)
        return;
      const s = e(...r);
      n.forEach((o) => o(s)), n = [], t = null;
    });
    return t = i, new Promise((s) => n.push(s));
  };
}
function jd(e, t, n) {
  return t.slots.default ? typeof e == "string" || !e ? t.slots.default(n()) : {
    default: () => {
      var r, i;
      return (i = (r = t.slots).default) === null || i === void 0 ? void 0 : i.call(r, n());
    }
  } : t.slots.default;
}
function zi(e) {
  if (dl(e))
    return e._value;
}
function dl(e) {
  return "_value" in e;
}
function Ld(e) {
  return e.type === "number" || e.type === "range" ? Number.isNaN(e.valueAsNumber) ? e.value : e.valueAsNumber : e.value;
}
function ai(e) {
  if (!js(e))
    return e;
  const t = e.target;
  if (al(t.type) && dl(t))
    return zi(t);
  if (t.type === "file" && t.files) {
    const n = Array.from(t.files);
    return t.multiple ? n : n[0];
  }
  if (Dd(t))
    return Array.from(t.options).filter((n) => n.selected && !n.disabled).map(zi);
  if (ll(t)) {
    const n = Array.from(t.options).find((r) => r.selected);
    return n ? zi(n) : t.value;
  }
  return Ld(t);
}
function fl(e) {
  const t = {};
  return Object.defineProperty(t, "_$$isNormalized", {
    value: !0,
    writable: !1,
    enumerable: !1,
    configurable: !1
  }), e ? fn(e) && e._$$isNormalized ? e : fn(e) ? Object.keys(e).reduce((n, r) => {
    const i = Rd(e[r]);
    return e[r] !== !1 && (n[r] = Xo(i)), n;
  }, t) : typeof e != "string" ? t : e.split("|").reduce((n, r) => {
    const i = Bd(r);
    return i.name && (n[i.name] = Xo(i.params)), n;
  }, t) : t;
}
function Rd(e) {
  return e === !0 ? [] : Array.isArray(e) || fn(e) ? e : [e];
}
function Xo(e) {
  const t = (n) => typeof n == "string" && n[0] === "@" ? zd(n.slice(1)) : n;
  return Array.isArray(e) ? e.map(t) : e instanceof RegExp ? [e] : Object.keys(e).reduce((n, r) => (n[r] = t(e[r]), n), {});
}
const Bd = (e) => {
  let t = [];
  const n = e.split(":")[0];
  return e.includes(":") && (t = e.split(":").slice(1).join(":").split(",")), { name: n, params: t };
};
function zd(e) {
  const t = (n) => {
    var r;
    return (r = dt(n, e)) !== null && r !== void 0 ? r : n[e];
  };
  return t.__locatorRef = e, t;
}
function Hd(e) {
  return Array.isArray(e) ? e.filter(cs) : ot(e).filter((t) => cs(e[t])).map((t) => e[t]);
}
const Ud = {
  generateMessage: ({ field: e }) => `${e} is not valid.`,
  bails: !0,
  validateOnBlur: !0,
  validateOnChange: !0,
  validateOnInput: !1,
  validateOnModelUpdate: !0
};
let qd = Object.assign({}, Ud);
const Jn = () => qd;
async function pl(e, t, n = {}) {
  const r = n == null ? void 0 : n.bails, i = {
    name: (n == null ? void 0 : n.name) || "{field}",
    rules: t,
    label: n == null ? void 0 : n.label,
    bails: r ?? !0,
    formData: (n == null ? void 0 : n.values) || {}
  }, s = await Xd(i, e);
  return Object.assign(Object.assign({}, s), { valid: !s.errors.length });
}
async function Xd(e, t) {
  const n = e.rules;
  if ($t(n) || oi(n))
    return Yd(t, Object.assign(Object.assign({}, e), { rules: n }));
  if (ct(n) || Array.isArray(n)) {
    const a = {
      field: e.label || e.name,
      name: e.name,
      label: e.label,
      form: e.formData,
      value: t
    }, l = Array.isArray(n) ? n : [n], u = l.length, f = [];
    for (let c = 0; c < u; c++) {
      const m = l[c], p = await m(t, a);
      if (!(typeof p != "string" && !Array.isArray(p) && p)) {
        if (Array.isArray(p))
          f.push(...p);
        else {
          const S = typeof p == "string" ? p : ml(a);
          f.push(S);
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
  const r = Object.assign(Object.assign({}, e), { rules: fl(n) }), i = [], s = Object.keys(r.rules), o = s.length;
  for (let a = 0; a < o; a++) {
    const l = s[a], u = await Gd(r, t, {
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
function Wd(e) {
  return !!e && e.name === "ValidationError";
}
function hl(e) {
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
        if (!Wd(s))
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
async function Yd(e, t) {
  const r = await ($t(t.rules) ? t.rules : hl(t.rules)).parse(e, { formData: t.formData }), i = [];
  for (const s of r.errors)
    s.errors.length && i.push(...s.errors);
  return {
    value: r.value,
    errors: i
  };
}
async function Gd(e, t, n) {
  const r = Ad(n.name);
  if (!r)
    throw new Error(`No such validator '${n.name}' exists.`);
  const i = Kd(n.params, e.formData), s = {
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
    error: o ? void 0 : ml(s)
  };
}
function ml(e) {
  const t = Jn().generateMessage;
  return t ? t(e) : "Field is invalid";
}
function Kd(e, t) {
  const n = (r) => cs(r) ? r(t) : r;
  return Array.isArray(e) ? e.map(n) : Object.keys(e).reduce((r, i) => (r[i] = n(e[i]), r), {});
}
async function Zd(e, t) {
  const r = await ($t(e) ? e : hl(e)).parse(Ae(t), { formData: Ae(t) }), i = {}, s = {};
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
async function Jd(e, t, n) {
  const i = ot(e).map(async (u) => {
    var f, c, m;
    const p = (f = n == null ? void 0 : n.names) === null || f === void 0 ? void 0 : f[u], h = await pl(dt(t, u), e[u], {
      name: (p == null ? void 0 : p.name) || u,
      label: p == null ? void 0 : p.label,
      values: t,
      bails: (m = (c = n == null ? void 0 : n.bailsMap) === null || c === void 0 ? void 0 : c[u]) !== null && m !== void 0 ? m : !0
    });
    return Object.assign(Object.assign({}, h), { path: u });
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
function Qd(e, t) {
  const { value: n, initialValue: r, setInitialValue: i } = ef(e, t.modelValue, t.form);
  if (!t.form) {
    let m = function(p) {
      var h;
      "value" in p && (n.value = p.value), "errors" in p && u(p.errors), "touched" in p && (c.touched = (h = p.touched) !== null && h !== void 0 ? h : c.touched), "initialValue" in p && i(p.initialValue);
    };
    const { errors: l, setErrors: u } = rf(), f = Wo >= Number.MAX_SAFE_INTEGER ? 0 : ++Wo, c = nf(n, r, l, t.schema);
    return {
      id: f,
      path: e,
      value: n,
      initialValue: r,
      meta: c,
      flags: { pendingUnmount: { [f]: !1 }, pendingReset: !1 },
      errors: l,
      setState: m
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
    "value" in l && (n.value = l.value), "errors" in l && ((u = t.form) === null || u === void 0 || u.setFieldError(D(e), l.errors)), "touched" in l && ((f = t.form) === null || f === void 0 || f.setFieldTouched(D(e), (c = l.touched) !== null && c !== void 0 ? c : !1)), "initialValue" in l && i(l.initialValue);
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
function ef(e, t, n) {
  const r = He(D(t));
  function i() {
    return n ? dt(n.initialValues.value, D(e), D(r)) : D(r);
  }
  function s(u) {
    if (!n) {
      r.value = u;
      return;
    }
    n.setFieldInitialValue(D(e), u, !0);
  }
  const o = T(i);
  if (!n)
    return {
      value: He(i()),
      initialValue: o,
      setInitialValue: s
    };
  const a = tf(t, n, o, e);
  return n.stageInitialValue(D(e), a, !0), {
    value: T({
      get() {
        return dt(n.values, D(e));
      },
      set(u) {
        n.setFieldValue(D(e), u, !1);
      }
    }),
    initialValue: o,
    setInitialValue: s
  };
}
function tf(e, t, n, r) {
  return ei(e) ? D(e) : e !== void 0 ? e : dt(t.values, D(r), D(n));
}
function nf(e, t, n, r) {
  const i = T(() => {
    var o, a, l;
    return (l = (a = (o = H(r)) === null || o === void 0 ? void 0 : o.describe) === null || a === void 0 ? void 0 : a.call(o).required) !== null && l !== void 0 ? l : !1;
  }), s = kt({
    touched: !1,
    pending: !1,
    valid: !0,
    required: i,
    validated: !!D(n).length,
    initialValue: T(() => D(t)),
    dirty: T(() => !it(D(e), D(t)))
  });
  return Ie(n, (o) => {
    s.valid = !o.length;
  }, {
    immediate: !0,
    flush: "sync"
  }), s;
}
function rf() {
  const e = He([]);
  return {
    errors: e,
    setErrors: (t) => {
      e.value = fs(t);
    }
  };
}
const or = {}, ar = {}, lr = "vee-validate-inspector", at = {
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
let Ge = null, Ut;
async function vl(e) {
  if (process.env.NODE_ENV !== "production") {
    if (!ol)
      return;
    (await import("./index-T3jqfug4.js")).setupDevtoolsPlugin({
      id: "vee-validate-devtools-plugin",
      label: "VeeValidate Plugin",
      packageName: "vee-validate",
      homepage: "https://vee-validate.logaretm.com/v4",
      app: e,
      logo: "https://vee-validate.logaretm.com/v4/logo.png"
    }, (n) => {
      Ut = n, n.addInspector({
        id: lr,
        icon: "rule",
        label: "vee-validate",
        noSelectionText: "Select a vee-validate node to inspect",
        actions: [
          {
            icon: "done_outline",
            tooltip: "Validate selected item",
            action: async () => {
              if (!Ge) {
                console.error("There is not a valid selected vee-validate node or component");
                return;
              }
              if (Ge.type === "field") {
                await Ge.field.validate();
                return;
              }
              if (Ge.type === "form") {
                await Ge.form.validate();
                return;
              }
              Ge.type === "pathState" && await Ge.form.validateField(Ge.state.path);
            }
          },
          {
            icon: "delete_sweep",
            tooltip: "Clear validation state of the selected item",
            action: () => {
              if (!Ge) {
                console.error("There is not a valid selected vee-validate node or component");
                return;
              }
              if (Ge.type === "field") {
                Ge.field.resetField();
                return;
              }
              Ge.type === "form" && Ge.form.resetForm(), Ge.type === "pathState" && Ge.form.resetField(Ge.state.path);
            }
          }
        ]
      }), n.on.getInspectorTree((r) => {
        if (r.inspectorId !== lr)
          return;
        const i = Object.values(or), s = Object.values(ar);
        r.rootNodes = [
          ...i.map(af),
          ...s.map((o) => uf(o))
        ];
      }), n.on.getInspectorState((r) => {
        if (r.inspectorId !== lr)
          return;
        const { form: i, field: s, state: o, type: a } = cf(r.nodeId);
        if (n.unhighlightElement(), i && a === "form") {
          r.state = df(i), Ge = { type: "form", form: i }, n.highlightElement(i._vm);
          return;
        }
        if (o && a === "pathState" && i) {
          r.state = Yo(o), Ge = { type: "pathState", state: o, form: i };
          return;
        }
        if (s && a === "field") {
          r.state = Yo({
            errors: s.errors.value,
            dirty: s.meta.dirty,
            valid: s.meta.valid,
            touched: s.meta.touched,
            value: s.value.value,
            initialValue: s.meta.initialValue
          }), Ge = { field: s, type: "field" }, n.highlightElement(s._vm);
          return;
        }
        Ge = null, n.unhighlightElement();
      });
    });
  }
}
const Rn = Fd(() => {
  setTimeout(async () => {
    await ht(), Ut == null || Ut.sendInspectorState(lr), Ut == null || Ut.sendInspectorTree(lr);
  }, 100);
}, 100);
function sf(e) {
  const t = cn();
  if (!Ut) {
    const n = t == null ? void 0 : t.appContext.app;
    if (!n)
      return;
    vl(n);
  }
  or[e.formId] = Object.assign({}, e), or[e.formId]._vm = t, Cs(() => {
    delete or[e.formId], Rn();
  }), Rn();
}
function of(e) {
  const t = cn();
  if (!Ut) {
    const n = t == null ? void 0 : t.appContext.app;
    if (!n)
      return;
    vl(n);
  }
  ar[e.id] = Object.assign({}, e), ar[e.id]._vm = t, Cs(() => {
    delete ar[e.id], Rn();
  }), Rn();
}
function af(e) {
  const { textColor: t, bgColor: n } = yl(e.meta.value.valid), r = {};
  Object.values(e.getAllPathStates()).forEach((o) => {
    At(r, H(o.path), lf(o, e));
  });
  function i(o, a = []) {
    const l = [...a].pop();
    return "id" in o ? Object.assign(Object.assign({}, o), { label: l || o.label }) : fn(o) ? {
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
    id: Rs(e),
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
        textColor: at.white,
        backgroundColor: at.unknown
      }
    ]
  };
}
function lf(e, t) {
  return {
    id: Rs(t, e),
    label: H(e.path),
    tags: gl(e.multiple, e.fieldsCount, e.type, e.valid, t)
  };
}
function uf(e, t) {
  return {
    id: Rs(t, e),
    label: D(e.name),
    tags: gl(!1, 1, e.type, e.meta.valid, t)
  };
}
function gl(e, t, n, r, i) {
  const { textColor: s, bgColor: o } = yl(r);
  return [
    e ? void 0 : {
      label: "Field",
      textColor: s,
      backgroundColor: o
    },
    i ? void 0 : {
      label: "Standalone",
      textColor: at.black,
      backgroundColor: at.gray
    },
    n === "checkbox" ? {
      label: "Checkbox",
      textColor: at.white,
      backgroundColor: at.blue
    } : void 0,
    n === "radio" ? {
      label: "Radio",
      textColor: at.white,
      backgroundColor: at.purple
    } : void 0,
    e ? {
      label: "Multiple",
      textColor: at.black,
      backgroundColor: at.orange
    } : void 0
  ].filter(Boolean);
}
function Rs(e, t) {
  const n = t ? "path" in t ? "pathState" : "field" : "form", r = t ? "path" in t ? t == null ? void 0 : t.path : H(t == null ? void 0 : t.name) : "", i = { f: e == null ? void 0 : e.formId, ff: (t == null ? void 0 : t.id) || r, type: n };
  return btoa(encodeURIComponent(JSON.stringify(i)));
}
function cf(e) {
  try {
    const t = JSON.parse(decodeURIComponent(atob(e))), n = or[t.f];
    if (!n && t.ff) {
      const i = ar[t.ff];
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
function Yo(e) {
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
function df(e) {
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
        value: ot(t.value).reduce((a, l) => {
          var u;
          const f = (u = t.value[l]) === null || u === void 0 ? void 0 : u[0];
          return f && (a[l] = f), a;
        }, {})
      }
    ]
  };
}
function yl(e) {
  return {
    bgColor: e ? at.success : at.error,
    textColor: e ? at.black : at.white
  };
}
function ff(e, t, n) {
  return al(n == null ? void 0 : n.type) ? hf(e, t, n) : bl(e, t, n);
}
function bl(e, t, n) {
  const { initialValue: r, validateOnMount: i, bails: s, type: o, checkedValue: a, label: l, validateOnValueUpdate: u, uncheckedValue: f, controlled: c, keepValueOnUnmount: m, syncVModel: p, form: h } = pf(n), S = c ? cl(Is) : void 0, v = h || S, x = T(() => Zn(H(e))), k = T(() => {
    if (H(v == null ? void 0 : v.schema))
      return;
    const B = D(t);
    return oi(B) || $t(B) || ct(B) || Array.isArray(B) ? B : fl(B);
  }), C = !ct(k.value) && $t(H(t)), { id: G, value: L, initialValue: K, meta: X, setState: re, errors: M, flags: Y } = Qd(x, {
    modelValue: r,
    form: v,
    bails: s,
    label: l,
    type: o,
    validate: k.value ? V : void 0,
    schema: C ? t : void 0
  }), N = T(() => M.value[0]);
  p && mf({
    value: L,
    prop: p,
    handleChange: I,
    shouldValidate: () => u && !Y.pendingReset
  });
  const ne = (A, B = !1) => {
    X.touched = !0, B && j();
  };
  async function fe(A) {
    var B, we;
    if (v != null && v.validateSchema) {
      const { results: ge } = await v.validateSchema(A);
      return (B = ge[H(x)]) !== null && B !== void 0 ? B : { valid: !0, errors: [] };
    }
    return k.value ? pl(L.value, k.value, {
      name: H(x),
      label: H(l),
      values: (we = v == null ? void 0 : v.values) !== null && we !== void 0 ? we : {},
      bails: s
    }) : { valid: !0, errors: [] };
  }
  const j = ds(async () => (X.pending = !0, X.validated = !0, fe("validated-only")), (A) => (Y.pendingUnmount[Q.id] || (re({ errors: A.errors }), X.pending = !1, X.valid = A.valid), A)), E = ds(async () => fe("silent"), (A) => (X.valid = A.valid, A));
  function V(A) {
    return (A == null ? void 0 : A.mode) === "silent" ? E() : j();
  }
  function I(A, B = !0) {
    const we = ai(A);
    le(we, B);
  }
  yr(() => {
    if (i)
      return j();
    (!v || !v.validateSchema) && E();
  });
  function R(A) {
    X.touched = A;
  }
  function U(A) {
    var B;
    const we = A && "value" in A ? A.value : K.value;
    re({
      value: Ae(we),
      initialValue: Ae(we),
      touched: (B = A == null ? void 0 : A.touched) !== null && B !== void 0 ? B : !1,
      errors: (A == null ? void 0 : A.errors) || []
    }), X.pending = !1, X.validated = !1, E();
  }
  const W = cn();
  function le(A, B = !0) {
    L.value = W && p ? Md(A, W.props.modelModifiers) : A, (B ? j : E)();
  }
  function ye(A) {
    re({ errors: Array.isArray(A) ? A : [A] });
  }
  const q = T({
    get() {
      return L.value;
    },
    set(A) {
      le(A, u);
    }
  }), Q = {
    id: G,
    name: x,
    label: l,
    value: q,
    meta: X,
    errors: M,
    errorMessage: N,
    type: o,
    checkedValue: a,
    uncheckedValue: f,
    bails: s,
    keepValueOnUnmount: m,
    resetField: U,
    handleReset: () => U(),
    validate: V,
    handleChange: I,
    handleBlur: ne,
    setState: re,
    setTouched: R,
    setErrors: ye,
    setValue: le
  };
  if (ts(Td, Q), ei(t) && typeof D(t) != "function" && Ie(t, (A, B) => {
    it(A, B) || (X.validated ? j() : E());
  }, {
    deep: !0
  }), process.env.NODE_ENV !== "production" && (Q._vm = cn(), Ie(() => Object.assign(Object.assign({ errors: M.value }, X), { value: L.value }), Rn, {
    deep: !0
  }), v || of(Q)), !v)
    return Q;
  const he = T(() => {
    const A = k.value;
    return !A || ct(A) || oi(A) || $t(A) || Array.isArray(A) ? {} : Object.keys(A).reduce((B, we) => {
      const ge = Hd(A[we]).map((Ve) => Ve.__locatorRef).reduce((Ve, Fe) => {
        const je = dt(v.values, Fe) || v.values[Fe];
        return je !== void 0 && (Ve[Fe] = je), Ve;
      }, {});
      return Object.assign(B, ge), B;
    }, {});
  });
  return Ie(he, (A, B) => {
    if (!Object.keys(A).length)
      return;
    !it(A, B) && (X.validated ? j() : E());
  }), Ma(() => {
    var A;
    const B = (A = H(Q.keepValueOnUnmount)) !== null && A !== void 0 ? A : H(v.keepValuesOnUnmount), we = H(x);
    if (B || !v || Y.pendingUnmount[Q.id]) {
      v == null || v.removePathState(we, G);
      return;
    }
    Y.pendingUnmount[Q.id] = !0;
    const ge = v.getPathState(we);
    if (Array.isArray(ge == null ? void 0 : ge.id) && (ge != null && ge.multiple) ? ge != null && ge.id.includes(Q.id) : (ge == null ? void 0 : ge.id) === Q.id) {
      if (ge != null && ge.multiple && Array.isArray(ge.value)) {
        const Fe = ge.value.findIndex((je) => it(je, H(Q.checkedValue)));
        if (Fe > -1) {
          const je = [...ge.value];
          je.splice(Fe, 1), v.setFieldValue(we, je);
        }
        Array.isArray(ge.id) && ge.id.splice(ge.id.indexOf(Q.id), 1);
      } else
        v.unsetPathValue(H(x));
      v.removePathState(we, G);
    }
  }), Q;
}
function pf(e) {
  const t = () => ({
    initialValue: void 0,
    validateOnMount: !1,
    bails: !0,
    label: void 0,
    validateOnValueUpdate: !0,
    keepValueOnUnmount: void 0,
    syncVModel: !1,
    controlled: !0
  }), n = !!(e != null && e.syncVModel), r = typeof (e == null ? void 0 : e.syncVModel) == "string" ? e.syncVModel : (e == null ? void 0 : e.modelPropName) || "modelValue", i = n && !("initialValue" in (e || {})) ? ps(cn(), r) : e == null ? void 0 : e.initialValue;
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
function hf(e, t, n) {
  const r = n != null && n.standalone ? void 0 : cl(Is), i = n == null ? void 0 : n.checkedValue, s = n == null ? void 0 : n.uncheckedValue;
  function o(a) {
    const l = a.handleChange, u = T(() => {
      const c = H(a.value), m = H(i);
      return Array.isArray(c) ? c.findIndex((p) => it(p, m)) >= 0 : it(m, c);
    });
    function f(c, m = !0) {
      var p, h;
      if (u.value === ((p = c == null ? void 0 : c.target) === null || p === void 0 ? void 0 : p.checked)) {
        m && a.validate();
        return;
      }
      const S = H(e), v = r == null ? void 0 : r.getPathState(S), x = ai(c);
      let k = (h = H(i)) !== null && h !== void 0 ? h : x;
      r && (v != null && v.multiple) && v.type === "checkbox" ? k = Uo(dt(r.values, S) || [], k, void 0) : (n == null ? void 0 : n.type) === "checkbox" && (k = Uo(H(a.value), k, H(s))), l(k, m);
    }
    return Object.assign(Object.assign({}, a), {
      checked: u,
      checkedValue: i,
      uncheckedValue: s,
      handleChange: f
    });
  }
  return o(bl(e, t, n));
}
function mf({ prop: e, value: t, handleChange: n, shouldValidate: r }) {
  const i = cn();
  if (!i || !e) {
    process.env.NODE_ENV !== "production" && console.warn("Failed to setup model events because `useField` was not called in setup.");
    return;
  }
  const s = typeof e == "string" ? e : "modelValue", o = `update:${s}`;
  s in i.props && (Ie(t, (a) => {
    it(a, ps(i, s)) || i.emit(o, a);
  }), Ie(() => ps(i, s), (a) => {
    if (a === Ro && t.value === void 0)
      return;
    const l = a === Ro ? void 0 : a;
    it(l, t.value) || n(l, r());
  }));
}
function ps(e, t) {
  if (e)
    return e.props[t];
}
let vf = 0;
const Tr = ["bails", "fieldsCount", "id", "multiple", "type", "validate"];
function wl(e) {
  const t = (e == null ? void 0 : e.initialValues) || {}, n = Object.assign({}, H(t)), r = D(e == null ? void 0 : e.validationSchema);
  return r && $t(r) && ct(r.cast) ? Ae(r.cast(n) || {}) : Ae(n);
}
function gf(e) {
  var t;
  const n = vf++, r = (e == null ? void 0 : e.name) || "Form";
  let i = 0;
  const s = He(!1), o = He(!1), a = He(0), l = [], u = kt(wl(e)), f = He([]), c = He({}), m = He({}), p = Id(() => {
    m.value = f.value.reduce((g, y) => (g[Zn(H(y.path))] = y, g), {});
  });
  function h(g, y) {
    const $ = I(g);
    if (!$) {
      typeof g == "string" && (c.value[Zn(g)] = fs(y));
      return;
    }
    if (typeof g == "string") {
      const P = Zn(g);
      c.value[P] && delete c.value[P];
    }
    $.errors = fs(y), $.valid = !$.errors.length;
  }
  function S(g) {
    ot(g).forEach((y) => {
      h(y, g[y]);
    });
  }
  e != null && e.initialErrors && S(e.initialErrors);
  const v = T(() => {
    const g = f.value.reduce((y, $) => ($.errors.length && (y[H($.path)] = $.errors), y), {});
    return Object.assign(Object.assign({}, c.value), g);
  }), x = T(() => ot(v.value).reduce((g, y) => {
    const $ = v.value[y];
    return $ != null && $.length && (g[y] = $[0]), g;
  }, {})), k = T(() => f.value.reduce((g, y) => (g[H(y.path)] = { name: H(y.path) || "", label: y.label || "" }, g), {})), C = T(() => f.value.reduce((g, y) => {
    var $;
    return g[H(y.path)] = ($ = y.bails) !== null && $ !== void 0 ? $ : !0, g;
  }, {})), G = Object.assign({}, (e == null ? void 0 : e.initialErrors) || {}), L = (t = e == null ? void 0 : e.keepValuesOnUnmount) !== null && t !== void 0 ? t : !1, { initialValues: K, originalInitialValues: X, setInitialValues: re } = bf(f, u, e), M = yf(f, u, X, x), Y = T(() => f.value.reduce((g, y) => {
    const $ = dt(u, H(y.path));
    return At(g, H(y.path), $), g;
  }, {})), N = e == null ? void 0 : e.validationSchema;
  function ne(g, y) {
    var $, P;
    const Z = T(() => dt(K.value, H(g))), ae = m.value[H(g)], ee = (y == null ? void 0 : y.type) === "checkbox" || (y == null ? void 0 : y.type) === "radio";
    if (ae && ee) {
      ae.multiple = !0;
      const Je = i++;
      return Array.isArray(ae.id) ? ae.id.push(Je) : ae.id = [ae.id, Je], ae.fieldsCount++, ae.__flags.pendingUnmount[Je] = !1, ae;
    }
    const Oe = T(() => dt(u, H(g))), xe = H(g), ue = U.findIndex((Je) => Je === xe);
    ue !== -1 && U.splice(ue, 1);
    const ke = T(() => {
      var Je, et, Vt, Zt;
      const Jt = H(N);
      if ($t(Jt))
        return (et = (Je = Jt.describe) === null || Je === void 0 ? void 0 : Je.call(Jt, H(g)).required) !== null && et !== void 0 ? et : !1;
      const Xn = H(y == null ? void 0 : y.schema);
      return $t(Xn) && (Zt = (Vt = Xn.describe) === null || Vt === void 0 ? void 0 : Vt.call(Xn).required) !== null && Zt !== void 0 ? Zt : !1;
    }), Se = i++, Te = kt({
      id: Se,
      path: g,
      touched: !1,
      pending: !1,
      valid: !0,
      validated: !!(!(($ = G[xe]) === null || $ === void 0) && $.length),
      required: ke,
      initialValue: Z,
      errors: Xr([]),
      bails: (P = y == null ? void 0 : y.bails) !== null && P !== void 0 ? P : !1,
      label: y == null ? void 0 : y.label,
      type: (y == null ? void 0 : y.type) || "default",
      value: Oe,
      multiple: !1,
      __flags: {
        pendingUnmount: { [Se]: !1 },
        pendingReset: !1
      },
      fieldsCount: 1,
      validate: y == null ? void 0 : y.validate,
      dirty: T(() => !it(D(Oe), D(Z)))
    });
    return f.value.push(Te), m.value[xe] = Te, p(), x.value[xe] && !G[xe] && ht(() => {
      Et(xe, { mode: "silent" });
    }), ei(g) && Ie(g, (Je) => {
      p();
      const et = Ae(Oe.value);
      m.value[Je] = Te, ht(() => {
        At(u, Je, et);
      });
    }), Te;
  }
  const fe = qo(xr, 5), j = qo(xr, 5), E = ds(async (g) => await (g === "silent" ? fe() : j()), (g, [y]) => {
    const $ = ot(B.errorBag.value), Z = [
      .../* @__PURE__ */ new Set([...ot(g.results), ...f.value.map((ae) => ae.path), ...$])
    ].sort().reduce((ae, ee) => {
      var Oe;
      const xe = ee, ue = I(xe) || R(xe), ke = ((Oe = g.results[xe]) === null || Oe === void 0 ? void 0 : Oe.errors) || [], Se = H(ue == null ? void 0 : ue.path) || xe, Te = wf({ errors: ke, valid: !ke.length }, ae.results[Se]);
      return ae.results[Se] = Te, Te.valid || (ae.errors[Se] = Te.errors[0]), ue && c.value[Se] && delete c.value[Se], ue ? (ue.valid = Te.valid, y === "silent" || y === "validated-only" && !ue.validated || h(ue, Te.errors), ae) : (h(Se, ke), ae);
    }, {
      valid: g.valid,
      results: {},
      errors: {},
      source: g.source
    });
    return g.values && (Z.values = g.values, Z.source = g.source), ot(Z.results).forEach((ae) => {
      var ee;
      const Oe = I(ae);
      Oe && y !== "silent" && (y === "validated-only" && !Oe.validated || h(Oe, (ee = Z.results[ae]) === null || ee === void 0 ? void 0 : ee.errors));
    }), Z;
  });
  function V(g) {
    f.value.forEach(g);
  }
  function I(g) {
    const y = typeof g == "string" ? Zn(g) : g;
    return typeof y == "string" ? m.value[y] : y;
  }
  function R(g) {
    return f.value.filter(($) => g.startsWith(H($.path))).reduce(($, P) => $ ? P.path.length > $.path.length ? P : $ : P, void 0);
  }
  let U = [], W;
  function le(g) {
    return U.push(g), W || (W = ht(() => {
      [...U].sort().reverse().forEach(($) => {
        Ho(u, $);
      }), U = [], W = null;
    })), W;
  }
  function ye(g) {
    return function($, P) {
      return function(ae) {
        return ae instanceof Event && (ae.preventDefault(), ae.stopPropagation()), V((ee) => ee.touched = !0), s.value = !0, a.value++, yt().then((ee) => {
          const Oe = Ae(u);
          if (ee.valid && typeof $ == "function") {
            const xe = Ae(Y.value);
            let ue = g ? xe : Oe;
            return ee.values && (ue = ee.source === "schema" ? ee.values : Object.assign({}, ue, ee.values)), $(ue, {
              evt: ae,
              controlledValues: xe,
              setErrors: S,
              setFieldError: h,
              setTouched: Rt,
              setFieldTouched: je,
              setValues: Ve,
              setFieldValue: we,
              resetForm: Bt,
              resetField: Kt
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
  function he(g, y) {
    const $ = f.value.findIndex((Z) => Z.path === g && (Array.isArray(Z.id) ? Z.id.includes(y) : Z.id === y)), P = f.value[$];
    if (!($ === -1 || !P)) {
      if (ht(() => {
        Et(g, { mode: "silent", warn: !1 });
      }), P.multiple && P.fieldsCount && P.fieldsCount--, Array.isArray(P.id)) {
        const Z = P.id.indexOf(y);
        Z >= 0 && P.id.splice(Z, 1), delete P.__flags.pendingUnmount[y];
      }
      (!P.multiple || P.fieldsCount <= 0) && (f.value.splice($, 1), wr(g), p(), delete m.value[g]);
    }
  }
  function A(g) {
    ot(m.value).forEach((y) => {
      y.startsWith(g) && delete m.value[y];
    }), f.value = f.value.filter((y) => !y.path.startsWith(g)), ht(() => {
      p();
    });
  }
  const B = {
    name: r,
    formId: n,
    values: u,
    controlledValues: Y,
    errorBag: v,
    errors: x,
    schema: N,
    submitCount: a,
    meta: M,
    isSubmitting: s,
    isValidating: o,
    fieldArrays: l,
    keepValuesOnUnmount: L,
    validateSchema: D(N) ? E : void 0,
    validate: yt,
    setFieldError: h,
    validateField: Et,
    setFieldValue: we,
    setValues: Ve,
    setErrors: S,
    setFieldTouched: je,
    setTouched: Rt,
    resetForm: Bt,
    resetField: Kt,
    handleSubmit: Q,
    useFieldModel: $r,
    defineInputBinds: Oi,
    defineComponentBinds: w,
    defineField: qn,
    stageInitialValue: ki,
    unsetInitialValue: wr,
    setFieldInitialValue: Un,
    createPathState: ne,
    getPathState: I,
    unsetPathValue: le,
    removePathState: he,
    initialValues: K,
    getAllPathStates: () => f.value,
    destroyPath: A,
    isFieldTouched: gt,
    isFieldDirty: Yt,
    isFieldValid: Gt
  };
  function we(g, y, $ = !0) {
    const P = Ae(y), Z = typeof g == "string" ? g : g.path;
    I(Z) || ne(Z), At(u, Z, P), $ && Et(Z);
  }
  function ge(g, y = !0) {
    ot(u).forEach(($) => {
      delete u[$];
    }), ot(g).forEach(($) => {
      we($, g[$], !1);
    }), y && yt();
  }
  function Ve(g, y = !0) {
    mr(u, g), l.forEach(($) => $ && $.reset()), y && yt();
  }
  function Fe(g, y) {
    const $ = I(H(g)) || ne(g);
    return T({
      get() {
        return $.value;
      },
      set(P) {
        var Z;
        const ae = H(g);
        we(ae, P, (Z = H(y)) !== null && Z !== void 0 ? Z : !1);
      }
    });
  }
  function je(g, y) {
    const $ = I(g);
    $ && ($.touched = y);
  }
  function gt(g) {
    const y = I(g);
    return y ? y.touched : f.value.filter(($) => $.path.startsWith(g)).some(($) => $.touched);
  }
  function Yt(g) {
    const y = I(g);
    return y ? y.dirty : f.value.filter(($) => $.path.startsWith(g)).some(($) => $.dirty);
  }
  function Gt(g) {
    const y = I(g);
    return y ? y.valid : f.value.filter(($) => $.path.startsWith(g)).every(($) => $.valid);
  }
  function Rt(g) {
    if (typeof g == "boolean") {
      V((y) => {
        y.touched = g;
      });
      return;
    }
    ot(g).forEach((y) => {
      je(y, !!g[y]);
    });
  }
  function Kt(g, y) {
    var $;
    const P = y && "value" in y ? y.value : dt(K.value, g), Z = I(g);
    Z && (Z.__flags.pendingReset = !0), Un(g, Ae(P), !0), we(g, P, !1), je(g, ($ = y == null ? void 0 : y.touched) !== null && $ !== void 0 ? $ : !1), h(g, (y == null ? void 0 : y.errors) || []), ht(() => {
      Z && (Z.__flags.pendingReset = !1);
    });
  }
  function Bt(g, y) {
    let $ = Ae(g != null && g.values ? g.values : X.value);
    $ = y != null && y.force ? $ : mr(X.value, $), $ = $t(N) && ct(N.cast) ? N.cast($) : $, re($, { force: y == null ? void 0 : y.force }), V((P) => {
      var Z;
      P.__flags.pendingReset = !0, P.validated = !1, P.touched = ((Z = g == null ? void 0 : g.touched) === null || Z === void 0 ? void 0 : Z[H(P.path)]) || !1, we(H(P.path), dt($, H(P.path)), !1), h(H(P.path), void 0);
    }), y != null && y.force ? ge($, !1) : Ve($, !1), S((g == null ? void 0 : g.errors) || {}), a.value = (g == null ? void 0 : g.submitCount) || 0, ht(() => {
      yt({ mode: "silent" }), V((P) => {
        P.__flags.pendingReset = !1;
      });
    });
  }
  async function yt(g) {
    const y = (g == null ? void 0 : g.mode) || "force";
    if (y === "force" && V((ee) => ee.validated = !0), B.validateSchema)
      return B.validateSchema(y);
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
      }, ee.value && At(ae, ee.key, ee.value), ee.errors.length && (Z[ee.key] = ee.errors[0]);
    return {
      valid: $.every((ee) => ee.valid),
      results: P,
      errors: Z,
      values: ae,
      source: "fields"
    };
  }
  async function Et(g, y) {
    var $;
    const P = I(g);
    if (P && (y == null ? void 0 : y.mode) !== "silent" && (P.validated = !0), N) {
      const { results: ae } = await E((y == null ? void 0 : y.mode) || "validated-only");
      return ae[g] || { errors: [], valid: !0 };
    }
    return P != null && P.validate ? P.validate(y) : (!P && (($ = y == null ? void 0 : y.warn) !== null && $ !== void 0 ? $ : !0) && process.env.NODE_ENV !== "production" && Uu(`field with path ${g} was not found`), Promise.resolve({ errors: [], valid: !0 }));
  }
  function wr(g) {
    Ho(K.value, g);
  }
  function ki(g, y, $ = !1) {
    Un(g, y), At(u, g, y), $ && !(e != null && e.initialValues) && At(X.value, g, Ae(y));
  }
  function Un(g, y, $ = !1) {
    At(K.value, g, Ae(y)), $ && At(X.value, g, Ae(y));
  }
  async function xr() {
    const g = D(N);
    if (!g)
      return { valid: !0, results: {}, errors: {}, source: "none" };
    o.value = !0;
    const y = oi(g) || $t(g) ? await Zd(g, u) : await Jd(g, u, {
      names: k.value,
      bailsMap: C.value
    });
    return o.value = !1, y;
  }
  const Sr = Q((g, { evt: y }) => {
    ul(y) && y.target.submit();
  });
  yr(() => {
    if (e != null && e.initialErrors && S(e.initialErrors), e != null && e.initialTouched && Rt(e.initialTouched), e != null && e.validateOnMount) {
      yt();
      return;
    }
    B.validateSchema && B.validateSchema("silent");
  }), ei(N) && Ie(N, () => {
    var g;
    (g = B.validateSchema) === null || g === void 0 || g.call(B, "validated-only");
  }), ts(Is, B), process.env.NODE_ENV !== "production" && (sf(B), Ie(() => Object.assign(Object.assign({ errors: v.value }, M.value), { values: u, isSubmitting: s.value, isValidating: o.value, submitCount: a.value }), Rn, {
    deep: !0
  }));
  function qn(g, y) {
    const $ = ct(y) || y == null ? void 0 : y.label, P = I(H(g)) || ne(g, { label: $ }), Z = () => ct(y) ? y(Cr(P, Tr)) : y || {};
    function ae() {
      var ke;
      P.touched = !0, ((ke = Z().validateOnBlur) !== null && ke !== void 0 ? ke : Jn().validateOnBlur) && Et(H(P.path));
    }
    function ee() {
      var ke;
      ((ke = Z().validateOnInput) !== null && ke !== void 0 ? ke : Jn().validateOnInput) && ht(() => {
        Et(H(P.path));
      });
    }
    function Oe() {
      var ke;
      ((ke = Z().validateOnChange) !== null && ke !== void 0 ? ke : Jn().validateOnChange) && ht(() => {
        Et(H(P.path));
      });
    }
    const xe = T(() => {
      const ke = {
        onChange: Oe,
        onInput: ee,
        onBlur: ae
      };
      return ct(y) ? Object.assign(Object.assign({}, ke), y(Cr(P, Tr)).props || {}) : y != null && y.props ? Object.assign(Object.assign({}, ke), y.props(Cr(P, Tr))) : ke;
    });
    return [Fe(g, () => {
      var ke, Se, Te;
      return (Te = (ke = Z().validateOnModelUpdate) !== null && ke !== void 0 ? ke : (Se = Jn()) === null || Se === void 0 ? void 0 : Se.validateOnModelUpdate) !== null && Te !== void 0 ? Te : !0;
    }), xe];
  }
  function $r(g) {
    return Array.isArray(g) ? g.map((y) => Fe(y, !0)) : Fe(g);
  }
  function Oi(g, y) {
    const [$, P] = qn(g, y);
    function Z() {
      P.value.onBlur();
    }
    function ae(Oe) {
      const xe = ai(Oe);
      we(H(g), xe, !1), P.value.onInput();
    }
    function ee(Oe) {
      const xe = ai(Oe);
      we(H(g), xe, !1), P.value.onChange();
    }
    return T(() => Object.assign(Object.assign({}, P.value), {
      onBlur: Z,
      onInput: ae,
      onChange: ee,
      value: $.value
    }));
  }
  function w(g, y) {
    const [$, P] = qn(g, y), Z = I(H(g));
    function ae(ee) {
      $.value = ee;
    }
    return T(() => {
      const ee = ct(y) ? y(Cr(Z, Tr)) : y || {};
      return Object.assign({ [ee.model || "modelValue"]: $.value, [`onUpdate:${ee.model || "modelValue"}`]: ae }, P.value);
    });
  }
  const d = Object.assign(Object.assign({}, B), { values: Hu(u), handleReset: () => Bt(), submitForm: Sr });
  return ts(Cd, d), d;
}
function yf(e, t, n, r) {
  const i = {
    touched: "some",
    pending: "some",
    valid: "every"
  }, s = T(() => !it(t, D(n)));
  function o() {
    const l = e.value;
    return ot(i).reduce((u, f) => {
      const c = i[f];
      return u[f] = l[c]((m) => m[f]), u;
    }, {});
  }
  const a = kt(o());
  return ja(() => {
    const l = o();
    a.touched = l.touched, a.valid = l.valid, a.pending = l.pending;
  }), T(() => Object.assign(Object.assign({ initialValues: D(n) }, a), { valid: a.valid && !ot(r.value).length, dirty: s.value }));
}
function bf(e, t, n) {
  const r = wl(n), i = He(r), s = He(Ae(r));
  function o(a, l) {
    l != null && l.force ? (i.value = Ae(a), s.value = Ae(a)) : (i.value = mr(Ae(i.value) || {}, Ae(a)), s.value = mr(Ae(s.value) || {}, Ae(a))), l != null && l.updateFields && e.value.forEach((u) => {
      if (u.touched)
        return;
      const c = dt(i.value, H(u.path));
      At(t, H(u.path), Ae(c));
    });
  }
  return {
    initialValues: i,
    originalInitialValues: s,
    setInitialValues: o
  };
}
function wf(e, t) {
  return t ? {
    valid: e.valid && t.valid,
    errors: [...e.errors, ...t.errors]
  } : e;
}
const xf = /* @__PURE__ */ $e({
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
    const n = ns(e, "validationSchema"), r = ns(e, "keepValues"), { errors: i, errorBag: s, values: o, meta: a, isSubmitting: l, isValidating: u, submitCount: f, controlledValues: c, validate: m, validateField: p, handleReset: h, resetForm: S, handleSubmit: v, setErrors: x, setFieldError: k, setFieldValue: C, setValues: G, setFieldTouched: L, setTouched: K, resetField: X } = gf({
      validationSchema: n.value ? n : void 0,
      initialValues: e.initialValues,
      initialErrors: e.initialErrors,
      initialTouched: e.initialTouched,
      validateOnMount: e.validateOnMount,
      keepValuesOnUnmount: r,
      name: e.name
    }), re = v((V, { evt: I }) => {
      ul(I) && I.target.submit();
    }, e.onInvalidSubmit), M = e.onSubmit ? v(e.onSubmit, e.onInvalidSubmit) : re;
    function Y(V) {
      js(V) && V.preventDefault(), h(), typeof t.attrs.onReset == "function" && t.attrs.onReset();
    }
    function N(V, I) {
      return v(typeof V == "function" && !I ? V : I, e.onInvalidSubmit)(V);
    }
    function ne() {
      return Ae(o);
    }
    function fe() {
      return Ae(a.value);
    }
    function j() {
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
        validate: m,
        validateField: p,
        handleSubmit: N,
        handleReset: h,
        submitForm: re,
        setErrors: x,
        setFieldError: k,
        setFieldValue: C,
        setValues: G,
        setFieldTouched: L,
        setTouched: K,
        resetForm: S,
        resetField: X,
        getValues: ne,
        getMeta: fe,
        getErrors: j
      };
    }
    return t.expose({
      setFieldError: k,
      setErrors: x,
      setFieldValue: C,
      setValues: G,
      setFieldTouched: L,
      setTouched: K,
      resetForm: S,
      validate: m,
      validateField: p,
      resetField: X,
      getValues: ne,
      getMeta: fe,
      getErrors: j,
      values: o,
      meta: a,
      errors: i
    }), function() {
      const I = e.as === "form" ? e.as : e.as ? As(e.as) : null, R = jd(I, t, E);
      return I ? Qi(I, Object.assign(Object.assign(Object.assign({}, I === "form" ? {
        // Disables native validation as vee-validate will handle it.
        novalidate: !0
      } : {}), t.attrs), { onSubmit: M, onReset: Y }), R) : R;
    };
  }
}), Sf = xf;
function Bs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hi, Go;
function $f() {
  if (Go) return Hi;
  Go = 1;
  function e(x) {
    this._maxSize = x, this.clear();
  }
  e.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, e.prototype.get = function(x) {
    return this._values[x];
  }, e.prototype.set = function(x, k) {
    return this._size >= this._maxSize && this.clear(), x in this._values || this._size++, this._values[x] = k;
  };
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, n = /^\d+$/, r = /^\d/, i = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, s = /^\s*(['"]?)(.*?)(\1)\s*$/, o = 512, a = new e(o), l = new e(o), u = new e(o);
  Hi = {
    Cache: e,
    split: c,
    normalizePath: f,
    setter: function(x) {
      var k = f(x);
      return l.get(x) || l.set(x, function(G, L) {
        for (var K = 0, X = k.length, re = G; K < X - 1; ) {
          var M = k[K];
          if (M === "__proto__" || M === "constructor" || M === "prototype")
            return G;
          re = re[k[K++]];
        }
        re[k[K]] = L;
      });
    },
    getter: function(x, k) {
      var C = f(x);
      return u.get(x) || u.set(x, function(L) {
        for (var K = 0, X = C.length; K < X; )
          if (L != null || !k) L = L[C[K++]];
          else return;
        return L;
      });
    },
    join: function(x) {
      return x.reduce(function(k, C) {
        return k + (p(C) || n.test(C) ? "[" + C + "]" : (k ? "." : "") + C);
      }, "");
    },
    forEach: function(x, k, C) {
      m(Array.isArray(x) ? x : c(x), k, C);
    }
  };
  function f(x) {
    return a.get(x) || a.set(
      x,
      c(x).map(function(k) {
        return k.replace(s, "$2");
      })
    );
  }
  function c(x) {
    return x.match(t) || [""];
  }
  function m(x, k, C) {
    var G = x.length, L, K, X, re;
    for (K = 0; K < G; K++)
      L = x[K], L && (v(L) && (L = '"' + L + '"'), re = p(L), X = !re && /^\d+$/.test(L), k.call(C, L, re, X, K, x));
  }
  function p(x) {
    return typeof x == "string" && x && ["'", '"'].indexOf(x.charAt(0)) !== -1;
  }
  function h(x) {
    return x.match(r) && !x.match(n);
  }
  function S(x) {
    return i.test(x);
  }
  function v(x) {
    return !p(x) && (h(x) || S(x));
  }
  return Hi;
}
var xn = $f(), Ui, Ko;
function _f() {
  if (Ko) return Ui;
  Ko = 1;
  const e = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, t = (f) => f.match(e) || [], n = (f) => f[0].toUpperCase() + f.slice(1), r = (f, c) => t(f).join(c).toLowerCase(), i = (f) => t(f).reduce(
    (c, m) => `${c}${c ? m[0].toUpperCase() + m.slice(1).toLowerCase() : m.toLowerCase()}`,
    ""
  );
  return Ui = {
    words: t,
    upperFirst: n,
    camelCase: i,
    pascalCase: (f) => n(i(f)),
    snakeCase: (f) => r(f, "_"),
    kebabCase: (f) => r(f, "-"),
    sentenceCase: (f) => n(r(f, " ")),
    titleCase: (f) => t(f).map(n).join(" ")
  }, Ui;
}
var qi = _f(), Pr = { exports: {} }, Zo;
function kf() {
  if (Zo) return Pr.exports;
  Zo = 1, Pr.exports = function(i) {
    return e(t(i), i);
  }, Pr.exports.array = e;
  function e(i, s) {
    var o = i.length, a = new Array(o), l = {}, u = o, f = n(s), c = r(i);
    for (s.forEach(function(p) {
      if (!c.has(p[0]) || !c.has(p[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); u--; )
      l[u] || m(i[u], u, /* @__PURE__ */ new Set());
    return a;
    function m(p, h, S) {
      if (S.has(p)) {
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
      if (!l[h]) {
        l[h] = !0;
        var x = f.get(p) || /* @__PURE__ */ new Set();
        if (x = Array.from(x), h = x.length) {
          S.add(p);
          do {
            var k = x[--h];
            m(k, c.get(k), S);
          } while (h);
          S.delete(p);
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
  return Pr.exports;
}
var Of = kf();
const Ef = /* @__PURE__ */ Bs(Of), Vf = Object.prototype.toString, Af = Error.prototype.toString, Cf = RegExp.prototype.toString, Tf = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", Pf = /^Symbol\((.*)\)(.*)$/;
function Nf(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Jo(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const n = typeof e;
  if (n === "number") return Nf(e);
  if (n === "string") return t ? `"${e}"` : e;
  if (n === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (n === "symbol") return Tf.call(e).replace(Pf, "Symbol($1)");
  const r = Vf.call(e).slice(8, -1);
  return r === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : r === "Error" || e instanceof Error ? "[" + Af.call(e) + "]" : r === "RegExp" ? Cf.call(e) : null;
}
function ln(e, t) {
  let n = Jo(e, t);
  return n !== null ? n : JSON.stringify(e, function(r, i) {
    let s = Jo(this[r], t);
    return s !== null ? s : i;
  }, 2);
}
function xl(e) {
  return e == null ? [] : [].concat(e);
}
let Sl, $l, _l, Df = /\$\{\s*(\w+)\s*\}/g;
Sl = Symbol.toStringTag;
class Qo {
  constructor(t, n, r, i) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[Sl] = "Error", this.name = "ValidationError", this.value = n, this.path = r, this.type = i, this.errors = [], this.inner = [], xl(t).forEach((s) => {
      if (ut.isError(s)) {
        this.errors.push(...s.errors);
        const o = s.inner.length ? s.inner : [s];
        this.inner.push(...o);
      } else
        this.errors.push(s);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
$l = Symbol.hasInstance;
_l = Symbol.toStringTag;
class ut extends Error {
  static formatError(t, n) {
    const r = n.label || n.path || "this";
    return n = Object.assign({}, n, {
      path: r,
      originalPath: n.path
    }), typeof t == "string" ? t.replace(Df, (i, s) => ln(n[s])) : typeof t == "function" ? t(n) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, n, r, i, s) {
    const o = new Qo(t, n, r, i);
    if (s)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[_l] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, ut);
  }
  static [$l](t) {
    return Qo[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
  }
}
let Tt = {
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
    const i = r != null && r !== n ? ` (cast from the value \`${ln(r, !0)}\`).` : ".";
    return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${ln(n, !0)}\`` + i : `${e} must match the configured type. The validated value was: \`${ln(n, !0)}\`` + i;
  }
}, st = {
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
}, Ff = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, hs = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, Mf = {
  isValue: "${path} field must be ${value}"
}, Yr = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, If = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, jf = {
  notType: (e) => {
    const {
      path: t,
      value: n,
      spec: r
    } = e, i = r.types.length;
    if (Array.isArray(n)) {
      if (n.length < i) return `${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${ln(n, !0)}\``;
      if (n.length > i) return `${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${ln(n, !0)}\``;
    }
    return ut.formatError(Tt.notType, e);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: Tt,
  string: st,
  number: Ff,
  date: hs,
  object: Yr,
  array: If,
  boolean: Mf,
  tuple: jf
});
const zs = (e) => e && e.__isYupSchema__;
class li {
  static fromOptions(t, n) {
    if (!n.then && !n.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: r,
      then: i,
      otherwise: s
    } = n, o = typeof r == "function" ? r : (...a) => a.every((l) => l === r);
    return new li(t, (a, l) => {
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
    if (!zs(i)) throw new TypeError("conditions must return a schema object");
    return i.resolve(n);
  }
}
const Nr = {
  context: "$",
  value: "."
};
class Cn {
  constructor(t, n = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Nr.context, this.isValue = this.key[0] === Nr.value, this.isSibling = !this.isContext && !this.isValue;
    let r = this.isContext ? Nr.context : this.isValue ? Nr.value : "";
    this.path = this.key.slice(r.length), this.getter = this.path && xn.getter(this.path, !0), this.map = n.map;
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
Cn.prototype.__isYupRef = !0;
const yn = (e) => e == null;
function Pn(e) {
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
      message: m,
      skipAbsent: p
    } = e;
    let {
      parent: h,
      context: S,
      abortEarly: v = o.spec.abortEarly,
      disableStackTrace: x = o.spec.disableStackTrace
    } = i;
    function k(N) {
      return Cn.isRef(N) ? N.getValue(n, h, S) : N;
    }
    function C(N = {}) {
      const ne = Object.assign({
        value: n,
        originalValue: s,
        label: o.spec.label,
        path: N.path || r,
        spec: o.spec,
        disableStackTrace: N.disableStackTrace || x
      }, c, N.params);
      for (const j of Object.keys(ne)) ne[j] = k(ne[j]);
      const fe = new ut(ut.formatError(N.message || m, ne), n, ne.path, N.type || u, ne.disableStackTrace);
      return fe.params = ne, fe;
    }
    const G = v ? a : l;
    let L = {
      path: r,
      parent: h,
      type: u,
      from: i.from,
      createError: C,
      resolve: k,
      options: i,
      originalValue: s,
      schema: o
    };
    const K = (N) => {
      ut.isError(N) ? G(N) : N ? l(null) : G(C());
    }, X = (N) => {
      ut.isError(N) ? G(N) : a(N);
    };
    if (p && yn(n))
      return K(!0);
    let M;
    try {
      var Y;
      if (M = f.call(L, n, L), typeof ((Y = M) == null ? void 0 : Y.then) == "function") {
        if (i.sync)
          throw new Error(`Validation test of type: "${L.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(M).then(K, X);
      }
    } catch (N) {
      X(N);
      return;
    }
    K(M);
  }
  return t.OPTIONS = e, t;
}
function Lf(e, t, n, r = n) {
  let i, s, o;
  return t ? (xn.forEach(t, (a, l, u) => {
    let f = l ? a.slice(1, a.length - 1) : a;
    e = e.resolve({
      context: r,
      parent: i,
      value: n
    });
    let c = e.type === "tuple", m = u ? parseInt(f, 10) : 0;
    if (e.innerType || c) {
      if (c && !u) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (n && m >= n.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);
      i = n, n = n && n[m], e = c ? e.spec.types[m] : e.innerType;
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
class ui extends Set {
  describe() {
    const t = [];
    for (const n of this.values())
      t.push(Cn.isRef(n) ? n.describe() : n);
    return t;
  }
  resolveAll(t) {
    let n = [];
    for (const r of this.values())
      n.push(t(r));
    return n;
  }
  clone() {
    return new ui(this.values());
  }
  merge(t, n) {
    const r = this.clone();
    return t.forEach((i) => r.add(i)), n.forEach((i) => r.delete(i)), r;
  }
}
function Dn(e, t = /* @__PURE__ */ new Map()) {
  if (zs(e) || !e || typeof e != "object") return e;
  if (t.has(e)) return t.get(e);
  let n;
  if (e instanceof Date)
    n = new Date(e.getTime()), t.set(e, n);
  else if (e instanceof RegExp)
    n = new RegExp(e), t.set(e, n);
  else if (Array.isArray(e)) {
    n = new Array(e.length), t.set(e, n);
    for (let r = 0; r < e.length; r++) n[r] = Dn(e[r], t);
  } else if (e instanceof Map) {
    n = /* @__PURE__ */ new Map(), t.set(e, n);
    for (const [r, i] of e.entries()) n.set(r, Dn(i, t));
  } else if (e instanceof Set) {
    n = /* @__PURE__ */ new Set(), t.set(e, n);
    for (const r of e) n.add(Dn(r, t));
  } else if (e instanceof Object) {
    n = {}, t.set(e, n);
    for (const [r, i] of Object.entries(e)) n[r] = Dn(i, t);
  } else
    throw Error(`Unable to clone ${e}`);
  return n;
}
class Lt {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new ui(), this._blacklist = new ui(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(Tt.notType);
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
    return n.type = this.type, n._typeCheck = this._typeCheck, n._whitelist = this._whitelist.clone(), n._blacklist = this._blacklist.clone(), n.internalTests = Object.assign({}, this.internalTests), n.exclusiveTests = Object.assign({}, this.exclusiveTests), n.deps = [...this.deps], n.conditions = [...this.conditions], n.tests = [...this.tests], n.transforms = [...this.transforms], n.spec = Dn(Object.assign({}, this.spec, t)), n;
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
      if (i && yn(s))
        return s;
      let o = ln(t), a = ln(s);
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
    } = t, f = (S) => {
      i || (i = !0, n(S, o));
    }, c = (S) => {
      i || (i = !0, r(S, o));
    }, m = s.length, p = [];
    if (!m) return c([]);
    let h = {
      value: o,
      originalValue: a,
      path: l,
      options: u,
      schema: this
    };
    for (let S = 0; S < s.length; S++) {
      const v = s[S];
      v(h, f, function(k) {
        k && (Array.isArray(k) ? p.push(...k) : p.push(k)), --m <= 0 && c(p);
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
    return (c, m, p) => this.resolve(f)._validate(u, f, m, p);
  }
  validate(t, n) {
    var r;
    let i = this.resolve(Object.assign({}, n, {
      value: t
    })), s = (r = n == null ? void 0 : n.disableStackTrace) != null ? r : i.spec.disableStackTrace;
    return new Promise((o, a) => i._validate(t, n, (l, u) => {
      ut.isError(l) && (l.value = u), a(l);
    }, (l, u) => {
      l.length ? a(new ut(l, u, void 0, void 0, s)) : o(u);
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
      throw ut.isError(a) && (a.value = l), a;
    }, (a, l) => {
      if (a.length) throw new ut(a, t, void 0, void 0, o);
      s = l;
    }), s;
  }
  isValid(t, n) {
    return this.validate(t, n).then(() => !0, (r) => {
      if (ut.isError(r)) return !1;
      throw r;
    });
  }
  isValidSync(t, n) {
    try {
      return this.validateSync(t, n), !0;
    } catch (r) {
      if (ut.isError(r)) return !1;
      throw r;
    }
  }
  _getDefault(t) {
    let n = this.spec.default;
    return n == null ? n : typeof n == "function" ? n.call(this, t) : Dn(n);
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
    return r.internalTests.nullable = Pn({
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
    return r.internalTests.optionality = Pn({
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
  defined(t = Tt.defined) {
    return this.optionality(!1, t);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(t = Tt.notNull) {
    return this.nullability(!1, t);
  }
  required(t = Tt.required) {
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
    }, n.message === void 0 && (n.message = Tt.default), typeof n.test != "function") throw new TypeError("`test` is a required parameters");
    let r = this.clone(), i = Pn(n), s = n.exclusive || n.name && r.exclusiveTests[n.name] === !0;
    if (n.exclusive && !n.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return n.name && (r.exclusiveTests[n.name] = !!n.exclusive), r.tests = r.tests.filter((o) => !(o.OPTIONS.name === n.name && (s || o.OPTIONS.test === i.OPTIONS.test))), r.tests.push(i), r;
  }
  when(t, n) {
    !Array.isArray(t) && typeof t != "string" && (n = t, t = ".");
    let r = this.clone(), i = xl(t).map((s) => new Cn(s));
    return i.forEach((s) => {
      s.isSibling && r.deps.push(s.key);
    }), r.conditions.push(typeof n == "function" ? new li(i, n) : li.fromOptions(i, n)), r;
  }
  typeError(t) {
    let n = this.clone();
    return n.internalTests.typeError = Pn({
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
  oneOf(t, n = Tt.oneOf) {
    let r = this.clone();
    return t.forEach((i) => {
      r._whitelist.add(i), r._blacklist.delete(i);
    }), r.internalTests.whiteList = Pn({
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
  notOneOf(t, n = Tt.notOneOf) {
    let r = this.clone();
    return t.forEach((i) => {
      r._blacklist.add(i), r._whitelist.delete(i);
    }), r.internalTests.blacklist = Pn({
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
Lt.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"]) Lt.prototype[`${e}At`] = function(t, n, r = {}) {
  const {
    parent: i,
    parentPath: s,
    schema: o
  } = Lf(this, t, n, r.context);
  return o[e](i && i[s], Object.assign({}, r, {
    parent: i,
    path: t
  }));
};
for (const e of ["equals", "is"]) Lt.prototype[e] = Lt.prototype.oneOf;
for (const e of ["not", "nope"]) Lt.prototype[e] = Lt.prototype.notOneOf;
const Rf = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Bf(e) {
  const t = ms(e);
  if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let n = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (n = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (n = 0 - n)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + n, t.second, t.millisecond);
}
function ms(e) {
  var t, n;
  const r = Rf.exec(e);
  return r ? {
    year: Ht(r[1]),
    month: Ht(r[2], 1) - 1,
    day: Ht(r[3], 1),
    hour: Ht(r[4]),
    minute: Ht(r[5]),
    second: Ht(r[6]),
    millisecond: r[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      Ht(r[7].substring(0, 3))
    ) : 0,
    precision: (t = (n = r[7]) == null ? void 0 : n.length) != null ? t : void 0,
    z: r[8] || void 0,
    plusMinus: r[9] || void 0,
    hourOffset: Ht(r[10]),
    minuteOffset: Ht(r[11])
  } : null;
}
function Ht(e, t = 0) {
  return Number(e) || t;
}
let zf = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), Hf = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), Uf = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, qf = "^\\d{4}-\\d{2}-\\d{2}", Xf = "\\d{2}:\\d{2}:\\d{2}", Wf = "(([+-]\\d{2}(:?\\d{2})?)|Z)", Yf = new RegExp(`${qf}T${Xf}(\\.\\d+)?${Wf}$`), Gf = (e) => yn(e) || e === e.trim(), Kf = {}.toString();
function Qn() {
  return new kl();
}
class kl extends Lt {
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
        return i === Kf ? t : i;
      });
    });
  }
  required(t) {
    return super.required(t).withMutation((n) => n.test({
      message: t || Tt.required,
      name: "required",
      skipAbsent: !0,
      test: (r) => !!r.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((t) => (t.tests = t.tests.filter((n) => n.OPTIONS.name !== "required"), t));
  }
  length(t, n = st.length) {
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
  min(t, n = st.min) {
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
  max(t, n = st.max) {
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
      message: i || st.matches,
      params: {
        regex: t
      },
      skipAbsent: !0,
      test: (o) => o === "" && r || o.search(t) !== -1
    });
  }
  email(t = st.email) {
    return this.matches(zf, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = st.url) {
    return this.matches(Hf, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = st.uuid) {
    return this.matches(Uf, {
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
    } = t : n = t), this.matches(Yf, {
      name: "datetime",
      message: n || st.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: n || st.datetime_offset,
      params: {
        allowOffset: r
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || r) return !0;
        const o = ms(s);
        return o ? !!o.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: n || st.datetime_precision,
      params: {
        precision: i
      },
      skipAbsent: !0,
      test: (s) => {
        if (!s || i == null) return !0;
        const o = ms(s);
        return o ? o.precision === i : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = st.trim) {
    return this.transform((n) => n != null ? n.trim() : n).test({
      message: t,
      name: "trim",
      test: Gf
    });
  }
  lowercase(t = st.lowercase) {
    return this.transform((n) => yn(n) ? n : n.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (n) => yn(n) || n === n.toLowerCase()
    });
  }
  uppercase(t = st.uppercase) {
    return this.transform((n) => yn(n) ? n : n.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (n) => yn(n) || n === n.toUpperCase()
    });
  }
}
Qn.prototype = kl.prototype;
let Zf = /* @__PURE__ */ new Date(""), Jf = (e) => Object.prototype.toString.call(e) === "[object Date]";
class Hs extends Lt {
  constructor() {
    super({
      type: "date",
      check(t) {
        return Jf(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, n, r) => !r.spec.coerce || r.isType(t) || t === null ? t : (t = Bf(t), isNaN(t) ? Hs.INVALID_DATE : new Date(t)));
    });
  }
  prepareParam(t, n) {
    let r;
    if (Cn.isRef(t))
      r = t;
    else {
      let i = this.cast(t);
      if (!this._typeCheck(i)) throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);
      r = i;
    }
    return r;
  }
  min(t, n = hs.min) {
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
  max(t, n = hs.max) {
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
Hs.INVALID_DATE = Zf;
function Qf(e, t = []) {
  let n = [], r = /* @__PURE__ */ new Set(), i = new Set(t.map(([o, a]) => `${o}-${a}`));
  function s(o, a) {
    let l = xn.split(o)[0];
    r.add(l), i.has(`${a}-${l}`) || n.push([a, l]);
  }
  for (const o of Object.keys(e)) {
    let a = e[o];
    r.add(o), Cn.isRef(a) && a.isSibling ? s(a.path, o) : zs(a) && "deps" in a && a.deps.forEach((l) => s(l, o));
  }
  return Ef.array(Array.from(r), n).reverse();
}
function ea(e, t) {
  let n = 1 / 0;
  return e.some((r, i) => {
    var s;
    if ((s = t.path) != null && s.includes(r))
      return n = i, !0;
  }), n;
}
function Ol(e) {
  return (t, n) => ea(e, t) - ea(e, n);
}
const ep = (e, t, n) => {
  if (typeof e != "string")
    return e;
  let r = e;
  try {
    r = JSON.parse(e);
  } catch {
  }
  return n.isType(r) ? r : e;
};
function Gr(e) {
  if ("fields" in e) {
    const t = {};
    for (const [n, r] of Object.entries(e.fields))
      t[n] = Gr(r);
    return e.setFields(t);
  }
  if (e.type === "array") {
    const t = e.optional();
    return t.innerType && (t.innerType = Gr(t.innerType)), t;
  }
  return e.type === "tuple" ? e.optional().clone({
    types: e.spec.types.map(Gr)
  }) : "optional" in e ? e.optional() : e;
}
const tp = (e, t) => {
  const n = [...xn.normalizePath(t)];
  if (n.length === 1) return n[0] in e;
  let r = n.pop(), i = xn.getter(xn.join(n), !0)(e);
  return !!(i && r in i);
};
let ta = (e) => Object.prototype.toString.call(e) === "[object Object]";
function na(e, t) {
  let n = Object.keys(e.fields);
  return Object.keys(t).filter((r) => n.indexOf(r) === -1);
}
const np = Ol([]);
function El(e) {
  return new Vl(e);
}
class Vl extends Lt {
  constructor(t) {
    super({
      type: "object",
      check(n) {
        return ta(n) || typeof n == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = np, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
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
      let m = s[c], p = c in i;
      if (m) {
        let h, S = i[c];
        u.path = (n.path ? `${n.path}.` : "") + c, m = m.resolve({
          value: S,
          context: n.context,
          parent: l
        });
        let v = m instanceof Lt ? m.spec : void 0, x = v == null ? void 0 : v.strict;
        if (v != null && v.strip) {
          f = f || c in i;
          continue;
        }
        h = !n.__validating || !x ? (
          // TODO: use _cast, this is double resolving
          m.cast(i[c], u)
        ) : i[c], h !== void 0 && (l[c] = h);
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
      if (!a || !ta(u)) {
        i(l, u);
        return;
      }
      o = o || u;
      let f = [];
      for (let c of this._nodes) {
        let m = this.fields[c];
        !m || Cn.isRef(m) || f.push(m.asNestedTest({
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
    return r.fields = t, r._nodes = Qf(t, n), r._sortErrors = Ol(Object.keys(t)), n && (r._excludedEdges = n), r;
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
    return Gr(this);
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
    let i = xn.getter(t, !0);
    return this.transform((s) => {
      if (!s) return s;
      let o = s;
      return tp(s, t) && (o = Object.assign({}, s), r || delete o[t], o[n] = i(s)), o;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(ep);
  }
  /**
   * Similar to `noUnknown` but only validates that an object is the right shape without stripping the unknown keys
   */
  exact(t) {
    return this.test({
      name: "exact",
      exclusive: !0,
      message: t || Yr.exact,
      test(n) {
        if (n == null) return !0;
        const r = na(this.schema, n);
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
  noUnknown(t = !0, n = Yr.noUnknown) {
    typeof t != "boolean" && (n = t, t = !0);
    let r = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: n,
      test(i) {
        if (i == null) return !0;
        const s = na(this.schema, i);
        return !t || s.length === 0 || this.createError({
          params: {
            unknown: s.join(", ")
          }
        });
      }
    });
    return r.spec.noUnknown = t, r;
  }
  unknown(t = !0, n = Yr.noUnknown) {
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
    return this.transformKeys(qi.camelCase);
  }
  snakeCase() {
    return this.transformKeys(qi.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => qi.snakeCase(t).toUpperCase());
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
El.prototype = Vl.prototype;
const rp = ["onSubmit"], ip = /* @__PURE__ */ $e({
  __name: "XForm",
  emits: ["submit"],
  setup(e, { expose: t, emit: n }) {
    const r = ti("form"), i = ti("form"), s = n, o = () => {
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
    }), (f, c) => (F(), ve(D(Sf), {
      ref_key: "veeform",
      ref: i,
      as: "div"
    }, {
      default: de(({ handleSubmit: m }) => [
        se("form", {
          ref_key: "form",
          ref: r,
          onSubmit: (p) => m(p, u)
        }, [
          ce(f.$slots, "default")
        ], 40, rp)
      ]),
      _: 3
    }, 512));
  }
}), sp = (e, t) => {
  const n = kt([...e]);
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
}, iv = (e, t) => {
  const n = kt({ ...e });
  return new Proxy(n, {
    set(r, i, s) {
      return r[i] = s, t("update:modelValue", { ...r }), !0;
    },
    deleteProperty(r, i) {
      return delete r[i], t("update:modelValue", { ...r }), !0;
    }
  });
}, op = ["innerHTML"], ap = /* @__PURE__ */ $e({
  __name: "XFieldError",
  props: {
    message: {
      type: String,
      default: null
    }
  },
  setup(e) {
    return (t, n) => e.message ? (F(), oe("div", {
      key: 0,
      innerHTML: e.message,
      class: "x-field-error"
    }, null, 8, op)) : pe("", !0);
  }
}), lp = /* @__PURE__ */ We(ap, [["__scopeId", "data-v-264fe63e"]]), br = /* @__PURE__ */ $e({
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
    } = ff(ns(t, "name"), void 0, {
      syncVModel: !0,
      initialValue: t.value
    });
    return Ie(() => t.value, (o) => n.value = o), (o, a) => (F(), oe("span", null, [
      ce(o.$slots, "default", Nt(qt({ inputValue: D(n), handleBlur: D(i), handleChange: D(s) }))),
      ce(o.$slots, "error", Nt(qt({ errorMessage: D(r) })), () => [
        me(D(lp), { message: D(r) }, null, 8, ["message"])
      ])
    ]));
  }
}), up = { class: "x-label" }, cp = ["for"], dp = { key: 0 }, fp = /* @__PURE__ */ $e({
  __name: "XLabel",
  props: {
    htmlFor: {
      type: String
    },
    required: Boolean
  },
  setup(e) {
    const t = ti("label"), n = Vn(), r = e, i = () => {
      var o, a;
      if (r.htmlFor) return;
      const s = (a = (o = H(t)) == null ? void 0 : o.nextElementSibling) == null ? void 0 : a.querySelector("input");
      s && s.focus();
    };
    return (s, o) => (F(), oe("div", up, [
      se("label", _e({
        for: e.htmlFor,
        ref_key: "label",
        ref: t
      }, D(n), { onClick: i }), [
        ce(s.$slots, "default", {}, void 0, !0),
        e.required ? (F(), oe("span", dp, "*")) : pe("", !0)
      ], 16, cp),
      ce(s.$slots, "append", {}, void 0, !0)
    ]));
  }
}), pp = /* @__PURE__ */ We(fp, [["__scopeId", "data-v-fe74dc87"]]), hp = { class: "x-form-item__append-label" }, mp = { class: "x-form-item__content" }, vp = /* @__PURE__ */ $e({
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
    const t = La(), n = e, r = T(() => [
      "x-form-item",
      `x-form-item--${n.mode}`
    ]), i = T(() => [
      "x-form-item__label",
      { "x-form-item__label--block": t["append-label"] }
    ]), s = T(() => n.noLabel && n.label ? n.required ? `${n.label} *` : n.label : null);
    return (o, a) => (F(), oe("div", {
      class: De(r.value)
    }, [
      !e.noLabel && (e.label || o.$slots.label) ? (F(), ve(D(pp), {
        key: 0,
        "html-for": e.htmlFor,
        required: e.required,
        class: De(i.value)
      }, {
        append: de(() => [
          se("div", hp, [
            ce(o.$slots, "append-label", {}, void 0, !0)
          ])
        ]),
        default: de(() => [
          ce(o.$slots, "label", {}, () => [
            Le(Ne(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["html-for", "required", "class"])) : pe("", !0),
      se("div", mp, [
        ce(o.$slots, "default", { placeholder: s.value }, void 0, !0)
      ])
    ], 2));
  }
}), Dr = /* @__PURE__ */ We(vp, [["__scopeId", "data-v-f465520a"]]), gp = { class: "x-checkbox-group" }, yp = /* @__PURE__ */ $e({
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
    return (s, o) => (F(), oe("div", gp, [
      (F(!0), oe(Wt, null, On(e.fields, (a) => (F(), ve(D(il), _e({
        modelValue: i.value,
        "onUpdate:modelValue": o[0] || (o[0] = (l) => i.value = l),
        key: a.value,
        name: e.name
      }, { ref_for: !0 }, { ...a, ...e.checkboxProps }), {
        text: de(() => [
          ce(s.$slots, "text", _e({ ref_for: !0 }, a), void 0, !0)
        ]),
        default: de(() => [
          Le(Ne(a.label) + " ", 1)
        ]),
        _: 2
      }, 1040, ["modelValue", "name"]))), 128))
    ]));
  }
}), sv = /* @__PURE__ */ We(yp, [["__scopeId", "data-v-11b46748"]]), ov = () => ({ formatter: (t, n, r) => t.map((i) => ({
  label: n[i],
  icon: r ? i : void 0,
  value: i
})) });
var Kr = { exports: {} }, bp = Kr.exports, ra;
function wp() {
  return ra || (ra = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(bp, function() {
      var n = 1e3, r = 6e4, i = 36e5, s = "millisecond", o = "second", a = "minute", l = "hour", u = "day", f = "week", c = "month", m = "quarter", p = "year", h = "date", S = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, x = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, k = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(j) {
        var E = ["th", "st", "nd", "rd"], V = j % 100;
        return "[" + j + (E[(V - 20) % 10] || E[V] || E[0]) + "]";
      } }, C = function(j, E, V) {
        var I = String(j);
        return !I || I.length >= E ? j : "" + Array(E + 1 - I.length).join(V) + j;
      }, G = { s: C, z: function(j) {
        var E = -j.utcOffset(), V = Math.abs(E), I = Math.floor(V / 60), R = V % 60;
        return (E <= 0 ? "+" : "-") + C(I, 2, "0") + ":" + C(R, 2, "0");
      }, m: function j(E, V) {
        if (E.date() < V.date()) return -j(V, E);
        var I = 12 * (V.year() - E.year()) + (V.month() - E.month()), R = E.clone().add(I, c), U = V - R < 0, W = E.clone().add(I + (U ? -1 : 1), c);
        return +(-(I + (V - R) / (U ? R - W : W - R)) || 0);
      }, a: function(j) {
        return j < 0 ? Math.ceil(j) || 0 : Math.floor(j);
      }, p: function(j) {
        return { M: c, y: p, w: f, d: u, D: h, h: l, m: a, s: o, ms: s, Q: m }[j] || String(j || "").toLowerCase().replace(/s$/, "");
      }, u: function(j) {
        return j === void 0;
      } }, L = "en", K = {};
      K[L] = k;
      var X = "$isDayjsObject", re = function(j) {
        return j instanceof ne || !(!j || !j[X]);
      }, M = function j(E, V, I) {
        var R;
        if (!E) return L;
        if (typeof E == "string") {
          var U = E.toLowerCase();
          K[U] && (R = U), V && (K[U] = V, R = U);
          var W = E.split("-");
          if (!R && W.length > 1) return j(W[0]);
        } else {
          var le = E.name;
          K[le] = E, R = le;
        }
        return !I && R && (L = R), R || !I && L;
      }, Y = function(j, E) {
        if (re(j)) return j.clone();
        var V = typeof E == "object" ? E : {};
        return V.date = j, V.args = arguments, new ne(V);
      }, N = G;
      N.l = M, N.i = re, N.w = function(j, E) {
        return Y(j, { locale: E.$L, utc: E.$u, x: E.$x, $offset: E.$offset });
      };
      var ne = function() {
        function j(V) {
          this.$L = M(V.locale, null, !0), this.parse(V), this.$x = this.$x || V.x || {}, this[X] = !0;
        }
        var E = j.prototype;
        return E.parse = function(V) {
          this.$d = function(I) {
            var R = I.date, U = I.utc;
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
          }(V), this.init();
        }, E.init = function() {
          var V = this.$d;
          this.$y = V.getFullYear(), this.$M = V.getMonth(), this.$D = V.getDate(), this.$W = V.getDay(), this.$H = V.getHours(), this.$m = V.getMinutes(), this.$s = V.getSeconds(), this.$ms = V.getMilliseconds();
        }, E.$utils = function() {
          return N;
        }, E.isValid = function() {
          return this.$d.toString() !== S;
        }, E.isSame = function(V, I) {
          var R = Y(V);
          return this.startOf(I) <= R && R <= this.endOf(I);
        }, E.isAfter = function(V, I) {
          return Y(V) < this.startOf(I);
        }, E.isBefore = function(V, I) {
          return this.endOf(I) < Y(V);
        }, E.$g = function(V, I, R) {
          return N.u(V) ? this[I] : this.set(R, V);
        }, E.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, E.valueOf = function() {
          return this.$d.getTime();
        }, E.startOf = function(V, I) {
          var R = this, U = !!N.u(I) || I, W = N.p(V), le = function(ge, Ve) {
            var Fe = N.w(R.$u ? Date.UTC(R.$y, Ve, ge) : new Date(R.$y, Ve, ge), R);
            return U ? Fe : Fe.endOf(u);
          }, ye = function(ge, Ve) {
            return N.w(R.toDate()[ge].apply(R.toDate("s"), (U ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Ve)), R);
          }, q = this.$W, Q = this.$M, he = this.$D, A = "set" + (this.$u ? "UTC" : "");
          switch (W) {
            case p:
              return U ? le(1, 0) : le(31, 11);
            case c:
              return U ? le(1, Q) : le(0, Q + 1);
            case f:
              var B = this.$locale().weekStart || 0, we = (q < B ? q + 7 : q) - B;
              return le(U ? he - we : he + (6 - we), Q);
            case u:
            case h:
              return ye(A + "Hours", 0);
            case l:
              return ye(A + "Minutes", 1);
            case a:
              return ye(A + "Seconds", 2);
            case o:
              return ye(A + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, E.endOf = function(V) {
          return this.startOf(V, !1);
        }, E.$set = function(V, I) {
          var R, U = N.p(V), W = "set" + (this.$u ? "UTC" : ""), le = (R = {}, R[u] = W + "Date", R[h] = W + "Date", R[c] = W + "Month", R[p] = W + "FullYear", R[l] = W + "Hours", R[a] = W + "Minutes", R[o] = W + "Seconds", R[s] = W + "Milliseconds", R)[U], ye = U === u ? this.$D + (I - this.$W) : I;
          if (U === c || U === p) {
            var q = this.clone().set(h, 1);
            q.$d[le](ye), q.init(), this.$d = q.set(h, Math.min(this.$D, q.daysInMonth())).$d;
          } else le && this.$d[le](ye);
          return this.init(), this;
        }, E.set = function(V, I) {
          return this.clone().$set(V, I);
        }, E.get = function(V) {
          return this[N.p(V)]();
        }, E.add = function(V, I) {
          var R, U = this;
          V = Number(V);
          var W = N.p(I), le = function(Q) {
            var he = Y(U);
            return N.w(he.date(he.date() + Math.round(Q * V)), U);
          };
          if (W === c) return this.set(c, this.$M + V);
          if (W === p) return this.set(p, this.$y + V);
          if (W === u) return le(1);
          if (W === f) return le(7);
          var ye = (R = {}, R[a] = r, R[l] = i, R[o] = n, R)[W] || 1, q = this.$d.getTime() + V * ye;
          return N.w(q, this);
        }, E.subtract = function(V, I) {
          return this.add(-1 * V, I);
        }, E.format = function(V) {
          var I = this, R = this.$locale();
          if (!this.isValid()) return R.invalidDate || S;
          var U = V || "YYYY-MM-DDTHH:mm:ssZ", W = N.z(this), le = this.$H, ye = this.$m, q = this.$M, Q = R.weekdays, he = R.months, A = R.meridiem, B = function(Ve, Fe, je, gt) {
            return Ve && (Ve[Fe] || Ve(I, U)) || je[Fe].slice(0, gt);
          }, we = function(Ve) {
            return N.s(le % 12 || 12, Ve, "0");
          }, ge = A || function(Ve, Fe, je) {
            var gt = Ve < 12 ? "AM" : "PM";
            return je ? gt.toLowerCase() : gt;
          };
          return U.replace(x, function(Ve, Fe) {
            return Fe || function(je) {
              switch (je) {
                case "YY":
                  return String(I.$y).slice(-2);
                case "YYYY":
                  return N.s(I.$y, 4, "0");
                case "M":
                  return q + 1;
                case "MM":
                  return N.s(q + 1, 2, "0");
                case "MMM":
                  return B(R.monthsShort, q, he, 3);
                case "MMMM":
                  return B(he, q);
                case "D":
                  return I.$D;
                case "DD":
                  return N.s(I.$D, 2, "0");
                case "d":
                  return String(I.$W);
                case "dd":
                  return B(R.weekdaysMin, I.$W, Q, 2);
                case "ddd":
                  return B(R.weekdaysShort, I.$W, Q, 3);
                case "dddd":
                  return Q[I.$W];
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
                  return String(I.$s);
                case "ss":
                  return N.s(I.$s, 2, "0");
                case "SSS":
                  return N.s(I.$ms, 3, "0");
                case "Z":
                  return W;
              }
              return null;
            }(Ve) || W.replace(":", "");
          });
        }, E.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, E.diff = function(V, I, R) {
          var U, W = this, le = N.p(I), ye = Y(V), q = (ye.utcOffset() - this.utcOffset()) * r, Q = this - ye, he = function() {
            return N.m(W, ye);
          };
          switch (le) {
            case p:
              U = he() / 12;
              break;
            case c:
              U = he();
              break;
            case m:
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
          return K[this.$L];
        }, E.locale = function(V, I) {
          if (!V) return this.$L;
          var R = this.clone(), U = M(V, I, !0);
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
        }, j;
      }(), fe = ne.prototype;
      return Y.prototype = fe, [["$ms", s], ["$s", o], ["$m", a], ["$H", l], ["$W", u], ["$M", c], ["$y", p], ["$D", h]].forEach(function(j) {
        fe[j[1]] = function(E) {
          return this.$g(E, j[0], j[1]);
        };
      }), Y.extend = function(j, E) {
        return j.$i || (j(E, ne, Y), j.$i = !0), Y;
      }, Y.locale = M, Y.isDayjs = re, Y.unix = function(j) {
        return Y(1e3 * j);
      }, Y.en = K[L], Y.Ls = K, Y.p = {}, Y;
    });
  }(Kr)), Kr.exports;
}
var xp = wp();
const Bn = /* @__PURE__ */ Bs(xp);
var Zr = { exports: {} }, Sp = Zr.exports, ia;
function $p() {
  return ia || (ia = 1, function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(Sp, function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d/, s = /\d\d/, o = /\d\d?/, a = /\d*[^-_:/,()\s\d]+/, l = {}, u = function(v) {
        return (v = +v) + (v > 68 ? 1900 : 2e3);
      }, f = function(v) {
        return function(x) {
          this[v] = +x;
        };
      }, c = [/[+-]\d\d:?(\d\d)?|Z/, function(v) {
        (this.zone || (this.zone = {})).offset = function(x) {
          if (!x || x === "Z") return 0;
          var k = x.match(/([+-]|\d\d)/g), C = 60 * k[1] + (+k[2] || 0);
          return C === 0 ? 0 : k[0] === "+" ? -C : C;
        }(v);
      }], m = function(v) {
        var x = l[v];
        return x && (x.indexOf ? x : x.s.concat(x.f));
      }, p = function(v, x) {
        var k, C = l.meridiem;
        if (C) {
          for (var G = 1; G <= 24; G += 1) if (v.indexOf(C(G, 0, x)) > -1) {
            k = G > 12;
            break;
          }
        } else k = v === (x ? "pm" : "PM");
        return k;
      }, h = { A: [a, function(v) {
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
        var x = l.ordinal, k = v.match(/\d+/);
        if (this.day = k[0], x) for (var C = 1; C <= 31; C += 1) x(C).replace(/\[|\]/g, "") === v && (this.day = C);
      }], w: [o, f("week")], ww: [s, f("week")], M: [o, f("month")], MM: [s, f("month")], MMM: [a, function(v) {
        var x = m("months"), k = (m("monthsShort") || x.map(function(C) {
          return C.slice(0, 3);
        })).indexOf(v) + 1;
        if (k < 1) throw new Error();
        this.month = k % 12 || k;
      }], MMMM: [a, function(v) {
        var x = m("months").indexOf(v) + 1;
        if (x < 1) throw new Error();
        this.month = x % 12 || x;
      }], Y: [/[+-]?\d+/, f("year")], YY: [s, function(v) {
        this.year = u(v);
      }], YYYY: [/\d{4}/, f("year")], Z: c, ZZ: c };
      function S(v) {
        var x, k;
        x = v, k = l && l.formats;
        for (var C = (v = x.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(Y, N, ne) {
          var fe = ne && ne.toUpperCase();
          return N || k[ne] || n[ne] || k[fe].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, E, V) {
            return E || V.slice(1);
          });
        })).match(r), G = C.length, L = 0; L < G; L += 1) {
          var K = C[L], X = h[K], re = X && X[0], M = X && X[1];
          C[L] = M ? { regex: re, parser: M } : K.replace(/^\[|\]$/g, "");
        }
        return function(Y) {
          for (var N = {}, ne = 0, fe = 0; ne < G; ne += 1) {
            var j = C[ne];
            if (typeof j == "string") fe += j.length;
            else {
              var E = j.regex, V = j.parser, I = Y.slice(fe), R = E.exec(I)[0];
              V.call(N, R), Y = Y.replace(R, "");
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
      return function(v, x, k) {
        k.p.customParseFormat = !0, v && v.parseTwoDigitYear && (u = v.parseTwoDigitYear);
        var C = x.prototype, G = C.parse;
        C.parse = function(L) {
          var K = L.date, X = L.utc, re = L.args;
          this.$u = X;
          var M = re[1];
          if (typeof M == "string") {
            var Y = re[2] === !0, N = re[3] === !0, ne = Y || N, fe = re[2];
            N && (fe = re[2]), l = this.$locale(), !Y && fe && (l = k.Ls[fe]), this.$d = function(I, R, U, W) {
              try {
                if (["x", "X"].indexOf(R) > -1) return new Date((R === "X" ? 1e3 : 1) * I);
                var le = S(R)(I), ye = le.year, q = le.month, Q = le.day, he = le.hours, A = le.minutes, B = le.seconds, we = le.milliseconds, ge = le.zone, Ve = le.week, Fe = /* @__PURE__ */ new Date(), je = Q || (ye || q ? 1 : Fe.getDate()), gt = ye || Fe.getFullYear(), Yt = 0;
                ye && !q || (Yt = q > 0 ? q - 1 : Fe.getMonth());
                var Gt, Rt = he || 0, Kt = A || 0, Bt = B || 0, yt = we || 0;
                return ge ? new Date(Date.UTC(gt, Yt, je, Rt, Kt, Bt, yt + 60 * ge.offset * 1e3)) : U ? new Date(Date.UTC(gt, Yt, je, Rt, Kt, Bt, yt)) : (Gt = new Date(gt, Yt, je, Rt, Kt, Bt, yt), Ve && (Gt = W(Gt).week(Ve).toDate()), Gt);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            }(K, M, X, k), this.init(), fe && fe !== !0 && (this.$L = this.locale(fe).$L), ne && K != this.format(M) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
          } else if (M instanceof Array) for (var j = M.length, E = 1; E <= j; E += 1) {
            re[1] = M[E - 1];
            var V = k.apply(this, re);
            if (V.isValid()) {
              this.$d = V.$d, this.$L = V.$L, this.init();
              break;
            }
            E === j && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else G.call(this, L);
        };
      };
    });
  }(Zr)), Zr.exports;
}
var _p = $p();
const kp = /* @__PURE__ */ Bs(_p), Op = {}, Ep = { class: "row" };
function Vp(e, t) {
  return F(), oe("div", Ep, [
    ce(e.$slots, "default")
  ]);
}
const Ap = /* @__PURE__ */ We(Op, [["render", Vp]]), sa = /* @__PURE__ */ $e({
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
    return (r, i) => (F(), oe("div", {
      class: De(n.value)
    }, [
      ce(r.$slots, "default")
    ], 2));
  }
});
function Xi(e) {
  return e === 0 ? !1 : Array.isArray(e) && e.length === 0 ? !0 : !e;
}
function Cp(e) {
  return (...t) => !e(...t);
}
function Tp(e, t) {
  return e === void 0 && (e = "undefined"), e === null && (e = "null"), e === !1 && (e = "false"), e.toString().toLowerCase().indexOf(t.trim()) !== -1;
}
function Pp(e) {
  return e.filter((t) => !t.$isLabel);
}
function Wi(e, t) {
  return (n) => n.reduce((r, i) => i[e] && i[e].length ? (r.push({
    $groupLabel: i[t],
    $isLabel: !0
  }), r.concat(i[e])) : r, []);
}
const oa = (...e) => (t) => e.reduce((n, r) => r(n), t);
var Np = {
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
        return Xi(e) ? "" : t ? e[t] : e;
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
      return this.internalSearch ? n = this.groupValues ? this.filterAndFlat(n, t, this.label) : this.filterOptions(n, t, this.label, this.customLabel) : n = this.groupValues ? Wi(this.groupValues, this.groupLabel)(n) : n, n = this.hideSelected ? n.filter(Cp(this.isSelected)) : n, this.taggable && t.length && !this.isExistingOption(t) && (this.tagPosition === "bottom" ? n.push({ isTag: !0, label: e }) : n.unshift({ isTag: !0, label: e })), n.slice(0, this.optionsLimit);
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
      return oa(
        this.filterGroups(t, n, this.groupValues, this.groupLabel, this.customLabel),
        Wi(this.groupValues, this.groupLabel)
      )(e);
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @return {Array} returns a flat options list without group labels
     */
    flatAndStrip(e) {
      return oa(
        Wi(this.groupValues, this.groupLabel),
        Pp
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
      if (Xi(e)) return "";
      if (e.isTag) return e.label;
      if (e.$isLabel) return e.$groupLabel;
      const t = this.customLabel(e, this.label);
      return Xi(t) ? "" : t;
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
      return t ? e.filter((i) => Tp(r(i, n), t)).sort((i, s) => typeof this.filteringSortFunc == "function" ? this.filteringSortFunc(i, s) : r(i, n).length - r(s, n).length) : e;
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
}, Dp = {
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
}, Al = {
  name: "vue-multiselect",
  mixins: [Np, Dp],
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
const Fp = ["tabindex", "aria-expanded", "aria-owns", "aria-activedescendant"], Mp = {
  ref: "tags",
  class: "multiselect__tags"
}, Ip = { class: "multiselect__tags-wrap" }, jp = ["textContent"], Lp = ["onKeypress", "onMousedown"], Rp = ["textContent"], Bp = { class: "multiselect__spinner" }, zp = ["name", "id", "spellcheck", "placeholder", "required", "value", "disabled", "tabindex", "aria-label", "aria-controls"], Hp = ["id", "aria-multiselectable"], Up = { key: 0 }, qp = { class: "multiselect__option" }, Xp = ["aria-selected", "id", "role"], Wp = ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"], Yp = ["data-select", "data-deselect", "onMouseenter", "onMousedown"], Gp = { class: "multiselect__option" }, Kp = { class: "multiselect__option" };
function Zp(e, t, n, r, i, s) {
  return F(), oe("div", {
    tabindex: e.searchable ? -1 : n.tabindex,
    class: De([{ "multiselect--active": e.isOpen, "multiselect--disabled": n.disabled, "multiselect--above": s.isAbove, "multiselect--has-options-group": s.hasOptionGroup }, "multiselect"]),
    onFocus: t[14] || (t[14] = (o) => e.activate()),
    onBlur: t[15] || (t[15] = (o) => e.searchable ? !1 : e.deactivate()),
    onKeydown: [
      t[16] || (t[16] = bt(Xe((o) => e.pointerForward(), ["self", "prevent"]), ["down"])),
      t[17] || (t[17] = bt(Xe((o) => e.pointerBackward(), ["self", "prevent"]), ["up"]))
    ],
    onKeypress: t[18] || (t[18] = bt(Xe((o) => e.addPointerElement(o), ["stop", "self"]), ["enter", "tab"])),
    onKeyup: t[19] || (t[19] = bt((o) => e.deactivate(), ["esc"])),
    role: "combobox",
    "aria-expanded": e.isOpen,
    "aria-owns": "listbox-" + e.id,
    "aria-activedescendant": e.isOpen && e.pointer !== null ? e.id + "-" + e.pointer : null
  }, [
    ce(e.$slots, "caret", { toggle: e.toggle }, () => [
      se(
        "div",
        {
          onMousedown: t[0] || (t[0] = Xe((o) => e.toggle(), ["prevent", "stop"])),
          class: "multiselect__select"
        },
        null,
        32
        /* NEED_HYDRATION */
      )
    ]),
    ce(e.$slots, "clear", { search: e.search }),
    se(
      "div",
      Mp,
      [
        ce(e.$slots, "selection", {
          search: e.search,
          remove: e.removeElement,
          values: s.visibleValues,
          isOpen: e.isOpen
        }, () => [
          mt(se(
            "div",
            Ip,
            [
              (F(!0), oe(
                Wt,
                null,
                On(s.visibleValues, (o, a) => ce(e.$slots, "tag", {
                  option: o,
                  search: e.search,
                  remove: e.removeElement
                }, () => [
                  (F(), oe(
                    "span",
                    {
                      class: "multiselect__tag",
                      key: a,
                      onMousedown: t[1] || (t[1] = Xe(() => {
                      }, ["prevent"]))
                    },
                    [
                      se("span", {
                        textContent: Ne(e.getOptionLabel(o))
                      }, null, 8, jp),
                      se("i", {
                        tabindex: "1",
                        onKeypress: bt(Xe((l) => e.removeElement(o), ["prevent"]), ["enter"]),
                        onMousedown: Xe((l) => e.removeElement(o), ["prevent"]),
                        class: "multiselect__tag-icon"
                      }, null, 40, Lp)
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
            [Pt, s.visibleValues.length > 0]
          ]),
          e.internalValue && e.internalValue.length > n.limit ? ce(e.$slots, "limit", { key: 0 }, () => [
            se("strong", {
              class: "multiselect__strong",
              textContent: Ne(n.limitText(e.internalValue.length - n.limit))
            }, null, 8, Rp)
          ]) : pe("v-if", !0)
        ]),
        me(Qr, { name: "multiselect__loading" }, {
          default: de(() => [
            ce(e.$slots, "loading", {}, () => [
              mt(se(
                "div",
                Bp,
                null,
                512
                /* NEED_PATCH */
              ), [
                [Pt, n.loading]
              ])
            ])
          ]),
          _: 3
          /* FORWARDED */
        }),
        e.searchable ? (F(), oe("input", {
          key: 0,
          ref: "search",
          name: n.name,
          id: e.id,
          type: "text",
          autocomplete: "off",
          spellcheck: n.spellcheck,
          placeholder: e.placeholder,
          required: s.isRequired,
          style: bn(s.inputStyle),
          value: e.search,
          disabled: n.disabled,
          tabindex: n.tabindex,
          "aria-label": n.name + "-searchbox",
          onInput: t[2] || (t[2] = (o) => e.updateSearch(o.target.value)),
          onFocus: t[3] || (t[3] = Xe((o) => e.activate(), ["prevent"])),
          onBlur: t[4] || (t[4] = Xe((o) => e.deactivate(), ["prevent"])),
          onKeyup: t[5] || (t[5] = bt((o) => e.deactivate(), ["esc"])),
          onKeydown: [
            t[6] || (t[6] = bt(Xe((o) => e.pointerForward(), ["prevent"]), ["down"])),
            t[7] || (t[7] = bt(Xe((o) => e.pointerBackward(), ["prevent"]), ["up"])),
            t[9] || (t[9] = bt(Xe((o) => e.removeLastElement(), ["stop"]), ["delete"]))
          ],
          onKeypress: t[8] || (t[8] = bt(Xe((o) => e.addPointerElement(o), ["prevent", "stop", "self"]), ["enter"])),
          class: "multiselect__input",
          "aria-controls": "listbox-" + e.id
        }, null, 44, zp)) : pe("v-if", !0),
        s.isSingleLabelVisible ? (F(), oe(
          "span",
          {
            key: 1,
            class: "multiselect__single",
            onMousedown: t[10] || (t[10] = Xe((...o) => e.toggle && e.toggle(...o), ["prevent"]))
          },
          [
            ce(e.$slots, "singleLabel", { option: s.singleValue }, () => [
              Le(
                Ne(e.currentOptionLabel),
                1
                /* TEXT */
              )
            ])
          ],
          32
          /* NEED_HYDRATION */
        )) : pe("v-if", !0),
        s.isPlaceholderVisible ? (F(), oe(
          "span",
          {
            key: 2,
            class: "multiselect__placeholder",
            onMousedown: t[11] || (t[11] = Xe((...o) => e.toggle && e.toggle(...o), ["prevent"]))
          },
          [
            ce(e.$slots, "placeholder", {}, () => [
              Le(
                Ne(e.placeholder),
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
    me(Qr, {
      name: "multiselect",
      persisted: ""
    }, {
      default: de(() => [
        mt(se(
          "div",
          {
            class: "multiselect__content-wrapper",
            onFocus: t[12] || (t[12] = (...o) => e.activate && e.activate(...o)),
            tabindex: "-1",
            onMousedown: t[13] || (t[13] = Xe(() => {
            }, ["prevent"])),
            style: bn({ maxHeight: e.optimizedHeight + "px" }),
            ref: "list"
          },
          [
            se("ul", {
              class: "multiselect__content",
              style: bn(s.contentStyle),
              role: "listbox",
              id: "listbox-" + e.id,
              "aria-multiselectable": e.multiple
            }, [
              ce(e.$slots, "beforeList"),
              e.multiple && e.max === e.internalValue.length ? (F(), oe("li", Up, [
                se("span", qp, [
                  ce(e.$slots, "maxElements", {}, () => [
                    Le(
                      "Maximum of " + Ne(e.max) + " options selected. First remove a selected option to select another.",
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])) : pe("v-if", !0),
              !e.max || e.internalValue.length < e.max ? (F(!0), oe(
                Wt,
                { key: 1 },
                On(e.filteredOptions, (o, a) => (F(), oe("li", {
                  class: "multiselect__element",
                  key: a,
                  "aria-selected": e.isSelected(o),
                  id: e.id + "-" + a,
                  role: o && (o.$isLabel || o.$isDisabled) ? null : "option"
                }, [
                  o && (o.$isLabel || o.$isDisabled) ? pe("v-if", !0) : (F(), oe("span", {
                    key: 0,
                    class: De([e.optionHighlight(a, o), "multiselect__option"]),
                    onClick: Xe((l) => e.select(o), ["stop"]),
                    onMouseenter: Xe((l) => e.pointerSet(a), ["self"]),
                    "data-select": o && o.isTag ? e.tagPlaceholder : s.selectLabelText,
                    "data-selected": s.selectedLabelText,
                    "data-deselect": s.deselectLabelText
                  }, [
                    ce(e.$slots, "option", {
                      option: o,
                      search: e.search,
                      index: a
                    }, () => [
                      se(
                        "span",
                        null,
                        Ne(e.getOptionLabel(o)),
                        1
                        /* TEXT */
                      )
                    ])
                  ], 42, Wp)),
                  o && (o.$isLabel || o.$isDisabled) ? (F(), oe("span", {
                    key: 1,
                    "data-select": e.groupSelect && s.selectGroupLabelText,
                    "data-deselect": e.groupSelect && s.deselectGroupLabelText,
                    class: De([e.groupHighlight(a, o), "multiselect__option"]),
                    onMouseenter: Xe((l) => e.groupSelect && e.pointerSet(a), ["self"]),
                    onMousedown: Xe((l) => e.selectGroup(o), ["prevent"])
                  }, [
                    ce(e.$slots, "option", {
                      option: o,
                      search: e.search,
                      index: a
                    }, () => [
                      se(
                        "span",
                        null,
                        Ne(e.getOptionLabel(o)),
                        1
                        /* TEXT */
                      )
                    ])
                  ], 42, Yp)) : pe("v-if", !0)
                ], 8, Xp))),
                128
                /* KEYED_FRAGMENT */
              )) : pe("v-if", !0),
              mt(se(
                "li",
                null,
                [
                  se("span", Gp, [
                    ce(e.$slots, "noResult", { search: e.search }, () => [
                      t[20] || (t[20] = Le("No elements found. Consider changing the search query."))
                    ])
                  ])
                ],
                512
                /* NEED_PATCH */
              ), [
                [Pt, n.showNoResults && e.filteredOptions.length === 0 && e.search && !n.loading]
              ]),
              mt(se(
                "li",
                null,
                [
                  se("span", Kp, [
                    ce(e.$slots, "noOptions", {}, () => [
                      t[21] || (t[21] = Le("List is empty."))
                    ])
                  ])
                ],
                512
                /* NEED_PATCH */
              ), [
                [Pt, n.showNoOptions && (e.options.length === 0 || s.hasOptionGroup === !0 && e.filteredOptions.length === 0) && !e.search && !n.loading]
              ]),
              ce(e.$slots, "afterList")
            ], 12, Hp)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        ), [
          [Pt, e.isOpen]
        ])
      ]),
      _: 3
      /* FORWARDED */
    })
  ], 42, Fp);
}
Al.render = Zp;
function Jp(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let i = 0; i < r.length; i++) n[r[i]] = !0;
  return (i) => !!n[i];
}
const vs = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV === "production" || Object.freeze([]);
const Cl = () => {
}, Qp = /^on[^a-z]/, eh = (e) => Qp.test(e), Ot = Object.assign, th = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, nh = Object.prototype.hasOwnProperty, ci = (e, t) => nh.call(e, t), Re = Array.isArray, Ln = (e) => $i(e) === "[object Map]", rh = (e) => $i(e) === "[object Set]", Qe = (e) => typeof e == "function", Mt = (e) => typeof e == "string", Si = (e) => typeof e == "symbol", pt = (e) => e !== null && typeof e == "object", ih = (e) => (pt(e) || Qe(e)) && Qe(e.then) && Qe(e.catch), sh = Object.prototype.toString, $i = (e) => sh.call(e), Tl = (e) => $i(e).slice(8, -1), oh = (e) => $i(e) === "[object Object]", Us = (e) => Mt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ah = /* @__PURE__ */ ((e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
})((e) => e.charAt(0).toUpperCase() + e.slice(1)), zn = (e, t) => !Object.is(e, t), lh = (e, t, n) => {
  Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
};
let aa;
const gs = () => aa || (aa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qs(e) {
  if (Re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = Mt(r) ? fh(r) : qs(r);
      if (i) for (const s in i) t[s] = i[s];
    }
    return t;
  }
  if (Mt(e) || pt(e)) return e;
}
const uh = /;(?![^(]*\))/g, ch = /:([^]+)/, dh = /\/\*[^]*?\*\//g;
function fh(e) {
  const t = {};
  return e.replace(dh, "").split(uh).forEach((n) => {
    if (n) {
      const r = n.split(ch);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Xs(e) {
  let t = "";
  if (Mt(e)) t = e;
  else if (Re(e)) for (let n = 0; n < e.length; n++) {
    const r = Xs(e[n]);
    r && (t += r + " ");
  }
  else if (pt(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
function la(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Pl;
const ys = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Nl = (e) => (e.w & rn) > 0, Dl = (e) => (e.n & rn) > 0, bs = /* @__PURE__ */ new WeakMap();
let er = 0, rn = 1;
const ws = 30;
let lt;
const Sn = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), xs = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class ph {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, function(i, s = Pl) {
      s && s.active && s.effects.push(i);
    }(this, r);
  }
  run() {
    if (!this.active) return this.fn();
    let t = lt, n = $n;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return this.parent = lt, lt = this, $n = !0, rn = 1 << ++er, er <= ws ? (({ deps: r }) => {
        if (r.length) for (let i = 0; i < r.length; i++) r[i].w |= rn;
      })(this) : ua(this), this.fn();
    } finally {
      er <= ws && ((r) => {
        const { deps: i } = r;
        if (i.length) {
          let s = 0;
          for (let o = 0; o < i.length; o++) {
            const a = i[o];
            Nl(a) && !Dl(a) ? a.delete(r) : i[s++] = a, a.w &= ~rn, a.n &= ~rn;
          }
          i.length = s;
        }
      })(this), rn = 1 << --er, lt = this.parent, $n = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    lt === this ? this.deferStop = !0 : this.active && (ua(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ua(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let $n = !0;
const Fl = [];
function Ml() {
  Fl.push($n), $n = !1;
}
function Il() {
  const e = Fl.pop();
  $n = e === void 0 || e;
}
function xt(e, t, n) {
  if ($n && lt) {
    let r = bs.get(e);
    r || bs.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || r.set(n, i = ys()), function(s, o) {
      let a = !1;
      er <= ws ? Dl(s) || (s.n |= rn, a = !Nl(s)) : a = !s.has(lt), a && (s.add(lt), lt.deps.push(s), process.env.NODE_ENV !== "production" && lt.onTrack && lt.onTrack(Ot({ effect: lt }, o)));
    }(i, process.env.NODE_ENV !== "production" ? { effect: lt, target: e, type: t, key: n } : void 0);
  }
}
function un(e, t, n, r, i, s) {
  const o = bs.get(e);
  if (!o) return;
  let a = [];
  if (t === "clear") a = [...o.values()];
  else if (n === "length" && Re(e)) {
    const u = Number(r);
    o.forEach((f, c) => {
      (c === "length" || !Si(c) && c >= u) && a.push(f);
    });
  } else switch (n !== void 0 && a.push(o.get(n)), t) {
    case "add":
      Re(e) ? Us(n) && a.push(o.get("length")) : (a.push(o.get(Sn)), Ln(e) && a.push(o.get(xs)));
      break;
    case "delete":
      Re(e) || (a.push(o.get(Sn)), Ln(e) && a.push(o.get(xs)));
      break;
    case "set":
      Ln(e) && a.push(o.get(Sn));
  }
  const l = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: r, oldValue: i, oldTarget: s } : void 0;
  if (a.length === 1) a[0] && (process.env.NODE_ENV !== "production" ? Fr(a[0], l) : Fr(a[0]));
  else {
    const u = [];
    for (const f of a) f && u.push(...f);
    process.env.NODE_ENV !== "production" ? Fr(ys(u), l) : Fr(ys(u));
  }
}
function Fr(e, t) {
  const n = Re(e) ? e : [...e];
  for (const r of n) r.computed && ca(r, t);
  for (const r of n) r.computed || ca(r, t);
}
function ca(e, t) {
  (e !== lt || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Ot({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const hh = Jp("__proto__,__v_isRef,__isVue"), jl = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Si)), da = mh();
function mh() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = Ce(this);
      for (let s = 0, o = this.length; s < o; s++) xt(r, "get", s + "");
      const i = r[t](...n);
      return i === -1 || i === !1 ? r[t](...n.map(Ce)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ml();
      const r = Ce(this)[t].apply(this, n);
      return Il(), r;
    };
  }), e;
}
function vh(e) {
  const t = Ce(this);
  return xt(t, "has", e), t.hasOwnProperty(e);
}
class Ll {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, r) {
    const i = this._isReadonly, s = this._shallow;
    if (n === "__v_isReactive") return !i;
    if (n === "__v_isReadonly") return i;
    if (n === "__v_isShallow") return s;
    if (n === "__v_raw" && r === (i ? s ? Ul : Hl : s ? Ah : zl).get(t)) return t;
    const o = Re(t);
    if (!i) {
      if (o && ci(da, n)) return Reflect.get(da, n, r);
      if (n === "hasOwnProperty") return vh;
    }
    const a = Reflect.get(t, n, r);
    return (Si(n) ? jl.has(n) : hh(n)) ? a : (i || xt(t, "get", n), s ? a : ft(a) ? o && Us(n) ? a : a.value : pt(a) ? i ? Xl(a) : ql(a) : a);
  }
}
class gh extends Ll {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let s = t[n];
    if (En(s) && ft(s) && !ft(r)) return !1;
    if (!this._shallow && (Ss(r) || En(r) || (s = Ce(s), r = Ce(r)), !Re(t) && ft(s) && !ft(r))) return s.value = r, !0;
    const o = Re(t) && Us(n) ? Number(n) < t.length : ci(t, n), a = Reflect.set(t, n, r, i);
    return t === Ce(i) && (o ? zn(r, s) && un(t, "set", n, r, s) : un(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = ci(t, n), i = t[n], s = Reflect.deleteProperty(t, n);
    return s && r && un(t, "delete", n, void 0, i), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return Si(n) && jl.has(n) || xt(t, "has", n), r;
  }
  ownKeys(t) {
    return xt(t, "iterate", Re(t) ? "length" : Sn), Reflect.ownKeys(t);
  }
}
class Rl extends Ll {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && la(`Set operation on key "${String(n)}" failed: target is readonly.`, t), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && la(`Delete operation on key "${String(n)}" failed: target is readonly.`, t), !0;
  }
}
const yh = new gh(), bh = new Rl(), wh = new Rl(!0), Ws = (e) => e, _i = (e) => Reflect.getPrototypeOf(e);
function Mr(e, t, n = !1, r = !1) {
  const i = Ce(e = e.__v_raw), s = Ce(t);
  n || (zn(t, s) && xt(i, "get", t), xt(i, "get", s));
  const { has: o } = _i(i), a = r ? Ws : n ? Zs : Ks;
  return o.call(i, t) ? a(e.get(t)) : o.call(i, s) ? a(e.get(s)) : void (e !== i && e.get(t));
}
function Ir(e, t = !1) {
  const n = this.__v_raw, r = Ce(n), i = Ce(e);
  return t || (zn(e, i) && xt(r, "has", e), xt(r, "has", i)), e === i ? n.has(e) : n.has(e) || n.has(i);
}
function jr(e, t = !1) {
  return e = e.__v_raw, !t && xt(Ce(e), "iterate", Sn), Reflect.get(e, "size", e);
}
function fa(e) {
  e = Ce(e);
  const t = Ce(this);
  return _i(t).has.call(t, e) || (t.add(e), un(t, "add", e, e)), this;
}
function pa(e, t) {
  t = Ce(t);
  const n = Ce(this), { has: r, get: i } = _i(n);
  let s = r.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Bl(n, r, e) : (e = Ce(e), s = r.call(n, e));
  const o = i.call(n, e);
  return n.set(e, t), s ? zn(t, o) && un(n, "set", e, t, o) : un(n, "add", e, t), this;
}
function ha(e) {
  const t = Ce(this), { has: n, get: r } = _i(t);
  let i = n.call(t, e);
  i ? process.env.NODE_ENV !== "production" && Bl(t, n, e) : (e = Ce(e), i = n.call(t, e));
  const s = r ? r.call(t, e) : void 0, o = t.delete(e);
  return i && un(t, "delete", e, void 0, s), o;
}
function ma() {
  const e = Ce(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Ln(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && un(e, "clear", void 0, void 0, n), r;
}
function Lr(e, t) {
  return function(n, r) {
    const i = this, s = i.__v_raw, o = Ce(s), a = t ? Ws : e ? Zs : Ks;
    return !e && xt(o, "iterate", Sn), s.forEach((l, u) => n.call(r, a(l), a(u), i));
  };
}
function Rr(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, s = Ce(i), o = Ln(s), a = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), f = n ? Ws : t ? Zs : Ks;
    return !t && xt(s, "iterate", l ? xs : Sn), { next() {
      const { value: c, done: m } = u.next();
      return m ? { value: c, done: m } : { value: a ? [f(c[0]), f(c[1])] : f(c), done: m };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function Qt(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${ah(e)} operation ${n}failed: target is readonly.`, Ce(this));
    }
    return e !== "delete" && (e === "clear" ? void 0 : this);
  };
}
function xh() {
  const e = { get(i) {
    return Mr(this, i);
  }, get size() {
    return jr(this);
  }, has: Ir, add: fa, set: pa, delete: ha, clear: ma, forEach: Lr(!1, !1) }, t = { get(i) {
    return Mr(this, i, !1, !0);
  }, get size() {
    return jr(this);
  }, has: Ir, add: fa, set: pa, delete: ha, clear: ma, forEach: Lr(!1, !0) }, n = { get(i) {
    return Mr(this, i, !0);
  }, get size() {
    return jr(this, !0);
  }, has(i) {
    return Ir.call(this, i, !0);
  }, add: Qt("add"), set: Qt("set"), delete: Qt("delete"), clear: Qt("clear"), forEach: Lr(!0, !1) }, r = { get(i) {
    return Mr(this, i, !0, !0);
  }, get size() {
    return jr(this, !0);
  }, has(i) {
    return Ir.call(this, i, !0);
  }, add: Qt("add"), set: Qt("set"), delete: Qt("delete"), clear: Qt("clear"), forEach: Lr(!0, !0) };
  return ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    e[i] = Rr(i, !1, !1), n[i] = Rr(i, !0, !1), t[i] = Rr(i, !1, !0), r[i] = Rr(i, !0, !0);
  }), [e, n, t, r];
}
const [Sh, $h, _h, kh] = xh();
function Ys(e, t) {
  const n = t ? e ? kh : _h : e ? $h : Sh;
  return (r, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(ci(n, i) && i in r ? n : r, i, s);
}
const Oh = { get: Ys(!1, !1) }, Eh = { get: Ys(!0, !1) }, Vh = { get: Ys(!0, !0) };
function Bl(e, t, n) {
  const r = Ce(n);
  if (r !== n && t.call(e, r)) {
    const i = Tl(e);
    console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const zl = /* @__PURE__ */ new WeakMap(), Ah = /* @__PURE__ */ new WeakMap(), Hl = /* @__PURE__ */ new WeakMap(), Ul = /* @__PURE__ */ new WeakMap();
function ql(e) {
  return En(e) ? e : Gs(e, !1, yh, Oh, zl);
}
function Xl(e) {
  return Gs(e, !0, bh, Eh, Hl);
}
function Br(e) {
  return Gs(e, !0, wh, Vh, Ul);
}
function Gs(e, t, n, r, i) {
  if (!pt(e)) return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
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
  }(Tl(a));
  var a;
  if (o === 0) return e;
  const l = new Proxy(e, o === 2 ? r : n);
  return i.set(e, l), l;
}
function _n(e) {
  return En(e) ? _n(e.__v_raw) : !(!e || !e.__v_isReactive);
}
function En(e) {
  return !(!e || !e.__v_isReadonly);
}
function Ss(e) {
  return !(!e || !e.__v_isShallow);
}
function Yi(e) {
  return _n(e) || En(e);
}
function Ce(e) {
  const t = e && e.__v_raw;
  return t ? Ce(t) : e;
}
const Ks = (e) => pt(e) ? ql(e) : e, Zs = (e) => pt(e) ? Xl(e) : e;
function ft(e) {
  return !(!e || e.__v_isRef !== !0);
}
const Ch = { get: (e, t, n) => {
  return ft(r = Reflect.get(e, t, n)) ? r.value : r;
  var r;
}, set: (e, t, n, r) => {
  const i = e[t];
  return ft(i) && !ft(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
} }, gn = [];
function It(e, ...t) {
  if (process.env.NODE_ENV === "production") return;
  Ml();
  const n = gn.length ? gn[gn.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = function() {
    let s = gn[gn.length - 1];
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
  if (r) kn(r, n, 11, [e + t.join(""), n && n.proxy, i.map(({ vnode: s }) => `at <${Ea(n, s.type)}>`).join(`
`), i]);
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    i.length && s.push(`
`, ...function(o) {
      const a = [];
      return o.forEach((l, u) => {
        a.push(...u === 0 ? [] : [`
`], ...function({ vnode: f, recurseCount: c }) {
          const m = c > 0 ? `... (${c} recursive calls)` : "", p = !!f.component && f.component.parent == null, h = ` at <${Ea(f.component, f.type, p)}`, S = ">" + m;
          return f.props ? [h, ...Th(f.props), S] : [h + S];
        }(l));
      }), a;
    }(i)), console.warn(...s);
  }
  Il();
}
function Th(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Wl(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Wl(e, t, n) {
  return Mt(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ft(t) ? (t = Wl(e, Ce(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : Qe(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Ce(t), n ? t : [`${e}=`, t]);
}
const va = { sp: "serverPrefetch hook", bc: "beforeCreate hook", c: "created hook", bm: "beforeMount hook", m: "mounted hook", bu: "beforeUpdate hook", u: "updated", bum: "beforeUnmount hook", um: "unmounted hook", a: "activated hook", da: "deactivated hook", ec: "errorCaptured hook", rtc: "renderTracked hook", rtg: "renderTriggered hook", 0: "setup function", 1: "render function", 2: "watcher getter", 3: "watcher callback", 4: "watcher cleanup function", 5: "native event handler", 6: "component event handler", 7: "vnode hook", 8: "directive hook", 9: "transition hook", 10: "app errorHandler", 11: "app warnHandler", 12: "ref function", 13: "async component loader", 14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core" };
function kn(e, t, n, r) {
  let i;
  try {
    i = r ? e(...r) : e();
  } catch (s) {
    Yl(s, t, n);
  }
  return i;
}
function $s(e, t, n, r) {
  if (Qe(e)) {
    const s = kn(e, t, n, r);
    return s && ih(s) && s.catch((o) => {
      Yl(o, t, n);
    }), s;
  }
  const i = [];
  for (let s = 0; s < e.length; s++) i.push($s(e[s], t, n, r));
  return i;
}
function Yl(e, t, n, r = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const o = t.proxy, a = process.env.NODE_ENV !== "production" ? va[n] : n;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let f = 0; f < u.length; f++) if (u[f](e, o, a) === !1) return;
      }
      s = s.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) return void kn(l, null, 10, [e, o, a]);
  }
  (function(s, o, a, l = !0) {
    if (process.env.NODE_ENV !== "production") {
      const f = va[o];
      if (a && (u = a, gn.push(u)), It("Unhandled error" + (f ? ` during execution of ${f}` : "")), a && gn.pop(), l) throw s;
      console.error(s);
    } else console.error(s);
    var u;
  })(e, n, i, r);
}
let di = !1, _s = !1;
const St = [];
let sn = 0;
const Fn = [];
let Ct = null, nn = 0;
const Gl = Promise.resolve();
let Js = null;
const Ph = 100;
function Kl(e) {
  const t = Js || Gl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Qs(e) {
  St.length && St.includes(e, di && e.allowRecurse ? sn + 1 : sn) || (e.id == null ? St.push(e) : St.splice(function(t) {
    let n = sn + 1, r = St.length;
    for (; n < r; ) {
      const i = n + r >>> 1, s = St[i], o = vr(s);
      o < t || o === t && s.pre ? n = i + 1 : r = i;
    }
    return n;
  }(e.id), 0, e), Zl());
}
function Zl() {
  di || _s || (_s = !0, Js = Gl.then(Ql));
}
function Jl(e) {
  Re(e) ? Fn.push(...e) : Ct && Ct.includes(e, e.allowRecurse ? nn + 1 : nn) || Fn.push(e), Zl();
}
const vr = (e) => e.id == null ? 1 / 0 : e.id, Nh = (e, t) => {
  const n = vr(e) - vr(t);
  if (n === 0) {
    if (e.pre && !t.pre) return -1;
    if (t.pre && !e.pre) return 1;
  }
  return n;
};
function Ql(e) {
  _s = !1, di = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), St.sort(Nh);
  const t = process.env.NODE_ENV !== "production" ? (n) => ga(e, n) : Cl;
  try {
    for (sn = 0; sn < St.length; sn++) {
      const n = St[sn];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n)) continue;
        kn(n, null, 14);
      }
    }
  } finally {
    sn = 0, St.length = 0, function(n) {
      if (Fn.length) {
        const r = [...new Set(Fn)];
        if (Fn.length = 0, Ct) return void Ct.push(...r);
        for (Ct = r, process.env.NODE_ENV !== "production" && (n = n || /* @__PURE__ */ new Map()), Ct.sort((i, s) => vr(i) - vr(s)), nn = 0; nn < Ct.length; nn++) process.env.NODE_ENV !== "production" && ga(n, Ct[nn]) || Ct[nn]();
        Ct = null, nn = 0;
      }
    }(e), di = !1, Js = null, (St.length || Fn.length) && Ql(e);
  }
}
function ga(e, t) {
  if (e.has(t)) {
    const n = e.get(t);
    if (n > Ph) {
      const r = t.ownerInstance, i = r && iu(r.type);
      return It(`Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    }
    e.set(t, n + 1);
  } else e.set(t, 1);
}
const Yn = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (gs().__VUE_HMR_RUNTIME__ = { createRecord: Gi(function(e, t) {
  return zr.has(e) ? !1 : (zr.set(e, { initialDef: Gn(t), instances: /* @__PURE__ */ new Set() }), !0);
}), rerender: Gi(function(e, t) {
  const n = zr.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Gn(r.type).render = t), r.renderCache = [], r.update();
  }));
}), reload: Gi(function(e, t) {
  const n = zr.get(e);
  if (!n) return;
  t = Gn(t), ya(n.initialDef, t);
  const r = [...n.instances];
  for (const i of r) {
    const s = Gn(i.type);
    Yn.has(s) || (s !== n.initialDef && ya(s, t), Yn.add(s)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (Yn.add(s), i.ceReload(t.styles), Yn.delete(s)) : i.parent ? Qs(i.parent.update) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Jl(() => {
    for (const i of r) Yn.delete(Gn(i.type));
  });
}) });
const zr = /* @__PURE__ */ new Map();
function Gn(e) {
  return su(e) ? e.__vccOpts : e;
}
function ya(e, t) {
  Ot(e, t);
  for (const n in e) n === "__file" || n in t || delete e[n];
}
function Gi(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let ur = null, Dh = null;
const Fh = Symbol.for("v-ndc"), Hr = {};
function Mh(e, t, { immediate: n, deep: r, flush: i, onTrack: s, onTrigger: o } = vs) {
  var a;
  process.env.NODE_ENV === "production" || t || (n !== void 0 && It('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), r !== void 0 && It('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const l = (C) => {
    It("Invalid watch source: ", C, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, u = Pl === ((a = Hn) == null ? void 0 : a.scope) ? Hn : null;
  let f, c, m = !1, p = !1;
  if (ft(e) ? (f = () => e.value, m = Ss(e)) : _n(e) ? (f = () => e, r = !0) : Re(e) ? (p = !0, m = e.some((C) => _n(C) || Ss(C)), f = () => e.map((C) => ft(C) ? C.value : _n(C) ? Mn(C) : Qe(C) ? kn(C, u, 2) : void (process.env.NODE_ENV !== "production" && l(C)))) : Qe(e) ? f = t ? () => kn(e, u, 2) : () => {
    if (!u || !u.isUnmounted) return c && c(), $s(e, u, 3, [h]);
  } : (f = Cl, process.env.NODE_ENV !== "production" && l(e)), t && r) {
    const C = f;
    f = () => Mn(C());
  }
  let h = (C) => {
    c = k.onStop = () => {
      kn(C, u, 4), c = k.onStop = void 0;
    };
  }, S = p ? new Array(e.length).fill(Hr) : Hr;
  const v = () => {
    if (k.active) if (t) {
      const C = k.run();
      (r || m || (p ? C.some((G, L) => zn(G, S[L])) : zn(C, S))) && (c && c(), $s(t, u, 3, [C, S === Hr ? void 0 : p && S[0] === Hr ? [] : S, h]), S = C);
    } else k.run();
  };
  let x;
  v.allowRecurse = !!t, i === "sync" ? x = v : i === "post" ? x = () => $a(v, u && u.suspense) : (v.pre = !0, u && (v.id = u.uid), x = () => Qs(v));
  const k = new ph(f, x);
  return process.env.NODE_ENV !== "production" && (k.onTrack = s, k.onTrigger = o), t ? n ? v() : S = k.run() : i === "post" ? $a(k.run.bind(k), u && u.suspense) : k.run(), () => {
    k.stop(), u && u.scope && th(u.scope.effects, k);
  };
}
function Ih(e, t, n) {
  const r = this.proxy, i = Mt(e) ? e.includes(".") ? function(l, u) {
    const f = u.split(".");
    return () => {
      let c = l;
      for (let m = 0; m < f.length && c; m++) c = c[f[m]];
      return c;
    };
  }(r, e) : () => r[e] : e.bind(r, r);
  let s;
  Qe(t) ? s = t : (s = t.handler, n = t);
  const o = Hn;
  Oa(this);
  const a = Mh(i, s.bind(r), n);
  return o ? Oa(o) : Hh(), a;
}
function Mn(e, t) {
  if (!pt(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set()).has(e)) return e;
  if (t.add(e), ft(e)) Mn(e.value, t);
  else if (Re(e)) for (let n = 0; n < e.length; n++) Mn(e[n], t);
  else if (rh(e) || Ln(e)) e.forEach((n) => {
    Mn(n, t);
  });
  else if (oh(e)) for (const n in e) Mn(e[n], t);
  return e;
}
const ks = (e) => e ? 4 & e.vnode.shapeFlag ? function(t) {
  if (t.exposed) return t.exposeProxy || (t.exposeProxy = new Proxy((r = t.exposed, lh(r, "__v_skip", !0), _n(n = r) ? n : new Proxy(n, Ch)), { get: (i, s) => s in i ? i[s] : s in Ki ? Ki[s](t) : void 0, has: (i, s) => s in i || s in Ki }));
  var n, r;
}(e) || e.proxy : ks(e.parent) : null, Ki = Ot(/* @__PURE__ */ Object.create(null), { $: (e) => e, $el: (e) => e.vnode.el, $data: (e) => e.data, $props: (e) => process.env.NODE_ENV !== "production" ? Br(e.props) : e.props, $attrs: (e) => process.env.NODE_ENV !== "production" ? Br(e.attrs) : e.attrs, $slots: (e) => process.env.NODE_ENV !== "production" ? Br(e.slots) : e.slots, $refs: (e) => process.env.NODE_ENV !== "production" ? Br(e.refs) : e.refs, $parent: (e) => ks(e.parent), $root: (e) => ks(e.root), $emit: (e) => e.emit, $options: (e) => function(t) {
  const n = t.type, { mixins: r, extends: i } = n, { mixins: s, optionsCache: o, config: { optionMergeStrategies: a } } = t.appContext, l = o.get(n);
  let u;
  return l ? u = l : s.length || r || i ? (u = {}, s.length && s.forEach((f) => fi(u, f, a, !0)), fi(u, n, a)) : u = n, pt(n) && o.set(n, u), u;
}(e), $forceUpdate: (e) => e.f || (e.f = () => Qs(e.update)), $nextTick: (e) => e.n || (e.n = Kl.bind(e.proxy)), $watch: (e) => Ih.bind(e) });
function ba(e) {
  return Re(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
}
process.env.NODE_ENV;
function fi(e, t, n, r = !1) {
  const { mixins: i, extends: s } = t;
  s && fi(e, s, n, !0), i && i.forEach((o) => fi(e, o, n, !0));
  for (const o in t) if (r && o === "expose") process.env.NODE_ENV !== "production" && It('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
  else {
    const a = jh[o] || n && n[o];
    e[o] = a ? a(e[o], t[o]) : t[o];
  }
  return e;
}
const jh = { data: wa, props: Sa, emits: Sa, methods: Kn, computed: Kn, beforeCreate: nt, created: nt, beforeMount: nt, mounted: nt, beforeUpdate: nt, updated: nt, beforeDestroy: nt, beforeUnmount: nt, destroyed: nt, unmounted: nt, activated: nt, deactivated: nt, errorCaptured: nt, serverPrefetch: nt, components: Kn, directives: Kn, watch: function(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ot(/* @__PURE__ */ Object.create(null), e);
  for (const r in t) n[r] = nt(e[r], t[r]);
  return n;
}, provide: wa, inject: function(e, t) {
  return Kn(xa(e), xa(t));
} };
function wa(e, t) {
  return t ? e ? function() {
    return Ot(Qe(e) ? e.call(this, this) : e, Qe(t) ? t.call(this, this) : t);
  } : t : e;
}
function xa(e) {
  if (Re(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function nt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Kn(e, t) {
  return e ? Ot(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Sa(e, t) {
  return e ? Re(e) && Re(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ot(/* @__PURE__ */ Object.create(null), ba(e), ba(t ?? {})) : t;
}
const $a = function(e, t) {
  t && t.pendingBranch ? Re(e) ? t.effects.push(...e) : t.effects.push(e) : Jl(e);
}, eu = Symbol.for("v-fgt"), Lh = Symbol.for("v-txt"), Rh = Symbol.for("v-cmt"), tu = "__vInternal", nu = ({ key: e }) => e ?? null, Jr = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? Mt(e) || ft(e) || Qe(e) ? { i: ur, r: e, k: t, f: !!n } : e : null), Bh = process.env.NODE_ENV !== "production" ? (...e) => _a(...e) : _a;
function _a(e, t = null, n = null, r = 0, i = null, s = !1) {
  if (e && e !== Fh || (process.env.NODE_ENV === "production" || e || It(`Invalid vnode type when creating vnode: ${e}.`), e = Rh), (o = e) && o.__v_isVNode === !0) {
    const l = pi(e, t, !0);
    return n && Os(l, n), l.patchFlag |= -2, l;
  }
  var o;
  if (su(e) && (e = e.__vccOpts), t) {
    t = function(f) {
      return f ? Yi(f) || tu in f ? Ot({}, f) : f : null;
    }(t);
    let { class: l, style: u } = t;
    l && !Mt(l) && (t.class = Xs(l)), pt(u) && (Yi(u) && !Re(u) && (u = Ot({}, u)), t.style = qs(u));
  }
  const a = Mt(e) ? 1 : ((l) => l.__isSuspense)(e) ? 128 : ((l) => l.__isTeleport)(e) ? 64 : pt(e) ? 4 : Qe(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && 4 & a && Yi(e) && It("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e = Ce(e)), function(l, u = null, f = null, c = 0, m = null, p = l === eu ? 0 : 1, h = !1, S = !1) {
    const v = { __v_isVNode: !0, __v_skip: !0, type: l, props: u, key: u && nu(u), ref: u && Jr(u), scopeId: Dh, slotScopeIds: null, children: f, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: p, patchFlag: c, dynamicProps: m, dynamicChildren: null, appContext: null, ctx: ur };
    return S ? (Os(v, f), 128 & p && l.normalize(v)) : f && (v.shapeFlag |= Mt(f) ? 8 : 16), process.env.NODE_ENV !== "production" && v.key != v.key && It("VNode created with invalid key (NaN). VNode type:", v.type), v;
  }(e, t, n, r, i, a, s, !0);
}
function pi(e, t, n = !1) {
  const { props: r, ref: i, patchFlag: s, children: o } = e, a = t ? function(...l) {
    const u = {};
    for (let f = 0; f < l.length; f++) {
      const c = l[f];
      for (const m in c) if (m === "class") u.class !== c.class && (u.class = Xs([u.class, c.class]));
      else if (m === "style") u.style = qs([u.style, c.style]);
      else if (eh(m)) {
        const p = u[m], h = c[m];
        !h || p === h || Re(p) && p.includes(h) || (u[m] = p ? [].concat(p, h) : h);
      } else m !== "" && (u[m] = c[m]);
    }
    return u;
  }(r || {}, t) : r;
  return { __v_isVNode: !0, __v_skip: !0, type: e.type, props: a, key: a && nu(a), ref: t && t.ref ? n && i ? Re(i) ? i.concat(Jr(t)) : [i, Jr(t)] : Jr(t) : i, scopeId: e.scopeId, slotScopeIds: e.slotScopeIds, children: process.env.NODE_ENV !== "production" && s === -1 && Re(o) ? o.map(ru) : o, target: e.target, targetAnchor: e.targetAnchor, staticCount: e.staticCount, shapeFlag: e.shapeFlag, patchFlag: t && e.type !== eu ? s === -1 ? 16 : 16 | s : s, dynamicProps: e.dynamicProps, dynamicChildren: e.dynamicChildren, appContext: e.appContext, dirs: e.dirs, transition: e.transition, component: e.component, suspense: e.suspense, ssContent: e.ssContent && pi(e.ssContent), ssFallback: e.ssFallback && pi(e.ssFallback), el: e.el, anchor: e.anchor, ctx: e.ctx, ce: e.ce };
}
function ru(e) {
  const t = pi(e);
  return Re(e.children) && (t.children = e.children.map(ru)), t;
}
function zh(e = " ", t = 0) {
  return Bh(Lh, null, e, t);
}
function Os(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null) t = null;
  else if (Re(t)) n = 16;
  else if (typeof t == "object") {
    if (65 & r) {
      const i = t.default;
      return void (i && (i._c && (i._d = !1), Os(e, i()), i._c && (i._d = !0)));
    }
    {
      n = 32;
      const i = t._;
      i || tu in t || (t._ctx = ur);
    }
  } else Qe(t) ? (t = { default: t, _ctx: ur }, n = 32) : (t = String(t), 64 & r ? (n = 16, t = [zh(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
let eo, Nn, Hn = null, ka = "__VUE_INSTANCE_SETTERS__";
(Nn = gs()[ka]) || (Nn = gs()[ka] = []), Nn.push((e) => Hn = e), eo = (e) => {
  Nn.length > 1 ? Nn.forEach((t) => t(e)) : Nn[0](e);
};
const Oa = (e) => {
  eo(e), e.scope.on();
}, Hh = () => {
  Hn && Hn.scope.off(), eo(null);
}, Uh = /(?:^|[-_])(\w)/g, qh = (e) => e.replace(Uh, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function iu(e, t = !0) {
  return Qe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ea(e, t, n = !1) {
  let r = iu(t);
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
  return r ? qh(r) : n ? "App" : "Anonymous";
}
function su(e) {
  return Qe(e) && "__vccOpts" in e;
}
function Zi(e) {
  return !(!e || !e.__v_isShallow);
}
function Va(e, t, n) {
  if (arguments.length === 2) for (var r, i = 0, s = t.length; i < s; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
  return e.concat(r || Array.prototype.slice.call(t));
}
function ou(e, t) {
  if (e === t) return !0;
  if (typeof e == "object") {
    for (var n in e) if (!ou(e[n], t[n])) return !1;
    return !0;
  }
  return !1;
}
process.env.NODE_ENV !== "production" && function() {
  if (process.env.NODE_ENV === "production" || typeof window > "u") return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, i = { header: (c) => pt(c) ? c.__isVue ? ["div", e, "VueInstance"] : ft(c) ? ["div", {}, ["span", e, f(c)], "<", a(c.value), ">"] : _n(c) ? ["div", {}, ["span", e, Zi(c) ? "ShallowReactive" : "Reactive"], "<", a(c), ">" + (En(c) ? " (readonly)" : "")] : En(c) ? ["div", {}, ["span", e, Zi(c) ? "ShallowReadonly" : "Readonly"], "<", a(c), ">"] : null : null, hasBody: (c) => c && c.__isVue, body(c) {
    if (c && c.__isVue) return ["div", {}, ...s(c.$)];
  } };
  function s(c) {
    const m = [];
    c.type.props && c.props && m.push(o("props", Ce(c.props))), c.setupState !== vs && m.push(o("setup", c.setupState)), c.data !== vs && m.push(o("data", Ce(c.data)));
    const p = l(c, "computed");
    p && m.push(o("computed", p));
    const h = l(c, "inject");
    return h && m.push(o("injected", h)), m.push(["div", {}, ["span", { style: r.style + ";opacity:0.66" }, "$ (internal): "], ["object", { object: c }]]), m;
  }
  function o(c, m) {
    return m = Ot({}, m), Object.keys(m).length ? ["div", { style: "line-height:1.25em;margin-bottom:0.6em" }, ["div", { style: "color:#476582" }, c], ["div", { style: "padding-left:1.25em" }, ...Object.keys(m).map((p) => ["div", {}, ["span", r, p + ": "], a(m[p], !1)])]] : ["span", {}];
  }
  function a(c, m = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", r, c] : pt(c) ? ["object", { object: m ? Ce(c) : c }] : ["span", n, String(c)];
  }
  function l(c, m) {
    const p = c.type;
    if (Qe(p)) return;
    const h = {};
    for (const S in c.ctx) u(p, S, m) && (h[S] = c.ctx[S]);
    return h;
  }
  function u(c, m, p) {
    const h = c[p];
    return !!(Re(h) && h.includes(m) || pt(h) && m in h) || !(!c.extends || !u(c.extends, m, p)) || !(!c.mixins || !c.mixins.some((S) => u(S, m, p))) || void 0;
  }
  function f(c) {
    return Zi(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}(), typeof SuppressedError == "function" && SuppressedError;
var Xh = function() {
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
          var c = function(m) {
            for (var p = [], h = 1; h < arguments.length; h++) p[h - 1] = arguments[h];
            if (f = p, !l || m !== u) {
              var S = a.leading;
              typeof S == "function" && (S = S(m, u)), l && m === u || !S || s.apply(void 0, Va([m], f, !1)), u = m, clearTimeout(l), l = setTimeout(function() {
                s.apply(void 0, Va([m], f, !1)), l = 0;
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
      }, this.options.intersection), Kl(function() {
        n.observer && n.observer.observe(n.el);
      });
    }
  }, e.prototype.destroyObserver = function() {
    this.observer && (this.observer.disconnect(), this.observer = null), this.callback && this.callback._clear && (this.callback._clear(), this.callback = null);
  }, e;
}(), Wh = { beforeMount: function(e, t) {
  var n = t.value;
  n && (typeof IntersectionObserver > "u" ? console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill") : e._vue_visibilityState = new Xh(e, n));
}, updated: function(e, t) {
  var n = t.value;
  if (!ou(n, t.oldValue)) {
    var r = e._vue_visibilityState;
    n && r && r.createObserver(n);
  }
}, unmounted: function(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
} };
const Yh = { class: "x-select__before-list" }, Gh = { class: "x-select__no-result" }, Kh = {
  directives: {
    observeVisibility: Wh
  }
}, Zh = /* @__PURE__ */ $e({
  ...Kh,
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
    Fa((q) => ({
      "6d42b355": e.flexWidth
    }));
    const n = Vn(), r = He(null), i = t, s = e, o = kt({
      search: "",
      isOpen: !1,
      hovered: !1,
      focused: !1
    }), a = "No matches", l = "List is empty", u = s.placeholder || "Not chosen", f = T(() => ({
      ...n,
      onOpen: I,
      onClose: R,
      "on-search-change": Y
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
          const he = q.map((A) => typeof A == "object" ? A[Q] : A);
          return i("update:modelValue", he);
        }
        if (typeof q == "object")
          return i("update:modelValue", q[Q]);
        i("update:modelValue", q);
      }
    }), m = T(() => [
      "x-select",
      `x-select--size-${s.size}`,
      `x-select--${s.color}`,
      {
        "x-select--hovered": o.hovered,
        "x-select--focused": o.focused,
        "x-select--filled": H(h),
        "x-select--success": !o.focused && s.passed,
        "x-select--error": s.failed,
        "x-select--show-clear-icon": k,
        "x-select--mark-selected-option": s.markSelectedOption,
        "x-select--text-center": !s.markSelectedOption && !s.multiple,
        "x-select--flex": s.flex,
        "x-select--rounded": s.rounded
      }
    ]), p = T(() => s.width !== void 0 ? { width: typeof s.width == "number" ? s.width + "px" : s.width } : {}), h = T(() => s.modelValue instanceof Array ? s.modelValue.length > 0 : s.modelValue !== null && s.modelValue !== void 0), S = T(() => o.search !== ""), v = T(() => o.focused ? "dropdown-up" : "dropdown-down"), x = T(() => {
      if (s.prependIcon && s.modelValue)
        return !0;
    }), k = T(() => s.clearable && !s.disabled && (H(K) && H(S) && o.focused || (s.multiple ? H(h) && (o.hovered || o.focused) : !H(X) && H(h) && (o.hovered || o.focused)))), C = T(() => s.modelValue instanceof Array && s.modelValue.length > s.limit), G = T(() => s.modelValue instanceof Array ? s.modelValue.length - s.limit : 0), L = T(() => o.focused && !H(h) && !H(K)), K = T(() => s.searchable === void 0 ? s.options.length > 8 : s.searchable), X = T(() => s.multiple ? !1 : s.preselectFirst === void 0 ? !0 : s.preselectFirst), re = T(() => H(h) && (s.multiple ? H(K) : o.focused) ? "" : u), M = () => {
      const q = s.modelValue instanceof Array ? [] : null;
      i("input", q);
    }, Y = (q) => {
      o.search = q, i("search-change", q);
    }, N = () => {
      !H(S) && H(h) && (M(), o.focused && r.value && setTimeout(r.value.activate));
    }, ne = (q) => !q.$isLabel, fe = (q) => {
      if (Array.isArray(s.modelValue)) {
        if (typeof q == "object" && Array.isArray(s.modelValue)) {
          if (q.$isLabel) return;
          const Q = s.trackBy, he = q[Q];
          return !!s.modelValue.find((A) => A === he);
        }
        return s.modelValue.includes(q);
      }
    }, j = (q) => {
      if (s.trackBy)
        return typeof s.modelValue == "object" && typeof q == "object" ? (s.modelValue || {})[s.trackBy] === q[s.trackBy] : typeof q == "object" && (typeof s.modelValue == "string" || typeof s.modelValue == "number") ? s.modelValue === q[s.trackBy] : s.modelValue === q;
    }, E = () => {
      o.hovered = !0;
    }, V = () => {
      o.hovered = !1;
    }, I = (q) => {
      o.isOpen = !0, o.focused = !0, o.hovered = !0, i("open", q);
    }, R = (q) => {
      o.isOpen = !1, o.focused = !1, o.hovered = !1, i("close", q);
    }, U = (q) => q ? q.$isLabel ? q.$groupLabel : typeof q == "object" ? q[s.label] : q : "", W = (q) => s.optionAppendIcon ? typeof s.optionAppendIcon == "string" ? s.optionAppendIcon : s.optionAppendIcon(q) : null, le = async (q) => {
      await ht(), q(s.modelValue);
    }, ye = () => i(s.beforeListBtnAction);
    return (q, Q) => {
      const he = qu("observe-visibility");
      return F(), ve(D(br), {
        name: e.name,
        value: e.modelValue
      }, {
        default: de(({ handleChange: A }) => [
          se("div", {
            class: De(m.value),
            style: bn(p.value),
            onMouseenter: E,
            onMouseleave: V
          }, [
            me(D(Al), _e({
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
              searchable: K.value,
              "preselect-first": X.value,
              limit: e.limit,
              disabled: e.disabled,
              "close-on-select": !e.multiple,
              placeholder: re.value,
              "open-direction": e.openDirection,
              "show-no-results": e.showNoResults,
              onSelect: (B) => le(A)
            }), Xu({
              singleLabel: de(({ option: B }) => [
                B.$icon || e.optionPrependIcon ? (F(), ve(D(Ze), {
                  key: 0,
                  name: B.$icon || e.optionPrependIcon && e.optionPrependIcon(B),
                  size: "24",
                  class: "x-select__option-prepend-icon"
                }, null, 8, ["name"])) : pe("", !0),
                ce(q.$slots, "single-label", Nt(qt({ label: U(B), option: B })), () => [
                  Le(Ne(U(B)), 1)
                ]),
                e.optionAppendIcon ? (F(), ve(D(Ze), _e({
                  key: 1,
                  name: W(B)
                }, e.optionAppendIconProps, { class: "x-select__option-append-icon" }), null, 16, ["name"])) : pe("", !0)
              ]),
              selection: de(({ remove: B, values: we }) => [
                ce(q.$slots, "selection", Nt(qt({ selectedOptionsCount: G.value })), () => [
                  x.value ? (F(), ve(D(Ze), _e({
                    key: 0,
                    name: e.prependIcon
                  }, e.prependIconProps, { class: "x-select__prepend-icon" }), null, 16, ["name"])) : pe("", !0),
                  L.value ? (F(), oe(Wt, { key: 1 }, [
                    Le(Ne(D(u)), 1)
                  ], 64)) : pe("", !0),
                  (F(!0), oe(Wt, null, On(we, (ge, Ve) => (F(), ve(D(Io), {
                    key: Ve,
                    "prepend-icon": ge.$icon,
                    closable: "",
                    truncate: "",
                    onClose: (Fe) => B(ge)
                  }, {
                    default: de(() => [
                      Le(Ne(U(ge)), 1)
                    ]),
                    _: 2
                  }, 1032, ["prepend-icon", "onClose"]))), 128)),
                  C.value ? (F(), ve(D(Io), {
                    key: 2,
                    class: "x-select__limit"
                  }, {
                    default: de(() => [
                      Le(" +" + Ne(G.value), 1)
                    ]),
                    _: 1
                  })) : pe("", !0)
                ])
              ]),
              clear: de(() => [
                k.value ? (F(), ve(D(Ze), {
                  key: 0,
                  class: "x-select__clear-icon",
                  name: "clear",
                  onMousedown: N
                })) : pe("", !0)
              ]),
              caret: de(({ toggle: B }) => [
                me(D(Ze), {
                  class: "x-select__caret",
                  name: v.value,
                  onMousedown: Xe(B, ["prevent", "stop"])
                }, null, 8, ["name", "onMousedown"])
              ]),
              noResult: de(() => [
                se("div", { class: "x-select__no-result" }, Ne(a))
              ]),
              noOptions: de(() => [
                mt(se("div", Gh, Ne(l), 512), [
                  [Pt, e.showNoResults]
                ])
              ]),
              _: 2
            }, [
              e.beforeListBtnAction ? {
                name: "beforeList",
                fn: de(() => [
                  ce(q.$slots, "beforeList", {}, () => [
                    se("div", Yh, [
                      me(D(rt), {
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
                          Le(Ne(e.beforeListBtnText), 1)
                        ]),
                        _: 1
                      }, 8, ["append", "data-test-id"]),
                      me(D(hd))
                    ])
                  ])
                ]),
                key: "0"
              } : void 0,
              e.multiple ? {
                name: "option",
                fn: de(({ option: B }) => [
                  me(D(us), {
                    checkbox: ne(B),
                    checked: fe(B),
                    "prepend-icon": B.$icon || e.optionPrependIcon && e.optionPrependIcon(B),
                    "append-icon": W(B),
                    "append-icon-props": e.optionAppendIconProps,
                    "is-truncate": e.flex,
                    "mark-selected-option": e.markSelectedOption,
                    rounded: e.rounded
                  }, {
                    default: de(() => [
                      Le(Ne(U(B)), 1)
                    ]),
                    _: 2
                  }, 1032, ["checkbox", "checked", "prepend-icon", "append-icon", "append-icon-props", "is-truncate", "mark-selected-option", "rounded"])
                ]),
                key: "1"
              } : {
                name: "option",
                fn: de(({ option: B }) => [
                  me(D(us), {
                    checked: j(B),
                    "prepend-icon": B.$icon || e.optionPrependIcon && e.optionPrependIcon(B),
                    "append-icon": W(B),
                    "append-icon-props": e.optionAppendIconProps,
                    "mark-selected-option": e.markSelectedOption,
                    "is-truncate": e.flex,
                    rounded: e.rounded
                  }, {
                    default: de(() => [
                      ce(q.$slots, "list-option", Nt(qt({ label: U(B), option: B })), () => [
                        Le(Ne(U(B)), 1)
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
                  mt(se("div", null, null, 512), [
                    [he, { callback: () => i("options-end"), throttle: 500 }]
                  ])
                ]),
                key: "3"
              } : void 0
            ]), 1040, ["modelValue", "name", "options", "group-values", "group-label", "group-select", "label", "track-by", "multiple", "allow-empty", "searchable", "preselect-first", "limit", "disabled", "close-on-select", "placeholder", "open-direction", "show-no-results", "onSelect"]),
            Q[1] || (Q[1] = se("div", { class: "x-select__border" }, null, -1))
          ], 38)
        ]),
        error: de(({ errorMessage: A }) => [
          ce(q.$slots, "error", Nt(qt({ errorMessage: A })))
        ]),
        _: 3
      }, 8, ["name", "value"]);
    };
  }
});
var Jh = Object.defineProperty, Qh = (e, t, n) => t in e ? Jh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, cr = (e, t, n) => Qh(e, typeof t != "symbol" ? t + "" : t, n);
const Aa = {
  "#": { pattern: /[0-9]/ },
  "@": { pattern: /[a-zA-Z]/ },
  "*": { pattern: /[a-zA-Z0-9]/ }
}, Ca = (e, t, n) => e.replaceAll(t, "").replace(n, ".").replace("..", ".").replace(/[^.\d]/g, ""), Ta = (e, t, n) => {
  var r;
  return new Intl.NumberFormat(((r = n.number) == null ? void 0 : r.locale) ?? "en", {
    minimumFractionDigits: e,
    maximumFractionDigits: t,
    roundingMode: "trunc"
  });
}, em = (e, t = !0, n) => {
  var r, i, s, o;
  const a = ((r = n.number) == null ? void 0 : r.unsigned) !== !0 && e.startsWith("-") ? "-" : "", l = ((i = n.number) == null ? void 0 : i.fraction) ?? 0;
  let u = Ta(0, l, n);
  const f = u.formatToParts(1000.12), c = ((s = f.find((v) => v.type === "group")) == null ? void 0 : s.value) ?? " ", m = ((o = f.find((v) => v.type === "decimal")) == null ? void 0 : o.value) ?? ".", p = Ca(e, c, m);
  if (Number.isNaN(parseFloat(p))) return a;
  const h = p.split(".");
  if (h[1] != null && h[1].length >= 1) {
    const v = h[1].length <= l ? h[1].length : l;
    u = Ta(v, l, n);
  }
  let S = u.format(parseFloat(p));
  return t ? l > 0 && p.endsWith(".") && !p.slice(0, -1).includes(".") && (S += m) : S = Ca(S, c, m), a + S;
};
class tm {
  constructor(t = {}) {
    cr(this, "opts", {}), cr(this, "memo", /* @__PURE__ */ new Map());
    const n = { ...t };
    if (n.tokens != null) {
      n.tokens = n.tokensReplace ? { ...n.tokens } : { ...Aa, ...n.tokens };
      for (const r of Object.values(n.tokens))
        typeof r.pattern == "string" && (r.pattern = new RegExp(r.pattern));
    } else
      n.tokens = Aa;
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
    if (this.opts.number != null) return em(t, r, this.opts);
    if (n == null) return t;
    const i = `v=${t},mr=${n},m=${r ? 1 : 0}`;
    if (this.memo.has(i)) return this.memo.get(i);
    const { mask: s, escaped: o } = this.escapeMask(n), a = [], l = this.opts.tokens != null ? this.opts.tokens : {}, u = this.isReversed() ? -1 : 1, f = this.isReversed() ? "unshift" : "push", c = this.isReversed() ? 0 : s.length - 1, m = this.isReversed() ? () => v > -1 && x > -1 : () => v < s.length && x < t.length, p = (C) => !this.isReversed() && C <= c || this.isReversed() && C >= c;
    let h, S = -1, v = this.isReversed() ? s.length - 1 : 0, x = this.isReversed() ? t.length - 1 : 0, k = !1;
    for (; m(); ) {
      const C = s.charAt(v), G = l[C], L = (G == null ? void 0 : G.transform) != null ? G.transform(t.charAt(x)) : t.charAt(x);
      if (!o.includes(v) && G != null ? (L.match(G.pattern) != null ? (a[f](L), G.repeated ? (S === -1 ? S = v : v === c && v !== S && (v = S - u), c === S && (v -= u)) : G.multiple && (k = !0, v -= u), v += u) : G.multiple ? k && (v += u, x -= u, k = !1) : L === h ? h = void 0 : G.optional && (v += u, x -= u), x += u) : (r && !this.isEager() && a[f](C), L === C && !this.isEager() ? x += u : h = C, this.isEager() || (v += u)), this.isEager())
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
const au = (e) => JSON.parse(e.replaceAll("'", '"')), nm = (e, t = {}) => {
  const n = { ...t };
  e.dataset.maska != null && e.dataset.maska !== "" && (n.mask = rm(e.dataset.maska)), e.dataset.maskaEager != null && (n.eager = Ur(e.dataset.maskaEager)), e.dataset.maskaReversed != null && (n.reversed = Ur(e.dataset.maskaReversed)), e.dataset.maskaTokensReplace != null && (n.tokensReplace = Ur(e.dataset.maskaTokensReplace)), e.dataset.maskaTokens != null && (n.tokens = im(e.dataset.maskaTokens));
  const r = {};
  return e.dataset.maskaNumberLocale != null && (r.locale = e.dataset.maskaNumberLocale), e.dataset.maskaNumberFraction != null && (r.fraction = parseInt(e.dataset.maskaNumberFraction)), e.dataset.maskaNumberUnsigned != null && (r.unsigned = Ur(e.dataset.maskaNumberUnsigned)), (e.dataset.maskaNumber != null || Object.values(r).length > 0) && (n.number = r), n;
}, Ur = (e) => e !== "" ? !!JSON.parse(e) : !0, rm = (e) => e.startsWith("[") && e.endsWith("]") ? au(e) : e, im = (e) => {
  if (e.startsWith("{") && e.endsWith("}"))
    return au(e);
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
class sm {
  constructor(t, n = {}) {
    cr(this, "items", /* @__PURE__ */ new Map()), cr(this, "eventAbortController"), cr(this, "onInput", (r) => {
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
      const i = new tm(nm(r, n));
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
    const l = t.value, u = a.slice(0, o), f = l.slice(0, o), c = (i = this.processInput(t, u)) == null ? void 0 : i.unmasked, m = (s = this.processInput(t, f)) == null ? void 0 : s.unmasked;
    if (c === void 0 || m === void 0) return;
    let p = o;
    u !== f && (p += n ? l.length - a.length : c.length - m.length), t.setSelectionRange(p, p);
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
const Ji = /* @__PURE__ */ new WeakMap(), om = (e, t) => {
  if (e.arg == null || e.instance == null) return;
  const n = "setup" in e.instance.$.type;
  e.arg in e.instance ? e.instance[e.arg] = t : n && console.warn("Maska: please expose `%s` using defineExpose", e.arg);
}, am = (e, t) => {
  var n;
  const r = e instanceof HTMLInputElement ? e : e.querySelector("input");
  if (r == null || (r == null ? void 0 : r.type) === "file") return;
  let i = {};
  if (t.value != null && (i = typeof t.value == "string" ? { mask: t.value } : { ...t.value }), t.arg != null) {
    const s = (o) => {
      const a = t.modifiers.unmasked ? o.unmasked : t.modifiers.completed ? o.completed : o.masked;
      om(t, a);
    };
    i.onMaska = i.onMaska == null ? s : Array.isArray(i.onMaska) ? [...i.onMaska, s] : [i.onMaska, s];
  }
  Ji.has(r) ? (n = Ji.get(r)) == null || n.update(i) : Ji.set(r, new sm(r, i));
}, lm = {
  key: 0,
  class: "x-input__prepend"
}, um = ["value", "onChange", "onBlur"], cm = {
  key: 2,
  class: "x-input__append"
}, dm = {
  key: 0,
  class: "x-input__spin-buttons"
}, fm = /* @__PURE__ */ $e({
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
    const r = Vn(), i = He(), s = kt({
      focused: !1
    }), o = e, a = n, { class: l = "", ...u } = r, f = T(() => (o.value || o.modelValue).toString()), c = T(() => typeof o.rounded == "boolean"), m = T(() => [
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
    })), h = T(() => ({
      type: "button",
      text: !0,
      color: "gray",
      class: "x-input__prepend-btn",
      size: o.size,
      icon: o.prependIcon,
      iconProps: o.prependIconProps,
      disabled: o.disabled
    })), S = T(() => ({
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
      var M;
      return (M = i.value) == null ? void 0 : M.focus();
    }, k = () => s.focused = !0, C = (M) => {
      s.focused = !1, M();
    }, G = () => {
      o.onPrependClick && o.onPrependClick();
    }, L = () => {
      o.onAppendClick && o.onAppendClick();
    }, K = (M, Y) => {
      const N = M.target;
      let { value: ne } = N;
      Y(M, !0), o.modelModifiers.lowercase && (ne = ne.toLowerCase()), a("update:modelValue", ne);
    }, X = () => {
      const M = (parseInt(H(f)) || 0) + 1;
      a("update:modelValue", M);
    }, re = () => {
      const M = (parseInt(H(f)) || 0) - 1;
      a("update:modelValue", M);
    };
    return t({
      focus: x
    }), (M, Y) => (F(), ve(D(br), {
      name: e.name,
      value: f.value,
      class: "x-input-container"
    }, {
      default: de(({ inputValue: N, handleChange: ne, handleBlur: fe }) => [
        se("div", {
          class: De(m.value),
          onClick: x
        }, [
          e.prepend || M.$slots.prepend ? (F(), oe("div", lm, [
            ce(M.$slots, "prepend", {}, () => [
              Le(Ne(e.prepend), 1)
            ], !0)
          ])) : pe("", !0),
          e.onPrependClick ? (F(), ve(D(rt), _e({ key: 1 }, h.value, { onClick: G }), null, 16)) : pe("", !0),
          mt(se("input", _e({
            ref_key: "input",
            ref: i
          }, p.value, {
            value: N,
            onChange: (j) => K(j, ne),
            onFocus: k,
            onBlur: (j) => C(fe)
          }), null, 16, um), [
            [D(am), e.mask]
          ]),
          e.append || M.$slots.append || e.type === "number" ? (F(), oe("div", cm, [
            e.type === "number" ? (F(), oe("div", dm, [
              me(D(rt), _e({ icon: "input-arrow-up" }, v.value, { onClick: X }), null, 16),
              me(D(rt), _e({ icon: "input-arrow-down" }, v.value, { onClick: re }), null, 16)
            ])) : ce(M.$slots, "append", { key: 1 }, () => [
              Le(Ne(e.append), 1)
            ], !0)
          ])) : pe("", !0),
          e.onAppendClick ? (F(), ve(D(rt), _e({ key: 3 }, S.value, { onClick: L }), null, 16)) : pe("", !0)
        ], 2)
      ]),
      error: de(({ errorMessage: N }) => [
        ce(M.$slots, "error", Nt(qt({ errorMessage: N })), void 0, !0)
      ]),
      _: 3
    }, 8, ["name", "value"]));
  }
}), tr = /* @__PURE__ */ We(fm, [["__scopeId", "data-v-eec20375"]]);
var gr = /* @__PURE__ */ ((e) => (e.LINE_CONTAINS = "Line contains", e.LINE_CONTAINS_REGEX_MATCH = "Line contains regex match", e))(gr || {});
const pm = [{
  name: "Line contains",
  id: gr.LINE_CONTAINS
}, {
  name: "Line contains regex match",
  id: gr.LINE_CONTAINS_REGEX_MATCH
}], hm = /* @__PURE__ */ $e({
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
      default: gr.LINE_CONTAINS
    },
    icon: {
      type: String,
      default: null
    },
    showMode: Boolean
  },
  emits: ["update:model-value", "update:mode", "clear"],
  setup(e, { emit: t }) {
    const n = La(), r = e, i = t, s = T({
      get() {
        return r.modelValue;
      },
      set(m) {
        i("update:model-value", m);
      }
    }), o = T({
      get() {
        return r.mode;
      },
      set(m) {
        i("update:mode", m), u();
      }
    }), a = T(() => [
      "x-search",
      { "x-search--fill": r.modelValue },
      { "x-search--select": r.showMode }
    ]), l = (m) => {
      if (n.append) return;
      const p = m.target;
      s.value = p.value;
    }, u = () => {
      i("clear", H(s));
    }, f = T(() => r.mode === gr.LINE_CONTAINS ? "203px" : "260px"), c = T(() => ({
      class: "x-search__icon",
      name: r.icon ?? "search-right",
      size: "16",
      stroke: null
    }));
    return (m, p) => (F(), oe("div", {
      class: De(a.value)
    }, [
      e.showMode ? (F(), ve(D(Zh), {
        key: 0,
        modelValue: o.value,
        "onUpdate:modelValue": p[0] || (p[0] = (h) => o.value = h),
        options: D(pm),
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
      me(D(tr), {
        modelValue: s.value,
        "onUpdate:modelValue": p[1] || (p[1] = (h) => s.value = h),
        modelModifiers: { trim: !0 },
        placeholder: e.placeholder,
        name: e.name,
        color: e.color,
        autocomplete: "off",
        onInput: l
      }, {
        prepend: de(() => [
          s.value ? pe("", !0) : (F(), ve(D(Ze), Nt(_e({ key: 0 }, c.value)), null, 16))
        ]),
        append: de(() => [
          ce(m.$slots, "append", {}, () => [
            s.value ? (F(), ve(D(rt), {
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
}), mm = /* @__PURE__ */ We(hm, [["__scopeId", "data-v-e84a81bf"]]);
var hi = /* @__PURE__ */ ((e) => (e.MINUTE = "minute", e.HOUR = "hour", e.DAY = "day", e.TODAY = "today", e.YESTERDAY = "yesterday", e.BEFORE_YESTERDAY = "before-yesterday", e.WEEK = "week", e.MONTH = "month", e.RANGE = "range", e.ALL_TIME = "all-time", e))(hi || {});
const vm = {
  key: 0,
  class: "x-date-picker-quick-links-list"
}, gm = { class: "x-date-picker-quick-links-list__content" }, ym = { class: "x-date-picker-quick-links-list__in" }, bm = { key: 1 }, wm = /* @__PURE__ */ $e({
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
    return (o, a) => e.options.length ? (F(), oe("div", vm, [
      se("div", gm, [
        se("ul", ym, [
          (F(!0), oe(Wt, null, On(e.options, (l) => (F(), oe("li", {
            key: l.id,
            class: De(["x-date-picker-quick-links-list__item", { "x-date-picker-quick-links-list__item--active": l.id === i.value.id }])
          }, [
            me(D(rt), {
              type: "button",
              class: "x-date-picker-quick-links-list__link",
              color: "gray",
              size: "xs",
              ghost: "",
              onClick: (u) => s(l)
            }, {
              default: de(() => [
                Le(Ne(l.title), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]),
            l.id === i.value.id ? (F(), ve(D(Ze), {
              key: 0,
              class: "x-date-picker-quick-links-list__check",
              name: "checkmark",
              size: "16"
            })) : pe("", !0)
          ], 2))), 128))
        ])
      ])
    ])) : (F(), oe("div", bm, a[0] || (a[0] = [
      se("p", { class: "x-date-picker-quick-links-list__empty" }, " No shortcuts found. ", -1),
      se("p", { class: "x-date-picker-quick-links-list__empty" }, " 'Please adjust your search or try entering specific dates and times manually.' ", -1)
    ])));
  }
}), xm = /* @__PURE__ */ We(wm, [["__scopeId", "data-v-01f5a9c8"]]), Sm = { class: "x-date-picker-quick-links" }, $m = /* @__PURE__ */ $e({
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
    const n = e, r = t, i = kt({
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
    return (l, u) => (F(), oe("div", Sm, [
      me(D(mm), {
        modelValue: i.search,
        "onUpdate:modelValue": u[0] || (u[0] = (f) => i.search = f),
        "show-submit": !1,
        color: "tertiary",
        placeholder: "Search quick ranges",
        class: "mb-2",
        onClear: a
      }, null, 8, ["modelValue"]),
      me(xm, {
        modelValue: s.value,
        "onUpdate:modelValue": u[1] || (u[1] = (f) => s.value = f),
        options: o.value
      }, null, 8, ["modelValue", "options"])
    ]));
  }
}), _m = "YYYY-MM-DD HH:mm", lu = "DD/MM/YYYY", uu = "HH:mm", km = `${lu} ${uu}`, Om = "00:00", mi = (e) => Bn(e, lu, !0).isValid(), vi = (e) => Bn(e, uu, !0).isValid(), In = ({ date: e, time: t }) => Bn(`${e} ${t || Om}`, km).format(_m), Es = (e, t) => Bn(e).isBefore(Bn(t)), Em = El({
  startDate: Qn().test("is-valid-date", function(e = "") {
    if (!e && !this.parent.endDate) return !0;
    if (!mi(e)) return !1;
    if (!this.parent.endDate) return !0;
    const t = In({ date: e, time: this.parent.startTime }), n = In({ date: this.parent.endDate, time: this.parent.endTime || "23:59" });
    return Es(t, n);
  }),
  startTime: Qn().test("is-valid-time", function(e = "") {
    return e ? vi(e) : !0;
  }),
  endDate: Qn().test("is-valid-date", function(e = "") {
    if (!e && !this.parent.startDate) return !0;
    if (!mi(e)) return !1;
    if (!this.parent.startDate) return !0;
    const t = In({ date: this.parent.startDate, time: this.parent.startTime }), n = In({ date: e, time: this.parent.endTime || "23:59" });
    return Es(t, n);
  }),
  endTime: Qn().test("is-valid-time", function(e = "") {
    return e ? vi(e) : !0;
  })
}), Vm = { class: "x-date-picker-form__fieldset" }, Am = { class: "x-date-picker-form__fieldset" }, Cm = /* @__PURE__ */ $e({
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
    return (s, o) => (F(), ve(D(ip), {
      "validation-schema": D(Em),
      class: "x-date-picker-form"
    }, {
      default: de(() => [
        se("fieldset", Vm, [
          me(D(Dr), {
            label: "Start date",
            "html-for": "startDate",
            class: "mb-2",
            "no-label": ""
          }, {
            default: de((a) => [
              me(D(tr), _e({
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
          me(D(Dr), {
            label: "Start time",
            "html-for": "startTime",
            "no-label": ""
          }, {
            default: de((a) => [
              me(D(tr), _e({
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
        se("fieldset", Am, [
          me(D(Dr), {
            label: "End date",
            "html-for": "endDate",
            class: "mb-2",
            "no-label": ""
          }, {
            default: de((a) => [
              me(D(tr), _e({
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
          me(D(Dr), {
            label: "End time",
            "html-for": "endTime",
            "no-label": ""
          }, {
            default: de((a) => [
              me(D(tr), _e({
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
}), Tm = /* @__PURE__ */ We(Cm, [["__scopeId", "data-v-2e0976d0"]]), Pm = { class: "d-flex justify-between mt-6" }, Nm = /* @__PURE__ */ $e({
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
    Bn.extend(kp);
    const n = e, r = t, i = kt({
      model: n.modelValue,
      form: {
        id: -1,
        title: "",
        value: -1,
        unit: hi.RANGE,
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
      const { startDate: p, startTime: h = "", endDate: S, endTime: v = "" } = i.form;
      if (!p || !S || !mi(p) || !mi(S) || !vi(h || "00:00") || !vi(v || "23:59")) return !1;
      const x = In({ date: p, time: h }), k = In({ date: S, time: v || "23:59" });
      return Es(x, k);
    }), l = T(() => {
      const { startDate: p, startTime: h, endDate: S, endTime: v } = i.form;
      return p || h || S || v;
    }), u = T(() => {
      const { startDate: p, endDate: h } = i.form;
      return !!(p && h);
    }), f = () => {
      Mo();
    }, c = () => {
      r(
        "update:model-value",
        i.model.unit ? i.model : {
          ...i.form,
          startTime: i.form.startTime || "00:00",
          endTime: i.form.endTime || "23:59"
        }
      ), Mo();
    };
    Ie(() => n.modelValue, () => {
      n.modelValue.unit === hi.RANGE ? i.form = n.modelValue : i.model = n.modelValue;
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
    const m = T(() => [
      "x-date-picker-content",
      {
        "x-date-picker-content--wide": n.isWide
      }
    ]);
    return (p, h) => (F(), ve(D(Ap), {
      class: De(m.value)
    }, {
      default: de(() => [
        me(D(sa), {
          class: "x-date-picker-content__links",
          auto: ""
        }, {
          default: de(() => [
            me($m, {
              modelValue: i.model,
              "onUpdate:modelValue": h[0] || (h[0] = (S) => i.model = S),
              options: e.options
            }, null, 8, ["modelValue", "options"])
          ]),
          _: 1
        }),
        me(D(sa), { auto: "" }, {
          default: de(() => [
            me(Tm, {
              modelValue: i.form,
              "onUpdate:modelValue": h[1] || (h[1] = (S) => i.form = S),
              class: "x-date-picker-content__form"
            }, null, 8, ["modelValue"]),
            se("div", Pm, [
              me(D(rt), _e(s.value, { onClick: f }), {
                default: de(() => h[2] || (h[2] = [
                  Le(" Cancel ")
                ])),
                _: 1,
                __: [2]
              }, 16),
              me(D(rt), _e(o.value, { onClick: c }), {
                default: de(() => h[3] || (h[3] = [
                  Le(" Apply ")
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
}), Dm = /* @__PURE__ */ We(Nm, [["__scopeId", "data-v-9eba58f9"]]), Fm = /* @__PURE__ */ $e({
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
    const n = e, r = t, i = kt({
      isShow: !1
    }), s = T({
      get() {
        return n.modelValue;
      },
      set(c) {
        r("update:model-value", c);
      }
    }), o = T(() => i.isShow ? "arrow-up" : "arrow-down"), a = T(() => {
      const { title: c, startDate: m, startTime: p, endDate: h, endTime: S, unit: v } = H(s), x = m && h;
      return v !== hi.RANGE ? c : x ? `${m} ${p ?? "00:00"} - ${h} ${S ?? "23:59"}` : "Select date";
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
    return (c, m) => (F(), ve(D(pd), _e(f.value, {
      onHide: m[1] || (m[1] = (p) => i.isShow = !1)
    }), {
      popper: de(() => [
        me(Dm, {
          modelValue: s.value,
          "onUpdate:modelValue": m[0] || (m[0] = (p) => s.value = p),
          options: e.options,
          "is-wide": l.value
        }, null, 8, ["modelValue", "options", "is-wide"])
      ]),
      default: de(() => [
        me(D(rt), {
          append: o.value,
          "icon-size": "8",
          class: "x-date-picker__button",
          color: "gray",
          onClick: u
        }, {
          default: de(() => [
            Le(Ne(a.value), 1)
          ]),
          _: 1
        }, 8, ["append"])
      ]),
      _: 1
    }, 16));
  }
}), av = /* @__PURE__ */ We(Fm, [["__scopeId", "data-v-a1436a82"]]), Mm = { class: "x-file-input" }, Im = ["multiple", "name", "max", "accept"], jm = {
  key: 0,
  class: "x-file-input__header",
  for: "input"
}, Lm = {
  key: 1,
  class: "x-file-input__preview"
}, Rm = ["src", "alt"], Bm = {
  key: 0,
  class: "x-file-input__add-item",
  for: "input"
}, zm = /* @__PURE__ */ $e({
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
    const n = e, r = ti("input"), i = t, s = T(() => sp(n.modelValue, i)), o = T(() => n.maxFiles === 1 / 0), a = T(() => H(o) || H(s).length < n.maxFiles), l = T(() => H(o) || n.maxFiles > 1), u = (c) => {
      const m = c.target, { maxFiles: p } = n;
      if (!m.files) return;
      const h = H(o) ? void 0 : p - H(s).length, S = s.value.map(({ fileName: x }) => x);
      Array.from(m.files).filter(({ name: x }) => !S.includes(x)).slice(0, h).forEach((x) => {
        const k = new FileReader();
        k.onload = () => {
          const C = {
            fileName: x.name,
            contentBase64: k.result.split(",")[1],
            mimeType: x.type,
            preview: URL.createObjectURL(x)
          };
          s.value.push(C);
        }, k.readAsDataURL(x);
      }), r.value && (r.value.value = "");
    }, f = (c) => s.value.splice(c, 1);
    return (c, m) => (F(), ve(D(br), {
      name: e.name,
      value: s.value
    }, {
      default: de(() => [
        se("div", Mm, [
          mt(se("input", {
            ref_key: "input",
            ref: r,
            id: "input",
            multiple: l.value,
            name: e.name,
            max: e.maxFiles,
            accept: e.accept,
            type: "file",
            onChange: u
          }, null, 40, Im), [
            [Pt, !1]
          ]),
          s.value.length ? (F(), oe("ul", Lm, [
            (F(!0), oe(Wt, null, On(s.value, (p, h) => (F(), oe("li", {
              key: h,
              class: "x-file-input__preview-item"
            }, [
              se("img", {
                src: p.preview,
                alt: p.fileName,
                class: "x-file-input__preview-image"
              }, null, 8, Rm),
              me(D(rt), {
                type: "button",
                class: "x-file-input__remove-button",
                icon: "close",
                color: "gray",
                "icon-size": "8px",
                size: "xxxs",
                round: "",
                onClick: (S) => f(h)
              }, null, 8, ["onClick"])
            ]))), 128)),
            a.value ? (F(), oe("label", Bm, [
              me(D(rt), {
                type: "button",
                class: "x-file-input__add-button",
                icon: "plus",
                color: "gray",
                size: "xxxs",
                text: ""
              })
            ])) : pe("", !0)
          ])) : (F(), oe("label", jm, Ne(e.placeholder), 1))
        ])
      ]),
      _: 1
    }, 8, ["name", "value"]));
  }
}), lv = /* @__PURE__ */ We(zm, [["__scopeId", "data-v-730f2c8d"]]), Hm = ["name", "checked", "value", "disabled"], uv = /* @__PURE__ */ $e({
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
    const n = Vn(), r = e, i = t, s = T(() => r.modelValue === r.value), o = T(() => ({
      ...n,
      iconProps: {
        style: {
          fill: "none",
          stroke: "none"
        }
      }
    })), a = () => i("update:modelValue", r.value);
    return (l, u) => (F(), oe("label", null, [
      me(D(Ba), _e(o.value, {
        active: s.value,
        disabled: e.disabled,
        variant: e.variant
      }), {
        default: de(() => [
          ce(l.$slots, "default", Nt(qt({ active: s.value })))
        ]),
        _: 3
      }, 16, ["active", "disabled", "variant"]),
      mt(se("input", {
        type: "radio",
        name: e.name,
        checked: s.value,
        value: e.value,
        disabled: e.disabled,
        onChange: a
      }, null, 40, Hm), [
        [Pt, !1]
      ])
    ]));
  }
});
function qr(e) {
  return [null, void 0, !1].indexOf(e) !== -1;
}
function Um(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function cu(e) {
  var t = { exports: {} };
  return e(t, t.exports), t.exports;
}
var Pa = cu(function(e, t) {
  e.exports = /* @__PURE__ */ function() {
    var n = ["decimals", "thousand", "mark", "prefix", "suffix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];
    function r(h) {
      return h.split("").reverse().join("");
    }
    function i(h, S) {
      return h.substring(0, S.length) === S;
    }
    function s(h, S) {
      return h.slice(-1 * S.length) === S;
    }
    function o(h, S, v) {
      if ((h[S] || h[v]) && h[S] === h[v]) throw new Error(S);
    }
    function a(h) {
      return typeof h == "number" && isFinite(h);
    }
    function l(h, S) {
      return h = h.toString().split("e"), (+((h = (h = Math.round(+(h[0] + "e" + (h[1] ? +h[1] + S : S)))).toString().split("e"))[0] + "e" + (h[1] ? +h[1] - S : -S))).toFixed(S);
    }
    function u(h, S, v, x, k, C, G, L, K, X, re, M) {
      var Y, N, ne, fe = M, j = "", E = "";
      return C && (M = C(M)), !!a(M) && (h !== !1 && parseFloat(M.toFixed(h)) === 0 && (M = 0), M < 0 && (Y = !0, M = Math.abs(M)), h !== !1 && (M = l(M, h)), (M = M.toString()).indexOf(".") !== -1 ? (ne = (N = M.split("."))[0], v && (j = v + N[1])) : ne = M, S && (ne = r(ne).match(/.{1,3}/g), ne = r(ne.join(r(S)))), Y && L && (E += L), x && (E += x), Y && K && (E += K), E += ne, E += j, k && (E += k), X && (E = X(E, fe)), E);
    }
    function f(h, S, v, x, k, C, G, L, K, X, re, M) {
      var Y, N = "";
      return re && (M = re(M)), !(!M || typeof M != "string") && (L && i(M, L) && (M = M.replace(L, ""), Y = !0), x && i(M, x) && (M = M.replace(x, "")), K && i(M, K) && (M = M.replace(K, ""), Y = !0), k && s(M, k) && (M = M.slice(0, -1 * k.length)), S && (M = M.split(S).join("")), v && (M = M.replace(v, ".")), Y && (N += "-"), (N = (N += M).replace(/[^0-9\.\-.]/g, "")) !== "" && (N = Number(N), G && (N = G(N)), !!a(N) && N));
    }
    function c(h) {
      var S, v, x, k = {};
      for (h.suffix === void 0 && (h.suffix = h.postfix), S = 0; S < n.length; S += 1) if ((x = h[v = n[S]]) === void 0) v !== "negative" || k.negativeBefore ? v === "mark" && k.thousand !== "." ? k[v] = "." : k[v] = !1 : k[v] = "-";
      else if (v === "decimals") {
        if (!(x >= 0 && x < 8)) throw new Error(v);
        k[v] = x;
      } else if (v === "encoder" || v === "decoder" || v === "edit" || v === "undo") {
        if (typeof x != "function") throw new Error(v);
        k[v] = x;
      } else {
        if (typeof x != "string") throw new Error(v);
        k[v] = x;
      }
      return o(k, "mark", "thousand"), o(k, "prefix", "negative"), o(k, "prefix", "negativeBefore"), k;
    }
    function m(h, S, v) {
      var x, k = [];
      for (x = 0; x < n.length; x += 1) k.push(h[n[x]]);
      return k.push(v), S.apply("", k);
    }
    function p(h) {
      if (!(this instanceof p)) return new p(h);
      typeof h == "object" && (h = c(h), this.to = function(S) {
        return m(h, u, S);
      }, this.from = function(S) {
        return m(h, f, S);
      });
    }
    return p;
  }();
}), qm = Um(cu(function(e, t) {
  (function(n) {
    function r(w) {
      return i(w) && typeof w.from == "function";
    }
    function i(w) {
      return typeof w == "object" && typeof w.to == "function";
    }
    function s(w) {
      w.parentElement.removeChild(w);
    }
    function o(w) {
      return w != null;
    }
    function a(w) {
      w.preventDefault();
    }
    function l(w) {
      return w.filter(function(d) {
        return !this[d] && (this[d] = !0);
      }, {});
    }
    function u(w, d) {
      return Math.round(w / d) * d;
    }
    function f(w, d) {
      var g = w.getBoundingClientRect(), y = w.ownerDocument, $ = y.documentElement, P = C(y);
      return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (P.x = 0), d ? g.top + P.y - $.clientTop : g.left + P.x - $.clientLeft;
    }
    function c(w) {
      return typeof w == "number" && !isNaN(w) && isFinite(w);
    }
    function m(w, d, g) {
      g > 0 && (v(w, d), setTimeout(function() {
        x(w, d);
      }, g));
    }
    function p(w) {
      return Math.max(Math.min(w, 100), 0);
    }
    function h(w) {
      return Array.isArray(w) ? w : [w];
    }
    function S(w) {
      var d = (w = String(w)).split(".");
      return d.length > 1 ? d[1].length : 0;
    }
    function v(w, d) {
      w.classList && !/\s/.test(d) ? w.classList.add(d) : w.className += " " + d;
    }
    function x(w, d) {
      w.classList && !/\s/.test(d) ? w.classList.remove(d) : w.className = w.className.replace(new RegExp("(^|\\b)" + d.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
    function k(w, d) {
      return w.classList ? w.classList.contains(d) : new RegExp("\\b" + d + "\\b").test(w.className);
    }
    function C(w) {
      var d = window.pageXOffset !== void 0, g = (w.compatMode || "") === "CSS1Compat";
      return { x: d ? window.pageXOffset : g ? w.documentElement.scrollLeft : w.body.scrollLeft, y: d ? window.pageYOffset : g ? w.documentElement.scrollTop : w.body.scrollTop };
    }
    function G() {
      return window.navigator.pointerEnabled ? { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" } : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" };
    }
    function L() {
      var w = !1;
      try {
        var d = Object.defineProperty({}, "passive", { get: function() {
          w = !0;
        } });
        window.addEventListener("test", null, d);
      } catch {
      }
      return w;
    }
    function K() {
      return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    function X(w, d) {
      return 100 / (d - w);
    }
    function re(w, d, g) {
      return 100 * d / (w[g + 1] - w[g]);
    }
    function M(w, d) {
      return re(w, w[0] < 0 ? d + Math.abs(w[0]) : d - w[0], 0);
    }
    function Y(w, d) {
      return d * (w[1] - w[0]) / 100 + w[0];
    }
    function N(w, d) {
      for (var g = 1; w >= d[g]; ) g += 1;
      return g;
    }
    function ne(w, d, g) {
      if (g >= w.slice(-1)[0]) return 100;
      var y = N(g, w), $ = w[y - 1], P = w[y], Z = d[y - 1], ae = d[y];
      return Z + M([$, P], g) / X(Z, ae);
    }
    function fe(w, d, g) {
      if (g >= 100) return w.slice(-1)[0];
      var y = N(g, d), $ = w[y - 1], P = w[y], Z = d[y - 1];
      return Y([$, P], (g - Z) * X(Z, d[y]));
    }
    function j(w, d, g, y) {
      if (y === 100) return y;
      var $ = N(y, w), P = w[$ - 1], Z = w[$];
      return g ? y - P > (Z - P) / 2 ? Z : P : d[$ - 1] ? w[$ - 1] + u(y - w[$ - 1], d[$ - 1]) : y;
    }
    var E, V;
    n.PipsMode = void 0, (V = n.PipsMode || (n.PipsMode = {})).Range = "range", V.Steps = "steps", V.Positions = "positions", V.Count = "count", V.Values = "values", n.PipsType = void 0, (E = n.PipsType || (n.PipsType = {}))[E.None = -1] = "None", E[E.NoValue = 0] = "NoValue", E[E.LargeValue = 1] = "LargeValue", E[E.SmallValue = 2] = "SmallValue";
    var I = function() {
      function w(d, g, y) {
        var $;
        this.xPct = [], this.xVal = [], this.xSteps = [], this.xNumSteps = [], this.xHighestCompleteStep = [], this.xSteps = [y || !1], this.xNumSteps = [!1], this.snap = g;
        var P = [];
        for (Object.keys(d).forEach(function(Z) {
          P.push([h(d[Z]), Z]);
        }), P.sort(function(Z, ae) {
          return Z[0][0] - ae[0][0];
        }), $ = 0; $ < P.length; $++) this.handleEntryPoint(P[$][1], P[$][0]);
        for (this.xNumSteps = this.xSteps.slice(0), $ = 0; $ < this.xNumSteps.length; $++) this.handleStepPoint($, this.xNumSteps[$]);
      }
      return w.prototype.getDistance = function(d) {
        for (var g = [], y = 0; y < this.xNumSteps.length - 1; y++) g[y] = re(this.xVal, d, y);
        return g;
      }, w.prototype.getAbsoluteDistance = function(d, g, y) {
        var $, P = 0;
        if (d < this.xPct[this.xPct.length - 1]) for (; d > this.xPct[P + 1]; ) P++;
        else d === this.xPct[this.xPct.length - 1] && (P = this.xPct.length - 2);
        y || d !== this.xPct[P + 1] || P++, g === null && (g = []);
        var Z = 1, ae = g[P], ee = 0, Oe = 0, xe = 0, ue = 0;
        for ($ = y ? (d - this.xPct[P]) / (this.xPct[P + 1] - this.xPct[P]) : (this.xPct[P + 1] - d) / (this.xPct[P + 1] - this.xPct[P]); ae > 0; ) ee = this.xPct[P + 1 + ue] - this.xPct[P + ue], g[P + ue] * Z + 100 - 100 * $ > 100 ? (Oe = ee * $, Z = (ae - 100 * $) / g[P + ue], $ = 1) : (Oe = g[P + ue] * ee / 100 * Z, Z = 0), y ? (xe -= Oe, this.xPct.length + ue >= 1 && ue--) : (xe += Oe, this.xPct.length - ue >= 1 && ue++), ae = g[P + ue] * Z;
        return d + xe;
      }, w.prototype.toStepping = function(d) {
        return d = ne(this.xVal, this.xPct, d);
      }, w.prototype.fromStepping = function(d) {
        return fe(this.xVal, this.xPct, d);
      }, w.prototype.getStep = function(d) {
        return d = j(this.xPct, this.xSteps, this.snap, d);
      }, w.prototype.getDefaultStep = function(d, g, y) {
        var $ = N(d, this.xPct);
        return (d === 100 || g && d === this.xPct[$ - 1]) && ($ = Math.max($ - 1, 1)), (this.xVal[$] - this.xVal[$ - 1]) / y;
      }, w.prototype.getNearbySteps = function(d) {
        var g = N(d, this.xPct);
        return { stepBefore: { startValue: this.xVal[g - 2], step: this.xNumSteps[g - 2], highestStep: this.xHighestCompleteStep[g - 2] }, thisStep: { startValue: this.xVal[g - 1], step: this.xNumSteps[g - 1], highestStep: this.xHighestCompleteStep[g - 1] }, stepAfter: { startValue: this.xVal[g], step: this.xNumSteps[g], highestStep: this.xHighestCompleteStep[g] } };
      }, w.prototype.countStepDecimals = function() {
        var d = this.xNumSteps.map(S);
        return Math.max.apply(null, d);
      }, w.prototype.hasNoSize = function() {
        return this.xVal[0] === this.xVal[this.xVal.length - 1];
      }, w.prototype.convert = function(d) {
        return this.getStep(this.toStepping(d));
      }, w.prototype.handleEntryPoint = function(d, g) {
        var y;
        if (!c(y = d === "min" ? 0 : d === "max" ? 100 : parseFloat(d)) || !c(g[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
        this.xPct.push(y), this.xVal.push(g[0]);
        var $ = Number(g[1]);
        y ? this.xSteps.push(!isNaN($) && $) : isNaN($) || (this.xSteps[0] = $), this.xHighestCompleteStep.push(0);
      }, w.prototype.handleStepPoint = function(d, g) {
        if (g) if (this.xVal[d] !== this.xVal[d + 1]) {
          this.xSteps[d] = re([this.xVal[d], this.xVal[d + 1]], g, 0) / X(this.xPct[d], this.xPct[d + 1]);
          var y = (this.xVal[d + 1] - this.xVal[d]) / this.xNumSteps[d], $ = Math.ceil(Number(y.toFixed(3)) - 1), P = this.xVal[d] + this.xNumSteps[d] * $;
          this.xHighestCompleteStep[d] = P;
        } else this.xSteps[d] = this.xHighestCompleteStep[d] = this.xVal[d];
      }, w;
    }(), R = { to: function(w) {
      return w === void 0 ? "" : w.toFixed(2);
    }, from: Number }, U = { target: "target", base: "base", origin: "origin", handle: "handle", handleLower: "handle-lower", handleUpper: "handle-upper", touchArea: "touch-area", horizontal: "horizontal", vertical: "vertical", background: "background", connect: "connect", connects: "connects", ltr: "ltr", rtl: "rtl", textDirectionLtr: "txt-dir-ltr", textDirectionRtl: "txt-dir-rtl", draggable: "draggable", drag: "state-drag", tap: "state-tap", active: "active", tooltip: "tooltip", pips: "pips", pipsHorizontal: "pips-horizontal", pipsVertical: "pips-vertical", marker: "marker", markerHorizontal: "marker-horizontal", markerVertical: "marker-vertical", markerNormal: "marker-normal", markerLarge: "marker-large", markerSub: "marker-sub", value: "value", valueHorizontal: "value-horizontal", valueVertical: "value-vertical", valueNormal: "value-normal", valueLarge: "value-large", valueSub: "value-sub" }, W = { tooltips: ".__tooltips", aria: ".__aria" };
    function le(w, d) {
      if (!c(d)) throw new Error("noUiSlider: 'step' is not numeric.");
      w.singleStep = d;
    }
    function ye(w, d) {
      if (!c(d)) throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
      w.keyboardPageMultiplier = d;
    }
    function q(w, d) {
      if (!c(d)) throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
      w.keyboardMultiplier = d;
    }
    function Q(w, d) {
      if (!c(d)) throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
      w.keyboardDefaultStep = d;
    }
    function he(w, d) {
      if (typeof d != "object" || Array.isArray(d)) throw new Error("noUiSlider: 'range' is not an object.");
      if (d.min === void 0 || d.max === void 0) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
      w.spectrum = new I(d, w.snap || !1, w.singleStep);
    }
    function A(w, d) {
      if (d = h(d), !Array.isArray(d) || !d.length) throw new Error("noUiSlider: 'start' option is incorrect.");
      w.handles = d.length, w.start = d;
    }
    function B(w, d) {
      if (typeof d != "boolean") throw new Error("noUiSlider: 'snap' option must be a boolean.");
      w.snap = d;
    }
    function we(w, d) {
      if (typeof d != "boolean") throw new Error("noUiSlider: 'animate' option must be a boolean.");
      w.animate = d;
    }
    function ge(w, d) {
      if (typeof d != "number") throw new Error("noUiSlider: 'animationDuration' option must be a number.");
      w.animationDuration = d;
    }
    function Ve(w, d) {
      var g, y = [!1];
      if (d === "lower" ? d = [!0, !1] : d === "upper" && (d = [!1, !0]), d === !0 || d === !1) {
        for (g = 1; g < w.handles; g++) y.push(d);
        y.push(!1);
      } else {
        if (!Array.isArray(d) || !d.length || d.length !== w.handles + 1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        y = d;
      }
      w.connect = y;
    }
    function Fe(w, d) {
      switch (d) {
        case "horizontal":
          w.ort = 0;
          break;
        case "vertical":
          w.ort = 1;
          break;
        default:
          throw new Error("noUiSlider: 'orientation' option is invalid.");
      }
    }
    function je(w, d) {
      if (!c(d)) throw new Error("noUiSlider: 'margin' option must be numeric.");
      d !== 0 && (w.margin = w.spectrum.getDistance(d));
    }
    function gt(w, d) {
      if (!c(d)) throw new Error("noUiSlider: 'limit' option must be numeric.");
      if (w.limit = w.spectrum.getDistance(d), !w.limit || w.handles < 2) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
    function Yt(w, d) {
      var g;
      if (!c(d) && !Array.isArray(d)) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
      if (Array.isArray(d) && d.length !== 2 && !c(d[0]) && !c(d[1])) throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
      if (d !== 0) {
        for (Array.isArray(d) || (d = [d, d]), w.padding = [w.spectrum.getDistance(d[0]), w.spectrum.getDistance(d[1])], g = 0; g < w.spectrum.xNumSteps.length - 1; g++) if (w.padding[0][g] < 0 || w.padding[1][g] < 0) throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
        var y = d[0] + d[1], $ = w.spectrum.xVal[0];
        if (y / (w.spectrum.xVal[w.spectrum.xVal.length - 1] - $) > 1) throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
      }
    }
    function Gt(w, d) {
      switch (d) {
        case "ltr":
          w.dir = 0;
          break;
        case "rtl":
          w.dir = 1;
          break;
        default:
          throw new Error("noUiSlider: 'direction' option was not recognized.");
      }
    }
    function Rt(w, d) {
      if (typeof d != "string") throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
      var g = d.indexOf("tap") >= 0, y = d.indexOf("drag") >= 0, $ = d.indexOf("fixed") >= 0, P = d.indexOf("snap") >= 0, Z = d.indexOf("hover") >= 0, ae = d.indexOf("unconstrained") >= 0, ee = d.indexOf("drag-all") >= 0, Oe = d.indexOf("smooth-steps") >= 0;
      if ($) {
        if (w.handles !== 2) throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
        je(w, w.start[1] - w.start[0]);
      }
      if (ae && (w.margin || w.limit)) throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
      w.events = { tap: g || P, drag: y, dragAll: ee, smoothSteps: Oe, fixed: $, snap: P, hover: Z, unconstrained: ae };
    }
    function Kt(w, d) {
      if (d !== !1) if (d === !0 || i(d)) {
        w.tooltips = [];
        for (var g = 0; g < w.handles; g++) w.tooltips.push(d);
      } else {
        if ((d = h(d)).length !== w.handles) throw new Error("noUiSlider: must pass a formatter for all handles.");
        d.forEach(function(y) {
          if (typeof y != "boolean" && !i(y)) throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
        }), w.tooltips = d;
      }
    }
    function Bt(w, d) {
      if (d.length !== w.handles) throw new Error("noUiSlider: must pass a attributes for all handles.");
      w.handleAttributes = d;
    }
    function yt(w, d) {
      if (!i(d)) throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
      w.ariaFormat = d;
    }
    function Et(w, d) {
      if (!r(d)) throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
      w.format = d;
    }
    function wr(w, d) {
      if (typeof d != "boolean") throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
      w.keyboardSupport = d;
    }
    function ki(w, d) {
      w.documentElement = d;
    }
    function Un(w, d) {
      if (typeof d != "string" && d !== !1) throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
      w.cssPrefix = d;
    }
    function xr(w, d) {
      if (typeof d != "object") throw new Error("noUiSlider: 'cssClasses' must be an object.");
      typeof w.cssPrefix == "string" ? (w.cssClasses = {}, Object.keys(d).forEach(function(g) {
        w.cssClasses[g] = w.cssPrefix + d[g];
      })) : w.cssClasses = d;
    }
    function Sr(w) {
      var d = { margin: null, limit: null, padding: null, animate: !0, animationDuration: 300, ariaFormat: R, format: R }, g = { step: { r: !1, t: le }, keyboardPageMultiplier: { r: !1, t: ye }, keyboardMultiplier: { r: !1, t: q }, keyboardDefaultStep: { r: !1, t: Q }, start: { r: !0, t: A }, connect: { r: !0, t: Ve }, direction: { r: !0, t: Gt }, snap: { r: !1, t: B }, animate: { r: !1, t: we }, animationDuration: { r: !1, t: ge }, range: { r: !0, t: he }, orientation: { r: !1, t: Fe }, margin: { r: !1, t: je }, limit: { r: !1, t: gt }, padding: { r: !1, t: Yt }, behaviour: { r: !0, t: Rt }, ariaFormat: { r: !1, t: yt }, format: { r: !1, t: Et }, tooltips: { r: !1, t: Kt }, keyboardSupport: { r: !0, t: wr }, documentElement: { r: !1, t: ki }, cssPrefix: { r: !0, t: Un }, cssClasses: { r: !0, t: xr }, handleAttributes: { r: !1, t: Bt } }, y = { connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal", keyboardSupport: !0, cssPrefix: "noUi-", cssClasses: U, keyboardPageMultiplier: 5, keyboardMultiplier: 1, keyboardDefaultStep: 10 };
      w.format && !w.ariaFormat && (w.ariaFormat = w.format), Object.keys(g).forEach(function(ee) {
        if (o(w[ee]) || y[ee] !== void 0) g[ee].t(d, o(w[ee]) ? w[ee] : y[ee]);
        else if (g[ee].r) throw new Error("noUiSlider: '" + ee + "' is required.");
      }), d.pips = w.pips;
      var $ = document.createElement("div"), P = $.style.msTransform !== void 0, Z = $.style.transform !== void 0;
      d.transformRule = Z ? "transform" : P ? "msTransform" : "webkitTransform";
      var ae = [["left", "top"], ["right", "bottom"]];
      return d.style = ae[d.dir][d.ort], d;
    }
    function qn(w, d, g) {
      var y, $, P, Z, ae, ee = G(), Oe = K() && L(), xe = w, ue = d.spectrum, ke = [], Se = [], Te = [], Je = 0, et = {}, Vt = w.ownerDocument, Zt = d.documentElement || Vt.documentElement, Jt = Vt.body, Xn = Vt.dir === "rtl" || d.ort === 1 ? 0 : 100;
      function zt(b, _) {
        var O = Vt.createElement("div");
        return _ && v(O, _), b.appendChild(O), O;
      }
      function du(b, _) {
        var O = zt(b, d.cssClasses.origin), z = zt(O, d.cssClasses.handle);
        if (zt(z, d.cssClasses.touchArea), z.setAttribute("data-handle", String(_)), d.keyboardSupport && (z.setAttribute("tabindex", "0"), z.addEventListener("keydown", function(J) {
          return ku(J, _);
        })), d.handleAttributes !== void 0) {
          var te = d.handleAttributes[_];
          Object.keys(te).forEach(function(J) {
            z.setAttribute(J, te[J]);
          });
        }
        return z.setAttribute("role", "slider"), z.setAttribute("aria-orientation", d.ort ? "vertical" : "horizontal"), _ === 0 ? v(z, d.cssClasses.handleLower) : _ === d.handles - 1 && v(z, d.cssClasses.handleUpper), O;
      }
      function to(b, _) {
        return !!_ && zt(b, d.cssClasses.connect);
      }
      function fu(b, _) {
        var O = zt(_, d.cssClasses.connects);
        $ = [], (P = []).push(to(O, b[0]));
        for (var z = 0; z < d.handles; z++) $.push(du(_, z)), Te[z] = z, P.push(to(O, b[z + 1]));
      }
      function pu(b) {
        return v(b, d.cssClasses.target), d.dir === 0 ? v(b, d.cssClasses.ltr) : v(b, d.cssClasses.rtl), d.ort === 0 ? v(b, d.cssClasses.horizontal) : v(b, d.cssClasses.vertical), v(b, getComputedStyle(b).direction === "rtl" ? d.cssClasses.textDirectionRtl : d.cssClasses.textDirectionLtr), zt(b, d.cssClasses.base);
      }
      function hu(b, _) {
        return !(!d.tooltips || !d.tooltips[_]) && zt(b.firstChild, d.cssClasses.tooltip);
      }
      function no() {
        return xe.hasAttribute("disabled");
      }
      function Ei(b) {
        return $[b].hasAttribute("disabled");
      }
      function Vi() {
        ae && (Wn("update" + W.tooltips), ae.forEach(function(b) {
          b && s(b);
        }), ae = null);
      }
      function ro() {
        Vi(), ae = $.map(hu), Ni("update" + W.tooltips, function(b, _, O) {
          if (ae && d.tooltips && ae[_] !== !1) {
            var z = b[_];
            d.tooltips[_] !== !0 && (z = d.tooltips[_].to(O[_])), ae[_].innerHTML = z;
          }
        });
      }
      function mu() {
        Wn("update" + W.aria), Ni("update" + W.aria, function(b, _, O, z, te) {
          Te.forEach(function(J) {
            var be = $[J], ie = _r(Se, J, 0, !0, !0, !0), qe = _r(Se, J, 100, !0, !0, !0), ze = te[J], Me = String(d.ariaFormat.to(O[J]));
            ie = ue.fromStepping(ie).toFixed(1), qe = ue.fromStepping(qe).toFixed(1), ze = ue.fromStepping(ze).toFixed(1), be.children[0].setAttribute("aria-valuemin", ie), be.children[0].setAttribute("aria-valuemax", qe), be.children[0].setAttribute("aria-valuenow", ze), be.children[0].setAttribute("aria-valuetext", Me);
          });
        });
      }
      function vu(b) {
        if (b.mode === n.PipsMode.Range || b.mode === n.PipsMode.Steps) return ue.xVal;
        if (b.mode === n.PipsMode.Count) {
          if (b.values < 2) throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
          for (var _ = b.values - 1, O = 100 / _, z = []; _--; ) z[_] = _ * O;
          return z.push(100), io(z, b.stepped);
        }
        return b.mode === n.PipsMode.Positions ? io(b.values, b.stepped) : b.mode === n.PipsMode.Values ? b.stepped ? b.values.map(function(te) {
          return ue.fromStepping(ue.getStep(ue.toStepping(te)));
        }) : b.values : [];
      }
      function io(b, _) {
        return b.map(function(O) {
          return ue.fromStepping(_ ? ue.getStep(O) : O);
        });
      }
      function gu(b) {
        function _(ze, Me) {
          return Number((ze + Me).toFixed(7));
        }
        var O = vu(b), z = {}, te = ue.xVal[0], J = ue.xVal[ue.xVal.length - 1], be = !1, ie = !1, qe = 0;
        return (O = l(O.slice().sort(function(ze, Me) {
          return ze - Me;
        })))[0] !== te && (O.unshift(te), be = !0), O[O.length - 1] !== J && (O.push(J), ie = !0), O.forEach(function(ze, Me) {
          var Be, Pe, Ke, tt, Ye, ho, Mi, mo, vo, go, Ii = ze, Tn = O[Me + 1], yo = b.mode === n.PipsMode.Steps;
          for (yo && (Be = ue.xNumSteps[Me]), Be || (Be = Tn - Ii), Tn === void 0 && (Tn = Ii), Be = Math.max(Be, 1e-7), Pe = Ii; Pe <= Tn; Pe = _(Pe, Be)) {
            for (mo = (Ye = (tt = ue.toStepping(Pe)) - qe) / (b.density || 1), go = Ye / (vo = Math.round(mo)), Ke = 1; Ke <= vo; Ke += 1) z[(ho = qe + Ke * go).toFixed(5)] = [ue.fromStepping(ho), 0];
            Mi = O.indexOf(Pe) > -1 ? n.PipsType.LargeValue : yo ? n.PipsType.SmallValue : n.PipsType.NoValue, !Me && be && Pe !== Tn && (Mi = 0), Pe === Tn && ie || (z[tt.toFixed(5)] = [Pe, Mi]), qe = tt;
          }
        }), z;
      }
      function yu(b, _, O) {
        var z, te, J = Vt.createElement("div"), be = ((z = {})[n.PipsType.None] = "", z[n.PipsType.NoValue] = d.cssClasses.valueNormal, z[n.PipsType.LargeValue] = d.cssClasses.valueLarge, z[n.PipsType.SmallValue] = d.cssClasses.valueSub, z), ie = ((te = {})[n.PipsType.None] = "", te[n.PipsType.NoValue] = d.cssClasses.markerNormal, te[n.PipsType.LargeValue] = d.cssClasses.markerLarge, te[n.PipsType.SmallValue] = d.cssClasses.markerSub, te), qe = [d.cssClasses.valueHorizontal, d.cssClasses.valueVertical], ze = [d.cssClasses.markerHorizontal, d.cssClasses.markerVertical];
        function Me(Pe, Ke) {
          var tt = Ke === d.cssClasses.value, Ye = tt ? be : ie;
          return Ke + " " + (tt ? qe : ze)[d.ort] + " " + Ye[Pe];
        }
        function Be(Pe, Ke, tt) {
          if ((tt = _ ? _(Ke, tt) : tt) !== n.PipsType.None) {
            var Ye = zt(J, !1);
            Ye.className = Me(tt, d.cssClasses.marker), Ye.style[d.style] = Pe + "%", tt > n.PipsType.NoValue && ((Ye = zt(J, !1)).className = Me(tt, d.cssClasses.value), Ye.setAttribute("data-value", String(Ke)), Ye.style[d.style] = Pe + "%", Ye.innerHTML = String(O.to(Ke)));
          }
        }
        return v(J, d.cssClasses.pips), v(J, d.ort === 0 ? d.cssClasses.pipsHorizontal : d.cssClasses.pipsVertical), Object.keys(b).forEach(function(Pe) {
          Be(Pe, b[Pe][0], b[Pe][1]);
        }), J;
      }
      function Ai() {
        Z && (s(Z), Z = null);
      }
      function Ci(b) {
        Ai();
        var _ = gu(b), O = b.filter, z = b.format || { to: function(te) {
          return String(Math.round(te));
        } };
        return Z = xe.appendChild(yu(_, O, z));
      }
      function so() {
        var b = y.getBoundingClientRect(), _ = "offset" + ["Width", "Height"][d.ort];
        return d.ort === 0 ? b.width || y[_] : b.height || y[_];
      }
      function pn(b, _, O, z) {
        var te = function(be) {
          var ie = bu(be, z.pageOffset, z.target || _);
          return !!ie && !(no() && !z.doNotReject) && !(k(xe, d.cssClasses.tap) && !z.doNotReject) && !(b === ee.start && ie.buttons !== void 0 && ie.buttons > 1) && (!z.hover || !ie.buttons) && (Oe || ie.preventDefault(), ie.calcPoint = ie.points[d.ort], void O(ie, z));
        }, J = [];
        return b.split(" ").forEach(function(be) {
          _.addEventListener(be, te, !!Oe && { passive: !0 }), J.push([be, te]);
        }), J;
      }
      function bu(b, _, O) {
        var z = b.type.indexOf("touch") === 0, te = b.type.indexOf("mouse") === 0, J = b.type.indexOf("pointer") === 0, be = 0, ie = 0;
        if (b.type.indexOf("MSPointer") === 0 && (J = !0), b.type === "mousedown" && !b.buttons && !b.touches) return !1;
        if (z) {
          var qe = function(Be) {
            var Pe = Be.target;
            return Pe === O || O.contains(Pe) || b.composed && b.composedPath().shift() === O;
          };
          if (b.type === "touchstart") {
            var ze = Array.prototype.filter.call(b.touches, qe);
            if (ze.length > 1) return !1;
            be = ze[0].pageX, ie = ze[0].pageY;
          } else {
            var Me = Array.prototype.find.call(b.changedTouches, qe);
            if (!Me) return !1;
            be = Me.pageX, ie = Me.pageY;
          }
        }
        return _ = _ || C(Vt), (te || J) && (be = b.clientX + _.x, ie = b.clientY + _.y), b.pageOffset = _, b.points = [be, ie], b.cursor = te || J, b;
      }
      function oo(b) {
        var _ = 100 * (b - f(y, d.ort)) / so();
        return _ = p(_), d.dir ? 100 - _ : _;
      }
      function wu(b) {
        var _ = 100, O = !1;
        return $.forEach(function(z, te) {
          if (!Ei(te)) {
            var J = Se[te], be = Math.abs(J - b);
            (be < _ || be <= _ && b > J || be === 100 && _ === 100) && (O = te, _ = be);
          }
        }), O;
      }
      function xu(b, _) {
        b.type === "mouseout" && b.target.nodeName === "HTML" && b.relatedTarget === null && Ti(b, _);
      }
      function Su(b, _) {
        if (navigator.appVersion.indexOf("MSIE 9") === -1 && b.buttons === 0 && _.buttonsProperty !== 0) return Ti(b, _);
        var O = (d.dir ? -1 : 1) * (b.calcPoint - _.startCalcPoint);
        ao(O > 0, 100 * O / _.baseSize, _.locations, _.handleNumbers, _.connect);
      }
      function Ti(b, _) {
        _.handle && (x(_.handle, d.cssClasses.active), Je -= 1), _.listeners.forEach(function(O) {
          Zt.removeEventListener(O[0], O[1]);
        }), Je === 0 && (x(xe, d.cssClasses.drag), Fi(), b.cursor && (Jt.style.cursor = "", Jt.removeEventListener("selectstart", a))), d.events.smoothSteps && (_.handleNumbers.forEach(function(O) {
          hn(O, Se[O], !0, !0, !1, !1);
        }), _.handleNumbers.forEach(function(O) {
          Ue("update", O);
        })), _.handleNumbers.forEach(function(O) {
          Ue("change", O), Ue("set", O), Ue("end", O);
        });
      }
      function Pi(b, _) {
        if (!_.handleNumbers.some(Ei)) {
          var O;
          _.handleNumbers.length === 1 && (O = $[_.handleNumbers[0]].children[0], Je += 1, v(O, d.cssClasses.active)), b.stopPropagation();
          var z = [], te = pn(ee.move, Zt, Su, { target: b.target, handle: O, connect: _.connect, listeners: z, startCalcPoint: b.calcPoint, baseSize: so(), pageOffset: b.pageOffset, handleNumbers: _.handleNumbers, buttonsProperty: b.buttons, locations: Se.slice() }), J = pn(ee.end, Zt, Ti, { target: b.target, handle: O, listeners: z, doNotReject: !0, handleNumbers: _.handleNumbers }), be = pn("mouseout", Zt, xu, { target: b.target, handle: O, listeners: z, doNotReject: !0, handleNumbers: _.handleNumbers });
          z.push.apply(z, te.concat(J, be)), b.cursor && (Jt.style.cursor = getComputedStyle(b.target).cursor, $.length > 1 && v(xe, d.cssClasses.drag), Jt.addEventListener("selectstart", a, !1)), _.handleNumbers.forEach(function(ie) {
            Ue("start", ie);
          });
        }
      }
      function $u(b) {
        b.stopPropagation();
        var _ = oo(b.calcPoint), O = wu(_);
        O !== !1 && (d.events.snap || m(xe, d.cssClasses.tap, d.animationDuration), hn(O, _, !0, !0), Fi(), Ue("slide", O, !0), Ue("update", O, !0), d.events.snap ? Pi(b, { handleNumbers: [O] }) : (Ue("change", O, !0), Ue("set", O, !0)));
      }
      function _u(b) {
        var _ = oo(b.calcPoint), O = ue.getStep(_), z = ue.fromStepping(O);
        Object.keys(et).forEach(function(te) {
          te.split(".")[0] === "hover" && et[te].forEach(function(J) {
            J.call(Or, z);
          });
        });
      }
      function ku(b, _) {
        if (no() || Ei(_)) return !1;
        var O = ["Left", "Right"], z = ["Down", "Up"], te = ["PageDown", "PageUp"], J = ["Home", "End"];
        d.dir && !d.ort ? O.reverse() : d.ort && !d.dir && (z.reverse(), te.reverse());
        var be, ie = b.key.replace("Arrow", ""), qe = ie === te[0], ze = ie === te[1], Me = ie === z[0] || ie === O[0] || qe, Be = ie === z[1] || ie === O[1] || ze, Pe = ie === J[0], Ke = ie === J[1];
        if (!(Me || Be || Pe || Ke)) return !0;
        if (b.preventDefault(), Be || Me) {
          var tt = Me ? 0 : 1, Ye = po(_)[tt];
          if (Ye === null) return !1;
          Ye === !1 && (Ye = ue.getDefaultStep(Se[_], Me, d.keyboardDefaultStep)), Ye *= ze || qe ? d.keyboardPageMultiplier : d.keyboardMultiplier, Ye = Math.max(Ye, 1e-7), Ye *= Me ? -1 : 1, be = ke[_] + Ye;
        } else be = Ke ? d.spectrum.xVal[d.spectrum.xVal.length - 1] : d.spectrum.xVal[0];
        return hn(_, ue.toStepping(be), !0, !0), Ue("slide", _), Ue("update", _), Ue("change", _), Ue("set", _), !1;
      }
      function Ou(b) {
        b.fixed || $.forEach(function(_, O) {
          pn(ee.start, _.children[0], Pi, { handleNumbers: [O] });
        }), b.tap && pn(ee.start, y, $u, {}), b.hover && pn(ee.move, y, _u, { hover: !0 }), b.drag && P.forEach(function(_, O) {
          if (_ !== !1 && O !== 0 && O !== P.length - 1) {
            var z = $[O - 1], te = $[O], J = [_], be = [z, te], ie = [O - 1, O];
            v(_, d.cssClasses.draggable), b.fixed && (J.push(z.children[0]), J.push(te.children[0])), b.dragAll && (be = $, ie = Te), J.forEach(function(qe) {
              pn(ee.start, qe, Pi, { handles: be, handleNumbers: ie, connect: _ });
            });
          }
        });
      }
      function Ni(b, _) {
        et[b] = et[b] || [], et[b].push(_), b.split(".")[0] === "update" && $.forEach(function(O, z) {
          Ue("update", z);
        });
      }
      function Eu(b) {
        return b === W.aria || b === W.tooltips;
      }
      function Wn(b) {
        var _ = b && b.split(".")[0], O = _ ? b.substring(_.length) : b;
        Object.keys(et).forEach(function(z) {
          var te = z.split(".")[0], J = z.substring(te.length);
          _ && _ !== te || O && O !== J || Eu(J) && O !== J || delete et[z];
        });
      }
      function Ue(b, _, O) {
        Object.keys(et).forEach(function(z) {
          var te = z.split(".")[0];
          b === te && et[z].forEach(function(J) {
            J.call(Or, ke.map(d.format.to), _, ke.slice(), O || !1, Se.slice(), Or);
          });
        });
      }
      function _r(b, _, O, z, te, J, be) {
        var ie;
        return $.length > 1 && !d.events.unconstrained && (z && _ > 0 && (ie = ue.getAbsoluteDistance(b[_ - 1], d.margin, !1), O = Math.max(O, ie)), te && _ < $.length - 1 && (ie = ue.getAbsoluteDistance(b[_ + 1], d.margin, !0), O = Math.min(O, ie))), $.length > 1 && d.limit && (z && _ > 0 && (ie = ue.getAbsoluteDistance(b[_ - 1], d.limit, !1), O = Math.min(O, ie)), te && _ < $.length - 1 && (ie = ue.getAbsoluteDistance(b[_ + 1], d.limit, !0), O = Math.max(O, ie))), d.padding && (_ === 0 && (ie = ue.getAbsoluteDistance(0, d.padding[0], !1), O = Math.max(O, ie)), _ === $.length - 1 && (ie = ue.getAbsoluteDistance(100, d.padding[1], !0), O = Math.min(O, ie))), be || (O = ue.getStep(O)), !((O = p(O)) === b[_] && !J) && O;
      }
      function Di(b, _) {
        var O = d.ort;
        return (O ? _ : b) + ", " + (O ? b : _);
      }
      function ao(b, _, O, z, te) {
        var J = O.slice(), be = z[0], ie = d.events.smoothSteps, qe = [!b, b], ze = [b, !b];
        z = z.slice(), b && z.reverse(), z.length > 1 ? z.forEach(function(Be, Pe) {
          var Ke = _r(J, Be, J[Be] + _, qe[Pe], ze[Pe], !1, ie);
          Ke === !1 ? _ = 0 : (_ = Ke - J[Be], J[Be] = Ke);
        }) : qe = ze = [!0];
        var Me = !1;
        z.forEach(function(Be, Pe) {
          Me = hn(Be, O[Be] + _, qe[Pe], ze[Pe], !1, ie) || Me;
        }), Me && (z.forEach(function(Be) {
          Ue("update", Be), Ue("slide", Be);
        }), te != null && Ue("drag", be));
      }
      function lo(b, _) {
        return d.dir ? 100 - b - _ : b;
      }
      function Vu(b, _) {
        Se[b] = _, ke[b] = ue.fromStepping(_);
        var O = "translate(" + Di(lo(_, 0) - Xn + "%", "0") + ")";
        $[b].style[d.transformRule] = O, uo(b), uo(b + 1);
      }
      function Fi() {
        Te.forEach(function(b) {
          var _ = Se[b] > 50 ? -1 : 1, O = 3 + ($.length + _ * b);
          $[b].style.zIndex = String(O);
        });
      }
      function hn(b, _, O, z, te, J) {
        return te || (_ = _r(Se, b, _, O, z, !1, J)), _ !== !1 && (Vu(b, _), !0);
      }
      function uo(b) {
        if (P[b]) {
          var _ = 0, O = 100;
          b !== 0 && (_ = Se[b - 1]), b !== P.length - 1 && (O = Se[b]);
          var z = O - _, te = "translate(" + Di(lo(_, z) + "%", "0") + ")", J = "scale(" + Di(z / 100, "1") + ")";
          P[b].style[d.transformRule] = te + " " + J;
        }
      }
      function co(b, _) {
        return b === null || b === !1 || b === void 0 ? Se[_] : (typeof b == "number" && (b = String(b)), (b = d.format.from(b)) !== !1 && (b = ue.toStepping(b)), b === !1 || isNaN(b) ? Se[_] : b);
      }
      function kr(b, _, O) {
        var z = h(b), te = Se[0] === void 0;
        _ = _ === void 0 || _, d.animate && !te && m(xe, d.cssClasses.tap, d.animationDuration), Te.forEach(function(ie) {
          hn(ie, co(z[ie], ie), !0, !1, O);
        });
        var J = Te.length === 1 ? 0 : 1;
        if (te && ue.hasNoSize() && (O = !0, Se[0] = 0, Te.length > 1)) {
          var be = 100 / (Te.length - 1);
          Te.forEach(function(ie) {
            Se[ie] = ie * be;
          });
        }
        for (; J < Te.length; ++J) Te.forEach(function(ie) {
          hn(ie, Se[ie], !0, !0, O);
        });
        Fi(), Te.forEach(function(ie) {
          Ue("update", ie), z[ie] !== null && _ && Ue("set", ie);
        });
      }
      function Au(b) {
        kr(d.start, b);
      }
      function Cu(b, _, O, z) {
        if (!((b = Number(b)) >= 0 && b < Te.length)) throw new Error("noUiSlider: invalid handle number, got: " + b);
        hn(b, co(_, b), !0, !0, z), Ue("update", b), O && Ue("set", b);
      }
      function fo(b) {
        if (b === void 0 && (b = !1), b) return ke.length === 1 ? ke[0] : ke.slice(0);
        var _ = ke.map(d.format.to);
        return _.length === 1 ? _[0] : _;
      }
      function Tu() {
        for (Wn(W.aria), Wn(W.tooltips), Object.keys(d.cssClasses).forEach(function(b) {
          x(xe, d.cssClasses[b]);
        }); xe.firstChild; ) xe.removeChild(xe.firstChild);
        delete xe.noUiSlider;
      }
      function po(b) {
        var _ = Se[b], O = ue.getNearbySteps(_), z = ke[b], te = O.thisStep.step, J = null;
        if (d.snap) return [z - O.stepBefore.startValue || null, O.stepAfter.startValue - z || null];
        te !== !1 && z + te > O.stepAfter.startValue && (te = O.stepAfter.startValue - z), J = z > O.thisStep.startValue ? O.thisStep.step : O.stepBefore.step !== !1 && z - O.stepBefore.highestStep, _ === 100 ? te = null : _ === 0 && (J = null);
        var be = ue.countStepDecimals();
        return te !== null && te !== !1 && (te = Number(te.toFixed(be))), J !== null && J !== !1 && (J = Number(J.toFixed(be))), [J, te];
      }
      function Pu() {
        return Te.map(po);
      }
      function Nu(b, _) {
        var O = fo(), z = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
        z.forEach(function(J) {
          b[J] !== void 0 && (g[J] = b[J]);
        });
        var te = Sr(g);
        z.forEach(function(J) {
          b[J] !== void 0 && (d[J] = te[J]);
        }), ue = te.spectrum, d.margin = te.margin, d.limit = te.limit, d.padding = te.padding, d.pips ? Ci(d.pips) : Ai(), d.tooltips ? ro() : Vi(), Se = [], kr(o(b.start) ? b.start : O, _);
      }
      function Du() {
        y = pu(xe), fu(d.connect, y), Ou(d.events), kr(d.start), d.pips && Ci(d.pips), d.tooltips && ro(), mu();
      }
      Du();
      var Or = { destroy: Tu, steps: Pu, on: Ni, off: Wn, get: fo, set: kr, setHandle: Cu, reset: Au, __moveHandles: function(b, _, O) {
        ao(b, _, Se, O);
      }, options: g, updateOptions: Nu, target: xe, removePips: Ai, removeTooltips: Vi, getPositions: function() {
        return Se.slice();
      }, getTooltips: function() {
        return ae;
      }, getOrigins: function() {
        return $;
      }, pips: Ci };
      return Or;
    }
    function $r(w, d) {
      if (!w || !w.nodeName) throw new Error("noUiSlider: create requires a single element, got: " + w);
      if (w.noUiSlider) throw new Error("noUiSlider: Slider was already initialized.");
      var g = qn(w, Sr(d), d);
      return w.noUiSlider = g, g;
    }
    var Oi = { __spectrum: I, cssClasses: U, create: $r };
    n.create = $r, n.cssClasses = U, n.default = Oi, Object.defineProperty(n, "__esModule", { value: !0 });
  })(t);
}));
function Na(e, t) {
  if (!Array.isArray(e) || !Array.isArray(t)) return !1;
  const n = t.slice().sort();
  return e.length === t.length && e.slice().sort().every(function(r, i) {
    return r === n[i];
  });
}
var Vs = { name: "Slider", emits: ["input", "update:modelValue", "start", "slide", "drag", "update", "change", "set", "end"], props: { value: { validator: function(e) {
  return (t) => typeof t == "number" || t instanceof Array || t == null || t === !1;
}, required: !1 }, modelValue: { validator: function(e) {
  return (t) => typeof t == "number" || t instanceof Array || t == null || t === !1;
}, required: !1 }, id: { type: [String, Number], required: !1 }, disabled: { type: Boolean, required: !1, default: !1 }, min: { type: Number, required: !1, default: 0 }, max: { type: Number, required: !1, default: 100 }, step: { type: Number, required: !1, default: 1 }, orientation: { type: String, required: !1, default: "horizontal" }, direction: { type: String, required: !1, default: "ltr" }, tooltips: { type: Boolean, required: !1, default: !0 }, options: { type: Object, required: !1, default: () => ({}) }, merge: { type: Number, required: !1, default: -1 }, format: { type: [Object, Function, Boolean], required: !1, default: null }, classes: { type: Object, required: !1, default: () => ({}) }, showTooltip: { type: String, required: !1, default: "always" }, tooltipPosition: { type: String, required: !1, default: null }, lazy: { type: Boolean, required: !1, default: !0 }, ariaLabelledby: { type: String, required: !1, default: void 0 }, aria: { required: !1, type: Object, default: () => ({}) } }, setup(e, t) {
  const n = function(o, a, l) {
    const { value: u, modelValue: f, min: c } = Er(o);
    let m = f && f.value !== void 0 ? f : u;
    const p = He(m.value);
    if (qr(m.value) && (m = He(c.value)), Array.isArray(m.value) && m.value.length == 0) throw new Error("Slider v-model must not be an empty array");
    return { value: m, initialValue: p };
  }(e), r = function(o, a, l) {
    const { classes: u, showTooltip: f, tooltipPosition: c, orientation: m } = Er(o), p = T(() => ({ target: "slider-target", focused: "slider-focused", tooltipFocus: "slider-tooltip-focus", tooltipDrag: "slider-tooltip-drag", ltr: "slider-ltr", rtl: "slider-rtl", horizontal: "slider-horizontal", vertical: "slider-vertical", textDirectionRtl: "slider-txt-dir-rtl", textDirectionLtr: "slider-txt-dir-ltr", base: "slider-base", connects: "slider-connects", connect: "slider-connect", origin: "slider-origin", handle: "slider-handle", handleLower: "slider-handle-lower", handleUpper: "slider-handle-upper", touchArea: "slider-touch-area", tooltip: "slider-tooltip", tooltipTop: "slider-tooltip-top", tooltipBottom: "slider-tooltip-bottom", tooltipLeft: "slider-tooltip-left", tooltipRight: "slider-tooltip-right", tooltipHidden: "slider-tooltip-hidden", active: "slider-active", draggable: "slider-draggable", tap: "slider-state-tap", drag: "slider-state-drag", pips: "slider-pips", pipsHorizontal: "slider-pips-horizontal", pipsVertical: "slider-pips-vertical", marker: "slider-marker", markerHorizontal: "slider-marker-horizontal", markerVertical: "slider-marker-vertical", markerNormal: "slider-marker-normal", markerLarge: "slider-marker-large", markerSub: "slider-marker-sub", value: "slider-value", valueHorizontal: "slider-value-horizontal", valueVertical: "slider-value-vertical", valueNormal: "slider-value-normal", valueLarge: "slider-value-large", valueSub: "slider-value-sub", ...u.value }));
    return { classList: T(() => {
      const h = { ...p.value };
      return Object.keys(h).forEach((S) => {
        h[S] = Array.isArray(h[S]) ? h[S].filter((v) => v !== null).join(" ") : h[S];
      }), f.value !== "always" && (h.target += ` ${f.value === "drag" ? h.tooltipDrag : h.tooltipFocus}`), m.value === "horizontal" && (h.tooltip += c.value === "bottom" ? ` ${h.tooltipBottom}` : ` ${h.tooltipTop}`), m.value === "vertical" && (h.tooltip += c.value === "right" ? ` ${h.tooltipRight}` : ` ${h.tooltipLeft}`), h;
    }) };
  }(e), i = function(o, a, l) {
    const { format: u, step: f } = Er(o), c = l.value, m = l.classList, p = T(() => u && u.value ? typeof u.value == "function" ? { to: u.value } : Pa({ ...u.value }) : Pa({ decimals: f.value >= 0 ? 0 : 2 })), h = T(() => Array.isArray(c.value) ? c.value.map((S) => p.value) : p.value);
    return { tooltipFormat: p, tooltipsFormat: h, tooltipsMerge: (S, v, x) => {
      var k = getComputedStyle(S).direction === "rtl", C = S.noUiSlider.options.direction === "rtl", G = S.noUiSlider.options.orientation === "vertical", L = S.noUiSlider.getTooltips(), K = S.noUiSlider.getOrigins();
      L.forEach(function(X, re) {
        X && K[re].appendChild(X);
      }), S.noUiSlider.on("update", function(X, re, M, Y, N) {
        var ne = [[]], fe = [[]], j = [[]], E = 0;
        L[0] && (ne[0][0] = 0, fe[0][0] = N[0], j[0][0] = p.value.to(parseFloat(X[0])));
        for (var V = 1; V < X.length; V++) (!L[V] || X[V] - X[V - 1] > v) && (ne[++E] = [], j[E] = [], fe[E] = []), L[V] && (ne[E].push(V), j[E].push(p.value.to(parseFloat(X[V]))), fe[E].push(N[V]));
        ne.forEach(function(I, R) {
          for (var U = I.length, W = 0; W < U; W++) {
            var le = I[W];
            if (W === U - 1) {
              var ye = 0;
              fe[R].forEach(function(A) {
                ye += 1e3 - A;
              });
              var q = G ? "bottom" : "right", Q = C ? 0 : U - 1, he = 1e3 - fe[R][Q];
              ye = (k && !G ? 100 : 0) + ye / U - he, L[le].innerHTML = j[R].join(x), L[le].style.display = "block", L[le].style[q] = ye + "%", m.value.tooltipHidden.split(" ").forEach((A) => {
                L[le].classList.contains(A) && L[le].classList.remove(A);
              });
            } else L[le].style.display = "none", m.value.tooltipHidden.split(" ").forEach((A) => {
              L[le].classList.add(A);
            });
          }
        });
      });
    } };
  }(e, 0, { value: n.value, classList: r.classList }), s = function(o, a, l) {
    const { orientation: u, direction: f, tooltips: c, step: m, min: p, max: h, merge: S, id: v, disabled: x, options: k, classes: C, format: G, lazy: L, ariaLabelledby: K, aria: X } = Er(o), re = l.value, M = l.initialValue, Y = l.tooltipsFormat, N = l.tooltipsMerge, ne = l.tooltipFormat, fe = l.classList, j = He(null), E = He(null), V = He(!1), I = T(() => {
      let A = { cssPrefix: "", cssClasses: fe.value, orientation: u.value, direction: f.value, tooltips: !!c.value && Y.value, connect: "lower", start: qr(re.value) ? p.value : re.value, range: { min: p.value, max: h.value } };
      if (m.value > 0 && (A.step = m.value), Array.isArray(re.value) && (A.connect = !0), K && K.value || X && Object.keys(X.value).length) {
        let B = Array.isArray(re.value) ? re.value : [re.value];
        A.handleAttributes = B.map((we) => Object.assign({}, X.value, K && K.value ? { "aria-labelledby": K.value } : {}));
      }
      return G.value && (A.ariaFormat = ne.value), A;
    }), R = T(() => {
      let A = { id: v && v.value ? v.value : void 0 };
      return x.value && (A.disabled = !0), A;
    }), U = T(() => Array.isArray(re.value)), W = () => {
      let A = E.value.get();
      return Array.isArray(A) ? A.map((B) => parseFloat(B)) : parseFloat(A);
    }, le = function(A) {
      let B = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
      E.value.set(A, B);
    }, ye = (A) => {
      a.emit("input", A), a.emit("update:modelValue", A), a.emit("update", A);
    }, q = () => {
      E.value = qm.create(j.value, Object.assign({}, I.value, k.value)), c.value && U.value && S.value >= 0 && N(j.value, S.value, " - "), E.value.on("set", () => {
        const A = W();
        a.emit("change", A), a.emit("set", A), L.value && ye(A);
      }), E.value.on("update", () => {
        if (!V.value) return;
        const A = W();
        U.value && Na(re.value, A) || !U.value && re.value == A ? a.emit("update", A) : L.value || ye(A);
      }), E.value.on("start", () => {
        a.emit("start", W());
      }), E.value.on("end", () => {
        a.emit("end", W());
      }), E.value.on("slide", () => {
        a.emit("slide", W());
      }), E.value.on("drag", () => {
        a.emit("drag", W());
      }), j.value.querySelectorAll("[data-handle]").forEach((A) => {
        A.onblur = () => {
          j.value && fe.value.focused.split(" ").forEach((B) => {
            j.value.classList.remove(B);
          });
        }, A.onfocus = () => {
          fe.value.focused.split(" ").forEach((B) => {
            j.value.classList.add(B);
          });
        };
      }), V.value = !0;
    }, Q = () => {
      E.value.off(), E.value.destroy(), E.value = null;
    }, he = (A, B) => {
      V.value = !1, Q(), q();
    };
    return yr(q), Cs(Q), Ie(U, he, { immediate: !1 }), Ie(p, he, { immediate: !1 }), Ie(h, he, { immediate: !1 }), Ie(m, he, { immediate: !1 }), Ie(u, he, { immediate: !1 }), Ie(f, he, { immediate: !1 }), Ie(c, he, { immediate: !1 }), Ie(S, he, { immediate: !1 }), Ie(G, he, { immediate: !1, deep: !0 }), Ie(k, he, { immediate: !1, deep: !0 }), Ie(C, he, { immediate: !1, deep: !0 }), Ie(re, (A, B) => {
      B && (typeof B == "object" && typeof A == "object" && A && Object.keys(B) > Object.keys(A) || typeof B == "object" && typeof A != "object" || qr(A)) && he();
    }, { immediate: !1 }), Ie(re, (A) => {
      if (qr(A)) return void le(p.value, !1);
      let B = W();
      U.value && !Array.isArray(B) && (B = [B]), (U.value && !Na(A, B) || !U.value && A != B) && le(A, !1);
    }, { deep: !0 }), { slider: j, slider$: E, isRange: U, sliderProps: R, init: q, destroy: Q, refresh: he, update: le, reset: () => {
      ye(M.value);
    } };
  }(e, t, { value: n.value, initialValue: n.initialValue, tooltipFormat: i.tooltipFormat, tooltipsFormat: i.tooltipsFormat, tooltipsMerge: i.tooltipsMerge, classList: r.classList });
  return { ...r, ...i, ...s };
} };
Vs.render = function(e, t, n, r, i, s) {
  return F(), oe("div", _e(e.sliderProps, { ref: "slider" }), null, 16);
}, Vs.__file = "src/Slider.vue";
const Xm = { class: "x-slider-input__prepend" }, Wm = /* @__PURE__ */ $e({
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
    const n = e, r = t, i = He(n.modelValue), s = T(() => [
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
    return ja(() => {
      i.value = String(n.modelValue);
    }), (l, u) => (F(), oe("div", {
      class: De(s.value)
    }, [
      se("div", Xm, Ne(e.prepend) + " ", 1),
      mt(se("input", _e(o.value, {
        "onUpdate:modelValue": u[0] || (u[0] = (f) => i.value = f),
        onChange: a
      }), null, 16), [
        [Wu, i.value]
      ])
    ], 2));
  }
}), Da = /* @__PURE__ */ We(Wm, [["__scopeId", "data-v-4f606fff"]]), Ym = { class: "x-slider__boundaries" }, cv = /* @__PURE__ */ $e({
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
    const n = Vn(), r = e, i = t, s = T(() => [
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
    ), m = T(() => !Array.isArray(r.modelValue) || r.readonly);
    return (p, h) => (F(), ve(D(br), {
      name: e.name,
      value: e.modelValue
    }, {
      default: de(({ handleChange: S }) => [
        se("div", {
          class: De(s.value)
        }, [
          se("div", Ym, [
            me(Da, {
              modelValue: o.value,
              "onUpdate:modelValue": h[0] || (h[0] = (v) => o.value = v),
              active: f.value,
              readonly: e.readonly,
              color: e.color,
              prepend: e.prepends.from
            }, null, 8, ["modelValue", "active", "readonly", "color", "prepend"]),
            me(Da, {
              modelValue: a.value,
              "onUpdate:modelValue": h[1] || (h[1] = (v) => a.value = v),
              active: c.value,
              readonly: m.value,
              disabled: e.disabled,
              color: e.color,
              prepend: e.prepends.to
            }, null, 8, ["modelValue", "active", "readonly", "disabled", "color", "prepend"])
          ]),
          me(D(Vs), _e({
            modelValue: l.value,
            "onUpdate:modelValue": h[2] || (h[2] = (v) => l.value = v)
          }, u.value, { onChange: S }), null, 16, ["modelValue", "onChange"])
        ], 2)
      ]),
      _: 1
    }, 8, ["name", "value"]));
  }
}), Gm = { class: "x-textarea__container" }, Km = ["value", "onInput", "onBlur"], Zm = {
  key: 0,
  class: "x-textarea__placeholder"
}, Jm = {
  key: 1,
  class: "x-textarea__append"
}, Qm = /* @__PURE__ */ $e({
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
    const n = Vn(), r = e, i = t, s = T(() => r.value || r.modelValue), { class: o = "", ...a } = n, l = T(() => ({
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
    ]), f = (c, m) => {
      const p = c.target;
      m(c, !0), i("update:modelValue", p.value);
    };
    return (c, m) => (F(), ve(D(br), {
      name: e.name,
      value: s.value,
      class: De(u.value)
    }, {
      default: de(({ inputValue: p, handleChange: h, handleBlur: S }) => [
        se("div", Gm, [
          se("textarea", _e(l.value, {
            value: p,
            onInput: (v) => f(v, h),
            onBlur: S
          }), null, 16, Km),
          c.$slots.placeholder && !p ? (F(), oe("div", Zm, [
            ce(c.$slots, "placeholder", {}, void 0, !0)
          ])) : pe("", !0),
          c.$slots.append ? (F(), oe("div", Jm, [
            ce(c.$slots, "append", {}, void 0, !0)
          ])) : pe("", !0)
        ])
      ]),
      _: 3
    }, 8, ["name", "value", "class"]));
  }
}), dv = /* @__PURE__ */ We(Qm, [["__scopeId", "data-v-7d3a1b09"]]);
export {
  hi as DatepickerUnit,
  gr as SearchMode,
  rt as XButton,
  il as XCheckbox,
  sv as XCheckboxGroup,
  sa as XCol,
  av as XDatePicker,
  tv as XDialog,
  nv as XDialogPlugin,
  hd as XDivider,
  pd as XDropdown,
  lp as XFieldError,
  lv as XFileInput,
  ip as XForm,
  Dr as XFormItem,
  tr as XInput,
  pp as XLabel,
  rv as XList,
  us as XListItem,
  Ra as XLoader,
  Ba as XMark,
  uv as XRadio,
  Ap as XRow,
  mm as XSearch,
  Zh as XSelect,
  cv as XSlider,
  Ze as XSvgIcon,
  Io as XTag,
  dv as XTextarea,
  br as XValidationFormItem,
  ov as useCheckboxGroup,
  ac as useDialog,
  sp as useReactiveArrayModel,
  iv as useReactiveObjectModel,
  wd as useThrottleEvent
};
