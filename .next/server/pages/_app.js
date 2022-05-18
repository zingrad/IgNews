(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 588:
/***/ ((module) => {

// Exports
module.exports = {
	"headerContainer": "styles_headerContainer__uAgJk",
	"headerContent": "styles_headerContent__h9eUe",
	"active": "styles_active__l7I1o"
};


/***/ }),

/***/ 154:
/***/ ((module) => {

// Exports
module.exports = {
	"singInButton": "styles_singInButton__YbuhD",
	"closeIcon": "styles_closeIcon__yr0aw"
};


/***/ }),

/***/ 640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
// EXTERNAL MODULE: ./src/components/SignInButton/styles.module.scss
var styles_module = __webpack_require__(154);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
;// CONCATENATED MODULE: ./src/components/SignInButton/index.tsx




function SignInButton() {
    const isUsserLoggedIn = true;
    return isUsserLoggedIn ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: (styles_module_default()).singInButton,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaGithub, {
                color: "#04d361"
            }),
            "Erick Gomes",
            /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiX, {
                color: "#737380",
                className: (styles_module_default()).closeIcon
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: "button",
        className: (styles_module_default()).singInButton,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaGithub, {
                color: "#eba417"
            }),
            "Sign in with Github"
        ]
    });
}

// EXTERNAL MODULE: ./src/components/Header/styles.module.scss
var Header_styles_module = __webpack_require__(588);
var Header_styles_module_default = /*#__PURE__*/__webpack_require__.n(Header_styles_module);
;// CONCATENATED MODULE: ./src/components/Header/index.tsx



function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (Header_styles_module_default()).headerContainer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Header_styles_module_default()).headerContent,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/images/logo.svg",
                    alt: "ig.news"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: (Header_styles_module_default()).active,
                            href: "",
                            children: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "",
                            children: "Posts"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SignInButton, {})
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/pages/_app.tsx



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(640));
module.exports = __webpack_exports__;

})();