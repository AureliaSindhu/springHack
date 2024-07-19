import {
  DropdownMenu_default,
  DropdownToggle_default,
  Dropdown_default,
  alignPropType,
  require_jsx_runtime,
  require_prop_types
} from "./chunk-T6NYMWNH.js";
import {
  require_react
} from "./chunk-WNPTCGAH.js";
import {
  __toESM
} from "./chunk-5WRI5ZAA.js";

// node_modules/react-bootstrap/esm/DropdownButton.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string}
   */
  id: import_prop_types.default.string,
  /** An `href` passed to the Toggle component */
  href: import_prop_types.default.string,
  /** An `onClick` handler passed to the Toggle component */
  onClick: import_prop_types.default.func,
  /** The content of the non-toggle Button.  */
  title: import_prop_types.default.node.isRequired,
  /** Disables both Buttons  */
  disabled: import_prop_types.default.bool,
  /**
   * Aligns the dropdown menu.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} }
   */
  align: alignPropType,
  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: import_prop_types.default.string,
  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: import_prop_types.default.bool,
  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: import_prop_types.default.string,
  /**
   * Menu color variant.
   *
   * Omitting this will use the default light color.
   */
  menuVariant: import_prop_types.default.oneOf(["dark"]),
  /**
   * Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to
   * Popper.js's flip [docs](https://popper.js.org/docs/v2/modifiers/flip/).
   *
   */
  flip: import_prop_types.default.bool,
  /** @ignore */
  bsPrefix: import_prop_types.default.string,
  /** @ignore */
  variant: import_prop_types.default.string,
  /** @ignore */
  size: import_prop_types.default.string
};
var DropdownButton = React.forwardRef(({
  title,
  children,
  bsPrefix,
  rootCloseEvent,
  variant,
  size,
  menuRole,
  renderMenuOnMount,
  disabled,
  href,
  id,
  menuVariant,
  flip,
  ...props
}, ref) => (0, import_jsx_runtime2.jsxs)(Dropdown_default, {
  ref,
  ...props,
  children: [(0, import_jsx_runtime.jsx)(DropdownToggle_default, {
    id,
    href,
    size,
    variant,
    disabled,
    childBsPrefix: bsPrefix,
    children: title
  }), (0, import_jsx_runtime.jsx)(DropdownMenu_default, {
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent,
    variant: menuVariant,
    flip,
    children
  })]
}));
DropdownButton.displayName = "DropdownButton";
DropdownButton.propTypes = propTypes;
var DropdownButton_default = DropdownButton;
export {
  DropdownButton_default as default
};
//# sourceMappingURL=react-bootstrap_DropdownButton.js.map
