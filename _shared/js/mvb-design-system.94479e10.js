/* @ds-bundle: {"format":4,"namespace":"MVBDesignSystem_0cf631","components":[{"name":"Accordion","sourcePath":"components/core/Accordion.jsx"},{"name":"AnnouncementBar","sourcePath":"components/core/AnnouncementBar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"NavLink","sourcePath":"components/core/NavLink.jsx"},{"name":"ProductCard","sourcePath":"components/core/ProductCard.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"QuantityStepper","sourcePath":"components/core/QuantityStepper.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"StarRating","sourcePath":"components/core/StarRating.jsx"},{"name":"CartDrawer","sourcePath":"ui_kits/storefront/CartDrawer.jsx"},{"name":"HomePage","sourcePath":"ui_kits/storefront/HomePage.jsx"},{"name":"ProductPage","sourcePath":"ui_kits/storefront/ProductPage.jsx"},{"name":"SCENTS","sourcePath":"ui_kits/storefront/ScentsPage.jsx"},{"name":"ScentsPage","sourcePath":"ui_kits/storefront/ScentsPage.jsx"},{"name":"SiteFooter","sourcePath":"ui_kits/storefront/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"ui_kits/storefront/SiteHeader.jsx"}],"sourceHashes":{"components/core/Accordion.jsx":"b64748eb58b8","components/core/AnnouncementBar.jsx":"fad4f0cd7228","components/core/Badge.jsx":"985179866b77","components/core/Button.jsx":"d23bb160559c","components/core/Input.jsx":"cb5da9f94108","components/core/NavLink.jsx":"8ab75e2df19b","components/core/ProductCard.jsx":"5cc9bfd23515","components/core/ProgressBar.jsx":"206f1a4018fd","components/core/QuantityStepper.jsx":"66bb814f7a73","components/core/SectionHeader.jsx":"592163b5ada4","components/core/StarRating.jsx":"f7f52bf0c5b2","guidelines/tweaks-panel.jsx":"6591467622ed","ui_kits/storefront/CartDrawer.jsx":"cf1f4c4aaa35","ui_kits/storefront/HomePage.jsx":"4bc640acb626","ui_kits/storefront/ProductPage.jsx":"d3ec00c2456a","ui_kits/storefront/ScentsPage.jsx":"e3cc4ec08913","ui_kits/storefront/SiteFooter.jsx":"089fade8ea25","ui_kits/storefront/SiteHeader.jsx":"5ab271e55724"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MVBDesignSystem_0cf631 = window.MVBDesignSystem_0cf631 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Accordion.jsx
try { (() => {
const {
  useState
} = React;
/**
 * PDP collapsible — hairline-bordered trigger with centered wide-tracked
 * label and a +/− icon; body opens beneath inside the same hairline frame.
 */
function Accordion({
  title,
  children,
  defaultOpen = false,
  style
}) {
  const [open, setOpen] = useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: open ? "none" : undefined,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      position: "relative",
      width: "100%",
      padding: "15px 44px",
      background: "transparent",
      border: "1px solid var(--mv-border)",
      color: "var(--mv-white)",
      fontFamily: "var(--font-body)",
      fontSize: 13.6,
      lineHeight: "24.3px",
      letterSpacing: "4.05px",
      textTransform: "uppercase",
      textAlign: "center",
      cursor: "pointer"
    }
  }, title, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 18,
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: 18,
      letterSpacing: 0
    }
  }, open ? "−" : "+")), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 21px",
      border: "1px solid var(--mv-border)",
      borderTop: "none",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-detail)",
      lineHeight: "var(--text-detail-leading)",
      letterSpacing: "0.9px",
      color: "var(--mv-white)"
    }
  }, children) : null);
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/AnnouncementBar.jsx
try { (() => {
/**
 * Top announcement bar with sale headline, sub-line, and live countdown.
 * Black band above the sticky header.
 */
function AnnouncementBar({
  title = "FATHER'S DAY SALE! ENDS IN:",
  subtitle = "20% OFF AUTO CODE AT CHECKOUT",
  hours = 9,
  minutes = 36,
  seconds = 58,
  style
}) {
  const pad = n => String(n).padStart(2, "0");
  const unit = (v, l) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20.5,
      lineHeight: "22px",
      letterSpacing: "0.9px"
    }
  }, pad(v)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 8.6,
      lineHeight: "10px",
      letterSpacing: "0.9px",
      color: "var(--mv-gray-550)"
    }
  }, l));
  const colon = /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      lineHeight: "22px",
      letterSpacing: "0.9px",
      paddingTop: 1
    }
  }, ":");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      padding: 10,
      background: "var(--mv-black)",
      color: "var(--mv-white)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 18,
      lineHeight: "21.6px",
      textTransform: "uppercase"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9.6,
      lineHeight: "16.8px",
      textTransform: "uppercase"
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      alignItems: "flex-start"
    }
  }, unit(hours, "Hrs"), colon, unit(minutes, "Mins"), colon, unit(seconds, "Secs")));
}
Object.assign(__ds_scope, { AnnouncementBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AnnouncementBar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Red rectangular product badge — "SALE", "NEW SCENT!", "NEW SCENT LAUNCH!".
 * Hard corners, sits overlapping a product image's top edge.
 */
function Badge({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      padding: "3px 12px 4px",
      background: "var(--mv-red)",
      fontFamily: "var(--font-body)",
      fontSize: 13.5,
      lineHeight: "25.2px",
      letterSpacing: "0.9px",
      color: "var(--mv-white)",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mad Viking axe-cut button. Parallelogram silhouette (skewX -12°),
 * solid red primary or hairline ghost. `straight` renders the square
 * PDP-style variant (Add to cart).
 */
function Button({
  children,
  variant = "primary",
  straight = false,
  size = "md",
  href,
  onClick,
  style,
  ...rest
}) {
  const Tag = href ? "a" : "button";
  const ghost = variant === "ghost";
  const h = ghost ? 34 : size === "lg" ? 44 : 42;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 90,
      height: h,
      padding: "0 20px",
      border: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: ghost ? "9.6px" : "var(--text-button)",
      letterSpacing: ghost ? "0.36em" : "var(--text-button-tracking)",
      textIndent: ghost ? "0.36em" : "var(--text-button-tracking)",
      textTransform: "uppercase",
      color: "var(--mv-white)",
      cursor: "pointer",
      textDecoration: "none",
      whiteSpace: "nowrap",
      zIndex: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "mv-btn-bg",
    style: {
      position: "absolute",
      inset: 0,
      zIndex: -1,
      background: ghost ? "transparent" : "var(--mv-red)",
      border: ghost ? "1px solid var(--mv-border)" : "none",
      transform: straight ? "none" : "skewX(var(--skew-btn, -12deg))",
      transition: "background-color 150ms ease"
    }
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
/**
 * Dark hairline text input; optionally grouped with a submit Button
 * (newsletter pattern).
 */
function Input({
  placeholder,
  value,
  onChange,
  type = "text",
  style
}) {
  return /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
      height: 43,
      padding: "10px 11px",
      background: "transparent",
      border: "1px solid var(--mv-border)",
      borderRadius: 0,
      fontFamily: "var(--font-body)",
      fontSize: 14.3,
      letterSpacing: "0.9px",
      color: "var(--mv-white)",
      outline: "none",
      boxSizing: "border-box",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/NavLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Primary nav link — Fjalla One uppercase, wide-tracked, with optional
 * tiny red pill label floating above ("Best Offer").
 */
function NavLink({
  children,
  label,
  active = false,
  href = "#",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, rest, {
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      padding: "7.5px 11px",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-nav)",
      letterSpacing: "var(--text-nav-tracking)",
      textTransform: "uppercase",
      color: "var(--mv-white)",
      textDecoration: "none",
      opacity: active ? 1 : undefined,
      transition: "opacity 150ms ease",
      ...style
    },
    onMouseEnter: e => e.currentTarget.style.opacity = "0.7",
    onMouseLeave: e => e.currentTarget.style.opacity = "1"
  }), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 10,
      top: -5,
      padding: "1px 7px 2px",
      borderRadius: "var(--radius-pill-sm)",
      background: "var(--mv-red-deep)",
      fontFamily: "var(--font-display)",
      fontSize: 7,
      letterSpacing: "1px",
      lineHeight: 1.2,
      textTransform: "none",
      whiteSpace: "nowrap"
    }
  }, label) : null, children);
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
/**
 * Free-shipping progress bar from the cart drawer — pill track with red
 * fill and shouty uppercase label beneath.
 */
function ProgressBar({
  progress = 0,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      borderRadius: "var(--radius-bar)",
      background: "var(--mv-gray-150)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${Math.max(0, Math.min(1, progress)) * 100}%`,
      height: "100%",
      borderRadius: "var(--radius-bar)",
      background: "var(--mv-red)",
      transition: "width 300ms ease"
    }
  })), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontSize: 18,
      lineHeight: "17px",
      letterSpacing: "0.9px",
      textTransform: "uppercase",
      color: "var(--mv-white)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/QuantityStepper.jsx
