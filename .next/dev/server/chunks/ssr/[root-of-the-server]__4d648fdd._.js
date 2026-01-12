module.exports = [
"[project]/src/app/home-1/GDPRCookie.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const GDPRCookie = ({ settings })=>{
    const defaultSettings = {
        cookieName: "userCookiePrefs",
        expires: 90,
        cookieTypes: [
            {
                type: "Essential",
                value: "essential",
                description: "Necessary for site functionality",
                checked: true
            },
            {
                type: "Preferences",
                value: "preferences",
                description: "Saves your site preferences",
                checked: true
            },
            {
                type: "Analytics",
                value: "analytics",
                description: "Helps us improve site usage",
                checked: false
            },
            {
                type: "Marketing",
                value: "marketing",
                description: "Personalized advertising",
                checked: false
            }
        ],
        title: "Accept Cookies & privacy",
        message: "This site uses cookies to improve your experience. You can customize your preferences.",
        acceptBtnLabel: "Accept All Cookies",
        advancedBtnLabel: "Manage Preferences"
    };
    const mergedSettings = {
        ...defaultSettings,
        ...settings
    };
    const [showBanner, setShowBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isAdvanced, setIsAdvanced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [cookiePreferences, setCookiePreferences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedPreferences = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(mergedSettings.cookieName);
        if (!savedPreferences) {
            setShowBanner(true);
        } else {
            setCookiePreferences(JSON.parse(savedPreferences));
        }
    }, []);
    const handleAcceptAll = ()=>{
        const acceptedPreferences = mergedSettings.cookieTypes.reduce((acc, cookie)=>{
            acc[cookie.value] = true;
            return acc;
        }, {});
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].set(mergedSettings.cookieName, JSON.stringify(acceptedPreferences), {
            expires: mergedSettings.expires
        });
        setShowBanner(false);
    };
    const handleCustomize = ()=>{
        setIsAdvanced(!isAdvanced);
    };
    const handlePreferenceChange = (type)=>{
        setCookiePreferences((prev)=>{
            const updatedPreferences = {
                ...prev,
                [type]: !prev[type]
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].set(mergedSettings.cookieName, JSON.stringify(updatedPreferences), {
                expires: mergedSettings.expires
            });
            return updatedPreferences;
        });
    };
    if (!showBanner) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "gdpr-cookie-banner",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: mergedSettings.title
            }, void 0, false, {
                fileName: "[project]/src/app/home-1/GDPRCookie.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: mergedSettings.message
            }, void 0, false, {
                fileName: "[project]/src/app/home-1/GDPRCookie.jsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isAdvanced && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: mergedSettings.cookieTypes.map((cookie)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: cookiePreferences[cookie.value] ?? cookie.checked,
                                disabled: cookie.value === "essential",
                                onChange: ()=>handlePreferenceChange(cookie.value)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/GDPRCookie.jsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            cookie.type
                        ]
                    }, cookie.value, true, {
                        fileName: "[project]/src/app/home-1/GDPRCookie.jsx",
                        lineNumber: 74,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/home-1/GDPRCookie.jsx",
                lineNumber: 72,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleAcceptAll,
                children: mergedSettings.acceptBtnLabel
            }, void 0, false, {
                fileName: "[project]/src/app/home-1/GDPRCookie.jsx",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleCustomize,
                children: mergedSettings.advancedBtnLabel
            }, void 0, false, {
                fileName: "[project]/src/app/home-1/GDPRCookie.jsx",
                lineNumber: 88,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/home-1/GDPRCookie.jsx",
        lineNumber: 67,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = GDPRCookie;
}),
"[project]/src/app/home-1/TopBar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function TopBar() {
    const [hydrated, setHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "header__top",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `container ${hydrated && isSticky ? "is__sticky" : ""}`,
                style: {
                    position: "fixed",
                    left: 0,
                    right: 0,
                    zIndex: 998,
                    transition: "all 0.3s ease",
                    transform: hydrated && isSticky ? "translateY(0)" : "translateY(-100%)",
                    background: hydrated && isSticky ? "rgba(255, 255, 255, 0.98)" : "transparent",
                    backdropFilter: hydrated && isSticky ? "blur(10px)" : "none",
                    boxShadow: hydrated && isSticky ? "0 2px 10px rgba(0,0,0,0.05)" : "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row justify-content-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-6 col-md-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "social__links",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: "link__item gap-10",
                                        href: "callto: +94 77 448 48 48",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "flaticon-phone-flip"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/TopBar.jsx",
                                                lineNumber: 37,
                                                columnNumber: 19
                                            }, this),
                                            " +94 77 448 48 48 (SL)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/home-1/TopBar.jsx",
                                        lineNumber: 33,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: "link__item gap-10",
                                        href: "callto:+1 312-242-1662",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/TopBar.jsx",
                                                lineNumber: 43,
                                                columnNumber: 19
                                            }, this),
                                            " +1 312-242-1662 (USA)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/home-1/TopBar.jsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: "link__item gap-10",
                                        href: "mailto: info@raindrops.lk",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "flaticon-envelope"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/TopBar.jsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this),
                                            " info@raindrops.lk"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/home-1/TopBar.jsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home-1/TopBar.jsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/home-1/TopBar.jsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-6 col-md-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "location",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "link__item gap-10",
                                    href: "/",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "flaticon-marker"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-1/TopBar.jsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, this),
                                        "Sinharaja, Dolagahawaththa, Mederipitiya, Deniyaya"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home-1/TopBar.jsx",
                                    lineNumber: 55,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/TopBar.jsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/home-1/TopBar.jsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/home-1/TopBar.jsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home-1/TopBar.jsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/home-1/TopBar.jsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
