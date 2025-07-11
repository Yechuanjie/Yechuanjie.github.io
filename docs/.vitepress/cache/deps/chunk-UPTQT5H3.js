import {
  genComponentStyleHook
} from "./chunk-UUD6RWM4.js";

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.17/node_modules/ant-design-vue/es/space/style/compact.js
var genSpaceCompactStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
};
var compact_default = genSpaceCompactStyle;

// node_modules/.pnpm/ant-design-vue@4.2.6_vue@3.5.17/node_modules/ant-design-vue/es/space/style/index.js
var genSpaceStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${componentCls}-item`]: {
        "&:empty": {
          display: "none"
        }
      }
    }
  };
};
var style_default = genComponentStyleHook("Space", (token) => [genSpaceStyle(token), compact_default(token)]);

export {
  style_default
};
//# sourceMappingURL=chunk-UPTQT5H3.js.map