try { (() => {
const {
  useState
} = React;
/**
 * PDP quantity stepper — minus / value / plus cells, hairline borders,
 * 44px tall.
 */
function QuantityStepper({
  value,
  onChange,
  min = 1,
  style
}) {
  const [internal, setInternal] = useState(value ?? 1);
  const qty = value ?? internal;
  const set = n => {
    const v = Math.max(min, n);
    if (onChange) onChange(v);else setInternal(v);
  };
  const cell = {
    width: 43,
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid var(--mv-border)",
    background: "var(--mv-black)",
    color: "var(--mv-white)",
    fontFamily: "var(--font-body)",
    fontSize: 18,
    cursor: "pointer",
    userSelect: "none",
    boxSizing: "border-box"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: cell,
    onClick: () => set(qty - 1),
    role: "button",
    "aria-label": "Decrease quantity"
  }, "\u2212"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...cell,
      width: 46,
      cursor: "default",
      fontSize: 20,
      letterSpacing: "0.8px",
      borderLeft: "none",
      borderRight: "none"
    }
  }, qty), /*#__PURE__*/React.createElement("div", {
    style: cell,
    onClick: () => set(qty + 1),
    role: "button",
    "aria-label": "Increase quantity"
  }, "+"));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
/**
 * Centered section header — Fjalla One display title with optional
 * ghost "View all" button beneath.
 */
function SectionHeader({
  title,
  action,
  onAction,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 15,
      textAlign: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--text-hero)",
      lineHeight: "var(--text-hero-leading)",
      letterSpacing: "var(--text-hero-tracking)",
      textTransform: "uppercase",
      color: "var(--mv-white)"
    }
  }, title), action ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    onClick: onAction
  }, action) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/StarRating.jsx
