(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 635:
/***/ ((module) => {

// Exports
module.exports = {
	"subscribeButton": "styles_subscribeButton__ZN_28"
};


/***/ }),

/***/ 180:
/***/ ((module) => {

// Exports
module.exports = {
	"contentContainer": "home_contentContainer__HYuN8",
	"hero": "home_hero__lhpWS"
};


/***/ }),

/***/ 265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "stripe"
const external_stripe_namespaceObject = require("stripe");
var external_stripe_default = /*#__PURE__*/__webpack_require__.n(external_stripe_namespaceObject);
;// CONCATENATED MODULE: ./package.json
const package_namespaceObject = {"i8":"0.1.0"};
;// CONCATENATED MODULE: ./src/services/stripe.ts


const stripe = new (external_stripe_default())(process.env.STRIPE_API_KEY, {
    apiVersion: "2020-08-27",
    appInfo: {
        name: "Ignews",
        version: package_namespaceObject.i8
    }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/components/SignInButton/Subscribebutton/styles.module.scss
var styles_module = __webpack_require__(635);
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);
;// CONCATENATED MODULE: ./src/components/SignInButton/Subscribebutton/index.tsx


function SubscribeButton({ priceId  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        type: "button",
        className: (styles_module_default()).subscribeButton,
        children: "Subscribe now"
    });
}

// EXTERNAL MODULE: ./src/pages/home.module.scss
var home_module = __webpack_require__(180);
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);
;// CONCATENATED MODULE: ./src/pages/index.tsx






function Home({ product  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Home | ig.news"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (home_module_default()).contentContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: (home_module_default()).hero,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "\uD83D\uDC4F Hey, welcome"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                children: [
                                    "News aboult",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    " the ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "React"
                                    }),
                                    " world."
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Get access to all the publications  for ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "   ",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                product.amount,
                                                " month"
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SubscribeButton, {
                                priceId: product.priceId
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/images/avatar.svg",
                        alt: "Girl Coding"
                    })
                ]
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const price = await stripe.prices.retrieve("price_1KvWAzAnvbEtSNXFR37MNCSe");
    const product = {
        priceId: price.id,
        amount: Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(price.unit_amount / 100)
    };
    return {
        props: {
            product
        },
        revalidate: 60 * 60 * 24
    };
};


/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__(265));
module.exports = __webpack_exports__;

})();