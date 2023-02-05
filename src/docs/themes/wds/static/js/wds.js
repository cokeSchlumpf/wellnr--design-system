/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/breakpoints.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/breakpoints.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* \n * Note: Breakpoint values are also hardcoded in /components/layout/grid/grid.js.\n * \n * These variables are here for reference. Unfortunately, as of today, media queries\n * can not use these variables.\n */\n:root {\n    --w-breakpoint-sm: 576px;\n    --w-breakpoint-md: 768px;\n    --w-breakpoint-lg: 992px;\n    --w-breakpoint-xl: 1200px;\n    --w-breakpoint-xxl: 1400px;\n    --w-breakpoint-xxxl: 2600px;\n}", "",{"version":3,"sources":["webpack://./src/css/breakpoints.css"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;IACI,wBAAwB;IACxB,wBAAwB;IACxB,wBAAwB;IACxB,yBAAyB;IACzB,0BAA0B;IAC1B,2BAA2B;AAC/B","sourcesContent":["/* \n * Note: Breakpoint values are also hardcoded in /components/layout/grid/grid.js.\n * \n * These variables are here for reference. Unfortunately, as of today, media queries\n * can not use these variables.\n */\n:root {\n    --w-breakpoint-sm: 576px;\n    --w-breakpoint-md: 768px;\n    --w-breakpoint-lg: 992px;\n    --w-breakpoint-xl: 1200px;\n    --w-breakpoint-xxl: 1400px;\n    --w-breakpoint-xxxl: 2600px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/colors.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/colors.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, " :root {\n    /*\n     * Base Colors\n     */\n    --black: #121212;\n    --gray900: #101840;\n    --gray800: #474d66;\n    --gray700: #696f8c;\n    --gray600: #8f95b2;\n    --gray500: #c1c4d6;\n    --gray400: #d8dae5;\n    --gray300: #E6E8F0;\n    --gray200: #edeff5;\n    --gray100: #F4F5F9;\n    --gray90: #F4F6FA;\n    --gray75: #F9FAFC;\n    --gray50: #FAFBFF;\n    --white: #FFFFFF;\n\n    --blue900: #0A1433;\n    --blue800: #142966;\n    --blue700: #1F3D99;\n    --blue600: #2952CC;\n    --blue500: #3366FF;\n    --blue400: #5C85FF;\n    --blue300: #85A3FF;\n    --blue200: #ADC2FF;\n    --blue100: #D6E0FF;\n    --blue50: #EBF0FF;\n    --blue25: #F3F6FF;\n\n    --red700: #7D2828;\n    --red600: #A73636;\n    --red500: #D14343;\n    --red300: #EE9191;\n    --red100: #F9DADA;\n    --red25: #FDF4F4;\n\n    --green900: #10261E;\n    --green800: #214C3C;\n    --green700: #317159;\n    --green600: #429777;\n    --green500: #52BD95;\n    --green400: #75CAAA;\n    --green300: #97D7BF;\n    --green200: #BAE5D5;\n    --green100: #DCF2EA;\n    --green25: #F5FBF8;\n\n    --orange700: #996A13;\n    --orange500: #FFB020;\n    --orange100: #F8E3DA;\n    --orange25: #FFFAF2;\n\n    --purple600: #6E62B6;\n    --purple100: #E7E4F9;\n\n    --teal800: #0F5156;\n    --teal100: #D3F5F7;\n\n    --yellow800: #66460D;\n    --yellow100: #FFEFD2;\n\n   /* \n   * Color Tokens \n   */\n   --w-background-color: var(--gray75);\n   --w-background-color-300: var(--gray50);\n   --w-background-color-400: var(--gray75);\n   --w-background-color-500: var(--gray100);\n   --w-background-color-600: var(--gray200);\n   --w-background-color-700: var(--gray300);\n   --w-background-color-800: var(--gray400);\n   --w-background-color-900: var(--gray600);\n\n   --w-text-color: var(--gray900);\n   --w-text-color-300: var(--gray800);\n   --w-text-color-400: var(--gray900);\n   --w-text-color-500: var(--black);\n\n   --w-link-color: var(--blue500);\n   --w-link-hover-color: var(--blue700);\n\n   --w-muted-color: var(--gray700);\n   --w-muted-text-color: var(--gray900);\n\n   --w-primary-color: var(--blue500);\n   --w-primary-hover-color: var(--blue700);\n\n   --w-primary-text-color: var(--gray200);\n   --w-primary-text-color-300: var(--white);\n   --w-primary-text-color-400: var(--gray200);\n   --w-primary-text-color-500: var(--gray400);\n\n    --w-secondary-color: var(--blue300);\n    --w-secondary-hover-color: var(--blue400);\n    --w-secondary-text-color: var(--white);\n\n    --w-danger-color: var(--red500);\n    --w-danger-hover-color: var(--red600);\n    --w-danger-text-color: var(--white);\n }", "",{"version":3,"sources":["webpack://./src/css/colors.css"],"names":[],"mappings":"CAAC;IACG;;MAEE;IACF,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;;IAEhB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;;IAEjB,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;;IAEhB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;;IAElB,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;IACpB,mBAAmB;;IAEnB,oBAAoB;IACpB,oBAAoB;;IAEpB,kBAAkB;IAClB,kBAAkB;;IAElB,oBAAoB;IACpB,oBAAoB;;GAErB;;IAEC;GACD,mCAAmC;GACnC,uCAAuC;GACvC,uCAAuC;GACvC,wCAAwC;GACxC,wCAAwC;GACxC,wCAAwC;GACxC,wCAAwC;GACxC,wCAAwC;;GAExC,8BAA8B;GAC9B,kCAAkC;GAClC,kCAAkC;GAClC,gCAAgC;;GAEhC,8BAA8B;GAC9B,oCAAoC;;GAEpC,+BAA+B;GAC/B,oCAAoC;;GAEpC,iCAAiC;GACjC,uCAAuC;;GAEvC,sCAAsC;GACtC,wCAAwC;GACxC,0CAA0C;GAC1C,0CAA0C;;IAEzC,mCAAmC;IACnC,yCAAyC;IACzC,sCAAsC;;IAEtC,+BAA+B;IAC/B,qCAAqC;IACrC,mCAAmC;CACtC","sourcesContent":[" :root {\n    /*\n     * Base Colors\n     */\n    --black: #121212;\n    --gray900: #101840;\n    --gray800: #474d66;\n    --gray700: #696f8c;\n    --gray600: #8f95b2;\n    --gray500: #c1c4d6;\n    --gray400: #d8dae5;\n    --gray300: #E6E8F0;\n    --gray200: #edeff5;\n    --gray100: #F4F5F9;\n    --gray90: #F4F6FA;\n    --gray75: #F9FAFC;\n    --gray50: #FAFBFF;\n    --white: #FFFFFF;\n\n    --blue900: #0A1433;\n    --blue800: #142966;\n    --blue700: #1F3D99;\n    --blue600: #2952CC;\n    --blue500: #3366FF;\n    --blue400: #5C85FF;\n    --blue300: #85A3FF;\n    --blue200: #ADC2FF;\n    --blue100: #D6E0FF;\n    --blue50: #EBF0FF;\n    --blue25: #F3F6FF;\n\n    --red700: #7D2828;\n    --red600: #A73636;\n    --red500: #D14343;\n    --red300: #EE9191;\n    --red100: #F9DADA;\n    --red25: #FDF4F4;\n\n    --green900: #10261E;\n    --green800: #214C3C;\n    --green700: #317159;\n    --green600: #429777;\n    --green500: #52BD95;\n    --green400: #75CAAA;\n    --green300: #97D7BF;\n    --green200: #BAE5D5;\n    --green100: #DCF2EA;\n    --green25: #F5FBF8;\n\n    --orange700: #996A13;\n    --orange500: #FFB020;\n    --orange100: #F8E3DA;\n    --orange25: #FFFAF2;\n\n    --purple600: #6E62B6;\n    --purple100: #E7E4F9;\n\n    --teal800: #0F5156;\n    --teal100: #D3F5F7;\n\n    --yellow800: #66460D;\n    --yellow100: #FFEFD2;\n\n   /* \n   * Color Tokens \n   */\n   --w-background-color: var(--gray75);\n   --w-background-color-300: var(--gray50);\n   --w-background-color-400: var(--gray75);\n   --w-background-color-500: var(--gray100);\n   --w-background-color-600: var(--gray200);\n   --w-background-color-700: var(--gray300);\n   --w-background-color-800: var(--gray400);\n   --w-background-color-900: var(--gray600);\n\n   --w-text-color: var(--gray900);\n   --w-text-color-300: var(--gray800);\n   --w-text-color-400: var(--gray900);\n   --w-text-color-500: var(--black);\n\n   --w-link-color: var(--blue500);\n   --w-link-hover-color: var(--blue700);\n\n   --w-muted-color: var(--gray700);\n   --w-muted-text-color: var(--gray900);\n\n   --w-primary-color: var(--blue500);\n   --w-primary-hover-color: var(--blue700);\n\n   --w-primary-text-color: var(--gray200);\n   --w-primary-text-color-300: var(--white);\n   --w-primary-text-color-400: var(--gray200);\n   --w-primary-text-color-500: var(--gray400);\n\n    --w-secondary-color: var(--blue300);\n    --w-secondary-hover-color: var(--blue400);\n    --w-secondary-text-color: var(--white);\n\n    --w-danger-color: var(--red500);\n    --w-danger-hover-color: var(--red600);\n    --w-danger-text-color: var(--white);\n }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/icons.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/icons.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28255, 255, 255%29%27 stroke-width=%274%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2720 6 9 17 4 12%27%3E%3C/polyline%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28255, 255, 255%29%27 stroke-width=%274%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2720 6 9 17 4 12%27%3E%3C/polyline%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2865, 84, 98%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2865, 84, 98%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28255, 255, 255%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28255, 255, 255%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28115, 130, 140%29%27 stroke-width=%274%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cline x1=%2718%27 y1=%276%27 x2=%276%27 y2=%2718%27%3E%3C/line%3E%3Cline x1=%276%27 y1=%276%27 x2=%2718%27 y2=%2718%27%3E%3C/line%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28115, 130, 140%29%27 stroke-width=%274%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cline x1=%2718%27 y1=%276%27 x2=%276%27 y2=%2718%27%3E%3C/line%3E%3Cline x1=%276%27 y1=%276%27 x2=%2718%27 y2=%2718%27%3E%3C/line%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2865, 84, 98%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Crect x=%273%27 y=%274%27 width=%2718%27 height=%2718%27 rx=%272%27 ry=%272%27%3E%3C/rect%3E%3Cline x1=%2716%27 y1=%272%27 x2=%2716%27 y2=%276%27%3E%3C/line%3E%3Cline x1=%278%27 y1=%272%27 x2=%278%27 y2=%276%27%3E%3C/line%3E%3Cline x1=%273%27 y1=%2710%27 x2=%2721%27 y2=%2710%27%3E%3C/line%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2865, 84, 98%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Crect x=%273%27 y=%274%27 width=%2718%27 height=%2718%27 rx=%272%27 ry=%272%27%3E%3C/rect%3E%3Cline x1=%2716%27 y1=%272%27 x2=%2716%27 y2=%276%27%3E%3C/line%3E%3Cline x1=%278%27 y1=%272%27 x2=%278%27 y2=%276%27%3E%3C/line%3E%3Cline x1=%273%27 y1=%2710%27 x2=%2721%27 y2=%2710%27%3E%3C/line%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28198, 40, 40%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%2710%27%3E%3C/circle%3E%3Cline x1=%2712%27 y1=%278%27 x2=%2712%27 y2=%2712%27%3E%3C/line%3E%3Cline x1=%2712%27 y1=%2716%27 x2=%2712.01%27 y2=%2716%27%3E%3C/line%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28198, 40, 40%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%2710%27%3E%3C/circle%3E%3Cline x1=%2712%27 y1=%278%27 x2=%2712%27 y2=%2712%27%3E%3C/line%3E%3Cline x1=%2712%27 y1=%2716%27 x2=%2712.01%27 y2=%2716%27%3E%3C/line%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28255, 255, 255%29%27 stroke-width=%274%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cline x1=%275%27 y1=%2712%27 x2=%2719%27 y2=%2712%27%3E%3C/line%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28255, 255, 255%29%27 stroke-width=%274%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cline x1=%275%27 y1=%2712%27 x2=%2719%27 y2=%2712%27%3E%3C/line%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2865, 84, 98%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2711%27 cy=%2711%27 r=%278%27%3E%3C/circle%3E%3Cline x1=%2721%27 y1=%2721%27 x2=%2716.65%27 y2=%2716.65%27%3E%3C/line%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2865, 84, 98%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2711%27 cy=%2711%27 r=%278%27%3E%3C/circle%3E%3Cline x1=%2721%27 y1=%2721%27 x2=%2716.65%27 y2=%2716.65%27%3E%3C/line%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2865, 84, 98%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%2710%27%3E%3C/circle%3E%3Cpolyline points=%2712 6 12 12 16 14%27%3E%3C/polyline%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2865, 84, 98%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%2710%27%3E%3C/circle%3E%3Cpolyline points=%2712 6 12 12 16 14%27%3E%3C/polyline%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2856, 142, 60%29%27 stroke-width=%273%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2720 6 9 17 4 12%27%3E%3C/polyline%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2856, 142, 60%29%27 stroke-width=%273%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2720 6 9 17 4 12%27%3E%3C/polyline%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3C%3Fxml version=%271.0%27 encoding=%27iso-8859-1%27%3F%3E%3C%21-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --%3E%3Csvg fill=%27%23000000%27 height=%27800px%27 width=%27800px%27 version=%271.1%27 id=%27Capa_1%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 viewBox=%270 0 488.85 488.85%27 xml:space=%27preserve%27%3E%3Cg%3E%3Cpath d=%27M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2 s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025 c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3 C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7 c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z%27/%3E%3C/g%3E%3C/svg%3E */ "data:image/svg+xml,%3C%3Fxml version=%271.0%27 encoding=%27iso-8859-1%27%3F%3E%3C%21-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --%3E%3Csvg fill=%27%23000000%27 height=%27800px%27 width=%27800px%27 version=%271.1%27 id=%27Capa_1%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 viewBox=%270 0 488.85 488.85%27 xml:space=%27preserve%27%3E%3Cg%3E%3Cpath d=%27M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2 s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025 c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3 C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7 c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z%27/%3E%3C/g%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --icon-checkbox: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    --icon-chevron: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    --icon-chevron-button: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    --icon-chevron-button-inverse: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    --icon-close: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    --icon-date: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    --icon-invalid: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n    --icon-minus: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n    --icon-search: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n    --icon-time: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n    --icon-valid: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n    --icon-eye: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\n}", "",{"version":3,"sources":["webpack://./src/css/icons.css"],"names":[],"mappings":"AAAA;IACI,wDAAyS;IACzS,uDAAqS;IACrS,8DAA+S;IAC/S,sEAAuT;IACvT,qDAAuV;IACvV,oDAA2c;IAC3c,uDAA6Y;IAC7Y,qDAAqS;IACrS,sDAAyV;IACzV,oDAAoV;IACpV,qDAAoS;IACpS,oDAAm6B;AACv6B","sourcesContent":[":root {\n    --icon-checkbox: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n    --icon-chevron: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n    --icon-chevron-button: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n    --icon-chevron-button-inverse: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n    --icon-close: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E\");\n    --icon-date: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E\");\n    --icon-invalid: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(198, 40, 40)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E\");\n    --icon-minus: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E\");\n    --icon-search: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E\");\n    --icon-time: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E\");\n    --icon-valid: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(56, 142, 60)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n    --icon-eye: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --%3E%3Csvg fill='%23000000' height='800px' width='800px' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 488.85 488.85' xml:space='preserve'%3E%3Cg%3E%3Cpath d='M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2 s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025 c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3 C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7 c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z'/%3E%3C/g%3E%3C/svg%3E\");\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n    line-height: 1.15;\n    /* 1 */\n    -webkit-text-size-adjust: 100%;\n    /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n    margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n    display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n    box-sizing: content-box;\n    /* 1 */\n    height: 0;\n    /* 1 */\n    overflow: visible;\n    /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n    background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n    border-bottom: none;\n    /* 1 */\n    text-decoration: underline;\n    /* 2 */\n    text-decoration: underline dotted;\n    /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\nsup {\n    top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n    border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n    /* 1 */\n    overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n    /* 1 */\n    text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n    -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n    padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n    box-sizing: border-box;\n    /* 1 */\n    color: inherit;\n    /* 2 */\n    display: table;\n    /* 1 */\n    max-width: 100%;\n    /* 1 */\n    padding: 0;\n    /* 3 */\n    white-space: normal;\n    /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n    vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n    overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n    box-sizing: border-box;\n    /* 1 */\n    padding: 0;\n    /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type=\"search\"] {\n    -webkit-appearance: textfield;\n    /* 1 */\n    outline-offset: -2px;\n    /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    /* 1 */\n    font: inherit;\n    /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n    display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n    display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n    display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;IACI,iBAAiB;IACjB,MAAM;IACN,8BAA8B;IAC9B,MAAM;AACV;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;IACI,SAAS;AACb;;AAEA;;IAEI;;AAEJ;IACI,cAAc;AAClB;;AAEA;;;IAGI;;AAEJ;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;iFACiF;;AAEjF;;;IAGI;;AAEJ;IACI,uBAAuB;IACvB,MAAM;IACN,SAAS;IACT,MAAM;IACN,iBAAiB;IACjB,MAAM;AACV;;AAEA;;;IAGI;;AAEJ;IACI,iCAAiC;IACjC,MAAM;IACN,cAAc;IACd,MAAM;AACV;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;IACI,6BAA6B;AACjC;;AAEA;;;IAGI;;AAEJ;IACI,mBAAmB;IACnB,MAAM;IACN,0BAA0B;IAC1B,MAAM;IACN,iCAAiC;IACjC,MAAM;AACV;;AAEA;;IAEI;;AAEJ;;IAEI,mBAAmB;AACvB;;AAEA;;;IAGI;;AAEJ;;;IAGI,iCAAiC;IACjC,MAAM;IACN,cAAc;IACd,MAAM;AACV;;AAEA;;IAEI;;AAEJ;IACI,cAAc;AAClB;;AAEA;;;IAGI;;AAEJ;;IAEI,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;IACI,kBAAkB;AACtB;;AAEA;iFACiF;;AAEjF;;;IAGI;;AAEJ;;;;;IAKI,oBAAoB;IACpB,MAAM;IACN,eAAe;IACf,MAAM;IACN,iBAAiB;IACjB,MAAM;IACN,SAAS;IACT,MAAM;AACV;;AAEA;;;IAGI;;AAEJ;;IAEI,MAAM;IACN,iBAAiB;AACrB;;AAEA;;;IAGI;;AAEJ;;IAEI,MAAM;IACN,oBAAoB;AACxB;;AAEA;;IAEI;;AAEJ;;;;IAII,0BAA0B;AAC9B;;AAEA;;IAEI;;AAEJ;;;;IAII,kBAAkB;IAClB,UAAU;AACd;;AAEA;;IAEI;;AAEJ;;;;IAII,8BAA8B;AAClC;;AAEA;;IAEI;;AAEJ;IACI,8BAA8B;AAClC;;AAEA;;;;;IAKI;;AAEJ;IACI,sBAAsB;IACtB,MAAM;IACN,cAAc;IACd,MAAM;IACN,cAAc;IACd,MAAM;IACN,eAAe;IACf,MAAM;IACN,UAAU;IACV,MAAM;IACN,mBAAmB;IACnB,MAAM;AACV;;AAEA;;IAEI;;AAEJ;IACI,wBAAwB;AAC5B;;AAEA;;IAEI;;AAEJ;IACI,cAAc;AAClB;;AAEA;;;IAGI;;AAEJ;;IAEI,sBAAsB;IACtB,MAAM;IACN,UAAU;IACV,MAAM;AACV;;AAEA;;IAEI;;AAEJ;;IAEI,YAAY;AAChB;;AAEA;;;IAGI;;AAEJ;IACI,6BAA6B;IAC7B,MAAM;IACN,oBAAoB;IACpB,MAAM;AACV;;AAEA;;IAEI;;AAEJ;IACI,wBAAwB;AAC5B;;AAEA;;;IAGI;;AAEJ;IACI,0BAA0B;IAC1B,MAAM;IACN,aAAa;IACb,MAAM;AACV;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;IACI,cAAc;AAClB;;AAEA;;IAEI;;AAEJ;IACI,kBAAkB;AACtB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;IACI,aAAa;AACjB;;AAEA;;IAEI;;AAEJ;IACI,aAAa;AACjB","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n    line-height: 1.15;\n    /* 1 */\n    -webkit-text-size-adjust: 100%;\n    /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n    margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n    display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n    box-sizing: content-box;\n    /* 1 */\n    height: 0;\n    /* 1 */\n    overflow: visible;\n    /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n    background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n    border-bottom: none;\n    /* 1 */\n    text-decoration: underline;\n    /* 2 */\n    text-decoration: underline dotted;\n    /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n    font-family: monospace, monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n    font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\nsup {\n    top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n    border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n    /* 1 */\n    overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n    /* 1 */\n    text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n    -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n    padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n    box-sizing: border-box;\n    /* 1 */\n    color: inherit;\n    /* 2 */\n    display: table;\n    /* 1 */\n    max-width: 100%;\n    /* 1 */\n    padding: 0;\n    /* 3 */\n    white-space: normal;\n    /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n    vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n    overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n    box-sizing: border-box;\n    /* 1 */\n    padding: 0;\n    /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type=\"search\"] {\n    -webkit-appearance: textfield;\n    /* 1 */\n    outline-offset: -2px;\n    /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    /* 1 */\n    font: inherit;\n    /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n    display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n    display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n    display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/spacing.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/spacing.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --w-spacing-100: 0.4em;\n    --w-spacing-200: 0.6em;\n    --w-spacing-300: 1em;\n    --w-spacing-400: 1.2em;\n    --w-spacing-500: 1.6em;\n    --w-spacing-600: 2em;\n\n    --w-spacing--page--vertical-space: var(--w-spacing-300);\n    --w-spacing--page--horizontal-space: var(--w-spacing-600);\n\n    --w-border-width--thin: 1px;\n    --w-border-width--regular: 2px;\n\n    --w-border-radius-100: 0.2em;\n    --w-border-radius-200: 0.4em;\n    --w-border-radius-300: 0.6em;\n    --w-border-radius-400: 0.8em;\n    --w-border-radius-500: 1em;\n\n\n    /*\n     * If increasing column number to a value > 16, /components/layout/grid/grid.js must be adopted as well.\n     */\n    --w-grid-columns: 16;\n    --w-grid-template-columns: repeat(var(--w-grid-columns), 1fr [col]);\n}", "",{"version":3,"sources":["webpack://./src/css/spacing.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,sBAAsB;IACtB,oBAAoB;IACpB,sBAAsB;IACtB,sBAAsB;IACtB,oBAAoB;;IAEpB,uDAAuD;IACvD,yDAAyD;;IAEzD,2BAA2B;IAC3B,8BAA8B;;IAE9B,4BAA4B;IAC5B,4BAA4B;IAC5B,4BAA4B;IAC5B,4BAA4B;IAC5B,0BAA0B;;;IAG1B;;MAEE;IACF,oBAAoB;IACpB,mEAAmE;AACvE","sourcesContent":[":root {\n    --w-spacing-100: 0.4em;\n    --w-spacing-200: 0.6em;\n    --w-spacing-300: 1em;\n    --w-spacing-400: 1.2em;\n    --w-spacing-500: 1.6em;\n    --w-spacing-600: 2em;\n\n    --w-spacing--page--vertical-space: var(--w-spacing-300);\n    --w-spacing--page--horizontal-space: var(--w-spacing-600);\n\n    --w-border-width--thin: 1px;\n    --w-border-width--regular: 2px;\n\n    --w-border-radius-100: 0.2em;\n    --w-border-radius-200: 0.4em;\n    --w-border-radius-300: 0.6em;\n    --w-border-radius-400: 0.8em;\n    --w-border-radius-500: 1em;\n\n\n    /*\n     * If increasing column number to a value > 16, /components/layout/grid/grid.js must be adopted as well.\n     */\n    --w-grid-columns: 16;\n    --w-grid-template-columns: repeat(var(--w-grid-columns), 1fr [col]);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/theme.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/theme.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    height: 100%;\n}\n\nhtml, body {\n    min-height: 100%;\n    margin: 0;\n    padding: 0;\n\n    font-family: var(--w-font-family-text);\n    font-weight: var(--w-font-weight-text-regular);\n    font-size: var(--w-font-size-text-400);\n\n    line-height: 1.3em;\n\n    background-color: var(--w-background-color);\n}\n\n/*\n * Headings\n */\nh1, h2, h3, h4, h5, h6 {\n    margin: 1.2em 0 1em 0;\n}\n\nh1 {\n    font-size: var(--w-font-size-text-800);\n    font-weight: var(--w-font-weight-text-semibold);\n}\n\nh2 {\n    font-size: var(--w-font-size-text-600);\n    font-weight: var(--w-font-weight-text-semibold);\n}\n\nh3 {\n    font-size: var(--w-font-size-text-500);\n    font-weight: var(--w-font-weight-text-semibold);\n}\n\nh4 {\n    font-size: var(--w-font-size-text-400);\n    font-weight: var(--w-font-weight-text-semibold);\n}\n\nh5 {\n    font-size: var(--w-font-size-text-400);\n    font-weight: var(--w-font-weight-text-semibold);\n    color: var(--w-muted-color);\n}\n\nh6 {\n    font-size: var(--w-font-size-text-400);\n    font-weight: var(--w-font-weight-text-regular);\n    color: var(--w-muted-color);\n    text-decoration: underline;\n    \n}\n\n/*\n * Text content\n */\np {\n    line-height: 1.5em;\n}\n\ncode {\n    font-family: var(--w-font-family-mono);\n    font-weight: var(--w-font-weight-mono-regular);\n    font-size: var(--w-font-size-mono-400);\n\n    background-color: var(--w-background-color-700);\n}\n\nsection > :first-child {\n    margin-top: 0;\n}\n\n/* \n * Tables\n */\ntable {\n    width: 100%;\n    border-spacing: 0;\n}\n\nthead tr {\n    background-color: var(--w-background-color-500);\n}\n\nthead th,\ntbody td {\n    padding: var(--w-spacing-400);\n    border: var(--w-border-width--thin) solid var(--w-background-color-800);\n    text-align: left;\n}\n\nthead th {\n    color: var(--w-muted-color);\n    text-transform: uppercase;\n}\n\nthead th:not(:last-child) {\n    border-right: none;\n}\n\nthead th:not(:first-child) {\n    border-left: none;\n}\n\ntbody tr:not(:last-child) {\n    border-bottom: none;\n}", "",{"version":3,"sources":["webpack://./src/css/theme.css"],"names":[],"mappings":"AAAA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,SAAS;IACT,UAAU;;IAEV,sCAAsC;IACtC,8CAA8C;IAC9C,sCAAsC;;IAEtC,kBAAkB;;IAElB,2CAA2C;AAC/C;;AAEA;;EAEE;AACF;IACI,qBAAqB;AACzB;;AAEA;IACI,sCAAsC;IACtC,+CAA+C;AACnD;;AAEA;IACI,sCAAsC;IACtC,+CAA+C;AACnD;;AAEA;IACI,sCAAsC;IACtC,+CAA+C;AACnD;;AAEA;IACI,sCAAsC;IACtC,+CAA+C;AACnD;;AAEA;IACI,sCAAsC;IACtC,+CAA+C;IAC/C,2BAA2B;AAC/B;;AAEA;IACI,sCAAsC;IACtC,8CAA8C;IAC9C,2BAA2B;IAC3B,0BAA0B;;AAE9B;;AAEA;;EAEE;AACF;IACI,kBAAkB;AACtB;;AAEA;IACI,sCAAsC;IACtC,8CAA8C;IAC9C,sCAAsC;;IAEtC,+CAA+C;AACnD;;AAEA;IACI,aAAa;AACjB;;AAEA;;EAEE;AACF;IACI,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,+CAA+C;AACnD;;AAEA;;IAEI,6BAA6B;IAC7B,uEAAuE;IACvE,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;IAC3B,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB","sourcesContent":["html {\n    height: 100%;\n}\n\nhtml, body {\n    min-height: 100%;\n    margin: 0;\n    padding: 0;\n\n    font-family: var(--w-font-family-text);\n    font-weight: var(--w-font-weight-text-regular);\n    font-size: var(--w-font-size-text-400);\n\n    line-height: 1.3em;\n\n    background-color: var(--w-background-color);\n}\n\n/*\n * Headings\n */\nh1, h2, h3, h4, h5, h6 {\n    margin: 1.2em 0 1em 0;\n}\n\nh1 {\n    font-size: var(--w-font-size-text-800);\n    font-weight: var(--w-font-weight-text-semibold);\n}\n\nh2 {\n    font-size: var(--w-font-size-text-600);\n    font-weight: var(--w-font-weight-text-semibold);\n}\n\nh3 {\n    font-size: var(--w-font-size-text-500);\n    font-weight: var(--w-font-weight-text-semibold);\n}\n\nh4 {\n    font-size: var(--w-font-size-text-400);\n    font-weight: var(--w-font-weight-text-semibold);\n}\n\nh5 {\n    font-size: var(--w-font-size-text-400);\n    font-weight: var(--w-font-weight-text-semibold);\n    color: var(--w-muted-color);\n}\n\nh6 {\n    font-size: var(--w-font-size-text-400);\n    font-weight: var(--w-font-weight-text-regular);\n    color: var(--w-muted-color);\n    text-decoration: underline;\n    \n}\n\n/*\n * Text content\n */\np {\n    line-height: 1.5em;\n}\n\ncode {\n    font-family: var(--w-font-family-mono);\n    font-weight: var(--w-font-weight-mono-regular);\n    font-size: var(--w-font-size-mono-400);\n\n    background-color: var(--w-background-color-700);\n}\n\nsection > :first-child {\n    margin-top: 0;\n}\n\n/* \n * Tables\n */\ntable {\n    width: 100%;\n    border-spacing: 0;\n}\n\nthead tr {\n    background-color: var(--w-background-color-500);\n}\n\nthead th,\ntbody td {\n    padding: var(--w-spacing-400);\n    border: var(--w-border-width--thin) solid var(--w-background-color-800);\n    text-align: left;\n}\n\nthead th {\n    color: var(--w-muted-color);\n    text-transform: uppercase;\n}\n\nthead th:not(:last-child) {\n    border-right: none;\n}\n\nthead th:not(:first-child) {\n    border-left: none;\n}\n\ntbody tr:not(:last-child) {\n    border-bottom: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/typography.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/typography.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --w-font-family-text: Arial, system-ui, sans-serif;\n    --w-font-weight-text-thin: 300;\n    --w-font-weight-text-regular: 400;\n    --w-font-weight-text-semibold: 600;\n    --w-font-weight-text-bold: 800;\n\n    --w-font-size-text-100: 0.8em;\n    --w-font-size-text-200: 0.8em;\n    --w-font-size-text-300: 0.8em;\n    --w-font-size-text-400: 1em;\n    --w-font-size-text-500: 1.2em;\n    --w-font-size-text-600: 1.4em;\n    --w-font-size-text-700: 1.6em;\n    --w-font-size-text-800: 1.8em;\n    --w-font-size-text-900: 2em;\n\n    --w-font-family-mono: monospace;\n    --w-font-weight-mono-thin: 300;\n    --w-font-weight-mono-regular: 400;\n    --w-font-weight-mono-semibold: 600;\n    --w-font-weight-mono-bold: 800;\n}\n", "",{"version":3,"sources":["webpack://./src/css/typography.css"],"names":[],"mappings":"AAAA;IACI,kDAAkD;IAClD,8BAA8B;IAC9B,iCAAiC;IACjC,kCAAkC;IAClC,8BAA8B;;IAE9B,6BAA6B;IAC7B,6BAA6B;IAC7B,6BAA6B;IAC7B,2BAA2B;IAC3B,6BAA6B;IAC7B,6BAA6B;IAC7B,6BAA6B;IAC7B,6BAA6B;IAC7B,2BAA2B;;IAE3B,+BAA+B;IAC/B,8BAA8B;IAC9B,iCAAiC;IACjC,kCAAkC;IAClC,8BAA8B;AAClC","sourcesContent":[":root {\n    --w-font-family-text: Arial, system-ui, sans-serif;\n    --w-font-weight-text-thin: 300;\n    --w-font-weight-text-regular: 400;\n    --w-font-weight-text-semibold: 600;\n    --w-font-weight-text-bold: 800;\n\n    --w-font-size-text-100: 0.8em;\n    --w-font-size-text-200: 0.8em;\n    --w-font-size-text-300: 0.8em;\n    --w-font-size-text-400: 1em;\n    --w-font-size-text-500: 1.2em;\n    --w-font-size-text-600: 1.4em;\n    --w-font-size-text-700: 1.6em;\n    --w-font-size-text-800: 1.8em;\n    --w-font-size-text-900: 2em;\n\n    --w-font-family-mono: monospace;\n    --w-font-weight-mono-thin: 300;\n    --w-font-weight-mono-regular: 400;\n    --w-font-weight-mono-semibold: 600;\n    --w-font-weight-mono-bold: 800;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/button/button.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/button/button.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/code/code.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/code/code.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/heading/heading.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/heading/heading.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\n\n    --w-heading--size-100--font-size--help: \"Font size for `size=100`.\";\n    --w-heading--size-100--font-size: var(--w-font-size-text-100);\n    --w-heading--size-200--font-size--help: \"Font size for `size=200`.\";\n    --w-heading--size-200--font-size: var(--w-font-size-text-200);\n    --w-heading--size-300--font-size--help: \"Font size for `size=300`.\";\n    --w-heading--size-300--font-size: var(--w-font-size-text-300);\n    --w-heading--size-400--font-size--help: \"Font size for `size=400`.\";\n    --w-heading--size-400--font-size: var(--w-font-size-text-400);\n    --w-heading--size-500--font-size--help: \"Font size for `size=500`.\";\n    --w-heading--size-500--font-size: var(--w-font-size-text-500);\n    --w-heading--size-600--font-size--help: \"Font size for `size=600`.\";\n    --w-heading--size-600--font-size: var(--w-font-size-text-600);\n    --w-heading--size-700--font-size--help: \"Font size for `size=700`.\";\n    --w-heading--size-700--font-size: var(--w-font-size-text-700);\n    --w-heading--size-800--font-size--help: \"Font size for `size=800`.\";\n    --w-heading--size-800--font-size: var(--w-font-size-text-800);\n    --w-heading--size-900--font-size--help: \"Font size for `size=900`.\";\n    --w-heading--size-900--font-size: var(--w-font-size-text-900);\n\n    --w-heading--size-100--margin-top--help: \"Top margin for `size=100`.\";\n    --w-heading--size-100--margin-top: var(--w-spacing-200);\n    --w-heading--size-200--margin-top--help: \"Top margin for `size=200`.\";\n    --w-heading--size-200--margin-top: var(--w-spacing-300);\n    --w-heading--size-300--margin-top--help: \"Top margin for `size=300`.\";\n    --w-heading--size-300--margin-top: var(--w-spacing-300);\n    --w-heading--size-400--margin-top--help: \"Top margin for `size=400`.\";\n    --w-heading--size-400--margin-top: var(--w-spacing-300);\n    --w-heading--size-500--margin-top--help: \"Top margin for `size=500`.\";\n    --w-heading--size-500--margin-top: var(--w-spacing-400);\n    --w-heading--size-600--margin-top--help: \"Top margin for `size=600`.\";\n    --w-heading--size-600--margin-top: var(--w-spacing-400);\n    --w-heading--size-700--margin-top--help: \"Top margin for `size=700`.\";\n    --w-heading--size-700--margin-top: var(--w-spacing-400);\n    --w-heading--size-800--margin-top--help: \"Top margin for `size=800`.\";\n    --w-heading--size-800--margin-top: var(--w-spacing-500);\n    --w-heading--size-900--margin-top--help: \"Top margin for `size=900`.\";\n    --w-heading--size-900--margin-top: var(--w-spacing-500);\n}", "",{"version":3,"sources":["webpack://./src/js/components/atoms/heading/heading.css"],"names":[],"mappings":"AAAA;;;IAGI,mEAAmE;IACnE,6DAA6D;IAC7D,mEAAmE;IACnE,6DAA6D;IAC7D,mEAAmE;IACnE,6DAA6D;IAC7D,mEAAmE;IACnE,6DAA6D;IAC7D,mEAAmE;IACnE,6DAA6D;IAC7D,mEAAmE;IACnE,6DAA6D;IAC7D,mEAAmE;IACnE,6DAA6D;IAC7D,mEAAmE;IACnE,6DAA6D;IAC7D,mEAAmE;IACnE,6DAA6D;;IAE7D,qEAAqE;IACrE,uDAAuD;IACvD,qEAAqE;IACrE,uDAAuD;IACvD,qEAAqE;IACrE,uDAAuD;IACvD,qEAAqE;IACrE,uDAAuD;IACvD,qEAAqE;IACrE,uDAAuD;IACvD,qEAAqE;IACrE,uDAAuD;IACvD,qEAAqE;IACrE,uDAAuD;IACvD,qEAAqE;IACrE,uDAAuD;IACvD,qEAAqE;IACrE,uDAAuD;AAC3D","sourcesContent":[":root {\n\n\n    --w-heading--size-100--font-size--help: \"Font size for `size=100`.\";\n    --w-heading--size-100--font-size: var(--w-font-size-text-100);\n    --w-heading--size-200--font-size--help: \"Font size for `size=200`.\";\n    --w-heading--size-200--font-size: var(--w-font-size-text-200);\n    --w-heading--size-300--font-size--help: \"Font size for `size=300`.\";\n    --w-heading--size-300--font-size: var(--w-font-size-text-300);\n    --w-heading--size-400--font-size--help: \"Font size for `size=400`.\";\n    --w-heading--size-400--font-size: var(--w-font-size-text-400);\n    --w-heading--size-500--font-size--help: \"Font size for `size=500`.\";\n    --w-heading--size-500--font-size: var(--w-font-size-text-500);\n    --w-heading--size-600--font-size--help: \"Font size for `size=600`.\";\n    --w-heading--size-600--font-size: var(--w-font-size-text-600);\n    --w-heading--size-700--font-size--help: \"Font size for `size=700`.\";\n    --w-heading--size-700--font-size: var(--w-font-size-text-700);\n    --w-heading--size-800--font-size--help: \"Font size for `size=800`.\";\n    --w-heading--size-800--font-size: var(--w-font-size-text-800);\n    --w-heading--size-900--font-size--help: \"Font size for `size=900`.\";\n    --w-heading--size-900--font-size: var(--w-font-size-text-900);\n\n    --w-heading--size-100--margin-top--help: \"Top margin for `size=100`.\";\n    --w-heading--size-100--margin-top: var(--w-spacing-200);\n    --w-heading--size-200--margin-top--help: \"Top margin for `size=200`.\";\n    --w-heading--size-200--margin-top: var(--w-spacing-300);\n    --w-heading--size-300--margin-top--help: \"Top margin for `size=300`.\";\n    --w-heading--size-300--margin-top: var(--w-spacing-300);\n    --w-heading--size-400--margin-top--help: \"Top margin for `size=400`.\";\n    --w-heading--size-400--margin-top: var(--w-spacing-300);\n    --w-heading--size-500--margin-top--help: \"Top margin for `size=500`.\";\n    --w-heading--size-500--margin-top: var(--w-spacing-400);\n    --w-heading--size-600--margin-top--help: \"Top margin for `size=600`.\";\n    --w-heading--size-600--margin-top: var(--w-spacing-400);\n    --w-heading--size-700--margin-top--help: \"Top margin for `size=700`.\";\n    --w-heading--size-700--margin-top: var(--w-spacing-400);\n    --w-heading--size-800--margin-top--help: \"Top margin for `size=800`.\";\n    --w-heading--size-800--margin-top: var(--w-spacing-500);\n    --w-heading--size-900--margin-top--help: \"Top margin for `size=900`.\";\n    --w-heading--size-900--margin-top: var(--w-spacing-500);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/markdown/markdown.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/markdown/markdown.css ***!
  \*********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --w-markdown--spacing-s--margin-top: var(--w-spacing-300);\n    --w-markdown--spacing-s--margin-bottom: var(--w-spacing-300);\n}", "",{"version":3,"sources":["webpack://./src/js/components/atoms/markdown/markdown.css"],"names":[],"mappings":"AAAA;IACI,yDAAyD;IACzD,4DAA4D;AAChE","sourcesContent":[":root {\n    --w-markdown--spacing-s--margin-top: var(--w-spacing-300);\n    --w-markdown--spacing-s--margin-bottom: var(--w-spacing-300);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/pane/pane.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/pane/pane.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --w-pane--border-radius: var(--w-border-radius-200);\n    --w-pane--spacing-s--padding: var(--w-spacing-300);\n    --w-pane--spacing-m--padding: var(--w-spacing-400);\n\n    --w-pane--elevation-500--border-width: var(--w-border-width--thin);\n    --w-pane--elevation-500--border-color: var(--w-background-color-800);\n}", "",{"version":3,"sources":["webpack://./src/js/components/atoms/pane/pane.css"],"names":[],"mappings":"AAAA;IACI,mDAAmD;IACnD,kDAAkD;IAClD,kDAAkD;;IAElD,kEAAkE;IAClE,oEAAoE;AACxE","sourcesContent":[":root {\n    --w-pane--border-radius: var(--w-border-radius-200);\n    --w-pane--spacing-s--padding: var(--w-spacing-300);\n    --w-pane--spacing-m--padding: var(--w-spacing-400);\n\n    --w-pane--elevation-500--border-width: var(--w-border-width--thin);\n    --w-pane--elevation-500--border-color: var(--w-background-color-800);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/paragraph/paragraph.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/paragraph/paragraph.css ***!
  \***********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/pre/pre.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/pre/pre.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --w-pre--background-color: var(--w-text-color);\n    --w-pre--color: var(--w-background-color);\n    --w-pre--padding: var(--w-spacing-100) var(--w-spacing-200);\n\n    --w-pre--font-family: var(--w-font-family-mono);\n    --w-pre--font-weight: var(--w-font-weight-mono-regular);\n    --w-pre--font-size: var(--w-font-size-text-400);\n}", "",{"version":3,"sources":["webpack://./src/js/components/atoms/pre/pre.css"],"names":[],"mappings":"AAAA;IACI,8CAA8C;IAC9C,yCAAyC;IACzC,2DAA2D;;IAE3D,+CAA+C;IAC/C,uDAAuD;IACvD,+CAA+C;AACnD","sourcesContent":[":root {\n    --w-pre--background-color: var(--w-text-color);\n    --w-pre--color: var(--w-background-color);\n    --w-pre--padding: var(--w-spacing-100) var(--w-spacing-200);\n\n    --w-pre--font-family: var(--w-font-family-mono);\n    --w-pre--font-weight: var(--w-font-weight-mono-regular);\n    --w-pre--font-size: var(--w-font-size-text-400);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/tabs/tabs.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/tabs/tabs.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --w-tab--padding-left: 20px;\n    --w-tab--padding-right: 80px;\n    --w-tabs--border-bottom-width: 2px;\n    --w-tabs--border-right-width: 1px;\n\n    --w-tabs--height: 3em;\n    --w-tabs--transition: all 300ms linear;\n\n    --w-tabs--contrast--background-color: var(--w-primary-color);\n    --w-tabs--contrast--border-bottom-color: var(--w-primary-color);\n    --w-tabs--contrast--tab--color: var(--w-primary-text-color-500);\n    --w-tabs--contrast--tab--background-color: var(--w-primary-color);\n    --w-tabs--contrast--tab--border-bottom-color: var(--w-primary-color);\n    --w-tabs--contrast--tab--border-right-color: var(--w-background-color-900);\n    --w-tabs--contrast--tab--hover--color: var(--w-primary-text-color-400);\n    --w-tabs--contrast--tab--hover--background-color: var(--w-primary-hover-color);\n    --w-tabs--contrast--tab--active--color: var(--w-text-color);\n    --w-tabs--contrast--tab--active--background-color: var(--w-background-color);\n    --w-tabs--contrast--tab--active--border-bottom-color: var(--w-background-color);\n\n    --w-tabs--light-contrast--background-color: var(--w-background-color-500);\n    --w-tabs--light-contrast--border-bottom-color: var(--w-primary-color);\n    --w-tabs--light-contrast--tab--color: var(--w-text-color);\n    --w-tabs--light-contrast--tab--background-color: var(--w-background-color-500);\n    --w-tabs--light-contrast--tab--border-bottom-color: var(--w-primary-color);\n    --w-tabs--light-contrast--tab--border-right-color: var(--w-background-color-500);\n    --w-tabs--light-contrast--tab--hover--color: var(--w-text-color-500);\n    --w-tabs--light-contrast--tab--hover--background-color: var(--w-background-color-600);\n    --w-tabs--light-contrast--tab--active--color: var(--w-primary-text-color);\n    --w-tabs--light-contrast--tab--active--background-color: var(--w-primary-color);\n    --w-tabs--light-contrast--tab--active--border-bottom-color: var(--w-primary-color);\n\n    --w-tabs--shaded--background-color: var(--w-background-color);\n    --w-tabs--shaded--border-bottom-color: var(--w-background-color-800);\n    --w-tabs--shaded--tab--color: var(--w-text-color-300);\n    --w-tabs--shaded--tab--background-color: var(--w-background-color);\n    --w-tabs--shaded--tab--border-bottom-color: var(--w-primary-color-900);\n    --w-tabs--shaded--tab--border-right-color: var(--w-background-color);\n    --w-tabs--shaded--tab--hover--color: var(--w-text-color-500);\n    --w-tabs--shaded--tab--hover--background-color: var(--w-background-color);\n    --w-tabs--shaded--tab--active--color: var(--w-primary-color);\n    --w-tabs--shaded--tab--active--background-color: var(--w-background-color);\n    --w-tabs--shaded--tab--active--border-bottom-color: var(--w-primary-color);\n}", "",{"version":3,"sources":["webpack://./src/js/components/atoms/tabs/tabs.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,4BAA4B;IAC5B,kCAAkC;IAClC,iCAAiC;;IAEjC,qBAAqB;IACrB,sCAAsC;;IAEtC,4DAA4D;IAC5D,+DAA+D;IAC/D,+DAA+D;IAC/D,iEAAiE;IACjE,oEAAoE;IACpE,0EAA0E;IAC1E,sEAAsE;IACtE,8EAA8E;IAC9E,2DAA2D;IAC3D,4EAA4E;IAC5E,+EAA+E;;IAE/E,yEAAyE;IACzE,qEAAqE;IACrE,yDAAyD;IACzD,8EAA8E;IAC9E,0EAA0E;IAC1E,gFAAgF;IAChF,oEAAoE;IACpE,qFAAqF;IACrF,yEAAyE;IACzE,+EAA+E;IAC/E,kFAAkF;;IAElF,6DAA6D;IAC7D,oEAAoE;IACpE,qDAAqD;IACrD,kEAAkE;IAClE,sEAAsE;IACtE,oEAAoE;IACpE,4DAA4D;IAC5D,yEAAyE;IACzE,4DAA4D;IAC5D,0EAA0E;IAC1E,0EAA0E;AAC9E","sourcesContent":[":root {\n    --w-tab--padding-left: 20px;\n    --w-tab--padding-right: 80px;\n    --w-tabs--border-bottom-width: 2px;\n    --w-tabs--border-right-width: 1px;\n\n    --w-tabs--height: 3em;\n    --w-tabs--transition: all 300ms linear;\n\n    --w-tabs--contrast--background-color: var(--w-primary-color);\n    --w-tabs--contrast--border-bottom-color: var(--w-primary-color);\n    --w-tabs--contrast--tab--color: var(--w-primary-text-color-500);\n    --w-tabs--contrast--tab--background-color: var(--w-primary-color);\n    --w-tabs--contrast--tab--border-bottom-color: var(--w-primary-color);\n    --w-tabs--contrast--tab--border-right-color: var(--w-background-color-900);\n    --w-tabs--contrast--tab--hover--color: var(--w-primary-text-color-400);\n    --w-tabs--contrast--tab--hover--background-color: var(--w-primary-hover-color);\n    --w-tabs--contrast--tab--active--color: var(--w-text-color);\n    --w-tabs--contrast--tab--active--background-color: var(--w-background-color);\n    --w-tabs--contrast--tab--active--border-bottom-color: var(--w-background-color);\n\n    --w-tabs--light-contrast--background-color: var(--w-background-color-500);\n    --w-tabs--light-contrast--border-bottom-color: var(--w-primary-color);\n    --w-tabs--light-contrast--tab--color: var(--w-text-color);\n    --w-tabs--light-contrast--tab--background-color: var(--w-background-color-500);\n    --w-tabs--light-contrast--tab--border-bottom-color: var(--w-primary-color);\n    --w-tabs--light-contrast--tab--border-right-color: var(--w-background-color-500);\n    --w-tabs--light-contrast--tab--hover--color: var(--w-text-color-500);\n    --w-tabs--light-contrast--tab--hover--background-color: var(--w-background-color-600);\n    --w-tabs--light-contrast--tab--active--color: var(--w-primary-text-color);\n    --w-tabs--light-contrast--tab--active--background-color: var(--w-primary-color);\n    --w-tabs--light-contrast--tab--active--border-bottom-color: var(--w-primary-color);\n\n    --w-tabs--shaded--background-color: var(--w-background-color);\n    --w-tabs--shaded--border-bottom-color: var(--w-background-color-800);\n    --w-tabs--shaded--tab--color: var(--w-text-color-300);\n    --w-tabs--shaded--tab--background-color: var(--w-background-color);\n    --w-tabs--shaded--tab--border-bottom-color: var(--w-primary-color-900);\n    --w-tabs--shaded--tab--border-right-color: var(--w-background-color);\n    --w-tabs--shaded--tab--hover--color: var(--w-text-color-500);\n    --w-tabs--shaded--tab--hover--background-color: var(--w-background-color);\n    --w-tabs--shaded--tab--active--color: var(--w-primary-color);\n    --w-tabs--shaded--tab--active--background-color: var(--w-background-color);\n    --w-tabs--shaded--tab--active--border-bottom-color: var(--w-primary-color);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/text-input/text-input.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/text-input/text-input.css ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/components/layout/fixed-header/fixed-header.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/components/layout/fixed-header/fixed-header.css ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --w-fixed-header--article-max-width: var(--w-breakpoint-xl);\n\n    --w-fixed-header--spacing-s--horizontal-spacing: var(--w-spacing--page--horizontal-space);\n    --w-fixed-header--spacing-s--vertical-spacing: var(--w-spacing--page--vertical-space);\n\n    --w-fixed-header--spacing-m--horizontal-spacing: var(--w-spacing--page--horizontal-space);\n    --w-fixed-header--spacing-m--vertical-spacing: calc(var(--w-spacing--page--vertical-space) * 2);\n}", "",{"version":3,"sources":["webpack://./src/js/components/layout/fixed-header/fixed-header.css"],"names":[],"mappings":"AAAA;IACI,2DAA2D;;IAE3D,yFAAyF;IACzF,qFAAqF;;IAErF,yFAAyF;IACzF,+FAA+F;AACnG","sourcesContent":[":root {\n    --w-fixed-header--article-max-width: var(--w-breakpoint-xl);\n\n    --w-fixed-header--spacing-s--horizontal-spacing: var(--w-spacing--page--horizontal-space);\n    --w-fixed-header--spacing-s--vertical-spacing: var(--w-spacing--page--vertical-space);\n\n    --w-fixed-header--spacing-m--horizontal-spacing: var(--w-spacing--page--horizontal-space);\n    --w-fixed-header--spacing-m--vertical-spacing: calc(var(--w-spacing--page--vertical-space) * 2);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/components/layout/grid/grid.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/components/layout/grid/grid.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/components/molecules/brand/brand.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/components/molecules/brand/brand.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --w-brand--logo--height: 2.5em;\n    --w-brand--logo--margin-right: var(--w-spacing-200);\n    --w-brand--font-weight: var(--w-font-weight-text-semibold);\n\n    --w-brand--contrast--color: var(--w-primary-text-color);\n    --w-brand--contrast--hover--color: var(--w-primary-text-color-300);\n\n    --w-brand--shaded--color: var(--w-text-color);\n    --w-brand--shaded--hover--color: var(--w-text-color-500);\n}", "",{"version":3,"sources":["webpack://./src/js/components/molecules/brand/brand.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,mDAAmD;IACnD,0DAA0D;;IAE1D,uDAAuD;IACvD,kEAAkE;;IAElE,6CAA6C;IAC7C,wDAAwD;AAC5D","sourcesContent":[":root {\n    --w-brand--logo--height: 2.5em;\n    --w-brand--logo--margin-right: var(--w-spacing-200);\n    --w-brand--font-weight: var(--w-font-weight-text-semibold);\n\n    --w-brand--contrast--color: var(--w-primary-text-color);\n    --w-brand--contrast--hover--color: var(--w-primary-text-color-300);\n\n    --w-brand--shaded--color: var(--w-text-color);\n    --w-brand--shaded--hover--color: var(--w-text-color-500);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/components/molecules/css-rules-table/css-rules-table.css":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/components/molecules/css-rules-table/css-rules-table.css ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/components/molecules/element-example/element-example.css":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/components/molecules/element-example/element-example.css ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/components/molecules/element-properties-table/element-properties-table.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/components/molecules/element-properties-table/element-properties-table.css ***!
  \*********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/components/molecules/horizontal-nav/horizontal-nav.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/components/molecules/horizontal-nav/horizontal-nav.css ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --w-horizontal-nav--contrast--color: var(--w-primary-text-color-500);\n    --w-horizontal-nav--contrast--hover--color: var(--w-primary-text-color-300);\n    --w-horizontal-nav--contrast--active--color: var(--w-primary-text-color-300);\n\n    --w-horizontal-nav--shaded--color: var(--w-text-color-300);\n    --w-horizontal-nav--shaded--hover--color: var(--w-text-color-500);\n    --w-horizontal-nav--shaded--active--color: var(--w-primary-color);\n}", "",{"version":3,"sources":["webpack://./src/js/components/molecules/horizontal-nav/horizontal-nav.css"],"names":[],"mappings":"AAAA;IACI,oEAAoE;IACpE,2EAA2E;IAC3E,4EAA4E;;IAE5E,0DAA0D;IAC1D,iEAAiE;IACjE,iEAAiE;AACrE","sourcesContent":[":root {\n    --w-horizontal-nav--contrast--color: var(--w-primary-text-color-500);\n    --w-horizontal-nav--contrast--hover--color: var(--w-primary-text-color-300);\n    --w-horizontal-nav--contrast--active--color: var(--w-primary-text-color-300);\n\n    --w-horizontal-nav--shaded--color: var(--w-text-color-300);\n    --w-horizontal-nav--shaded--hover--color: var(--w-text-color-500);\n    --w-horizontal-nav--shaded--active--color: var(--w-primary-color);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/components/molecules/vertical-nav/vertical-nav.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/components/molecules/vertical-nav/vertical-nav.css ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --w-vertical-nav--contrast--color: var(--w-primary-text-color-500);\n    --w-vertical-nav--contrast--hover--color: var(--w-primary-text-color-300);\n    --w-vertical-nav--contrast--active--color: var(--w-primary-text-color-300);\n\n    --w-vertical-nav--shaded--color: var(--w-text-color-300);\n    --w-vertical-nav--shaded--hover--color: var(--w-text-color-500);\n    --w-vertical-nav--shaded--active--color: var(--w-primary-color);\n}", "",{"version":3,"sources":["webpack://./src/js/components/molecules/vertical-nav/vertical-nav.css"],"names":[],"mappings":"AAAA;IACI,kEAAkE;IAClE,yEAAyE;IACzE,0EAA0E;;IAE1E,wDAAwD;IACxD,+DAA+D;IAC/D,+DAA+D;AACnE","sourcesContent":[":root {\n    --w-vertical-nav--contrast--color: var(--w-primary-text-color-500);\n    --w-vertical-nav--contrast--hover--color: var(--w-primary-text-color-300);\n    --w-vertical-nav--contrast--active--color: var(--w-primary-text-color-300);\n\n    --w-vertical-nav--shaded--color: var(--w-text-color-300);\n    --w-vertical-nav--shaded--hover--color: var(--w-text-color-500);\n    --w-vertical-nav--shaded--active--color: var(--w-primary-color);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/components/organisms/footer/footer.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/components/organisms/footer/footer.css ***!
  \*********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --w-footer--spacing-s--horizontal-spacing: var(--w-spacing--page--horizontal-space);\n    --w-footer--spacing-s--vertical-spacing: var(--w-spacing--page--vertical-space);\n\n    --w-footer--spacing-m--horizontal-spacing: var(--w-spacing--page--horizontal-space);\n    --w-footer--spacing-m--vertical-spacing: calc(var(--w-spacing--page--vertical-space) * 2);\n\n    --w-footer--contrast--background-color: var(--w-primary-color);\n    --w-footer--contrast--color: var(--w-primary-text-color);\n\n    --w-footer--light-contrast--background-color: var(--w-background-color-800);\n    --w-footer--light-contrast--color: var(--w-text-color);\n    \n    --w-footer--shaded--border-top--color: var(--w-background-color-800);\n    --w-footer--shaded--border-top--width: var(--w-border-width--thin);\n    --w-footer--shaded--color: var(--w-text-color-300);\n}", "",{"version":3,"sources":["webpack://./src/js/components/organisms/footer/footer.css"],"names":[],"mappings":"AAAA;IACI,mFAAmF;IACnF,+EAA+E;;IAE/E,mFAAmF;IACnF,yFAAyF;;IAEzF,8DAA8D;IAC9D,wDAAwD;;IAExD,2EAA2E;IAC3E,sDAAsD;;IAEtD,oEAAoE;IACpE,kEAAkE;IAClE,kDAAkD;AACtD","sourcesContent":[":root {\n    --w-footer--spacing-s--horizontal-spacing: var(--w-spacing--page--horizontal-space);\n    --w-footer--spacing-s--vertical-spacing: var(--w-spacing--page--vertical-space);\n\n    --w-footer--spacing-m--horizontal-spacing: var(--w-spacing--page--horizontal-space);\n    --w-footer--spacing-m--vertical-spacing: calc(var(--w-spacing--page--vertical-space) * 2);\n\n    --w-footer--contrast--background-color: var(--w-primary-color);\n    --w-footer--contrast--color: var(--w-primary-text-color);\n\n    --w-footer--light-contrast--background-color: var(--w-background-color-800);\n    --w-footer--light-contrast--color: var(--w-text-color);\n    \n    --w-footer--shaded--border-top--color: var(--w-background-color-800);\n    --w-footer--shaded--border-top--width: var(--w-border-width--thin);\n    --w-footer--shaded--color: var(--w-text-color-300);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js/components/organisms/navbar/navbar.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js/components/organisms/navbar/navbar.css ***!
  \*********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --w-navbar--size-s--horizontal-padding: var(--w-spacing--page--horizontal-space);\n    --w-navbar--size-s--vertical-padding: var(--w-spacing--page--vertical-space);\n\n    --w-navbar--size-m--horizontal-padding: var(--w-spacing--page--horizontal-space);\n    --w-navbar--size-m--vertical-padding: calc(var(--w-spacing--page--vertical-space) * 2);\n\n    --w-navbar--contrast--background-color: var(--w-primary-color);\n    \n    --w-navbar--shaded--background-color: var(--w-background-color);\n    --w-navbar--shaded--border-bottom--color: var(--w-background-color-800);\n    --w-navbar--shaded--border-bottom--width: var(--w-border-width--thin);\n}", "",{"version":3,"sources":["webpack://./src/js/components/organisms/navbar/navbar.css"],"names":[],"mappings":"AAAA;IACI,gFAAgF;IAChF,4EAA4E;;IAE5E,gFAAgF;IAChF,sFAAsF;;IAEtF,8DAA8D;;IAE9D,+DAA+D;IAC/D,uEAAuE;IACvE,qEAAqE;AACzE","sourcesContent":[":root {\n    --w-navbar--size-s--horizontal-padding: var(--w-spacing--page--horizontal-space);\n    --w-navbar--size-s--vertical-padding: var(--w-spacing--page--vertical-space);\n\n    --w-navbar--size-m--horizontal-padding: var(--w-spacing--page--horizontal-space);\n    --w-navbar--size-m--vertical-padding: calc(var(--w-spacing--page--vertical-space) * 2);\n\n    --w-navbar--contrast--background-color: var(--w-primary-color);\n    \n    --w-navbar--shaded--background-color: var(--w-background-color);\n    --w-navbar--shaded--border-bottom--color: var(--w-background-color-800);\n    --w-navbar--shaded--border-bottom--width: var(--w-border-width--thin);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_breakpoints_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./css/breakpoints.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/breakpoints.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_colors_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./css/colors.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/colors.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_icons_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./css/icons.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/icons.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_spacing_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./css/spacing.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/spacing.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_typography_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./css/typography.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/typography.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_js_components_atoms_button_button_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./js/components/atoms/button/button.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/button/button.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_js_components_atoms_code_code_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./js/components/atoms/code/code.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/code/code.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_js_components_atoms_heading_heading_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./js/components/atoms/heading/heading.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/heading/heading.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_js_components_atoms_markdown_markdown_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./js/components/atoms/markdown/markdown.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/markdown/markdown.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_js_components_atoms_pane_pane_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./js/components/atoms/pane/pane.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/pane/pane.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_js_components_atoms_paragraph_paragraph_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./js/components/atoms/paragraph/paragraph.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/paragraph/paragraph.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_js_components_atoms_pre_pre_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./js/components/atoms/pre/pre.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/pre/pre.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_js_components_atoms_tabs_tabs_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./js/components/atoms/tabs/tabs.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/tabs/tabs.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_js_components_atoms_text_input_text_input_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./js/components/atoms/text-input/text-input.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/components/atoms/text-input/text-input.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_js_components_layout_fixed_header_fixed_header_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./js/components/layout/fixed-header/fixed-header.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/components/layout/fixed-header/fixed-header.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_js_components_layout_grid_grid_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./js/components/layout/grid/grid.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/components/layout/grid/grid.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_js_components_molecules_brand_brand_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./js/components/molecules/brand/brand.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/components/molecules/brand/brand.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_js_components_molecules_css_rules_table_css_rules_table_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./js/components/molecules/css-rules-table/css-rules-table.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/components/molecules/css-rules-table/css-rules-table.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_js_components_molecules_element_example_element_example_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./js/components/molecules/element-example/element-example.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/components/molecules/element-example/element-example.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_js_components_molecules_element_properties_table_element_properties_table_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./js/components/molecules/element-properties-table/element-properties-table.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/components/molecules/element-properties-table/element-properties-table.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_js_components_molecules_horizontal_nav_horizontal_nav_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./js/components/molecules/horizontal-nav/horizontal-nav.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/components/molecules/horizontal-nav/horizontal-nav.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_js_components_molecules_vertical_nav_vertical_nav_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./js/components/molecules/vertical-nav/vertical-nav.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/components/molecules/vertical-nav/vertical-nav.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_js_components_organisms_footer_footer_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./js/components/organisms/footer/footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/components/organisms/footer/footer.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_js_components_organisms_navbar_navbar_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./js/components/organisms/navbar/navbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/js/components/organisms/navbar/navbar.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_theme_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./css/theme.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/theme.css");
// Imports




























var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_css_breakpoints_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_css_colors_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_css_icons_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_css_spacing_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_css_typography_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_js_components_atoms_button_button_css__WEBPACK_IMPORTED_MODULE_8__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_js_components_atoms_code_code_css__WEBPACK_IMPORTED_MODULE_9__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_js_components_atoms_heading_heading_css__WEBPACK_IMPORTED_MODULE_10__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_js_components_atoms_markdown_markdown_css__WEBPACK_IMPORTED_MODULE_11__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_js_components_atoms_pane_pane_css__WEBPACK_IMPORTED_MODULE_12__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_js_components_atoms_paragraph_paragraph_css__WEBPACK_IMPORTED_MODULE_13__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_js_components_atoms_pre_pre_css__WEBPACK_IMPORTED_MODULE_14__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_js_components_atoms_tabs_tabs_css__WEBPACK_IMPORTED_MODULE_15__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_js_components_atoms_text_input_text_input_css__WEBPACK_IMPORTED_MODULE_16__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_js_components_layout_fixed_header_fixed_header_css__WEBPACK_IMPORTED_MODULE_17__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_js_components_layout_grid_grid_css__WEBPACK_IMPORTED_MODULE_18__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_js_components_molecules_brand_brand_css__WEBPACK_IMPORTED_MODULE_19__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_js_components_molecules_css_rules_table_css_rules_table_css__WEBPACK_IMPORTED_MODULE_20__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_js_components_molecules_element_example_element_example_css__WEBPACK_IMPORTED_MODULE_21__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_js_components_molecules_element_properties_table_element_properties_table_css__WEBPACK_IMPORTED_MODULE_22__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_js_components_molecules_horizontal_nav_horizontal_nav_css__WEBPACK_IMPORTED_MODULE_23__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_js_components_molecules_vertical_nav_vertical_nav_css__WEBPACK_IMPORTED_MODULE_24__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_js_components_organisms_footer_footer_css__WEBPACK_IMPORTED_MODULE_25__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_js_components_organisms_navbar_navbar_css__WEBPACK_IMPORTED_MODULE_26__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_css_theme_css__WEBPACK_IMPORTED_MODULE_27__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * Normalize\n */\n\n/*\n * Global tokens\n */\n\n/*\n * Component tokens\n */\n\n/* Atoms */\n\n/* Layouts */\n\n/* Molecules */\n\n/* Organisms */\n\n\n/*\n * Theme\n */", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;EAEE;;AAGF;;EAEE;;AAOF;;EAEE;;AAEF,UAAU;;AAWV,YAAY;;AAIZ,cAAc;;AAQd,cAAc;;;AAKd;;EAEE","sourcesContent":["/*\n * Normalize\n */\n@import \"./css/normalize.css\";\n\n/*\n * Global tokens\n */\n@import \"./css/breakpoints.css\";\n@import \"./css/colors.css\";\n@import \"./css/icons.css\";\n@import \"./css/spacing.css\";\n@import \"./css/typography.css\";\n\n/*\n * Component tokens\n */\n\n/* Atoms */\n@import \"./js/components/atoms/button/button.css\";\n@import \"./js/components/atoms/code/code.css\";\n@import \"./js/components/atoms/heading/heading.css\";\n@import \"./js/components/atoms/markdown/markdown.css\";\n@import \"./js/components/atoms/pane/pane.css\";\n@import \"./js/components/atoms/paragraph/paragraph.css\";\n@import \"./js/components/atoms/pre/pre.css\";\n@import \"./js/components/atoms/tabs/tabs.css\";\n@import \"./js/components/atoms/text-input/text-input.css\";\n\n/* Layouts */\n@import \"./js/components/layout/fixed-header/fixed-header.css\";\n@import \"./js/components/layout/grid/grid.css\";\n\n/* Molecules */\n@import \"./js/components/molecules/brand/brand.css\";\n@import \"./js/components/molecules/css-rules-table/css-rules-table.css\";\n@import \"./js/components/molecules/element-example/element-example.css\";\n@import \"./js/components/molecules/element-properties-table/element-properties-table.css\";\n@import \"./js/components/molecules/horizontal-nav/horizontal-nav.css\";\n@import \"./js/components/molecules/vertical-nav/vertical-nav.css\";\n\n/* Organisms */\n@import \"./js/components/organisms/footer/footer.css\";\n@import \"./js/components/organisms/navbar/navbar.css\";\n\n\n/*\n * Theme\n */\n@import \"./css/theme.css\";"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "data:image/svg+xml,%3C%3Fxml version=%271.0%27 encoding=%27iso-8859-1%27%3F%3E%3C%21-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --%3E%3Csvg fill=%27%23000000%27 height=%27800px%27 width=%27800px%27 version=%271.1%27 id=%27Capa_1%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 viewBox=%270 0 488.85 488.85%27 xml:space=%27preserve%27%3E%3Cg%3E%3Cpath d=%27M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2 s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025 c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3 C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7 c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z%27/%3E%3C/g%3E%3C/svg%3E":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3C%3Fxml version=%271.0%27 encoding=%27iso-8859-1%27%3F%3E%3C%21-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --%3E%3Csvg fill=%27%23000000%27 height=%27800px%27 width=%27800px%27 version=%271.1%27 id=%27Capa_1%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 viewBox=%270 0 488.85 488.85%27 xml:space=%27preserve%27%3E%3Cg%3E%3Cpath d=%27M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2 s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025 c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3 C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7 c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z%27/%3E%3C/g%3E%3C/svg%3E ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3C%3Fxml version=%271.0%27 encoding=%27iso-8859-1%27%3F%3E%3C%21-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --%3E%3Csvg fill=%27%23000000%27 height=%27800px%27 width=%27800px%27 version=%271.1%27 id=%27Capa_1%27 xmlns=%27http://www.w3.org/2000/svg%27 xmlns:xlink=%27http://www.w3.org/1999/xlink%27 viewBox=%270 0 488.85 488.85%27 xml:space=%27preserve%27%3E%3Cg%3E%3Cpath d=%27M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2 s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025 c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3 C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7 c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z%27/%3E%3C/g%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28115, 130, 140%29%27 stroke-width=%274%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cline x1=%2718%27 y1=%276%27 x2=%276%27 y2=%2718%27%3E%3C/line%3E%3Cline x1=%276%27 y1=%276%27 x2=%2718%27 y2=%2718%27%3E%3C/line%3E%3C/svg%3E":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28115, 130, 140%29%27 stroke-width=%274%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cline x1=%2718%27 y1=%276%27 x2=%276%27 y2=%2718%27%3E%3C/line%3E%3Cline x1=%276%27 y1=%276%27 x2=%2718%27 y2=%2718%27%3E%3C/line%3E%3C/svg%3E ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28115, 130, 140%29%27 stroke-width=%274%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cline x1=%2718%27 y1=%276%27 x2=%276%27 y2=%2718%27%3E%3C/line%3E%3Cline x1=%276%27 y1=%276%27 x2=%2718%27 y2=%2718%27%3E%3C/line%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28198, 40, 40%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%2710%27%3E%3C/circle%3E%3Cline x1=%2712%27 y1=%278%27 x2=%2712%27 y2=%2712%27%3E%3C/line%3E%3Cline x1=%2712%27 y1=%2716%27 x2=%2712.01%27 y2=%2716%27%3E%3C/line%3E%3C/svg%3E":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28198, 40, 40%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%2710%27%3E%3C/circle%3E%3Cline x1=%2712%27 y1=%278%27 x2=%2712%27 y2=%2712%27%3E%3C/line%3E%3Cline x1=%2712%27 y1=%2716%27 x2=%2712.01%27 y2=%2716%27%3E%3C/line%3E%3C/svg%3E ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28198, 40, 40%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%2710%27%3E%3C/circle%3E%3Cline x1=%2712%27 y1=%278%27 x2=%2712%27 y2=%2712%27%3E%3C/line%3E%3Cline x1=%2712%27 y1=%2716%27 x2=%2712.01%27 y2=%2716%27%3E%3C/line%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28255, 255, 255%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28255, 255, 255%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28255, 255, 255%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28255, 255, 255%29%27 stroke-width=%274%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cline x1=%275%27 y1=%2712%27 x2=%2719%27 y2=%2712%27%3E%3C/line%3E%3C/svg%3E":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28255, 255, 255%29%27 stroke-width=%274%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cline x1=%275%27 y1=%2712%27 x2=%2719%27 y2=%2712%27%3E%3C/line%3E%3C/svg%3E ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28255, 255, 255%29%27 stroke-width=%274%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cline x1=%275%27 y1=%2712%27 x2=%2719%27 y2=%2712%27%3E%3C/line%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28255, 255, 255%29%27 stroke-width=%274%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2720 6 9 17 4 12%27%3E%3C/polyline%3E%3C/svg%3E":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28255, 255, 255%29%27 stroke-width=%274%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2720 6 9 17 4 12%27%3E%3C/polyline%3E%3C/svg%3E ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%28255, 255, 255%29%27 stroke-width=%274%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2720 6 9 17 4 12%27%3E%3C/polyline%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2856, 142, 60%29%27 stroke-width=%273%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2720 6 9 17 4 12%27%3E%3C/polyline%3E%3C/svg%3E":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2856, 142, 60%29%27 stroke-width=%273%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2720 6 9 17 4 12%27%3E%3C/polyline%3E%3C/svg%3E ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2856, 142, 60%29%27 stroke-width=%273%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%2720 6 9 17 4 12%27%3E%3C/polyline%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2865, 84, 98%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2711%27 cy=%2711%27 r=%278%27%3E%3C/circle%3E%3Cline x1=%2721%27 y1=%2721%27 x2=%2716.65%27 y2=%2716.65%27%3E%3C/line%3E%3C/svg%3E":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2865, 84, 98%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2711%27 cy=%2711%27 r=%278%27%3E%3C/circle%3E%3Cline x1=%2721%27 y1=%2721%27 x2=%2716.65%27 y2=%2716.65%27%3E%3C/line%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2865, 84, 98%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2711%27 cy=%2711%27 r=%278%27%3E%3C/circle%3E%3Cline x1=%2721%27 y1=%2721%27 x2=%2716.65%27 y2=%2716.65%27%3E%3C/line%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2865, 84, 98%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%2710%27%3E%3C/circle%3E%3Cpolyline points=%2712 6 12 12 16 14%27%3E%3C/polyline%3E%3C/svg%3E":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2865, 84, 98%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%2710%27%3E%3C/circle%3E%3Cpolyline points=%2712 6 12 12 16 14%27%3E%3C/polyline%3E%3C/svg%3E ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2865, 84, 98%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Ccircle cx=%2712%27 cy=%2712%27 r=%2710%27%3E%3C/circle%3E%3Cpolyline points=%2712 6 12 12 16 14%27%3E%3C/polyline%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2865, 84, 98%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2865, 84, 98%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2865, 84, 98%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E";

/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2865, 84, 98%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Crect x=%273%27 y=%274%27 width=%2718%27 height=%2718%27 rx=%272%27 ry=%272%27%3E%3C/rect%3E%3Cline x1=%2716%27 y1=%272%27 x2=%2716%27 y2=%276%27%3E%3C/line%3E%3Cline x1=%278%27 y1=%272%27 x2=%278%27 y2=%276%27%3E%3C/line%3E%3Cline x1=%273%27 y1=%2710%27 x2=%2721%27 y2=%2710%27%3E%3C/line%3E%3C/svg%3E":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2865, 84, 98%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Crect x=%273%27 y=%274%27 width=%2718%27 height=%2718%27 rx=%272%27 ry=%272%27%3E%3C/rect%3E%3Cline x1=%2716%27 y1=%272%27 x2=%2716%27 y2=%276%27%3E%3C/line%3E%3Cline x1=%278%27 y1=%272%27 x2=%278%27 y2=%276%27%3E%3C/line%3E%3Cline x1=%273%27 y1=%2710%27 x2=%2721%27 y2=%2710%27%3E%3C/line%3E%3C/svg%3E ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27rgb%2865, 84, 98%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Crect x=%273%27 y=%274%27 width=%2718%27 height=%2718%27 rx=%272%27 ry=%272%27%3E%3C/rect%3E%3Cline x1=%2716%27 y1=%272%27 x2=%2716%27 y2=%276%27%3E%3C/line%3E%3Cline x1=%278%27 y1=%272%27 x2=%278%27 y2=%276%27%3E%3C/line%3E%3Cline x1=%273%27 y1=%2710%27 x2=%2721%27 y2=%2710%27%3E%3C/line%3E%3C/svg%3E";

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/css-tag.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/css-tag.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": () => (/* binding */ CSSResult),
/* harmony export */   "adoptStyles": () => (/* binding */ adoptStyles),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "getCompatibleStyle": () => (/* binding */ getCompatibleStyle),
/* harmony export */   "supportsAdoptingStyleSheets": () => (/* binding */ supportsAdoptingStyleSheets),
/* harmony export */   "unsafeCSS": () => (/* binding */ unsafeCSS)
/* harmony export */ });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const NODE_MODE = false;
const global = NODE_MODE ? globalThis : window;
/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
const supportsAdoptingStyleSheets = global.ShadowRoot &&
    (global.ShadyCSS === undefined || global.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype;
const constructionToken = Symbol();
const cssTagCache = new WeakMap();
/**
 * A container for a string of CSS text, that may be used to create a CSSStyleSheet.
 *
 * CSSResult is the return value of `css`-tagged template literals and
 * `unsafeCSS()`. In order to ensure that CSSResults are only created via the
 * `css` tag and `unsafeCSS()`, CSSResult cannot be constructed directly.
 */
class CSSResult {
    constructor(cssText, strings, safeToken) {
        // This property needs to remain unminified.
        this['_$cssResult$'] = true;
        if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
        }
        this.cssText = cssText;
        this._strings = strings;
    }
    // This is a getter so that it's lazy. In practice, this means stylesheets
    // are not created until the first element instance is made.
    get styleSheet() {
        // If `supportsAdoptingStyleSheets` is true then we assume CSSStyleSheet is
        // constructable.
        let styleSheet = this._styleSheet;
        const strings = this._strings;
        if (supportsAdoptingStyleSheets && styleSheet === undefined) {
            const cacheable = strings !== undefined && strings.length === 1;
            if (cacheable) {
                styleSheet = cssTagCache.get(strings);
            }
            if (styleSheet === undefined) {
                (this._styleSheet = styleSheet = new CSSStyleSheet()).replaceSync(this.cssText);
                if (cacheable) {
                    cssTagCache.set(strings, styleSheet);
                }
            }
        }
        return styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
const textFromCSSResult = (value) => {
    // This property needs to remain unminified.
    if (value['_$cssResult$'] === true) {
        return value.cssText;
    }
    else if (typeof value === 'number') {
        return value;
    }
    else {
        throw new Error(`Value passed to 'css' function must be a 'css' function result: ` +
            `${value}. Use 'unsafeCSS' to pass non-literal values, but take care ` +
            `to ensure page security.`);
    }
};
/**
 * Wrap a value for interpolation in a {@linkcode css} tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
const unsafeCSS = (value) => new CSSResult(typeof value === 'string' ? value : String(value), undefined, constructionToken);
/**
 * A template literal tag which can be used with LitElement's
 * {@linkcode LitElement.styles} property to set element styles.
 *
 * For security reasons, only literal string values and number may be used in
 * embedded expressions. To incorporate non-literal values {@linkcode unsafeCSS}
 * may be used inside an expression.
 */
const css = (strings, ...values) => {
    const cssText = strings.length === 1
        ? strings[0]
        : values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return new CSSResult(cssText, strings, constructionToken);
};
/**
 * Applies the given styles to a `shadowRoot`. When Shadow DOM is
 * available but `adoptedStyleSheets` is not, styles are appended to the
 * `shadowRoot` to [mimic spec behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
 * Note, when shimming is used, any styles that are subsequently placed into
 * the shadowRoot should be placed *before* any shimmed adopted styles. This
 * will match spec behavior that gives adopted sheets precedence over styles in
 * shadowRoot.
 */
const adoptStyles = (renderRoot, styles) => {
    if (supportsAdoptingStyleSheets) {
        renderRoot.adoptedStyleSheets = styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
    }
    else {
        styles.forEach((s) => {
            const style = document.createElement('style');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const nonce = global['litNonce'];
            if (nonce !== undefined) {
                style.setAttribute('nonce', nonce);
            }
            style.textContent = s.cssText;
            renderRoot.appendChild(style);
        });
    }
};
const cssResultFromStyleSheet = (sheet) => {
    let cssText = '';
    for (const rule of sheet.cssRules) {
        cssText += rule.cssText;
    }
    return unsafeCSS(cssText);
};
const getCompatibleStyle = supportsAdoptingStyleSheets ||
    (NODE_MODE && global.CSSStyleSheet === undefined)
    ? (s) => s
    : (s) => s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s;
//# sourceMappingURL=css-tag.js.map

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/reactive-element.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/reactive-element.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   "ReactiveElement": () => (/* binding */ ReactiveElement),
/* harmony export */   "adoptStyles": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   "css": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   "defaultConverter": () => (/* binding */ defaultConverter),
/* harmony export */   "getCompatibleStyle": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   "notEqual": () => (/* binding */ notEqual),
/* harmony export */   "supportsAdoptingStyleSheets": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   "unsafeCSS": () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-tag.js */ "./node_modules/@lit/reactive-element/development/css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c, _d;
var _e;
/**
 * Use this module if you want to create your own base class extending
 * {@link ReactiveElement}.
 * @packageDocumentation
 */

// In the Node build, this import will be injected by Rollup:
// import {HTMLElement, customElements} from '@lit-labs/ssr-dom-shim';

const NODE_MODE = false;
const global = NODE_MODE ? globalThis : window;
if (NODE_MODE) {
    (_a = global.customElements) !== null && _a !== void 0 ? _a : (global.customElements = customElements);
}
const DEV_MODE = true;
let requestUpdateThenable;
let issueWarning;
const trustedTypes = global
    .trustedTypes;
// Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.
const emptyStringForBooleanAttribute = trustedTypes
    ? trustedTypes.emptyScript
    : '';
const polyfillSupport = DEV_MODE
    ? global.reactiveElementPolyfillSupportDevMode
    : global.reactiveElementPolyfillSupport;
if (DEV_MODE) {
    // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    const issuedWarnings = ((_b = global.litIssuedWarnings) !== null && _b !== void 0 ? _b : (global.litIssuedWarnings = new Set()));
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += ` See https://lit.dev/msg/${code} for more information.`;
        if (!issuedWarnings.has(warning)) {
            console.warn(warning);
            issuedWarnings.add(warning);
        }
    };
    issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
    // Issue polyfill support warning.
    if (((_c = global.ShadyDOM) === null || _c === void 0 ? void 0 : _c.inUse) && polyfillSupport === undefined) {
        issueWarning('polyfill-support-missing', `Shadow DOM is being polyfilled via \`ShadyDOM\` but ` +
            `the \`polyfill-support\` module has not been loaded.`);
    }
    requestUpdateThenable = (name) => ({
        then: (onfulfilled, _onrejected) => {
            issueWarning('request-update-promise', `The \`requestUpdate\` method should no longer return a Promise but ` +
                `does so on \`${name}\`. Use \`updateComplete\` instead.`);
            if (onfulfilled !== undefined) {
                onfulfilled(false);
            }
        },
    });
}
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
const debugLogEvent = DEV_MODE
    ? (event) => {
        const shouldEmit = global
            .emitLitDebugLogEvents;
        if (!shouldEmit) {
            return;
        }
        global.dispatchEvent(new CustomEvent('lit-debug', {
            detail: event,
        }));
    }
    : undefined;
/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
/*@__INLINE__*/
const JSCompiler_renameProperty = (prop, _obj) => prop;
const defaultConverter = {
    toAttribute(value, type) {
        switch (type) {
            case Boolean:
                value = value ? emptyStringForBooleanAttribute : null;
                break;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                value = value == null ? value : JSON.stringify(value);
                break;
        }
        return value;
    },
    fromAttribute(value, type) {
        let fromValue = value;
        switch (type) {
            case Boolean:
                fromValue = value !== null;
                break;
            case Number:
                fromValue = value === null ? null : Number(value);
                break;
            case Object:
            case Array:
                // Do *not* generate exception when invalid JSON is set as elements
                // don't normally complain on being mis-configured.
                // TODO(sorvell): Do generate exception in *dev mode*.
                try {
                    // Assert to adhere to Bazel's "must type assert JSON parse" rule.
                    fromValue = JSON.parse(value);
                }
                catch (e) {
                    fromValue = null;
                }
                break;
        }
        return fromValue;
    },
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
const notEqual = (value, old) => {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual,
};
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */
const finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 * @noInheritDoc
 */
class ReactiveElement
// In the Node build, this `extends` clause will be substituted with
// `(globalThis.HTMLElement ?? HTMLElement)`.
//
// This way, we will first prefer any global `HTMLElement` polyfill that the
// user has assigned, and then fall back to the `HTMLElement` shim which has
// been imported (see note at the top of this file about how this import is
// generated by Rollup). Note that the `HTMLElement` variable has been
// shadowed by this import, so it no longer refers to the global.
 extends HTMLElement {
    constructor() {
        super();
        this.__instanceProperties = new Map();
        /**
         * True if there is a pending update as a result of calling `requestUpdate()`.
         * Should only be read.
         * @category updates
         */
        this.isUpdatePending = false;
        /**
         * Is set to `true` after the first update. The element code cannot assume
         * that `renderRoot` exists before the element `hasUpdated`.
         * @category updates
         */
        this.hasUpdated = false;
        /**
         * Name of currently reflecting property
         */
        this.__reflectingProperty = null;
        this._initialize();
    }
    /**
     * Adds an initializer function to the class that is called during instance
     * construction.
     *
     * This is useful for code that runs against a `ReactiveElement`
     * subclass, such as a decorator, that needs to do work for each
     * instance, such as setting up a `ReactiveController`.
     *
     * ```ts
     * const myDecorator = (target: typeof ReactiveElement, key: string) => {
     *   target.addInitializer((instance: ReactiveElement) => {
     *     // This is run during construction of the element
     *     new MyController(instance);
     *   });
     * }
     * ```
     *
     * Decorating a field will then cause each instance to run an initializer
     * that adds a controller:
     *
     * ```ts
     * class MyElement extends LitElement {
     *   @myDecorator foo;
     * }
     * ```
     *
     * Initializers are stored per-constructor. Adding an initializer to a
     * subclass does not add it to a superclass. Since initializers are run in
     * constructors, initializers will run in order of the class hierarchy,
     * starting with superclasses and progressing to the instance's class.
     *
     * @nocollapse
     */
    static addInitializer(initializer) {
        var _a;
        this.finalize();
        ((_a = this._initializers) !== null && _a !== void 0 ? _a : (this._initializers = [])).push(initializer);
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     * @category attributes
     */
    static get observedAttributes() {
        // note: piggy backing on this to ensure we're finalized.
        this.finalize();
        const attributes = [];
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.elementProperties.forEach((v, p) => {
            const attr = this.__attributeNameForProperty(p, v);
            if (attr !== undefined) {
                this.__attributeToPropertyMap.set(attr, p);
                attributes.push(attr);
            }
        });
        return attributes;
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a {@linkcode PropertyDeclaration} for the property with the
     * given options. The property setter calls the property's `hasChanged`
     * property option or uses a strict identity check to determine whether or not
     * to request an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * ```ts
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     * ```
     *
     * @nocollapse
     * @category properties
     */
    static createProperty(name, options = defaultPropertyDeclaration) {
        var _a;
        // if this is a state property, force the attribute to false.
        if (options.state) {
            // Cast as any since this is readonly.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            options.attribute = false;
        }
        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure finalization has been kicked off.
        this.finalize();
        this.elementProperties.set(name, options);
        // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it
        if (!options.noAccessor && !this.prototype.hasOwnProperty(name)) {
            const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
            const descriptor = this.getPropertyDescriptor(name, key, options);
            if (descriptor !== undefined) {
                Object.defineProperty(this.prototype, name, descriptor);
                if (DEV_MODE) {
                    // If this class doesn't have its own set, create one and initialize
                    // with the values in the set from the nearest ancestor class, if any.
                    if (!this.hasOwnProperty('__reactivePropertyKeys')) {
                        this.__reactivePropertyKeys = new Set((_a = this.__reactivePropertyKeys) !== null && _a !== void 0 ? _a : []);
                    }
                    this.__reactivePropertyKeys.add(name);
                }
            }
        }
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     * ```ts
     * class MyElement extends LitElement {
     *   static getPropertyDescriptor(name, key, options) {
     *     const defaultDescriptor =
     *         super.getPropertyDescriptor(name, key, options);
     *     const setter = defaultDescriptor.set;
     *     return {
     *       get: defaultDescriptor.get,
     *       set(value) {
     *         setter.call(this, value);
     *         // custom action.
     *       },
     *       configurable: true,
     *       enumerable: true
     *     }
     *   }
     * }
     * ```
     *
     * @nocollapse
     * @category properties
     */
    static getPropertyDescriptor(name, key, options) {
        return {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            get() {
                return this[key];
            },
            set(value) {
                const oldValue = this[name];
                this[key] = value;
                this.requestUpdate(name, oldValue, options);
            },
            configurable: true,
            enumerable: true,
        };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a `PropertyDeclaration` via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override
     * {@linkcode createProperty}.
     *
     * @nocollapse
     * @final
     * @category properties
     */
    static getPropertyOptions(name) {
        return this.elementProperties.get(name) || defaultPropertyDeclaration;
    }
    /**
     * Creates property accessors for registered properties, sets up element
     * styling, and ensures any superclasses are also finalized. Returns true if
     * the element was finalized.
     * @nocollapse
     */
    static finalize() {
        if (this.hasOwnProperty(finalized)) {
            return false;
        }
        this[finalized] = true;
        // finalize any superclasses
        const superCtor = Object.getPrototypeOf(this);
        superCtor.finalize();
        // Create own set of initializers for this class if any exist on the
        // superclass and copy them down. Note, for a small perf boost, avoid
        // creating initializers unless needed.
        if (superCtor._initializers !== undefined) {
            this._initializers = [...superCtor._initializers];
        }
        this.elementProperties = new Map(superCtor.elementProperties);
        // initialize Map populated in observedAttributes
        this.__attributeToPropertyMap = new Map();
        // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.
        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
            const props = this.properties;
            // support symbols in properties (IE11 does not support this)
            const propKeys = [
                ...Object.getOwnPropertyNames(props),
                ...Object.getOwnPropertySymbols(props),
            ];
            // This for/of is ok because propKeys is an array
            for (const p of propKeys) {
                // note, use of `any` is due to TypeScript lack of support for symbol in
                // index types
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this.createProperty(p, props[p]);
            }
        }
        this.elementStyles = this.finalizeStyles(this.styles);
        // DEV mode warnings
        if (DEV_MODE) {
            const warnRemovedOrRenamed = (name, renamed = false) => {
                if (this.prototype.hasOwnProperty(name)) {
                    issueWarning(renamed ? 'renamed-api' : 'removed-api', `\`${name}\` is implemented on class ${this.name}. It ` +
                        `has been ${renamed ? 'renamed' : 'removed'} ` +
                        `in this version of LitElement.`);
                }
            };
            warnRemovedOrRenamed('initialize');
            warnRemovedOrRenamed('requestUpdateInternal');
            warnRemovedOrRenamed('_getUpdateComplete', true);
        }
        return true;
    }
    /**
     * Takes the styles the user supplied via the `static styles` property and
     * returns the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * Styles are deduplicated preserving the _last_ instance in the list. This
     * is a performance optimization to avoid duplicated styles that can occur
     * especially when composing via subclassing. The last item is kept to try
     * to preserve the cascade order with the assumption that it's most important
     * that last added styles override previous styles.
     *
     * @nocollapse
     * @category styles
     */
    static finalizeStyles(styles) {
        const elementStyles = [];
        if (Array.isArray(styles)) {
            // Dedupe the flattened array in reverse order to preserve the last items.
            // Casting to Array<unknown> works around TS error that
            // appears to come from trying to flatten a type CSSResultArray.
            const set = new Set(styles.flat(Infinity).reverse());
            // Then preserve original order by adding the set items in reverse order.
            for (const s of set) {
                elementStyles.unshift((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(s));
            }
        }
        else if (styles !== undefined) {
            elementStyles.push((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(styles));
        }
        return elementStyles;
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */
    static __attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false
            ? undefined
            : typeof attribute === 'string'
                ? attribute
                : typeof name === 'string'
                    ? name.toLowerCase()
                    : undefined;
    }
    /**
     * Internal only override point for customizing work done when elements
     * are constructed.
     *
     * @internal
     */
    _initialize() {
        var _a;
        this.__updatePromise = new Promise((res) => (this.enableUpdating = res));
        this._$changedProperties = new Map();
        this.__saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this.requestUpdate();
        (_a = this.constructor._initializers) === null || _a === void 0 ? void 0 : _a.forEach((i) => i(this));
    }
    /**
     * Registers a `ReactiveController` to participate in the element's reactive
     * update cycle. The element automatically calls into any registered
     * controllers during its lifecycle callbacks.
     *
     * If the element is connected when `addController()` is called, the
     * controller's `hostConnected()` callback will be immediately called.
     * @category controllers
     */
    addController(controller) {
        var _a, _b;
        ((_a = this.__controllers) !== null && _a !== void 0 ? _a : (this.__controllers = [])).push(controller);
        // If a controller is added after the element has been connected,
        // call hostConnected. Note, re-using existence of `renderRoot` here
        // (which is set in connectedCallback) to avoid the need to track a
        // first connected state.
        if (this.renderRoot !== undefined && this.isConnected) {
            (_b = controller.hostConnected) === null || _b === void 0 ? void 0 : _b.call(controller);
        }
    }
    /**
     * Removes a `ReactiveController` from the element.
     * @category controllers
     */
    removeController(controller) {
        var _a;
        // Note, if the indexOf is -1, the >>> will flip the sign which makes the
        // splice do nothing.
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.splice(this.__controllers.indexOf(controller) >>> 0, 1);
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */
    __saveInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor.elementProperties.forEach((_v, p) => {
            if (this.hasOwnProperty(p)) {
                this.__instanceProperties.set(p, this[p]);
                delete this[p];
            }
        });
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     *
     * @return Returns a node into which to render.
     * @category rendering
     */
    createRenderRoot() {
        var _a;
        const renderRoot = (_a = this.shadowRoot) !== null && _a !== void 0 ? _a : this.attachShadow(this.constructor.shadowRootOptions);
        (0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles)(renderRoot, this.constructor.elementStyles);
        return renderRoot;
    }
    /**
     * On first connection, creates the element's renderRoot, sets up
     * element styling, and enables updating.
     * @category lifecycle
     */
    connectedCallback() {
        var _a;
        // create renderRoot before first update.
        if (this.renderRoot === undefined) {
            this.renderRoot = this.createRenderRoot();
        }
        this.enableUpdating(true);
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostConnected) === null || _a === void 0 ? void 0 : _a.call(c); });
    }
    /**
     * Note, this method should be considered final and not overridden. It is
     * overridden on the element instance with a function that triggers the first
     * update.
     * @category updates
     */
    enableUpdating(_requestedUpdate) { }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     * @category lifecycle
     */
    disconnectedCallback() {
        var _a;
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostDisconnected) === null || _a === void 0 ? void 0 : _a.call(c); });
    }
    /**
     * Synchronizes property values when attributes change.
     *
     * Specifically, when an attribute is set, the corresponding property is set.
     * You should rarely need to implement this callback. If this method is
     * overridden, `super.attributeChangedCallback(name, _old, value)` must be
     * called.
     *
     * See [using the lifecycle callbacks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)
     * on MDN for more information about the `attributeChangedCallback`.
     * @category attributes
     */
    attributeChangedCallback(name, _old, value) {
        this._$attributeToProperty(name, value);
    }
    __propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
        var _a;
        const attr = this.constructor.__attributeNameForProperty(name, options);
        if (attr !== undefined && options.reflect === true) {
            const converter = ((_a = options.converter) === null || _a === void 0 ? void 0 : _a.toAttribute) !==
                undefined
                ? options.converter
                : defaultConverter;
            const attrValue = converter.toAttribute(value, options.type);
            if (DEV_MODE &&
                this.constructor.enabledWarnings.indexOf('migration') >= 0 &&
                attrValue === undefined) {
                issueWarning('undefined-attribute-value', `The attribute value for the ${name} property is ` +
                    `undefined on element ${this.localName}. The attribute will be ` +
                    `removed, but in the previous version of \`ReactiveElement\`, ` +
                    `the attribute would not have changed.`);
            }
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this.__reflectingProperty = name;
            if (attrValue == null) {
                this.removeAttribute(attr);
            }
            else {
                this.setAttribute(attr, attrValue);
            }
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /** @internal */
    _$attributeToProperty(name, value) {
        var _a;
        const ctor = this.constructor;
        // Note, hint this as an `AttributeMap` so closure clearly understands
        // the type; it has issues with tracking types through statics
        const propName = ctor.__attributeToPropertyMap.get(name);
        // Use tracking info to avoid reflecting a property value to an attribute
        // if it was just set because the attribute changed.
        if (propName !== undefined && this.__reflectingProperty !== propName) {
            const options = ctor.getPropertyOptions(propName);
            const converter = typeof options.converter === 'function'
                ? { fromAttribute: options.converter }
                : ((_a = options.converter) === null || _a === void 0 ? void 0 : _a.fromAttribute) !== undefined
                    ? options.converter
                    : defaultConverter;
            // mark state reflecting
            this.__reflectingProperty = propName;
            this[propName] = converter.fromAttribute(value, options.type
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            );
            // mark state not reflecting
            this.__reflectingProperty = null;
        }
    }
    /**
     * Requests an update which is processed asynchronously. This should be called
     * when an element should update based on some state not triggered by setting
     * a reactive property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored.
     *
     * @param name name of requesting property
     * @param oldValue old value of requesting property
     * @param options property options to use instead of the previously
     *     configured options
     * @category updates
     */
    requestUpdate(name, oldValue, options) {
        let shouldRequestUpdate = true;
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            options =
                options ||
                    this.constructor.getPropertyOptions(name);
            const hasChanged = options.hasChanged || notEqual;
            if (hasChanged(this[name], oldValue)) {
                if (!this._$changedProperties.has(name)) {
                    this._$changedProperties.set(name, oldValue);
                }
                // Add to reflecting properties set.
                // Note, it's important that every change has a chance to add the
                // property to `_reflectingProperties`. This ensures setting
                // attribute + property reflects correctly.
                if (options.reflect === true && this.__reflectingProperty !== name) {
                    if (this.__reflectingProperties === undefined) {
                        this.__reflectingProperties = new Map();
                    }
                    this.__reflectingProperties.set(name, options);
                }
            }
            else {
                // Abort the request if the property should not be considered changed.
                shouldRequestUpdate = false;
            }
        }
        if (!this.isUpdatePending && shouldRequestUpdate) {
            this.__updatePromise = this.__enqueueUpdate();
        }
        // Note, since this no longer returns a promise, in dev mode we return a
        // thenable which warns if it's called.
        return DEV_MODE
            ? requestUpdateThenable(this.localName)
            : undefined;
    }
    /**
     * Sets up the element to asynchronously update.
     */
    async __enqueueUpdate() {
        this.isUpdatePending = true;
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await this.__updatePromise;
        }
        catch (e) {
            // Refire any previous errors async so they do not disrupt the update
            // cycle. Errors are refired so developers have a chance to observe
            // them, and this can be done by implementing
            // `window.onunhandledrejection`.
            Promise.reject(e);
        }
        const result = this.scheduleUpdate();
        // If `scheduleUpdate` returns a Promise, we await it. This is done to
        // enable coordinating updates with a scheduler. Note, the result is
        // checked to avoid delaying an additional microtask unless we need to.
        if (result != null) {
            await result;
        }
        return !this.isUpdatePending;
    }
    /**
     * Schedules an element update. You can override this method to change the
     * timing of updates by returning a Promise. The update will await the
     * returned Promise, and you should resolve the Promise to allow the update
     * to proceed. If this method is overridden, `super.scheduleUpdate()`
     * must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```ts
     * override protected async scheduleUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.scheduleUpdate();
     * }
     * ```
     * @category updates
     */
    scheduleUpdate() {
        return this.performUpdate();
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * Call `performUpdate()` to immediately process a pending update. This should
     * generally not be needed, but it can be done in rare cases when you need to
     * update synchronously.
     *
     * Note: To ensure `performUpdate()` synchronously completes a pending update,
     * it should not be overridden. In LitElement 2.x it was suggested to override
     * `performUpdate()` to also customizing update scheduling. Instead, you should now
     * override `scheduleUpdate()`. For backwards compatibility with LitElement 2.x,
     * scheduling updates via `performUpdate()` continues to work, but will make
     * also calling `performUpdate()` to synchronously process updates difficult.
     *
     * @category updates
     */
    performUpdate() {
        var _a, _b;
        // Abort any update if one is not pending when this is called.
        // This can happen if `performUpdate` is called early to "flush"
        // the update.
        if (!this.isUpdatePending) {
            return;
        }
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({ kind: 'update' });
        // create renderRoot before first update.
        if (!this.hasUpdated) {
            // Produce warning if any class properties are shadowed by class fields
            if (DEV_MODE) {
                const shadowedProperties = [];
                (_a = this.constructor.__reactivePropertyKeys) === null || _a === void 0 ? void 0 : _a.forEach((p) => {
                    var _a;
                    if (this.hasOwnProperty(p) && !((_a = this.__instanceProperties) === null || _a === void 0 ? void 0 : _a.has(p))) {
                        shadowedProperties.push(p);
                    }
                });
                if (shadowedProperties.length) {
                    throw new Error(`The following properties on element ${this.localName} will not ` +
                        `trigger updates as expected because they are set using class ` +
                        `fields: ${shadowedProperties.join(', ')}. ` +
                        `Native class fields and some compiled output will overwrite ` +
                        `accessors used for detecting changes. See ` +
                        `https://lit.dev/msg/class-field-shadowing ` +
                        `for more information.`);
                }
            }
        }
        // Mixin instance properties once, if they exist.
        if (this.__instanceProperties) {
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.__instanceProperties.forEach((v, p) => (this[p] = v));
            this.__instanceProperties = undefined;
        }
        let shouldUpdate = false;
        const changedProperties = this._$changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) {
                this.willUpdate(changedProperties);
                (_b = this.__controllers) === null || _b === void 0 ? void 0 : _b.forEach((c) => { var _a; return (_a = c.hostUpdate) === null || _a === void 0 ? void 0 : _a.call(c); });
                this.update(changedProperties);
            }
            else {
                this.__markUpdated();
            }
        }
        catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            // Ensure element can accept additional updates after an exception.
            this.__markUpdated();
            throw e;
        }
        // The update is no longer considered pending and further updates are now allowed.
        if (shouldUpdate) {
            this._$didUpdate(changedProperties);
        }
    }
    /**
     * Invoked before `update()` to compute values needed during the update.
     *
     * Implement `willUpdate` to compute property values that depend on other
     * properties and are used in the rest of the update process.
     *
     * ```ts
     * willUpdate(changedProperties) {
     *   // only need to check changed properties for an expensive computation.
     *   if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
     *     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
     *   }
     * }
     *
     * render() {
     *   return html`SHA: ${this.sha}`;
     * }
     * ```
     *
     * @category updates
     */
    willUpdate(_changedProperties) { }
    // Note, this is an override point for polyfill-support.
    // @internal
    _$didUpdate(changedProperties) {
        var _a;
        (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostUpdated) === null || _a === void 0 ? void 0 : _a.call(c); });
        if (!this.hasUpdated) {
            this.hasUpdated = true;
            this.firstUpdated(changedProperties);
        }
        this.updated(changedProperties);
        if (DEV_MODE &&
            this.isUpdatePending &&
            this.constructor.enabledWarnings.indexOf('change-in-update') >= 0) {
            issueWarning('change-in-update', `Element ${this.localName} scheduled an update ` +
                `(generally because a property was set) ` +
                `after an update completed, causing a new update to be scheduled. ` +
                `This is inefficient and should be avoided unless the next update ` +
                `can only be scheduled as a side effect of the previous update.`);
        }
    }
    __markUpdated() {
        this._$changedProperties = new Map();
        this.isUpdatePending = false;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super.getUpdateComplete()`, then any subsequent state.
     *
     * @return A promise of a boolean that resolves to true if the update completed
     *     without triggering another update.
     * @category updates
     */
    get updateComplete() {
        return this.getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     * ```ts
     * class MyElement extends LitElement {
     *   override async getUpdateComplete() {
     *     const result = await super.getUpdateComplete();
     *     await this._myChild.updateComplete;
     *     return result;
     *   }
     * }
     * ```
     *
     * @return A promise of a boolean that resolves to true if the update completed
     *     without triggering another update.
     * @category updates
     */
    getUpdateComplete() {
        return this.__updatePromise;
    }
    /**
     * Controls whether or not `update()` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    update(_changedProperties) {
        if (this.__reflectingProperties !== undefined) {
            // Use forEach so this works even if for/of loops are compiled to for
            // loops expecting arrays
            this.__reflectingProperties.forEach((v, k) => this.__propertyToAttribute(k, this[k], v));
            this.__reflectingProperties = undefined;
        }
        this.__markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    updated(_changedProperties) { }
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * ```ts
     * firstUpdated() {
     *   this.renderRoot.getElementById('my-text-area').focus();
     * }
     * ```
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     * @category updates
     */
    firstUpdated(_changedProperties) { }
}
_e = finalized;
/**
 * Marks class as having finished creating properties.
 */
ReactiveElement[_e] = true;
/**
 * Memoized list of all element properties, including any superclass properties.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category properties
 */
ReactiveElement.elementProperties = new Map();
/**
 * Memoized list of all element styles.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category styles
 */
ReactiveElement.elementStyles = [];
/**
 * Options used when calling `attachShadow`. Set this property to customize
 * the options for the shadowRoot; for example, to create a closed
 * shadowRoot: `{mode: 'closed'}`.
 *
 * Note, these options are used in `createRenderRoot`. If this method
 * is customized, options should be respected if possible.
 * @nocollapse
 * @category rendering
 */
ReactiveElement.shadowRootOptions = { mode: 'open' };
// Apply polyfills if available
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport({ ReactiveElement });
// Dev mode warnings...
if (DEV_MODE) {
    // Default warning set.
    ReactiveElement.enabledWarnings = ['change-in-update'];
    const ensureOwnWarnings = function (ctor) {
        if (!ctor.hasOwnProperty(JSCompiler_renameProperty('enabledWarnings', ctor))) {
            ctor.enabledWarnings = ctor.enabledWarnings.slice();
        }
    };
    ReactiveElement.enableWarning = function (warning) {
        ensureOwnWarnings(this);
        if (this.enabledWarnings.indexOf(warning) < 0) {
            this.enabledWarnings.push(warning);
        }
    };
    ReactiveElement.disableWarning = function (warning) {
        ensureOwnWarnings(this);
        const i = this.enabledWarnings.indexOf(warning);
        if (i >= 0) {
            this.enabledWarnings.splice(i, 1);
        }
    };
}
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for ReactiveElement usage.
((_d = global.reactiveElementVersions) !== null && _d !== void 0 ? _d : (global.reactiveElementVersions = [])).push('1.6.1');
if (DEV_MODE && global.reactiveElementVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` +
        `is not recommended.`);
}
//# sourceMappingURL=reactive-element.js.map

/***/ }),

/***/ "./node_modules/lit-element/development/lit-element.js":
/*!*************************************************************!*\
  !*** ./node_modules/lit-element/development/lit-element.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.CSSResult),
/* harmony export */   "LitElement": () => (/* binding */ LitElement),
/* harmony export */   "ReactiveElement": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement),
/* harmony export */   "UpdatingElement": () => (/* binding */ UpdatingElement),
/* harmony export */   "_$LE": () => (/* binding */ _$LE),
/* harmony export */   "_$LH": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__._$LH),
/* harmony export */   "adoptStyles": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.adoptStyles),
/* harmony export */   "css": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.css),
/* harmony export */   "defaultConverter": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.defaultConverter),
/* harmony export */   "getCompatibleStyle": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle),
/* harmony export */   "html": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.html),
/* harmony export */   "noChange": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange),
/* harmony export */   "notEqual": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.notEqual),
/* harmony export */   "nothing": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.nothing),
/* harmony export */   "render": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   "supportsAdoptingStyleSheets": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets),
/* harmony export */   "svg": () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.svg),
/* harmony export */   "unsafeCSS": () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c;
/**
 * The main LitElement module, which defines the {@linkcode LitElement} base
 * class and related APIs.
 *
 *  LitElement components can define a template and a set of observed
 * properties. Changing an observed property triggers a re-render of the
 * element.
 *
 *  Import {@linkcode LitElement} and {@linkcode html} from this module to
 * create a component:
 *
 *  ```js
 * import {LitElement, html} from 'lit-element';
 *
 * class MyElement extends LitElement {
 *
 *   // Declare observed properties
 *   static get properties() {
 *     return {
 *       adjective: {}
 *     }
 *   }
 *
 *   constructor() {
 *     this.adjective = 'awesome';
 *   }
 *
 *   // Define the element's template
 *   render() {
 *     return html`<p>your ${adjective} template here</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * `LitElement` extends {@linkcode ReactiveElement} and adds lit-html
 * templating. The `ReactiveElement` class is provided for users that want to
 * build their own custom element base classes that don't use lit-html.
 *
 * @packageDocumentation
 */




// For backwards compatibility export ReactiveElement as UpdatingElement. Note,
// IE transpilation requires exporting like this.
const UpdatingElement = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement;
const DEV_MODE = true;
let issueWarning;
if (DEV_MODE) {
    // Ensure warnings are issued only 1x, even if multiple versions of Lit
    // are loaded.
    const issuedWarnings = ((_a = globalThis.litIssuedWarnings) !== null && _a !== void 0 ? _a : (globalThis.litIssuedWarnings = new Set()));
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += ` See https://lit.dev/msg/${code} for more information.`;
        if (!issuedWarnings.has(warning)) {
            console.warn(warning);
            issuedWarnings.add(warning);
        }
    };
}
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the {@linkcode LitElement.properties properties} property or the
 * {@linkcode property} decorator.
 */
class LitElement extends _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement {
    constructor() {
        super(...arguments);
        /**
         * @category rendering
         */
        this.renderOptions = { host: this };
        this.__childPart = undefined;
    }
    /**
     * @category rendering
     */
    createRenderRoot() {
        var _a;
        var _b;
        const renderRoot = super.createRenderRoot();
        // When adoptedStyleSheets are shimmed, they are inserted into the
        // shadowRoot by createRenderRoot. Adjust the renderBefore node so that
        // any styles in Lit content render before adoptedStyleSheets. This is
        // important so that adoptedStyleSheets have precedence over styles in
        // the shadowRoot.
        (_a = (_b = this.renderOptions).renderBefore) !== null && _a !== void 0 ? _a : (_b.renderBefore = renderRoot.firstChild);
        return renderRoot;
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param changedProperties Map of changed properties with old values
     * @category updates
     */
    update(changedProperties) {
        // Setting properties in `render` should not trigger an update. Since
        // updates are allowed after super.update, it's important to call `render`
        // before that.
        const value = this.render();
        if (!this.hasUpdated) {
            this.renderOptions.isConnected = this.isConnected;
        }
        super.update(changedProperties);
        this.__childPart = (0,lit_html__WEBPACK_IMPORTED_MODULE_1__.render)(value, this.renderRoot, this.renderOptions);
    }
    /**
     * Invoked when the component is added to the document's DOM.
     *
     * In `connectedCallback()` you should setup tasks that should only occur when
     * the element is connected to the document. The most common of these is
     * adding event listeners to nodes external to the element, like a keydown
     * event handler added to the window.
     *
     * ```ts
     * connectedCallback() {
     *   super.connectedCallback();
     *   addEventListener('keydown', this._handleKeydown);
     * }
     * ```
     *
     * Typically, anything done in `connectedCallback()` should be undone when the
     * element is disconnected, in `disconnectedCallback()`.
     *
     * @category lifecycle
     */
    connectedCallback() {
        var _a;
        super.connectedCallback();
        (_a = this.__childPart) === null || _a === void 0 ? void 0 : _a.setConnected(true);
    }
    /**
     * Invoked when the component is removed from the document's DOM.
     *
     * This callback is the main signal to the element that it may no longer be
     * used. `disconnectedCallback()` should ensure that nothing is holding a
     * reference to the element (such as event listeners added to nodes external
     * to the element), so that it is free to be garbage collected.
     *
     * ```ts
     * disconnectedCallback() {
     *   super.disconnectedCallback();
     *   window.removeEventListener('keydown', this._handleKeydown);
     * }
     * ```
     *
     * An element may be re-connected after being disconnected.
     *
     * @category lifecycle
     */
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        (_a = this.__childPart) === null || _a === void 0 ? void 0 : _a.setConnected(false);
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `ChildPart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     * @category rendering
     */
    render() {
        return lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange;
    }
}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See @lit/reactive-element for more information.
 */
LitElement['finalized'] = true;
// This property needs to remain unminified.
LitElement['_$litElement$'] = true;
// Install hydration if available
(_b = globalThis.litElementHydrateSupport) === null || _b === void 0 ? void 0 : _b.call(globalThis, { LitElement });
// Apply polyfills if available
const polyfillSupport = DEV_MODE
    ? globalThis.litElementPolyfillSupportDevMode
    : globalThis.litElementPolyfillSupport;
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport({ LitElement });
// DEV mode warnings
if (DEV_MODE) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    // Note, for compatibility with closure compilation, this access
    // needs to be as a string property index.
    LitElement['finalize'] = function () {
        const finalized = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement.finalize.call(this);
        if (!finalized) {
            return false;
        }
        const warnRemovedOrRenamed = (obj, name, renamed = false) => {
            if (obj.hasOwnProperty(name)) {
                const ctorName = (typeof obj === 'function' ? obj : obj.constructor)
                    .name;
                issueWarning(renamed ? 'renamed-api' : 'removed-api', `\`${name}\` is implemented on class ${ctorName}. It ` +
                    `has been ${renamed ? 'renamed' : 'removed'} ` +
                    `in this version of LitElement.`);
            }
        };
        warnRemovedOrRenamed(this, 'render');
        warnRemovedOrRenamed(this, 'getStyles', true);
        warnRemovedOrRenamed(this.prototype, 'adoptStyles');
        return true;
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */
}
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _$LE object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-html, since this module re-exports all of lit-html.
 *
 * @private
 */
const _$LE = {
    _$attributeToProperty: (el, name, value) => {
        // eslint-disable-next-line
        el._$attributeToProperty(name, value);
    },
    // eslint-disable-next-line
    _$changedProperties: (el) => el._$changedProperties,
};
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
((_c = globalThis.litElementVersions) !== null && _c !== void 0 ? _c : (globalThis.litElementVersions = [])).push('3.2.2');
if (DEV_MODE && globalThis.litElementVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` +
        `is not recommended.`);
}
//# sourceMappingURL=lit-element.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/is-server.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/development/is-server.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isServer": () => (/* binding */ isServer)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @fileoverview
 *
 * This file exports a boolean const whose value will depend on what environment
 * the module is being imported from.
 */
const NODE_MODE = false;
/**
 * A boolean that will be `true` in server environments like Node, and `false`
 * in browser environments. Note that your server environment or toolchain must
 * support the `"node"` export condition for this to be `true`.
 *
 * This can be used when authoring components to change behavior based on
 * whether or not the component is executing in an SSR context.
 */
const isServer = NODE_MODE;
//# sourceMappingURL=is-server.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/lit-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/development/lit-html.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_$LH": () => (/* binding */ _$LH),
/* harmony export */   "html": () => (/* binding */ html),
/* harmony export */   "noChange": () => (/* binding */ noChange),
/* harmony export */   "nothing": () => (/* binding */ nothing),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "svg": () => (/* binding */ svg)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b, _c, _d;
const DEV_MODE = true;
const ENABLE_EXTRA_SECURITY_HOOKS = true;
const ENABLE_SHADYDOM_NOPATCH = true;
const NODE_MODE = false;
// Use window for browser builds because IE11 doesn't have globalThis.
const global = NODE_MODE ? globalThis : window;
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
const debugLogEvent = DEV_MODE
    ? (event) => {
        const shouldEmit = global
            .emitLitDebugLogEvents;
        if (!shouldEmit) {
            return;
        }
        global.dispatchEvent(new CustomEvent('lit-debug', {
            detail: event,
        }));
    }
    : undefined;
// Used for connecting beginRender and endRender events when there are nested
// renders when errors are thrown preventing an endRender event from being
// called.
let debugLogRenderId = 0;
let issueWarning;
if (DEV_MODE) {
    (_a = global.litIssuedWarnings) !== null && _a !== void 0 ? _a : (global.litIssuedWarnings = new Set());
    // Issue a warning, if we haven't already.
    issueWarning = (code, warning) => {
        warning += code
            ? ` See https://lit.dev/msg/${code} for more information.`
            : '';
        if (!global.litIssuedWarnings.has(warning)) {
            console.warn(warning);
            global.litIssuedWarnings.add(warning);
        }
    };
    issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
}
const wrap = ENABLE_SHADYDOM_NOPATCH &&
    ((_b = global.ShadyDOM) === null || _b === void 0 ? void 0 : _b.inUse) &&
    ((_c = global.ShadyDOM) === null || _c === void 0 ? void 0 : _c.noPatch) === true
    ? global.ShadyDOM.wrap
    : (node) => node;
const trustedTypes = global.trustedTypes;
/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
const policy = trustedTypes
    ? trustedTypes.createPolicy('lit-html', {
        createHTML: (s) => s,
    })
    : undefined;
const identityFunction = (value) => value;
const noopSanitizer = (_node, _name, _type) => identityFunction;
/** Sets the global sanitizer factory. */
const setSanitizer = (newSanitizer) => {
    if (!ENABLE_EXTRA_SECURITY_HOOKS) {
        return;
    }
    if (sanitizerFactoryInternal !== noopSanitizer) {
        throw new Error(`Attempted to overwrite existing lit-html security policy.` +
            ` setSanitizeDOMValueFactory should be called at most once.`);
    }
    sanitizerFactoryInternal = newSanitizer;
};
/**
 * Only used in internal tests, not a part of the public API.
 */
const _testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
    sanitizerFactoryInternal = noopSanitizer;
};
const createSanitizer = (node, name, type) => {
    return sanitizerFactoryInternal(node, name, type);
};
// Added to an attribute name to mark the attribute as bound so we can find
// it easily.
const boundAttributeSuffix = '$lit$';
// This marker is used in many syntactic positions in HTML, so it must be
// a valid element name and attribute name. We don't support dynamic names (yet)
// but this at least ensures that the parse tree is closer to the template
// intention.
const marker = `lit$${String(Math.random()).slice(9)}$`;
// String used to tell if a comment is a marker comment
const markerMatch = '?' + marker;
// Text used to insert a comment marker node. We use processing instruction
// syntax because it's slightly smaller, but parses as a comment node.
const nodeMarker = `<${markerMatch}>`;
const d = NODE_MODE && global.document === undefined
    ? {
        createTreeWalker() {
            return {};
        },
    }
    : document;
// Creates a dynamic marker. We never have to search for these in the DOM.
const createMarker = (v = '') => d.createComment(v);
const isPrimitive = (value) => value === null || (typeof value != 'object' && typeof value != 'function');
const isArray = Array.isArray;
const isIterable = (value) => isArray(value) ||
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof (value === null || value === void 0 ? void 0 : value[Symbol.iterator]) === 'function';
const SPACE_CHAR = `[ \t\n\f\r]`;
const ATTR_VALUE_CHAR = `[^ \t\n\f\r"'\`<>=]`;
const NAME_CHAR = `[^\\s"'>=/]`;
// These regexes represent the five parsing states that we care about in the
// Template's HTML scanner. They match the *end* of the state they're named
// after.
// Depending on the match, we transition to a new state. If there's no match,
// we stay in the same state.
// Note that the regexes are stateful. We utilize lastIndex and sync it
// across the multiple regexes used. In addition to the five regexes below
// we also dynamically create a regex to find the matching end tags for raw
// text elements.
/**
 * End of text is: `<` followed by:
 *   (comment start) or (tag) or (dynamic tag binding)
 */
const textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
const COMMENT_START = 1;
const TAG_NAME = 2;
const DYNAMIC_TAG_NAME = 3;
const commentEndRegex = /-->/g;
/**
 * Comments not started with <!--, like </{, can be ended by a single `>`
 */
const comment2EndRegex = />/g;
/**
 * The tagEnd regex matches the end of the "inside an opening" tag syntax
 * position. It either matches a `>`, an attribute-like sequence, or the end
 * of the string after a space (attribute-name position ending).
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \t\n\f\r" are HTML space characters:
 * https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * So an attribute is:
 *  * The name: any character except a whitespace character, ("), ('), ">",
 *    "=", or "/". Note: this is different from the HTML spec which also excludes control characters.
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, 'g');
const ENTIRE_MATCH = 0;
const ATTRIBUTE_NAME = 1;
const SPACES_AND_EQUALS = 2;
const QUOTE_CHAR = 3;
const singleQuoteAttrEndRegex = /'/g;
const doubleQuoteAttrEndRegex = /"/g;
/**
 * Matches the raw text elements.
 *
 * Comments are not parsed within raw text elements, so we need to search their
 * text content for marker strings.
 */
const rawTextElement = /^(?:script|style|textarea|title)$/i;
/** TemplateResult types */
const HTML_RESULT = 1;
const SVG_RESULT = 2;
// TemplatePart types
// IMPORTANT: these must match the values in PartType
const ATTRIBUTE_PART = 1;
const CHILD_PART = 2;
const PROPERTY_PART = 3;
const BOOLEAN_ATTRIBUTE_PART = 4;
const EVENT_PART = 5;
const ELEMENT_PART = 6;
const COMMENT_PART = 7;
/**
 * Generates a template literal tag function that returns a TemplateResult with
 * the given result type.
 */
const tag = (type) => (strings, ...values) => {
    // Warn against templates octal escape sequences
    // We do this here rather than in render so that the warning is closer to the
    // template definition.
    if (DEV_MODE && strings.some((s) => s === undefined)) {
        console.warn('Some template strings are undefined.\n' +
            'This is probably caused by illegal octal escape sequences.');
    }
    return {
        // This property needs to remain unminified.
        ['_$litType$']: type,
        strings,
        values,
    };
};
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const header = (title: string) => html`<h1>${title}</h1>`;
 * ```
 *
 * The `html` tag returns a description of the DOM to render as a value. It is
 * lazy, meaning no work is done until the template is rendered. When rendering,
 * if a template comes from the same expression as a previously rendered result,
 * it's efficiently updated instead of replaced.
 */
const html = tag(HTML_RESULT);
/**
 * Interprets a template literal as an SVG fragment that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const rect = svg`<rect width="10" height="10"></rect>`;
 *
 * const myImage = html`
 *   <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
 *     ${rect}
 *   </svg>`;
 * ```
 *
 * The `svg` *tag function* should only be used for SVG fragments, or elements
 * that would be contained **inside** an `<svg>` HTML element. A common error is
 * placing an `<svg>` *element* in a template tagged with the `svg` tag
 * function. The `<svg>` element is an HTML element and should be used within a
 * template tagged with the {@linkcode html} tag function.
 *
 * In LitElement usage, it's invalid to return an SVG fragment from the
 * `render()` method, as the SVG fragment will be contained within the element's
 * shadow root and thus cannot be used within an `<svg>` HTML element.
 */
const svg = tag(SVG_RESULT);
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = Symbol.for('lit-noChange');
/**
 * A sentinel value that signals a ChildPart to fully clear its content.
 *
 * ```ts
 * const button = html`${
 *  user.isAdmin
 *    ? html`<button>DELETE</button>`
 *    : nothing
 * }`;
 * ```
 *
 * Prefer using `nothing` over other falsy values as it provides a consistent
 * behavior between various expression binding contexts.
 *
 * In child expressions, `undefined`, `null`, `''`, and `nothing` all behave the
 * same and render no nodes. In attribute expressions, `nothing` _removes_ the
 * attribute, while `undefined` and `null` will render an empty string. In
 * property expressions `nothing` becomes `undefined`.
 */
const nothing = Symbol.for('lit-nothing');
/**
 * The cache of prepared templates, keyed by the tagged TemplateStringsArray
 * and _not_ accounting for the specific template tag used. This means that
 * template tags cannot be dynamic - the must statically be one of html, svg,
 * or attr. This restriction simplifies the cache lookup, which is on the hot
 * path for rendering.
 */
const templateCache = new WeakMap();
const walker = d.createTreeWalker(d, 129 /* NodeFilter.SHOW_{ELEMENT|COMMENT} */, null, false);
let sanitizerFactoryInternal = noopSanitizer;
/**
 * Returns an HTML string for the given TemplateStringsArray and result type
 * (HTML or SVG), along with the case-sensitive bound attribute names in
 * template order. The HTML contains comment markers denoting the `ChildPart`s
 * and suffixes on bound attributes denoting the `AttributeParts`.
 *
 * @param strings template strings array
 * @param type HTML or SVG
 * @return Array containing `[html, attrNames]` (array returned for terseness,
 *     to avoid object fields since this code is shared with non-minified SSR
 *     code)
 */
const getTemplateHtml = (strings, type) => {
    // Insert makers into the template HTML to represent the position of
    // bindings. The following code scans the template strings to determine the
    // syntactic position of the bindings. They can be in text position, where
    // we insert an HTML comment, attribute value position, where we insert a
    // sentinel string and re-write the attribute name, or inside a tag where
    // we insert the sentinel string.
    const l = strings.length - 1;
    // Stores the case-sensitive bound attribute names in the order of their
    // parts. ElementParts are also reflected in this array as undefined
    // rather than a string, to disambiguate from attribute bindings.
    const attrNames = [];
    let html = type === SVG_RESULT ? '<svg>' : '';
    // When we're inside a raw text tag (not it's text content), the regex
    // will still be tagRegex so we can find attributes, but will switch to
    // this regex when the tag ends.
    let rawTextEndRegex;
    // The current parsing state, represented as a reference to one of the
    // regexes
    let regex = textEndRegex;
    for (let i = 0; i < l; i++) {
        const s = strings[i];
        // The index of the end of the last attribute name. When this is
        // positive at end of a string, it means we're in an attribute value
        // position and need to rewrite the attribute name.
        // We also use a special value of -2 to indicate that we encountered
        // the end of a string in attribute name position.
        let attrNameEndIndex = -1;
        let attrName;
        let lastIndex = 0;
        let match;
        // The conditions in this loop handle the current parse state, and the
        // assignments to the `regex` variable are the state transitions.
        while (lastIndex < s.length) {
            // Make sure we start searching from where we previously left off
            regex.lastIndex = lastIndex;
            match = regex.exec(s);
            if (match === null) {
                break;
            }
            lastIndex = regex.lastIndex;
            if (regex === textEndRegex) {
                if (match[COMMENT_START] === '!--') {
                    regex = commentEndRegex;
                }
                else if (match[COMMENT_START] !== undefined) {
                    // We started a weird comment, like </{
                    regex = comment2EndRegex;
                }
                else if (match[TAG_NAME] !== undefined) {
                    if (rawTextElement.test(match[TAG_NAME])) {
                        // Record if we encounter a raw-text element. We'll switch to
                        // this regex at the end of the tag.
                        rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, 'g');
                    }
                    regex = tagEndRegex;
                }
                else if (match[DYNAMIC_TAG_NAME] !== undefined) {
                    if (DEV_MODE) {
                        throw new Error('Bindings in tag names are not supported. Please use static templates instead. ' +
                            'See https://lit.dev/docs/templates/expressions/#static-expressions');
                    }
                    regex = tagEndRegex;
                }
            }
            else if (regex === tagEndRegex) {
                if (match[ENTIRE_MATCH] === '>') {
                    // End of a tag. If we had started a raw-text element, use that
                    // regex
                    regex = rawTextEndRegex !== null && rawTextEndRegex !== void 0 ? rawTextEndRegex : textEndRegex;
                    // We may be ending an unquoted attribute value, so make sure we
                    // clear any pending attrNameEndIndex
                    attrNameEndIndex = -1;
                }
                else if (match[ATTRIBUTE_NAME] === undefined) {
                    // Attribute name position
                    attrNameEndIndex = -2;
                }
                else {
                    attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
                    attrName = match[ATTRIBUTE_NAME];
                    regex =
                        match[QUOTE_CHAR] === undefined
                            ? tagEndRegex
                            : match[QUOTE_CHAR] === '"'
                                ? doubleQuoteAttrEndRegex
                                : singleQuoteAttrEndRegex;
                }
            }
            else if (regex === doubleQuoteAttrEndRegex ||
                regex === singleQuoteAttrEndRegex) {
                regex = tagEndRegex;
            }
            else if (regex === commentEndRegex || regex === comment2EndRegex) {
                regex = textEndRegex;
            }
            else {
                // Not one of the five state regexes, so it must be the dynamically
                // created raw text regex and we're at the close of that element.
                regex = tagEndRegex;
                rawTextEndRegex = undefined;
            }
        }
        if (DEV_MODE) {
            // If we have a attrNameEndIndex, which indicates that we should
            // rewrite the attribute name, assert that we're in a valid attribute
            // position - either in a tag, or a quoted attribute value.
            console.assert(attrNameEndIndex === -1 ||
                regex === tagEndRegex ||
                regex === singleQuoteAttrEndRegex ||
                regex === doubleQuoteAttrEndRegex, 'unexpected parse state B');
        }
        // We have four cases:
        //  1. We're in text position, and not in a raw text element
        //     (regex === textEndRegex): insert a comment marker.
        //  2. We have a non-negative attrNameEndIndex which means we need to
        //     rewrite the attribute name to add a bound attribute suffix.
        //  3. We're at the non-first binding in a multi-binding attribute, use a
        //     plain marker.
        //  4. We're somewhere else inside the tag. If we're in attribute name
        //     position (attrNameEndIndex === -2), add a sequential suffix to
        //     generate a unique attribute name.
        // Detect a binding next to self-closing tag end and insert a space to
        // separate the marker from the tag end:
        const end = regex === tagEndRegex && strings[i + 1].startsWith('/>') ? ' ' : '';
        html +=
            regex === textEndRegex
                ? s + nodeMarker
                : attrNameEndIndex >= 0
                    ? (attrNames.push(attrName),
                        s.slice(0, attrNameEndIndex) +
                            boundAttributeSuffix +
                            s.slice(attrNameEndIndex)) +
                        marker +
                        end
                    : s +
                        marker +
                        (attrNameEndIndex === -2 ? (attrNames.push(undefined), i) : end);
    }
    const htmlResult = html + (strings[l] || '<?>') + (type === SVG_RESULT ? '</svg>' : '');
    // A security check to prevent spoofing of Lit template results.
    // In the future, we may be able to replace this with Array.isTemplateObject,
    // though we might need to make that check inside of the html and svg
    // functions, because precompiled templates don't come in as
    // TemplateStringArray objects.
    if (!Array.isArray(strings) || !strings.hasOwnProperty('raw')) {
        let message = 'invalid template strings array';
        if (DEV_MODE) {
            message = `
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.

          If you're using the html or svg tagged template functions normally
          and and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `
                .trim()
                .replace(/\n */g, '\n');
        }
        throw new Error(message);
    }
    // Returned as an array for terseness
    return [
        policy !== undefined
            ? policy.createHTML(htmlResult)
            : htmlResult,
        attrNames,
    ];
};
class Template {
    constructor(
    // This property needs to remain unminified.
    { strings, ['_$litType$']: type }, options) {
        /** @internal */
        this.parts = [];
        let node;
        let nodeIndex = 0;
        let attrNameIndex = 0;
        const partCount = strings.length - 1;
        const parts = this.parts;
        // Create template element
        const [html, attrNames] = getTemplateHtml(strings, type);
        this.el = Template.createElement(html, options);
        walker.currentNode = this.el.content;
        // Reparent SVG nodes into template root
        if (type === SVG_RESULT) {
            const content = this.el.content;
            const svgElement = content.firstChild;
            svgElement.remove();
            content.append(...svgElement.childNodes);
        }
        // Walk the template to find binding markers and create TemplateParts
        while ((node = walker.nextNode()) !== null && parts.length < partCount) {
            if (node.nodeType === 1) {
                if (DEV_MODE) {
                    const tag = node.localName;
                    // Warn if `textarea` includes an expression and throw if `template`
                    // does since these are not supported. We do this by checking
                    // innerHTML for anything that looks like a marker. This catches
                    // cases like bindings in textarea there markers turn into text nodes.
                    if (/^(?:textarea|template)$/i.test(tag) &&
                        node.innerHTML.includes(marker)) {
                        const m = `Expressions are not supported inside \`${tag}\` ` +
                            `elements. See https://lit.dev/msg/expression-in-${tag} for more ` +
                            `information.`;
                        if (tag === 'template') {
                            throw new Error(m);
                        }
                        else
                            issueWarning('', m);
                    }
                }
                // TODO (justinfagnani): for attempted dynamic tag names, we don't
                // increment the bindingIndex, and it'll be off by 1 in the element
                // and off by two after it.
                if (node.hasAttributes()) {
                    // We defer removing bound attributes because on IE we might not be
                    // iterating attributes in their template order, and would sometimes
                    // remove an attribute that we still need to create a part for.
                    const attrsToRemove = [];
                    for (const name of node.getAttributeNames()) {
                        // `name` is the name of the attribute we're iterating over, but not
                        // _neccessarily_ the name of the attribute we will create a part
                        // for. They can be different in browsers that don't iterate on
                        // attributes in source order. In that case the attrNames array
                        // contains the attribute name we'll process next. We only need the
                        // attribute name here to know if we should process a bound attribute
                        // on this element.
                        if (name.endsWith(boundAttributeSuffix) ||
                            name.startsWith(marker)) {
                            const realName = attrNames[attrNameIndex++];
                            attrsToRemove.push(name);
                            if (realName !== undefined) {
                                // Lowercase for case-sensitive SVG attributes like viewBox
                                const value = node.getAttribute(realName.toLowerCase() + boundAttributeSuffix);
                                const statics = value.split(marker);
                                const m = /([.?@])?(.*)/.exec(realName);
                                parts.push({
                                    type: ATTRIBUTE_PART,
                                    index: nodeIndex,
                                    name: m[2],
                                    strings: statics,
                                    ctor: m[1] === '.'
                                        ? PropertyPart
                                        : m[1] === '?'
                                            ? BooleanAttributePart
                                            : m[1] === '@'
                                                ? EventPart
                                                : AttributePart,
                                });
                            }
                            else {
                                parts.push({
                                    type: ELEMENT_PART,
                                    index: nodeIndex,
                                });
                            }
                        }
                    }
                    for (const name of attrsToRemove) {
                        node.removeAttribute(name);
                    }
                }
                // TODO (justinfagnani): benchmark the regex against testing for each
                // of the 3 raw text element names.
                if (rawTextElement.test(node.tagName)) {
                    // For raw text elements we need to split the text content on
                    // markers, create a Text node for each segment, and create
                    // a TemplatePart for each marker.
                    const strings = node.textContent.split(marker);
                    const lastIndex = strings.length - 1;
                    if (lastIndex > 0) {
                        node.textContent = trustedTypes
                            ? trustedTypes.emptyScript
                            : '';
                        // Generate a new text node for each literal section
                        // These nodes are also used as the markers for node parts
                        // We can't use empty text nodes as markers because they're
                        // normalized when cloning in IE (could simplify when
                        // IE is no longer supported)
                        for (let i = 0; i < lastIndex; i++) {
                            node.append(strings[i], createMarker());
                            // Walk past the marker node we just added
                            walker.nextNode();
                            parts.push({ type: CHILD_PART, index: ++nodeIndex });
                        }
                        // Note because this marker is added after the walker's current
                        // node, it will be walked to in the outer loop (and ignored), so
                        // we don't need to adjust nodeIndex here
                        node.append(strings[lastIndex], createMarker());
                    }
                }
            }
            else if (node.nodeType === 8) {
                const data = node.data;
                if (data === markerMatch) {
                    parts.push({ type: CHILD_PART, index: nodeIndex });
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        parts.push({ type: COMMENT_PART, index: nodeIndex });
                        // Move to the end of the match
                        i += marker.length - 1;
                    }
                }
            }
            nodeIndex++;
        }
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'template prep',
            template: this,
            clonableTemplate: this.el,
            parts: this.parts,
            strings,
        });
    }
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @nocollapse */
    static createElement(html, _options) {
        const el = d.createElement('template');
        el.innerHTML = html;
        return el;
    }
}
function resolveDirective(part, value, parent = part, attributeIndex) {
    var _a, _b, _c;
    var _d;
    // Bail early if the value is explicitly noChange. Note, this means any
    // nested directive is still attached and is not run.
    if (value === noChange) {
        return value;
    }
    let currentDirective = attributeIndex !== undefined
        ? (_a = parent.__directives) === null || _a === void 0 ? void 0 : _a[attributeIndex]
        : parent.__directive;
    const nextDirectiveConstructor = isPrimitive(value)
        ? undefined
        : // This property needs to remain unminified.
            value['_$litDirective$'];
    if ((currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective.constructor) !== nextDirectiveConstructor) {
        // This property needs to remain unminified.
        (_b = currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective['_$notifyDirectiveConnectionChanged']) === null || _b === void 0 ? void 0 : _b.call(currentDirective, false);
        if (nextDirectiveConstructor === undefined) {
            currentDirective = undefined;
        }
        else {
            currentDirective = new nextDirectiveConstructor(part);
            currentDirective._$initialize(part, parent, attributeIndex);
        }
        if (attributeIndex !== undefined) {
            ((_c = (_d = parent).__directives) !== null && _c !== void 0 ? _c : (_d.__directives = []))[attributeIndex] =
                currentDirective;
        }
        else {
            parent.__directive = currentDirective;
        }
    }
    if (currentDirective !== undefined) {
        value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
    }
    return value;
}
/**
 * An updateable instance of a Template. Holds references to the Parts used to
 * update the template instance.
 */
class TemplateInstance {
    constructor(template, parent) {
        /** @internal */
        this._parts = [];
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$template = template;
        this._$parent = parent;
    }
    // Called by ChildPart parentNode getter
    get parentNode() {
        return this._$parent.parentNode;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    // This method is separate from the constructor because we need to return a
    // DocumentFragment and we don't want to hold onto it with an instance field.
    _clone(options) {
        var _a;
        const { el: { content }, parts: parts, } = this._$template;
        const fragment = ((_a = options === null || options === void 0 ? void 0 : options.creationScope) !== null && _a !== void 0 ? _a : d).importNode(content, true);
        walker.currentNode = fragment;
        let node = walker.nextNode();
        let nodeIndex = 0;
        let partIndex = 0;
        let templatePart = parts[0];
        while (templatePart !== undefined) {
            if (nodeIndex === templatePart.index) {
                let part;
                if (templatePart.type === CHILD_PART) {
                    part = new ChildPart(node, node.nextSibling, this, options);
                }
                else if (templatePart.type === ATTRIBUTE_PART) {
                    part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
                }
                else if (templatePart.type === ELEMENT_PART) {
                    part = new ElementPart(node, this, options);
                }
                this._parts.push(part);
                templatePart = parts[++partIndex];
            }
            if (nodeIndex !== (templatePart === null || templatePart === void 0 ? void 0 : templatePart.index)) {
                node = walker.nextNode();
                nodeIndex++;
            }
        }
        return fragment;
    }
    _update(values) {
        let i = 0;
        for (const part of this._parts) {
            if (part !== undefined) {
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'set part',
                    part,
                    value: values[i],
                    valueIndex: i,
                    values,
                    templateInstance: this,
                });
                if (part.strings !== undefined) {
                    part._$setValue(values, part, i);
                    // The number of values the part consumes is part.strings.length - 1
                    // since values are in between template spans. We increment i by 1
                    // later in the loop, so increment it by part.strings.length - 2 here
                    i += part.strings.length - 2;
                }
                else {
                    part._$setValue(values[i]);
                }
            }
            i++;
        }
    }
}
class ChildPart {
    constructor(startNode, endNode, parent, options) {
        var _a;
        this.type = CHILD_PART;
        this._$committedValue = nothing;
        // The following fields will be patched onto ChildParts when required by
        // AsyncDirective
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$startNode = startNode;
        this._$endNode = endNode;
        this._$parent = parent;
        this.options = options;
        // Note __isConnected is only ever accessed on RootParts (i.e. when there is
        // no _$parent); the value on a non-root-part is "don't care", but checking
        // for parent would be more code
        this.__isConnected = (_a = options === null || options === void 0 ? void 0 : options.isConnected) !== null && _a !== void 0 ? _a : true;
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            // Explicitly initialize for consistent class shape.
            this._textSanitizer = undefined;
        }
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        var _a, _b;
        // ChildParts that are not at the root should always be created with a
        // parent; only RootChildNode's won't, so they return the local isConnected
        // state
        return (_b = (_a = this._$parent) === null || _a === void 0 ? void 0 : _a._$isConnected) !== null && _b !== void 0 ? _b : this.__isConnected;
    }
    /**
     * The parent node into which the part renders its content.
     *
     * A ChildPart's content consists of a range of adjacent child nodes of
     * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
     * `.endNode`).
     *
     * - If both `.startNode` and `.endNode` are non-null, then the part's content
     * consists of all siblings between `.startNode` and `.endNode`, exclusively.
     *
     * - If `.startNode` is non-null but `.endNode` is null, then the part's
     * content consists of all siblings following `.startNode`, up to and
     * including the last child of `.parentNode`. If `.endNode` is non-null, then
     * `.startNode` will always be non-null.
     *
     * - If both `.endNode` and `.startNode` are null, then the part's content
     * consists of all child nodes of `.parentNode`.
     */
    get parentNode() {
        let parentNode = wrap(this._$startNode).parentNode;
        const parent = this._$parent;
        if (parent !== undefined &&
            parentNode.nodeType === 11 /* Node.DOCUMENT_FRAGMENT */) {
            // If the parentNode is a DocumentFragment, it may be because the DOM is
            // still in the cloned fragment during initial render; if so, get the real
            // parentNode the part will be committed into by asking the parent.
            parentNode = parent.parentNode;
        }
        return parentNode;
    }
    /**
     * The part's leading marker node, if any. See `.parentNode` for more
     * information.
     */
    get startNode() {
        return this._$startNode;
    }
    /**
     * The part's trailing marker node, if any. See `.parentNode` for more
     * information.
     */
    get endNode() {
        return this._$endNode;
    }
    _$setValue(value, directiveParent = this) {
        var _a;
        if (DEV_MODE && this.parentNode === null) {
            throw new Error(`This \`ChildPart\` has no \`parentNode\` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's \`innerHTML\` or \`textContent\` can do this.`);
        }
        value = resolveDirective(this, value, directiveParent);
        if (isPrimitive(value)) {
            // Non-rendering child values. It's important that these do not render
            // empty text nodes to avoid issues with preventing default <slot>
            // fallback content.
            if (value === nothing || value == null || value === '') {
                if (this._$committedValue !== nothing) {
                    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                        kind: 'commit nothing to child',
                        start: this._$startNode,
                        end: this._$endNode,
                        parent: this._$parent,
                        options: this.options,
                    });
                    this._$clear();
                }
                this._$committedValue = nothing;
            }
            else if (value !== this._$committedValue && value !== noChange) {
                this._commitText(value);
            }
            // This property needs to remain unminified.
        }
        else if (value['_$litType$'] !== undefined) {
            this._commitTemplateResult(value);
        }
        else if (value.nodeType !== undefined) {
            if (DEV_MODE && ((_a = this.options) === null || _a === void 0 ? void 0 : _a.host) === value) {
                this._commitText(`[probable mistake: rendered a template's host in itself ` +
                    `(commonly caused by writing \${this} in a template]`);
                console.warn(`Attempted to render the template host`, value, `inside itself. This is almost always a mistake, and in dev mode `, `we render some warning text. In production however, we'll `, `render it, which will usually result in an error, and sometimes `, `in the element disappearing from the DOM.`);
                return;
            }
            this._commitNode(value);
        }
        else if (isIterable(value)) {
            this._commitIterable(value);
        }
        else {
            // Fallback, will render the string representation
            this._commitText(value);
        }
    }
    _insert(node, ref = this._$endNode) {
        return wrap(wrap(this._$startNode).parentNode).insertBefore(node, ref);
    }
    _commitNode(value) {
        var _a;
        if (this._$committedValue !== value) {
            this._$clear();
            if (ENABLE_EXTRA_SECURITY_HOOKS &&
                sanitizerFactoryInternal !== noopSanitizer) {
                const parentNodeName = (_a = this._$startNode.parentNode) === null || _a === void 0 ? void 0 : _a.nodeName;
                if (parentNodeName === 'STYLE' || parentNodeName === 'SCRIPT') {
                    let message = 'Forbidden';
                    if (DEV_MODE) {
                        if (parentNodeName === 'STYLE') {
                            message =
                                `Lit does not support binding inside style nodes. ` +
                                    `This is a security risk, as style injection attacks can ` +
                                    `exfiltrate data and spoof UIs. ` +
                                    `Consider instead using css\`...\` literals ` +
                                    `to compose styles, and make do dynamic styling with ` +
                                    `css custom properties, ::parts, <slot>s, ` +
                                    `and by mutating the DOM rather than stylesheets.`;
                        }
                        else {
                            message =
                                `Lit does not support binding inside script nodes. ` +
                                    `This is a security risk, as it could allow arbitrary ` +
                                    `code execution.`;
                        }
                    }
                    throw new Error(message);
                }
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit node',
                start: this._$startNode,
                parent: this._$parent,
                value: value,
                options: this.options,
            });
            this._$committedValue = this._insert(value);
        }
    }
    _commitText(value) {
        // If the committed value is a primitive it means we called _commitText on
        // the previous render, and we know that this._$startNode.nextSibling is a
        // Text node. We can now just replace the text content (.data) of the node.
        if (this._$committedValue !== nothing &&
            isPrimitive(this._$committedValue)) {
            const node = wrap(this._$startNode).nextSibling;
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(node, 'data', 'property');
                }
                value = this._textSanitizer(value);
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit text',
                node,
                value,
                options: this.options,
            });
            node.data = value;
        }
        else {
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                const textNode = document.createTextNode('');
                this._commitNode(textNode);
                // When setting text content, for security purposes it matters a lot
                // what the parent is. For example, <style> and <script> need to be
                // handled with care, while <span> does not. So first we need to put a
                // text node into the document, then we can sanitize its content.
                if (this._textSanitizer === undefined) {
                    this._textSanitizer = createSanitizer(textNode, 'data', 'property');
                }
                value = this._textSanitizer(value);
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'commit text',
                    node: textNode,
                    value,
                    options: this.options,
                });
                textNode.data = value;
            }
            else {
                this._commitNode(d.createTextNode(value));
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'commit text',
                    node: wrap(this._$startNode).nextSibling,
                    value,
                    options: this.options,
                });
            }
        }
        this._$committedValue = value;
    }
    _commitTemplateResult(result) {
        var _a;
        // This property needs to remain unminified.
        const { values, ['_$litType$']: type } = result;
        // If $litType$ is a number, result is a plain TemplateResult and we get
        // the template from the template cache. If not, result is a
        // CompiledTemplateResult and _$litType$ is a CompiledTemplate and we need
        // to create the <template> element the first time we see it.
        const template = typeof type === 'number'
            ? this._$getTemplate(result)
            : (type.el === undefined &&
                (type.el = Template.createElement(type.h, this.options)),
                type);
        if (((_a = this._$committedValue) === null || _a === void 0 ? void 0 : _a._$template) === template) {
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template updating',
                template,
                instance: this._$committedValue,
                parts: this._$committedValue._parts,
                options: this.options,
                values,
            });
            this._$committedValue._update(values);
        }
        else {
            const instance = new TemplateInstance(template, this);
            const fragment = instance._clone(this.options);
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template instantiated',
                template,
                instance,
                parts: instance._parts,
                options: this.options,
                fragment,
                values,
            });
            instance._update(values);
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template instantiated and updated',
                template,
                instance,
                parts: instance._parts,
                options: this.options,
                fragment,
                values,
            });
            this._commitNode(fragment);
            this._$committedValue = instance;
        }
    }
    // Overridden via `litHtmlPolyfillSupport` to provide platform support.
    /** @internal */
    _$getTemplate(result) {
        let template = templateCache.get(result.strings);
        if (template === undefined) {
            templateCache.set(result.strings, (template = new Template(result)));
        }
        return template;
    }
    _commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If value is an array, then the previous render was of an
        // iterable and value will contain the ChildParts from the previous
        // render. If value is not an array, clear this part and make a new
        // array for ChildParts.
        if (!isArray(this._$committedValue)) {
            this._$committedValue = [];
            this._$clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this._$committedValue;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            if (partIndex === itemParts.length) {
                // If no existing part, create a new one
                // TODO (justinfagnani): test perf impact of always creating two parts
                // instead of sharing parts between nodes
                // https://github.com/lit/lit/issues/1266
                itemParts.push((itemPart = new ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options)));
            }
            else {
                // Reuse an existing part
                itemPart = itemParts[partIndex];
            }
            itemPart._$setValue(item);
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // itemParts always have end nodes
            this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
        }
    }
    /**
     * Removes the nodes contained within this Part from the DOM.
     *
     * @param start Start node to clear from, for clearing a subset of the part's
     *     DOM (used when truncating iterables)
     * @param from  When `start` is specified, the index within the iterable from
     *     which ChildParts are being removed, used for disconnecting directives in
     *     those Parts.
     *
     * @internal
     */
    _$clear(start = wrap(this._$startNode).nextSibling, from) {
        var _a;
        (_a = this._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(this, false, true, from);
        while (start && start !== this._$endNode) {
            const n = wrap(start).nextSibling;
            wrap(start).remove();
            start = n;
        }
    }
    /**
     * Implementation of RootPart's `isConnected`. Note that this metod
     * should only be called on `RootPart`s (the `ChildPart` returned from a
     * top-level `render()` call). It has no effect on non-root ChildParts.
     * @param isConnected Whether to set
     * @internal
     */
    setConnected(isConnected) {
        var _a;
        if (this._$parent === undefined) {
            this.__isConnected = isConnected;
            (_a = this._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(this, isConnected);
        }
        else if (DEV_MODE) {
            throw new Error('part.setConnected() may only be called on a ' +
                'RootPart returned from render().');
        }
    }
}
class AttributePart {
    constructor(element, name, strings, parent, options) {
        this.type = ATTRIBUTE_PART;
        /** @internal */
        this._$committedValue = nothing;
        /** @internal */
        this._$disconnectableChildren = undefined;
        this.element = element;
        this.name = name;
        this._$parent = parent;
        this.options = options;
        if (strings.length > 2 || strings[0] !== '' || strings[1] !== '') {
            this._$committedValue = new Array(strings.length - 1).fill(new String());
            this.strings = strings;
        }
        else {
            this._$committedValue = nothing;
        }
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            this._sanitizer = undefined;
        }
    }
    get tagName() {
        return this.element.tagName;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    /**
     * Sets the value of this part by resolving the value from possibly multiple
     * values and static strings and committing it to the DOM.
     * If this part is single-valued, `this._strings` will be undefined, and the
     * method will be called with a single value argument. If this part is
     * multi-value, `this._strings` will be defined, and the method is called
     * with the value array of the part's owning TemplateInstance, and an offset
     * into the value array from which the values should be read.
     * This method is overloaded this way to eliminate short-lived array slices
     * of the template instance values, and allow a fast-path for single-valued
     * parts.
     *
     * @param value The part value, or an array of values for multi-valued parts
     * @param valueIndex the index to start reading values from. `undefined` for
     *   single-valued parts
     * @param noCommit causes the part to not commit its value to the DOM. Used
     *   in hydration to prime attribute parts with their first-rendered value,
     *   but not set the attribute, and in SSR to no-op the DOM operation and
     *   capture the value for serialization.
     *
     * @internal
     */
    _$setValue(value, directiveParent = this, valueIndex, noCommit) {
        const strings = this.strings;
        // Whether any of the values has changed, for dirty-checking
        let change = false;
        if (strings === undefined) {
            // Single-value binding case
            value = resolveDirective(this, value, directiveParent, 0);
            change =
                !isPrimitive(value) ||
                    (value !== this._$committedValue && value !== noChange);
            if (change) {
                this._$committedValue = value;
            }
        }
        else {
            // Interpolation case
            const values = value;
            value = strings[0];
            let i, v;
            for (i = 0; i < strings.length - 1; i++) {
                v = resolveDirective(this, values[valueIndex + i], directiveParent, i);
                if (v === noChange) {
                    // If the user-provided value is `noChange`, use the previous value
                    v = this._$committedValue[i];
                }
                change || (change = !isPrimitive(v) || v !== this._$committedValue[i]);
                if (v === nothing) {
                    value = nothing;
                }
                else if (value !== nothing) {
                    value += (v !== null && v !== void 0 ? v : '') + strings[i + 1];
                }
                // We always record each value, even if one is `nothing`, for future
                // change detection.
                this._$committedValue[i] = v;
            }
        }
        if (change && !noCommit) {
            this._commitValue(value);
        }
    }
    /** @internal */
    _commitValue(value) {
        if (value === nothing) {
            wrap(this.element).removeAttribute(this.name);
        }
        else {
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                if (this._sanitizer === undefined) {
                    this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'attribute');
                }
                value = this._sanitizer(value !== null && value !== void 0 ? value : '');
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit attribute',
                element: this.element,
                name: this.name,
                value,
                options: this.options,
            });
            wrap(this.element).setAttribute(this.name, (value !== null && value !== void 0 ? value : ''));
        }
    }
}
class PropertyPart extends AttributePart {
    constructor() {
        super(...arguments);
        this.type = PROPERTY_PART;
    }
    /** @internal */
    _commitValue(value) {
        if (ENABLE_EXTRA_SECURITY_HOOKS) {
            if (this._sanitizer === undefined) {
                this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'property');
            }
            value = this._sanitizer(value);
        }
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit property',
            element: this.element,
            name: this.name,
            value,
            options: this.options,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.element[this.name] = value === nothing ? undefined : value;
    }
}
// Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.
const emptyStringForBooleanAttribute = trustedTypes
    ? trustedTypes.emptyScript
    : '';
class BooleanAttributePart extends AttributePart {
    constructor() {
        super(...arguments);
        this.type = BOOLEAN_ATTRIBUTE_PART;
    }
    /** @internal */
    _commitValue(value) {
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit boolean attribute',
            element: this.element,
            name: this.name,
            value: !!(value && value !== nothing),
            options: this.options,
        });
        if (value && value !== nothing) {
            wrap(this.element).setAttribute(this.name, emptyStringForBooleanAttribute);
        }
        else {
            wrap(this.element).removeAttribute(this.name);
        }
    }
}
class EventPart extends AttributePart {
    constructor(element, name, strings, parent, options) {
        super(element, name, strings, parent, options);
        this.type = EVENT_PART;
        if (DEV_MODE && this.strings !== undefined) {
            throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with ` +
                'invalid content. Event listeners in templates must have exactly ' +
                'one expression and no surrounding text.');
        }
    }
    // EventPart does not use the base _$setValue/_resolveValue implementation
    // since the dirty checking is more complex
    /** @internal */
    _$setValue(newListener, directiveParent = this) {
        var _a;
        newListener =
            (_a = resolveDirective(this, newListener, directiveParent, 0)) !== null && _a !== void 0 ? _a : nothing;
        if (newListener === noChange) {
            return;
        }
        const oldListener = this._$committedValue;
        // If the new value is nothing or any options change we have to remove the
        // part as a listener.
        const shouldRemoveListener = (newListener === nothing && oldListener !== nothing) ||
            newListener.capture !==
                oldListener.capture ||
            newListener.once !==
                oldListener.once ||
            newListener.passive !==
                oldListener.passive;
        // If the new value is not nothing and we removed the listener, we have
        // to add the part as a listener.
        const shouldAddListener = newListener !== nothing &&
            (oldListener === nothing || shouldRemoveListener);
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit event listener',
            element: this.element,
            name: this.name,
            value: newListener,
            options: this.options,
            removeListener: shouldRemoveListener,
            addListener: shouldAddListener,
            oldListener,
        });
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.name, this, oldListener);
        }
        if (shouldAddListener) {
            // Beware: IE11 and Chrome 41 don't like using the listener as the
            // options object. Figure out how to deal w/ this in IE11 - maybe
            // patch addEventListener?
            this.element.addEventListener(this.name, this, newListener);
        }
        this._$committedValue = newListener;
    }
    handleEvent(event) {
        var _a, _b;
        if (typeof this._$committedValue === 'function') {
            this._$committedValue.call((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.host) !== null && _b !== void 0 ? _b : this.element, event);
        }
        else {
            this._$committedValue.handleEvent(event);
        }
    }
}
class ElementPart {
    constructor(element, parent, options) {
        this.element = element;
        this.type = ELEMENT_PART;
        /** @internal */
        this._$disconnectableChildren = undefined;
        this._$parent = parent;
        this.options = options;
    }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    _$setValue(value) {
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'commit to element binding',
            element: this.element,
            value,
            options: this.options,
        });
        resolveDirective(this, value);
    }
}
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _$LH object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-element, which re-exports all of lit-html.
 *
 * @private
 */
const _$LH = {
    // Used in lit-ssr
    _boundAttributeSuffix: boundAttributeSuffix,
    _marker: marker,
    _markerMatch: markerMatch,
    _HTML_RESULT: HTML_RESULT,
    _getTemplateHtml: getTemplateHtml,
    // Used in hydrate
    _TemplateInstance: TemplateInstance,
    _isIterable: isIterable,
    _resolveDirective: resolveDirective,
    // Used in tests and private-ssr-support
    _ChildPart: ChildPart,
    _AttributePart: AttributePart,
    _BooleanAttributePart: BooleanAttributePart,
    _EventPart: EventPart,
    _PropertyPart: PropertyPart,
    _ElementPart: ElementPart,
};
// Apply polyfills if available
const polyfillSupport = DEV_MODE
    ? global.litHtmlPolyfillSupportDevMode
    : global.litHtmlPolyfillSupport;
polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport(Template, ChildPart);
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
((_d = global.litHtmlVersions) !== null && _d !== void 0 ? _d : (global.litHtmlVersions = [])).push('2.6.1');
if (DEV_MODE && global.litHtmlVersions.length > 1) {
    issueWarning('multiple-versions', `Multiple versions of Lit loaded. ` +
        `Loading multiple versions is not recommended.`);
}
/**
 * Renders a value, usually a lit-html TemplateResult, to the container.
 *
 * This example renders the text "Hello, Zoe!" inside a paragraph tag, appending
 * it to the container `document.body`.
 *
 * ```js
 * import {html, render} from 'lit';
 *
 * const name = "Zoe";
 * render(html`<p>Hello, ${name}!</p>`, document.body);
 * ```
 *
 * @param value Any [renderable
 *   value](https://lit.dev/docs/templates/expressions/#child-expressions),
 *   typically a {@linkcode TemplateResult} created by evaluating a template tag
 *   like {@linkcode html} or {@linkcode svg}.
 * @param container A DOM container to render to. The first render will append
 *   the rendered value to the container, and subsequent renders will
 *   efficiently update the rendered value if the same result type was
 *   previously rendered there.
 * @param options See {@linkcode RenderOptions} for options documentation.
 * @see
 * {@link https://lit.dev/docs/libraries/standalone-templates/#rendering-lit-html-templates| Rendering Lit HTML Templates}
 */
const render = (value, container, options) => {
    var _a, _b;
    if (DEV_MODE && container == null) {
        // Give a clearer error message than
        //     Uncaught TypeError: Cannot read properties of null (reading
        //     '_$litPart$')
        // which reads like an internal Lit error.
        throw new TypeError(`The container to render into may not be ${container}`);
    }
    const renderId = DEV_MODE ? debugLogRenderId++ : 0;
    const partOwnerNode = (_a = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _a !== void 0 ? _a : container;
    // This property needs to remain unminified.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let part = partOwnerNode['_$litPart$'];
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: 'begin render',
        id: renderId,
        value,
        container,
        options,
        part,
    });
    if (part === undefined) {
        const endNode = (_b = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _b !== void 0 ? _b : null;
        // This property needs to remain unminified.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        partOwnerNode['_$litPart$'] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, undefined, options !== null && options !== void 0 ? options : {});
    }
    part._$setValue(value);
    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
        kind: 'end render',
        id: renderId,
        value,
        container,
        options,
        part,
    });
    return part;
};
if (ENABLE_EXTRA_SECURITY_HOOKS) {
    render.setSanitizer = setSanitizer;
    render.createSanitizer = createSanitizer;
    if (DEV_MODE) {
        render._testOnlyClearSanitizerFactoryDoNotCallOrElse =
            _testOnlyClearSanitizerFactoryDoNotCallOrElse;
    }
}
//# sourceMappingURL=lit-html.js.map

/***/ }),

/***/ "./node_modules/lit/index.js":
/*!***********************************!*\
  !*** ./node_modules/lit/index.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSResult": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.CSSResult),
/* harmony export */   "LitElement": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.LitElement),
/* harmony export */   "ReactiveElement": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.ReactiveElement),
/* harmony export */   "UpdatingElement": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.UpdatingElement),
/* harmony export */   "_$LE": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LE),
/* harmony export */   "_$LH": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LH),
/* harmony export */   "adoptStyles": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.adoptStyles),
/* harmony export */   "css": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.css),
/* harmony export */   "defaultConverter": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.defaultConverter),
/* harmony export */   "getCompatibleStyle": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.getCompatibleStyle),
/* harmony export */   "html": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.html),
/* harmony export */   "isServer": () => (/* reexport safe */ lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__.isServer),
/* harmony export */   "noChange": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.noChange),
/* harmony export */   "notEqual": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.notEqual),
/* harmony export */   "nothing": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.nothing),
/* harmony export */   "render": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.render),
/* harmony export */   "supportsAdoptingStyleSheets": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.supportsAdoptingStyleSheets),
/* harmony export */   "svg": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.svg),
/* harmony export */   "unsafeCSS": () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element/lit-element.js */ "./node_modules/lit-element/development/lit-element.js");
/* harmony import */ var lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/is-server.js */ "./node_modules/lit-html/development/is-server.js");

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./src/js/components/atoms/button/button.js":
/*!**************************************************!*\
  !*** ./src/js/components/atoms/button/button.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WButton": () => (/* binding */ WButton)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _directives_classnames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../directives/classnames.js */ "./src/js/directives/classnames.js");



class WButton extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        button {
            display: inline-block;
            cursor: pointer;
            transition: all 300ms linear;
        }

        button.primary {
            border: 1px solid var(--primary-color);
            background-color: var(--primary-color);
            color: var(--primary-text-color);
        }

        button.primary:hover {
            background-color: var(--primary-hover-color);
        }

        button.secondary {
            border: 1px solid var(--secondary-color);
            background-color: var(--secondary-color);
            color: var(--primary-text-color);
        }

        button.secondary:hover {
            background-color: var(--secondary-hover-color);
        }

        button.tertiary {
            background-color: transparent;
            border: 1px solid var(--primary-color);
            color: var(--primary-color);
        }

        button.tertiary:hover {
            background-color: var(--primary-color);
            color: var(--primary-text-color);
        }

        button.danger {
            border: 1px solid var(--danger-color);
            background-color: var(--danger-color);
            color: var(--primary-text-color);
        }

        button.danger:hover {
            background-color: var(--danger-hover-color);
        }

        button.ghost {
            border: 1px solid transparent;
            background-color: transparent;
            color: var(--a-color);
        }

        button.ghost:hover {
            color: var(--a-hover-color);
        }

        button.sm {
            padding: 0.5rem 3rem 0.5rem 0.5rem;
        }

        button.md {
            padding: 0.7rem 3rem 0.7rem 0.7rem;
        }

        button.lg {
            padding: 1rem 3rem 1rem 1rem;
        }

        button.xl {
            padding: 1rem 3rem 2rem 1rem;
        }

        button.block {
            display: block;
            width: 100%;
            text-align: left;
        }

        button:disabled,
        button.disabled {
            background: var(--muted-color);
            border: 1px solid var(--muted-color);
            cursor: auto;
        }
    `;

    static properties = {
        label: { type: String },
        kind: { type: String }, // options: 'primary', 'secondary', 'tertiary', 'danger', 'ghost'
        size: { type: String }, // options: 'md', 'sm', 'md', 'lg', 'xl'
        disabled: { type: Boolean },
        block: { type: Boolean }
    };

    constructor() {
        super();
        this.label = "Click me!";
        this.kind = "primary";
        this.size = "md";
        this.disabled = false;
        this.block = false;
    }

    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html`
            <button 
                class=${(0,_directives_classnames_js__WEBPACK_IMPORTED_MODULE_1__.classnames)({ [this.kind]: !this.disabled, [this.size]: true, "block": this.block, "disabled": this.disabled })} 
                ?disabled=${this.disabled}>
                    ${this.label}
            </button>
        `;
    }

}

customElements.define('w-button', WButton);

/***/ }),

/***/ "./src/js/components/atoms/code/code.js":
/*!**********************************************!*\
  !*** ./src/js/components/atoms/code/code.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WCode": () => (/* binding */ WCode)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class WCode extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        .size-100 {
            
        }
    `;

    static properties = {
        is: { 
            type: String,
            help: "The type of the tag. Possible values are `h1`, `h2`, `h3`, `h4`, `h5` or `h6`. Default is `h1`."
        }
    };

    constructor() {
        super();
        this.is = "h1";
    }

    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html`<code><slot></slot></code>`;
    }

}

customElements.define('w-code', WCode);

/***/ }),

/***/ "./src/js/components/atoms/heading/heading.js":
/*!****************************************************!*\
  !*** ./src/js/components/atoms/heading/heading.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WHeading": () => (/* binding */ WHeading)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _directives_classnames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../directives/classnames.js */ "./src/js/directives/classnames.js");




class WHeading extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        .size-100 {
            font-size: var(--w-heading--size-100--font-size);
            margin: var(--w-heading--size-100--margin-top) 0 0 0;
        }

        .size-200 {
            font-size: var(--w-heading--size-200--font-size);
            margin: var(--w-heading--size-200--margin-top) 0 0 0;
        }

        .size-300 {
            font-size: var(--w-heading--size-300--font-size);
            margin: var(--w-heading--size-300--margin-top) 0 0 0;
        }

        .size-400 {
            font-size: var(--w-heading--size-400--font-size);
            margin: var(--w-heading--size-400--margin-top) 0 0 0;
        }

        .size-500 {
            font-size: var(--w-heading--size-500--font-size);
            margin: var(--w-heading--size-500--margin-top) 0 0 0;
        }

        .size-600 {
            font-size: var(--w-heading--size-600--font-size);
            margin: var(--w-heading--size-600--margin-top) 0 0 0;
        }

        .size-700 {
            font-size: var(--w-heading--size-700--font-size);
            margin: var(--w-heading--size-700--margin-top) 0 0 0;
        }

        .size-800 {
            font-size: var(--w-heading--size-800--font-size);
            margin: var(--w-heading--size-800--margin-top) 0 0 0;
        }

        .size-900 {
            font-size: var(--w-heading--size-900--font-size);
            margin: var(--w-heading--size-900--margin-top) 0 0 0;
        }

        h5 {
            color: var(--w-muted-color);
        }
        
        h6 {
            font-weight: var(--w-font-weight-text-regular);
            color: var(--w-muted-color);
            text-decoration: underline;
            
        }
    `;

    static properties = {
        is: { 
            type: String,
            help: "The type of the tag. Possible values are `h1`, `h2`, `h3`, `h4`, `h5` or `h6`. Default is `h1`."
        },

        size: {
            type: Number,
            help: "The size of the heading. Possible values are `100`, `200`, `300`, `400`, `500`, `600`, `800`, or `900`. If not set, the size will be derived based on `is`."
        }
    };

    constructor() {
        super();
        this.is = "h1";
    }

    _getCalculatedSize() {
        if (this.size) {
            return this.size;
        } else if (this.is == "h1") {
            return 800;
        } else if (this.is == "h2") {
            return 600;
        } else if (this.is == "h3") {
            return 500;
        } else if (this.is == "h4") {
            return 400;
        } else if (this.is == "h5") {
            return 400;
        } else if (this.is == "h6") {
            return 400;
        } else {
            return 400;
        }
    }

    render() {
        const heading = document.createElement(this.is);
        heading.className = (0,_directives_classnames_js__WEBPACK_IMPORTED_MODULE_1__.classnames)({ ["size-" + this._getCalculatedSize()]: true });
        heading.innerHTML = "<slot></slot>";
        
        return heading;
    }

}

customElements.define('w-heading', WHeading);

/***/ }),

/***/ "./src/js/components/atoms/markdown/markdown.js":
/*!******************************************************!*\
  !*** ./src/js/components/atoms/markdown/markdown.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WMarkdown": () => (/* binding */ WMarkdown)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _directives_markdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../directives/markdown.js */ "./src/js/directives/markdown.js");
/* harmony import */ var _directives_dedent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../directives/dedent.js */ "./src/js/directives/dedent.js");





class WMarkdown extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        :host {
            display: block;
        }

        :host :first-child { 
            margin-top: 0;
        }

        :host :first-child {
            margin-bottom: 0;
        }

        :host([spacing="s"]) {
            margin-top: var(--w-markdown--spacing-s--margin-top);
            margin-bottom: var(--w-markdown--spacing-s--margin-bottom);
        }

        /*
         * Headings
         */
        h1, h2, h3, h4, h5, h6 {
            margin: 1.2em 0 1em 0;
        }
        
        h1 {
            font-size: var(--w-font-size-text-800);
            font-weight: var(--w-font-weight-text-semibold);
        }
        
        h2 {
            font-size: var(--w-font-size-text-600);
            font-weight: var(--w-font-weight-text-semibold);
        }
        
        h3 {
            font-size: var(--w-font-size-text-500);
            font-weight: var(--w-font-weight-text-semibold);
        }
        
        h4 {
            font-size: var(--w-font-size-text-400);
            font-weight: var(--w-font-weight-text-semibold);
        }
        
        h5 {
            font-size: var(--w-font-size-text-400);
            font-weight: var(--w-font-weight-text-semibold);
            color: var(--w-muted-color);
        }
        
        h6 {
            font-size: var(--w-font-size-text-400);
            font-weight: var(--w-font-weight-text-regular);
            color: var(--w-muted-color);
            text-decoration: underline;
            
        }
        
        /*
         * Text content
         */
        p {
            line-height: 1.5em;
        }
        
        code {
            display: inline-block;
            font-family: var(--w-font-family-mono);
            font-weight: var(--w-font-weight-mono-regular);
            font-size: var(--w-font-size-mono-400);
        
            background-color: var(--w-background-color-600);
            padding: 0 var(--w-spacing-100);

            border: var(--w-border-width--thin) solid var(--w-background-color-800);
            border-radius: var(--w-border-radius-100);
        }
        
        section :first-child {
            margin-top: 0;
        }
    `;

    static properties = {
        spacing: {
            type: String,
            help: "The vertical spacing of the markdown block. Possible values are `none` and `s`."
        }
    };

    constructor() {
        super();
        this.spacing = "none";
    }

    render() {
        var wrapper = document.createElement('div');
        wrapper.innerHTML= (0,_directives_markdown_js__WEBPACK_IMPORTED_MODULE_1__.markdown)((0,_directives_dedent_js__WEBPACK_IMPORTED_MODULE_2__.dedent)(this.innerHTML).replace(/<\!--.*?-->/g, ""));
        return Array.from(wrapper.childNodes);
    }

}

customElements.define('w-markdown', WMarkdown);

/***/ }),

/***/ "./src/js/components/atoms/pane/pane.js":
/*!**********************************************!*\
  !*** ./src/js/components/atoms/pane/pane.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WPane": () => (/* binding */ WPane)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


class WPane extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        :host {
            display: block;
            border-radius: var(--w-pane--border-radius);
            overflow: hidden;
        }
        
        :host([spacing="s"]) {
            padding: var(--w-pane--spacing-s--padding);
        }

        :host([spacing="m"]) {
            padding: var(--w-pane--spacing-s--padding);
        }

        :host([elevation="500"]) {
            border: var(--w-pane--elevation-500--border-width) solid var(--w-pane--elevation-500--border-color);
        }
    `;

    static properties = {
        elevation: { 
            type: Number,
            help: "Indicates how much the pane should look 'elevated'. Possible values are `400`, `500` and `600`. Default is `500` which means no elevation."
        },

        spacing: {
            type: String,
            help: "The spacing of the inner content to the border of the pane (padding). Possible values are `none`, `s` and `m`."
        }
    }

    constructor() {
        super();
        this.elevation = 500;
        this.spacing = "none";
    }

    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html`
            <slot></slot>
        `;
    }

}

customElements.define('w-pane', WPane);

/***/ }),

/***/ "./src/js/components/atoms/paragraph/paragraph.js":
/*!********************************************************!*\
  !*** ./src/js/components/atoms/paragraph/paragraph.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WParagraph": () => (/* binding */ WParagraph)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class WParagraph extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        .size-100 {
            
        }
    `;

    static properties = {
        is: { 
            type: String,
            help: "The type of the tag. Possible values are `h1`, `h2`, `h3`, `h4`, `h5` or `h6`. Default is `h1`."
        }
    };

    constructor() {
        super();
        this.is = "h1";
    }

    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html`<p><slot></slot></p>`;
    }

}

customElements.define('w-p', WParagraph);

/***/ }),

/***/ "./src/js/components/atoms/pre/pre.js":
/*!********************************************!*\
  !*** ./src/js/components/atoms/pre/pre.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WPre": () => (/* binding */ WPre)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _directives_dedent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../directives/dedent.js */ "./src/js/directives/dedent.js");



class WPre extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        :host {
            display: block;
            background-color: var(--w-pre--background-color);
        }

        pre {
            padding: var(--w-pre--padding);
            font-family: var(--w-pre--font-family);
            font-size: var(--w-pre--font-size);
            color: var(--w-pre--color);

            margin: 0;
        }
    `

    static properties = {
        content: {
            type: String,
            help: "Attribute to pass the content of the attribute"
        }
    };

    constructor() {
        super();
        this.content = undefined;
    }

    render() {
        let content = this.content ? this.content : this.innerHTML;
        content = (0,_directives_dedent_js__WEBPACK_IMPORTED_MODULE_1__.dedent)(content);

        return lit__WEBPACK_IMPORTED_MODULE_0__.html`
            <pre><code>${content}</code></pre>
        `
    }

}

customElements.define('w-pre', WPre);

/***/ }),

/***/ "./src/js/components/atoms/tabs/tabs.js":
/*!**********************************************!*\
  !*** ./src/js/components/atoms/tabs/tabs.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WTab": () => (/* binding */ WTab),
/* harmony export */   "WTabPane": () => (/* binding */ WTabPane),
/* harmony export */   "WTabPaneItem": () => (/* binding */ WTabPaneItem),
/* harmony export */   "WTabs": () => (/* binding */ WTabs)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class WTabs extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        :host {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;

            border-bottom: var(--w-tabs--border-bottom-width) solid var(--w-tabs--contrast--border-bottom-color);
            background-color: var(--w-tabs--contrast--background-color);
        }

        :host ::slotted(w-tab) {
            --w-tab--background-color: var(--w-tabs--contrast--tab--background-color);
            --w-tab--hover--background-color: var(--w-tabs--contrast--tab--hover--background-color);
            --w-tab--border-bottom-color: var(--w-tabs--contrast--tab--border-bottom-color);
            --w-tab--border-right-color: var(--w-tabs--contrast--tab--border-right-color);
            --w-tab--color: var(--w-tabs--contrast--tab--color);
            --w-tab--hover--color: var(--w-tabs--contrast--tab--hover--color);
        }

        :host ::slotted(w-tab[active]) {
            --w-tab--background-color: var(--w-tabs--contrast--tab--active--background-color);
            --w-tab--border-bottom-color: var(--w-tabs--contrast--tab--active--border-bottom-color);
            --w-tab--hover--background-color: var(--w-tabs--contrast--tab--active--background-color);
            --w-tab--color: var(--w-tabs--contrast--tab--active--color);
            --w-tab--hover--color: var(--w-tabs--contrast--tab--active--color);
        }

        :host([appearance="light-contrast"]) {
            border-bottom: var(--w-tabs--border-bottom-width) solid var(--w-tabs--light-contrast--border-bottom-color);
            background-color: var(--w-tabs--light-contrast--background-color);
        }

        :host([appearance="light-contrast"]) ::slotted(w-tab) {
            --w-tab--background-color: var(--w-tabs--light-contrast--tab--background-color);
            --w-tab--hover--background-color: var(--w-tabs--light-contrast--tab--hover--background-color);
            --w-tab--border-bottom-color: var(--w-tabs--light-contrast--tab--border-bottom-color);
            --w-tab--border-right-color: var(--w-tabs--light-contrast--tab--border-right-color);
            --w-tab--color: var(--w-tabs--light-contrast--tab--color);
            --w-tab--hover--color: var(--w-tabs--light-contrast--tab--hover--color);
        }

        :host([appearance="light-contrast"]) ::slotted(w-tab[active]) {
            --w-tab--background-color: var(--w-tabs--light-contrast--tab--active--background-color);
            --w-tab--border-bottom-color: var(--w-tabs--light-contrast--tab--active--border-bottom-color);
            --w-tab--hover--background-color: var(--w-tabs--light-contrast--tab--active--background-color);
            --w-tab--color: var(--w-tabs--light-contrast--tab--active--color);
            --w-tab--hover--color: var(--w-tabs--light-contrast--tab--active--color);
        }

        :host([appearance="shaded"]) {
            border-bottom: var(--w-tabs--border-bottom-width) solid var(--w-tabs--shaded--border-bottom-color);
            background-color: var(--w-tabs--shaded--background-color);
        }
        
        :host([appearance="shaded"]) ::slotted(w-tab) {
            --w-tab--background-color: var(--w-tabs--shaded--tab--background-color);
            --w-tab--hover--background-color: var(--w-tabs--shaded--tab--hover--background-color);
            --w-tab--border-bottom-color: var(--w-tabs--shaded--tab--border-bottom-color);
            --w-tab--border-right-color: var(--w-tabs--shaded--tab--border-right-color);
            --w-tab--color: var(--w-tabs--shaded--tab--color);
            --w-tab--hover--color: var(--w-tabs--shaded--tab--hover--color);
        }
        
        :host([appearance="shaded"]) ::slotted(w-tab[active]) {
            --w-tab--background-color: var(--w-tabs--shaded--tab--active--background-color);
            --w-tab--border-bottom-color: var(--w-tabs--shaded--tab--active--border-bottom-color);
            --w-tab--hover--background-color: var(--w-tabs--shaded--tab--active--background-color);
            --w-tab--color: var(--w-tabs--shaded--tab--active--color);
            --w-tab--hover--color: var(--w-tabs--shaded--tab--active--color);
        }
    `;

    static properties = {
        appearance: { 
            type: String,
            help: "The appearance of the navbar. Possible values are `contrast`, `light-contrast` and `shaded`."
        },
        active: {
            type: Boolean,
            help: "Whether the tab should be displayed as active."
        }
    };

    _handleClick(e) {
        e.preventDefault();

        if (e.target.nodeName.toLowerCase() == "w-tab") {
            const tab = e.target.getAttribute("name") || e.target.innerHTML;
            this.dispatchEvent(new CustomEvent("w-tabs-changed", { detail: { value: tab }, bubbles: true, composed: true }))
        }
    }

    constructor() {
        super();
        this.appearance = "contrast";

        this.addEventListener('click', this._handleClick);
    }

    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html`<slot></slot>`
    }

}

class WTab extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        :host {
            display: block;
        }

        a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 var(--w-tab--padding-right) 0 var(--w-tab--padding-left);

            text-decoration: none;
            transition: var(--w-tabs--transition);
            transition-property: color, background-color;

            border-right: var(--w-tabs--border-right-width) solid var(--w-tab--border-right-color);
            border-bottom: var(--w-tabs--border-bottom-width) solid var(--w-tab--border-bottom-color);
            margin-bottom: calc(-1 * var(--w-tabs--border-bottom-width));
            height: var(--w-tabs--height);

            background-color: var(--w-tab--background-color);
            color: var(--w-tab--color);
        }

        a:hover {
            background-color: var(--w-tab--hover--background-color);
            color: var(--w-tab--hover--color);
        }
    `;

    static properties = {
        active: {
            type: Boolean,
            help: "Specifies whether the tab should be displayed as active."
        },
        name: {
            type: String,
            help: "The name of the tab. This name will be used when dispatching events from Tabs component."
        }
    };

    constructor() {
        super();
        this.name = "";
    }

    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html`<a href="#"><slot></slot></a>`
    }

}

class WTabPane extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

    static properties = {
        active: {
            type: String,
            help: "The id of the active element."
        },
        appearance: { 
            type: String,
            help: "The appearance of the navbar. Possible values are `contrast`, `light-contrast` and `shaded`."
        }
    };

    constructor() {
        super();
        this.name = "";
        this.appearance = "contrast";
        this.active = "";

        const self = this;

        this.addEventListener("w-tabs-changed", e => {
            if (e.detail.value) {
                self.active = e.detail.value;
            }
        });
    }

    _renderTab(tab) {
        const name = tab.getAttribute('slot');
        const label = tab.getAttribute('label');

        if (!name) {
            name = "";
        }

        return lit__WEBPACK_IMPORTED_MODULE_0__.html`
            <w-tab 
                name="${name}"
                ?active=${this.active.toLowerCase() == name.toLowerCase()}>

                ${label}
            </w-tab>
        `;
    }

    _renderContent(tabs) {
        const selected = tabs.filter(tab => tab.getAttribute('slot') && tab.getAttribute('slot').toLowerCase() == this.active.toLowerCase())

        if (selected.length > 0) {
            return lit__WEBPACK_IMPORTED_MODULE_0__.html`<slot name="${selected[0].getAttribute('slot')}"></slot>`;
        }
    }

    render() {
        const tabs = Array.from(this.querySelectorAll("w-tabpane-item"));

        return lit__WEBPACK_IMPORTED_MODULE_0__.html`
            <w-tabs appearance="${this.appearance}">
                ${tabs.map(tab => this._renderTab(tab))}
            </w-tabs>

            ${this._renderContent(tabs)}
        `;
    }

}

class WTabPaneItem extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

    static properties = {
        slot: {
            type: String,
            help: "The name of the tab. This name will be used when dispatching events from Tabs component."
        },
        label: {
            type: String,
            help: "The label of the tab, as shown on the tab bar."
        }
    };

    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html`<slot></slot>`
    }

}

customElements.define('w-tabs', WTabs);
customElements.define('w-tab', WTab);
customElements.define('w-tabpane', WTabPane);
customElements.define('w-tabpane-item', WTabPaneItem);

/***/ }),

/***/ "./src/js/components/atoms/text-input/text-input.js":
/*!**********************************************************!*\
  !*** ./src/js/components/atoms/text-input/text-input.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WTextInput": () => (/* binding */ WTextInput)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _directives_classnames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../directives/classnames.js */ "./src/js/directives/classnames.js");



class WTextInput extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        div {
            display: inline-flex;
            border-bottom: 2px solid var(--muted-color);
            transition: all 300ms linear;
        }

        input {
            display: border-box;
            border: none;
            color: var(--text-color);
            padding: calc(0.7rem - 1px);
            flex-grow: 1;
        }

        div.invalid {
            border-bottom-color: var(--danger-color);
        }

        div.invalid input {
            color: var(--danger-color);
        }

        div.block {
            display: flex;
            width: 100%;
        }

        div.focus,
        div.invalid.focus {
            border-bottom-color: var(--primary-color);
        }

        div input:focus,
        div.invalid input:focus {
            outline: none;
        }

        input:disabled {
            cursor: auto;
        }

        button.action {
            border: none;
            cursor: pointer;

            opacity: 0.7;
            transition: all 300ms linear;
        }

        button.action:hover {
            opacity: 1;
        }

        button.action.clear {
            background: var(--icon-close) center no-repeat;
            background-size: 10px 10px;
            width: calc(10px + 2*0.7rem - 1px);
        }

        button.action.show {
            background: var(--icon-eye) center no-repeat;
            background-size: 15px 15px;
            width: calc(15px + 2*0.7rem - 1px);
        }
    `;

    static properties = {
        kind: { type: String },
        value: { type: String },
        placeholder: { type: String },

        invalid: { type: Boolean },
        disabled: { type: Boolean },
        block: { type: Boolean },

        clearable: { type: Boolean },

        focus: {
            type: Boolean,
            attribute: false
        },

        passwordVisible: {
            type: Boolean,
            attribute: false
        }
    };

    constructor() {
        super();
        this.kind = "text";
        this.value = "";
        this.paceholder = "";
        this.invalid = false;
        this.disabled = false;
        this.block = false;
        this.passwordVisible = false;
    }

    clear() {
        this.value = "";
        this.renderRoot?.querySelector('input').focus();
    }

    toggleVisibility() {
        this.passwordVisible = !this.passwordVisible;
    }

    getKind() {
        if (this.kind == "password" && this.passwordVisible) {
            return "text";
        } else {
            return this.kind;
        }
    }

    onBlur(e) {
        this.focus = false;
        this.value = e.target.value;
    }

    onFocus(e) {
        this.focus = true;
    }

    onInput(e) {
        this.value = e.target.value;
    }

    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html`
            <div class=${(0,_directives_classnames_js__WEBPACK_IMPORTED_MODULE_1__.classnames)({ "invalid": this.invalid, "block": this.block, "disabled": this.disabled, "focus": this.focus })}>
                <input 
                    type="${this.getKind()}" 
                    placeholder="${this.placeholder}" 
                    
                    ?disabled=${this.disabled}

                    .value="${this.value}"
                    
                    @focus=${this.onFocus}
                    @blur=${this.onBlur}
                    @input=${this.onInput}>
                </input>
                ${ this.clearable && lit__WEBPACK_IMPORTED_MODULE_0__.html`<button class="action clear" @click=${this.clear}></button>` || lit__WEBPACK_IMPORTED_MODULE_0__.html`` }
                ${ this.kind == "password" && lit__WEBPACK_IMPORTED_MODULE_0__.html`<button class="action show" @click=${this.toggleVisibility}></button>` || lit__WEBPACK_IMPORTED_MODULE_0__.html`` }
            </div>
        `;
    }

}

customElements.define('w-text-input', WTextInput);

/***/ }),

/***/ "./src/js/components/layout/container/container.js":
/*!*********************************************************!*\
  !*** ./src/js/components/layout/container/container.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WContainer": () => (/* binding */ WContainer)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


class WContainer extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        div.container,
        div.container-fluid {
            width: 100%;
            margin-right: auto;
            margin-left: auto;
            padding-right: var(--container--content-spacing);
            padding-left: var(--container--content-spacing);

            font-family: var(--font-family);
            box-sizing: border-box;
        }

        @media (min-width: 576px) {
            div.container {
                max-width: 510px;
                padding-right: 0;
                padding-left: 0;
            }
        }

        @media (min-width: 768px) {
            div.container {
                max-width: 700px;
            }
        }

        @media (min-width: 992px) {
            div.container {
                max-width: 920px;
            }
        }

        @media (min-width: 1200px) {
            div.container {
                max-width: 1130px;
            }
        }
    `;

    static properties = {
      fluid: false
    };
  
    constructor() {
      super();
    }
  
    render() {
      return lit__WEBPACK_IMPORTED_MODULE_0__.html`
        <div class="${this.fluid ? 'container-fluid' : 'container'}">
            <slot></slot>
        </div>
      `;
    }

}
  
customElements.define('w-container', WContainer);

/***/ }),

/***/ "./src/js/components/layout/fixed-header/fixed-header.js":
/*!***************************************************************!*\
  !*** ./src/js/components/layout/fixed-header/fixed-header.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WFixedHeader": () => (/* binding */ WFixedHeader)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _directives_classnames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../directives/classnames.js */ "./src/js/directives/classnames.js");



class WFixedHeader extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        :host { 
            min-height: 100vh;

            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }

        header {
            position: sticky;
            top: 0;
            overflow: auto;

            flex-grow: 0;
        }

        main {
            flex-grow: 1;

            display: flex;
            dlex-direction: row;
            justify-content: flex-start;
        }

        nav {
            flex-grow: 0;
            margin: var()
            display: flex;
        }

        nav ::slotted(*) {
            flex-grow: 1;
            height: 100%;
        }

        article {
            flex-grow: 1;
            max-width: var(--w-fixed-header--article-max-width);
        }

        article.spacing-s {
            margin: var(--w-fixed-header--spacing-s--horizontal-spacing) var(--w-fixed-header--spacing-s--vertical-spacing);
        }

        article.spacing-m {
            margin: var(--w-fixed-header--spacing-m--horizontal-spacing) var(--w-fixed-header--spacing-m--vertical-spacing);
        }

        aside {
            flex-grow: 0;
            background-color: #00ff00;
        }
      
        footer {
            background-color: var(--muted-color);
            overflow: auto;

            margin-top: auto;
            flex-grow: 0;
        }
    `

    static properties = {
        spacing: {
            type: String,
            help: "Specifies spacings (margins, paddings, ...). Possible values are `s`, `m` and `none`."
        }
    };

    constructor() {
        super();
        this.spacing = "s";
    }


    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html`
            <header>
                <slot name="header"></slot>
            </header>
            
            <main>
                <nav>
                    <slot name="nav"></slot>
                </nav>

                <article 
                    class=${(0,_directives_classnames_js__WEBPACK_IMPORTED_MODULE_1__.classnames)({["spacing-" + this.spacing]: true })}>

                    <slot name="article"></slot>
                </article>

                <aside
                    class=${(0,_directives_classnames_js__WEBPACK_IMPORTED_MODULE_1__.classnames)({["spacing-" + this.spacing]: true })}>

                    <slot name="aside"></slot>
                </aside>
            </main>

            <footer>
                <slot name="footer"></slot>
            </footer>
        `
    }
}

customElements.define('w-fixed-header', WFixedHeader);

/***/ }),

/***/ "./src/js/components/layout/grid/grid.js":
/*!***********************************************!*\
  !*** ./src/js/components/layout/grid/grid.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WGrid": () => (/* binding */ WGrid),
/* harmony export */   "WGridItem": () => (/* binding */ WGridItem)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


class WGrid extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        :host {
            display: grid;
            grid-template-columns: var(--w-grid-template-columns);
        }

        ::slotted(w-grid-item) { grid-column-start: span 1; }
        ::slotted(w-grid-item[col="1"]) { grid-column-start: span 1; }
        ::slotted(w-grid-item[col="2"]) { grid-column-start: span 2; }
        ::slotted(w-grid-item[col="3"]) { grid-column-start: span 3; }
        ::slotted(w-grid-item[col="4"]) { grid-column-start: span 4; }
        ::slotted(w-grid-item[col="5"]) { grid-column-start: span 5; }
        ::slotted(w-grid-item[col="6"]) { grid-column-start: span 6; }
        ::slotted(w-grid-item[col="7"]) { grid-column-start: span 7; }
        ::slotted(w-grid-item[col="8"]) { grid-column-start: span 8; }
        ::slotted(w-grid-item[col="9"]) { grid-column-start: span 9; }
        ::slotted(w-grid-item[col="10"]) { grid-column-start: span 10; }
        ::slotted(w-grid-item[col="11"]) { grid-column-start: span 11; }
        ::slotted(w-grid-item[col="12"]) { grid-column-start: span 12; }
        ::slotted(w-grid-item[col="13"]) { grid-column-start: span 13; }
        ::slotted(w-grid-item[col="14"]) { grid-column-start: span 14; }
        ::slotted(w-grid-item[col="15"]) { grid-column-start: span 15; }
        ::slotted(w-grid-item[col="16"]) { grid-column-start: span 16; }

        @media screen and (min-width: 576px) {
            ::slotted(w-grid-item[sm="1"]) { grid-column-start: span 1; }
            ::slotted(w-grid-item[sm="2"]) { grid-column-start: span 2; }
            ::slotted(w-grid-item[sm="3"]) { grid-column-start: span 3; }
            ::slotted(w-grid-item[sm="4"]) { grid-column-start: span 4; }
            ::slotted(w-grid-item[sm="5"]) { grid-column-start: span 5; }
            ::slotted(w-grid-item[sm="6"]) { grid-column-start: span 6; }
            ::slotted(w-grid-item[sm="7"]) { grid-column-start: span 7; }
            ::slotted(w-grid-item[sm="8"]) { grid-column-start: span 8; }
            ::slotted(w-grid-item[sm="9"]) { grid-column-start: span 9; }
            ::slotted(w-grid-item[sm="10"]) { grid-column-start: span 10; }
            ::slotted(w-grid-item[sm="11"]) { grid-column-start: span 11; }
            ::slotted(w-grid-item[sm="12"]) { grid-column-start: span 12; }
            ::slotted(w-grid-item[sm="13"]) { grid-column-start: span 13; }
            ::slotted(w-grid-item[sm="14"]) { grid-column-start: span 14; }
            ::slotted(w-grid-item[sm="15"]) { grid-column-start: span 15; }
            ::slotted(w-grid-item[sm="16"]) { grid-column-start: span 16; }
        }

        @media screen and (min-width: 768px) {
            ::slotted(w-grid-item[md="1"]) { grid-column-start: span 1; }
            ::slotted(w-grid-item[md="2"]) { grid-column-start: span 2; }
            ::slotted(w-grid-item[md="3"]) { grid-column-start: span 3; }
            ::slotted(w-grid-item[md="4"]) { grid-column-start: span 4; }
            ::slotted(w-grid-item[md="5"]) { grid-column-start: span 5; }
            ::slotted(w-grid-item[md="6"]) { grid-column-start: span 6; }
            ::slotted(w-grid-item[md="7"]) { grid-column-start: span 7; }
            ::slotted(w-grid-item[md="8"]) { grid-column-start: span 8; }
            ::slotted(w-grid-item[md="9"]) { grid-column-start: span 9; }
            ::slotted(w-grid-item[md="10"]) { grid-column-start: span 10; }
            ::slotted(w-grid-item[md="11"]) { grid-column-start: span 11; }
            ::slotted(w-grid-item[md="12"]) { grid-column-start: span 12; }
            ::slotted(w-grid-item[md="13"]) { grid-column-start: span 13; }
            ::slotted(w-grid-item[md="14"]) { grid-column-start: span 14; }
            ::slotted(w-grid-item[md="15"]) { grid-column-start: span 15; }
            ::slotted(w-grid-item[md="16"]) { grid-column-start: span 16; }
        }

        @media screen and (min-width: 992px) {
            ::slotted(w-grid-item[lg="1"]) { grid-column-start: span 1; }
            ::slotted(w-grid-item[lg="2"]) { grid-column-start: span 2; }
            ::slotted(w-grid-item[lg="3"]) { grid-column-start: span 3; }
            ::slotted(w-grid-item[lg="4"]) { grid-column-start: span 4; }
            ::slotted(w-grid-item[lg="5"]) { grid-column-start: span 5; }
            ::slotted(w-grid-item[lg="6"]) { grid-column-start: span 6; }
            ::slotted(w-grid-item[lg="7"]) { grid-column-start: span 7; }
            ::slotted(w-grid-item[lg="8"]) { grid-column-start: span 8; }
            ::slotted(w-grid-item[lg="9"]) { grid-column-start: span 9; }
            ::slotted(w-grid-item[lg="10"]) { grid-column-start: span 10; }
            ::slotted(w-grid-item[lg="11"]) { grid-column-start: span 11; }
            ::slotted(w-grid-item[lg="12"]) { grid-column-start: span 12; }
            ::slotted(w-grid-item[lg="13"]) { grid-column-start: span 13; }
            ::slotted(w-grid-item[lg="14"]) { grid-column-start: span 14; }
            ::slotted(w-grid-item[lg="15"]) { grid-column-start: span 15; }
            ::slotted(w-grid-item[lg="16"]) { grid-column-start: span 16; }
        }

        @media screen and (min-width: 1200px) {
            ::slotted(w-grid-item[xl="1"]) { grid-column-start: span 1; }
            ::slotted(w-grid-item[xl="2"]) { grid-column-start: span 2; }
            ::slotted(w-grid-item[xl="3"]) { grid-column-start: span 3; }
            ::slotted(w-grid-item[xl="4"]) { grid-column-start: span 4; }
            ::slotted(w-grid-item[xl="5"]) { grid-column-start: span 5; }
            ::slotted(w-grid-item[xl="6"]) { grid-column-start: span 6; }
            ::slotted(w-grid-item[xl="7"]) { grid-column-start: span 7; }
            ::slotted(w-grid-item[xl="8"]) { grid-column-start: span 8; }
            ::slotted(w-grid-item[xl="9"]) { grid-column-start: span 9; }
            ::slotted(w-grid-item[xl="10"]) { grid-column-start: span 10; }
            ::slotted(w-grid-item[xl="11"]) { grid-column-start: span 11; }
            ::slotted(w-grid-item[xl="12"]) { grid-column-start: span 12; }
            ::slotted(w-grid-item[xl="13"]) { grid-column-start: span 13; }
            ::slotted(w-grid-item[xl="14"]) { grid-column-start: span 14; }
            ::slotted(w-grid-item[xl="15"]) { grid-column-start: span 15; }
            ::slotted(w-grid-item[xl="16"]) { grid-column-start: span 16; }
        }

        @media screen and (min-width: 1400px) {
            ::slotted(w-grid-item[xxl="1"]) { grid-column-start: span 1; }
            ::slotted(w-grid-item[xxl="2"]) { grid-column-start: span 2; }
            ::slotted(w-grid-item[xxl="3"]) { grid-column-start: span 3; }
            ::slotted(w-grid-item[xxl="4"]) { grid-column-start: span 4; }
            ::slotted(w-grid-item[xxl="5"]) { grid-column-start: span 5; }
            ::slotted(w-grid-item[xxl="6"]) { grid-column-start: span 6; }
            ::slotted(w-grid-item[xxl="7"]) { grid-column-start: span 7; }
            ::slotted(w-grid-item[xxl="8"]) { grid-column-start: span 8; }
            ::slotted(w-grid-item[xxl="9"]) { grid-column-start: span 9; }
            ::slotted(w-grid-item[xxl="10"]) { grid-column-start: span 10; }
            ::slotted(w-grid-item[xxl="11"]) { grid-column-start: span 11; }
            ::slotted(w-grid-item[xxl="12"]) { grid-column-start: span 12; }
            ::slotted(w-grid-item[xxl="13"]) { grid-column-start: span 13; }
            ::slotted(w-grid-item[xxl="14"]) { grid-column-start: span 14; }
            ::slotted(w-grid-item[xxl="15"]) { grid-column-start: span 15; }
            ::slotted(w-grid-item[xxl="16"]) { grid-column-start: span 16; }
        }

        @media screen and (min-width: 2600px) {
            ::slotted(w-grid-item[xxxl="1"]) { grid-column-start: span 1; }
            ::slotted(w-grid-item[xxxl="2"]) { grid-column-start: span 2; }
            ::slotted(w-grid-item[xxxl="3"]) { grid-column-start: span 3; }
            ::slotted(w-grid-item[xxxl="4"]) { grid-column-start: span 4; }
            ::slotted(w-grid-item[xxxl="5"]) { grid-column-start: span 5; }
            ::slotted(w-grid-item[xxxl="6"]) { grid-column-start: span 6; }
            ::slotted(w-grid-item[xxxl="7"]) { grid-column-start: span 7; }
            ::slotted(w-grid-item[xxxl="8"]) { grid-column-start: span 8; }
            ::slotted(w-grid-item[xxxl="9"]) { grid-column-start: span 9; }
            ::slotted(w-grid-item[xxxl="10"]) { grid-column-start: span 10; }
            ::slotted(w-grid-item[xxxl="11"]) { grid-column-start: span 11; }
            ::slotted(w-grid-item[xxxl="12"]) { grid-column-start: span 12; }
            ::slotted(w-grid-item[xxxl="13"]) { grid-column-start: span 13; }
            ::slotted(w-grid-item[xxxl="14"]) { grid-column-start: span 14; }
            ::slotted(w-grid-item[xxxl="15"]) { grid-column-start: span 15; }
            ::slotted(w-grid-item[xxxl="16"]) { grid-column-start: span 16; }
        }
    `;
  
    constructor() {
      super();
    }
  
    render() {
      return lit__WEBPACK_IMPORTED_MODULE_0__.html`
        <slot></slot>
      `;
    }

}

class WGridItem extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        
    `;

    static properties = {
        col: { 
            type: Number,
            help: "Number of column span for `max-width=None`. Default is `1`."
        },

        sm: { 
            type: Number,
            help: "Number of column span for `max-width > var(--w-breakpoint-sm)`."
        },

        md: { 
            type: Number,
            help: "Number of column span for `max-width > var(--w-breakpoint-md)`."
        },

        lg: { 
            type: Number,
            help: "Number of column span for `max-width > var(--w-breakpoint-lg)`."
        },

        xl: { 
            type: Number,
            help: "Number of column span for `max-width > var(--w-breakpoint-xl)`."
        },

        xxl: { 
            type: Number,
            help: "Number of column span for `max-width > var(--w-breakpoint-xxl)`."
        },

        xxxl: { 
            type: Number,
            help: "Number of column span for `max-width > var(--w-breakpoint-xxxl)`."
        }
    };

    constructor() {
        super();
      }
    
    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html`
            <slot></slot>
        `;
    }
}
  
customElements.define('w-grid', WGrid);
customElements.define('w-grid-item', WGridItem);

/***/ }),

/***/ "./src/js/components/molecules/brand/brand.js":
/*!****************************************************!*\
  !*** ./src/js/components/molecules/brand/brand.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WBrand": () => (/* binding */ WBrand)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _directives_classnames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../directives/classnames.js */ "./src/js/directives/classnames.js");



class WBrand extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        a {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            text-decoration: none;            
            transition: all 300ms linear;

            margin: 0;
            padding: 0;
        }

        a.contrast {
            color: var(--w-brand--contrast--color);
        }

        a.contrast:hover {
            color: var(--w-brand--contrast--hover--color);
        }

        a.shaded {
            color: var(--w-brand--shaded--color);
        }

        a.shaded:hover {
            color: var(--w-brand--shaded--hover--color);
        }

        img {
            height: var(--w-brand--logo--height);
            margin-right: var(--w-brand--logo--margin-right);
        }

        span {
            display: block;
        }

        span.brand {
            font-weight: var(--w-brand--font-weight);
        }
    `

    static properties = {
        app: { 
            type: String,
            help: "The name of the application."
        },
        appearance: { 
            type: String,
            help: "The appearance of the navbar. Possible values are `contrast` and `shaded`."
        },
        brand: { 
            type: String,
            help: "The name of the brand."
        },
        href: {
            type: String,
            help: "The target location when pressing the brand. Usually home page. Default is `/`."
        },
        logo: { 
            type: String,
            help: "Optional. The URL of a logo to be displayed."
        }
    };

    constructor() {
        super();
        this.brand = "";
        this.app = "";
        this.logo = "";
        this.appearance = "contrast";
        this.href = "/";
    }

    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html`
            <a 
                href="${this.href}"
                class=${(0,_directives_classnames_js__WEBPACK_IMPORTED_MODULE_1__.classnames)({ [this.appearance]: true })}>
                    <img src="${this.logo}" />
                    <span class="brand">${this.brand}&nbsp;</span><span class="app">${this.app}</span>
            </a>
        `
    }
}

customElements.define('w-brand', WBrand);

/***/ }),

/***/ "./src/js/components/molecules/css-rules-table/css-rules-table.js":
/*!************************************************************************!*\
  !*** ./src/js/components/molecules/css-rules-table/css-rules-table.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WCSSRulesTable": () => (/* binding */ WCSSRulesTable)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


class WCSSRulesTable extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        table {
            width: 100%;
            border-spacing: 0;

            margin-bottom: var(--w-spacing-500);
        }
        
        thead tr {
            background-color: var(--w-background-color-500);
        }
        
        thead th,
        tbody td {
            padding: var(--w-spacing-400);
            border: var(--w-border-width--thin) solid var(--w-background-color-800);
            text-align: left;
        }
        
        thead th {
            color: var(--w-muted-color);
            text-transform: uppercase;
        }
        
        thead th:not(:last-child) {
            border-right: none;
        }
        
        thead th:not(:first-child) {
            border-left: none;
        }
        
        tbody tr:not(:last-child) {
            border-bottom: none;
        }
    `;

    static properties = {
        elementName: {
            type: String,
            help: "The name of the element to display the CSS variables."
        }
    };

    constructor() {
        super();
        this.elementName = "w-heading";
    }

    _renderRow(cssVars, variable, defaultValue) {
        defaultValue = "`" + defaultValue + "`";

        if (!variable.endsWith("--help")) {
            return lit__WEBPACK_IMPORTED_MODULE_0__.html`
                <tr>
                    <td>${variable}</td>
                    <td><w-markdown spacing="none">${defaultValue}</w-markdown></td>
                    <td><w-markdown spacing="none">${cssVars[variable + "--help"] ? cssVars[variable + "--help"].substring(1, cssVars[variable + "--help"].length - 1) : ""}</w-markdown></td>
                </tr>
            `
        }
    }

    _getAllCSSVariableNames(styleSheets = document.styleSheets) {
        var cssVars = {};
        // loop each stylesheet
        for (var i = 0; i < styleSheets.length; i++) {
            // loop stylesheet's cssRules
            try { // try/catch used because 'hasOwnProperty' doesn't work
                for (var j = 0; j < styleSheets[i].cssRules.length; j++) {
                    try {
                        // loop stylesheet's cssRules' style (property names)
                        if (styleSheets[i].cssRules[j].styleSheet) {
                            const vars = this._getAllCSSVariableNames([styleSheets[i].cssRules[j].styleSheet]);
                            cssVars = { ...cssVars, ...vars }
                        } else {
                            const re = /(--w-[a-zA-Z0-9-]*): ([^;]+)/g
                            const matches = Array.from(styleSheets[i].cssRules[j].cssText.matchAll(re));

                            matches.forEach(match => {
                                if (match[1].startsWith("--" + this.elementName)) {
                                    cssVars[match[1]] = match[2];
                                }
                            })
                        }
                    } catch (error) { }
                }
            } catch (error) { }
        }

        return cssVars;
    }

    render() {
        var cssVars = this._getAllCSSVariableNames();

        return lit__WEBPACK_IMPORTED_MODULE_0__.html`<table>
            <thead>
                <tr>
                    <th>Variable</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>

            <tbody>
                ${ Object.keys(cssVars).map((variable) => this._renderRow(cssVars, variable, cssVars[variable])) }
            </tbody>
        </table>`
    }

}

customElements.define('w-css-rules-table', WCSSRulesTable);

/***/ }),

/***/ "./src/js/components/molecules/element-example/element-example.js":
/*!************************************************************************!*\
  !*** ./src/js/components/molecules/element-example/element-example.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WElementExample": () => (/* binding */ WElementExample)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


class WElementExample extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        
    `

    static properties = {
        preview: {
            type: Boolean,
            help: "If true, the code of the example will be displayed."
        }
    };

    constructor() {
        super();
        this.preview = false;
    }

    _bttShowCode_onClick() {
        this.preview = !this.preview;
    }

    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html`
            <w-pane elevation="500">
                <w-pane spacing="s">
                    <slot></slot>
                </w-pane>

                ${ this.preview ? lit__WEBPACK_IMPORTED_MODULE_0__.html`<w-pre content="${this.innerHTML}"></w-pre>` : lit__WEBPACK_IMPORTED_MODULE_0__.html`` }
            </w-pane>

            <w-button label="${ this.preview ? 'Hide code' : 'Show code' }" size="sm" @click="${this._bttShowCode_onClick}"></w-button>
        `
    }

}

customElements.define('w-element-example', WElementExample);

/***/ }),

/***/ "./src/js/components/molecules/element-properties-table/element-properties-table.js":
/*!******************************************************************************************!*\
  !*** ./src/js/components/molecules/element-properties-table/element-properties-table.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WPropertiesTable": () => (/* binding */ WPropertiesTable)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _atoms_heading_heading_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/heading/heading.js */ "./src/js/components/atoms/heading/heading.js");




class WPropertiesTable extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        table {
            width: 100%;
            border-spacing: 0;

            margin-bottom: var(--w-spacing-500);
        }
        
        thead tr {
            background-color: var(--w-background-color-500);
        }
        
        thead th,
        tbody td {
            padding: var(--w-spacing-400);
            border: var(--w-border-width--thin) solid var(--w-background-color-800);
            text-align: left;
        }
        
        thead th {
            color: var(--w-muted-color);
            text-transform: uppercase;
        }
        
        thead th:not(:last-child) {
            border-right: none;
        }
        
        thead th:not(:first-child) {
            border-left: none;
        }
        
        tbody tr:not(:last-child) {
            border-bottom: none;
        }
    `;

    static properties = {
        className: {
            type: String,
            help: "The name of the classname to display the properties."
        }
    };

    constructor() {
        super();
        this.className = "WHeading";
    }

    _getComponentClass() {
        switch (this.className) {
            case "WHeading":
                return _atoms_heading_heading_js__WEBPACK_IMPORTED_MODULE_1__.WHeading;
        }
    }

    _renderRow(property, settings) {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html`
            <tr>
                <td>${property}</td>
                <td>${settings["type"].name}</td>
                <td><w-markdown spacing="none">${settings["help"]}</w-markdown></td>
            </tr>
        `
    }

    render() {
        const clazz = this._getComponentClass(this.className);   
        
        return lit__WEBPACK_IMPORTED_MODULE_0__.html`<table>
            <thead>
                <tr>
                    <th>Property</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
            </thead>

            <tbody>
                ${ Object.keys(clazz.properties).map((property) => this._renderRow(property, clazz.properties[property])) }
            </tbody>
        </table>`;
    }

}

customElements.define('w-element-properties-table', WPropertiesTable);

/***/ }),

/***/ "./src/js/components/molecules/horizontal-nav/horizontal-nav.js":
/*!**********************************************************************!*\
  !*** ./src/js/components/molecules/horizontal-nav/horizontal-nav.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WHorizontalNav": () => (/* binding */ WHorizontalNav)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _directives_classnames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../directives/classnames.js */ "./src/js/directives/classnames.js");



class WHorizontalNav extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        :host {
            display: block;
        }

        nav {
            display: flex;

            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            height: 100%;
        }

        nav ::slotted(a) {
            display: inline-block;
            margin-right: var(--w-spacing-500);

            text-decoration: none;
            transition: all 300ms linear;
        }

        nav.contrast ::slotted(a) {
            color: var(--w-horizontal-nav--contrast--color);
        }

        nav.contrast ::slotted(a:hover) {
            color: var(--w-horizontal-nav--contrast--hover--color);
        }

        nav.contrast ::slotted(a:active),
        nav.contrast ::slotted(a.w-active) {
            color: var(--w-horizontal-nav--contrast--active--color);
        }

        nav.shaded ::slotted(a) {
            color: var(--w-horizontal-nav--shaded--color);
        }

        nav.shaded ::slotted(a:hover) {
            color: var(--w-horizontal-nav--shaded--hover--color);
        }

        nav.shaded ::slotted(a:active),
        nav.shaded ::slotted(a.w-active) {
            color: var(--w-horizontal-nav--shaded--active--color);
        }
    `

    static properties = {
        appearance: { 
            type: String,
            help: "The appearance of the navbar. Possible values are `contrast` and `shaded`."
        }
    };

    constructor() {
        super();
        this.appearance = "contrast";
    }

    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html`
            <nav
                class=${(0,_directives_classnames_js__WEBPACK_IMPORTED_MODULE_1__.classnames)({ 
                    [this.appearance]: true
                })}>

                <slot name="item"></slot>
            </nav>
        `
    }
}

customElements.define('w-horizontal-nav', WHorizontalNav);

/***/ }),

/***/ "./src/js/components/molecules/vertical-nav/vertical-nav.js":
/*!******************************************************************!*\
  !*** ./src/js/components/molecules/vertical-nav/vertical-nav.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WVerticalNav": () => (/* binding */ WVerticalNav),
/* harmony export */   "WVerticalNavTitle": () => (/* binding */ WVerticalNavTitle)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _directives_classnames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../directives/classnames.js */ "./src/js/directives/classnames.js");



class WVerticalNav extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        :host {
            display: block;
        }

        nav {
            display: flex;

            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        }

        nav ::slotted(h3) {
            margin: 0;
            padding: 0;
        }

        nav ::slotted(a) {
            display: block;
            width: 100%;
            margin-bottom: var(--w-spacing-200);

            text-decoration: none;
            transition: all 300ms linear;
        }

        nav.contrast ::slotted(a) {
            color: var(--w-vertical-nav--contrast--color);
        }

        nav.contrast ::slotted(a:hover) {
            color: var(--w-vertical-nav--contrast--hover--color);
        }

        nav.contrast ::slotted(a:active),
        nav.contrast ::slotted(a.w-active) {
            color: var(--w-vertical-nav--contrast--active--color);
        }

        nav.shaded ::slotted(a) {
            color: var(--w-vertical-nav--shaded--color);
        }

        nav.shaded ::slotted(a:hover) {
            color: var(--w-vertical-nav--shaded--hover--color);
        }

        nav.shaded ::slotted(a:active),
        nav.shaded ::slotted(a.w-active) {
            color: var(--w-vertical-nav--shaded--active--color);
        }
    `

    static properties = {
        appearance: { 
            type: String,
            help: "The appearance of the navbar. Possible values are `contrast` and `shaded`."
        }
    };

    constructor() {
        super();
        this.appearance = "contrast";
    }

    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html`
            <nav
                class=${(0,_directives_classnames_js__WEBPACK_IMPORTED_MODULE_1__.classnames)({ 
                    [this.appearance]: true
                })}>

                <slot name="item"></slot>
            </nav>
        `
    }
}

class WVerticalNavTitle extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html`<h3><slot></slot></h3>`;
    }

}

customElements.define('w-vertical-nav', WVerticalNav);
customElements.define('w-vertical-nav--title', WVerticalNavTitle);

/***/ }),

/***/ "./src/js/components/organisms/footer/footer.js":
/*!******************************************************!*\
  !*** ./src/js/components/organisms/footer/footer.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WFooter": () => (/* binding */ WFooter)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _directives_classnames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../directives/classnames.js */ "./src/js/directives/classnames.js");



class WFooter extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {

    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        w-grid {
            margin: 0;
        }

        w-grid.contrast {
            background-color: var(--w-footer--contrast--background-color);
            color: var(--w-footer--contrast--color);
        }

        w-grid.light-contrast {
            background-color: var(--w-footer--light-contrast--background-color);
            color: var(--w-footer--light-contrast--color);
        }

        w-grid.shaded {
            border-top: var(--w-footer--shaded--border-top--width) solid var(--w-footer--shaded--border-top--color);
            color: var(--w-footer--shaded--color);
        }

        w-grid.spacing-s {
            padding: var(--w-footer--spacing-s--horizontal-spacing) var(--w-footer--spacing-s--vertical-spacing);
        }

        w-grid.spacing-m {
            padding: var(--w-footer--spacing-m--horizontal-spacing) var(--w-footer--spacing-m--vertical-spacing);
        }
    `;

    static properties = {
        appearance: { 
            type: String,
            help: "The appearance of the navbar. Possible values are `contrast`, `light-contrast` and `shaded`."
        },

        spacing: {
            type: String,
            help: "Specifies spacings (margins, paddings, ...). Possible values are `s` and `m`."
        }
    };

    constructor() {
        super();
        this.appearance = "contrast";
        this.spacing = "s";
    }

    render() {
        return lit__WEBPACK_IMPORTED_MODULE_0__.html`
            <w-grid
            class=${(0,_directives_classnames_js__WEBPACK_IMPORTED_MODULE_1__.classnames)({
                ["spacing-" + this.spacing]: true,
                [this.appearance]: true
            })}>

                <w-grid-item lg="3">
                    <slot name="col-1"></slot>
                </w-grid-item>

                <w-grid-item lg="5">
                    <slot name="col-2"></slot>
                </w-grid-item>

                <w-grid-item lg="5">
                    <slot name="col-3"></slot>
                </w-grid-item>

                <w-grid-item lg="3">
                    <slot name="col-4"></slot>
                </w-grid-item>
            </w-grid>
        `;
    }

}

customElements.define('w-footer', WFooter);

/***/ }),

/***/ "./src/js/components/organisms/navbar/navbar.js":
/*!******************************************************!*\
  !*** ./src/js/components/organisms/navbar/navbar.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WNavbar": () => (/* binding */ WNavbar)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _directives_classnames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../directives/classnames.js */ "./src/js/directives/classnames.js");



class WNavbar extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    static styles = lit__WEBPACK_IMPORTED_MODULE_0__.css`
        :host { 
            margin: 0;
            padding: 0;
            display: flex;
        }

        .container.contrast {
            background-color: var(--w-navbar--contrast--background-color);
        }

        .container.horizontal {
            display: border-box;
            width: 100%;
        }

        .container.horizontal.size-s {
            padding: var(--w-navbar--size-s--vertical-padding) var(--w-navbar--size-s--horizontal-padding);
        }

        .container.horizontal.size-m {
            padding: var(--w-navbar--size-m--vertical-padding) var(--w-navbar--size-m--horizontal-padding);
        }        
        
        .container.horizontal.shaded {
            border-bottom: var(--w-navbar--shaded--border-bottom--width) solid var(--w-navbar--shaded--border-bottom--color);
            background-color: var(--w-navbar--shaded--background-color);
        }

        .container.horizontal w-horizontal-nav.main-nav {
            height: 100%;
        }

        .container.vertical {
            
        }

        .container.vertical.size-s {
            width: calc((100vw - 2 * var(--w-navbar--size-s--horizontal-padding)) / 16 * 3 - 2 * var(--w-navbar--size-m--horizontal-padding));
            padding: var(--w-navbar--size-s--vertical-padding) var(--w-navbar--size-s--horizontal-padding);
        }

        .container.vertical.size-m {
            width: calc((100vw - 2 * var(--w-navbar--size-m--horizontal-padding)) / 16 * 3 - 2 * var(--w-navbar--size-m--horizontal-padding));
            padding: var(--w-navbar--size-m--vertical-padding) var(--w-navbar--size-m--horizontal-padding);
        }
    `

    static properties = {
        appearance: { 
            type: String,
            help: "The appearance of the navbar. Possible values are `contrast` and `shaded`."
        },

        orientation: {
            type: String,
            help: "Orientation of the Nav Bar. Possible values are `horizontal` and `vertical`. Default: `horizontal`."
        },

        size: {
            type: String,
            help: "Specifies the boldness of the navbar. Possible values are `s` and `m`."
        }
    };

    constructor() {
        super();

        this.appearance = "contrast";
        this.orientation = "horizontal";
        this.size = "s";
    }

    render() {
        if (this.orientation == "horizontal") {
            return lit__WEBPACK_IMPORTED_MODULE_0__.html`
                <div 
                    class=${(0,_directives_classnames_js__WEBPACK_IMPORTED_MODULE_1__.classnames)({ 
                        [this.appearance]: true, 
                        "horizontal": true,
                        "container": true,
                        ["size-" + this.size]: true 
                    })}>

                    <w-grid>
                        <w-grid-item lg="3">
                            <w-brand 
                                appearance="${this.appearance}"
                                logo="/wellnr--design-system/assets/images/logo/logo.svg"
                                app="Design System." 
                                brand="wellnr."></w-brand>
                        </w-grid-item>

                        <w-grid-item lg="10">
                            <w-horizontal-nav class="main-nav" appearance="${this.appearance}">
                                <slot name="item" slot="item"></slot>
                            </w-horizontal-nav>
                        </w-grid-item>

                        <w-grid-item lg="3">
                            <slot name="controls"></slot>
                        </w-grid-item>
                    </w-grid>
                </div>
            `
        } else if (this.orientation == "vertical") {
            return lit__WEBPACK_IMPORTED_MODULE_0__.html`
                <div 
                    class=${(0,_directives_classnames_js__WEBPACK_IMPORTED_MODULE_1__.classnames)({ 
                        [this.appearance]: true, 
                        "vertical": true,
                        "container": true,
                        ["size-" + this.size]: true 
                    })}>

                    <w-vertical-nav appearance="${this.appearance}">
                        <slot name="item" slot="item"></slot>
                    </w-vertical-nav>
                </div>
            `;
        }
    }
}

customElements.define('w-navbar', WNavbar);

/***/ }),

/***/ "./src/js/directives/classnames.js":
/*!*****************************************!*\
  !*** ./src/js/directives/classnames.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classnames": () => (/* binding */ classnames)
/* harmony export */ });
function classnames(classes) {
    const names = []

    for (const [key, value] of Object.entries(classes)) {
        if (value) {
            names.push(key);
        }
    }

    return names.join(" ");
}

/***/ }),

/***/ "./src/js/directives/dedent.js":
/*!*************************************!*\
  !*** ./src/js/directives/dedent.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dedent": () => (/* binding */ dedent)
/* harmony export */ });
function dedent(strings, ...values) {
    // $FlowFixMe: Flow doesn't undestand .raw
    const raw = typeof strings === "string" ? [strings] : strings.raw;

    // first, perform interpolation
    let result = "";
    for (let i = 0; i < raw.length; i++) {
        result += raw[i]
            // join lines when there is a suppressed newline
            .replace(/\\\n[ \t]*/g, "")
            // handle escaped backticks
            .replace(/\\`/g, "`");

        if (i < values.length) {
            result += values[i];
        }
    }

    // now strip indentation
    const lines = result.split("\n");
    let mindent = null;
    lines.forEach(l => {
        let m = l.match(/^(\s+)\S+/);
        if (m) {
            let indent = m[1].length;
            if (!mindent) {
                // this is the first indented line
                mindent = indent;
            } else {
                mindent = Math.min(mindent, indent);
            }
        }
    });

    if (mindent !== null) {
        const m = mindent; // appease Flow
        result = lines.map(l => l[0] === " " ? l.slice(m) : l).join("\n");
    }

    return result
        // dedent eats leading and trailing whitespace too
        .trim()
        // handle escaped newlines at the end to ensure they don't get stripped too
        .replace(/\\n/g, "\n");
}

/***/ }),

/***/ "./src/js/directives/markdown.js":
/*!***************************************!*\
  !*** ./src/js/directives/markdown.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "markdown": () => (/* binding */ markdown)
/* harmony export */ });
/**
 * Based on https://raw.githubusercontent.com/adamvleggett/drawdown/master/drawdown.js.
 */


function markdown(src) {
    var rx_lt = /</g;
    var rx_gt = />/g;
    var rx_space = /\t|\r|\uf8ff/g;
    var rx_escape = /\\([\\\|`*_{}\[\]()#+\-~])/g;
    var rx_hr = /^([*\-=_] *){3,}$/gm;
    var rx_blockquote = /\n *&gt; *([^]*?)(?=(\n|$){2})/g;
    var rx_list = /\n( *)(?:[*\-+]|((\d+)|([a-z])|[A-Z])[.)]) +([^]*?)(?=(\n|$){2})/g;
    var rx_listjoin = /<\/(ol|ul)>\n\n<\1>/g;
    var rx_highlight = /(^|[^A-Za-z\d\\])(([*_])|(~)|(\^)|(--)|(\+\+)|`)(\2?)([^<]*?)\2\8(?!\2)(?=\W|_|$)/g;
    var rx_code = /\n((```|~~~).*\n?([^]*?)\n?\2|((    .*?\n)+))/g;
    var rx_link = /((!?)\[(.*?)\]\((.*?)( ".*")?\)|\\([\\`*_{}\[\]()#+\-.!~]))/g;
    var rx_table = /\n(( *\|.*?\| *\n)+)/g;
    var rx_thead = /^.*\n( *\|( *\:?-+\:?-+\:? *\|)* *\n|)/;
    var rx_row = /.*\n/g;
    var rx_cell = /\||(.*?[^\\])\|/g;
    var rx_heading = /(?=^|>|\n)([>\s]*?)(#{1,6}) (.*?)( #*)? *(?=\n|$)/g;
    var rx_para = /(?=^|>|\n)\s*\n+([^<]+?)\n+\s*(?=\n|<|$)/g;
    var rx_stash = /-\d+\uf8ff/g;

    function replace(rex, fn) {
        src = src.replace(rex, fn);
    }

    function element(tag, content) {
        return '<' + tag + '>' + content + '</' + tag + '>';
    }

    function blockquote(src) {
        return src.replace(rx_blockquote, function(all, content) {
            return element('blockquote', blockquote(highlight(content.replace(/^ *&gt; */gm, ''))));
        });
    }

    function list(src) {
        return src.replace(rx_list, function(all, ind, ol, num, low, content) {
            var entry = element('li', highlight(content.split(
                RegExp('\n ?' + ind + '(?:(?:\\d+|[a-zA-Z])[.)]|[*\\-+]) +', 'g')).map(list).join('</li><li>')));

            return '\n' + (ol
                ? '<ol start="' + (num
                    ? ol + '">'
                    : parseInt(ol,36) - 9 + '" style="list-style-type:' + (low ? 'low' : 'upp') + 'er-alpha">') + entry + '</ol>'
                : element('ul', entry));
        });
    }

    function highlight(src) {
        return src.replace(rx_highlight, function(all, _, p1, emp, sub, sup, small, big, p2, content) {
            return _ + element(
                  emp ? (p2 ? 'strong' : 'em')
                : sub ? (p2 ? 's' : 'sub')
                : sup ? 'sup'
                : small ? 'small'
                : big ? 'big'
                : 'code',
                highlight(content));
        });
    }

    function unesc(str) {
        return str.replace(rx_escape, '$1');
    }

    var stash = [];
    var si = 0;

    src = '\n' + src + '\n';

    replace(rx_lt, '&lt;');
    replace(rx_gt, '&gt;');
    replace(rx_space, '  ');

    // blockquote
    src = blockquote(src);

    // horizontal rule
    replace(rx_hr, '<hr/>');

    // list
    src = list(src);
    replace(rx_listjoin, '');

    // code
    replace(rx_code, function(all, p1, p2, p3, p4) {
        stash[--si] = element('pre', element('code', p3||p4.replace(/^    /gm, '')));
        return si + '\uf8ff';
    });

    // link or image
    replace(rx_link, function(all, p1, p2, p3, p4, p5, p6) {
        stash[--si] = p4
            ? p2
                ? '<img src="' + p4 + '" alt="' + p3 + '"/>'
                : '<a href="' + p4 + '">' + unesc(highlight(p3)) + '</a>'
            : p6;
        return si + '\uf8ff';
    });

    // table
    replace(rx_table, function(all, table) {
        var sep = table.match(rx_thead)[1];
        return '\n' + element('table',
            table.replace(rx_row, function(row, ri) {
                return row == sep ? '' : element('tr', row.replace(rx_cell, function(all, cell, ci) {
                    return ci ? element(sep && !ri ? 'th' : 'td', unesc(highlight(cell || ''))) : ''
                }))
            })
        )
    });

    // heading
    replace(rx_heading, function(all, _, p1, p2) { return _ + element('h' + p1.length, unesc(highlight(p2))) });

    // paragraph
    replace(rx_para, function(all, content) { return element('p', unesc(highlight(content))) });

    // stash
    replace(rx_stash, function(all) { return stash[parseInt(all)] });

    return src.trim();
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WDocsWrapper": () => (/* binding */ WDocsWrapper)
/* harmony export */ });
/* harmony import */ var _js_components_atoms_button_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/components/atoms/button/button.js */ "./src/js/components/atoms/button/button.js");
/* harmony import */ var _js_components_atoms_code_code_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components/atoms/code/code.js */ "./src/js/components/atoms/code/code.js");
/* harmony import */ var _js_components_atoms_heading_heading_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/components/atoms/heading/heading.js */ "./src/js/components/atoms/heading/heading.js");
/* harmony import */ var _js_components_atoms_markdown_markdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/components/atoms/markdown/markdown.js */ "./src/js/components/atoms/markdown/markdown.js");
/* harmony import */ var _js_components_atoms_pane_pane_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/components/atoms/pane/pane.js */ "./src/js/components/atoms/pane/pane.js");
/* harmony import */ var _js_components_atoms_paragraph_paragraph_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/components/atoms/paragraph/paragraph.js */ "./src/js/components/atoms/paragraph/paragraph.js");
/* harmony import */ var _js_components_atoms_pre_pre_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/components/atoms/pre/pre.js */ "./src/js/components/atoms/pre/pre.js");
/* harmony import */ var _js_components_atoms_tabs_tabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/components/atoms/tabs/tabs.js */ "./src/js/components/atoms/tabs/tabs.js");
/* harmony import */ var _js_components_atoms_text_input_text_input_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/components/atoms/text-input/text-input.js */ "./src/js/components/atoms/text-input/text-input.js");
/* harmony import */ var _js_components_layout_container_container_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/components/layout/container/container.js */ "./src/js/components/layout/container/container.js");
/* harmony import */ var _js_components_layout_fixed_header_fixed_header_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/components/layout/fixed-header/fixed-header.js */ "./src/js/components/layout/fixed-header/fixed-header.js");
/* harmony import */ var _js_components_layout_grid_grid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/components/layout/grid/grid.js */ "./src/js/components/layout/grid/grid.js");
/* harmony import */ var _js_components_molecules_css_rules_table_css_rules_table_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/components/molecules/css-rules-table/css-rules-table.js */ "./src/js/components/molecules/css-rules-table/css-rules-table.js");
/* harmony import */ var _js_components_molecules_brand_brand_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/components/molecules/brand/brand.js */ "./src/js/components/molecules/brand/brand.js");
/* harmony import */ var _js_components_molecules_element_example_element_example_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./js/components/molecules/element-example/element-example.js */ "./src/js/components/molecules/element-example/element-example.js");
/* harmony import */ var _js_components_molecules_element_properties_table_element_properties_table_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./js/components/molecules/element-properties-table/element-properties-table.js */ "./src/js/components/molecules/element-properties-table/element-properties-table.js");
/* harmony import */ var _js_components_molecules_horizontal_nav_horizontal_nav_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./js/components/molecules/horizontal-nav/horizontal-nav.js */ "./src/js/components/molecules/horizontal-nav/horizontal-nav.js");
/* harmony import */ var _js_components_molecules_vertical_nav_vertical_nav_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./js/components/molecules/vertical-nav/vertical-nav.js */ "./src/js/components/molecules/vertical-nav/vertical-nav.js");
/* harmony import */ var _js_components_organisms_footer_footer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./js/components/organisms/footer/footer.js */ "./src/js/components/organisms/footer/footer.js");
/* harmony import */ var _js_components_organisms_navbar_navbar_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./js/components/organisms/navbar/navbar.js */ "./src/js/components/organisms/navbar/navbar.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
// Atoms










// Layout




// Molecules







// Organisms









class WDocsWrapper extends lit__WEBPACK_IMPORTED_MODULE_21__.LitElement {

    render() {
        return lit__WEBPACK_IMPORTED_MODULE_21__.html`
            <w-fixed-header spacing="m">
                <w-navbar appearance="shaded" size="m" slot="header">
                    <a slot="item" href="/introduction" class="w-active">Introduction</a>
                    <a slot="item" href="/foundations">Foundations</a>
                    <a slot="item" href="/components">Components</a>
                </w-navbar>

                <w-navbar slot="nav" appearance="shaded" orientation="vertical" size="m">
                    <a slot="item" href="/introduction" class="w-active">Introduction</a>
                    <a slot="item" href="/foundations">Foundations</a>
                    <a slot="item" href="/components">Components</a>
                
                    <w-vertical-nav--title slot="item">Atoms</w-vertical-nav--title>
                    <a slot="item" href="/docs/components/atoms/heading.html">Heading</a>
                    <a slot="item" href="/docs/components/atoms/markdown.html">Markdown</a>
                    <a slot="item" href="/docs/components/atoms/tabs.html">Tabs</a>
                </w-navbar>

                <slot name="article" slot="article"></slot>

                <w-footer slot="footer" spacing="m" appearance="light-contrast">
                    <div slot="col-1">&copy; Michael Wellner 2023.</div>
                </w-footer>
            </w-fixed-header>
        `
    }

}

customElements.define('w-docs-wrapper', WDocsWrapper);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsK0NBQStDLE1BQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxLQUFLO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwrQkFBK0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGVBQWU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsS0FBSztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseUJBQXlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLEtBQUssNkJBQTZCLFVBQVU7QUFDM0gsb0NBQW9DLGlDQUFpQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLCtEQUFrQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsK0RBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsUUFBUSxnRkFBZ0Y7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsUUFBUSxtRkFBbUY7QUFDdEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RkFBeUYsTUFBTTtBQUMvRiw0Q0FBNEMsZUFBZTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsZ0JBQWdCO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsMkVBQTJFLGdCQUFnQjtBQUMzRjtBQUNBLG1DQUFtQyw4QkFBOEI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUdBQW1HLFFBQVEsNkVBQTZFO0FBQ3hMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0JBQWdCLEVBQUUsY0FBYztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixTQUFTO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGLFFBQVEsOEVBQThFO0FBQ2pMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsZ0JBQWdCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsaUJBQWlCLGVBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0Esb0ZBQW9GLGlCQUFpQjtBQUNyRztBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE1BQU07QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLCtCQUErQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxXQUFXLE1BQU0sVUFBVSxLQUFLLFdBQVcsSUFBSSxXQUFXLE1BQU0sZ0JBQWdCO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE1BQU07QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixnQkFBZ0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsaUJBQWlCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsZ0JBQWdCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0JBQStCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsSUFBSTtBQUNoRiwrRUFBK0UsS0FBSztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsZUFBZTtBQUN2RDtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsc0NBQXNDO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsb0NBQW9DO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxzQ0FBc0M7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU0sU0FBUyxrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELE1BQU07QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrQkFBK0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEVBQUU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdCQUF3QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msa0JBQWtCLGVBQWUsS0FBSztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QzFDLDBDQUEwQztBQUMxQywwQ0FBMEM7QUFDMUMsMENBQTBDO0FBQzFDLDBDQUEwQztBQUMxQywwQ0FBMEM7QUFDMUMsMENBQTBDO0FBQzFDLDBDQUEwQztBQUMxQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQywyQ0FBMkM7O0FBRTNDO0FBQ0EsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDOztBQUVBO0FBQ0EsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsK0NBQStDO0FBQy9DOztBQUVBO0FBQ0EsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsZ0RBQWdEO0FBQ2hELGdEQUFnRDtBQUNoRCxnREFBZ0Q7QUFDaEQsZ0RBQWdEO0FBQ2hELGdEQUFnRDtBQUNoRCxnREFBZ0Q7QUFDaEQsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFDQUFJO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTyx3QkFBd0IsMkNBQVU7QUFDekMsb0JBQW9CLG9DQUFHO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFDQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDak4wQztBQUNxQjs7QUFFeEQscUJBQXFCLDJDQUFVO0FBQ3RDLG9CQUFvQixvQ0FBRztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxQ0FBSTtBQUNuQjtBQUNBLHdCQUF3QixVQUFVO0FBQ2xDLHdCQUF3QixxRUFBVSxHQUFHLHlCQUF5QixFQUFFO0FBQ2hFLGdDQUFnQyxVQUFVO0FBQzFDLDBDQUEwQyxXQUFXLE1BQU0sMkJBQTJCLFNBQVM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQzVGNEM7O0FBRXJDLDZCQUE2QiwyQ0FBVTs7QUFFOUMsb0JBQW9CLG9DQUFHO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixxQ0FBSTtBQUN2QjtBQUNBLDBCQUEwQixTQUFTO0FBQ25DLHFEQUFxRCxhQUFhO0FBQ2xFLHFEQUFxRCx1SEFBdUg7QUFDNUs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdCQUF3QjtBQUNoRDtBQUNBLGtCQUFrQjtBQUNsQixnQ0FBZ0Msb0NBQW9DO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLDBCQUEwQjtBQUMxQixpRUFBaUU7QUFDakU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUscUNBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNySDBDOztBQUVuQyw4QkFBOEIsMkNBQVU7O0FBRS9DLG9CQUFvQixvQ0FBRztBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFDQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixlQUFlLHFDQUFJLG1CQUFtQixlQUFlLGNBQWMscUNBQUk7QUFDMUY7O0FBRUEsZ0NBQWdDLDBDQUEwQyxzQkFBc0IsMEJBQTBCO0FBQzFIO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QzRDOztBQUVjOztBQUVuRCwrQkFBK0IsMkNBQVU7O0FBRWhELG9CQUFvQixvQ0FBRztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwrREFBUTtBQUMvQjtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxQ0FBSTtBQUNuQjtBQUNBLHNCQUFzQixTQUFTO0FBQy9CLHNCQUFzQixzQkFBc0I7QUFDNUMsaURBQWlELGlCQUFpQjtBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQ0FBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RjBDO0FBQ21COztBQUV0RCw2QkFBNkIsMkNBQVU7QUFDOUMsb0JBQW9CLG9DQUFHO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxQ0FBSTtBQUNuQjtBQUNBLHdCQUF3QixxRUFBVTtBQUNsQztBQUNBLGlCQUFpQixFQUFFOztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9FMEM7QUFDbUI7O0FBRXRELDJCQUEyQiwyQ0FBVTtBQUM1QyxvQkFBb0Isb0NBQUc7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUNBQUk7QUFDbkI7QUFDQSx3QkFBd0IscUVBQVU7QUFDbEM7QUFDQSxpQkFBaUIsRUFBRTs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxnQ0FBZ0MsMkNBQVU7O0FBRWpEO0FBQ0EsZUFBZSxxQ0FBSTtBQUNuQjs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUY0QztBQUNtQjs7QUFFeEQsc0JBQXNCLDJDQUFVOztBQUV2QyxvQkFBb0Isb0NBQUc7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxQ0FBSTtBQUNuQjtBQUNBLG9CQUFvQixxRUFBVTtBQUM5QjtBQUNBO0FBQ0EsYUFBYSxFQUFFOztBQUVmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGMEM7QUFDcUI7O0FBRXhELHNCQUFzQiwyQ0FBVTtBQUN2QyxvQkFBb0Isb0NBQUc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHFDQUFJO0FBQ3ZCO0FBQ0EsNEJBQTRCLHFFQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLEVBQUU7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxnQkFBZ0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RUFBNkUsZ0JBQWdCO0FBQzdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsbUJBQW1CLHFDQUFJO0FBQ3ZCO0FBQ0EsNEJBQTRCLHFFQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLEVBQUU7O0FBRXZCLGtEQUFrRCxnQkFBZ0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDaElPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1ZPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsOEJBQThCLEdBQUc7QUFDakMsa0NBQWtDLGtCQUFrQixFQUFFO0FBQ3RELGdGQUFnRixFQUFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxJQUFJO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUZBQXVGO0FBQ3ZGLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLG1EQUFtRCwyREFBMkQ7O0FBRTlHO0FBQ0EsOENBQThDLGdEQUFnRDs7QUFFOUY7QUFDQSxzQ0FBc0MsNkJBQTZCOztBQUVuRTtBQUNBOzs7Ozs7O1VDOUhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDZ0Q7QUFDSjtBQUNNO0FBQ0U7QUFDUjtBQUNVO0FBQ1o7QUFDRTtBQUNZOztBQUV4RDtBQUN1RDtBQUNNO0FBQ2hCOztBQUU3QztBQUNzRTtBQUNwQjtBQUNvQjtBQUNrQjtBQUNwQjtBQUNKOztBQUVoRTtBQUNvRDtBQUNBOztBQUU5Qjs7O0FBR2lCOzs7QUFHaEMsMkJBQTJCLDRDQUFVOztBQUU1QztBQUNBLGVBQWUsc0NBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2Nzcy9icmVha3BvaW50cy5jc3MiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2Nzcy9jb2xvcnMuY3NzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9jc3MvaWNvbnMuY3NzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY3NzL3NwYWNpbmcuY3NzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9jc3MvdGhlbWUuY3NzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9jc3MvdHlwb2dyYXBoeS5jc3MiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvYXRvbXMvYnV0dG9uL2J1dHRvbi5jc3MiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvYXRvbXMvY29kZS9jb2RlLmNzcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9hdG9tcy9oZWFkaW5nL2hlYWRpbmcuY3NzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL2F0b21zL21hcmtkb3duL21hcmtkb3duLmNzcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9hdG9tcy9wYW5lL3BhbmUuY3NzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL2F0b21zL3BhcmFncmFwaC9wYXJhZ3JhcGguY3NzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL2F0b21zL3ByZS9wcmUuY3NzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL2F0b21zL3RhYnMvdGFicy5jc3MiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvYXRvbXMvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNzcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9sYXlvdXQvZml4ZWQtaGVhZGVyL2ZpeGVkLWhlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvbGF5b3V0L2dyaWQvZ3JpZC5jc3MiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9sZWN1bGVzL2JyYW5kL2JyYW5kLmNzcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9tb2xlY3VsZXMvY3NzLXJ1bGVzLXRhYmxlL2Nzcy1ydWxlcy10YWJsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9sZWN1bGVzL2VsZW1lbnQtZXhhbXBsZS9lbGVtZW50LWV4YW1wbGUuY3NzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9lbGVtZW50LXByb3BlcnRpZXMtdGFibGUvZWxlbWVudC1wcm9wZXJ0aWVzLXRhYmxlLmNzcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9tb2xlY3VsZXMvaG9yaXpvbnRhbC1uYXYvaG9yaXpvbnRhbC1uYXYuY3NzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL21vbGVjdWxlcy92ZXJ0aWNhbC1uYXYvdmVydGljYWwtbmF2LmNzcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9vcmdhbmlzbXMvZm9vdGVyL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvb3JnYW5pc21zL25hdmJhci9uYXZiYXIuY3NzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9kZXZlbG9wbWVudC9jc3MtdGFnLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvcmVhY3RpdmUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvbGl0LWVsZW1lbnQvZGV2ZWxvcG1lbnQvbGl0LWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2lzLXNlcnZlci5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvZGV2ZWxvcG1lbnQvbGl0LWh0bWwuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL2xpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9hdG9tcy9idXR0b24vYnV0dG9uLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL2F0b21zL2NvZGUvY29kZS5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9hdG9tcy9oZWFkaW5nL2hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvYXRvbXMvbWFya2Rvd24vbWFya2Rvd24uanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvYXRvbXMvcGFuZS9wYW5lLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL2F0b21zL3BhcmFncmFwaC9wYXJhZ3JhcGguanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvYXRvbXMvcHJlL3ByZS5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9hdG9tcy90YWJzL3RhYnMuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvYXRvbXMvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL2xheW91dC9jb250YWluZXIvY29udGFpbmVyLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL2xheW91dC9maXhlZC1oZWFkZXIvZml4ZWQtaGVhZGVyLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL2xheW91dC9ncmlkL2dyaWQuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9sZWN1bGVzL2JyYW5kL2JyYW5kLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9jc3MtcnVsZXMtdGFibGUvY3NzLXJ1bGVzLXRhYmxlLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9lbGVtZW50LWV4YW1wbGUvZWxlbWVudC1leGFtcGxlLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9lbGVtZW50LXByb3BlcnRpZXMtdGFibGUvZWxlbWVudC1wcm9wZXJ0aWVzLXRhYmxlLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9ob3Jpem9udGFsLW5hdi9ob3Jpem9udGFsLW5hdi5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9tb2xlY3VsZXMvdmVydGljYWwtbmF2L3ZlcnRpY2FsLW5hdi5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9vcmdhbmlzbXMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9vcmdhbmlzbXMvbmF2YmFyL25hdmJhci5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvZGlyZWN0aXZlcy9jbGFzc25hbWVzLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9kaXJlY3RpdmVzL2RlZGVudC5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvZGlyZWN0aXZlcy9tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogXFxuICogTm90ZTogQnJlYWtwb2ludCB2YWx1ZXMgYXJlIGFsc28gaGFyZGNvZGVkIGluIC9jb21wb25lbnRzL2xheW91dC9ncmlkL2dyaWQuanMuXFxuICogXFxuICogVGhlc2UgdmFyaWFibGVzIGFyZSBoZXJlIGZvciByZWZlcmVuY2UuIFVuZm9ydHVuYXRlbHksIGFzIG9mIHRvZGF5LCBtZWRpYSBxdWVyaWVzXFxuICogY2FuIG5vdCB1c2UgdGhlc2UgdmFyaWFibGVzLlxcbiAqL1xcbjpyb290IHtcXG4gICAgLS13LWJyZWFrcG9pbnQtc206IDU3NnB4O1xcbiAgICAtLXctYnJlYWtwb2ludC1tZDogNzY4cHg7XFxuICAgIC0tdy1icmVha3BvaW50LWxnOiA5OTJweDtcXG4gICAgLS13LWJyZWFrcG9pbnQteGw6IDEyMDBweDtcXG4gICAgLS13LWJyZWFrcG9pbnQteHhsOiAxNDAwcHg7XFxuICAgIC0tdy1icmVha3BvaW50LXh4eGw6IDI2MDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9icmVha3BvaW50cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7O0VBS0U7QUFDRjtJQUNJLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsMkJBQTJCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFxcbiAqIE5vdGU6IEJyZWFrcG9pbnQgdmFsdWVzIGFyZSBhbHNvIGhhcmRjb2RlZCBpbiAvY29tcG9uZW50cy9sYXlvdXQvZ3JpZC9ncmlkLmpzLlxcbiAqIFxcbiAqIFRoZXNlIHZhcmlhYmxlcyBhcmUgaGVyZSBmb3IgcmVmZXJlbmNlLiBVbmZvcnR1bmF0ZWx5LCBhcyBvZiB0b2RheSwgbWVkaWEgcXVlcmllc1xcbiAqIGNhbiBub3QgdXNlIHRoZXNlIHZhcmlhYmxlcy5cXG4gKi9cXG46cm9vdCB7XFxuICAgIC0tdy1icmVha3BvaW50LXNtOiA1NzZweDtcXG4gICAgLS13LWJyZWFrcG9pbnQtbWQ6IDc2OHB4O1xcbiAgICAtLXctYnJlYWtwb2ludC1sZzogOTkycHg7XFxuICAgIC0tdy1icmVha3BvaW50LXhsOiAxMjAwcHg7XFxuICAgIC0tdy1icmVha3BvaW50LXh4bDogMTQwMHB4O1xcbiAgICAtLXctYnJlYWtwb2ludC14eHhsOiAyNjAwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiA6cm9vdCB7XFxuICAgIC8qXFxuICAgICAqIEJhc2UgQ29sb3JzXFxuICAgICAqL1xcbiAgICAtLWJsYWNrOiAjMTIxMjEyO1xcbiAgICAtLWdyYXk5MDA6ICMxMDE4NDA7XFxuICAgIC0tZ3JheTgwMDogIzQ3NGQ2NjtcXG4gICAgLS1ncmF5NzAwOiAjNjk2ZjhjO1xcbiAgICAtLWdyYXk2MDA6ICM4Zjk1YjI7XFxuICAgIC0tZ3JheTUwMDogI2MxYzRkNjtcXG4gICAgLS1ncmF5NDAwOiAjZDhkYWU1O1xcbiAgICAtLWdyYXkzMDA6ICNFNkU4RjA7XFxuICAgIC0tZ3JheTIwMDogI2VkZWZmNTtcXG4gICAgLS1ncmF5MTAwOiAjRjRGNUY5O1xcbiAgICAtLWdyYXk5MDogI0Y0RjZGQTtcXG4gICAgLS1ncmF5NzU6ICNGOUZBRkM7XFxuICAgIC0tZ3JheTUwOiAjRkFGQkZGO1xcbiAgICAtLXdoaXRlOiAjRkZGRkZGO1xcblxcbiAgICAtLWJsdWU5MDA6ICMwQTE0MzM7XFxuICAgIC0tYmx1ZTgwMDogIzE0Mjk2NjtcXG4gICAgLS1ibHVlNzAwOiAjMUYzRDk5O1xcbiAgICAtLWJsdWU2MDA6ICMyOTUyQ0M7XFxuICAgIC0tYmx1ZTUwMDogIzMzNjZGRjtcXG4gICAgLS1ibHVlNDAwOiAjNUM4NUZGO1xcbiAgICAtLWJsdWUzMDA6ICM4NUEzRkY7XFxuICAgIC0tYmx1ZTIwMDogI0FEQzJGRjtcXG4gICAgLS1ibHVlMTAwOiAjRDZFMEZGO1xcbiAgICAtLWJsdWU1MDogI0VCRjBGRjtcXG4gICAgLS1ibHVlMjU6ICNGM0Y2RkY7XFxuXFxuICAgIC0tcmVkNzAwOiAjN0QyODI4O1xcbiAgICAtLXJlZDYwMDogI0E3MzYzNjtcXG4gICAgLS1yZWQ1MDA6ICNEMTQzNDM7XFxuICAgIC0tcmVkMzAwOiAjRUU5MTkxO1xcbiAgICAtLXJlZDEwMDogI0Y5REFEQTtcXG4gICAgLS1yZWQyNTogI0ZERjRGNDtcXG5cXG4gICAgLS1ncmVlbjkwMDogIzEwMjYxRTtcXG4gICAgLS1ncmVlbjgwMDogIzIxNEMzQztcXG4gICAgLS1ncmVlbjcwMDogIzMxNzE1OTtcXG4gICAgLS1ncmVlbjYwMDogIzQyOTc3NztcXG4gICAgLS1ncmVlbjUwMDogIzUyQkQ5NTtcXG4gICAgLS1ncmVlbjQwMDogIzc1Q0FBQTtcXG4gICAgLS1ncmVlbjMwMDogIzk3RDdCRjtcXG4gICAgLS1ncmVlbjIwMDogI0JBRTVENTtcXG4gICAgLS1ncmVlbjEwMDogI0RDRjJFQTtcXG4gICAgLS1ncmVlbjI1OiAjRjVGQkY4O1xcblxcbiAgICAtLW9yYW5nZTcwMDogIzk5NkExMztcXG4gICAgLS1vcmFuZ2U1MDA6ICNGRkIwMjA7XFxuICAgIC0tb3JhbmdlMTAwOiAjRjhFM0RBO1xcbiAgICAtLW9yYW5nZTI1OiAjRkZGQUYyO1xcblxcbiAgICAtLXB1cnBsZTYwMDogIzZFNjJCNjtcXG4gICAgLS1wdXJwbGUxMDA6ICNFN0U0Rjk7XFxuXFxuICAgIC0tdGVhbDgwMDogIzBGNTE1NjtcXG4gICAgLS10ZWFsMTAwOiAjRDNGNUY3O1xcblxcbiAgICAtLXllbGxvdzgwMDogIzY2NDYwRDtcXG4gICAgLS15ZWxsb3cxMDA6ICNGRkVGRDI7XFxuXFxuICAgLyogXFxuICAgKiBDb2xvciBUb2tlbnMgXFxuICAgKi9cXG4gICAtLXctYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheTc1KTtcXG4gICAtLXctYmFja2dyb3VuZC1jb2xvci0zMDA6IHZhcigtLWdyYXk1MCk7XFxuICAgLS13LWJhY2tncm91bmQtY29sb3ItNDAwOiB2YXIoLS1ncmF5NzUpO1xcbiAgIC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTUwMDogdmFyKC0tZ3JheTEwMCk7XFxuICAgLS13LWJhY2tncm91bmQtY29sb3ItNjAwOiB2YXIoLS1ncmF5MjAwKTtcXG4gICAtLXctYmFja2dyb3VuZC1jb2xvci03MDA6IHZhcigtLWdyYXkzMDApO1xcbiAgIC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTgwMDogdmFyKC0tZ3JheTQwMCk7XFxuICAgLS13LWJhY2tncm91bmQtY29sb3ItOTAwOiB2YXIoLS1ncmF5NjAwKTtcXG5cXG4gICAtLXctdGV4dC1jb2xvcjogdmFyKC0tZ3JheTkwMCk7XFxuICAgLS13LXRleHQtY29sb3ItMzAwOiB2YXIoLS1ncmF5ODAwKTtcXG4gICAtLXctdGV4dC1jb2xvci00MDA6IHZhcigtLWdyYXk5MDApO1xcbiAgIC0tdy10ZXh0LWNvbG9yLTUwMDogdmFyKC0tYmxhY2spO1xcblxcbiAgIC0tdy1saW5rLWNvbG9yOiB2YXIoLS1ibHVlNTAwKTtcXG4gICAtLXctbGluay1ob3Zlci1jb2xvcjogdmFyKC0tYmx1ZTcwMCk7XFxuXFxuICAgLS13LW11dGVkLWNvbG9yOiB2YXIoLS1ncmF5NzAwKTtcXG4gICAtLXctbXV0ZWQtdGV4dC1jb2xvcjogdmFyKC0tZ3JheTkwMCk7XFxuXFxuICAgLS13LXByaW1hcnktY29sb3I6IHZhcigtLWJsdWU1MDApO1xcbiAgIC0tdy1wcmltYXJ5LWhvdmVyLWNvbG9yOiB2YXIoLS1ibHVlNzAwKTtcXG5cXG4gICAtLXctcHJpbWFyeS10ZXh0LWNvbG9yOiB2YXIoLS1ncmF5MjAwKTtcXG4gICAtLXctcHJpbWFyeS10ZXh0LWNvbG9yLTMwMDogdmFyKC0td2hpdGUpO1xcbiAgIC0tdy1wcmltYXJ5LXRleHQtY29sb3ItNDAwOiB2YXIoLS1ncmF5MjAwKTtcXG4gICAtLXctcHJpbWFyeS10ZXh0LWNvbG9yLTUwMDogdmFyKC0tZ3JheTQwMCk7XFxuXFxuICAgIC0tdy1zZWNvbmRhcnktY29sb3I6IHZhcigtLWJsdWUzMDApO1xcbiAgICAtLXctc2Vjb25kYXJ5LWhvdmVyLWNvbG9yOiB2YXIoLS1ibHVlNDAwKTtcXG4gICAgLS13LXNlY29uZGFyeS10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFxuICAgIC0tdy1kYW5nZXItY29sb3I6IHZhcigtLXJlZDUwMCk7XFxuICAgIC0tdy1kYW5nZXItaG92ZXItY29sb3I6IHZhcigtLXJlZDYwMCk7XFxuICAgIC0tdy1kYW5nZXItdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9jb2xvcnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJDQUFDO0lBQ0c7O01BRUU7SUFDRixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCOztJQUVoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCOztJQUVqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjs7SUFFaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCOztJQUVsQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixtQkFBbUI7O0lBRW5CLG9CQUFvQjtJQUNwQixvQkFBb0I7O0lBRXBCLGtCQUFrQjtJQUNsQixrQkFBa0I7O0lBRWxCLG9CQUFvQjtJQUNwQixvQkFBb0I7O0dBRXJCOztJQUVDO0dBQ0QsbUNBQW1DO0dBQ25DLHVDQUF1QztHQUN2Qyx1Q0FBdUM7R0FDdkMsd0NBQXdDO0dBQ3hDLHdDQUF3QztHQUN4Qyx3Q0FBd0M7R0FDeEMsd0NBQXdDO0dBQ3hDLHdDQUF3Qzs7R0FFeEMsOEJBQThCO0dBQzlCLGtDQUFrQztHQUNsQyxrQ0FBa0M7R0FDbEMsZ0NBQWdDOztHQUVoQyw4QkFBOEI7R0FDOUIsb0NBQW9DOztHQUVwQywrQkFBK0I7R0FDL0Isb0NBQW9DOztHQUVwQyxpQ0FBaUM7R0FDakMsdUNBQXVDOztHQUV2QyxzQ0FBc0M7R0FDdEMsd0NBQXdDO0dBQ3hDLDBDQUEwQztHQUMxQywwQ0FBMEM7O0lBRXpDLG1DQUFtQztJQUNuQyx5Q0FBeUM7SUFDekMsc0NBQXNDOztJQUV0QywrQkFBK0I7SUFDL0IscUNBQXFDO0lBQ3JDLG1DQUFtQztDQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIgOnJvb3Qge1xcbiAgICAvKlxcbiAgICAgKiBCYXNlIENvbG9yc1xcbiAgICAgKi9cXG4gICAgLS1ibGFjazogIzEyMTIxMjtcXG4gICAgLS1ncmF5OTAwOiAjMTAxODQwO1xcbiAgICAtLWdyYXk4MDA6ICM0NzRkNjY7XFxuICAgIC0tZ3JheTcwMDogIzY5NmY4YztcXG4gICAgLS1ncmF5NjAwOiAjOGY5NWIyO1xcbiAgICAtLWdyYXk1MDA6ICNjMWM0ZDY7XFxuICAgIC0tZ3JheTQwMDogI2Q4ZGFlNTtcXG4gICAgLS1ncmF5MzAwOiAjRTZFOEYwO1xcbiAgICAtLWdyYXkyMDA6ICNlZGVmZjU7XFxuICAgIC0tZ3JheTEwMDogI0Y0RjVGOTtcXG4gICAgLS1ncmF5OTA6ICNGNEY2RkE7XFxuICAgIC0tZ3JheTc1OiAjRjlGQUZDO1xcbiAgICAtLWdyYXk1MDogI0ZBRkJGRjtcXG4gICAgLS13aGl0ZTogI0ZGRkZGRjtcXG5cXG4gICAgLS1ibHVlOTAwOiAjMEExNDMzO1xcbiAgICAtLWJsdWU4MDA6ICMxNDI5NjY7XFxuICAgIC0tYmx1ZTcwMDogIzFGM0Q5OTtcXG4gICAgLS1ibHVlNjAwOiAjMjk1MkNDO1xcbiAgICAtLWJsdWU1MDA6ICMzMzY2RkY7XFxuICAgIC0tYmx1ZTQwMDogIzVDODVGRjtcXG4gICAgLS1ibHVlMzAwOiAjODVBM0ZGO1xcbiAgICAtLWJsdWUyMDA6ICNBREMyRkY7XFxuICAgIC0tYmx1ZTEwMDogI0Q2RTBGRjtcXG4gICAgLS1ibHVlNTA6ICNFQkYwRkY7XFxuICAgIC0tYmx1ZTI1OiAjRjNGNkZGO1xcblxcbiAgICAtLXJlZDcwMDogIzdEMjgyODtcXG4gICAgLS1yZWQ2MDA6ICNBNzM2MzY7XFxuICAgIC0tcmVkNTAwOiAjRDE0MzQzO1xcbiAgICAtLXJlZDMwMDogI0VFOTE5MTtcXG4gICAgLS1yZWQxMDA6ICNGOURBREE7XFxuICAgIC0tcmVkMjU6ICNGREY0RjQ7XFxuXFxuICAgIC0tZ3JlZW45MDA6ICMxMDI2MUU7XFxuICAgIC0tZ3JlZW44MDA6ICMyMTRDM0M7XFxuICAgIC0tZ3JlZW43MDA6ICMzMTcxNTk7XFxuICAgIC0tZ3JlZW42MDA6ICM0Mjk3Nzc7XFxuICAgIC0tZ3JlZW41MDA6ICM1MkJEOTU7XFxuICAgIC0tZ3JlZW40MDA6ICM3NUNBQUE7XFxuICAgIC0tZ3JlZW4zMDA6ICM5N0Q3QkY7XFxuICAgIC0tZ3JlZW4yMDA6ICNCQUU1RDU7XFxuICAgIC0tZ3JlZW4xMDA6ICNEQ0YyRUE7XFxuICAgIC0tZ3JlZW4yNTogI0Y1RkJGODtcXG5cXG4gICAgLS1vcmFuZ2U3MDA6ICM5OTZBMTM7XFxuICAgIC0tb3JhbmdlNTAwOiAjRkZCMDIwO1xcbiAgICAtLW9yYW5nZTEwMDogI0Y4RTNEQTtcXG4gICAgLS1vcmFuZ2UyNTogI0ZGRkFGMjtcXG5cXG4gICAgLS1wdXJwbGU2MDA6ICM2RTYyQjY7XFxuICAgIC0tcHVycGxlMTAwOiAjRTdFNEY5O1xcblxcbiAgICAtLXRlYWw4MDA6ICMwRjUxNTY7XFxuICAgIC0tdGVhbDEwMDogI0QzRjVGNztcXG5cXG4gICAgLS15ZWxsb3c4MDA6ICM2NjQ2MEQ7XFxuICAgIC0teWVsbG93MTAwOiAjRkZFRkQyO1xcblxcbiAgIC8qIFxcbiAgICogQ29sb3IgVG9rZW5zIFxcbiAgICovXFxuICAgLS13LWJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXk3NSk7XFxuICAgLS13LWJhY2tncm91bmQtY29sb3ItMzAwOiB2YXIoLS1ncmF5NTApO1xcbiAgIC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTQwMDogdmFyKC0tZ3JheTc1KTtcXG4gICAtLXctYmFja2dyb3VuZC1jb2xvci01MDA6IHZhcigtLWdyYXkxMDApO1xcbiAgIC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTYwMDogdmFyKC0tZ3JheTIwMCk7XFxuICAgLS13LWJhY2tncm91bmQtY29sb3ItNzAwOiB2YXIoLS1ncmF5MzAwKTtcXG4gICAtLXctYmFja2dyb3VuZC1jb2xvci04MDA6IHZhcigtLWdyYXk0MDApO1xcbiAgIC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTkwMDogdmFyKC0tZ3JheTYwMCk7XFxuXFxuICAgLS13LXRleHQtY29sb3I6IHZhcigtLWdyYXk5MDApO1xcbiAgIC0tdy10ZXh0LWNvbG9yLTMwMDogdmFyKC0tZ3JheTgwMCk7XFxuICAgLS13LXRleHQtY29sb3ItNDAwOiB2YXIoLS1ncmF5OTAwKTtcXG4gICAtLXctdGV4dC1jb2xvci01MDA6IHZhcigtLWJsYWNrKTtcXG5cXG4gICAtLXctbGluay1jb2xvcjogdmFyKC0tYmx1ZTUwMCk7XFxuICAgLS13LWxpbmstaG92ZXItY29sb3I6IHZhcigtLWJsdWU3MDApO1xcblxcbiAgIC0tdy1tdXRlZC1jb2xvcjogdmFyKC0tZ3JheTcwMCk7XFxuICAgLS13LW11dGVkLXRleHQtY29sb3I6IHZhcigtLWdyYXk5MDApO1xcblxcbiAgIC0tdy1wcmltYXJ5LWNvbG9yOiB2YXIoLS1ibHVlNTAwKTtcXG4gICAtLXctcHJpbWFyeS1ob3Zlci1jb2xvcjogdmFyKC0tYmx1ZTcwMCk7XFxuXFxuICAgLS13LXByaW1hcnktdGV4dC1jb2xvcjogdmFyKC0tZ3JheTIwMCk7XFxuICAgLS13LXByaW1hcnktdGV4dC1jb2xvci0zMDA6IHZhcigtLXdoaXRlKTtcXG4gICAtLXctcHJpbWFyeS10ZXh0LWNvbG9yLTQwMDogdmFyKC0tZ3JheTIwMCk7XFxuICAgLS13LXByaW1hcnktdGV4dC1jb2xvci01MDA6IHZhcigtLWdyYXk0MDApO1xcblxcbiAgICAtLXctc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1ibHVlMzAwKTtcXG4gICAgLS13LXNlY29uZGFyeS1ob3Zlci1jb2xvcjogdmFyKC0tYmx1ZTQwMCk7XFxuICAgIC0tdy1zZWNvbmRhcnktdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xcblxcbiAgICAtLXctZGFuZ2VyLWNvbG9yOiB2YXIoLS1yZWQ1MDApO1xcbiAgICAtLXctZGFuZ2VyLWhvdmVyLWNvbG9yOiB2YXIoLS1yZWQ2MDApO1xcbiAgICAtLXctZGFuZ2VyLXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB3aWR0aD0lMjcyNCUyNyBoZWlnaHQ9JTI3MjQlMjcgdmlld0JveD0lMjcwIDAgMjQgMjQlMjcgZmlsbD0lMjdub25lJTI3IHN0cm9rZT0lMjdyZ2IlMjgyNTUsIDI1NSwgMjU1JTI5JTI3IHN0cm9rZS13aWR0aD0lMjc0JTI3IHN0cm9rZS1saW5lY2FwPSUyN3JvdW5kJTI3IHN0cm9rZS1saW5lam9pbj0lMjdyb3VuZCUyNyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0lMjcyMCA2IDkgMTcgNCAxMiUyNyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IHdpZHRoPSUyNzI0JTI3IGhlaWdodD0lMjcyNCUyNyB2aWV3Qm94PSUyNzAgMCAyNCAyNCUyNyBmaWxsPSUyN25vbmUlMjcgc3Ryb2tlPSUyN3JnYiUyODY1LCA4NCwgOTglMjklMjcgc3Ryb2tlLXdpZHRoPSUyNzIlMjcgc3Ryb2tlLWxpbmVjYXA9JTI3cm91bmQlMjcgc3Ryb2tlLWxpbmVqb2luPSUyN3JvdW5kJTI3JTNFJTNDcG9seWxpbmUgcG9pbnRzPSUyNzYgOSAxMiAxNSAxOCA5JTI3JTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgd2lkdGg9JTI3MjQlMjcgaGVpZ2h0PSUyNzI0JTI3IHZpZXdCb3g9JTI3MCAwIDI0IDI0JTI3IGZpbGw9JTI3bm9uZSUyNyBzdHJva2U9JTI3cmdiJTI4MjU1LCAyNTUsIDI1NSUyOSUyNyBzdHJva2Utd2lkdGg9JTI3MiUyNyBzdHJva2UtbGluZWNhcD0lMjdyb3VuZCUyNyBzdHJva2UtbGluZWpvaW49JTI3cm91bmQlMjclM0UlM0Nwb2x5bGluZSBwb2ludHM9JTI3NiA5IDEyIDE1IDE4IDklMjclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB3aWR0aD0lMjcyNCUyNyBoZWlnaHQ9JTI3MjQlMjcgdmlld0JveD0lMjcwIDAgMjQgMjQlMjcgZmlsbD0lMjdub25lJTI3IHN0cm9rZT0lMjdyZ2IlMjgxMTUsIDEzMCwgMTQwJTI5JTI3IHN0cm9rZS13aWR0aD0lMjc0JTI3IHN0cm9rZS1saW5lY2FwPSUyN3JvdW5kJTI3IHN0cm9rZS1saW5lam9pbj0lMjdyb3VuZCUyNyUzRSUzQ2xpbmUgeDE9JTI3MTglMjcgeTE9JTI3NiUyNyB4Mj0lMjc2JTI3IHkyPSUyNzE4JTI3JTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPSUyNzYlMjcgeTE9JTI3NiUyNyB4Mj0lMjcxOCUyNyB5Mj0lMjcxOCUyNyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgd2lkdGg9JTI3MjQlMjcgaGVpZ2h0PSUyNzI0JTI3IHZpZXdCb3g9JTI3MCAwIDI0IDI0JTI3IGZpbGw9JTI3bm9uZSUyNyBzdHJva2U9JTI3cmdiJTI4NjUsIDg0LCA5OCUyOSUyNyBzdHJva2Utd2lkdGg9JTI3MiUyNyBzdHJva2UtbGluZWNhcD0lMjdyb3VuZCUyNyBzdHJva2UtbGluZWpvaW49JTI3cm91bmQlMjclM0UlM0NyZWN0IHg9JTI3MyUyNyB5PSUyNzQlMjcgd2lkdGg9JTI3MTglMjcgaGVpZ2h0PSUyNzE4JTI3IHJ4PSUyNzIlMjcgcnk9JTI3MiUyNyUzRSUzQy9yZWN0JTNFJTNDbGluZSB4MT0lMjcxNiUyNyB5MT0lMjcyJTI3IHgyPSUyNzE2JTI3IHkyPSUyNzYlMjclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JTI3OCUyNyB5MT0lMjcyJTI3IHgyPSUyNzglMjcgeTI9JTI3NiUyNyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0lMjczJTI3IHkxPSUyNzEwJTI3IHgyPSUyNzIxJTI3IHkyPSUyNzEwJTI3JTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB3aWR0aD0lMjcyNCUyNyBoZWlnaHQ9JTI3MjQlMjcgdmlld0JveD0lMjcwIDAgMjQgMjQlMjcgZmlsbD0lMjdub25lJTI3IHN0cm9rZT0lMjdyZ2IlMjgxOTgsIDQwLCA0MCUyOSUyNyBzdHJva2Utd2lkdGg9JTI3MiUyNyBzdHJva2UtbGluZWNhcD0lMjdyb3VuZCUyNyBzdHJva2UtbGluZWpvaW49JTI3cm91bmQlMjclM0UlM0NjaXJjbGUgY3g9JTI3MTIlMjcgY3k9JTI3MTIlMjcgcj0lMjcxMCUyNyUzRSUzQy9jaXJjbGUlM0UlM0NsaW5lIHgxPSUyNzEyJTI3IHkxPSUyNzglMjcgeDI9JTI3MTIlMjcgeTI9JTI3MTIlMjclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JTI3MTIlMjcgeTE9JTI3MTYlMjcgeDI9JTI3MTIuMDElMjcgeTI9JTI3MTYlMjclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IHdpZHRoPSUyNzI0JTI3IGhlaWdodD0lMjcyNCUyNyB2aWV3Qm94PSUyNzAgMCAyNCAyNCUyNyBmaWxsPSUyN25vbmUlMjcgc3Ryb2tlPSUyN3JnYiUyODI1NSwgMjU1LCAyNTUlMjklMjcgc3Ryb2tlLXdpZHRoPSUyNzQlMjcgc3Ryb2tlLWxpbmVjYXA9JTI3cm91bmQlMjcgc3Ryb2tlLWxpbmVqb2luPSUyN3JvdW5kJTI3JTNFJTNDbGluZSB4MT0lMjc1JTI3IHkxPSUyNzEyJTI3IHgyPSUyNzE5JTI3IHkyPSUyNzEyJTI3JTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB3aWR0aD0lMjcyNCUyNyBoZWlnaHQ9JTI3MjQlMjcgdmlld0JveD0lMjcwIDAgMjQgMjQlMjcgZmlsbD0lMjdub25lJTI3IHN0cm9rZT0lMjdyZ2IlMjg2NSwgODQsIDk4JTI5JTI3IHN0cm9rZS13aWR0aD0lMjcyJTI3IHN0cm9rZS1saW5lY2FwPSUyN3JvdW5kJTI3IHN0cm9rZS1saW5lam9pbj0lMjdyb3VuZCUyNyUzRSUzQ2NpcmNsZSBjeD0lMjcxMSUyNyBjeT0lMjcxMSUyNyByPSUyNzglMjclM0UlM0MvY2lyY2xlJTNFJTNDbGluZSB4MT0lMjcyMSUyNyB5MT0lMjcyMSUyNyB4Mj0lMjcxNi42NSUyNyB5Mj0lMjcxNi42NSUyNyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgd2lkdGg9JTI3MjQlMjcgaGVpZ2h0PSUyNzI0JTI3IHZpZXdCb3g9JTI3MCAwIDI0IDI0JTI3IGZpbGw9JTI3bm9uZSUyNyBzdHJva2U9JTI3cmdiJTI4NjUsIDg0LCA5OCUyOSUyNyBzdHJva2Utd2lkdGg9JTI3MiUyNyBzdHJva2UtbGluZWNhcD0lMjdyb3VuZCUyNyBzdHJva2UtbGluZWpvaW49JTI3cm91bmQlMjclM0UlM0NjaXJjbGUgY3g9JTI3MTIlMjcgY3k9JTI3MTIlMjcgcj0lMjcxMCUyNyUzRSUzQy9jaXJjbGUlM0UlM0Nwb2x5bGluZSBwb2ludHM9JTI3MTIgNiAxMiAxMiAxNiAxNCUyNyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IHdpZHRoPSUyNzI0JTI3IGhlaWdodD0lMjcyNCUyNyB2aWV3Qm94PSUyNzAgMCAyNCAyNCUyNyBmaWxsPSUyN25vbmUlMjcgc3Ryb2tlPSUyN3JnYiUyODU2LCAxNDIsIDYwJTI5JTI3IHN0cm9rZS13aWR0aD0lMjczJTI3IHN0cm9rZS1saW5lY2FwPSUyN3JvdW5kJTI3IHN0cm9rZS1saW5lam9pbj0lMjdyb3VuZCUyNyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0lMjcyMCA2IDkgMTcgNCAxMiUyNyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQyUzRnhtbCB2ZXJzaW9uPSUyNzEuMCUyNyBlbmNvZGluZz0lMjdpc28tODg1OS0xJTI3JTNGJTNFJTNDJTIxLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0lM0UlM0NzdmcgZmlsbD0lMjclMjMwMDAwMDAlMjcgaGVpZ2h0PSUyNzgwMHB4JTI3IHdpZHRoPSUyNzgwMHB4JTI3IHZlcnNpb249JTI3MS4xJTI3IGlkPSUyN0NhcGFfMSUyNyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB4bWxuczp4bGluaz0lMjdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJTI3IHZpZXdCb3g9JTI3MCAwIDQ4OC44NSA0ODguODUlMjcgeG1sOnNwYWNlPSUyN3ByZXNlcnZlJTI3JTNFJTNDZyUzRSUzQ3BhdGggZD0lMjdNMjQ0LjQyNSw5OC43MjVjLTkzLjQsMC0xNzguMSw1MS4xLTI0MC42LDEzNC4xYy01LjEsNi44LTUuMSwxNi4zLDAsMjMuMWM2Mi41LDgzLjEsMTQ3LjIsMTM0LjIsMjQwLjYsMTM0LjIgczE3OC4xLTUxLjEsMjQwLjYtMTM0LjFjNS4xLTYuOCw1LjEtMTYuMywwLTIzLjFDNDIyLjUyNSwxNDkuODI1LDMzNy44MjUsOTguNzI1LDI0NC40MjUsOTguNzI1eiBNMjUxLjEyNSwzNDcuMDI1IGMtNjIsMy45LTExMy4yLTQ3LjItMTA5LjMtMTA5LjNjMy4yLTUxLjIsNDQuNy05Mi43LDk1LjktOTUuOWM2Mi0zLjksMTEzLjIsNDcuMiwxMDkuMywxMDkuMyBDMzQzLjcyNSwzMDIuMjI1LDMwMi4yMjUsMzQzLjcyNSwyNTEuMTI1LDM0Ny4wMjV6IE0yNDguMDI1LDI5OS42MjVjLTMzLjQsMi4xLTYxLTI1LjQtNTguOC01OC44YzEuNy0yNy42LDI0LjEtNDkuOSw1MS43LTUxLjcgYzMzLjQtMi4xLDYxLDI1LjQsNTguOCw1OC44QzI5Ny45MjUsMjc1LjYyNSwyNzUuNTI1LDI5Ny45MjUsMjQ4LjAyNSwyOTkuNjI1eiUyNy8lM0UlM0MvZyUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMTBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0taWNvbi1jaGVja2JveDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgLS1pY29uLWNoZXZyb246IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIC0taWNvbi1jaGV2cm9uLWJ1dHRvbjogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgLS1pY29uLWNoZXZyb24tYnV0dG9uLWludmVyc2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIC0taWNvbi1jbG9zZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgLS1pY29uLWRhdGU6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICAgIC0taWNvbi1pbnZhbGlkOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpO1xcbiAgICAtLWljb24tbWludXM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIik7XFxuICAgIC0taWNvbi1zZWFyY2g6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIik7XFxuICAgIC0taWNvbi10aW1lOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fICsgXCIpO1xcbiAgICAtLWljb24tdmFsaWQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzlfX18gKyBcIik7XFxuICAgIC0taWNvbi1leWU6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fICsgXCIpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2ljb25zLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdEQUF5UztJQUN6Uyx1REFBcVM7SUFDclMsOERBQStTO0lBQy9TLHNFQUF1VDtJQUN2VCxxREFBdVY7SUFDdlYsb0RBQTJjO0lBQzNjLHVEQUE2WTtJQUM3WSxxREFBcVM7SUFDclMsc0RBQXlWO0lBQ3pWLG9EQUFvVjtJQUNwVixxREFBb1M7SUFDcFMsb0RBQW02QjtBQUN2NkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWljb24tY2hlY2tib3g6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigyNTUsIDI1NSwgMjU1KScgc3Ryb2tlLXdpZHRoPSc0JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScyMCA2IDkgMTcgNCAxMiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXFxcIik7XFxuICAgIC0taWNvbi1jaGV2cm9uOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoNjUsIDg0LCA5OCknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgICAtLWljb24tY2hldnJvbi1idXR0b246IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigyNTUsIDI1NSwgMjU1KScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPSc2IDkgMTIgMTUgMTggOSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXFxcIik7XFxuICAgIC0taWNvbi1jaGV2cm9uLWJ1dHRvbi1pbnZlcnNlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMjU1LCAyNTUsIDI1NSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgICAtLWljb24tY2xvc2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigxMTUsIDEzMCwgMTQwKScgc3Ryb2tlLXdpZHRoPSc0JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnJTNFJTNDbGluZSB4MT0nMTgnIHkxPSc2JyB4Mj0nNicgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nNicgeTE9JzYnIHgyPScxOCcgeTI9JzE4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgICAtLWljb24tZGF0ZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDY1LCA4NCwgOTgpJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCclM0UlM0NyZWN0IHg9JzMnIHk9JzQnIHdpZHRoPScxOCcgaGVpZ2h0PScxOCcgcng9JzInIHJ5PScyJyUzRSUzQy9yZWN0JTNFJTNDbGluZSB4MT0nMTYnIHkxPScyJyB4Mj0nMTYnIHkyPSc2JyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nOCcgeTE9JzInIHgyPSc4JyB5Mj0nNiclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzMnIHkxPScxMCcgeDI9JzIxJyB5Mj0nMTAnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXFxcIik7XFxuICAgIC0taWNvbi1pbnZhbGlkOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMTk4LCA0MCwgNDApJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCclM0UlM0NjaXJjbGUgY3g9JzEyJyBjeT0nMTInIHI9JzEwJyUzRSUzQy9jaXJjbGUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzgnIHgyPScxMicgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMTInIHkxPScxNicgeDI9JzEyLjAxJyB5Mj0nMTYnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXFxcIik7XFxuICAgIC0taWNvbi1taW51czogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDI1NSwgMjU1LCAyNTUpJyBzdHJva2Utd2lkdGg9JzQnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCclM0UlM0NsaW5lIHgxPSc1JyB5MT0nMTInIHgyPScxOScgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgICAtLWljb24tc2VhcmNoOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoNjUsIDg0LCA5OCknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyUzRSUzQ2NpcmNsZSBjeD0nMTEnIGN5PScxMScgcj0nOCclM0UlM0MvY2lyY2xlJTNFJTNDbGluZSB4MT0nMjEnIHkxPScyMScgeDI9JzE2LjY1JyB5Mj0nMTYuNjUnJTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXFxcIik7XFxuICAgIC0taWNvbi10aW1lOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoNjUsIDg0LCA5OCknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyUzRSUzQ2NpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nMTAnJTNFJTNDL2NpcmNsZSUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMTIgNiAxMiAxMiAxNiAxNCclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXFxcIik7XFxuICAgIC0taWNvbi12YWxpZDogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDU2LCAxNDIsIDYwKScgc3Ryb2tlLXdpZHRoPSczJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScyMCA2IDkgMTcgNCAxMiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXFxcIik7XFxuICAgIC0taWNvbi1leWU6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQyUzRnhtbCB2ZXJzaW9uPScxLjAnIGVuY29kaW5nPSdpc28tODg1OS0xJyUzRiUzRSUzQyEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLSUzRSUzQ3N2ZyBmaWxsPSclMjMwMDAwMDAnIGhlaWdodD0nODAwcHgnIHdpZHRoPSc4MDBweCcgdmVyc2lvbj0nMS4xJyBpZD0nQ2FwYV8xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB2aWV3Qm94PScwIDAgNDg4Ljg1IDQ4OC44NScgeG1sOnNwYWNlPSdwcmVzZXJ2ZSclM0UlM0NnJTNFJTNDcGF0aCBkPSdNMjQ0LjQyNSw5OC43MjVjLTkzLjQsMC0xNzguMSw1MS4xLTI0MC42LDEzNC4xYy01LjEsNi44LTUuMSwxNi4zLDAsMjMuMWM2Mi41LDgzLjEsMTQ3LjIsMTM0LjIsMjQwLjYsMTM0LjIgczE3OC4xLTUxLjEsMjQwLjYtMTM0LjFjNS4xLTYuOCw1LjEtMTYuMywwLTIzLjFDNDIyLjUyNSwxNDkuODI1LDMzNy44MjUsOTguNzI1LDI0NC40MjUsOTguNzI1eiBNMjUxLjEyNSwzNDcuMDI1IGMtNjIsMy45LTExMy4yLTQ3LjItMTA5LjMtMTA5LjNjMy4yLTUxLjIsNDQuNy05Mi43LDk1LjktOTUuOWM2Mi0zLjksMTEzLjIsNDcuMiwxMDkuMywxMDkuMyBDMzQzLjcyNSwzMDIuMjI1LDMwMi4yMjUsMzQzLjcyNSwyNTEuMTI1LDM0Ny4wMjV6IE0yNDguMDI1LDI5OS42MjVjLTMzLjQsMi4xLTYxLTI1LjQtNTguOC01OC44YzEuNy0yNy42LDI0LjEtNDkuOSw1MS43LTUxLjcgYzMzLjQtMi4xLDYxLDI1LjQsNTguOCw1OC44QzI5Ny45MjUsMjc1LjYyNSwyNzUuNTI1LDI5Ny45MjUsMjQ4LjAyNSwyOTkuNjI1eicvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXFxcIik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLyogMSAqL1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAgICovXFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAgICovXFxuXFxuaHIge1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxucHJlIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAvKiAxICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAvKiAyICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICAgKiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAvKiAxICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgLyogMSAqL1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuZmllbGRzZXQge1xcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxubGVnZW5kIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgLyogMiAqL1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgLyogMSAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDtcXG4gICAgLyogMyAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICAvKiAxICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gICAqL1xcblxcbnByb2dyZXNzIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAgICovXFxuXFxudGV4dGFyZWEge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gICAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAgICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAgICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAgIC8qIDEgKi9cXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gICAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gICAgLyogMSAqL1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICovXFxuXFxuZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gICAqL1xcblxcbltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLDhCQUE4QjtJQUM5QixNQUFNO0FBQ1Y7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLFNBQVM7QUFDYjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJOztBQUVKO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtpRkFDaUY7O0FBRWpGOzs7SUFHSTs7QUFFSjtJQUNJLHVCQUF1QjtJQUN2QixNQUFNO0lBQ04sU0FBUztJQUNULE1BQU07SUFDTixpQkFBaUI7SUFDakIsTUFBTTtBQUNWOztBQUVBOzs7SUFHSTs7QUFFSjtJQUNJLGlDQUFpQztJQUNqQyxNQUFNO0lBQ04sY0FBYztJQUNkLE1BQU07QUFDVjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBOzs7SUFHSTs7QUFFSjtJQUNJLG1CQUFtQjtJQUNuQixNQUFNO0lBQ04sMEJBQTBCO0lBQzFCLE1BQU07SUFDTixpQ0FBaUM7SUFDakMsTUFBTTtBQUNWOztBQUVBOztJQUVJOztBQUVKOztJQUVJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7O0lBR0k7O0FBRUo7OztJQUdJLGlDQUFpQztJQUNqQyxNQUFNO0lBQ04sY0FBYztJQUNkLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJOztBQUVKOztJQUVJLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtpRkFDaUY7O0FBRWpGOzs7SUFHSTs7QUFFSjs7Ozs7SUFLSSxvQkFBb0I7SUFDcEIsTUFBTTtJQUNOLGVBQWU7SUFDZixNQUFNO0lBQ04saUJBQWlCO0lBQ2pCLE1BQU07SUFDTixTQUFTO0lBQ1QsTUFBTTtBQUNWOztBQUVBOzs7SUFHSTs7QUFFSjs7SUFFSSxNQUFNO0lBQ04saUJBQWlCO0FBQ3JCOztBQUVBOzs7SUFHSTs7QUFFSjs7SUFFSSxNQUFNO0lBQ04sb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJOztBQUVKOzs7O0lBSUksMEJBQTBCO0FBQzlCOztBQUVBOztJQUVJOztBQUVKOzs7O0lBSUksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSTs7QUFFSjs7OztJQUlJLDhCQUE4QjtBQUNsQzs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTs7Ozs7SUFLSTs7QUFFSjtJQUNJLHNCQUFzQjtJQUN0QixNQUFNO0lBQ04sY0FBYztJQUNkLE1BQU07SUFDTixjQUFjO0lBQ2QsTUFBTTtJQUNOLGVBQWU7SUFDZixNQUFNO0lBQ04sVUFBVTtJQUNWLE1BQU07SUFDTixtQkFBbUI7SUFDbkIsTUFBTTtBQUNWOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7O0lBR0k7O0FBRUo7O0lBRUksc0JBQXNCO0lBQ3RCLE1BQU07SUFDTixVQUFVO0lBQ1YsTUFBTTtBQUNWOztBQUVBOztJQUVJOztBQUVKOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJOztBQUVKO0lBQ0ksNkJBQTZCO0lBQzdCLE1BQU07SUFDTixvQkFBb0I7SUFDcEIsTUFBTTtBQUNWOztBQUVBOztJQUVJOztBQUVKO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBOzs7SUFHSTs7QUFFSjtJQUNJLDBCQUEwQjtJQUMxQixNQUFNO0lBQ04sYUFBYTtJQUNiLE1BQU07QUFDVjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAvKiAxICovXFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICAgKi9cXG5cXG5tYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICAgKi9cXG5cXG5ociB7XFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgICAvKiAxICovXFxuICAgIGhlaWdodDogMDtcXG4gICAgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5wcmUge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5hIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gICAgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gICAqIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgICBmb250LXNpemU6IDc1JTtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICAgIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcblxcbmltZyB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgLyogMSAqL1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICAvKiAxICovXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICAgKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5maWVsZHNldCB7XFxuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5sZWdlbmQge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiAxICovXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAvKiAyICovXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICAvKiAxICovXFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiAzICovXFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAgICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICAgKi9cXG5cXG50ZXh0YXJlYSB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAgICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICAgKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICAgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gICAgLyogMSAqL1xcbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gICAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAgICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICAgKi9cXG5cXG5kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zdW1tYXJ5IHtcXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAgICovXFxuXFxudGVtcGxhdGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAgICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tdy1zcGFjaW5nLTEwMDogMC40ZW07XFxuICAgIC0tdy1zcGFjaW5nLTIwMDogMC42ZW07XFxuICAgIC0tdy1zcGFjaW5nLTMwMDogMWVtO1xcbiAgICAtLXctc3BhY2luZy00MDA6IDEuMmVtO1xcbiAgICAtLXctc3BhY2luZy01MDA6IDEuNmVtO1xcbiAgICAtLXctc3BhY2luZy02MDA6IDJlbTtcXG5cXG4gICAgLS13LXNwYWNpbmctLXBhZ2UtLXZlcnRpY2FsLXNwYWNlOiB2YXIoLS13LXNwYWNpbmctMzAwKTtcXG4gICAgLS13LXNwYWNpbmctLXBhZ2UtLWhvcml6b250YWwtc3BhY2U6IHZhcigtLXctc3BhY2luZy02MDApO1xcblxcbiAgICAtLXctYm9yZGVyLXdpZHRoLS10aGluOiAxcHg7XFxuICAgIC0tdy1ib3JkZXItd2lkdGgtLXJlZ3VsYXI6IDJweDtcXG5cXG4gICAgLS13LWJvcmRlci1yYWRpdXMtMTAwOiAwLjJlbTtcXG4gICAgLS13LWJvcmRlci1yYWRpdXMtMjAwOiAwLjRlbTtcXG4gICAgLS13LWJvcmRlci1yYWRpdXMtMzAwOiAwLjZlbTtcXG4gICAgLS13LWJvcmRlci1yYWRpdXMtNDAwOiAwLjhlbTtcXG4gICAgLS13LWJvcmRlci1yYWRpdXMtNTAwOiAxZW07XFxuXFxuXFxuICAgIC8qXFxuICAgICAqIElmIGluY3JlYXNpbmcgY29sdW1uIG51bWJlciB0byBhIHZhbHVlID4gMTYsIC9jb21wb25lbnRzL2xheW91dC9ncmlkL2dyaWQuanMgbXVzdCBiZSBhZG9wdGVkIGFzIHdlbGwuXFxuICAgICAqL1xcbiAgICAtLXctZ3JpZC1jb2x1bW5zOiAxNjtcXG4gICAgLS13LWdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLXctZ3JpZC1jb2x1bW5zKSwgMWZyIFtjb2xdKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zcGFjaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsb0JBQW9COztJQUVwQix1REFBdUQ7SUFDdkQseURBQXlEOztJQUV6RCwyQkFBMkI7SUFDM0IsOEJBQThCOztJQUU5Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsMEJBQTBCOzs7SUFHMUI7O01BRUU7SUFDRixvQkFBb0I7SUFDcEIsbUVBQW1FO0FBQ3ZFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS13LXNwYWNpbmctMTAwOiAwLjRlbTtcXG4gICAgLS13LXNwYWNpbmctMjAwOiAwLjZlbTtcXG4gICAgLS13LXNwYWNpbmctMzAwOiAxZW07XFxuICAgIC0tdy1zcGFjaW5nLTQwMDogMS4yZW07XFxuICAgIC0tdy1zcGFjaW5nLTUwMDogMS42ZW07XFxuICAgIC0tdy1zcGFjaW5nLTYwMDogMmVtO1xcblxcbiAgICAtLXctc3BhY2luZy0tcGFnZS0tdmVydGljYWwtc3BhY2U6IHZhcigtLXctc3BhY2luZy0zMDApO1xcbiAgICAtLXctc3BhY2luZy0tcGFnZS0taG9yaXpvbnRhbC1zcGFjZTogdmFyKC0tdy1zcGFjaW5nLTYwMCk7XFxuXFxuICAgIC0tdy1ib3JkZXItd2lkdGgtLXRoaW46IDFweDtcXG4gICAgLS13LWJvcmRlci13aWR0aC0tcmVndWxhcjogMnB4O1xcblxcbiAgICAtLXctYm9yZGVyLXJhZGl1cy0xMDA6IDAuMmVtO1xcbiAgICAtLXctYm9yZGVyLXJhZGl1cy0yMDA6IDAuNGVtO1xcbiAgICAtLXctYm9yZGVyLXJhZGl1cy0zMDA6IDAuNmVtO1xcbiAgICAtLXctYm9yZGVyLXJhZGl1cy00MDA6IDAuOGVtO1xcbiAgICAtLXctYm9yZGVyLXJhZGl1cy01MDA6IDFlbTtcXG5cXG5cXG4gICAgLypcXG4gICAgICogSWYgaW5jcmVhc2luZyBjb2x1bW4gbnVtYmVyIHRvIGEgdmFsdWUgPiAxNiwgL2NvbXBvbmVudHMvbGF5b3V0L2dyaWQvZ3JpZC5qcyBtdXN0IGJlIGFkb3B0ZWQgYXMgd2VsbC5cXG4gICAgICovXFxuICAgIC0tdy1ncmlkLWNvbHVtbnM6IDE2O1xcbiAgICAtLXctZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tdy1ncmlkLWNvbHVtbnMpLCAxZnIgW2NvbF0pO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcblxcbiAgICBmb250LWZhbWlseTogdmFyKC0tdy1mb250LWZhbWlseS10ZXh0KTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtdGV4dC1yZWd1bGFyKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTQwMCk7XFxuXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLypcXG4gKiBIZWFkaW5nc1xcbiAqL1xcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBtYXJnaW46IDEuMmVtIDAgMWVtIDA7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTgwMCk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS13LWZvbnQtd2VpZ2h0LXRleHQtc2VtaWJvbGQpO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtdGV4dC02MDApO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tdy1mb250LXdlaWdodC10ZXh0LXNlbWlib2xkKTtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNTAwKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtdGV4dC1zZW1pYm9sZCk7XFxufVxcblxcbmg0IHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTQwMCk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS13LWZvbnQtd2VpZ2h0LXRleHQtc2VtaWJvbGQpO1xcbn1cXG5cXG5oNSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtdGV4dC00MDApO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tdy1mb250LXdlaWdodC10ZXh0LXNlbWlib2xkKTtcXG4gICAgY29sb3I6IHZhcigtLXctbXV0ZWQtY29sb3IpO1xcbn1cXG5cXG5oNiB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtdGV4dC00MDApO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tdy1mb250LXdlaWdodC10ZXh0LXJlZ3VsYXIpO1xcbiAgICBjb2xvcjogdmFyKC0tdy1tdXRlZC1jb2xvcik7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBcXG59XFxuXFxuLypcXG4gKiBUZXh0IGNvbnRlbnRcXG4gKi9cXG5wIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbn1cXG5cXG5jb2RlIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXctZm9udC1mYW1pbHktbW9ubyk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS13LWZvbnQtd2VpZ2h0LW1vbm8tcmVndWxhcik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtbW9uby00MDApO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItNzAwKTtcXG59XFxuXFxuc2VjdGlvbiA+IDpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi8qIFxcbiAqIFRhYmxlc1xcbiAqL1xcbnRhYmxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG50aGVhZCB0ciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvci01MDApO1xcbn1cXG5cXG50aGVhZCB0aCxcXG50Ym9keSB0ZCB7XFxuICAgIHBhZGRpbmc6IHZhcigtLXctc3BhY2luZy00MDApO1xcbiAgICBib3JkZXI6IHZhcigtLXctYm9yZGVyLXdpZHRoLS10aGluKSBzb2xpZCB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItODAwKTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxudGhlYWQgdGgge1xcbiAgICBjb2xvcjogdmFyKC0tdy1tdXRlZC1jb2xvcik7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbnRoZWFkIHRoOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcblxcbnRoZWFkIHRoOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcblxcbnRib2R5IHRyOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3RoZW1lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7O0lBRVYsc0NBQXNDO0lBQ3RDLDhDQUE4QztJQUM5QyxzQ0FBc0M7O0lBRXRDLGtCQUFrQjs7SUFFbEIsMkNBQTJDO0FBQy9DOztBQUVBOztFQUVFO0FBQ0Y7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QywrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLCtDQUErQztJQUMvQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsOENBQThDO0lBQzlDLDJCQUEyQjtJQUMzQiwwQkFBMEI7O0FBRTlCOztBQUVBOztFQUVFO0FBQ0Y7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsOENBQThDO0lBQzlDLHNDQUFzQzs7SUFFdEMsK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7RUFFRTtBQUNGO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTs7SUFFSSw2QkFBNkI7SUFDN0IsdUVBQXVFO0lBQ3ZFLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXctZm9udC1mYW1pbHktdGV4dCk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS13LWZvbnQtd2VpZ2h0LXRleHQtcmVndWxhcik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtdGV4dC00MDApO1xcblxcbiAgICBsaW5lLWhlaWdodDogMS4zZW07XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi8qXFxuICogSGVhZGluZ3NcXG4gKi9cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gICAgbWFyZ2luOiAxLjJlbSAwIDFlbSAwO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtdGV4dC04MDApO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tdy1mb250LXdlaWdodC10ZXh0LXNlbWlib2xkKTtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNjAwKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtdGV4dC1zZW1pYm9sZCk7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTUwMCk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS13LWZvbnQtd2VpZ2h0LXRleHQtc2VtaWJvbGQpO1xcbn1cXG5cXG5oNCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtdGV4dC00MDApO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tdy1mb250LXdlaWdodC10ZXh0LXNlbWlib2xkKTtcXG59XFxuXFxuaDUge1xcbiAgICBmb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNDAwKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtdGV4dC1zZW1pYm9sZCk7XFxuICAgIGNvbG9yOiB2YXIoLS13LW11dGVkLWNvbG9yKTtcXG59XFxuXFxuaDYge1xcbiAgICBmb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNDAwKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtdGV4dC1yZWd1bGFyKTtcXG4gICAgY29sb3I6IHZhcigtLXctbXV0ZWQtY29sb3IpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgXFxufVxcblxcbi8qXFxuICogVGV4dCBjb250ZW50XFxuICovXFxucCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG59XFxuXFxuY29kZSB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS13LWZvbnQtZmFtaWx5LW1vbm8pO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tdy1mb250LXdlaWdodC1tb25vLXJlZ3VsYXIpO1xcbiAgICBmb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLW1vbm8tNDAwKTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTcwMCk7XFxufVxcblxcbnNlY3Rpb24gPiA6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4vKiBcXG4gKiBUYWJsZXNcXG4gKi9cXG50YWJsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxudGhlYWQgdHIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItNTAwKTtcXG59XFxuXFxudGhlYWQgdGgsXFxudGJvZHkgdGQge1xcbiAgICBwYWRkaW5nOiB2YXIoLS13LXNwYWNpbmctNDAwKTtcXG4gICAgYm9yZGVyOiB2YXIoLS13LWJvcmRlci13aWR0aC0tdGhpbikgc29saWQgdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTgwMCk7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbnRoZWFkIHRoIHtcXG4gICAgY29sb3I6IHZhcigtLXctbXV0ZWQtY29sb3IpO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG50aGVhZCB0aDpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cXG5cXG50aGVhZCB0aDpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG5cXG50Ym9keSB0cjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXctZm9udC1mYW1pbHktdGV4dDogQXJpYWwsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXG4gICAgLS13LWZvbnQtd2VpZ2h0LXRleHQtdGhpbjogMzAwO1xcbiAgICAtLXctZm9udC13ZWlnaHQtdGV4dC1yZWd1bGFyOiA0MDA7XFxuICAgIC0tdy1mb250LXdlaWdodC10ZXh0LXNlbWlib2xkOiA2MDA7XFxuICAgIC0tdy1mb250LXdlaWdodC10ZXh0LWJvbGQ6IDgwMDtcXG5cXG4gICAgLS13LWZvbnQtc2l6ZS10ZXh0LTEwMDogMC44ZW07XFxuICAgIC0tdy1mb250LXNpemUtdGV4dC0yMDA6IDAuOGVtO1xcbiAgICAtLXctZm9udC1zaXplLXRleHQtMzAwOiAwLjhlbTtcXG4gICAgLS13LWZvbnQtc2l6ZS10ZXh0LTQwMDogMWVtO1xcbiAgICAtLXctZm9udC1zaXplLXRleHQtNTAwOiAxLjJlbTtcXG4gICAgLS13LWZvbnQtc2l6ZS10ZXh0LTYwMDogMS40ZW07XFxuICAgIC0tdy1mb250LXNpemUtdGV4dC03MDA6IDEuNmVtO1xcbiAgICAtLXctZm9udC1zaXplLXRleHQtODAwOiAxLjhlbTtcXG4gICAgLS13LWZvbnQtc2l6ZS10ZXh0LTkwMDogMmVtO1xcblxcbiAgICAtLXctZm9udC1mYW1pbHktbW9ubzogbW9ub3NwYWNlO1xcbiAgICAtLXctZm9udC13ZWlnaHQtbW9uby10aGluOiAzMDA7XFxuICAgIC0tdy1mb250LXdlaWdodC1tb25vLXJlZ3VsYXI6IDQwMDtcXG4gICAgLS13LWZvbnQtd2VpZ2h0LW1vbm8tc2VtaWJvbGQ6IDYwMDtcXG4gICAgLS13LWZvbnQtd2VpZ2h0LW1vbm8tYm9sZDogODAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3R5cG9ncmFwaHkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0RBQWtEO0lBQ2xELDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLDhCQUE4Qjs7SUFFOUIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QiwyQkFBMkI7O0lBRTNCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLGtDQUFrQztJQUNsQyw4QkFBOEI7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXctZm9udC1mYW1pbHktdGV4dDogQXJpYWwsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXG4gICAgLS13LWZvbnQtd2VpZ2h0LXRleHQtdGhpbjogMzAwO1xcbiAgICAtLXctZm9udC13ZWlnaHQtdGV4dC1yZWd1bGFyOiA0MDA7XFxuICAgIC0tdy1mb250LXdlaWdodC10ZXh0LXNlbWlib2xkOiA2MDA7XFxuICAgIC0tdy1mb250LXdlaWdodC10ZXh0LWJvbGQ6IDgwMDtcXG5cXG4gICAgLS13LWZvbnQtc2l6ZS10ZXh0LTEwMDogMC44ZW07XFxuICAgIC0tdy1mb250LXNpemUtdGV4dC0yMDA6IDAuOGVtO1xcbiAgICAtLXctZm9udC1zaXplLXRleHQtMzAwOiAwLjhlbTtcXG4gICAgLS13LWZvbnQtc2l6ZS10ZXh0LTQwMDogMWVtO1xcbiAgICAtLXctZm9udC1zaXplLXRleHQtNTAwOiAxLjJlbTtcXG4gICAgLS13LWZvbnQtc2l6ZS10ZXh0LTYwMDogMS40ZW07XFxuICAgIC0tdy1mb250LXNpemUtdGV4dC03MDA6IDEuNmVtO1xcbiAgICAtLXctZm9udC1zaXplLXRleHQtODAwOiAxLjhlbTtcXG4gICAgLS13LWZvbnQtc2l6ZS10ZXh0LTkwMDogMmVtO1xcblxcbiAgICAtLXctZm9udC1mYW1pbHktbW9ubzogbW9ub3NwYWNlO1xcbiAgICAtLXctZm9udC13ZWlnaHQtbW9uby10aGluOiAzMDA7XFxuICAgIC0tdy1mb250LXdlaWdodC1tb25vLXJlZ3VsYXI6IDQwMDtcXG4gICAgLS13LWZvbnQtd2VpZ2h0LW1vbm8tc2VtaWJvbGQ6IDYwMDtcXG4gICAgLS13LWZvbnQtd2VpZ2h0LW1vbm8tYm9sZDogODAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuXFxuXFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTEwMC0tZm9udC1zaXplLS1oZWxwOiBcXFwiRm9udCBzaXplIGZvciBgc2l6ZT0xMDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTEwMC0tZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTEwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTIwMC0tZm9udC1zaXplLS1oZWxwOiBcXFwiRm9udCBzaXplIGZvciBgc2l6ZT0yMDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTIwMC0tZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTIwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTMwMC0tZm9udC1zaXplLS1oZWxwOiBcXFwiRm9udCBzaXplIGZvciBgc2l6ZT0zMDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTMwMC0tZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTMwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTQwMC0tZm9udC1zaXplLS1oZWxwOiBcXFwiRm9udCBzaXplIGZvciBgc2l6ZT00MDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTQwMC0tZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTQwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTUwMC0tZm9udC1zaXplLS1oZWxwOiBcXFwiRm9udCBzaXplIGZvciBgc2l6ZT01MDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTUwMC0tZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTUwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTYwMC0tZm9udC1zaXplLS1oZWxwOiBcXFwiRm9udCBzaXplIGZvciBgc2l6ZT02MDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTYwMC0tZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTYwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTcwMC0tZm9udC1zaXplLS1oZWxwOiBcXFwiRm9udCBzaXplIGZvciBgc2l6ZT03MDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTcwMC0tZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTcwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTgwMC0tZm9udC1zaXplLS1oZWxwOiBcXFwiRm9udCBzaXplIGZvciBgc2l6ZT04MDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTgwMC0tZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTgwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTkwMC0tZm9udC1zaXplLS1oZWxwOiBcXFwiRm9udCBzaXplIGZvciBgc2l6ZT05MDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTkwMC0tZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTkwMCk7XFxuXFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTEwMC0tbWFyZ2luLXRvcC0taGVscDogXFxcIlRvcCBtYXJnaW4gZm9yIGBzaXplPTEwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtMTAwLS1tYXJnaW4tdG9wOiB2YXIoLS13LXNwYWNpbmctMjAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtMjAwLS1tYXJnaW4tdG9wLS1oZWxwOiBcXFwiVG9wIG1hcmdpbiBmb3IgYHNpemU9MjAwYC5cXFwiO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS0yMDAtLW1hcmdpbi10b3A6IHZhcigtLXctc3BhY2luZy0zMDApO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS0zMDAtLW1hcmdpbi10b3AtLWhlbHA6IFxcXCJUb3AgbWFyZ2luIGZvciBgc2l6ZT0zMDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTMwMC0tbWFyZ2luLXRvcDogdmFyKC0tdy1zcGFjaW5nLTMwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTQwMC0tbWFyZ2luLXRvcC0taGVscDogXFxcIlRvcCBtYXJnaW4gZm9yIGBzaXplPTQwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNDAwLS1tYXJnaW4tdG9wOiB2YXIoLS13LXNwYWNpbmctMzAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNTAwLS1tYXJnaW4tdG9wLS1oZWxwOiBcXFwiVG9wIG1hcmdpbiBmb3IgYHNpemU9NTAwYC5cXFwiO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS01MDAtLW1hcmdpbi10b3A6IHZhcigtLXctc3BhY2luZy00MDApO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS02MDAtLW1hcmdpbi10b3AtLWhlbHA6IFxcXCJUb3AgbWFyZ2luIGZvciBgc2l6ZT02MDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTYwMC0tbWFyZ2luLXRvcDogdmFyKC0tdy1zcGFjaW5nLTQwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTcwMC0tbWFyZ2luLXRvcC0taGVscDogXFxcIlRvcCBtYXJnaW4gZm9yIGBzaXplPTcwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNzAwLS1tYXJnaW4tdG9wOiB2YXIoLS13LXNwYWNpbmctNDAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtODAwLS1tYXJnaW4tdG9wLS1oZWxwOiBcXFwiVG9wIG1hcmdpbiBmb3IgYHNpemU9ODAwYC5cXFwiO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS04MDAtLW1hcmdpbi10b3A6IHZhcigtLXctc3BhY2luZy01MDApO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS05MDAtLW1hcmdpbi10b3AtLWhlbHA6IFxcXCJUb3AgbWFyZ2luIGZvciBgc2l6ZT05MDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTkwMC0tbWFyZ2luLXRvcDogdmFyKC0tdy1zcGFjaW5nLTUwMCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9qcy9jb21wb25lbnRzL2F0b21zL2hlYWRpbmcvaGVhZGluZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLG1FQUFtRTtJQUNuRSw2REFBNkQ7SUFDN0QsbUVBQW1FO0lBQ25FLDZEQUE2RDtJQUM3RCxtRUFBbUU7SUFDbkUsNkRBQTZEO0lBQzdELG1FQUFtRTtJQUNuRSw2REFBNkQ7SUFDN0QsbUVBQW1FO0lBQ25FLDZEQUE2RDtJQUM3RCxtRUFBbUU7SUFDbkUsNkRBQTZEO0lBQzdELG1FQUFtRTtJQUNuRSw2REFBNkQ7SUFDN0QsbUVBQW1FO0lBQ25FLDZEQUE2RDtJQUM3RCxtRUFBbUU7SUFDbkUsNkRBQTZEOztJQUU3RCxxRUFBcUU7SUFDckUsdURBQXVEO0lBQ3ZELHFFQUFxRTtJQUNyRSx1REFBdUQ7SUFDdkQscUVBQXFFO0lBQ3JFLHVEQUF1RDtJQUN2RCxxRUFBcUU7SUFDckUsdURBQXVEO0lBQ3ZELHFFQUFxRTtJQUNyRSx1REFBdUQ7SUFDdkQscUVBQXFFO0lBQ3JFLHVEQUF1RDtJQUN2RCxxRUFBcUU7SUFDckUsdURBQXVEO0lBQ3ZELHFFQUFxRTtJQUNyRSx1REFBdUQ7SUFDdkQscUVBQXFFO0lBQ3JFLHVEQUF1RDtBQUMzRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuXFxuXFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTEwMC0tZm9udC1zaXplLS1oZWxwOiBcXFwiRm9udCBzaXplIGZvciBgc2l6ZT0xMDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTEwMC0tZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTEwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTIwMC0tZm9udC1zaXplLS1oZWxwOiBcXFwiRm9udCBzaXplIGZvciBgc2l6ZT0yMDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTIwMC0tZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTIwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTMwMC0tZm9udC1zaXplLS1oZWxwOiBcXFwiRm9udCBzaXplIGZvciBgc2l6ZT0zMDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTMwMC0tZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTMwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTQwMC0tZm9udC1zaXplLS1oZWxwOiBcXFwiRm9udCBzaXplIGZvciBgc2l6ZT00MDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTQwMC0tZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTQwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTUwMC0tZm9udC1zaXplLS1oZWxwOiBcXFwiRm9udCBzaXplIGZvciBgc2l6ZT01MDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTUwMC0tZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTUwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTYwMC0tZm9udC1zaXplLS1oZWxwOiBcXFwiRm9udCBzaXplIGZvciBgc2l6ZT02MDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTYwMC0tZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTYwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTcwMC0tZm9udC1zaXplLS1oZWxwOiBcXFwiRm9udCBzaXplIGZvciBgc2l6ZT03MDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTcwMC0tZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTcwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTgwMC0tZm9udC1zaXplLS1oZWxwOiBcXFwiRm9udCBzaXplIGZvciBgc2l6ZT04MDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTgwMC0tZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTgwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTkwMC0tZm9udC1zaXplLS1oZWxwOiBcXFwiRm9udCBzaXplIGZvciBgc2l6ZT05MDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTkwMC0tZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTkwMCk7XFxuXFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTEwMC0tbWFyZ2luLXRvcC0taGVscDogXFxcIlRvcCBtYXJnaW4gZm9yIGBzaXplPTEwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtMTAwLS1tYXJnaW4tdG9wOiB2YXIoLS13LXNwYWNpbmctMjAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtMjAwLS1tYXJnaW4tdG9wLS1oZWxwOiBcXFwiVG9wIG1hcmdpbiBmb3IgYHNpemU9MjAwYC5cXFwiO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS0yMDAtLW1hcmdpbi10b3A6IHZhcigtLXctc3BhY2luZy0zMDApO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS0zMDAtLW1hcmdpbi10b3AtLWhlbHA6IFxcXCJUb3AgbWFyZ2luIGZvciBgc2l6ZT0zMDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTMwMC0tbWFyZ2luLXRvcDogdmFyKC0tdy1zcGFjaW5nLTMwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTQwMC0tbWFyZ2luLXRvcC0taGVscDogXFxcIlRvcCBtYXJnaW4gZm9yIGBzaXplPTQwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNDAwLS1tYXJnaW4tdG9wOiB2YXIoLS13LXNwYWNpbmctMzAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNTAwLS1tYXJnaW4tdG9wLS1oZWxwOiBcXFwiVG9wIG1hcmdpbiBmb3IgYHNpemU9NTAwYC5cXFwiO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS01MDAtLW1hcmdpbi10b3A6IHZhcigtLXctc3BhY2luZy00MDApO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS02MDAtLW1hcmdpbi10b3AtLWhlbHA6IFxcXCJUb3AgbWFyZ2luIGZvciBgc2l6ZT02MDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTYwMC0tbWFyZ2luLXRvcDogdmFyKC0tdy1zcGFjaW5nLTQwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTcwMC0tbWFyZ2luLXRvcC0taGVscDogXFxcIlRvcCBtYXJnaW4gZm9yIGBzaXplPTcwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNzAwLS1tYXJnaW4tdG9wOiB2YXIoLS13LXNwYWNpbmctNDAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtODAwLS1tYXJnaW4tdG9wLS1oZWxwOiBcXFwiVG9wIG1hcmdpbiBmb3IgYHNpemU9ODAwYC5cXFwiO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS04MDAtLW1hcmdpbi10b3A6IHZhcigtLXctc3BhY2luZy01MDApO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS05MDAtLW1hcmdpbi10b3AtLWhlbHA6IFxcXCJUb3AgbWFyZ2luIGZvciBgc2l6ZT05MDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTkwMC0tbWFyZ2luLXRvcDogdmFyKC0tdy1zcGFjaW5nLTUwMCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS13LW1hcmtkb3duLS1zcGFjaW5nLXMtLW1hcmdpbi10b3A6IHZhcigtLXctc3BhY2luZy0zMDApO1xcbiAgICAtLXctbWFya2Rvd24tLXNwYWNpbmctcy0tbWFyZ2luLWJvdHRvbTogdmFyKC0tdy1zcGFjaW5nLTMwMCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9qcy9jb21wb25lbnRzL2F0b21zL21hcmtkb3duL21hcmtkb3duLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlEQUF5RDtJQUN6RCw0REFBNEQ7QUFDaEVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXctbWFya2Rvd24tLXNwYWNpbmctcy0tbWFyZ2luLXRvcDogdmFyKC0tdy1zcGFjaW5nLTMwMCk7XFxuICAgIC0tdy1tYXJrZG93bi0tc3BhY2luZy1zLS1tYXJnaW4tYm90dG9tOiB2YXIoLS13LXNwYWNpbmctMzAwKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXctcGFuZS0tYm9yZGVyLXJhZGl1czogdmFyKC0tdy1ib3JkZXItcmFkaXVzLTIwMCk7XFxuICAgIC0tdy1wYW5lLS1zcGFjaW5nLXMtLXBhZGRpbmc6IHZhcigtLXctc3BhY2luZy0zMDApO1xcbiAgICAtLXctcGFuZS0tc3BhY2luZy1tLS1wYWRkaW5nOiB2YXIoLS13LXNwYWNpbmctNDAwKTtcXG5cXG4gICAgLS13LXBhbmUtLWVsZXZhdGlvbi01MDAtLWJvcmRlci13aWR0aDogdmFyKC0tdy1ib3JkZXItd2lkdGgtLXRoaW4pO1xcbiAgICAtLXctcGFuZS0tZWxldmF0aW9uLTUwMC0tYm9yZGVyLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItODAwKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2pzL2NvbXBvbmVudHMvYXRvbXMvcGFuZS9wYW5lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1EQUFtRDtJQUNuRCxrREFBa0Q7SUFDbEQsa0RBQWtEOztJQUVsRCxrRUFBa0U7SUFDbEUsb0VBQW9FO0FBQ3hFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS13LXBhbmUtLWJvcmRlci1yYWRpdXM6IHZhcigtLXctYm9yZGVyLXJhZGl1cy0yMDApO1xcbiAgICAtLXctcGFuZS0tc3BhY2luZy1zLS1wYWRkaW5nOiB2YXIoLS13LXNwYWNpbmctMzAwKTtcXG4gICAgLS13LXBhbmUtLXNwYWNpbmctbS0tcGFkZGluZzogdmFyKC0tdy1zcGFjaW5nLTQwMCk7XFxuXFxuICAgIC0tdy1wYW5lLS1lbGV2YXRpb24tNTAwLS1ib3JkZXItd2lkdGg6IHZhcigtLXctYm9yZGVyLXdpZHRoLS10aGluKTtcXG4gICAgLS13LXBhbmUtLWVsZXZhdGlvbi01MDAtLWJvcmRlci1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTgwMCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS13LXByZS0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yKTtcXG4gICAgLS13LXByZS0tY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIC0tdy1wcmUtLXBhZGRpbmc6IHZhcigtLXctc3BhY2luZy0xMDApIHZhcigtLXctc3BhY2luZy0yMDApO1xcblxcbiAgICAtLXctcHJlLS1mb250LWZhbWlseTogdmFyKC0tdy1mb250LWZhbWlseS1tb25vKTtcXG4gICAgLS13LXByZS0tZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtbW9uby1yZWd1bGFyKTtcXG4gICAgLS13LXByZS0tZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTQwMCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9qcy9jb21wb25lbnRzL2F0b21zL3ByZS9wcmUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOENBQThDO0lBQzlDLHlDQUF5QztJQUN6QywyREFBMkQ7O0lBRTNELCtDQUErQztJQUMvQyx1REFBdUQ7SUFDdkQsK0NBQStDO0FBQ25EXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS13LXByZS0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yKTtcXG4gICAgLS13LXByZS0tY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIC0tdy1wcmUtLXBhZGRpbmc6IHZhcigtLXctc3BhY2luZy0xMDApIHZhcigtLXctc3BhY2luZy0yMDApO1xcblxcbiAgICAtLXctcHJlLS1mb250LWZhbWlseTogdmFyKC0tdy1mb250LWZhbWlseS1tb25vKTtcXG4gICAgLS13LXByZS0tZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtbW9uby1yZWd1bGFyKTtcXG4gICAgLS13LXByZS0tZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTQwMCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS13LXRhYi0tcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICAtLXctdGFiLS1wYWRkaW5nLXJpZ2h0OiA4MHB4O1xcbiAgICAtLXctdGFicy0tYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcbiAgICAtLXctdGFicy0tYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XFxuXFxuICAgIC0tdy10YWJzLS1oZWlnaHQ6IDNlbTtcXG4gICAgLS13LXRhYnMtLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XFxuXFxuICAgIC0tdy10YWJzLS1jb250cmFzdC0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLWNvbnRyYXN0LS1ib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcbiAgICAtLXctdGFicy0tY29udHJhc3QtLXRhYi0tY29sb3I6IHZhcigtLXctcHJpbWFyeS10ZXh0LWNvbG9yLTUwMCk7XFxuICAgIC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcbiAgICAtLXctdGFicy0tY29udHJhc3QtLXRhYi0tYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLWNvbnRyYXN0LS10YWItLWJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTkwMCk7XFxuICAgIC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1ob3Zlci0tY29sb3I6IHZhcigtLXctcHJpbWFyeS10ZXh0LWNvbG9yLTQwMCk7XFxuICAgIC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1ob3Zlci0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWhvdmVyLWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLWNvbnRyYXN0LS10YWItLWFjdGl2ZS0tY29sb3I6IHZhcigtLXctdGV4dC1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1hY3RpdmUtLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1hY3RpdmUtLWJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvcik7XFxuXFxuICAgIC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTUwMCk7XFxuICAgIC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS10YWItLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3IpO1xcbiAgICAtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLXRhYi0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTUwMCk7XFxuICAgIC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1ib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcbiAgICAtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLXRhYi0tYm9yZGVyLXJpZ2h0LWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItNTAwKTtcXG4gICAgLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS10YWItLWhvdmVyLS1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yLTUwMCk7XFxuICAgIC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1ob3Zlci0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTYwMCk7XFxuICAgIC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1hY3RpdmUtLWNvbG9yOiB2YXIoLS13LXByaW1hcnktdGV4dC1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1hY3RpdmUtLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1hY3RpdmUtLWJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvcik7XFxuXFxuICAgIC0tdy10YWJzLS1zaGFkZWQtLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1zaGFkZWQtLWJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvci04MDApO1xcbiAgICAtLXctdGFicy0tc2hhZGVkLS10YWItLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3ItMzAwKTtcXG4gICAgLS13LXRhYnMtLXNoYWRlZC0tdGFiLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICAtLXctdGFicy0tc2hhZGVkLS10YWItLWJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvci05MDApO1xcbiAgICAtLXctdGFicy0tc2hhZGVkLS10YWItLWJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLXNoYWRlZC0tdGFiLS1ob3Zlci0tY29sb3I6IHZhcigtLXctdGV4dC1jb2xvci01MDApO1xcbiAgICAtLXctdGFicy0tc2hhZGVkLS10YWItLWhvdmVyLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICAtLXctdGFicy0tc2hhZGVkLS10YWItLWFjdGl2ZS0tY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1zaGFkZWQtLXRhYi0tYWN0aXZlLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICAtLXctdGFicy0tc2hhZGVkLS10YWItLWFjdGl2ZS0tYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2pzL2NvbXBvbmVudHMvYXRvbXMvdGFicy90YWJzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsa0NBQWtDO0lBQ2xDLGlDQUFpQzs7SUFFakMscUJBQXFCO0lBQ3JCLHNDQUFzQzs7SUFFdEMsNERBQTREO0lBQzVELCtEQUErRDtJQUMvRCwrREFBK0Q7SUFDL0QsaUVBQWlFO0lBQ2pFLG9FQUFvRTtJQUNwRSwwRUFBMEU7SUFDMUUsc0VBQXNFO0lBQ3RFLDhFQUE4RTtJQUM5RSwyREFBMkQ7SUFDM0QsNEVBQTRFO0lBQzVFLCtFQUErRTs7SUFFL0UseUVBQXlFO0lBQ3pFLHFFQUFxRTtJQUNyRSx5REFBeUQ7SUFDekQsOEVBQThFO0lBQzlFLDBFQUEwRTtJQUMxRSxnRkFBZ0Y7SUFDaEYsb0VBQW9FO0lBQ3BFLHFGQUFxRjtJQUNyRix5RUFBeUU7SUFDekUsK0VBQStFO0lBQy9FLGtGQUFrRjs7SUFFbEYsNkRBQTZEO0lBQzdELG9FQUFvRTtJQUNwRSxxREFBcUQ7SUFDckQsa0VBQWtFO0lBQ2xFLHNFQUFzRTtJQUN0RSxvRUFBb0U7SUFDcEUsNERBQTREO0lBQzVELHlFQUF5RTtJQUN6RSw0REFBNEQ7SUFDNUQsMEVBQTBFO0lBQzFFLDBFQUEwRTtBQUM5RVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tdy10YWItLXBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgLS13LXRhYi0tcGFkZGluZy1yaWdodDogODBweDtcXG4gICAgLS13LXRhYnMtLWJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcXG4gICAgLS13LXRhYnMtLWJvcmRlci1yaWdodC13aWR0aDogMXB4O1xcblxcbiAgICAtLXctdGFicy0taGVpZ2h0OiAzZW07XFxuICAgIC0tdy10YWJzLS10cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xcblxcbiAgICAtLXctdGFicy0tY29udHJhc3QtLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1jb250cmFzdC0tYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLWNvbnRyYXN0LS10YWItLWNvbG9yOiB2YXIoLS13LXByaW1hcnktdGV4dC1jb2xvci01MDApO1xcbiAgICAtLXctdGFicy0tY29udHJhc3QtLXRhYi0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLWNvbnRyYXN0LS10YWItLWJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1ib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvci05MDApO1xcbiAgICAtLXctdGFicy0tY29udHJhc3QtLXRhYi0taG92ZXItLWNvbG9yOiB2YXIoLS13LXByaW1hcnktdGV4dC1jb2xvci00MDApO1xcbiAgICAtLXctdGFicy0tY29udHJhc3QtLXRhYi0taG92ZXItLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctcHJpbWFyeS1ob3Zlci1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1hY3RpdmUtLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3IpO1xcbiAgICAtLXctdGFicy0tY29udHJhc3QtLXRhYi0tYWN0aXZlLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICAtLXctdGFicy0tY29udHJhc3QtLXRhYi0tYWN0aXZlLS1ib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3IpO1xcblxcbiAgICAtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvci01MDApO1xcbiAgICAtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLWJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS10YWItLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvci01MDApO1xcbiAgICAtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLXRhYi0tYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS10YWItLWJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTUwMCk7XFxuICAgIC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1ob3Zlci0tY29sb3I6IHZhcigtLXctdGV4dC1jb2xvci01MDApO1xcbiAgICAtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLXRhYi0taG92ZXItLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvci02MDApO1xcbiAgICAtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLXRhYi0tYWN0aXZlLS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LXRleHQtY29sb3IpO1xcbiAgICAtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLXRhYi0tYWN0aXZlLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcbiAgICAtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLXRhYi0tYWN0aXZlLS1ib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcblxcbiAgICAtLXctdGFicy0tc2hhZGVkLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICAtLXctdGFicy0tc2hhZGVkLS1ib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItODAwKTtcXG4gICAgLS13LXRhYnMtLXNoYWRlZC0tdGFiLS1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yLTMwMCk7XFxuICAgIC0tdy10YWJzLS1zaGFkZWQtLXRhYi0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLXNoYWRlZC0tdGFiLS1ib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3ItOTAwKTtcXG4gICAgLS13LXRhYnMtLXNoYWRlZC0tdGFiLS1ib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1zaGFkZWQtLXRhYi0taG92ZXItLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3ItNTAwKTtcXG4gICAgLS13LXRhYnMtLXNoYWRlZC0tdGFiLS1ob3Zlci0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLXNoYWRlZC0tdGFiLS1hY3RpdmUtLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcbiAgICAtLXctdGFicy0tc2hhZGVkLS10YWItLWFjdGl2ZS0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLXNoYWRlZC0tdGFiLS1hY3RpdmUtLWJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvcik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS13LWZpeGVkLWhlYWRlci0tYXJ0aWNsZS1tYXgtd2lkdGg6IHZhcigtLXctYnJlYWtwb2ludC14bCk7XFxuXFxuICAgIC0tdy1maXhlZC1oZWFkZXItLXNwYWNpbmctcy0taG9yaXpvbnRhbC1zcGFjaW5nOiB2YXIoLS13LXNwYWNpbmctLXBhZ2UtLWhvcml6b250YWwtc3BhY2UpO1xcbiAgICAtLXctZml4ZWQtaGVhZGVyLS1zcGFjaW5nLXMtLXZlcnRpY2FsLXNwYWNpbmc6IHZhcigtLXctc3BhY2luZy0tcGFnZS0tdmVydGljYWwtc3BhY2UpO1xcblxcbiAgICAtLXctZml4ZWQtaGVhZGVyLS1zcGFjaW5nLW0tLWhvcml6b250YWwtc3BhY2luZzogdmFyKC0tdy1zcGFjaW5nLS1wYWdlLS1ob3Jpem9udGFsLXNwYWNlKTtcXG4gICAgLS13LWZpeGVkLWhlYWRlci0tc3BhY2luZy1tLS12ZXJ0aWNhbC1zcGFjaW5nOiBjYWxjKHZhcigtLXctc3BhY2luZy0tcGFnZS0tdmVydGljYWwtc3BhY2UpICogMik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9qcy9jb21wb25lbnRzL2xheW91dC9maXhlZC1oZWFkZXIvZml4ZWQtaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJEQUEyRDs7SUFFM0QseUZBQXlGO0lBQ3pGLHFGQUFxRjs7SUFFckYseUZBQXlGO0lBQ3pGLCtGQUErRjtBQUNuR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tdy1maXhlZC1oZWFkZXItLWFydGljbGUtbWF4LXdpZHRoOiB2YXIoLS13LWJyZWFrcG9pbnQteGwpO1xcblxcbiAgICAtLXctZml4ZWQtaGVhZGVyLS1zcGFjaW5nLXMtLWhvcml6b250YWwtc3BhY2luZzogdmFyKC0tdy1zcGFjaW5nLS1wYWdlLS1ob3Jpem9udGFsLXNwYWNlKTtcXG4gICAgLS13LWZpeGVkLWhlYWRlci0tc3BhY2luZy1zLS12ZXJ0aWNhbC1zcGFjaW5nOiB2YXIoLS13LXNwYWNpbmctLXBhZ2UtLXZlcnRpY2FsLXNwYWNlKTtcXG5cXG4gICAgLS13LWZpeGVkLWhlYWRlci0tc3BhY2luZy1tLS1ob3Jpem9udGFsLXNwYWNpbmc6IHZhcigtLXctc3BhY2luZy0tcGFnZS0taG9yaXpvbnRhbC1zcGFjZSk7XFxuICAgIC0tdy1maXhlZC1oZWFkZXItLXNwYWNpbmctbS0tdmVydGljYWwtc3BhY2luZzogY2FsYyh2YXIoLS13LXNwYWNpbmctLXBhZ2UtLXZlcnRpY2FsLXNwYWNlKSAqIDIpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tdy1icmFuZC0tbG9nby0taGVpZ2h0OiAyLjVlbTtcXG4gICAgLS13LWJyYW5kLS1sb2dvLS1tYXJnaW4tcmlnaHQ6IHZhcigtLXctc3BhY2luZy0yMDApO1xcbiAgICAtLXctYnJhbmQtLWZvbnQtd2VpZ2h0OiB2YXIoLS13LWZvbnQtd2VpZ2h0LXRleHQtc2VtaWJvbGQpO1xcblxcbiAgICAtLXctYnJhbmQtLWNvbnRyYXN0LS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LXRleHQtY29sb3IpO1xcbiAgICAtLXctYnJhbmQtLWNvbnRyYXN0LS1ob3Zlci0tY29sb3I6IHZhcigtLXctcHJpbWFyeS10ZXh0LWNvbG9yLTMwMCk7XFxuXFxuICAgIC0tdy1icmFuZC0tc2hhZGVkLS1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yKTtcXG4gICAgLS13LWJyYW5kLS1zaGFkZWQtLWhvdmVyLS1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yLTUwMCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9icmFuZC9icmFuZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsbURBQW1EO0lBQ25ELDBEQUEwRDs7SUFFMUQsdURBQXVEO0lBQ3ZELGtFQUFrRTs7SUFFbEUsNkNBQTZDO0lBQzdDLHdEQUF3RDtBQUM1RFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tdy1icmFuZC0tbG9nby0taGVpZ2h0OiAyLjVlbTtcXG4gICAgLS13LWJyYW5kLS1sb2dvLS1tYXJnaW4tcmlnaHQ6IHZhcigtLXctc3BhY2luZy0yMDApO1xcbiAgICAtLXctYnJhbmQtLWZvbnQtd2VpZ2h0OiB2YXIoLS13LWZvbnQtd2VpZ2h0LXRleHQtc2VtaWJvbGQpO1xcblxcbiAgICAtLXctYnJhbmQtLWNvbnRyYXN0LS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LXRleHQtY29sb3IpO1xcbiAgICAtLXctYnJhbmQtLWNvbnRyYXN0LS1ob3Zlci0tY29sb3I6IHZhcigtLXctcHJpbWFyeS10ZXh0LWNvbG9yLTMwMCk7XFxuXFxuICAgIC0tdy1icmFuZC0tc2hhZGVkLS1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yKTtcXG4gICAgLS13LWJyYW5kLS1zaGFkZWQtLWhvdmVyLS1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yLTUwMCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS13LWhvcml6b250YWwtbmF2LS1jb250cmFzdC0tY29sb3I6IHZhcigtLXctcHJpbWFyeS10ZXh0LWNvbG9yLTUwMCk7XFxuICAgIC0tdy1ob3Jpem9udGFsLW5hdi0tY29udHJhc3QtLWhvdmVyLS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LXRleHQtY29sb3ItMzAwKTtcXG4gICAgLS13LWhvcml6b250YWwtbmF2LS1jb250cmFzdC0tYWN0aXZlLS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LXRleHQtY29sb3ItMzAwKTtcXG5cXG4gICAgLS13LWhvcml6b250YWwtbmF2LS1zaGFkZWQtLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3ItMzAwKTtcXG4gICAgLS13LWhvcml6b250YWwtbmF2LS1zaGFkZWQtLWhvdmVyLS1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yLTUwMCk7XFxuICAgIC0tdy1ob3Jpem9udGFsLW5hdi0tc2hhZGVkLS1hY3RpdmUtLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvanMvY29tcG9uZW50cy9tb2xlY3VsZXMvaG9yaXpvbnRhbC1uYXYvaG9yaXpvbnRhbC1uYXYuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0VBQW9FO0lBQ3BFLDJFQUEyRTtJQUMzRSw0RUFBNEU7O0lBRTVFLDBEQUEwRDtJQUMxRCxpRUFBaUU7SUFDakUsaUVBQWlFO0FBQ3JFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS13LWhvcml6b250YWwtbmF2LS1jb250cmFzdC0tY29sb3I6IHZhcigtLXctcHJpbWFyeS10ZXh0LWNvbG9yLTUwMCk7XFxuICAgIC0tdy1ob3Jpem9udGFsLW5hdi0tY29udHJhc3QtLWhvdmVyLS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LXRleHQtY29sb3ItMzAwKTtcXG4gICAgLS13LWhvcml6b250YWwtbmF2LS1jb250cmFzdC0tYWN0aXZlLS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LXRleHQtY29sb3ItMzAwKTtcXG5cXG4gICAgLS13LWhvcml6b250YWwtbmF2LS1zaGFkZWQtLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3ItMzAwKTtcXG4gICAgLS13LWhvcml6b250YWwtbmF2LS1zaGFkZWQtLWhvdmVyLS1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yLTUwMCk7XFxuICAgIC0tdy1ob3Jpem9udGFsLW5hdi0tc2hhZGVkLS1hY3RpdmUtLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tdy12ZXJ0aWNhbC1uYXYtLWNvbnRyYXN0LS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LXRleHQtY29sb3ItNTAwKTtcXG4gICAgLS13LXZlcnRpY2FsLW5hdi0tY29udHJhc3QtLWhvdmVyLS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LXRleHQtY29sb3ItMzAwKTtcXG4gICAgLS13LXZlcnRpY2FsLW5hdi0tY29udHJhc3QtLWFjdGl2ZS0tY29sb3I6IHZhcigtLXctcHJpbWFyeS10ZXh0LWNvbG9yLTMwMCk7XFxuXFxuICAgIC0tdy12ZXJ0aWNhbC1uYXYtLXNoYWRlZC0tY29sb3I6IHZhcigtLXctdGV4dC1jb2xvci0zMDApO1xcbiAgICAtLXctdmVydGljYWwtbmF2LS1zaGFkZWQtLWhvdmVyLS1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yLTUwMCk7XFxuICAgIC0tdy12ZXJ0aWNhbC1uYXYtLXNoYWRlZC0tYWN0aXZlLS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9sZWN1bGVzL3ZlcnRpY2FsLW5hdi92ZXJ0aWNhbC1uYXYuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0VBQWtFO0lBQ2xFLHlFQUF5RTtJQUN6RSwwRUFBMEU7O0lBRTFFLHdEQUF3RDtJQUN4RCwrREFBK0Q7SUFDL0QsK0RBQStEO0FBQ25FXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS13LXZlcnRpY2FsLW5hdi0tY29udHJhc3QtLWNvbG9yOiB2YXIoLS13LXByaW1hcnktdGV4dC1jb2xvci01MDApO1xcbiAgICAtLXctdmVydGljYWwtbmF2LS1jb250cmFzdC0taG92ZXItLWNvbG9yOiB2YXIoLS13LXByaW1hcnktdGV4dC1jb2xvci0zMDApO1xcbiAgICAtLXctdmVydGljYWwtbmF2LS1jb250cmFzdC0tYWN0aXZlLS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LXRleHQtY29sb3ItMzAwKTtcXG5cXG4gICAgLS13LXZlcnRpY2FsLW5hdi0tc2hhZGVkLS1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yLTMwMCk7XFxuICAgIC0tdy12ZXJ0aWNhbC1uYXYtLXNoYWRlZC0taG92ZXItLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3ItNTAwKTtcXG4gICAgLS13LXZlcnRpY2FsLW5hdi0tc2hhZGVkLS1hY3RpdmUtLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tdy1mb290ZXItLXNwYWNpbmctcy0taG9yaXpvbnRhbC1zcGFjaW5nOiB2YXIoLS13LXNwYWNpbmctLXBhZ2UtLWhvcml6b250YWwtc3BhY2UpO1xcbiAgICAtLXctZm9vdGVyLS1zcGFjaW5nLXMtLXZlcnRpY2FsLXNwYWNpbmc6IHZhcigtLXctc3BhY2luZy0tcGFnZS0tdmVydGljYWwtc3BhY2UpO1xcblxcbiAgICAtLXctZm9vdGVyLS1zcGFjaW5nLW0tLWhvcml6b250YWwtc3BhY2luZzogdmFyKC0tdy1zcGFjaW5nLS1wYWdlLS1ob3Jpem9udGFsLXNwYWNlKTtcXG4gICAgLS13LWZvb3Rlci0tc3BhY2luZy1tLS12ZXJ0aWNhbC1zcGFjaW5nOiBjYWxjKHZhcigtLXctc3BhY2luZy0tcGFnZS0tdmVydGljYWwtc3BhY2UpICogMik7XFxuXFxuICAgIC0tdy1mb290ZXItLWNvbnRyYXN0LS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcbiAgICAtLXctZm9vdGVyLS1jb250cmFzdC0tY29sb3I6IHZhcigtLXctcHJpbWFyeS10ZXh0LWNvbG9yKTtcXG5cXG4gICAgLS13LWZvb3Rlci0tbGlnaHQtY29udHJhc3QtLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvci04MDApO1xcbiAgICAtLXctZm9vdGVyLS1saWdodC1jb250cmFzdC0tY29sb3I6IHZhcigtLXctdGV4dC1jb2xvcik7XFxuICAgIFxcbiAgICAtLXctZm9vdGVyLS1zaGFkZWQtLWJvcmRlci10b3AtLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItODAwKTtcXG4gICAgLS13LWZvb3Rlci0tc2hhZGVkLS1ib3JkZXItdG9wLS13aWR0aDogdmFyKC0tdy1ib3JkZXItd2lkdGgtLXRoaW4pO1xcbiAgICAtLXctZm9vdGVyLS1zaGFkZWQtLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3ItMzAwKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2pzL2NvbXBvbmVudHMvb3JnYW5pc21zL2Zvb3Rlci9mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUZBQW1GO0lBQ25GLCtFQUErRTs7SUFFL0UsbUZBQW1GO0lBQ25GLHlGQUF5Rjs7SUFFekYsOERBQThEO0lBQzlELHdEQUF3RDs7SUFFeEQsMkVBQTJFO0lBQzNFLHNEQUFzRDs7SUFFdEQsb0VBQW9FO0lBQ3BFLGtFQUFrRTtJQUNsRSxrREFBa0Q7QUFDdERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXctZm9vdGVyLS1zcGFjaW5nLXMtLWhvcml6b250YWwtc3BhY2luZzogdmFyKC0tdy1zcGFjaW5nLS1wYWdlLS1ob3Jpem9udGFsLXNwYWNlKTtcXG4gICAgLS13LWZvb3Rlci0tc3BhY2luZy1zLS12ZXJ0aWNhbC1zcGFjaW5nOiB2YXIoLS13LXNwYWNpbmctLXBhZ2UtLXZlcnRpY2FsLXNwYWNlKTtcXG5cXG4gICAgLS13LWZvb3Rlci0tc3BhY2luZy1tLS1ob3Jpem9udGFsLXNwYWNpbmc6IHZhcigtLXctc3BhY2luZy0tcGFnZS0taG9yaXpvbnRhbC1zcGFjZSk7XFxuICAgIC0tdy1mb290ZXItLXNwYWNpbmctbS0tdmVydGljYWwtc3BhY2luZzogY2FsYyh2YXIoLS13LXNwYWNpbmctLXBhZ2UtLXZlcnRpY2FsLXNwYWNlKSAqIDIpO1xcblxcbiAgICAtLXctZm9vdGVyLS1jb250cmFzdC0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yKTtcXG4gICAgLS13LWZvb3Rlci0tY29udHJhc3QtLWNvbG9yOiB2YXIoLS13LXByaW1hcnktdGV4dC1jb2xvcik7XFxuXFxuICAgIC0tdy1mb290ZXItLWxpZ2h0LWNvbnRyYXN0LS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItODAwKTtcXG4gICAgLS13LWZvb3Rlci0tbGlnaHQtY29udHJhc3QtLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3IpO1xcbiAgICBcXG4gICAgLS13LWZvb3Rlci0tc2hhZGVkLS1ib3JkZXItdG9wLS1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTgwMCk7XFxuICAgIC0tdy1mb290ZXItLXNoYWRlZC0tYm9yZGVyLXRvcC0td2lkdGg6IHZhcigtLXctYm9yZGVyLXdpZHRoLS10aGluKTtcXG4gICAgLS13LWZvb3Rlci0tc2hhZGVkLS1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yLTMwMCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS13LW5hdmJhci0tc2l6ZS1zLS1ob3Jpem9udGFsLXBhZGRpbmc6IHZhcigtLXctc3BhY2luZy0tcGFnZS0taG9yaXpvbnRhbC1zcGFjZSk7XFxuICAgIC0tdy1uYXZiYXItLXNpemUtcy0tdmVydGljYWwtcGFkZGluZzogdmFyKC0tdy1zcGFjaW5nLS1wYWdlLS12ZXJ0aWNhbC1zcGFjZSk7XFxuXFxuICAgIC0tdy1uYXZiYXItLXNpemUtbS0taG9yaXpvbnRhbC1wYWRkaW5nOiB2YXIoLS13LXNwYWNpbmctLXBhZ2UtLWhvcml6b250YWwtc3BhY2UpO1xcbiAgICAtLXctbmF2YmFyLS1zaXplLW0tLXZlcnRpY2FsLXBhZGRpbmc6IGNhbGModmFyKC0tdy1zcGFjaW5nLS1wYWdlLS12ZXJ0aWNhbC1zcGFjZSkgKiAyKTtcXG5cXG4gICAgLS13LW5hdmJhci0tY29udHJhc3QtLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvcik7XFxuICAgIFxcbiAgICAtLXctbmF2YmFyLS1zaGFkZWQtLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIC0tdy1uYXZiYXItLXNoYWRlZC0tYm9yZGVyLWJvdHRvbS0tY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvci04MDApO1xcbiAgICAtLXctbmF2YmFyLS1zaGFkZWQtLWJvcmRlci1ib3R0b20tLXdpZHRoOiB2YXIoLS13LWJvcmRlci13aWR0aC0tdGhpbik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9qcy9jb21wb25lbnRzL29yZ2FuaXNtcy9uYXZiYXIvbmF2YmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdGQUFnRjtJQUNoRiw0RUFBNEU7O0lBRTVFLGdGQUFnRjtJQUNoRixzRkFBc0Y7O0lBRXRGLDhEQUE4RDs7SUFFOUQsK0RBQStEO0lBQy9ELHVFQUF1RTtJQUN2RSxxRUFBcUU7QUFDekVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXctbmF2YmFyLS1zaXplLXMtLWhvcml6b250YWwtcGFkZGluZzogdmFyKC0tdy1zcGFjaW5nLS1wYWdlLS1ob3Jpem9udGFsLXNwYWNlKTtcXG4gICAgLS13LW5hdmJhci0tc2l6ZS1zLS12ZXJ0aWNhbC1wYWRkaW5nOiB2YXIoLS13LXNwYWNpbmctLXBhZ2UtLXZlcnRpY2FsLXNwYWNlKTtcXG5cXG4gICAgLS13LW5hdmJhci0tc2l6ZS1tLS1ob3Jpem9udGFsLXBhZGRpbmc6IHZhcigtLXctc3BhY2luZy0tcGFnZS0taG9yaXpvbnRhbC1zcGFjZSk7XFxuICAgIC0tdy1uYXZiYXItLXNpemUtbS0tdmVydGljYWwtcGFkZGluZzogY2FsYyh2YXIoLS13LXNwYWNpbmctLXBhZ2UtLXZlcnRpY2FsLXNwYWNlKSAqIDIpO1xcblxcbiAgICAtLXctbmF2YmFyLS1jb250cmFzdC0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yKTtcXG4gICAgXFxuICAgIC0tdy1uYXZiYXItLXNoYWRlZC0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgLS13LW5hdmJhci0tc2hhZGVkLS1ib3JkZXItYm90dG9tLS1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTgwMCk7XFxuICAgIC0tdy1uYXZiYXItLXNoYWRlZC0tYm9yZGVyLWJvdHRvbS0td2lkdGg6IHZhcigtLXctYm9yZGVyLXdpZHRoLS10aGluKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nzcy9ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3NzL2JyZWFrcG9pbnRzLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMl9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nzcy9jb2xvcnMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3NzL2ljb25zLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nzcy9zcGFjaW5nLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNV9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nzcy90eXBvZ3JhcGh5LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfNl9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2pzL2NvbXBvbmVudHMvYXRvbXMvYnV0dG9uL2J1dHRvbi5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzdfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9qcy9jb21wb25lbnRzL2F0b21zL2NvZGUvY29kZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzhfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9qcy9jb21wb25lbnRzL2F0b21zL2hlYWRpbmcvaGVhZGluZy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzlfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9qcy9jb21wb25lbnRzL2F0b21zL21hcmtkb3duL21hcmtkb3duLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9qcy9jb21wb25lbnRzL2F0b21zL3BhbmUvcGFuZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzExX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vanMvY29tcG9uZW50cy9hdG9tcy9wYXJhZ3JhcGgvcGFyYWdyYXBoLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTJfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9qcy9jb21wb25lbnRzL2F0b21zL3ByZS9wcmUuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xM19fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2pzL2NvbXBvbmVudHMvYXRvbXMvdGFicy90YWJzLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTRfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9qcy9jb21wb25lbnRzL2F0b21zL3RleHQtaW5wdXQvdGV4dC1pbnB1dC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzE1X19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vanMvY29tcG9uZW50cy9sYXlvdXQvZml4ZWQtaGVhZGVyL2ZpeGVkLWhlYWRlci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzE2X19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vanMvY29tcG9uZW50cy9sYXlvdXQvZ3JpZC9ncmlkLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTdfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9icmFuZC9icmFuZC5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzE4X19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vanMvY29tcG9uZW50cy9tb2xlY3VsZXMvY3NzLXJ1bGVzLXRhYmxlL2Nzcy1ydWxlcy10YWJsZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzE5X19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vanMvY29tcG9uZW50cy9tb2xlY3VsZXMvZWxlbWVudC1leGFtcGxlL2VsZW1lbnQtZXhhbXBsZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzIwX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vanMvY29tcG9uZW50cy9tb2xlY3VsZXMvZWxlbWVudC1wcm9wZXJ0aWVzLXRhYmxlL2VsZW1lbnQtcHJvcGVydGllcy10YWJsZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzIxX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vanMvY29tcG9uZW50cy9tb2xlY3VsZXMvaG9yaXpvbnRhbC1uYXYvaG9yaXpvbnRhbC1uYXYuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yMl9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2pzL2NvbXBvbmVudHMvbW9sZWN1bGVzL3ZlcnRpY2FsLW5hdi92ZXJ0aWNhbC1uYXYuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yM19fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2pzL2NvbXBvbmVudHMvb3JnYW5pc21zL2Zvb3Rlci9mb290ZXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yNF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2pzL2NvbXBvbmVudHMvb3JnYW5pc21zL25hdmJhci9uYXZiYXIuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yNV9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nzcy90aGVtZS5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8zX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF81X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF82X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF83X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF84X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF85X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzEyX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xM19fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzE1X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xNl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTdfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzE4X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xOV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMjBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzIxX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yMl9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMjNfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzI0X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiAqIE5vcm1hbGl6ZVxcbiAqL1xcblxcbi8qXFxuICogR2xvYmFsIHRva2Vuc1xcbiAqL1xcblxcbi8qXFxuICogQ29tcG9uZW50IHRva2Vuc1xcbiAqL1xcblxcbi8qIEF0b21zICovXFxuXFxuLyogTGF5b3V0cyAqL1xcblxcbi8qIE1vbGVjdWxlcyAqL1xcblxcbi8qIE9yZ2FuaXNtcyAqL1xcblxcblxcbi8qXFxuICogVGhlbWVcXG4gKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRTs7QUFHRjs7RUFFRTs7QUFPRjs7RUFFRTs7QUFFRixVQUFVOztBQVdWLFlBQVk7O0FBSVosY0FBYzs7QUFRZCxjQUFjOzs7QUFLZDs7RUFFRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbiAqIE5vcm1hbGl6ZVxcbiAqL1xcbkBpbXBvcnQgXFxcIi4vY3NzL25vcm1hbGl6ZS5jc3NcXFwiO1xcblxcbi8qXFxuICogR2xvYmFsIHRva2Vuc1xcbiAqL1xcbkBpbXBvcnQgXFxcIi4vY3NzL2JyZWFrcG9pbnRzLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9jc3MvY29sb3JzLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9jc3MvaWNvbnMuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2Nzcy9zcGFjaW5nLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9jc3MvdHlwb2dyYXBoeS5jc3NcXFwiO1xcblxcbi8qXFxuICogQ29tcG9uZW50IHRva2Vuc1xcbiAqL1xcblxcbi8qIEF0b21zICovXFxuQGltcG9ydCBcXFwiLi9qcy9jb21wb25lbnRzL2F0b21zL2J1dHRvbi9idXR0b24uY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2pzL2NvbXBvbmVudHMvYXRvbXMvY29kZS9jb2RlLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9qcy9jb21wb25lbnRzL2F0b21zL2hlYWRpbmcvaGVhZGluZy5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vanMvY29tcG9uZW50cy9hdG9tcy9tYXJrZG93bi9tYXJrZG93bi5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vanMvY29tcG9uZW50cy9hdG9tcy9wYW5lL3BhbmUuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2pzL2NvbXBvbmVudHMvYXRvbXMvcGFyYWdyYXBoL3BhcmFncmFwaC5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vanMvY29tcG9uZW50cy9hdG9tcy9wcmUvcHJlLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9qcy9jb21wb25lbnRzL2F0b21zL3RhYnMvdGFicy5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vanMvY29tcG9uZW50cy9hdG9tcy90ZXh0LWlucHV0L3RleHQtaW5wdXQuY3NzXFxcIjtcXG5cXG4vKiBMYXlvdXRzICovXFxuQGltcG9ydCBcXFwiLi9qcy9jb21wb25lbnRzL2xheW91dC9maXhlZC1oZWFkZXIvZml4ZWQtaGVhZGVyLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9qcy9jb21wb25lbnRzL2xheW91dC9ncmlkL2dyaWQuY3NzXFxcIjtcXG5cXG4vKiBNb2xlY3VsZXMgKi9cXG5AaW1wb3J0IFxcXCIuL2pzL2NvbXBvbmVudHMvbW9sZWN1bGVzL2JyYW5kL2JyYW5kLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9jc3MtcnVsZXMtdGFibGUvY3NzLXJ1bGVzLXRhYmxlLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9lbGVtZW50LWV4YW1wbGUvZWxlbWVudC1leGFtcGxlLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9lbGVtZW50LXByb3BlcnRpZXMtdGFibGUvZWxlbWVudC1wcm9wZXJ0aWVzLXRhYmxlLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9ob3Jpem9udGFsLW5hdi9ob3Jpem9udGFsLW5hdi5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vanMvY29tcG9uZW50cy9tb2xlY3VsZXMvdmVydGljYWwtbmF2L3ZlcnRpY2FsLW5hdi5jc3NcXFwiO1xcblxcbi8qIE9yZ2FuaXNtcyAqL1xcbkBpbXBvcnQgXFxcIi4vanMvY29tcG9uZW50cy9vcmdhbmlzbXMvZm9vdGVyL2Zvb3Rlci5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vanMvY29tcG9uZW50cy9vcmdhbmlzbXMvbmF2YmFyL25hdmJhci5jc3NcXFwiO1xcblxcblxcbi8qXFxuICogVGhlbWVcXG4gKi9cXG5AaW1wb3J0IFxcXCIuL2Nzcy90aGVtZS5jc3NcXFwiO1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuY29uc3QgTk9ERV9NT0RFID0gZmFsc2U7XG5jb25zdCBnbG9iYWwgPSBOT0RFX01PREUgPyBnbG9iYWxUaGlzIDogd2luZG93O1xuLyoqXG4gKiBXaGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgYGFkb3B0ZWRTdHlsZVNoZWV0c2AuXG4gKi9cbmV4cG9ydCBjb25zdCBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMgPSBnbG9iYWwuU2hhZG93Um9vdCAmJlxuICAgIChnbG9iYWwuU2hhZHlDU1MgPT09IHVuZGVmaW5lZCB8fCBnbG9iYWwuU2hhZHlDU1MubmF0aXZlU2hhZG93KSAmJlxuICAgICdhZG9wdGVkU3R5bGVTaGVldHMnIGluIERvY3VtZW50LnByb3RvdHlwZSAmJlxuICAgICdyZXBsYWNlJyBpbiBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZTtcbmNvbnN0IGNvbnN0cnVjdGlvblRva2VuID0gU3ltYm9sKCk7XG5jb25zdCBjc3NUYWdDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIEEgY29udGFpbmVyIGZvciBhIHN0cmluZyBvZiBDU1MgdGV4dCwgdGhhdCBtYXkgYmUgdXNlZCB0byBjcmVhdGUgYSBDU1NTdHlsZVNoZWV0LlxuICpcbiAqIENTU1Jlc3VsdCBpcyB0aGUgcmV0dXJuIHZhbHVlIG9mIGBjc3NgLXRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFscyBhbmRcbiAqIGB1bnNhZmVDU1MoKWAuIEluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IENTU1Jlc3VsdHMgYXJlIG9ubHkgY3JlYXRlZCB2aWEgdGhlXG4gKiBgY3NzYCB0YWcgYW5kIGB1bnNhZmVDU1MoKWAsIENTU1Jlc3VsdCBjYW5ub3QgYmUgY29uc3RydWN0ZWQgZGlyZWN0bHkuXG4gKi9cbmV4cG9ydCBjbGFzcyBDU1NSZXN1bHQge1xuICAgIGNvbnN0cnVjdG9yKGNzc1RleHQsIHN0cmluZ3MsIHNhZmVUb2tlbikge1xuICAgICAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICB0aGlzWydfJGNzc1Jlc3VsdCQnXSA9IHRydWU7XG4gICAgICAgIGlmIChzYWZlVG9rZW4gIT09IGNvbnN0cnVjdGlvblRva2VuKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NTU1Jlc3VsdCBpcyBub3QgY29uc3RydWN0YWJsZS4gVXNlIGB1bnNhZmVDU1NgIG9yIGBjc3NgIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jc3NUZXh0ID0gY3NzVGV4dDtcbiAgICAgICAgdGhpcy5fc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgfVxuICAgIC8vIFRoaXMgaXMgYSBnZXR0ZXIgc28gdGhhdCBpdCdzIGxhenkuIEluIHByYWN0aWNlLCB0aGlzIG1lYW5zIHN0eWxlc2hlZXRzXG4gICAgLy8gYXJlIG5vdCBjcmVhdGVkIHVudGlsIHRoZSBmaXJzdCBlbGVtZW50IGluc3RhbmNlIGlzIG1hZGUuXG4gICAgZ2V0IHN0eWxlU2hlZXQoKSB7XG4gICAgICAgIC8vIElmIGBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHNgIGlzIHRydWUgdGhlbiB3ZSBhc3N1bWUgQ1NTU3R5bGVTaGVldCBpc1xuICAgICAgICAvLyBjb25zdHJ1Y3RhYmxlLlxuICAgICAgICBsZXQgc3R5bGVTaGVldCA9IHRoaXMuX3N0eWxlU2hlZXQ7XG4gICAgICAgIGNvbnN0IHN0cmluZ3MgPSB0aGlzLl9zdHJpbmdzO1xuICAgICAgICBpZiAoc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzICYmIHN0eWxlU2hlZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY2FjaGVhYmxlID0gc3RyaW5ncyAhPT0gdW5kZWZpbmVkICYmIHN0cmluZ3MubGVuZ3RoID09PSAxO1xuICAgICAgICAgICAgaWYgKGNhY2hlYWJsZSkge1xuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQgPSBjc3NUYWdDYWNoZS5nZXQoc3RyaW5ncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3R5bGVTaGVldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgKHRoaXMuX3N0eWxlU2hlZXQgPSBzdHlsZVNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKSkucmVwbGFjZVN5bmModGhpcy5jc3NUZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGVhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNzc1RhZ0NhY2hlLnNldChzdHJpbmdzLCBzdHlsZVNoZWV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlU2hlZXQ7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jc3NUZXh0O1xuICAgIH1cbn1cbmNvbnN0IHRleHRGcm9tQ1NTUmVzdWx0ID0gKHZhbHVlKSA9PiB7XG4gICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICBpZiAodmFsdWVbJ18kY3NzUmVzdWx0JCddID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jc3NUZXh0O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFsdWUgcGFzc2VkIHRvICdjc3MnIGZ1bmN0aW9uIG11c3QgYmUgYSAnY3NzJyBmdW5jdGlvbiByZXN1bHQ6IGAgK1xuICAgICAgICAgICAgYCR7dmFsdWV9LiBVc2UgJ3Vuc2FmZUNTUycgdG8gcGFzcyBub24tbGl0ZXJhbCB2YWx1ZXMsIGJ1dCB0YWtlIGNhcmUgYCArXG4gICAgICAgICAgICBgdG8gZW5zdXJlIHBhZ2Ugc2VjdXJpdHkuYCk7XG4gICAgfVxufTtcbi8qKlxuICogV3JhcCBhIHZhbHVlIGZvciBpbnRlcnBvbGF0aW9uIGluIGEge0BsaW5rY29kZSBjc3N9IHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFsLlxuICpcbiAqIFRoaXMgaXMgdW5zYWZlIGJlY2F1c2UgdW50cnVzdGVkIENTUyB0ZXh0IGNhbiBiZSB1c2VkIHRvIHBob25lIGhvbWVcbiAqIG9yIGV4ZmlsdHJhdGUgZGF0YSB0byBhbiBhdHRhY2tlciBjb250cm9sbGVkIHNpdGUuIFRha2UgY2FyZSB0byBvbmx5IHVzZVxuICogdGhpcyB3aXRoIHRydXN0ZWQgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCB1bnNhZmVDU1MgPSAodmFsdWUpID0+IG5ldyBDU1NSZXN1bHQodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogU3RyaW5nKHZhbHVlKSwgdW5kZWZpbmVkLCBjb25zdHJ1Y3Rpb25Ub2tlbik7XG4vKipcbiAqIEEgdGVtcGxhdGUgbGl0ZXJhbCB0YWcgd2hpY2ggY2FuIGJlIHVzZWQgd2l0aCBMaXRFbGVtZW50J3NcbiAqIHtAbGlua2NvZGUgTGl0RWxlbWVudC5zdHlsZXN9IHByb3BlcnR5IHRvIHNldCBlbGVtZW50IHN0eWxlcy5cbiAqXG4gKiBGb3Igc2VjdXJpdHkgcmVhc29ucywgb25seSBsaXRlcmFsIHN0cmluZyB2YWx1ZXMgYW5kIG51bWJlciBtYXkgYmUgdXNlZCBpblxuICogZW1iZWRkZWQgZXhwcmVzc2lvbnMuIFRvIGluY29ycG9yYXRlIG5vbi1saXRlcmFsIHZhbHVlcyB7QGxpbmtjb2RlIHVuc2FmZUNTU31cbiAqIG1heSBiZSB1c2VkIGluc2lkZSBhbiBleHByZXNzaW9uLlxuICovXG5leHBvcnQgY29uc3QgY3NzID0gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4ge1xuICAgIGNvbnN0IGNzc1RleHQgPSBzdHJpbmdzLmxlbmd0aCA9PT0gMVxuICAgICAgICA/IHN0cmluZ3NbMF1cbiAgICAgICAgOiB2YWx1ZXMucmVkdWNlKChhY2MsIHYsIGlkeCkgPT4gYWNjICsgdGV4dEZyb21DU1NSZXN1bHQodikgKyBzdHJpbmdzW2lkeCArIDFdLCBzdHJpbmdzWzBdKTtcbiAgICByZXR1cm4gbmV3IENTU1Jlc3VsdChjc3NUZXh0LCBzdHJpbmdzLCBjb25zdHJ1Y3Rpb25Ub2tlbik7XG59O1xuLyoqXG4gKiBBcHBsaWVzIHRoZSBnaXZlbiBzdHlsZXMgdG8gYSBgc2hhZG93Um9vdGAuIFdoZW4gU2hhZG93IERPTSBpc1xuICogYXZhaWxhYmxlIGJ1dCBgYWRvcHRlZFN0eWxlU2hlZXRzYCBpcyBub3QsIHN0eWxlcyBhcmUgYXBwZW5kZWQgdG8gdGhlXG4gKiBgc2hhZG93Um9vdGAgdG8gW21pbWljIHNwZWMgYmVoYXZpb3JdKGh0dHBzOi8vd2ljZy5naXRodWIuaW8vY29uc3RydWN0LXN0eWxlc2hlZXRzLyN1c2luZy1jb25zdHJ1Y3RlZC1zdHlsZXNoZWV0cykuXG4gKiBOb3RlLCB3aGVuIHNoaW1taW5nIGlzIHVzZWQsIGFueSBzdHlsZXMgdGhhdCBhcmUgc3Vic2VxdWVudGx5IHBsYWNlZCBpbnRvXG4gKiB0aGUgc2hhZG93Um9vdCBzaG91bGQgYmUgcGxhY2VkICpiZWZvcmUqIGFueSBzaGltbWVkIGFkb3B0ZWQgc3R5bGVzLiBUaGlzXG4gKiB3aWxsIG1hdGNoIHNwZWMgYmVoYXZpb3IgdGhhdCBnaXZlcyBhZG9wdGVkIHNoZWV0cyBwcmVjZWRlbmNlIG92ZXIgc3R5bGVzIGluXG4gKiBzaGFkb3dSb290LlxuICovXG5leHBvcnQgY29uc3QgYWRvcHRTdHlsZXMgPSAocmVuZGVyUm9vdCwgc3R5bGVzKSA9PiB7XG4gICAgaWYgKHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cykge1xuICAgICAgICByZW5kZXJSb290LmFkb3B0ZWRTdHlsZVNoZWV0cyA9IHN0eWxlcy5tYXAoKHMpID0+IHMgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0ID8gcyA6IHMuc3R5bGVTaGVldCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdHlsZXMuZm9yRWFjaCgocykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgIGNvbnN0IG5vbmNlID0gZ2xvYmFsWydsaXROb25jZSddO1xuICAgICAgICAgICAgaWYgKG5vbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgbm9uY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBzLmNzc1RleHQ7XG4gICAgICAgICAgICByZW5kZXJSb290LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmNvbnN0IGNzc1Jlc3VsdEZyb21TdHlsZVNoZWV0ID0gKHNoZWV0KSA9PiB7XG4gICAgbGV0IGNzc1RleHQgPSAnJztcbiAgICBmb3IgKGNvbnN0IHJ1bGUgb2Ygc2hlZXQuY3NzUnVsZXMpIHtcbiAgICAgICAgY3NzVGV4dCArPSBydWxlLmNzc1RleHQ7XG4gICAgfVxuICAgIHJldHVybiB1bnNhZmVDU1MoY3NzVGV4dCk7XG59O1xuZXhwb3J0IGNvbnN0IGdldENvbXBhdGlibGVTdHlsZSA9IHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyB8fFxuICAgIChOT0RFX01PREUgJiYgZ2xvYmFsLkNTU1N0eWxlU2hlZXQgPT09IHVuZGVmaW5lZClcbiAgICA/IChzKSA9PiBzXG4gICAgOiAocykgPT4gcyBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQgPyBjc3NSZXN1bHRGcm9tU3R5bGVTaGVldChzKSA6IHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jc3MtdGFnLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIF9hLCBfYiwgX2MsIF9kO1xudmFyIF9lO1xuLyoqXG4gKiBVc2UgdGhpcyBtb2R1bGUgaWYgeW91IHdhbnQgdG8gY3JlYXRlIHlvdXIgb3duIGJhc2UgY2xhc3MgZXh0ZW5kaW5nXG4gKiB7QGxpbmsgUmVhY3RpdmVFbGVtZW50fS5cbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG5pbXBvcnQgeyBnZXRDb21wYXRpYmxlU3R5bGUsIGFkb3B0U3R5bGVzLCB9IGZyb20gJy4vY3NzLXRhZy5qcyc7XG4vLyBJbiB0aGUgTm9kZSBidWlsZCwgdGhpcyBpbXBvcnQgd2lsbCBiZSBpbmplY3RlZCBieSBSb2xsdXA6XG4vLyBpbXBvcnQge0hUTUxFbGVtZW50LCBjdXN0b21FbGVtZW50c30gZnJvbSAnQGxpdC1sYWJzL3Nzci1kb20tc2hpbSc7XG5leHBvcnQgKiBmcm9tICcuL2Nzcy10YWcuanMnO1xuY29uc3QgTk9ERV9NT0RFID0gZmFsc2U7XG5jb25zdCBnbG9iYWwgPSBOT0RFX01PREUgPyBnbG9iYWxUaGlzIDogd2luZG93O1xuaWYgKE5PREVfTU9ERSkge1xuICAgIChfYSA9IGdsb2JhbC5jdXN0b21FbGVtZW50cykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKGdsb2JhbC5jdXN0b21FbGVtZW50cyA9IGN1c3RvbUVsZW1lbnRzKTtcbn1cbmNvbnN0IERFVl9NT0RFID0gdHJ1ZTtcbmxldCByZXF1ZXN0VXBkYXRlVGhlbmFibGU7XG5sZXQgaXNzdWVXYXJuaW5nO1xuY29uc3QgdHJ1c3RlZFR5cGVzID0gZ2xvYmFsXG4gICAgLnRydXN0ZWRUeXBlcztcbi8vIFRlbXBvcmFyeSB3b3JrYXJvdW5kIGZvciBodHRwczovL2NyYnVnLmNvbS85OTMyNjhcbi8vIEN1cnJlbnRseSwgYW55IGF0dHJpYnV0ZSBzdGFydGluZyB3aXRoIFwib25cIiBpcyBjb25zaWRlcmVkIHRvIGJlIGFcbi8vIFRydXN0ZWRTY3JpcHQgc291cmNlLiBTdWNoIGJvb2xlYW4gYXR0cmlidXRlcyBtdXN0IGJlIHNldCB0byB0aGUgZXF1aXZhbGVudFxuLy8gdHJ1c3RlZCBlbXB0eVNjcmlwdCB2YWx1ZS5cbmNvbnN0IGVtcHR5U3RyaW5nRm9yQm9vbGVhbkF0dHJpYnV0ZSA9IHRydXN0ZWRUeXBlc1xuICAgID8gdHJ1c3RlZFR5cGVzLmVtcHR5U2NyaXB0XG4gICAgOiAnJztcbmNvbnN0IHBvbHlmaWxsU3VwcG9ydCA9IERFVl9NT0RFXG4gICAgPyBnbG9iYWwucmVhY3RpdmVFbGVtZW50UG9seWZpbGxTdXBwb3J0RGV2TW9kZVxuICAgIDogZ2xvYmFsLnJlYWN0aXZlRWxlbWVudFBvbHlmaWxsU3VwcG9ydDtcbmlmIChERVZfTU9ERSkge1xuICAgIC8vIEVuc3VyZSB3YXJuaW5ncyBhcmUgaXNzdWVkIG9ubHkgMXgsIGV2ZW4gaWYgbXVsdGlwbGUgdmVyc2lvbnMgb2YgTGl0XG4gICAgLy8gYXJlIGxvYWRlZC5cbiAgICBjb25zdCBpc3N1ZWRXYXJuaW5ncyA9ICgoX2IgPSBnbG9iYWwubGl0SXNzdWVkV2FybmluZ3MpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IChnbG9iYWwubGl0SXNzdWVkV2FybmluZ3MgPSBuZXcgU2V0KCkpKTtcbiAgICAvLyBJc3N1ZSBhIHdhcm5pbmcsIGlmIHdlIGhhdmVuJ3QgYWxyZWFkeS5cbiAgICBpc3N1ZVdhcm5pbmcgPSAoY29kZSwgd2FybmluZykgPT4ge1xuICAgICAgICB3YXJuaW5nICs9IGAgU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvJHtjb2RlfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICBpZiAoIWlzc3VlZFdhcm5pbmdzLmhhcyh3YXJuaW5nKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKHdhcm5pbmcpO1xuICAgICAgICAgICAgaXNzdWVkV2FybmluZ3MuYWRkKHdhcm5pbmcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpc3N1ZVdhcm5pbmcoJ2Rldi1tb2RlJywgYExpdCBpcyBpbiBkZXYgbW9kZS4gTm90IHJlY29tbWVuZGVkIGZvciBwcm9kdWN0aW9uIWApO1xuICAgIC8vIElzc3VlIHBvbHlmaWxsIHN1cHBvcnQgd2FybmluZy5cbiAgICBpZiAoKChfYyA9IGdsb2JhbC5TaGFkeURPTSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmluVXNlKSAmJiBwb2x5ZmlsbFN1cHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpc3N1ZVdhcm5pbmcoJ3BvbHlmaWxsLXN1cHBvcnQtbWlzc2luZycsIGBTaGFkb3cgRE9NIGlzIGJlaW5nIHBvbHlmaWxsZWQgdmlhIFxcYFNoYWR5RE9NXFxgIGJ1dCBgICtcbiAgICAgICAgICAgIGB0aGUgXFxgcG9seWZpbGwtc3VwcG9ydFxcYCBtb2R1bGUgaGFzIG5vdCBiZWVuIGxvYWRlZC5gKTtcbiAgICB9XG4gICAgcmVxdWVzdFVwZGF0ZVRoZW5hYmxlID0gKG5hbWUpID0+ICh7XG4gICAgICAgIHRoZW46IChvbmZ1bGZpbGxlZCwgX29ucmVqZWN0ZWQpID0+IHtcbiAgICAgICAgICAgIGlzc3VlV2FybmluZygncmVxdWVzdC11cGRhdGUtcHJvbWlzZScsIGBUaGUgXFxgcmVxdWVzdFVwZGF0ZVxcYCBtZXRob2Qgc2hvdWxkIG5vIGxvbmdlciByZXR1cm4gYSBQcm9taXNlIGJ1dCBgICtcbiAgICAgICAgICAgICAgICBgZG9lcyBzbyBvbiBcXGAke25hbWV9XFxgLiBVc2UgXFxgdXBkYXRlQ29tcGxldGVcXGAgaW5zdGVhZC5gKTtcbiAgICAgICAgICAgIGlmIChvbmZ1bGZpbGxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgb25mdWxmaWxsZWQoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pO1xufVxuLyoqXG4gKiBVc2VmdWwgZm9yIHZpc3VhbGl6aW5nIGFuZCBsb2dnaW5nIGluc2lnaHRzIGludG8gd2hhdCB0aGUgTGl0IHRlbXBsYXRlIHN5c3RlbSBpcyBkb2luZy5cbiAqXG4gKiBDb21waWxlZCBvdXQgb2YgcHJvZCBtb2RlIGJ1aWxkcy5cbiAqL1xuY29uc3QgZGVidWdMb2dFdmVudCA9IERFVl9NT0RFXG4gICAgPyAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hvdWxkRW1pdCA9IGdsb2JhbFxuICAgICAgICAgICAgLmVtaXRMaXREZWJ1Z0xvZ0V2ZW50cztcbiAgICAgICAgaWYgKCFzaG91bGRFbWl0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZ2xvYmFsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdsaXQtZGVidWcnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IGV2ZW50LFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIDogdW5kZWZpbmVkO1xuLypcbiAqIFdoZW4gdXNpbmcgQ2xvc3VyZSBDb21waWxlciwgSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eShwcm9wZXJ0eSwgb2JqZWN0KSBpc1xuICogcmVwbGFjZWQgYXQgY29tcGlsZSB0aW1lIGJ5IHRoZSBtdW5nZWQgbmFtZSBmb3Igb2JqZWN0W3Byb3BlcnR5XS4gV2UgY2Fubm90XG4gKiBhbGlhcyB0aGlzIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvIHVzZSBhIHNtYWxsIHNoaW0gdGhhdCBoYXMgdGhlIHNhbWVcbiAqIGJlaGF2aW9yIHdoZW4gbm90IGNvbXBpbGluZy5cbiAqL1xuLypAX19JTkxJTkVfXyovXG5jb25zdCBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5ID0gKHByb3AsIF9vYmopID0+IHByb3A7XG5leHBvcnQgY29uc3QgZGVmYXVsdENvbnZlcnRlciA9IHtcbiAgICB0b0F0dHJpYnV0ZSh2YWx1ZSwgdHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID8gZW1wdHlTdHJpbmdGb3JCb29sZWFuQXR0cmlidXRlIDogbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgT2JqZWN0OlxuICAgICAgICAgICAgY2FzZSBBcnJheTpcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgdmFsdWUgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgIHBhc3MgdGhpcyB0aHJvdWdoXG4gICAgICAgICAgICAgICAgLy8gdG8gYWxsb3cgcmVtb3Zpbmcvbm8gY2hhbmdlIGJlaGF2aW9yLlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPT0gbnVsbCA/IHZhbHVlIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIGZyb21BdHRyaWJ1dGUodmFsdWUsIHR5cGUpIHtcbiAgICAgICAgbGV0IGZyb21WYWx1ZSA9IHZhbHVlO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQm9vbGVhbjpcbiAgICAgICAgICAgICAgICBmcm9tVmFsdWUgPSB2YWx1ZSAhPT0gbnVsbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTnVtYmVyOlxuICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IHZhbHVlID09PSBudWxsID8gbnVsbCA6IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE9iamVjdDpcbiAgICAgICAgICAgIGNhc2UgQXJyYXk6XG4gICAgICAgICAgICAgICAgLy8gRG8gKm5vdCogZ2VuZXJhdGUgZXhjZXB0aW9uIHdoZW4gaW52YWxpZCBKU09OIGlzIHNldCBhcyBlbGVtZW50c1xuICAgICAgICAgICAgICAgIC8vIGRvbid0IG5vcm1hbGx5IGNvbXBsYWluIG9uIGJlaW5nIG1pcy1jb25maWd1cmVkLlxuICAgICAgICAgICAgICAgIC8vIFRPRE8oc29ydmVsbCk6IERvIGdlbmVyYXRlIGV4Y2VwdGlvbiBpbiAqZGV2IG1vZGUqLlxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFzc2VydCB0byBhZGhlcmUgdG8gQmF6ZWwncyBcIm11c3QgdHlwZSBhc3NlcnQgSlNPTiBwYXJzZVwiIHJ1bGUuXG4gICAgICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJvbVZhbHVlO1xuICAgIH0sXG59O1xuLyoqXG4gKiBDaGFuZ2UgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyBkaWZmZXJlbnQgZnJvbSBgb2xkVmFsdWVgLlxuICogVGhpcyBtZXRob2QgaXMgdXNlZCBhcyB0aGUgZGVmYXVsdCBmb3IgYSBwcm9wZXJ0eSdzIGBoYXNDaGFuZ2VkYCBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdEVxdWFsID0gKHZhbHVlLCBvbGQpID0+IHtcbiAgICAvLyBUaGlzIGVuc3VyZXMgKG9sZD09TmFOLCB2YWx1ZT09TmFOKSBhbHdheXMgcmV0dXJucyBmYWxzZVxuICAgIHJldHVybiBvbGQgIT09IHZhbHVlICYmIChvbGQgPT09IG9sZCB8fCB2YWx1ZSA9PT0gdmFsdWUpO1xufTtcbmNvbnN0IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uID0ge1xuICAgIGF0dHJpYnV0ZTogdHJ1ZSxcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgY29udmVydGVyOiBkZWZhdWx0Q29udmVydGVyLFxuICAgIHJlZmxlY3Q6IGZhbHNlLFxuICAgIGhhc0NoYW5nZWQ6IG5vdEVxdWFsLFxufTtcbi8qKlxuICogVGhlIENsb3N1cmUgSlMgQ29tcGlsZXIgZG9lc24ndCBjdXJyZW50bHkgaGF2ZSBnb29kIHN1cHBvcnQgZm9yIHN0YXRpY1xuICogcHJvcGVydHkgc2VtYW50aWNzIHdoZXJlIFwidGhpc1wiIGlzIGR5bmFtaWMgKGUuZy5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY2xvc3VyZS1jb21waWxlci9pc3N1ZXMvMzE3NyBhbmQgb3RoZXJzKSBzbyB3ZSB1c2VcbiAqIHRoaXMgaGFjayB0byBieXBhc3MgYW55IHJld3JpdGluZyBieSB0aGUgY29tcGlsZXIuXG4gKi9cbmNvbnN0IGZpbmFsaXplZCA9ICdmaW5hbGl6ZWQnO1xuLyoqXG4gKiBCYXNlIGVsZW1lbnQgY2xhc3Mgd2hpY2ggbWFuYWdlcyBlbGVtZW50IHByb3BlcnRpZXMgYW5kIGF0dHJpYnV0ZXMuIFdoZW5cbiAqIHByb3BlcnRpZXMgY2hhbmdlLCB0aGUgYHVwZGF0ZWAgbWV0aG9kIGlzIGFzeW5jaHJvbm91c2x5IGNhbGxlZC4gVGhpcyBtZXRob2RcbiAqIHNob3VsZCBiZSBzdXBwbGllZCBieSBzdWJjbGFzc2VycyB0byByZW5kZXIgdXBkYXRlcyBhcyBkZXNpcmVkLlxuICogQG5vSW5oZXJpdERvY1xuICovXG5leHBvcnQgY2xhc3MgUmVhY3RpdmVFbGVtZW50XG4vLyBJbiB0aGUgTm9kZSBidWlsZCwgdGhpcyBgZXh0ZW5kc2AgY2xhdXNlIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aFxuLy8gYChnbG9iYWxUaGlzLkhUTUxFbGVtZW50ID8/IEhUTUxFbGVtZW50KWAuXG4vL1xuLy8gVGhpcyB3YXksIHdlIHdpbGwgZmlyc3QgcHJlZmVyIGFueSBnbG9iYWwgYEhUTUxFbGVtZW50YCBwb2x5ZmlsbCB0aGF0IHRoZVxuLy8gdXNlciBoYXMgYXNzaWduZWQsIGFuZCB0aGVuIGZhbGwgYmFjayB0byB0aGUgYEhUTUxFbGVtZW50YCBzaGltIHdoaWNoIGhhc1xuLy8gYmVlbiBpbXBvcnRlZCAoc2VlIG5vdGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUgYWJvdXQgaG93IHRoaXMgaW1wb3J0IGlzXG4vLyBnZW5lcmF0ZWQgYnkgUm9sbHVwKS4gTm90ZSB0aGF0IHRoZSBgSFRNTEVsZW1lbnRgIHZhcmlhYmxlIGhhcyBiZWVuXG4vLyBzaGFkb3dlZCBieSB0aGlzIGltcG9ydCwgc28gaXQgbm8gbG9uZ2VyIHJlZmVycyB0byB0aGUgZ2xvYmFsLlxuIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBpZiB0aGVyZSBpcyBhIHBlbmRpbmcgdXBkYXRlIGFzIGEgcmVzdWx0IG9mIGNhbGxpbmcgYHJlcXVlc3RVcGRhdGUoKWAuXG4gICAgICAgICAqIFNob3VsZCBvbmx5IGJlIHJlYWQuXG4gICAgICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlzVXBkYXRlUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSXMgc2V0IHRvIGB0cnVlYCBhZnRlciB0aGUgZmlyc3QgdXBkYXRlLiBUaGUgZWxlbWVudCBjb2RlIGNhbm5vdCBhc3N1bWVcbiAgICAgICAgICogdGhhdCBgcmVuZGVyUm9vdGAgZXhpc3RzIGJlZm9yZSB0aGUgZWxlbWVudCBgaGFzVXBkYXRlZGAuXG4gICAgICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhhc1VwZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5hbWUgb2YgY3VycmVudGx5IHJlZmxlY3RpbmcgcHJvcGVydHlcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBudWxsO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaW5pdGlhbGl6ZXIgZnVuY3Rpb24gdG8gdGhlIGNsYXNzIHRoYXQgaXMgY2FsbGVkIGR1cmluZyBpbnN0YW5jZVxuICAgICAqIGNvbnN0cnVjdGlvbi5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgdXNlZnVsIGZvciBjb2RlIHRoYXQgcnVucyBhZ2FpbnN0IGEgYFJlYWN0aXZlRWxlbWVudGBcbiAgICAgKiBzdWJjbGFzcywgc3VjaCBhcyBhIGRlY29yYXRvciwgdGhhdCBuZWVkcyB0byBkbyB3b3JrIGZvciBlYWNoXG4gICAgICogaW5zdGFuY2UsIHN1Y2ggYXMgc2V0dGluZyB1cCBhIGBSZWFjdGl2ZUNvbnRyb2xsZXJgLlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjb25zdCBteURlY29yYXRvciA9ICh0YXJnZXQ6IHR5cGVvZiBSZWFjdGl2ZUVsZW1lbnQsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICogICB0YXJnZXQuYWRkSW5pdGlhbGl6ZXIoKGluc3RhbmNlOiBSZWFjdGl2ZUVsZW1lbnQpID0+IHtcbiAgICAgKiAgICAgLy8gVGhpcyBpcyBydW4gZHVyaW5nIGNvbnN0cnVjdGlvbiBvZiB0aGUgZWxlbWVudFxuICAgICAqICAgICBuZXcgTXlDb250cm9sbGVyKGluc3RhbmNlKTtcbiAgICAgKiAgIH0pO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIERlY29yYXRpbmcgYSBmaWVsZCB3aWxsIHRoZW4gY2F1c2UgZWFjaCBpbnN0YW5jZSB0byBydW4gYW4gaW5pdGlhbGl6ZXJcbiAgICAgKiB0aGF0IGFkZHMgYSBjb250cm9sbGVyOlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICAgKiAgIEBteURlY29yYXRvciBmb287XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogSW5pdGlhbGl6ZXJzIGFyZSBzdG9yZWQgcGVyLWNvbnN0cnVjdG9yLiBBZGRpbmcgYW4gaW5pdGlhbGl6ZXIgdG8gYVxuICAgICAqIHN1YmNsYXNzIGRvZXMgbm90IGFkZCBpdCB0byBhIHN1cGVyY2xhc3MuIFNpbmNlIGluaXRpYWxpemVycyBhcmUgcnVuIGluXG4gICAgICogY29uc3RydWN0b3JzLCBpbml0aWFsaXplcnMgd2lsbCBydW4gaW4gb3JkZXIgb2YgdGhlIGNsYXNzIGhpZXJhcmNoeSxcbiAgICAgKiBzdGFydGluZyB3aXRoIHN1cGVyY2xhc3NlcyBhbmQgcHJvZ3Jlc3NpbmcgdG8gdGhlIGluc3RhbmNlJ3MgY2xhc3MuXG4gICAgICpcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqL1xuICAgIHN0YXRpYyBhZGRJbml0aWFsaXplcihpbml0aWFsaXplcikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMuZmluYWxpemUoKTtcbiAgICAgICAgKChfYSA9IHRoaXMuX2luaXRpYWxpemVycykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKHRoaXMuX2luaXRpYWxpemVycyA9IFtdKSkucHVzaChpbml0aWFsaXplcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsaXN0IG9mIGF0dHJpYnV0ZXMgY29ycmVzcG9uZGluZyB0byB0aGUgcmVnaXN0ZXJlZCBwcm9wZXJ0aWVzLlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGNhdGVnb3J5IGF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcbiAgICAgICAgLy8gbm90ZTogcGlnZ3kgYmFja2luZyBvbiB0aGlzIHRvIGVuc3VyZSB3ZSdyZSBmaW5hbGl6ZWQuXG4gICAgICAgIHRoaXMuZmluYWxpemUoKTtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3IgbG9vcHNcbiAgICAgICAgLy8gZXhwZWN0aW5nIGFycmF5c1xuICAgICAgICB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLmZvckVhY2goKHYsIHApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLl9fYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KHAsIHYpO1xuICAgICAgICAgICAgaWYgKGF0dHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwLnNldChhdHRyLCBwKTtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2goYXR0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXR0cmlidXRlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHByb3BlcnR5IGFjY2Vzc29yIG9uIHRoZSBlbGVtZW50IHByb3RvdHlwZSBpZiBvbmUgZG9lcyBub3QgZXhpc3RcbiAgICAgKiBhbmQgc3RvcmVzIGEge0BsaW5rY29kZSBQcm9wZXJ0eURlY2xhcmF0aW9ufSBmb3IgdGhlIHByb3BlcnR5IHdpdGggdGhlXG4gICAgICogZ2l2ZW4gb3B0aW9ucy4gVGhlIHByb3BlcnR5IHNldHRlciBjYWxscyB0aGUgcHJvcGVydHkncyBgaGFzQ2hhbmdlZGBcbiAgICAgKiBwcm9wZXJ0eSBvcHRpb24gb3IgdXNlcyBhIHN0cmljdCBpZGVudGl0eSBjaGVjayB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3RcbiAgICAgKiB0byByZXF1ZXN0IGFuIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIG1heSBiZSBvdmVycmlkZGVuIHRvIGN1c3RvbWl6ZSBwcm9wZXJ0aWVzOyBob3dldmVyLFxuICAgICAqIHdoZW4gZG9pbmcgc28sIGl0J3MgaW1wb3J0YW50IHRvIGNhbGwgYHN1cGVyLmNyZWF0ZVByb3BlcnR5YCB0byBlbnN1cmVcbiAgICAgKiB0aGUgcHJvcGVydHkgaXMgc2V0dXAgY29ycmVjdGx5LiBUaGlzIG1ldGhvZCBjYWxsc1xuICAgICAqIGBnZXRQcm9wZXJ0eURlc2NyaXB0b3JgIGludGVybmFsbHkgdG8gZ2V0IGEgZGVzY3JpcHRvciB0byBpbnN0YWxsLlxuICAgICAqIFRvIGN1c3RvbWl6ZSB3aGF0IHByb3BlcnRpZXMgZG8gd2hlbiB0aGV5IGFyZSBnZXQgb3Igc2V0LCBvdmVycmlkZVxuICAgICAqIGBnZXRQcm9wZXJ0eURlc2NyaXB0b3JgLiBUbyBjdXN0b21pemUgdGhlIG9wdGlvbnMgZm9yIGEgcHJvcGVydHksXG4gICAgICogaW1wbGVtZW50IGBjcmVhdGVQcm9wZXJ0eWAgbGlrZSB0aGlzOlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBzdGF0aWMgY3JlYXRlUHJvcGVydHkobmFtZSwgb3B0aW9ucykge1xuICAgICAqICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24ob3B0aW9ucywge215T3B0aW9uOiB0cnVlfSk7XG4gICAgICogICBzdXBlci5jcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBjYXRlZ29yeSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMgPSBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIGlmIHRoaXMgaXMgYSBzdGF0ZSBwcm9wZXJ0eSwgZm9yY2UgdGhlIGF0dHJpYnV0ZSB0byBmYWxzZS5cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RhdGUpIHtcbiAgICAgICAgICAgIC8vIENhc3QgYXMgYW55IHNpbmNlIHRoaXMgaXMgcmVhZG9ubHkuXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgb3B0aW9ucy5hdHRyaWJ1dGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3RlLCBzaW5jZSB0aGlzIGNhbiBiZSBjYWxsZWQgYnkgdGhlIGBAcHJvcGVydHlgIGRlY29yYXRvciB3aGljaFxuICAgICAgICAvLyBpcyBjYWxsZWQgYmVmb3JlIGBmaW5hbGl6ZWAsIHdlIGVuc3VyZSBmaW5hbGl6YXRpb24gaGFzIGJlZW4ga2lja2VkIG9mZi5cbiAgICAgICAgdGhpcy5maW5hbGl6ZSgpO1xuICAgICAgICB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLnNldChuYW1lLCBvcHRpb25zKTtcbiAgICAgICAgLy8gRG8gbm90IGdlbmVyYXRlIGFuIGFjY2Vzc29yIGlmIHRoZSBwcm90b3R5cGUgYWxyZWFkeSBoYXMgb25lLCBzaW5jZVxuICAgICAgICAvLyBpdCB3b3VsZCBiZSBsb3N0IG90aGVyd2lzZSBhbmQgdGhhdCB3b3VsZCBuZXZlciBiZSB0aGUgdXNlcidzIGludGVudGlvbjtcbiAgICAgICAgLy8gSW5zdGVhZCwgd2UgZXhwZWN0IHVzZXJzIHRvIGNhbGwgYHJlcXVlc3RVcGRhdGVgIHRoZW1zZWx2ZXMgZnJvbVxuICAgICAgICAvLyB1c2VyLWRlZmluZWQgYWNjZXNzb3JzLiBOb3RlIHRoYXQgaWYgdGhlIHN1cGVyIGhhcyBhbiBhY2Nlc3NvciB3ZSB3aWxsXG4gICAgICAgIC8vIHN0aWxsIG92ZXJ3cml0ZSBpdFxuICAgICAgICBpZiAoIW9wdGlvbnMubm9BY2Nlc3NvciAmJiAhdGhpcy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHR5cGVvZiBuYW1lID09PSAnc3ltYm9sJyA/IFN5bWJvbCgpIDogYF9fJHtuYW1lfWA7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gdGhpcy5nZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5wcm90b3R5cGUsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGNsYXNzIGRvZXNuJ3QgaGF2ZSBpdHMgb3duIHNldCwgY3JlYXRlIG9uZSBhbmQgaW5pdGlhbGl6ZVxuICAgICAgICAgICAgICAgICAgICAvLyB3aXRoIHRoZSB2YWx1ZXMgaW4gdGhlIHNldCBmcm9tIHRoZSBuZWFyZXN0IGFuY2VzdG9yIGNsYXNzLCBpZiBhbnkuXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eSgnX19yZWFjdGl2ZVByb3BlcnR5S2V5cycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fcmVhY3RpdmVQcm9wZXJ0eUtleXMgPSBuZXcgU2V0KChfYSA9IHRoaXMuX19yZWFjdGl2ZVByb3BlcnR5S2V5cykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogW10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX19yZWFjdGl2ZVByb3BlcnR5S2V5cy5hZGQobmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9wZXJ0eSBkZXNjcmlwdG9yIHRvIGJlIGRlZmluZWQgb24gdGhlIGdpdmVuIG5hbWVkIHByb3BlcnR5LlxuICAgICAqIElmIG5vIGRlc2NyaXB0b3IgaXMgcmV0dXJuZWQsIHRoZSBwcm9wZXJ0eSB3aWxsIG5vdCBiZWNvbWUgYW4gYWNjZXNzb3IuXG4gICAgICogRm9yIGV4YW1wbGUsXG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgICAqICAgc3RhdGljIGdldFByb3BlcnR5RGVzY3JpcHRvcihuYW1lLCBrZXksIG9wdGlvbnMpIHtcbiAgICAgKiAgICAgY29uc3QgZGVmYXVsdERlc2NyaXB0b3IgPVxuICAgICAqICAgICAgICAgc3VwZXIuZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucyk7XG4gICAgICogICAgIGNvbnN0IHNldHRlciA9IGRlZmF1bHREZXNjcmlwdG9yLnNldDtcbiAgICAgKiAgICAgcmV0dXJuIHtcbiAgICAgKiAgICAgICBnZXQ6IGRlZmF1bHREZXNjcmlwdG9yLmdldCxcbiAgICAgKiAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgKiAgICAgICAgIHNldHRlci5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgKiAgICAgICAgIC8vIGN1c3RvbSBhY3Rpb24uXG4gICAgICogICAgICAgfSxcbiAgICAgKiAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICogICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAqICAgICB9XG4gICAgICogICB9XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAY2F0ZWdvcnkgcHJvcGVydGllc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2tleV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzW25hbWVdO1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShuYW1lLCBvbGRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJvcGVydHkgb3B0aW9ucyBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIHByb3BlcnR5LlxuICAgICAqIFRoZXNlIG9wdGlvbnMgYXJlIGRlZmluZWQgd2l0aCBhIGBQcm9wZXJ0eURlY2xhcmF0aW9uYCB2aWEgdGhlIGBwcm9wZXJ0aWVzYFxuICAgICAqIG9iamVjdCBvciB0aGUgYEBwcm9wZXJ0eWAgZGVjb3JhdG9yIGFuZCBhcmUgcmVnaXN0ZXJlZCBpblxuICAgICAqIGBjcmVhdGVQcm9wZXJ0eSguLi4pYC5cbiAgICAgKlxuICAgICAqIE5vdGUsIHRoaXMgbWV0aG9kIHNob3VsZCBiZSBjb25zaWRlcmVkIFwiZmluYWxcIiBhbmQgbm90IG92ZXJyaWRkZW4uIFRvXG4gICAgICogY3VzdG9taXplIHRoZSBvcHRpb25zIGZvciBhIGdpdmVuIHByb3BlcnR5LCBvdmVycmlkZVxuICAgICAqIHtAbGlua2NvZGUgY3JlYXRlUHJvcGVydHl9LlxuICAgICAqXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAZmluYWxcbiAgICAgKiBAY2F0ZWdvcnkgcHJvcGVydGllc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRQcm9wZXJ0eU9wdGlvbnMobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50UHJvcGVydGllcy5nZXQobmFtZSkgfHwgZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgcHJvcGVydHkgYWNjZXNzb3JzIGZvciByZWdpc3RlcmVkIHByb3BlcnRpZXMsIHNldHMgdXAgZWxlbWVudFxuICAgICAqIHN0eWxpbmcsIGFuZCBlbnN1cmVzIGFueSBzdXBlcmNsYXNzZXMgYXJlIGFsc28gZmluYWxpemVkLiBSZXR1cm5zIHRydWUgaWZcbiAgICAgKiB0aGUgZWxlbWVudCB3YXMgZmluYWxpemVkLlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICovXG4gICAgc3RhdGljIGZpbmFsaXplKCkge1xuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShmaW5hbGl6ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpc1tmaW5hbGl6ZWRdID0gdHJ1ZTtcbiAgICAgICAgLy8gZmluYWxpemUgYW55IHN1cGVyY2xhc3Nlc1xuICAgICAgICBjb25zdCBzdXBlckN0b3IgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyk7XG4gICAgICAgIHN1cGVyQ3Rvci5maW5hbGl6ZSgpO1xuICAgICAgICAvLyBDcmVhdGUgb3duIHNldCBvZiBpbml0aWFsaXplcnMgZm9yIHRoaXMgY2xhc3MgaWYgYW55IGV4aXN0IG9uIHRoZVxuICAgICAgICAvLyBzdXBlcmNsYXNzIGFuZCBjb3B5IHRoZW0gZG93bi4gTm90ZSwgZm9yIGEgc21hbGwgcGVyZiBib29zdCwgYXZvaWRcbiAgICAgICAgLy8gY3JlYXRpbmcgaW5pdGlhbGl6ZXJzIHVubGVzcyBuZWVkZWQuXG4gICAgICAgIGlmIChzdXBlckN0b3IuX2luaXRpYWxpemVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsaXplcnMgPSBbLi4uc3VwZXJDdG9yLl9pbml0aWFsaXplcnNdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudFByb3BlcnRpZXMgPSBuZXcgTWFwKHN1cGVyQ3Rvci5lbGVtZW50UHJvcGVydGllcyk7XG4gICAgICAgIC8vIGluaXRpYWxpemUgTWFwIHBvcHVsYXRlZCBpbiBvYnNlcnZlZEF0dHJpYnV0ZXNcbiAgICAgICAgdGhpcy5fX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIG1ha2UgYW55IHByb3BlcnRpZXNcbiAgICAgICAgLy8gTm90ZSwgb25seSBwcm9jZXNzIFwib3duXCIgcHJvcGVydGllcyBzaW5jZSB0aGlzIGVsZW1lbnQgd2lsbCBpbmhlcml0XG4gICAgICAgIC8vIGFueSBwcm9wZXJ0aWVzIGRlZmluZWQgb24gdGhlIHN1cGVyQ2xhc3MsIGFuZCBmaW5hbGl6YXRpb24gZW5zdXJlc1xuICAgICAgICAvLyB0aGUgZW50aXJlIHByb3RvdHlwZSBjaGFpbiBpcyBmaW5hbGl6ZWQuXG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ3Byb3BlcnRpZXMnLCB0aGlzKSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wZXJ0aWVzO1xuICAgICAgICAgICAgLy8gc3VwcG9ydCBzeW1ib2xzIGluIHByb3BlcnRpZXMgKElFMTEgZG9lcyBub3Qgc3VwcG9ydCB0aGlzKVxuICAgICAgICAgICAgY29uc3QgcHJvcEtleXMgPSBbXG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvcHMpLFxuICAgICAgICAgICAgICAgIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocHJvcHMpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIC8vIFRoaXMgZm9yL29mIGlzIG9rIGJlY2F1c2UgcHJvcEtleXMgaXMgYW4gYXJyYXlcbiAgICAgICAgICAgIGZvciAoY29uc3QgcCBvZiBwcm9wS2V5cykge1xuICAgICAgICAgICAgICAgIC8vIG5vdGUsIHVzZSBvZiBgYW55YCBpcyBkdWUgdG8gVHlwZVNjcmlwdCBsYWNrIG9mIHN1cHBvcnQgZm9yIHN5bWJvbCBpblxuICAgICAgICAgICAgICAgIC8vIGluZGV4IHR5cGVzXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVByb3BlcnR5KHAsIHByb3BzW3BdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnRTdHlsZXMgPSB0aGlzLmZpbmFsaXplU3R5bGVzKHRoaXMuc3R5bGVzKTtcbiAgICAgICAgLy8gREVWIG1vZGUgd2FybmluZ3NcbiAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICBjb25zdCB3YXJuUmVtb3ZlZE9yUmVuYW1lZCA9IChuYW1lLCByZW5hbWVkID0gZmFsc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNzdWVXYXJuaW5nKHJlbmFtZWQgPyAncmVuYW1lZC1hcGknIDogJ3JlbW92ZWQtYXBpJywgYFxcYCR7bmFtZX1cXGAgaXMgaW1wbGVtZW50ZWQgb24gY2xhc3MgJHt0aGlzLm5hbWV9LiBJdCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBoYXMgYmVlbiAke3JlbmFtZWQgPyAncmVuYW1lZCcgOiAncmVtb3ZlZCd9IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGluIHRoaXMgdmVyc2lvbiBvZiBMaXRFbGVtZW50LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3YXJuUmVtb3ZlZE9yUmVuYW1lZCgnaW5pdGlhbGl6ZScpO1xuICAgICAgICAgICAgd2FyblJlbW92ZWRPclJlbmFtZWQoJ3JlcXVlc3RVcGRhdGVJbnRlcm5hbCcpO1xuICAgICAgICAgICAgd2FyblJlbW92ZWRPclJlbmFtZWQoJ19nZXRVcGRhdGVDb21wbGV0ZScsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUYWtlcyB0aGUgc3R5bGVzIHRoZSB1c2VyIHN1cHBsaWVkIHZpYSB0aGUgYHN0YXRpYyBzdHlsZXNgIHByb3BlcnR5IGFuZFxuICAgICAqIHJldHVybnMgdGhlIGFycmF5IG9mIHN0eWxlcyB0byBhcHBseSB0byB0aGUgZWxlbWVudC5cbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBpbnRlZ3JhdGUgaW50byBhIHN0eWxlIG1hbmFnZW1lbnQgc3lzdGVtLlxuICAgICAqXG4gICAgICogU3R5bGVzIGFyZSBkZWR1cGxpY2F0ZWQgcHJlc2VydmluZyB0aGUgX2xhc3RfIGluc3RhbmNlIGluIHRoZSBsaXN0LiBUaGlzXG4gICAgICogaXMgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gdG8gYXZvaWQgZHVwbGljYXRlZCBzdHlsZXMgdGhhdCBjYW4gb2NjdXJcbiAgICAgKiBlc3BlY2lhbGx5IHdoZW4gY29tcG9zaW5nIHZpYSBzdWJjbGFzc2luZy4gVGhlIGxhc3QgaXRlbSBpcyBrZXB0IHRvIHRyeVxuICAgICAqIHRvIHByZXNlcnZlIHRoZSBjYXNjYWRlIG9yZGVyIHdpdGggdGhlIGFzc3VtcHRpb24gdGhhdCBpdCdzIG1vc3QgaW1wb3J0YW50XG4gICAgICogdGhhdCBsYXN0IGFkZGVkIHN0eWxlcyBvdmVycmlkZSBwcmV2aW91cyBzdHlsZXMuXG4gICAgICpcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBjYXRlZ29yeSBzdHlsZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluYWxpemVTdHlsZXMoc3R5bGVzKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRTdHlsZXMgPSBbXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGVzKSkge1xuICAgICAgICAgICAgLy8gRGVkdXBlIHRoZSBmbGF0dGVuZWQgYXJyYXkgaW4gcmV2ZXJzZSBvcmRlciB0byBwcmVzZXJ2ZSB0aGUgbGFzdCBpdGVtcy5cbiAgICAgICAgICAgIC8vIENhc3RpbmcgdG8gQXJyYXk8dW5rbm93bj4gd29ya3MgYXJvdW5kIFRTIGVycm9yIHRoYXRcbiAgICAgICAgICAgIC8vIGFwcGVhcnMgdG8gY29tZSBmcm9tIHRyeWluZyB0byBmbGF0dGVuIGEgdHlwZSBDU1NSZXN1bHRBcnJheS5cbiAgICAgICAgICAgIGNvbnN0IHNldCA9IG5ldyBTZXQoc3R5bGVzLmZsYXQoSW5maW5pdHkpLnJldmVyc2UoKSk7XG4gICAgICAgICAgICAvLyBUaGVuIHByZXNlcnZlIG9yaWdpbmFsIG9yZGVyIGJ5IGFkZGluZyB0aGUgc2V0IGl0ZW1zIGluIHJldmVyc2Ugb3JkZXIuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHMgb2Ygc2V0KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudFN0eWxlcy51bnNoaWZ0KGdldENvbXBhdGlibGVTdHlsZShzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVsZW1lbnRTdHlsZXMucHVzaChnZXRDb21wYXRpYmxlU3R5bGUoc3R5bGVzKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRTdHlsZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHByb3BlcnR5IG5hbWUgZm9yIHRoZSBnaXZlbiBhdHRyaWJ1dGUgYG5hbWVgLlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICovXG4gICAgc3RhdGljIF9fYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gb3B0aW9ucy5hdHRyaWJ1dGU7XG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGUgPT09IGZhbHNlXG4gICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgOiB0eXBlb2YgYXR0cmlidXRlID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgOiB0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgPyBuYW1lLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludGVybmFsIG9ubHkgb3ZlcnJpZGUgcG9pbnQgZm9yIGN1c3RvbWl6aW5nIHdvcmsgZG9uZSB3aGVuIGVsZW1lbnRzXG4gICAgICogYXJlIGNvbnN0cnVjdGVkLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgX2luaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5fX3VwZGF0ZVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzKSA9PiAodGhpcy5lbmFibGVVcGRhdGluZyA9IHJlcykpO1xuICAgICAgICB0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX19zYXZlSW5zdGFuY2VQcm9wZXJ0aWVzKCk7XG4gICAgICAgIC8vIGVuc3VyZXMgZmlyc3QgdXBkYXRlIHdpbGwgYmUgY2F1Z2h0IGJ5IGFuIGVhcmx5IGFjY2VzcyBvZlxuICAgICAgICAvLyBgdXBkYXRlQ29tcGxldGVgXG4gICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgICAoX2EgPSB0aGlzLmNvbnN0cnVjdG9yLl9pbml0aWFsaXplcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChpKSA9PiBpKHRoaXMpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgYFJlYWN0aXZlQ29udHJvbGxlcmAgdG8gcGFydGljaXBhdGUgaW4gdGhlIGVsZW1lbnQncyByZWFjdGl2ZVxuICAgICAqIHVwZGF0ZSBjeWNsZS4gVGhlIGVsZW1lbnQgYXV0b21hdGljYWxseSBjYWxscyBpbnRvIGFueSByZWdpc3RlcmVkXG4gICAgICogY29udHJvbGxlcnMgZHVyaW5nIGl0cyBsaWZlY3ljbGUgY2FsbGJhY2tzLlxuICAgICAqXG4gICAgICogSWYgdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkIHdoZW4gYGFkZENvbnRyb2xsZXIoKWAgaXMgY2FsbGVkLCB0aGVcbiAgICAgKiBjb250cm9sbGVyJ3MgYGhvc3RDb25uZWN0ZWQoKWAgY2FsbGJhY2sgd2lsbCBiZSBpbW1lZGlhdGVseSBjYWxsZWQuXG4gICAgICogQGNhdGVnb3J5IGNvbnRyb2xsZXJzXG4gICAgICovXG4gICAgYWRkQ29udHJvbGxlcihjb250cm9sbGVyKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICgoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICh0aGlzLl9fY29udHJvbGxlcnMgPSBbXSkpLnB1c2goY29udHJvbGxlcik7XG4gICAgICAgIC8vIElmIGEgY29udHJvbGxlciBpcyBhZGRlZCBhZnRlciB0aGUgZWxlbWVudCBoYXMgYmVlbiBjb25uZWN0ZWQsXG4gICAgICAgIC8vIGNhbGwgaG9zdENvbm5lY3RlZC4gTm90ZSwgcmUtdXNpbmcgZXhpc3RlbmNlIG9mIGByZW5kZXJSb290YCBoZXJlXG4gICAgICAgIC8vICh3aGljaCBpcyBzZXQgaW4gY29ubmVjdGVkQ2FsbGJhY2spIHRvIGF2b2lkIHRoZSBuZWVkIHRvIHRyYWNrIGFcbiAgICAgICAgLy8gZmlyc3QgY29ubmVjdGVkIHN0YXRlLlxuICAgICAgICBpZiAodGhpcy5yZW5kZXJSb290ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgKF9iID0gY29udHJvbGxlci5ob3N0Q29ubmVjdGVkKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChjb250cm9sbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgYFJlYWN0aXZlQ29udHJvbGxlcmAgZnJvbSB0aGUgZWxlbWVudC5cbiAgICAgKiBAY2F0ZWdvcnkgY29udHJvbGxlcnNcbiAgICAgKi9cbiAgICByZW1vdmVDb250cm9sbGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBOb3RlLCBpZiB0aGUgaW5kZXhPZiBpcyAtMSwgdGhlID4+PiB3aWxsIGZsaXAgdGhlIHNpZ24gd2hpY2ggbWFrZXMgdGhlXG4gICAgICAgIC8vIHNwbGljZSBkbyBub3RoaW5nLlxuICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zcGxpY2UodGhpcy5fX2NvbnRyb2xsZXJzLmluZGV4T2YoY29udHJvbGxlcikgPj4+IDAsIDEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGaXhlcyBhbnkgcHJvcGVydGllcyBzZXQgb24gdGhlIGluc3RhbmNlIGJlZm9yZSB1cGdyYWRlIHRpbWUuXG4gICAgICogT3RoZXJ3aXNlIHRoZXNlIHdvdWxkIHNoYWRvdyB0aGUgYWNjZXNzb3IgYW5kIGJyZWFrIHRoZXNlIHByb3BlcnRpZXMuXG4gICAgICogVGhlIHByb3BlcnRpZXMgYXJlIHN0b3JlZCBpbiBhIE1hcCB3aGljaCBpcyBwbGF5ZWQgYmFjayBhZnRlciB0aGVcbiAgICAgKiBjb25zdHJ1Y3RvciBydW5zLiBOb3RlLCBvbiB2ZXJ5IG9sZCB2ZXJzaW9ucyBvZiBTYWZhcmkgKDw9OSkgb3IgQ2hyb21lXG4gICAgICogKDw9NDEpLCBwcm9wZXJ0aWVzIGNyZWF0ZWQgZm9yIG5hdGl2ZSBwbGF0Zm9ybSBwcm9wZXJ0aWVzIGxpa2UgKGBpZGAgb3JcbiAgICAgKiBgbmFtZWApIG1heSBub3QgaGF2ZSBkZWZhdWx0IHZhbHVlcyBzZXQgaW4gdGhlIGVsZW1lbnQgY29uc3RydWN0b3IuIE9uXG4gICAgICogdGhlc2UgYnJvd3NlcnMgbmF0aXZlIHByb3BlcnRpZXMgYXBwZWFyIG9uIGluc3RhbmNlcyBhbmQgdGhlcmVmb3JlIHRoZWlyXG4gICAgICogZGVmYXVsdCB2YWx1ZSB3aWxsIG92ZXJ3cml0ZSBhbnkgZWxlbWVudCBkZWZhdWx0IChlLmcuIGlmIHRoZSBlbGVtZW50IHNldHNcbiAgICAgKiB0aGlzLmlkID0gJ2lkJyBpbiB0aGUgY29uc3RydWN0b3IsIHRoZSAnaWQnIHdpbGwgYmVjb21lICcnIHNpbmNlIHRoaXMgaXNcbiAgICAgKiB0aGUgbmF0aXZlIHBsYXRmb3JtIGRlZmF1bHQpLlxuICAgICAqL1xuICAgIF9fc2F2ZUluc3RhbmNlUHJvcGVydGllcygpIHtcbiAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yIGxvb3BzXG4gICAgICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKChfdiwgcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzLnNldChwLCB0aGlzW3BdKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpc1twXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5vZGUgaW50byB3aGljaCB0aGUgZWxlbWVudCBzaG91bGQgcmVuZGVyIGFuZCBieSBkZWZhdWx0XG4gICAgICogY3JlYXRlcyBhbmQgcmV0dXJucyBhbiBvcGVuIHNoYWRvd1Jvb3QuIEltcGxlbWVudCB0byBjdXN0b21pemUgd2hlcmUgdGhlXG4gICAgICogZWxlbWVudCdzIERPTSBpcyByZW5kZXJlZC4gRm9yIGV4YW1wbGUsIHRvIHJlbmRlciBpbnRvIHRoZSBlbGVtZW50J3NcbiAgICAgKiBjaGlsZE5vZGVzLCByZXR1cm4gYHRoaXNgLlxuICAgICAqXG4gICAgICogQHJldHVybiBSZXR1cm5zIGEgbm9kZSBpbnRvIHdoaWNoIHRvIHJlbmRlci5cbiAgICAgKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gICAgICovXG4gICAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCByZW5kZXJSb290ID0gKF9hID0gdGhpcy5zaGFkb3dSb290KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB0aGlzLmF0dGFjaFNoYWRvdyh0aGlzLmNvbnN0cnVjdG9yLnNoYWRvd1Jvb3RPcHRpb25zKTtcbiAgICAgICAgYWRvcHRTdHlsZXMocmVuZGVyUm9vdCwgdGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50U3R5bGVzKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlclJvb3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9uIGZpcnN0IGNvbm5lY3Rpb24sIGNyZWF0ZXMgdGhlIGVsZW1lbnQncyByZW5kZXJSb290LCBzZXRzIHVwXG4gICAgICogZWxlbWVudCBzdHlsaW5nLCBhbmQgZW5hYmxlcyB1cGRhdGluZy5cbiAgICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAgICovXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gY3JlYXRlIHJlbmRlclJvb3QgYmVmb3JlIGZpcnN0IHVwZGF0ZS5cbiAgICAgICAgaWYgKHRoaXMucmVuZGVyUm9vdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJvb3QgPSB0aGlzLmNyZWF0ZVJlbmRlclJvb3QoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuYWJsZVVwZGF0aW5nKHRydWUpO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChjKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IGMuaG9zdENvbm5lY3RlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoYyk7IH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBOb3RlLCB0aGlzIG1ldGhvZCBzaG91bGQgYmUgY29uc2lkZXJlZCBmaW5hbCBhbmQgbm90IG92ZXJyaWRkZW4uIEl0IGlzXG4gICAgICogb3ZlcnJpZGRlbiBvbiB0aGUgZWxlbWVudCBpbnN0YW5jZSB3aXRoIGEgZnVuY3Rpb24gdGhhdCB0cmlnZ2VycyB0aGUgZmlyc3RcbiAgICAgKiB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBlbmFibGVVcGRhdGluZyhfcmVxdWVzdGVkVXBkYXRlKSB7IH1cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgZm9yIGBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpYCBpbiBleHRlbnNpb25zIHdoaWxlXG4gICAgICogcmVzZXJ2aW5nIHRoZSBwb3NzaWJpbGl0eSBvZiBtYWtpbmcgbm9uLWJyZWFraW5nIGZlYXR1cmUgYWRkaXRpb25zXG4gICAgICogd2hlbiBkaXNjb25uZWN0aW5nIGF0IHNvbWUgcG9pbnQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAgICovXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3REaXNjb25uZWN0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3luY2hyb25pemVzIHByb3BlcnR5IHZhbHVlcyB3aGVuIGF0dHJpYnV0ZXMgY2hhbmdlLlxuICAgICAqXG4gICAgICogU3BlY2lmaWNhbGx5LCB3aGVuIGFuIGF0dHJpYnV0ZSBpcyBzZXQsIHRoZSBjb3JyZXNwb25kaW5nIHByb3BlcnR5IGlzIHNldC5cbiAgICAgKiBZb3Ugc2hvdWxkIHJhcmVseSBuZWVkIHRvIGltcGxlbWVudCB0aGlzIGNhbGxiYWNrLiBJZiB0aGlzIG1ldGhvZCBpc1xuICAgICAqIG92ZXJyaWRkZW4sIGBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgX29sZCwgdmFsdWUpYCBtdXN0IGJlXG4gICAgICogY2FsbGVkLlxuICAgICAqXG4gICAgICogU2VlIFt1c2luZyB0aGUgbGlmZWN5Y2xlIGNhbGxiYWNrc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvV2ViX0NvbXBvbmVudHMvVXNpbmdfY3VzdG9tX2VsZW1lbnRzI3VzaW5nX3RoZV9saWZlY3ljbGVfY2FsbGJhY2tzKVxuICAgICAqIG9uIE1ETiBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AuXG4gICAgICogQGNhdGVnb3J5IGF0dHJpYnV0ZXNcbiAgICAgKi9cbiAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgX29sZCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fJGF0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICBfX3Byb3BlcnR5VG9BdHRyaWJ1dGUobmFtZSwgdmFsdWUsIG9wdGlvbnMgPSBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmNvbnN0cnVjdG9yLl9fYXR0cmlidXRlTmFtZUZvclByb3BlcnR5KG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICBpZiAoYXR0ciAhPT0gdW5kZWZpbmVkICYmIG9wdGlvbnMucmVmbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgY29udmVydGVyID0gKChfYSA9IG9wdGlvbnMuY29udmVydGVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9BdHRyaWJ1dGUpICE9PVxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gb3B0aW9ucy5jb252ZXJ0ZXJcbiAgICAgICAgICAgICAgICA6IGRlZmF1bHRDb252ZXJ0ZXI7XG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBjb252ZXJ0ZXIudG9BdHRyaWJ1dGUodmFsdWUsIG9wdGlvbnMudHlwZSk7XG4gICAgICAgICAgICBpZiAoREVWX01PREUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmVuYWJsZWRXYXJuaW5ncy5pbmRleE9mKCdtaWdyYXRpb24nKSA+PSAwICYmXG4gICAgICAgICAgICAgICAgYXR0clZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpc3N1ZVdhcm5pbmcoJ3VuZGVmaW5lZC1hdHRyaWJ1dGUtdmFsdWUnLCBgVGhlIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgdGhlICR7bmFtZX0gcHJvcGVydHkgaXMgYCArXG4gICAgICAgICAgICAgICAgICAgIGB1bmRlZmluZWQgb24gZWxlbWVudCAke3RoaXMubG9jYWxOYW1lfS4gVGhlIGF0dHJpYnV0ZSB3aWxsIGJlIGAgK1xuICAgICAgICAgICAgICAgICAgICBgcmVtb3ZlZCwgYnV0IGluIHRoZSBwcmV2aW91cyB2ZXJzaW9uIG9mIFxcYFJlYWN0aXZlRWxlbWVudFxcYCwgYCArXG4gICAgICAgICAgICAgICAgICAgIGB0aGUgYXR0cmlidXRlIHdvdWxkIG5vdCBoYXZlIGNoYW5nZWQuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUcmFjayBpZiB0aGUgcHJvcGVydHkgaXMgYmVpbmcgcmVmbGVjdGVkIHRvIGF2b2lkXG4gICAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBwcm9wZXJ0eSBhZ2FpbiB2aWEgYGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja2AuIE5vdGU6XG4gICAgICAgICAgICAvLyAxLiB0aGlzIHRha2VzIGFkdmFudGFnZSBvZiB0aGUgZmFjdCB0aGF0IHRoZSBjYWxsYmFjayBpcyBzeW5jaHJvbm91cy5cbiAgICAgICAgICAgIC8vIDIuIHdpbGwgYmVoYXZlIGluY29ycmVjdGx5IGlmIG11bHRpcGxlIGF0dHJpYnV0ZXMgYXJlIGluIHRoZSByZWFjdGlvblxuICAgICAgICAgICAgLy8gc3RhY2sgYXQgdGltZSBvZiBjYWxsaW5nLiBIb3dldmVyLCBzaW5jZSB3ZSBwcm9jZXNzIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgIC8vIGluIGB1cGRhdGVgIHRoaXMgc2hvdWxkIG5vdCBiZSBwb3NzaWJsZSAob3IgYW4gZXh0cmVtZSBjb3JuZXIgY2FzZVxuICAgICAgICAgICAgLy8gdGhhdCB3ZSdkIGxpa2UgdG8gZGlzY292ZXIpLlxuICAgICAgICAgICAgLy8gbWFyayBzdGF0ZSByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbmFtZTtcbiAgICAgICAgICAgIGlmIChhdHRyVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0clZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgbm90IHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJGF0dHJpYnV0ZVRvUHJvcGVydHkobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgLy8gTm90ZSwgaGludCB0aGlzIGFzIGFuIGBBdHRyaWJ1dGVNYXBgIHNvIGNsb3N1cmUgY2xlYXJseSB1bmRlcnN0YW5kc1xuICAgICAgICAvLyB0aGUgdHlwZTsgaXQgaGFzIGlzc3VlcyB3aXRoIHRyYWNraW5nIHR5cGVzIHRocm91Z2ggc3RhdGljc1xuICAgICAgICBjb25zdCBwcm9wTmFtZSA9IGN0b3IuX19hdHRyaWJ1dGVUb1Byb3BlcnR5TWFwLmdldChuYW1lKTtcbiAgICAgICAgLy8gVXNlIHRyYWNraW5nIGluZm8gdG8gYXZvaWQgcmVmbGVjdGluZyBhIHByb3BlcnR5IHZhbHVlIHRvIGFuIGF0dHJpYnV0ZVxuICAgICAgICAvLyBpZiBpdCB3YXMganVzdCBzZXQgYmVjYXVzZSB0aGUgYXR0cmlidXRlIGNoYW5nZWQuXG4gICAgICAgIGlmIChwcm9wTmFtZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgIT09IHByb3BOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gY3Rvci5nZXRQcm9wZXJ0eU9wdGlvbnMocHJvcE5hbWUpO1xuICAgICAgICAgICAgY29uc3QgY29udmVydGVyID0gdHlwZW9mIG9wdGlvbnMuY29udmVydGVyID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgPyB7IGZyb21BdHRyaWJ1dGU6IG9wdGlvbnMuY29udmVydGVyIH1cbiAgICAgICAgICAgICAgICA6ICgoX2EgPSBvcHRpb25zLmNvbnZlcnRlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZyb21BdHRyaWJ1dGUpICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmNvbnZlcnRlclxuICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRDb252ZXJ0ZXI7XG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBwcm9wTmFtZTtcbiAgICAgICAgICAgIHRoaXNbcHJvcE5hbWVdID0gY29udmVydGVyLmZyb21BdHRyaWJ1dGUodmFsdWUsIG9wdGlvbnMudHlwZVxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIG5vdCByZWZsZWN0aW5nXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyBhbiB1cGRhdGUgd2hpY2ggaXMgcHJvY2Vzc2VkIGFzeW5jaHJvbm91c2x5LiBUaGlzIHNob3VsZCBiZSBjYWxsZWRcbiAgICAgKiB3aGVuIGFuIGVsZW1lbnQgc2hvdWxkIHVwZGF0ZSBiYXNlZCBvbiBzb21lIHN0YXRlIG5vdCB0cmlnZ2VyZWQgYnkgc2V0dGluZ1xuICAgICAqIGEgcmVhY3RpdmUgcHJvcGVydHkuIEluIHRoaXMgY2FzZSwgcGFzcyBubyBhcmd1bWVudHMuIEl0IHNob3VsZCBhbHNvIGJlXG4gICAgICogY2FsbGVkIHdoZW4gbWFudWFsbHkgaW1wbGVtZW50aW5nIGEgcHJvcGVydHkgc2V0dGVyLiBJbiB0aGlzIGNhc2UsIHBhc3MgdGhlXG4gICAgICogcHJvcGVydHkgYG5hbWVgIGFuZCBgb2xkVmFsdWVgIHRvIGVuc3VyZSB0aGF0IGFueSBjb25maWd1cmVkIHByb3BlcnR5XG4gICAgICogb3B0aW9ucyBhcmUgaG9ub3JlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIG5hbWUgb2YgcmVxdWVzdGluZyBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSBvbGRWYWx1ZSBvbGQgdmFsdWUgb2YgcmVxdWVzdGluZyBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSBvcHRpb25zIHByb3BlcnR5IG9wdGlvbnMgdG8gdXNlIGluc3RlYWQgb2YgdGhlIHByZXZpb3VzbHlcbiAgICAgKiAgICAgY29uZmlndXJlZCBvcHRpb25zXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICByZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIGxldCBzaG91bGRSZXF1ZXN0VXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHByb3BlcnR5IGtleSwgcGVyZm9ybSBwcm9wZXJ0eSB1cGRhdGUgc3RlcHMuXG4gICAgICAgIGlmIChuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPVxuICAgICAgICAgICAgICAgIG9wdGlvbnMgfHxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5nZXRQcm9wZXJ0eU9wdGlvbnMobmFtZSk7XG4gICAgICAgICAgICBjb25zdCBoYXNDaGFuZ2VkID0gb3B0aW9ucy5oYXNDaGFuZ2VkIHx8IG5vdEVxdWFsO1xuICAgICAgICAgICAgaWYgKGhhc0NoYW5nZWQodGhpc1tuYW1lXSwgb2xkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcy5zZXQobmFtZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBBZGQgdG8gcmVmbGVjdGluZyBwcm9wZXJ0aWVzIHNldC5cbiAgICAgICAgICAgICAgICAvLyBOb3RlLCBpdCdzIGltcG9ydGFudCB0aGF0IGV2ZXJ5IGNoYW5nZSBoYXMgYSBjaGFuY2UgdG8gYWRkIHRoZVxuICAgICAgICAgICAgICAgIC8vIHByb3BlcnR5IHRvIGBfcmVmbGVjdGluZ1Byb3BlcnRpZXNgLiBUaGlzIGVuc3VyZXMgc2V0dGluZ1xuICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZSArIHByb3BlcnR5IHJlZmxlY3RzIGNvcnJlY3RseS5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5yZWZsZWN0ID09PSB0cnVlICYmIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgIT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzLnNldChuYW1lLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBBYm9ydCB0aGUgcmVxdWVzdCBpZiB0aGUgcHJvcGVydHkgc2hvdWxkIG5vdCBiZSBjb25zaWRlcmVkIGNoYW5nZWQuXG4gICAgICAgICAgICAgICAgc2hvdWxkUmVxdWVzdFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc1VwZGF0ZVBlbmRpbmcgJiYgc2hvdWxkUmVxdWVzdFVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fX3VwZGF0ZVByb21pc2UgPSB0aGlzLl9fZW5xdWV1ZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdGUsIHNpbmNlIHRoaXMgbm8gbG9uZ2VyIHJldHVybnMgYSBwcm9taXNlLCBpbiBkZXYgbW9kZSB3ZSByZXR1cm4gYVxuICAgICAgICAvLyB0aGVuYWJsZSB3aGljaCB3YXJucyBpZiBpdCdzIGNhbGxlZC5cbiAgICAgICAgcmV0dXJuIERFVl9NT0RFXG4gICAgICAgICAgICA/IHJlcXVlc3RVcGRhdGVUaGVuYWJsZSh0aGlzLmxvY2FsTmFtZSlcbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIHRoZSBlbGVtZW50IHRvIGFzeW5jaHJvbm91c2x5IHVwZGF0ZS5cbiAgICAgKi9cbiAgICBhc3luYyBfX2VucXVldWVVcGRhdGUoKSB7XG4gICAgICAgIHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBhbnkgcHJldmlvdXMgdXBkYXRlIGhhcyByZXNvbHZlZCBiZWZvcmUgdXBkYXRpbmcuXG4gICAgICAgICAgICAvLyBUaGlzIGBhd2FpdGAgYWxzbyBlbnN1cmVzIHRoYXQgcHJvcGVydHkgY2hhbmdlcyBhcmUgYmF0Y2hlZC5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX191cGRhdGVQcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBSZWZpcmUgYW55IHByZXZpb3VzIGVycm9ycyBhc3luYyBzbyB0aGV5IGRvIG5vdCBkaXNydXB0IHRoZSB1cGRhdGVcbiAgICAgICAgICAgIC8vIGN5Y2xlLiBFcnJvcnMgYXJlIHJlZmlyZWQgc28gZGV2ZWxvcGVycyBoYXZlIGEgY2hhbmNlIHRvIG9ic2VydmVcbiAgICAgICAgICAgIC8vIHRoZW0sIGFuZCB0aGlzIGNhbiBiZSBkb25lIGJ5IGltcGxlbWVudGluZ1xuICAgICAgICAgICAgLy8gYHdpbmRvdy5vbnVuaGFuZGxlZHJlamVjdGlvbmAuXG4gICAgICAgICAgICBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICAgIC8vIElmIGBzY2hlZHVsZVVwZGF0ZWAgcmV0dXJucyBhIFByb21pc2UsIHdlIGF3YWl0IGl0LiBUaGlzIGlzIGRvbmUgdG9cbiAgICAgICAgLy8gZW5hYmxlIGNvb3JkaW5hdGluZyB1cGRhdGVzIHdpdGggYSBzY2hlZHVsZXIuIE5vdGUsIHRoZSByZXN1bHQgaXNcbiAgICAgICAgLy8gY2hlY2tlZCB0byBhdm9pZCBkZWxheWluZyBhbiBhZGRpdGlvbmFsIG1pY3JvdGFzayB1bmxlc3Mgd2UgbmVlZCB0by5cbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBhd2FpdCByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICF0aGlzLmlzVXBkYXRlUGVuZGluZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2NoZWR1bGVzIGFuIGVsZW1lbnQgdXBkYXRlLiBZb3UgY2FuIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNoYW5nZSB0aGVcbiAgICAgKiB0aW1pbmcgb2YgdXBkYXRlcyBieSByZXR1cm5pbmcgYSBQcm9taXNlLiBUaGUgdXBkYXRlIHdpbGwgYXdhaXQgdGhlXG4gICAgICogcmV0dXJuZWQgUHJvbWlzZSwgYW5kIHlvdSBzaG91bGQgcmVzb2x2ZSB0aGUgUHJvbWlzZSB0byBhbGxvdyB0aGUgdXBkYXRlXG4gICAgICogdG8gcHJvY2VlZC4gSWYgdGhpcyBtZXRob2QgaXMgb3ZlcnJpZGRlbiwgYHN1cGVyLnNjaGVkdWxlVXBkYXRlKClgXG4gICAgICogbXVzdCBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBGb3IgaW5zdGFuY2UsIHRvIHNjaGVkdWxlIHVwZGF0ZXMgdG8gb2NjdXIganVzdCBiZWZvcmUgdGhlIG5leHQgZnJhbWU6XG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIG92ZXJyaWRlIHByb3RlY3RlZCBhc3luYyBzY2hlZHVsZVVwZGF0ZSgpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICAgKiAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVzb2x2ZSgpKSk7XG4gICAgICogICBzdXBlci5zY2hlZHVsZVVwZGF0ZSgpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHNjaGVkdWxlVXBkYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wZXJmb3JtVXBkYXRlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGFuIGVsZW1lbnQgdXBkYXRlLiBOb3RlLCBpZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGR1cmluZyB0aGVcbiAgICAgKiB1cGRhdGUsIGBmaXJzdFVwZGF0ZWRgIGFuZCBgdXBkYXRlZGAgd2lsbCBub3QgYmUgY2FsbGVkLlxuICAgICAqXG4gICAgICogQ2FsbCBgcGVyZm9ybVVwZGF0ZSgpYCB0byBpbW1lZGlhdGVseSBwcm9jZXNzIGEgcGVuZGluZyB1cGRhdGUuIFRoaXMgc2hvdWxkXG4gICAgICogZ2VuZXJhbGx5IG5vdCBiZSBuZWVkZWQsIGJ1dCBpdCBjYW4gYmUgZG9uZSBpbiByYXJlIGNhc2VzIHdoZW4geW91IG5lZWQgdG9cbiAgICAgKiB1cGRhdGUgc3luY2hyb25vdXNseS5cbiAgICAgKlxuICAgICAqIE5vdGU6IFRvIGVuc3VyZSBgcGVyZm9ybVVwZGF0ZSgpYCBzeW5jaHJvbm91c2x5IGNvbXBsZXRlcyBhIHBlbmRpbmcgdXBkYXRlLFxuICAgICAqIGl0IHNob3VsZCBub3QgYmUgb3ZlcnJpZGRlbi4gSW4gTGl0RWxlbWVudCAyLnggaXQgd2FzIHN1Z2dlc3RlZCB0byBvdmVycmlkZVxuICAgICAqIGBwZXJmb3JtVXBkYXRlKClgIHRvIGFsc28gY3VzdG9taXppbmcgdXBkYXRlIHNjaGVkdWxpbmcuIEluc3RlYWQsIHlvdSBzaG91bGQgbm93XG4gICAgICogb3ZlcnJpZGUgYHNjaGVkdWxlVXBkYXRlKClgLiBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBMaXRFbGVtZW50IDIueCxcbiAgICAgKiBzY2hlZHVsaW5nIHVwZGF0ZXMgdmlhIGBwZXJmb3JtVXBkYXRlKClgIGNvbnRpbnVlcyB0byB3b3JrLCBidXQgd2lsbCBtYWtlXG4gICAgICogYWxzbyBjYWxsaW5nIGBwZXJmb3JtVXBkYXRlKClgIHRvIHN5bmNocm9ub3VzbHkgcHJvY2VzcyB1cGRhdGVzIGRpZmZpY3VsdC5cbiAgICAgKlxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgcGVyZm9ybVVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgLy8gQWJvcnQgYW55IHVwZGF0ZSBpZiBvbmUgaXMgbm90IHBlbmRpbmcgd2hlbiB0aGlzIGlzIGNhbGxlZC5cbiAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIGBwZXJmb3JtVXBkYXRlYCBpcyBjYWxsZWQgZWFybHkgdG8gXCJmbHVzaFwiXG4gICAgICAgIC8vIHRoZSB1cGRhdGUuXG4gICAgICAgIGlmICghdGhpcy5pc1VwZGF0ZVBlbmRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoeyBraW5kOiAndXBkYXRlJyB9KTtcbiAgICAgICAgLy8gY3JlYXRlIHJlbmRlclJvb3QgYmVmb3JlIGZpcnN0IHVwZGF0ZS5cbiAgICAgICAgaWYgKCF0aGlzLmhhc1VwZGF0ZWQpIHtcbiAgICAgICAgICAgIC8vIFByb2R1Y2Ugd2FybmluZyBpZiBhbnkgY2xhc3MgcHJvcGVydGllcyBhcmUgc2hhZG93ZWQgYnkgY2xhc3MgZmllbGRzXG4gICAgICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGFkb3dlZFByb3BlcnRpZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbnN0cnVjdG9yLl9fcmVhY3RpdmVQcm9wZXJ0eUtleXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocCkgJiYgISgoX2EgPSB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaGFzKHApKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93ZWRQcm9wZXJ0aWVzLnB1c2gocCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoc2hhZG93ZWRQcm9wZXJ0aWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBvbiBlbGVtZW50ICR7dGhpcy5sb2NhbE5hbWV9IHdpbGwgbm90IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYHRyaWdnZXIgdXBkYXRlcyBhcyBleHBlY3RlZCBiZWNhdXNlIHRoZXkgYXJlIHNldCB1c2luZyBjbGFzcyBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBmaWVsZHM6ICR7c2hhZG93ZWRQcm9wZXJ0aWVzLmpvaW4oJywgJyl9LiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBOYXRpdmUgY2xhc3MgZmllbGRzIGFuZCBzb21lIGNvbXBpbGVkIG91dHB1dCB3aWxsIG92ZXJ3cml0ZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBhY2Nlc3NvcnMgdXNlZCBmb3IgZGV0ZWN0aW5nIGNoYW5nZXMuIFNlZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBodHRwczovL2xpdC5kZXYvbXNnL2NsYXNzLWZpZWxkLXNoYWRvd2luZyBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWl4aW4gaW5zdGFuY2UgcHJvcGVydGllcyBvbmNlLCBpZiB0aGV5IGV4aXN0LlxuICAgICAgICBpZiAodGhpcy5fX2luc3RhbmNlUHJvcGVydGllcykge1xuICAgICAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yIGxvb3BzXG4gICAgICAgICAgICAvLyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcy5mb3JFYWNoKCh2LCBwKSA9PiAodGhpc1twXSA9IHYpKTtcbiAgICAgICAgICAgIHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNob3VsZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjaGFuZ2VkUHJvcGVydGllcyA9IHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IHRoaXMuc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpbGxVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgICAgIChfYiA9IHRoaXMuX19jb250cm9sbGVycykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKGMpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gYy5ob3N0VXBkYXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjKTsgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX21hcmtVcGRhdGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgYGZpcnN0VXBkYXRlZGAgYW5kIGB1cGRhdGVkYCBmcm9tIHJ1bm5pbmcgd2hlbiB0aGVyZSdzIGFuXG4gICAgICAgICAgICAvLyB1cGRhdGUgZXhjZXB0aW9uLlxuICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBFbnN1cmUgZWxlbWVudCBjYW4gYWNjZXB0IGFkZGl0aW9uYWwgdXBkYXRlcyBhZnRlciBhbiBleGNlcHRpb24uXG4gICAgICAgICAgICB0aGlzLl9fbWFya1VwZGF0ZWQoKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHVwZGF0ZSBpcyBubyBsb25nZXIgY29uc2lkZXJlZCBwZW5kaW5nIGFuZCBmdXJ0aGVyIHVwZGF0ZXMgYXJlIG5vdyBhbGxvd2VkLlxuICAgICAgICBpZiAoc2hvdWxkVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl8kZGlkVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIGJlZm9yZSBgdXBkYXRlKClgIHRvIGNvbXB1dGUgdmFsdWVzIG5lZWRlZCBkdXJpbmcgdGhlIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIEltcGxlbWVudCBgd2lsbFVwZGF0ZWAgdG8gY29tcHV0ZSBwcm9wZXJ0eSB2YWx1ZXMgdGhhdCBkZXBlbmQgb24gb3RoZXJcbiAgICAgKiBwcm9wZXJ0aWVzIGFuZCBhcmUgdXNlZCBpbiB0aGUgcmVzdCBvZiB0aGUgdXBkYXRlIHByb2Nlc3MuXG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIHdpbGxVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgKiAgIC8vIG9ubHkgbmVlZCB0byBjaGVjayBjaGFuZ2VkIHByb3BlcnRpZXMgZm9yIGFuIGV4cGVuc2l2ZSBjb21wdXRhdGlvbi5cbiAgICAgKiAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoJ2ZpcnN0TmFtZScpIHx8IGNoYW5nZWRQcm9wZXJ0aWVzLmhhcygnbGFzdE5hbWUnKSkge1xuICAgICAqICAgICB0aGlzLnNoYSA9IGNvbXB1dGVTSEEoYCR7dGhpcy5maXJzdE5hbWV9ICR7dGhpcy5sYXN0TmFtZX1gKTtcbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICpcbiAgICAgKiByZW5kZXIoKSB7XG4gICAgICogICByZXR1cm4gaHRtbGBTSEE6ICR7dGhpcy5zaGF9YDtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHdpbGxVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7IH1cbiAgICAvLyBOb3RlLCB0aGlzIGlzIGFuIG92ZXJyaWRlIHBvaW50IGZvciBwb2x5ZmlsbC1zdXBwb3J0LlxuICAgIC8vIEBpbnRlcm5hbFxuICAgIF8kZGlkVXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3RVcGRhdGVkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjKTsgfSk7XG4gICAgICAgIGlmICghdGhpcy5oYXNVcGRhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmhhc1VwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgIGlmIChERVZfTU9ERSAmJlxuICAgICAgICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgJiZcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZW5hYmxlZFdhcm5pbmdzLmluZGV4T2YoJ2NoYW5nZS1pbi11cGRhdGUnKSA+PSAwKSB7XG4gICAgICAgICAgICBpc3N1ZVdhcm5pbmcoJ2NoYW5nZS1pbi11cGRhdGUnLCBgRWxlbWVudCAke3RoaXMubG9jYWxOYW1lfSBzY2hlZHVsZWQgYW4gdXBkYXRlIGAgK1xuICAgICAgICAgICAgICAgIGAoZ2VuZXJhbGx5IGJlY2F1c2UgYSBwcm9wZXJ0eSB3YXMgc2V0KSBgICtcbiAgICAgICAgICAgICAgICBgYWZ0ZXIgYW4gdXBkYXRlIGNvbXBsZXRlZCwgY2F1c2luZyBhIG5ldyB1cGRhdGUgdG8gYmUgc2NoZWR1bGVkLiBgICtcbiAgICAgICAgICAgICAgICBgVGhpcyBpcyBpbmVmZmljaWVudCBhbmQgc2hvdWxkIGJlIGF2b2lkZWQgdW5sZXNzIHRoZSBuZXh0IHVwZGF0ZSBgICtcbiAgICAgICAgICAgICAgICBgY2FuIG9ubHkgYmUgc2NoZWR1bGVkIGFzIGEgc2lkZSBlZmZlY3Qgb2YgdGhlIHByZXZpb3VzIHVwZGF0ZS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfX21hcmtVcGRhdGVkKCkge1xuICAgICAgICB0aGlzLl8kY2hhbmdlZFByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgZWxlbWVudCBoYXMgY29tcGxldGVkIHVwZGF0aW5nLlxuICAgICAqIFRoZSBQcm9taXNlIHZhbHVlIGlzIGEgYm9vbGVhbiB0aGF0IGlzIGB0cnVlYCBpZiB0aGUgZWxlbWVudCBjb21wbGV0ZWQgdGhlXG4gICAgICogdXBkYXRlIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS4gVGhlIFByb21pc2UgcmVzdWx0IGlzIGBmYWxzZWAgaWZcbiAgICAgKiBhIHByb3BlcnR5IHdhcyBzZXQgaW5zaWRlIGB1cGRhdGVkKClgLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgYW5cbiAgICAgKiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgdGhlIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIFRvIGF3YWl0IGFkZGl0aW9uYWwgYXN5bmNocm9ub3VzIHdvcmssIG92ZXJyaWRlIHRoZSBgZ2V0VXBkYXRlQ29tcGxldGVgXG4gICAgICogbWV0aG9kLiBGb3IgZXhhbXBsZSwgaXQgaXMgc29tZXRpbWVzIHVzZWZ1bCB0byBhd2FpdCBhIHJlbmRlcmVkIGVsZW1lbnRcbiAgICAgKiBiZWZvcmUgZnVsZmlsbGluZyB0aGlzIFByb21pc2UuIFRvIGRvIHRoaXMsIGZpcnN0IGF3YWl0XG4gICAgICogYHN1cGVyLmdldFVwZGF0ZUNvbXBsZXRlKClgLCB0aGVuIGFueSBzdWJzZXF1ZW50IHN0YXRlLlxuICAgICAqXG4gICAgICogQHJldHVybiBBIHByb21pc2Ugb2YgYSBib29sZWFuIHRoYXQgcmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0aGUgdXBkYXRlIGNvbXBsZXRlZFxuICAgICAqICAgICB3aXRob3V0IHRyaWdnZXJpbmcgYW5vdGhlciB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBnZXQgdXBkYXRlQ29tcGxldGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFVwZGF0ZUNvbXBsZXRlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHBvaW50IGZvciB0aGUgYHVwZGF0ZUNvbXBsZXRlYCBwcm9taXNlLlxuICAgICAqXG4gICAgICogSXQgaXMgbm90IHNhZmUgdG8gb3ZlcnJpZGUgdGhlIGB1cGRhdGVDb21wbGV0ZWAgZ2V0dGVyIGRpcmVjdGx5IGR1ZSB0byBhXG4gICAgICogbGltaXRhdGlvbiBpbiBUeXBlU2NyaXB0IHdoaWNoIG1lYW5zIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBjYWxsIGFcbiAgICAgKiBzdXBlcmNsYXNzIGdldHRlciAoZS5nLiBgc3VwZXIudXBkYXRlQ29tcGxldGUudGhlbiguLi4pYCkgd2hlbiB0aGUgdGFyZ2V0XG4gICAgICogbGFuZ3VhZ2UgaXMgRVM1IChodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzMzOCkuXG4gICAgICogVGhpcyBtZXRob2Qgc2hvdWxkIGJlIG92ZXJyaWRkZW4gaW5zdGVhZC4gRm9yIGV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgICAqICAgb3ZlcnJpZGUgYXN5bmMgZ2V0VXBkYXRlQ29tcGxldGUoKSB7XG4gICAgICogICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN1cGVyLmdldFVwZGF0ZUNvbXBsZXRlKCk7XG4gICAgICogICAgIGF3YWl0IHRoaXMuX215Q2hpbGQudXBkYXRlQ29tcGxldGU7XG4gICAgICogICAgIHJldHVybiByZXN1bHQ7XG4gICAgICogICB9XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHJldHVybiBBIHByb21pc2Ugb2YgYSBib29sZWFuIHRoYXQgcmVzb2x2ZXMgdG8gdHJ1ZSBpZiB0aGUgdXBkYXRlIGNvbXBsZXRlZFxuICAgICAqICAgICB3aXRob3V0IHRyaWdnZXJpbmcgYW5vdGhlciB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBnZXRVcGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX191cGRhdGVQcm9taXNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb250cm9scyB3aGV0aGVyIG9yIG5vdCBgdXBkYXRlKClgIHNob3VsZCBiZSBjYWxsZWQgd2hlbiB0aGUgZWxlbWVudCByZXF1ZXN0c1xuICAgICAqIGFuIHVwZGF0ZS4gQnkgZGVmYXVsdCwgdGhpcyBtZXRob2QgYWx3YXlzIHJldHVybnMgYHRydWVgLCBidXQgdGhpcyBjYW4gYmVcbiAgICAgKiBjdXN0b21pemVkIHRvIGNvbnRyb2wgd2hlbiB0byB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBzaG91bGRVcGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBlbGVtZW50LiBUaGlzIG1ldGhvZCByZWZsZWN0cyBwcm9wZXJ0eSB2YWx1ZXMgdG8gYXR0cmlidXRlcy5cbiAgICAgKiBJdCBjYW4gYmUgb3ZlcnJpZGRlbiB0byByZW5kZXIgYW5kIGtlZXAgdXBkYXRlZCBlbGVtZW50IERPTS5cbiAgICAgKiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgKm5vdCogdHJpZ2dlclxuICAgICAqIGFub3RoZXIgdXBkYXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgdXBkYXRlKF9jaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAgICBpZiAodGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvclxuICAgICAgICAgICAgLy8gbG9vcHMgZXhwZWN0aW5nIGFycmF5c1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzLmZvckVhY2goKHYsIGspID0+IHRoaXMuX19wcm9wZXJ0eVRvQXR0cmlidXRlKGssIHRoaXNba10sIHYpKTtcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9fbWFya1VwZGF0ZWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuZXZlciB0aGUgZWxlbWVudCBpcyB1cGRhdGVkLiBJbXBsZW1lbnQgdG8gcGVyZm9ybVxuICAgICAqIHBvc3QtdXBkYXRpbmcgdGFza3MgdmlhIERPTSBBUElzLCBmb3IgZXhhbXBsZSwgZm9jdXNpbmcgYW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCB0cmlnZ2VyIHRoZSBlbGVtZW50IHRvIHVwZGF0ZVxuICAgICAqIGFnYWluIGFmdGVyIHRoaXMgdXBkYXRlIGN5Y2xlIGNvbXBsZXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHVwZGF0ZWQoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7IH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGVsZW1lbnQgaXMgZmlyc3QgdXBkYXRlZC4gSW1wbGVtZW50IHRvIHBlcmZvcm0gb25lIHRpbWVcbiAgICAgKiB3b3JrIG9uIHRoZSBlbGVtZW50IGFmdGVyIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogZmlyc3RVcGRhdGVkKCkge1xuICAgICAqICAgdGhpcy5yZW5kZXJSb290LmdldEVsZW1lbnRCeUlkKCdteS10ZXh0LWFyZWEnKS5mb2N1cygpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCB0cmlnZ2VyIHRoZSBlbGVtZW50IHRvIHVwZGF0ZVxuICAgICAqIGFnYWluIGFmdGVyIHRoaXMgdXBkYXRlIGN5Y2xlIGNvbXBsZXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGZpcnN0VXBkYXRlZChfY2hhbmdlZFByb3BlcnRpZXMpIHsgfVxufVxuX2UgPSBmaW5hbGl6ZWQ7XG4vKipcbiAqIE1hcmtzIGNsYXNzIGFzIGhhdmluZyBmaW5pc2hlZCBjcmVhdGluZyBwcm9wZXJ0aWVzLlxuICovXG5SZWFjdGl2ZUVsZW1lbnRbX2VdID0gdHJ1ZTtcbi8qKlxuICogTWVtb2l6ZWQgbGlzdCBvZiBhbGwgZWxlbWVudCBwcm9wZXJ0aWVzLCBpbmNsdWRpbmcgYW55IHN1cGVyY2xhc3MgcHJvcGVydGllcy5cbiAqIENyZWF0ZWQgbGF6aWx5IG9uIHVzZXIgc3ViY2xhc3NlcyB3aGVuIGZpbmFsaXppbmcgdGhlIGNsYXNzLlxuICogQG5vY29sbGFwc2VcbiAqIEBjYXRlZ29yeSBwcm9wZXJ0aWVzXG4gKi9cblJlYWN0aXZlRWxlbWVudC5lbGVtZW50UHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbi8qKlxuICogTWVtb2l6ZWQgbGlzdCBvZiBhbGwgZWxlbWVudCBzdHlsZXMuXG4gKiBDcmVhdGVkIGxhemlseSBvbiB1c2VyIHN1YmNsYXNzZXMgd2hlbiBmaW5hbGl6aW5nIHRoZSBjbGFzcy5cbiAqIEBub2NvbGxhcHNlXG4gKiBAY2F0ZWdvcnkgc3R5bGVzXG4gKi9cblJlYWN0aXZlRWxlbWVudC5lbGVtZW50U3R5bGVzID0gW107XG4vKipcbiAqIE9wdGlvbnMgdXNlZCB3aGVuIGNhbGxpbmcgYGF0dGFjaFNoYWRvd2AuIFNldCB0aGlzIHByb3BlcnR5IHRvIGN1c3RvbWl6ZVxuICogdGhlIG9wdGlvbnMgZm9yIHRoZSBzaGFkb3dSb290OyBmb3IgZXhhbXBsZSwgdG8gY3JlYXRlIGEgY2xvc2VkXG4gKiBzaGFkb3dSb290OiBge21vZGU6ICdjbG9zZWQnfWAuXG4gKlxuICogTm90ZSwgdGhlc2Ugb3B0aW9ucyBhcmUgdXNlZCBpbiBgY3JlYXRlUmVuZGVyUm9vdGAuIElmIHRoaXMgbWV0aG9kXG4gKiBpcyBjdXN0b21pemVkLCBvcHRpb25zIHNob3VsZCBiZSByZXNwZWN0ZWQgaWYgcG9zc2libGUuXG4gKiBAbm9jb2xsYXBzZVxuICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICovXG5SZWFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdE9wdGlvbnMgPSB7IG1vZGU6ICdvcGVuJyB9O1xuLy8gQXBwbHkgcG9seWZpbGxzIGlmIGF2YWlsYWJsZVxucG9seWZpbGxTdXBwb3J0ID09PSBudWxsIHx8IHBvbHlmaWxsU3VwcG9ydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9seWZpbGxTdXBwb3J0KHsgUmVhY3RpdmVFbGVtZW50IH0pO1xuLy8gRGV2IG1vZGUgd2FybmluZ3MuLi5cbmlmIChERVZfTU9ERSkge1xuICAgIC8vIERlZmF1bHQgd2FybmluZyBzZXQuXG4gICAgUmVhY3RpdmVFbGVtZW50LmVuYWJsZWRXYXJuaW5ncyA9IFsnY2hhbmdlLWluLXVwZGF0ZSddO1xuICAgIGNvbnN0IGVuc3VyZU93bldhcm5pbmdzID0gZnVuY3Rpb24gKGN0b3IpIHtcbiAgICAgICAgaWYgKCFjdG9yLmhhc093blByb3BlcnR5KEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkoJ2VuYWJsZWRXYXJuaW5ncycsIGN0b3IpKSkge1xuICAgICAgICAgICAgY3Rvci5lbmFibGVkV2FybmluZ3MgPSBjdG9yLmVuYWJsZWRXYXJuaW5ncy5zbGljZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZWFjdGl2ZUVsZW1lbnQuZW5hYmxlV2FybmluZyA9IGZ1bmN0aW9uICh3YXJuaW5nKSB7XG4gICAgICAgIGVuc3VyZU93bldhcm5pbmdzKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5lbmFibGVkV2FybmluZ3MuaW5kZXhPZih3YXJuaW5nKSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZFdhcm5pbmdzLnB1c2god2FybmluZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aXZlRWxlbWVudC5kaXNhYmxlV2FybmluZyA9IGZ1bmN0aW9uICh3YXJuaW5nKSB7XG4gICAgICAgIGVuc3VyZU93bldhcm5pbmdzKHRoaXMpO1xuICAgICAgICBjb25zdCBpID0gdGhpcy5lbmFibGVkV2FybmluZ3MuaW5kZXhPZih3YXJuaW5nKTtcbiAgICAgICAgaWYgKGkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVkV2FybmluZ3Muc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgUmVhY3RpdmVFbGVtZW50IHVzYWdlLlxuKChfZCA9IGdsb2JhbC5yZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucykgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogKGdsb2JhbC5yZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucyA9IFtdKSkucHVzaCgnMS42LjEnKTtcbmlmIChERVZfTU9ERSAmJiBnbG9iYWwucmVhY3RpdmVFbGVtZW50VmVyc2lvbnMubGVuZ3RoID4gMSkge1xuICAgIGlzc3VlV2FybmluZygnbXVsdGlwbGUtdmVyc2lvbnMnLCBgTXVsdGlwbGUgdmVyc2lvbnMgb2YgTGl0IGxvYWRlZC4gTG9hZGluZyBtdWx0aXBsZSB2ZXJzaW9ucyBgICtcbiAgICAgICAgYGlzIG5vdCByZWNvbW1lbmRlZC5gKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0aXZlLWVsZW1lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgX2EsIF9iLCBfYztcbi8qKlxuICogVGhlIG1haW4gTGl0RWxlbWVudCBtb2R1bGUsIHdoaWNoIGRlZmluZXMgdGhlIHtAbGlua2NvZGUgTGl0RWxlbWVudH0gYmFzZVxuICogY2xhc3MgYW5kIHJlbGF0ZWQgQVBJcy5cbiAqXG4gKiAgTGl0RWxlbWVudCBjb21wb25lbnRzIGNhbiBkZWZpbmUgYSB0ZW1wbGF0ZSBhbmQgYSBzZXQgb2Ygb2JzZXJ2ZWRcbiAqIHByb3BlcnRpZXMuIENoYW5naW5nIGFuIG9ic2VydmVkIHByb3BlcnR5IHRyaWdnZXJzIGEgcmUtcmVuZGVyIG9mIHRoZVxuICogZWxlbWVudC5cbiAqXG4gKiAgSW1wb3J0IHtAbGlua2NvZGUgTGl0RWxlbWVudH0gYW5kIHtAbGlua2NvZGUgaHRtbH0gZnJvbSB0aGlzIG1vZHVsZSB0b1xuICogY3JlYXRlIGEgY29tcG9uZW50OlxuICpcbiAqICBgYGBqc1xuICogaW1wb3J0IHtMaXRFbGVtZW50LCBodG1sfSBmcm9tICdsaXQtZWxlbWVudCc7XG4gKlxuICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gKlxuICogICAvLyBEZWNsYXJlIG9ic2VydmVkIHByb3BlcnRpZXNcbiAqICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICogICAgIHJldHVybiB7XG4gKiAgICAgICBhZGplY3RpdmU6IHt9XG4gKiAgICAgfVxuICogICB9XG4gKlxuICogICBjb25zdHJ1Y3RvcigpIHtcbiAqICAgICB0aGlzLmFkamVjdGl2ZSA9ICdhd2Vzb21lJztcbiAqICAgfVxuICpcbiAqICAgLy8gRGVmaW5lIHRoZSBlbGVtZW50J3MgdGVtcGxhdGVcbiAqICAgcmVuZGVyKCkge1xuICogICAgIHJldHVybiBodG1sYDxwPnlvdXIgJHthZGplY3RpdmV9IHRlbXBsYXRlIGhlcmU8L3A+YDtcbiAqICAgfVxuICogfVxuICpcbiAqIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbXktZWxlbWVudCcsIE15RWxlbWVudCk7XG4gKiBgYGBcbiAqXG4gKiBgTGl0RWxlbWVudGAgZXh0ZW5kcyB7QGxpbmtjb2RlIFJlYWN0aXZlRWxlbWVudH0gYW5kIGFkZHMgbGl0LWh0bWxcbiAqIHRlbXBsYXRpbmcuIFRoZSBgUmVhY3RpdmVFbGVtZW50YCBjbGFzcyBpcyBwcm92aWRlZCBmb3IgdXNlcnMgdGhhdCB3YW50IHRvXG4gKiBidWlsZCB0aGVpciBvd24gY3VzdG9tIGVsZW1lbnQgYmFzZSBjbGFzc2VzIHRoYXQgZG9uJ3QgdXNlIGxpdC1odG1sLlxuICpcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG5pbXBvcnQgeyBSZWFjdGl2ZUVsZW1lbnQgfSBmcm9tICdAbGl0L3JlYWN0aXZlLWVsZW1lbnQnO1xuaW1wb3J0IHsgcmVuZGVyLCBub0NoYW5nZSB9IGZyb20gJ2xpdC1odG1sJztcbmV4cG9ydCAqIGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudCc7XG5leHBvcnQgKiBmcm9tICdsaXQtaHRtbCc7XG4vLyBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXhwb3J0IFJlYWN0aXZlRWxlbWVudCBhcyBVcGRhdGluZ0VsZW1lbnQuIE5vdGUsXG4vLyBJRSB0cmFuc3BpbGF0aW9uIHJlcXVpcmVzIGV4cG9ydGluZyBsaWtlIHRoaXMuXG5leHBvcnQgY29uc3QgVXBkYXRpbmdFbGVtZW50ID0gUmVhY3RpdmVFbGVtZW50O1xuY29uc3QgREVWX01PREUgPSB0cnVlO1xubGV0IGlzc3VlV2FybmluZztcbmlmIChERVZfTU9ERSkge1xuICAgIC8vIEVuc3VyZSB3YXJuaW5ncyBhcmUgaXNzdWVkIG9ubHkgMXgsIGV2ZW4gaWYgbXVsdGlwbGUgdmVyc2lvbnMgb2YgTGl0XG4gICAgLy8gYXJlIGxvYWRlZC5cbiAgICBjb25zdCBpc3N1ZWRXYXJuaW5ncyA9ICgoX2EgPSBnbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoZ2xvYmFsVGhpcy5saXRJc3N1ZWRXYXJuaW5ncyA9IG5ldyBTZXQoKSkpO1xuICAgIC8vIElzc3VlIGEgd2FybmluZywgaWYgd2UgaGF2ZW4ndCBhbHJlYWR5LlxuICAgIGlzc3VlV2FybmluZyA9IChjb2RlLCB3YXJuaW5nKSA9PiB7XG4gICAgICAgIHdhcm5pbmcgKz0gYCBTZWUgaHR0cHM6Ly9saXQuZGV2L21zZy8ke2NvZGV9IGZvciBtb3JlIGluZm9ybWF0aW9uLmA7XG4gICAgICAgIGlmICghaXNzdWVkV2FybmluZ3MuaGFzKHdhcm5pbmcpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4od2FybmluZyk7XG4gICAgICAgICAgICBpc3N1ZWRXYXJuaW5ncy5hZGQod2FybmluZyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuLyoqXG4gKiBCYXNlIGVsZW1lbnQgY2xhc3MgdGhhdCBtYW5hZ2VzIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcywgYW5kXG4gKiByZW5kZXJzIGEgbGl0LWh0bWwgdGVtcGxhdGUuXG4gKlxuICogVG8gZGVmaW5lIGEgY29tcG9uZW50LCBzdWJjbGFzcyBgTGl0RWxlbWVudGAgYW5kIGltcGxlbWVudCBhXG4gKiBgcmVuZGVyYCBtZXRob2QgdG8gcHJvdmlkZSB0aGUgY29tcG9uZW50J3MgdGVtcGxhdGUuIERlZmluZSBwcm9wZXJ0aWVzXG4gKiB1c2luZyB0aGUge0BsaW5rY29kZSBMaXRFbGVtZW50LnByb3BlcnRpZXMgcHJvcGVydGllc30gcHJvcGVydHkgb3IgdGhlXG4gKiB7QGxpbmtjb2RlIHByb3BlcnR5fSBkZWNvcmF0b3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXRFbGVtZW50IGV4dGVuZHMgUmVhY3RpdmVFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVuZGVyT3B0aW9ucyA9IHsgaG9zdDogdGhpcyB9O1xuICAgICAgICB0aGlzLl9fY2hpbGRQYXJ0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gICAgICovXG4gICAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX2I7XG4gICAgICAgIGNvbnN0IHJlbmRlclJvb3QgPSBzdXBlci5jcmVhdGVSZW5kZXJSb290KCk7XG4gICAgICAgIC8vIFdoZW4gYWRvcHRlZFN0eWxlU2hlZXRzIGFyZSBzaGltbWVkLCB0aGV5IGFyZSBpbnNlcnRlZCBpbnRvIHRoZVxuICAgICAgICAvLyBzaGFkb3dSb290IGJ5IGNyZWF0ZVJlbmRlclJvb3QuIEFkanVzdCB0aGUgcmVuZGVyQmVmb3JlIG5vZGUgc28gdGhhdFxuICAgICAgICAvLyBhbnkgc3R5bGVzIGluIExpdCBjb250ZW50IHJlbmRlciBiZWZvcmUgYWRvcHRlZFN0eWxlU2hlZXRzLiBUaGlzIGlzXG4gICAgICAgIC8vIGltcG9ydGFudCBzbyB0aGF0IGFkb3B0ZWRTdHlsZVNoZWV0cyBoYXZlIHByZWNlZGVuY2Ugb3ZlciBzdHlsZXMgaW5cbiAgICAgICAgLy8gdGhlIHNoYWRvd1Jvb3QuXG4gICAgICAgIChfYSA9IChfYiA9IHRoaXMucmVuZGVyT3B0aW9ucykucmVuZGVyQmVmb3JlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoX2IucmVuZGVyQmVmb3JlID0gcmVuZGVyUm9vdC5maXJzdENoaWxkKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlclJvb3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQuIFRoaXMgbWV0aG9kIHJlZmxlY3RzIHByb3BlcnR5IHZhbHVlcyB0byBhdHRyaWJ1dGVzXG4gICAgICogYW5kIGNhbGxzIGByZW5kZXJgIHRvIHJlbmRlciBET00gdmlhIGxpdC1odG1sLiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlXG4gICAgICogdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyIGFub3RoZXIgdXBkYXRlLlxuICAgICAqIEBwYXJhbSBjaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgdXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIC8vIFNldHRpbmcgcHJvcGVydGllcyBpbiBgcmVuZGVyYCBzaG91bGQgbm90IHRyaWdnZXIgYW4gdXBkYXRlLiBTaW5jZVxuICAgICAgICAvLyB1cGRhdGVzIGFyZSBhbGxvd2VkIGFmdGVyIHN1cGVyLnVwZGF0ZSwgaXQncyBpbXBvcnRhbnQgdG8gY2FsbCBgcmVuZGVyYFxuICAgICAgICAvLyBiZWZvcmUgdGhhdC5cbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnJlbmRlcigpO1xuICAgICAgICBpZiAoIXRoaXMuaGFzVXBkYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJPcHRpb25zLmlzQ29ubmVjdGVkID0gdGhpcy5pc0Nvbm5lY3RlZDtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB0aGlzLl9fY2hpbGRQYXJ0ID0gcmVuZGVyKHZhbHVlLCB0aGlzLnJlbmRlclJvb3QsIHRoaXMucmVuZGVyT3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFkZGVkIHRvIHRoZSBkb2N1bWVudCdzIERPTS5cbiAgICAgKlxuICAgICAqIEluIGBjb25uZWN0ZWRDYWxsYmFjaygpYCB5b3Ugc2hvdWxkIHNldHVwIHRhc2tzIHRoYXQgc2hvdWxkIG9ubHkgb2NjdXIgd2hlblxuICAgICAqIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCB0byB0aGUgZG9jdW1lbnQuIFRoZSBtb3N0IGNvbW1vbiBvZiB0aGVzZSBpc1xuICAgICAqIGFkZGluZyBldmVudCBsaXN0ZW5lcnMgdG8gbm9kZXMgZXh0ZXJuYWwgdG8gdGhlIGVsZW1lbnQsIGxpa2UgYSBrZXlkb3duXG4gICAgICogZXZlbnQgaGFuZGxlciBhZGRlZCB0byB0aGUgd2luZG93LlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgKiAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICogICBhZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlS2V5ZG93bik7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogVHlwaWNhbGx5LCBhbnl0aGluZyBkb25lIGluIGBjb25uZWN0ZWRDYWxsYmFjaygpYCBzaG91bGQgYmUgdW5kb25lIHdoZW4gdGhlXG4gICAgICogZWxlbWVudCBpcyBkaXNjb25uZWN0ZWQsIGluIGBkaXNjb25uZWN0ZWRDYWxsYmFjaygpYC5cbiAgICAgKlxuICAgICAqIEBjYXRlZ29yeSBsaWZlY3ljbGVcbiAgICAgKi9cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY2hpbGRQYXJ0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0Q29ubmVjdGVkKHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyByZW1vdmVkIGZyb20gdGhlIGRvY3VtZW50J3MgRE9NLlxuICAgICAqXG4gICAgICogVGhpcyBjYWxsYmFjayBpcyB0aGUgbWFpbiBzaWduYWwgdG8gdGhlIGVsZW1lbnQgdGhhdCBpdCBtYXkgbm8gbG9uZ2VyIGJlXG4gICAgICogdXNlZC4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrKClgIHNob3VsZCBlbnN1cmUgdGhhdCBub3RoaW5nIGlzIGhvbGRpbmcgYVxuICAgICAqIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCAoc3VjaCBhcyBldmVudCBsaXN0ZW5lcnMgYWRkZWQgdG8gbm9kZXMgZXh0ZXJuYWxcbiAgICAgKiB0byB0aGUgZWxlbWVudCksIHNvIHRoYXQgaXQgaXMgZnJlZSB0byBiZSBnYXJiYWdlIGNvbGxlY3RlZC5cbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICogICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAqICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVLZXlkb3duKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBBbiBlbGVtZW50IG1heSBiZSByZS1jb25uZWN0ZWQgYWZ0ZXIgYmVpbmcgZGlzY29ubmVjdGVkLlxuICAgICAqXG4gICAgICogQGNhdGVnb3J5IGxpZmVjeWNsZVxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIChfYSA9IHRoaXMuX19jaGlsZFBhcnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRDb25uZWN0ZWQoZmFsc2UpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIG9uIGVhY2ggdXBkYXRlIHRvIHBlcmZvcm0gcmVuZGVyaW5nIHRhc2tzLiBUaGlzIG1ldGhvZCBtYXkgcmV0dXJuXG4gICAgICogYW55IHZhbHVlIHJlbmRlcmFibGUgYnkgbGl0LWh0bWwncyBgQ2hpbGRQYXJ0YCAtIHR5cGljYWxseSBhXG4gICAgICogYFRlbXBsYXRlUmVzdWx0YC4gU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsICpub3QqIHRyaWdnZXJcbiAgICAgKiB0aGUgZWxlbWVudCB0byB1cGRhdGUuXG4gICAgICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIG5vQ2hhbmdlO1xuICAgIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoaXMgY2xhc3MgaXMgbWFya2VkIGFzIGBmaW5hbGl6ZWRgIGFzIGFuIG9wdGltaXphdGlvbiBlbnN1cmluZ1xuICogaXQgd2lsbCBub3QgbmVlZGxlc3NseSB0cnkgdG8gYGZpbmFsaXplYC5cbiAqXG4gKiBOb3RlIHRoaXMgcHJvcGVydHkgbmFtZSBpcyBhIHN0cmluZyB0byBwcmV2ZW50IGJyZWFraW5nIENsb3N1cmUgSlMgQ29tcGlsZXJcbiAqIG9wdGltaXphdGlvbnMuIFNlZSBAbGl0L3JlYWN0aXZlLWVsZW1lbnQgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKi9cbkxpdEVsZW1lbnRbJ2ZpbmFsaXplZCddID0gdHJ1ZTtcbi8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG5MaXRFbGVtZW50WydfJGxpdEVsZW1lbnQkJ10gPSB0cnVlO1xuLy8gSW5zdGFsbCBoeWRyYXRpb24gaWYgYXZhaWxhYmxlXG4oX2IgPSBnbG9iYWxUaGlzLmxpdEVsZW1lbnRIeWRyYXRlU3VwcG9ydCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoZ2xvYmFsVGhpcywgeyBMaXRFbGVtZW50IH0pO1xuLy8gQXBwbHkgcG9seWZpbGxzIGlmIGF2YWlsYWJsZVxuY29uc3QgcG9seWZpbGxTdXBwb3J0ID0gREVWX01PREVcbiAgICA/IGdsb2JhbFRoaXMubGl0RWxlbWVudFBvbHlmaWxsU3VwcG9ydERldk1vZGVcbiAgICA6IGdsb2JhbFRoaXMubGl0RWxlbWVudFBvbHlmaWxsU3VwcG9ydDtcbnBvbHlmaWxsU3VwcG9ydCA9PT0gbnVsbCB8fCBwb2x5ZmlsbFN1cHBvcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBvbHlmaWxsU3VwcG9ydCh7IExpdEVsZW1lbnQgfSk7XG4vLyBERVYgbW9kZSB3YXJuaW5nc1xuaWYgKERFVl9NT0RFKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuICAgIC8vIE5vdGUsIGZvciBjb21wYXRpYmlsaXR5IHdpdGggY2xvc3VyZSBjb21waWxhdGlvbiwgdGhpcyBhY2Nlc3NcbiAgICAvLyBuZWVkcyB0byBiZSBhcyBhIHN0cmluZyBwcm9wZXJ0eSBpbmRleC5cbiAgICBMaXRFbGVtZW50WydmaW5hbGl6ZSddID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBmaW5hbGl6ZWQgPSBSZWFjdGl2ZUVsZW1lbnQuZmluYWxpemUuY2FsbCh0aGlzKTtcbiAgICAgICAgaWYgKCFmaW5hbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3YXJuUmVtb3ZlZE9yUmVuYW1lZCA9IChvYmosIG5hbWUsIHJlbmFtZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0b3JOYW1lID0gKHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicgPyBvYmogOiBvYmouY29uc3RydWN0b3IpXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lO1xuICAgICAgICAgICAgICAgIGlzc3VlV2FybmluZyhyZW5hbWVkID8gJ3JlbmFtZWQtYXBpJyA6ICdyZW1vdmVkLWFwaScsIGBcXGAke25hbWV9XFxgIGlzIGltcGxlbWVudGVkIG9uIGNsYXNzICR7Y3Rvck5hbWV9LiBJdCBgICtcbiAgICAgICAgICAgICAgICAgICAgYGhhcyBiZWVuICR7cmVuYW1lZCA/ICdyZW5hbWVkJyA6ICdyZW1vdmVkJ30gYCArXG4gICAgICAgICAgICAgICAgICAgIGBpbiB0aGlzIHZlcnNpb24gb2YgTGl0RWxlbWVudC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2FyblJlbW92ZWRPclJlbmFtZWQodGhpcywgJ3JlbmRlcicpO1xuICAgICAgICB3YXJuUmVtb3ZlZE9yUmVuYW1lZCh0aGlzLCAnZ2V0U3R5bGVzJywgdHJ1ZSk7XG4gICAgICAgIHdhcm5SZW1vdmVkT3JSZW5hbWVkKHRoaXMucHJvdG90eXBlLCAnYWRvcHRTdHlsZXMnKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbn1cbi8qKlxuICogRU5EIFVTRVJTIFNIT1VMRCBOT1QgUkVMWSBPTiBUSElTIE9CSkVDVC5cbiAqXG4gKiBQcml2YXRlIGV4cG9ydHMgZm9yIHVzZSBieSBvdGhlciBMaXQgcGFja2FnZXMsIG5vdCBpbnRlbmRlZCBmb3IgdXNlIGJ5XG4gKiBleHRlcm5hbCB1c2Vycy5cbiAqXG4gKiBXZSBjdXJyZW50bHkgZG8gbm90IG1ha2UgYSBtYW5nbGVkIHJvbGx1cCBidWlsZCBvZiB0aGUgbGl0LXNzciBjb2RlLiBJbiBvcmRlclxuICogdG8ga2VlcCBhIG51bWJlciBvZiAob3RoZXJ3aXNlIHByaXZhdGUpIHRvcC1sZXZlbCBleHBvcnRzICBtYW5nbGVkIGluIHRoZVxuICogY2xpZW50IHNpZGUgY29kZSwgd2UgZXhwb3J0IGEgXyRMRSBvYmplY3QgY29udGFpbmluZyB0aG9zZSBtZW1iZXJzIChvclxuICogaGVscGVyIG1ldGhvZHMgZm9yIGFjY2Vzc2luZyBwcml2YXRlIGZpZWxkcyBvZiB0aG9zZSBtZW1iZXJzKSwgYW5kIHRoZW5cbiAqIHJlLWV4cG9ydCB0aGVtIGZvciB1c2UgaW4gbGl0LXNzci4gVGhpcyBrZWVwcyBsaXQtc3NyIGFnbm9zdGljIHRvIHdoZXRoZXIgdGhlXG4gKiBjbGllbnQtc2lkZSBjb2RlIGlzIGJlaW5nIHVzZWQgaW4gYGRldmAgbW9kZSBvciBgcHJvZGAgbW9kZS5cbiAqXG4gKiBUaGlzIGhhcyBhIHVuaXF1ZSBuYW1lLCB0byBkaXNhbWJpZ3VhdGUgaXQgZnJvbSBwcml2YXRlIGV4cG9ydHMgaW5cbiAqIGxpdC1odG1sLCBzaW5jZSB0aGlzIG1vZHVsZSByZS1leHBvcnRzIGFsbCBvZiBsaXQtaHRtbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgXyRMRSA9IHtcbiAgICBfJGF0dHJpYnV0ZVRvUHJvcGVydHk6IChlbCwgbmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIGVsLl8kYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgfSxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBfJGNoYW5nZWRQcm9wZXJ0aWVzOiAoZWwpID0+IGVsLl8kY2hhbmdlZFByb3BlcnRpZXMsXG59O1xuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBMaXRFbGVtZW50IHVzYWdlLlxuKChfYyA9IGdsb2JhbFRoaXMubGl0RWxlbWVudFZlcnNpb25zKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAoZ2xvYmFsVGhpcy5saXRFbGVtZW50VmVyc2lvbnMgPSBbXSkpLnB1c2goJzMuMi4yJyk7XG5pZiAoREVWX01PREUgJiYgZ2xvYmFsVGhpcy5saXRFbGVtZW50VmVyc2lvbnMubGVuZ3RoID4gMSkge1xuICAgIGlzc3VlV2FybmluZygnbXVsdGlwbGUtdmVyc2lvbnMnLCBgTXVsdGlwbGUgdmVyc2lvbnMgb2YgTGl0IGxvYWRlZC4gTG9hZGluZyBtdWx0aXBsZSB2ZXJzaW9ucyBgICtcbiAgICAgICAgYGlzIG5vdCByZWNvbW1lbmRlZC5gKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1lbGVtZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIyIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKlxuICogVGhpcyBmaWxlIGV4cG9ydHMgYSBib29sZWFuIGNvbnN0IHdob3NlIHZhbHVlIHdpbGwgZGVwZW5kIG9uIHdoYXQgZW52aXJvbm1lbnRcbiAqIHRoZSBtb2R1bGUgaXMgYmVpbmcgaW1wb3J0ZWQgZnJvbS5cbiAqL1xuY29uc3QgTk9ERV9NT0RFID0gZmFsc2U7XG4vKipcbiAqIEEgYm9vbGVhbiB0aGF0IHdpbGwgYmUgYHRydWVgIGluIHNlcnZlciBlbnZpcm9ubWVudHMgbGlrZSBOb2RlLCBhbmQgYGZhbHNlYFxuICogaW4gYnJvd3NlciBlbnZpcm9ubWVudHMuIE5vdGUgdGhhdCB5b3VyIHNlcnZlciBlbnZpcm9ubWVudCBvciB0b29sY2hhaW4gbXVzdFxuICogc3VwcG9ydCB0aGUgYFwibm9kZVwiYCBleHBvcnQgY29uZGl0aW9uIGZvciB0aGlzIHRvIGJlIGB0cnVlYC5cbiAqXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHdoZW4gYXV0aG9yaW5nIGNvbXBvbmVudHMgdG8gY2hhbmdlIGJlaGF2aW9yIGJhc2VkIG9uXG4gKiB3aGV0aGVyIG9yIG5vdCB0aGUgY29tcG9uZW50IGlzIGV4ZWN1dGluZyBpbiBhbiBTU1IgY29udGV4dC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzU2VydmVyID0gTk9ERV9NT0RFO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtc2VydmVyLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIF9hLCBfYiwgX2MsIF9kO1xuY29uc3QgREVWX01PREUgPSB0cnVlO1xuY29uc3QgRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTID0gdHJ1ZTtcbmNvbnN0IEVOQUJMRV9TSEFEWURPTV9OT1BBVENIID0gdHJ1ZTtcbmNvbnN0IE5PREVfTU9ERSA9IGZhbHNlO1xuLy8gVXNlIHdpbmRvdyBmb3IgYnJvd3NlciBidWlsZHMgYmVjYXVzZSBJRTExIGRvZXNuJ3QgaGF2ZSBnbG9iYWxUaGlzLlxuY29uc3QgZ2xvYmFsID0gTk9ERV9NT0RFID8gZ2xvYmFsVGhpcyA6IHdpbmRvdztcbi8qKlxuICogVXNlZnVsIGZvciB2aXN1YWxpemluZyBhbmQgbG9nZ2luZyBpbnNpZ2h0cyBpbnRvIHdoYXQgdGhlIExpdCB0ZW1wbGF0ZSBzeXN0ZW0gaXMgZG9pbmcuXG4gKlxuICogQ29tcGlsZWQgb3V0IG9mIHByb2QgbW9kZSBidWlsZHMuXG4gKi9cbmNvbnN0IGRlYnVnTG9nRXZlbnQgPSBERVZfTU9ERVxuICAgID8gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHNob3VsZEVtaXQgPSBnbG9iYWxcbiAgICAgICAgICAgIC5lbWl0TGl0RGVidWdMb2dFdmVudHM7XG4gICAgICAgIGlmICghc2hvdWxkRW1pdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGdsb2JhbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbGl0LWRlYnVnJywge1xuICAgICAgICAgICAgZGV0YWlsOiBldmVudCxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICA6IHVuZGVmaW5lZDtcbi8vIFVzZWQgZm9yIGNvbm5lY3RpbmcgYmVnaW5SZW5kZXIgYW5kIGVuZFJlbmRlciBldmVudHMgd2hlbiB0aGVyZSBhcmUgbmVzdGVkXG4vLyByZW5kZXJzIHdoZW4gZXJyb3JzIGFyZSB0aHJvd24gcHJldmVudGluZyBhbiBlbmRSZW5kZXIgZXZlbnQgZnJvbSBiZWluZ1xuLy8gY2FsbGVkLlxubGV0IGRlYnVnTG9nUmVuZGVySWQgPSAwO1xubGV0IGlzc3VlV2FybmluZztcbmlmIChERVZfTU9ERSkge1xuICAgIChfYSA9IGdsb2JhbC5saXRJc3N1ZWRXYXJuaW5ncykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKGdsb2JhbC5saXRJc3N1ZWRXYXJuaW5ncyA9IG5ldyBTZXQoKSk7XG4gICAgLy8gSXNzdWUgYSB3YXJuaW5nLCBpZiB3ZSBoYXZlbid0IGFscmVhZHkuXG4gICAgaXNzdWVXYXJuaW5nID0gKGNvZGUsIHdhcm5pbmcpID0+IHtcbiAgICAgICAgd2FybmluZyArPSBjb2RlXG4gICAgICAgICAgICA/IGAgU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvJHtjb2RlfSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICAgICAgICA6ICcnO1xuICAgICAgICBpZiAoIWdsb2JhbC5saXRJc3N1ZWRXYXJuaW5ncy5oYXMod2FybmluZykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbiAgICAgICAgICAgIGdsb2JhbC5saXRJc3N1ZWRXYXJuaW5ncy5hZGQod2FybmluZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlzc3VlV2FybmluZygnZGV2LW1vZGUnLCBgTGl0IGlzIGluIGRldiBtb2RlLiBOb3QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24hYCk7XG59XG5jb25zdCB3cmFwID0gRU5BQkxFX1NIQURZRE9NX05PUEFUQ0ggJiZcbiAgICAoKF9iID0gZ2xvYmFsLlNoYWR5RE9NKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaW5Vc2UpICYmXG4gICAgKChfYyA9IGdsb2JhbC5TaGFkeURPTSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLm5vUGF0Y2gpID09PSB0cnVlXG4gICAgPyBnbG9iYWwuU2hhZHlET00ud3JhcFxuICAgIDogKG5vZGUpID0+IG5vZGU7XG5jb25zdCB0cnVzdGVkVHlwZXMgPSBnbG9iYWwudHJ1c3RlZFR5cGVzO1xuLyoqXG4gKiBPdXIgVHJ1c3RlZFR5cGVQb2xpY3kgZm9yIEhUTUwgd2hpY2ggaXMgZGVjbGFyZWQgdXNpbmcgdGhlIGh0bWwgdGVtcGxhdGVcbiAqIHRhZyBmdW5jdGlvbi5cbiAqXG4gKiBUaGF0IEhUTUwgaXMgYSBkZXZlbG9wZXItYXV0aG9yZWQgY29uc3RhbnQsIGFuZCBpcyBwYXJzZWQgd2l0aCBpbm5lckhUTUxcbiAqIGJlZm9yZSBhbnkgdW50cnVzdGVkIGV4cHJlc3Npb25zIGhhdmUgYmVlbiBtaXhlZCBpbi4gVGhlcmVmb3IgaXQgaXNcbiAqIGNvbnNpZGVyZWQgc2FmZSBieSBjb25zdHJ1Y3Rpb24uXG4gKi9cbmNvbnN0IHBvbGljeSA9IHRydXN0ZWRUeXBlc1xuICAgID8gdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSgnbGl0LWh0bWwnLCB7XG4gICAgICAgIGNyZWF0ZUhUTUw6IChzKSA9PiBzLFxuICAgIH0pXG4gICAgOiB1bmRlZmluZWQ7XG5jb25zdCBpZGVudGl0eUZ1bmN0aW9uID0gKHZhbHVlKSA9PiB2YWx1ZTtcbmNvbnN0IG5vb3BTYW5pdGl6ZXIgPSAoX25vZGUsIF9uYW1lLCBfdHlwZSkgPT4gaWRlbnRpdHlGdW5jdGlvbjtcbi8qKiBTZXRzIHRoZSBnbG9iYWwgc2FuaXRpemVyIGZhY3RvcnkuICovXG5jb25zdCBzZXRTYW5pdGl6ZXIgPSAobmV3U2FuaXRpemVyKSA9PiB7XG4gICAgaWYgKCFFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2FuaXRpemVyRmFjdG9yeUludGVybmFsICE9PSBub29wU2FuaXRpemVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0ZW1wdGVkIHRvIG92ZXJ3cml0ZSBleGlzdGluZyBsaXQtaHRtbCBzZWN1cml0eSBwb2xpY3kuYCArXG4gICAgICAgICAgICBgIHNldFNhbml0aXplRE9NVmFsdWVGYWN0b3J5IHNob3VsZCBiZSBjYWxsZWQgYXQgbW9zdCBvbmNlLmApO1xuICAgIH1cbiAgICBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgPSBuZXdTYW5pdGl6ZXI7XG59O1xuLyoqXG4gKiBPbmx5IHVzZWQgaW4gaW50ZXJuYWwgdGVzdHMsIG5vdCBhIHBhcnQgb2YgdGhlIHB1YmxpYyBBUEkuXG4gKi9cbmNvbnN0IF90ZXN0T25seUNsZWFyU2FuaXRpemVyRmFjdG9yeURvTm90Q2FsbE9yRWxzZSA9ICgpID0+IHtcbiAgICBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgPSBub29wU2FuaXRpemVyO1xufTtcbmNvbnN0IGNyZWF0ZVNhbml0aXplciA9IChub2RlLCBuYW1lLCB0eXBlKSA9PiB7XG4gICAgcmV0dXJuIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbChub2RlLCBuYW1lLCB0eXBlKTtcbn07XG4vLyBBZGRlZCB0byBhbiBhdHRyaWJ1dGUgbmFtZSB0byBtYXJrIHRoZSBhdHRyaWJ1dGUgYXMgYm91bmQgc28gd2UgY2FuIGZpbmRcbi8vIGl0IGVhc2lseS5cbmNvbnN0IGJvdW5kQXR0cmlidXRlU3VmZml4ID0gJyRsaXQkJztcbi8vIFRoaXMgbWFya2VyIGlzIHVzZWQgaW4gbWFueSBzeW50YWN0aWMgcG9zaXRpb25zIGluIEhUTUwsIHNvIGl0IG11c3QgYmVcbi8vIGEgdmFsaWQgZWxlbWVudCBuYW1lIGFuZCBhdHRyaWJ1dGUgbmFtZS4gV2UgZG9uJ3Qgc3VwcG9ydCBkeW5hbWljIG5hbWVzICh5ZXQpXG4vLyBidXQgdGhpcyBhdCBsZWFzdCBlbnN1cmVzIHRoYXQgdGhlIHBhcnNlIHRyZWUgaXMgY2xvc2VyIHRvIHRoZSB0ZW1wbGF0ZVxuLy8gaW50ZW50aW9uLlxuY29uc3QgbWFya2VyID0gYGxpdCQke1N0cmluZyhNYXRoLnJhbmRvbSgpKS5zbGljZSg5KX0kYDtcbi8vIFN0cmluZyB1c2VkIHRvIHRlbGwgaWYgYSBjb21tZW50IGlzIGEgbWFya2VyIGNvbW1lbnRcbmNvbnN0IG1hcmtlck1hdGNoID0gJz8nICsgbWFya2VyO1xuLy8gVGV4dCB1c2VkIHRvIGluc2VydCBhIGNvbW1lbnQgbWFya2VyIG5vZGUuIFdlIHVzZSBwcm9jZXNzaW5nIGluc3RydWN0aW9uXG4vLyBzeW50YXggYmVjYXVzZSBpdCdzIHNsaWdodGx5IHNtYWxsZXIsIGJ1dCBwYXJzZXMgYXMgYSBjb21tZW50IG5vZGUuXG5jb25zdCBub2RlTWFya2VyID0gYDwke21hcmtlck1hdGNofT5gO1xuY29uc3QgZCA9IE5PREVfTU9ERSAmJiBnbG9iYWwuZG9jdW1lbnQgPT09IHVuZGVmaW5lZFxuICAgID8ge1xuICAgICAgICBjcmVhdGVUcmVlV2Fsa2VyKCkge1xuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgIH1cbiAgICA6IGRvY3VtZW50O1xuLy8gQ3JlYXRlcyBhIGR5bmFtaWMgbWFya2VyLiBXZSBuZXZlciBoYXZlIHRvIHNlYXJjaCBmb3IgdGhlc2UgaW4gdGhlIERPTS5cbmNvbnN0IGNyZWF0ZU1hcmtlciA9ICh2ID0gJycpID0+IGQuY3JlYXRlQ29tbWVudCh2KTtcbmNvbnN0IGlzUHJpbWl0aXZlID0gKHZhbHVlKSA9PiB2YWx1ZSA9PT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlICE9ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZSAhPSAnZnVuY3Rpb24nKTtcbmNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuY29uc3QgaXNJdGVyYWJsZSA9ICh2YWx1ZSkgPT4gaXNBcnJheSh2YWx1ZSkgfHxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIHR5cGVvZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0pID09PSAnZnVuY3Rpb24nO1xuY29uc3QgU1BBQ0VfQ0hBUiA9IGBbIFxcdFxcblxcZlxccl1gO1xuY29uc3QgQVRUUl9WQUxVRV9DSEFSID0gYFteIFxcdFxcblxcZlxcclwiJ1xcYDw+PV1gO1xuY29uc3QgTkFNRV9DSEFSID0gYFteXFxcXHNcIic+PS9dYDtcbi8vIFRoZXNlIHJlZ2V4ZXMgcmVwcmVzZW50IHRoZSBmaXZlIHBhcnNpbmcgc3RhdGVzIHRoYXQgd2UgY2FyZSBhYm91dCBpbiB0aGVcbi8vIFRlbXBsYXRlJ3MgSFRNTCBzY2FubmVyLiBUaGV5IG1hdGNoIHRoZSAqZW5kKiBvZiB0aGUgc3RhdGUgdGhleSdyZSBuYW1lZFxuLy8gYWZ0ZXIuXG4vLyBEZXBlbmRpbmcgb24gdGhlIG1hdGNoLCB3ZSB0cmFuc2l0aW9uIHRvIGEgbmV3IHN0YXRlLiBJZiB0aGVyZSdzIG5vIG1hdGNoLFxuLy8gd2Ugc3RheSBpbiB0aGUgc2FtZSBzdGF0ZS5cbi8vIE5vdGUgdGhhdCB0aGUgcmVnZXhlcyBhcmUgc3RhdGVmdWwuIFdlIHV0aWxpemUgbGFzdEluZGV4IGFuZCBzeW5jIGl0XG4vLyBhY3Jvc3MgdGhlIG11bHRpcGxlIHJlZ2V4ZXMgdXNlZC4gSW4gYWRkaXRpb24gdG8gdGhlIGZpdmUgcmVnZXhlcyBiZWxvd1xuLy8gd2UgYWxzbyBkeW5hbWljYWxseSBjcmVhdGUgYSByZWdleCB0byBmaW5kIHRoZSBtYXRjaGluZyBlbmQgdGFncyBmb3IgcmF3XG4vLyB0ZXh0IGVsZW1lbnRzLlxuLyoqXG4gKiBFbmQgb2YgdGV4dCBpczogYDxgIGZvbGxvd2VkIGJ5OlxuICogICAoY29tbWVudCBzdGFydCkgb3IgKHRhZykgb3IgKGR5bmFtaWMgdGFnIGJpbmRpbmcpXG4gKi9cbmNvbnN0IHRleHRFbmRSZWdleCA9IC88KD86KCEtLXxcXC9bXmEtekEtWl0pfChcXC8/W2EtekEtWl1bXj5cXHNdKil8KFxcLz8kKSkvZztcbmNvbnN0IENPTU1FTlRfU1RBUlQgPSAxO1xuY29uc3QgVEFHX05BTUUgPSAyO1xuY29uc3QgRFlOQU1JQ19UQUdfTkFNRSA9IDM7XG5jb25zdCBjb21tZW50RW5kUmVnZXggPSAvLS0+L2c7XG4vKipcbiAqIENvbW1lbnRzIG5vdCBzdGFydGVkIHdpdGggPCEtLSwgbGlrZSA8L3ssIGNhbiBiZSBlbmRlZCBieSBhIHNpbmdsZSBgPmBcbiAqL1xuY29uc3QgY29tbWVudDJFbmRSZWdleCA9IC8+L2c7XG4vKipcbiAqIFRoZSB0YWdFbmQgcmVnZXggbWF0Y2hlcyB0aGUgZW5kIG9mIHRoZSBcImluc2lkZSBhbiBvcGVuaW5nXCIgdGFnIHN5bnRheFxuICogcG9zaXRpb24uIEl0IGVpdGhlciBtYXRjaGVzIGEgYD5gLCBhbiBhdHRyaWJ1dGUtbGlrZSBzZXF1ZW5jZSwgb3IgdGhlIGVuZFxuICogb2YgdGhlIHN0cmluZyBhZnRlciBhIHNwYWNlIChhdHRyaWJ1dGUtbmFtZSBwb3NpdGlvbiBlbmRpbmcpLlxuICpcbiAqIFNlZSBhdHRyaWJ1dGVzIGluIHRoZSBIVE1MIHNwZWM6XG4gKiBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjZWxlbWVudHMtYXR0cmlidXRlc1xuICpcbiAqIFwiIFxcdFxcblxcZlxcclwiIGFyZSBIVE1MIHNwYWNlIGNoYXJhY3RlcnM6XG4gKiBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jYXNjaWktd2hpdGVzcGFjZVxuICpcbiAqIFNvIGFuIGF0dHJpYnV0ZSBpczpcbiAqICAqIFRoZSBuYW1lOiBhbnkgY2hhcmFjdGVyIGV4Y2VwdCBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLCAoXCIpLCAoJyksIFwiPlwiLFxuICogICAgXCI9XCIsIG9yIFwiL1wiLiBOb3RlOiB0aGlzIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBIVE1MIHNwZWMgd2hpY2ggYWxzbyBleGNsdWRlcyBjb250cm9sIGNoYXJhY3RlcnMuXG4gKiAgKiBGb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgc3BhY2UgY2hhcmFjdGVyc1xuICogICogRm9sbG93ZWQgYnkgXCI9XCJcbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieTpcbiAqICAgICogQW55IGNoYXJhY3RlciBleGNlcHQgc3BhY2UsICgnKSwgKFwiKSwgXCI8XCIsIFwiPlwiLCBcIj1cIiwgKGApLCBvclxuICogICAgKiAoXCIpIHRoZW4gYW55IG5vbi0oXCIpLCBvclxuICogICAgKiAoJykgdGhlbiBhbnkgbm9uLSgnKVxuICovXG5jb25zdCB0YWdFbmRSZWdleCA9IG5ldyBSZWdFeHAoYD58JHtTUEFDRV9DSEFSfSg/Oigke05BTUVfQ0hBUn0rKSgke1NQQUNFX0NIQVJ9Kj0ke1NQQUNFX0NIQVJ9Kig/OiR7QVRUUl9WQUxVRV9DSEFSfXwoXCJ8Jyl8KSl8JClgLCAnZycpO1xuY29uc3QgRU5USVJFX01BVENIID0gMDtcbmNvbnN0IEFUVFJJQlVURV9OQU1FID0gMTtcbmNvbnN0IFNQQUNFU19BTkRfRVFVQUxTID0gMjtcbmNvbnN0IFFVT1RFX0NIQVIgPSAzO1xuY29uc3Qgc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXggPSAvJy9nO1xuY29uc3QgZG91YmxlUXVvdGVBdHRyRW5kUmVnZXggPSAvXCIvZztcbi8qKlxuICogTWF0Y2hlcyB0aGUgcmF3IHRleHQgZWxlbWVudHMuXG4gKlxuICogQ29tbWVudHMgYXJlIG5vdCBwYXJzZWQgd2l0aGluIHJhdyB0ZXh0IGVsZW1lbnRzLCBzbyB3ZSBuZWVkIHRvIHNlYXJjaCB0aGVpclxuICogdGV4dCBjb250ZW50IGZvciBtYXJrZXIgc3RyaW5ncy5cbiAqL1xuY29uc3QgcmF3VGV4dEVsZW1lbnQgPSAvXig/OnNjcmlwdHxzdHlsZXx0ZXh0YXJlYXx0aXRsZSkkL2k7XG4vKiogVGVtcGxhdGVSZXN1bHQgdHlwZXMgKi9cbmNvbnN0IEhUTUxfUkVTVUxUID0gMTtcbmNvbnN0IFNWR19SRVNVTFQgPSAyO1xuLy8gVGVtcGxhdGVQYXJ0IHR5cGVzXG4vLyBJTVBPUlRBTlQ6IHRoZXNlIG11c3QgbWF0Y2ggdGhlIHZhbHVlcyBpbiBQYXJ0VHlwZVxuY29uc3QgQVRUUklCVVRFX1BBUlQgPSAxO1xuY29uc3QgQ0hJTERfUEFSVCA9IDI7XG5jb25zdCBQUk9QRVJUWV9QQVJUID0gMztcbmNvbnN0IEJPT0xFQU5fQVRUUklCVVRFX1BBUlQgPSA0O1xuY29uc3QgRVZFTlRfUEFSVCA9IDU7XG5jb25zdCBFTEVNRU5UX1BBUlQgPSA2O1xuY29uc3QgQ09NTUVOVF9QQVJUID0gNztcbi8qKlxuICogR2VuZXJhdGVzIGEgdGVtcGxhdGUgbGl0ZXJhbCB0YWcgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgVGVtcGxhdGVSZXN1bHQgd2l0aFxuICogdGhlIGdpdmVuIHJlc3VsdCB0eXBlLlxuICovXG5jb25zdCB0YWcgPSAodHlwZSkgPT4gKHN0cmluZ3MsIC4uLnZhbHVlcykgPT4ge1xuICAgIC8vIFdhcm4gYWdhaW5zdCB0ZW1wbGF0ZXMgb2N0YWwgZXNjYXBlIHNlcXVlbmNlc1xuICAgIC8vIFdlIGRvIHRoaXMgaGVyZSByYXRoZXIgdGhhbiBpbiByZW5kZXIgc28gdGhhdCB0aGUgd2FybmluZyBpcyBjbG9zZXIgdG8gdGhlXG4gICAgLy8gdGVtcGxhdGUgZGVmaW5pdGlvbi5cbiAgICBpZiAoREVWX01PREUgJiYgc3RyaW5ncy5zb21lKChzKSA9PiBzID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignU29tZSB0ZW1wbGF0ZSBzdHJpbmdzIGFyZSB1bmRlZmluZWQuXFxuJyArXG4gICAgICAgICAgICAnVGhpcyBpcyBwcm9iYWJseSBjYXVzZWQgYnkgaWxsZWdhbCBvY3RhbCBlc2NhcGUgc2VxdWVuY2VzLicpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICBbJ18kbGl0VHlwZSQnXTogdHlwZSxcbiAgICAgICAgc3RyaW5ncyxcbiAgICAgICAgdmFsdWVzLFxuICAgIH07XG59O1xuLyoqXG4gKiBJbnRlcnByZXRzIGEgdGVtcGxhdGUgbGl0ZXJhbCBhcyBhbiBIVE1MIHRlbXBsYXRlIHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgaGVhZGVyID0gKHRpdGxlOiBzdHJpbmcpID0+IGh0bWxgPGgxPiR7dGl0bGV9PC9oMT5gO1xuICogYGBgXG4gKlxuICogVGhlIGBodG1sYCB0YWcgcmV0dXJucyBhIGRlc2NyaXB0aW9uIG9mIHRoZSBET00gdG8gcmVuZGVyIGFzIGEgdmFsdWUuIEl0IGlzXG4gKiBsYXp5LCBtZWFuaW5nIG5vIHdvcmsgaXMgZG9uZSB1bnRpbCB0aGUgdGVtcGxhdGUgaXMgcmVuZGVyZWQuIFdoZW4gcmVuZGVyaW5nLFxuICogaWYgYSB0ZW1wbGF0ZSBjb21lcyBmcm9tIHRoZSBzYW1lIGV4cHJlc3Npb24gYXMgYSBwcmV2aW91c2x5IHJlbmRlcmVkIHJlc3VsdCxcbiAqIGl0J3MgZWZmaWNpZW50bHkgdXBkYXRlZCBpbnN0ZWFkIG9mIHJlcGxhY2VkLlxuICovXG5leHBvcnQgY29uc3QgaHRtbCA9IHRhZyhIVE1MX1JFU1VMVCk7XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIFNWRyBmcmFnbWVudCB0aGF0IGNhbiBlZmZpY2llbnRseVxuICogcmVuZGVyIHRvIGFuZCB1cGRhdGUgYSBjb250YWluZXIuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IHJlY3QgPSBzdmdgPHJlY3Qgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCI+PC9yZWN0PmA7XG4gKlxuICogY29uc3QgbXlJbWFnZSA9IGh0bWxgXG4gKiAgIDxzdmcgdmlld0JveD1cIjAgMCAxMCAxMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAqICAgICAke3JlY3R9XG4gKiAgIDwvc3ZnPmA7XG4gKiBgYGBcbiAqXG4gKiBUaGUgYHN2Z2AgKnRhZyBmdW5jdGlvbiogc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgU1ZHIGZyYWdtZW50cywgb3IgZWxlbWVudHNcbiAqIHRoYXQgd291bGQgYmUgY29udGFpbmVkICoqaW5zaWRlKiogYW4gYDxzdmc+YCBIVE1MIGVsZW1lbnQuIEEgY29tbW9uIGVycm9yIGlzXG4gKiBwbGFjaW5nIGFuIGA8c3ZnPmAgKmVsZW1lbnQqIGluIGEgdGVtcGxhdGUgdGFnZ2VkIHdpdGggdGhlIGBzdmdgIHRhZ1xuICogZnVuY3Rpb24uIFRoZSBgPHN2Zz5gIGVsZW1lbnQgaXMgYW4gSFRNTCBlbGVtZW50IGFuZCBzaG91bGQgYmUgdXNlZCB3aXRoaW4gYVxuICogdGVtcGxhdGUgdGFnZ2VkIHdpdGggdGhlIHtAbGlua2NvZGUgaHRtbH0gdGFnIGZ1bmN0aW9uLlxuICpcbiAqIEluIExpdEVsZW1lbnQgdXNhZ2UsIGl0J3MgaW52YWxpZCB0byByZXR1cm4gYW4gU1ZHIGZyYWdtZW50IGZyb20gdGhlXG4gKiBgcmVuZGVyKClgIG1ldGhvZCwgYXMgdGhlIFNWRyBmcmFnbWVudCB3aWxsIGJlIGNvbnRhaW5lZCB3aXRoaW4gdGhlIGVsZW1lbnQnc1xuICogc2hhZG93IHJvb3QgYW5kIHRodXMgY2Fubm90IGJlIHVzZWQgd2l0aGluIGFuIGA8c3ZnPmAgSFRNTCBlbGVtZW50LlxuICovXG5leHBvcnQgY29uc3Qgc3ZnID0gdGFnKFNWR19SRVNVTFQpO1xuLyoqXG4gKiBBIHNlbnRpbmVsIHZhbHVlIHRoYXQgc2lnbmFscyB0aGF0IGEgdmFsdWUgd2FzIGhhbmRsZWQgYnkgYSBkaXJlY3RpdmUgYW5kXG4gKiBzaG91bGQgbm90IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vQ2hhbmdlID0gU3ltYm9sLmZvcignbGl0LW5vQ2hhbmdlJyk7XG4vKipcbiAqIEEgc2VudGluZWwgdmFsdWUgdGhhdCBzaWduYWxzIGEgQ2hpbGRQYXJ0IHRvIGZ1bGx5IGNsZWFyIGl0cyBjb250ZW50LlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBidXR0b24gPSBodG1sYCR7XG4gKiAgdXNlci5pc0FkbWluXG4gKiAgICA/IGh0bWxgPGJ1dHRvbj5ERUxFVEU8L2J1dHRvbj5gXG4gKiAgICA6IG5vdGhpbmdcbiAqIH1gO1xuICogYGBgXG4gKlxuICogUHJlZmVyIHVzaW5nIGBub3RoaW5nYCBvdmVyIG90aGVyIGZhbHN5IHZhbHVlcyBhcyBpdCBwcm92aWRlcyBhIGNvbnNpc3RlbnRcbiAqIGJlaGF2aW9yIGJldHdlZW4gdmFyaW91cyBleHByZXNzaW9uIGJpbmRpbmcgY29udGV4dHMuXG4gKlxuICogSW4gY2hpbGQgZXhwcmVzc2lvbnMsIGB1bmRlZmluZWRgLCBgbnVsbGAsIGAnJ2AsIGFuZCBgbm90aGluZ2AgYWxsIGJlaGF2ZSB0aGVcbiAqIHNhbWUgYW5kIHJlbmRlciBubyBub2Rlcy4gSW4gYXR0cmlidXRlIGV4cHJlc3Npb25zLCBgbm90aGluZ2AgX3JlbW92ZXNfIHRoZVxuICogYXR0cmlidXRlLCB3aGlsZSBgdW5kZWZpbmVkYCBhbmQgYG51bGxgIHdpbGwgcmVuZGVyIGFuIGVtcHR5IHN0cmluZy4gSW5cbiAqIHByb3BlcnR5IGV4cHJlc3Npb25zIGBub3RoaW5nYCBiZWNvbWVzIGB1bmRlZmluZWRgLlxuICovXG5leHBvcnQgY29uc3Qgbm90aGluZyA9IFN5bWJvbC5mb3IoJ2xpdC1ub3RoaW5nJyk7XG4vKipcbiAqIFRoZSBjYWNoZSBvZiBwcmVwYXJlZCB0ZW1wbGF0ZXMsIGtleWVkIGJ5IHRoZSB0YWdnZWQgVGVtcGxhdGVTdHJpbmdzQXJyYXlcbiAqIGFuZCBfbm90XyBhY2NvdW50aW5nIGZvciB0aGUgc3BlY2lmaWMgdGVtcGxhdGUgdGFnIHVzZWQuIFRoaXMgbWVhbnMgdGhhdFxuICogdGVtcGxhdGUgdGFncyBjYW5ub3QgYmUgZHluYW1pYyAtIHRoZSBtdXN0IHN0YXRpY2FsbHkgYmUgb25lIG9mIGh0bWwsIHN2ZyxcbiAqIG9yIGF0dHIuIFRoaXMgcmVzdHJpY3Rpb24gc2ltcGxpZmllcyB0aGUgY2FjaGUgbG9va3VwLCB3aGljaCBpcyBvbiB0aGUgaG90XG4gKiBwYXRoIGZvciByZW5kZXJpbmcuXG4gKi9cbmNvbnN0IHRlbXBsYXRlQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuY29uc3Qgd2Fsa2VyID0gZC5jcmVhdGVUcmVlV2Fsa2VyKGQsIDEyOSAvKiBOb2RlRmlsdGVyLlNIT1dfe0VMRU1FTlR8Q09NTUVOVH0gKi8sIG51bGwsIGZhbHNlKTtcbmxldCBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgPSBub29wU2FuaXRpemVyO1xuLyoqXG4gKiBSZXR1cm5zIGFuIEhUTUwgc3RyaW5nIGZvciB0aGUgZ2l2ZW4gVGVtcGxhdGVTdHJpbmdzQXJyYXkgYW5kIHJlc3VsdCB0eXBlXG4gKiAoSFRNTCBvciBTVkcpLCBhbG9uZyB3aXRoIHRoZSBjYXNlLXNlbnNpdGl2ZSBib3VuZCBhdHRyaWJ1dGUgbmFtZXMgaW5cbiAqIHRlbXBsYXRlIG9yZGVyLiBUaGUgSFRNTCBjb250YWlucyBjb21tZW50IG1hcmtlcnMgZGVub3RpbmcgdGhlIGBDaGlsZFBhcnRgc1xuICogYW5kIHN1ZmZpeGVzIG9uIGJvdW5kIGF0dHJpYnV0ZXMgZGVub3RpbmcgdGhlIGBBdHRyaWJ1dGVQYXJ0c2AuXG4gKlxuICogQHBhcmFtIHN0cmluZ3MgdGVtcGxhdGUgc3RyaW5ncyBhcnJheVxuICogQHBhcmFtIHR5cGUgSFRNTCBvciBTVkdcbiAqIEByZXR1cm4gQXJyYXkgY29udGFpbmluZyBgW2h0bWwsIGF0dHJOYW1lc11gIChhcnJheSByZXR1cm5lZCBmb3IgdGVyc2VuZXNzLFxuICogICAgIHRvIGF2b2lkIG9iamVjdCBmaWVsZHMgc2luY2UgdGhpcyBjb2RlIGlzIHNoYXJlZCB3aXRoIG5vbi1taW5pZmllZCBTU1JcbiAqICAgICBjb2RlKVxuICovXG5jb25zdCBnZXRUZW1wbGF0ZUh0bWwgPSAoc3RyaW5ncywgdHlwZSkgPT4ge1xuICAgIC8vIEluc2VydCBtYWtlcnMgaW50byB0aGUgdGVtcGxhdGUgSFRNTCB0byByZXByZXNlbnQgdGhlIHBvc2l0aW9uIG9mXG4gICAgLy8gYmluZGluZ3MuIFRoZSBmb2xsb3dpbmcgY29kZSBzY2FucyB0aGUgdGVtcGxhdGUgc3RyaW5ncyB0byBkZXRlcm1pbmUgdGhlXG4gICAgLy8gc3ludGFjdGljIHBvc2l0aW9uIG9mIHRoZSBiaW5kaW5ncy4gVGhleSBjYW4gYmUgaW4gdGV4dCBwb3NpdGlvbiwgd2hlcmVcbiAgICAvLyB3ZSBpbnNlcnQgYW4gSFRNTCBjb21tZW50LCBhdHRyaWJ1dGUgdmFsdWUgcG9zaXRpb24sIHdoZXJlIHdlIGluc2VydCBhXG4gICAgLy8gc2VudGluZWwgc3RyaW5nIGFuZCByZS13cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUsIG9yIGluc2lkZSBhIHRhZyB3aGVyZVxuICAgIC8vIHdlIGluc2VydCB0aGUgc2VudGluZWwgc3RyaW5nLlxuICAgIGNvbnN0IGwgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgLy8gU3RvcmVzIHRoZSBjYXNlLXNlbnNpdGl2ZSBib3VuZCBhdHRyaWJ1dGUgbmFtZXMgaW4gdGhlIG9yZGVyIG9mIHRoZWlyXG4gICAgLy8gcGFydHMuIEVsZW1lbnRQYXJ0cyBhcmUgYWxzbyByZWZsZWN0ZWQgaW4gdGhpcyBhcnJheSBhcyB1bmRlZmluZWRcbiAgICAvLyByYXRoZXIgdGhhbiBhIHN0cmluZywgdG8gZGlzYW1iaWd1YXRlIGZyb20gYXR0cmlidXRlIGJpbmRpbmdzLlxuICAgIGNvbnN0IGF0dHJOYW1lcyA9IFtdO1xuICAgIGxldCBodG1sID0gdHlwZSA9PT0gU1ZHX1JFU1VMVCA/ICc8c3ZnPicgOiAnJztcbiAgICAvLyBXaGVuIHdlJ3JlIGluc2lkZSBhIHJhdyB0ZXh0IHRhZyAobm90IGl0J3MgdGV4dCBjb250ZW50KSwgdGhlIHJlZ2V4XG4gICAgLy8gd2lsbCBzdGlsbCBiZSB0YWdSZWdleCBzbyB3ZSBjYW4gZmluZCBhdHRyaWJ1dGVzLCBidXQgd2lsbCBzd2l0Y2ggdG9cbiAgICAvLyB0aGlzIHJlZ2V4IHdoZW4gdGhlIHRhZyBlbmRzLlxuICAgIGxldCByYXdUZXh0RW5kUmVnZXg7XG4gICAgLy8gVGhlIGN1cnJlbnQgcGFyc2luZyBzdGF0ZSwgcmVwcmVzZW50ZWQgYXMgYSByZWZlcmVuY2UgdG8gb25lIG9mIHRoZVxuICAgIC8vIHJlZ2V4ZXNcbiAgICBsZXQgcmVnZXggPSB0ZXh0RW5kUmVnZXg7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgcyA9IHN0cmluZ3NbaV07XG4gICAgICAgIC8vIFRoZSBpbmRleCBvZiB0aGUgZW5kIG9mIHRoZSBsYXN0IGF0dHJpYnV0ZSBuYW1lLiBXaGVuIHRoaXMgaXNcbiAgICAgICAgLy8gcG9zaXRpdmUgYXQgZW5kIG9mIGEgc3RyaW5nLCBpdCBtZWFucyB3ZSdyZSBpbiBhbiBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgICAgLy8gcG9zaXRpb24gYW5kIG5lZWQgdG8gcmV3cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUuXG4gICAgICAgIC8vIFdlIGFsc28gdXNlIGEgc3BlY2lhbCB2YWx1ZSBvZiAtMiB0byBpbmRpY2F0ZSB0aGF0IHdlIGVuY291bnRlcmVkXG4gICAgICAgIC8vIHRoZSBlbmQgb2YgYSBzdHJpbmcgaW4gYXR0cmlidXRlIG5hbWUgcG9zaXRpb24uXG4gICAgICAgIGxldCBhdHRyTmFtZUVuZEluZGV4ID0gLTE7XG4gICAgICAgIGxldCBhdHRyTmFtZTtcbiAgICAgICAgbGV0IGxhc3RJbmRleCA9IDA7XG4gICAgICAgIGxldCBtYXRjaDtcbiAgICAgICAgLy8gVGhlIGNvbmRpdGlvbnMgaW4gdGhpcyBsb29wIGhhbmRsZSB0aGUgY3VycmVudCBwYXJzZSBzdGF0ZSwgYW5kIHRoZVxuICAgICAgICAvLyBhc3NpZ25tZW50cyB0byB0aGUgYHJlZ2V4YCB2YXJpYWJsZSBhcmUgdGhlIHN0YXRlIHRyYW5zaXRpb25zLlxuICAgICAgICB3aGlsZSAobGFzdEluZGV4IDwgcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBzdGFydCBzZWFyY2hpbmcgZnJvbSB3aGVyZSB3ZSBwcmV2aW91c2x5IGxlZnQgb2ZmXG4gICAgICAgICAgICByZWdleC5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICBtYXRjaCA9IHJlZ2V4LmV4ZWMocyk7XG4gICAgICAgICAgICBpZiAobWF0Y2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhc3RJbmRleCA9IHJlZ2V4Lmxhc3RJbmRleDtcbiAgICAgICAgICAgIGlmIChyZWdleCA9PT0gdGV4dEVuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoW0NPTU1FTlRfU1RBUlRdID09PSAnIS0tJykge1xuICAgICAgICAgICAgICAgICAgICByZWdleCA9IGNvbW1lbnRFbmRSZWdleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hbQ09NTUVOVF9TVEFSVF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBzdGFydGVkIGEgd2VpcmQgY29tbWVudCwgbGlrZSA8L3tcbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPSBjb21tZW50MkVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtUQUdfTkFNRV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmF3VGV4dEVsZW1lbnQudGVzdChtYXRjaFtUQUdfTkFNRV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWNvcmQgaWYgd2UgZW5jb3VudGVyIGEgcmF3LXRleHQgZWxlbWVudC4gV2UnbGwgc3dpdGNoIHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHJlZ2V4IGF0IHRoZSBlbmQgb2YgdGhlIHRhZy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd1RleHRFbmRSZWdleCA9IG5ldyBSZWdFeHAoYDwvJHttYXRjaFtUQUdfTkFNRV19YCwgJ2cnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtEWU5BTUlDX1RBR19OQU1FXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCaW5kaW5ncyBpbiB0YWcgbmFtZXMgYXJlIG5vdCBzdXBwb3J0ZWQuIFBsZWFzZSB1c2Ugc3RhdGljIHRlbXBsYXRlcyBpbnN0ZWFkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU2VlIGh0dHBzOi8vbGl0LmRldi9kb2NzL3RlbXBsYXRlcy9leHByZXNzaW9ucy8jc3RhdGljLWV4cHJlc3Npb25zJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPSB0YWdFbmRSZWdleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZWdleCA9PT0gdGFnRW5kUmVnZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hbRU5USVJFX01BVENIXSA9PT0gJz4nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVuZCBvZiBhIHRhZy4gSWYgd2UgaGFkIHN0YXJ0ZWQgYSByYXctdGV4dCBlbGVtZW50LCB1c2UgdGhhdFxuICAgICAgICAgICAgICAgICAgICAvLyByZWdleFxuICAgICAgICAgICAgICAgICAgICByZWdleCA9IHJhd1RleHRFbmRSZWdleCAhPT0gbnVsbCAmJiByYXdUZXh0RW5kUmVnZXggIT09IHZvaWQgMCA/IHJhd1RleHRFbmRSZWdleCA6IHRleHRFbmRSZWdleDtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgbWF5IGJlIGVuZGluZyBhbiB1bnF1b3RlZCBhdHRyaWJ1dGUgdmFsdWUsIHNvIG1ha2Ugc3VyZSB3ZVxuICAgICAgICAgICAgICAgICAgICAvLyBjbGVhciBhbnkgcGVuZGluZyBhdHRyTmFtZUVuZEluZGV4XG4gICAgICAgICAgICAgICAgICAgIGF0dHJOYW1lRW5kSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWF0Y2hbQVRUUklCVVRFX05BTUVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXR0cmlidXRlIG5hbWUgcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWVFbmRJbmRleCA9IC0yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWVFbmRJbmRleCA9IHJlZ2V4Lmxhc3RJbmRleCAtIG1hdGNoW1NQQUNFU19BTkRfRVFVQUxTXS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJOYW1lID0gbWF0Y2hbQVRUUklCVVRFX05BTUVdO1xuICAgICAgICAgICAgICAgICAgICByZWdleCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFtRVU9URV9DSEFSXSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0YWdFbmRSZWdleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbWF0Y2hbUVVPVEVfQ0hBUl0gPT09ICdcIidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBkb3VibGVRdW90ZUF0dHJFbmRSZWdleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2V4ID09PSBkb3VibGVRdW90ZUF0dHJFbmRSZWdleCB8fFxuICAgICAgICAgICAgICAgIHJlZ2V4ID09PSBzaW5nbGVRdW90ZUF0dHJFbmRSZWdleCkge1xuICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZWdleCA9PT0gY29tbWVudEVuZFJlZ2V4IHx8IHJlZ2V4ID09PSBjb21tZW50MkVuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgcmVnZXggPSB0ZXh0RW5kUmVnZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBOb3Qgb25lIG9mIHRoZSBmaXZlIHN0YXRlIHJlZ2V4ZXMsIHNvIGl0IG11c3QgYmUgdGhlIGR5bmFtaWNhbGx5XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlZCByYXcgdGV4dCByZWdleCBhbmQgd2UncmUgYXQgdGhlIGNsb3NlIG9mIHRoYXQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIHJhd1RleHRFbmRSZWdleCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSBhdHRyTmFtZUVuZEluZGV4LCB3aGljaCBpbmRpY2F0ZXMgdGhhdCB3ZSBzaG91bGRcbiAgICAgICAgICAgIC8vIHJld3JpdGUgdGhlIGF0dHJpYnV0ZSBuYW1lLCBhc3NlcnQgdGhhdCB3ZSdyZSBpbiBhIHZhbGlkIGF0dHJpYnV0ZVxuICAgICAgICAgICAgLy8gcG9zaXRpb24gLSBlaXRoZXIgaW4gYSB0YWcsIG9yIGEgcXVvdGVkIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGF0dHJOYW1lRW5kSW5kZXggPT09IC0xIHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IHRhZ0VuZFJlZ2V4IHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4IHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4LCAndW5leHBlY3RlZCBwYXJzZSBzdGF0ZSBCJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgaGF2ZSBmb3VyIGNhc2VzOlxuICAgICAgICAvLyAgMS4gV2UncmUgaW4gdGV4dCBwb3NpdGlvbiwgYW5kIG5vdCBpbiBhIHJhdyB0ZXh0IGVsZW1lbnRcbiAgICAgICAgLy8gICAgIChyZWdleCA9PT0gdGV4dEVuZFJlZ2V4KTogaW5zZXJ0IGEgY29tbWVudCBtYXJrZXIuXG4gICAgICAgIC8vICAyLiBXZSBoYXZlIGEgbm9uLW5lZ2F0aXZlIGF0dHJOYW1lRW5kSW5kZXggd2hpY2ggbWVhbnMgd2UgbmVlZCB0b1xuICAgICAgICAvLyAgICAgcmV3cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUgdG8gYWRkIGEgYm91bmQgYXR0cmlidXRlIHN1ZmZpeC5cbiAgICAgICAgLy8gIDMuIFdlJ3JlIGF0IHRoZSBub24tZmlyc3QgYmluZGluZyBpbiBhIG11bHRpLWJpbmRpbmcgYXR0cmlidXRlLCB1c2UgYVxuICAgICAgICAvLyAgICAgcGxhaW4gbWFya2VyLlxuICAgICAgICAvLyAgNC4gV2UncmUgc29tZXdoZXJlIGVsc2UgaW5zaWRlIHRoZSB0YWcuIElmIHdlJ3JlIGluIGF0dHJpYnV0ZSBuYW1lXG4gICAgICAgIC8vICAgICBwb3NpdGlvbiAoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTIpLCBhZGQgYSBzZXF1ZW50aWFsIHN1ZmZpeCB0b1xuICAgICAgICAvLyAgICAgZ2VuZXJhdGUgYSB1bmlxdWUgYXR0cmlidXRlIG5hbWUuXG4gICAgICAgIC8vIERldGVjdCBhIGJpbmRpbmcgbmV4dCB0byBzZWxmLWNsb3NpbmcgdGFnIGVuZCBhbmQgaW5zZXJ0IGEgc3BhY2UgdG9cbiAgICAgICAgLy8gc2VwYXJhdGUgdGhlIG1hcmtlciBmcm9tIHRoZSB0YWcgZW5kOlxuICAgICAgICBjb25zdCBlbmQgPSByZWdleCA9PT0gdGFnRW5kUmVnZXggJiYgc3RyaW5nc1tpICsgMV0uc3RhcnRzV2l0aCgnLz4nKSA/ICcgJyA6ICcnO1xuICAgICAgICBodG1sICs9XG4gICAgICAgICAgICByZWdleCA9PT0gdGV4dEVuZFJlZ2V4XG4gICAgICAgICAgICAgICAgPyBzICsgbm9kZU1hcmtlclxuICAgICAgICAgICAgICAgIDogYXR0ck5hbWVFbmRJbmRleCA+PSAwXG4gICAgICAgICAgICAgICAgICAgID8gKGF0dHJOYW1lcy5wdXNoKGF0dHJOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpY2UoMCwgYXR0ck5hbWVFbmRJbmRleCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdW5kQXR0cmlidXRlU3VmZml4ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLnNsaWNlKGF0dHJOYW1lRW5kSW5kZXgpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kXG4gICAgICAgICAgICAgICAgICAgIDogcyArXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGF0dHJOYW1lRW5kSW5kZXggPT09IC0yID8gKGF0dHJOYW1lcy5wdXNoKHVuZGVmaW5lZCksIGkpIDogZW5kKTtcbiAgICB9XG4gICAgY29uc3QgaHRtbFJlc3VsdCA9IGh0bWwgKyAoc3RyaW5nc1tsXSB8fCAnPD8+JykgKyAodHlwZSA9PT0gU1ZHX1JFU1VMVCA/ICc8L3N2Zz4nIDogJycpO1xuICAgIC8vIEEgc2VjdXJpdHkgY2hlY2sgdG8gcHJldmVudCBzcG9vZmluZyBvZiBMaXQgdGVtcGxhdGUgcmVzdWx0cy5cbiAgICAvLyBJbiB0aGUgZnV0dXJlLCB3ZSBtYXkgYmUgYWJsZSB0byByZXBsYWNlIHRoaXMgd2l0aCBBcnJheS5pc1RlbXBsYXRlT2JqZWN0LFxuICAgIC8vIHRob3VnaCB3ZSBtaWdodCBuZWVkIHRvIG1ha2UgdGhhdCBjaGVjayBpbnNpZGUgb2YgdGhlIGh0bWwgYW5kIHN2Z1xuICAgIC8vIGZ1bmN0aW9ucywgYmVjYXVzZSBwcmVjb21waWxlZCB0ZW1wbGF0ZXMgZG9uJ3QgY29tZSBpbiBhc1xuICAgIC8vIFRlbXBsYXRlU3RyaW5nQXJyYXkgb2JqZWN0cy5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc3RyaW5ncykgfHwgIXN0cmluZ3MuaGFzT3duUHJvcGVydHkoJ3JhdycpKSB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gJ2ludmFsaWQgdGVtcGxhdGUgc3RyaW5ncyBhcnJheSc7XG4gICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgbWVzc2FnZSA9IGBcbiAgICAgICAgICBJbnRlcm5hbCBFcnJvcjogZXhwZWN0ZWQgdGVtcGxhdGUgc3RyaW5ncyB0byBiZSBhbiBhcnJheVxuICAgICAgICAgIHdpdGggYSAncmF3JyBmaWVsZC4gRmFraW5nIGEgdGVtcGxhdGUgc3RyaW5ncyBhcnJheSBieVxuICAgICAgICAgIGNhbGxpbmcgaHRtbCBvciBzdmcgbGlrZSBhbiBvcmRpbmFyeSBmdW5jdGlvbiBpcyBlZmZlY3RpdmVseVxuICAgICAgICAgIHRoZSBzYW1lIGFzIGNhbGxpbmcgdW5zYWZlSHRtbCBhbmQgY2FuIGxlYWQgdG8gbWFqb3Igc2VjdXJpdHlcbiAgICAgICAgICBpc3N1ZXMsIGUuZy4gb3BlbmluZyB5b3VyIGNvZGUgdXAgdG8gWFNTIGF0dGFja3MuXG5cbiAgICAgICAgICBJZiB5b3UncmUgdXNpbmcgdGhlIGh0bWwgb3Igc3ZnIHRhZ2dlZCB0ZW1wbGF0ZSBmdW5jdGlvbnMgbm9ybWFsbHlcbiAgICAgICAgICBhbmQgYW5kIHN0aWxsIHNlZWluZyB0aGlzIGVycm9yLCBwbGVhc2UgZmlsZSBhIGJ1ZyBhdFxuICAgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy9uZXc/dGVtcGxhdGU9YnVnX3JlcG9ydC5tZFxuICAgICAgICAgIGFuZCBpbmNsdWRlIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgYnVpbGQgdG9vbGluZywgaWYgYW55LlxuICAgICAgICBgXG4gICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXG4gKi9nLCAnXFxuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICAvLyBSZXR1cm5lZCBhcyBhbiBhcnJheSBmb3IgdGVyc2VuZXNzXG4gICAgcmV0dXJuIFtcbiAgICAgICAgcG9saWN5ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gcG9saWN5LmNyZWF0ZUhUTUwoaHRtbFJlc3VsdClcbiAgICAgICAgICAgIDogaHRtbFJlc3VsdCxcbiAgICAgICAgYXR0ck5hbWVzLFxuICAgIF07XG59O1xuY2xhc3MgVGVtcGxhdGUge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgeyBzdHJpbmdzLCBbJ18kbGl0VHlwZSQnXTogdHlwZSB9LCBvcHRpb25zKSB7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5wYXJ0cyA9IFtdO1xuICAgICAgICBsZXQgbm9kZTtcbiAgICAgICAgbGV0IG5vZGVJbmRleCA9IDA7XG4gICAgICAgIGxldCBhdHRyTmFtZUluZGV4ID0gMDtcbiAgICAgICAgY29uc3QgcGFydENvdW50ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBwYXJ0cyA9IHRoaXMucGFydHM7XG4gICAgICAgIC8vIENyZWF0ZSB0ZW1wbGF0ZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IFtodG1sLCBhdHRyTmFtZXNdID0gZ2V0VGVtcGxhdGVIdG1sKHN0cmluZ3MsIHR5cGUpO1xuICAgICAgICB0aGlzLmVsID0gVGVtcGxhdGUuY3JlYXRlRWxlbWVudChodG1sLCBvcHRpb25zKTtcbiAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gdGhpcy5lbC5jb250ZW50O1xuICAgICAgICAvLyBSZXBhcmVudCBTVkcgbm9kZXMgaW50byB0ZW1wbGF0ZSByb290XG4gICAgICAgIGlmICh0eXBlID09PSBTVkdfUkVTVUxUKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5lbC5jb250ZW50O1xuICAgICAgICAgICAgY29uc3Qgc3ZnRWxlbWVudCA9IGNvbnRlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIHN2Z0VsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZCguLi5zdmdFbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdhbGsgdGhlIHRlbXBsYXRlIHRvIGZpbmQgYmluZGluZyBtYXJrZXJzIGFuZCBjcmVhdGUgVGVtcGxhdGVQYXJ0c1xuICAgICAgICB3aGlsZSAoKG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKSkgIT09IG51bGwgJiYgcGFydHMubGVuZ3RoIDwgcGFydENvdW50KSB7XG4gICAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWcgPSBub2RlLmxvY2FsTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV2FybiBpZiBgdGV4dGFyZWFgIGluY2x1ZGVzIGFuIGV4cHJlc3Npb24gYW5kIHRocm93IGlmIGB0ZW1wbGF0ZWBcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9lcyBzaW5jZSB0aGVzZSBhcmUgbm90IHN1cHBvcnRlZC4gV2UgZG8gdGhpcyBieSBjaGVja2luZ1xuICAgICAgICAgICAgICAgICAgICAvLyBpbm5lckhUTUwgZm9yIGFueXRoaW5nIHRoYXQgbG9va3MgbGlrZSBhIG1hcmtlci4gVGhpcyBjYXRjaGVzXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhc2VzIGxpa2UgYmluZGluZ3MgaW4gdGV4dGFyZWEgdGhlcmUgbWFya2VycyB0dXJuIGludG8gdGV4dCBub2Rlcy5cbiAgICAgICAgICAgICAgICAgICAgaWYgKC9eKD86dGV4dGFyZWF8dGVtcGxhdGUpJC9pLnRlc3QodGFnKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwuaW5jbHVkZXMobWFya2VyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbSA9IGBFeHByZXNzaW9ucyBhcmUgbm90IHN1cHBvcnRlZCBpbnNpZGUgXFxgJHt0YWd9XFxgIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBlbGVtZW50cy4gU2VlIGh0dHBzOi8vbGl0LmRldi9tc2cvZXhwcmVzc2lvbi1pbi0ke3RhZ30gZm9yIG1vcmUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluZm9ybWF0aW9uLmA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlV2FybmluZygnJywgbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGZvciBhdHRlbXB0ZWQgZHluYW1pYyB0YWcgbmFtZXMsIHdlIGRvbid0XG4gICAgICAgICAgICAgICAgLy8gaW5jcmVtZW50IHRoZSBiaW5kaW5nSW5kZXgsIGFuZCBpdCdsbCBiZSBvZmYgYnkgMSBpbiB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIGFuZCBvZmYgYnkgdHdvIGFmdGVyIGl0LlxuICAgICAgICAgICAgICAgIGlmIChub2RlLmhhc0F0dHJpYnV0ZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBkZWZlciByZW1vdmluZyBib3VuZCBhdHRyaWJ1dGVzIGJlY2F1c2Ugb24gSUUgd2UgbWlnaHQgbm90IGJlXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGluZyBhdHRyaWJ1dGVzIGluIHRoZWlyIHRlbXBsYXRlIG9yZGVyLCBhbmQgd291bGQgc29tZXRpbWVzXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBhbiBhdHRyaWJ1dGUgdGhhdCB3ZSBzdGlsbCBuZWVkIHRvIGNyZWF0ZSBhIHBhcnQgZm9yLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyc1RvUmVtb3ZlID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBub2RlLmdldEF0dHJpYnV0ZU5hbWVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBuYW1lYCBpcyB0aGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHdlJ3JlIGl0ZXJhdGluZyBvdmVyLCBidXQgbm90XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBfbmVjY2Vzc2FyaWx5XyB0aGUgbmFtZSBvZiB0aGUgYXR0cmlidXRlIHdlIHdpbGwgY3JlYXRlIGEgcGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yLiBUaGV5IGNhbiBiZSBkaWZmZXJlbnQgaW4gYnJvd3NlcnMgdGhhdCBkb24ndCBpdGVyYXRlIG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIHNvdXJjZSBvcmRlci4gSW4gdGhhdCBjYXNlIHRoZSBhdHRyTmFtZXMgYXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5zIHRoZSBhdHRyaWJ1dGUgbmFtZSB3ZSdsbCBwcm9jZXNzIG5leHQuIFdlIG9ubHkgbmVlZCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZSBuYW1lIGhlcmUgdG8ga25vdyBpZiB3ZSBzaG91bGQgcHJvY2VzcyBhIGJvdW5kIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb24gdGhpcyBlbGVtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUuZW5kc1dpdGgoYm91bmRBdHRyaWJ1dGVTdWZmaXgpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS5zdGFydHNXaXRoKG1hcmtlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFsTmFtZSA9IGF0dHJOYW1lc1thdHRyTmFtZUluZGV4KytdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzVG9SZW1vdmUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVhbE5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMb3dlcmNhc2UgZm9yIGNhc2Utc2Vuc2l0aXZlIFNWRyBhdHRyaWJ1dGVzIGxpa2Ugdmlld0JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKHJlYWxOYW1lLnRvTG93ZXJDYXNlKCkgKyBib3VuZEF0dHJpYnV0ZVN1ZmZpeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRpY3MgPSB2YWx1ZS5zcGxpdChtYXJrZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtID0gLyhbLj9AXSk/KC4qKS8uZXhlYyhyZWFsTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQVRUUklCVVRFX1BBUlQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogbm9kZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbVsyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZ3M6IHN0YXRpY3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdG9yOiBtWzFdID09PSAnLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFByb3BlcnR5UGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbVsxXSA9PT0gJz8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQm9vbGVhbkF0dHJpYnV0ZVBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtWzFdID09PSAnQCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gRXZlbnRQYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IEF0dHJpYnV0ZVBhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFTEVNRU5UX1BBUlQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogbm9kZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIGF0dHJzVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiBiZW5jaG1hcmsgdGhlIHJlZ2V4IGFnYWluc3QgdGVzdGluZyBmb3IgZWFjaFxuICAgICAgICAgICAgICAgIC8vIG9mIHRoZSAzIHJhdyB0ZXh0IGVsZW1lbnQgbmFtZXMuXG4gICAgICAgICAgICAgICAgaWYgKHJhd1RleHRFbGVtZW50LnRlc3Qobm9kZS50YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgcmF3IHRleHQgZWxlbWVudHMgd2UgbmVlZCB0byBzcGxpdCB0aGUgdGV4dCBjb250ZW50IG9uXG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmtlcnMsIGNyZWF0ZSBhIFRleHQgbm9kZSBmb3IgZWFjaCBzZWdtZW50LCBhbmQgY3JlYXRlXG4gICAgICAgICAgICAgICAgICAgIC8vIGEgVGVtcGxhdGVQYXJ0IGZvciBlYWNoIG1hcmtlci5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5ncyA9IG5vZGUudGV4dENvbnRlbnQuc3BsaXQobWFya2VyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gc3RyaW5ncy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHRydXN0ZWRUeXBlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdHJ1c3RlZFR5cGVzLmVtcHR5U2NyaXB0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IHRleHQgbm9kZSBmb3IgZWFjaCBsaXRlcmFsIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZXNlIG5vZGVzIGFyZSBhbHNvIHVzZWQgYXMgdGhlIG1hcmtlcnMgZm9yIG5vZGUgcGFydHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGNhbid0IHVzZSBlbXB0eSB0ZXh0IG5vZGVzIGFzIG1hcmtlcnMgYmVjYXVzZSB0aGV5J3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3JtYWxpemVkIHdoZW4gY2xvbmluZyBpbiBJRSAoY291bGQgc2ltcGxpZnkgd2hlblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSUUgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEluZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFwcGVuZChzdHJpbmdzW2ldLCBjcmVhdGVNYXJrZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2FsayBwYXN0IHRoZSBtYXJrZXIgbm9kZSB3ZSBqdXN0IGFkZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7IHR5cGU6IENISUxEX1BBUlQsIGluZGV4OiArK25vZGVJbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdGUgYmVjYXVzZSB0aGlzIG1hcmtlciBpcyBhZGRlZCBhZnRlciB0aGUgd2Fsa2VyJ3MgY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9kZSwgaXQgd2lsbCBiZSB3YWxrZWQgdG8gaW4gdGhlIG91dGVyIGxvb3AgKGFuZCBpZ25vcmVkKSwgc29cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gYWRqdXN0IG5vZGVJbmRleCBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFwcGVuZChzdHJpbmdzW2xhc3RJbmRleF0sIGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gbm9kZS5kYXRhO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhID09PSBtYXJrZXJNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHsgdHlwZTogQ0hJTERfUEFSVCwgaW5kZXg6IG5vZGVJbmRleCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgoaSA9IG5vZGUuZGF0YS5pbmRleE9mKG1hcmtlciwgaSArIDEpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbW1lbnQgbm9kZSBoYXMgYSBiaW5kaW5nIG1hcmtlciBpbnNpZGUsIG1ha2UgYW4gaW5hY3RpdmUgcGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGJpbmRpbmcgd29uJ3Qgd29yaywgYnV0IHN1YnNlcXVlbnQgYmluZGluZ3Mgd2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7IHR5cGU6IENPTU1FTlRfUEFSVCwgaW5kZXg6IG5vZGVJbmRleCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgdG8gdGhlIGVuZCBvZiB0aGUgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgKz0gbWFya2VyLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAga2luZDogJ3RlbXBsYXRlIHByZXAnLFxuICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMsXG4gICAgICAgICAgICBjbG9uYWJsZVRlbXBsYXRlOiB0aGlzLmVsLFxuICAgICAgICAgICAgcGFydHM6IHRoaXMucGFydHMsXG4gICAgICAgICAgICBzdHJpbmdzLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gT3ZlcnJpZGRlbiB2aWEgYGxpdEh0bWxQb2x5ZmlsbFN1cHBvcnRgIHRvIHByb3ZpZGUgcGxhdGZvcm0gc3VwcG9ydC5cbiAgICAvKiogQG5vY29sbGFwc2UgKi9cbiAgICBzdGF0aWMgY3JlYXRlRWxlbWVudChodG1sLCBfb3B0aW9ucykge1xuICAgICAgICBjb25zdCBlbCA9IGQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlc29sdmVEaXJlY3RpdmUocGFydCwgdmFsdWUsIHBhcmVudCA9IHBhcnQsIGF0dHJpYnV0ZUluZGV4KSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgdmFyIF9kO1xuICAgIC8vIEJhaWwgZWFybHkgaWYgdGhlIHZhbHVlIGlzIGV4cGxpY2l0bHkgbm9DaGFuZ2UuIE5vdGUsIHRoaXMgbWVhbnMgYW55XG4gICAgLy8gbmVzdGVkIGRpcmVjdGl2ZSBpcyBzdGlsbCBhdHRhY2hlZCBhbmQgaXMgbm90IHJ1bi5cbiAgICBpZiAodmFsdWUgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgbGV0IGN1cnJlbnREaXJlY3RpdmUgPSBhdHRyaWJ1dGVJbmRleCAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gKF9hID0gcGFyZW50Ll9fZGlyZWN0aXZlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW2F0dHJpYnV0ZUluZGV4XVxuICAgICAgICA6IHBhcmVudC5fX2RpcmVjdGl2ZTtcbiAgICBjb25zdCBuZXh0RGlyZWN0aXZlQ29uc3RydWN0b3IgPSBpc1ByaW1pdGl2ZSh2YWx1ZSlcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICAgICAgdmFsdWVbJ18kbGl0RGlyZWN0aXZlJCddO1xuICAgIGlmICgoY3VycmVudERpcmVjdGl2ZSA9PT0gbnVsbCB8fCBjdXJyZW50RGlyZWN0aXZlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50RGlyZWN0aXZlLmNvbnN0cnVjdG9yKSAhPT0gbmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yKSB7XG4gICAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgIChfYiA9IGN1cnJlbnREaXJlY3RpdmUgPT09IG51bGwgfHwgY3VycmVudERpcmVjdGl2ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudERpcmVjdGl2ZVsnXyRub3RpZnlEaXJlY3RpdmVDb25uZWN0aW9uQ2hhbmdlZCddKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChjdXJyZW50RGlyZWN0aXZlLCBmYWxzZSk7XG4gICAgICAgIGlmIChuZXh0RGlyZWN0aXZlQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY3VycmVudERpcmVjdGl2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnREaXJlY3RpdmUgPSBuZXcgbmV4dERpcmVjdGl2ZUNvbnN0cnVjdG9yKHBhcnQpO1xuICAgICAgICAgICAgY3VycmVudERpcmVjdGl2ZS5fJGluaXRpYWxpemUocGFydCwgcGFyZW50LCBhdHRyaWJ1dGVJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF0dHJpYnV0ZUluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICgoX2MgPSAoX2QgPSBwYXJlbnQpLl9fZGlyZWN0aXZlcykgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogKF9kLl9fZGlyZWN0aXZlcyA9IFtdKSlbYXR0cmlidXRlSW5kZXhdID1cbiAgICAgICAgICAgICAgICBjdXJyZW50RGlyZWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50Ll9fZGlyZWN0aXZlID0gY3VycmVudERpcmVjdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY3VycmVudERpcmVjdGl2ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhbHVlID0gcmVzb2x2ZURpcmVjdGl2ZShwYXJ0LCBjdXJyZW50RGlyZWN0aXZlLl8kcmVzb2x2ZShwYXJ0LCB2YWx1ZS52YWx1ZXMpLCBjdXJyZW50RGlyZWN0aXZlLCBhdHRyaWJ1dGVJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogQW4gdXBkYXRlYWJsZSBpbnN0YW5jZSBvZiBhIFRlbXBsYXRlLiBIb2xkcyByZWZlcmVuY2VzIHRvIHRoZSBQYXJ0cyB1c2VkIHRvXG4gKiB1cGRhdGUgdGhlIHRlbXBsYXRlIGluc3RhbmNlLlxuICovXG5jbGFzcyBUZW1wbGF0ZUluc3RhbmNlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZSwgcGFyZW50KSB7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fcGFydHMgPSBbXTtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmVjdGFibGVDaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fJHRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuICAgIC8vIENhbGxlZCBieSBDaGlsZFBhcnQgcGFyZW50Tm9kZSBnZXR0ZXJcbiAgICBnZXQgcGFyZW50Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRwYXJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgLy8gU2VlIGNvbW1lbnQgaW4gRGlzY29ubmVjdGFibGUgaW50ZXJmYWNlIGZvciB3aHkgdGhpcyBpcyBhIGdldHRlclxuICAgIGdldCBfJGlzQ29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJHBhcmVudC5fJGlzQ29ubmVjdGVkO1xuICAgIH1cbiAgICAvLyBUaGlzIG1ldGhvZCBpcyBzZXBhcmF0ZSBmcm9tIHRoZSBjb25zdHJ1Y3RvciBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuIGFcbiAgICAvLyBEb2N1bWVudEZyYWdtZW50IGFuZCB3ZSBkb24ndCB3YW50IHRvIGhvbGQgb250byBpdCB3aXRoIGFuIGluc3RhbmNlIGZpZWxkLlxuICAgIF9jbG9uZShvcHRpb25zKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgeyBlbDogeyBjb250ZW50IH0sIHBhcnRzOiBwYXJ0cywgfSA9IHRoaXMuXyR0ZW1wbGF0ZTtcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSAoKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmNyZWF0aW9uU2NvcGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGQpLmltcG9ydE5vZGUoY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIHdhbGtlci5jdXJyZW50Tm9kZSA9IGZyYWdtZW50O1xuICAgICAgICBsZXQgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICBsZXQgbm9kZUluZGV4ID0gMDtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGxldCB0ZW1wbGF0ZVBhcnQgPSBwYXJ0c1swXTtcbiAgICAgICAgd2hpbGUgKHRlbXBsYXRlUGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAobm9kZUluZGV4ID09PSB0ZW1wbGF0ZVBhcnQuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFydDtcbiAgICAgICAgICAgICAgICBpZiAodGVtcGxhdGVQYXJ0LnR5cGUgPT09IENISUxEX1BBUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IG5ldyBDaGlsZFBhcnQobm9kZSwgbm9kZS5uZXh0U2libGluZywgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSBBVFRSSUJVVEVfUEFSVCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gbmV3IHRlbXBsYXRlUGFydC5jdG9yKG5vZGUsIHRlbXBsYXRlUGFydC5uYW1lLCB0ZW1wbGF0ZVBhcnQuc3RyaW5ncywgdGhpcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRlbXBsYXRlUGFydC50eXBlID09PSBFTEVNRU5UX1BBUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IG5ldyBFbGVtZW50UGFydChub2RlLCB0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFydHMucHVzaChwYXJ0KTtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVBhcnQgPSBwYXJ0c1srK3BhcnRJbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZUluZGV4ICE9PSAodGVtcGxhdGVQYXJ0ID09PSBudWxsIHx8IHRlbXBsYXRlUGFydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGVtcGxhdGVQYXJ0LmluZGV4KSkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgICAgICAgICBub2RlSW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxuICAgIF91cGRhdGUodmFsdWVzKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHRoaXMuX3BhcnRzKSB7XG4gICAgICAgICAgICBpZiAocGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ3NldCBwYXJ0JyxcbiAgICAgICAgICAgICAgICAgICAgcGFydCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVJbmRleDogaSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUluc3RhbmNlOiB0aGlzLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0LnN0cmluZ3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWVzLCBwYXJ0LCBpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG51bWJlciBvZiB2YWx1ZXMgdGhlIHBhcnQgY29uc3VtZXMgaXMgcGFydC5zdHJpbmdzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgdmFsdWVzIGFyZSBpbiBiZXR3ZWVuIHRlbXBsYXRlIHNwYW5zLiBXZSBpbmNyZW1lbnQgaSBieSAxXG4gICAgICAgICAgICAgICAgICAgIC8vIGxhdGVyIGluIHRoZSBsb29wLCBzbyBpbmNyZW1lbnQgaXQgYnkgcGFydC5zdHJpbmdzLmxlbmd0aCAtIDIgaGVyZVxuICAgICAgICAgICAgICAgICAgICBpICs9IHBhcnQuc3RyaW5ncy5sZW5ndGggLSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5fJHNldFZhbHVlKHZhbHVlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgQ2hpbGRQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydE5vZGUsIGVuZE5vZGUsIHBhcmVudCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMudHlwZSA9IENISUxEX1BBUlQ7XG4gICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgZmllbGRzIHdpbGwgYmUgcGF0Y2hlZCBvbnRvIENoaWxkUGFydHMgd2hlbiByZXF1aXJlZCBieVxuICAgICAgICAvLyBBc3luY0RpcmVjdGl2ZVxuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl8kc3RhcnROb2RlID0gc3RhcnROb2RlO1xuICAgICAgICB0aGlzLl8kZW5kTm9kZSA9IGVuZE5vZGU7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIC8vIE5vdGUgX19pc0Nvbm5lY3RlZCBpcyBvbmx5IGV2ZXIgYWNjZXNzZWQgb24gUm9vdFBhcnRzIChpLmUuIHdoZW4gdGhlcmUgaXNcbiAgICAgICAgLy8gbm8gXyRwYXJlbnQpOyB0aGUgdmFsdWUgb24gYSBub24tcm9vdC1wYXJ0IGlzIFwiZG9uJ3QgY2FyZVwiLCBidXQgY2hlY2tpbmdcbiAgICAgICAgLy8gZm9yIHBhcmVudCB3b3VsZCBiZSBtb3JlIGNvZGVcbiAgICAgICAgdGhpcy5fX2lzQ29ubmVjdGVkID0gKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmlzQ29ubmVjdGVkKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB0cnVlO1xuICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICAvLyBFeHBsaWNpdGx5IGluaXRpYWxpemUgZm9yIGNvbnNpc3RlbnQgY2xhc3Mgc2hhcGUuXG4gICAgICAgICAgICB0aGlzLl90ZXh0U2FuaXRpemVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFNlZSBjb21tZW50IGluIERpc2Nvbm5lY3RhYmxlIGludGVyZmFjZSBmb3Igd2h5IHRoaXMgaXMgYSBnZXR0ZXJcbiAgICBnZXQgXyRpc0Nvbm5lY3RlZCgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgLy8gQ2hpbGRQYXJ0cyB0aGF0IGFyZSBub3QgYXQgdGhlIHJvb3Qgc2hvdWxkIGFsd2F5cyBiZSBjcmVhdGVkIHdpdGggYVxuICAgICAgICAvLyBwYXJlbnQ7IG9ubHkgUm9vdENoaWxkTm9kZSdzIHdvbid0LCBzbyB0aGV5IHJldHVybiB0aGUgbG9jYWwgaXNDb25uZWN0ZWRcbiAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgcmV0dXJuIChfYiA9IChfYSA9IHRoaXMuXyRwYXJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5fJGlzQ29ubmVjdGVkKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB0aGlzLl9faXNDb25uZWN0ZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJlbnQgbm9kZSBpbnRvIHdoaWNoIHRoZSBwYXJ0IHJlbmRlcnMgaXRzIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBBIENoaWxkUGFydCdzIGNvbnRlbnQgY29uc2lzdHMgb2YgYSByYW5nZSBvZiBhZGphY2VudCBjaGlsZCBub2RlcyBvZlxuICAgICAqIGAucGFyZW50Tm9kZWAsIHBvc3NpYmx5IGJvcmRlcmVkIGJ5ICdtYXJrZXIgbm9kZXMnIChgLnN0YXJ0Tm9kZWAgYW5kXG4gICAgICogYC5lbmROb2RlYCkuXG4gICAgICpcbiAgICAgKiAtIElmIGJvdGggYC5zdGFydE5vZGVgIGFuZCBgLmVuZE5vZGVgIGFyZSBub24tbnVsbCwgdGhlbiB0aGUgcGFydCdzIGNvbnRlbnRcbiAgICAgKiBjb25zaXN0cyBvZiBhbGwgc2libGluZ3MgYmV0d2VlbiBgLnN0YXJ0Tm9kZWAgYW5kIGAuZW5kTm9kZWAsIGV4Y2x1c2l2ZWx5LlxuICAgICAqXG4gICAgICogLSBJZiBgLnN0YXJ0Tm9kZWAgaXMgbm9uLW51bGwgYnV0IGAuZW5kTm9kZWAgaXMgbnVsbCwgdGhlbiB0aGUgcGFydCdzXG4gICAgICogY29udGVudCBjb25zaXN0cyBvZiBhbGwgc2libGluZ3MgZm9sbG93aW5nIGAuc3RhcnROb2RlYCwgdXAgdG8gYW5kXG4gICAgICogaW5jbHVkaW5nIHRoZSBsYXN0IGNoaWxkIG9mIGAucGFyZW50Tm9kZWAuIElmIGAuZW5kTm9kZWAgaXMgbm9uLW51bGwsIHRoZW5cbiAgICAgKiBgLnN0YXJ0Tm9kZWAgd2lsbCBhbHdheXMgYmUgbm9uLW51bGwuXG4gICAgICpcbiAgICAgKiAtIElmIGJvdGggYC5lbmROb2RlYCBhbmQgYC5zdGFydE5vZGVgIGFyZSBudWxsLCB0aGVuIHRoZSBwYXJ0J3MgY29udGVudFxuICAgICAqIGNvbnNpc3RzIG9mIGFsbCBjaGlsZCBub2RlcyBvZiBgLnBhcmVudE5vZGVgLlxuICAgICAqL1xuICAgIGdldCBwYXJlbnROb2RlKCkge1xuICAgICAgICBsZXQgcGFyZW50Tm9kZSA9IHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fJHBhcmVudDtcbiAgICAgICAgaWYgKHBhcmVudCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBwYXJlbnROb2RlLm5vZGVUeXBlID09PSAxMSAvKiBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UICovKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgcGFyZW50Tm9kZSBpcyBhIERvY3VtZW50RnJhZ21lbnQsIGl0IG1heSBiZSBiZWNhdXNlIHRoZSBET00gaXNcbiAgICAgICAgICAgIC8vIHN0aWxsIGluIHRoZSBjbG9uZWQgZnJhZ21lbnQgZHVyaW5nIGluaXRpYWwgcmVuZGVyOyBpZiBzbywgZ2V0IHRoZSByZWFsXG4gICAgICAgICAgICAvLyBwYXJlbnROb2RlIHRoZSBwYXJ0IHdpbGwgYmUgY29tbWl0dGVkIGludG8gYnkgYXNraW5nIHRoZSBwYXJlbnQuXG4gICAgICAgICAgICBwYXJlbnROb2RlID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcmVudE5vZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJ0J3MgbGVhZGluZyBtYXJrZXIgbm9kZSwgaWYgYW55LiBTZWUgYC5wYXJlbnROb2RlYCBmb3IgbW9yZVxuICAgICAqIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIGdldCBzdGFydE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kc3RhcnROb2RlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgcGFydCdzIHRyYWlsaW5nIG1hcmtlciBub2RlLCBpZiBhbnkuIFNlZSBgLnBhcmVudE5vZGVgIGZvciBtb3JlXG4gICAgICogaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgZ2V0IGVuZE5vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kZW5kTm9kZTtcbiAgICB9XG4gICAgXyRzZXRWYWx1ZSh2YWx1ZSwgZGlyZWN0aXZlUGFyZW50ID0gdGhpcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChERVZfTU9ERSAmJiB0aGlzLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhpcyBcXGBDaGlsZFBhcnRcXGAgaGFzIG5vIFxcYHBhcmVudE5vZGVcXGAgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYWNjZXB0IGEgdmFsdWUuIFRoaXMgbGlrZWx5IG1lYW5zIHRoZSBlbGVtZW50IGNvbnRhaW5pbmcgdGhlIHBhcnQgd2FzIG1hbmlwdWxhdGVkIGluIGFuIHVuc3VwcG9ydGVkIHdheSBvdXRzaWRlIG9mIExpdCdzIGNvbnRyb2wgc3VjaCB0aGF0IHRoZSBwYXJ0J3MgbWFya2VyIG5vZGVzIHdlcmUgZWplY3RlZCBmcm9tIERPTS4gRm9yIGV4YW1wbGUsIHNldHRpbmcgdGhlIGVsZW1lbnQncyBcXGBpbm5lckhUTUxcXGAgb3IgXFxgdGV4dENvbnRlbnRcXGAgY2FuIGRvIHRoaXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQpO1xuICAgICAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpKSB7XG4gICAgICAgICAgICAvLyBOb24tcmVuZGVyaW5nIGNoaWxkIHZhbHVlcy4gSXQncyBpbXBvcnRhbnQgdGhhdCB0aGVzZSBkbyBub3QgcmVuZGVyXG4gICAgICAgICAgICAvLyBlbXB0eSB0ZXh0IG5vZGVzIHRvIGF2b2lkIGlzc3VlcyB3aXRoIHByZXZlbnRpbmcgZGVmYXVsdCA8c2xvdD5cbiAgICAgICAgICAgIC8vIGZhbGxiYWNrIGNvbnRlbnQuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IG5vdGhpbmcgfHwgdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fJGNvbW1pdHRlZFZhbHVlICE9PSBub3RoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnY29tbWl0IG5vdGhpbmcgdG8gY2hpbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHRoaXMuXyRzdGFydE5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IHRoaXMuXyRlbmROb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiB0aGlzLl8kcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fJGNsZWFyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSAhPT0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlICYmIHZhbHVlICE9PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRleHQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZVsnXyRsaXRUeXBlJCddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZS5ub2RlVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoREVWX01PREUgJiYgKChfYSA9IHRoaXMub3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhvc3QpID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbW1pdFRleHQoYFtwcm9iYWJsZSBtaXN0YWtlOiByZW5kZXJlZCBhIHRlbXBsYXRlJ3MgaG9zdCBpbiBpdHNlbGYgYCArXG4gICAgICAgICAgICAgICAgICAgIGAoY29tbW9ubHkgY2F1c2VkIGJ5IHdyaXRpbmcgXFwke3RoaXN9IGluIGEgdGVtcGxhdGVdYCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBBdHRlbXB0ZWQgdG8gcmVuZGVyIHRoZSB0ZW1wbGF0ZSBob3N0YCwgdmFsdWUsIGBpbnNpZGUgaXRzZWxmLiBUaGlzIGlzIGFsbW9zdCBhbHdheXMgYSBtaXN0YWtlLCBhbmQgaW4gZGV2IG1vZGUgYCwgYHdlIHJlbmRlciBzb21lIHdhcm5pbmcgdGV4dC4gSW4gcHJvZHVjdGlvbiBob3dldmVyLCB3ZSdsbCBgLCBgcmVuZGVyIGl0LCB3aGljaCB3aWxsIHVzdWFsbHkgcmVzdWx0IGluIGFuIGVycm9yLCBhbmQgc29tZXRpbWVzIGAsIGBpbiB0aGUgZWxlbWVudCBkaXNhcHBlYXJpbmcgZnJvbSB0aGUgRE9NLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzSXRlcmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9jb21taXRJdGVyYWJsZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBGYWxsYmFjaywgd2lsbCByZW5kZXIgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgdGhpcy5fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2luc2VydChub2RlLCByZWYgPSB0aGlzLl8kZW5kTm9kZSkge1xuICAgICAgICByZXR1cm4gd3JhcCh3cmFwKHRoaXMuXyRzdGFydE5vZGUpLnBhcmVudE5vZGUpLmluc2VydEJlZm9yZShub2RlLCByZWYpO1xuICAgIH1cbiAgICBfY29tbWl0Tm9kZSh2YWx1ZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0aGlzLl8kY29tbWl0dGVkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl8kY2xlYXIoKTtcbiAgICAgICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MgJiZcbiAgICAgICAgICAgICAgICBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgIT09IG5vb3BTYW5pdGl6ZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlTmFtZSA9IChfYSA9IHRoaXMuXyRzdGFydE5vZGUucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5vZGVOYW1lO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnROb2RlTmFtZSA9PT0gJ1NUWUxFJyB8fCBwYXJlbnROb2RlTmFtZSA9PT0gJ1NDUklQVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSAnRm9yYmlkZGVuJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Tm9kZU5hbWUgPT09ICdTVFlMRScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYExpdCBkb2VzIG5vdCBzdXBwb3J0IGJpbmRpbmcgaW5zaWRlIHN0eWxlIG5vZGVzLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBUaGlzIGlzIGEgc2VjdXJpdHkgcmlzaywgYXMgc3R5bGUgaW5qZWN0aW9uIGF0dGFja3MgY2FuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGV4ZmlsdHJhdGUgZGF0YSBhbmQgc3Bvb2YgVUlzLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBDb25zaWRlciBpbnN0ZWFkIHVzaW5nIGNzc1xcYC4uLlxcYCBsaXRlcmFscyBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0byBjb21wb3NlIHN0eWxlcywgYW5kIG1ha2UgZG8gZHluYW1pYyBzdHlsaW5nIHdpdGggYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgY3NzIGN1c3RvbSBwcm9wZXJ0aWVzLCA6OnBhcnRzLCA8c2xvdD5zLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBhbmQgYnkgbXV0YXRpbmcgdGhlIERPTSByYXRoZXIgdGhhbiBzdHlsZXNoZWV0cy5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBMaXQgZG9lcyBub3Qgc3VwcG9ydCBiaW5kaW5nIGluc2lkZSBzY3JpcHQgbm9kZXMuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFRoaXMgaXMgYSBzZWN1cml0eSByaXNrLCBhcyBpdCBjb3VsZCBhbGxvdyBhcmJpdHJhcnkgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgY29kZSBleGVjdXRpb24uYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICBraW5kOiAnY29tbWl0IG5vZGUnLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiB0aGlzLl8kc3RhcnROb2RlLFxuICAgICAgICAgICAgICAgIHBhcmVudDogdGhpcy5fJHBhcmVudCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB0aGlzLl9pbnNlcnQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9jb21taXRUZXh0KHZhbHVlKSB7XG4gICAgICAgIC8vIElmIHRoZSBjb21taXR0ZWQgdmFsdWUgaXMgYSBwcmltaXRpdmUgaXQgbWVhbnMgd2UgY2FsbGVkIF9jb21taXRUZXh0IG9uXG4gICAgICAgIC8vIHRoZSBwcmV2aW91cyByZW5kZXIsIGFuZCB3ZSBrbm93IHRoYXQgdGhpcy5fJHN0YXJ0Tm9kZS5uZXh0U2libGluZyBpcyBhXG4gICAgICAgIC8vIFRleHQgbm9kZS4gV2UgY2FuIG5vdyBqdXN0IHJlcGxhY2UgdGhlIHRleHQgY29udGVudCAoLmRhdGEpIG9mIHRoZSBub2RlLlxuICAgICAgICBpZiAodGhpcy5fJGNvbW1pdHRlZFZhbHVlICE9PSBub3RoaW5nICYmXG4gICAgICAgICAgICBpc1ByaW1pdGl2ZSh0aGlzLl8kY29tbWl0dGVkVmFsdWUpKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gd3JhcCh0aGlzLl8kc3RhcnROb2RlKS5uZXh0U2libGluZztcbiAgICAgICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdGV4dFNhbml0aXplciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RleHRTYW5pdGl6ZXIgPSBjcmVhdGVTYW5pdGl6ZXIobm9kZSwgJ2RhdGEnLCAncHJvcGVydHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl90ZXh0U2FuaXRpemVyKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCB0ZXh0JyxcbiAgICAgICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbm9kZS5kYXRhID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZSh0ZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgLy8gV2hlbiBzZXR0aW5nIHRleHQgY29udGVudCwgZm9yIHNlY3VyaXR5IHB1cnBvc2VzIGl0IG1hdHRlcnMgYSBsb3RcbiAgICAgICAgICAgICAgICAvLyB3aGF0IHRoZSBwYXJlbnQgaXMuIEZvciBleGFtcGxlLCA8c3R5bGU+IGFuZCA8c2NyaXB0PiBuZWVkIHRvIGJlXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlZCB3aXRoIGNhcmUsIHdoaWxlIDxzcGFuPiBkb2VzIG5vdC4gU28gZmlyc3Qgd2UgbmVlZCB0byBwdXQgYVxuICAgICAgICAgICAgICAgIC8vIHRleHQgbm9kZSBpbnRvIHRoZSBkb2N1bWVudCwgdGhlbiB3ZSBjYW4gc2FuaXRpemUgaXRzIGNvbnRlbnQuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RleHRTYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90ZXh0U2FuaXRpemVyID0gY3JlYXRlU2FuaXRpemVyKHRleHROb2RlLCAnZGF0YScsICdwcm9wZXJ0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3RleHRTYW5pdGl6ZXIodmFsdWUpO1xuICAgICAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IHRleHROb2RlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRleHROb2RlLmRhdGEgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUoZC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgdGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIG5vZGU6IHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkubmV4dFNpYmxpbmcsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIF9jb21taXRUZW1wbGF0ZVJlc3VsdChyZXN1bHQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICBjb25zdCB7IHZhbHVlcywgWydfJGxpdFR5cGUkJ106IHR5cGUgfSA9IHJlc3VsdDtcbiAgICAgICAgLy8gSWYgJGxpdFR5cGUkIGlzIGEgbnVtYmVyLCByZXN1bHQgaXMgYSBwbGFpbiBUZW1wbGF0ZVJlc3VsdCBhbmQgd2UgZ2V0XG4gICAgICAgIC8vIHRoZSB0ZW1wbGF0ZSBmcm9tIHRoZSB0ZW1wbGF0ZSBjYWNoZS4gSWYgbm90LCByZXN1bHQgaXMgYVxuICAgICAgICAvLyBDb21waWxlZFRlbXBsYXRlUmVzdWx0IGFuZCBfJGxpdFR5cGUkIGlzIGEgQ29tcGlsZWRUZW1wbGF0ZSBhbmQgd2UgbmVlZFxuICAgICAgICAvLyB0byBjcmVhdGUgdGhlIDx0ZW1wbGF0ZT4gZWxlbWVudCB0aGUgZmlyc3QgdGltZSB3ZSBzZWUgaXQuXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdHlwZW9mIHR5cGUgPT09ICdudW1iZXInXG4gICAgICAgICAgICA/IHRoaXMuXyRnZXRUZW1wbGF0ZShyZXN1bHQpXG4gICAgICAgICAgICA6ICh0eXBlLmVsID09PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAodHlwZS5lbCA9IFRlbXBsYXRlLmNyZWF0ZUVsZW1lbnQodHlwZS5oLCB0aGlzLm9wdGlvbnMpKSxcbiAgICAgICAgICAgICAgICB0eXBlKTtcbiAgICAgICAgaWYgKCgoX2EgPSB0aGlzLl8kY29tbWl0dGVkVmFsdWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5fJHRlbXBsYXRlKSA9PT0gdGVtcGxhdGUpIHtcbiAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAga2luZDogJ3RlbXBsYXRlIHVwZGF0aW5nJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICBpbnN0YW5jZTogdGhpcy5fJGNvbW1pdHRlZFZhbHVlLFxuICAgICAgICAgICAgICAgIHBhcnRzOiB0aGlzLl8kY29tbWl0dGVkVmFsdWUuX3BhcnRzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5fdXBkYXRlKHZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBUZW1wbGF0ZUluc3RhbmNlKHRlbXBsYXRlLCB0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gaW5zdGFuY2UuX2Nsb25lKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgIGtpbmQ6ICd0ZW1wbGF0ZSBpbnN0YW50aWF0ZWQnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLFxuICAgICAgICAgICAgICAgIGluc3RhbmNlLFxuICAgICAgICAgICAgICAgIHBhcnRzOiBpbnN0YW5jZS5fcGFydHMsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgIGZyYWdtZW50LFxuICAgICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW5zdGFuY2UuX3VwZGF0ZSh2YWx1ZXMpO1xuICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICBraW5kOiAndGVtcGxhdGUgaW5zdGFudGlhdGVkIGFuZCB1cGRhdGVkJyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSxcbiAgICAgICAgICAgICAgICBwYXJ0czogaW5zdGFuY2UuX3BhcnRzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgICAgICBmcmFnbWVudCxcbiAgICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdE5vZGUoZnJhZ21lbnQpO1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gT3ZlcnJpZGRlbiB2aWEgYGxpdEh0bWxQb2x5ZmlsbFN1cHBvcnRgIHRvIHByb3ZpZGUgcGxhdGZvcm0gc3VwcG9ydC5cbiAgICAvKiogQGludGVybmFsICovXG4gICAgXyRnZXRUZW1wbGF0ZShyZXN1bHQpIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gdGVtcGxhdGVDYWNoZS5nZXQocmVzdWx0LnN0cmluZ3MpO1xuICAgICAgICBpZiAodGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGVtcGxhdGVDYWNoZS5zZXQocmVzdWx0LnN0cmluZ3MsICh0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZShyZXN1bHQpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbiAgICBfY29tbWl0SXRlcmFibGUodmFsdWUpIHtcbiAgICAgICAgLy8gRm9yIGFuIEl0ZXJhYmxlLCB3ZSBjcmVhdGUgYSBuZXcgSW5zdGFuY2VQYXJ0IHBlciBpdGVtLCB0aGVuIHNldCBpdHNcbiAgICAgICAgLy8gdmFsdWUgdG8gdGhlIGl0ZW0uIFRoaXMgaXMgYSBsaXR0bGUgYml0IG9mIG92ZXJoZWFkIGZvciBldmVyeSBpdGVtIGluXG4gICAgICAgIC8vIGFuIEl0ZXJhYmxlLCBidXQgaXQgbGV0cyB1cyByZWN1cnNlIGVhc2lseSBhbmQgZWZmaWNpZW50bHkgdXBkYXRlIEFycmF5c1xuICAgICAgICAvLyBvZiBUZW1wbGF0ZVJlc3VsdHMgdGhhdCB3aWxsIGJlIGNvbW1vbmx5IHJldHVybmVkIGZyb20gZXhwcmVzc2lvbnMgbGlrZTpcbiAgICAgICAgLy8gYXJyYXkubWFwKChpKSA9PiBodG1sYCR7aX1gKSwgYnkgcmV1c2luZyBleGlzdGluZyBUZW1wbGF0ZUluc3RhbmNlcy5cbiAgICAgICAgLy8gSWYgdmFsdWUgaXMgYW4gYXJyYXksIHRoZW4gdGhlIHByZXZpb3VzIHJlbmRlciB3YXMgb2YgYW5cbiAgICAgICAgLy8gaXRlcmFibGUgYW5kIHZhbHVlIHdpbGwgY29udGFpbiB0aGUgQ2hpbGRQYXJ0cyBmcm9tIHRoZSBwcmV2aW91c1xuICAgICAgICAvLyByZW5kZXIuIElmIHZhbHVlIGlzIG5vdCBhbiBhcnJheSwgY2xlYXIgdGhpcyBwYXJ0IGFuZCBtYWtlIGEgbmV3XG4gICAgICAgIC8vIGFycmF5IGZvciBDaGlsZFBhcnRzLlxuICAgICAgICBpZiAoIWlzQXJyYXkodGhpcy5fJGNvbW1pdHRlZFZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gW107XG4gICAgICAgICAgICB0aGlzLl8kY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMZXRzIHVzIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgaXRlbXMgd2Ugc3RhbXBlZCBzbyB3ZSBjYW4gY2xlYXIgbGVmdG92ZXJcbiAgICAgICAgLy8gaXRlbXMgZnJvbSBhIHByZXZpb3VzIHJlbmRlclxuICAgICAgICBjb25zdCBpdGVtUGFydHMgPSB0aGlzLl8kY29tbWl0dGVkVmFsdWU7XG4gICAgICAgIGxldCBwYXJ0SW5kZXggPSAwO1xuICAgICAgICBsZXQgaXRlbVBhcnQ7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHBhcnRJbmRleCA9PT0gaXRlbVBhcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIElmIG5vIGV4aXN0aW5nIHBhcnQsIGNyZWF0ZSBhIG5ldyBvbmVcbiAgICAgICAgICAgICAgICAvLyBUT0RPIChqdXN0aW5mYWduYW5pKTogdGVzdCBwZXJmIGltcGFjdCBvZiBhbHdheXMgY3JlYXRpbmcgdHdvIHBhcnRzXG4gICAgICAgICAgICAgICAgLy8gaW5zdGVhZCBvZiBzaGFyaW5nIHBhcnRzIGJldHdlZW4gbm9kZXNcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbGl0L2xpdC9pc3N1ZXMvMTI2NlxuICAgICAgICAgICAgICAgIGl0ZW1QYXJ0cy5wdXNoKChpdGVtUGFydCA9IG5ldyBDaGlsZFBhcnQodGhpcy5faW5zZXJ0KGNyZWF0ZU1hcmtlcigpKSwgdGhpcy5faW5zZXJ0KGNyZWF0ZU1hcmtlcigpKSwgdGhpcywgdGhpcy5vcHRpb25zKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gUmV1c2UgYW4gZXhpc3RpbmcgcGFydFxuICAgICAgICAgICAgICAgIGl0ZW1QYXJ0ID0gaXRlbVBhcnRzW3BhcnRJbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtUGFydC5fJHNldFZhbHVlKGl0ZW0pO1xuICAgICAgICAgICAgcGFydEluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnRJbmRleCA8IGl0ZW1QYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGl0ZW1QYXJ0cyBhbHdheXMgaGF2ZSBlbmQgbm9kZXNcbiAgICAgICAgICAgIHRoaXMuXyRjbGVhcihpdGVtUGFydCAmJiB3cmFwKGl0ZW1QYXJ0Ll8kZW5kTm9kZSkubmV4dFNpYmxpbmcsIHBhcnRJbmRleCk7XG4gICAgICAgICAgICAvLyBUcnVuY2F0ZSB0aGUgcGFydHMgYXJyYXkgc28gX3ZhbHVlIHJlZmxlY3RzIHRoZSBjdXJyZW50IHN0YXRlXG4gICAgICAgICAgICBpdGVtUGFydHMubGVuZ3RoID0gcGFydEluZGV4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIG5vZGVzIGNvbnRhaW5lZCB3aXRoaW4gdGhpcyBQYXJ0IGZyb20gdGhlIERPTS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdGFydCBTdGFydCBub2RlIHRvIGNsZWFyIGZyb20sIGZvciBjbGVhcmluZyBhIHN1YnNldCBvZiB0aGUgcGFydCdzXG4gICAgICogICAgIERPTSAodXNlZCB3aGVuIHRydW5jYXRpbmcgaXRlcmFibGVzKVxuICAgICAqIEBwYXJhbSBmcm9tICBXaGVuIGBzdGFydGAgaXMgc3BlY2lmaWVkLCB0aGUgaW5kZXggd2l0aGluIHRoZSBpdGVyYWJsZSBmcm9tXG4gICAgICogICAgIHdoaWNoIENoaWxkUGFydHMgYXJlIGJlaW5nIHJlbW92ZWQsIHVzZWQgZm9yIGRpc2Nvbm5lY3RpbmcgZGlyZWN0aXZlcyBpblxuICAgICAqICAgICB0aG9zZSBQYXJ0cy5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIF8kY2xlYXIoc3RhcnQgPSB3cmFwKHRoaXMuXyRzdGFydE5vZGUpLm5leHRTaWJsaW5nLCBmcm9tKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5fJG5vdGlmeUNvbm5lY3Rpb25DaGFuZ2VkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzLCBmYWxzZSwgdHJ1ZSwgZnJvbSk7XG4gICAgICAgIHdoaWxlIChzdGFydCAmJiBzdGFydCAhPT0gdGhpcy5fJGVuZE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSB3cmFwKHN0YXJ0KS5uZXh0U2libGluZztcbiAgICAgICAgICAgIHdyYXAoc3RhcnQpLnJlbW92ZSgpO1xuICAgICAgICAgICAgc3RhcnQgPSBuO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudGF0aW9uIG9mIFJvb3RQYXJ0J3MgYGlzQ29ubmVjdGVkYC4gTm90ZSB0aGF0IHRoaXMgbWV0b2RcbiAgICAgKiBzaG91bGQgb25seSBiZSBjYWxsZWQgb24gYFJvb3RQYXJ0YHMgKHRoZSBgQ2hpbGRQYXJ0YCByZXR1cm5lZCBmcm9tIGFcbiAgICAgKiB0b3AtbGV2ZWwgYHJlbmRlcigpYCBjYWxsKS4gSXQgaGFzIG5vIGVmZmVjdCBvbiBub24tcm9vdCBDaGlsZFBhcnRzLlxuICAgICAqIEBwYXJhbSBpc0Nvbm5lY3RlZCBXaGV0aGVyIHRvIHNldFxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHNldENvbm5lY3RlZChpc0Nvbm5lY3RlZCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0aGlzLl8kcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX19pc0Nvbm5lY3RlZCA9IGlzQ29ubmVjdGVkO1xuICAgICAgICAgICAgKF9hID0gdGhpcy5fJG5vdGlmeUNvbm5lY3Rpb25DaGFuZ2VkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzLCBpc0Nvbm5lY3RlZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncGFydC5zZXRDb25uZWN0ZWQoKSBtYXkgb25seSBiZSBjYWxsZWQgb24gYSAnICtcbiAgICAgICAgICAgICAgICAnUm9vdFBhcnQgcmV0dXJuZWQgZnJvbSByZW5kZXIoKS4nKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MsIHBhcmVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnR5cGUgPSBBVFRSSUJVVEVfUEFSVDtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBub3RoaW5nO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBpZiAoc3RyaW5ncy5sZW5ndGggPiAyIHx8IHN0cmluZ3NbMF0gIT09ICcnIHx8IHN0cmluZ3NbMV0gIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBuZXcgQXJyYXkoc3RyaW5ncy5sZW5ndGggLSAxKS5maWxsKG5ldyBTdHJpbmcoKSk7XG4gICAgICAgICAgICB0aGlzLnN0cmluZ3MgPSBzdHJpbmdzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbm90aGluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICB0aGlzLl9zYW5pdGl6ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHRhZ05hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQudGFnTmFtZTtcbiAgICB9XG4gICAgLy8gU2VlIGNvbW1lbnQgaW4gRGlzY29ubmVjdGFibGUgaW50ZXJmYWNlIGZvciB3aHkgdGhpcyBpcyBhIGdldHRlclxuICAgIGdldCBfJGlzQ29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJHBhcmVudC5fJGlzQ29ubmVjdGVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGlzIHBhcnQgYnkgcmVzb2x2aW5nIHRoZSB2YWx1ZSBmcm9tIHBvc3NpYmx5IG11bHRpcGxlXG4gICAgICogdmFsdWVzIGFuZCBzdGF0aWMgc3RyaW5ncyBhbmQgY29tbWl0dGluZyBpdCB0byB0aGUgRE9NLlxuICAgICAqIElmIHRoaXMgcGFydCBpcyBzaW5nbGUtdmFsdWVkLCBgdGhpcy5fc3RyaW5nc2Agd2lsbCBiZSB1bmRlZmluZWQsIGFuZCB0aGVcbiAgICAgKiBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgd2l0aCBhIHNpbmdsZSB2YWx1ZSBhcmd1bWVudC4gSWYgdGhpcyBwYXJ0IGlzXG4gICAgICogbXVsdGktdmFsdWUsIGB0aGlzLl9zdHJpbmdzYCB3aWxsIGJlIGRlZmluZWQsIGFuZCB0aGUgbWV0aG9kIGlzIGNhbGxlZFxuICAgICAqIHdpdGggdGhlIHZhbHVlIGFycmF5IG9mIHRoZSBwYXJ0J3Mgb3duaW5nIFRlbXBsYXRlSW5zdGFuY2UsIGFuZCBhbiBvZmZzZXRcbiAgICAgKiBpbnRvIHRoZSB2YWx1ZSBhcnJheSBmcm9tIHdoaWNoIHRoZSB2YWx1ZXMgc2hvdWxkIGJlIHJlYWQuXG4gICAgICogVGhpcyBtZXRob2QgaXMgb3ZlcmxvYWRlZCB0aGlzIHdheSB0byBlbGltaW5hdGUgc2hvcnQtbGl2ZWQgYXJyYXkgc2xpY2VzXG4gICAgICogb2YgdGhlIHRlbXBsYXRlIGluc3RhbmNlIHZhbHVlcywgYW5kIGFsbG93IGEgZmFzdC1wYXRoIGZvciBzaW5nbGUtdmFsdWVkXG4gICAgICogcGFydHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHBhcnQgdmFsdWUsIG9yIGFuIGFycmF5IG9mIHZhbHVlcyBmb3IgbXVsdGktdmFsdWVkIHBhcnRzXG4gICAgICogQHBhcmFtIHZhbHVlSW5kZXggdGhlIGluZGV4IHRvIHN0YXJ0IHJlYWRpbmcgdmFsdWVzIGZyb20uIGB1bmRlZmluZWRgIGZvclxuICAgICAqICAgc2luZ2xlLXZhbHVlZCBwYXJ0c1xuICAgICAqIEBwYXJhbSBub0NvbW1pdCBjYXVzZXMgdGhlIHBhcnQgdG8gbm90IGNvbW1pdCBpdHMgdmFsdWUgdG8gdGhlIERPTS4gVXNlZFxuICAgICAqICAgaW4gaHlkcmF0aW9uIHRvIHByaW1lIGF0dHJpYnV0ZSBwYXJ0cyB3aXRoIHRoZWlyIGZpcnN0LXJlbmRlcmVkIHZhbHVlLFxuICAgICAqICAgYnV0IG5vdCBzZXQgdGhlIGF0dHJpYnV0ZSwgYW5kIGluIFNTUiB0byBuby1vcCB0aGUgRE9NIG9wZXJhdGlvbiBhbmRcbiAgICAgKiAgIGNhcHR1cmUgdGhlIHZhbHVlIGZvciBzZXJpYWxpemF0aW9uLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgXyRzZXRWYWx1ZSh2YWx1ZSwgZGlyZWN0aXZlUGFyZW50ID0gdGhpcywgdmFsdWVJbmRleCwgbm9Db21taXQpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5ncyA9IHRoaXMuc3RyaW5ncztcbiAgICAgICAgLy8gV2hldGhlciBhbnkgb2YgdGhlIHZhbHVlcyBoYXMgY2hhbmdlZCwgZm9yIGRpcnR5LWNoZWNraW5nXG4gICAgICAgIGxldCBjaGFuZ2UgPSBmYWxzZTtcbiAgICAgICAgaWYgKHN0cmluZ3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gU2luZ2xlLXZhbHVlIGJpbmRpbmcgY2FzZVxuICAgICAgICAgICAgdmFsdWUgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQsIDApO1xuICAgICAgICAgICAgY2hhbmdlID1cbiAgICAgICAgICAgICAgICAhaXNQcmltaXRpdmUodmFsdWUpIHx8XG4gICAgICAgICAgICAgICAgICAgICh2YWx1ZSAhPT0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlICYmIHZhbHVlICE9PSBub0NoYW5nZSk7XG4gICAgICAgICAgICBpZiAoY2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBJbnRlcnBvbGF0aW9uIGNhc2VcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHZhbHVlO1xuICAgICAgICAgICAgdmFsdWUgPSBzdHJpbmdzWzBdO1xuICAgICAgICAgICAgbGV0IGksIHY7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3RyaW5ncy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2ID0gcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZXNbdmFsdWVJbmRleCArIGldLCBkaXJlY3RpdmVQYXJlbnQsIGkpO1xuICAgICAgICAgICAgICAgIGlmICh2ID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgdXNlci1wcm92aWRlZCB2YWx1ZSBpcyBgbm9DaGFuZ2VgLCB1c2UgdGhlIHByZXZpb3VzIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIHYgPSB0aGlzLl8kY29tbWl0dGVkVmFsdWVbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoYW5nZSB8fCAoY2hhbmdlID0gIWlzUHJpbWl0aXZlKHYpIHx8IHYgIT09IHRoaXMuXyRjb21taXR0ZWRWYWx1ZVtpXSk7XG4gICAgICAgICAgICAgICAgaWYgKHYgPT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBub3RoaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSAhPT0gbm90aGluZykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSAodiAhPT0gbnVsbCAmJiB2ICE9PSB2b2lkIDAgPyB2IDogJycpICsgc3RyaW5nc1tpICsgMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFdlIGFsd2F5cyByZWNvcmQgZWFjaCB2YWx1ZSwgZXZlbiBpZiBvbmUgaXMgYG5vdGhpbmdgLCBmb3IgZnV0dXJlXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlIGRldGVjdGlvbi5cbiAgICAgICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWVbaV0gPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2UgJiYgIW5vQ29tbWl0KSB7XG4gICAgICAgICAgICB0aGlzLl9jb21taXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF9jb21taXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2FuaXRpemVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2FuaXRpemVyID0gc2FuaXRpemVyRmFjdG9yeUludGVybmFsKHRoaXMuZWxlbWVudCwgdGhpcy5uYW1lLCAnYXR0cmlidXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fc2FuaXRpemVyKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDAgPyB2YWx1ZSA6ICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCBhdHRyaWJ1dGUnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3cmFwKHRoaXMuZWxlbWVudCkuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgKHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDAgPyB2YWx1ZSA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBQcm9wZXJ0eVBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gUFJPUEVSVFlfUEFSVDtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF9jb21taXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAoRU5BQkxFX0VYVFJBX1NFQ1VSSVRZX0hPT0tTKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2FuaXRpemVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zYW5pdGl6ZXIgPSBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwodGhpcy5lbGVtZW50LCB0aGlzLm5hbWUsICdwcm9wZXJ0eScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl9zYW5pdGl6ZXIodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICBraW5kOiAnY29tbWl0IHByb3BlcnR5JyxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgdGhpcy5lbGVtZW50W3RoaXMubmFtZV0gPSB2YWx1ZSA9PT0gbm90aGluZyA/IHVuZGVmaW5lZCA6IHZhbHVlO1xuICAgIH1cbn1cbi8vIFRlbXBvcmFyeSB3b3JrYXJvdW5kIGZvciBodHRwczovL2NyYnVnLmNvbS85OTMyNjhcbi8vIEN1cnJlbnRseSwgYW55IGF0dHJpYnV0ZSBzdGFydGluZyB3aXRoIFwib25cIiBpcyBjb25zaWRlcmVkIHRvIGJlIGFcbi8vIFRydXN0ZWRTY3JpcHQgc291cmNlLiBTdWNoIGJvb2xlYW4gYXR0cmlidXRlcyBtdXN0IGJlIHNldCB0byB0aGUgZXF1aXZhbGVudFxuLy8gdHJ1c3RlZCBlbXB0eVNjcmlwdCB2YWx1ZS5cbmNvbnN0IGVtcHR5U3RyaW5nRm9yQm9vbGVhbkF0dHJpYnV0ZSA9IHRydXN0ZWRUeXBlc1xuICAgID8gdHJ1c3RlZFR5cGVzLmVtcHR5U2NyaXB0XG4gICAgOiAnJztcbmNsYXNzIEJvb2xlYW5BdHRyaWJ1dGVQYXJ0IGV4dGVuZHMgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IEJPT0xFQU5fQVRUUklCVVRFX1BBUlQ7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfY29tbWl0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgYm9vbGVhbiBhdHRyaWJ1dGUnLFxuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgdmFsdWU6ICEhKHZhbHVlICYmIHZhbHVlICE9PSBub3RoaW5nKSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSAhPT0gbm90aGluZykge1xuICAgICAgICAgICAgd3JhcCh0aGlzLmVsZW1lbnQpLnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsIGVtcHR5U3RyaW5nRm9yQm9vbGVhbkF0dHJpYnV0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3cmFwKHRoaXMuZWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKHRoaXMubmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBFdmVudFBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzLCBwYXJlbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudCwgbmFtZSwgc3RyaW5ncywgcGFyZW50LCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy50eXBlID0gRVZFTlRfUEFSVDtcbiAgICAgICAgaWYgKERFVl9NT0RFICYmIHRoaXMuc3RyaW5ncyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEEgXFxgPCR7ZWxlbWVudC5sb2NhbE5hbWV9PlxcYCBoYXMgYSBcXGBAJHtuYW1lfT0uLi5cXGAgbGlzdGVuZXIgd2l0aCBgICtcbiAgICAgICAgICAgICAgICAnaW52YWxpZCBjb250ZW50LiBFdmVudCBsaXN0ZW5lcnMgaW4gdGVtcGxhdGVzIG11c3QgaGF2ZSBleGFjdGx5ICcgK1xuICAgICAgICAgICAgICAgICdvbmUgZXhwcmVzc2lvbiBhbmQgbm8gc3Vycm91bmRpbmcgdGV4dC4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBFdmVudFBhcnQgZG9lcyBub3QgdXNlIHRoZSBiYXNlIF8kc2V0VmFsdWUvX3Jlc29sdmVWYWx1ZSBpbXBsZW1lbnRhdGlvblxuICAgIC8vIHNpbmNlIHRoZSBkaXJ0eSBjaGVja2luZyBpcyBtb3JlIGNvbXBsZXhcbiAgICAvKiogQGludGVybmFsICovXG4gICAgXyRzZXRWYWx1ZShuZXdMaXN0ZW5lciwgZGlyZWN0aXZlUGFyZW50ID0gdGhpcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIG5ld0xpc3RlbmVyID1cbiAgICAgICAgICAgIChfYSA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgbmV3TGlzdGVuZXIsIGRpcmVjdGl2ZVBhcmVudCwgMCkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG5vdGhpbmc7XG4gICAgICAgIGlmIChuZXdMaXN0ZW5lciA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbGRMaXN0ZW5lciA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZTtcbiAgICAgICAgLy8gSWYgdGhlIG5ldyB2YWx1ZSBpcyBub3RoaW5nIG9yIGFueSBvcHRpb25zIGNoYW5nZSB3ZSBoYXZlIHRvIHJlbW92ZSB0aGVcbiAgICAgICAgLy8gcGFydCBhcyBhIGxpc3RlbmVyLlxuICAgICAgICBjb25zdCBzaG91bGRSZW1vdmVMaXN0ZW5lciA9IChuZXdMaXN0ZW5lciA9PT0gbm90aGluZyAmJiBvbGRMaXN0ZW5lciAhPT0gbm90aGluZykgfHxcbiAgICAgICAgICAgIG5ld0xpc3RlbmVyLmNhcHR1cmUgIT09XG4gICAgICAgICAgICAgICAgb2xkTGlzdGVuZXIuY2FwdHVyZSB8fFxuICAgICAgICAgICAgbmV3TGlzdGVuZXIub25jZSAhPT1cbiAgICAgICAgICAgICAgICBvbGRMaXN0ZW5lci5vbmNlIHx8XG4gICAgICAgICAgICBuZXdMaXN0ZW5lci5wYXNzaXZlICE9PVxuICAgICAgICAgICAgICAgIG9sZExpc3RlbmVyLnBhc3NpdmU7XG4gICAgICAgIC8vIElmIHRoZSBuZXcgdmFsdWUgaXMgbm90IG5vdGhpbmcgYW5kIHdlIHJlbW92ZWQgdGhlIGxpc3RlbmVyLCB3ZSBoYXZlXG4gICAgICAgIC8vIHRvIGFkZCB0aGUgcGFydCBhcyBhIGxpc3RlbmVyLlxuICAgICAgICBjb25zdCBzaG91bGRBZGRMaXN0ZW5lciA9IG5ld0xpc3RlbmVyICE9PSBub3RoaW5nICYmXG4gICAgICAgICAgICAob2xkTGlzdGVuZXIgPT09IG5vdGhpbmcgfHwgc2hvdWxkUmVtb3ZlTGlzdGVuZXIpO1xuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAga2luZDogJ2NvbW1pdCBldmVudCBsaXN0ZW5lcicsXG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogbmV3TGlzdGVuZXIsXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICByZW1vdmVMaXN0ZW5lcjogc2hvdWxkUmVtb3ZlTGlzdGVuZXIsXG4gICAgICAgICAgICBhZGRMaXN0ZW5lcjogc2hvdWxkQWRkTGlzdGVuZXIsXG4gICAgICAgICAgICBvbGRMaXN0ZW5lcixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChzaG91bGRSZW1vdmVMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLCBvbGRMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZEFkZExpc3RlbmVyKSB7XG4gICAgICAgICAgICAvLyBCZXdhcmU6IElFMTEgYW5kIENocm9tZSA0MSBkb24ndCBsaWtlIHVzaW5nIHRoZSBsaXN0ZW5lciBhcyB0aGVcbiAgICAgICAgICAgIC8vIG9wdGlvbnMgb2JqZWN0LiBGaWd1cmUgb3V0IGhvdyB0byBkZWFsIHcvIHRoaXMgaW4gSUUxMSAtIG1heWJlXG4gICAgICAgICAgICAvLyBwYXRjaCBhZGRFdmVudExpc3RlbmVyP1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLCB0aGlzLCBuZXdMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbmV3TGlzdGVuZXI7XG4gICAgfVxuICAgIGhhbmRsZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUuY2FsbCgoX2IgPSAoX2EgPSB0aGlzLm9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ob3N0KSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB0aGlzLmVsZW1lbnQsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBFbGVtZW50UGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgcGFyZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMudHlwZSA9IEVMRU1FTlRfUEFSVDtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl8kZGlzY29ubmVjdGFibGVDaGlsZHJlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgLy8gU2VlIGNvbW1lbnQgaW4gRGlzY29ubmVjdGFibGUgaW50ZXJmYWNlIGZvciB3aHkgdGhpcyBpcyBhIGdldHRlclxuICAgIGdldCBfJGlzQ29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJHBhcmVudC5fJGlzQ29ubmVjdGVkO1xuICAgIH1cbiAgICBfJHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICBraW5kOiAnY29tbWl0IHRvIGVsZW1lbnQgYmluZGluZycsXG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc29sdmVEaXJlY3RpdmUodGhpcywgdmFsdWUpO1xuICAgIH1cbn1cbi8qKlxuICogRU5EIFVTRVJTIFNIT1VMRCBOT1QgUkVMWSBPTiBUSElTIE9CSkVDVC5cbiAqXG4gKiBQcml2YXRlIGV4cG9ydHMgZm9yIHVzZSBieSBvdGhlciBMaXQgcGFja2FnZXMsIG5vdCBpbnRlbmRlZCBmb3IgdXNlIGJ5XG4gKiBleHRlcm5hbCB1c2Vycy5cbiAqXG4gKiBXZSBjdXJyZW50bHkgZG8gbm90IG1ha2UgYSBtYW5nbGVkIHJvbGx1cCBidWlsZCBvZiB0aGUgbGl0LXNzciBjb2RlLiBJbiBvcmRlclxuICogdG8ga2VlcCBhIG51bWJlciBvZiAob3RoZXJ3aXNlIHByaXZhdGUpIHRvcC1sZXZlbCBleHBvcnRzICBtYW5nbGVkIGluIHRoZVxuICogY2xpZW50IHNpZGUgY29kZSwgd2UgZXhwb3J0IGEgXyRMSCBvYmplY3QgY29udGFpbmluZyB0aG9zZSBtZW1iZXJzIChvclxuICogaGVscGVyIG1ldGhvZHMgZm9yIGFjY2Vzc2luZyBwcml2YXRlIGZpZWxkcyBvZiB0aG9zZSBtZW1iZXJzKSwgYW5kIHRoZW5cbiAqIHJlLWV4cG9ydCB0aGVtIGZvciB1c2UgaW4gbGl0LXNzci4gVGhpcyBrZWVwcyBsaXQtc3NyIGFnbm9zdGljIHRvIHdoZXRoZXIgdGhlXG4gKiBjbGllbnQtc2lkZSBjb2RlIGlzIGJlaW5nIHVzZWQgaW4gYGRldmAgbW9kZSBvciBgcHJvZGAgbW9kZS5cbiAqXG4gKiBUaGlzIGhhcyBhIHVuaXF1ZSBuYW1lLCB0byBkaXNhbWJpZ3VhdGUgaXQgZnJvbSBwcml2YXRlIGV4cG9ydHMgaW5cbiAqIGxpdC1lbGVtZW50LCB3aGljaCByZS1leHBvcnRzIGFsbCBvZiBsaXQtaHRtbC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgXyRMSCA9IHtcbiAgICAvLyBVc2VkIGluIGxpdC1zc3JcbiAgICBfYm91bmRBdHRyaWJ1dGVTdWZmaXg6IGJvdW5kQXR0cmlidXRlU3VmZml4LFxuICAgIF9tYXJrZXI6IG1hcmtlcixcbiAgICBfbWFya2VyTWF0Y2g6IG1hcmtlck1hdGNoLFxuICAgIF9IVE1MX1JFU1VMVDogSFRNTF9SRVNVTFQsXG4gICAgX2dldFRlbXBsYXRlSHRtbDogZ2V0VGVtcGxhdGVIdG1sLFxuICAgIC8vIFVzZWQgaW4gaHlkcmF0ZVxuICAgIF9UZW1wbGF0ZUluc3RhbmNlOiBUZW1wbGF0ZUluc3RhbmNlLFxuICAgIF9pc0l0ZXJhYmxlOiBpc0l0ZXJhYmxlLFxuICAgIF9yZXNvbHZlRGlyZWN0aXZlOiByZXNvbHZlRGlyZWN0aXZlLFxuICAgIC8vIFVzZWQgaW4gdGVzdHMgYW5kIHByaXZhdGUtc3NyLXN1cHBvcnRcbiAgICBfQ2hpbGRQYXJ0OiBDaGlsZFBhcnQsXG4gICAgX0F0dHJpYnV0ZVBhcnQ6IEF0dHJpYnV0ZVBhcnQsXG4gICAgX0Jvb2xlYW5BdHRyaWJ1dGVQYXJ0OiBCb29sZWFuQXR0cmlidXRlUGFydCxcbiAgICBfRXZlbnRQYXJ0OiBFdmVudFBhcnQsXG4gICAgX1Byb3BlcnR5UGFydDogUHJvcGVydHlQYXJ0LFxuICAgIF9FbGVtZW50UGFydDogRWxlbWVudFBhcnQsXG59O1xuLy8gQXBwbHkgcG9seWZpbGxzIGlmIGF2YWlsYWJsZVxuY29uc3QgcG9seWZpbGxTdXBwb3J0ID0gREVWX01PREVcbiAgICA/IGdsb2JhbC5saXRIdG1sUG9seWZpbGxTdXBwb3J0RGV2TW9kZVxuICAgIDogZ2xvYmFsLmxpdEh0bWxQb2x5ZmlsbFN1cHBvcnQ7XG5wb2x5ZmlsbFN1cHBvcnQgPT09IG51bGwgfHwgcG9seWZpbGxTdXBwb3J0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwb2x5ZmlsbFN1cHBvcnQoVGVtcGxhdGUsIENoaWxkUGFydCk7XG4vLyBJTVBPUlRBTlQ6IGRvIG5vdCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgb3IgdGhlIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbi8vIFRoaXMgbGluZSB3aWxsIGJlIHVzZWQgaW4gcmVnZXhlcyB0byBzZWFyY2ggZm9yIGxpdC1odG1sIHVzYWdlLlxuKChfZCA9IGdsb2JhbC5saXRIdG1sVmVyc2lvbnMpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IChnbG9iYWwubGl0SHRtbFZlcnNpb25zID0gW10pKS5wdXNoKCcyLjYuMScpO1xuaWYgKERFVl9NT0RFICYmIGdsb2JhbC5saXRIdG1sVmVyc2lvbnMubGVuZ3RoID4gMSkge1xuICAgIGlzc3VlV2FybmluZygnbXVsdGlwbGUtdmVyc2lvbnMnLCBgTXVsdGlwbGUgdmVyc2lvbnMgb2YgTGl0IGxvYWRlZC4gYCArXG4gICAgICAgIGBMb2FkaW5nIG11bHRpcGxlIHZlcnNpb25zIGlzIG5vdCByZWNvbW1lbmRlZC5gKTtcbn1cbi8qKlxuICogUmVuZGVycyBhIHZhbHVlLCB1c3VhbGx5IGEgbGl0LWh0bWwgVGVtcGxhdGVSZXN1bHQsIHRvIHRoZSBjb250YWluZXIuXG4gKlxuICogVGhpcyBleGFtcGxlIHJlbmRlcnMgdGhlIHRleHQgXCJIZWxsbywgWm9lIVwiIGluc2lkZSBhIHBhcmFncmFwaCB0YWcsIGFwcGVuZGluZ1xuICogaXQgdG8gdGhlIGNvbnRhaW5lciBgZG9jdW1lbnQuYm9keWAuXG4gKlxuICogYGBganNcbiAqIGltcG9ydCB7aHRtbCwgcmVuZGVyfSBmcm9tICdsaXQnO1xuICpcbiAqIGNvbnN0IG5hbWUgPSBcIlpvZVwiO1xuICogcmVuZGVyKGh0bWxgPHA+SGVsbG8sICR7bmFtZX0hPC9wPmAsIGRvY3VtZW50LmJvZHkpO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHZhbHVlIEFueSBbcmVuZGVyYWJsZVxuICogICB2YWx1ZV0oaHR0cHM6Ly9saXQuZGV2L2RvY3MvdGVtcGxhdGVzL2V4cHJlc3Npb25zLyNjaGlsZC1leHByZXNzaW9ucyksXG4gKiAgIHR5cGljYWxseSBhIHtAbGlua2NvZGUgVGVtcGxhdGVSZXN1bHR9IGNyZWF0ZWQgYnkgZXZhbHVhdGluZyBhIHRlbXBsYXRlIHRhZ1xuICogICBsaWtlIHtAbGlua2NvZGUgaHRtbH0gb3Ige0BsaW5rY29kZSBzdmd9LlxuICogQHBhcmFtIGNvbnRhaW5lciBBIERPTSBjb250YWluZXIgdG8gcmVuZGVyIHRvLiBUaGUgZmlyc3QgcmVuZGVyIHdpbGwgYXBwZW5kXG4gKiAgIHRoZSByZW5kZXJlZCB2YWx1ZSB0byB0aGUgY29udGFpbmVyLCBhbmQgc3Vic2VxdWVudCByZW5kZXJzIHdpbGxcbiAqICAgZWZmaWNpZW50bHkgdXBkYXRlIHRoZSByZW5kZXJlZCB2YWx1ZSBpZiB0aGUgc2FtZSByZXN1bHQgdHlwZSB3YXNcbiAqICAgcHJldmlvdXNseSByZW5kZXJlZCB0aGVyZS5cbiAqIEBwYXJhbSBvcHRpb25zIFNlZSB7QGxpbmtjb2RlIFJlbmRlck9wdGlvbnN9IGZvciBvcHRpb25zIGRvY3VtZW50YXRpb24uXG4gKiBAc2VlXG4gKiB7QGxpbmsgaHR0cHM6Ly9saXQuZGV2L2RvY3MvbGlicmFyaWVzL3N0YW5kYWxvbmUtdGVtcGxhdGVzLyNyZW5kZXJpbmctbGl0LWh0bWwtdGVtcGxhdGVzfCBSZW5kZXJpbmcgTGl0IEhUTUwgVGVtcGxhdGVzfVxuICovXG5leHBvcnQgY29uc3QgcmVuZGVyID0gKHZhbHVlLCBjb250YWluZXIsIG9wdGlvbnMpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGlmIChERVZfTU9ERSAmJiBjb250YWluZXIgPT0gbnVsbCkge1xuICAgICAgICAvLyBHaXZlIGEgY2xlYXJlciBlcnJvciBtZXNzYWdlIHRoYW5cbiAgICAgICAgLy8gICAgIFVuY2F1Z2h0IFR5cGVFcnJvcjogQ2Fubm90IHJlYWQgcHJvcGVydGllcyBvZiBudWxsIChyZWFkaW5nXG4gICAgICAgIC8vICAgICAnXyRsaXRQYXJ0JCcpXG4gICAgICAgIC8vIHdoaWNoIHJlYWRzIGxpa2UgYW4gaW50ZXJuYWwgTGl0IGVycm9yLlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgY29udGFpbmVyIHRvIHJlbmRlciBpbnRvIG1heSBub3QgYmUgJHtjb250YWluZXJ9YCk7XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlcklkID0gREVWX01PREUgPyBkZWJ1Z0xvZ1JlbmRlcklkKysgOiAwO1xuICAgIGNvbnN0IHBhcnRPd25lck5vZGUgPSAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucmVuZGVyQmVmb3JlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBjb250YWluZXI7XG4gICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIGxldCBwYXJ0ID0gcGFydE93bmVyTm9kZVsnXyRsaXRQYXJ0JCddO1xuICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgIGtpbmQ6ICdiZWdpbiByZW5kZXInLFxuICAgICAgICBpZDogcmVuZGVySWQsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIHBhcnQsXG4gICAgfSk7XG4gICAgaWYgKHBhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBlbmROb2RlID0gKF9iID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnJlbmRlckJlZm9yZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogbnVsbDtcbiAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgcGFydE93bmVyTm9kZVsnXyRsaXRQYXJ0JCddID0gcGFydCA9IG5ldyBDaGlsZFBhcnQoY29udGFpbmVyLmluc2VydEJlZm9yZShjcmVhdGVNYXJrZXIoKSwgZW5kTm9kZSksIGVuZE5vZGUsIHVuZGVmaW5lZCwgb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgPyBvcHRpb25zIDoge30pO1xuICAgIH1cbiAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWUpO1xuICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgIGtpbmQ6ICdlbmQgcmVuZGVyJyxcbiAgICAgICAgaWQ6IHJlbmRlcklkLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBwYXJ0LFxuICAgIH0pO1xuICAgIHJldHVybiBwYXJ0O1xufTtcbmlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICByZW5kZXIuc2V0U2FuaXRpemVyID0gc2V0U2FuaXRpemVyO1xuICAgIHJlbmRlci5jcmVhdGVTYW5pdGl6ZXIgPSBjcmVhdGVTYW5pdGl6ZXI7XG4gICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgIHJlbmRlci5fdGVzdE9ubHlDbGVhclNhbml0aXplckZhY3RvcnlEb05vdENhbGxPckVsc2UgPVxuICAgICAgICAgICAgX3Rlc3RPbmx5Q2xlYXJTYW5pdGl6ZXJGYWN0b3J5RG9Ob3RDYWxsT3JFbHNlO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1odG1sLmpzLm1hcCIsImltcG9ydFwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50XCI7aW1wb3J0XCJsaXQtaHRtbFwiO2V4cG9ydCpmcm9tXCJsaXQtZWxlbWVudC9saXQtZWxlbWVudC5qc1wiO2V4cG9ydCpmcm9tXCJsaXQtaHRtbC9pcy1zZXJ2ZXIuanNcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgY3NzLCBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IGNsYXNzbmFtZXMgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL2NsYXNzbmFtZXMuanMnO1xuXG5leHBvcnQgY2xhc3MgV0J1dHRvbiBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ucHJpbWFyeSB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ucHJpbWFyeTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWhvdmVyLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbi5zZWNvbmRhcnkge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbi5zZWNvbmRhcnk6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWhvdmVyLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbi50ZXJ0aWFyeSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uLnRlcnRpYXJ5OmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24uZGFuZ2VyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhbmdlci1jb2xvcik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXItY29sb3IpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24uZGFuZ2VyOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlci1ob3Zlci1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24uZ2hvc3Qge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbi5naG9zdDpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYS1ob3Zlci1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24uc20ge1xuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDNyZW0gMC41cmVtIDAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbi5tZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gM3JlbSAwLjdyZW0gMC43cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uLmxnIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gM3JlbSAxcmVtIDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ueGwge1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAzcmVtIDJyZW0gMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbi5ibG9jayB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjpkaXNhYmxlZCxcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW11dGVkLWNvbG9yKTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW11dGVkLWNvbG9yKTtcbiAgICAgICAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgICAgfVxuICAgIGA7XG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgbGFiZWw6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgICAgIGtpbmQ6IHsgdHlwZTogU3RyaW5nIH0sIC8vIG9wdGlvbnM6ICdwcmltYXJ5JywgJ3NlY29uZGFyeScsICd0ZXJ0aWFyeScsICdkYW5nZXInLCAnZ2hvc3QnXG4gICAgICAgIHNpemU6IHsgdHlwZTogU3RyaW5nIH0sIC8vIG9wdGlvbnM6ICdtZCcsICdzbScsICdtZCcsICdsZycsICd4bCdcbiAgICAgICAgZGlzYWJsZWQ6IHsgdHlwZTogQm9vbGVhbiB9LFxuICAgICAgICBibG9jazogeyB0eXBlOiBCb29sZWFuIH1cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGFiZWwgPSBcIkNsaWNrIG1lIVwiO1xuICAgICAgICB0aGlzLmtpbmQgPSBcInByaW1hcnlcIjtcbiAgICAgICAgdGhpcy5zaXplID0gXCJtZFwiO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmxvY2sgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICBjbGFzcz0ke2NsYXNzbmFtZXMoeyBbdGhpcy5raW5kXTogIXRoaXMuZGlzYWJsZWQsIFt0aGlzLnNpemVdOiB0cnVlLCBcImJsb2NrXCI6IHRoaXMuYmxvY2ssIFwiZGlzYWJsZWRcIjogdGhpcy5kaXNhYmxlZCB9KX0gXG4gICAgICAgICAgICAgICAgP2Rpc2FibGVkPSR7dGhpcy5kaXNhYmxlZH0+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5sYWJlbH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBgO1xuICAgIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctYnV0dG9uJywgV0J1dHRvbik7IiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgY3NzLCBodG1sIH0gZnJvbSAnbGl0JztcblxuXG5leHBvcnQgY2xhc3MgV0NvZGUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgICAgIC5zaXplLTEwMCB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIGA7XG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgaXM6IHsgXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBoZWxwOiBcIlRoZSB0eXBlIG9mIHRoZSB0YWcuIFBvc3NpYmxlIHZhbHVlcyBhcmUgYGgxYCwgYGgyYCwgYGgzYCwgYGg0YCwgYGg1YCBvciBgaDZgLiBEZWZhdWx0IGlzIGBoMWAuXCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pcyA9IFwiaDFcIjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYDxjb2RlPjxzbG90Pjwvc2xvdD48L2NvZGU+YDtcbiAgICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd3LWNvZGUnLCBXQ29kZSk7IiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgY3NzLCBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IGNsYXNzbmFtZXMgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL2NsYXNzbmFtZXMuanMnO1xuXG5cbmV4cG9ydCBjbGFzcyBXSGVhZGluZyBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAgICAgLnNpemUtMTAwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1oZWFkaW5nLS1zaXplLTEwMC0tZm9udC1zaXplKTtcbiAgICAgICAgICAgIG1hcmdpbjogdmFyKC0tdy1oZWFkaW5nLS1zaXplLTEwMC0tbWFyZ2luLXRvcCkgMCAwIDA7XG4gICAgICAgIH1cblxuICAgICAgICAuc2l6ZS0yMDAge1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS13LWhlYWRpbmctLXNpemUtMjAwLS1mb250LXNpemUpO1xuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS13LWhlYWRpbmctLXNpemUtMjAwLS1tYXJnaW4tdG9wKSAwIDAgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaXplLTMwMCB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXctaGVhZGluZy0tc2l6ZS0zMDAtLWZvbnQtc2l6ZSk7XG4gICAgICAgICAgICBtYXJnaW46IHZhcigtLXctaGVhZGluZy0tc2l6ZS0zMDAtLW1hcmdpbi10b3ApIDAgMCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpemUtNDAwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1oZWFkaW5nLS1zaXplLTQwMC0tZm9udC1zaXplKTtcbiAgICAgICAgICAgIG1hcmdpbjogdmFyKC0tdy1oZWFkaW5nLS1zaXplLTQwMC0tbWFyZ2luLXRvcCkgMCAwIDA7XG4gICAgICAgIH1cblxuICAgICAgICAuc2l6ZS01MDAge1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS13LWhlYWRpbmctLXNpemUtNTAwLS1mb250LXNpemUpO1xuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS13LWhlYWRpbmctLXNpemUtNTAwLS1tYXJnaW4tdG9wKSAwIDAgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaXplLTYwMCB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXctaGVhZGluZy0tc2l6ZS02MDAtLWZvbnQtc2l6ZSk7XG4gICAgICAgICAgICBtYXJnaW46IHZhcigtLXctaGVhZGluZy0tc2l6ZS02MDAtLW1hcmdpbi10b3ApIDAgMCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpemUtNzAwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1oZWFkaW5nLS1zaXplLTcwMC0tZm9udC1zaXplKTtcbiAgICAgICAgICAgIG1hcmdpbjogdmFyKC0tdy1oZWFkaW5nLS1zaXplLTcwMC0tbWFyZ2luLXRvcCkgMCAwIDA7XG4gICAgICAgIH1cblxuICAgICAgICAuc2l6ZS04MDAge1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS13LWhlYWRpbmctLXNpemUtODAwLS1mb250LXNpemUpO1xuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS13LWhlYWRpbmctLXNpemUtODAwLS1tYXJnaW4tdG9wKSAwIDAgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaXplLTkwMCB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXctaGVhZGluZy0tc2l6ZS05MDAtLWZvbnQtc2l6ZSk7XG4gICAgICAgICAgICBtYXJnaW46IHZhcigtLXctaGVhZGluZy0tc2l6ZS05MDAtLW1hcmdpbi10b3ApIDAgMCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaDUge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctbXV0ZWQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBoNiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tdy1mb250LXdlaWdodC10ZXh0LXJlZ3VsYXIpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctbXV0ZWQtY29sb3IpO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIGA7XG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgaXM6IHsgXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBoZWxwOiBcIlRoZSB0eXBlIG9mIHRoZSB0YWcuIFBvc3NpYmxlIHZhbHVlcyBhcmUgYGgxYCwgYGgyYCwgYGgzYCwgYGg0YCwgYGg1YCBvciBgaDZgLiBEZWZhdWx0IGlzIGBoMWAuXCJcbiAgICAgICAgfSxcblxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBoZWxwOiBcIlRoZSBzaXplIG9mIHRoZSBoZWFkaW5nLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGAxMDBgLCBgMjAwYCwgYDMwMGAsIGA0MDBgLCBgNTAwYCwgYDYwMGAsIGA4MDBgLCBvciBgOTAwYC4gSWYgbm90IHNldCwgdGhlIHNpemUgd2lsbCBiZSBkZXJpdmVkIGJhc2VkIG9uIGBpc2AuXCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pcyA9IFwiaDFcIjtcbiAgICB9XG5cbiAgICBfZ2V0Q2FsY3VsYXRlZFNpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNpemUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNpemU7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pcyA9PSBcImgxXCIpIHtcbiAgICAgICAgICAgIHJldHVybiA4MDA7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pcyA9PSBcImgyXCIpIHtcbiAgICAgICAgICAgIHJldHVybiA2MDA7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pcyA9PSBcImgzXCIpIHtcbiAgICAgICAgICAgIHJldHVybiA1MDA7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pcyA9PSBcImg0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiA0MDA7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pcyA9PSBcImg1XCIpIHtcbiAgICAgICAgICAgIHJldHVybiA0MDA7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pcyA9PSBcImg2XCIpIHtcbiAgICAgICAgICAgIHJldHVybiA0MDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gNDAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLmlzKTtcbiAgICAgICAgaGVhZGluZy5jbGFzc05hbWUgPSBjbGFzc25hbWVzKHsgW1wic2l6ZS1cIiArIHRoaXMuX2dldENhbGN1bGF0ZWRTaXplKCldOiB0cnVlIH0pO1xuICAgICAgICBoZWFkaW5nLmlubmVySFRNTCA9IFwiPHNsb3Q+PC9zbG90PlwiO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGhlYWRpbmc7XG4gICAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndy1oZWFkaW5nJywgV0hlYWRpbmcpOyIsImltcG9ydCB7IExpdEVsZW1lbnQsIGNzcyB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBtYXJrZG93biB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvbWFya2Rvd24uanMnO1xuaW1wb3J0IHsgZGVkZW50IH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy9kZWRlbnQuanMnO1xuXG5cbmV4cG9ydCBjbGFzcyBXTWFya2Rvd24gZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QgOmZpcnN0LWNoaWxkIHsgXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QgOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbc3BhY2luZz1cInNcIl0pIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXctbWFya2Rvd24tLXNwYWNpbmctcy0tbWFyZ2luLXRvcCk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS13LW1hcmtkb3duLS1zcGFjaW5nLXMtLW1hcmdpbi1ib3R0b20pO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICogSGVhZGluZ3NcbiAgICAgICAgICovXG4gICAgICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgICAgICAgICAgbWFyZ2luOiAxLjJlbSAwIDFlbSAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtODAwKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS13LWZvbnQtd2VpZ2h0LXRleHQtc2VtaWJvbGQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNjAwKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS13LWZvbnQtd2VpZ2h0LXRleHQtc2VtaWJvbGQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNTAwKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS13LWZvbnQtd2VpZ2h0LXRleHQtc2VtaWJvbGQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBoNCB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNDAwKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS13LWZvbnQtd2VpZ2h0LXRleHQtc2VtaWJvbGQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBoNSB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNDAwKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS13LWZvbnQtd2VpZ2h0LXRleHQtc2VtaWJvbGQpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctbXV0ZWQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBoNiB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNDAwKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS13LWZvbnQtd2VpZ2h0LXRleHQtcmVndWxhcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy1tdXRlZC1jb2xvcik7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgKiBUZXh0IGNvbnRlbnRcbiAgICAgICAgICovXG4gICAgICAgIHAge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb2RlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS13LWZvbnQtZmFtaWx5LW1vbm8pO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtbW9uby1yZWd1bGFyKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtbW9uby00MDApO1xuICAgICAgICBcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvci02MDApO1xuICAgICAgICAgICAgcGFkZGluZzogMCB2YXIoLS13LXNwYWNpbmctMTAwKTtcblxuICAgICAgICAgICAgYm9yZGVyOiB2YXIoLS13LWJvcmRlci13aWR0aC0tdGhpbikgc29saWQgdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTgwMCk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS13LWJvcmRlci1yYWRpdXMtMTAwKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc2VjdGlvbiA6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuICAgIGA7XG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgc3BhY2luZzoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJUaGUgdmVydGljYWwgc3BhY2luZyBvZiB0aGUgbWFya2Rvd24gYmxvY2suIFBvc3NpYmxlIHZhbHVlcyBhcmUgYG5vbmVgIGFuZCBgc2AuXCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zcGFjaW5nID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3cmFwcGVyLmlubmVySFRNTD0gbWFya2Rvd24oZGVkZW50KHRoaXMuaW5uZXJIVE1MKS5yZXBsYWNlKC88XFwhLS0uKj8tLT4vZywgXCJcIikpO1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh3cmFwcGVyLmNoaWxkTm9kZXMpO1xuICAgIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctbWFya2Rvd24nLCBXTWFya2Rvd24pOyIsImltcG9ydCB7IExpdEVsZW1lbnQsIGNzcywgaHRtbCB9IGZyb20gJ2xpdCc7XG5cbmV4cG9ydCBjbGFzcyBXUGFuZSBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS13LXBhbmUtLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgOmhvc3QoW3NwYWNpbmc9XCJzXCJdKSB7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS13LXBhbmUtLXNwYWNpbmctcy0tcGFkZGluZyk7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbc3BhY2luZz1cIm1cIl0pIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXctcGFuZS0tc3BhY2luZy1zLS1wYWRkaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtlbGV2YXRpb249XCI1MDBcIl0pIHtcbiAgICAgICAgICAgIGJvcmRlcjogdmFyKC0tdy1wYW5lLS1lbGV2YXRpb24tNTAwLS1ib3JkZXItd2lkdGgpIHNvbGlkIHZhcigtLXctcGFuZS0tZWxldmF0aW9uLTUwMC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgfVxuICAgIGA7XG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgZWxldmF0aW9uOiB7IFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgaGVscDogXCJJbmRpY2F0ZXMgaG93IG11Y2ggdGhlIHBhbmUgc2hvdWxkIGxvb2sgJ2VsZXZhdGVkJy4gUG9zc2libGUgdmFsdWVzIGFyZSBgNDAwYCwgYDUwMGAgYW5kIGA2MDBgLiBEZWZhdWx0IGlzIGA1MDBgIHdoaWNoIG1lYW5zIG5vIGVsZXZhdGlvbi5cIlxuICAgICAgICB9LFxuXG4gICAgICAgIHNwYWNpbmc6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGhlbHA6IFwiVGhlIHNwYWNpbmcgb2YgdGhlIGlubmVyIGNvbnRlbnQgdG8gdGhlIGJvcmRlciBvZiB0aGUgcGFuZSAocGFkZGluZykuIFBvc3NpYmxlIHZhbHVlcyBhcmUgYG5vbmVgLCBgc2AgYW5kIGBtYC5cIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxldmF0aW9uID0gNTAwO1xuICAgICAgICB0aGlzLnNwYWNpbmcgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICBgO1xuICAgIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctcGFuZScsIFdQYW5lKTsiLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBjc3MsIGh0bWwgfSBmcm9tICdsaXQnO1xuXG5cbmV4cG9ydCBjbGFzcyBXUGFyYWdyYXBoIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICAgICAuc2l6ZS0xMDAge1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICBgO1xuXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgICAgIGlzOiB7IFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJUaGUgdHlwZSBvZiB0aGUgdGFnLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGBoMWAsIGBoMmAsIGBoM2AsIGBoNGAsIGBoNWAgb3IgYGg2YC4gRGVmYXVsdCBpcyBgaDFgLlwiXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXMgPSBcImgxXCI7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGA8cD48c2xvdD48L3Nsb3Q+PC9wPmA7XG4gICAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndy1wJywgV1BhcmFncmFwaCk7IiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgY3NzLCBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IGRlZGVudCB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvZGVkZW50LmpzJztcblxuZXhwb3J0IGNsYXNzIFdQcmUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1wcmUtLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXctcHJlLS1wYWRkaW5nKTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS13LXByZS0tZm9udC1mYW1pbHkpO1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS13LXByZS0tZm9udC1zaXplKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13LXByZS0tY29sb3IpO1xuXG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICBgXG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJBdHRyaWJ1dGUgdG8gcGFzcyB0aGUgY29udGVudCBvZiB0aGUgYXR0cmlidXRlXCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSB0aGlzLmNvbnRlbnQgPyB0aGlzLmNvbnRlbnQgOiB0aGlzLmlubmVySFRNTDtcbiAgICAgICAgY29udGVudCA9IGRlZGVudChjb250ZW50KTtcblxuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxwcmU+PGNvZGU+JHtjb250ZW50fTwvY29kZT48L3ByZT5cbiAgICAgICAgYFxuICAgIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctcHJlJywgV1ByZSk7IiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgY3NzLCBodG1sIH0gZnJvbSAnbGl0JztcblxuXG5leHBvcnQgY2xhc3MgV1RhYnMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLXctdGFicy0tYm9yZGVyLWJvdHRvbS13aWR0aCkgc29saWQgdmFyKC0tdy10YWJzLS1jb250cmFzdC0tYm9yZGVyLWJvdHRvbS1jb2xvcik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXRhYnMtLWNvbnRyYXN0LS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0IDo6c2xvdHRlZCh3LXRhYikge1xuICAgICAgICAgICAgLS13LXRhYi0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWhvdmVyLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXRhYnMtLWNvbnRyYXN0LS10YWItLWhvdmVyLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXctdGFicy0tY29udHJhc3QtLXRhYi0tYm9yZGVyLWJvdHRvbS1jb2xvcik7XG4gICAgICAgICAgICAtLXctdGFiLS1ib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLXctdGFicy0tY29udHJhc3QtLXRhYi0tYm9yZGVyLXJpZ2h0LWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWNvbG9yOiB2YXIoLS13LXRhYnMtLWNvbnRyYXN0LS10YWItLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWhvdmVyLS1jb2xvcjogdmFyKC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1ob3Zlci0tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QgOjpzbG90dGVkKHctdGFiW2FjdGl2ZV0pIHtcbiAgICAgICAgICAgIC0tdy10YWItLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctdGFicy0tY29udHJhc3QtLXRhYi0tYWN0aXZlLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXctdGFicy0tY29udHJhc3QtLXRhYi0tYWN0aXZlLS1ib3JkZXItYm90dG9tLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWhvdmVyLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXRhYnMtLWNvbnRyYXN0LS10YWItLWFjdGl2ZS0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICAtLXctdGFiLS1jb2xvcjogdmFyKC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1hY3RpdmUtLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWhvdmVyLS1jb2xvcjogdmFyKC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1hY3RpdmUtLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFthcHBlYXJhbmNlPVwibGlnaHQtY29udHJhc3RcIl0pIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLXctdGFicy0tYm9yZGVyLWJvdHRvbS13aWR0aCkgc29saWQgdmFyKC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tYm9yZGVyLWJvdHRvbS1jb2xvcik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFthcHBlYXJhbmNlPVwibGlnaHQtY29udHJhc3RcIl0pIDo6c2xvdHRlZCh3LXRhYikge1xuICAgICAgICAgICAgLS13LXRhYi0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWhvdmVyLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS10YWItLWhvdmVyLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLXRhYi0tYm9yZGVyLWJvdHRvbS1jb2xvcik7XG4gICAgICAgICAgICAtLXctdGFiLS1ib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLXRhYi0tYm9yZGVyLXJpZ2h0LWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWNvbG9yOiB2YXIoLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS10YWItLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWhvdmVyLS1jb2xvcjogdmFyKC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1ob3Zlci0tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2FwcGVhcmFuY2U9XCJsaWdodC1jb250cmFzdFwiXSkgOjpzbG90dGVkKHctdGFiW2FjdGl2ZV0pIHtcbiAgICAgICAgICAgIC0tdy10YWItLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLXRhYi0tYWN0aXZlLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLXRhYi0tYWN0aXZlLS1ib3JkZXItYm90dG9tLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWhvdmVyLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS10YWItLWFjdGl2ZS0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICAtLXctdGFiLS1jb2xvcjogdmFyKC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1hY3RpdmUtLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWhvdmVyLS1jb2xvcjogdmFyKC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1hY3RpdmUtLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFthcHBlYXJhbmNlPVwic2hhZGVkXCJdKSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiB2YXIoLS13LXRhYnMtLWJvcmRlci1ib3R0b20td2lkdGgpIHNvbGlkIHZhcigtLXctdGFicy0tc2hhZGVkLS1ib3JkZXItYm90dG9tLWNvbG9yKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXctdGFicy0tc2hhZGVkLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgOmhvc3QoW2FwcGVhcmFuY2U9XCJzaGFkZWRcIl0pIDo6c2xvdHRlZCh3LXRhYikge1xuICAgICAgICAgICAgLS13LXRhYi0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy10YWJzLS1zaGFkZWQtLXRhYi0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICAtLXctdGFiLS1ob3Zlci0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy10YWJzLS1zaGFkZWQtLXRhYi0taG92ZXItLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgLS13LXRhYi0tYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdy10YWJzLS1zaGFkZWQtLXRhYi0tYm9yZGVyLWJvdHRvbS1jb2xvcik7XG4gICAgICAgICAgICAtLXctdGFiLS1ib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLXctdGFicy0tc2hhZGVkLS10YWItLWJvcmRlci1yaWdodC1jb2xvcik7XG4gICAgICAgICAgICAtLXctdGFiLS1jb2xvcjogdmFyKC0tdy10YWJzLS1zaGFkZWQtLXRhYi0tY29sb3IpO1xuICAgICAgICAgICAgLS13LXRhYi0taG92ZXItLWNvbG9yOiB2YXIoLS13LXRhYnMtLXNoYWRlZC0tdGFiLS1ob3Zlci0tY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICA6aG9zdChbYXBwZWFyYW5jZT1cInNoYWRlZFwiXSkgOjpzbG90dGVkKHctdGFiW2FjdGl2ZV0pIHtcbiAgICAgICAgICAgIC0tdy10YWItLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctdGFicy0tc2hhZGVkLS10YWItLWFjdGl2ZS0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICAtLXctdGFiLS1ib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS13LXRhYnMtLXNoYWRlZC0tdGFiLS1hY3RpdmUtLWJvcmRlci1ib3R0b20tY29sb3IpO1xuICAgICAgICAgICAgLS13LXRhYi0taG92ZXItLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctdGFicy0tc2hhZGVkLS10YWItLWFjdGl2ZS0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICAtLXctdGFiLS1jb2xvcjogdmFyKC0tdy10YWJzLS1zaGFkZWQtLXRhYi0tYWN0aXZlLS1jb2xvcik7XG4gICAgICAgICAgICAtLXctdGFiLS1ob3Zlci0tY29sb3I6IHZhcigtLXctdGFicy0tc2hhZGVkLS10YWItLWFjdGl2ZS0tY29sb3IpO1xuICAgICAgICB9XG4gICAgYDtcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBhcHBlYXJhbmNlOiB7IFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJUaGUgYXBwZWFyYW5jZSBvZiB0aGUgbmF2YmFyLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGBjb250cmFzdGAsIGBsaWdodC1jb250cmFzdGAgYW5kIGBzaGFkZWRgLlwiXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGhlbHA6IFwiV2hldGhlciB0aGUgdGFiIHNob3VsZCBiZSBkaXNwbGF5ZWQgYXMgYWN0aXZlLlwiXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgX2hhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmIChlLnRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09IFwidy10YWJcIikge1xuICAgICAgICAgICAgY29uc3QgdGFiID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSB8fCBlLnRhcmdldC5pbm5lckhUTUw7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwidy10YWJzLWNoYW5nZWRcIiwgeyBkZXRhaWw6IHsgdmFsdWU6IHRhYiB9LCBidWJibGVzOiB0cnVlLCBjb21wb3NlZDogdHJ1ZSB9KSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFwcGVhcmFuY2UgPSBcImNvbnRyYXN0XCI7XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNsaWNrKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYDxzbG90Pjwvc2xvdD5gXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBXVGFiIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgdmFyKC0tdy10YWItLXBhZGRpbmctcmlnaHQpIDAgdmFyKC0tdy10YWItLXBhZGRpbmctbGVmdCk7XG5cbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXctdGFicy0tdHJhbnNpdGlvbik7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvcjtcblxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiB2YXIoLS13LXRhYnMtLWJvcmRlci1yaWdodC13aWR0aCkgc29saWQgdmFyKC0tdy10YWItLWJvcmRlci1yaWdodC1jb2xvcik7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiB2YXIoLS13LXRhYnMtLWJvcmRlci1ib3R0b20td2lkdGgpIHNvbGlkIHZhcigtLXctdGFiLS1ib3JkZXItYm90dG9tLWNvbG9yKTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoLTEgKiB2YXIoLS13LXRhYnMtLWJvcmRlci1ib3R0b20td2lkdGgpKTtcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0tdy10YWJzLS1oZWlnaHQpO1xuXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXRhYi0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy10YWItLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy10YWItLWhvdmVyLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13LXRhYi0taG92ZXItLWNvbG9yKTtcbiAgICAgICAgfVxuICAgIGA7XG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgaGVscDogXCJTcGVjaWZpZXMgd2hldGhlciB0aGUgdGFiIHNob3VsZCBiZSBkaXNwbGF5ZWQgYXMgYWN0aXZlLlwiXG4gICAgICAgIH0sXG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGhlbHA6IFwiVGhlIG5hbWUgb2YgdGhlIHRhYi4gVGhpcyBuYW1lIHdpbGwgYmUgdXNlZCB3aGVuIGRpc3BhdGNoaW5nIGV2ZW50cyBmcm9tIFRhYnMgY29tcG9uZW50LlwiXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiXCI7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGA8YSBocmVmPVwiI1wiPjxzbG90Pjwvc2xvdD48L2E+YFxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgV1RhYlBhbmUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGhlbHA6IFwiVGhlIGlkIG9mIHRoZSBhY3RpdmUgZWxlbWVudC5cIlxuICAgICAgICB9LFxuICAgICAgICBhcHBlYXJhbmNlOiB7IFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJUaGUgYXBwZWFyYW5jZSBvZiB0aGUgbmF2YmFyLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGBjb250cmFzdGAsIGBsaWdodC1jb250cmFzdGAgYW5kIGBzaGFkZWRgLlwiXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuYXBwZWFyYW5jZSA9IFwiY29udHJhc3RcIjtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBcIlwiO1xuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInctdGFicy1jaGFuZ2VkXCIsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUuZGV0YWlsLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5hY3RpdmUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3JlbmRlclRhYih0YWIpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRhYi5nZXRBdHRyaWJ1dGUoJ3Nsb3QnKTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0YWIuZ2V0QXR0cmlidXRlKCdsYWJlbCcpO1xuXG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgbmFtZSA9IFwiXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDx3LXRhYiBcbiAgICAgICAgICAgICAgICBuYW1lPVwiJHtuYW1lfVwiXG4gICAgICAgICAgICAgICAgP2FjdGl2ZT0ke3RoaXMuYWN0aXZlLnRvTG93ZXJDYXNlKCkgPT0gbmFtZS50b0xvd2VyQ2FzZSgpfT5cblxuICAgICAgICAgICAgICAgICR7bGFiZWx9XG4gICAgICAgICAgICA8L3ctdGFiPlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIF9yZW5kZXJDb250ZW50KHRhYnMpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0YWJzLmZpbHRlcih0YWIgPT4gdGFiLmdldEF0dHJpYnV0ZSgnc2xvdCcpICYmIHRhYi5nZXRBdHRyaWJ1dGUoJ3Nsb3QnKS50b0xvd2VyQ2FzZSgpID09IHRoaXMuYWN0aXZlLnRvTG93ZXJDYXNlKCkpXG5cbiAgICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBodG1sYDxzbG90IG5hbWU9XCIke3NlbGVjdGVkWzBdLmdldEF0dHJpYnV0ZSgnc2xvdCcpfVwiPjwvc2xvdD5gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB0YWJzID0gQXJyYXkuZnJvbSh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoXCJ3LXRhYnBhbmUtaXRlbVwiKSk7XG5cbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8dy10YWJzIGFwcGVhcmFuY2U9XCIke3RoaXMuYXBwZWFyYW5jZX1cIj5cbiAgICAgICAgICAgICAgICAke3RhYnMubWFwKHRhYiA9PiB0aGlzLl9yZW5kZXJUYWIodGFiKSl9XG4gICAgICAgICAgICA8L3ctdGFicz5cblxuICAgICAgICAgICAgJHt0aGlzLl9yZW5kZXJDb250ZW50KHRhYnMpfVxuICAgICAgICBgO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgV1RhYlBhbmVJdGVtIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgc2xvdDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJUaGUgbmFtZSBvZiB0aGUgdGFiLiBUaGlzIG5hbWUgd2lsbCBiZSB1c2VkIHdoZW4gZGlzcGF0Y2hpbmcgZXZlbnRzIGZyb20gVGFicyBjb21wb25lbnQuXCJcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGhlbHA6IFwiVGhlIGxhYmVsIG9mIHRoZSB0YWIsIGFzIHNob3duIG9uIHRoZSB0YWIgYmFyLlwiXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGA8c2xvdD48L3Nsb3Q+YFxuICAgIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctdGFicycsIFdUYWJzKTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndy10YWInLCBXVGFiKTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndy10YWJwYW5lJywgV1RhYlBhbmUpO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd3LXRhYnBhbmUtaXRlbScsIFdUYWJQYW5lSXRlbSk7IiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgY3NzLCBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IGNsYXNzbmFtZXMgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL2NsYXNzbmFtZXMuanMnO1xuXG5leHBvcnQgY2xhc3MgV1RleHRJbnB1dCBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW11dGVkLWNvbG9yKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgICAgICAgICAgcGFkZGluZzogY2FsYygwLjdyZW0gLSAxcHgpO1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2LmludmFsaWQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tZGFuZ2VyLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdi5pbnZhbGlkIGlucHV0IHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYW5nZXItY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2LmJsb2NrIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdi5mb2N1cyxcbiAgICAgICAgZGl2LmludmFsaWQuZm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYgaW5wdXQ6Zm9jdXMsXG4gICAgICAgIGRpdi5pbnZhbGlkIGlucHV0OmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dDpkaXNhYmxlZCB7XG4gICAgICAgICAgICBjdXJzb3I6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24uYWN0aW9uIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbi5hY3Rpb246aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbi5hY3Rpb24uY2xlYXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taWNvbi1jbG9zZSkgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTBweCAxMHB4O1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTBweCArIDIqMC43cmVtIC0gMXB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbi5hY3Rpb24uc2hvdyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pY29uLWV5ZSkgY2VudGVyIG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTVweCAxNXB4O1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTVweCArIDIqMC43cmVtIC0gMXB4KTtcbiAgICAgICAgfVxuICAgIGA7XG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAga2luZDogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICAgICAgdmFsdWU6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgICAgIHBsYWNlaG9sZGVyOiB7IHR5cGU6IFN0cmluZyB9LFxuXG4gICAgICAgIGludmFsaWQ6IHsgdHlwZTogQm9vbGVhbiB9LFxuICAgICAgICBkaXNhYmxlZDogeyB0eXBlOiBCb29sZWFuIH0sXG4gICAgICAgIGJsb2NrOiB7IHR5cGU6IEJvb2xlYW4gfSxcblxuICAgICAgICBjbGVhcmFibGU6IHsgdHlwZTogQm9vbGVhbiB9LFxuXG4gICAgICAgIGZvY3VzOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgYXR0cmlidXRlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIHBhc3N3b3JkVmlzaWJsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5raW5kID0gXCJ0ZXh0XCI7XG4gICAgICAgIHRoaXMudmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLnBhY2Vob2xkZXIgPSBcIlwiO1xuICAgICAgICB0aGlzLmludmFsaWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJsb2NrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFzc3dvcmRWaXNpYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLnJlbmRlclJvb3Q/LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuZm9jdXMoKTtcbiAgICB9XG5cbiAgICB0b2dnbGVWaXNpYmlsaXR5KCkge1xuICAgICAgICB0aGlzLnBhc3N3b3JkVmlzaWJsZSA9ICF0aGlzLnBhc3N3b3JkVmlzaWJsZTtcbiAgICB9XG5cbiAgICBnZXRLaW5kKCkge1xuICAgICAgICBpZiAodGhpcy5raW5kID09IFwicGFzc3dvcmRcIiAmJiB0aGlzLnBhc3N3b3JkVmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIFwidGV4dFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMua2luZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQmx1cihlKSB7XG4gICAgICAgIHRoaXMuZm9jdXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cblxuICAgIG9uRm9jdXMoZSkge1xuICAgICAgICB0aGlzLmZvY3VzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbklucHV0KGUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSR7Y2xhc3NuYW1lcyh7IFwiaW52YWxpZFwiOiB0aGlzLmludmFsaWQsIFwiYmxvY2tcIjogdGhpcy5ibG9jaywgXCJkaXNhYmxlZFwiOiB0aGlzLmRpc2FibGVkLCBcImZvY3VzXCI6IHRoaXMuZm9jdXMgfSl9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIiR7dGhpcy5nZXRLaW5kKCl9XCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiJHt0aGlzLnBsYWNlaG9sZGVyfVwiIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgP2Rpc2FibGVkPSR7dGhpcy5kaXNhYmxlZH1cblxuICAgICAgICAgICAgICAgICAgICAudmFsdWU9XCIke3RoaXMudmFsdWV9XCJcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIEBmb2N1cz0ke3RoaXMub25Gb2N1c31cbiAgICAgICAgICAgICAgICAgICAgQGJsdXI9JHt0aGlzLm9uQmx1cn1cbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PSR7dGhpcy5vbklucHV0fT5cbiAgICAgICAgICAgICAgICA8L2lucHV0PlxuICAgICAgICAgICAgICAgICR7IHRoaXMuY2xlYXJhYmxlICYmIGh0bWxgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbiBjbGVhclwiIEBjbGljaz0ke3RoaXMuY2xlYXJ9PjwvYnV0dG9uPmAgfHwgaHRtbGBgIH1cbiAgICAgICAgICAgICAgICAkeyB0aGlzLmtpbmQgPT0gXCJwYXNzd29yZFwiICYmIGh0bWxgPGJ1dHRvbiBjbGFzcz1cImFjdGlvbiBzaG93XCIgQGNsaWNrPSR7dGhpcy50b2dnbGVWaXNpYmlsaXR5fT48L2J1dHRvbj5gIHx8IGh0bWxgYCB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd3LXRleHQtaW5wdXQnLCBXVGV4dElucHV0KTsiLCJpbXBvcnQge0xpdEVsZW1lbnQsIGNzcywgaHRtbH0gZnJvbSAnbGl0JztcblxuZXhwb3J0IGNsYXNzIFdDb250YWluZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgICAgIGRpdi5jb250YWluZXIsXG4gICAgICAgIGRpdi5jb250YWluZXItZmx1aWQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLWNvbnRhaW5lci0tY29udGVudC1zcGFjaW5nKTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tY29udGFpbmVyLS1jb250ZW50LXNwYWNpbmcpO1xuXG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgZGl2LmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgZGl2LmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgICAgZGl2LmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5MjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgICAgIGRpdi5jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTEzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYDtcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgZmx1aWQ6IGZhbHNlXG4gICAgfTtcbiAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgIH1cbiAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxkaXYgY2xhc3M9XCIke3RoaXMuZmx1aWQgPyAnY29udGFpbmVyLWZsdWlkJyA6ICdjb250YWluZXInfVwiPlxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfVxuXG59XG4gIFxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd3LWNvbnRhaW5lcicsIFdDb250YWluZXIpOyIsImltcG9ydCB7TGl0RWxlbWVudCwgY3NzLCBodG1sfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgY2xhc3NuYW1lcyB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvY2xhc3NuYW1lcy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBXRml4ZWRIZWFkZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICAgICA6aG9zdCB7IFxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG5cbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgaGVhZGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBkbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2IHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogdmFyKClcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICBuYXYgOjpzbG90dGVkKCopIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFydGljbGUge1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS13LWZpeGVkLWhlYWRlci0tYXJ0aWNsZS1tYXgtd2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJ0aWNsZS5zcGFjaW5nLXMge1xuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS13LWZpeGVkLWhlYWRlci0tc3BhY2luZy1zLS1ob3Jpem9udGFsLXNwYWNpbmcpIHZhcigtLXctZml4ZWQtaGVhZGVyLS1zcGFjaW5nLXMtLXZlcnRpY2FsLXNwYWNpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJ0aWNsZS5zcGFjaW5nLW0ge1xuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS13LWZpeGVkLWhlYWRlci0tc3BhY2luZy1tLS1ob3Jpem9udGFsLXNwYWNpbmcpIHZhcigtLXctZml4ZWQtaGVhZGVyLS1zcGFjaW5nLW0tLXZlcnRpY2FsLXNwYWNpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXNpZGUge1xuICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmYwMDtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdXRlZC1jb2xvcik7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgfVxuICAgIGBcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBzcGFjaW5nOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBoZWxwOiBcIlNwZWNpZmllcyBzcGFjaW5ncyAobWFyZ2lucywgcGFkZGluZ3MsIC4uLikuIFBvc3NpYmxlIHZhbHVlcyBhcmUgYHNgLCBgbWAgYW5kIGBub25lYC5cIlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNwYWNpbmcgPSBcInNcIjtcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cIm5hdlwiPjwvc2xvdD5cbiAgICAgICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz0ke2NsYXNzbmFtZXMoe1tcInNwYWNpbmctXCIgKyB0aGlzLnNwYWNpbmddOiB0cnVlIH0pfT5cblxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiYXJ0aWNsZVwiPjwvc2xvdD5cbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XG5cbiAgICAgICAgICAgICAgICA8YXNpZGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9JHtjbGFzc25hbWVzKHtbXCJzcGFjaW5nLVwiICsgdGhpcy5zcGFjaW5nXTogdHJ1ZSB9KX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImFzaWRlXCI+PC9zbG90PlxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICA8L21haW4+XG5cbiAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImZvb3RlclwiPjwvc2xvdD5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICBgXG4gICAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctZml4ZWQtaGVhZGVyJywgV0ZpeGVkSGVhZGVyKTsiLCJpbXBvcnQge0xpdEVsZW1lbnQsIGNzcywgaHRtbH0gZnJvbSAnbGl0JztcblxuZXhwb3J0IGNsYXNzIFdHcmlkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS13LWdyaWQtdGVtcGxhdGUtY29sdW1ucyk7XG4gICAgICAgIH1cblxuICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTsgfVxuICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bY29sPVwiMVwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxOyB9XG4gICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtjb2w9XCIyXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDI7IH1cbiAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2NvbD1cIjNcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMzsgfVxuICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bY29sPVwiNFwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA0OyB9XG4gICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtjb2w9XCI1XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDU7IH1cbiAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2NvbD1cIjZcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gNjsgfVxuICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bY29sPVwiN1wiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA3OyB9XG4gICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtjb2w9XCI4XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDg7IH1cbiAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2NvbD1cIjlcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gOTsgfVxuICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bY29sPVwiMTBcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTA7IH1cbiAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2NvbD1cIjExXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDExOyB9XG4gICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtjb2w9XCIxMlwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxMjsgfVxuICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bY29sPVwiMTNcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTM7IH1cbiAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2NvbD1cIjE0XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDE0OyB9XG4gICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtjb2w9XCIxNVwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxNTsgfVxuICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bY29sPVwiMTZcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTY7IH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3NtPVwiMVwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bc209XCIyXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDI7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtzbT1cIjNcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMzsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3NtPVwiNFwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA0OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bc209XCI1XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDU7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtzbT1cIjZcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gNjsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3NtPVwiN1wiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA3OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bc209XCI4XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDg7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtzbT1cIjlcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gOTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3NtPVwiMTBcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTA7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtzbT1cIjExXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDExOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bc209XCIxMlwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxMjsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3NtPVwiMTNcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTM7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtzbT1cIjE0XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDE0OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bc209XCIxNVwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxNTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3NtPVwiMTZcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTY7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbWQ9XCIxXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDE7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVttZD1cIjJcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMjsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW21kPVwiM1wiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAzOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbWQ9XCI0XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDQ7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVttZD1cIjVcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gNTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW21kPVwiNlwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA2OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbWQ9XCI3XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDc7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVttZD1cIjhcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gODsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW21kPVwiOVwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA5OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbWQ9XCIxMFwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxMDsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW21kPVwiMTFcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTE7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVttZD1cIjEyXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDEyOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbWQ9XCIxM1wiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxMzsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW21kPVwiMTRcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTQ7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVttZD1cIjE1XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDE1OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbWQ9XCIxNlwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxNjsgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtsZz1cIjFcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2xnPVwiMlwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAyOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbGc9XCIzXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDM7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtsZz1cIjRcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gNDsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2xnPVwiNVwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA1OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbGc9XCI2XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDY7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtsZz1cIjdcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gNzsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2xnPVwiOFwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA4OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbGc9XCI5XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDk7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtsZz1cIjEwXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDEwOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbGc9XCIxMVwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxMTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2xnPVwiMTJcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTI7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtsZz1cIjEzXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDEzOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbGc9XCIxNFwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxNDsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2xnPVwiMTVcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTU7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtsZz1cIjE2XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDE2OyB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4bD1cIjFcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3hsPVwiMlwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAyOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beGw9XCIzXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDM7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4bD1cIjRcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gNDsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3hsPVwiNVwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA1OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beGw9XCI2XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDY7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4bD1cIjdcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gNzsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3hsPVwiOFwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA4OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beGw9XCI5XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDk7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4bD1cIjEwXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDEwOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beGw9XCIxMVwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxMTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3hsPVwiMTJcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTI7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4bD1cIjEzXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDEzOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beGw9XCIxNFwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxNDsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3hsPVwiMTVcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTU7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4bD1cIjE2XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDE2OyB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eGw9XCIxXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDE7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eGw9XCIyXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDI7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eGw9XCIzXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDM7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eGw9XCI0XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDQ7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eGw9XCI1XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDU7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eGw9XCI2XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDY7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eGw9XCI3XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDc7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eGw9XCI4XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDg7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eGw9XCI5XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDk7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eGw9XCIxMFwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxMDsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3h4bD1cIjExXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDExOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beHhsPVwiMTJcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTI7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eGw9XCIxM1wiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxMzsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3h4bD1cIjE0XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDE0OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beHhsPVwiMTVcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTU7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eGw9XCIxNlwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxNjsgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjYwMHB4KSB7XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beHh4bD1cIjFcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3h4eGw9XCIyXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDI7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eHhsPVwiM1wiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAzOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beHh4bD1cIjRcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gNDsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3h4eGw9XCI1XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDU7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eHhsPVwiNlwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA2OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beHh4bD1cIjdcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gNzsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3h4eGw9XCI4XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDg7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eHhsPVwiOVwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA5OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beHh4bD1cIjEwXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDEwOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beHh4bD1cIjExXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDExOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beHh4bD1cIjEyXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDEyOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beHh4bD1cIjEzXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDEzOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beHh4bD1cIjE0XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDE0OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beHh4bD1cIjE1XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDE1OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beHh4bD1cIjE2XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDE2OyB9XG4gICAgICAgIH1cbiAgICBgO1xuICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgfVxuICBcbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgYDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFdHcmlkSXRlbSBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgICAgIFxuICAgIGA7XG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgY29sOiB7IFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgaGVscDogXCJOdW1iZXIgb2YgY29sdW1uIHNwYW4gZm9yIGBtYXgtd2lkdGg9Tm9uZWAuIERlZmF1bHQgaXMgYDFgLlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgc206IHsgXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBoZWxwOiBcIk51bWJlciBvZiBjb2x1bW4gc3BhbiBmb3IgYG1heC13aWR0aCA+IHZhcigtLXctYnJlYWtwb2ludC1zbSlgLlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWQ6IHsgXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBoZWxwOiBcIk51bWJlciBvZiBjb2x1bW4gc3BhbiBmb3IgYG1heC13aWR0aCA+IHZhcigtLXctYnJlYWtwb2ludC1tZClgLlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgbGc6IHsgXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBoZWxwOiBcIk51bWJlciBvZiBjb2x1bW4gc3BhbiBmb3IgYG1heC13aWR0aCA+IHZhcigtLXctYnJlYWtwb2ludC1sZylgLlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgeGw6IHsgXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBoZWxwOiBcIk51bWJlciBvZiBjb2x1bW4gc3BhbiBmb3IgYG1heC13aWR0aCA+IHZhcigtLXctYnJlYWtwb2ludC14bClgLlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgeHhsOiB7IFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgaGVscDogXCJOdW1iZXIgb2YgY29sdW1uIHNwYW4gZm9yIGBtYXgtd2lkdGggPiB2YXIoLS13LWJyZWFrcG9pbnQteHhsKWAuXCJcbiAgICAgICAgfSxcblxuICAgICAgICB4eHhsOiB7IFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgaGVscDogXCJOdW1iZXIgb2YgY29sdW1uIHNwYW4gZm9yIGBtYXgtd2lkdGggPiB2YXIoLS13LWJyZWFrcG9pbnQteHh4bClgLlwiXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICB9XG4gICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgYDtcbiAgICB9XG59XG4gIFxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd3LWdyaWQnLCBXR3JpZCk7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctZ3JpZC1pdGVtJywgV0dyaWRJdGVtKTsiLCJpbXBvcnQge0xpdEVsZW1lbnQsIGNzcywgaHRtbH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IGNsYXNzbmFtZXMgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL2NsYXNzbmFtZXMuanMnO1xuXG5leHBvcnQgY2xhc3MgV0JyYW5kIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgICAgICAgICAgICBcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG5cbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhLmNvbnRyYXN0IHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13LWJyYW5kLS1jb250cmFzdC0tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgYS5jb250cmFzdDpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy1icmFuZC0tY29udHJhc3QtLWhvdmVyLS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBhLnNoYWRlZCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy1icmFuZC0tc2hhZGVkLS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBhLnNoYWRlZDpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy1icmFuZC0tc2hhZGVkLS1ob3Zlci0tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0tdy1icmFuZC0tbG9nby0taGVpZ2h0KTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0tdy1icmFuZC0tbG9nby0tbWFyZ2luLXJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuLmJyYW5kIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS13LWJyYW5kLS1mb250LXdlaWdodCk7XG4gICAgICAgIH1cbiAgICBgXG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgYXBwOiB7IFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJUaGUgbmFtZSBvZiB0aGUgYXBwbGljYXRpb24uXCJcbiAgICAgICAgfSxcbiAgICAgICAgYXBwZWFyYW5jZTogeyBcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGhlbHA6IFwiVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIG5hdmJhci4gUG9zc2libGUgdmFsdWVzIGFyZSBgY29udHJhc3RgIGFuZCBgc2hhZGVkYC5cIlxuICAgICAgICB9LFxuICAgICAgICBicmFuZDogeyBcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGhlbHA6IFwiVGhlIG5hbWUgb2YgdGhlIGJyYW5kLlwiXG4gICAgICAgIH0sXG4gICAgICAgIGhyZWY6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGhlbHA6IFwiVGhlIHRhcmdldCBsb2NhdGlvbiB3aGVuIHByZXNzaW5nIHRoZSBicmFuZC4gVXN1YWxseSBob21lIHBhZ2UuIERlZmF1bHQgaXMgYC9gLlwiXG4gICAgICAgIH0sXG4gICAgICAgIGxvZ286IHsgXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBoZWxwOiBcIk9wdGlvbmFsLiBUaGUgVVJMIG9mIGEgbG9nbyB0byBiZSBkaXNwbGF5ZWQuXCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5icmFuZCA9IFwiXCI7XG4gICAgICAgIHRoaXMuYXBwID0gXCJcIjtcbiAgICAgICAgdGhpcy5sb2dvID0gXCJcIjtcbiAgICAgICAgdGhpcy5hcHBlYXJhbmNlID0gXCJjb250cmFzdFwiO1xuICAgICAgICB0aGlzLmhyZWYgPSBcIi9cIjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgaHJlZj1cIiR7dGhpcy5ocmVmfVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9JHtjbGFzc25hbWVzKHsgW3RoaXMuYXBwZWFyYW5jZV06IHRydWUgfSl9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7dGhpcy5sb2dvfVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnJhbmRcIj4ke3RoaXMuYnJhbmR9Jm5ic3A7PC9zcGFuPjxzcGFuIGNsYXNzPVwiYXBwXCI+JHt0aGlzLmFwcH08L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIGBcbiAgICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndy1icmFuZCcsIFdCcmFuZCk7IiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgY3NzIH0gZnJvbSAnbGl0JztcblxuZXhwb3J0IGNsYXNzIFdDU1NSdWxlc1RhYmxlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS13LXNwYWNpbmctNTAwKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhlYWQgdHIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoZWFkIHRoLFxuICAgICAgICB0Ym9keSB0ZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS13LXNwYWNpbmctNDAwKTtcbiAgICAgICAgICAgIGJvcmRlcjogdmFyKC0tdy1ib3JkZXItd2lkdGgtLXRoaW4pIHNvbGlkIHZhcigtLXctYmFja2dyb3VuZC1jb2xvci04MDApO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhlYWQgdGgge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctbXV0ZWQtY29sb3IpO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhlYWQgdGg6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoZWFkIHRoOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0Ym9keSB0cjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cbiAgICBgO1xuXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgICAgIGVsZW1lbnROYW1lOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBoZWxwOiBcIlRoZSBuYW1lIG9mIHRoZSBlbGVtZW50IHRvIGRpc3BsYXkgdGhlIENTUyB2YXJpYWJsZXMuXCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50TmFtZSA9IFwidy1oZWFkaW5nXCI7XG4gICAgfVxuXG4gICAgX3JlbmRlclJvdyhjc3NWYXJzLCB2YXJpYWJsZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9IFwiYFwiICsgZGVmYXVsdFZhbHVlICsgXCJgXCI7XG5cbiAgICAgICAgaWYgKCF2YXJpYWJsZS5lbmRzV2l0aChcIi0taGVscFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+JHt2YXJpYWJsZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PHctbWFya2Rvd24gc3BhY2luZz1cIm5vbmVcIj4ke2RlZmF1bHRWYWx1ZX08L3ctbWFya2Rvd24+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjx3LW1hcmtkb3duIHNwYWNpbmc9XCJub25lXCI+JHtjc3NWYXJzW3ZhcmlhYmxlICsgXCItLWhlbHBcIl0gPyBjc3NWYXJzW3ZhcmlhYmxlICsgXCItLWhlbHBcIl0uc3Vic3RyaW5nKDEsIGNzc1ZhcnNbdmFyaWFibGUgKyBcIi0taGVscFwiXS5sZW5ndGggLSAxKSA6IFwiXCJ9PC93LW1hcmtkb3duPjwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXRBbGxDU1NWYXJpYWJsZU5hbWVzKHN0eWxlU2hlZXRzID0gZG9jdW1lbnQuc3R5bGVTaGVldHMpIHtcbiAgICAgICAgdmFyIGNzc1ZhcnMgPSB7fTtcbiAgICAgICAgLy8gbG9vcCBlYWNoIHN0eWxlc2hlZXRcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gbG9vcCBzdHlsZXNoZWV0J3MgY3NzUnVsZXNcbiAgICAgICAgICAgIHRyeSB7IC8vIHRyeS9jYXRjaCB1c2VkIGJlY2F1c2UgJ2hhc093blByb3BlcnR5JyBkb2Vzbid0IHdvcmtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHN0eWxlU2hlZXRzW2ldLmNzc1J1bGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHN0eWxlc2hlZXQncyBjc3NSdWxlcycgc3R5bGUgKHByb3BlcnR5IG5hbWVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlU2hlZXRzW2ldLmNzc1J1bGVzW2pdLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YXJzID0gdGhpcy5fZ2V0QWxsQ1NTVmFyaWFibGVOYW1lcyhbc3R5bGVTaGVldHNbaV0uY3NzUnVsZXNbal0uc3R5bGVTaGVldF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzc1ZhcnMgPSB7IC4uLmNzc1ZhcnMsIC4uLnZhcnMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZSA9IC8oLS13LVthLXpBLVowLTktXSopOiAoW147XSspL2dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gQXJyYXkuZnJvbShzdHlsZVNoZWV0c1tpXS5jc3NSdWxlc1tqXS5jc3NUZXh0Lm1hdGNoQWxsKHJlKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVzLmZvckVhY2gobWF0Y2ggPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hbMV0uc3RhcnRzV2l0aChcIi0tXCIgKyB0aGlzLmVsZW1lbnROYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzVmFyc1ttYXRjaFsxXV0gPSBtYXRjaFsyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikgeyB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3NzVmFycztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBjc3NWYXJzID0gdGhpcy5fZ2V0QWxsQ1NTVmFyaWFibGVOYW1lcygpO1xuXG4gICAgICAgIHJldHVybiBodG1sYDx0YWJsZT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5WYXJpYWJsZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5EZWZhdWx0PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICR7IE9iamVjdC5rZXlzKGNzc1ZhcnMpLm1hcCgodmFyaWFibGUpID0+IHRoaXMuX3JlbmRlclJvdyhjc3NWYXJzLCB2YXJpYWJsZSwgY3NzVmFyc1t2YXJpYWJsZV0pKSB9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPmBcbiAgICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd3LWNzcy1ydWxlcy10YWJsZScsIFdDU1NSdWxlc1RhYmxlKTsiLCJpbXBvcnQge0xpdEVsZW1lbnQsIGNzcywgaHRtbH0gZnJvbSAnbGl0JztcblxuZXhwb3J0IGNsYXNzIFdFbGVtZW50RXhhbXBsZSBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAgICAgXG4gICAgYFxuXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgICAgIHByZXZpZXc6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBoZWxwOiBcIklmIHRydWUsIHRoZSBjb2RlIG9mIHRoZSBleGFtcGxlIHdpbGwgYmUgZGlzcGxheWVkLlwiXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucHJldmlldyA9IGZhbHNlO1xuICAgIH1cblxuICAgIF9idHRTaG93Q29kZV9vbkNsaWNrKCkge1xuICAgICAgICB0aGlzLnByZXZpZXcgPSAhdGhpcy5wcmV2aWV3O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8dy1wYW5lIGVsZXZhdGlvbj1cIjUwMFwiPlxuICAgICAgICAgICAgICAgIDx3LXBhbmUgc3BhY2luZz1cInNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICAgICAgICAgIDwvdy1wYW5lPlxuXG4gICAgICAgICAgICAgICAgJHsgdGhpcy5wcmV2aWV3ID8gaHRtbGA8dy1wcmUgY29udGVudD1cIiR7dGhpcy5pbm5lckhUTUx9XCI+PC93LXByZT5gIDogaHRtbGBgIH1cbiAgICAgICAgICAgIDwvdy1wYW5lPlxuXG4gICAgICAgICAgICA8dy1idXR0b24gbGFiZWw9XCIkeyB0aGlzLnByZXZpZXcgPyAnSGlkZSBjb2RlJyA6ICdTaG93IGNvZGUnIH1cIiBzaXplPVwic21cIiBAY2xpY2s9XCIke3RoaXMuX2J0dFNob3dDb2RlX29uQ2xpY2t9XCI+PC93LWJ1dHRvbj5cbiAgICAgICAgYFxuICAgIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctZWxlbWVudC1leGFtcGxlJywgV0VsZW1lbnRFeGFtcGxlKTsiLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sLCBjc3MgfSBmcm9tICdsaXQnO1xuXG5pbXBvcnQgeyBXSGVhZGluZyB9IGZyb20gJy4uLy4uL2F0b21zL2hlYWRpbmcvaGVhZGluZy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBXUHJvcGVydGllc1RhYmxlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS13LXNwYWNpbmctNTAwKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhlYWQgdHIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoZWFkIHRoLFxuICAgICAgICB0Ym9keSB0ZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS13LXNwYWNpbmctNDAwKTtcbiAgICAgICAgICAgIGJvcmRlcjogdmFyKC0tdy1ib3JkZXItd2lkdGgtLXRoaW4pIHNvbGlkIHZhcigtLXctYmFja2dyb3VuZC1jb2xvci04MDApO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhlYWQgdGgge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctbXV0ZWQtY29sb3IpO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhlYWQgdGg6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoZWFkIHRoOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0Ym9keSB0cjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cbiAgICBgO1xuXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgICAgIGNsYXNzTmFtZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJUaGUgbmFtZSBvZiB0aGUgY2xhc3NuYW1lIHRvIGRpc3BsYXkgdGhlIHByb3BlcnRpZXMuXCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIldIZWFkaW5nXCI7XG4gICAgfVxuXG4gICAgX2dldENvbXBvbmVudENsYXNzKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiV0hlYWRpbmdcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gV0hlYWRpbmc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcmVuZGVyUm93KHByb3BlcnR5LCBzZXR0aW5ncykge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+JHtwcm9wZXJ0eX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4ke3NldHRpbmdzW1widHlwZVwiXS5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjx3LW1hcmtkb3duIHNwYWNpbmc9XCJub25lXCI+JHtzZXR0aW5nc1tcImhlbHBcIl19PC93LW1hcmtkb3duPjwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICBgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjbGF6eiA9IHRoaXMuX2dldENvbXBvbmVudENsYXNzKHRoaXMuY2xhc3NOYW1lKTsgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBodG1sYDx0YWJsZT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5Qcm9wZXJ0eTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICR7IE9iamVjdC5rZXlzKGNsYXp6LnByb3BlcnRpZXMpLm1hcCgocHJvcGVydHkpID0+IHRoaXMuX3JlbmRlclJvdyhwcm9wZXJ0eSwgY2xhenoucHJvcGVydGllc1twcm9wZXJ0eV0pKSB9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPmA7XG4gICAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndy1lbGVtZW50LXByb3BlcnRpZXMtdGFibGUnLCBXUHJvcGVydGllc1RhYmxlKTsiLCJpbXBvcnQge0xpdEVsZW1lbnQsIGNzcywgaHRtbH0gZnJvbSAnbGl0JztcbmltcG9ydCB7Y2xhc3NuYW1lc30gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy9jbGFzc25hbWVzLmpzJztcblxuZXhwb3J0IGNsYXNzIFdIb3Jpem9udGFsTmF2IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBuYXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdiA6OnNsb3R0ZWQoYSkge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS13LXNwYWNpbmctNTAwKTtcblxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdi5jb250cmFzdCA6OnNsb3R0ZWQoYSkge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctaG9yaXpvbnRhbC1uYXYtLWNvbnRyYXN0LS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBuYXYuY29udHJhc3QgOjpzbG90dGVkKGE6aG92ZXIpIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13LWhvcml6b250YWwtbmF2LS1jb250cmFzdC0taG92ZXItLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdi5jb250cmFzdCA6OnNsb3R0ZWQoYTphY3RpdmUpLFxuICAgICAgICBuYXYuY29udHJhc3QgOjpzbG90dGVkKGEudy1hY3RpdmUpIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13LWhvcml6b250YWwtbmF2LS1jb250cmFzdC0tYWN0aXZlLS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBuYXYuc2hhZGVkIDo6c2xvdHRlZChhKSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy1ob3Jpem9udGFsLW5hdi0tc2hhZGVkLS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBuYXYuc2hhZGVkIDo6c2xvdHRlZChhOmhvdmVyKSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy1ob3Jpem9udGFsLW5hdi0tc2hhZGVkLS1ob3Zlci0tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2LnNoYWRlZCA6OnNsb3R0ZWQoYTphY3RpdmUpLFxuICAgICAgICBuYXYuc2hhZGVkIDo6c2xvdHRlZChhLnctYWN0aXZlKSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy1ob3Jpem9udGFsLW5hdi0tc2hhZGVkLS1hY3RpdmUtLWNvbG9yKTtcbiAgICAgICAgfVxuICAgIGBcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBhcHBlYXJhbmNlOiB7IFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJUaGUgYXBwZWFyYW5jZSBvZiB0aGUgbmF2YmFyLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGBjb250cmFzdGAgYW5kIGBzaGFkZWRgLlwiXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYXBwZWFyYW5jZSA9IFwiY29udHJhc3RcIjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPG5hdlxuICAgICAgICAgICAgICAgIGNsYXNzPSR7Y2xhc3NuYW1lcyh7IFxuICAgICAgICAgICAgICAgICAgICBbdGhpcy5hcHBlYXJhbmNlXTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pfT5cblxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJpdGVtXCI+PC9zbG90PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIGBcbiAgICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndy1ob3Jpem9udGFsLW5hdicsIFdIb3Jpem9udGFsTmF2KTsiLCJpbXBvcnQge0xpdEVsZW1lbnQsIGNzcywgaHRtbH0gZnJvbSAnbGl0JztcbmltcG9ydCB7Y2xhc3NuYW1lc30gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy9jbGFzc25hbWVzLmpzJztcblxuZXhwb3J0IGNsYXNzIFdWZXJ0aWNhbE5hdiBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdiA6OnNsb3R0ZWQoaDMpIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBuYXYgOjpzbG90dGVkKGEpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS13LXNwYWNpbmctMjAwKTtcblxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdi5jb250cmFzdCA6OnNsb3R0ZWQoYSkge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctdmVydGljYWwtbmF2LS1jb250cmFzdC0tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2LmNvbnRyYXN0IDo6c2xvdHRlZChhOmhvdmVyKSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy12ZXJ0aWNhbC1uYXYtLWNvbnRyYXN0LS1ob3Zlci0tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2LmNvbnRyYXN0IDo6c2xvdHRlZChhOmFjdGl2ZSksXG4gICAgICAgIG5hdi5jb250cmFzdCA6OnNsb3R0ZWQoYS53LWFjdGl2ZSkge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctdmVydGljYWwtbmF2LS1jb250cmFzdC0tYWN0aXZlLS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBuYXYuc2hhZGVkIDo6c2xvdHRlZChhKSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy12ZXJ0aWNhbC1uYXYtLXNoYWRlZC0tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2LnNoYWRlZCA6OnNsb3R0ZWQoYTpob3Zlcikge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctdmVydGljYWwtbmF2LS1zaGFkZWQtLWhvdmVyLS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBuYXYuc2hhZGVkIDo6c2xvdHRlZChhOmFjdGl2ZSksXG4gICAgICAgIG5hdi5zaGFkZWQgOjpzbG90dGVkKGEudy1hY3RpdmUpIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13LXZlcnRpY2FsLW5hdi0tc2hhZGVkLS1hY3RpdmUtLWNvbG9yKTtcbiAgICAgICAgfVxuICAgIGBcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBhcHBlYXJhbmNlOiB7IFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJUaGUgYXBwZWFyYW5jZSBvZiB0aGUgbmF2YmFyLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGBjb250cmFzdGAgYW5kIGBzaGFkZWRgLlwiXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYXBwZWFyYW5jZSA9IFwiY29udHJhc3RcIjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPG5hdlxuICAgICAgICAgICAgICAgIGNsYXNzPSR7Y2xhc3NuYW1lcyh7IFxuICAgICAgICAgICAgICAgICAgICBbdGhpcy5hcHBlYXJhbmNlXTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pfT5cblxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJpdGVtXCI+PC9zbG90PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIGBcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXVmVydGljYWxOYXZUaXRsZSBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGA8aDM+PHNsb3Q+PC9zbG90PjwvaDM+YDtcbiAgICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd3LXZlcnRpY2FsLW5hdicsIFdWZXJ0aWNhbE5hdik7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctdmVydGljYWwtbmF2LS10aXRsZScsIFdWZXJ0aWNhbE5hdlRpdGxlKTsiLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBjc3MsIGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgY2xhc3NuYW1lcyB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvY2xhc3NuYW1lcy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBXRm9vdGVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICAgICB3LWdyaWQge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdy1ncmlkLmNvbnRyYXN0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXctZm9vdGVyLS1jb250cmFzdC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy1mb290ZXItLWNvbnRyYXN0LS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICB3LWdyaWQubGlnaHQtY29udHJhc3Qge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1mb290ZXItLWxpZ2h0LWNvbnRyYXN0LS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13LWZvb3Rlci0tbGlnaHQtY29udHJhc3QtLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHctZ3JpZC5zaGFkZWQge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogdmFyKC0tdy1mb290ZXItLXNoYWRlZC0tYm9yZGVyLXRvcC0td2lkdGgpIHNvbGlkIHZhcigtLXctZm9vdGVyLS1zaGFkZWQtLWJvcmRlci10b3AtLWNvbG9yKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13LWZvb3Rlci0tc2hhZGVkLS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICB3LWdyaWQuc3BhY2luZy1zIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXctZm9vdGVyLS1zcGFjaW5nLXMtLWhvcml6b250YWwtc3BhY2luZykgdmFyKC0tdy1mb290ZXItLXNwYWNpbmctcy0tdmVydGljYWwtc3BhY2luZyk7XG4gICAgICAgIH1cblxuICAgICAgICB3LWdyaWQuc3BhY2luZy1tIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXctZm9vdGVyLS1zcGFjaW5nLW0tLWhvcml6b250YWwtc3BhY2luZykgdmFyKC0tdy1mb290ZXItLXNwYWNpbmctbS0tdmVydGljYWwtc3BhY2luZyk7XG4gICAgICAgIH1cbiAgICBgO1xuXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgICAgIGFwcGVhcmFuY2U6IHsgXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBoZWxwOiBcIlRoZSBhcHBlYXJhbmNlIG9mIHRoZSBuYXZiYXIuIFBvc3NpYmxlIHZhbHVlcyBhcmUgYGNvbnRyYXN0YCwgYGxpZ2h0LWNvbnRyYXN0YCBhbmQgYHNoYWRlZGAuXCJcbiAgICAgICAgfSxcblxuICAgICAgICBzcGFjaW5nOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBoZWxwOiBcIlNwZWNpZmllcyBzcGFjaW5ncyAobWFyZ2lucywgcGFkZGluZ3MsIC4uLikuIFBvc3NpYmxlIHZhbHVlcyBhcmUgYHNgIGFuZCBgbWAuXCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hcHBlYXJhbmNlID0gXCJjb250cmFzdFwiO1xuICAgICAgICB0aGlzLnNwYWNpbmcgPSBcInNcIjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHctZ3JpZFxuICAgICAgICAgICAgY2xhc3M9JHtjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICAgICBbXCJzcGFjaW5nLVwiICsgdGhpcy5zcGFjaW5nXTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBbdGhpcy5hcHBlYXJhbmNlXTogdHJ1ZVxuICAgICAgICAgICAgfSl9PlxuXG4gICAgICAgICAgICAgICAgPHctZ3JpZC1pdGVtIGxnPVwiM1wiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiY29sLTFcIj48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPC93LWdyaWQtaXRlbT5cblxuICAgICAgICAgICAgICAgIDx3LWdyaWQtaXRlbSBsZz1cIjVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImNvbC0yXCI+PC9zbG90PlxuICAgICAgICAgICAgICAgIDwvdy1ncmlkLWl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8dy1ncmlkLWl0ZW0gbGc9XCI1XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJjb2wtM1wiPjwvc2xvdD5cbiAgICAgICAgICAgICAgICA8L3ctZ3JpZC1pdGVtPlxuXG4gICAgICAgICAgICAgICAgPHctZ3JpZC1pdGVtIGxnPVwiM1wiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiY29sLTRcIj48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPC93LWdyaWQtaXRlbT5cbiAgICAgICAgICAgIDwvdy1ncmlkPlxuICAgICAgICBgO1xuICAgIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctZm9vdGVyJywgV0Zvb3Rlcik7IiwiaW1wb3J0IHtMaXRFbGVtZW50LCBjc3MsIGh0bWx9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBjbGFzc25hbWVzIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy9jbGFzc25hbWVzLmpzJztcblxuZXhwb3J0IGNsYXNzIFdOYXZiYXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICAgICA6aG9zdCB7IFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyLmNvbnRyYXN0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXctbmF2YmFyLS1jb250cmFzdC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyLmhvcml6b250YWwge1xuICAgICAgICAgICAgZGlzcGxheTogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lci5ob3Jpem9udGFsLnNpemUtcyB7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS13LW5hdmJhci0tc2l6ZS1zLS12ZXJ0aWNhbC1wYWRkaW5nKSB2YXIoLS13LW5hdmJhci0tc2l6ZS1zLS1ob3Jpem9udGFsLXBhZGRpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lci5ob3Jpem9udGFsLnNpemUtbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS13LW5hdmJhci0tc2l6ZS1tLS12ZXJ0aWNhbC1wYWRkaW5nKSB2YXIoLS13LW5hdmJhci0tc2l6ZS1tLS1ob3Jpem9udGFsLXBhZGRpbmcpO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC5jb250YWluZXIuaG9yaXpvbnRhbC5zaGFkZWQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tdy1uYXZiYXItLXNoYWRlZC0tYm9yZGVyLWJvdHRvbS0td2lkdGgpIHNvbGlkIHZhcigtLXctbmF2YmFyLS1zaGFkZWQtLWJvcmRlci1ib3R0b20tLWNvbG9yKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXctbmF2YmFyLS1zaGFkZWQtLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lci5ob3Jpem9udGFsIHctaG9yaXpvbnRhbC1uYXYubWFpbi1uYXYge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lci52ZXJ0aWNhbCB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIudmVydGljYWwuc2l6ZS1zIHtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKCgxMDB2dyAtIDIgKiB2YXIoLS13LW5hdmJhci0tc2l6ZS1zLS1ob3Jpem9udGFsLXBhZGRpbmcpKSAvIDE2ICogMyAtIDIgKiB2YXIoLS13LW5hdmJhci0tc2l6ZS1tLS1ob3Jpem9udGFsLXBhZGRpbmcpKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXctbmF2YmFyLS1zaXplLXMtLXZlcnRpY2FsLXBhZGRpbmcpIHZhcigtLXctbmF2YmFyLS1zaXplLXMtLWhvcml6b250YWwtcGFkZGluZyk7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyLnZlcnRpY2FsLnNpemUtbSB7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygoMTAwdncgLSAyICogdmFyKC0tdy1uYXZiYXItLXNpemUtbS0taG9yaXpvbnRhbC1wYWRkaW5nKSkgLyAxNiAqIDMgLSAyICogdmFyKC0tdy1uYXZiYXItLXNpemUtbS0taG9yaXpvbnRhbC1wYWRkaW5nKSk7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS13LW5hdmJhci0tc2l6ZS1tLS12ZXJ0aWNhbC1wYWRkaW5nKSB2YXIoLS13LW5hdmJhci0tc2l6ZS1tLS1ob3Jpem9udGFsLXBhZGRpbmcpO1xuICAgICAgICB9XG4gICAgYFxuXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgICAgIGFwcGVhcmFuY2U6IHsgXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBoZWxwOiBcIlRoZSBhcHBlYXJhbmNlIG9mIHRoZSBuYXZiYXIuIFBvc3NpYmxlIHZhbHVlcyBhcmUgYGNvbnRyYXN0YCBhbmQgYHNoYWRlZGAuXCJcbiAgICAgICAgfSxcblxuICAgICAgICBvcmllbnRhdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJPcmllbnRhdGlvbiBvZiB0aGUgTmF2IEJhci4gUG9zc2libGUgdmFsdWVzIGFyZSBgaG9yaXpvbnRhbGAgYW5kIGB2ZXJ0aWNhbGAuIERlZmF1bHQ6IGBob3Jpem9udGFsYC5cIlxuICAgICAgICB9LFxuXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGhlbHA6IFwiU3BlY2lmaWVzIHRoZSBib2xkbmVzcyBvZiB0aGUgbmF2YmFyLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGBzYCBhbmQgYG1gLlwiXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5hcHBlYXJhbmNlID0gXCJjb250cmFzdFwiO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCI7XG4gICAgICAgIHRoaXMuc2l6ZSA9IFwic1wiO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPSR7Y2xhc3NuYW1lcyh7IFxuICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMuYXBwZWFyYW5jZV06IHRydWUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJob3Jpem9udGFsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRhaW5lclwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1wic2l6ZS1cIiArIHRoaXMuc2l6ZV06IHRydWUgXG4gICAgICAgICAgICAgICAgICAgIH0pfT5cblxuICAgICAgICAgICAgICAgICAgICA8dy1ncmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHctZ3JpZC1pdGVtIGxnPVwiM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx3LWJyYW5kIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwiJHt0aGlzLmFwcGVhcmFuY2V9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbz1cIi93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vYXNzZXRzL2ltYWdlcy9sb2dvL2xvZ28uc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwPVwiRGVzaWduIFN5c3RlbS5cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJhbmQ9XCJ3ZWxsbnIuXCI+PC93LWJyYW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC93LWdyaWQtaXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHctZ3JpZC1pdGVtIGxnPVwiMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dy1ob3Jpem9udGFsLW5hdiBjbGFzcz1cIm1haW4tbmF2XCIgYXBwZWFyYW5jZT1cIiR7dGhpcy5hcHBlYXJhbmNlfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaXRlbVwiIHNsb3Q9XCJpdGVtXCI+PC9zbG90PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdy1ob3Jpem9udGFsLW5hdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdy1ncmlkLWl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx3LWdyaWQtaXRlbSBsZz1cIjNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiY29udHJvbHNcIj48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ctZ3JpZC1pdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L3ctZ3JpZD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9JHtjbGFzc25hbWVzKHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5hcHBlYXJhbmNlXTogdHJ1ZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRhaW5lclwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1wic2l6ZS1cIiArIHRoaXMuc2l6ZV06IHRydWUgXG4gICAgICAgICAgICAgICAgICAgIH0pfT5cblxuICAgICAgICAgICAgICAgICAgICA8dy12ZXJ0aWNhbC1uYXYgYXBwZWFyYW5jZT1cIiR7dGhpcy5hcHBlYXJhbmNlfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cIml0ZW1cIiBzbG90PVwiaXRlbVwiPjwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgPC93LXZlcnRpY2FsLW5hdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndy1uYXZiYXInLCBXTmF2YmFyKTsiLCJleHBvcnQgZnVuY3Rpb24gY2xhc3NuYW1lcyhjbGFzc2VzKSB7XG4gICAgY29uc3QgbmFtZXMgPSBbXVxuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoY2xhc3NlcykpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBuYW1lcy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmFtZXMuam9pbihcIiBcIik7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGRlZGVudChzdHJpbmdzLCAuLi52YWx1ZXMpIHtcbiAgICAvLyAkRmxvd0ZpeE1lOiBGbG93IGRvZXNuJ3QgdW5kZXN0YW5kIC5yYXdcbiAgICBjb25zdCByYXcgPSB0eXBlb2Ygc3RyaW5ncyA9PT0gXCJzdHJpbmdcIiA/IFtzdHJpbmdzXSA6IHN0cmluZ3MucmF3O1xuXG4gICAgLy8gZmlyc3QsIHBlcmZvcm0gaW50ZXJwb2xhdGlvblxuICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmF3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCArPSByYXdbaV1cbiAgICAgICAgICAgIC8vIGpvaW4gbGluZXMgd2hlbiB0aGVyZSBpcyBhIHN1cHByZXNzZWQgbmV3bGluZVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcXG5bIFxcdF0qL2csIFwiXCIpXG4gICAgICAgICAgICAvLyBoYW5kbGUgZXNjYXBlZCBiYWNrdGlja3NcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcYC9nLCBcImBcIik7XG5cbiAgICAgICAgaWYgKGkgPCB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWVzW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbm93IHN0cmlwIGluZGVudGF0aW9uXG4gICAgY29uc3QgbGluZXMgPSByZXN1bHQuc3BsaXQoXCJcXG5cIik7XG4gICAgbGV0IG1pbmRlbnQgPSBudWxsO1xuICAgIGxpbmVzLmZvckVhY2gobCA9PiB7XG4gICAgICAgIGxldCBtID0gbC5tYXRjaCgvXihcXHMrKVxcUysvKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIGxldCBpbmRlbnQgPSBtWzFdLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICghbWluZGVudCkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgdGhlIGZpcnN0IGluZGVudGVkIGxpbmVcbiAgICAgICAgICAgICAgICBtaW5kZW50ID0gaW5kZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtaW5kZW50ID0gTWF0aC5taW4obWluZGVudCwgaW5kZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG1pbmRlbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbSA9IG1pbmRlbnQ7IC8vIGFwcGVhc2UgRmxvd1xuICAgICAgICByZXN1bHQgPSBsaW5lcy5tYXAobCA9PiBsWzBdID09PSBcIiBcIiA/IGwuc2xpY2UobSkgOiBsKS5qb2luKFwiXFxuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgLy8gZGVkZW50IGVhdHMgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZSB0b29cbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAvLyBoYW5kbGUgZXNjYXBlZCBuZXdsaW5lcyBhdCB0aGUgZW5kIHRvIGVuc3VyZSB0aGV5IGRvbid0IGdldCBzdHJpcHBlZCB0b29cbiAgICAgICAgLnJlcGxhY2UoL1xcXFxuL2csIFwiXFxuXCIpO1xufSIsIi8qKlxuICogQmFzZWQgb24gaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FkYW12bGVnZ2V0dC9kcmF3ZG93bi9tYXN0ZXIvZHJhd2Rvd24uanMuXG4gKi9cblxuXG5leHBvcnQgZnVuY3Rpb24gbWFya2Rvd24oc3JjKSB7XG4gICAgdmFyIHJ4X2x0ID0gLzwvZztcbiAgICB2YXIgcnhfZ3QgPSAvPi9nO1xuICAgIHZhciByeF9zcGFjZSA9IC9cXHR8XFxyfFxcdWY4ZmYvZztcbiAgICB2YXIgcnhfZXNjYXBlID0gL1xcXFwoW1xcXFxcXHxgKl97fVxcW1xcXSgpIytcXC1+XSkvZztcbiAgICB2YXIgcnhfaHIgPSAvXihbKlxcLT1fXSAqKXszLH0kL2dtO1xuICAgIHZhciByeF9ibG9ja3F1b3RlID0gL1xcbiAqJmd0OyAqKFteXSo/KSg/PShcXG58JCl7Mn0pL2c7XG4gICAgdmFyIHJ4X2xpc3QgPSAvXFxuKCAqKSg/OlsqXFwtK118KChcXGQrKXwoW2Etel0pfFtBLVpdKVsuKV0pICsoW15dKj8pKD89KFxcbnwkKXsyfSkvZztcbiAgICB2YXIgcnhfbGlzdGpvaW4gPSAvPFxcLyhvbHx1bCk+XFxuXFxuPFxcMT4vZztcbiAgICB2YXIgcnhfaGlnaGxpZ2h0ID0gLyhefFteQS1aYS16XFxkXFxcXF0pKChbKl9dKXwofil8KFxcXil8KC0tKXwoXFwrXFwrKXxgKShcXDI/KShbXjxdKj8pXFwyXFw4KD8hXFwyKSg/PVxcV3xffCQpL2c7XG4gICAgdmFyIHJ4X2NvZGUgPSAvXFxuKChgYGB8fn5+KS4qXFxuPyhbXl0qPylcXG4/XFwyfCgoICAgIC4qP1xcbikrKSkvZztcbiAgICB2YXIgcnhfbGluayA9IC8oKCE/KVxcWyguKj8pXFxdXFwoKC4qPykoIFwiLipcIik/XFwpfFxcXFwoW1xcXFxgKl97fVxcW1xcXSgpIytcXC0uIX5dKSkvZztcbiAgICB2YXIgcnhfdGFibGUgPSAvXFxuKCggKlxcfC4qP1xcfCAqXFxuKSspL2c7XG4gICAgdmFyIHJ4X3RoZWFkID0gL14uKlxcbiggKlxcfCggKlxcOj8tK1xcOj8tK1xcOj8gKlxcfCkqICpcXG58KS87XG4gICAgdmFyIHJ4X3JvdyA9IC8uKlxcbi9nO1xuICAgIHZhciByeF9jZWxsID0gL1xcfHwoLio/W15cXFxcXSlcXHwvZztcbiAgICB2YXIgcnhfaGVhZGluZyA9IC8oPz1efD58XFxuKShbPlxcc10qPykoI3sxLDZ9KSAoLio/KSggIyopPyAqKD89XFxufCQpL2c7XG4gICAgdmFyIHJ4X3BhcmEgPSAvKD89Xnw+fFxcbilcXHMqXFxuKyhbXjxdKz8pXFxuK1xccyooPz1cXG58PHwkKS9nO1xuICAgIHZhciByeF9zdGFzaCA9IC8tXFxkK1xcdWY4ZmYvZztcblxuICAgIGZ1bmN0aW9uIHJlcGxhY2UocmV4LCBmbikge1xuICAgICAgICBzcmMgPSBzcmMucmVwbGFjZShyZXgsIGZuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbGVtZW50KHRhZywgY29udGVudCkge1xuICAgICAgICByZXR1cm4gJzwnICsgdGFnICsgJz4nICsgY29udGVudCArICc8LycgKyB0YWcgKyAnPic7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmxvY2txdW90ZShzcmMpIHtcbiAgICAgICAgcmV0dXJuIHNyYy5yZXBsYWNlKHJ4X2Jsb2NrcXVvdGUsIGZ1bmN0aW9uKGFsbCwgY29udGVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQoJ2Jsb2NrcXVvdGUnLCBibG9ja3F1b3RlKGhpZ2hsaWdodChjb250ZW50LnJlcGxhY2UoL14gKiZndDsgKi9nbSwgJycpKSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0KHNyYykge1xuICAgICAgICByZXR1cm4gc3JjLnJlcGxhY2UocnhfbGlzdCwgZnVuY3Rpb24oYWxsLCBpbmQsIG9sLCBudW0sIGxvdywgY29udGVudCkge1xuICAgICAgICAgICAgdmFyIGVudHJ5ID0gZWxlbWVudCgnbGknLCBoaWdobGlnaHQoY29udGVudC5zcGxpdChcbiAgICAgICAgICAgICAgICBSZWdFeHAoJ1xcbiA/JyArIGluZCArICcoPzooPzpcXFxcZCt8W2EtekEtWl0pWy4pXXxbKlxcXFwtK10pICsnLCAnZycpKS5tYXAobGlzdCkuam9pbignPC9saT48bGk+JykpKTtcblxuICAgICAgICAgICAgcmV0dXJuICdcXG4nICsgKG9sXG4gICAgICAgICAgICAgICAgPyAnPG9sIHN0YXJ0PVwiJyArIChudW1cbiAgICAgICAgICAgICAgICAgICAgPyBvbCArICdcIj4nXG4gICAgICAgICAgICAgICAgICAgIDogcGFyc2VJbnQob2wsMzYpIC0gOSArICdcIiBzdHlsZT1cImxpc3Qtc3R5bGUtdHlwZTonICsgKGxvdyA/ICdsb3cnIDogJ3VwcCcpICsgJ2VyLWFscGhhXCI+JykgKyBlbnRyeSArICc8L29sPidcbiAgICAgICAgICAgICAgICA6IGVsZW1lbnQoJ3VsJywgZW50cnkpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlnaGxpZ2h0KHNyYykge1xuICAgICAgICByZXR1cm4gc3JjLnJlcGxhY2UocnhfaGlnaGxpZ2h0LCBmdW5jdGlvbihhbGwsIF8sIHAxLCBlbXAsIHN1Yiwgc3VwLCBzbWFsbCwgYmlnLCBwMiwgY29udGVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF8gKyBlbGVtZW50KFxuICAgICAgICAgICAgICAgICAgZW1wID8gKHAyID8gJ3N0cm9uZycgOiAnZW0nKVxuICAgICAgICAgICAgICAgIDogc3ViID8gKHAyID8gJ3MnIDogJ3N1YicpXG4gICAgICAgICAgICAgICAgOiBzdXAgPyAnc3VwJ1xuICAgICAgICAgICAgICAgIDogc21hbGwgPyAnc21hbGwnXG4gICAgICAgICAgICAgICAgOiBiaWcgPyAnYmlnJ1xuICAgICAgICAgICAgICAgIDogJ2NvZGUnLFxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodChjb250ZW50KSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuZXNjKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UocnhfZXNjYXBlLCAnJDEnKTtcbiAgICB9XG5cbiAgICB2YXIgc3Rhc2ggPSBbXTtcbiAgICB2YXIgc2kgPSAwO1xuXG4gICAgc3JjID0gJ1xcbicgKyBzcmMgKyAnXFxuJztcblxuICAgIHJlcGxhY2UocnhfbHQsICcmbHQ7Jyk7XG4gICAgcmVwbGFjZShyeF9ndCwgJyZndDsnKTtcbiAgICByZXBsYWNlKHJ4X3NwYWNlLCAnICAnKTtcblxuICAgIC8vIGJsb2NrcXVvdGVcbiAgICBzcmMgPSBibG9ja3F1b3RlKHNyYyk7XG5cbiAgICAvLyBob3Jpem9udGFsIHJ1bGVcbiAgICByZXBsYWNlKHJ4X2hyLCAnPGhyLz4nKTtcblxuICAgIC8vIGxpc3RcbiAgICBzcmMgPSBsaXN0KHNyYyk7XG4gICAgcmVwbGFjZShyeF9saXN0am9pbiwgJycpO1xuXG4gICAgLy8gY29kZVxuICAgIHJlcGxhY2UocnhfY29kZSwgZnVuY3Rpb24oYWxsLCBwMSwgcDIsIHAzLCBwNCkge1xuICAgICAgICBzdGFzaFstLXNpXSA9IGVsZW1lbnQoJ3ByZScsIGVsZW1lbnQoJ2NvZGUnLCBwM3x8cDQucmVwbGFjZSgvXiAgICAvZ20sICcnKSkpO1xuICAgICAgICByZXR1cm4gc2kgKyAnXFx1ZjhmZic7XG4gICAgfSk7XG5cbiAgICAvLyBsaW5rIG9yIGltYWdlXG4gICAgcmVwbGFjZShyeF9saW5rLCBmdW5jdGlvbihhbGwsIHAxLCBwMiwgcDMsIHA0LCBwNSwgcDYpIHtcbiAgICAgICAgc3Rhc2hbLS1zaV0gPSBwNFxuICAgICAgICAgICAgPyBwMlxuICAgICAgICAgICAgICAgID8gJzxpbWcgc3JjPVwiJyArIHA0ICsgJ1wiIGFsdD1cIicgKyBwMyArICdcIi8+J1xuICAgICAgICAgICAgICAgIDogJzxhIGhyZWY9XCInICsgcDQgKyAnXCI+JyArIHVuZXNjKGhpZ2hsaWdodChwMykpICsgJzwvYT4nXG4gICAgICAgICAgICA6IHA2O1xuICAgICAgICByZXR1cm4gc2kgKyAnXFx1ZjhmZic7XG4gICAgfSk7XG5cbiAgICAvLyB0YWJsZVxuICAgIHJlcGxhY2UocnhfdGFibGUsIGZ1bmN0aW9uKGFsbCwgdGFibGUpIHtcbiAgICAgICAgdmFyIHNlcCA9IHRhYmxlLm1hdGNoKHJ4X3RoZWFkKVsxXTtcbiAgICAgICAgcmV0dXJuICdcXG4nICsgZWxlbWVudCgndGFibGUnLFxuICAgICAgICAgICAgdGFibGUucmVwbGFjZShyeF9yb3csIGZ1bmN0aW9uKHJvdywgcmkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcm93ID09IHNlcCA/ICcnIDogZWxlbWVudCgndHInLCByb3cucmVwbGFjZShyeF9jZWxsLCBmdW5jdGlvbihhbGwsIGNlbGwsIGNpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaSA/IGVsZW1lbnQoc2VwICYmICFyaSA/ICd0aCcgOiAndGQnLCB1bmVzYyhoaWdobGlnaHQoY2VsbCB8fCAnJykpKSA6ICcnXG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgfSk7XG5cbiAgICAvLyBoZWFkaW5nXG4gICAgcmVwbGFjZShyeF9oZWFkaW5nLCBmdW5jdGlvbihhbGwsIF8sIHAxLCBwMikgeyByZXR1cm4gXyArIGVsZW1lbnQoJ2gnICsgcDEubGVuZ3RoLCB1bmVzYyhoaWdobGlnaHQocDIpKSkgfSk7XG5cbiAgICAvLyBwYXJhZ3JhcGhcbiAgICByZXBsYWNlKHJ4X3BhcmEsIGZ1bmN0aW9uKGFsbCwgY29udGVudCkgeyByZXR1cm4gZWxlbWVudCgncCcsIHVuZXNjKGhpZ2hsaWdodChjb250ZW50KSkpIH0pO1xuXG4gICAgLy8gc3Rhc2hcbiAgICByZXBsYWNlKHJ4X3N0YXNoLCBmdW5jdGlvbihhbGwpIHsgcmV0dXJuIHN0YXNoW3BhcnNlSW50KGFsbCldIH0pO1xuXG4gICAgcmV0dXJuIHNyYy50cmltKCk7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gQXRvbXNcbmltcG9ydCBcIi4vanMvY29tcG9uZW50cy9hdG9tcy9idXR0b24vYnV0dG9uLmpzXCI7XG5pbXBvcnQgXCIuL2pzL2NvbXBvbmVudHMvYXRvbXMvY29kZS9jb2RlLmpzXCI7XG5pbXBvcnQgXCIuL2pzL2NvbXBvbmVudHMvYXRvbXMvaGVhZGluZy9oZWFkaW5nLmpzXCI7XG5pbXBvcnQgXCIuL2pzL2NvbXBvbmVudHMvYXRvbXMvbWFya2Rvd24vbWFya2Rvd24uanNcIjtcbmltcG9ydCBcIi4vanMvY29tcG9uZW50cy9hdG9tcy9wYW5lL3BhbmUuanNcIjtcbmltcG9ydCBcIi4vanMvY29tcG9uZW50cy9hdG9tcy9wYXJhZ3JhcGgvcGFyYWdyYXBoLmpzXCI7XG5pbXBvcnQgXCIuL2pzL2NvbXBvbmVudHMvYXRvbXMvcHJlL3ByZS5qc1wiO1xuaW1wb3J0IFwiLi9qcy9jb21wb25lbnRzL2F0b21zL3RhYnMvdGFicy5qc1wiO1xuaW1wb3J0IFwiLi9qcy9jb21wb25lbnRzL2F0b21zL3RleHQtaW5wdXQvdGV4dC1pbnB1dC5qc1wiO1xuXG4vLyBMYXlvdXRcbmltcG9ydCBcIi4vanMvY29tcG9uZW50cy9sYXlvdXQvY29udGFpbmVyL2NvbnRhaW5lci5qc1wiO1xuaW1wb3J0IFwiLi9qcy9jb21wb25lbnRzL2xheW91dC9maXhlZC1oZWFkZXIvZml4ZWQtaGVhZGVyLmpzXCI7XG5pbXBvcnQgXCIuL2pzL2NvbXBvbmVudHMvbGF5b3V0L2dyaWQvZ3JpZC5qc1wiO1xuXG4vLyBNb2xlY3VsZXNcbmltcG9ydCBcIi4vanMvY29tcG9uZW50cy9tb2xlY3VsZXMvY3NzLXJ1bGVzLXRhYmxlL2Nzcy1ydWxlcy10YWJsZS5qc1wiO1xuaW1wb3J0IFwiLi9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9icmFuZC9icmFuZC5qc1wiO1xuaW1wb3J0IFwiLi9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9lbGVtZW50LWV4YW1wbGUvZWxlbWVudC1leGFtcGxlLmpzXCI7XG5pbXBvcnQgXCIuL2pzL2NvbXBvbmVudHMvbW9sZWN1bGVzL2VsZW1lbnQtcHJvcGVydGllcy10YWJsZS9lbGVtZW50LXByb3BlcnRpZXMtdGFibGUuanNcIjtcbmltcG9ydCBcIi4vanMvY29tcG9uZW50cy9tb2xlY3VsZXMvaG9yaXpvbnRhbC1uYXYvaG9yaXpvbnRhbC1uYXYuanNcIjtcbmltcG9ydCBcIi4vanMvY29tcG9uZW50cy9tb2xlY3VsZXMvdmVydGljYWwtbmF2L3ZlcnRpY2FsLW5hdi5qc1wiO1xuXG4vLyBPcmdhbmlzbXNcbmltcG9ydCBcIi4vanMvY29tcG9uZW50cy9vcmdhbmlzbXMvZm9vdGVyL2Zvb3Rlci5qc1wiO1xuaW1wb3J0IFwiLi9qcy9jb21wb25lbnRzL29yZ2FuaXNtcy9uYXZiYXIvbmF2YmFyLmpzXCI7XG5cbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5cbmltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQnO1xuXG5cbmV4cG9ydCBjbGFzcyBXRG9jc1dyYXBwZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8dy1maXhlZC1oZWFkZXIgc3BhY2luZz1cIm1cIj5cbiAgICAgICAgICAgICAgICA8dy1uYXZiYXIgYXBwZWFyYW5jZT1cInNoYWRlZFwiIHNpemU9XCJtXCIgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBzbG90PVwiaXRlbVwiIGhyZWY9XCIvaW50cm9kdWN0aW9uXCIgY2xhc3M9XCJ3LWFjdGl2ZVwiPkludHJvZHVjdGlvbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgc2xvdD1cIml0ZW1cIiBocmVmPVwiL2ZvdW5kYXRpb25zXCI+Rm91bmRhdGlvbnM8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIHNsb3Q9XCJpdGVtXCIgaHJlZj1cIi9jb21wb25lbnRzXCI+Q29tcG9uZW50czwvYT5cbiAgICAgICAgICAgICAgICA8L3ctbmF2YmFyPlxuXG4gICAgICAgICAgICAgICAgPHctbmF2YmFyIHNsb3Q9XCJuYXZcIiBhcHBlYXJhbmNlPVwic2hhZGVkXCIgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHNpemU9XCJtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIHNsb3Q9XCJpdGVtXCIgaHJlZj1cIi9pbnRyb2R1Y3Rpb25cIiBjbGFzcz1cInctYWN0aXZlXCI+SW50cm9kdWN0aW9uPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBzbG90PVwiaXRlbVwiIGhyZWY9XCIvZm91bmRhdGlvbnNcIj5Gb3VuZGF0aW9uczwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgc2xvdD1cIml0ZW1cIiBocmVmPVwiL2NvbXBvbmVudHNcIj5Db21wb25lbnRzPC9hPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8dy12ZXJ0aWNhbC1uYXYtLXRpdGxlIHNsb3Q9XCJpdGVtXCI+QXRvbXM8L3ctdmVydGljYWwtbmF2LS10aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPGEgc2xvdD1cIml0ZW1cIiBocmVmPVwiL2RvY3MvY29tcG9uZW50cy9hdG9tcy9oZWFkaW5nLmh0bWxcIj5IZWFkaW5nPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBzbG90PVwiaXRlbVwiIGhyZWY9XCIvZG9jcy9jb21wb25lbnRzL2F0b21zL21hcmtkb3duLmh0bWxcIj5NYXJrZG93bjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgc2xvdD1cIml0ZW1cIiBocmVmPVwiL2RvY3MvY29tcG9uZW50cy9hdG9tcy90YWJzLmh0bWxcIj5UYWJzPC9hPlxuICAgICAgICAgICAgICAgIDwvdy1uYXZiYXI+XG5cbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiYXJ0aWNsZVwiIHNsb3Q9XCJhcnRpY2xlXCI+PC9zbG90PlxuXG4gICAgICAgICAgICAgICAgPHctZm9vdGVyIHNsb3Q9XCJmb290ZXJcIiBzcGFjaW5nPVwibVwiIGFwcGVhcmFuY2U9XCJsaWdodC1jb250cmFzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJjb2wtMVwiPiZjb3B5OyBNaWNoYWVsIFdlbGxuZXIgMjAyMy48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3ctZm9vdGVyPlxuICAgICAgICAgICAgPC93LWZpeGVkLWhlYWRlcj5cbiAgICAgICAgYFxuICAgIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctZG9jcy13cmFwcGVyJywgV0RvY3NXcmFwcGVyKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=