try { (() => {
const STAR_OUTLINE = "M 10.358 5.431 L 8 0 L 5.642 5.431 L 0 6.111 L 4.184 10.148 L 3.056 16 L 8 13.063 L 12.944 16 L 11.816 10.148 L 16 6.111 L 10.358 5.431 Z M 9.158 6.996 L 8 4.277 L 6.842 6.996 L 3.723 7.356 L 5.998 9.574 L 5.405 12.594 L 8 11.089 L 10.594 12.594 L 10.002 9.574 L 12.277 7.356 L 9.158 6.996 Z";
const STAR_FILLED = "M 10.358 5.431 L 8 0 L 5.642 5.431 L 0 6.111 L 4.184 10.148 L 3.056 16 L 8 13.063 L 12.944 16 L 11.816 10.148 L 16 6.111 L 10.358 5.431 Z";
function Star({
  filled
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "var(--mv-red)"
  }, /*#__PURE__*/React.createElement("path", {
    d: filled ? STAR_FILLED : STAR_OUTLINE,
    fillRule: filled ? "nonzero" : "evenodd"
  })));
}

/**
 * Junip-style review stars — red 16px stars with optional review count.
 */
function StarRating({
  rating = 5,
  count,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Star, {
    key: i,
    filled: false
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      display: "inline-flex",
      overflow: "hidden",
      width: `${Math.max(0, Math.min(5, rating)) * 20}%`
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Star, {
    key: i,
    filled: true
  })))), count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 3,
      fontFamily: "var(--font-body)",
      fontSize: 17.7,
      lineHeight: "23.4px",
      letterSpacing: "0.9px",
      color: "var(--mv-white)"
    }
  }, "(", count, ")") : null);
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/core/ProductCard.jsx
try { (() => {
/**
 * Storefront product card — square image on black, centered Fjalla title,
 * red stars, price (sale = red + struck compare-at). Borderless.
 */
function ProductCard({
  image,
  title,
  rating,
  reviews,
  price,
  compareAt,
  badge,
  width = 323,
  href = "#",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      position: "relative",
      display: "block",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "1 / 1",
      background: "var(--mv-black)",
      overflow: "hidden"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : null), badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    style: {
      position: "absolute",
      top: -10,
      right: 0
    }
  }, badge) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      padding: "12px 0 6px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-card-title)",
      lineHeight: "var(--text-card-title-leading)",
      letterSpacing: "var(--text-card-title-tracking)",
      textTransform: "uppercase",
      color: "var(--mv-white)",
      textDecoration: "none"
    }
  }, title), rating != null ? /*#__PURE__*/React.createElement(__ds_scope.StarRating, {
    rating: rating,
    count: reviews
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "baseline",
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: "var(--text-price)",
      letterSpacing: "0.9px"
    }
  }, compareAt ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--mv-red)"
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--mv-white)",
      textDecoration: "line-through"
    }
  }, compareAt)) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--mv-gray-550)"
    }
  }, price))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProductCard.jsx", error: String((e && e.message) || e) }); }