const __TURBOPACK__default__export__ = TopBar;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/home-1/OffcanvasMenu.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function OffcanvasMenu({ isOpen, onClose }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeMenu, setActiveMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeSubMenu, setActiveSubMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Toggle the active state of main dropdown menu
    const toggleMenu = (index)=>{
        setActiveMenu(activeMenu === index ? null : index);
        setActiveSubMenu(null); // Reset submenu when main menu changes
    };
    // Toggle the active state of submenu
    const toggleSubMenu = (index)=>{
        setActiveSubMenu(activeSubMenu === index ? null : index);
    };
    // FIXED: Navigation handler that scrolls to top
    const handleNavigation = (e, href)=>{
        e.preventDefault();
        // Close the menu first
        onClose();
        // Scroll to top immediately
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
        // Navigate to the page
        router.push(href);
    };
    // FIXED: Handle home navigation with scroll to top
    const handleHomeNavigation = (e)=>{
        e.preventDefault();
        onClose();
        // Scroll to top immediately
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
        // Navigate to home
        router.push("/");
    };
    // Handle regular link clicks (no navigation needed)
    const handleLinkClick = (e)=>{
        e.preventDefault();
        onClose();
        // Scroll to top for same-page links
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `offcanvas offcanvas-start ${isOpen ? "show" : ""}`,
        style: {
            visibility: isOpen ? "visible" : "hidden"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rts__btstrp__offcanvase",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "offcanvase__wrapper",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "left__side mobile__menu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn-close btn-close-white",
                                onClick: onClose,
                                "aria-label": "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "offcanvase__top",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "offcanvase__logo",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            onClick: handleHomeNavigation,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/images/logo/logo-white.png",
                                                alt: "logo",
                                                style: {
                                                    width: 130,
                                                    height: 50
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "description",
                                        children: "Welcome to Rain drops, where luxury meets comfort."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "offcanvase__mobile__menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mobile__menu__active",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: "mobile__menu__nav",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "list-unstyled",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "slide",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "slide__menu__item",
                                                        href: "/",
                                                        onClick: handleHomeNavigation,
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "space-between"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Home"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                lineNumber: 110,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    width: "15px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                lineNumber: 111,
                                                                columnNumber: 25
                                                            }, this),
                                                            " "
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                        lineNumber: 100,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                    lineNumber: 99,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: `slide has__children ${activeMenu === 1 ? "active" : ""}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "slide__menu__item",
                                                            style: {
                                                                display: "flex",
                                                                justifyContent: "space-between",
                                                                alignItems: "center",
                                                                cursor: "pointer",
                                                                padding: "10px 0"
                                                            },
                                                            onClick: ()=>toggleMenu(1),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "About"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                    lineNumber: 133,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "toggle",
                                                                    children: activeMenu === 1 ? "" : ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                    lineNumber: 134,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        marginRight: "-250px"
                                                                    },
                                                                    children: activeMenu === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fa-solid fa-minus",
                                                                        style: {
                                                                            fontSize: "12px",
                                                                            lineHeight: "1",
                                                                            verticalAlign: "middle"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                        lineNumber: 144,
                                                                        columnNumber: 29
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: "fa-solid fa-plus",
                                                                        style: {
                                                                            fontSize: "12px",
                                                                            lineHeight: "1",
                                                                            verticalAlign: "middle"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                        lineNumber: 153,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                    lineNumber: 138,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                            lineNumber: 122,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "slide__menu",
                                                            style: {
                                                                display: activeMenu === 1 ? "block" : "none"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: `has__children ${activeSubMenu === 1 ? "active" : ""}`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "slide__menu__item",
                                                                            style: {
                                                                                marginRight: "10px"
                                                                            },
                                                                            onClick: (e)=>{
                                                                                e.preventDefault();
                                                                                toggleSubMenu(1);
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "About Us"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                                    lineNumber: 184,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "toggle",
                                                                                    children: activeMenu === 1 ? "" : ""
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                                    lineNumber: 185,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                            lineNumber: 174,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            className: "sub-submenu sub__style",
                                                                            style: {
                                                                                display: activeSubMenu === 1 ? "block" : "none",
                                                                                paddingLeft: "30px"
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    role: "menuitem",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                        href: "/about",
                                                                                        onClick: (e)=>handleNavigation(e, "/about"),
                                                                                        style: {
                                                                                            display: "block",
                                                                                            padding: "5px 0"
                                                                                        },
                                                                                        children: "The Story"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                                        lineNumber: 198,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                                    lineNumber: 197,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    role: "menuitem",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                        href: "/Insight",
                                                                                        onClick: (e)=>handleNavigation(e, "/Insight"),
                                                                                        style: {
                                                                                            display: "block",
                                                                                            padding: "5px 0"
                                                                                        },
                                                                                        children: "Insight Partners (You)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                                        lineNumber: 207,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                                    lineNumber: 206,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                            lineNumber: 190,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                    lineNumber: 169,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    role: "menuitem",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/srilanka",
                                                                        onClick: (e)=>handleNavigation(e, "/srilanka"),
                                                                        style: {
                                                                            display: "block",
                                                                            padding: "8px 0",
                                                                            marginLeft: "15px"
                                                                        },
                                                                        children: "Beautiful Sri Lanka"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                        lineNumber: 220,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    role: "menuitem",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/privacy",
                                                                        onClick: (e)=>handleNavigation(e, "/privacy"),
                                                                        style: {
                                                                            display: "block",
                                                                            padding: "8px 0",
                                                                            marginLeft: "15px"
                                                                        },
                                                                        children: "Privacy & Policy"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                        lineNumber: 233,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                    lineNumber: 232,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    role: "menuitem",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/contact",
                                                                        onClick: (e)=>handleNavigation(e, "/contact"),
                                                                        style: {
                                                                            display: "block",
                                                                            padding: "8px 0",
                                                                            marginLeft: "15px"
                                                                        },
                                                                        children: "Contact Us"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                        lineNumber: 246,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    role: "menuitem",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/weather",
                                                                        onClick: (e)=>handleNavigation(e, "/weather"),
                                                                        style: {
                                                                            display: "block",
                                                                            padding: "8px 0",
                                                                            marginLeft: "15px"
                                                                        },
                                                                        children: "Location & Weather"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                        lineNumber: 259,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                    lineNumber: 258,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                            lineNumber: 164,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                    lineNumber: 117,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "slide",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "slide__menu__item",
                                                        href: "/neuroscience",
                                                        onClick: (e)=>handleNavigation(e, "/neuroscience"),
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "space-between"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Wellness"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                lineNumber: 286,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    width: "15px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                lineNumber: 287,
                                                                columnNumber: 25
                                                            }, this),
                                                            " "
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                        lineNumber: 276,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                    lineNumber: 275,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "slide",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "slide__menu__item",
                                                        href: "/dining",
                                                        onClick: (e)=>handleNavigation(e, "/dining"),
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "space-between"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Dining"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                lineNumber: 302,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    width: "15px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                lineNumber: 303,
                                                                columnNumber: 25
                                                            }, this),
                                                            " "
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                        lineNumber: 292,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                    lineNumber: 291,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "slide",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "slide__menu__item",
                                                        href: "/research",
                                                        onClick: (e)=>handleNavigation(e, "/research"),
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "space-between"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Rain Lab"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                lineNumber: 318,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    width: "15px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                lineNumber: 319,
                                                                columnNumber: 25
                                                            }, this),
                                                            " "
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                        lineNumber: 308,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                    lineNumber: 307,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "slide",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "slide__menu__item",
                                                        href: "/room-home",
                                                        onClick: (e)=>handleNavigation(e, "/room-home"),
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "space-between"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Rooms"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                lineNumber: 335,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    width: "15px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                lineNumber: 336,
                                                                columnNumber: 25
                                                            }, this),
                                                            " "
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                        lineNumber: 325,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                    lineNumber: 324,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "slide",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "slide__menu__item",
                                                        href: "/gallery",
                                                        onClick: (e)=>handleNavigation(e, "/gallery"),
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "space-between"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Gallery"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                lineNumber: 353,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    width: "15px"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                lineNumber: 354,
                                                                columnNumber: 25
                                                            }, this),
                                                            " "
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                        lineNumber: 343,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                    lineNumber: 342,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                            lineNumber: 97,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                        lineNumber: 96,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "offcanvase__bottom",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "offcanvase__address",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h6",
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                    lineNumber: 365,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "tel:+1312242162",
                                                    onClick: handleLinkClick,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "flaticon-phone-flip"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                            lineNumber: 367,
                                                            columnNumber: 21
                                                        }, this),
                                                        "USA: +1 312 242 1662"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                    lineNumber: 366,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "tel:+94774484848",
                                                    onClick: handleLinkClick,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "flaticon-phone-flip"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                            lineNumber: 371,
                                                            columnNumber: 21
                                                        }, this),
                                                        " SriLanka: +94 774 48 48 48"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                    lineNumber: 370,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                            lineNumber: 364,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h6",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                    lineNumber: 377,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "mailto:info@raindrops.lk",
                                                    onClick: handleLinkClick,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "flaticon-envelope"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                            lineNumber: 382,
                                                            columnNumber: 21
                                                        }, this),
                                                        "info@raindrops.lk"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                    lineNumber: 378,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                            lineNumber: 376,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h6",
                                                    children: "Address"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                    lineNumber: 387,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#",
                                                    onClick: handleLinkClick,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "flaticon-marker"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                            lineNumber: 389,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Sinharaja ,Dolagahawaththa ,Mederipitiya ,Deniyaya"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                    lineNumber: 388,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                            lineNumber: 386,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                    lineNumber: 363,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                lineNumber: 362,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "right__side desktop__menu",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn-close btn-close-white",
                                onClick: onClose,
                                "aria-label": "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                lineNumber: 399,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rts__desktop__menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "desktop__menu offcanvas__menu",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-unstyled",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "slide",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "slide__menu__item",
                                                    href: "/",
                                                    onClick: handleHomeNavigation,
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Home"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                            lineNumber: 420,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                width: "15px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                            lineNumber: 421,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                    lineNumber: 410,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                lineNumber: 409,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: `slide has__children ${activeMenu === 1 ? "active" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "slide__menu__item",
                                                        style: {
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                            cursor: "pointer",
                                                            padding: "10px 0"
                                                        },
                                                        onClick: ()=>toggleMenu(1),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "About"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                lineNumber: 442,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    width: "15px",
                                                                    height: "15px"
                                                                },
                                                                children: activeMenu === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "fa-solid fa-minus",
                                                                    style: {
                                                                        fontSize: "12px",
                                                                        lineHeight: "1",
                                                                        verticalAlign: "middle"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                    lineNumber: 453,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "fa-solid fa-plus",
                                                                    style: {
                                                                        fontSize: "12px",
                                                                        lineHeight: "1",
                                                                        verticalAlign: "middle"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                    lineNumber: 462,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                lineNumber: 443,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                        lineNumber: 431,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "slide__menu",
                                                        style: {
                                                            display: activeMenu === 1 ? "block" : "none"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: `has__children ${activeSubMenu === 1 ? "active" : ""}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "slide__menu__item",
                                                                        style: {
                                                                            display: "flex",
                                                                            justifyContent: "space-between",
                                                                            alignItems: "center",
                                                                            cursor: "pointer",
                                                                            padding: "8px 0",
                                                                            marginLeft: "15px"
                                                                        },
                                                                        onClick: (e)=>{
                                                                            e.preventDefault();
                                                                            toggleSubMenu(1);
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "About Us"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                                lineNumber: 497,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    display: "flex",
                                                                                    alignItems: "center",
                                                                                    justifyContent: "center",
                                                                                    width: "15px",
                                                                                    height: "15px"
                                                                                },
                                                                                children: activeSubMenu === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "fa-solid fa-minus",
                                                                                    style: {
                                                                                        fontSize: "10px",
                                                                                        lineHeight: "1",
                                                                                        verticalAlign: "middle"
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                                    lineNumber: 508,
                                                                                    columnNumber: 31
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "fa-solid fa-plus",
                                                                                    style: {
                                                                                        fontSize: "10px",
                                                                                        lineHeight: "1",
                                                                                        verticalAlign: "middle"
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                                    lineNumber: 517,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                                lineNumber: 498,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                        lineNumber: 482,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "sub-submenu sub__style",
                                                                        style: {
                                                                            display: activeSubMenu === 1 ? "block" : "none",
                                                                            paddingLeft: "30px"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/about",
                                                                                    onClick: (e)=>handleNavigation(e, "/about"),
                                                                                    style: {
                                                                                        display: "block",
                                                                                        padding: "5px 0"
                                                                                    },
                                                                                    children: "The Story"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                                    lineNumber: 536,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                                lineNumber: 535,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/Insight",
                                                                                    onClick: (e)=>handleNavigation(e, "/Insight"),
                                                                                    style: {
                                                                                        display: "block",
                                                                                        padding: "5px 0"
                                                                                    },
                                                                                    children: "Insight Partners (You)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                                    lineNumber: 545,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                                lineNumber: 544,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                        lineNumber: 528,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                lineNumber: 477,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/srilanka",
                                                                    onClick: (e)=>handleNavigation(e, "/srilanka"),
                                                                    style: {
                                                                        display: "block",
                                                                        padding: "8px 0",
                                                                        marginLeft: "15px"
                                                                    },
                                                                    children: "Beautiful Sri Lanka"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                    lineNumber: 557,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                lineNumber: 556,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/privacy",
                                                                    onClick: (e)=>handleNavigation(e, "/privacy"),
                                                                    style: {
                                                                        display: "block",
                                                                        padding: "8px 0",
                                                                        marginLeft: "15px"
                                                                    },
                                                                    children: "Privacy & Policy"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                    lineNumber: 570,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                lineNumber: 569,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/contact",
                                                                    onClick: (e)=>handleNavigation(e, "/contact"),
                                                                    style: {
                                                                        display: "block",
                                                                        padding: "8px 0",
                                                                        marginLeft: "15px"
                                                                    },
                                                                    children: "Contact Us"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                    lineNumber: 583,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                lineNumber: 582,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/weather",
                                                                    onClick: (e)=>handleNavigation(e, "/weather"),
                                                                    style: {
                                                                        display: "block",
                                                                        padding: "8px 0",
                                                                        marginLeft: "15px"
                                                                    },
                                                                    children: "Location & Weather"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                    lineNumber: 596,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                                lineNumber: 595,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                        lineNumber: 473,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                lineNumber: 426,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "slide",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "slide__menu__item",
                                                    href: "/neuroscience",
                                                    onClick: (e)=>handleNavigation(e, "/neuroscience"),
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Wellness"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                            lineNumber: 623,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                width: "15px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                            lineNumber: 624,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                    lineNumber: 613,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                lineNumber: 612,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "slide",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "slide__menu__item",
                                                    href: "/room-home",
                                                    onClick: (e)=>handleNavigation(e, "/room-home"),
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Rooms"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                            lineNumber: 640,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                width: "15px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                            lineNumber: 641,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                    lineNumber: 630,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                lineNumber: 629,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "slide",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "slide__menu__item",
                                                    href: "/gallery",
                                                    onClick: (e)=>handleNavigation(e, "/gallery"),
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Gallery"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                            lineNumber: 657,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                width: "15px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                            lineNumber: 658,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                    lineNumber: 647,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                lineNumber: 646,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "slide",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "slide__menu__item",
                                                    href: "/dining",
                                                    onClick: (e)=>handleNavigation(e, "/dining"),
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Dining"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                            lineNumber: 674,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                width: "15px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                            lineNumber: 675,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                    lineNumber: 664,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                lineNumber: 663,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "slide",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "slide__menu__item",
                                                    href: "/research",
                                                    onClick: (e)=>handleNavigation(e, "/research"),
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Rain Lab"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                            lineNumber: 691,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                width: "15px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                            lineNumber: 692,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                    lineNumber: 681,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                                lineNumber: 680,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                        lineNumber: 407,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                    lineNumber: 406,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                                lineNumber: 405,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                        lineNumber: 398,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/home-1/OffcanvasMenu.jsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = OffcanvasMenu;
}),
"[project]/src/app/home-1/SideMenu.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
// SideMenu.js
"use client";
;
;
;
;
function SideMenu({ isOpen, onClose }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [shouldRender, setShouldRender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openNestedDropdown, setOpenNestedDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Timing constants
    const MENU_CLOSE_DELAY = 240;
    const SCROLL_TRY_INTERVAL = 50;
    const MAX_SCROLL_TRIES = 10;
    // Check for mobile screen size
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    // Handle animation timing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setShouldRender(true);
            requestAnimationFrame(()=>{
                requestAnimationFrame(()=>{
                    setIsAnimating(true);
                });
            });
        } else {
            setIsAnimating(false);
            const timer = setTimeout(()=>{
                setShouldRender(false);
                setOpenDropdown(null);
                setOpenNestedDropdown(null);
            }, 600);
            return ()=>clearTimeout(timer);
        }
    }, [
        isOpen
    ]);
    const toggleDropdown = (label)=>{
        setOpenDropdown(openDropdown === label ? null : label);
        // Close nested dropdown when parent closes
        if (openDropdown !== label && openNestedDropdown && openNestedDropdown.startsWith(label)) {
            setOpenNestedDropdown(null);
        }
    };
    const toggleNestedDropdown = (parentLabel, label)=>{
        const dropdownKey = `${parentLabel}-${label}`;
        setOpenNestedDropdown(openNestedDropdown === dropdownKey ? null : dropdownKey);
    };
    // Force scroll-to-top helper
    const forceScrollTop = ()=>{
        try {
            if ("scrollRestoration" in window.history) {
                window.history.scrollRestoration = "manual";
            }
        } catch (e) {
        // ignore
        }
        let tries = 0;
        const id = setInterval(()=>{
            tries += 1;
            try {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "auto"
                });
            } catch (e) {
                window.scrollTo(0, 0);
            }
            if (window.scrollY === 0 || tries >= MAX_SCROLL_TRIES) {
                clearInterval(id);
                try {
                    if ("scrollRestoration" in window.history) {
                        window.history.scrollRestoration = "auto";
                    }
                } catch (e) {
                // ignore
                }
            }
        }, SCROLL_TRY_INTERVAL);
    };
    // Handle navigation with scroll-to-top
    const handleNavigation = (href)=>{
        onClose();
        setTimeout(()=>{
            router.push(href);
            setTimeout(()=>{
                forceScrollTop();
            }, 20);
        }, MENU_CLOSE_DELAY);
    };
    // Menu items with nested dropdown structure
    const menuItems = [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "Rooms",
            href: "/room-home"
        },
        {
            label: "Gallery",
            href: "/gallery"
        },
        {
            label: "Rain Lab",
            href: "/research"
        },
        {
            label: "Wellness",
            href: "/neuroscience"
        },
        {
            label: "Dining",
            href: "/dining"
        },
        {
            label: "About",
            dropdown: [
                {
                    label: "About Us",
                    dropdown: [
                        {
                            label: "The Story",
                            href: "/about"
                        },
                        {
                            label: "Insight Partners (You) ",
                            href: "/Insight"
                        },
                        {
                            label: "Travel Partners",
                            href: "/travelpartners"
                        },
                        {
                            label: "A Living Partnership",
                            href: "/living"
                        }
                    ]
                },
                {
                    label: "Beautiful Sri Lanka",
                    href: "/srilanka"
                },
                {
                    label: "Location & Weather",
                    href: "/weather"
                },
                {
                    label: "Privacy & Policy",
                    href: "/privacy"
                },
                {
                    label: "Contact Us",
                    href: "/contact"
                }
            ]
        }
    ];
    if (!shouldRender) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    maxWidth: isMobile ? "100%" : "1000px",
                    zIndex: 1999,
                    transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    transform: isAnimating ? "translateX(0)" : "translateX(-100%)",
                    background: "#ffffff",
                    overflow: isMobile ? "auto" : "hidden",
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
                    willChange: "transform"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: isMobile ? "100%" : "35%",
                            height: isMobile ? "auto" : "100vh",
                            background: "#000000ff",
                            color: "#ffffffff",
                            display: "flex",
                            flexDirection: "column",
                            transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                            transform: isAnimating ? "translateX(0)" : isMobile ? "translateY(-100%)" : "translateX(-100%)",
                            willChange: "transform",
                            overflowY: isMobile ? "visible" : "auto",
                            overflowX: "hidden",
                            flexShrink: 0,
                            position: "relative"
                        },
                        children: [
                            isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                style: {
                                    position: "absolute",
                                    top: "15px",
                                    right: "15px",
                                    background: "rgba(0, 0, 0, 0.95)",
                                    border: "none",
                                    fontSize: "30px",
                                    cursor: "pointer",
                                    color: "#ffffffff",
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    zIndex: 2001,
                                    opacity: isAnimating ? 1 : 0,
                                    transform: isAnimating ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.8)",
                                    transition: "opacity 0.4s ease 0.4s, transform 0.5s ease 0.4s",
                                    borderRadius: "50%",
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                                    fontWeight: "300"
                                },
                                "aria-label": "Close menu",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: isMobile ? "25px 20px 20px" : "40px 30px 30px",
                                    textAlign: "center",
                                    borderBottom: "1px solid rgba(232, 243, 241, 1)",
                                    opacity: isAnimating ? 1 : 0,
                                    transform: isAnimating ? "translateY(0)" : "translateY(-20px)",
                                    transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
                                    flexShrink: 0,
                                    position: "relative"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>handleNavigation("/"),
                                    style: {
                                        cursor: "pointer"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/assets/images/logo/logo.png",
                                        alt: "Logo",
                                        style: {
                                            width: isMobile ? "150px" : "180px",
                                            height: "auto",
                                            filter: "brightness(0) invert(1)",
                                            marginLeft: isMobile ? "30px" : "0"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                style: {
                                    flex: 1,
                                    padding: isMobile ? "15px 0" : "20px 0",
                                    minHeight: "0"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    style: {
                                        listStyle: "none",
                                        padding: 0,
                                        margin: 0
                                    },
                                    children: menuItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            style: {
                                                marginBottom: 0,
                                                opacity: isAnimating ? 1 : 0,
                                                transform: isAnimating ? "translateX(0)" : isMobile ? "translateY(-20px)" : "translateX(-30px)",
                                                transition: `opacity 0.5s ease ${0.1 + index * 0.05}s, transform 0.5s ease ${0.1 + index * 0.05}s`
                                            },
                                            children: [
                                                item.dropdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between",
                                                        cursor: "pointer",
                                                        borderBottom: openDropdown === item.label ? "none" : "1px solid rgba(232, 243, 241, 0.1)"
                                                    },
                                                    onClick: ()=>toggleDropdown(item.label),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                flex: 1,
                                                                padding: isMobile ? "14px 20px" : "16px 30px",
                                                                color: "#e8f3f1",
                                                                fontSize: isMobile ? "13px" : "14px",
                                                                fontWeight: "400",
                                                                letterSpacing: "1px",
                                                                textTransform: "uppercase",
                                                                transition: "all 0.3s ease"
                                                            },
                                                            onMouseEnter: (e)=>{
                                                                if (!isMobile) {
                                                                    e.currentTarget.style.color = "#c8b08a";
                                                                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                                                                }
                                                            },
                                                            onMouseLeave: (e)=>{
                                                                if (!isMobile) {
                                                                    e.currentTarget.style.color = "#e8f3f1";
                                                                    e.currentTarget.style.backgroundColor = "transparent";
                                                                }
                                                            },
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                            lineNumber: 285,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: isMobile ? "14px 20px" : "16px 30px",
                                                                color: "#e8f3f1",
                                                                fontSize: "12px",
                                                                transition: "transform 0.3s ease",
                                                                transform: openDropdown === item.label ? "rotate(180deg)" : "rotate(0deg)"
                                                            },
                                                            children: "▼"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                            lineNumber: 313,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                    lineNumber: 272,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>handleNavigation(item.href),
                                                    style: {
                                                        display: "block",
                                                        padding: isMobile ? "14px 20px" : "16px 30px",
                                                        color: "#e8f3f1",
                                                        textDecoration: "none",
                                                        fontSize: isMobile ? "13px" : "14px",
                                                        fontWeight: "400",
                                                        letterSpacing: "1px",
                                                        textTransform: "uppercase",
                                                        transition: "all 0.3s ease",
                                                        borderBottom: "1px solid rgba(232, 243, 241, 0.1)",
                                                        cursor: "pointer"
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        if (!isMobile) {
                                                            e.currentTarget.style.color = "#c8b08a";
                                                            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                                                            e.currentTarget.style.paddingLeft = "35px";
                                                        }
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        if (!isMobile) {
                                                            e.currentTarget.style.color = "#e8f3f1";
                                                            e.currentTarget.style.backgroundColor = "transparent";
                                                            e.currentTarget.style.paddingLeft = "30px";
                                                        }
                                                    },
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                    lineNumber: 329,
                                                    columnNumber: 21
                                                }, this),
                                                item.dropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    style: {
                                                        listStyle: "none",
                                                        padding: 0,
                                                        margin: 0,
                                                        maxHeight: openDropdown === item.label ? "500px" : "0",
                                                        overflow: "hidden",
                                                        transition: "max-height 0.4s ease",
                                                        borderBottom: "1px solid rgba(232, 243, 241, 0.1)"
                                                    },
                                                    children: item.dropdown.map((subItem, subIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                            children: subItem.dropdown ? // Nested dropdown item
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                alignItems: "center",
                                                                                justifyContent: "space-between",
                                                                                cursor: "pointer",
                                                                                padding: isMobile ? "12px 20px 12px 40px" : "14px 30px 14px 50px",
                                                                                color: "rgba(232, 243, 241, 0.8)",
                                                                                fontSize: isMobile ? "12px" : "13px",
                                                                                fontWeight: "300",
                                                                                letterSpacing: "0.5px",
                                                                                textTransform: "uppercase",
                                                                                transition: "all 0.3s ease",
                                                                                borderBottom: subIndex < item.dropdown.length - 1 ? "1px solid rgba(232, 243, 241, 0.05)" : "none"
                                                                            },
                                                                            onClick: ()=>toggleNestedDropdown(item.label, subItem.label),
                                                                            onMouseEnter: (e)=>{
                                                                                if (!isMobile) {
                                                                                    e.currentTarget.style.color = "#c8b08a";
                                                                                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                                                                                    e.currentTarget.style.paddingLeft = "55px";
                                                                                }
                                                                            },
                                                                            onMouseLeave: (e)=>{
                                                                                if (!isMobile) {
                                                                                    e.currentTarget.style.color = "rgba(232, 243, 241, 0.8)";
                                                                                    e.currentTarget.style.backgroundColor = "transparent";
                                                                                    e.currentTarget.style.paddingLeft = "50px";
                                                                                }
                                                                            },
                                                                            children: [
                                                                                subItem.label,
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        color: "rgba(232, 243, 241, 0.8)",
                                                                                        fontSize: "10px",
                                                                                        transition: "transform 0.3s ease",
                                                                                        transform: openNestedDropdown === `${item.label}-${subItem.label}` ? "rotate(180deg)" : "rotate(0deg)"
                                                                                    },
                                                                                    children: "▼"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                                    lineNumber: 425,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                            lineNumber: 383,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                        lineNumber: 382,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                            style: {
                                                                                listStyle: "none",
                                                                                padding: 0,
                                                                                margin: 0,
                                                                                maxHeight: openNestedDropdown === `${item.label}-${subItem.label}` ? "500px" : "0",
                                                                                overflow: "hidden",
                                                                                transition: "max-height 0.4s ease"
                                                                            },
                                                                            children: subItem.dropdown.map((nestedItem, nestedIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        onClick: ()=>handleNavigation(nestedItem.href),
                                                                                        style: {
                                                                                            display: "block",
                                                                                            padding: isMobile ? "10px 20px 10px 60px" : "12px 30px 12px 70px",
                                                                                            color: "rgba(232, 243, 241, 0.6)",
                                                                                            fontSize: isMobile ? "11px" : "12px",
                                                                                            fontWeight: "300",
                                                                                            letterSpacing: "0.5px",
                                                                                            textTransform: "uppercase",
                                                                                            transition: "all 0.3s ease",
                                                                                            borderBottom: nestedIndex < subItem.dropdown.length - 1 ? "1px solid rgba(232, 243, 241, 0.03)" : "none",
                                                                                            cursor: "pointer"
                                                                                        },
                                                                                        onMouseEnter: (e)=>{
                                                                                            if (!isMobile) {
                                                                                                e.currentTarget.style.color = "#c8b08a";
                                                                                                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                                                                                                e.currentTarget.style.paddingLeft = "75px";
                                                                                            }
                                                                                        },
                                                                                        onMouseLeave: (e)=>{
                                                                                            if (!isMobile) {
                                                                                                e.currentTarget.style.color = "rgba(232, 243, 241, 0.6)";
                                                                                                e.currentTarget.style.backgroundColor = "transparent";
                                                                                                e.currentTarget.style.paddingLeft = "70px";
                                                                                            }
                                                                                        },
                                                                                        children: nestedItem.label
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                                        lineNumber: 460,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                }, `nested-${index}-${subIndex}-${nestedIndex}`, false, {
                                                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                                    lineNumber: 457,
                                                                                    columnNumber: 37
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                            lineNumber: 443,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                        lineNumber: 442,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true) : // Regular dropdown item
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    onClick: ()=>handleNavigation(subItem.href),
                                                                    style: {
                                                                        display: "block",
                                                                        padding: isMobile ? "12px 20px 12px 40px" : "14px 30px 14px 50px",
                                                                        color: "rgba(232, 243, 241, 0.8)",
                                                                        textDecoration: "none",
                                                                        fontSize: isMobile ? "12px" : "13px",
                                                                        fontWeight: "300",
                                                                        letterSpacing: "0.5px",
                                                                        textTransform: "uppercase",
                                                                        transition: "all 0.3s ease",
                                                                        borderBottom: subIndex < item.dropdown.length - 1 ? "1px solid rgba(232, 243, 241, 0.05)" : "none",
                                                                        cursor: "pointer"
                                                                    },
                                                                    onMouseEnter: (e)=>{
                                                                        if (!isMobile) {
                                                                            e.currentTarget.style.color = "#c8b08a";
                                                                            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                                                                            e.currentTarget.style.paddingLeft = "55px";
                                                                        }
                                                                    },
                                                                    onMouseLeave: (e)=>{
                                                                        if (!isMobile) {
                                                                            e.currentTarget.style.color = "rgba(232, 243, 241, 0.8)";
                                                                            e.currentTarget.style.backgroundColor = "transparent";
                                                                            e.currentTarget.style.paddingLeft = "50px";
                                                                        }
                                                                    },
                                                                    children: subItem.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                    lineNumber: 507,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                lineNumber: 506,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, `sub-${index}-${subIndex}`, false, {
                                                            fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                            lineNumber: 378,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                    lineNumber: 366,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, `menu-${index}`, true, {
                                            fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: isMobile ? "0" : "25px 30px",
                                    fontSize: "11px",
                                    lineHeight: "1.6",
                                    color: "rgba(232, 243, 241, 0.7)",
                                    opacity: isMobile ? 0 : isAnimating ? 1 : 0,
                                    transform: isMobile ? "translateX(0)" : isAnimating ? "translateX(0)" : "translateX(-30px)",
                                    transition: "opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s",
                                    flexShrink: 0,
                                    borderTop: isMobile ? "none" : "1px solid rgba(232, 243, 241, 0.1)",
                                    display: isMobile ? "none" : "block"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                lineNumber: 559,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: isMobile ? "100%" : "65%",
                            height: isMobile ? "auto" : "100vh",
                            background: "#ffffff",
                            padding: isMobile ? "25px 20px 30px" : "40px 40px",
                            overflowY: isMobile ? "visible" : "auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: isMobile ? "25px" : "30px",
                            position: "relative",
                            transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                            transform: isAnimating ? "translateX(0)" : isMobile ? "translateY(100%)" : "translateX(-100%)",
                            willChange: "transform",
                            flexShrink: 0,
                            minHeight: isMobile ? "auto" : "100vh"
                        },
                        children: [
                            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                style: {
                                    position: "absolute",
                                    top: "25px",
                                    right: "25px",
                                    background: "transparent",
                                    border: "none",
                                    fontSize: "32px",
                                    cursor: "pointer",
                                    color: "#333",
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    zIndex: 2001,
                                    opacity: isAnimating ? 0.7 : 0,
                                    transform: isAnimating ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.8)",
                                    transition: "opacity 0.4s ease 0.4s, transform 0.5s ease 0.4s",
                                    borderRadius: "0",
                                    boxShadow: "none",
                                    fontWeight: "300"
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.opacity = "1",
                                onMouseLeave: (e)=>e.currentTarget.style.opacity = "0.7",
                                "aria-label": "Close menu",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                lineNumber: 606,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    opacity: isAnimating ? 1 : 0,
                                    transform: isAnimating ? "translateY(0)" : "translateY(30px)",
                                    transition: "opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s",
                                    marginTop: isMobile ? "10px" : "0"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: isMobile ? "18px" : "22px",
                                            fontWeight: "600",
                                            color: "#333",
                                            marginBottom: "20px",
                                            letterSpacing: "1px",
                                            textTransform: "uppercase"
                                        },
                                        children: "FEATURED EXPERIENCES"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                        lineNumber: 649,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                                            gap: isMobile ? "25px" : "20px",
                                            marginBottom: isMobile ? "25px" : "30px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: isMobile ? "15px" : "0"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "100%",
                                                            height: isMobile ? "180px" : "220px",
                                                            borderRadius: "8px",
                                                            backgroundImage: `url(/assets/images/insta/G22.png)`,
                                                            backgroundSize: "cover",
                                                            backgroundPosition: "center",
                                                            position: "relative",
                                                            overflow: "hidden",
                                                            cursor: "pointer",
                                                            transition: "transform 0.3s ease"
                                                        },
                                                        onMouseEnter: (e)=>!isMobile && (e.currentTarget.style.transform = "scale(1.02)"),
                                                        onMouseLeave: (e)=>!isMobile && (e.currentTarget.style.transform = "scale(1)"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                position: "absolute",
                                                                bottom: 0,
                                                                left: 0,
                                                                right: 0,
                                                                background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                                                                padding: isMobile ? "12px" : "15px",
                                                                color: "white"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: isMobile ? "13px" : "14px",
                                                                    fontWeight: "500",
                                                                    letterSpacing: "1px"
                                                                },
                                                                children: "VILLA EXPERIENCE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                lineNumber: 711,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                            lineNumber: 699,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                        lineNumber: 679,
                                                        columnNumber: 17
                                                    }, this),
                                                    isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: "0 5px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                style: {
                                                                    fontSize: "15px",
                                                                    fontWeight: "600",
                                                                    color: "#333",
                                                                    marginBottom: "8px",
                                                                    letterSpacing: "0.5px"
                                                                },
                                                                children: "Villa Experience"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                lineNumber: 730,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontSize: "13px",
                                                                    color: "#666",
                                                                    lineHeight: "1.5",
                                                                    marginBottom: "12px"
                                                                },
                                                                children: "Nestled in the heart of the Sinharaja rainforest, Raindrops Villa offers a serene retreat surrounded by lush greenery."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                lineNumber: 741,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                onClick: ()=>handleNavigation("/gallery"),
                                                                style: {
                                                                    color: "#c8b08a",
                                                                    textDecoration: "none",
                                                                    fontSize: "11px",
                                                                    fontWeight: "500",
                                                                    letterSpacing: "1px",
                                                                    textTransform: "uppercase",
                                                                    display: "inline-flex",
                                                                    alignItems: "center",
                                                                    gap: "8px",
                                                                    cursor: "pointer"
                                                                },
                                                                children: [
                                                                    "View Gallery",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: "13px"
                                                                        },
                                                                        children: "→"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                        lineNumber: 768,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                lineNumber: 752,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                        lineNumber: 725,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                lineNumber: 672,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: isMobile ? "15px" : "0"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "100%",
                                                            height: isMobile ? "180px" : "220px",
                                                            borderRadius: "8px",
                                                            backgroundImage: `url(/assets/images/neroscience/muse2.jpg)`,
                                                            backgroundSize: "cover",
                                                            backgroundPosition: "center",
                                                            position: "relative",
                                                            overflow: "hidden",
                                                            cursor: "pointer",
                                                            transition: "transform 0.3s ease"
                                                        },
                                                        onMouseEnter: (e)=>!isMobile && (e.currentTarget.style.transform = "scale(1.02)"),
                                                        onMouseLeave: (e)=>!isMobile && (e.currentTarget.style.transform = "scale(1)"),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                position: "absolute",
                                                                bottom: 0,
                                                                left: 0,
                                                                right: 0,
                                                                background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                                                                padding: isMobile ? "12px" : "15px",
                                                                color: "white"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: isMobile ? "13px" : "14px",
                                                                    fontWeight: "500",
                                                                    letterSpacing: "1px"
                                                                },
                                                                children: "WELLNESS WITH MUSE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                lineNumber: 814,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                            lineNumber: 802,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                        lineNumber: 782,
                                                        columnNumber: 17
                                                    }, this),
                                                    isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: "0 5px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                style: {
                                                                    fontSize: "15px",
                                                                    fontWeight: "600",
                                                                    color: "#333",
                                                                    marginBottom: "8px",
                                                                    letterSpacing: "0.5px"
                                                                },
                                                                children: "Wellness with Muse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                lineNumber: 833,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontSize: "13px",
                                                                    color: "#666",
                                                                    lineHeight: "1.5",
                                                                    marginBottom: "12px"
                                                                },
                                                                children: "Real-time EEG brainwave tracking for improved focus and optimized mental performance."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                lineNumber: 844,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                onClick: ()=>handleNavigation("/neuroscience"),
                                                                style: {
                                                                    color: "#c8b08a",
                                                                    textDecoration: "none",
                                                                    fontSize: "11px",
                                                                    fontWeight: "500",
                                                                    letterSpacing: "1px",
                                                                    textTransform: "uppercase",
                                                                    display: "inline-flex",
                                                                    alignItems: "center",
                                                                    gap: "8px",
                                                                    cursor: "pointer"
                                                                },
                                                                children: [
                                                                    "Learn More",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: "13px"
                                                                        },
                                                                        children: "→"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                        lineNumber: 871,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                lineNumber: 855,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                        lineNumber: 828,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                lineNumber: 775,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                        lineNumber: 663,
                                        columnNumber: 13
                                    }, this),
                                    !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr",
                                            gap: "20px",
                                            marginBottom: "40px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: "16px",
                                                            fontWeight: "600",
                                                            color: "#333",
                                                            marginBottom: "10px",
                                                            letterSpacing: "0.5px"
                                                        },
                                                        children: "Villa Experience"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                        lineNumber: 890,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: "14px",
                                                            color: "#666",
                                                            lineHeight: "1.6",
                                                            marginBottom: "15px"
                                                        },
                                                        children: "Nestled in the heart of the Sinharaja rainforest, Raindrops Villa offers a serene retreat surrounded by lush greenery."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                        lineNumber: 901,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: ()=>handleNavigation("/gallery"),
                                                        style: {
                                                            color: "#c8b08a",
                                                            textDecoration: "none",
                                                            fontSize: "12px",
                                                            fontWeight: "500",
                                                            letterSpacing: "1px",
                                                            textTransform: "uppercase",
                                                            display: "inline-flex",
                                                            alignItems: "center",
                                                            gap: "8px",
                                                            cursor: "pointer",
                                                            transition: "gap 0.3s ease"
                                                        },
                                                        onMouseEnter: (e)=>e.currentTarget.style.gap = "12px",
                                                        onMouseLeave: (e)=>e.currentTarget.style.gap = "8px",
                                                        children: [
                                                            "View Gallery",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: "14px"
                                                                },
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                lineNumber: 931,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                        lineNumber: 912,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                lineNumber: 889,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: "16px",
                                                            fontWeight: "600",
                                                            color: "#333",
                                                            marginBottom: "10px",
                                                            letterSpacing: "0.5px"
                                                        },
                                                        children: "Wellness with Muse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                        lineNumber: 937,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: "14px",
                                                            color: "#666",
                                                            lineHeight: "1.6",
                                                            marginBottom: "15px"
                                                        },
                                                        children: "Real-time EEG brainwave tracking for improved focus and optimized mental performance."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                        lineNumber: 948,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: ()=>handleNavigation("/neuroscience"),
                                                        style: {
                                                            color: "#c8b08a",
                                                            textDecoration: "none",
                                                            fontSize: "12px",
                                                            fontWeight: "500",
                                                            letterSpacing: "1px",
                                                            textTransform: "uppercase",
                                                            display: "inline-flex",
                                                            alignItems: "center",
                                                            gap: "8px",
                                                            cursor: "pointer",
                                                            transition: "gap 0.3s ease"
                                                        },
                                                        onMouseEnter: (e)=>e.currentTarget.style.gap = "12px",
                                                        onMouseLeave: (e)=>e.currentTarget.style.gap = "8px",
                                                        children: [
                                                            "Learn More",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: "14px"
                                                                },
                                                                children: "→"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                lineNumber: 978,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                        lineNumber: 959,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                lineNumber: 936,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                        lineNumber: 880,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                lineNumber: 641,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    opacity: isAnimating ? 1 : 0,
                                    transform: isAnimating ? "translateY(0)" : "translateY(30px)",
                                    transition: "opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s",
                                    marginTop: isMobile ? "0" : "-20px",
                                    paddingTop: isMobile ? "25px" : "30px",
                                    borderTop: "1px solid #79727260"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: isMobile ? "15px" : "16px",
                                            fontWeight: "600",
                                            color: "#333",
                                            marginBottom: "20px",
                                            letterSpacing: "0.5px",
                                            textTransform: "uppercase"
                                        },
                                        children: "GET IN TOUCH"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                        lineNumber: 996,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "15px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: isMobile ? "column" : "row",
                                                    flexWrap: "wrap",
                                                    gap: isMobile ? "25px" : "20px",
                                                    marginBottom: isMobile ? "15px" : "10px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: isMobile ? "column" : "row",
                                                        gap: isMobile ? "25px" : "20px",
                                                        width: "100%"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                flex: isMobile ? "none" : "1",
                                                                width: isMobile ? "100%" : "auto"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        marginBottom: isMobile ? "20px" : "0"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            style: {
                                                                                fontSize: "14px",
                                                                                fontWeight: "600",
                                                                                color: "#333",
                                                                                marginBottom: isMobile ? "15px" : "10px"
                                                                            },
                                                                            children: "Villa - Location"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                            lineNumber: 1041,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            style: {
                                                                                fontSize: "14px",
                                                                                color: "#666",
                                                                                lineHeight: "1.6",
                                                                                marginTop: "-25px"
                                                                            },
                                                                            children: [
                                                                                "Rain drops Wellness Villa Sinharaja, ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                                    lineNumber: 1059,
                                                                                    columnNumber: 62
                                                                                }, this),
                                                                                "Dolagahawaththa,",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                                    lineNumber: 1061,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                "Mederipitiya ,Deniyaya."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                            lineNumber: 1051,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                    lineNumber: 1040,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        marginBottom: isMobile ? "20px" : "0"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            style: {
                                                                                fontSize: "14px",
                                                                                fontWeight: "600",
                                                                                color: "#333",
                                                                                marginBottom: isMobile ? "15px" : "10px"
                                                                            },
                                                                            children: "Head Office - Sri Lanka"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                            lineNumber: 1067,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            style: {
                                                                                fontSize: "14px",
                                                                                color: "#666",
                                                                                lineHeight: "1.6",
                                                                                marginTop: "-25px"
                                                                            },
                                                                            children: [
                                                                                "INTT Leisure Private Limited",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                                    lineNumber: 1086,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                "No.26/6, Major LV Gunaratna Mawatha, Station Road, Dehiwala,",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                                    lineNumber: 1089,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                "Sri Lanka."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                            lineNumber: 1077,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                    lineNumber: 1066,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            style: {
                                                                                fontSize: "14px",
                                                                                fontWeight: "600",
                                                                                color: "#333",
                                                                                marginBottom: isMobile ? "15px" : "10px"
                                                                            },
                                                                            children: "Head Office - USA"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                            lineNumber: 1095,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            style: {
                                                                                fontSize: "14px",
                                                                                color: "#666",
                                                                                lineHeight: "1.6",
                                                                                marginTop: "-25px"
                                                                            },
                                                                            children: [
                                                                                "INT Terminal, ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                                    lineNumber: 1113,
                                                                                    columnNumber: 39
                                                                                }, this),
                                                                                "1803 Wicklow Road Naperville, ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                                    lineNumber: 1114,
                                                                                    columnNumber: 55
                                                                                }, this),
                                                                                " IL 60564, Chicago, USA."
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                            lineNumber: 1105,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                    lineNumber: 1094,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                            lineNumber: 1034,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                flex: isMobile ? "none" : "1",
                                                                width: isMobile ? "100%" : "auto"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        marginBottom: isMobile ? "20px" : "35px"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            style: {
                                                                                fontSize: "14px",
                                                                                fontWeight: "600",
                                                                                color: "#333",
                                                                                marginBottom: isMobile ? "15px" : "10px"
                                                                            },
                                                                            children: "Telephone"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                            lineNumber: 1128,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            style: {
                                                                                fontSize: "14px",
                                                                                color: "#666",
                                                                                lineHeight: "1.6",
                                                                                marginTop: "-25px"
                                                                            },
                                                                            children: [
                                                                                "+94 774 48 48 48 ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                                    lineNumber: 1146,
                                                                                    columnNumber: 42
                                                                                }, this),
                                                                                "+1 312-242-1662"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                            lineNumber: 1138,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                    lineNumber: 1127,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            style: {
                                                                                fontSize: "14px",
                                                                                fontWeight: "600",
                                                                                color: "#333",
                                                                                marginBottom: isMobile ? "15px" : "10px"
                                                                            },
                                                                            children: "Email"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                            lineNumber: 1152,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            style: {
                                                                                fontSize: "14px",
                                                                                color: "#666",
                                                                                lineHeight: "1.6",
                                                                                marginTop: "-25px"
                                                                            },
                                                                            children: [
                                                                                "info@raindrops.lk ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                                    lineNumber: 1170,
                                                                                    columnNumber: 43
                                                                                }, this),
                                                                                "info@intterminal.com"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                            lineNumber: 1162,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                                    lineNumber: 1151,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                            lineNumber: 1121,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                    lineNumber: 1025,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                lineNumber: 1016,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginTop: "20px",
                                                    marginBottom: isMobile ? "30px" : "0"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "https://www.hotelmate.net/hotels/rain-drops-wellness-villa-sinharaja-deniyaya?checkIn=2025-12-01&checkOut=&adult=0&child=0&room=",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    style: {
                                                        display: "inline-block",
                                                        backgroundColor: "#000000ff",
                                                        color: "white",
                                                        padding: isMobile ? "12px 25px" : "12px 30px",
                                                        textDecoration: "none",
                                                        fontSize: isMobile ? "12px" : "13px",
                                                        fontWeight: "500",
                                                        letterSpacing: "1px",
                                                        textTransform: "uppercase",
                                                        borderRadius: "4px",
                                                        transition: !isMobile ? "all 0.3s ease" : "none"
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        if (!isMobile) {
                                                            e.currentTarget.style.backgroundColor = "#c8b08a";
                                                            e.currentTarget.style.transform = "translateY(-2px)";
                                                        }
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        if (!isMobile) {
                                                            e.currentTarget.style.backgroundColor = "#836440";
                                                            e.currentTarget.style.transform = "translateY(0)";
                                                        }
                                                    },
                                                    children: "Book Now"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                    lineNumber: 1185,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                                lineNumber: 1179,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                        lineNumber: 1009,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                                lineNumber: 986,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home-1/SideMenu.jsx",
                        lineNumber: 582,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            shouldRender && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClose,
                style: {
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.5)",
                    zIndex: 1998,
                    cursor: "pointer",
                    opacity: isAnimating ? 1 : 0,
                    transition: "opacity 0.6s ease",
                    pointerEvents: isAnimating ? "auto" : "none"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/home-1/SideMenu.jsx",
                lineNumber: 1225,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = SideMenu;
}),
"[project]/src/app/home-1/Header.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$OffcanvasMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/home-1/OffcanvasMenu.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$SideMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/home-1/SideMenu.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-datepicker/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$TopBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/home-1/TopBar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function HeaderOne() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [windowWidth, setWindowWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const datePickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Set isClient to true after hydration
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isClient) return;
        const handleResize = ()=>{
            setWindowWidth(window.innerWidth);
        };
        // Set initial width
        setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, [
        isClient
    ]);
    const [dateRange, setDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        null,
        null
    ]);
    const [startDate, endDate] = dateRange;
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // combined guest state
    const [adults, setAdults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(2);
    const [children, setChildren] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [rooms, setRooms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    // Add useEffect to track window width - Only on client
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isClient) return;
        const handleResize = ()=>{
            setWindowWidth(window.innerWidth);
        };
        // Initial width
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, [
        isClient
    ]);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    // dropdown toggle
    const [openGuest, setOpenGuest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const formatDate = (d)=>d ? d.toISOString().split("T")[0] : "";
    // helper to build hotel url
    const buildHotelUrl = ()=>{
        const base = "https://www.hotelmate.net/hotels/rain-drops-wellness-villa-sinharaja-deniyaya";
        const params = new URLSearchParams();
        if (startDate) params.set("checkIn", formatDateForUrl(startDate));
        if (endDate) params.set("checkOut", formatDateForUrl(endDate));
        params.set("adult", String(adults));
        params.set("child", String(children));
        params.set("room", String(rooms));
        params.set("name", "Thanuja");
        return `${base}?${params.toString()}`;
    };
    // small helpers for increment/decrement with min/max rules
    const inc = (setter, val, max = 10)=>setter((v)=>Math.min(max, v + 1));
    const dec = (setter, val, min = 0)=>setter((v)=>Math.max(min, v - 1));
    // ensure at least 1 adult and 1 room
    const decAdult = ()=>dec(setAdults, adults, 1);
    const decRoom = ()=>dec(setRooms, rooms, 1);
    // readable label shown inside the closed input
    const guestLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const people = adults + children;
        return `${people} guest${people !== 1 ? "s" : ""} · ${rooms} room${rooms !== 1 ? "s" : ""}`;
    }, [
        adults,
        children,
        rooms
    ]);
    // returns YYYY-MM-DD using local date parts
    const formatDateForUrl = (d)=>{
        if (!d) return "";
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${y}-${m}-${day}`;
    };
    // returns DD/MM/YYYY for visible display
    const formatDateDisplay = (d)=>{
        if (!d) return "";
        const day = String(d.getDate()).padStart(2, "0");
        const m = String(d.getMonth() + 1).padStart(2, "0");
        const y = d.getFullYear();
        return `${day}/${m}/${y}`;
    };
    const [isLoginOpen, setIsLoginOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSignupOpen, setIsSignupOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSticky, setIsSticky] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOffcanvasOpen, setIsOffcanvasOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hydrated, setHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isClient) return;
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, [
        isClient
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isClient) return;
        const handleScroll = ()=>{
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
            // Close dropdown when scrolling
            setOpenGuest(false);
            // Close DatePicker calendar when scrolling
            const datepickerCalendars = document.querySelectorAll(".react-datepicker");
            datepickerCalendars.forEach((calendar)=>{
                if (calendar.style.display !== "none") {
                    calendar.style.display = "none";
                    const popper = calendar.closest(".react-datepicker-popper");
                    if (popper) {
                        popper.style.display = "none";
                    }
                }
            });
        };
        setHydrated(true);
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, [
        isClient
    ]);
    // Function to handle navigation with scroll to top
    const handleNavigation = (e, href)=>{
        e.preventDefault();
        if (!isClient) return;
        // Close any open dropdowns
        setOpenGuest(false);
        // Scroll to top before navigation
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        // Navigate after a small delay to ensure scroll completes
        setTimeout(()=>{
            if (href === pathname) {
                // If already on the same page, just scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            } else {
                // Navigate to the new page
                router.push(href);
            }
        }, 100);
    };
    // Function to handle home logo click
    const handleHomeClick = (e)=>{
        e.preventDefault();
        if (!isClient) return;
        // Close any open dropdowns
        setOpenGuest(false);
        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        // If already on home page, just scroll to top
        if (pathname === "/") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            // Navigate to home
            router.push("/");
        }
    };
    // Function to handle date picker changes
    const handleDateChange = (update)=>{
        setDateRange(update);
    };
    // Don't render anything during SSR for window-dependent parts
    if (!isClient) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "main__header header__function",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "20px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "topbar",
                            style: {
                                marginTop: "20px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$TopBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/home-1/Header.jsx",
                                lineNumber: 237,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/home-1/Header.jsx",
                            lineNumber: 236,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/home-1/Header.jsx",
                        lineNumber: 235,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/home-1/Header.jsx",
                    lineNumber: 234,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home-1/Header.jsx",
                lineNumber: 233,
                columnNumber: 9
            }, this)
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "top-banner-header",
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    transition: "opacity 0.3s ease, visibility 0.3s ease",
                    opacity: hydrated && isSticky ? 0 : 1,
                    visibility: hydrated && isSticky ? "hidden" : "visible",
                    pointerEvents: hydrated && isSticky ? "none" : "auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "20px 0",
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "menu-icon-btn",
                                onClick: ()=>setIsMenuOpen(true),
                                style: {
                                    background: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                "aria-label": "Open menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/assets/images/logo/menu..png",
                                    alt: "menu",
                                    style: {
                                        width: 32,
                                        height: 32
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/Header.jsx",
                                lineNumber: 274,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/",
                                onClick: handleHomeClick,
                                style: {
                                    position: "absolute",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    display: "block"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/assets/images/logo/logof.png",
                                    alt: "logo",
                                    style: {
                                        width: 250,
                                        height: 100,
                                        objectFit: "contain"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                    lineNumber: 306,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/Header.jsx",
                                lineNumber: 296,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "desktop-reserve-btn",
                                style: {
                                    display: windowWidth < 768 ? "none" : "block"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    target: "blank",
                                    rel: "noopener noreferrer",
                                    href: "https://www.hotelmate.net/hotels/rain-drops-wellness-villa-sinharaja-deniyaya?checkIn=2025-12-01&checkOut=&adult=0&child=0&room=",
                                    className: "theme-btn btn-style sm-btn fill",
                                    style: {
                                        cursor: "pointer",
                                        background: "transparent"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Reserve Now"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/Header.jsx",
                                        lineNumber: 330,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/Header.jsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home-1/Header.jsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/home-1/Header.jsx",
                    lineNumber: 263,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home-1/Header.jsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `main__header header__function ${hydrated && isSticky ? "is__sticky" : ""}`,
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 999,
                    transition: "all 0.3s ease",
                    transform: hydrated && isSticky ? "translateY(0)" : "translateY(-100%)",
                    background: hydrated && isSticky ? "rgba(255, 255, 255, 0.98)" : "transparent",
                    backdropFilter: hydrated && isSticky ? "blur(10px)" : "none",
                    boxShadow: hydrated && isSticky ? "0 2px 10px rgba(0,0,0,0.05)" : "none"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "20px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "topbar",
                                style: {
                                    marginTop: "20px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$TopBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                    lineNumber: 361,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/Header.jsx",
                                lineNumber: 360,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "main__header__wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "main__logo",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "/",
                                                onClick: handleHomeClick,
                                                className: "navigation__menu--item__link",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    className: "logo__class",
                                                    src: "/assets/images/logo/logo.png",
                                                    alt: "Rain Drops",
                                                    style: {
                                                        // Display logic - Show on tablet (1024px) AND desktop (1440px+)
                                                        display: windowWidth && windowWidth < 769 ? "none" : "block",
                                                        width: windowWidth && windowWidth <= 1024 ? 150 : windowWidth && windowWidth <= 1440 ? 250 : 220,
                                                        height: windowWidth && windowWidth <= 1024 ? 50 : 70,
                                                        marginLeft: windowWidth && windowWidth <= 1024 ? "0px" : windowWidth && windowWidth <= 1440 ? "-10px" : windowWidth && windowWidth >= 2560 ? "50px" : "0px",
                                                        marginRight: windowWidth && windowWidth >= 2560 ? "200px" : "200px"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                    lineNumber: 372,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                lineNumber: 367,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                            lineNumber: 366,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "main__nav",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "navigation d-none d-lg-block",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                                    className: "navigation__menu",
                                                    id: "main__menu",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "list-unstyled",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/",
                                                                    className: "navigation__menu--item__link",
                                                                    onClick: (e)=>handleNavigation(e, "/"),
                                                                    children: "Home"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                    lineNumber: 413,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                                lineNumber: 412,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "navigation__menu--item has-child",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/room-home",
                                                                    className: "navigation__menu--item__link",
                                                                    onClick: (e)=>handleNavigation(e, "/room-home"),
                                                                    children: "Rooms"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                    lineNumber: 422,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                                lineNumber: 421,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "navigation__menu--item",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/gallery",
                                                                    className: "navigation__menu--item__link",
                                                                    onClick: (e)=>handleNavigation(e, "/gallery"),
                                                                    children: "Gallery"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                    lineNumber: 431,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                                lineNumber: 430,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "navigation__menu--item",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/neuroscience",
                                                                    className: "navigation__menu--item__link",
                                                                    onClick: (e)=>handleNavigation(e, "/neuroscience"),
                                                                    children: "Wellness"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                    lineNumber: 440,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                                lineNumber: 439,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "navigation__menu--item",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/research",
                                                                    className: "navigation__menu--item__link",
                                                                    onClick: (e)=>handleNavigation(e, "/research"),
                                                                    children: "Rain Lab"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                    lineNumber: 451,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                                lineNumber: 450,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "navigation__menu--item",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/dining",
                                                                    className: "navigation__menu--item__link",
                                                                    onClick: (e)=>handleNavigation(e, "/dining"),
                                                                    children: "Dining"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                    lineNumber: 460,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                                lineNumber: 459,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "navigation__menu--item has-child has-arrow",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "",
                                                                        className: "navigation__menu--item__link",
                                                                        onClick: (e)=>{
                                                                            e.preventDefault();
                                                                        // For About dropdown, we don't navigate, just open dropdown
                                                                        },
                                                                        children: "About"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/home-1/Header.jsx",
                                                                        lineNumber: 469,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                        className: "submenu sub__style",
                                                                        role: "menu",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                role: "menuitem",
                                                                                className: "has-child has-arrow",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                        href: "",
                                                                                        onClick: (e)=>{
                                                                                            e.preventDefault();
                                                                                        },
                                                                                        className: "has-arrow",
                                                                                        children: "About Us"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                        lineNumber: 481,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                        className: "sub-submenu sub__style",
                                                                                        role: "menu",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                role: "menuitem",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                    href: "/about",
                                                                                                    onClick: (e)=>handleNavigation(e, "/about"),
                                                                                                    children: "The Story"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                                    lineNumber: 495,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                                lineNumber: 494,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                role: "menuitem",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                    href: "/Insight",
                                                                                                    onClick: (e)=>handleNavigation(e, "/Insight"),
                                                                                                    children: "Insight Partners (You)"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                                    lineNumber: 505,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                                lineNumber: 504,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                role: "menuitem",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                    href: "/travelpartners",
                                                                                                    onClick: (e)=>handleNavigation(e, "/travelpartners"),
                                                                                                    children: "Travel Partners"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                                    lineNumber: 516,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                                lineNumber: 515,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                                role: "menuitem",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                                    href: "/living",
                                                                                                    onClick: (e)=>handleNavigation(e, "/living"),
                                                                                                    children: "A Living Partnership"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                                    lineNumber: 528,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                                lineNumber: 527,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                        lineNumber: 490,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                lineNumber: 480,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                role: "menuitem",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/contact",
                                                                                    onClick: (e)=>handleNavigation(e, "/contact"),
                                                                                    children: "Contact Us"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                    lineNumber: 540,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                lineNumber: 539,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                role: "menuitem",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/privacy",
                                                                                    onClick: (e)=>handleNavigation(e, "/privacy"),
                                                                                    children: "Privacy & Policy"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                    lineNumber: 548,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                lineNumber: 547,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                role: "menuitem",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/weather",
                                                                                    onClick: (e)=>handleNavigation(e, "/weather"),
                                                                                    children: "Location & Weather"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                    lineNumber: 556,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                lineNumber: 555,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                                role: "menuitem",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/srilanka",
                                                                                    onClick: (e)=>handleNavigation(e, "/srilanka"),
                                                                                    children: "Beautiful Sri Lanka"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                    lineNumber: 564,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                lineNumber: 563,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/home-1/Header.jsx",
                                                                        lineNumber: 479,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                                lineNumber: 468,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/home-1/Header.jsx",
                                                        lineNumber: 411,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                    lineNumber: 410,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                lineNumber: 409,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                            lineNumber: 408,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "main__right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.hotelmate.net/hotels/rain-drops-wellness-villa-sinharaja-deniyaya?checkIn=2025-12-01&checkOut=&adult=0&child=0&room=",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "reservebar-btn",
                                                        style: {
                                                            background: "#AB8A62",
                                                            color: "#ffffff",
                                                            border: "1px solid #AB8A62",
                                                            width: windowWidth <= 768 && windowWidth > 375 ? "250px" : windowWidth <= 375 && windowWidth > 320 ? "250px" : windowWidth <= 320 ? "200px" : "180px",
                                                            height: "46px",
                                                            marginLeft: windowWidth <= 768 && windowWidth > 375 ? "-300px" : windowWidth <= 375 && windowWidth > 320 ? "-230px" : windowWidth <= 320 ? "-200px" : "200px",
                                                            borderRadius: "6px"
                                                        },
                                                        type: "button",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Reserve Now"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                            lineNumber: 614,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/home-1/Header.jsx",
                                                        lineNumber: 587,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                    lineNumber: 582,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "theme-btn btn-style sm-btn fill menu__btn d-lg-none",
                                                    onClick: ()=>setIsOffcanvasOpen(true),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/assets/images/icon/menu-icon.svg",
                                                            alt: "menu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                            lineNumber: 622,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/home-1/Header.jsx",
                                                        lineNumber: 621,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                    lineNumber: 617,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                            lineNumber: 581,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                    lineNumber: 364,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/Header.jsx",
                                lineNumber: 363,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "line",
                                style: {
                                    width: "1310px",
                                    color: "#000000ff",
                                    overflow: "hidden",
                                    position: "relative",
                                    zIndex: 9999,
                                    marginTop: "-20px",
                                    marginBottom: "25px",
                                    marginLeft: "-10px",
                                    display: windowWidth && windowWidth < 769 ? "none" : "block"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/Header.jsx",
                                lineNumber: 629,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: "-20px"
                                },
                                className: "jsx-3478accadf3750c2" + " " + "rts__section advance__search__section is__home__one",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-3478accadf3750c2" + " " + "container",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-3478accadf3750c2" + " " + "row",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                action: "#",
                                                method: "post",
                                                className: "jsx-3478accadf3750c2" + " " + "advance__search",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-3478accadf3750c2" + " " + "advance__search__wrapper",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                minWidth: 260
                                                            },
                                                            className: "jsx-3478accadf3750c2" + " " + "query__input",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                ref: datePickerRef,
                                                                placeholderText: " 📆︎ Check-In / Check-Out",
                                                                selected: startDate,
                                                                onChange: handleDateChange,
                                                                startDate: startDate,
                                                                endDate: endDate,
                                                                selectsRange: true,
                                                                dateFormat: "dd/MM/yyyy",
                                                                customInput: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    readOnly: true,
                                                                    style: {
                                                                        marginLeft: "-10px",
                                                                        width: "280px",
                                                                        height: "46px",
                                                                        padding: "8px 10px",
                                                                        border: "1px solid #ddd",
                                                                        borderRadius: "6px",
                                                                        cursor: "pointer",
                                                                        backgroundColor: "#fff"
                                                                    },
                                                                    className: "jsx-3478accadf3750c2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                    lineNumber: 664,
                                                                    columnNumber: 29
                                                                }, void 0)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                                lineNumber: 654,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                            lineNumber: 653,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                position: "relative"
                                                            },
                                                            className: "jsx-3478accadf3750c2" + " " + "query__input guest-input",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    id: "guests",
                                                                    type: "button",
                                                                    onClick: ()=>setOpenGuest((s)=>!s),
                                                                    "aria-haspopup": "dialog",
                                                                    "aria-expanded": openGuest,
                                                                    style: {
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        justifyContent: "space-between",
                                                                        width: 280,
                                                                        height: 46,
                                                                        padding: "8px 10px",
                                                                        border: "1px solid #ddd",
                                                                        background: "#fff",
                                                                        borderRadius: 6,
                                                                        cursor: "pointer",
                                                                        position: "relative",
                                                                        zIndex: 1,
                                                                        marginLeft: "4px"
                                                                    },
                                                                    className: "jsx-3478accadf3750c2" + " " + "guest-summary",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: "#666"
                                                                            },
                                                                            className: "jsx-3478accadf3750c2",
                                                                            children: "Adults/ Child/ Rooms"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                            lineNumber: 710,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                marginLeft: 8
                                                                            },
                                                                            className: "jsx-3478accadf3750c2",
                                                                            children: openGuest ? "▴" : "▾"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                            lineNumber: 713,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                    lineNumber: 687,
                                                                    columnNumber: 25
                                                                }, this),
                                                                openGuest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    role: "dialog",
                                                                    "aria-label": "Select guests and rooms",
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: "100%",
                                                                        left: 0,
                                                                        zIndex: 30,
                                                                        marginTop: 8,
                                                                        width: 260,
                                                                        padding: 12,
                                                                        background: "#fff",
                                                                        border: "1px solid #ddd",
                                                                        borderRadius: 8,
                                                                        boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
                                                                    },
                                                                    className: "jsx-3478accadf3750c2" + " " + "guest-dropdown",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                justifyContent: "space-between",
                                                                                alignItems: "center",
                                                                                marginBottom: 10
                                                                            },
                                                                            className: "jsx-3478accadf3750c2" + " " + "guest-row",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-3478accadf3750c2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                fontWeight: 600
                                                                                            },
                                                                                            className: "jsx-3478accadf3750c2",
                                                                                            children: "Adults"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                            lineNumber: 749,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                fontSize: 12,
                                                                                                color: "#666"
                                                                                            },
                                                                                            className: "jsx-3478accadf3750c2",
                                                                                            children: "Ages 13 or above"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                            lineNumber: 750,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                    lineNumber: 748,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        display: "flex",
                                                                                        alignItems: "center",
                                                                                        gap: 8
                                                                                    },
                                                                                    className: "jsx-3478accadf3750c2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            "aria-label": "Decrease adults",
                                                                                            onClick: decAdult,
                                                                                            style: {
                                                                                                width: 30,
                                                                                                height: 30,
                                                                                                borderRadius: 6,
                                                                                                border: "1px solid #ccc",
                                                                                                background: "#fff",
                                                                                                cursor: "pointer"
                                                                                            },
                                                                                            className: "jsx-3478accadf3750c2",
                                                                                            children: "−"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                            lineNumber: 761,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                minWidth: 24,
                                                                                                textAlign: "center"
                                                                                            },
                                                                                            className: "jsx-3478accadf3750c2",
                                                                                            children: adults
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                            lineNumber: 776,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            "aria-label": "Increase adults",
                                                                                            onClick: ()=>inc(setAdults, adults, 9),
                                                                                            style: {
                                                                                                width: 30,
                                                                                                height: 30,
                                                                                                borderRadius: 6,
                                                                                                border: "1px solid #ccc",
                                                                                                background: "#fff",
                                                                                                cursor: "pointer"
                                                                                            },
                                                                                            className: "jsx-3478accadf3750c2",
                                                                                            children: "+"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                            lineNumber: 781,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                    lineNumber: 754,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                            lineNumber: 739,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                justifyContent: "space-between",
                                                                                alignItems: "center",
                                                                                marginBottom: 10
                                                                            },
                                                                            className: "jsx-3478accadf3750c2" + " " + "guest-row",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-3478accadf3750c2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                fontWeight: 600
                                                                                            },
                                                                                            className: "jsx-3478accadf3750c2",
                                                                                            children: "Children"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                            lineNumber: 810,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                fontSize: 12,
                                                                                                color: "#666"
                                                                                            },
                                                                                            className: "jsx-3478accadf3750c2",
                                                                                            children: "Ages 0–12"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                            lineNumber: 811,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                    lineNumber: 809,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        display: "flex",
                                                                                        alignItems: "center",
                                                                                        gap: 8
                                                                                    },
                                                                                    className: "jsx-3478accadf3750c2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            "aria-label": "Decrease children",
                                                                                            onClick: ()=>dec(setChildren, children, 0),
                                                                                            style: {
                                                                                                width: 30,
                                                                                                height: 30,
                                                                                                borderRadius: 6,
                                                                                                border: "1px solid #ccc",
                                                                                                background: "#fff",
                                                                                                cursor: "pointer"
                                                                                            },
                                                                                            className: "jsx-3478accadf3750c2",
                                                                                            children: "−"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                            lineNumber: 822,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                minWidth: 24,
                                                                                                textAlign: "center"
                                                                                            },
                                                                                            className: "jsx-3478accadf3750c2",
                                                                                            children: children
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                            lineNumber: 837,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            "aria-label": "Increase children",
                                                                                            onClick: ()=>inc(setChildren, children, 8),
                                                                                            style: {
                                                                                                width: 30,
                                                                                                height: 30,
                                                                                                borderRadius: 6,
                                                                                                border: "1px solid #ccc",
                                                                                                background: "#fff",
                                                                                                cursor: "pointer"
                                                                                            },
                                                                                            className: "jsx-3478accadf3750c2",
                                                                                            children: "+"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                            lineNumber: 842,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                    lineNumber: 815,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                            lineNumber: 800,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                justifyContent: "space-between",
                                                                                alignItems: "center",
                                                                                marginBottom: 6
                                                                            },
                                                                            className: "jsx-3478accadf3750c2" + " " + "guest-row",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-3478accadf3750c2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                fontWeight: 600
                                                                                            },
                                                                                            className: "jsx-3478accadf3750c2",
                                                                                            children: "Rooms"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                            lineNumber: 871,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                fontSize: 12,
                                                                                                color: "#666"
                                                                                            },
                                                                                            className: "jsx-3478accadf3750c2"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                            lineNumber: 872,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                    lineNumber: 870,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        display: "flex",
                                                                                        alignItems: "center",
                                                                                        gap: 8
                                                                                    },
                                                                                    className: "jsx-3478accadf3750c2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            "aria-label": "Decrease rooms",
                                                                                            onClick: decRoom,
                                                                                            style: {
                                                                                                width: 30,
                                                                                                height: 30,
                                                                                                borderRadius: 6,
                                                                                                border: "1px solid #ccc",
                                                                                                background: "#fff",
                                                                                                cursor: "pointer"
                                                                                            },
                                                                                            className: "jsx-3478accadf3750c2",
                                                                                            children: "−"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                            lineNumber: 883,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            style: {
                                                                                                minWidth: 24,
                                                                                                textAlign: "center"
                                                                                            },
                                                                                            className: "jsx-3478accadf3750c2",
                                                                                            children: rooms
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                            lineNumber: 898,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            "aria-label": "Increase rooms",
                                                                                            onClick: ()=>inc(setRooms, rooms, 5),
                                                                                            style: {
                                                                                                width: 30,
                                                                                                height: 30,
                                                                                                borderRadius: 6,
                                                                                                border: "1px solid #ccc",
                                                                                                background: "#fff",
                                                                                                cursor: "pointer"
                                                                                            },
                                                                                            className: "jsx-3478accadf3750c2",
                                                                                            children: "+"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                            lineNumber: 903,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                    lineNumber: 876,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                            lineNumber: 861,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: "flex",
                                                                                justifyContent: "flex-end",
                                                                                gap: 8
                                                                            },
                                                                            className: "jsx-3478accadf3750c2",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>setOpenGuest(false),
                                                                                style: {
                                                                                    padding: "8px 12px",
                                                                                    borderRadius: 6,
                                                                                    border: "1px solid #ddd",
                                                                                    background: "#fff"
                                                                                },
                                                                                className: "jsx-3478accadf3750c2",
                                                                                children: "Done"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                                                lineNumber: 929,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                                            lineNumber: 922,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                    lineNumber: 720,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                            lineNumber: 683,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-3478accadf3750c2" + " " + "query__input",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                style: {
                                                                    marginLeft: "4px",
                                                                    width: "280px",
                                                                    height: "42px",
                                                                    border: "1px solid #ccc",
                                                                    borderRadius: "6px"
                                                                },
                                                                type: "text",
                                                                placeholder: " Promo Code",
                                                                className: "jsx-3478accadf3750c2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                                lineNumber: 948,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                            lineNumber: 947,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: buildHotelUrl(),
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "jsx-3478accadf3750c2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                style: {
                                                                    background: "#ffff",
                                                                    color: "#666",
                                                                    border: "1px solid #AB8A62",
                                                                    width: "280px",
                                                                    height: "46px",
                                                                    borderRadius: "6px"
                                                                },
                                                                type: "button",
                                                                disabled: !startDate || !endDate,
                                                                className: "jsx-3478accadf3750c2" + " " + "theme-btn search__btn",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-3478accadf3750c2",
                                                                    children: "Check Availability"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                                    lineNumber: 980,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                                lineNumber: 967,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                                            lineNumber: 962,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/Header.jsx",
                                                    lineNumber: 651,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/Header.jsx",
                                                lineNumber: 650,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-1/Header.jsx",
                                            lineNumber: 649,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/Header.jsx",
                                        lineNumber: 648,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        id: "3478accadf3750c2",
                                        children: ".advance__search__wrapper.jsx-3478accadf3750c2{z-index:10;position:relative;overflow:visible}.guest-dropdown.jsx-3478accadf3750c2{z-index:9999}.rts__section.advance__search__section.jsx-3478accadf3750c2{z-index:20;position:relative}.react-datepicker.jsx-3478accadf3750c2{transition:opacity .2s}.navigation__menu--item__link.jsx-3478accadf3750c2{cursor:pointer;text-decoration:none;transition:color .3s}.navigation__menu--item__link.jsx-3478accadf3750c2:hover{color:#ab8a62}@media screen and (width<=767px){.desktop-reserve-btn.jsx-3478accadf3750c2{display:none!important}.top-banner-header.jsx-3478accadf3750c2 .container.jsx-3478accadf3750c2>div.jsx-3478accadf3750c2 a[href=\\/].jsx-3478accadf3750c2{left:50%;transform:translate(-50%)}}@media screen and (width<=768px){.advance__search.jsx-3478accadf3750c2{display:none}.container.jsx-3478accadf3750c2>div.jsx-3478accadf3750c2:first-child{margin-top:18px!important}.top-banner-header.jsx-3478accadf3750c2{padding:0 px}.main__header__wrapper.jsx-3478accadf3750c2{align-items:center!important;height:auto!important;min-height:auto!important;padding:10px 0!important}.top-banner-header.jsx-3478accadf3750c2 .container.jsx-3478accadf3750c2>div.jsx-3478accadf3750c2{padding:15px 0}.topbar.jsx-3478accadf3750c2{margin-top:-80px}.top-banner-header.jsx-3478accadf3750c2 img.jsx-3478accadf3750c2{width:140px!important;height:46px!important}}.line.jsx-3478accadf3750c2{display:none}.main__header__wrapper.jsx-3478accadf3750c2{align-items:center!important;height:auto!important;min-height:auto!important;padding:10px 0!important}.topbar.jsx-3478accadf3750c2{margin-top:-80px}.container.jsx-3478accadf3750c2>div.jsx-3478accadf3750c2:first-child{margin-top:18px!important}@media (width>=768px) and (width<=991px){.logo__class.jsx-3478accadf3750c2{margin-right:50px!important}}@media (width>=992px) and (width<=1199px){.logo__class.jsx-3478accadf3750c2{margin-right:80px!important}}@media (width>=1200px) and (width<=1399px){.logo__class.jsx-3478accadf3750c2{margin-right:50px!important}}@media (width>=1400px){.logo__class.jsx-3478accadf3750c2{margin-right:10px!important}}@media screen and (width>=769px) and (width<=1440px){.main__header__wrapper.jsx-3478accadf3750c2{display:none}}"
                                    }, void 0, false, void 0, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home-1/Header.jsx",
                                lineNumber: 644,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home-1/Header.jsx",
                        lineNumber: 359,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/home-1/Header.jsx",
                    lineNumber: 358,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home-1/Header.jsx",
                lineNumber: 338,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$OffcanvasMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isOffcanvasOpen,
                onClose: ()=>setIsOffcanvasOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/home-1/Header.jsx",
                lineNumber: 1118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$SideMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isMenuOpen,
                onClose: ()=>setIsMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/app/home-1/Header.jsx",
                lineNumber: 1123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = HeaderOne;
}),
"[project]/src/app/about/ABanner.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/aos/dist/aos.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
function ABanner() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
            offset: 0,
            anchorPlacement: 'top-bottom'
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].refreshHard(); // 👈 force recalculation
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rts__section banner__area is__home__one",
            style: {
                width: '100%',
                height: '100vh',
                position: 'relative',
                overflow: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "swiper-wrapper",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "banner__slider__image",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/assets/images/insta/G2.jpg",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about/ABanner.jsx",
                                    lineNumber: 40,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/ABanner.jsx",
                                lineNumber: 39,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row justify-content-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-lg-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "banner__slide__content",
                                            style: {
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                textAlign: 'center',
                                                width: '100%',
                                                zIndex: 3
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    "data-aos": "fade-up",
                                                    "data-aos-delay": "400",
                                                    children: "The Story"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/ABanner.jsx",
                                                    lineNumber: 54,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    "data-aos": "fade-up",
                                                    "data-aos-delay": "600",
                                                    children: "Welcome to Rain drops, where luxury meets comfort"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/about/ABanner.jsx",
                                                    lineNumber: 61,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/about/ABanner.jsx",
                                            lineNumber: 45,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/ABanner.jsx",
                                        lineNumber: 44,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about/ABanner.jsx",
                                    lineNumber: 43,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/ABanner.jsx",
                                lineNumber: 42,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/ABanner.jsx",
                        lineNumber: 38,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/about/ABanner.jsx",
                    lineNumber: 36,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rts__slider__nav",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rts__slide",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "next",
                                role: "button",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: 40,
                                    height: 22,
                                    viewBox: "0 0 40 22",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M1.255 9.75546H39.0404C39.7331 9.75546 40.2927 10.3151 40.2927 11.0078C40.2927 11.7005 39.7331 12.2601 39.0404 12.2601H4.28018L11.8803 19.8603C12.3695 20.3495 12.3695 21.1439 11.8803 21.6331C11.3911 22.1223 10.5967 22.1223 10.1075 21.6331L0.366619 11.8923C0.00657272 11.5322 -0.0990982 10.9961 0.0965805 10.5264C0.292259 10.0607 0.750149 9.75546 1.255 9.75546Z",
                                            fill: "#F1F1F1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/ABanner.jsx",
                                            lineNumber: 86,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M11.0077 0.00274277C11.3286 0.00274277 11.6495 0.124063 11.8921 0.370618C12.3813 0.859813 12.3813 1.65426 11.8921 2.14346L2.13955 11.896C1.65036 12.3852 0.855906 12.3852 0.366712 11.896C-0.122483 11.4068 -0.122483 10.6124 0.366712 10.1232L10.1193 0.370618C10.3658 0.124063 10.6868 0.00274277 11.0077 0.00274277Z",
                                            fill: "#F1F1F1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/ABanner.jsx",
                                            lineNumber: 90,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/about/ABanner.jsx",
                                    lineNumber: 79,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/ABanner.jsx",
                                lineNumber: 78,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/about/ABanner.jsx",
                            lineNumber: 77,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rts__slide",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "prev",
                                role: "button",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: 40,
                                    height: 22,
                                    viewBox: "0 0 40 22",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M39.0377 12.2445L1.25234 12.2445C0.559636 12.2445 -2.04305e-06 11.6849 -1.92194e-06 10.9922C-1.80082e-06 10.2995 0.559637 9.73987 1.25234 9.73987L36.0125 9.73987L28.4124 2.13974C27.9232 1.65055 27.9232 0.856096 28.4124 0.366901C28.9016 -0.122294 29.6961 -0.122293 30.1853 0.366901L39.9261 10.1077C40.2861 10.4678 40.3918 11.004 40.1961 11.4736C40.0005 11.9393 39.5426 12.2445 39.0377 12.2445Z",
                                            fill: "#F1F1F1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/ABanner.jsx",
                                            lineNumber: 106,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M29.2852 21.9973C28.9643 21.9973 28.6433 21.8759 28.4007 21.6294C27.9115 21.1402 27.9115 20.3457 28.4007 19.8565L38.1533 10.104C38.6425 9.61476 39.4369 9.61476 39.9261 10.104C40.4153 10.5932 40.4153 11.3876 39.9261 11.8768L30.1736 21.6294C29.927 21.8759 29.6061 21.9973 29.2852 21.9973Z",
                                            fill: "#F1F1F1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/ABanner.jsx",
                                            lineNumber: 110,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/about/ABanner.jsx",
                                    lineNumber: 99,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/ABanner.jsx",
                                lineNumber: 98,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/about/ABanner.jsx",
                            lineNumber: 97,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/about/ABanner.jsx",
                    lineNumber: 76,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/about/ABanner.jsx",
            lineNumber: 30,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
const __TURBOPACK__default__export__ = ABanner;
}),
"[project]/src/app/home-1/Story.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignaturePrograms
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function SignaturePrograms() {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentImageIndex, setCurrentImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeHover, setActiveHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, {
            threshold: 0.2
        });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return ()=>{
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    // Slideshow effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setCurrentImageIndex((prevIndex)=>{
                const nextIndex = (prevIndex + 1) % 3;
                // Reset hover state when image changes
                setActiveHover(null);
                return nextIndex;
            });
        }, 5000);
        return ()=>clearInterval(interval);
    }, []);
    // Handle pillar hover to change image
    const handlePillarHover = (index)=>{
        setCurrentImageIndex(index);
        setActiveHover(null);
    };
    const images = [
        "/assets/images/story/s6.jpg",
        "/assets/images/story/s5.jpg",
        "/assets/images/story/s7.jpeg"
    ];
    const pillars = [
        {
            id: 0,
            title: "Study",
            description: "Understanding yourself through quiet observation and the natural wisdom of the forest."
        },
        {
            id: 1,
            title: "Investigate",
            description: "Exploring moments, patterns, and experiences with curiosity to see life more clearly."
        },
        {
            id: 2,
            title: "Practice",
            description: "Applying awareness in daily actions, turning simple moments into mindful living."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        className: "jsx-c4ef81ff73a1d87b" + " " + "signature__outer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c4ef81ff73a1d87b" + " " + "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c4ef81ff73a1d87b" + " " + "header-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-c4ef81ff73a1d87b" + " " + "h6 subtitle__icon__three mx-auto",
                                children: "Story"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/Story.jsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    marginBottom: "70px"
                                },
                                className: "jsx-c4ef81ff73a1d87b" + " " + "section__title",
                                children: [
                                    " ",
                                    "The Story"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home-1/Story.jsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home-1/Story.jsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c4ef81ff73a1d87b" + " " + `story-content ${isVisible ? "animate-in delay-2" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-c4ef81ff73a1d87b" + " " + "story-text1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontStyle: "italic",
                                            fontFamily: "BrittanySignature",
                                            fontSize: 19
                                        },
                                        className: "jsx-c4ef81ff73a1d87b",
                                        children: [
                                            " ",
                                            "Rain Drops"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/home-1/Story.jsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    "was born from a simple but powerful idea:",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "jsx-c4ef81ff73a1d87b",
                                        children: "when nature and the human mind meet, clarity happens."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/Story.jsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home-1/Story.jsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-c4ef81ff73a1d87b" + " " + "story-text",
                                children: [
                                    "Business icon",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://diangomes.com/",
                                        className: "jsx-c4ef81ff73a1d87b",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: "#AB8A62"
                                            },
                                            className: "jsx-c4ef81ff73a1d87b",
                                            children: "Dian Gomes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-1/Story.jsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/Story.jsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    "first created this sanctuary beside the Sinharaja Rainforest, designing spaces that breathe with the trees, mist, and quiet rhythm of the forest. When",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.linkedin.com/in/gaminihewawasam",
                                        className: "jsx-c4ef81ff73a1d87b",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: "#AB8A62"
                                            },
                                            className: "jsx-c4ef81ff73a1d87b",
                                            children: "Dr. GB Hewawasam"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-1/Story.jsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/Story.jsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    "experienced the property, he saw a deeper purpose: Rain Drops could become a living classroom for the mind. Today, Dian guides us as Founding Advisor while Dr. GB Hewawasam leads the resort with three practical pillars inspired by the Original Buddha's teaching (presented without religious form):"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home-1/Story.jsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-c4ef81ff73a1d87b" + " " + "story-text"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/Story.jsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home-1/Story.jsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c4ef81ff73a1d87b" + " " + `pillars-hero ${isVisible ? "animate-in delay-3" : ""}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-c4ef81ff73a1d87b" + " " + "hero-image-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c4ef81ff73a1d87b" + " " + "slideshow-wrapper",
                                    children: images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: image,
                                            alt: `Pillar ${index + 1}`,
                                            className: "jsx-c4ef81ff73a1d87b" + " " + `hero-image ${index === currentImageIndex ? "active" : ""}`
                                        }, index, false, {
                                            fileName: "[project]/src/app/home-1/Story.jsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-1/Story.jsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-c4ef81ff73a1d87b" + " " + "pillars-overlay",
                                    children: pillars.map((pillar, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onMouseEnter: ()=>{
                                                handlePillarHover(index);
                                                setActiveHover(pillar.id);
                                            },
                                            onMouseLeave: ()=>setActiveHover(null),
                                            className: "jsx-c4ef81ff73a1d87b" + " " + `pillar-overlay-item ${currentImageIndex !== index ? "disabled" : ""}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>setActiveHover(activeHover === pillar.id ? null : pillar.id),
                                                className: "jsx-c4ef81ff73a1d87b" + " " + `pillar-content ${activeHover === pillar.id ? "show-description" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontWeight: "600"
                                                        },
                                                        className: "jsx-c4ef81ff73a1d87b" + " " + "pillar-overlay-title",
                                                        children: pillar.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/home-1/Story.jsx",
                                                        lineNumber: 174,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontWeight: "600"
                                                        },
                                                        className: "jsx-c4ef81ff73a1d87b" + " " + "pillar-overlay-description",
                                                        children: pillar.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/home-1/Story.jsx",
                                                        lineNumber: 180,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/home-1/Story.jsx",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, this)
                                        }, pillar.id, false, {
                                            fileName: "[project]/src/app/home-1/Story.jsx",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-1/Story.jsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/home-1/Story.jsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/home-1/Story.jsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-c4ef81ff73a1d87b" + " " + `bottom-content ${isVisible ? "animate-in delay-6" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: "18px"
                                },
                                className: "jsx-c4ef81ff73a1d87b" + " " + "story-text-des",
                                children: "Study, Investigate, practice"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/Story.jsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-c4ef81ff73a1d87b" + " " + "story-text-des",
                                children: "These principles shape everything we do, from mindful architecture to the way we help guests understand themselves through nature. Rain Drops is not just a place to stay. It is a place to slow down, learn, and transform. Come experience the rainforest in quiet luxury. Discover a new skill, new insight, or new clarity that travels home with you. Because at Rain Drops, we believe:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/Story.jsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-c4ef81ff73a1d87b" + " " + "story-text2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "jsx-c4ef81ff73a1d87b",
                                    children: '"Nature is not outside of you — it is within you."'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-1/Story.jsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/Story.jsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home-1/Story.jsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home-1/Story.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "c4ef81ff73a1d87b",
                children: '.signature__outer.jsx-c4ef81ff73a1d87b{background:#fff;padding:6rem 0;position:relative;overflow:hidden}.container.jsx-c4ef81ff73a1d87b{max-width:1200px;margin:0 auto;padding:0 2rem}.header-section.jsx-c4ef81ff73a1d87b{text-align:center;margin-bottom:1rem;transform:translateY(-20px)}.header-section.animate-in.jsx-c4ef81ff73a1d87b{animation:.8s forwards fadeInDown}.section_title.jsx-c4ef81ff73a1d87b:before,.section_title.jsx-c4ef81ff73a1d87b:after{content:"⟡";color:#c9a961;font-size:1.5rem;position:absolute;top:50%;transform:translateY(-50%)}.section_title1.jsx-c4ef81ff73a1d87b{margin-bottom:-1rem}.section_title.jsx-c4ef81ff73a1d87b:before{left:0}.section_title.jsx-c4ef81ff73a1d87b:after{right:0}.subtitle.jsx-c4ef81ff73a1d87b{text-align:center;color:#666;opacity:0;margin-bottom:5rem;font-size:16px;transform:translateY(-20px)}.subtitle.animate-in.jsx-c4ef81ff73a1d87b{animation:.8s .2s forwards fadeInDown}.story-content.jsx-c4ef81ff73a1d87b{opacity:0;max-width:1200px;margin:0 auto 5rem;transform:translateY(20px)}.story-content.animate-in.jsx-c4ef81ff73a1d87b{animation:.8s .4s forwards fadeInUp}.story-text1.jsx-c4ef81ff73a1d87b{text-align:center;margin-top:-50px;font-size:16px}.story-text2.jsx-c4ef81ff73a1d87b{text-align:center}.story-text.jsx-c4ef81ff73a1d87b{color:#444;text-align:left;margin-bottom:2rem;font-size:16px}.story-text-des.jsx-c4ef81ff73a1d87b{color:#444;text-align:left;margin-top:-30px;margin-bottom:2rem;font-size:16px}.story-text.highlight.jsx-c4ef81ff73a1d87b{color:#333;font-size:1.3rem;font-weight:400}.story-text.jsx-c4ef81ff73a1d87b strong.jsx-c4ef81ff73a1d87b{color:#000;font-weight:600}.pillars-hero.jsx-c4ef81ff73a1d87b{opacity:0;margin:5rem 0;transform:translateY(30px)}.pillars-hero.animate-in.jsx-c4ef81ff73a1d87b{animation:.8s .6s forwards fadeInUp}.hero-image-container.jsx-c4ef81ff73a1d87b{border-radius:4px;width:100%;max-width:1200px;margin:0 auto;position:relative;overflow:hidden}.slideshow-wrapper.jsx-c4ef81ff73a1d87b{width:100%;min-height:600px;position:relative}.hero-image.jsx-c4ef81ff73a1d87b{object-fit:cover;opacity:0;width:100%;height:100%;min-height:600px;transition:opacity 1s ease-in-out;position:absolute;top:0;left:0}.hero-image.active.jsx-c4ef81ff73a1d87b{opacity:1}.pillars-overlay.jsx-c4ef81ff73a1d87b{z-index:5;background:linear-gradient(#0000 0%,#0009 100%);justify-content:space-around;align-items:flex-end;padding:0;display:flex;position:absolute;bottom:0;left:0;right:0}.pillar-overlay-item.jsx-c4ef81ff73a1d87b{color:#fff;cursor:pointer;flex:1;align-items:flex-end;min-height:120px;display:flex;position:relative}.pillar-overlay-item.disabled.jsx-c4ef81ff73a1d87b{opacity:.4;cursor:not-allowed}.pillar-overlay-item.disabled.jsx-c4ef81ff73a1d87b:hover .pillar-content.jsx-c4ef81ff73a1d87b{transform:translateY(0)}.pillar-overlay-item.jsx-c4ef81ff73a1d87b:not(:last-child):after{content:"";background-image:url(/assets/images/story/png.png);background-position:50%;background-repeat:no-repeat;background-size:contain;width:40px;height:100px;position:absolute;bottom:40px;right:0}.pillar-content.jsx-c4ef81ff73a1d87b{cursor:pointer;width:100%;padding:2rem;transition:transform .4s;transform:translateY(0)}.pillar-content.show-description.jsx-c4ef81ff73a1d87b{transform:translateY(-30px)}.pillar-overlay-item.disabled.jsx-c4ef81ff73a1d87b .pillar-content.jsx-c4ef81ff73a1d87b{cursor:default}.pillar-overlay-title.jsx-c4ef81ff73a1d87b{color:#fff;font-size:1.5rem;font-weight:300;font-family:var(--jost);letter-spacing:2px;text-transform:capitalize;margin:0 0 1rem;transition:all .3s}.pillar-overlay-description.jsx-c4ef81ff73a1d87b{opacity:0;text-shadow:1px 1px 6px #000000e6;max-height:0;margin:0;font-size:1rem;font-weight:300;line-height:1.6;transition:max-height .4s,opacity .4s;overflow:hidden}.pillar-content.show-description.jsx-c4ef81ff73a1d87b .pillar-overlay-description.jsx-c4ef81ff73a1d87b{opacity:1;max-height:150px}.bottom-content.jsx-c4ef81ff73a1d87b{opacity:0;max-width:1200px;margin:4rem auto 0;transform:translateY(20px)}.bottom-content.animate-in.jsx-c4ef81ff73a1d87b{animation:.8s 1.2s forwards fadeInUp}@keyframes fadeInDown{to{opacity:1;transform:translateY(0)}}@keyframes fadeInUp{to{opacity:1;transform:translateY(0)}}@media (width<=1024px){.section_title.jsx-c4ef81ff73a1d87b{padding:0 3rem;font-size:2.2rem}.pillar-overlay-title.jsx-c4ef81ff73a1d87b{font-size:2rem}.pillar-content.jsx-c4ef81ff73a1d87b{padding:1.5rem}}@media (width<=768px){.signature__outer.jsx-c4ef81ff73a1d87b{padding:4rem 0}.container.jsx-c4ef81ff73a1d87b{padding:0 1.5rem}.section_title.jsx-c4ef81ff73a1d87b{letter-spacing:2px;padding:0 2.5rem;font-size:1.8rem}.section_title.jsx-c4ef81ff73a1d87b:before,.section_title.jsx-c4ef81ff73a1d87b:after{font-size:1.2rem}.slideshow-wrapper.jsx-c4ef81ff73a1d87b,.hero-image.jsx-c4ef81ff73a1d87b{min-height:500px}.pillars-overlay.jsx-c4ef81ff73a1d87b{flex-direction:column;align-items:stretch;gap:0}.pillar-overlay-item.jsx-c4ef81ff73a1d87b{min-height:100px}.pillar-overlay-item.jsx-c4ef81ff73a1d87b:not(:last-child):after{display:none}.pillar-overlay-title.jsx-c4ef81ff73a1d87b{font-size:1.8rem}.pillar-content.jsx-c4ef81ff73a1d87b{padding:1.5rem}.story-text.jsx-c4ef81ff73a1d87b{font-size:1rem}}@media (width<=480px){.signature__outer.jsx-c4ef81ff73a1d87b{padding:6rem 0}.container.jsx-c4ef81ff73a1d87b{padding:0 1rem}.section_title.jsx-c4ef81ff73a1d87b{letter-spacing:1px;padding:0 2rem;font-size:1.4rem}.section_title.jsx-c4ef81ff73a1d87b:before,.section_title.jsx-c4ef81ff73a1d87b:after{font-size:1rem}.subtitle.jsx-c4ef81ff73a1d87b{margin-bottom:5rem;font-size:1rem}.slideshow-wrapper.jsx-c4ef81ff73a1d87b,.hero-image.jsx-c4ef81ff73a1d87b{min-height:400px}.pillar-overlay-item.jsx-c4ef81ff73a1d87b{min-height:80px}.pillar-overlay-title.jsx-c4ef81ff73a1d87b{font-size:1.5rem}.pillar-overlay-description.jsx-c4ef81ff73a1d87b{font-size:.9rem}.pillar-content.jsx-c4ef81ff73a1d87b{padding:1rem}.pillar-content.show-description.jsx-c4ef81ff73a1d87b{transform:translateY(-20px)}.story-text.jsx-c4ef81ff73a1d87b,.story-text-des.jsx-c4ef81ff73a1d87b{text-align:center;justify-content:center;font-size:.95rem}}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/home-1/Story.jsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/home-1/Founders.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FoundersVisionaries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function FoundersVisionaries() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-bdabd02dc5666389" + " " + "founders-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-bdabd02dc5666389" + " " + "founders-wrapper",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-bdabd02dc5666389" + " " + "section-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-bdabd02dc5666389" + " " + "section_title",
                                children: "Founders & Visioneries"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/Founders.jsx",
                                lineNumber: 11,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-bdabd02dc5666389" + " " + "divider"
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/Founders.jsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home-1/Founders.jsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-bdabd02dc5666389" + " " + "top-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-bdabd02dc5666389" + " " + "founder-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-bdabd02dc5666389" + " " + "founder-image",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/images/founders/GB2nd_img.png",
                                            alt: "Dr.GB. Hewawasam",
                                            width: 380,
                                            height: 360,
                                            className: "founder-img",
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-1/Founders.jsx",
                                            lineNumber: 20,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/Founders.jsx",
                                        lineNumber: 19,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.linkedin.com/in/gaminihewawasam",
                                        className: "jsx-bdabd02dc5666389",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-bdabd02dc5666389" + " " + "founder-name",
                                                children: " Dr. GB Hewawasam"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/Founders.jsx",
                                                lineNumber: 30,
                                                columnNumber: 15
                                            }, this),
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/home-1/Founders.jsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-bdabd02dc5666389" + " " + "founder-role",
                                        children: 'Founder of the "Mind Meets Nature" Philosophy'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/Founders.jsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-bdabd02dc5666389",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://www.forbes.com/councils/forbescoachescouncil/people/gaminihewawasam/",
                                            className: "jsx-bdabd02dc5666389",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/images/logo/forbes_logo.png",
                                                alt: "",
                                                loading: "lazy",
                                                className: "jsx-bdabd02dc5666389" + " " + "forbes"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/Founders.jsx",
                                                lineNumber: 38,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-1/Founders.jsx",
                                            lineNumber: 37,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/Founders.jsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-bdabd02dc5666389" + " " + "divider"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/Founders.jsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-bdabd02dc5666389" + " " + "founder-qualifications",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "jsx-bdabd02dc5666389",
                                            children: "Ph.D., MBA, CTIE - Leadership Scholar | Global Wellness Strategist"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-1/Founders.jsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/Founders.jsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-bdabd02dc5666389" + " " + "founder-description",
                                        children: "Dr Hewawasam bridges mindfulness, neuroscience, and leadership. Under his guidance, Rain Drops has become a living ecosystem of clarity, compassion, and purpose."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/Founders.jsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home-1/Founders.jsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-bdabd02dc5666389" + " " + "founder-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-bdabd02dc5666389" + " " + "founder-image",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/images/founders/3f.png",
                                            alt: "Dian Gomes",
                                            width: 380,
                                            height: 360,
                                            className: "founder-img",
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-1/Founders.jsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/Founders.jsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://diangomes.com/",
                                        className: "jsx-bdabd02dc5666389",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-bdabd02dc5666389" + " " + "founder-name",
                                            children: "Dian Gomes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-1/Founders.jsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/Founders.jsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-bdabd02dc5666389" + " " + "founder-role",
                                        children: "Founding Visionary | Advisor to Rain Drops Wellness Resort"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/Founders.jsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-bdabd02dc5666389",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://diangomes.com/",
                                            className: "jsx-bdabd02dc5666389",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/images/logo/gomes_logo.png",
                                                alt: "",
                                                loading: "lazy",
                                                className: "jsx-bdabd02dc5666389" + " " + "gomeslogo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/Founders.jsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-1/Founders.jsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/Founders.jsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-bdabd02dc5666389" + " " + "divider"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/Founders.jsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-bdabd02dc5666389" + " " + "founder-qualifications",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "jsx-bdabd02dc5666389",
                                            children: "Business Icon | Philanthropist | Mentor in Purposeful Living"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-1/Founders.jsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/Founders.jsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-bdabd02dc5666389" + " " + "founder-description",
                                        children: "Dian envisioned Rain Drops as a space where architecture breathes with nature. Though he now serves as advisor, his spirit continues to guide the team."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/Founders.jsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/home-1/Founders.jsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home-1/Founders.jsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home-1/Founders.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "bdabd02dc5666389",
                children: ".founders-container.jsx-bdabd02dc5666389{color:#4a4a4a;background:#fff;min-height:100vh;padding:60px 0;font-family:Georgia,serif;line-height:1.6}.founders-wrapper.jsx-bdabd02dc5666389{max-width:1200px;margin:0 auto;padding:0 20px}.section-header.jsx-bdabd02dc5666389{text-align:center;margin-bottom:60px}.divider.jsx-bdabd02dc5666389{background:#bda671;width:100px;height:1px;margin:20px auto}.top-row.jsx-bdabd02dc5666389{flex-wrap:wrap;justify-content:center;gap:60px;margin-bottom:60px;display:flex}.center-row.jsx-bdabd02dc5666389{justify-content:center;width:100%;display:flex}.founder-card.jsx-bdabd02dc5666389{text-align:center;width:100%;max-width:420px}.center-card.jsx-bdabd02dc5666389{flex-direction:column;align-items:center;max-width:680px;display:flex}.founder-image.jsx-bdabd02dc5666389{flex-shrink:0;width:340px;height:340px;margin:0 auto 25px}.founder-img.jsx-bdabd02dc5666389{object-fit:contain;width:100%;height:100%}.founder-name.jsx-bdabd02dc5666389{color:#333;margin:15px 0 10px;font-size:22px;font-weight:400}.founder-role.jsx-bdabd02dc5666389{color:#bda671;margin-bottom:20px;font-size:16px;font-style:italic}.founder-qualifications.jsx-bdabd02dc5666389{color:#333;margin-bottom:15px;font-size:14px}.founder-description.jsx-bdabd02dc5666389{color:#666;font-size:14px;line-height:1.7}.forbes.jsx-bdabd02dc5666389{cursor:pointer;width:70%;max-width:400px}.gomeslogo.jsx-bdabd02dc5666389{cursor:pointer;width:65%;max-width:400px}.linkedin.jsx-bdabd02dc5666389{cursor:pointer;width:70%;max-width:60px}.center-description.jsx-bdabd02dc5666389{text-align:center;max-width:680px;margin:0 auto;font-size:15px}@media (width>=768px){.top-row.jsx-bdabd02dc5666389{gap:140px}.founder-card.jsx-bdabd02dc5666389{max-width:380px}.center-card.jsx-bdabd02dc5666389{max-width:680px}.founder-name.jsx-bdabd02dc5666389{font-size:24px}.founder-role.jsx-bdabd02dc5666389{font-size:18px}.founder-description.jsx-bdabd02dc5666389,.center-description.jsx-bdabd02dc5666389{font-size:15px}}@media (width<=767px){.top-row.jsx-bdabd02dc5666389{flex-direction:column;align-items:center}.center-row.jsx-bdabd02dc5666389{justify-content:center;display:flex}.center-card.jsx-bdabd02dc5666389{flex-direction:column;align-items:center;width:100%;max-width:420px;display:flex}.founder-image.jsx-bdabd02dc5666389{width:340px;height:340px}.founder-img.jsx-bdabd02dc5666389{object-fit:contain;width:280px;height:280px}.section_title.jsx-bdabd02dc5666389{font-size:28px}.center-description.jsx-bdabd02dc5666389{text-align:center;width:100%;padding:0 20px;font-size:14.5px}}@media (width<=480px){.center-card.jsx-bdabd02dc5666389{max-width:340px}.founder-image.jsx-bdabd02dc5666389{width:340px;height:340px}.founder-img.jsx-bdabd02dc5666389{width:240px;height:240px}.founder-name.jsx-bdabd02dc5666389{font-size:21px}.center-description.jsx-bdabd02dc5666389{padding:0 15px}}@media (width<=360px){.center-card.jsx-bdabd02dc5666389{max-width:320px}.founder-image.jsx-bdabd02dc5666389{width:320px;height:320px}.founder-img.jsx-bdabd02dc5666389{content-justify:center;width:220px;height:220px}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/home-1/Founders.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/about/Team.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OurTeam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function OurTeam() {
    const [expandedCard, setExpandedCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const toggleReadMore = (cardId)=>{
        setExpandedCard((prev)=>({
                ...prev,
                [cardId]: !prev[cardId]
            }));
    };
    const teamMembers = [
        {
            id: 'shashika',
            name: "Shashika Malinda",
            role: "General Manager",
            image: "/assets/images/founders/1f.png",
            qualifications: "11+ Years Luxury Hospitality Experience | Qatar & Sri Lanka",
            shortText: "With 11+ years of luxury hospitality experience in Qatar and Sri Lanka, Shashika brings calm leadership and refined service shaped by brands like Taj, Eden, Villa Republic, Crowne Plaza, and Holiday Inn.",
            fullText: "With 11+ years of luxury hospitality experience in Qatar and Sri Lanka, Shashika brings calm leadership and refined service shaped by brands like Taj, Eden, Villa Republic, Crowne Plaza, and Holiday Inn. As the guardian of our \"Mind Meets Nature\" philosophy, he ensures every guest leaves Rain Drops with a meaningful insight that enriches their journey.\n\nHis guiding philosophy is simple: \"Every guest carries a story. My duty is to make Rain Drops a chapter that awakens wisdom and stays for life.\""
        },
        {
            id: 'chef',
            name: "Chef Sadha",
            role: "Wellness Cuisine Chef",
            image: "/assets/images/founders/4f.png",
            qualifications: "Former Presidential Chef | 20+ Years Elite Culinary Experience",
            shortText: "Former Presidential Chef with 20+ years of elite culinary experience, Chef Sadharuwan brings refined technique and soulful intention to Rain Drops.",
            fullText: "Former Presidential Chef with 20+ years of elite culinary experience, Chef Sadharuwan brings refined technique and soulful intention to Rain Drops. Having served state leaders and shaped menus across Sri Lanka's top luxury properties, he now transforms dining into a ritual of calm, clarity, and wellness — guided by rainforest ingredients and mindful cooking.\n\nHis guiding philosophy is simple: \"When food is created with awareness, it nourishes both the body and the mind.\""
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-b234410f94e3492" + " " + "team-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-b234410f94e3492" + " " + "team-wrapper",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b234410f94e3492" + " " + "section-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-b234410f94e3492" + " " + "section_title",
                                children: "Our Team"
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/Team.jsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b234410f94e3492" + " " + "divider"
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/Team.jsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/Team.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-b234410f94e3492" + " " + "team-row",
                        children: teamMembers.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b234410f94e3492" + " " + "team-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-b234410f94e3492" + " " + "team-image",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: member.image,
                                            alt: member.name,
                                            width: 380,
                                            height: 360,
                                            className: "team-img"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/Team.jsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/Team.jsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-b234410f94e3492" + " " + "team-name",
                                        children: member.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/Team.jsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-b234410f94e3492" + " " + "team-role",
                                        children: member.role
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/Team.jsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-b234410f94e3492" + " " + "divider"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/Team.jsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-b234410f94e3492" + " " + "team-qualifications",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: "jsx-b234410f94e3492",
                                            children: member.qualifications
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/Team.jsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/Team.jsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-b234410f94e3492" + " " + "team-description",
                                        children: [
                                            expandedCard[member.id] ? member.fullText : member.shortText,
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                onClick: ()=>toggleReadMore(member.id),
                                                className: "jsx-b234410f94e3492" + " " + "read-more-link",
                                                children: expandedCard[member.id] ? 'see less' : 'see more'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/Team.jsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/about/Team.jsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, member.id, true, {
                                fileName: "[project]/src/app/about/Team.jsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/Team.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/Team.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "b234410f94e3492",
                children: ".team-container.jsx-b234410f94e3492{color:#4a4a4a;background:#fff;min-height:100vh;padding:60px 0;font-family:Georgia,serif;line-height:1.6}.team-wrapper.jsx-b234410f94e3492{max-width:1200px;margin:0 auto;padding:0 20px}.section-header.jsx-b234410f94e3492{text-align:center;margin-bottom:60px}.divider.jsx-b234410f94e3492{background:#bda671;width:100px;height:1px;margin:20px auto}.team-row.jsx-b234410f94e3492{flex-wrap:wrap;justify-content:center;gap:60px;margin-bottom:40px;display:flex}.team-card.jsx-b234410f94e3492{text-align:center;width:100%;max-width:420px}.team-image.jsx-b234410f94e3492{flex-shrink:0;width:340px;height:340px;margin:0 auto 25px}.team-img.jsx-b234410f94e3492{object-fit:contain;width:100%;height:100%}.team-name.jsx-b234410f94e3492{color:#333;margin:15px 0 10px;font-size:24px;font-weight:400}.team-role.jsx-b234410f94e3492{color:#bda671;margin-bottom:20px;font-size:16px;font-style:italic}.team-qualifications.jsx-b234410f94e3492{color:#333;margin-bottom:15px;font-size:14px}.team-description.jsx-b234410f94e3492{color:#666;white-space:pre-line;margin-bottom:20px;font-size:14px;line-height:1.7}.read-more-link.jsx-b234410f94e3492{color:#bda671;cursor:pointer;font-size:14px;font-style:italic;text-decoration:none;transition:color .3s}.read-more-link.jsx-b234410f94e3492:hover{color:#8d7a4f;text-decoration:underline}@media (width>=768px){.team-row.jsx-b234410f94e3492{gap:80px}.team-card.jsx-b234410f94e3492{max-width:450px}.team-name.jsx-b234410f94e3492{font-size:26px}.team-role.jsx-b234410f94e3492{font-size:17px}.team-description.jsx-b234410f94e3492{font-size:15px}}@media (width<=767px){.section_title.jsx-b234410f94e3492{font-size:28px}.team-row.jsx-b234410f94e3492{flex-direction:column;align-items:center;gap:50px}.team-image.jsx-b234410f94e3492{width:340px;height:340px}.team-img.jsx-b234410f94e3492{object-fit:contain;width:280px;height:280px}.team-description.jsx-b234410f94e3492{padding:0 20px;font-size:14.5px}.read-more-link.jsx-b234410f94e3492{font-size:14.5px}}@media (width<=480px){.team-card.jsx-b234410f94e3492{max-width:340px}.team-image.jsx-b234410f94e3492{width:340px;height:340px}.team-img.jsx-b234410f94e3492{width:240px;height:240px}.team-name.jsx-b234410f94e3492{font-size:21px}.team-description.jsx-b234410f94e3492{padding:0 15px}}@media (width<=360px){.team-card.jsx-b234410f94e3492{max-width:320px}.team-image.jsx-b234410f94e3492{width:320px;height:320px}.team-img.jsx-b234410f94e3492{width:220px;height:220px}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/about/Team.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/home-1/TestimonialOne.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-ssr] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript) <export default as Autoplay>");
// 'use client'
// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; // Core Swiper styles
// import { Navigation } from 'swiper/modules';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/scrollbar';
// function TestimonialOne() {
//     return (
//         <>
//             {/* client testimonial  */}
//             <div className="rts__section section__padding testimonial has__shape">
//                 <div className="container">
//                     <div className="row mb-40">
//                         <div className="d-flex align-items-center justify-content-between position-relative">
//                             <div className="section__content__left">
//                                 <span className="h6 subtitle__icon__two d-block wow fadeInUp">
//                                     Testimonial
//                                 </span>
//                                 <h2 className="content__title h2 lh-1">What Our Client Say</h2>
//                             </div>
//                             <div className="slider__navigation">
//                                 <div className="nav__btn button-next">
//                                     <img src="/assets/images/icon/arrow-left-short.svg" alt="" />
//                                 </div>
//                                 <div className="nav__btn button-prev">
//                                     <img src="/assets/images/icon/arrow-right-short.svg" alt="" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-11">
//                             <div className="">
//                                 <Swiper
//                                     className="testimonial__slider overflow-hidden"
//                                     modules={[Navigation]}
//                                     direction="horizontal"
//                                     slidesPerView={1}
//                                     spaceBetween={0}
//                                     loop={true}
//                                     centeredSlides={true}
//                                     autoplay="false"
//                                     navigation={{
//                                         nextEl: ".button-next",
//                                         prevEl: ".button-prev",
//                                     }}
//                                     speed={1000}
//                                     effect="slide"
//                                 >
//                                     <SwiperSlide>
//                                         <div className="testimonial__item__content">
//                                             <div className="author__icon">
//                                                   <img src="https://i.postimg.cc/kgz1YJtL/ludema.jpg" alt="" />
//                                             </div>
//                                             <div className="testimonial__content">
//                                                 <div className="single__slider__item ">
//                                                     <div className="slider__rating mb-20">
//                                                         {/* <i className="flaticon-star" /> */}
//                                                         {/* <i className="flaticon-star" /> */}
//                                                         {/* <i className="flaticon-star" /> */}
//                                                         {/* <i className="flaticon-star" /> */}
//                                                         {/* <i className="flaticon-star-sharp-half-stroke" /> */}
//                                                          <h4 className="topic-title"style={{ fontSize: '1.8rem' }}>Where Beauty Meets Mindfulness</h4>
//                                                     </div>
//                                                    <span className="slider__text d-block mb-20" style={{ fontSize: '1.125rem', lineHeight: '1.3' }}>
//                                                        Lanka's natural beauty was both awe-inspiring and soothing. A true highlight for Beverly and me was discovering Buddhist mindfulness and meditation.
// That quiet moment of learning brought clarity, peace, and gratitude—something we'll carry with us long after this beautiful journey ends.
//                                                     </span>
//                                                     <div className="slider__author__info">
//                                                         <div className="slider__author__info__content">
//                                                             <h6 className="mb-0"style={{ fontSize: '1.2rem' }}>Dr. Jim Ludema</h6>
//                                                             {/* <span>COO of Apex Solutions</span> */}
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </SwiperSlide>
//                                     <SwiperSlide>
//                                         <div className="testimonial__item__content">
//                                             <div className="author__icon">
//                                                 <img src="https://i.postimg.cc/XYGxCRDB/ludema2.jpg" alt="" />
//                                             </div>
//                                             <div className="testimonial__content">
//                                                 <div className="single__slider__item ">
//                                                     <div className="slider__rating mb-20">
//                                                         {/* <i className="flaticon-star" /> */}
//                                                         {/* <i className="flaticon-star" /> */}
//                                                         {/* <i className="flaticon-star" /> */}
//                                                         {/* <i className="flaticon-star" /> */}
//                                                         {/* <i className="flaticon-star-sharp-half-stroke" /> */}
//                                                          <h4 className="topic-title"style={{ fontSize: '1.8rem' }}>An Unforgettable Journey</h4>
//                                                     </div>
//                                                   <span className="slider__text d-block mb-20" style={{ fontSize: '1.125rem', lineHeight: '1.3' }}>
//                                                        The serene landscapes and rich cultural experiences in Lanka exceeded all our expectations. We found ourselves immersed in traditions that date back thousands of years.
//                                                        Each day brought new discoveries and moments of connection that transformed not just our vacation, but our perspective on life.
//                                                     </span>
//                                                     <div className="slider__author__info">
//                                                         <div className="slider__author__info__content">
//                                                             <h6 className="mb-0"style={{ fontSize: '1.2rem' }}>Dr. Beverly Ludema</h6>
//                                                             {/* <span>COO of Apex Solutions</span> */}
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </SwiperSlide>
//                                 </Swiper>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* client testimonial  end */}
//         </>
//     )
// }
// export default TestimonialOne
"use client";
;
;
;
;
;
;
;
;
;
;
function TestimonialOne() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-28b5419449c9da3e" + " " + "rts__section section__padding testimonial has__shape",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-28b5419449c9da3e" + " " + "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-28b5419449c9da3e" + " " + "row ",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-28b5419449c9da3e" + " " + "row justify-content-center text-center mb-40",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "300",
                                    className: "jsx-28b5419449c9da3e" + " " + "col-lg-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-28b5419449c9da3e" + " " + "section__topbar",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-28b5419449c9da3e" + " " + "h6 subtitle__icon__three mx-auto",
                                                children: "Testimonial"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                lineNumber: 148,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-28b5419449c9da3e" + " " + "content__title h2 lh-1",
                                                children: "what our client say"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                lineNumber: 151,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-28b5419449c9da3e" + " " + "row",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-28b5419449c9da3e" + " " + "col-lg-11",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-28b5419449c9da3e" + " " + "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                                        className: "testimonial__slider overflow-hidden",
                                        modules: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
                                        ],
                                        direction: "horizontal",
                                        slidesPerView: 1,
                                        spaceBetween: 0,
                                        loop: true,
                                        centeredSlides: true,
                                        autoplay: {
                                            delay: 3000,
                                            disableOnInteraction: false,
                                            pauseOnMouseEnter: true
                                        },
                                        navigation: {
                                            nextEl: ".button-next",
                                            prevEl: ".button-prev"
                                        },
                                        speed: 1000,
                                        effect: "slide",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-28b5419449c9da3e" + " " + "testimonial__item__content",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-28b5419449c9da3e" + " " + "author__icon",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "https://i.postimg.cc/kgz1YJtL/ludema.jpg",
                                                                alt: "",
                                                                loading: "lazy",
                                                                className: "jsx-28b5419449c9da3e"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                                lineNumber: 184,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                            lineNumber: 183,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-28b5419449c9da3e" + " " + "testimonial__content",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-28b5419449c9da3e" + " " + "single__slider__item ",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-28b5419449c9da3e" + " " + "slider__rating mb-20",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            style: {
                                                                                fontSize: "1.8rem"
                                                                            },
                                                                            className: "jsx-28b5419449c9da3e" + " " + "topic-title",
                                                                            children: "Where Beauty Meets Mindfulness"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                                            lineNumber: 193,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: "1.125rem",
                                                                            lineHeight: "1.3"
                                                                        },
                                                                        className: "jsx-28b5419449c9da3e" + " " + "slider__text d-block mb-20",
                                                                        children: "Sri Lanka's natural beauty was both awe-inspiring and soothing. A true highlight for Beverly and me was discovering Buddhist mindfulness and meditation. That quiet moment of learning brought clarity, peace, and gratitude—something we'll carry with us long after this beautiful journey ends."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                                        lineNumber: 200,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-28b5419449c9da3e" + " " + "slider__author__info",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-28b5419449c9da3e" + " " + "slider__author__info__content",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                style: {
                                                                                    fontSize: "1.2rem"
                                                                                },
                                                                                className: "jsx-28b5419449c9da3e" + " " + "mb-0",
                                                                                children: "Dr. Jim Ludema"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                                                lineNumber: 213,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                                            lineNumber: 212,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                                        lineNumber: 211,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                                lineNumber: 191,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                            lineNumber: 190,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                    lineNumber: 182,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-28b5419449c9da3e" + " " + "testimonial__item__content",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-28b5419449c9da3e" + " " + "author__icon",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "https://i.postimg.cc/XYGxCRDB/ludema2.jpg",
                                                                alt: "",
                                                                loading: "lazy",
                                                                className: "jsx-28b5419449c9da3e"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                                lineNumber: 228,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                            lineNumber: 227,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-28b5419449c9da3e" + " " + "testimonial__content",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-28b5419449c9da3e" + " " + "single__slider__item ",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-28b5419449c9da3e" + " " + "slider__rating mb-20",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            style: {
                                                                                fontSize: "1.8rem"
                                                                            },
                                                                            className: "jsx-28b5419449c9da3e" + " " + "topic-title",
                                                                            children: "An Unforgettable Journey"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                                            lineNumber: 237,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                                        lineNumber: 236,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: "1.125rem",
                                                                            lineHeight: "1.3"
                                                                        },
                                                                        className: "jsx-28b5419449c9da3e" + " " + "slider__text d-block mb-20",
                                                                        children: "The serene landscapes and rich cultural experiences in Lanka exceeded all our expectations. We found ourselves immersed in traditions that date back thousands of years. Each day brought new discoveries and moments of connection that transformed not just our vacation, but our perspective on life."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                                        lineNumber: 244,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-28b5419449c9da3e" + " " + "slider__author__info",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-28b5419449c9da3e" + " " + "slider__author__info__content",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                style: {
                                                                                    fontSize: "1.2rem"
                                                                                },
                                                                                className: "jsx-28b5419449c9da3e" + " " + "mb-0",
                                                                                children: "Dr. Beverly Ludema"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                                                lineNumber: 257,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                                            lineNumber: 256,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                                        lineNumber: 255,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                                lineNumber: 235,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                            lineNumber: 234,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                    lineNumber: 226,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                                lineNumber: 225,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                        lineNumber: 161,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home-1/TestimonialOne.jsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "28b5419449c9da3e",
                children: "@media (width<=768px){.testimonial__item__content{text-align:center!important;flex-direction:column!important;align-items:center!important;display:flex!important}.author__icon{justify-content:center!important;margin-bottom:25px!important;display:flex!important}.author__icon img{object-fit:cover!important;border:4px solid #c8b08a!important;border-radius:50%!important;width:100px!important;height:300px!important}.testimonial__content{text-align:center!important;width:100%!important}.slider__rating{text-align:center!important;margin-bottom:15px!important}.slider__rating h4{text-align:center!important;margin:0 auto!important;font-size:1.4rem!important}.slider__text{text-align:center!important;margin-bottom:20px!important;padding:0 10px!important;font-size:1rem!important;line-height:1.5!important}.slider__author__info{text-align:center!important;justify-content:center!important}.slider__author__info__content h6{text-align:center!important;font-size:1.1rem!important}@media (width<=320px){.author__icon img{object-fit:cover;width:50px;height:50px;border:3px solid #c8b08a!important;border-radius:50%!important}.testimonial__item__content{justify-content:center!important;align-items:center!important;gap:15px!important;padding:20px 0!important}.slider__rating h4{font-size:1.2rem!important}.slider__text{padding:0 5px!important;font-size:.9rem!important}.slider__author__info__content h6{font-size:1rem!important}@media (width>=769px) and (width<=1024px){.author__icon img{width:140px!important;height:140px!important}.slider__rating h4{font-size:1.6rem!important}.slider__text{font-size:1.1rem!important}}.testimonial__item__content{justify-content:center;align-items:center;gap:30px;padding:30px 0;display:flex}.author__icon img{object-fit:cover;border:5px solid #c8b08a;border-radius:50%;width:160px;height:160px}.testimonial__content{flex:1;max-width:700px}}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = TestimonialOne;
}),
"[project]/src/app/about/family.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function WebsitePortfolio() {
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const websites = [
        {
            id: 1,
            name: "Manolead",
            url: "https://manolead.com",
            logo: "/assets/images/logo/Manolead-01.png",
            description: "Leading digital solutions and innovation",
            width: 267,
            height: 120
        },
        {
            id: 2,
            name: "Mindful Living",
            url: "https://magga.life",
            logo: "/assets/images/logo/Magga Logo.png",
            description: "Wellness and mindfulness platform",
            width: 267,
            height: 100
        },
        {
            id: 3,
            name: "IntTerminal",
            url: "https://intterminal.com",
            logo: "/assets/images/logo/intt logor 2.png",
            description: "Terminal services and logistics",
            width: 277,
            height: 100
        },
        {
            id: 4,
            name: "Int Leisure",
            url: "https://intleisure.com",
            logo: "/assets/images/logo/NEW INTTL Logo Color.png",
            description: "Premium leisure experiences",
            width: 267,
            height: 100
        },
        {
            id: 5,
            name: "Int Advisor",
            url: "https://intadvisor.com",
            logo: "/assets/images/logo/Int Advisor horizontal  (4).png",
            description: "Professional advisory services",
            width: 267,
            height: 60
        },
        {
            id: 6,
            name: "Kumbuk Villa",
            url: "https://kumbukvilla.com",
            logo: "/assets/images/logo/kumbuk villa logo.png",
            description: "Luxury hospitality destination",
            width: 267,
            height: 100
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const container = scrollRef.current;
        const content = contentRef.current;
        if (!container || !content) return;
        let animationId;
        let scrollPos = 0;
        const speed = 1;
        const originalContent = content.innerHTML;
        content.innerHTML = originalContent + originalContent;
        const autoScroll = ()=>{
            scrollPos += speed;
            if (scrollPos >= content.scrollWidth / 2) {
                scrollPos = 0;
            }
            container.scrollLeft = scrollPos;
            animationId = requestAnimationFrame(autoScroll);
        };
        animationId = requestAnimationFrame(autoScroll);
        const handleMouseEnter = ()=>{
            cancelAnimationFrame(animationId);
        };
        const handleMouseLeave = ()=>{
            animationId = requestAnimationFrame(autoScroll);
        };
        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);
        return ()=>{
            cancelAnimationFrame(animationId);
            container.removeEventListener('mouseenter', handleMouseEnter);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-d5092634768a7c0d" + " " + "portfolio__section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-d5092634768a7c0d" + " " + "portfolio__container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-d5092634768a7c0d" + " " + "portfolio__header",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-d5092634768a7c0d" + " " + "header__content",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-d5092634768a7c0d" + " " + "section__title",
                                    children: "Our Brands Presence"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about/family.jsx",
                                    lineNumber: 116,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/family.jsx",
                                lineNumber: 115,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/about/family.jsx",
                            lineNumber: 114,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: scrollRef,
                            className: "jsx-d5092634768a7c0d" + " " + "portfolio-scroll-container",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: contentRef,
                                className: "jsx-d5092634768a7c0d" + " " + "portfolio-scroll-content",
                                children: websites.map((website)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-d5092634768a7c0d" + " " + "portfolio-scroll-item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: website.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "portfolio__link",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-d5092634768a7c0d" + " " + "logo__container",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: website.logo,
                                                        alt: `${website.name} logo`,
                                                        width: website.width,
                                                        height: website.height,
                                                        className: `logo__image ${website.name.toLowerCase().replace(' ', '-')}-logo`,
                                                        onError: (e)=>{
                                                            e.target.style.display = 'none';
                                                            e.target.nextElementSibling.style.display = 'flex';
                                                        },
                                                        loading: "lazy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/family.jsx",
                                                        lineNumber: 136,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-d5092634768a7c0d" + " " + "logo__fallback",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-d5092634768a7c0d" + " " + "fallback__text",
                                                            children: website.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/about/family.jsx",
                                                            lineNumber: 149,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/about/family.jsx",
                                                        lineNumber: 148,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/about/family.jsx",
                                                lineNumber: 135,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/family.jsx",
                                            lineNumber: 129,
                                            columnNumber: 37
                                        }, this)
                                    }, website.id, false, {
                                        fileName: "[project]/src/app/about/family.jsx",
                                        lineNumber: 128,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/about/family.jsx",
                                lineNumber: 123,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/about/family.jsx",
                            lineNumber: 119,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/about/family.jsx",
                    lineNumber: 112,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/about/family.jsx",
                lineNumber: 111,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "d5092634768a7c0d",
                children: ".portfolio__section.jsx-d5092634768a7c0d{background:0 0;padding:80px 0;position:relative;overflow:hidden}.portfolio__container.jsx-d5092634768a7c0d{max-width:1280px;margin:0 auto;padding:0 20px;position:relative}.portfolio__header.jsx-d5092634768a7c0d{text-align:center;margin-bottom:60px}.portfolio-scroll-container.jsx-d5092634768a7c0d{-webkit-overflow-scrolling:touch;scrollbar-width:none;-ms-overflow-style:none;width:100%;padding:40px 0;position:relative;overflow-x:hidden;-webkit-mask-image:linear-gradient(90deg,#0000 0%,#000 8% 92%,#0000 100%);mask-image:linear-gradient(90deg,#0000 0%,#000 8% 92%,#0000 100%)}.portfolio-scroll-container.jsx-d5092634768a7c0d::-webkit-scrollbar{display:none}.portfolio-scroll-content.jsx-d5092634768a7c0d{align-items:center;gap:80px;width:max-content;padding:0 40px;display:flex}.portfolio-scroll-item.jsx-d5092634768a7c0d{flex:none}.portfolio__link.jsx-d5092634768a7c0d{text-decoration:none;transition:all .4s cubic-bezier(.4,0,.2,1);display:block}.portfolio__link.jsx-d5092634768a7c0d:hover{transform:translateY(-8px)}.logo__container.jsx-d5092634768a7c0d{justify-content:center;align-items:center;padding:30px;transition:all .3s;display:flex}.logo__image.jsx-d5092634768a7c0d{object-fit:contain;filter:grayscale(30%)brightness(1.1);opacity:.9;max-width:100%;max-height:100%;transition:all .4s}.portfolio__link.jsx-d5092634768a7c0d:hover .logo__image.jsx-d5092634768a7c0d{filter:grayscale(0%)brightness();opacity:1;transform:scale(1.08)}.int-advisor-logo.jsx-d5092634768a7c0d{transform:scale(.85)}.mindful-living-logo.jsx-d5092634768a7c0d{transform:scale(.95)}.int-leisure-logo.jsx-d5092634768a7c0d{transform:scale(.9)}.manolead-logo.jsx-d5092634768a7c0d{transform:scale(1)}.intterminal-logo.jsx-d5092634768a7c0d,.kumbuk-villa-logo.jsx-d5092634768a7c0d{transform:scale(.95)}.portfolio__link.jsx-d5092634768a7c0d:hover .int-advisor-logo.jsx-d5092634768a7c0d{transform:scale(.9)}.portfolio__link.jsx-d5092634768a7c0d:hover .mindful-living-logo.jsx-d5092634768a7c0d{transform:scale(1)}.portfolio__link.jsx-d5092634768a7c0d:hover .int-leisure-logo.jsx-d5092634768a7c0d{transform:scale(.95)}.portfolio__link.jsx-d5092634768a7c0d:hover .manolead-logo.jsx-d5092634768a7c0d{transform:scale(1.05)}.portfolio__link.jsx-d5092634768a7c0d:hover .intterminal-logo.jsx-d5092634768a7c0d,.portfolio__link.jsx-d5092634768a7c0d:hover .kumbuk-villa-logo.jsx-d5092634768a7c0d{transform:scale(1)}.logo__fallback.jsx-d5092634768a7c0d{color:#8a8a6a;text-align:center;justify-content:center;align-items:center;font-size:18px;font-weight:600;display:none}.fallback__text.jsx-d5092634768a7c0d{text-align:center;font-size:18px;font-weight:600}@media (width<=320px){.portfolio__section.jsx-d5092634768a7c0d{padding:50px 0}.portfolio__container.jsx-d5092634768a7c0d{padding:0 15px}.section__title.jsx-d5092634768a7c0d{margin-bottom:30px;font-size:1.8rem}.portfolio-scroll-container.jsx-d5092634768a7c0d{padding:30px 0}.portfolio-scroll-content.jsx-d5092634768a7c0d{gap:50px;padding:0 20px}.logo__container.jsx-d5092634768a7c0d{padding:20px}}@media (width<=375px){.portfolio__section.jsx-d5092634768a7c0d{padding:55px 0}.section__title.jsx-d5092634768a7c0d{margin-bottom:35px;font-size:2rem}.portfolio-scroll-content.jsx-d5092634768a7c0d{gap:55px}}@media (width<=575px){.portfolio__section.jsx-d5092634768a7c0d{padding:60px 0}.portfolio__container.jsx-d5092634768a7c0d{padding:0 18px}.section__title.jsx-d5092634768a7c0d{margin-bottom:40px;font-size:2.2rem}.portfolio-scroll-container.jsx-d5092634768a7c0d{padding:35px 0}.portfolio-scroll-content.jsx-d5092634768a7c0d{gap:60px;padding:0 25px}}@media (width>=576px) and (width<=767px){.portfolio__section.jsx-d5092634768a7c0d{padding:70px 0}.portfolio__container.jsx-d5092634768a7c0d{padding:0 25px}.section__title.jsx-d5092634768a7c0d{margin-bottom:45px;font-size:2.5rem}.portfolio-scroll-container.jsx-d5092634768a7c0d{padding:40px 0}.portfolio-scroll-content.jsx-d5092634768a7c0d{gap:70px;padding:0 30px}}@media (width>=768px) and (width<=1023px){.portfolio-scroll-content.jsx-d5092634768a7c0d{gap:90px;padding:0 40px}.section__title.jsx-d5092634768a7c0d{font-size:2.8rem}}@media (width>=1024px){.portfolio-scroll-content.jsx-d5092634768a7c0d{gap:100px;padding:0 50px}.section__title.jsx-d5092634768a7c0d{font-size:3rem}}@media (width>=1440px){.portfolio-scroll-content.jsx-d5092634768a7c0d{gap:120px}.section__title.jsx-d5092634768a7c0d{font-size:3.2rem}}@media (height<=500px) and (orientation:landscape){.portfolio__section.jsx-d5092634768a7c0d{padding:40px 0}.portfolio-scroll-container.jsx-d5092634768a7c0d{padding:25px 0}}@media (-webkit-device-pixel-ratio>=2),(resolution>=192dpi){.logo__image.jsx-d5092634768a7c0d{filter:grayscale(25%)brightness(1.05)}}@media (prefers-reduced-motion:reduce){.portfolio-scroll-container.jsx-d5092634768a7c0d{overflow-x:auto;-webkit-mask-image:none;mask-image:none}.portfolio__link.jsx-d5092634768a7c0d,.logo__image.jsx-d5092634768a7c0d{transition:none}}@media (hover:none) and (pointer:coarse){.portfolio__link.jsx-d5092634768a7c0d:hover{transform:none}.portfolio__link.jsx-d5092634768a7c0d:active .logo__image.jsx-d5092634768a7c0d{filter:grayscale(0%)brightness();opacity:1;transform:scale(.95)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = WebsitePortfolio;
}),
"[project]/src/app/home-1/FooterOne.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function FooterOne() {
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const onSubmit = async (event)=>{
        event.preventDefault();
        setResult("Sending....");
        const form = event.target;
        const formData = new FormData(form);
        const email = formData.get("email");
        // --- Validate ---
        if (!email || email.trim() === "") {
            setResult("Please enter an email");
            return;
        }
        formData.append("access_key", "dcf5f1de-6521-4ee8-8a2f-c7fc0a5977dd");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            setResult("Email Submitted");
            form.reset();
        } else {
            setResult("Error");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "1270acf2b3a8274d",
                children: ".subscribe_txt.jsx-1270acf2b3a8274d{max-width:540px;margin-right:50px}@media (width<=1024px){.subscribe_txt.jsx-1270acf2b3a8274d{max-width:350px}}@media (width<=575px){.submit_btn.jsx-1270acf2b3a8274d{margin-bottom:120px}.footer__newsletter.jsx-1270acf2b3a8274d{text-align:center;flex-direction:column!important;align-items:center!important;gap:20px!important;padding:30px 20px!important}.footer__newsletter.jsx-1270acf2b3a8274d>div.jsx-1270acf2b3a8274d:first-child{flex-direction:column!important;gap:5px!important;width:80%!important}.footer__logo.jsx-1270acf2b3a8274d{width:140px!important;height:auto!important}.footer__newsletter.jsx-1270acf2b3a8274d>div.jsx-1270acf2b3a8274d:first-child p.jsx-1270acf2b3a8274d{margin:0!important;font-size:11px!important;line-height:1.6!important}.footer__newsletter.jsx-1270acf2b3a8274d>div.jsx-1270acf2b3a8274d:first-child p.jsx-1270acf2b3a8274d br.jsx-1270acf2b3a8274d{display:none}.rts__form.jsx-1270acf2b3a8274d{height:150px;flex-direction:column!important;align-items:center!important;gap:15px!important;width:100%!important}.rts__form.jsx-1270acf2b3a8274d form.jsx-1270acf2b3a8274d{align-items:flex-start;width:100%;display:flex}.rts__form.jsx-1270acf2b3a8274d form.jsx-1270acf2b3a8274d button[type=submit].jsx-1270acf2b3a8274d{align-items:flex-start;padding:10px 45px!important;font-size:13px!important}.rts__form.jsx-1270acf2b3a8274d>div.jsx-1270acf2b3a8274d{flex-direction:row!important;justify-content:center!important;align-items:center!important;gap:12px!important}.rts__form.jsx-1270acf2b3a8274d>div.jsx-1270acf2b3a8274d span.jsx-1270acf2b3a8274d{font-size:12px!important}.rts__form.jsx-1270acf2b3a8274d>div.jsx-1270acf2b3a8274d>div.jsx-1270acf2b3a8274d{gap:10px!important;display:flex!important}.rts__form.jsx-1270acf2b3a8274d>div.jsx-1270acf2b3a8274d>div.jsx-1270acf2b3a8274d a.jsx-1270acf2b3a8274d{width:30px!important;height:30px!important}.rts__form.jsx-1270acf2b3a8274d>div.jsx-1270acf2b3a8274d>div.jsx-1270acf2b3a8274d a.jsx-1270acf2b3a8274d img.jsx-1270acf2b3a8274d{width:15px!important;height:15px!important}.footer__widget__wrapper.jsx-1270acf2b3a8274d{grid-template-columns:1fr 1fr!important;gap:25px 20px!important;padding:30px 20px!important;display:grid!important}.footer__widget__wrapper.jsx-1270acf2b3a8274d .rts__widget.jsx-1270acf2b3a8274d:nth-child(3){grid-area:1/1/auto/2}.footer__widget__wrapper.jsx-1270acf2b3a8274d .rts__widget.jsx-1270acf2b3a8274d:nth-child(4){grid-area:1/2/auto/3}.footer__widget__wrapper.jsx-1270acf2b3a8274d .rts__widget.jsx-1270acf2b3a8274d:first-child{grid-area:2/1/auto/-1}.footer__widget__wrapper.jsx-1270acf2b3a8274d .rts__widget.jsx-1270acf2b3a8274d:nth-child(2){grid-area:3/1/auto/-1}.footer__widget__wrapper.jsx-1270acf2b3a8274d .rts__widget.jsx-1270acf2b3a8274d:nth-child(5){grid-area:2/2/auto/3}.rts__widget.jsx-1270acf2b3a8274d{text-align:left}.rts__widget.jsx-1270acf2b3a8274d .widget__title.jsx-1270acf2b3a8274d{margin-bottom:12px!important;font-size:14px!important}.rts__widget.jsx-1270acf2b3a8274d p.jsx-1270acf2b3a8274d{margin-bottom:4px!important;font-size:11px!important;line-height:1.6!important}.rts__widget.jsx-1270acf2b3a8274d ul.jsx-1270acf2b3a8274d li.jsx-1270acf2b3a8274d{margin-bottom:8px!important;font-size:11px!important}.rts__widget.jsx-1270acf2b3a8274d ul.jsx-1270acf2b3a8274d li.jsx-1270acf2b3a8274d a.jsx-1270acf2b3a8274d{font-size:11px!important}.rts__widget.jsx-1270acf2b3a8274d>div.jsx-1270acf2b3a8274d{margin-top:20px!important}.copyright__text.jsx-1270acf2b3a8274d{padding:18px 20px!important}.copyright__wrapper.jsx-1270acf2b3a8274d p.jsx-1270acf2b3a8274d{font-size:10px!important}.social_links.jsx-1270acf2b3a8274d{align-items:left;justify-content:left;margin-left:-200px}.subscribe_txt.jsx-1270acf2b3a8274d{text-align:left}}@media (width<=375px){.footer__newsletter.jsx-1270acf2b3a8274d{padding:25px 15px!important}.footer__logo.jsx-1270acf2b3a8274d{width:120px!important}.footer__newsletter.jsx-1270acf2b3a8274d>div.jsx-1270acf2b3a8274d:first-child p.jsx-1270acf2b3a8274d{font-size:10px!important}.rts__form.jsx-1270acf2b3a8274d form.jsx-1270acf2b3a8274d button[type=submit].jsx-1270acf2b3a8274d{padding:9px 35px!important;font-size:12px!important}.footer__widget__wrapper.jsx-1270acf2b3a8274d{gap:20px 15px!important;padding:25px 15px!important}.rts__widget.jsx-1270acf2b3a8274d .widget__title.jsx-1270acf2b3a8274d{font-size:13px!important}.rts__widget.jsx-1270acf2b3a8274d p.jsx-1270acf2b3a8274d,.rts__widget.jsx-1270acf2b3a8274d ul.jsx-1270acf2b3a8274d li.jsx-1270acf2b3a8274d,.rts__widget.jsx-1270acf2b3a8274d ul.jsx-1270acf2b3a8274d li.jsx-1270acf2b3a8274d a.jsx-1270acf2b3a8274d{font-size:10px!important}.social_links.jsx-1270acf2b3a8274d{margin-left:-160px}}@media (width<=320px){.social_links.jsx-1270acf2b3a8274d{margin-left:-110px}}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                style: {
                    backgroundColor: "#5a5347"
                },
                className: "jsx-1270acf2b3a8274d" + " " + "rts__section rts__footer is__common__footer footer__background",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            paddingTop: "0px",
                            paddingBottom: "0px"
                        },
                        className: "jsx-1270acf2b3a8274d" + " " + "container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-1270acf2b3a8274d" + " " + "row",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        borderBottom: "1px solid rgba(255,255,255,0.2)",
                                        padding: "30px 0"
                                    },
                                    className: "jsx-1270acf2b3a8274d" + " " + "footer__newsletter",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "30px"
                                            },
                                            className: "jsx-1270acf2b3a8274d",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/assets/images/logo/logof.png",
                                                    alt: "footer logo",
                                                    style: {
                                                        width: 270,
                                                        height: 100
                                                    },
                                                    className: "jsx-1270acf2b3a8274d" + " " + "footer__logo"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                    lineNumber: 296,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                lineNumber: 295,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                            lineNumber: 292,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: "#fff"
                                            },
                                            className: "jsx-1270acf2b3a8274d" + " " + "subscribe_txt",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: 0,
                                                    fontSize: "14px",
                                                    lineHeight: "1.6"
                                                },
                                                className: "jsx-1270acf2b3a8274d",
                                                children: [
                                                    "Subscribe to",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                        style: {
                                                            fontStyle: "italic"
                                                        },
                                                        className: "jsx-1270acf2b3a8274d",
                                                        children: "Rain Drops"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                        lineNumber: 307,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Wellness Villa updates and receive exclusive offers, mindful",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                        className: "jsx-1270acf2b3a8274d"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                        lineNumber: 309,
                                                        columnNumber: 19
                                                    }, this),
                                                    "experiences, and special announcements."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                lineNumber: 305,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                            lineNumber: 304,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "15px",
                                                minWidth: "300px"
                                            },
                                            className: "jsx-1270acf2b3a8274d" + " " + "rts__form",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                    onSubmit: onSubmit,
                                                    style: {
                                                        width: "100%"
                                                    },
                                                    className: "jsx-1270acf2b3a8274d",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        name: "email",
                                                        placeholder: "Enter your email",
                                                        required: true,
                                                        style: {
                                                            width: "100%",
                                                            padding: "12px 20px",
                                                            border: "1px solid #fff",
                                                            borderRadius: "4px",
                                                            fontSize: "14px",
                                                            background: "transparent",
                                                            color: "#fff",
                                                            outline: "none",
                                                            boxSizing: "border-box"
                                                        },
                                                        className: "jsx-1270acf2b3a8274d"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                        lineNumber: 325,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                    lineNumber: 324,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                        width: "100%"
                                                    },
                                                    className: "jsx-1270acf2b3a8274d",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "submit",
                                                            form: "subscribe-form",
                                                            style: {
                                                                padding: "10px 40px",
                                                                border: "1px solid #fff",
                                                                cursor: "pointer",
                                                                fontSize: "14px",
                                                                borderRadius: "4px",
                                                                whiteSpace: "nowrap",
                                                                background: "#5a5347",
                                                                color: "#fff"
                                                            },
                                                            onClick: (e)=>{
                                                                const form = e.target.closest(".rts__form").querySelector("form");
                                                                form.dispatchEvent(new Event("submit", {
                                                                    bubbles: true,
                                                                    cancelable: true
                                                                }));
                                                            },
                                                            className: "jsx-1270acf2b3a8274d" + " " + "submit_btn",
                                                            children: "Subscribe"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 354,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: result
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 379,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                color: "#fff",
                                                                fontSize: "14px",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "15px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "12px"
                                                                },
                                                                className: "jsx-1270acf2b3a8274d" + " " + "social_links",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            whiteSpace: "nowrap"
                                                                        },
                                                                        className: "jsx-1270acf2b3a8274d",
                                                                        children: "Follow Us"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                                        lineNumber: 399,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            gap: "12px",
                                                                            alignItems: "center"
                                                                        },
                                                                        className: "jsx-1270acf2b3a8274d",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: "https://www.facebook.com/share/1BbckAg3Ka/?mibextid=wwXIfr",
                                                                                style: {
                                                                                    color: "#fff",
                                                                                    display: "flex",
                                                                                    alignItems: "center",
                                                                                    justifyContent: "center",
                                                                                    width: "32px",
                                                                                    height: "32px",
                                                                                    borderRadius: "50%",
                                                                                    backgroundColor: "rgba(255,255,255,0.1)",
                                                                                    transition: "background-color 0.3s"
                                                                                },
                                                                                onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)",
                                                                                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                    src: "/assets/images/icon/fb.png",
                                                                                    alt: "Facebook",
                                                                                    style: {
                                                                                        width: "16px",
                                                                                        height: "16px"
                                                                                    },
                                                                                    className: "jsx-1270acf2b3a8274d"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                                                    lineNumber: 429,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                                                lineNumber: 407,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: "https://www.instagram.com/raindrops.villa",
                                                                                style: {
                                                                                    color: "#fff",
                                                                                    display: "flex",
                                                                                    alignItems: "center",
                                                                                    justifyContent: "center",
                                                                                    width: "32px",
                                                                                    height: "32px",
                                                                                    borderRadius: "50%",
                                                                                    backgroundColor: "rgba(255,255,255,0.1)",
                                                                                    transition: "background-color 0.3s"
                                                                                },
                                                                                onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)",
                                                                                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                    src: "/assets/images/icon/inst.png",
                                                                                    alt: "Instagram",
                                                                                    style: {
                                                                                        width: "16px",
                                                                                        height: "16px"
                                                                                    },
                                                                                    className: "jsx-1270acf2b3a8274d"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                                                    lineNumber: 457,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                                                lineNumber: 435,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: "https://www.tiktok.com/@raindrops_viila?is_from_webapp=1&sender_device=pc",
                                                                                style: {
                                                                                    color: "#fff",
                                                                                    display: "flex",
                                                                                    alignItems: "center",
                                                                                    justifyContent: "center",
                                                                                    width: "32px",
                                                                                    height: "32px",
                                                                                    borderRadius: "50%",
                                                                                    backgroundColor: "rgba(255,255,255,0.1)",
                                                                                    transition: "background-color 0.3s"
                                                                                },
                                                                                onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)",
                                                                                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                    src: "/assets/images/icon/tik.png",
                                                                                    alt: "TikTok",
                                                                                    style: {
                                                                                        width: "16px",
                                                                                        height: "16px"
                                                                                    },
                                                                                    className: "jsx-1270acf2b3a8274d"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                                                    lineNumber: 485,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                                                lineNumber: 463,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                                        lineNumber: 400,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                                lineNumber: 391,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 382,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                    lineNumber: 345,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                            lineNumber: 314,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-1270acf2b3a8274d" + " " + "row",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "1.2fr 1fr 0.8fr 0.8fr 1fr",
                                        gap: "40px",
                                        color: "#fff",
                                        padding: "40px 0"
                                    },
                                    className: "jsx-1270acf2b3a8274d" + " " + "footer__widget__wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-1270acf2b3a8274d" + " " + "rts__widget",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        display: "block",
                                                        fontSize: "16px",
                                                        fontWeight: "600",
                                                        marginBottom: "20px",
                                                        color: "#fff"
                                                    },
                                                    className: "jsx-1270acf2b3a8274d" + " " + "widget__title",
                                                    children: "Villa Location - Sri Lanka"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                    lineNumber: 513,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "14px",
                                                        lineHeight: "1.6",
                                                        color: "rgba(255,255,255,0.8)",
                                                        marginBottom: "5px"
                                                    },
                                                    className: "jsx-1270acf2b3a8274d",
                                                    children: "Rain Drops Wellness Villa,"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                    lineNumber: 525,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "14px",
                                                        lineHeight: "1.6",
                                                        color: "rgba(255,255,255,0.8)",
                                                        marginBottom: "5px"
                                                    },
                                                    className: "jsx-1270acf2b3a8274d",
                                                    children: "Sinharaja, Dolagahawaththa,"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                    lineNumber: 535,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "14px",
                                                        lineHeight: "1.6",
                                                        color: "rgba(255,255,255,0.8)",
                                                        marginBottom: "5px"
                                                    },
                                                    className: "jsx-1270acf2b3a8274d",
                                                    children: "Mederipitiya, Deniyaya, Sri Lanka."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                    lineNumber: 545,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginTop: "30px"
                                                    },
                                                    className: "jsx-1270acf2b3a8274d",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                display: "block",
                                                                fontSize: "16px",
                                                                fontWeight: "600",
                                                                marginBottom: "15px",
                                                                color: "#fff"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d" + " " + "widget__title",
                                                            children: "Head Office - USA"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 556,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: "14px",
                                                                lineHeight: "1.6",
                                                                color: "rgba(255,255,255,0.8)",
                                                                marginBottom: "5px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: "INT Terminal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 568,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: "14px",
                                                                lineHeight: "1.6",
                                                                color: "rgba(255,255,255,0.8)",
                                                                marginBottom: "5px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: "1803 Wicklow Road Naperville,"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 578,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: "14px",
                                                                lineHeight: "1.6",
                                                                color: "rgba(255,255,255,0.8)",
                                                                marginBottom: "5px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: "IL 60564"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 588,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: "14px",
                                                                lineHeight: "1.6",
                                                                color: "rgba(255,255,255,0.8)",
                                                                marginBottom: "5px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: "Chicago, USA."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 598,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                    lineNumber: 555,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                            lineNumber: 512,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-1270acf2b3a8274d" + " " + "rts__widget",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        display: "block",
                                                        fontSize: "16px",
                                                        fontWeight: "600",
                                                        marginBottom: "20px",
                                                        color: "#fff"
                                                    },
                                                    className: "jsx-1270acf2b3a8274d" + " " + "widget__title",
                                                    children: "Head Office - Sri Lanka"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                    lineNumber: 613,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "14px",
                                                        lineHeight: "1.6",
                                                        color: "rgba(255,255,255,0.8)",
                                                        marginBottom: "5px"
                                                    },
                                                    className: "jsx-1270acf2b3a8274d",
                                                    children: "INTT Leisure,"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                    lineNumber: 625,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "14px",
                                                        lineHeight: "1.6",
                                                        color: "rgba(255,255,255,0.8)",
                                                        marginBottom: "5px"
                                                    },
                                                    className: "jsx-1270acf2b3a8274d",
                                                    children: "No. 26/6,"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                    lineNumber: 635,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "14px",
                                                        lineHeight: "1.6",
                                                        color: "rgba(255,255,255,0.8)",
                                                        marginBottom: "5px"
                                                    },
                                                    className: "jsx-1270acf2b3a8274d",
                                                    children: "Major L V Gunarathna Mawatha,"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                    lineNumber: 645,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "14px",
                                                        lineHeight: "1.6",
                                                        color: "rgba(255,255,255,0.8)",
                                                        marginBottom: "5px"
                                                    },
                                                    className: "jsx-1270acf2b3a8274d",
                                                    children: "Station Road, Dehiwala, Sri Lanka."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                    lineNumber: 655,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                            lineNumber: 612,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-1270acf2b3a8274d" + " " + "rts__widget",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        display: "block",
                                                        fontSize: "16px",
                                                        fontWeight: "600",
                                                        marginBottom: "20px",
                                                        color: "#fff"
                                                    },
                                                    className: "jsx-1270acf2b3a8274d" + " " + "widget__title",
                                                    children: "Quick Links"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                    lineNumber: 669,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    style: {
                                                        listStyle: "none",
                                                        padding: 0,
                                                        margin: 0
                                                    },
                                                    className: "jsx-1270acf2b3a8274d",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            style: {
                                                                marginBottom: "12px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/",
                                                                style: {
                                                                    color: "rgba(255,255,255,0.8)",
                                                                    textDecoration: "none",
                                                                    fontSize: "14px",
                                                                    transition: "color 0.3s"
                                                                },
                                                                onMouseEnter: (e)=>e.target.style.color = "#fff",
                                                                onMouseLeave: (e)=>e.target.style.color = "rgba(255,255,255,0.8)",
                                                                children: "Home"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                                lineNumber: 683,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 682,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            style: {
                                                                marginBottom: "12px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/room-home",
                                                                style: {
                                                                    color: "rgba(255,255,255,0.8)",
                                                                    textDecoration: "none",
                                                                    fontSize: "14px",
                                                                    transition: "color 0.3s"
                                                                },
                                                                onMouseEnter: (e)=>e.target.style.color = "#fff",
                                                                onMouseLeave: (e)=>e.target.style.color = "rgba(255,255,255,0.8)",
                                                                children: "Rooms"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                                lineNumber: 700,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 699,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            style: {
                                                                marginBottom: "12px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/gallery",
                                                                style: {
                                                                    color: "rgba(255,255,255,0.8)",
                                                                    textDecoration: "none",
                                                                    fontSize: "14px",
                                                                    transition: "color 0.3s"
                                                                },
                                                                onMouseEnter: (e)=>e.target.style.color = "#fff",
                                                                onMouseLeave: (e)=>e.target.style.color = "rgba(255,255,255,0.8)",
                                                                children: "Gallery"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                                lineNumber: 717,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 716,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            style: {
                                                                marginBottom: "12px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/neuroscience",
                                                                style: {
                                                                    color: "rgba(255,255,255,0.8)",
                                                                    textDecoration: "none",
                                                                    fontSize: "14px",
                                                                    transition: "color 0.3s"
                                                                },
                                                                onMouseEnter: (e)=>e.target.style.color = "#fff",
                                                                onMouseLeave: (e)=>e.target.style.color = "rgba(255,255,255,0.8)",
                                                                children: "Wellness"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                                lineNumber: 734,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 733,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            style: {
                                                                marginBottom: "12px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/dining",
                                                                style: {
                                                                    color: "rgba(255,255,255,0.8)",
                                                                    textDecoration: "none",
                                                                    fontSize: "14px",
                                                                    transition: "color 0.3s"
                                                                },
                                                                onMouseEnter: (e)=>e.target.style.color = "#fff",
                                                                onMouseLeave: (e)=>e.target.style.color = "rgba(255,255,255,0.8)",
                                                                children: "Dining"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                                lineNumber: 751,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 750,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            style: {
                                                                marginBottom: "12px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/about",
                                                                style: {
                                                                    color: "rgba(255,255,255,0.8)",
                                                                    textDecoration: "none",
                                                                    fontSize: "14px",
                                                                    transition: "color 0.3s"
                                                                },
                                                                onMouseEnter: (e)=>e.target.style.color = "#fff",
                                                                onMouseLeave: (e)=>e.target.style.color = "rgba(255,255,255,0.8)",
                                                                children: "About Us"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                                lineNumber: 768,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 767,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            style: {
                                                                marginBottom: "12px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/contact",
                                                                style: {
                                                                    color: "rgba(255,255,255,0.8)",
                                                                    textDecoration: "none",
                                                                    fontSize: "14px",
                                                                    transition: "color 0.3s"
                                                                },
                                                                onMouseEnter: (e)=>e.target.style.color = "#fff",
                                                                onMouseLeave: (e)=>e.target.style.color = "rgba(255,255,255,0.8)",
                                                                children: "Contact Us"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                                lineNumber: 785,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 784,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                    lineNumber: 681,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                            lineNumber: 668,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-1270acf2b3a8274d" + " " + "rts__widget",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        display: "block",
                                                        fontSize: "16px",
                                                        fontWeight: "600",
                                                        marginBottom: "20px",
                                                        color: "#fff"
                                                    },
                                                    className: "jsx-1270acf2b3a8274d" + " " + "widget__title",
                                                    children: "Guest Services"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                    lineNumber: 806,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    style: {
                                                        listStyle: "none",
                                                        padding: 0,
                                                        margin: 0
                                                    },
                                                    className: "jsx-1270acf2b3a8274d",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            style: {
                                                                marginBottom: "12px",
                                                                color: "rgba(255,255,255,0.8)",
                                                                fontSize: "14px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: "24/7 Front Desk"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 819,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            style: {
                                                                marginBottom: "12px",
                                                                color: "rgba(255,255,255,0.8)",
                                                                fontSize: "14px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: "Parking"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 828,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            style: {
                                                                marginBottom: "12px",
                                                                color: "rgba(255,255,255,0.8)",
                                                                fontSize: "14px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: "Room Service"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 837,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            style: {
                                                                marginBottom: "12px",
                                                                color: "rgba(255,255,255,0.8)",
                                                                fontSize: "14px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: "Free WiFi"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 846,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            style: {
                                                                marginBottom: "12px",
                                                                color: "rgba(255,255,255,0.8)",
                                                                fontSize: "14px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: "Concierge Service"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 855,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            style: {
                                                                marginBottom: "12px",
                                                                color: "rgba(255,255,255,0.8)",
                                                                fontSize: "14px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: "Wellness Activities"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 864,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            style: {
                                                                marginBottom: "12px",
                                                                color: "rgba(255,255,255,0.8)",
                                                                fontSize: "14px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: "Laundry Service"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 873,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                    lineNumber: 818,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                            lineNumber: 805,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-1270acf2b3a8274d" + " " + "rts__widget",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        display: "block",
                                                        fontSize: "16px",
                                                        fontWeight: "600",
                                                        marginBottom: "20px",
                                                        color: "#fff"
                                                    },
                                                    className: "jsx-1270acf2b3a8274d" + " " + "widget__title",
                                                    children: "Telephone"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                    lineNumber: 887,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    style: {
                                                        listStyle: "none",
                                                        padding: 0,
                                                        margin: 0
                                                    },
                                                    className: "jsx-1270acf2b3a8274d",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            style: {
                                                                marginBottom: "12px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "tel:+94774484848",
                                                                style: {
                                                                    color: "rgba(255,255,255,0.8)",
                                                                    textDecoration: "none",
                                                                    fontSize: "14px",
                                                                    transition: "color 0.3s"
                                                                },
                                                                onMouseEnter: (e)=>e.target.style.color = "#fff",
                                                                onMouseLeave: (e)=>e.target.style.color = "rgba(255,255,255,0.8)",
                                                                children: "+94 774 48 48 48 (SL)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                                lineNumber: 901,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 900,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            style: {
                                                                marginBottom: "12px"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "tel:+13122421662",
                                                                style: {
                                                                    color: "rgba(255,255,255,0.8)",
                                                                    textDecoration: "none",
                                                                    fontSize: "14px",
                                                                    transition: "color 0.3s"
                                                                },
                                                                onMouseEnter: (e)=>e.target.style.color = "#fff",
                                                                onMouseLeave: (e)=>e.target.style.color = "rgba(255,255,255,0.8)",
                                                                children: "+1 312-242-1662 (USA)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                                lineNumber: 918,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 917,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                    lineNumber: 899,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginTop: "30px"
                                                    },
                                                    className: "jsx-1270acf2b3a8274d",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                display: "block",
                                                                fontSize: "16px",
                                                                fontWeight: "600",
                                                                marginBottom: "15px",
                                                                color: "#fff"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d" + " " + "widget__title",
                                                            children: "Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 936,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: "14px",
                                                                color: "rgba(255,255,255,0.8)",
                                                                margin: 0,
                                                                lineHeight: "1.6"
                                                            },
                                                            className: "jsx-1270acf2b3a8274d",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "mailto:info@raindrops.lk",
                                                                    style: {
                                                                        color: "rgba(255,255,255,0.8)",
                                                                        textDecoration: "none",
                                                                        transition: "color 0.3s",
                                                                        display: "block",
                                                                        marginBottom: "8px"
                                                                    },
                                                                    onMouseEnter: (e)=>e.target.style.color = "#fff",
                                                                    onMouseLeave: (e)=>e.target.style.color = "rgba(255,255,255,0.8)",
                                                                    children: "info@raindrops.lk"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                                    lineNumber: 956,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "mailto:info@intterminal.com",
                                                                    style: {
                                                                        color: "rgba(255,255,255,0.8)",
                                                                        textDecoration: "none",
                                                                        transition: "color 0.3s",
                                                                        display: "block"
                                                                    },
                                                                    onMouseEnter: (e)=>e.target.style.color = "#fff",
                                                                    onMouseLeave: (e)=>e.target.style.color = "rgba(255,255,255,0.8)",
                                                                    children: "info@intterminal.com"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                                    lineNumber: 972,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                            lineNumber: 948,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                                    lineNumber: 935,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                            lineNumber: 886,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                    lineNumber: 501,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                lineNumber: 500,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/home-1/FooterOne.jsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: "rgba(0,0,0,0.2)",
                            padding: "20px 0",
                            borderTop: "1px solid rgba(255,255,255,0.1)"
                        },
                        className: "jsx-1270acf2b3a8274d" + " " + "copyright__text",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-1270acf2b3a8274d" + " " + "container",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-1270acf2b3a8274d" + " " + "row",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    },
                                    className: "jsx-1270acf2b3a8274d" + " " + "copyright__wrapper",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: "rgba(255,255,255,0.8)",
                                            fontSize: "14px",
                                            margin: 0
                                        },
                                        className: "jsx-1270acf2b3a8274d" + " " + "mb-0",
                                        children: "2025 Rain Drops - All Rights Reserved"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                        lineNumber: 1014,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                    lineNumber: 1005,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/home-1/FooterOne.jsx",
                                lineNumber: 1004,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/home-1/FooterOne.jsx",
                            lineNumber: 1003,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/home-1/FooterOne.jsx",
                        lineNumber: 995,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home-1/FooterOne.jsx",
                lineNumber: 272,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = FooterOne;
}),
"[project]/src/app/home-1/BackToTop.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const BackToTop = ()=>{
    const [showButton, setShowButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: `rts__back__top ${showButton ? 'show' : ''}`,
        onClick: scrollToTop,
        id: "rts-back-to-top",
        style: {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            border: 'none',
            cursor: 'pointer',
            display: showButton ? 'block' : 'none'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 13 22",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7.30201 1.51317L7.29917 21.3422C7.29912 21.7057 6.97211 21.9993 6.5674 21.9993C6.16269 21.9992 5.83577 21.7055 5.83582 21.342L5.83844 3.10055L1.39753 7.08842C1.11169 7.34511 0.647535 7.34506 0.361762 7.0883C0.0759894 6.83155 0.0760493 6.41464 0.361896 6.15795L6.05367 1.04682C6.26405 0.857899 6.5773 0.802482 6.85167 0.905201C7.12374 1.00792 7.30205 1.24823 7.30201 1.51317Z",
                    fill: "#FFF"
                }, void 0, false, {
                    fileName: "[project]/src/app/home-1/BackToTop.jsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12.9991 6.6318C12.9991 6.80021 12.9282 6.96861 12.7841 7.09592C12.4983 7.35261 12.0341 7.35256 11.7483 7.0958L6.05118 1.97719C5.76541 1.72043 5.76547 1.30352 6.05131 1.04684C6.33716 0.790152 6.80131 0.790206 7.08709 1.04696L12.7842 6.16557C12.9283 6.29498 12.9991 6.46339 12.9991 6.6318Z",
                    fill: "#FFF"
                }, void 0, false, {
                    fileName: "[project]/src/app/home-1/BackToTop.jsx",
                    lineNumber: 50,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/home-1/BackToTop.jsx",
            lineNumber: 45,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/home-1/BackToTop.jsx",
        lineNumber: 31,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BackToTop;
}),
"[project]/src/app/about/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$GDPRCookie$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/home-1/GDPRCookie.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$TopBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/home-1/TopBar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/home-1/Header.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$about$2f$ABanner$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/about/ABanner.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$Story$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/home-1/Story.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$Founders$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/home-1/Founders.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$about$2f$Team$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/about/Team.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$TestimonialOne$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/home-1/TestimonialOne.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$about$2f$family$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/about/family.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$FooterOne$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/home-1/FooterOne.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$BackToTop$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/home-1/BackToTop.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$TopBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/about/page.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/about/page.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: "-20px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$about$2f$ABanner$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/about/page.jsx",
                    lineNumber: 33,
                    columnNumber: 8
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/about/page.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$Story$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/about/page.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$Founders$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/about/page.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$about$2f$Team$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/about/page.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$about$2f$family$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/about/page.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$TestimonialOne$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/about/page.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$FooterOne$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/about/page.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$home$2d$1$2f$BackToTop$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/about/page.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
const __TURBOPACK__default__export__ = page;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4d648fdd._.js.map