// guidelines/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "guidelines/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/CartDrawer.jsx
try { (() => {
const IMG = "../../assets/images/";
const FREE_SHIPPING = 75;

/** Slide-out cart drawer (500px, 15px radius) with free-shipping meter. */
function CartDrawer({
  open,
  items = [],
  onClose,
  onQty,
  onRemove
}) {
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const away = Math.max(0, FREE_SHIPPING - subtotal);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      pointerEvents: open ? "auto" : "none"
    },
    "aria-hidden": !open
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-modal)",
      opacity: open ? 1 : 0,
      transition: "opacity 300ms ease"
    }
  }), /*#__PURE__*/React.createElement("aside", {
    "data-screen-label": "Cart Drawer",
    style: {
      position: "absolute",
      top: 10,
      right: 10,
      bottom: 10,
      width: 500,
      maxWidth: "calc(100vw - 20px)",
      borderRadius: "var(--radius-drawer)",
      background: "var(--mv-black)",
      border: "1px solid var(--mv-border)",
      transform: open ? "translateX(0)" : "translateX(110%)",
      transition: "transform 300ms ease",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      fontFamily: "var(--font-body)",
      color: "var(--mv-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 20,
      letterSpacing: "3px"
    }
  }, "My Cart"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/icons/icon-close.svg",
    alt: "Close cart",
    onClick: onClose,
    style: {
      width: 14,
      height: 18,
      cursor: "pointer"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    progress: subtotal / FREE_SHIPPING,
    label: away > 0 ? `YOU ARE $${away.toFixed(2)} AWAY FROM FREE SHIPPING!` : "YOU'VE UNLOCKED FREE SHIPPING!"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      marginTop: 10
    }
  }, items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-raised)",
      padding: "39px 32px 56px",
      fontSize: 16.7,
      lineHeight: "25.2px",
      letterSpacing: "0.9px"
    }
  }, "Your cart is currently empty!") : items.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.id,
    style: {
      display: "flex",
      gap: 14,
      padding: "14px 16px",
      borderBottom: "1px solid var(--mv-border)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: item.image,
    alt: item.title,
    style: {
      width: 90,
      height: 90,
      objectFit: "cover",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 13,
      letterSpacing: "2px",
      textTransform: "uppercase",
      lineHeight: 1.3
    }
  }, item.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      letterSpacing: "0.9px",
      color: "var(--mv-gray-550)"
    }
  }, "$", item.price.toFixed(2)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.QuantityStepper, {
    value: item.qty,
    onChange: q => onQty && onQty(item.id, q)
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (onRemove) onRemove(item.id);
    },
    style: {
      fontSize: 10.5,
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "var(--mv-gray-550)"
    }
  }, "Remove"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 16,
      letterSpacing: "2.4px"
    }
  }, "YOUR JOURNEY. YOUR REWARDS."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 13.5,
      lineHeight: "18.9px",
      letterSpacing: "4.05px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--mv-red)",
      textDecoration: "none"
    }
  }, "Log into your Journey Rewards account"), /*#__PURE__*/React.createElement("span", null, " for discount.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      borderTop: "1px solid var(--mv-border)",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 14,
      letterSpacing: "0.9px"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, "$", subtotal.toFixed(2))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    straight: true,
    size: "lg",
    style: {
      width: "100%"
    }
  }, "CHECKOUT"))));
}
Object.assign(__ds_scope, { CartDrawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/HomePage.jsx
try { (() => {
const IMG = "../../assets/images/";
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: 750,
      overflow: "hidden",
      background: "var(--mv-ink-900)"
    },
    "data-screen-label": "Hero"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "hero-father-son.jpg",
    alt: "Bearded father with his daughter",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-photo)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      bottom: 45,
      display: "flex",
      flexDirection: "column",
      gap: 5,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: -200,
      top: -100,
      width: 722,
      height: 416,
      background: "radial-gradient(closest-side, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 60%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontSize: 11,
      letterSpacing: "4.05px",
      textTransform: "uppercase"
    }
  }, "Father's Day Sale"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--font-display)",
      fontSize: 64,
      lineHeight: 1.05,
      letterSpacing: "0.06em",
      textTransform: "uppercase"
    }
  }, "20% OFF"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontSize: 13,
      letterSpacing: "2px",
      textTransform: "uppercase"
    }
  }, "+ FREE SHIPPING OVER $75"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    style: {
      marginTop: 16,
      marginLeft: 8
    }
  }, "SHOP NOW")));
}
function Intro() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "75px 40px 0",
      textAlign: "center"
    },
    "data-screen-label": "Intro"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--text-hero)",
      letterSpacing: "var(--text-hero-tracking)",
      textTransform: "uppercase",
      lineHeight: 1.2
    }
  }, "Premium Beard Products"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 1315,
      margin: "24px auto 0",
      fontSize: 13.6,
      lineHeight: "25.2px",
      letterSpacing: "0.9px"
    }
  }, "Welcome to Mad Viking Beard Co., where we believe that your facial hair is more than just a style - it's a statement of who you are. That's why we're committed to creating premium quality grooming products for men who demand the best."));
}
function PromoFrame({
  kicker,
  title,
  body,
  image,
  badge,
  cta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      gap: 10,
      alignItems: "center",
      padding: 31,
      background: "rgba(255,255,255,0.002)",
      boxShadow: "var(--frame-inset-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "0 5px 0 10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      letterSpacing: "4.05px",
      textTransform: "uppercase"
    }
  }, kicker), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 24,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      lineHeight: 1.15
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      lineHeight: "20px",
      letterSpacing: "0.9px",
      fontStyle: "italic"
    }
  }, body), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    style: {
      marginTop: 8,
      alignSelf: "flex-start",
      marginLeft: 8
    }
  }, cta)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 218,
      height: 218,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    style: {
      position: "absolute",
      top: -10,
      right: -8,
      fontSize: 12.9
    }
  }, badge) : null));
}
function Bundles() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "75px 40px 0"
    },
    "data-screen-label": "Beard Bundles"
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeader, {
    title: "BEARD BUNDLES",
    action: "VIEW ALL"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 22,
      justifyContent: "center",
      marginTop: 50,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ProductCard, {
    image: IMG + "product-wolf-pack-bundle.png",
    title: "MAD VIKING WOLF PACK",
    rating: 4.9,
    reviews: 1124,
    price: "$95.00",
    compareAt: "$105.00",
    badge: "SALE"
  }), /*#__PURE__*/React.createElement(__ds_scope.ProductCard, {
    image: IMG + "product-wash-conditioner-combo.png",
    title: "MAD VIKING BIOTIN BEARD WASH & CONDITIONER COMBO",
    rating: 4.85,
    reviews: 386,
    price: "$40.00",
    compareAt: "$42.00",
    badge: "SALE"
  }), /*#__PURE__*/React.createElement(__ds_scope.ProductCard, {
    image: IMG + "product-biotin-wash-cart.png",
    title: "MAD VIKING RAVEN PACK",
    rating: 4.92,
    reviews: 822,
    price: "$57.00",
    compareAt: "$64.00",
    badge: "SALE"
  }), /*#__PURE__*/React.createElement(__ds_scope.ProductCard, {
    image: IMG + "product-oil-sample-3pack.png",
    title: "MAD VIKING BEARD OIL SAMPLE 3 PACK",
    rating: 4.94,
    reviews: 777,
    price: "$21.00"
  })));
}
function Essentials({
  onNavigate
}) {
  const cat = (image, label) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (onNavigate) onNavigate("pdp");
    },
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 14,
      textDecoration: "none",
      color: "var(--mv-white)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: label,
    style: {
      width: "100%",
      aspectRatio: "1",
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 16,
      letterSpacing: "0.2em",
      textTransform: "uppercase"
    }
  }, label));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "75px 40px 0"
    },
    "data-screen-label": "Essentials"
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeader, {
    title: "MAD VIKING ESSENTIALS"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 22,
      marginTop: 50
    }
  }, cat(IMG + "category-beard-oil.png", "NATURAL BEARD OIL"), cat(IMG + "category-beard-balm.png", "BEARD BALMS"), cat(IMG + "category-beard-butter.png", "BEARD BUTTER"), cat(IMG + "category-beard-soap.png", "BEARD & BODY SOAP")));
}
function Newsletter() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 75,
      padding: "74px 40px 75px",
      background: "var(--surface-band)",
      textAlign: "center"
    },
    "data-screen-label": "Newsletter"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-subhero)",
      letterSpacing: "var(--text-subhero-tracking)"
    }
  }, "Sign up and save!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "14px 0 0",
      fontStyle: "italic",
      fontSize: 13.8,
      lineHeight: "25.2px",
      letterSpacing: "0.9px"
    }
  }, "Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 12,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    placeholder: "Enter your email",
    style: {
      width: 244
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg"
  }, "SUBSCRIBE")));
}
function BannerStrip({
  image,
  text,
  cta,
  height = 160
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height,
      margin: "40px 40px 0",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--overlay-photo)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 14,
      background: "radial-gradient(60% 160% at 50% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 70%)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15.4,
      lineHeight: "30.24px",
      letterSpacing: "0.9px",
      textTransform: "uppercase",
      textAlign: "center",
      maxWidth: 800
    }
  }, text), /*#__PURE__*/React.createElement(__ds_scope.Button, null, cta)));
}
function Ambassador() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: 267,
      margin: "75px 40px 0",
      overflow: "hidden"
    },
    "data-screen-label": "Beard Ambassador"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "banner-beard-ambassador.png",
    alt: "Beard ambassador covered in mud under barbed wire",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15,
      top: 0,
      bottom: 0,
      width: 500,
      background: "var(--mv-black)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 12,
      padding: 36,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      letterSpacing: "4.05px",
      textTransform: "uppercase"
    }
  }, "So you want to become a"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 30,
      letterSpacing: "0.12em",
      textTransform: "uppercase"
    }
  }, "Beard Ambassador"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      letterSpacing: "2px",
      textTransform: "uppercase"
    }
  }, "Learn more and see if you have what it takes."), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    style: {
      alignSelf: "flex-start",
      marginTop: 6,
      marginLeft: 8
    }
  }, "LEARN MORE")));
}

/** Mad Viking storefront homepage (1440w). */
function HomePage({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: "var(--mv-black)",
      color: "var(--mv-white)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Intro, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      padding: "56px 35px 0"
    },
    "data-screen-label": "Promos"
  }, /*#__PURE__*/React.createElement(PromoFrame, {
    kicker: "Beard Oil",
    title: "HAMMER & THRONE",
    body: "\u201CA balanced mix of pine, smoky sandalwood, and earthy depth for a scent that feels natural, confident, and outdoorsy.\u201D",
    image: IMG + "product-hammer-throne-oil.png",
    badge: "NEW SCENT!",
    cta: "SHOP NOW"
  }), /*#__PURE__*/React.createElement(PromoFrame, {
    kicker: "Biotin Wash & Conditioner",
    title: "HAMMER & THRONE",
    body: "The Beard Wash & Conditioner everyone is talking about in our all new Hammer & Throne scent!",
    image: IMG + "product-wash-conditioner-combo.png",
    badge: "NEW SCENT LAUNCH!",
    cta: "SHOP NOW"
  })), /*#__PURE__*/React.createElement(Bundles, null), /*#__PURE__*/React.createElement(Essentials, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Newsletter, null), /*#__PURE__*/React.createElement(BannerStrip, {
    image: IMG + "banner-semper-fi.jpg",
    text: "Help us support Semper Fi & America's Fund and see what they do for our veterans.",
    cta: "LEARN MORE"
  }), /*#__PURE__*/React.createElement(Ambassador, null), /*#__PURE__*/React.createElement(BannerStrip, {
    image: IMG + "banner-govx.jpg",
    text: "We offer a 30% discount to all Military active duty/veterans and all first responders and frontline workers.",
    cta: "GOVX DISCOUNT",
    height: 190
  }));
}
Object.assign(__ds_scope, { HomePage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductPage.jsx
try { (() => {
const {
  useState
} = React;
const IMG = "../../assets/images/";
function Radio({
  checked,
  onClick
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    role: "radio",
    "aria-checked": checked,
    style: {
      width: 20,
      height: 20,
      border: "1px solid var(--mv-red)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      flexShrink: 0
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      background: "var(--mv-red)"
    }
  }) : null);
}
function BuyBox({
  onAdd
}) {
  const [plan, setPlan] = useState("once");
  const [qty, setQty] = useState(1);
  const row = {
    display: "flex",
    alignItems: "center",
    gap: 18,
    fontSize: 13.2,
    letterSpacing: "2px"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 17
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...row,
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    checked: plan === "once",
    onClick: () => setPlan("once")
  }), "One Time Purchase"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16.5,
      letterSpacing: "0.9px"
    }
  }, "$21.00")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...row,
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    checked: plan === "sub",
    onClick: () => setPlan("sub")
  }), "Subscribe & Save 20%"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16.3,
      letterSpacing: "0.9px",
      color: "var(--mv-red)"
    }
  }, "$16.80"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15.9,
      letterSpacing: "0.9px",
      textDecoration: "line-through"
    }
  }, "$21.00"))), plan === "sub" ? /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.8,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      fontSize: 12.6,
      lineHeight: "20px",
      letterSpacing: "0.9px",
      paddingLeft: 38
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2714 20% off your first delivery"), /*#__PURE__*/React.createElement("span", null, "\u2714 25% off every delivery after that"), /*#__PURE__*/React.createElement("span", null, "\u2714 Unlock a gift on delivery #2 (auto-added)"), /*#__PURE__*/React.createElement("span", null, "3 days before your next delivery is set to go through, we will email you a reminder. You can easily adjust or cancel at anytime.")) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 13,
      alignItems: "center",
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.QuantityStepper, {
    value: qty,
    onChange: setQty
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    straight: true,
    style: {
      flex: 1,
      fontSize: 11.8,
      letterSpacing: "3px",
      textIndent: "3px"
    },
    onClick: () => onAdd && onAdd(qty)
  }, "ADD TO CART")));
}

/** Mad Viking product detail page — AXE & OAK BEARD OIL. */
function ProductPage({
  onAdd
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: "var(--mv-black)",
      color: "var(--mv-white)",
      fontFamily: "var(--font-body)",
      padding: "26px 40px 75px"
    },
    "data-screen-label": "PDP"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 15,
      fontSize: 13.4,
      letterSpacing: "0.9px",
      color: "var(--mv-gray-300)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "mv-link",
    style: {
      color: "var(--mv-white)",
      textDecoration: "none"
    }
  }, "Home"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "mv-link",
    style: {
      color: "var(--mv-white)",
      textDecoration: "none"
    }
  }, "Natural Beard Oil"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", null, "AXE & OAK BEARD OIL")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 44,
      marginTop: 23
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + "pdp-axe-oak-oil.png",
    alt: "Axe & Oak beard oil bottle",
    style: {
      width: "100%",
      aspectRatio: "1",
      objectFit: "cover",
      display: "block",
      background: "var(--mv-black)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: "39px 0 0 0"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--text-hero)",
      letterSpacing: "var(--text-hero-tracking)",
      lineHeight: 1.2,
      textTransform: "uppercase"
    }
  }, "AXE & OAK BEARD OIL"), /*#__PURE__*/React.createElement(__ds_scope.StarRating, {
    rating: 4.95,
    count: 123,
    style: {
      margin: "14px 0 22px"
    }
  }), /*#__PURE__*/React.createElement(BuyBox, {
    onAdd: onAdd
  }), /*#__PURE__*/React.createElement("img", {
    src: IMG + "pdp-feature-icons-strip.png",
    alt: "All natural \xB7 handmade \xB7 made in USA feature badges",
    style: {
      width: "100%",
      marginTop: 30,
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      fontSize: 14.1,
      lineHeight: "29.8px",
      letterSpacing: "0.9px"
    }
  }, "AXE & OAK BEARD OIL [2oz]"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontSize: 13.8,
      lineHeight: "25.2px",
      letterSpacing: "0.9px"
    }
  }, "Rosewood and sandalwood add a touch of exotic to this scent, and the addition of amber and eastern spices creates depth and mystery while notes such as vanilla add a smooth silkiness, resulting in a powerful fragrance that's hard to resist."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "29px 0 0",
      fontSize: 13.8,
      lineHeight: "25.2px",
      letterSpacing: "0.9px",
      textTransform: "uppercase"
    }
  }, "SCENT PROFILE: NOTES OF OUD WOOD, SANDALWOOD, EASTERN SPICES WITH AMBER, VANILLA, AND ROSEWOOD."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "29px 0 8px",
      fontSize: 13.8,
      letterSpacing: "0.9px",
      textTransform: "uppercase"
    }
  }, "KEY BENEFITS:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: "0 0 0 30px",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontSize: 13,
      letterSpacing: "0.9px"
    }
  }, /*#__PURE__*/React.createElement("li", null, "ALL NATURAL"), /*#__PURE__*/React.createElement("li", null, "NON GREASY"), /*#__PURE__*/React.createElement("li", null, "EASY TO APPLY"), /*#__PURE__*/React.createElement("li", null, "RELIEVES DRY SKIN"), /*#__PURE__*/React.createElement("li", null, "LOCKS IN MOISTURE FOR SKIN AND BEARD"), /*#__PURE__*/React.createElement("li", null, "STOPS BEARD DANDRUFF"), /*#__PURE__*/React.createElement("li", null, "KILLS THE BEARD ITCH"), /*#__PURE__*/React.createElement("li", null, "PROMOTES STRONG & HEALTHY GROWTH"), /*#__PURE__*/React.createElement("li", null, "#LIVEBYTHEAXE")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Accordion, {
    title: "Beard Oil Ingredients",
    defaultOpen: true
  }, "All of our oils contain the following six nutrient rich carrier oils to help maintain, condition, and promote the healthy growth of your beard without looking or feeling greasy. Simply put, Mad Viking Beard Oil is just better for your beard.", /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "14px 0 0",
      paddingLeft: 30,
      display: "flex",
      flexDirection: "column",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("li", null, "Sweet Almond Oil Organic (cold pressed) / Scientific Name: Prunus amygdalus"), /*#__PURE__*/React.createElement("li", null, "Jojoba Oil Golden Organic (cold pressed) / Scientific Name: Simmondsia chinensis"), /*#__PURE__*/React.createElement("li", null, "Argan Oil Virgin (cold pressed) / Scientific Name: Argania spinose"), /*#__PURE__*/React.createElement("li", null, "Abyssinian Oil / Scientific Name: Crambe Abyssinica"), /*#__PURE__*/React.createElement("li", null, "Grapeseed Oil Organic (cold pressed) / Scientific Name: Vitis vinifera"), /*#__PURE__*/React.createElement("li", null, "Vitamin E Oil (Alpha Tocopherol)"))), /*#__PURE__*/React.createElement(__ds_scope.Accordion, {
    title: "Shipping and Return",
    style: {
      marginTop: -1
    }
  }, "Free shipping on orders over $75. Returns and exchanges accepted within 30 days."), /*#__PURE__*/React.createElement(__ds_scope.Accordion, {
    title: "GOVX ID Military Discount",
    style: {
      marginTop: -1
    }
  }, "We offer a 30% discount to all Military active duty/veterans and all first responders and frontline workers via GovX ID.")))));
}
Object.assign(__ds_scope, { ProductPage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ScentsPage.jsx
try { (() => {
/** Shop By Scent — 16-scent grid with note tags, occasions, and per-scent CTA. */
const FAM = {
  woody: "oklch(0.36 0.06 55)",
  warm: "oklch(0.38 0.08 45)",
  spiced: "oklch(0.40 0.10 40)",
  fresh: "oklch(0.38 0.08 150)",
  citrus: "oklch(0.42 0.09 125)",
  light: "oklch(0.40 0.06 160)",
  spicy: "oklch(0.36 0.12 25)",
  rich: "oklch(0.33 0.10 20)",
  bold: "oklch(0.40 0.16 27)",
  cool: "oklch(0.38 0.06 235)",
  aromatic: "oklch(0.40 0.06 220)",
  clean: "oklch(0.40 0.04 230)",
  sweet: "oklch(0.34 0.10 10)",
  smooth: "oklch(0.35 0.07 300)",
  smoky: "oklch(0.32 0.03 60)",
  neutral: "oklch(0.36 0 0)"
};
const P = {
  tree: "M12 3l5 6h-3l4 5h-3l3 4H6l3-4H6l4-5H7zM12 18v3",
  moon: "M16 4a8 8 0 1 0 4 12 7 7 0 0 1-4-12z",
  heart: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z",
  sun: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2",
  mountain: "M2 20l7-11 4 6 3-4 6 9z",
  flame: "M12 3c1 4 5 6 5 11a5 5 0 0 1-10 0c0-3 2-4 2-7 2 1 3 3 3 5",
  glass: "M7 3h10l-1 8a4 4 0 0 1-8 0zM12 15v5M8 21h8",
  leaf: "M5 19C5 10 11 5 20 4c-1 9-6 15-15 15zM5 19l8-8",
  crown: "M3 8l4 4 5-7 5 7 4-4-2 11H5z",
  snow: "M12 2v20M3 7l18 10M21 7L3 17",
  axe: "M6 21L17 6M14 3c3 0 6 3 6 6l-4 1-3-3z",
  drop: "M12 3c3 5 6 8 6 12a6 6 0 0 1-12 0c0-4 3-7 6-12z"
};
const OCC = {
  outdoor: ["tree", "Outdoor"],
  evening: ["moon", "Evening"],
  date: ["heart", "Date Night"],
  everyday: ["sun", "Everyday"],
  adventure: ["mountain", "Adventure"],
  fireside: ["flame", "Fireside"],
  night: ["glass", "Night Out"],
  casual: ["leaf", "Casual"],
  signature: ["crown", "Signature"],
  cold: ["snow", "Cold Weather"],
  work: ["axe", "Workday"],
  sensitive: ["drop", "Sensitive Skin"],
  warmwx: ["sun", "Warm Weather"]
};
const SCENTS = [["axe-oak", "Axe & Oak", "Oud Wood • Sandalwood • Amber • Vanilla", ["woody", "warm", "spiced"], ["outdoor", "evening", "date"], "A bold and refined blend of oud wood, sandalwood, eastern spices, amber, vanilla and rosewood."], ["dragonshead", "Dragonshead", "Coconut • Lime • Tropical", ["fresh", "citrus", "light"], ["warmwx", "everyday", "casual"], "An essential summer scent with smooth notes of coconut and light top notes of lime."], ["fenrir", "Fenrir", "Pink Pepper • Rum • Tobacco • Vetiver", ["spicy", "rich", "bold"], ["evening", "night", "date"], "A complex blend of pink pepper, neroli, rum, bourbon, java vetiver and tobacco leaf."], ["fjord", "Fjord", "Cardamom • Mint • Orange Blossom", ["cool", "aromatic", "clean"], ["outdoor", "everyday", "work"], "A masculine cologne scent with notes of cardamom, mint, orange blossom, cedarwood and sandalwood."], ["the-orchard", "The Orchard", "Red Apple • Vanilla", ["sweet", "fresh", "smooth"], ["everyday", "casual", "cold"], "A scent straight from the orchard. Red apples with a hint of vanilla."], ["yggdrasil", "Yggdrasil", "Pine • Citrus", ["fresh", "woody", "citrus"], ["outdoor", "everyday", "adventure"], "Heavy pine with a light, crisp citrus note."], ["the-hollow", "The Hollow", "Tobacco Flower • Vanilla • Vetiver", ["smoky", "warm", "smooth"], ["evening", "date", "signature"], "Notes of tobacco flower, vanilla, vetiver and powdery sandalwood."], ["valhalla", "Valhalla", "Sandalwood • Vanilla", ["woody", "smooth", "warm"], ["signature", "cold", "everyday"], "A powerful blend of exotic sandalwoods and a top note of vanilla."], ["berserker", "Berserker", "Lemongrass • Sandalwood • Patchouli", ["citrus", "woody", "bold"], ["work", "outdoor", "everyday"], "A heavy lemongrass scent on a base of sandalwood with light notes of patchouli."], ["drengr", "Drengr", "Citrus • Mint • Vetiver • Cedarwood", ["fresh", "aromatic", "woody"], ["everyday", "work", "night"], "Notes of citrus, mint, vetiver, amber, oakmoss, cedarwood, ambroxan and musk."], ["hammer-throne", "Hammer & Throne", "Guaiac Wood • Pine Resin • Birch", ["woody", "smoky", "rich"], ["fireside", "cold", "evening"], "Notes of guaiac wood, pine resin, birch and smoky sandalwood."], ["ingen-doft", "Ingen Doft", "Unscented", ["neutral", "clean", "light"], ["sensitive", "everyday", "work"], "Our scentless choice. No essential oils or fragrances added."], ["mjolnir", "Mjolnir", "Sandalwood • Cedarwood • Mint", ["woody", "fresh", "cool"], ["outdoor", "everyday", "work"], "A long-lasting woodsy sandalwood and cedarwood base with light top notes of mint."], ["odins-rok", "Odin's Rok", "Cherry • Pipe Tobacco • Vanilla", ["sweet", "smoky", "warm"], ["fireside", "evening", "cold"], "A cherry and pipe tobacco scent with hints of vanilla."], ["ragnarok", "Ragnarok", "Orange • Lemon • Lime", ["citrus", "fresh", "bold"], ["warmwx", "everyday", "adventure"], "A citrus-heavy scent with orange, lemon and lime essentials."], ["ravn-rom", "Ravn Rom", "Bay Rum • Lime", ["spiced", "citrus", "rich"], ["signature", "night", "everyday"], "An old-school barbershop scent with bay rum and a splash of lime."]].map(([slug, name, notes, tags, occ, desc]) => ({
  slug,
  name,
  notes,
  tags,
  occ,
  desc
}));
const TAG_FAM = {
  cool: "cool",
  neutral: "neutral"
};
const tagLabel = t => t === "cool" ? "Cool" : t === "neutral" ? "Unscented" : t;
function Icon({
  name
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "26",
    height: "26",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinejoin: "round",
    strokeLinecap: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: P[name]
  }));
}
function ScentCard({
  s,
  onShop
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      background: "#0d0d0d",
      border: "1px solid " + (hover ? "#3a3a3a" : "#1f1f1f"),
      transition: "border-color .2s",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16 / 10",
      overflow: "hidden",
      background: "#000"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "scents/" + s.slug + ".jpg",
    alt: s.name + " scent",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: hover ? "scale(1.04)" : "scale(1)",
      transition: "transform .5s"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "18px 18px 20px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 28,
      lineHeight: 1.1,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "#fff"
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "6px 0 0",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "#bdbdbd"
    }
  }, s.notes)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, s.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      padding: "5px 12px",
      borderRadius: 999,
      background: FAM[TAG_FAM[t] || t],
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontSize: 11,
      letterSpacing: "0.1em",
      textTransform: "uppercase"
    }
  }, tagLabel(t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0,1fr))",
      gap: 4,
      padding: "6px 0",
      borderTop: "1px solid #1f1f1f",
      borderBottom: "1px solid #1f1f1f"
    }
  }, s.occ.map(o => /*#__PURE__*/React.createElement("div", {
    key: o,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      padding: "8px 0",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: OCC[o][0]
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "#d6d6d6",
      textAlign: "center"
    }
  }, OCC[o][1])))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: 1.5,
      color: "#d6d6d6",
      flex: 1,
      textWrap: "pretty"
    }
  }, s.desc), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onShop && onShop(s);
    },
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      height: 44,
      border: "1px solid " + (hover ? "var(--mv-red)" : "#fff"),
      background: hover ? "var(--mv-red)" : "transparent",
      color: "#fff",
      textDecoration: "none",
      fontFamily: "var(--font-display)",
      fontSize: 14,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      transition: "background .2s, border-color .2s"
    }
  }, "Shop ", s.name, " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"))));
}
function ScentsPage({
  onNavigate
}) {
  const [all, setAll] = React.useState(false);
  const list = all ? SCENTS : SCENTS.slice(0, 8);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: "var(--mv-black)",
      color: "#fff",
      padding: "64px 24px 96px"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      textAlign: "center",
      maxWidth: 820,
      margin: "0 auto 48px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "clamp(44px, 6vw, 72px)",
      lineHeight: 1,
      letterSpacing: "0.06em",
      textTransform: "uppercase"
    }
  }, "Shop By Scent"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "18px 0 0",
      fontFamily: "var(--font-body)",
      fontSize: 18,
      lineHeight: 1.5,
      color: "#d6d6d6",
      textWrap: "pretty"
    }
  }, "We offer 16 different scents that are available in most of our beard care, body care and hair products.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
      gap: 16,
      maxWidth: 1360,
      margin: "0 auto"
    }
  }, list.map(s => /*#__PURE__*/React.createElement(ScentCard, {
    key: s.slug,
    s: s,
    onShop: () => onNavigate && onNavigate("pdp")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setAll(v => !v),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      height: 52,
      padding: "0 36px",
      background: "transparent",
      border: "1px solid #fff",
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontSize: 16,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      cursor: "pointer"
    }
  }, all ? "Show fewer scents" : "Explore all 16 scents", " ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, all ? "↑" : "→"))));
}
Object.assign(__ds_scope, { SCENTS, ScentsPage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ScentsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/SiteFooter.jsx
try { (() => {
const col = (title, links) => /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    padding: "0 22px"
  }
}, /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-eyebrow)",
    letterSpacing: "var(--text-eyebrow-tracking)",
    textTransform: "uppercase",
    color: "var(--mv-white)"
  }
}, title), /*#__PURE__*/React.createElement("ul", {
  style: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: 10
  }
}, links.map(l => /*#__PURE__*/React.createElement("li", {
  key: l
}, /*#__PURE__*/React.createElement("a", {
  href: "#",
  className: "mv-link",
  style: {
    fontFamily: "var(--font-body)",
    fontSize: 10.5,
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    color: "var(--mv-white)",
    textDecoration: "none"
  }
}, l)))));

/** Black site footer: 3 uppercase link columns, wordmark, payment row, hashtag. */
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--mv-black)",
      border: "1px solid var(--mv-border)",
      padding: "60px 40px",
      fontFamily: "var(--font-body)",
      color: "var(--mv-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      maxWidth: 1382,
      margin: "0 auto"
    }
  }, col("Shop", ["SHOP BY SCENT", "ALL PRODUCTS", "BEARD CARE", "BODY CARE", "HAIR CARE", "GROOMING TOOLS", "GEAR & APPAREL"]), col("Company News", ["BEARD AFFILIATE PORTAL", "BEARD CLUB LOCATIONS", "LOYALTY & REWARDS", "MILITARY GOVX DISCOUNT", "WHOLESALE PROGRAM", "THE VIKING BLOG", "THE LEGEND"]), col("General Info", ["CONTACT US", "FAQS", "RETURNS & EXCHANGES", "REVIEWS", "SHIPPING & DELIVERY", "PRIVACY POLICY", "TERMS OF SERVICE"])), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1382,
      margin: "40px auto 0",
      padding: "0 22px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark.png",
    alt: "Mad Viking",
    style: {
      width: 148,
      height: 40
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 8,
      marginTop: 30,
      paddingTop: 0
    }
  }, ["VISA", "MC", "AMEX", "DISC", "PAYPAL", "SHOP", "GPAY", "APPLE"].map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    title: "Payment method placeholder",
    style: {
      width: 38,
      height: 24,
      borderRadius: 3,
      background: "rgba(255,255,255,0.12)",
      color: "var(--mv-gray-300)",
      fontSize: 7,
      letterSpacing: "0.5px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, p))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "22px 0 0",
      textAlign: "center",
      fontSize: 9.8,
      letterSpacing: "0.9px"
    }
  }, "\xA9 2026 Mad Viking"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      textAlign: "center",
      fontSize: 9.3,
      letterSpacing: "0.9px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "mv-link",
    style: {
      color: "var(--mv-white)",
      textDecoration: "none"
    }
  }, "#LIVEBYTHEAXE")));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/SiteHeader.jsx
try { (() => {
/**
 * Storefront chrome: countdown announcement bar + sticky 60px black header
 * with crest logo, Fjalla nav, and line icons.
 */
function SiteHeader({
  onNavigate,
  onCart,
  current = "home"
}) {
  const icon = (src, alt, onClick) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (onClick) onClick();
    },
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 42,
      height: 43
    },
    "aria-label": alt
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: 26,
      height: 26
    }
  }));
  const go = screen => e => {
    e.preventDefault();
    if (onNavigate) onNavigate(screen);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.AnnouncementBar, {
    hours: 9,
    minutes: 36,
    seconds: 58
  }), /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 60,
      padding: "10px 28px 10px 40px",
      background: "var(--mv-black)",
      boxShadow: "var(--shadow-header)",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: go("home"),
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-shield.png",
    alt: "Mad Viking Beard Co.",
    style: {
      width: 70,
      height: 77,
      position: "relative",
      zIndex: 51
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.NavLink, {
    label: "Best Offer",
    href: "#",
    style: {
      fontSize: 16
    }
  }, "BUNDLES"), /*#__PURE__*/React.createElement(__ds_scope.NavLink, {
    href: "#",
    onClick: go("pdp"),
    style: {
      fontSize: 16
    }
  }, "BEARD CARE"), /*#__PURE__*/React.createElement(__ds_scope.NavLink, {
    href: "#",
    style: {
      fontSize: 16
    }
  }, "BODY"), /*#__PURE__*/React.createElement(__ds_scope.NavLink, {
    href: "#",
    style: {
      fontSize: 16
    }
  }, "HAIR"), /*#__PURE__*/React.createElement(__ds_scope.NavLink, {
    href: "#",
    style: {
      fontSize: 16
    }
  }, "GROOMING TOOLS"), /*#__PURE__*/React.createElement(__ds_scope.NavLink, {
    href: "#",
    style: {
      fontSize: 16
    }
  }, "GEAR"), /*#__PURE__*/React.createElement(__ds_scope.NavLink, {
    href: "#",
    onClick: go("scents"),
    style: {
      fontSize: 16
    }
  }, "SCENTS")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, icon("../../assets/icons/icon-search.svg", "Search"), icon("../../assets/icons/icon-account.svg", "Account"), icon("../../assets/icons/icon-cart.svg", "Cart", onCart))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.AnnouncementBar = __ds_scope.AnnouncementBar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.CartDrawer = __ds_scope.CartDrawer;

__ds_ns.HomePage = __ds_scope.HomePage;

__ds_ns.ProductPage = __ds_scope.ProductPage;

__ds_ns.SCENTS = __ds_scope.SCENTS;

__ds_ns.ScentsPage = __ds_scope.ScentsPage;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
