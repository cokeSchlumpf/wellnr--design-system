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
___CSS_LOADER_EXPORT___.push([module.id, " :root {\n    /*\n     * Base Colors\n     */\n    --black: #121212;\n    --gray900: #101840;\n    --gray800: #474d66;\n    --gray700: #696f8c;\n    --gray600: #8f95b2;\n    --gray500: #c1c4d6;\n    --gray400: #d8dae5;\n    --gray300: #E6E8F0;\n    --gray200: #edeff5;\n    --gray100: #F4F5F9;\n    --gray90: #F4F6FA;\n    --gray75: #F9FAFC;\n    --gray50: #FAFBFF;\n    --white: #FFFFFF;\n\n    --blue900: #0A1433;\n    --blue800: #142966;\n    --blue700: #1F3D99;\n    --blue600: #2952CC;\n    --blue500: #3366FF;\n    --blue400: #5C85FF;\n    --blue300: #85A3FF;\n    --blue200: #ADC2FF;\n    --blue100: #D6E0FF;\n    --blue50: #EBF0FF;\n    --blue25: #F3F6FF;\n\n    --red700: #7D2828;\n    --red600: #A73636;\n    --red500: #D14343;\n    --red300: #EE9191;\n    --red100: #F9DADA;\n    --red25: #FDF4F4;\n\n    --green900: #10261E;\n    --green800: #214C3C;\n    --green700: #317159;\n    --green600: #429777;\n    --green500: #52BD95;\n    --green400: #75CAAA;\n    --green300: #97D7BF;\n    --green200: #BAE5D5;\n    --green100: #DCF2EA;\n    --green25: #F5FBF8;\n\n    --orange700: #996A13;\n    --orange500: #FFB020;\n    --orange100: #F8E3DA;\n    --orange25: #FFFAF2;\n\n    --purple600: #6E62B6;\n    --purple100: #E7E4F9;\n\n    --teal800: #0F5156;\n    --teal100: #D3F5F7;\n\n    --yellow800: #66460D;\n    --yellow100: #FFEFD2;\n\n   /* \n   * Color Tokens \n   */\n   --w-background-color: var(--gray75);\n   --w-background-color-300: var(--gray50);\n   --w-background-color-400: var(--gray75);\n   --w-background-color-500: var(--gray100);\n   --w-background-color-600: var(--gray200);\n   --w-background-color-700: var(--gray300);\n   --w-background-color-800: var(--gray400);\n   --w-background-color-900: var(--gray500);\n   --w-background-color-1000: var(--gray600);\n   --w-background-color-1100: var(--gray700);\n   --w-background-color-1200: var(--gray800);\n   --w-background-color-1300: var(--gray900);\n\n   --w-text-color: var(--gray900);\n   --w-text-color-300: var(--gray800);\n   --w-text-color-400: var(--gray900);\n   --w-text-color-500: var(--black);\n\n   --w-link-color: var(--blue500);\n   --w-link-hover-color: var(--blue700);\n\n   --w-muted-color: var(--gray700);\n   --w-muted-text-color: var(--gray900);\n\n   --w-primary-color-300: var(--blue400);\n   --w-primary-color-400: var(--blue500);\n   --w-primary-color-500: var(--blue600);\n   --w-primary-color-600: var(--blue700);\n   --w-primary-color-700: var(--blue800);\n   --w-primary-color-800: var(--blue900);\n   --w-primary-color: var(--w-primary-color-400);\n   --w-primary-hover-color: var(--blue600);\n\n   --w-primary-text-color: var(--gray200);\n   --w-primary-text-color-300: var(--white);\n   --w-primary-text-color-400: var(--gray200);\n   --w-primary-text-color-500: var(--gray400);\n\n   --w-secondary-color: var( --green600);\n   --w-secondary-hover-color: var( --green700);\n   --w-secondary-text-color: var(--white);\n\n   --w-danger-color-300: var(--red300);\n   --w-danger-color-400: var(--red300);\n   --w-danger-color-500: var(--red500);\n   --w-danger-color-600: var(--red500);\n   --w-danger-color-700: var(--red600);\n   --w-danger-color-800: var(--red600);\n\n   --w-danger-color: var(--w-danger-color-500);\n   --w-danger-hover-color: var(--w-danger-color-700);\n   --w-danger-text-color: var(--gray200);\n   --w-danger-text-color-300: var(--white);\n   --w-danger-text-color-400: var(--gray200);\n   --w-danger-text-color-500: var(--gray400);\n\n   --w-success-color-300: var(--green300);\n   --w-success-color-400: var(--green400);\n   --w-success-color-500: var(--green500);\n   --w-success-color-600: var(--green600);\n   --w-success-color-700: var(--green700);\n   --w-success-color-800: var(--green800);\n\n   --w-success-color: var(--w-success-color-500);\n   --w-success-hover-color: var(--w-success-color-600);\n   --w-success-text-color: var(--gray200);\n   --w-success-text-color-300: var(--white);\n   --w-success-text-color-400: var(--gray200);\n   --w-success-text-color-500: var(--gray400);\n }", "",{"version":3,"sources":["webpack://./src/css/colors.css"],"names":[],"mappings":"CAAC;IACG;;MAEE;IACF,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;;IAEhB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;;IAEjB,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;;IAEhB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;;IAElB,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;IACpB,mBAAmB;;IAEnB,oBAAoB;IACpB,oBAAoB;;IAEpB,kBAAkB;IAClB,kBAAkB;;IAElB,oBAAoB;IACpB,oBAAoB;;GAErB;;IAEC;GACD,mCAAmC;GACnC,uCAAuC;GACvC,uCAAuC;GACvC,wCAAwC;GACxC,wCAAwC;GACxC,wCAAwC;GACxC,wCAAwC;GACxC,wCAAwC;GACxC,yCAAyC;GACzC,yCAAyC;GACzC,yCAAyC;GACzC,yCAAyC;;GAEzC,8BAA8B;GAC9B,kCAAkC;GAClC,kCAAkC;GAClC,gCAAgC;;GAEhC,8BAA8B;GAC9B,oCAAoC;;GAEpC,+BAA+B;GAC/B,oCAAoC;;GAEpC,qCAAqC;GACrC,qCAAqC;GACrC,qCAAqC;GACrC,qCAAqC;GACrC,qCAAqC;GACrC,qCAAqC;GACrC,6CAA6C;GAC7C,uCAAuC;;GAEvC,sCAAsC;GACtC,wCAAwC;GACxC,0CAA0C;GAC1C,0CAA0C;;GAE1C,qCAAqC;GACrC,2CAA2C;GAC3C,sCAAsC;;GAEtC,mCAAmC;GACnC,mCAAmC;GACnC,mCAAmC;GACnC,mCAAmC;GACnC,mCAAmC;GACnC,mCAAmC;;GAEnC,2CAA2C;GAC3C,iDAAiD;GACjD,qCAAqC;GACrC,uCAAuC;GACvC,yCAAyC;GACzC,yCAAyC;;GAEzC,sCAAsC;GACtC,sCAAsC;GACtC,sCAAsC;GACtC,sCAAsC;GACtC,sCAAsC;GACtC,sCAAsC;;GAEtC,6CAA6C;GAC7C,mDAAmD;GACnD,sCAAsC;GACtC,wCAAwC;GACxC,0CAA0C;GAC1C,0CAA0C;CAC5C","sourcesContent":[" :root {\n    /*\n     * Base Colors\n     */\n    --black: #121212;\n    --gray900: #101840;\n    --gray800: #474d66;\n    --gray700: #696f8c;\n    --gray600: #8f95b2;\n    --gray500: #c1c4d6;\n    --gray400: #d8dae5;\n    --gray300: #E6E8F0;\n    --gray200: #edeff5;\n    --gray100: #F4F5F9;\n    --gray90: #F4F6FA;\n    --gray75: #F9FAFC;\n    --gray50: #FAFBFF;\n    --white: #FFFFFF;\n\n    --blue900: #0A1433;\n    --blue800: #142966;\n    --blue700: #1F3D99;\n    --blue600: #2952CC;\n    --blue500: #3366FF;\n    --blue400: #5C85FF;\n    --blue300: #85A3FF;\n    --blue200: #ADC2FF;\n    --blue100: #D6E0FF;\n    --blue50: #EBF0FF;\n    --blue25: #F3F6FF;\n\n    --red700: #7D2828;\n    --red600: #A73636;\n    --red500: #D14343;\n    --red300: #EE9191;\n    --red100: #F9DADA;\n    --red25: #FDF4F4;\n\n    --green900: #10261E;\n    --green800: #214C3C;\n    --green700: #317159;\n    --green600: #429777;\n    --green500: #52BD95;\n    --green400: #75CAAA;\n    --green300: #97D7BF;\n    --green200: #BAE5D5;\n    --green100: #DCF2EA;\n    --green25: #F5FBF8;\n\n    --orange700: #996A13;\n    --orange500: #FFB020;\n    --orange100: #F8E3DA;\n    --orange25: #FFFAF2;\n\n    --purple600: #6E62B6;\n    --purple100: #E7E4F9;\n\n    --teal800: #0F5156;\n    --teal100: #D3F5F7;\n\n    --yellow800: #66460D;\n    --yellow100: #FFEFD2;\n\n   /* \n   * Color Tokens \n   */\n   --w-background-color: var(--gray75);\n   --w-background-color-300: var(--gray50);\n   --w-background-color-400: var(--gray75);\n   --w-background-color-500: var(--gray100);\n   --w-background-color-600: var(--gray200);\n   --w-background-color-700: var(--gray300);\n   --w-background-color-800: var(--gray400);\n   --w-background-color-900: var(--gray500);\n   --w-background-color-1000: var(--gray600);\n   --w-background-color-1100: var(--gray700);\n   --w-background-color-1200: var(--gray800);\n   --w-background-color-1300: var(--gray900);\n\n   --w-text-color: var(--gray900);\n   --w-text-color-300: var(--gray800);\n   --w-text-color-400: var(--gray900);\n   --w-text-color-500: var(--black);\n\n   --w-link-color: var(--blue500);\n   --w-link-hover-color: var(--blue700);\n\n   --w-muted-color: var(--gray700);\n   --w-muted-text-color: var(--gray900);\n\n   --w-primary-color-300: var(--blue400);\n   --w-primary-color-400: var(--blue500);\n   --w-primary-color-500: var(--blue600);\n   --w-primary-color-600: var(--blue700);\n   --w-primary-color-700: var(--blue800);\n   --w-primary-color-800: var(--blue900);\n   --w-primary-color: var(--w-primary-color-400);\n   --w-primary-hover-color: var(--blue600);\n\n   --w-primary-text-color: var(--gray200);\n   --w-primary-text-color-300: var(--white);\n   --w-primary-text-color-400: var(--gray200);\n   --w-primary-text-color-500: var(--gray400);\n\n   --w-secondary-color: var( --green600);\n   --w-secondary-hover-color: var( --green700);\n   --w-secondary-text-color: var(--white);\n\n   --w-danger-color-300: var(--red300);\n   --w-danger-color-400: var(--red300);\n   --w-danger-color-500: var(--red500);\n   --w-danger-color-600: var(--red500);\n   --w-danger-color-700: var(--red600);\n   --w-danger-color-800: var(--red600);\n\n   --w-danger-color: var(--w-danger-color-500);\n   --w-danger-hover-color: var(--w-danger-color-700);\n   --w-danger-text-color: var(--gray200);\n   --w-danger-text-color-300: var(--white);\n   --w-danger-text-color-400: var(--gray200);\n   --w-danger-text-color-500: var(--gray400);\n\n   --w-success-color-300: var(--green300);\n   --w-success-color-400: var(--green400);\n   --w-success-color-500: var(--green500);\n   --w-success-color-600: var(--green600);\n   --w-success-color-700: var(--green700);\n   --w-success-color-800: var(--green800);\n\n   --w-success-color: var(--w-success-color-500);\n   --w-success-hover-color: var(--w-success-color-600);\n   --w-success-text-color: var(--gray200);\n   --w-success-text-color-300: var(--white);\n   --w-success-text-color-400: var(--gray200);\n   --w-success-text-color-500: var(--gray400);\n }"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --w-spacing-100: 0.4em;\n    --w-spacing-200: 0.6em;\n    --w-spacing-300: 1em;\n    --w-spacing-400: 1.2em;\n    --w-spacing-500: 1.6em;\n    --w-spacing-600: 2em;\n    --w-spacing-700: 2.5em;\n    --w-spacing-800: 3em;\n\n    --w-spacing--page--vertical-space: var(--w-spacing-300);\n    --w-spacing--page--horizontal-space: var(--w-spacing-600);\n\n    --w-border-width--thin: 1px;\n    --w-border-width--regular: 2px;\n\n    --w-border-radius-100: 0.2em;\n    --w-border-radius-200: 0.4em;\n    --w-border-radius-300: 0.6em;\n    --w-border-radius-400: 0.8em;\n    --w-border-radius-500: 1em;\n\n\n    /*\n     * If increasing column number to a value > 16, /components/layout/grid/grid.js must be adopted as well.\n     */\n    --w-grid-columns: 16;\n    --w-grid-template-columns: repeat(var(--w-grid-columns), 1fr [col]);\n\n    --w-inputs--size-s--height: 2em;\n    --w-inputs--size-m--height: 3em;\n    --w-inputs--size-l--height: 4em;\n}", "",{"version":3,"sources":["webpack://./src/css/spacing.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,sBAAsB;IACtB,oBAAoB;IACpB,sBAAsB;IACtB,sBAAsB;IACtB,oBAAoB;IACpB,sBAAsB;IACtB,oBAAoB;;IAEpB,uDAAuD;IACvD,yDAAyD;;IAEzD,2BAA2B;IAC3B,8BAA8B;;IAE9B,4BAA4B;IAC5B,4BAA4B;IAC5B,4BAA4B;IAC5B,4BAA4B;IAC5B,0BAA0B;;;IAG1B;;MAEE;IACF,oBAAoB;IACpB,mEAAmE;;IAEnE,+BAA+B;IAC/B,+BAA+B;IAC/B,+BAA+B;AACnC","sourcesContent":[":root {\n    --w-spacing-100: 0.4em;\n    --w-spacing-200: 0.6em;\n    --w-spacing-300: 1em;\n    --w-spacing-400: 1.2em;\n    --w-spacing-500: 1.6em;\n    --w-spacing-600: 2em;\n    --w-spacing-700: 2.5em;\n    --w-spacing-800: 3em;\n\n    --w-spacing--page--vertical-space: var(--w-spacing-300);\n    --w-spacing--page--horizontal-space: var(--w-spacing-600);\n\n    --w-border-width--thin: 1px;\n    --w-border-width--regular: 2px;\n\n    --w-border-radius-100: 0.2em;\n    --w-border-radius-200: 0.4em;\n    --w-border-radius-300: 0.6em;\n    --w-border-radius-400: 0.8em;\n    --w-border-radius-500: 1em;\n\n\n    /*\n     * If increasing column number to a value > 16, /components/layout/grid/grid.js must be adopted as well.\n     */\n    --w-grid-columns: 16;\n    --w-grid-template-columns: repeat(var(--w-grid-columns), 1fr [col]);\n\n    --w-inputs--size-s--height: 2em;\n    --w-inputs--size-m--height: 3em;\n    --w-inputs--size-l--height: 4em;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --w-button--transition: all 100ms linear;\n\n    --w-button--font-weight: var(--w-font-weight-text-semibold);\n    --w-button--padding-left: var(--w-spacing-300);\n    --w-button--padding-right: var(--w-spacing-800);\n    --w-button--border-radius: var(--w-border-radius-100);\n    --w-button--line-height: var(--w-inputs--size-m--height);\n\n    --w-button--appearance-link--padding-left: var(--w-spacing-300);\n    --w-button--appearance-link--padding-right: var(--w-spacing-300);\n\n    --w-button--size-s--line-height: var(--w-inputs--size-s--height);\n    --w-button--size-l--line-height: var(--w-inputs--size-l--height);\n\n    /*\n     * Default.\n     */\n    --w-button--color: var(--w-background-color-800);\n    --w-butoon--border-color: var(--w-background-color-1000);\n    --w-button--text--color: var(--w-text-color-300);\n\n    --w-button--hover--color: var(--w-background-color-900);\n    --w-button--hover--border-color: var(--w-background-color-1100);\n    --w-button--hover--text--color: var(--w-text-color-500);\n\n    --w-button--appearance-outline--text-color: var(--w-text-color-300);\n    --w-button--appearance-outline--hover--text-color: var(--w-text-color-500);\n\n    /*\n     * Primary\n     */\n    --w-button--intent-primary--color: var(--w-primary-color);\n    --w-butoon--intent-primary--border-color: var(--w-primary-color-600);\n    --w-button--intent-primary--text--color: var(--w-primary-text-color-300);\n    --w-button--intent-primary--hover--color: var(--w-primary-hover-color);\n    --w-button--intent-primary--hover--border-color: var(--w-primary-color-800);\n    --w-button--intent-primary--hover--text--color: var(--w-primary-text-color-300);\n    --w-button--intent-primary--appearance-outline--text-color: var(--w-primary-color);\n    --w-button--intent-primary--appearance-outline--hover--text-color: var(--w-primary-hover-color);\n\n    /*\n     * Success\n     */\n    --w-button--intent-success--color: var(--w-success-color);\n    --w-butoon--intent-success--border-color: var(--w-success-color-600);\n    --w-button--intent-success--text--color: var(--w-success-text-color-300);\n    --w-button--intent-success--hover--color: var(--w-success-hover-color);\n    --w-button--intent-success--hover--border-color: var(--w-success-color-800);\n    --w-button--intent-success--hover--text--color: var(--w-success-text-color-300);\n    --w-button--intent-success--appearance-outline--text-color: var(--w-success-color);\n    --w-button--intent-success--appearance-outline--hover--text-color: var(--w-success-hover-color);\n\n    /*\n     * Danger\n     */\n    --w-button--intent-danger--color: var(--w-danger-color);\n    --w-butoon--intent-danger--border-color: var(--w-danger-color-600);\n    --w-button--intent-danger--text--color: var(--w-danger-text-color-300);\n    --w-button--intent-danger--hover--color: var(--w-danger-hover-color);\n    --w-button--intent-danger--hover--border-color: var(--w-danger-color-800);\n    --w-button--intent-danger--hover--text--color: var(--w-danger-text-color-300);\n    --w-button--intent-danger--appearance-outline--text-color: var(--w-danger-color);\n    --w-button--intent-danger--appearance-outline--hover--text-color: var(--w-danger-hover-color);\n}\n\n\nbutton.primary {\nborder: 1px solid var(--primary-color);\nbackground-color: var(--primary-color);\ncolor: var(--primary-text-color);\n}\n\nbutton.primary:hover {\nbackground-color: var(--primary-hover-color);\n}\n\nbutton.secondary {\nborder: 1px solid var(--secondary-color);\nbackground-color: var(--secondary-color);\ncolor: var(--primary-text-color);\n}\n\nbutton.secondary:hover {\nbackground-color: var(--secondary-hover-color);\n}\n\nbutton.tertiary {\nbackground-color: transparent;\nborder: 1px solid var(--primary-color);\ncolor: var(--primary-color);\n}\n\nbutton.tertiary:hover {\nbackground-color: var(--primary-color);\ncolor: var(--primary-text-color);\n}\n\nbutton.danger {\nborder: 1px solid var(--danger-color);\nbackground-color: var(--danger-color);\ncolor: var(--primary-text-color);\n}\n\nbutton.danger:hover {\nbackground-color: var(--danger-hover-color);\n}\n\nbutton.ghost {\nborder: 1px solid transparent;\nbackground-color: transparent;\ncolor: var(--a-color);\n}\n\nbutton.ghost:hover {\ncolor: var(--a-hover-color);\n}\n\nbutton.sm {\npadding: 0.5rem 3rem 0.5rem 0.5rem;\n}\n\nbutton.md {\npadding: 0.7rem 3rem 0.7rem 0.7rem;\n}\n\nbutton.lg {\npadding: 1rem 3rem 1rem 1rem;\n}\n\nbutton.xl {\npadding: 1rem 3rem 2rem 1rem;\n}\n\nbutton.block {\ndisplay: block;\nwidth: 100%;\ntext-align: left;\n}\n\nbutton:disabled,\nbutton.disabled {\nbackground: var(--muted-color);\nborder: 1px solid var(--muted-color);\ncursor: auto;\n}", "",{"version":3,"sources":["webpack://./src/js/components/atoms/button/button.css"],"names":[],"mappings":"AAAA;IACI,wCAAwC;;IAExC,2DAA2D;IAC3D,8CAA8C;IAC9C,+CAA+C;IAC/C,qDAAqD;IACrD,wDAAwD;;IAExD,+DAA+D;IAC/D,gEAAgE;;IAEhE,gEAAgE;IAChE,gEAAgE;;IAEhE;;MAEE;IACF,gDAAgD;IAChD,wDAAwD;IACxD,gDAAgD;;IAEhD,uDAAuD;IACvD,+DAA+D;IAC/D,uDAAuD;;IAEvD,mEAAmE;IACnE,0EAA0E;;IAE1E;;MAEE;IACF,yDAAyD;IACzD,oEAAoE;IACpE,wEAAwE;IACxE,sEAAsE;IACtE,2EAA2E;IAC3E,+EAA+E;IAC/E,kFAAkF;IAClF,+FAA+F;;IAE/F;;MAEE;IACF,yDAAyD;IACzD,oEAAoE;IACpE,wEAAwE;IACxE,sEAAsE;IACtE,2EAA2E;IAC3E,+EAA+E;IAC/E,kFAAkF;IAClF,+FAA+F;;IAE/F;;MAEE;IACF,uDAAuD;IACvD,kEAAkE;IAClE,sEAAsE;IACtE,oEAAoE;IACpE,yEAAyE;IACzE,6EAA6E;IAC7E,gFAAgF;IAChF,6FAA6F;AACjG;;;AAGA;AACA,sCAAsC;AACtC,sCAAsC;AACtC,gCAAgC;AAChC;;AAEA;AACA,4CAA4C;AAC5C;;AAEA;AACA,wCAAwC;AACxC,wCAAwC;AACxC,gCAAgC;AAChC;;AAEA;AACA,8CAA8C;AAC9C;;AAEA;AACA,6BAA6B;AAC7B,sCAAsC;AACtC,2BAA2B;AAC3B;;AAEA;AACA,sCAAsC;AACtC,gCAAgC;AAChC;;AAEA;AACA,qCAAqC;AACrC,qCAAqC;AACrC,gCAAgC;AAChC;;AAEA;AACA,2CAA2C;AAC3C;;AAEA;AACA,6BAA6B;AAC7B,6BAA6B;AAC7B,qBAAqB;AACrB;;AAEA;AACA,2BAA2B;AAC3B;;AAEA;AACA,kCAAkC;AAClC;;AAEA;AACA,kCAAkC;AAClC;;AAEA;AACA,4BAA4B;AAC5B;;AAEA;AACA,4BAA4B;AAC5B;;AAEA;AACA,cAAc;AACd,WAAW;AACX,gBAAgB;AAChB;;AAEA;;AAEA,8BAA8B;AAC9B,oCAAoC;AACpC,YAAY;AACZ","sourcesContent":[":root {\n    --w-button--transition: all 100ms linear;\n\n    --w-button--font-weight: var(--w-font-weight-text-semibold);\n    --w-button--padding-left: var(--w-spacing-300);\n    --w-button--padding-right: var(--w-spacing-800);\n    --w-button--border-radius: var(--w-border-radius-100);\n    --w-button--line-height: var(--w-inputs--size-m--height);\n\n    --w-button--appearance-link--padding-left: var(--w-spacing-300);\n    --w-button--appearance-link--padding-right: var(--w-spacing-300);\n\n    --w-button--size-s--line-height: var(--w-inputs--size-s--height);\n    --w-button--size-l--line-height: var(--w-inputs--size-l--height);\n\n    /*\n     * Default.\n     */\n    --w-button--color: var(--w-background-color-800);\n    --w-butoon--border-color: var(--w-background-color-1000);\n    --w-button--text--color: var(--w-text-color-300);\n\n    --w-button--hover--color: var(--w-background-color-900);\n    --w-button--hover--border-color: var(--w-background-color-1100);\n    --w-button--hover--text--color: var(--w-text-color-500);\n\n    --w-button--appearance-outline--text-color: var(--w-text-color-300);\n    --w-button--appearance-outline--hover--text-color: var(--w-text-color-500);\n\n    /*\n     * Primary\n     */\n    --w-button--intent-primary--color: var(--w-primary-color);\n    --w-butoon--intent-primary--border-color: var(--w-primary-color-600);\n    --w-button--intent-primary--text--color: var(--w-primary-text-color-300);\n    --w-button--intent-primary--hover--color: var(--w-primary-hover-color);\n    --w-button--intent-primary--hover--border-color: var(--w-primary-color-800);\n    --w-button--intent-primary--hover--text--color: var(--w-primary-text-color-300);\n    --w-button--intent-primary--appearance-outline--text-color: var(--w-primary-color);\n    --w-button--intent-primary--appearance-outline--hover--text-color: var(--w-primary-hover-color);\n\n    /*\n     * Success\n     */\n    --w-button--intent-success--color: var(--w-success-color);\n    --w-butoon--intent-success--border-color: var(--w-success-color-600);\n    --w-button--intent-success--text--color: var(--w-success-text-color-300);\n    --w-button--intent-success--hover--color: var(--w-success-hover-color);\n    --w-button--intent-success--hover--border-color: var(--w-success-color-800);\n    --w-button--intent-success--hover--text--color: var(--w-success-text-color-300);\n    --w-button--intent-success--appearance-outline--text-color: var(--w-success-color);\n    --w-button--intent-success--appearance-outline--hover--text-color: var(--w-success-hover-color);\n\n    /*\n     * Danger\n     */\n    --w-button--intent-danger--color: var(--w-danger-color);\n    --w-butoon--intent-danger--border-color: var(--w-danger-color-600);\n    --w-button--intent-danger--text--color: var(--w-danger-text-color-300);\n    --w-button--intent-danger--hover--color: var(--w-danger-hover-color);\n    --w-button--intent-danger--hover--border-color: var(--w-danger-color-800);\n    --w-button--intent-danger--hover--text--color: var(--w-danger-text-color-300);\n    --w-button--intent-danger--appearance-outline--text-color: var(--w-danger-color);\n    --w-button--intent-danger--appearance-outline--hover--text-color: var(--w-danger-hover-color);\n}\n\n\nbutton.primary {\nborder: 1px solid var(--primary-color);\nbackground-color: var(--primary-color);\ncolor: var(--primary-text-color);\n}\n\nbutton.primary:hover {\nbackground-color: var(--primary-hover-color);\n}\n\nbutton.secondary {\nborder: 1px solid var(--secondary-color);\nbackground-color: var(--secondary-color);\ncolor: var(--primary-text-color);\n}\n\nbutton.secondary:hover {\nbackground-color: var(--secondary-hover-color);\n}\n\nbutton.tertiary {\nbackground-color: transparent;\nborder: 1px solid var(--primary-color);\ncolor: var(--primary-color);\n}\n\nbutton.tertiary:hover {\nbackground-color: var(--primary-color);\ncolor: var(--primary-text-color);\n}\n\nbutton.danger {\nborder: 1px solid var(--danger-color);\nbackground-color: var(--danger-color);\ncolor: var(--primary-text-color);\n}\n\nbutton.danger:hover {\nbackground-color: var(--danger-hover-color);\n}\n\nbutton.ghost {\nborder: 1px solid transparent;\nbackground-color: transparent;\ncolor: var(--a-color);\n}\n\nbutton.ghost:hover {\ncolor: var(--a-hover-color);\n}\n\nbutton.sm {\npadding: 0.5rem 3rem 0.5rem 0.5rem;\n}\n\nbutton.md {\npadding: 0.7rem 3rem 0.7rem 0.7rem;\n}\n\nbutton.lg {\npadding: 1rem 3rem 1rem 1rem;\n}\n\nbutton.xl {\npadding: 1rem 3rem 2rem 1rem;\n}\n\nbutton.block {\ndisplay: block;\nwidth: 100%;\ntext-align: left;\n}\n\nbutton:disabled,\nbutton.disabled {\nbackground: var(--muted-color);\nborder: 1px solid var(--muted-color);\ncursor: auto;\n}"],"sourceRoot":""}]);
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
        :host {
            
        }

        :host([intent="primary"]) {
            --w-button--color: var(--w-button--intent-primary--color);
            --w-butoon--border-color: var(--w-butoon--intent-primary--border-color);
            --w-button--text--color: var(--w-button--intent-primary--text--color);

            --w-button--hover--color: var(--w-button--intent-primary--hover--color);
            --w-button--hover--border-color: var(--w-button--intent-primary--hover--border-color);
            --w-button--hover--text--color: var(--w-button--intent-primary--hover--text--color);

            --w-button--appearance-outline--text-color: var(--w-button--intent-primary--appearance-outline--text-color);
            --w-button--appearance-outline--hover--text-color: var(--w-button--intent-primary--appearance-outline--hover--text-color);
        }

        :host([intent="success"]) {
            --w-button--color: var(--w-button--intent-success--color);
            --w-butoon--border-color: var(--w-butoon--intent-success--border-color);
            --w-button--text--color: var(--w-button--intent-success--text--color);
        
            --w-button--hover--color: var(--w-button--intent-success--hover--color);
            --w-button--hover--border-color: var(--w-button--intent-success--hover--border-color);
            --w-button--hover--text--color: var(--w-button--intent-success--hover--text--color);
        
            --w-button--appearance-outline--text-color: var(--w-button--intent-success--appearance-outline--text-color);
            --w-button--appearance-outline--hover--text-color: var(--w-button--intent-success--appearance-outline--hover--text-color);
        }

        :host([intent="danger"]) {
            --w-button--color: var(--w-button--intent-danger--color);
            --w-butoon--border-color: var(--w-butoon--intent-danger--border-color);
            --w-button--text--color: var(--w-button--intent-danger--text--color);
        
            --w-button--hover--color: var(--w-button--intent-danger--hover--color);
            --w-button--hover--border-color: var(--w-button--intent-danger--hover--border-color);
            --w-button--hover--text--color: var(--w-button--intent-danger--hover--text--color);
        
            --w-button--appearance-outline--text-color: var(--w-button--intent-danger--appearance-outline--text-color);
            --w-button--appearance-outline--hover--text-color: var(--w-button--intent-danger--appearance-outline--hover--text-color);
        }

        :host([size="s"]) {
            --w-button--line-height: var(--w-button--size-s--line-height)
        }

        :host([size="l"]) {
            --w-button--line-height: var(--w-button--size-l--line-height)
        }

        :host([block]) {
            display: block;
        }

        :host([block]) button {
            display: block;
            width: 100%;
            text-align: left;
        }

        :host([appearance="default"]) button,
        button {
            display: inline-block;
            cursor: pointer;
            transition: var(--w-button--transition);

            background-color: var(--w-button--color);
            border: 1px solid var(--w-butoon--border-color);
            color: var(--w-button--text--color);
            
            font-weight: var(--w-button--font-weight);
            padding: 0 var(--w-button--padding-right) 0px var(--w-button--padding-left);
            border-radius: var(--w-button--border-radius);

            line-height: var(--w-button--line-height);
        }

        :host([appearance="default"]) button:hover:not([disabled]),
        button:hover:not([disabled]) {
            background-color: var(--w-button--hover--color);
            color: var(--w-button--hover--text--color);
        }

        button[disabled] {
            opacity: 0.6;
            cursor: default;
        }

        :host([appearance="outline"]) button {
            background-color: transparent;
            color: var(--w-button--appearance-outline--text-color);
        }

        :host([appearance="outline"]) button:hover:not([disabled]) {
            border-color: var(--w-button--hover--border-color);
            color: var(--w-button--appearance-outline--hover--text-color);
        }

        :host([appearance="link"]) button {
            background-color: transparent;
            border: none;
            padding: 0 var(--w-button--appearance-link--padding-left) 0 var(--w-button--appearance-link--padding-right);

            color: var(--w-button--appearance-outline--text-color);
        }

        :host([appearance="link"]) button:hover:not([disabled]) {
            color: var(--w-button--appearance-outline--hover--text-color);
        }
    `;

    static properties = {
        appearance: { 
            type: String,
            help: "The style in which the button should be displayed. Possible values are: `default`, `outline` and `link`.'"
        }, 
        intent: {
            type: String,
            help: "Intents may influence the coloring of buttons. Available options are: `none` (default), `primary`, `danger` and `success`."
        },
        size: { 
            type: String,
            help: "The size of the button. Possible values are `s`, `m` and `l`."
        },
        disabled: { 
            type: Boolean,
            help: "Indicate that a button is disabled."
        }
    };

    constructor() {
        super();
        this.appearance = "default";
        this.size = "m";
        this.disabled = false;
    }

    render() {
        console.log(this.disabled);

        return lit__WEBPACK_IMPORTED_MODULE_0__.html`
            <button 
                ?disabled=${this.disabled}>
                    <slot></slot>
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
            <div style="height: var(--w-spacing-100)"></div>
            <w-button size="s" appearance="link" @click="${this._bttShowCode_onClick}">${ this.preview ? 'Hide code' : 'Show code' }</w-button>
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
/* harmony import */ var _atoms_button_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/button/button.js */ "./src/js/components/atoms/button/button.js");
/* harmony import */ var _atoms_heading_heading_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/heading/heading.js */ "./src/js/components/atoms/heading/heading.js");





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
            case "WButton":
                return _atoms_button_button_js__WEBPACK_IMPORTED_MODULE_1__.WButton;
            case "WHeading":
                return _atoms_heading_heading_js__WEBPACK_IMPORTED_MODULE_2__.WHeading;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLE1BQU0sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxRQUFRLE1BQU0sU0FBUyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxPQUFPLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxTQUFTLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxLQUFLO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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OEVBQThFO0FBQ2pMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsZ0JBQWdCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsaUJBQWlCLGVBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0Esb0ZBQW9GLGlCQUFpQjtBQUNyRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDTztBQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLE1BQU07QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLCtCQUErQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxXQUFXLE1BQU0sVUFBVSxLQUFLLFdBQVcsSUFBSSxXQUFXLE1BQU0sZ0JBQWdCO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE1BQU07QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixnQkFBZ0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsaUJBQWlCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsZ0JBQWdCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0JBQStCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsSUFBSTtBQUNoRiwrRUFBK0UsS0FBSztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsZUFBZTtBQUN2RDtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsc0NBQXNDO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsb0NBQW9DO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxzQ0FBc0M7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU0sU0FBUyxrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELE1BQU07QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrQkFBK0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEVBQUU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdCQUF3QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msa0JBQWtCLGVBQWUsS0FBSztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBRUEsaUNBQWlDO0FBQ2pDLDBDQUEwQztBQUMxQywwQ0FBMEM7QUFDMUMsMENBQTBDO0FBQzFDLDBDQUEwQztBQUMxQywwQ0FBMEM7QUFDMUMsMENBQTBDO0FBQzFDLDBDQUEwQztBQUMxQywwQ0FBMEM7QUFDMUMsMENBQTBDO0FBQzFDLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLDJDQUEyQzs7QUFFM0M7QUFDQSw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUM7O0FBRUE7QUFDQSw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUM7O0FBRUE7QUFDQSw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUM7O0FBRUE7QUFDQSw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUM7O0FBRUE7QUFDQSw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5QywrQ0FBK0M7QUFDL0MsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0M7O0FBRUE7QUFDQSwrQ0FBK0M7QUFDL0MsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsK0NBQStDO0FBQy9DLCtDQUErQztBQUMvQyxnREFBZ0Q7QUFDaEQsZ0RBQWdEO0FBQ2hELGdEQUFnRDtBQUNoRCxnREFBZ0Q7QUFDaEQsZ0RBQWdEO0FBQ2hELGdEQUFnRDtBQUNoRCxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUNBQUk7QUFDakI7QUFDQTtBQUNBOztBQUVBOztBQUVPLHdCQUF3QiwyQ0FBVTtBQUN6QyxvQkFBb0Isb0NBQUc7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUNBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTjBDO0FBQ3FCOztBQUV4RCxxQkFBcUIsMkNBQVU7QUFDdEMsb0JBQW9CLG9DQUFHO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFDQUFJO0FBQ25CO0FBQ0Esd0JBQXdCLFVBQVU7QUFDbEMsd0JBQXdCLHFFQUFVLEdBQUcseUJBQXlCLEVBQUU7QUFDaEUsZ0NBQWdDLFVBQVU7QUFDMUMsMENBQTBDLFdBQVcsTUFBTSwyQkFBMkIsU0FBUztBQUMvRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUY0Qzs7QUFFckMsNkJBQTZCLDJDQUFVOztBQUU5QyxvQkFBb0Isb0NBQUc7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHFDQUFJO0FBQ3ZCO0FBQ0EsMEJBQTBCLFNBQVM7QUFDbkMscURBQXFELGFBQWE7QUFDbEUscURBQXFELHVIQUF1SDtBQUM1SztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0Esa0JBQWtCO0FBQ2xCLGdDQUFnQyxvQ0FBb0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsMEJBQTBCO0FBQzFCLGlFQUFpRTtBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZUFBZSxxQ0FBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JIMEM7O0FBRW5DLDhCQUE4QiwyQ0FBVTs7QUFFL0Msb0JBQW9CLG9DQUFHO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUNBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGVBQWUscUNBQUksbUJBQW1CLGVBQWUsY0FBYyxxQ0FBSTtBQUMxRjtBQUNBO0FBQ0EsMkRBQTJELDBCQUEwQixLQUFLLDBDQUEwQztBQUNwSTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDNEM7O0FBRVc7QUFDRzs7QUFFbkQsK0JBQStCLDJDQUFVOztBQUVoRCxvQkFBb0Isb0NBQUc7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNERBQU87QUFDOUI7QUFDQSx1QkFBdUIsK0RBQVE7QUFDL0I7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUNBQUk7QUFDbkI7QUFDQSxzQkFBc0IsU0FBUztBQUMvQixzQkFBc0Isc0JBQXNCO0FBQzVDLGlEQUFpRCxpQkFBaUI7QUFDbEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUNBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0YwQztBQUNtQjs7QUFFdEQsNkJBQTZCLDJDQUFVO0FBQzlDLG9CQUFvQixvQ0FBRztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUNBQUk7QUFDbkI7QUFDQSx3QkFBd0IscUVBQVU7QUFDbEM7QUFDQSxpQkFBaUIsRUFBRTs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRTBDO0FBQ21COztBQUV0RCwyQkFBMkIsMkNBQVU7QUFDNUMsb0JBQW9CLG9DQUFHO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFDQUFJO0FBQ25CO0FBQ0Esd0JBQXdCLHFFQUFVO0FBQ2xDO0FBQ0EsaUJBQWlCLEVBQUU7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sZ0NBQWdDLDJDQUFVOztBQUVqRDtBQUNBLGVBQWUscUNBQUk7QUFDbkI7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVGNEM7QUFDbUI7O0FBRXhELHNCQUFzQiwyQ0FBVTs7QUFFdkMsb0JBQW9CLG9DQUFHO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUNBQUk7QUFDbkI7QUFDQSxvQkFBb0IscUVBQVU7QUFDOUI7QUFDQTtBQUNBLGFBQWEsRUFBRTs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRjBDO0FBQ3FCOztBQUV4RCxzQkFBc0IsMkNBQVU7QUFDdkMsb0JBQW9CLG9DQUFHO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixxQ0FBSTtBQUN2QjtBQUNBLDRCQUE0QixxRUFBVTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixFQUFFOztBQUV2QjtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsZ0JBQWdCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkVBQTZFLGdCQUFnQjtBQUM3RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLG1CQUFtQixxQ0FBSTtBQUN2QjtBQUNBLDRCQUE0QixxRUFBVTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixFQUFFOztBQUV2QixrREFBa0QsZ0JBQWdCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2hJTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNWTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLDhCQUE4QixHQUFHO0FBQ2pDLGtDQUFrQyxrQkFBa0IsRUFBRTtBQUN0RCxnRkFBZ0YsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsSUFBSTtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVGQUF1RjtBQUN2RixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBLEtBQUs7O0FBRUw7QUFDQSxtREFBbUQsMkRBQTJEOztBQUU5RztBQUNBLDhDQUE4QyxnREFBZ0Q7O0FBRTlGO0FBQ0Esc0NBQXNDLDZCQUE2Qjs7QUFFbkU7QUFDQTs7Ozs7OztVQzlIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ2dEO0FBQ0o7QUFDTTtBQUNFO0FBQ1I7QUFDVTtBQUNaO0FBQ0U7QUFDWTs7QUFFeEQ7QUFDdUQ7QUFDTTtBQUNoQjs7QUFFN0M7QUFDc0U7QUFDcEI7QUFDb0I7QUFDa0I7QUFDcEI7QUFDSjs7QUFFaEU7QUFDb0Q7QUFDQTs7QUFFOUI7OztBQUdpQjs7O0FBR2hDLDJCQUEyQiw0Q0FBVTs7QUFFNUM7QUFDQSxlQUFlLHNDQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9jc3MvYnJlYWtwb2ludHMuY3NzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9jc3MvY29sb3JzLmNzcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY3NzL2ljb25zLmNzcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2Nzcy9zcGFjaW5nLmNzcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY3NzL3RoZW1lLmNzcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY3NzL3R5cG9ncmFwaHkuY3NzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL2F0b21zL2J1dHRvbi9idXR0b24uY3NzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL2F0b21zL2NvZGUvY29kZS5jc3MiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvYXRvbXMvaGVhZGluZy9oZWFkaW5nLmNzcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9hdG9tcy9tYXJrZG93bi9tYXJrZG93bi5jc3MiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvYXRvbXMvcGFuZS9wYW5lLmNzcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9hdG9tcy9wYXJhZ3JhcGgvcGFyYWdyYXBoLmNzcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9hdG9tcy9wcmUvcHJlLmNzcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9hdG9tcy90YWJzL3RhYnMuY3NzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL2F0b21zL3RleHQtaW5wdXQvdGV4dC1pbnB1dC5jc3MiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvbGF5b3V0L2ZpeGVkLWhlYWRlci9maXhlZC1oZWFkZXIuY3NzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL2xheW91dC9ncmlkL2dyaWQuY3NzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9icmFuZC9icmFuZC5jc3MiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9sZWN1bGVzL2Nzcy1ydWxlcy10YWJsZS9jc3MtcnVsZXMtdGFibGUuY3NzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9lbGVtZW50LWV4YW1wbGUvZWxlbWVudC1leGFtcGxlLmNzcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9tb2xlY3VsZXMvZWxlbWVudC1wcm9wZXJ0aWVzLXRhYmxlL2VsZW1lbnQtcHJvcGVydGllcy10YWJsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9sZWN1bGVzL2hvcml6b250YWwtbmF2L2hvcml6b250YWwtbmF2LmNzcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9tb2xlY3VsZXMvdmVydGljYWwtbmF2L3ZlcnRpY2FsLW5hdi5jc3MiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvb3JnYW5pc21zL2Zvb3Rlci9mb290ZXIuY3NzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL29yZ2FuaXNtcy9uYXZiYXIvbmF2YmFyLmNzcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvZGV2ZWxvcG1lbnQvY3NzLXRhZy5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2RldmVsb3BtZW50L3JlYWN0aXZlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL2xpdC1lbGVtZW50L2RldmVsb3BtZW50L2xpdC1lbGVtZW50LmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9kZXZlbG9wbWVudC9pcy1zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2xpdC1odG1sLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9saXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvYXRvbXMvYnV0dG9uL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9hdG9tcy9jb2RlL2NvZGUuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvYXRvbXMvaGVhZGluZy9oZWFkaW5nLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL2F0b21zL21hcmtkb3duL21hcmtkb3duLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL2F0b21zL3BhbmUvcGFuZS5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9hdG9tcy9wYXJhZ3JhcGgvcGFyYWdyYXBoLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL2F0b21zL3ByZS9wcmUuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvYXRvbXMvdGFicy90YWJzLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL2F0b21zL3RleHQtaW5wdXQvdGV4dC1pbnB1dC5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9sYXlvdXQvY29udGFpbmVyL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9sYXlvdXQvZml4ZWQtaGVhZGVyL2ZpeGVkLWhlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9sYXlvdXQvZ3JpZC9ncmlkLmpzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9icmFuZC9icmFuZC5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9tb2xlY3VsZXMvY3NzLXJ1bGVzLXRhYmxlL2Nzcy1ydWxlcy10YWJsZS5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9tb2xlY3VsZXMvZWxlbWVudC1leGFtcGxlL2VsZW1lbnQtZXhhbXBsZS5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9tb2xlY3VsZXMvZWxlbWVudC1wcm9wZXJ0aWVzLXRhYmxlL2VsZW1lbnQtcHJvcGVydGllcy10YWJsZS5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvY29tcG9uZW50cy9tb2xlY3VsZXMvaG9yaXpvbnRhbC1uYXYvaG9yaXpvbnRhbC1uYXYuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9sZWN1bGVzL3ZlcnRpY2FsLW5hdi92ZXJ0aWNhbC1uYXYuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvb3JnYW5pc21zL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2NvbXBvbmVudHMvb3JnYW5pc21zL25hdmJhci9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2RpcmVjdGl2ZXMvY2xhc3NuYW1lcy5qcyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vLi9zcmMvanMvZGlyZWN0aXZlcy9kZWRlbnQuanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtLy4vc3JjL2pzL2RpcmVjdGl2ZXMvbWFya2Rvd24uanMiLCJ3ZWJwYWNrOi8vd2VsbG5yLS1kZXNpZ24tc3lzdGVtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWxsbnItLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlbGxuci0tZGVzaWduLXN5c3RlbS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFxcbiAqIE5vdGU6IEJyZWFrcG9pbnQgdmFsdWVzIGFyZSBhbHNvIGhhcmRjb2RlZCBpbiAvY29tcG9uZW50cy9sYXlvdXQvZ3JpZC9ncmlkLmpzLlxcbiAqIFxcbiAqIFRoZXNlIHZhcmlhYmxlcyBhcmUgaGVyZSBmb3IgcmVmZXJlbmNlLiBVbmZvcnR1bmF0ZWx5LCBhcyBvZiB0b2RheSwgbWVkaWEgcXVlcmllc1xcbiAqIGNhbiBub3QgdXNlIHRoZXNlIHZhcmlhYmxlcy5cXG4gKi9cXG46cm9vdCB7XFxuICAgIC0tdy1icmVha3BvaW50LXNtOiA1NzZweDtcXG4gICAgLS13LWJyZWFrcG9pbnQtbWQ6IDc2OHB4O1xcbiAgICAtLXctYnJlYWtwb2ludC1sZzogOTkycHg7XFxuICAgIC0tdy1icmVha3BvaW50LXhsOiAxMjAwcHg7XFxuICAgIC0tdy1icmVha3BvaW50LXh4bDogMTQwMHB4O1xcbiAgICAtLXctYnJlYWtwb2ludC14eHhsOiAyNjAwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYnJlYWtwb2ludHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7OztFQUtFO0FBQ0Y7SUFDSSx3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLDJCQUEyQjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBcXG4gKiBOb3RlOiBCcmVha3BvaW50IHZhbHVlcyBhcmUgYWxzbyBoYXJkY29kZWQgaW4gL2NvbXBvbmVudHMvbGF5b3V0L2dyaWQvZ3JpZC5qcy5cXG4gKiBcXG4gKiBUaGVzZSB2YXJpYWJsZXMgYXJlIGhlcmUgZm9yIHJlZmVyZW5jZS4gVW5mb3J0dW5hdGVseSwgYXMgb2YgdG9kYXksIG1lZGlhIHF1ZXJpZXNcXG4gKiBjYW4gbm90IHVzZSB0aGVzZSB2YXJpYWJsZXMuXFxuICovXFxuOnJvb3Qge1xcbiAgICAtLXctYnJlYWtwb2ludC1zbTogNTc2cHg7XFxuICAgIC0tdy1icmVha3BvaW50LW1kOiA3NjhweDtcXG4gICAgLS13LWJyZWFrcG9pbnQtbGc6IDk5MnB4O1xcbiAgICAtLXctYnJlYWtwb2ludC14bDogMTIwMHB4O1xcbiAgICAtLXctYnJlYWtwb2ludC14eGw6IDE0MDBweDtcXG4gICAgLS13LWJyZWFrcG9pbnQteHh4bDogMjYwMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIgOnJvb3Qge1xcbiAgICAvKlxcbiAgICAgKiBCYXNlIENvbG9yc1xcbiAgICAgKi9cXG4gICAgLS1ibGFjazogIzEyMTIxMjtcXG4gICAgLS1ncmF5OTAwOiAjMTAxODQwO1xcbiAgICAtLWdyYXk4MDA6ICM0NzRkNjY7XFxuICAgIC0tZ3JheTcwMDogIzY5NmY4YztcXG4gICAgLS1ncmF5NjAwOiAjOGY5NWIyO1xcbiAgICAtLWdyYXk1MDA6ICNjMWM0ZDY7XFxuICAgIC0tZ3JheTQwMDogI2Q4ZGFlNTtcXG4gICAgLS1ncmF5MzAwOiAjRTZFOEYwO1xcbiAgICAtLWdyYXkyMDA6ICNlZGVmZjU7XFxuICAgIC0tZ3JheTEwMDogI0Y0RjVGOTtcXG4gICAgLS1ncmF5OTA6ICNGNEY2RkE7XFxuICAgIC0tZ3JheTc1OiAjRjlGQUZDO1xcbiAgICAtLWdyYXk1MDogI0ZBRkJGRjtcXG4gICAgLS13aGl0ZTogI0ZGRkZGRjtcXG5cXG4gICAgLS1ibHVlOTAwOiAjMEExNDMzO1xcbiAgICAtLWJsdWU4MDA6ICMxNDI5NjY7XFxuICAgIC0tYmx1ZTcwMDogIzFGM0Q5OTtcXG4gICAgLS1ibHVlNjAwOiAjMjk1MkNDO1xcbiAgICAtLWJsdWU1MDA6ICMzMzY2RkY7XFxuICAgIC0tYmx1ZTQwMDogIzVDODVGRjtcXG4gICAgLS1ibHVlMzAwOiAjODVBM0ZGO1xcbiAgICAtLWJsdWUyMDA6ICNBREMyRkY7XFxuICAgIC0tYmx1ZTEwMDogI0Q2RTBGRjtcXG4gICAgLS1ibHVlNTA6ICNFQkYwRkY7XFxuICAgIC0tYmx1ZTI1OiAjRjNGNkZGO1xcblxcbiAgICAtLXJlZDcwMDogIzdEMjgyODtcXG4gICAgLS1yZWQ2MDA6ICNBNzM2MzY7XFxuICAgIC0tcmVkNTAwOiAjRDE0MzQzO1xcbiAgICAtLXJlZDMwMDogI0VFOTE5MTtcXG4gICAgLS1yZWQxMDA6ICNGOURBREE7XFxuICAgIC0tcmVkMjU6ICNGREY0RjQ7XFxuXFxuICAgIC0tZ3JlZW45MDA6ICMxMDI2MUU7XFxuICAgIC0tZ3JlZW44MDA6ICMyMTRDM0M7XFxuICAgIC0tZ3JlZW43MDA6ICMzMTcxNTk7XFxuICAgIC0tZ3JlZW42MDA6ICM0Mjk3Nzc7XFxuICAgIC0tZ3JlZW41MDA6ICM1MkJEOTU7XFxuICAgIC0tZ3JlZW40MDA6ICM3NUNBQUE7XFxuICAgIC0tZ3JlZW4zMDA6ICM5N0Q3QkY7XFxuICAgIC0tZ3JlZW4yMDA6ICNCQUU1RDU7XFxuICAgIC0tZ3JlZW4xMDA6ICNEQ0YyRUE7XFxuICAgIC0tZ3JlZW4yNTogI0Y1RkJGODtcXG5cXG4gICAgLS1vcmFuZ2U3MDA6ICM5OTZBMTM7XFxuICAgIC0tb3JhbmdlNTAwOiAjRkZCMDIwO1xcbiAgICAtLW9yYW5nZTEwMDogI0Y4RTNEQTtcXG4gICAgLS1vcmFuZ2UyNTogI0ZGRkFGMjtcXG5cXG4gICAgLS1wdXJwbGU2MDA6ICM2RTYyQjY7XFxuICAgIC0tcHVycGxlMTAwOiAjRTdFNEY5O1xcblxcbiAgICAtLXRlYWw4MDA6ICMwRjUxNTY7XFxuICAgIC0tdGVhbDEwMDogI0QzRjVGNztcXG5cXG4gICAgLS15ZWxsb3c4MDA6ICM2NjQ2MEQ7XFxuICAgIC0teWVsbG93MTAwOiAjRkZFRkQyO1xcblxcbiAgIC8qIFxcbiAgICogQ29sb3IgVG9rZW5zIFxcbiAgICovXFxuICAgLS13LWJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXk3NSk7XFxuICAgLS13LWJhY2tncm91bmQtY29sb3ItMzAwOiB2YXIoLS1ncmF5NTApO1xcbiAgIC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTQwMDogdmFyKC0tZ3JheTc1KTtcXG4gICAtLXctYmFja2dyb3VuZC1jb2xvci01MDA6IHZhcigtLWdyYXkxMDApO1xcbiAgIC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTYwMDogdmFyKC0tZ3JheTIwMCk7XFxuICAgLS13LWJhY2tncm91bmQtY29sb3ItNzAwOiB2YXIoLS1ncmF5MzAwKTtcXG4gICAtLXctYmFja2dyb3VuZC1jb2xvci04MDA6IHZhcigtLWdyYXk0MDApO1xcbiAgIC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTkwMDogdmFyKC0tZ3JheTUwMCk7XFxuICAgLS13LWJhY2tncm91bmQtY29sb3ItMTAwMDogdmFyKC0tZ3JheTYwMCk7XFxuICAgLS13LWJhY2tncm91bmQtY29sb3ItMTEwMDogdmFyKC0tZ3JheTcwMCk7XFxuICAgLS13LWJhY2tncm91bmQtY29sb3ItMTIwMDogdmFyKC0tZ3JheTgwMCk7XFxuICAgLS13LWJhY2tncm91bmQtY29sb3ItMTMwMDogdmFyKC0tZ3JheTkwMCk7XFxuXFxuICAgLS13LXRleHQtY29sb3I6IHZhcigtLWdyYXk5MDApO1xcbiAgIC0tdy10ZXh0LWNvbG9yLTMwMDogdmFyKC0tZ3JheTgwMCk7XFxuICAgLS13LXRleHQtY29sb3ItNDAwOiB2YXIoLS1ncmF5OTAwKTtcXG4gICAtLXctdGV4dC1jb2xvci01MDA6IHZhcigtLWJsYWNrKTtcXG5cXG4gICAtLXctbGluay1jb2xvcjogdmFyKC0tYmx1ZTUwMCk7XFxuICAgLS13LWxpbmstaG92ZXItY29sb3I6IHZhcigtLWJsdWU3MDApO1xcblxcbiAgIC0tdy1tdXRlZC1jb2xvcjogdmFyKC0tZ3JheTcwMCk7XFxuICAgLS13LW11dGVkLXRleHQtY29sb3I6IHZhcigtLWdyYXk5MDApO1xcblxcbiAgIC0tdy1wcmltYXJ5LWNvbG9yLTMwMDogdmFyKC0tYmx1ZTQwMCk7XFxuICAgLS13LXByaW1hcnktY29sb3ItNDAwOiB2YXIoLS1ibHVlNTAwKTtcXG4gICAtLXctcHJpbWFyeS1jb2xvci01MDA6IHZhcigtLWJsdWU2MDApO1xcbiAgIC0tdy1wcmltYXJ5LWNvbG9yLTYwMDogdmFyKC0tYmx1ZTcwMCk7XFxuICAgLS13LXByaW1hcnktY29sb3ItNzAwOiB2YXIoLS1ibHVlODAwKTtcXG4gICAtLXctcHJpbWFyeS1jb2xvci04MDA6IHZhcigtLWJsdWU5MDApO1xcbiAgIC0tdy1wcmltYXJ5LWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3ItNDAwKTtcXG4gICAtLXctcHJpbWFyeS1ob3Zlci1jb2xvcjogdmFyKC0tYmx1ZTYwMCk7XFxuXFxuICAgLS13LXByaW1hcnktdGV4dC1jb2xvcjogdmFyKC0tZ3JheTIwMCk7XFxuICAgLS13LXByaW1hcnktdGV4dC1jb2xvci0zMDA6IHZhcigtLXdoaXRlKTtcXG4gICAtLXctcHJpbWFyeS10ZXh0LWNvbG9yLTQwMDogdmFyKC0tZ3JheTIwMCk7XFxuICAgLS13LXByaW1hcnktdGV4dC1jb2xvci01MDA6IHZhcigtLWdyYXk0MDApO1xcblxcbiAgIC0tdy1zZWNvbmRhcnktY29sb3I6IHZhciggLS1ncmVlbjYwMCk7XFxuICAgLS13LXNlY29uZGFyeS1ob3Zlci1jb2xvcjogdmFyKCAtLWdyZWVuNzAwKTtcXG4gICAtLXctc2Vjb25kYXJ5LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXG4gICAtLXctZGFuZ2VyLWNvbG9yLTMwMDogdmFyKC0tcmVkMzAwKTtcXG4gICAtLXctZGFuZ2VyLWNvbG9yLTQwMDogdmFyKC0tcmVkMzAwKTtcXG4gICAtLXctZGFuZ2VyLWNvbG9yLTUwMDogdmFyKC0tcmVkNTAwKTtcXG4gICAtLXctZGFuZ2VyLWNvbG9yLTYwMDogdmFyKC0tcmVkNTAwKTtcXG4gICAtLXctZGFuZ2VyLWNvbG9yLTcwMDogdmFyKC0tcmVkNjAwKTtcXG4gICAtLXctZGFuZ2VyLWNvbG9yLTgwMDogdmFyKC0tcmVkNjAwKTtcXG5cXG4gICAtLXctZGFuZ2VyLWNvbG9yOiB2YXIoLS13LWRhbmdlci1jb2xvci01MDApO1xcbiAgIC0tdy1kYW5nZXItaG92ZXItY29sb3I6IHZhcigtLXctZGFuZ2VyLWNvbG9yLTcwMCk7XFxuICAgLS13LWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1ncmF5MjAwKTtcXG4gICAtLXctZGFuZ2VyLXRleHQtY29sb3ItMzAwOiB2YXIoLS13aGl0ZSk7XFxuICAgLS13LWRhbmdlci10ZXh0LWNvbG9yLTQwMDogdmFyKC0tZ3JheTIwMCk7XFxuICAgLS13LWRhbmdlci10ZXh0LWNvbG9yLTUwMDogdmFyKC0tZ3JheTQwMCk7XFxuXFxuICAgLS13LXN1Y2Nlc3MtY29sb3ItMzAwOiB2YXIoLS1ncmVlbjMwMCk7XFxuICAgLS13LXN1Y2Nlc3MtY29sb3ItNDAwOiB2YXIoLS1ncmVlbjQwMCk7XFxuICAgLS13LXN1Y2Nlc3MtY29sb3ItNTAwOiB2YXIoLS1ncmVlbjUwMCk7XFxuICAgLS13LXN1Y2Nlc3MtY29sb3ItNjAwOiB2YXIoLS1ncmVlbjYwMCk7XFxuICAgLS13LXN1Y2Nlc3MtY29sb3ItNzAwOiB2YXIoLS1ncmVlbjcwMCk7XFxuICAgLS13LXN1Y2Nlc3MtY29sb3ItODAwOiB2YXIoLS1ncmVlbjgwMCk7XFxuXFxuICAgLS13LXN1Y2Nlc3MtY29sb3I6IHZhcigtLXctc3VjY2Vzcy1jb2xvci01MDApO1xcbiAgIC0tdy1zdWNjZXNzLWhvdmVyLWNvbG9yOiB2YXIoLS13LXN1Y2Nlc3MtY29sb3ItNjAwKTtcXG4gICAtLXctc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1ncmF5MjAwKTtcXG4gICAtLXctc3VjY2Vzcy10ZXh0LWNvbG9yLTMwMDogdmFyKC0td2hpdGUpO1xcbiAgIC0tdy1zdWNjZXNzLXRleHQtY29sb3ItNDAwOiB2YXIoLS1ncmF5MjAwKTtcXG4gICAtLXctc3VjY2Vzcy10ZXh0LWNvbG9yLTUwMDogdmFyKC0tZ3JheTQwMCk7XFxuIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2NvbG9ycy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkNBQUM7SUFDRzs7TUFFRTtJQUNGLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0lBRWhCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7O0lBRWpCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCOztJQUVoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7O0lBRWxCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjs7SUFFbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjs7SUFFcEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjs7SUFFbEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjs7R0FFckI7O0lBRUM7R0FDRCxtQ0FBbUM7R0FDbkMsdUNBQXVDO0dBQ3ZDLHVDQUF1QztHQUN2Qyx3Q0FBd0M7R0FDeEMsd0NBQXdDO0dBQ3hDLHdDQUF3QztHQUN4Qyx3Q0FBd0M7R0FDeEMsd0NBQXdDO0dBQ3hDLHlDQUF5QztHQUN6Qyx5Q0FBeUM7R0FDekMseUNBQXlDO0dBQ3pDLHlDQUF5Qzs7R0FFekMsOEJBQThCO0dBQzlCLGtDQUFrQztHQUNsQyxrQ0FBa0M7R0FDbEMsZ0NBQWdDOztHQUVoQyw4QkFBOEI7R0FDOUIsb0NBQW9DOztHQUVwQywrQkFBK0I7R0FDL0Isb0NBQW9DOztHQUVwQyxxQ0FBcUM7R0FDckMscUNBQXFDO0dBQ3JDLHFDQUFxQztHQUNyQyxxQ0FBcUM7R0FDckMscUNBQXFDO0dBQ3JDLHFDQUFxQztHQUNyQyw2Q0FBNkM7R0FDN0MsdUNBQXVDOztHQUV2QyxzQ0FBc0M7R0FDdEMsd0NBQXdDO0dBQ3hDLDBDQUEwQztHQUMxQywwQ0FBMEM7O0dBRTFDLHFDQUFxQztHQUNyQywyQ0FBMkM7R0FDM0Msc0NBQXNDOztHQUV0QyxtQ0FBbUM7R0FDbkMsbUNBQW1DO0dBQ25DLG1DQUFtQztHQUNuQyxtQ0FBbUM7R0FDbkMsbUNBQW1DO0dBQ25DLG1DQUFtQzs7R0FFbkMsMkNBQTJDO0dBQzNDLGlEQUFpRDtHQUNqRCxxQ0FBcUM7R0FDckMsdUNBQXVDO0dBQ3ZDLHlDQUF5QztHQUN6Qyx5Q0FBeUM7O0dBRXpDLHNDQUFzQztHQUN0QyxzQ0FBc0M7R0FDdEMsc0NBQXNDO0dBQ3RDLHNDQUFzQztHQUN0QyxzQ0FBc0M7R0FDdEMsc0NBQXNDOztHQUV0Qyw2Q0FBNkM7R0FDN0MsbURBQW1EO0dBQ25ELHNDQUFzQztHQUN0Qyx3Q0FBd0M7R0FDeEMsMENBQTBDO0dBQzFDLDBDQUEwQztDQUM1Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIgOnJvb3Qge1xcbiAgICAvKlxcbiAgICAgKiBCYXNlIENvbG9yc1xcbiAgICAgKi9cXG4gICAgLS1ibGFjazogIzEyMTIxMjtcXG4gICAgLS1ncmF5OTAwOiAjMTAxODQwO1xcbiAgICAtLWdyYXk4MDA6ICM0NzRkNjY7XFxuICAgIC0tZ3JheTcwMDogIzY5NmY4YztcXG4gICAgLS1ncmF5NjAwOiAjOGY5NWIyO1xcbiAgICAtLWdyYXk1MDA6ICNjMWM0ZDY7XFxuICAgIC0tZ3JheTQwMDogI2Q4ZGFlNTtcXG4gICAgLS1ncmF5MzAwOiAjRTZFOEYwO1xcbiAgICAtLWdyYXkyMDA6ICNlZGVmZjU7XFxuICAgIC0tZ3JheTEwMDogI0Y0RjVGOTtcXG4gICAgLS1ncmF5OTA6ICNGNEY2RkE7XFxuICAgIC0tZ3JheTc1OiAjRjlGQUZDO1xcbiAgICAtLWdyYXk1MDogI0ZBRkJGRjtcXG4gICAgLS13aGl0ZTogI0ZGRkZGRjtcXG5cXG4gICAgLS1ibHVlOTAwOiAjMEExNDMzO1xcbiAgICAtLWJsdWU4MDA6ICMxNDI5NjY7XFxuICAgIC0tYmx1ZTcwMDogIzFGM0Q5OTtcXG4gICAgLS1ibHVlNjAwOiAjMjk1MkNDO1xcbiAgICAtLWJsdWU1MDA6ICMzMzY2RkY7XFxuICAgIC0tYmx1ZTQwMDogIzVDODVGRjtcXG4gICAgLS1ibHVlMzAwOiAjODVBM0ZGO1xcbiAgICAtLWJsdWUyMDA6ICNBREMyRkY7XFxuICAgIC0tYmx1ZTEwMDogI0Q2RTBGRjtcXG4gICAgLS1ibHVlNTA6ICNFQkYwRkY7XFxuICAgIC0tYmx1ZTI1OiAjRjNGNkZGO1xcblxcbiAgICAtLXJlZDcwMDogIzdEMjgyODtcXG4gICAgLS1yZWQ2MDA6ICNBNzM2MzY7XFxuICAgIC0tcmVkNTAwOiAjRDE0MzQzO1xcbiAgICAtLXJlZDMwMDogI0VFOTE5MTtcXG4gICAgLS1yZWQxMDA6ICNGOURBREE7XFxuICAgIC0tcmVkMjU6ICNGREY0RjQ7XFxuXFxuICAgIC0tZ3JlZW45MDA6ICMxMDI2MUU7XFxuICAgIC0tZ3JlZW44MDA6ICMyMTRDM0M7XFxuICAgIC0tZ3JlZW43MDA6ICMzMTcxNTk7XFxuICAgIC0tZ3JlZW42MDA6ICM0Mjk3Nzc7XFxuICAgIC0tZ3JlZW41MDA6ICM1MkJEOTU7XFxuICAgIC0tZ3JlZW40MDA6ICM3NUNBQUE7XFxuICAgIC0tZ3JlZW4zMDA6ICM5N0Q3QkY7XFxuICAgIC0tZ3JlZW4yMDA6ICNCQUU1RDU7XFxuICAgIC0tZ3JlZW4xMDA6ICNEQ0YyRUE7XFxuICAgIC0tZ3JlZW4yNTogI0Y1RkJGODtcXG5cXG4gICAgLS1vcmFuZ2U3MDA6ICM5OTZBMTM7XFxuICAgIC0tb3JhbmdlNTAwOiAjRkZCMDIwO1xcbiAgICAtLW9yYW5nZTEwMDogI0Y4RTNEQTtcXG4gICAgLS1vcmFuZ2UyNTogI0ZGRkFGMjtcXG5cXG4gICAgLS1wdXJwbGU2MDA6ICM2RTYyQjY7XFxuICAgIC0tcHVycGxlMTAwOiAjRTdFNEY5O1xcblxcbiAgICAtLXRlYWw4MDA6ICMwRjUxNTY7XFxuICAgIC0tdGVhbDEwMDogI0QzRjVGNztcXG5cXG4gICAgLS15ZWxsb3c4MDA6ICM2NjQ2MEQ7XFxuICAgIC0teWVsbG93MTAwOiAjRkZFRkQyO1xcblxcbiAgIC8qIFxcbiAgICogQ29sb3IgVG9rZW5zIFxcbiAgICovXFxuICAgLS13LWJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXk3NSk7XFxuICAgLS13LWJhY2tncm91bmQtY29sb3ItMzAwOiB2YXIoLS1ncmF5NTApO1xcbiAgIC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTQwMDogdmFyKC0tZ3JheTc1KTtcXG4gICAtLXctYmFja2dyb3VuZC1jb2xvci01MDA6IHZhcigtLWdyYXkxMDApO1xcbiAgIC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTYwMDogdmFyKC0tZ3JheTIwMCk7XFxuICAgLS13LWJhY2tncm91bmQtY29sb3ItNzAwOiB2YXIoLS1ncmF5MzAwKTtcXG4gICAtLXctYmFja2dyb3VuZC1jb2xvci04MDA6IHZhcigtLWdyYXk0MDApO1xcbiAgIC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTkwMDogdmFyKC0tZ3JheTUwMCk7XFxuICAgLS13LWJhY2tncm91bmQtY29sb3ItMTAwMDogdmFyKC0tZ3JheTYwMCk7XFxuICAgLS13LWJhY2tncm91bmQtY29sb3ItMTEwMDogdmFyKC0tZ3JheTcwMCk7XFxuICAgLS13LWJhY2tncm91bmQtY29sb3ItMTIwMDogdmFyKC0tZ3JheTgwMCk7XFxuICAgLS13LWJhY2tncm91bmQtY29sb3ItMTMwMDogdmFyKC0tZ3JheTkwMCk7XFxuXFxuICAgLS13LXRleHQtY29sb3I6IHZhcigtLWdyYXk5MDApO1xcbiAgIC0tdy10ZXh0LWNvbG9yLTMwMDogdmFyKC0tZ3JheTgwMCk7XFxuICAgLS13LXRleHQtY29sb3ItNDAwOiB2YXIoLS1ncmF5OTAwKTtcXG4gICAtLXctdGV4dC1jb2xvci01MDA6IHZhcigtLWJsYWNrKTtcXG5cXG4gICAtLXctbGluay1jb2xvcjogdmFyKC0tYmx1ZTUwMCk7XFxuICAgLS13LWxpbmstaG92ZXItY29sb3I6IHZhcigtLWJsdWU3MDApO1xcblxcbiAgIC0tdy1tdXRlZC1jb2xvcjogdmFyKC0tZ3JheTcwMCk7XFxuICAgLS13LW11dGVkLXRleHQtY29sb3I6IHZhcigtLWdyYXk5MDApO1xcblxcbiAgIC0tdy1wcmltYXJ5LWNvbG9yLTMwMDogdmFyKC0tYmx1ZTQwMCk7XFxuICAgLS13LXByaW1hcnktY29sb3ItNDAwOiB2YXIoLS1ibHVlNTAwKTtcXG4gICAtLXctcHJpbWFyeS1jb2xvci01MDA6IHZhcigtLWJsdWU2MDApO1xcbiAgIC0tdy1wcmltYXJ5LWNvbG9yLTYwMDogdmFyKC0tYmx1ZTcwMCk7XFxuICAgLS13LXByaW1hcnktY29sb3ItNzAwOiB2YXIoLS1ibHVlODAwKTtcXG4gICAtLXctcHJpbWFyeS1jb2xvci04MDA6IHZhcigtLWJsdWU5MDApO1xcbiAgIC0tdy1wcmltYXJ5LWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3ItNDAwKTtcXG4gICAtLXctcHJpbWFyeS1ob3Zlci1jb2xvcjogdmFyKC0tYmx1ZTYwMCk7XFxuXFxuICAgLS13LXByaW1hcnktdGV4dC1jb2xvcjogdmFyKC0tZ3JheTIwMCk7XFxuICAgLS13LXByaW1hcnktdGV4dC1jb2xvci0zMDA6IHZhcigtLXdoaXRlKTtcXG4gICAtLXctcHJpbWFyeS10ZXh0LWNvbG9yLTQwMDogdmFyKC0tZ3JheTIwMCk7XFxuICAgLS13LXByaW1hcnktdGV4dC1jb2xvci01MDA6IHZhcigtLWdyYXk0MDApO1xcblxcbiAgIC0tdy1zZWNvbmRhcnktY29sb3I6IHZhciggLS1ncmVlbjYwMCk7XFxuICAgLS13LXNlY29uZGFyeS1ob3Zlci1jb2xvcjogdmFyKCAtLWdyZWVuNzAwKTtcXG4gICAtLXctc2Vjb25kYXJ5LXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXG4gICAtLXctZGFuZ2VyLWNvbG9yLTMwMDogdmFyKC0tcmVkMzAwKTtcXG4gICAtLXctZGFuZ2VyLWNvbG9yLTQwMDogdmFyKC0tcmVkMzAwKTtcXG4gICAtLXctZGFuZ2VyLWNvbG9yLTUwMDogdmFyKC0tcmVkNTAwKTtcXG4gICAtLXctZGFuZ2VyLWNvbG9yLTYwMDogdmFyKC0tcmVkNTAwKTtcXG4gICAtLXctZGFuZ2VyLWNvbG9yLTcwMDogdmFyKC0tcmVkNjAwKTtcXG4gICAtLXctZGFuZ2VyLWNvbG9yLTgwMDogdmFyKC0tcmVkNjAwKTtcXG5cXG4gICAtLXctZGFuZ2VyLWNvbG9yOiB2YXIoLS13LWRhbmdlci1jb2xvci01MDApO1xcbiAgIC0tdy1kYW5nZXItaG92ZXItY29sb3I6IHZhcigtLXctZGFuZ2VyLWNvbG9yLTcwMCk7XFxuICAgLS13LWRhbmdlci10ZXh0LWNvbG9yOiB2YXIoLS1ncmF5MjAwKTtcXG4gICAtLXctZGFuZ2VyLXRleHQtY29sb3ItMzAwOiB2YXIoLS13aGl0ZSk7XFxuICAgLS13LWRhbmdlci10ZXh0LWNvbG9yLTQwMDogdmFyKC0tZ3JheTIwMCk7XFxuICAgLS13LWRhbmdlci10ZXh0LWNvbG9yLTUwMDogdmFyKC0tZ3JheTQwMCk7XFxuXFxuICAgLS13LXN1Y2Nlc3MtY29sb3ItMzAwOiB2YXIoLS1ncmVlbjMwMCk7XFxuICAgLS13LXN1Y2Nlc3MtY29sb3ItNDAwOiB2YXIoLS1ncmVlbjQwMCk7XFxuICAgLS13LXN1Y2Nlc3MtY29sb3ItNTAwOiB2YXIoLS1ncmVlbjUwMCk7XFxuICAgLS13LXN1Y2Nlc3MtY29sb3ItNjAwOiB2YXIoLS1ncmVlbjYwMCk7XFxuICAgLS13LXN1Y2Nlc3MtY29sb3ItNzAwOiB2YXIoLS1ncmVlbjcwMCk7XFxuICAgLS13LXN1Y2Nlc3MtY29sb3ItODAwOiB2YXIoLS1ncmVlbjgwMCk7XFxuXFxuICAgLS13LXN1Y2Nlc3MtY29sb3I6IHZhcigtLXctc3VjY2Vzcy1jb2xvci01MDApO1xcbiAgIC0tdy1zdWNjZXNzLWhvdmVyLWNvbG9yOiB2YXIoLS13LXN1Y2Nlc3MtY29sb3ItNjAwKTtcXG4gICAtLXctc3VjY2Vzcy10ZXh0LWNvbG9yOiB2YXIoLS1ncmF5MjAwKTtcXG4gICAtLXctc3VjY2Vzcy10ZXh0LWNvbG9yLTMwMDogdmFyKC0td2hpdGUpO1xcbiAgIC0tdy1zdWNjZXNzLXRleHQtY29sb3ItNDAwOiB2YXIoLS1ncmF5MjAwKTtcXG4gICAtLXctc3VjY2Vzcy10ZXh0LWNvbG9yLTUwMDogdmFyKC0tZ3JheTQwMCk7XFxuIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgd2lkdGg9JTI3MjQlMjcgaGVpZ2h0PSUyNzI0JTI3IHZpZXdCb3g9JTI3MCAwIDI0IDI0JTI3IGZpbGw9JTI3bm9uZSUyNyBzdHJva2U9JTI3cmdiJTI4MjU1LCAyNTUsIDI1NSUyOSUyNyBzdHJva2Utd2lkdGg9JTI3NCUyNyBzdHJva2UtbGluZWNhcD0lMjdyb3VuZCUyNyBzdHJva2UtbGluZWpvaW49JTI3cm91bmQlMjclM0UlM0Nwb2x5bGluZSBwb2ludHM9JTI3MjAgNiA5IDE3IDQgMTIlMjclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB3aWR0aD0lMjcyNCUyNyBoZWlnaHQ9JTI3MjQlMjcgdmlld0JveD0lMjcwIDAgMjQgMjQlMjcgZmlsbD0lMjdub25lJTI3IHN0cm9rZT0lMjdyZ2IlMjg2NSwgODQsIDk4JTI5JTI3IHN0cm9rZS13aWR0aD0lMjcyJTI3IHN0cm9rZS1saW5lY2FwPSUyN3JvdW5kJTI3IHN0cm9rZS1saW5lam9pbj0lMjdyb3VuZCUyNyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0lMjc2IDkgMTIgMTUgMTggOSUyNyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IHdpZHRoPSUyNzI0JTI3IGhlaWdodD0lMjcyNCUyNyB2aWV3Qm94PSUyNzAgMCAyNCAyNCUyNyBmaWxsPSUyN25vbmUlMjcgc3Ryb2tlPSUyN3JnYiUyODI1NSwgMjU1LCAyNTUlMjklMjcgc3Ryb2tlLXdpZHRoPSUyNzIlMjcgc3Ryb2tlLWxpbmVjYXA9JTI3cm91bmQlMjcgc3Ryb2tlLWxpbmVqb2luPSUyN3JvdW5kJTI3JTNFJTNDcG9seWxpbmUgcG9pbnRzPSUyNzYgOSAxMiAxNSAxOCA5JTI3JTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgd2lkdGg9JTI3MjQlMjcgaGVpZ2h0PSUyNzI0JTI3IHZpZXdCb3g9JTI3MCAwIDI0IDI0JTI3IGZpbGw9JTI3bm9uZSUyNyBzdHJva2U9JTI3cmdiJTI4MTE1LCAxMzAsIDE0MCUyOSUyNyBzdHJva2Utd2lkdGg9JTI3NCUyNyBzdHJva2UtbGluZWNhcD0lMjdyb3VuZCUyNyBzdHJva2UtbGluZWpvaW49JTI3cm91bmQlMjclM0UlM0NsaW5lIHgxPSUyNzE4JTI3IHkxPSUyNzYlMjcgeDI9JTI3NiUyNyB5Mj0lMjcxOCUyNyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0lMjc2JTI3IHkxPSUyNzYlMjcgeDI9JTI3MTglMjcgeTI9JTI3MTglMjclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IHdpZHRoPSUyNzI0JTI3IGhlaWdodD0lMjcyNCUyNyB2aWV3Qm94PSUyNzAgMCAyNCAyNCUyNyBmaWxsPSUyN25vbmUlMjcgc3Ryb2tlPSUyN3JnYiUyODY1LCA4NCwgOTglMjklMjcgc3Ryb2tlLXdpZHRoPSUyNzIlMjcgc3Ryb2tlLWxpbmVjYXA9JTI3cm91bmQlMjcgc3Ryb2tlLWxpbmVqb2luPSUyN3JvdW5kJTI3JTNFJTNDcmVjdCB4PSUyNzMlMjcgeT0lMjc0JTI3IHdpZHRoPSUyNzE4JTI3IGhlaWdodD0lMjcxOCUyNyByeD0lMjcyJTI3IHJ5PSUyNzIlMjclM0UlM0MvcmVjdCUzRSUzQ2xpbmUgeDE9JTI3MTYlMjcgeTE9JTI3MiUyNyB4Mj0lMjcxNiUyNyB5Mj0lMjc2JTI3JTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPSUyNzglMjcgeTE9JTI3MiUyNyB4Mj0lMjc4JTI3IHkyPSUyNzYlMjclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JTI3MyUyNyB5MT0lMjcxMCUyNyB4Mj0lMjcyMSUyNyB5Mj0lMjcxMCUyNyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgd2lkdGg9JTI3MjQlMjcgaGVpZ2h0PSUyNzI0JTI3IHZpZXdCb3g9JTI3MCAwIDI0IDI0JTI3IGZpbGw9JTI3bm9uZSUyNyBzdHJva2U9JTI3cmdiJTI4MTk4LCA0MCwgNDAlMjklMjcgc3Ryb2tlLXdpZHRoPSUyNzIlMjcgc3Ryb2tlLWxpbmVjYXA9JTI3cm91bmQlMjcgc3Ryb2tlLWxpbmVqb2luPSUyN3JvdW5kJTI3JTNFJTNDY2lyY2xlIGN4PSUyNzEyJTI3IGN5PSUyNzEyJTI3IHI9JTI3MTAlMjclM0UlM0MvY2lyY2xlJTNFJTNDbGluZSB4MT0lMjcxMiUyNyB5MT0lMjc4JTI3IHgyPSUyNzEyJTI3IHkyPSUyNzEyJTI3JTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPSUyNzEyJTI3IHkxPSUyNzE2JTI3IHgyPSUyNzEyLjAxJTI3IHkyPSUyNzE2JTI3JTNFJTNDL2xpbmUlM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB3aWR0aD0lMjcyNCUyNyBoZWlnaHQ9JTI3MjQlMjcgdmlld0JveD0lMjcwIDAgMjQgMjQlMjcgZmlsbD0lMjdub25lJTI3IHN0cm9rZT0lMjdyZ2IlMjgyNTUsIDI1NSwgMjU1JTI5JTI3IHN0cm9rZS13aWR0aD0lMjc0JTI3IHN0cm9rZS1saW5lY2FwPSUyN3JvdW5kJTI3IHN0cm9rZS1saW5lam9pbj0lMjdyb3VuZCUyNyUzRSUzQ2xpbmUgeDE9JTI3NSUyNyB5MT0lMjcxMiUyNyB4Mj0lMjcxOSUyNyB5Mj0lMjcxMiUyNyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgd2lkdGg9JTI3MjQlMjcgaGVpZ2h0PSUyNzI0JTI3IHZpZXdCb3g9JTI3MCAwIDI0IDI0JTI3IGZpbGw9JTI3bm9uZSUyNyBzdHJva2U9JTI3cmdiJTI4NjUsIDg0LCA5OCUyOSUyNyBzdHJva2Utd2lkdGg9JTI3MiUyNyBzdHJva2UtbGluZWNhcD0lMjdyb3VuZCUyNyBzdHJva2UtbGluZWpvaW49JTI3cm91bmQlMjclM0UlM0NjaXJjbGUgY3g9JTI3MTElMjcgY3k9JTI3MTElMjcgcj0lMjc4JTI3JTNFJTNDL2NpcmNsZSUzRSUzQ2xpbmUgeDE9JTI3MjElMjcgeTE9JTI3MjElMjcgeDI9JTI3MTYuNjUlMjcgeTI9JTI3MTYuNjUlMjclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IHdpZHRoPSUyNzI0JTI3IGhlaWdodD0lMjcyNCUyNyB2aWV3Qm94PSUyNzAgMCAyNCAyNCUyNyBmaWxsPSUyN25vbmUlMjcgc3Ryb2tlPSUyN3JnYiUyODY1LCA4NCwgOTglMjklMjcgc3Ryb2tlLXdpZHRoPSUyNzIlMjcgc3Ryb2tlLWxpbmVjYXA9JTI3cm91bmQlMjcgc3Ryb2tlLWxpbmVqb2luPSUyN3JvdW5kJTI3JTNFJTNDY2lyY2xlIGN4PSUyNzEyJTI3IGN5PSUyNzEyJTI3IHI9JTI3MTAlMjclM0UlM0MvY2lyY2xlJTNFJTNDcG9seWxpbmUgcG9pbnRzPSUyNzEyIDYgMTIgMTIgMTYgMTQlMjclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB3aWR0aD0lMjcyNCUyNyBoZWlnaHQ9JTI3MjQlMjcgdmlld0JveD0lMjcwIDAgMjQgMjQlMjcgZmlsbD0lMjdub25lJTI3IHN0cm9rZT0lMjdyZ2IlMjg1NiwgMTQyLCA2MCUyOSUyNyBzdHJva2Utd2lkdGg9JTI3MyUyNyBzdHJva2UtbGluZWNhcD0lMjdyb3VuZCUyNyBzdHJva2UtbGluZWpvaW49JTI3cm91bmQlMjclM0UlM0Nwb2x5bGluZSBwb2ludHM9JTI3MjAgNiA5IDE3IDQgMTIlMjclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzEwX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0MlM0Z4bWwgdmVyc2lvbj0lMjcxLjAlMjcgZW5jb2Rpbmc9JTI3aXNvLTg4NTktMSUyNyUzRiUzRSUzQyUyMS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tJTNFJTNDc3ZnIGZpbGw9JTI3JTIzMDAwMDAwJTI3IGhlaWdodD0lMjc4MDBweCUyNyB3aWR0aD0lMjc4MDBweCUyNyB2ZXJzaW9uPSUyNzEuMSUyNyBpZD0lMjdDYXBhXzElMjcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgeG1sbnM6eGxpbms9JTI3aHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayUyNyB2aWV3Qm94PSUyNzAgMCA0ODguODUgNDg4Ljg1JTI3IHhtbDpzcGFjZT0lMjdwcmVzZXJ2ZSUyNyUzRSUzQ2clM0UlM0NwYXRoIGQ9JTI3TTI0NC40MjUsOTguNzI1Yy05My40LDAtMTc4LjEsNTEuMS0yNDAuNiwxMzQuMWMtNS4xLDYuOC01LjEsMTYuMywwLDIzLjFjNjIuNSw4My4xLDE0Ny4yLDEzNC4yLDI0MC42LDEzNC4yIHMxNzguMS01MS4xLDI0MC42LTEzNC4xYzUuMS02LjgsNS4xLTE2LjMsMC0yMy4xQzQyMi41MjUsMTQ5LjgyNSwzMzcuODI1LDk4LjcyNSwyNDQuNDI1LDk4LjcyNXogTTI1MS4xMjUsMzQ3LjAyNSBjLTYyLDMuOS0xMTMuMi00Ny4yLTEwOS4zLTEwOS4zYzMuMi01MS4yLDQ0LjctOTIuNyw5NS45LTk1LjljNjItMy45LDExMy4yLDQ3LjIsMTA5LjMsMTA5LjMgQzM0My43MjUsMzAyLjIyNSwzMDIuMjI1LDM0My43MjUsMjUxLjEyNSwzNDcuMDI1eiBNMjQ4LjAyNSwyOTkuNjI1Yy0zMy40LDIuMS02MS0yNS40LTU4LjgtNTguOGMxLjctMjcuNiwyNC4xLTQ5LjksNTEuNy01MS43IGMzMy40LTIuMSw2MSwyNS40LDU4LjgsNTguOEMyOTcuOTI1LDI3NS42MjUsMjc1LjUyNSwyOTcuOTI1LDI0OC4wMjUsMjk5LjYyNXolMjcvJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzlfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzEwX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMTBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWljb24tY2hlY2tib3g6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIC0taWNvbi1jaGV2cm9uOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICAtLWljb24tY2hldnJvbi1idXR0b246IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIC0taWNvbi1jaGV2cm9uLWJ1dHRvbi1pbnZlcnNlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICAtLWljb24tY2xvc2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIC0taWNvbi1kYXRlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICAtLWljb24taW52YWxpZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG4gICAgLS1pY29uLW1pbnVzOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpO1xcbiAgICAtLWljb24tc2VhcmNoOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpO1xcbiAgICAtLWljb24tdGltZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyArIFwiKTtcXG4gICAgLS1pY29uLXZhbGlkOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF85X19fICsgXCIpO1xcbiAgICAtLWljb24tZXllOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xMF9fXyArIFwiKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9pY29ucy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3REFBeVM7SUFDelMsdURBQXFTO0lBQ3JTLDhEQUErUztJQUMvUyxzRUFBdVQ7SUFDdlQscURBQXVWO0lBQ3ZWLG9EQUEyYztJQUMzYyx1REFBNlk7SUFDN1kscURBQXFTO0lBQ3JTLHNEQUF5VjtJQUN6VixvREFBb1Y7SUFDcFYscURBQW9TO0lBQ3BTLG9EQUFtNkI7QUFDdjZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1pY29uLWNoZWNrYm94OiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMjU1LCAyNTUsIDI1NSknIHN0cm9rZS13aWR0aD0nNCcgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMjAgNiA5IDE3IDQgMTInJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgICAtLWljb24tY2hldnJvbjogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDY1LCA4NCwgOTgpJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcXFwiKTtcXG4gICAgLS1pY29uLWNoZXZyb24tYnV0dG9uOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMjU1LCAyNTUsIDI1NSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgICAtLWljb24tY2hldnJvbi1idXR0b24taW52ZXJzZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDI1NSwgMjU1LCAyNTUpJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcXFwiKTtcXG4gICAgLS1pY29uLWNsb3NlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2IoMTE1LCAxMzAsIDE0MCknIHN0cm9rZS13aWR0aD0nNCcgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyUzRSUzQ2xpbmUgeDE9JzE4JyB5MT0nNicgeDI9JzYnIHkyPScxOCclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzYnIHkxPSc2JyB4Mj0nMTgnIHkyPScxOCclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcXFwiKTtcXG4gICAgLS1pY29uLWRhdGU6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J3JnYig2NSwgODQsIDk4KScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnJTNFJTNDcmVjdCB4PSczJyB5PSc0JyB3aWR0aD0nMTgnIGhlaWdodD0nMTgnIHJ4PScyJyByeT0nMiclM0UlM0MvcmVjdCUzRSUzQ2xpbmUgeDE9JzE2JyB5MT0nMicgeDI9JzE2JyB5Mj0nNiclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzgnIHkxPScyJyB4Mj0nOCcgeTI9JzYnJTNFJTNDL2xpbmUlM0UlM0NsaW5lIHgxPSczJyB5MT0nMTAnIHgyPScyMScgeTI9JzEwJyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgICAtLWljb24taW52YWxpZDogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDE5OCwgNDAsIDQwKScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnJTNFJTNDY2lyY2xlIGN4PScxMicgY3k9JzEyJyByPScxMCclM0UlM0MvY2lyY2xlJTNFJTNDbGluZSB4MT0nMTInIHkxPSc4JyB4Mj0nMTInIHkyPScxMiclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nMTYnIHgyPScxMi4wMScgeTI9JzE2JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgICAtLWljb24tbWludXM6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J3JnYigyNTUsIDI1NSwgMjU1KScgc3Ryb2tlLXdpZHRoPSc0JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnJTNFJTNDbGluZSB4MT0nNScgeTE9JzEyJyB4Mj0nMTknIHkyPScxMiclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcXFwiKTtcXG4gICAgLS1pY29uLXNlYXJjaDogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDY1LCA4NCwgOTgpJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCclM0UlM0NjaXJjbGUgY3g9JzExJyBjeT0nMTEnIHI9JzgnJTNFJTNDL2NpcmNsZSUzRSUzQ2xpbmUgeDE9JzIxJyB5MT0nMjEnIHgyPScxNi42NScgeTI9JzE2LjY1JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgICAtLWljb24tdGltZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0ncmdiKDY1LCA4NCwgOTgpJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCclM0UlM0NjaXJjbGUgY3g9JzEyJyBjeT0nMTInIHI9JzEwJyUzRSUzQy9jaXJjbGUlM0UlM0Nwb2x5bGluZSBwb2ludHM9JzEyIDYgMTIgMTIgMTYgMTQnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgICAtLWljb24tdmFsaWQ6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J3JnYig1NiwgMTQyLCA2MCknIHN0cm9rZS13aWR0aD0nMycgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMjAgNiA5IDE3IDQgMTInJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgICAtLWljb24tZXllOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0MlM0Z4bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0naXNvLTg4NTktMSclM0YlM0UlM0MhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0lM0UlM0NzdmcgZmlsbD0nJTIzMDAwMDAwJyBoZWlnaHQ9JzgwMHB4JyB3aWR0aD0nODAwcHgnIHZlcnNpb249JzEuMScgaWQ9J0NhcGFfMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgdmlld0JveD0nMCAwIDQ4OC44NSA0ODguODUnIHhtbDpzcGFjZT0ncHJlc2VydmUnJTNFJTNDZyUzRSUzQ3BhdGggZD0nTTI0NC40MjUsOTguNzI1Yy05My40LDAtMTc4LjEsNTEuMS0yNDAuNiwxMzQuMWMtNS4xLDYuOC01LjEsMTYuMywwLDIzLjFjNjIuNSw4My4xLDE0Ny4yLDEzNC4yLDI0MC42LDEzNC4yIHMxNzguMS01MS4xLDI0MC42LTEzNC4xYzUuMS02LjgsNS4xLTE2LjMsMC0yMy4xQzQyMi41MjUsMTQ5LjgyNSwzMzcuODI1LDk4LjcyNSwyNDQuNDI1LDk4LjcyNXogTTI1MS4xMjUsMzQ3LjAyNSBjLTYyLDMuOS0xMTMuMi00Ny4yLTEwOS4zLTEwOS4zYzMuMi01MS4yLDQ0LjctOTIuNyw5NS45LTk1LjljNjItMy45LDExMy4yLDQ3LjIsMTA5LjMsMTA5LjMgQzM0My43MjUsMzAyLjIyNSwzMDIuMjI1LDM0My43MjUsMjUxLjEyNSwzNDcuMDI1eiBNMjQ4LjAyNSwyOTkuNjI1Yy0zMy40LDIuMS02MS0yNS40LTU4LjgtNTguOGMxLjctMjcuNiwyNC4xLTQ5LjksNTEuNy01MS43IGMzMy40LTIuMSw2MSwyNS40LDU4LjgsNTguOEMyOTcuOTI1LDI3NS42MjUsMjc1LjUyNSwyOTcuOTI1LDI0OC4wMjUsMjk5LjYyNXonLyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC8qIDEgKi9cXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gICAqL1xcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqL1xcblxcbmhyIHtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIC8qIDEgKi9cXG4gICAgaGVpZ2h0OiAwO1xcbiAgICAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnByZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gICAgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcblxcbmEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgLyogMSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgLyogMiAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAgICogYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICAgIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gICAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICAvKiAxICovXFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIC8qIDEgKi9cXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gICAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmZpZWxkc2V0IHtcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmxlZ2VuZCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIDEgKi9cXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIC8qIDIgKi9cXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIC8qIDEgKi9cXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICAvKiAxICovXFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIDMgKi9cXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICAgKi9cXG5cXG5wcm9ncmVzcyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRleHRhcmVhIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gICAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gICAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgICAvKiAxICovXFxuICAgIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAgICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICAgKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gICAqL1xcblxcbmRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnN1bW1hcnkge1xcbiAgICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICAgKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0lBQ0ksaUJBQWlCO0lBQ2pCLE1BQU07SUFDTiw4QkFBOEI7SUFDOUIsTUFBTTtBQUNWOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSTs7QUFFSjtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7O0lBR0k7O0FBRUo7SUFDSSx1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLFNBQVM7SUFDVCxNQUFNO0lBQ04saUJBQWlCO0lBQ2pCLE1BQU07QUFDVjs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSxpQ0FBaUM7SUFDakMsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0FBQ1Y7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSxtQkFBbUI7SUFDbkIsTUFBTTtJQUNOLDBCQUEwQjtJQUMxQixNQUFNO0lBQ04saUNBQWlDO0lBQ2pDLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7OztJQUdJOztBQUVKOzs7SUFHSSxpQ0FBaUM7SUFDakMsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0FBQ1Y7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOzs7SUFHSTs7QUFFSjs7SUFFSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7O0lBR0k7O0FBRUo7Ozs7O0lBS0ksb0JBQW9CO0lBQ3BCLE1BQU07SUFDTixlQUFlO0lBQ2YsTUFBTTtJQUNOLGlCQUFpQjtJQUNqQixNQUFNO0lBQ04sU0FBUztJQUNULE1BQU07QUFDVjs7QUFFQTs7O0lBR0k7O0FBRUo7O0lBRUksTUFBTTtJQUNOLGlCQUFpQjtBQUNyQjs7QUFFQTs7O0lBR0k7O0FBRUo7O0lBRUksTUFBTTtJQUNOLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSTs7QUFFSjs7OztJQUlJLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSTs7QUFFSjs7OztJQUlJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUk7O0FBRUo7Ozs7SUFJSSw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7Ozs7O0lBS0k7O0FBRUo7SUFDSSxzQkFBc0I7SUFDdEIsTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0lBQ04sY0FBYztJQUNkLE1BQU07SUFDTixlQUFlO0lBQ2YsTUFBTTtJQUNOLFVBQVU7SUFDVixNQUFNO0lBQ04sbUJBQW1CO0lBQ25CLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJOztBQUVKOztJQUVJLHNCQUFzQjtJQUN0QixNQUFNO0lBQ04sVUFBVTtJQUNWLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSTs7QUFFSjtJQUNJLDZCQUE2QjtJQUM3QixNQUFNO0lBQ04sb0JBQW9CO0lBQ3BCLE1BQU07QUFDVjs7QUFFQTs7SUFFSTs7QUFFSjtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTs7O0lBR0k7O0FBRUo7SUFDSSwwQkFBMEI7SUFDMUIsTUFBTTtJQUNOLGFBQWE7SUFDYixNQUFNO0FBQ1Y7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUk7O0FBRUo7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLyogMSAqL1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAgICovXFxuXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAgICovXFxuXFxuaHIge1xcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxucHJlIHtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgICAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAvKiAxICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAvKiAyICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICAgKiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gICAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAvKiAxICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIC8qIDEgKi9cXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgLyogMSAqL1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuZmllbGRzZXQge1xcbiAgICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxubGVnZW5kIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgLyogMiAqL1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgLyogMSAqL1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIC8qIDEgKi9cXG4gICAgcGFkZGluZzogMDtcXG4gICAgLyogMyAqL1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICAvKiAxICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gICAqL1xcblxcbnByb2dyZXNzIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAgICovXFxuXFxudGV4dGFyZWEge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gICAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogMSAqL1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAgICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAgICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAgIC8qIDEgKi9cXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAgIC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gICAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gICAgLyogMSAqL1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICovXFxuXFxuZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc3VtbWFyeSB7XFxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRlbXBsYXRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gICAqL1xcblxcbltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXctc3BhY2luZy0xMDA6IDAuNGVtO1xcbiAgICAtLXctc3BhY2luZy0yMDA6IDAuNmVtO1xcbiAgICAtLXctc3BhY2luZy0zMDA6IDFlbTtcXG4gICAgLS13LXNwYWNpbmctNDAwOiAxLjJlbTtcXG4gICAgLS13LXNwYWNpbmctNTAwOiAxLjZlbTtcXG4gICAgLS13LXNwYWNpbmctNjAwOiAyZW07XFxuICAgIC0tdy1zcGFjaW5nLTcwMDogMi41ZW07XFxuICAgIC0tdy1zcGFjaW5nLTgwMDogM2VtO1xcblxcbiAgICAtLXctc3BhY2luZy0tcGFnZS0tdmVydGljYWwtc3BhY2U6IHZhcigtLXctc3BhY2luZy0zMDApO1xcbiAgICAtLXctc3BhY2luZy0tcGFnZS0taG9yaXpvbnRhbC1zcGFjZTogdmFyKC0tdy1zcGFjaW5nLTYwMCk7XFxuXFxuICAgIC0tdy1ib3JkZXItd2lkdGgtLXRoaW46IDFweDtcXG4gICAgLS13LWJvcmRlci13aWR0aC0tcmVndWxhcjogMnB4O1xcblxcbiAgICAtLXctYm9yZGVyLXJhZGl1cy0xMDA6IDAuMmVtO1xcbiAgICAtLXctYm9yZGVyLXJhZGl1cy0yMDA6IDAuNGVtO1xcbiAgICAtLXctYm9yZGVyLXJhZGl1cy0zMDA6IDAuNmVtO1xcbiAgICAtLXctYm9yZGVyLXJhZGl1cy00MDA6IDAuOGVtO1xcbiAgICAtLXctYm9yZGVyLXJhZGl1cy01MDA6IDFlbTtcXG5cXG5cXG4gICAgLypcXG4gICAgICogSWYgaW5jcmVhc2luZyBjb2x1bW4gbnVtYmVyIHRvIGEgdmFsdWUgPiAxNiwgL2NvbXBvbmVudHMvbGF5b3V0L2dyaWQvZ3JpZC5qcyBtdXN0IGJlIGFkb3B0ZWQgYXMgd2VsbC5cXG4gICAgICovXFxuICAgIC0tdy1ncmlkLWNvbHVtbnM6IDE2O1xcbiAgICAtLXctZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tdy1ncmlkLWNvbHVtbnMpLCAxZnIgW2NvbF0pO1xcblxcbiAgICAtLXctaW5wdXRzLS1zaXplLXMtLWhlaWdodDogMmVtO1xcbiAgICAtLXctaW5wdXRzLS1zaXplLW0tLWhlaWdodDogM2VtO1xcbiAgICAtLXctaW5wdXRzLS1zaXplLWwtLWhlaWdodDogNGVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3NwYWNpbmcuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjs7SUFFcEIsdURBQXVEO0lBQ3ZELHlEQUF5RDs7SUFFekQsMkJBQTJCO0lBQzNCLDhCQUE4Qjs7SUFFOUIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDBCQUEwQjs7O0lBRzFCOztNQUVFO0lBQ0Ysb0JBQW9CO0lBQ3BCLG1FQUFtRTs7SUFFbkUsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQiwrQkFBK0I7QUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXctc3BhY2luZy0xMDA6IDAuNGVtO1xcbiAgICAtLXctc3BhY2luZy0yMDA6IDAuNmVtO1xcbiAgICAtLXctc3BhY2luZy0zMDA6IDFlbTtcXG4gICAgLS13LXNwYWNpbmctNDAwOiAxLjJlbTtcXG4gICAgLS13LXNwYWNpbmctNTAwOiAxLjZlbTtcXG4gICAgLS13LXNwYWNpbmctNjAwOiAyZW07XFxuICAgIC0tdy1zcGFjaW5nLTcwMDogMi41ZW07XFxuICAgIC0tdy1zcGFjaW5nLTgwMDogM2VtO1xcblxcbiAgICAtLXctc3BhY2luZy0tcGFnZS0tdmVydGljYWwtc3BhY2U6IHZhcigtLXctc3BhY2luZy0zMDApO1xcbiAgICAtLXctc3BhY2luZy0tcGFnZS0taG9yaXpvbnRhbC1zcGFjZTogdmFyKC0tdy1zcGFjaW5nLTYwMCk7XFxuXFxuICAgIC0tdy1ib3JkZXItd2lkdGgtLXRoaW46IDFweDtcXG4gICAgLS13LWJvcmRlci13aWR0aC0tcmVndWxhcjogMnB4O1xcblxcbiAgICAtLXctYm9yZGVyLXJhZGl1cy0xMDA6IDAuMmVtO1xcbiAgICAtLXctYm9yZGVyLXJhZGl1cy0yMDA6IDAuNGVtO1xcbiAgICAtLXctYm9yZGVyLXJhZGl1cy0zMDA6IDAuNmVtO1xcbiAgICAtLXctYm9yZGVyLXJhZGl1cy00MDA6IDAuOGVtO1xcbiAgICAtLXctYm9yZGVyLXJhZGl1cy01MDA6IDFlbTtcXG5cXG5cXG4gICAgLypcXG4gICAgICogSWYgaW5jcmVhc2luZyBjb2x1bW4gbnVtYmVyIHRvIGEgdmFsdWUgPiAxNiwgL2NvbXBvbmVudHMvbGF5b3V0L2dyaWQvZ3JpZC5qcyBtdXN0IGJlIGFkb3B0ZWQgYXMgd2VsbC5cXG4gICAgICovXFxuICAgIC0tdy1ncmlkLWNvbHVtbnM6IDE2O1xcbiAgICAtLXctZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tdy1ncmlkLWNvbHVtbnMpLCAxZnIgW2NvbF0pO1xcblxcbiAgICAtLXctaW5wdXRzLS1zaXplLXMtLWhlaWdodDogMmVtO1xcbiAgICAtLXctaW5wdXRzLS1zaXplLW0tLWhlaWdodDogM2VtO1xcbiAgICAtLXctaW5wdXRzLS1zaXplLWwtLWhlaWdodDogNGVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcblxcbiAgICBmb250LWZhbWlseTogdmFyKC0tdy1mb250LWZhbWlseS10ZXh0KTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtdGV4dC1yZWd1bGFyKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTQwMCk7XFxuXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLypcXG4gKiBIZWFkaW5nc1xcbiAqL1xcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBtYXJnaW46IDEuMmVtIDAgMWVtIDA7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTgwMCk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS13LWZvbnQtd2VpZ2h0LXRleHQtc2VtaWJvbGQpO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtdGV4dC02MDApO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tdy1mb250LXdlaWdodC10ZXh0LXNlbWlib2xkKTtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNTAwKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtdGV4dC1zZW1pYm9sZCk7XFxufVxcblxcbmg0IHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTQwMCk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS13LWZvbnQtd2VpZ2h0LXRleHQtc2VtaWJvbGQpO1xcbn1cXG5cXG5oNSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtdGV4dC00MDApO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tdy1mb250LXdlaWdodC10ZXh0LXNlbWlib2xkKTtcXG4gICAgY29sb3I6IHZhcigtLXctbXV0ZWQtY29sb3IpO1xcbn1cXG5cXG5oNiB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtdGV4dC00MDApO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tdy1mb250LXdlaWdodC10ZXh0LXJlZ3VsYXIpO1xcbiAgICBjb2xvcjogdmFyKC0tdy1tdXRlZC1jb2xvcik7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBcXG59XFxuXFxuLypcXG4gKiBUZXh0IGNvbnRlbnRcXG4gKi9cXG5wIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbn1cXG5cXG5jb2RlIHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXctZm9udC1mYW1pbHktbW9ubyk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS13LWZvbnQtd2VpZ2h0LW1vbm8tcmVndWxhcik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtbW9uby00MDApO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItNzAwKTtcXG59XFxuXFxuc2VjdGlvbiA+IDpmaXJzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi8qIFxcbiAqIFRhYmxlc1xcbiAqL1xcbnRhYmxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG50aGVhZCB0ciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvci01MDApO1xcbn1cXG5cXG50aGVhZCB0aCxcXG50Ym9keSB0ZCB7XFxuICAgIHBhZGRpbmc6IHZhcigtLXctc3BhY2luZy00MDApO1xcbiAgICBib3JkZXI6IHZhcigtLXctYm9yZGVyLXdpZHRoLS10aGluKSBzb2xpZCB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItODAwKTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxudGhlYWQgdGgge1xcbiAgICBjb2xvcjogdmFyKC0tdy1tdXRlZC1jb2xvcik7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbnRoZWFkIHRoOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcblxcbnRoZWFkIHRoOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcblxcbnRib2R5IHRyOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3RoZW1lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7O0lBRVYsc0NBQXNDO0lBQ3RDLDhDQUE4QztJQUM5QyxzQ0FBc0M7O0lBRXRDLGtCQUFrQjs7SUFFbEIsMkNBQTJDO0FBQy9DOztBQUVBOztFQUVFO0FBQ0Y7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QywrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLCtDQUErQztJQUMvQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsOENBQThDO0lBQzlDLDJCQUEyQjtJQUMzQiwwQkFBMEI7O0FBRTlCOztBQUVBOztFQUVFO0FBQ0Y7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsOENBQThDO0lBQzlDLHNDQUFzQzs7SUFFdEMsK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7RUFFRTtBQUNGO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTs7SUFFSSw2QkFBNkI7SUFDN0IsdUVBQXVFO0lBQ3ZFLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXctZm9udC1mYW1pbHktdGV4dCk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS13LWZvbnQtd2VpZ2h0LXRleHQtcmVndWxhcik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtdGV4dC00MDApO1xcblxcbiAgICBsaW5lLWhlaWdodDogMS4zZW07XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi8qXFxuICogSGVhZGluZ3NcXG4gKi9cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gICAgbWFyZ2luOiAxLjJlbSAwIDFlbSAwO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtdGV4dC04MDApO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tdy1mb250LXdlaWdodC10ZXh0LXNlbWlib2xkKTtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNjAwKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtdGV4dC1zZW1pYm9sZCk7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS10ZXh0LTUwMCk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS13LWZvbnQtd2VpZ2h0LXRleHQtc2VtaWJvbGQpO1xcbn1cXG5cXG5oNCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtdGV4dC00MDApO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tdy1mb250LXdlaWdodC10ZXh0LXNlbWlib2xkKTtcXG59XFxuXFxuaDUge1xcbiAgICBmb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNDAwKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtdGV4dC1zZW1pYm9sZCk7XFxuICAgIGNvbG9yOiB2YXIoLS13LW11dGVkLWNvbG9yKTtcXG59XFxuXFxuaDYge1xcbiAgICBmb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNDAwKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtdGV4dC1yZWd1bGFyKTtcXG4gICAgY29sb3I6IHZhcigtLXctbXV0ZWQtY29sb3IpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgXFxufVxcblxcbi8qXFxuICogVGV4dCBjb250ZW50XFxuICovXFxucCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG59XFxuXFxuY29kZSB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS13LWZvbnQtZmFtaWx5LW1vbm8pO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tdy1mb250LXdlaWdodC1tb25vLXJlZ3VsYXIpO1xcbiAgICBmb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLW1vbm8tNDAwKTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTcwMCk7XFxufVxcblxcbnNlY3Rpb24gPiA6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4vKiBcXG4gKiBUYWJsZXNcXG4gKi9cXG50YWJsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxudGhlYWQgdHIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItNTAwKTtcXG59XFxuXFxudGhlYWQgdGgsXFxudGJvZHkgdGQge1xcbiAgICBwYWRkaW5nOiB2YXIoLS13LXNwYWNpbmctNDAwKTtcXG4gICAgYm9yZGVyOiB2YXIoLS13LWJvcmRlci13aWR0aC0tdGhpbikgc29saWQgdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTgwMCk7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbnRoZWFkIHRoIHtcXG4gICAgY29sb3I6IHZhcigtLXctbXV0ZWQtY29sb3IpO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG50aGVhZCB0aDpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cXG5cXG50aGVhZCB0aDpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG5cXG50Ym9keSB0cjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXctZm9udC1mYW1pbHktdGV4dDogQXJpYWwsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXG4gICAgLS13LWZvbnQtd2VpZ2h0LXRleHQtdGhpbjogMzAwO1xcbiAgICAtLXctZm9udC13ZWlnaHQtdGV4dC1yZWd1bGFyOiA0MDA7XFxuICAgIC0tdy1mb250LXdlaWdodC10ZXh0LXNlbWlib2xkOiA2MDA7XFxuICAgIC0tdy1mb250LXdlaWdodC10ZXh0LWJvbGQ6IDgwMDtcXG5cXG4gICAgLS13LWZvbnQtc2l6ZS10ZXh0LTEwMDogMC44ZW07XFxuICAgIC0tdy1mb250LXNpemUtdGV4dC0yMDA6IDAuOGVtO1xcbiAgICAtLXctZm9udC1zaXplLXRleHQtMzAwOiAwLjhlbTtcXG4gICAgLS13LWZvbnQtc2l6ZS10ZXh0LTQwMDogMWVtO1xcbiAgICAtLXctZm9udC1zaXplLXRleHQtNTAwOiAxLjJlbTtcXG4gICAgLS13LWZvbnQtc2l6ZS10ZXh0LTYwMDogMS40ZW07XFxuICAgIC0tdy1mb250LXNpemUtdGV4dC03MDA6IDEuNmVtO1xcbiAgICAtLXctZm9udC1zaXplLXRleHQtODAwOiAxLjhlbTtcXG4gICAgLS13LWZvbnQtc2l6ZS10ZXh0LTkwMDogMmVtO1xcblxcbiAgICAtLXctZm9udC1mYW1pbHktbW9ubzogbW9ub3NwYWNlO1xcbiAgICAtLXctZm9udC13ZWlnaHQtbW9uby10aGluOiAzMDA7XFxuICAgIC0tdy1mb250LXdlaWdodC1tb25vLXJlZ3VsYXI6IDQwMDtcXG4gICAgLS13LWZvbnQtd2VpZ2h0LW1vbm8tc2VtaWJvbGQ6IDYwMDtcXG4gICAgLS13LWZvbnQtd2VpZ2h0LW1vbm8tYm9sZDogODAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3R5cG9ncmFwaHkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0RBQWtEO0lBQ2xELDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLDhCQUE4Qjs7SUFFOUIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QiwyQkFBMkI7O0lBRTNCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLGtDQUFrQztJQUNsQyw4QkFBOEI7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXctZm9udC1mYW1pbHktdGV4dDogQXJpYWwsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXG4gICAgLS13LWZvbnQtd2VpZ2h0LXRleHQtdGhpbjogMzAwO1xcbiAgICAtLXctZm9udC13ZWlnaHQtdGV4dC1yZWd1bGFyOiA0MDA7XFxuICAgIC0tdy1mb250LXdlaWdodC10ZXh0LXNlbWlib2xkOiA2MDA7XFxuICAgIC0tdy1mb250LXdlaWdodC10ZXh0LWJvbGQ6IDgwMDtcXG5cXG4gICAgLS13LWZvbnQtc2l6ZS10ZXh0LTEwMDogMC44ZW07XFxuICAgIC0tdy1mb250LXNpemUtdGV4dC0yMDA6IDAuOGVtO1xcbiAgICAtLXctZm9udC1zaXplLXRleHQtMzAwOiAwLjhlbTtcXG4gICAgLS13LWZvbnQtc2l6ZS10ZXh0LTQwMDogMWVtO1xcbiAgICAtLXctZm9udC1zaXplLXRleHQtNTAwOiAxLjJlbTtcXG4gICAgLS13LWZvbnQtc2l6ZS10ZXh0LTYwMDogMS40ZW07XFxuICAgIC0tdy1mb250LXNpemUtdGV4dC03MDA6IDEuNmVtO1xcbiAgICAtLXctZm9udC1zaXplLXRleHQtODAwOiAxLjhlbTtcXG4gICAgLS13LWZvbnQtc2l6ZS10ZXh0LTkwMDogMmVtO1xcblxcbiAgICAtLXctZm9udC1mYW1pbHktbW9ubzogbW9ub3NwYWNlO1xcbiAgICAtLXctZm9udC13ZWlnaHQtbW9uby10aGluOiAzMDA7XFxuICAgIC0tdy1mb250LXdlaWdodC1tb25vLXJlZ3VsYXI6IDQwMDtcXG4gICAgLS13LWZvbnQtd2VpZ2h0LW1vbm8tc2VtaWJvbGQ6IDYwMDtcXG4gICAgLS13LWZvbnQtd2VpZ2h0LW1vbm8tYm9sZDogODAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tdy1idXR0b24tLXRyYW5zaXRpb246IGFsbCAxMDBtcyBsaW5lYXI7XFxuXFxuICAgIC0tdy1idXR0b24tLWZvbnQtd2VpZ2h0OiB2YXIoLS13LWZvbnQtd2VpZ2h0LXRleHQtc2VtaWJvbGQpO1xcbiAgICAtLXctYnV0dG9uLS1wYWRkaW5nLWxlZnQ6IHZhcigtLXctc3BhY2luZy0zMDApO1xcbiAgICAtLXctYnV0dG9uLS1wYWRkaW5nLXJpZ2h0OiB2YXIoLS13LXNwYWNpbmctODAwKTtcXG4gICAgLS13LWJ1dHRvbi0tYm9yZGVyLXJhZGl1czogdmFyKC0tdy1ib3JkZXItcmFkaXVzLTEwMCk7XFxuICAgIC0tdy1idXR0b24tLWxpbmUtaGVpZ2h0OiB2YXIoLS13LWlucHV0cy0tc2l6ZS1tLS1oZWlnaHQpO1xcblxcbiAgICAtLXctYnV0dG9uLS1hcHBlYXJhbmNlLWxpbmstLXBhZGRpbmctbGVmdDogdmFyKC0tdy1zcGFjaW5nLTMwMCk7XFxuICAgIC0tdy1idXR0b24tLWFwcGVhcmFuY2UtbGluay0tcGFkZGluZy1yaWdodDogdmFyKC0tdy1zcGFjaW5nLTMwMCk7XFxuXFxuICAgIC0tdy1idXR0b24tLXNpemUtcy0tbGluZS1oZWlnaHQ6IHZhcigtLXctaW5wdXRzLS1zaXplLXMtLWhlaWdodCk7XFxuICAgIC0tdy1idXR0b24tLXNpemUtbC0tbGluZS1oZWlnaHQ6IHZhcigtLXctaW5wdXRzLS1zaXplLWwtLWhlaWdodCk7XFxuXFxuICAgIC8qXFxuICAgICAqIERlZmF1bHQuXFxuICAgICAqL1xcbiAgICAtLXctYnV0dG9uLS1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTgwMCk7XFxuICAgIC0tdy1idXRvb24tLWJvcmRlci1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTEwMDApO1xcbiAgICAtLXctYnV0dG9uLS10ZXh0LS1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yLTMwMCk7XFxuXFxuICAgIC0tdy1idXR0b24tLWhvdmVyLS1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTkwMCk7XFxuICAgIC0tdy1idXR0b24tLWhvdmVyLS1ib3JkZXItY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvci0xMTAwKTtcXG4gICAgLS13LWJ1dHRvbi0taG92ZXItLXRleHQtLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3ItNTAwKTtcXG5cXG4gICAgLS13LWJ1dHRvbi0tYXBwZWFyYW5jZS1vdXRsaW5lLS10ZXh0LWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3ItMzAwKTtcXG4gICAgLS13LWJ1dHRvbi0tYXBwZWFyYW5jZS1vdXRsaW5lLS1ob3Zlci0tdGV4dC1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yLTUwMCk7XFxuXFxuICAgIC8qXFxuICAgICAqIFByaW1hcnlcXG4gICAgICovXFxuICAgIC0tdy1idXR0b24tLWludGVudC1wcmltYXJ5LS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yKTtcXG4gICAgLS13LWJ1dG9vbi0taW50ZW50LXByaW1hcnktLWJvcmRlci1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yLTYwMCk7XFxuICAgIC0tdy1idXR0b24tLWludGVudC1wcmltYXJ5LS10ZXh0LS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LXRleHQtY29sb3ItMzAwKTtcXG4gICAgLS13LWJ1dHRvbi0taW50ZW50LXByaW1hcnktLWhvdmVyLS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWhvdmVyLWNvbG9yKTtcXG4gICAgLS13LWJ1dHRvbi0taW50ZW50LXByaW1hcnktLWhvdmVyLS1ib3JkZXItY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvci04MDApO1xcbiAgICAtLXctYnV0dG9uLS1pbnRlbnQtcHJpbWFyeS0taG92ZXItLXRleHQtLWNvbG9yOiB2YXIoLS13LXByaW1hcnktdGV4dC1jb2xvci0zMDApO1xcbiAgICAtLXctYnV0dG9uLS1pbnRlbnQtcHJpbWFyeS0tYXBwZWFyYW5jZS1vdXRsaW5lLS10ZXh0LWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcbiAgICAtLXctYnV0dG9uLS1pbnRlbnQtcHJpbWFyeS0tYXBwZWFyYW5jZS1vdXRsaW5lLS1ob3Zlci0tdGV4dC1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWhvdmVyLWNvbG9yKTtcXG5cXG4gICAgLypcXG4gICAgICogU3VjY2Vzc1xcbiAgICAgKi9cXG4gICAgLS13LWJ1dHRvbi0taW50ZW50LXN1Y2Nlc3MtLWNvbG9yOiB2YXIoLS13LXN1Y2Nlc3MtY29sb3IpO1xcbiAgICAtLXctYnV0b29uLS1pbnRlbnQtc3VjY2Vzcy0tYm9yZGVyLWNvbG9yOiB2YXIoLS13LXN1Y2Nlc3MtY29sb3ItNjAwKTtcXG4gICAgLS13LWJ1dHRvbi0taW50ZW50LXN1Y2Nlc3MtLXRleHQtLWNvbG9yOiB2YXIoLS13LXN1Y2Nlc3MtdGV4dC1jb2xvci0zMDApO1xcbiAgICAtLXctYnV0dG9uLS1pbnRlbnQtc3VjY2Vzcy0taG92ZXItLWNvbG9yOiB2YXIoLS13LXN1Y2Nlc3MtaG92ZXItY29sb3IpO1xcbiAgICAtLXctYnV0dG9uLS1pbnRlbnQtc3VjY2Vzcy0taG92ZXItLWJvcmRlci1jb2xvcjogdmFyKC0tdy1zdWNjZXNzLWNvbG9yLTgwMCk7XFxuICAgIC0tdy1idXR0b24tLWludGVudC1zdWNjZXNzLS1ob3Zlci0tdGV4dC0tY29sb3I6IHZhcigtLXctc3VjY2Vzcy10ZXh0LWNvbG9yLTMwMCk7XFxuICAgIC0tdy1idXR0b24tLWludGVudC1zdWNjZXNzLS1hcHBlYXJhbmNlLW91dGxpbmUtLXRleHQtY29sb3I6IHZhcigtLXctc3VjY2Vzcy1jb2xvcik7XFxuICAgIC0tdy1idXR0b24tLWludGVudC1zdWNjZXNzLS1hcHBlYXJhbmNlLW91dGxpbmUtLWhvdmVyLS10ZXh0LWNvbG9yOiB2YXIoLS13LXN1Y2Nlc3MtaG92ZXItY29sb3IpO1xcblxcbiAgICAvKlxcbiAgICAgKiBEYW5nZXJcXG4gICAgICovXFxuICAgIC0tdy1idXR0b24tLWludGVudC1kYW5nZXItLWNvbG9yOiB2YXIoLS13LWRhbmdlci1jb2xvcik7XFxuICAgIC0tdy1idXRvb24tLWludGVudC1kYW5nZXItLWJvcmRlci1jb2xvcjogdmFyKC0tdy1kYW5nZXItY29sb3ItNjAwKTtcXG4gICAgLS13LWJ1dHRvbi0taW50ZW50LWRhbmdlci0tdGV4dC0tY29sb3I6IHZhcigtLXctZGFuZ2VyLXRleHQtY29sb3ItMzAwKTtcXG4gICAgLS13LWJ1dHRvbi0taW50ZW50LWRhbmdlci0taG92ZXItLWNvbG9yOiB2YXIoLS13LWRhbmdlci1ob3Zlci1jb2xvcik7XFxuICAgIC0tdy1idXR0b24tLWludGVudC1kYW5nZXItLWhvdmVyLS1ib3JkZXItY29sb3I6IHZhcigtLXctZGFuZ2VyLWNvbG9yLTgwMCk7XFxuICAgIC0tdy1idXR0b24tLWludGVudC1kYW5nZXItLWhvdmVyLS10ZXh0LS1jb2xvcjogdmFyKC0tdy1kYW5nZXItdGV4dC1jb2xvci0zMDApO1xcbiAgICAtLXctYnV0dG9uLS1pbnRlbnQtZGFuZ2VyLS1hcHBlYXJhbmNlLW91dGxpbmUtLXRleHQtY29sb3I6IHZhcigtLXctZGFuZ2VyLWNvbG9yKTtcXG4gICAgLS13LWJ1dHRvbi0taW50ZW50LWRhbmdlci0tYXBwZWFyYW5jZS1vdXRsaW5lLS1ob3Zlci0tdGV4dC1jb2xvcjogdmFyKC0tdy1kYW5nZXItaG92ZXItY29sb3IpO1xcbn1cXG5cXG5cXG5idXR0b24ucHJpbWFyeSB7XFxuYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XFxufVxcblxcbmJ1dHRvbi5wcmltYXJ5OmhvdmVyIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uLnNlY29uZGFyeSB7XFxuYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbmNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xcbn1cXG5cXG5idXR0b24uc2Vjb25kYXJ5OmhvdmVyIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktaG92ZXItY29sb3IpO1xcbn1cXG5cXG5idXR0b24udGVydGlhcnkge1xcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbmJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcbmNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uLnRlcnRpYXJ5OmhvdmVyIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG5jb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uLmRhbmdlciB7XFxuYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFuZ2VyLWNvbG9yKTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXItY29sb3IpO1xcbmNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xcbn1cXG5cXG5idXR0b24uZGFuZ2VyOmhvdmVyIHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXItaG92ZXItY29sb3IpO1xcbn1cXG5cXG5idXR0b24uZ2hvc3Qge1xcbmJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbmJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbmNvbG9yOiB2YXIoLS1hLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uLmdob3N0OmhvdmVyIHtcXG5jb2xvcjogdmFyKC0tYS1ob3Zlci1jb2xvcik7XFxufVxcblxcbmJ1dHRvbi5zbSB7XFxucGFkZGluZzogMC41cmVtIDNyZW0gMC41cmVtIDAuNXJlbTtcXG59XFxuXFxuYnV0dG9uLm1kIHtcXG5wYWRkaW5nOiAwLjdyZW0gM3JlbSAwLjdyZW0gMC43cmVtO1xcbn1cXG5cXG5idXR0b24ubGcge1xcbnBhZGRpbmc6IDFyZW0gM3JlbSAxcmVtIDFyZW07XFxufVxcblxcbmJ1dHRvbi54bCB7XFxucGFkZGluZzogMXJlbSAzcmVtIDJyZW0gMXJlbTtcXG59XFxuXFxuYnV0dG9uLmJsb2NrIHtcXG5kaXNwbGF5OiBibG9jaztcXG53aWR0aDogMTAwJTtcXG50ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQsXFxuYnV0dG9uLmRpc2FibGVkIHtcXG5iYWNrZ3JvdW5kOiB2YXIoLS1tdXRlZC1jb2xvcik7XFxuYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbXV0ZWQtY29sb3IpO1xcbmN1cnNvcjogYXV0bztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2pzL2NvbXBvbmVudHMvYXRvbXMvYnV0dG9uL2J1dHRvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3Q0FBd0M7O0lBRXhDLDJEQUEyRDtJQUMzRCw4Q0FBOEM7SUFDOUMsK0NBQStDO0lBQy9DLHFEQUFxRDtJQUNyRCx3REFBd0Q7O0lBRXhELCtEQUErRDtJQUMvRCxnRUFBZ0U7O0lBRWhFLGdFQUFnRTtJQUNoRSxnRUFBZ0U7O0lBRWhFOztNQUVFO0lBQ0YsZ0RBQWdEO0lBQ2hELHdEQUF3RDtJQUN4RCxnREFBZ0Q7O0lBRWhELHVEQUF1RDtJQUN2RCwrREFBK0Q7SUFDL0QsdURBQXVEOztJQUV2RCxtRUFBbUU7SUFDbkUsMEVBQTBFOztJQUUxRTs7TUFFRTtJQUNGLHlEQUF5RDtJQUN6RCxvRUFBb0U7SUFDcEUsd0VBQXdFO0lBQ3hFLHNFQUFzRTtJQUN0RSwyRUFBMkU7SUFDM0UsK0VBQStFO0lBQy9FLGtGQUFrRjtJQUNsRiwrRkFBK0Y7O0lBRS9GOztNQUVFO0lBQ0YseURBQXlEO0lBQ3pELG9FQUFvRTtJQUNwRSx3RUFBd0U7SUFDeEUsc0VBQXNFO0lBQ3RFLDJFQUEyRTtJQUMzRSwrRUFBK0U7SUFDL0Usa0ZBQWtGO0lBQ2xGLCtGQUErRjs7SUFFL0Y7O01BRUU7SUFDRix1REFBdUQ7SUFDdkQsa0VBQWtFO0lBQ2xFLHNFQUFzRTtJQUN0RSxvRUFBb0U7SUFDcEUseUVBQXlFO0lBQ3pFLDZFQUE2RTtJQUM3RSxnRkFBZ0Y7SUFDaEYsNkZBQTZGO0FBQ2pHOzs7QUFHQTtBQUNBLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsZ0NBQWdDO0FBQ2hDOztBQUVBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4QyxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQSw4Q0FBOEM7QUFDOUM7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0Isc0NBQXNDO0FBQ3RDLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBLHNDQUFzQztBQUN0QyxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQSxxQ0FBcUM7QUFDckMscUNBQXFDO0FBQ3JDLGdDQUFnQztBQUNoQzs7QUFFQTtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0EsY0FBYztBQUNkLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEI7O0FBRUE7O0FBRUEsOEJBQThCO0FBQzlCLG9DQUFvQztBQUNwQyxZQUFZO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXctYnV0dG9uLS10cmFuc2l0aW9uOiBhbGwgMTAwbXMgbGluZWFyO1xcblxcbiAgICAtLXctYnV0dG9uLS1mb250LXdlaWdodDogdmFyKC0tdy1mb250LXdlaWdodC10ZXh0LXNlbWlib2xkKTtcXG4gICAgLS13LWJ1dHRvbi0tcGFkZGluZy1sZWZ0OiB2YXIoLS13LXNwYWNpbmctMzAwKTtcXG4gICAgLS13LWJ1dHRvbi0tcGFkZGluZy1yaWdodDogdmFyKC0tdy1zcGFjaW5nLTgwMCk7XFxuICAgIC0tdy1idXR0b24tLWJvcmRlci1yYWRpdXM6IHZhcigtLXctYm9yZGVyLXJhZGl1cy0xMDApO1xcbiAgICAtLXctYnV0dG9uLS1saW5lLWhlaWdodDogdmFyKC0tdy1pbnB1dHMtLXNpemUtbS0taGVpZ2h0KTtcXG5cXG4gICAgLS13LWJ1dHRvbi0tYXBwZWFyYW5jZS1saW5rLS1wYWRkaW5nLWxlZnQ6IHZhcigtLXctc3BhY2luZy0zMDApO1xcbiAgICAtLXctYnV0dG9uLS1hcHBlYXJhbmNlLWxpbmstLXBhZGRpbmctcmlnaHQ6IHZhcigtLXctc3BhY2luZy0zMDApO1xcblxcbiAgICAtLXctYnV0dG9uLS1zaXplLXMtLWxpbmUtaGVpZ2h0OiB2YXIoLS13LWlucHV0cy0tc2l6ZS1zLS1oZWlnaHQpO1xcbiAgICAtLXctYnV0dG9uLS1zaXplLWwtLWxpbmUtaGVpZ2h0OiB2YXIoLS13LWlucHV0cy0tc2l6ZS1sLS1oZWlnaHQpO1xcblxcbiAgICAvKlxcbiAgICAgKiBEZWZhdWx0LlxcbiAgICAgKi9cXG4gICAgLS13LWJ1dHRvbi0tY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvci04MDApO1xcbiAgICAtLXctYnV0b29uLS1ib3JkZXItY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvci0xMDAwKTtcXG4gICAgLS13LWJ1dHRvbi0tdGV4dC0tY29sb3I6IHZhcigtLXctdGV4dC1jb2xvci0zMDApO1xcblxcbiAgICAtLXctYnV0dG9uLS1ob3Zlci0tY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvci05MDApO1xcbiAgICAtLXctYnV0dG9uLS1ob3Zlci0tYm9yZGVyLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItMTEwMCk7XFxuICAgIC0tdy1idXR0b24tLWhvdmVyLS10ZXh0LS1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yLTUwMCk7XFxuXFxuICAgIC0tdy1idXR0b24tLWFwcGVhcmFuY2Utb3V0bGluZS0tdGV4dC1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yLTMwMCk7XFxuICAgIC0tdy1idXR0b24tLWFwcGVhcmFuY2Utb3V0bGluZS0taG92ZXItLXRleHQtY29sb3I6IHZhcigtLXctdGV4dC1jb2xvci01MDApO1xcblxcbiAgICAvKlxcbiAgICAgKiBQcmltYXJ5XFxuICAgICAqL1xcbiAgICAtLXctYnV0dG9uLS1pbnRlbnQtcHJpbWFyeS0tY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvcik7XFxuICAgIC0tdy1idXRvb24tLWludGVudC1wcmltYXJ5LS1ib3JkZXItY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvci02MDApO1xcbiAgICAtLXctYnV0dG9uLS1pbnRlbnQtcHJpbWFyeS0tdGV4dC0tY29sb3I6IHZhcigtLXctcHJpbWFyeS10ZXh0LWNvbG9yLTMwMCk7XFxuICAgIC0tdy1idXR0b24tLWludGVudC1wcmltYXJ5LS1ob3Zlci0tY29sb3I6IHZhcigtLXctcHJpbWFyeS1ob3Zlci1jb2xvcik7XFxuICAgIC0tdy1idXR0b24tLWludGVudC1wcmltYXJ5LS1ob3Zlci0tYm9yZGVyLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3ItODAwKTtcXG4gICAgLS13LWJ1dHRvbi0taW50ZW50LXByaW1hcnktLWhvdmVyLS10ZXh0LS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LXRleHQtY29sb3ItMzAwKTtcXG4gICAgLS13LWJ1dHRvbi0taW50ZW50LXByaW1hcnktLWFwcGVhcmFuY2Utb3V0bGluZS0tdGV4dC1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yKTtcXG4gICAgLS13LWJ1dHRvbi0taW50ZW50LXByaW1hcnktLWFwcGVhcmFuY2Utb3V0bGluZS0taG92ZXItLXRleHQtY29sb3I6IHZhcigtLXctcHJpbWFyeS1ob3Zlci1jb2xvcik7XFxuXFxuICAgIC8qXFxuICAgICAqIFN1Y2Nlc3NcXG4gICAgICovXFxuICAgIC0tdy1idXR0b24tLWludGVudC1zdWNjZXNzLS1jb2xvcjogdmFyKC0tdy1zdWNjZXNzLWNvbG9yKTtcXG4gICAgLS13LWJ1dG9vbi0taW50ZW50LXN1Y2Nlc3MtLWJvcmRlci1jb2xvcjogdmFyKC0tdy1zdWNjZXNzLWNvbG9yLTYwMCk7XFxuICAgIC0tdy1idXR0b24tLWludGVudC1zdWNjZXNzLS10ZXh0LS1jb2xvcjogdmFyKC0tdy1zdWNjZXNzLXRleHQtY29sb3ItMzAwKTtcXG4gICAgLS13LWJ1dHRvbi0taW50ZW50LXN1Y2Nlc3MtLWhvdmVyLS1jb2xvcjogdmFyKC0tdy1zdWNjZXNzLWhvdmVyLWNvbG9yKTtcXG4gICAgLS13LWJ1dHRvbi0taW50ZW50LXN1Y2Nlc3MtLWhvdmVyLS1ib3JkZXItY29sb3I6IHZhcigtLXctc3VjY2Vzcy1jb2xvci04MDApO1xcbiAgICAtLXctYnV0dG9uLS1pbnRlbnQtc3VjY2Vzcy0taG92ZXItLXRleHQtLWNvbG9yOiB2YXIoLS13LXN1Y2Nlc3MtdGV4dC1jb2xvci0zMDApO1xcbiAgICAtLXctYnV0dG9uLS1pbnRlbnQtc3VjY2Vzcy0tYXBwZWFyYW5jZS1vdXRsaW5lLS10ZXh0LWNvbG9yOiB2YXIoLS13LXN1Y2Nlc3MtY29sb3IpO1xcbiAgICAtLXctYnV0dG9uLS1pbnRlbnQtc3VjY2Vzcy0tYXBwZWFyYW5jZS1vdXRsaW5lLS1ob3Zlci0tdGV4dC1jb2xvcjogdmFyKC0tdy1zdWNjZXNzLWhvdmVyLWNvbG9yKTtcXG5cXG4gICAgLypcXG4gICAgICogRGFuZ2VyXFxuICAgICAqL1xcbiAgICAtLXctYnV0dG9uLS1pbnRlbnQtZGFuZ2VyLS1jb2xvcjogdmFyKC0tdy1kYW5nZXItY29sb3IpO1xcbiAgICAtLXctYnV0b29uLS1pbnRlbnQtZGFuZ2VyLS1ib3JkZXItY29sb3I6IHZhcigtLXctZGFuZ2VyLWNvbG9yLTYwMCk7XFxuICAgIC0tdy1idXR0b24tLWludGVudC1kYW5nZXItLXRleHQtLWNvbG9yOiB2YXIoLS13LWRhbmdlci10ZXh0LWNvbG9yLTMwMCk7XFxuICAgIC0tdy1idXR0b24tLWludGVudC1kYW5nZXItLWhvdmVyLS1jb2xvcjogdmFyKC0tdy1kYW5nZXItaG92ZXItY29sb3IpO1xcbiAgICAtLXctYnV0dG9uLS1pbnRlbnQtZGFuZ2VyLS1ob3Zlci0tYm9yZGVyLWNvbG9yOiB2YXIoLS13LWRhbmdlci1jb2xvci04MDApO1xcbiAgICAtLXctYnV0dG9uLS1pbnRlbnQtZGFuZ2VyLS1ob3Zlci0tdGV4dC0tY29sb3I6IHZhcigtLXctZGFuZ2VyLXRleHQtY29sb3ItMzAwKTtcXG4gICAgLS13LWJ1dHRvbi0taW50ZW50LWRhbmdlci0tYXBwZWFyYW5jZS1vdXRsaW5lLS10ZXh0LWNvbG9yOiB2YXIoLS13LWRhbmdlci1jb2xvcik7XFxuICAgIC0tdy1idXR0b24tLWludGVudC1kYW5nZXItLWFwcGVhcmFuY2Utb3V0bGluZS0taG92ZXItLXRleHQtY29sb3I6IHZhcigtLXctZGFuZ2VyLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuXFxuYnV0dG9uLnByaW1hcnkge1xcbmJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbmNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xcbn1cXG5cXG5idXR0b24ucHJpbWFyeTpob3ZlciB7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1ob3Zlci1jb2xvcik7XFxufVxcblxcbmJ1dHRvbi5zZWNvbmRhcnkge1xcbmJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG5jb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uLnNlY29uZGFyeTpob3ZlciB7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uLnRlcnRpYXJ5IHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG5jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbmJ1dHRvbi50ZXJ0aWFyeTpob3ZlciB7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XFxufVxcblxcbmJ1dHRvbi5kYW5nZXIge1xcbmJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhbmdlci1jb2xvcik7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyLWNvbG9yKTtcXG5jb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uLmRhbmdlcjpob3ZlciB7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uLmdob3N0IHtcXG5ib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5jb2xvcjogdmFyKC0tYS1jb2xvcik7XFxufVxcblxcbmJ1dHRvbi5naG9zdDpob3ZlciB7XFxuY29sb3I6IHZhcigtLWEtaG92ZXItY29sb3IpO1xcbn1cXG5cXG5idXR0b24uc20ge1xcbnBhZGRpbmc6IDAuNXJlbSAzcmVtIDAuNXJlbSAwLjVyZW07XFxufVxcblxcbmJ1dHRvbi5tZCB7XFxucGFkZGluZzogMC43cmVtIDNyZW0gMC43cmVtIDAuN3JlbTtcXG59XFxuXFxuYnV0dG9uLmxnIHtcXG5wYWRkaW5nOiAxcmVtIDNyZW0gMXJlbSAxcmVtO1xcbn1cXG5cXG5idXR0b24ueGwge1xcbnBhZGRpbmc6IDFyZW0gM3JlbSAycmVtIDFyZW07XFxufVxcblxcbmJ1dHRvbi5ibG9jayB7XFxuZGlzcGxheTogYmxvY2s7XFxud2lkdGg6IDEwMCU7XFxudGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkLFxcbmJ1dHRvbi5kaXNhYmxlZCB7XFxuYmFja2dyb3VuZDogdmFyKC0tbXV0ZWQtY29sb3IpO1xcbmJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW11dGVkLWNvbG9yKTtcXG5jdXJzb3I6IGF1dG87XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG5cXG5cXG4gICAgLS13LWhlYWRpbmctLXNpemUtMTAwLS1mb250LXNpemUtLWhlbHA6IFxcXCJGb250IHNpemUgZm9yIGBzaXplPTEwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtMTAwLS1mb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtMTAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtMjAwLS1mb250LXNpemUtLWhlbHA6IFxcXCJGb250IHNpemUgZm9yIGBzaXplPTIwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtMjAwLS1mb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtMjAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtMzAwLS1mb250LXNpemUtLWhlbHA6IFxcXCJGb250IHNpemUgZm9yIGBzaXplPTMwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtMzAwLS1mb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtMzAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNDAwLS1mb250LXNpemUtLWhlbHA6IFxcXCJGb250IHNpemUgZm9yIGBzaXplPTQwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNDAwLS1mb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNDAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNTAwLS1mb250LXNpemUtLWhlbHA6IFxcXCJGb250IHNpemUgZm9yIGBzaXplPTUwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNTAwLS1mb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNTAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNjAwLS1mb250LXNpemUtLWhlbHA6IFxcXCJGb250IHNpemUgZm9yIGBzaXplPTYwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNjAwLS1mb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNjAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNzAwLS1mb250LXNpemUtLWhlbHA6IFxcXCJGb250IHNpemUgZm9yIGBzaXplPTcwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNzAwLS1mb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNzAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtODAwLS1mb250LXNpemUtLWhlbHA6IFxcXCJGb250IHNpemUgZm9yIGBzaXplPTgwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtODAwLS1mb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtODAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtOTAwLS1mb250LXNpemUtLWhlbHA6IFxcXCJGb250IHNpemUgZm9yIGBzaXplPTkwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtOTAwLS1mb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtOTAwKTtcXG5cXG4gICAgLS13LWhlYWRpbmctLXNpemUtMTAwLS1tYXJnaW4tdG9wLS1oZWxwOiBcXFwiVG9wIG1hcmdpbiBmb3IgYHNpemU9MTAwYC5cXFwiO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS0xMDAtLW1hcmdpbi10b3A6IHZhcigtLXctc3BhY2luZy0yMDApO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS0yMDAtLW1hcmdpbi10b3AtLWhlbHA6IFxcXCJUb3AgbWFyZ2luIGZvciBgc2l6ZT0yMDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTIwMC0tbWFyZ2luLXRvcDogdmFyKC0tdy1zcGFjaW5nLTMwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTMwMC0tbWFyZ2luLXRvcC0taGVscDogXFxcIlRvcCBtYXJnaW4gZm9yIGBzaXplPTMwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtMzAwLS1tYXJnaW4tdG9wOiB2YXIoLS13LXNwYWNpbmctMzAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNDAwLS1tYXJnaW4tdG9wLS1oZWxwOiBcXFwiVG9wIG1hcmdpbiBmb3IgYHNpemU9NDAwYC5cXFwiO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS00MDAtLW1hcmdpbi10b3A6IHZhcigtLXctc3BhY2luZy0zMDApO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS01MDAtLW1hcmdpbi10b3AtLWhlbHA6IFxcXCJUb3AgbWFyZ2luIGZvciBgc2l6ZT01MDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTUwMC0tbWFyZ2luLXRvcDogdmFyKC0tdy1zcGFjaW5nLTQwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTYwMC0tbWFyZ2luLXRvcC0taGVscDogXFxcIlRvcCBtYXJnaW4gZm9yIGBzaXplPTYwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNjAwLS1tYXJnaW4tdG9wOiB2YXIoLS13LXNwYWNpbmctNDAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNzAwLS1tYXJnaW4tdG9wLS1oZWxwOiBcXFwiVG9wIG1hcmdpbiBmb3IgYHNpemU9NzAwYC5cXFwiO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS03MDAtLW1hcmdpbi10b3A6IHZhcigtLXctc3BhY2luZy00MDApO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS04MDAtLW1hcmdpbi10b3AtLWhlbHA6IFxcXCJUb3AgbWFyZ2luIGZvciBgc2l6ZT04MDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTgwMC0tbWFyZ2luLXRvcDogdmFyKC0tdy1zcGFjaW5nLTUwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTkwMC0tbWFyZ2luLXRvcC0taGVscDogXFxcIlRvcCBtYXJnaW4gZm9yIGBzaXplPTkwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtOTAwLS1tYXJnaW4tdG9wOiB2YXIoLS13LXNwYWNpbmctNTAwKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2pzL2NvbXBvbmVudHMvYXRvbXMvaGVhZGluZy9oZWFkaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0lBR0ksbUVBQW1FO0lBQ25FLDZEQUE2RDtJQUM3RCxtRUFBbUU7SUFDbkUsNkRBQTZEO0lBQzdELG1FQUFtRTtJQUNuRSw2REFBNkQ7SUFDN0QsbUVBQW1FO0lBQ25FLDZEQUE2RDtJQUM3RCxtRUFBbUU7SUFDbkUsNkRBQTZEO0lBQzdELG1FQUFtRTtJQUNuRSw2REFBNkQ7SUFDN0QsbUVBQW1FO0lBQ25FLDZEQUE2RDtJQUM3RCxtRUFBbUU7SUFDbkUsNkRBQTZEO0lBQzdELG1FQUFtRTtJQUNuRSw2REFBNkQ7O0lBRTdELHFFQUFxRTtJQUNyRSx1REFBdUQ7SUFDdkQscUVBQXFFO0lBQ3JFLHVEQUF1RDtJQUN2RCxxRUFBcUU7SUFDckUsdURBQXVEO0lBQ3ZELHFFQUFxRTtJQUNyRSx1REFBdUQ7SUFDdkQscUVBQXFFO0lBQ3JFLHVEQUF1RDtJQUN2RCxxRUFBcUU7SUFDckUsdURBQXVEO0lBQ3ZELHFFQUFxRTtJQUNyRSx1REFBdUQ7SUFDdkQscUVBQXFFO0lBQ3JFLHVEQUF1RDtJQUN2RCxxRUFBcUU7SUFDckUsdURBQXVEO0FBQzNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG5cXG5cXG4gICAgLS13LWhlYWRpbmctLXNpemUtMTAwLS1mb250LXNpemUtLWhlbHA6IFxcXCJGb250IHNpemUgZm9yIGBzaXplPTEwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtMTAwLS1mb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtMTAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtMjAwLS1mb250LXNpemUtLWhlbHA6IFxcXCJGb250IHNpemUgZm9yIGBzaXplPTIwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtMjAwLS1mb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtMjAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtMzAwLS1mb250LXNpemUtLWhlbHA6IFxcXCJGb250IHNpemUgZm9yIGBzaXplPTMwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtMzAwLS1mb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtMzAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNDAwLS1mb250LXNpemUtLWhlbHA6IFxcXCJGb250IHNpemUgZm9yIGBzaXplPTQwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNDAwLS1mb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNDAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNTAwLS1mb250LXNpemUtLWhlbHA6IFxcXCJGb250IHNpemUgZm9yIGBzaXplPTUwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNTAwLS1mb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNTAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNjAwLS1mb250LXNpemUtLWhlbHA6IFxcXCJGb250IHNpemUgZm9yIGBzaXplPTYwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNjAwLS1mb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNjAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNzAwLS1mb250LXNpemUtLWhlbHA6IFxcXCJGb250IHNpemUgZm9yIGBzaXplPTcwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNzAwLS1mb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNzAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtODAwLS1mb250LXNpemUtLWhlbHA6IFxcXCJGb250IHNpemUgZm9yIGBzaXplPTgwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtODAwLS1mb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtODAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtOTAwLS1mb250LXNpemUtLWhlbHA6IFxcXCJGb250IHNpemUgZm9yIGBzaXplPTkwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtOTAwLS1mb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtOTAwKTtcXG5cXG4gICAgLS13LWhlYWRpbmctLXNpemUtMTAwLS1tYXJnaW4tdG9wLS1oZWxwOiBcXFwiVG9wIG1hcmdpbiBmb3IgYHNpemU9MTAwYC5cXFwiO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS0xMDAtLW1hcmdpbi10b3A6IHZhcigtLXctc3BhY2luZy0yMDApO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS0yMDAtLW1hcmdpbi10b3AtLWhlbHA6IFxcXCJUb3AgbWFyZ2luIGZvciBgc2l6ZT0yMDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTIwMC0tbWFyZ2luLXRvcDogdmFyKC0tdy1zcGFjaW5nLTMwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTMwMC0tbWFyZ2luLXRvcC0taGVscDogXFxcIlRvcCBtYXJnaW4gZm9yIGBzaXplPTMwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtMzAwLS1tYXJnaW4tdG9wOiB2YXIoLS13LXNwYWNpbmctMzAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNDAwLS1tYXJnaW4tdG9wLS1oZWxwOiBcXFwiVG9wIG1hcmdpbiBmb3IgYHNpemU9NDAwYC5cXFwiO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS00MDAtLW1hcmdpbi10b3A6IHZhcigtLXctc3BhY2luZy0zMDApO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS01MDAtLW1hcmdpbi10b3AtLWhlbHA6IFxcXCJUb3AgbWFyZ2luIGZvciBgc2l6ZT01MDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTUwMC0tbWFyZ2luLXRvcDogdmFyKC0tdy1zcGFjaW5nLTQwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTYwMC0tbWFyZ2luLXRvcC0taGVscDogXFxcIlRvcCBtYXJnaW4gZm9yIGBzaXplPTYwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNjAwLS1tYXJnaW4tdG9wOiB2YXIoLS13LXNwYWNpbmctNDAwKTtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtNzAwLS1tYXJnaW4tdG9wLS1oZWxwOiBcXFwiVG9wIG1hcmdpbiBmb3IgYHNpemU9NzAwYC5cXFwiO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS03MDAtLW1hcmdpbi10b3A6IHZhcigtLXctc3BhY2luZy00MDApO1xcbiAgICAtLXctaGVhZGluZy0tc2l6ZS04MDAtLW1hcmdpbi10b3AtLWhlbHA6IFxcXCJUb3AgbWFyZ2luIGZvciBgc2l6ZT04MDBgLlxcXCI7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTgwMC0tbWFyZ2luLXRvcDogdmFyKC0tdy1zcGFjaW5nLTUwMCk7XFxuICAgIC0tdy1oZWFkaW5nLS1zaXplLTkwMC0tbWFyZ2luLXRvcC0taGVscDogXFxcIlRvcCBtYXJnaW4gZm9yIGBzaXplPTkwMGAuXFxcIjtcXG4gICAgLS13LWhlYWRpbmctLXNpemUtOTAwLS1tYXJnaW4tdG9wOiB2YXIoLS13LXNwYWNpbmctNTAwKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXctbWFya2Rvd24tLXNwYWNpbmctcy0tbWFyZ2luLXRvcDogdmFyKC0tdy1zcGFjaW5nLTMwMCk7XFxuICAgIC0tdy1tYXJrZG93bi0tc3BhY2luZy1zLS1tYXJnaW4tYm90dG9tOiB2YXIoLS13LXNwYWNpbmctMzAwKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2pzL2NvbXBvbmVudHMvYXRvbXMvbWFya2Rvd24vbWFya2Rvd24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseURBQXlEO0lBQ3pELDREQUE0RDtBQUNoRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tdy1tYXJrZG93bi0tc3BhY2luZy1zLS1tYXJnaW4tdG9wOiB2YXIoLS13LXNwYWNpbmctMzAwKTtcXG4gICAgLS13LW1hcmtkb3duLS1zcGFjaW5nLXMtLW1hcmdpbi1ib3R0b206IHZhcigtLXctc3BhY2luZy0zMDApO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tdy1wYW5lLS1ib3JkZXItcmFkaXVzOiB2YXIoLS13LWJvcmRlci1yYWRpdXMtMjAwKTtcXG4gICAgLS13LXBhbmUtLXNwYWNpbmctcy0tcGFkZGluZzogdmFyKC0tdy1zcGFjaW5nLTMwMCk7XFxuICAgIC0tdy1wYW5lLS1zcGFjaW5nLW0tLXBhZGRpbmc6IHZhcigtLXctc3BhY2luZy00MDApO1xcblxcbiAgICAtLXctcGFuZS0tZWxldmF0aW9uLTUwMC0tYm9yZGVyLXdpZHRoOiB2YXIoLS13LWJvcmRlci13aWR0aC0tdGhpbik7XFxuICAgIC0tdy1wYW5lLS1lbGV2YXRpb24tNTAwLS1ib3JkZXItY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvci04MDApO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvanMvY29tcG9uZW50cy9hdG9tcy9wYW5lL3BhbmUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbURBQW1EO0lBQ25ELGtEQUFrRDtJQUNsRCxrREFBa0Q7O0lBRWxELGtFQUFrRTtJQUNsRSxvRUFBb0U7QUFDeEVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXctcGFuZS0tYm9yZGVyLXJhZGl1czogdmFyKC0tdy1ib3JkZXItcmFkaXVzLTIwMCk7XFxuICAgIC0tdy1wYW5lLS1zcGFjaW5nLXMtLXBhZGRpbmc6IHZhcigtLXctc3BhY2luZy0zMDApO1xcbiAgICAtLXctcGFuZS0tc3BhY2luZy1tLS1wYWRkaW5nOiB2YXIoLS13LXNwYWNpbmctNDAwKTtcXG5cXG4gICAgLS13LXBhbmUtLWVsZXZhdGlvbi01MDAtLWJvcmRlci13aWR0aDogdmFyKC0tdy1ib3JkZXItd2lkdGgtLXRoaW4pO1xcbiAgICAtLXctcGFuZS0tZWxldmF0aW9uLTUwMC0tYm9yZGVyLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItODAwKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXctcHJlLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3IpO1xcbiAgICAtLXctcHJlLS1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgLS13LXByZS0tcGFkZGluZzogdmFyKC0tdy1zcGFjaW5nLTEwMCkgdmFyKC0tdy1zcGFjaW5nLTIwMCk7XFxuXFxuICAgIC0tdy1wcmUtLWZvbnQtZmFtaWx5OiB2YXIoLS13LWZvbnQtZmFtaWx5LW1vbm8pO1xcbiAgICAtLXctcHJlLS1mb250LXdlaWdodDogdmFyKC0tdy1mb250LXdlaWdodC1tb25vLXJlZ3VsYXIpO1xcbiAgICAtLXctcHJlLS1mb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNDAwKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2pzL2NvbXBvbmVudHMvYXRvbXMvcHJlL3ByZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4Q0FBOEM7SUFDOUMseUNBQXlDO0lBQ3pDLDJEQUEyRDs7SUFFM0QsK0NBQStDO0lBQy9DLHVEQUF1RDtJQUN2RCwrQ0FBK0M7QUFDbkRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXctcHJlLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3IpO1xcbiAgICAtLXctcHJlLS1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgLS13LXByZS0tcGFkZGluZzogdmFyKC0tdy1zcGFjaW5nLTEwMCkgdmFyKC0tdy1zcGFjaW5nLTIwMCk7XFxuXFxuICAgIC0tdy1wcmUtLWZvbnQtZmFtaWx5OiB2YXIoLS13LWZvbnQtZmFtaWx5LW1vbm8pO1xcbiAgICAtLXctcHJlLS1mb250LXdlaWdodDogdmFyKC0tdy1mb250LXdlaWdodC1tb25vLXJlZ3VsYXIpO1xcbiAgICAtLXctcHJlLS1mb250LXNpemU6IHZhcigtLXctZm9udC1zaXplLXRleHQtNDAwKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXctdGFiLS1wYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIC0tdy10YWItLXBhZGRpbmctcmlnaHQ6IDgwcHg7XFxuICAgIC0tdy10YWJzLS1ib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XFxuICAgIC0tdy10YWJzLS1ib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcXG5cXG4gICAgLS13LXRhYnMtLWhlaWdodDogM2VtO1xcbiAgICAtLXctdGFicy0tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcXG5cXG4gICAgLS13LXRhYnMtLWNvbnRyYXN0LS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcbiAgICAtLXctdGFicy0tY29udHJhc3QtLWJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LXRleHQtY29sb3ItNTAwKTtcXG4gICAgLS13LXRhYnMtLWNvbnRyYXN0LS10YWItLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1ib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcbiAgICAtLXctdGFicy0tY29udHJhc3QtLXRhYi0tYm9yZGVyLXJpZ2h0LWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItOTAwKTtcXG4gICAgLS13LXRhYnMtLWNvbnRyYXN0LS10YWItLWhvdmVyLS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LXRleHQtY29sb3ItNDAwKTtcXG4gICAgLS13LXRhYnMtLWNvbnRyYXN0LS10YWItLWhvdmVyLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXByaW1hcnktaG92ZXItY29sb3IpO1xcbiAgICAtLXctdGFicy0tY29udHJhc3QtLXRhYi0tYWN0aXZlLS1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLWNvbnRyYXN0LS10YWItLWFjdGl2ZS0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLWNvbnRyYXN0LS10YWItLWFjdGl2ZS0tYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yKTtcXG5cXG4gICAgLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItNTAwKTtcXG4gICAgLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS1ib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcbiAgICAtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLXRhYi0tY29sb3I6IHZhcigtLXctdGV4dC1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItNTAwKTtcXG4gICAgLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS10YWItLWJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1ib3JkZXItcmlnaHQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvci01MDApO1xcbiAgICAtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLXRhYi0taG92ZXItLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3ItNTAwKTtcXG4gICAgLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS10YWItLWhvdmVyLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItNjAwKTtcXG4gICAgLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS10YWItLWFjdGl2ZS0tY29sb3I6IHZhcigtLXctcHJpbWFyeS10ZXh0LWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS10YWItLWFjdGl2ZS0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS10YWItLWFjdGl2ZS0tYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yKTtcXG5cXG4gICAgLS13LXRhYnMtLXNoYWRlZC0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLXNoYWRlZC0tYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTgwMCk7XFxuICAgIC0tdy10YWJzLS1zaGFkZWQtLXRhYi0tY29sb3I6IHZhcigtLXctdGV4dC1jb2xvci0zMDApO1xcbiAgICAtLXctdGFicy0tc2hhZGVkLS10YWItLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1zaGFkZWQtLXRhYi0tYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yLTkwMCk7XFxuICAgIC0tdy10YWJzLS1zaGFkZWQtLXRhYi0tYm9yZGVyLXJpZ2h0LWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICAtLXctdGFicy0tc2hhZGVkLS10YWItLWhvdmVyLS1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yLTUwMCk7XFxuICAgIC0tdy10YWJzLS1zaGFkZWQtLXRhYi0taG92ZXItLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1zaGFkZWQtLXRhYi0tYWN0aXZlLS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLXNoYWRlZC0tdGFiLS1hY3RpdmUtLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1zaGFkZWQtLXRhYi0tYWN0aXZlLS1ib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvanMvY29tcG9uZW50cy9hdG9tcy90YWJzL3RhYnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixrQ0FBa0M7SUFDbEMsaUNBQWlDOztJQUVqQyxxQkFBcUI7SUFDckIsc0NBQXNDOztJQUV0Qyw0REFBNEQ7SUFDNUQsK0RBQStEO0lBQy9ELCtEQUErRDtJQUMvRCxpRUFBaUU7SUFDakUsb0VBQW9FO0lBQ3BFLDBFQUEwRTtJQUMxRSxzRUFBc0U7SUFDdEUsOEVBQThFO0lBQzlFLDJEQUEyRDtJQUMzRCw0RUFBNEU7SUFDNUUsK0VBQStFOztJQUUvRSx5RUFBeUU7SUFDekUscUVBQXFFO0lBQ3JFLHlEQUF5RDtJQUN6RCw4RUFBOEU7SUFDOUUsMEVBQTBFO0lBQzFFLGdGQUFnRjtJQUNoRixvRUFBb0U7SUFDcEUscUZBQXFGO0lBQ3JGLHlFQUF5RTtJQUN6RSwrRUFBK0U7SUFDL0Usa0ZBQWtGOztJQUVsRiw2REFBNkQ7SUFDN0Qsb0VBQW9FO0lBQ3BFLHFEQUFxRDtJQUNyRCxrRUFBa0U7SUFDbEUsc0VBQXNFO0lBQ3RFLG9FQUFvRTtJQUNwRSw0REFBNEQ7SUFDNUQseUVBQXlFO0lBQ3pFLDREQUE0RDtJQUM1RCwwRUFBMEU7SUFDMUUsMEVBQTBFO0FBQzlFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS13LXRhYi0tcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICAtLXctdGFiLS1wYWRkaW5nLXJpZ2h0OiA4MHB4O1xcbiAgICAtLXctdGFicy0tYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xcbiAgICAtLXctdGFicy0tYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XFxuXFxuICAgIC0tdy10YWJzLS1oZWlnaHQ6IDNlbTtcXG4gICAgLS13LXRhYnMtLXRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XFxuXFxuICAgIC0tdy10YWJzLS1jb250cmFzdC0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLWNvbnRyYXN0LS1ib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcbiAgICAtLXctdGFicy0tY29udHJhc3QtLXRhYi0tY29sb3I6IHZhcigtLXctcHJpbWFyeS10ZXh0LWNvbG9yLTUwMCk7XFxuICAgIC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcbiAgICAtLXctdGFicy0tY29udHJhc3QtLXRhYi0tYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLWNvbnRyYXN0LS10YWItLWJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTkwMCk7XFxuICAgIC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1ob3Zlci0tY29sb3I6IHZhcigtLXctcHJpbWFyeS10ZXh0LWNvbG9yLTQwMCk7XFxuICAgIC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1ob3Zlci0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWhvdmVyLWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLWNvbnRyYXN0LS10YWItLWFjdGl2ZS0tY29sb3I6IHZhcigtLXctdGV4dC1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1hY3RpdmUtLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1hY3RpdmUtLWJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvcik7XFxuXFxuICAgIC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTUwMCk7XFxuICAgIC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS10YWItLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3IpO1xcbiAgICAtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLXRhYi0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTUwMCk7XFxuICAgIC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1ib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcbiAgICAtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLXRhYi0tYm9yZGVyLXJpZ2h0LWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItNTAwKTtcXG4gICAgLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS10YWItLWhvdmVyLS1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yLTUwMCk7XFxuICAgIC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1ob3Zlci0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTYwMCk7XFxuICAgIC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1hY3RpdmUtLWNvbG9yOiB2YXIoLS13LXByaW1hcnktdGV4dC1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1hY3RpdmUtLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1hY3RpdmUtLWJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvcik7XFxuXFxuICAgIC0tdy10YWJzLS1zaGFkZWQtLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1zaGFkZWQtLWJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvci04MDApO1xcbiAgICAtLXctdGFicy0tc2hhZGVkLS10YWItLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3ItMzAwKTtcXG4gICAgLS13LXRhYnMtLXNoYWRlZC0tdGFiLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICAtLXctdGFicy0tc2hhZGVkLS10YWItLWJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvci05MDApO1xcbiAgICAtLXctdGFicy0tc2hhZGVkLS10YWItLWJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgLS13LXRhYnMtLXNoYWRlZC0tdGFiLS1ob3Zlci0tY29sb3I6IHZhcigtLXctdGV4dC1jb2xvci01MDApO1xcbiAgICAtLXctdGFicy0tc2hhZGVkLS10YWItLWhvdmVyLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICAtLXctdGFicy0tc2hhZGVkLS10YWItLWFjdGl2ZS0tY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvcik7XFxuICAgIC0tdy10YWJzLS1zaGFkZWQtLXRhYi0tYWN0aXZlLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICAtLXctdGFicy0tc2hhZGVkLS10YWItLWFjdGl2ZS0tYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXctZml4ZWQtaGVhZGVyLS1hcnRpY2xlLW1heC13aWR0aDogdmFyKC0tdy1icmVha3BvaW50LXhsKTtcXG5cXG4gICAgLS13LWZpeGVkLWhlYWRlci0tc3BhY2luZy1zLS1ob3Jpem9udGFsLXNwYWNpbmc6IHZhcigtLXctc3BhY2luZy0tcGFnZS0taG9yaXpvbnRhbC1zcGFjZSk7XFxuICAgIC0tdy1maXhlZC1oZWFkZXItLXNwYWNpbmctcy0tdmVydGljYWwtc3BhY2luZzogdmFyKC0tdy1zcGFjaW5nLS1wYWdlLS12ZXJ0aWNhbC1zcGFjZSk7XFxuXFxuICAgIC0tdy1maXhlZC1oZWFkZXItLXNwYWNpbmctbS0taG9yaXpvbnRhbC1zcGFjaW5nOiB2YXIoLS13LXNwYWNpbmctLXBhZ2UtLWhvcml6b250YWwtc3BhY2UpO1xcbiAgICAtLXctZml4ZWQtaGVhZGVyLS1zcGFjaW5nLW0tLXZlcnRpY2FsLXNwYWNpbmc6IGNhbGModmFyKC0tdy1zcGFjaW5nLS1wYWdlLS12ZXJ0aWNhbC1zcGFjZSkgKiAyKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2pzL2NvbXBvbmVudHMvbGF5b3V0L2ZpeGVkLWhlYWRlci9maXhlZC1oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMkRBQTJEOztJQUUzRCx5RkFBeUY7SUFDekYscUZBQXFGOztJQUVyRix5RkFBeUY7SUFDekYsK0ZBQStGO0FBQ25HXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS13LWZpeGVkLWhlYWRlci0tYXJ0aWNsZS1tYXgtd2lkdGg6IHZhcigtLXctYnJlYWtwb2ludC14bCk7XFxuXFxuICAgIC0tdy1maXhlZC1oZWFkZXItLXNwYWNpbmctcy0taG9yaXpvbnRhbC1zcGFjaW5nOiB2YXIoLS13LXNwYWNpbmctLXBhZ2UtLWhvcml6b250YWwtc3BhY2UpO1xcbiAgICAtLXctZml4ZWQtaGVhZGVyLS1zcGFjaW5nLXMtLXZlcnRpY2FsLXNwYWNpbmc6IHZhcigtLXctc3BhY2luZy0tcGFnZS0tdmVydGljYWwtc3BhY2UpO1xcblxcbiAgICAtLXctZml4ZWQtaGVhZGVyLS1zcGFjaW5nLW0tLWhvcml6b250YWwtc3BhY2luZzogdmFyKC0tdy1zcGFjaW5nLS1wYWdlLS1ob3Jpem9udGFsLXNwYWNlKTtcXG4gICAgLS13LWZpeGVkLWhlYWRlci0tc3BhY2luZy1tLS12ZXJ0aWNhbC1zcGFjaW5nOiBjYWxjKHZhcigtLXctc3BhY2luZy0tcGFnZS0tdmVydGljYWwtc3BhY2UpICogMik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS13LWJyYW5kLS1sb2dvLS1oZWlnaHQ6IDIuNWVtO1xcbiAgICAtLXctYnJhbmQtLWxvZ28tLW1hcmdpbi1yaWdodDogdmFyKC0tdy1zcGFjaW5nLTIwMCk7XFxuICAgIC0tdy1icmFuZC0tZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtdGV4dC1zZW1pYm9sZCk7XFxuXFxuICAgIC0tdy1icmFuZC0tY29udHJhc3QtLWNvbG9yOiB2YXIoLS13LXByaW1hcnktdGV4dC1jb2xvcik7XFxuICAgIC0tdy1icmFuZC0tY29udHJhc3QtLWhvdmVyLS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LXRleHQtY29sb3ItMzAwKTtcXG5cXG4gICAgLS13LWJyYW5kLS1zaGFkZWQtLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3IpO1xcbiAgICAtLXctYnJhbmQtLXNoYWRlZC0taG92ZXItLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3ItNTAwKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2pzL2NvbXBvbmVudHMvbW9sZWN1bGVzL2JyYW5kL2JyYW5kLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixtREFBbUQ7SUFDbkQsMERBQTBEOztJQUUxRCx1REFBdUQ7SUFDdkQsa0VBQWtFOztJQUVsRSw2Q0FBNkM7SUFDN0Msd0RBQXdEO0FBQzVEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS13LWJyYW5kLS1sb2dvLS1oZWlnaHQ6IDIuNWVtO1xcbiAgICAtLXctYnJhbmQtLWxvZ28tLW1hcmdpbi1yaWdodDogdmFyKC0tdy1zcGFjaW5nLTIwMCk7XFxuICAgIC0tdy1icmFuZC0tZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtdGV4dC1zZW1pYm9sZCk7XFxuXFxuICAgIC0tdy1icmFuZC0tY29udHJhc3QtLWNvbG9yOiB2YXIoLS13LXByaW1hcnktdGV4dC1jb2xvcik7XFxuICAgIC0tdy1icmFuZC0tY29udHJhc3QtLWhvdmVyLS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LXRleHQtY29sb3ItMzAwKTtcXG5cXG4gICAgLS13LWJyYW5kLS1zaGFkZWQtLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3IpO1xcbiAgICAtLXctYnJhbmQtLXNoYWRlZC0taG92ZXItLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3ItNTAwKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXctaG9yaXpvbnRhbC1uYXYtLWNvbnRyYXN0LS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LXRleHQtY29sb3ItNTAwKTtcXG4gICAgLS13LWhvcml6b250YWwtbmF2LS1jb250cmFzdC0taG92ZXItLWNvbG9yOiB2YXIoLS13LXByaW1hcnktdGV4dC1jb2xvci0zMDApO1xcbiAgICAtLXctaG9yaXpvbnRhbC1uYXYtLWNvbnRyYXN0LS1hY3RpdmUtLWNvbG9yOiB2YXIoLS13LXByaW1hcnktdGV4dC1jb2xvci0zMDApO1xcblxcbiAgICAtLXctaG9yaXpvbnRhbC1uYXYtLXNoYWRlZC0tY29sb3I6IHZhcigtLXctdGV4dC1jb2xvci0zMDApO1xcbiAgICAtLXctaG9yaXpvbnRhbC1uYXYtLXNoYWRlZC0taG92ZXItLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3ItNTAwKTtcXG4gICAgLS13LWhvcml6b250YWwtbmF2LS1zaGFkZWQtLWFjdGl2ZS0tY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvcik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9ob3Jpem9udGFsLW5hdi9ob3Jpem9udGFsLW5hdi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvRUFBb0U7SUFDcEUsMkVBQTJFO0lBQzNFLDRFQUE0RTs7SUFFNUUsMERBQTBEO0lBQzFELGlFQUFpRTtJQUNqRSxpRUFBaUU7QUFDckVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXctaG9yaXpvbnRhbC1uYXYtLWNvbnRyYXN0LS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LXRleHQtY29sb3ItNTAwKTtcXG4gICAgLS13LWhvcml6b250YWwtbmF2LS1jb250cmFzdC0taG92ZXItLWNvbG9yOiB2YXIoLS13LXByaW1hcnktdGV4dC1jb2xvci0zMDApO1xcbiAgICAtLXctaG9yaXpvbnRhbC1uYXYtLWNvbnRyYXN0LS1hY3RpdmUtLWNvbG9yOiB2YXIoLS13LXByaW1hcnktdGV4dC1jb2xvci0zMDApO1xcblxcbiAgICAtLXctaG9yaXpvbnRhbC1uYXYtLXNoYWRlZC0tY29sb3I6IHZhcigtLXctdGV4dC1jb2xvci0zMDApO1xcbiAgICAtLXctaG9yaXpvbnRhbC1uYXYtLXNoYWRlZC0taG92ZXItLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3ItNTAwKTtcXG4gICAgLS13LWhvcml6b250YWwtbmF2LS1zaGFkZWQtLWFjdGl2ZS0tY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvcik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS13LXZlcnRpY2FsLW5hdi0tY29udHJhc3QtLWNvbG9yOiB2YXIoLS13LXByaW1hcnktdGV4dC1jb2xvci01MDApO1xcbiAgICAtLXctdmVydGljYWwtbmF2LS1jb250cmFzdC0taG92ZXItLWNvbG9yOiB2YXIoLS13LXByaW1hcnktdGV4dC1jb2xvci0zMDApO1xcbiAgICAtLXctdmVydGljYWwtbmF2LS1jb250cmFzdC0tYWN0aXZlLS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LXRleHQtY29sb3ItMzAwKTtcXG5cXG4gICAgLS13LXZlcnRpY2FsLW5hdi0tc2hhZGVkLS1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yLTMwMCk7XFxuICAgIC0tdy12ZXJ0aWNhbC1uYXYtLXNoYWRlZC0taG92ZXItLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3ItNTAwKTtcXG4gICAgLS13LXZlcnRpY2FsLW5hdi0tc2hhZGVkLS1hY3RpdmUtLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvanMvY29tcG9uZW50cy9tb2xlY3VsZXMvdmVydGljYWwtbmF2L3ZlcnRpY2FsLW5hdi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrRUFBa0U7SUFDbEUseUVBQXlFO0lBQ3pFLDBFQUEwRTs7SUFFMUUsd0RBQXdEO0lBQ3hELCtEQUErRDtJQUMvRCwrREFBK0Q7QUFDbkVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXctdmVydGljYWwtbmF2LS1jb250cmFzdC0tY29sb3I6IHZhcigtLXctcHJpbWFyeS10ZXh0LWNvbG9yLTUwMCk7XFxuICAgIC0tdy12ZXJ0aWNhbC1uYXYtLWNvbnRyYXN0LS1ob3Zlci0tY29sb3I6IHZhcigtLXctcHJpbWFyeS10ZXh0LWNvbG9yLTMwMCk7XFxuICAgIC0tdy12ZXJ0aWNhbC1uYXYtLWNvbnRyYXN0LS1hY3RpdmUtLWNvbG9yOiB2YXIoLS13LXByaW1hcnktdGV4dC1jb2xvci0zMDApO1xcblxcbiAgICAtLXctdmVydGljYWwtbmF2LS1zaGFkZWQtLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3ItMzAwKTtcXG4gICAgLS13LXZlcnRpY2FsLW5hdi0tc2hhZGVkLS1ob3Zlci0tY29sb3I6IHZhcigtLXctdGV4dC1jb2xvci01MDApO1xcbiAgICAtLXctdmVydGljYWwtbmF2LS1zaGFkZWQtLWFjdGl2ZS0tY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvcik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS13LWZvb3Rlci0tc3BhY2luZy1zLS1ob3Jpem9udGFsLXNwYWNpbmc6IHZhcigtLXctc3BhY2luZy0tcGFnZS0taG9yaXpvbnRhbC1zcGFjZSk7XFxuICAgIC0tdy1mb290ZXItLXNwYWNpbmctcy0tdmVydGljYWwtc3BhY2luZzogdmFyKC0tdy1zcGFjaW5nLS1wYWdlLS12ZXJ0aWNhbC1zcGFjZSk7XFxuXFxuICAgIC0tdy1mb290ZXItLXNwYWNpbmctbS0taG9yaXpvbnRhbC1zcGFjaW5nOiB2YXIoLS13LXNwYWNpbmctLXBhZ2UtLWhvcml6b250YWwtc3BhY2UpO1xcbiAgICAtLXctZm9vdGVyLS1zcGFjaW5nLW0tLXZlcnRpY2FsLXNwYWNpbmc6IGNhbGModmFyKC0tdy1zcGFjaW5nLS1wYWdlLS12ZXJ0aWNhbC1zcGFjZSkgKiAyKTtcXG5cXG4gICAgLS13LWZvb3Rlci0tY29udHJhc3QtLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctcHJpbWFyeS1jb2xvcik7XFxuICAgIC0tdy1mb290ZXItLWNvbnRyYXN0LS1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LXRleHQtY29sb3IpO1xcblxcbiAgICAtLXctZm9vdGVyLS1saWdodC1jb250cmFzdC0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTgwMCk7XFxuICAgIC0tdy1mb290ZXItLWxpZ2h0LWNvbnRyYXN0LS1jb2xvcjogdmFyKC0tdy10ZXh0LWNvbG9yKTtcXG4gICAgXFxuICAgIC0tdy1mb290ZXItLXNoYWRlZC0tYm9yZGVyLXRvcC0tY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvci04MDApO1xcbiAgICAtLXctZm9vdGVyLS1zaGFkZWQtLWJvcmRlci10b3AtLXdpZHRoOiB2YXIoLS13LWJvcmRlci13aWR0aC0tdGhpbik7XFxuICAgIC0tdy1mb290ZXItLXNoYWRlZC0tY29sb3I6IHZhcigtLXctdGV4dC1jb2xvci0zMDApO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvanMvY29tcG9uZW50cy9vcmdhbmlzbXMvZm9vdGVyL2Zvb3Rlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtRkFBbUY7SUFDbkYsK0VBQStFOztJQUUvRSxtRkFBbUY7SUFDbkYseUZBQXlGOztJQUV6Riw4REFBOEQ7SUFDOUQsd0RBQXdEOztJQUV4RCwyRUFBMkU7SUFDM0Usc0RBQXNEOztJQUV0RCxvRUFBb0U7SUFDcEUsa0VBQWtFO0lBQ2xFLGtEQUFrRDtBQUN0RFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tdy1mb290ZXItLXNwYWNpbmctcy0taG9yaXpvbnRhbC1zcGFjaW5nOiB2YXIoLS13LXNwYWNpbmctLXBhZ2UtLWhvcml6b250YWwtc3BhY2UpO1xcbiAgICAtLXctZm9vdGVyLS1zcGFjaW5nLXMtLXZlcnRpY2FsLXNwYWNpbmc6IHZhcigtLXctc3BhY2luZy0tcGFnZS0tdmVydGljYWwtc3BhY2UpO1xcblxcbiAgICAtLXctZm9vdGVyLS1zcGFjaW5nLW0tLWhvcml6b250YWwtc3BhY2luZzogdmFyKC0tdy1zcGFjaW5nLS1wYWdlLS1ob3Jpem9udGFsLXNwYWNlKTtcXG4gICAgLS13LWZvb3Rlci0tc3BhY2luZy1tLS12ZXJ0aWNhbC1zcGFjaW5nOiBjYWxjKHZhcigtLXctc3BhY2luZy0tcGFnZS0tdmVydGljYWwtc3BhY2UpICogMik7XFxuXFxuICAgIC0tdy1mb290ZXItLWNvbnRyYXN0LS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcbiAgICAtLXctZm9vdGVyLS1jb250cmFzdC0tY29sb3I6IHZhcigtLXctcHJpbWFyeS10ZXh0LWNvbG9yKTtcXG5cXG4gICAgLS13LWZvb3Rlci0tbGlnaHQtY29udHJhc3QtLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctYmFja2dyb3VuZC1jb2xvci04MDApO1xcbiAgICAtLXctZm9vdGVyLS1saWdodC1jb250cmFzdC0tY29sb3I6IHZhcigtLXctdGV4dC1jb2xvcik7XFxuICAgIFxcbiAgICAtLXctZm9vdGVyLS1zaGFkZWQtLWJvcmRlci10b3AtLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItODAwKTtcXG4gICAgLS13LWZvb3Rlci0tc2hhZGVkLS1ib3JkZXItdG9wLS13aWR0aDogdmFyKC0tdy1ib3JkZXItd2lkdGgtLXRoaW4pO1xcbiAgICAtLXctZm9vdGVyLS1zaGFkZWQtLWNvbG9yOiB2YXIoLS13LXRleHQtY29sb3ItMzAwKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXctbmF2YmFyLS1zaXplLXMtLWhvcml6b250YWwtcGFkZGluZzogdmFyKC0tdy1zcGFjaW5nLS1wYWdlLS1ob3Jpem9udGFsLXNwYWNlKTtcXG4gICAgLS13LW5hdmJhci0tc2l6ZS1zLS12ZXJ0aWNhbC1wYWRkaW5nOiB2YXIoLS13LXNwYWNpbmctLXBhZ2UtLXZlcnRpY2FsLXNwYWNlKTtcXG5cXG4gICAgLS13LW5hdmJhci0tc2l6ZS1tLS1ob3Jpem9udGFsLXBhZGRpbmc6IHZhcigtLXctc3BhY2luZy0tcGFnZS0taG9yaXpvbnRhbC1zcGFjZSk7XFxuICAgIC0tdy1uYXZiYXItLXNpemUtbS0tdmVydGljYWwtcGFkZGluZzogY2FsYyh2YXIoLS13LXNwYWNpbmctLXBhZ2UtLXZlcnRpY2FsLXNwYWNlKSAqIDIpO1xcblxcbiAgICAtLXctbmF2YmFyLS1jb250cmFzdC0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1wcmltYXJ5LWNvbG9yKTtcXG4gICAgXFxuICAgIC0tdy1uYXZiYXItLXNoYWRlZC0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgLS13LW5hdmJhci0tc2hhZGVkLS1ib3JkZXItYm90dG9tLS1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTgwMCk7XFxuICAgIC0tdy1uYXZiYXItLXNoYWRlZC0tYm9yZGVyLWJvdHRvbS0td2lkdGg6IHZhcigtLXctYm9yZGVyLXdpZHRoLS10aGluKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2pzL2NvbXBvbmVudHMvb3JnYW5pc21zL25hdmJhci9uYXZiYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0ZBQWdGO0lBQ2hGLDRFQUE0RTs7SUFFNUUsZ0ZBQWdGO0lBQ2hGLHNGQUFzRjs7SUFFdEYsOERBQThEOztJQUU5RCwrREFBK0Q7SUFDL0QsdUVBQXVFO0lBQ3ZFLHFFQUFxRTtBQUN6RVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tdy1uYXZiYXItLXNpemUtcy0taG9yaXpvbnRhbC1wYWRkaW5nOiB2YXIoLS13LXNwYWNpbmctLXBhZ2UtLWhvcml6b250YWwtc3BhY2UpO1xcbiAgICAtLXctbmF2YmFyLS1zaXplLXMtLXZlcnRpY2FsLXBhZGRpbmc6IHZhcigtLXctc3BhY2luZy0tcGFnZS0tdmVydGljYWwtc3BhY2UpO1xcblxcbiAgICAtLXctbmF2YmFyLS1zaXplLW0tLWhvcml6b250YWwtcGFkZGluZzogdmFyKC0tdy1zcGFjaW5nLS1wYWdlLS1ob3Jpem9udGFsLXNwYWNlKTtcXG4gICAgLS13LW5hdmJhci0tc2l6ZS1tLS12ZXJ0aWNhbC1wYWRkaW5nOiBjYWxjKHZhcigtLXctc3BhY2luZy0tcGFnZS0tdmVydGljYWwtc3BhY2UpICogMik7XFxuXFxuICAgIC0tdy1uYXZiYXItLWNvbnRyYXN0LS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXByaW1hcnktY29sb3IpO1xcbiAgICBcXG4gICAgLS13LW5hdmJhci0tc2hhZGVkLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICAtLXctbmF2YmFyLS1zaGFkZWQtLWJvcmRlci1ib3R0b20tLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItODAwKTtcXG4gICAgLS13LW5hdmJhci0tc2hhZGVkLS1ib3JkZXItYm90dG9tLS13aWR0aDogdmFyKC0tdy1ib3JkZXItd2lkdGgtLXRoaW4pO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3NzL25vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jc3MvYnJlYWtwb2ludHMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3NzL2NvbG9ycy5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jc3MvaWNvbnMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF80X19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3NzL3NwYWNpbmcuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF81X19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3NzL3R5cG9ncmFwaHkuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF82X19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vanMvY29tcG9uZW50cy9hdG9tcy9idXR0b24vYnV0dG9uLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfN19fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2pzL2NvbXBvbmVudHMvYXRvbXMvY29kZS9jb2RlLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfOF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2pzL2NvbXBvbmVudHMvYXRvbXMvaGVhZGluZy9oZWFkaW5nLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfOV9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2pzL2NvbXBvbmVudHMvYXRvbXMvbWFya2Rvd24vbWFya2Rvd24uY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xMF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2pzL2NvbXBvbmVudHMvYXRvbXMvcGFuZS9wYW5lLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTFfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9qcy9jb21wb25lbnRzL2F0b21zL3BhcmFncmFwaC9wYXJhZ3JhcGguY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xMl9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2pzL2NvbXBvbmVudHMvYXRvbXMvcHJlL3ByZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzEzX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vanMvY29tcG9uZW50cy9hdG9tcy90YWJzL3RhYnMuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xNF9fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2pzL2NvbXBvbmVudHMvYXRvbXMvdGV4dC1pbnB1dC90ZXh0LWlucHV0LmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTVfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9qcy9jb21wb25lbnRzL2xheW91dC9maXhlZC1oZWFkZXIvZml4ZWQtaGVhZGVyLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTZfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9qcy9jb21wb25lbnRzL2xheW91dC9ncmlkL2dyaWQuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xN19fXyBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2pzL2NvbXBvbmVudHMvbW9sZWN1bGVzL2JyYW5kL2JyYW5kLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMThfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9jc3MtcnVsZXMtdGFibGUvY3NzLXJ1bGVzLXRhYmxlLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTlfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9lbGVtZW50LWV4YW1wbGUvZWxlbWVudC1leGFtcGxlLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMjBfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9lbGVtZW50LXByb3BlcnRpZXMtdGFibGUvZWxlbWVudC1wcm9wZXJ0aWVzLXRhYmxlLmNzc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMjFfX18gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9ob3Jpem9udGFsLW5hdi9ob3Jpem9udGFsLW5hdi5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzIyX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vanMvY29tcG9uZW50cy9tb2xlY3VsZXMvdmVydGljYWwtbmF2L3ZlcnRpY2FsLW5hdi5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzIzX19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vanMvY29tcG9uZW50cy9vcmdhbmlzbXMvZm9vdGVyL2Zvb3Rlci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzI0X19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vanMvY29tcG9uZW50cy9vcmdhbmlzbXMvbmF2YmFyL25hdmJhci5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzI1X19fIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3NzL3RoZW1lLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzJfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzNfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzVfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzZfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzdfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzhfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzlfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzEwX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xMV9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTJfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzEzX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xNF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMTVfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzE2X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8xN19fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMThfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzE5X19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMjFfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzIyX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8yM19fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMjRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzI1X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuICogTm9ybWFsaXplXFxuICovXFxuXFxuLypcXG4gKiBHbG9iYWwgdG9rZW5zXFxuICovXFxuXFxuLypcXG4gKiBDb21wb25lbnQgdG9rZW5zXFxuICovXFxuXFxuLyogQXRvbXMgKi9cXG5cXG4vKiBMYXlvdXRzICovXFxuXFxuLyogTW9sZWN1bGVzICovXFxuXFxuLyogT3JnYW5pc21zICovXFxuXFxuXFxuLypcXG4gKiBUaGVtZVxcbiAqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFOztBQUdGOztFQUVFOztBQU9GOztFQUVFOztBQUVGLFVBQVU7O0FBV1YsWUFBWTs7QUFJWixjQUFjOztBQVFkLGNBQWM7OztBQUtkOztFQUVFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuICogTm9ybWFsaXplXFxuICovXFxuQGltcG9ydCBcXFwiLi9jc3Mvbm9ybWFsaXplLmNzc1xcXCI7XFxuXFxuLypcXG4gKiBHbG9iYWwgdG9rZW5zXFxuICovXFxuQGltcG9ydCBcXFwiLi9jc3MvYnJlYWtwb2ludHMuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2Nzcy9jb2xvcnMuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2Nzcy9pY29ucy5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vY3NzL3NwYWNpbmcuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2Nzcy90eXBvZ3JhcGh5LmNzc1xcXCI7XFxuXFxuLypcXG4gKiBDb21wb25lbnQgdG9rZW5zXFxuICovXFxuXFxuLyogQXRvbXMgKi9cXG5AaW1wb3J0IFxcXCIuL2pzL2NvbXBvbmVudHMvYXRvbXMvYnV0dG9uL2J1dHRvbi5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vanMvY29tcG9uZW50cy9hdG9tcy9jb2RlL2NvZGUuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2pzL2NvbXBvbmVudHMvYXRvbXMvaGVhZGluZy9oZWFkaW5nLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9qcy9jb21wb25lbnRzL2F0b21zL21hcmtkb3duL21hcmtkb3duLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9qcy9jb21wb25lbnRzL2F0b21zL3BhbmUvcGFuZS5jc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vanMvY29tcG9uZW50cy9hdG9tcy9wYXJhZ3JhcGgvcGFyYWdyYXBoLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9qcy9jb21wb25lbnRzL2F0b21zL3ByZS9wcmUuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2pzL2NvbXBvbmVudHMvYXRvbXMvdGFicy90YWJzLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9qcy9jb21wb25lbnRzL2F0b21zL3RleHQtaW5wdXQvdGV4dC1pbnB1dC5jc3NcXFwiO1xcblxcbi8qIExheW91dHMgKi9cXG5AaW1wb3J0IFxcXCIuL2pzL2NvbXBvbmVudHMvbGF5b3V0L2ZpeGVkLWhlYWRlci9maXhlZC1oZWFkZXIuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2pzL2NvbXBvbmVudHMvbGF5b3V0L2dyaWQvZ3JpZC5jc3NcXFwiO1xcblxcbi8qIE1vbGVjdWxlcyAqL1xcbkBpbXBvcnQgXFxcIi4vanMvY29tcG9uZW50cy9tb2xlY3VsZXMvYnJhbmQvYnJhbmQuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2pzL2NvbXBvbmVudHMvbW9sZWN1bGVzL2Nzcy1ydWxlcy10YWJsZS9jc3MtcnVsZXMtdGFibGUuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2pzL2NvbXBvbmVudHMvbW9sZWN1bGVzL2VsZW1lbnQtZXhhbXBsZS9lbGVtZW50LWV4YW1wbGUuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2pzL2NvbXBvbmVudHMvbW9sZWN1bGVzL2VsZW1lbnQtcHJvcGVydGllcy10YWJsZS9lbGVtZW50LXByb3BlcnRpZXMtdGFibGUuY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2pzL2NvbXBvbmVudHMvbW9sZWN1bGVzL2hvcml6b250YWwtbmF2L2hvcml6b250YWwtbmF2LmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9qcy9jb21wb25lbnRzL21vbGVjdWxlcy92ZXJ0aWNhbC1uYXYvdmVydGljYWwtbmF2LmNzc1xcXCI7XFxuXFxuLyogT3JnYW5pc21zICovXFxuQGltcG9ydCBcXFwiLi9qcy9jb21wb25lbnRzL29yZ2FuaXNtcy9mb290ZXIvZm9vdGVyLmNzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9qcy9jb21wb25lbnRzL29yZ2FuaXNtcy9uYXZiYXIvbmF2YmFyLmNzc1xcXCI7XFxuXFxuXFxuLypcXG4gKiBUaGVtZVxcbiAqL1xcbkBpbXBvcnQgXFxcIi4vY3NzL3RoZW1lLmNzc1xcXCI7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5jb25zdCBOT0RFX01PREUgPSBmYWxzZTtcbmNvbnN0IGdsb2JhbCA9IE5PREVfTU9ERSA/IGdsb2JhbFRoaXMgOiB3aW5kb3c7XG4vKipcbiAqIFdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBzdXBwb3J0cyBgYWRvcHRlZFN0eWxlU2hlZXRzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyA9IGdsb2JhbC5TaGFkb3dSb290ICYmXG4gICAgKGdsb2JhbC5TaGFkeUNTUyA9PT0gdW5kZWZpbmVkIHx8IGdsb2JhbC5TaGFkeUNTUy5uYXRpdmVTaGFkb3cpICYmXG4gICAgJ2Fkb3B0ZWRTdHlsZVNoZWV0cycgaW4gRG9jdW1lbnQucHJvdG90eXBlICYmXG4gICAgJ3JlcGxhY2UnIGluIENTU1N0eWxlU2hlZXQucHJvdG90eXBlO1xuY29uc3QgY29uc3RydWN0aW9uVG9rZW4gPSBTeW1ib2woKTtcbmNvbnN0IGNzc1RhZ0NhY2hlID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogQSBjb250YWluZXIgZm9yIGEgc3RyaW5nIG9mIENTUyB0ZXh0LCB0aGF0IG1heSBiZSB1c2VkIHRvIGNyZWF0ZSBhIENTU1N0eWxlU2hlZXQuXG4gKlxuICogQ1NTUmVzdWx0IGlzIHRoZSByZXR1cm4gdmFsdWUgb2YgYGNzc2AtdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxzIGFuZFxuICogYHVuc2FmZUNTUygpYC4gSW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgQ1NTUmVzdWx0cyBhcmUgb25seSBjcmVhdGVkIHZpYSB0aGVcbiAqIGBjc3NgIHRhZyBhbmQgYHVuc2FmZUNTUygpYCwgQ1NTUmVzdWx0IGNhbm5vdCBiZSBjb25zdHJ1Y3RlZCBkaXJlY3RseS5cbiAqL1xuZXhwb3J0IGNsYXNzIENTU1Jlc3VsdCB7XG4gICAgY29uc3RydWN0b3IoY3NzVGV4dCwgc3RyaW5ncywgc2FmZVRva2VuKSB7XG4gICAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgIHRoaXNbJ18kY3NzUmVzdWx0JCddID0gdHJ1ZTtcbiAgICAgICAgaWYgKHNhZmVUb2tlbiAhPT0gY29uc3RydWN0aW9uVG9rZW4pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ1NTUmVzdWx0IGlzIG5vdCBjb25zdHJ1Y3RhYmxlLiBVc2UgYHVuc2FmZUNTU2Agb3IgYGNzc2AgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNzc1RleHQgPSBjc3NUZXh0O1xuICAgICAgICB0aGlzLl9zdHJpbmdzID0gc3RyaW5ncztcbiAgICB9XG4gICAgLy8gVGhpcyBpcyBhIGdldHRlciBzbyB0aGF0IGl0J3MgbGF6eS4gSW4gcHJhY3RpY2UsIHRoaXMgbWVhbnMgc3R5bGVzaGVldHNcbiAgICAvLyBhcmUgbm90IGNyZWF0ZWQgdW50aWwgdGhlIGZpcnN0IGVsZW1lbnQgaW5zdGFuY2UgaXMgbWFkZS5cbiAgICBnZXQgc3R5bGVTaGVldCgpIHtcbiAgICAgICAgLy8gSWYgYHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0c2AgaXMgdHJ1ZSB0aGVuIHdlIGFzc3VtZSBDU1NTdHlsZVNoZWV0IGlzXG4gICAgICAgIC8vIGNvbnN0cnVjdGFibGUuXG4gICAgICAgIGxldCBzdHlsZVNoZWV0ID0gdGhpcy5fc3R5bGVTaGVldDtcbiAgICAgICAgY29uc3Qgc3RyaW5ncyA9IHRoaXMuX3N0cmluZ3M7XG4gICAgICAgIGlmIChzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMgJiYgc3R5bGVTaGVldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjYWNoZWFibGUgPSBzdHJpbmdzICE9PSB1bmRlZmluZWQgJiYgc3RyaW5ncy5sZW5ndGggPT09IDE7XG4gICAgICAgICAgICBpZiAoY2FjaGVhYmxlKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldCA9IGNzc1RhZ0NhY2hlLmdldChzdHJpbmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdHlsZVNoZWV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAodGhpcy5fc3R5bGVTaGVldCA9IHN0eWxlU2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpKS5yZXBsYWNlU3luYyh0aGlzLmNzc1RleHQpO1xuICAgICAgICAgICAgICAgIGlmIChjYWNoZWFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3NzVGFnQ2FjaGUuc2V0KHN0cmluZ3MsIHN0eWxlU2hlZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGVTaGVldDtcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNzc1RleHQ7XG4gICAgfVxufVxuY29uc3QgdGV4dEZyb21DU1NSZXN1bHQgPSAodmFsdWUpID0+IHtcbiAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgIGlmICh2YWx1ZVsnXyRjc3NSZXN1bHQkJ10gPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmNzc1RleHQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYWx1ZSBwYXNzZWQgdG8gJ2NzcycgZnVuY3Rpb24gbXVzdCBiZSBhICdjc3MnIGZ1bmN0aW9uIHJlc3VsdDogYCArXG4gICAgICAgICAgICBgJHt2YWx1ZX0uIFVzZSAndW5zYWZlQ1NTJyB0byBwYXNzIG5vbi1saXRlcmFsIHZhbHVlcywgYnV0IHRha2UgY2FyZSBgICtcbiAgICAgICAgICAgIGB0byBlbnN1cmUgcGFnZSBzZWN1cml0eS5gKTtcbiAgICB9XG59O1xuLyoqXG4gKiBXcmFwIGEgdmFsdWUgZm9yIGludGVycG9sYXRpb24gaW4gYSB7QGxpbmtjb2RlIGNzc30gdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWwuXG4gKlxuICogVGhpcyBpcyB1bnNhZmUgYmVjYXVzZSB1bnRydXN0ZWQgQ1NTIHRleHQgY2FuIGJlIHVzZWQgdG8gcGhvbmUgaG9tZVxuICogb3IgZXhmaWx0cmF0ZSBkYXRhIHRvIGFuIGF0dGFja2VyIGNvbnRyb2xsZWQgc2l0ZS4gVGFrZSBjYXJlIHRvIG9ubHkgdXNlXG4gKiB0aGlzIHdpdGggdHJ1c3RlZCBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHVuc2FmZUNTUyA9ICh2YWx1ZSkgPT4gbmV3IENTU1Jlc3VsdCh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBTdHJpbmcodmFsdWUpLCB1bmRlZmluZWQsIGNvbnN0cnVjdGlvblRva2VuKTtcbi8qKlxuICogQSB0ZW1wbGF0ZSBsaXRlcmFsIHRhZyB3aGljaCBjYW4gYmUgdXNlZCB3aXRoIExpdEVsZW1lbnQnc1xuICoge0BsaW5rY29kZSBMaXRFbGVtZW50LnN0eWxlc30gcHJvcGVydHkgdG8gc2V0IGVsZW1lbnQgc3R5bGVzLlxuICpcbiAqIEZvciBzZWN1cml0eSByZWFzb25zLCBvbmx5IGxpdGVyYWwgc3RyaW5nIHZhbHVlcyBhbmQgbnVtYmVyIG1heSBiZSB1c2VkIGluXG4gKiBlbWJlZGRlZCBleHByZXNzaW9ucy4gVG8gaW5jb3Jwb3JhdGUgbm9uLWxpdGVyYWwgdmFsdWVzIHtAbGlua2NvZGUgdW5zYWZlQ1NTfVxuICogbWF5IGJlIHVzZWQgaW5zaWRlIGFuIGV4cHJlc3Npb24uXG4gKi9cbmV4cG9ydCBjb25zdCBjc3MgPSAoc3RyaW5ncywgLi4udmFsdWVzKSA9PiB7XG4gICAgY29uc3QgY3NzVGV4dCA9IHN0cmluZ3MubGVuZ3RoID09PSAxXG4gICAgICAgID8gc3RyaW5nc1swXVxuICAgICAgICA6IHZhbHVlcy5yZWR1Y2UoKGFjYywgdiwgaWR4KSA9PiBhY2MgKyB0ZXh0RnJvbUNTU1Jlc3VsdCh2KSArIHN0cmluZ3NbaWR4ICsgMV0sIHN0cmluZ3NbMF0pO1xuICAgIHJldHVybiBuZXcgQ1NTUmVzdWx0KGNzc1RleHQsIHN0cmluZ3MsIGNvbnN0cnVjdGlvblRva2VuKTtcbn07XG4vKipcbiAqIEFwcGxpZXMgdGhlIGdpdmVuIHN0eWxlcyB0byBhIGBzaGFkb3dSb290YC4gV2hlbiBTaGFkb3cgRE9NIGlzXG4gKiBhdmFpbGFibGUgYnV0IGBhZG9wdGVkU3R5bGVTaGVldHNgIGlzIG5vdCwgc3R5bGVzIGFyZSBhcHBlbmRlZCB0byB0aGVcbiAqIGBzaGFkb3dSb290YCB0byBbbWltaWMgc3BlYyBiZWhhdmlvcl0oaHR0cHM6Ly93aWNnLmdpdGh1Yi5pby9jb25zdHJ1Y3Qtc3R5bGVzaGVldHMvI3VzaW5nLWNvbnN0cnVjdGVkLXN0eWxlc2hlZXRzKS5cbiAqIE5vdGUsIHdoZW4gc2hpbW1pbmcgaXMgdXNlZCwgYW55IHN0eWxlcyB0aGF0IGFyZSBzdWJzZXF1ZW50bHkgcGxhY2VkIGludG9cbiAqIHRoZSBzaGFkb3dSb290IHNob3VsZCBiZSBwbGFjZWQgKmJlZm9yZSogYW55IHNoaW1tZWQgYWRvcHRlZCBzdHlsZXMuIFRoaXNcbiAqIHdpbGwgbWF0Y2ggc3BlYyBiZWhhdmlvciB0aGF0IGdpdmVzIGFkb3B0ZWQgc2hlZXRzIHByZWNlZGVuY2Ugb3ZlciBzdHlsZXMgaW5cbiAqIHNoYWRvd1Jvb3QuXG4gKi9cbmV4cG9ydCBjb25zdCBhZG9wdFN0eWxlcyA9IChyZW5kZXJSb290LCBzdHlsZXMpID0+IHtcbiAgICBpZiAoc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzKSB7XG4gICAgICAgIHJlbmRlclJvb3QuYWRvcHRlZFN0eWxlU2hlZXRzID0gc3R5bGVzLm1hcCgocykgPT4gcyBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQgPyBzIDogcy5zdHlsZVNoZWV0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0eWxlcy5mb3JFYWNoKChzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgY29uc3Qgbm9uY2UgPSBnbG9iYWxbJ2xpdE5vbmNlJ107XG4gICAgICAgICAgICBpZiAobm9uY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBub25jZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IHMuY3NzVGV4dDtcbiAgICAgICAgICAgIHJlbmRlclJvb3QuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuY29uc3QgY3NzUmVzdWx0RnJvbVN0eWxlU2hlZXQgPSAoc2hlZXQpID0+IHtcbiAgICBsZXQgY3NzVGV4dCA9ICcnO1xuICAgIGZvciAoY29uc3QgcnVsZSBvZiBzaGVldC5jc3NSdWxlcykge1xuICAgICAgICBjc3NUZXh0ICs9IHJ1bGUuY3NzVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHVuc2FmZUNTUyhjc3NUZXh0KTtcbn07XG5leHBvcnQgY29uc3QgZ2V0Q29tcGF0aWJsZVN0eWxlID0gc3VwcG9ydHNBZG9wdGluZ1N0eWxlU2hlZXRzIHx8XG4gICAgKE5PREVfTU9ERSAmJiBnbG9iYWwuQ1NTU3R5bGVTaGVldCA9PT0gdW5kZWZpbmVkKVxuICAgID8gKHMpID0+IHNcbiAgICA6IChzKSA9PiBzIGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldCA/IGNzc1Jlc3VsdEZyb21TdHlsZVNoZWV0KHMpIDogcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNzcy10YWcuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgX2EsIF9iLCBfYywgX2Q7XG52YXIgX2U7XG4vKipcbiAqIFVzZSB0aGlzIG1vZHVsZSBpZiB5b3Ugd2FudCB0byBjcmVhdGUgeW91ciBvd24gYmFzZSBjbGFzcyBleHRlbmRpbmdcbiAqIHtAbGluayBSZWFjdGl2ZUVsZW1lbnR9LlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cbmltcG9ydCB7IGdldENvbXBhdGlibGVTdHlsZSwgYWRvcHRTdHlsZXMsIH0gZnJvbSAnLi9jc3MtdGFnLmpzJztcbi8vIEluIHRoZSBOb2RlIGJ1aWxkLCB0aGlzIGltcG9ydCB3aWxsIGJlIGluamVjdGVkIGJ5IFJvbGx1cDpcbi8vIGltcG9ydCB7SFRNTEVsZW1lbnQsIGN1c3RvbUVsZW1lbnRzfSBmcm9tICdAbGl0LWxhYnMvc3NyLWRvbS1zaGltJztcbmV4cG9ydCAqIGZyb20gJy4vY3NzLXRhZy5qcyc7XG5jb25zdCBOT0RFX01PREUgPSBmYWxzZTtcbmNvbnN0IGdsb2JhbCA9IE5PREVfTU9ERSA/IGdsb2JhbFRoaXMgOiB3aW5kb3c7XG5pZiAoTk9ERV9NT0RFKSB7XG4gICAgKF9hID0gZ2xvYmFsLmN1c3RvbUVsZW1lbnRzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoZ2xvYmFsLmN1c3RvbUVsZW1lbnRzID0gY3VzdG9tRWxlbWVudHMpO1xufVxuY29uc3QgREVWX01PREUgPSB0cnVlO1xubGV0IHJlcXVlc3RVcGRhdGVUaGVuYWJsZTtcbmxldCBpc3N1ZVdhcm5pbmc7XG5jb25zdCB0cnVzdGVkVHlwZXMgPSBnbG9iYWxcbiAgICAudHJ1c3RlZFR5cGVzO1xuLy8gVGVtcG9yYXJ5IHdvcmthcm91bmQgZm9yIGh0dHBzOi8vY3JidWcuY29tLzk5MzI2OFxuLy8gQ3VycmVudGx5LCBhbnkgYXR0cmlidXRlIHN0YXJ0aW5nIHdpdGggXCJvblwiIGlzIGNvbnNpZGVyZWQgdG8gYmUgYVxuLy8gVHJ1c3RlZFNjcmlwdCBzb3VyY2UuIFN1Y2ggYm9vbGVhbiBhdHRyaWJ1dGVzIG11c3QgYmUgc2V0IHRvIHRoZSBlcXVpdmFsZW50XG4vLyB0cnVzdGVkIGVtcHR5U2NyaXB0IHZhbHVlLlxuY29uc3QgZW1wdHlTdHJpbmdGb3JCb29sZWFuQXR0cmlidXRlID0gdHJ1c3RlZFR5cGVzXG4gICAgPyB0cnVzdGVkVHlwZXMuZW1wdHlTY3JpcHRcbiAgICA6ICcnO1xuY29uc3QgcG9seWZpbGxTdXBwb3J0ID0gREVWX01PREVcbiAgICA/IGdsb2JhbC5yZWFjdGl2ZUVsZW1lbnRQb2x5ZmlsbFN1cHBvcnREZXZNb2RlXG4gICAgOiBnbG9iYWwucmVhY3RpdmVFbGVtZW50UG9seWZpbGxTdXBwb3J0O1xuaWYgKERFVl9NT0RFKSB7XG4gICAgLy8gRW5zdXJlIHdhcm5pbmdzIGFyZSBpc3N1ZWQgb25seSAxeCwgZXZlbiBpZiBtdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXRcbiAgICAvLyBhcmUgbG9hZGVkLlxuICAgIGNvbnN0IGlzc3VlZFdhcm5pbmdzID0gKChfYiA9IGdsb2JhbC5saXRJc3N1ZWRXYXJuaW5ncykgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogKGdsb2JhbC5saXRJc3N1ZWRXYXJuaW5ncyA9IG5ldyBTZXQoKSkpO1xuICAgIC8vIElzc3VlIGEgd2FybmluZywgaWYgd2UgaGF2ZW4ndCBhbHJlYWR5LlxuICAgIGlzc3VlV2FybmluZyA9IChjb2RlLCB3YXJuaW5nKSA9PiB7XG4gICAgICAgIHdhcm5pbmcgKz0gYCBTZWUgaHR0cHM6Ly9saXQuZGV2L21zZy8ke2NvZGV9IGZvciBtb3JlIGluZm9ybWF0aW9uLmA7XG4gICAgICAgIGlmICghaXNzdWVkV2FybmluZ3MuaGFzKHdhcm5pbmcpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4od2FybmluZyk7XG4gICAgICAgICAgICBpc3N1ZWRXYXJuaW5ncy5hZGQod2FybmluZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlzc3VlV2FybmluZygnZGV2LW1vZGUnLCBgTGl0IGlzIGluIGRldiBtb2RlLiBOb3QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24hYCk7XG4gICAgLy8gSXNzdWUgcG9seWZpbGwgc3VwcG9ydCB3YXJuaW5nLlxuICAgIGlmICgoKF9jID0gZ2xvYmFsLlNoYWR5RE9NKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaW5Vc2UpICYmIHBvbHlmaWxsU3VwcG9ydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlzc3VlV2FybmluZygncG9seWZpbGwtc3VwcG9ydC1taXNzaW5nJywgYFNoYWRvdyBET00gaXMgYmVpbmcgcG9seWZpbGxlZCB2aWEgXFxgU2hhZHlET01cXGAgYnV0IGAgK1xuICAgICAgICAgICAgYHRoZSBcXGBwb2x5ZmlsbC1zdXBwb3J0XFxgIG1vZHVsZSBoYXMgbm90IGJlZW4gbG9hZGVkLmApO1xuICAgIH1cbiAgICByZXF1ZXN0VXBkYXRlVGhlbmFibGUgPSAobmFtZSkgPT4gKHtcbiAgICAgICAgdGhlbjogKG9uZnVsZmlsbGVkLCBfb25yZWplY3RlZCkgPT4ge1xuICAgICAgICAgICAgaXNzdWVXYXJuaW5nKCdyZXF1ZXN0LXVwZGF0ZS1wcm9taXNlJywgYFRoZSBcXGByZXF1ZXN0VXBkYXRlXFxgIG1ldGhvZCBzaG91bGQgbm8gbG9uZ2VyIHJldHVybiBhIFByb21pc2UgYnV0IGAgK1xuICAgICAgICAgICAgICAgIGBkb2VzIHNvIG9uIFxcYCR7bmFtZX1cXGAuIFVzZSBcXGB1cGRhdGVDb21wbGV0ZVxcYCBpbnN0ZWFkLmApO1xuICAgICAgICAgICAgaWYgKG9uZnVsZmlsbGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBvbmZ1bGZpbGxlZChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG4vKipcbiAqIFVzZWZ1bCBmb3IgdmlzdWFsaXppbmcgYW5kIGxvZ2dpbmcgaW5zaWdodHMgaW50byB3aGF0IHRoZSBMaXQgdGVtcGxhdGUgc3lzdGVtIGlzIGRvaW5nLlxuICpcbiAqIENvbXBpbGVkIG91dCBvZiBwcm9kIG1vZGUgYnVpbGRzLlxuICovXG5jb25zdCBkZWJ1Z0xvZ0V2ZW50ID0gREVWX01PREVcbiAgICA/IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBzaG91bGRFbWl0ID0gZ2xvYmFsXG4gICAgICAgICAgICAuZW1pdExpdERlYnVnTG9nRXZlbnRzO1xuICAgICAgICBpZiAoIXNob3VsZEVtaXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBnbG9iYWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2xpdC1kZWJ1ZycsIHtcbiAgICAgICAgICAgIGRldGFpbDogZXZlbnQsXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgOiB1bmRlZmluZWQ7XG4vKlxuICogV2hlbiB1c2luZyBDbG9zdXJlIENvbXBpbGVyLCBKU0NvbXBpbGVyX3JlbmFtZVByb3BlcnR5KHByb3BlcnR5LCBvYmplY3QpIGlzXG4gKiByZXBsYWNlZCBhdCBjb21waWxlIHRpbWUgYnkgdGhlIG11bmdlZCBuYW1lIGZvciBvYmplY3RbcHJvcGVydHldLiBXZSBjYW5ub3RcbiAqIGFsaWFzIHRoaXMgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG8gdXNlIGEgc21hbGwgc2hpbSB0aGF0IGhhcyB0aGUgc2FtZVxuICogYmVoYXZpb3Igd2hlbiBub3QgY29tcGlsaW5nLlxuICovXG4vKkBfX0lOTElORV9fKi9cbmNvbnN0IEpTQ29tcGlsZXJfcmVuYW1lUHJvcGVydHkgPSAocHJvcCwgX29iaikgPT4gcHJvcDtcbmV4cG9ydCBjb25zdCBkZWZhdWx0Q29udmVydGVyID0ge1xuICAgIHRvQXR0cmlidXRlKHZhbHVlLCB0eXBlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPyBlbXB0eVN0cmluZ0ZvckJvb2xlYW5BdHRyaWJ1dGUgOiBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBPYmplY3Q6XG4gICAgICAgICAgICBjYXNlIEFycmF5OlxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgcGFzcyB0aGlzIHRocm91Z2hcbiAgICAgICAgICAgICAgICAvLyB0byBhbGxvdyByZW1vdmluZy9ubyBjaGFuZ2UgYmVoYXZpb3IuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gdmFsdWUgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgdHlwZSkge1xuICAgICAgICBsZXQgZnJvbVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBCb29sZWFuOlxuICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IHZhbHVlICE9PSBudWxsO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBOdW1iZXI6XG4gICAgICAgICAgICAgICAgZnJvbVZhbHVlID0gdmFsdWUgPT09IG51bGwgPyBudWxsIDogTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgT2JqZWN0OlxuICAgICAgICAgICAgY2FzZSBBcnJheTpcbiAgICAgICAgICAgICAgICAvLyBEbyAqbm90KiBnZW5lcmF0ZSBleGNlcHRpb24gd2hlbiBpbnZhbGlkIEpTT04gaXMgc2V0IGFzIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgLy8gZG9uJ3Qgbm9ybWFsbHkgY29tcGxhaW4gb24gYmVpbmcgbWlzLWNvbmZpZ3VyZWQuXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhzb3J2ZWxsKTogRG8gZ2VuZXJhdGUgZXhjZXB0aW9uIGluICpkZXYgbW9kZSouXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXNzZXJ0IHRvIGFkaGVyZSB0byBCYXplbCdzIFwibXVzdCB0eXBlIGFzc2VydCBKU09OIHBhcnNlXCIgcnVsZS5cbiAgICAgICAgICAgICAgICAgICAgZnJvbVZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb21WYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcm9tVmFsdWU7XG4gICAgfSxcbn07XG4vKipcbiAqIENoYW5nZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIGRpZmZlcmVudCBmcm9tIGBvbGRWYWx1ZWAuXG4gKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGFzIHRoZSBkZWZhdWx0IGZvciBhIHByb3BlcnR5J3MgYGhhc0NoYW5nZWRgIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgY29uc3Qgbm90RXF1YWwgPSAodmFsdWUsIG9sZCkgPT4ge1xuICAgIC8vIFRoaXMgZW5zdXJlcyAob2xkPT1OYU4sIHZhbHVlPT1OYU4pIGFsd2F5cyByZXR1cm5zIGZhbHNlXG4gICAgcmV0dXJuIG9sZCAhPT0gdmFsdWUgJiYgKG9sZCA9PT0gb2xkIHx8IHZhbHVlID09PSB2YWx1ZSk7XG59O1xuY29uc3QgZGVmYXVsdFByb3BlcnR5RGVjbGFyYXRpb24gPSB7XG4gICAgYXR0cmlidXRlOiB0cnVlLFxuICAgIHR5cGU6IFN0cmluZyxcbiAgICBjb252ZXJ0ZXI6IGRlZmF1bHRDb252ZXJ0ZXIsXG4gICAgcmVmbGVjdDogZmFsc2UsXG4gICAgaGFzQ2hhbmdlZDogbm90RXF1YWwsXG59O1xuLyoqXG4gKiBUaGUgQ2xvc3VyZSBKUyBDb21waWxlciBkb2Vzbid0IGN1cnJlbnRseSBoYXZlIGdvb2Qgc3VwcG9ydCBmb3Igc3RhdGljXG4gKiBwcm9wZXJ0eSBzZW1hbnRpY3Mgd2hlcmUgXCJ0aGlzXCIgaXMgZHluYW1pYyAoZS5nLlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9jbG9zdXJlLWNvbXBpbGVyL2lzc3Vlcy8zMTc3IGFuZCBvdGhlcnMpIHNvIHdlIHVzZVxuICogdGhpcyBoYWNrIHRvIGJ5cGFzcyBhbnkgcmV3cml0aW5nIGJ5IHRoZSBjb21waWxlci5cbiAqL1xuY29uc3QgZmluYWxpemVkID0gJ2ZpbmFsaXplZCc7XG4vKipcbiAqIEJhc2UgZWxlbWVudCBjbGFzcyB3aGljaCBtYW5hZ2VzIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgYXR0cmlidXRlcy4gV2hlblxuICogcHJvcGVydGllcyBjaGFuZ2UsIHRoZSBgdXBkYXRlYCBtZXRob2QgaXMgYXN5bmNocm9ub3VzbHkgY2FsbGVkLiBUaGlzIG1ldGhvZFxuICogc2hvdWxkIGJlIHN1cHBsaWVkIGJ5IHN1YmNsYXNzZXJzIHRvIHJlbmRlciB1cGRhdGVzIGFzIGRlc2lyZWQuXG4gKiBAbm9Jbmhlcml0RG9jXG4gKi9cbmV4cG9ydCBjbGFzcyBSZWFjdGl2ZUVsZW1lbnRcbi8vIEluIHRoZSBOb2RlIGJ1aWxkLCB0aGlzIGBleHRlbmRzYCBjbGF1c2Ugd2lsbCBiZSBzdWJzdGl0dXRlZCB3aXRoXG4vLyBgKGdsb2JhbFRoaXMuSFRNTEVsZW1lbnQgPz8gSFRNTEVsZW1lbnQpYC5cbi8vXG4vLyBUaGlzIHdheSwgd2Ugd2lsbCBmaXJzdCBwcmVmZXIgYW55IGdsb2JhbCBgSFRNTEVsZW1lbnRgIHBvbHlmaWxsIHRoYXQgdGhlXG4vLyB1c2VyIGhhcyBhc3NpZ25lZCwgYW5kIHRoZW4gZmFsbCBiYWNrIHRvIHRoZSBgSFRNTEVsZW1lbnRgIHNoaW0gd2hpY2ggaGFzXG4vLyBiZWVuIGltcG9ydGVkIChzZWUgbm90ZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZSBhYm91dCBob3cgdGhpcyBpbXBvcnQgaXNcbi8vIGdlbmVyYXRlZCBieSBSb2xsdXApLiBOb3RlIHRoYXQgdGhlIGBIVE1MRWxlbWVudGAgdmFyaWFibGUgaGFzIGJlZW5cbi8vIHNoYWRvd2VkIGJ5IHRoaXMgaW1wb3J0LCBzbyBpdCBubyBsb25nZXIgcmVmZXJzIHRvIHRoZSBnbG9iYWwuXG4gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGlmIHRoZXJlIGlzIGEgcGVuZGluZyB1cGRhdGUgYXMgYSByZXN1bHQgb2YgY2FsbGluZyBgcmVxdWVzdFVwZGF0ZSgpYC5cbiAgICAgICAgICogU2hvdWxkIG9ubHkgYmUgcmVhZC5cbiAgICAgICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaXNVcGRhdGVQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyBzZXQgdG8gYHRydWVgIGFmdGVyIHRoZSBmaXJzdCB1cGRhdGUuIFRoZSBlbGVtZW50IGNvZGUgY2Fubm90IGFzc3VtZVxuICAgICAgICAgKiB0aGF0IGByZW5kZXJSb290YCBleGlzdHMgYmVmb3JlIHRoZSBlbGVtZW50IGBoYXNVcGRhdGVkYC5cbiAgICAgICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaGFzVXBkYXRlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogTmFtZSBvZiBjdXJyZW50bHkgcmVmbGVjdGluZyBwcm9wZXJ0eVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IG51bGw7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpbml0aWFsaXplciBmdW5jdGlvbiB0byB0aGUgY2xhc3MgdGhhdCBpcyBjYWxsZWQgZHVyaW5nIGluc3RhbmNlXG4gICAgICogY29uc3RydWN0aW9uLlxuICAgICAqXG4gICAgICogVGhpcyBpcyB1c2VmdWwgZm9yIGNvZGUgdGhhdCBydW5zIGFnYWluc3QgYSBgUmVhY3RpdmVFbGVtZW50YFxuICAgICAqIHN1YmNsYXNzLCBzdWNoIGFzIGEgZGVjb3JhdG9yLCB0aGF0IG5lZWRzIHRvIGRvIHdvcmsgZm9yIGVhY2hcbiAgICAgKiBpbnN0YW5jZSwgc3VjaCBhcyBzZXR0aW5nIHVwIGEgYFJlYWN0aXZlQ29udHJvbGxlcmAuXG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGNvbnN0IG15RGVjb3JhdG9yID0gKHRhcmdldDogdHlwZW9mIFJlYWN0aXZlRWxlbWVudCwga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgKiAgIHRhcmdldC5hZGRJbml0aWFsaXplcigoaW5zdGFuY2U6IFJlYWN0aXZlRWxlbWVudCkgPT4ge1xuICAgICAqICAgICAvLyBUaGlzIGlzIHJ1biBkdXJpbmcgY29uc3RydWN0aW9uIG9mIHRoZSBlbGVtZW50XG4gICAgICogICAgIG5ldyBNeUNvbnRyb2xsZXIoaW5zdGFuY2UpO1xuICAgICAqICAgfSk7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogRGVjb3JhdGluZyBhIGZpZWxkIHdpbGwgdGhlbiBjYXVzZSBlYWNoIGluc3RhbmNlIHRvIHJ1biBhbiBpbml0aWFsaXplclxuICAgICAqIHRoYXQgYWRkcyBhIGNvbnRyb2xsZXI6XG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGNsYXNzIE15RWxlbWVudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgICAqICAgQG15RGVjb3JhdG9yIGZvbztcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBJbml0aWFsaXplcnMgYXJlIHN0b3JlZCBwZXItY29uc3RydWN0b3IuIEFkZGluZyBhbiBpbml0aWFsaXplciB0byBhXG4gICAgICogc3ViY2xhc3MgZG9lcyBub3QgYWRkIGl0IHRvIGEgc3VwZXJjbGFzcy4gU2luY2UgaW5pdGlhbGl6ZXJzIGFyZSBydW4gaW5cbiAgICAgKiBjb25zdHJ1Y3RvcnMsIGluaXRpYWxpemVycyB3aWxsIHJ1biBpbiBvcmRlciBvZiB0aGUgY2xhc3MgaGllcmFyY2h5LFxuICAgICAqIHN0YXJ0aW5nIHdpdGggc3VwZXJjbGFzc2VzIGFuZCBwcm9ncmVzc2luZyB0byB0aGUgaW5zdGFuY2UncyBjbGFzcy5cbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICovXG4gICAgc3RhdGljIGFkZEluaXRpYWxpemVyKGluaXRpYWxpemVyKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5maW5hbGl6ZSgpO1xuICAgICAgICAoKF9hID0gdGhpcy5faW5pdGlhbGl6ZXJzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodGhpcy5faW5pdGlhbGl6ZXJzID0gW10pKS5wdXNoKGluaXRpYWxpemVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGxpc3Qgb2YgYXR0cmlidXRlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSByZWdpc3RlcmVkIHByb3BlcnRpZXMuXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKiBAY2F0ZWdvcnkgYXR0cmlidXRlc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICAvLyBub3RlOiBwaWdneSBiYWNraW5nIG9uIHRoaXMgdG8gZW5zdXJlIHdlJ3JlIGZpbmFsaXplZC5cbiAgICAgICAgdGhpcy5maW5hbGl6ZSgpO1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gW107XG4gICAgICAgIC8vIFVzZSBmb3JFYWNoIHNvIHRoaXMgd29ya3MgZXZlbiBpZiBmb3Ivb2YgbG9vcHMgYXJlIGNvbXBpbGVkIHRvIGZvciBsb29wc1xuICAgICAgICAvLyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuZm9yRWFjaCgodiwgcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuX19hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkocCwgdik7XG4gICAgICAgICAgICBpZiAoYXR0ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAuc2V0KGF0dHIsIHApO1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMucHVzaChhdHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhdHRyaWJ1dGVzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgcHJvcGVydHkgYWNjZXNzb3Igb24gdGhlIGVsZW1lbnQgcHJvdG90eXBlIGlmIG9uZSBkb2VzIG5vdCBleGlzdFxuICAgICAqIGFuZCBzdG9yZXMgYSB7QGxpbmtjb2RlIFByb3BlcnR5RGVjbGFyYXRpb259IGZvciB0aGUgcHJvcGVydHkgd2l0aCB0aGVcbiAgICAgKiBnaXZlbiBvcHRpb25zLiBUaGUgcHJvcGVydHkgc2V0dGVyIGNhbGxzIHRoZSBwcm9wZXJ0eSdzIGBoYXNDaGFuZ2VkYFxuICAgICAqIHByb3BlcnR5IG9wdGlvbiBvciB1c2VzIGEgc3RyaWN0IGlkZW50aXR5IGNoZWNrIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdFxuICAgICAqIHRvIHJlcXVlc3QgYW4gdXBkYXRlLlxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgbWF5IGJlIG92ZXJyaWRkZW4gdG8gY3VzdG9taXplIHByb3BlcnRpZXM7IGhvd2V2ZXIsXG4gICAgICogd2hlbiBkb2luZyBzbywgaXQncyBpbXBvcnRhbnQgdG8gY2FsbCBgc3VwZXIuY3JlYXRlUHJvcGVydHlgIHRvIGVuc3VyZVxuICAgICAqIHRoZSBwcm9wZXJ0eSBpcyBzZXR1cCBjb3JyZWN0bHkuIFRoaXMgbWV0aG9kIGNhbGxzXG4gICAgICogYGdldFByb3BlcnR5RGVzY3JpcHRvcmAgaW50ZXJuYWxseSB0byBnZXQgYSBkZXNjcmlwdG9yIHRvIGluc3RhbGwuXG4gICAgICogVG8gY3VzdG9taXplIHdoYXQgcHJvcGVydGllcyBkbyB3aGVuIHRoZXkgYXJlIGdldCBvciBzZXQsIG92ZXJyaWRlXG4gICAgICogYGdldFByb3BlcnR5RGVzY3JpcHRvcmAuIFRvIGN1c3RvbWl6ZSB0aGUgb3B0aW9ucyBmb3IgYSBwcm9wZXJ0eSxcbiAgICAgKiBpbXBsZW1lbnQgYGNyZWF0ZVByb3BlcnR5YCBsaWtlIHRoaXM6XG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIHN0YXRpYyBjcmVhdGVQcm9wZXJ0eShuYW1lLCBvcHRpb25zKSB7XG4gICAgICogICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7bXlPcHRpb246IHRydWV9KTtcbiAgICAgKiAgIHN1cGVyLmNyZWF0ZVByb3BlcnR5KG5hbWUsIG9wdGlvbnMpO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlUHJvcGVydHkobmFtZSwgb3B0aW9ucyA9IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBhIHN0YXRlIHByb3BlcnR5LCBmb3JjZSB0aGUgYXR0cmlidXRlIHRvIGZhbHNlLlxuICAgICAgICBpZiAob3B0aW9ucy5zdGF0ZSkge1xuICAgICAgICAgICAgLy8gQ2FzdCBhcyBhbnkgc2luY2UgdGhpcyBpcyByZWFkb25seS5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICBvcHRpb25zLmF0dHJpYnV0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdGUsIHNpbmNlIHRoaXMgY2FuIGJlIGNhbGxlZCBieSB0aGUgYEBwcm9wZXJ0eWAgZGVjb3JhdG9yIHdoaWNoXG4gICAgICAgIC8vIGlzIGNhbGxlZCBiZWZvcmUgYGZpbmFsaXplYCwgd2UgZW5zdXJlIGZpbmFsaXphdGlvbiBoYXMgYmVlbiBraWNrZWQgb2ZmLlxuICAgICAgICB0aGlzLmZpbmFsaXplKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuc2V0KG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICAvLyBEbyBub3QgZ2VuZXJhdGUgYW4gYWNjZXNzb3IgaWYgdGhlIHByb3RvdHlwZSBhbHJlYWR5IGhhcyBvbmUsIHNpbmNlXG4gICAgICAgIC8vIGl0IHdvdWxkIGJlIGxvc3Qgb3RoZXJ3aXNlIGFuZCB0aGF0IHdvdWxkIG5ldmVyIGJlIHRoZSB1c2VyJ3MgaW50ZW50aW9uO1xuICAgICAgICAvLyBJbnN0ZWFkLCB3ZSBleHBlY3QgdXNlcnMgdG8gY2FsbCBgcmVxdWVzdFVwZGF0ZWAgdGhlbXNlbHZlcyBmcm9tXG4gICAgICAgIC8vIHVzZXItZGVmaW5lZCBhY2Nlc3NvcnMuIE5vdGUgdGhhdCBpZiB0aGUgc3VwZXIgaGFzIGFuIGFjY2Vzc29yIHdlIHdpbGxcbiAgICAgICAgLy8gc3RpbGwgb3ZlcndyaXRlIGl0XG4gICAgICAgIGlmICghb3B0aW9ucy5ub0FjY2Vzc29yICYmICF0aGlzLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdHlwZW9mIG5hbWUgPT09ICdzeW1ib2wnID8gU3ltYm9sKCkgOiBgX18ke25hbWV9YDtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSB0aGlzLmdldFByb3BlcnR5RGVzY3JpcHRvcihuYW1lLCBrZXksIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLnByb3RvdHlwZSwgbmFtZSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgY2xhc3MgZG9lc24ndCBoYXZlIGl0cyBvd24gc2V0LCBjcmVhdGUgb25lIGFuZCBpbml0aWFsaXplXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpdGggdGhlIHZhbHVlcyBpbiB0aGUgc2V0IGZyb20gdGhlIG5lYXJlc3QgYW5jZXN0b3IgY2xhc3MsIGlmIGFueS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmhhc093blByb3BlcnR5KCdfX3JlYWN0aXZlUHJvcGVydHlLZXlzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19yZWFjdGl2ZVByb3BlcnR5S2V5cyA9IG5ldyBTZXQoKF9hID0gdGhpcy5fX3JlYWN0aXZlUHJvcGVydHlLZXlzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBbXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3JlYWN0aXZlUHJvcGVydHlLZXlzLmFkZChuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb3BlcnR5IGRlc2NyaXB0b3IgdG8gYmUgZGVmaW5lZCBvbiB0aGUgZ2l2ZW4gbmFtZWQgcHJvcGVydHkuXG4gICAgICogSWYgbm8gZGVzY3JpcHRvciBpcyByZXR1cm5lZCwgdGhlIHByb3BlcnR5IHdpbGwgbm90IGJlY29tZSBhbiBhY2Nlc3Nvci5cbiAgICAgKiBGb3IgZXhhbXBsZSxcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgICogICBzdGF0aWMgZ2V0UHJvcGVydHlEZXNjcmlwdG9yKG5hbWUsIGtleSwgb3B0aW9ucykge1xuICAgICAqICAgICBjb25zdCBkZWZhdWx0RGVzY3JpcHRvciA9XG4gICAgICogICAgICAgICBzdXBlci5nZXRQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSwga2V5LCBvcHRpb25zKTtcbiAgICAgKiAgICAgY29uc3Qgc2V0dGVyID0gZGVmYXVsdERlc2NyaXB0b3Iuc2V0O1xuICAgICAqICAgICByZXR1cm4ge1xuICAgICAqICAgICAgIGdldDogZGVmYXVsdERlc2NyaXB0b3IuZ2V0LFxuICAgICAqICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAqICAgICAgICAgc2V0dGVyLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAqICAgICAgICAgLy8gY3VzdG9tIGFjdGlvbi5cbiAgICAgKiAgICAgICB9LFxuICAgICAqICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgKiAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICogICAgIH1cbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBjYXRlZ29yeSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgc3RhdGljIGdldFByb3BlcnR5RGVzY3JpcHRvcihuYW1lLCBrZXksIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNba2V5XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXNbbmFtZV07XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKG5hbWUsIG9sZFZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBvcHRpb25zIGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4gcHJvcGVydHkuXG4gICAgICogVGhlc2Ugb3B0aW9ucyBhcmUgZGVmaW5lZCB3aXRoIGEgYFByb3BlcnR5RGVjbGFyYXRpb25gIHZpYSB0aGUgYHByb3BlcnRpZXNgXG4gICAgICogb2JqZWN0IG9yIHRoZSBgQHByb3BlcnR5YCBkZWNvcmF0b3IgYW5kIGFyZSByZWdpc3RlcmVkIGluXG4gICAgICogYGNyZWF0ZVByb3BlcnR5KC4uLilgLlxuICAgICAqXG4gICAgICogTm90ZSwgdGhpcyBtZXRob2Qgc2hvdWxkIGJlIGNvbnNpZGVyZWQgXCJmaW5hbFwiIGFuZCBub3Qgb3ZlcnJpZGRlbi4gVG9cbiAgICAgKiBjdXN0b21pemUgdGhlIG9wdGlvbnMgZm9yIGEgZ2l2ZW4gcHJvcGVydHksIG92ZXJyaWRlXG4gICAgICoge0BsaW5rY29kZSBjcmVhdGVQcm9wZXJ0eX0uXG4gICAgICpcbiAgICAgKiBAbm9jb2xsYXBzZVxuICAgICAqIEBmaW5hbFxuICAgICAqIEBjYXRlZ29yeSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgc3RhdGljIGdldFByb3BlcnR5T3B0aW9ucyhuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLmdldChuYW1lKSB8fCBkZWZhdWx0UHJvcGVydHlEZWNsYXJhdGlvbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBwcm9wZXJ0eSBhY2Nlc3NvcnMgZm9yIHJlZ2lzdGVyZWQgcHJvcGVydGllcywgc2V0cyB1cCBlbGVtZW50XG4gICAgICogc3R5bGluZywgYW5kIGVuc3VyZXMgYW55IHN1cGVyY2xhc3NlcyBhcmUgYWxzbyBmaW5hbGl6ZWQuIFJldHVybnMgdHJ1ZSBpZlxuICAgICAqIHRoZSBlbGVtZW50IHdhcyBmaW5hbGl6ZWQuXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluYWxpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGZpbmFsaXplZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzW2ZpbmFsaXplZF0gPSB0cnVlO1xuICAgICAgICAvLyBmaW5hbGl6ZSBhbnkgc3VwZXJjbGFzc2VzXG4gICAgICAgIGNvbnN0IHN1cGVyQ3RvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKTtcbiAgICAgICAgc3VwZXJDdG9yLmZpbmFsaXplKCk7XG4gICAgICAgIC8vIENyZWF0ZSBvd24gc2V0IG9mIGluaXRpYWxpemVycyBmb3IgdGhpcyBjbGFzcyBpZiBhbnkgZXhpc3Qgb24gdGhlXG4gICAgICAgIC8vIHN1cGVyY2xhc3MgYW5kIGNvcHkgdGhlbSBkb3duLiBOb3RlLCBmb3IgYSBzbWFsbCBwZXJmIGJvb3N0LCBhdm9pZFxuICAgICAgICAvLyBjcmVhdGluZyBpbml0aWFsaXplcnMgdW5sZXNzIG5lZWRlZC5cbiAgICAgICAgaWYgKHN1cGVyQ3Rvci5faW5pdGlhbGl6ZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2luaXRpYWxpemVycyA9IFsuLi5zdXBlckN0b3IuX2luaXRpYWxpemVyc107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50UHJvcGVydGllcyA9IG5ldyBNYXAoc3VwZXJDdG9yLmVsZW1lbnRQcm9wZXJ0aWVzKTtcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBNYXAgcG9wdWxhdGVkIGluIG9ic2VydmVkQXR0cmlidXRlc1xuICAgICAgICB0aGlzLl9fYXR0cmlidXRlVG9Qcm9wZXJ0eU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgLy8gbWFrZSBhbnkgcHJvcGVydGllc1xuICAgICAgICAvLyBOb3RlLCBvbmx5IHByb2Nlc3MgXCJvd25cIiBwcm9wZXJ0aWVzIHNpbmNlIHRoaXMgZWxlbWVudCB3aWxsIGluaGVyaXRcbiAgICAgICAgLy8gYW55IHByb3BlcnRpZXMgZGVmaW5lZCBvbiB0aGUgc3VwZXJDbGFzcywgYW5kIGZpbmFsaXphdGlvbiBlbnN1cmVzXG4gICAgICAgIC8vIHRoZSBlbnRpcmUgcHJvdG90eXBlIGNoYWluIGlzIGZpbmFsaXplZC5cbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgncHJvcGVydGllcycsIHRoaXMpKSkge1xuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BlcnRpZXM7XG4gICAgICAgICAgICAvLyBzdXBwb3J0IHN5bWJvbHMgaW4gcHJvcGVydGllcyAoSUUxMSBkb2VzIG5vdCBzdXBwb3J0IHRoaXMpXG4gICAgICAgICAgICBjb25zdCBwcm9wS2V5cyA9IFtcbiAgICAgICAgICAgICAgICAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm9wcyksXG4gICAgICAgICAgICAgICAgLi4uT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhwcm9wcyksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgLy8gVGhpcyBmb3Ivb2YgaXMgb2sgYmVjYXVzZSBwcm9wS2V5cyBpcyBhbiBhcnJheVxuICAgICAgICAgICAgZm9yIChjb25zdCBwIG9mIHByb3BLZXlzKSB7XG4gICAgICAgICAgICAgICAgLy8gbm90ZSwgdXNlIG9mIGBhbnlgIGlzIGR1ZSB0byBUeXBlU2NyaXB0IGxhY2sgb2Ygc3VwcG9ydCBmb3Igc3ltYm9sIGluXG4gICAgICAgICAgICAgICAgLy8gaW5kZXggdHlwZXNcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvcGVydHkocCwgcHJvcHNbcF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudFN0eWxlcyA9IHRoaXMuZmluYWxpemVTdHlsZXModGhpcy5zdHlsZXMpO1xuICAgICAgICAvLyBERVYgbW9kZSB3YXJuaW5nc1xuICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgIGNvbnN0IHdhcm5SZW1vdmVkT3JSZW5hbWVkID0gKG5hbWUsIHJlbmFtZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBpc3N1ZVdhcm5pbmcocmVuYW1lZCA/ICdyZW5hbWVkLWFwaScgOiAncmVtb3ZlZC1hcGknLCBgXFxgJHtuYW1lfVxcYCBpcyBpbXBsZW1lbnRlZCBvbiBjbGFzcyAke3RoaXMubmFtZX0uIEl0IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGhhcyBiZWVuICR7cmVuYW1lZCA/ICdyZW5hbWVkJyA6ICdyZW1vdmVkJ30gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgaW4gdGhpcyB2ZXJzaW9uIG9mIExpdEVsZW1lbnQuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHdhcm5SZW1vdmVkT3JSZW5hbWVkKCdpbml0aWFsaXplJyk7XG4gICAgICAgICAgICB3YXJuUmVtb3ZlZE9yUmVuYW1lZCgncmVxdWVzdFVwZGF0ZUludGVybmFsJyk7XG4gICAgICAgICAgICB3YXJuUmVtb3ZlZE9yUmVuYW1lZCgnX2dldFVwZGF0ZUNvbXBsZXRlJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRha2VzIHRoZSBzdHlsZXMgdGhlIHVzZXIgc3VwcGxpZWQgdmlhIHRoZSBgc3RhdGljIHN0eWxlc2AgcHJvcGVydHkgYW5kXG4gICAgICogcmV0dXJucyB0aGUgYXJyYXkgb2Ygc3R5bGVzIHRvIGFwcGx5IHRvIHRoZSBlbGVtZW50LlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGludGVncmF0ZSBpbnRvIGEgc3R5bGUgbWFuYWdlbWVudCBzeXN0ZW0uXG4gICAgICpcbiAgICAgKiBTdHlsZXMgYXJlIGRlZHVwbGljYXRlZCBwcmVzZXJ2aW5nIHRoZSBfbGFzdF8gaW5zdGFuY2UgaW4gdGhlIGxpc3QuIFRoaXNcbiAgICAgKiBpcyBhIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbiB0byBhdm9pZCBkdXBsaWNhdGVkIHN0eWxlcyB0aGF0IGNhbiBvY2N1clxuICAgICAqIGVzcGVjaWFsbHkgd2hlbiBjb21wb3NpbmcgdmlhIHN1YmNsYXNzaW5nLiBUaGUgbGFzdCBpdGVtIGlzIGtlcHQgdG8gdHJ5XG4gICAgICogdG8gcHJlc2VydmUgdGhlIGNhc2NhZGUgb3JkZXIgd2l0aCB0aGUgYXNzdW1wdGlvbiB0aGF0IGl0J3MgbW9zdCBpbXBvcnRhbnRcbiAgICAgKiB0aGF0IGxhc3QgYWRkZWQgc3R5bGVzIG92ZXJyaWRlIHByZXZpb3VzIHN0eWxlcy5cbiAgICAgKlxuICAgICAqIEBub2NvbGxhcHNlXG4gICAgICogQGNhdGVnb3J5IHN0eWxlc1xuICAgICAqL1xuICAgIHN0YXRpYyBmaW5hbGl6ZVN0eWxlcyhzdHlsZXMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudFN0eWxlcyA9IFtdO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZXMpKSB7XG4gICAgICAgICAgICAvLyBEZWR1cGUgdGhlIGZsYXR0ZW5lZCBhcnJheSBpbiByZXZlcnNlIG9yZGVyIHRvIHByZXNlcnZlIHRoZSBsYXN0IGl0ZW1zLlxuICAgICAgICAgICAgLy8gQ2FzdGluZyB0byBBcnJheTx1bmtub3duPiB3b3JrcyBhcm91bmQgVFMgZXJyb3IgdGhhdFxuICAgICAgICAgICAgLy8gYXBwZWFycyB0byBjb21lIGZyb20gdHJ5aW5nIHRvIGZsYXR0ZW4gYSB0eXBlIENTU1Jlc3VsdEFycmF5LlxuICAgICAgICAgICAgY29uc3Qgc2V0ID0gbmV3IFNldChzdHlsZXMuZmxhdChJbmZpbml0eSkucmV2ZXJzZSgpKTtcbiAgICAgICAgICAgIC8vIFRoZW4gcHJlc2VydmUgb3JpZ2luYWwgb3JkZXIgYnkgYWRkaW5nIHRoZSBzZXQgaXRlbXMgaW4gcmV2ZXJzZSBvcmRlci5cbiAgICAgICAgICAgIGZvciAoY29uc3QgcyBvZiBzZXQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50U3R5bGVzLnVuc2hpZnQoZ2V0Q29tcGF0aWJsZVN0eWxlKHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZWxlbWVudFN0eWxlcy5wdXNoKGdldENvbXBhdGlibGVTdHlsZShzdHlsZXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudFN0eWxlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJvcGVydHkgbmFtZSBmb3IgdGhlIGdpdmVuIGF0dHJpYnV0ZSBgbmFtZWAuXG4gICAgICogQG5vY29sbGFwc2VcbiAgICAgKi9cbiAgICBzdGF0aWMgX19hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkobmFtZSwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBvcHRpb25zLmF0dHJpYnV0ZTtcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZSA9PT0gZmFsc2VcbiAgICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgICA6IHR5cGVvZiBhdHRyaWJ1dGUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICA6IHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICA/IG5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgb25seSBvdmVycmlkZSBwb2ludCBmb3IgY3VzdG9taXppbmcgd29yayBkb25lIHdoZW4gZWxlbWVudHNcbiAgICAgKiBhcmUgY29uc3RydWN0ZWQuXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLl9fdXBkYXRlUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXMpID0+ICh0aGlzLmVuYWJsZVVwZGF0aW5nID0gcmVzKSk7XG4gICAgICAgIHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fX3NhdmVJbnN0YW5jZVByb3BlcnRpZXMoKTtcbiAgICAgICAgLy8gZW5zdXJlcyBmaXJzdCB1cGRhdGUgd2lsbCBiZSBjYXVnaHQgYnkgYW4gZWFybHkgYWNjZXNzIG9mXG4gICAgICAgIC8vIGB1cGRhdGVDb21wbGV0ZWBcbiAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgICAgIChfYSA9IHRoaXMuY29uc3RydWN0b3IuX2luaXRpYWxpemVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKGkpID0+IGkodGhpcykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSBgUmVhY3RpdmVDb250cm9sbGVyYCB0byBwYXJ0aWNpcGF0ZSBpbiB0aGUgZWxlbWVudCdzIHJlYWN0aXZlXG4gICAgICogdXBkYXRlIGN5Y2xlLiBUaGUgZWxlbWVudCBhdXRvbWF0aWNhbGx5IGNhbGxzIGludG8gYW55IHJlZ2lzdGVyZWRcbiAgICAgKiBjb250cm9sbGVycyBkdXJpbmcgaXRzIGxpZmVjeWNsZSBjYWxsYmFja3MuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgZWxlbWVudCBpcyBjb25uZWN0ZWQgd2hlbiBgYWRkQ29udHJvbGxlcigpYCBpcyBjYWxsZWQsIHRoZVxuICAgICAqIGNvbnRyb2xsZXIncyBgaG9zdENvbm5lY3RlZCgpYCBjYWxsYmFjayB3aWxsIGJlIGltbWVkaWF0ZWx5IGNhbGxlZC5cbiAgICAgKiBAY2F0ZWdvcnkgY29udHJvbGxlcnNcbiAgICAgKi9cbiAgICBhZGRDb250cm9sbGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgKChfYSA9IHRoaXMuX19jb250cm9sbGVycykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKHRoaXMuX19jb250cm9sbGVycyA9IFtdKSkucHVzaChjb250cm9sbGVyKTtcbiAgICAgICAgLy8gSWYgYSBjb250cm9sbGVyIGlzIGFkZGVkIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBiZWVuIGNvbm5lY3RlZCxcbiAgICAgICAgLy8gY2FsbCBob3N0Q29ubmVjdGVkLiBOb3RlLCByZS11c2luZyBleGlzdGVuY2Ugb2YgYHJlbmRlclJvb3RgIGhlcmVcbiAgICAgICAgLy8gKHdoaWNoIGlzIHNldCBpbiBjb25uZWN0ZWRDYWxsYmFjaykgdG8gYXZvaWQgdGhlIG5lZWQgdG8gdHJhY2sgYVxuICAgICAgICAvLyBmaXJzdCBjb25uZWN0ZWQgc3RhdGUuXG4gICAgICAgIGlmICh0aGlzLnJlbmRlclJvb3QgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAoX2IgPSBjb250cm9sbGVyLmhvc3RDb25uZWN0ZWQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKGNvbnRyb2xsZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBgUmVhY3RpdmVDb250cm9sbGVyYCBmcm9tIHRoZSBlbGVtZW50LlxuICAgICAqIEBjYXRlZ29yeSBjb250cm9sbGVyc1xuICAgICAqL1xuICAgIHJlbW92ZUNvbnRyb2xsZXIoY29udHJvbGxlcikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIE5vdGUsIGlmIHRoZSBpbmRleE9mIGlzIC0xLCB0aGUgPj4+IHdpbGwgZmxpcCB0aGUgc2lnbiB3aGljaCBtYWtlcyB0aGVcbiAgICAgICAgLy8gc3BsaWNlIGRvIG5vdGhpbmcuXG4gICAgICAgIChfYSA9IHRoaXMuX19jb250cm9sbGVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNwbGljZSh0aGlzLl9fY29udHJvbGxlcnMuaW5kZXhPZihjb250cm9sbGVyKSA+Pj4gMCwgMSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpeGVzIGFueSBwcm9wZXJ0aWVzIHNldCBvbiB0aGUgaW5zdGFuY2UgYmVmb3JlIHVwZ3JhZGUgdGltZS5cbiAgICAgKiBPdGhlcndpc2UgdGhlc2Ugd291bGQgc2hhZG93IHRoZSBhY2Nlc3NvciBhbmQgYnJlYWsgdGhlc2UgcHJvcGVydGllcy5cbiAgICAgKiBUaGUgcHJvcGVydGllcyBhcmUgc3RvcmVkIGluIGEgTWFwIHdoaWNoIGlzIHBsYXllZCBiYWNrIGFmdGVyIHRoZVxuICAgICAqIGNvbnN0cnVjdG9yIHJ1bnMuIE5vdGUsIG9uIHZlcnkgb2xkIHZlcnNpb25zIG9mIFNhZmFyaSAoPD05KSBvciBDaHJvbWVcbiAgICAgKiAoPD00MSksIHByb3BlcnRpZXMgY3JlYXRlZCBmb3IgbmF0aXZlIHBsYXRmb3JtIHByb3BlcnRpZXMgbGlrZSAoYGlkYCBvclxuICAgICAqIGBuYW1lYCkgbWF5IG5vdCBoYXZlIGRlZmF1bHQgdmFsdWVzIHNldCBpbiB0aGUgZWxlbWVudCBjb25zdHJ1Y3Rvci4gT25cbiAgICAgKiB0aGVzZSBicm93c2VycyBuYXRpdmUgcHJvcGVydGllcyBhcHBlYXIgb24gaW5zdGFuY2VzIGFuZCB0aGVyZWZvcmUgdGhlaXJcbiAgICAgKiBkZWZhdWx0IHZhbHVlIHdpbGwgb3ZlcndyaXRlIGFueSBlbGVtZW50IGRlZmF1bHQgKGUuZy4gaWYgdGhlIGVsZW1lbnQgc2V0c1xuICAgICAqIHRoaXMuaWQgPSAnaWQnIGluIHRoZSBjb25zdHJ1Y3RvciwgdGhlICdpZCcgd2lsbCBiZWNvbWUgJycgc2luY2UgdGhpcyBpc1xuICAgICAqIHRoZSBuYXRpdmUgcGxhdGZvcm0gZGVmYXVsdCkuXG4gICAgICovXG4gICAgX19zYXZlSW5zdGFuY2VQcm9wZXJ0aWVzKCkge1xuICAgICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3IgbG9vcHNcbiAgICAgICAgLy8gZXhwZWN0aW5nIGFycmF5c1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmVsZW1lbnRQcm9wZXJ0aWVzLmZvckVhY2goKF92LCBwKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMuc2V0KHAsIHRoaXNbcF0pO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzW3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbm9kZSBpbnRvIHdoaWNoIHRoZSBlbGVtZW50IHNob3VsZCByZW5kZXIgYW5kIGJ5IGRlZmF1bHRcbiAgICAgKiBjcmVhdGVzIGFuZCByZXR1cm5zIGFuIG9wZW4gc2hhZG93Um9vdC4gSW1wbGVtZW50IHRvIGN1c3RvbWl6ZSB3aGVyZSB0aGVcbiAgICAgKiBlbGVtZW50J3MgRE9NIGlzIHJlbmRlcmVkLiBGb3IgZXhhbXBsZSwgdG8gcmVuZGVyIGludG8gdGhlIGVsZW1lbnQnc1xuICAgICAqIGNoaWxkTm9kZXMsIHJldHVybiBgdGhpc2AuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIFJldHVybnMgYSBub2RlIGludG8gd2hpY2ggdG8gcmVuZGVyLlxuICAgICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICAgKi9cbiAgICBjcmVhdGVSZW5kZXJSb290KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHJlbmRlclJvb3QgPSAoX2EgPSB0aGlzLnNoYWRvd1Jvb3QpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHRoaXMuYXR0YWNoU2hhZG93KHRoaXMuY29uc3RydWN0b3Iuc2hhZG93Um9vdE9wdGlvbnMpO1xuICAgICAgICBhZG9wdFN0eWxlcyhyZW5kZXJSb290LCB0aGlzLmNvbnN0cnVjdG9yLmVsZW1lbnRTdHlsZXMpO1xuICAgICAgICByZXR1cm4gcmVuZGVyUm9vdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT24gZmlyc3QgY29ubmVjdGlvbiwgY3JlYXRlcyB0aGUgZWxlbWVudCdzIHJlbmRlclJvb3QsIHNldHMgdXBcbiAgICAgKiBlbGVtZW50IHN0eWxpbmcsIGFuZCBlbmFibGVzIHVwZGF0aW5nLlxuICAgICAqIEBjYXRlZ29yeSBsaWZlY3ljbGVcbiAgICAgKi9cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBjcmVhdGUgcmVuZGVyUm9vdCBiZWZvcmUgZmlyc3QgdXBkYXRlLlxuICAgICAgICBpZiAodGhpcy5yZW5kZXJSb290ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUm9vdCA9IHRoaXMuY3JlYXRlUmVuZGVyUm9vdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5hYmxlVXBkYXRpbmcodHJ1ZSk7XG4gICAgICAgIChfYSA9IHRoaXMuX19jb250cm9sbGVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKGMpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gYy5ob3N0Q29ubmVjdGVkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjKTsgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE5vdGUsIHRoaXMgbWV0aG9kIHNob3VsZCBiZSBjb25zaWRlcmVkIGZpbmFsIGFuZCBub3Qgb3ZlcnJpZGRlbi4gSXQgaXNcbiAgICAgKiBvdmVycmlkZGVuIG9uIHRoZSBlbGVtZW50IGluc3RhbmNlIHdpdGggYSBmdW5jdGlvbiB0aGF0IHRyaWdnZXJzIHRoZSBmaXJzdFxuICAgICAqIHVwZGF0ZS5cbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGVuYWJsZVVwZGF0aW5nKF9yZXF1ZXN0ZWRVcGRhdGUpIHsgfVxuICAgIC8qKlxuICAgICAqIEFsbG93cyBmb3IgYHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKClgIGluIGV4dGVuc2lvbnMgd2hpbGVcbiAgICAgKiByZXNlcnZpbmcgdGhlIHBvc3NpYmlsaXR5IG9mIG1ha2luZyBub24tYnJlYWtpbmcgZmVhdHVyZSBhZGRpdGlvbnNcbiAgICAgKiB3aGVuIGRpc2Nvbm5lY3RpbmcgYXQgc29tZSBwb2ludCBpbiB0aGUgZnV0dXJlLlxuICAgICAqIEBjYXRlZ29yeSBsaWZlY3ljbGVcbiAgICAgKi9cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChjKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IGMuaG9zdERpc2Nvbm5lY3RlZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoYyk7IH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTeW5jaHJvbml6ZXMgcHJvcGVydHkgdmFsdWVzIHdoZW4gYXR0cmlidXRlcyBjaGFuZ2UuXG4gICAgICpcbiAgICAgKiBTcGVjaWZpY2FsbHksIHdoZW4gYW4gYXR0cmlidXRlIGlzIHNldCwgdGhlIGNvcnJlc3BvbmRpbmcgcHJvcGVydHkgaXMgc2V0LlxuICAgICAqIFlvdSBzaG91bGQgcmFyZWx5IG5lZWQgdG8gaW1wbGVtZW50IHRoaXMgY2FsbGJhY2suIElmIHRoaXMgbWV0aG9kIGlzXG4gICAgICogb3ZlcnJpZGRlbiwgYHN1cGVyLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBfb2xkLCB2YWx1ZSlgIG11c3QgYmVcbiAgICAgKiBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBTZWUgW3VzaW5nIHRoZSBsaWZlY3ljbGUgY2FsbGJhY2tzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9XZWJfQ29tcG9uZW50cy9Vc2luZ19jdXN0b21fZWxlbWVudHMjdXNpbmdfdGhlX2xpZmVjeWNsZV9jYWxsYmFja3MpXG4gICAgICogb24gTUROIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYC5cbiAgICAgKiBAY2F0ZWdvcnkgYXR0cmlidXRlc1xuICAgICAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBfb2xkLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl8kYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIF9fcHJvcGVydHlUb0F0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgb3B0aW9ucyA9IGRlZmF1bHRQcm9wZXJ0eURlY2xhcmF0aW9uKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgYXR0ciA9IHRoaXMuY29uc3RydWN0b3IuX19hdHRyaWJ1dGVOYW1lRm9yUHJvcGVydHkobmFtZSwgb3B0aW9ucyk7XG4gICAgICAgIGlmIChhdHRyICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5yZWZsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0ZXIgPSAoKF9hID0gb3B0aW9ucy5jb252ZXJ0ZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b0F0dHJpYnV0ZSkgIT09XG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyBvcHRpb25zLmNvbnZlcnRlclxuICAgICAgICAgICAgICAgIDogZGVmYXVsdENvbnZlcnRlcjtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IGNvbnZlcnRlci50b0F0dHJpYnV0ZSh2YWx1ZSwgb3B0aW9ucy50eXBlKTtcbiAgICAgICAgICAgIGlmIChERVZfTU9ERSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuZW5hYmxlZFdhcm5pbmdzLmluZGV4T2YoJ21pZ3JhdGlvbicpID49IDAgJiZcbiAgICAgICAgICAgICAgICBhdHRyVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlzc3VlV2FybmluZygndW5kZWZpbmVkLWF0dHJpYnV0ZS12YWx1ZScsIGBUaGUgYXR0cmlidXRlIHZhbHVlIGZvciB0aGUgJHtuYW1lfSBwcm9wZXJ0eSBpcyBgICtcbiAgICAgICAgICAgICAgICAgICAgYHVuZGVmaW5lZCBvbiBlbGVtZW50ICR7dGhpcy5sb2NhbE5hbWV9LiBUaGUgYXR0cmlidXRlIHdpbGwgYmUgYCArXG4gICAgICAgICAgICAgICAgICAgIGByZW1vdmVkLCBidXQgaW4gdGhlIHByZXZpb3VzIHZlcnNpb24gb2YgXFxgUmVhY3RpdmVFbGVtZW50XFxgLCBgICtcbiAgICAgICAgICAgICAgICAgICAgYHRoZSBhdHRyaWJ1dGUgd291bGQgbm90IGhhdmUgY2hhbmdlZC5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRyYWNrIGlmIHRoZSBwcm9wZXJ0eSBpcyBiZWluZyByZWZsZWN0ZWQgdG8gYXZvaWRcbiAgICAgICAgICAgIC8vIHNldHRpbmcgdGhlIHByb3BlcnR5IGFnYWluIHZpYSBgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrYC4gTm90ZTpcbiAgICAgICAgICAgIC8vIDEuIHRoaXMgdGFrZXMgYWR2YW50YWdlIG9mIHRoZSBmYWN0IHRoYXQgdGhlIGNhbGxiYWNrIGlzIHN5bmNocm9ub3VzLlxuICAgICAgICAgICAgLy8gMi4gd2lsbCBiZWhhdmUgaW5jb3JyZWN0bHkgaWYgbXVsdGlwbGUgYXR0cmlidXRlcyBhcmUgaW4gdGhlIHJlYWN0aW9uXG4gICAgICAgICAgICAvLyBzdGFjayBhdCB0aW1lIG9mIGNhbGxpbmcuIEhvd2V2ZXIsIHNpbmNlIHdlIHByb2Nlc3MgYXR0cmlidXRlc1xuICAgICAgICAgICAgLy8gaW4gYHVwZGF0ZWAgdGhpcyBzaG91bGQgbm90IGJlIHBvc3NpYmxlIChvciBhbiBleHRyZW1lIGNvcm5lciBjYXNlXG4gICAgICAgICAgICAvLyB0aGF0IHdlJ2QgbGlrZSB0byBkaXNjb3ZlcikuXG4gICAgICAgICAgICAvLyBtYXJrIHN0YXRlIHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBuYW1lO1xuICAgICAgICAgICAgaWYgKGF0dHJWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFyayBzdGF0ZSBub3QgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kYXR0cmlidXRlVG9Qcm9wZXJ0eShuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICAvLyBOb3RlLCBoaW50IHRoaXMgYXMgYW4gYEF0dHJpYnV0ZU1hcGAgc28gY2xvc3VyZSBjbGVhcmx5IHVuZGVyc3RhbmRzXG4gICAgICAgIC8vIHRoZSB0eXBlOyBpdCBoYXMgaXNzdWVzIHdpdGggdHJhY2tpbmcgdHlwZXMgdGhyb3VnaCBzdGF0aWNzXG4gICAgICAgIGNvbnN0IHByb3BOYW1lID0gY3Rvci5fX2F0dHJpYnV0ZVRvUHJvcGVydHlNYXAuZ2V0KG5hbWUpO1xuICAgICAgICAvLyBVc2UgdHJhY2tpbmcgaW5mbyB0byBhdm9pZCByZWZsZWN0aW5nIGEgcHJvcGVydHkgdmFsdWUgdG8gYW4gYXR0cmlidXRlXG4gICAgICAgIC8vIGlmIGl0IHdhcyBqdXN0IHNldCBiZWNhdXNlIHRoZSBhdHRyaWJ1dGUgY2hhbmdlZC5cbiAgICAgICAgaWYgKHByb3BOYW1lICE9PSB1bmRlZmluZWQgJiYgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSAhPT0gcHJvcE5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjdG9yLmdldFByb3BlcnR5T3B0aW9ucyhwcm9wTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0ZXIgPSB0eXBlb2Ygb3B0aW9ucy5jb252ZXJ0ZXIgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/IHsgZnJvbUF0dHJpYnV0ZTogb3B0aW9ucy5jb252ZXJ0ZXIgfVxuICAgICAgICAgICAgICAgIDogKChfYSA9IG9wdGlvbnMuY29udmVydGVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZnJvbUF0dHJpYnV0ZSkgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA/IG9wdGlvbnMuY29udmVydGVyXG4gICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdENvbnZlcnRlcjtcbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgcmVmbGVjdGluZ1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSA9IHByb3BOYW1lO1xuICAgICAgICAgICAgdGhpc1twcm9wTmFtZV0gPSBjb252ZXJ0ZXIuZnJvbUF0dHJpYnV0ZSh2YWx1ZSwgb3B0aW9ucy50eXBlXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIG1hcmsgc3RhdGUgbm90IHJlZmxlY3RpbmdcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydHkgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcXVlc3RzIGFuIHVwZGF0ZSB3aGljaCBpcyBwcm9jZXNzZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgc2hvdWxkIGJlIGNhbGxlZFxuICAgICAqIHdoZW4gYW4gZWxlbWVudCBzaG91bGQgdXBkYXRlIGJhc2VkIG9uIHNvbWUgc3RhdGUgbm90IHRyaWdnZXJlZCBieSBzZXR0aW5nXG4gICAgICogYSByZWFjdGl2ZSBwcm9wZXJ0eS4gSW4gdGhpcyBjYXNlLCBwYXNzIG5vIGFyZ3VtZW50cy4gSXQgc2hvdWxkIGFsc28gYmVcbiAgICAgKiBjYWxsZWQgd2hlbiBtYW51YWxseSBpbXBsZW1lbnRpbmcgYSBwcm9wZXJ0eSBzZXR0ZXIuIEluIHRoaXMgY2FzZSwgcGFzcyB0aGVcbiAgICAgKiBwcm9wZXJ0eSBgbmFtZWAgYW5kIGBvbGRWYWx1ZWAgdG8gZW5zdXJlIHRoYXQgYW55IGNvbmZpZ3VyZWQgcHJvcGVydHlcbiAgICAgKiBvcHRpb25zIGFyZSBob25vcmVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUgbmFtZSBvZiByZXF1ZXN0aW5nIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9sZFZhbHVlIG9sZCB2YWx1ZSBvZiByZXF1ZXN0aW5nIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9wdGlvbnMgcHJvcGVydHkgb3B0aW9ucyB0byB1c2UgaW5zdGVhZCBvZiB0aGUgcHJldmlvdXNseVxuICAgICAqICAgICBjb25maWd1cmVkIG9wdGlvbnNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHJlcXVlc3RVcGRhdGUobmFtZSwgb2xkVmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHNob3VsZFJlcXVlc3RVcGRhdGUgPSB0cnVlO1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgcHJvcGVydHkga2V5LCBwZXJmb3JtIHByb3BlcnR5IHVwZGF0ZSBzdGVwcy5cbiAgICAgICAgaWYgKG5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb3B0aW9ucyA9XG4gICAgICAgICAgICAgICAgb3B0aW9ucyB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmdldFByb3BlcnR5T3B0aW9ucyhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGhhc0NoYW5nZWQgPSBvcHRpb25zLmhhc0NoYW5nZWQgfHwgbm90RXF1YWw7XG4gICAgICAgICAgICBpZiAoaGFzQ2hhbmdlZCh0aGlzW25hbWVdLCBvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzLnNldChuYW1lLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFkZCB0byByZWZsZWN0aW5nIHByb3BlcnRpZXMgc2V0LlxuICAgICAgICAgICAgICAgIC8vIE5vdGUsIGl0J3MgaW1wb3J0YW50IHRoYXQgZXZlcnkgY2hhbmdlIGhhcyBhIGNoYW5jZSB0byBhZGQgdGhlXG4gICAgICAgICAgICAgICAgLy8gcHJvcGVydHkgdG8gYF9yZWZsZWN0aW5nUHJvcGVydGllc2AuIFRoaXMgZW5zdXJlcyBzZXR0aW5nXG4gICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlICsgcHJvcGVydHkgcmVmbGVjdHMgY29ycmVjdGx5LlxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnJlZmxlY3QgPT09IHRydWUgJiYgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0eSAhPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0aW5nUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMuc2V0KG5hbWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEFib3J0IHRoZSByZXF1ZXN0IGlmIHRoZSBwcm9wZXJ0eSBzaG91bGQgbm90IGJlIGNvbnNpZGVyZWQgY2hhbmdlZC5cbiAgICAgICAgICAgICAgICBzaG91bGRSZXF1ZXN0VXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzVXBkYXRlUGVuZGluZyAmJiBzaG91bGRSZXF1ZXN0VXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9fdXBkYXRlUHJvbWlzZSA9IHRoaXMuX19lbnF1ZXVlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm90ZSwgc2luY2UgdGhpcyBubyBsb25nZXIgcmV0dXJucyBhIHByb21pc2UsIGluIGRldiBtb2RlIHdlIHJldHVybiBhXG4gICAgICAgIC8vIHRoZW5hYmxlIHdoaWNoIHdhcm5zIGlmIGl0J3MgY2FsbGVkLlxuICAgICAgICByZXR1cm4gREVWX01PREVcbiAgICAgICAgICAgID8gcmVxdWVzdFVwZGF0ZVRoZW5hYmxlKHRoaXMubG9jYWxOYW1lKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgdGhlIGVsZW1lbnQgdG8gYXN5bmNocm9ub3VzbHkgdXBkYXRlLlxuICAgICAqL1xuICAgIGFzeW5jIF9fZW5xdWV1ZVVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGFueSBwcmV2aW91cyB1cGRhdGUgaGFzIHJlc29sdmVkIGJlZm9yZSB1cGRhdGluZy5cbiAgICAgICAgICAgIC8vIFRoaXMgYGF3YWl0YCBhbHNvIGVuc3VyZXMgdGhhdCBwcm9wZXJ0eSBjaGFuZ2VzIGFyZSBiYXRjaGVkLlxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fX3VwZGF0ZVByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFJlZmlyZSBhbnkgcHJldmlvdXMgZXJyb3JzIGFzeW5jIHNvIHRoZXkgZG8gbm90IGRpc3J1cHQgdGhlIHVwZGF0ZVxuICAgICAgICAgICAgLy8gY3ljbGUuIEVycm9ycyBhcmUgcmVmaXJlZCBzbyBkZXZlbG9wZXJzIGhhdmUgYSBjaGFuY2UgdG8gb2JzZXJ2ZVxuICAgICAgICAgICAgLy8gdGhlbSwgYW5kIHRoaXMgY2FuIGJlIGRvbmUgYnkgaW1wbGVtZW50aW5nXG4gICAgICAgICAgICAvLyBgd2luZG93Lm9udW5oYW5kbGVkcmVqZWN0aW9uYC5cbiAgICAgICAgICAgIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2NoZWR1bGVVcGRhdGUoKTtcbiAgICAgICAgLy8gSWYgYHNjaGVkdWxlVXBkYXRlYCByZXR1cm5zIGEgUHJvbWlzZSwgd2UgYXdhaXQgaXQuIFRoaXMgaXMgZG9uZSB0b1xuICAgICAgICAvLyBlbmFibGUgY29vcmRpbmF0aW5nIHVwZGF0ZXMgd2l0aCBhIHNjaGVkdWxlci4gTm90ZSwgdGhlIHJlc3VsdCBpc1xuICAgICAgICAvLyBjaGVja2VkIHRvIGF2b2lkIGRlbGF5aW5nIGFuIGFkZGl0aW9uYWwgbWljcm90YXNrIHVubGVzcyB3ZSBuZWVkIHRvLlxuICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gIXRoaXMuaXNVcGRhdGVQZW5kaW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTY2hlZHVsZXMgYW4gZWxlbWVudCB1cGRhdGUuIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2hhbmdlIHRoZVxuICAgICAqIHRpbWluZyBvZiB1cGRhdGVzIGJ5IHJldHVybmluZyBhIFByb21pc2UuIFRoZSB1cGRhdGUgd2lsbCBhd2FpdCB0aGVcbiAgICAgKiByZXR1cm5lZCBQcm9taXNlLCBhbmQgeW91IHNob3VsZCByZXNvbHZlIHRoZSBQcm9taXNlIHRvIGFsbG93IHRoZSB1cGRhdGVcbiAgICAgKiB0byBwcm9jZWVkLiBJZiB0aGlzIG1ldGhvZCBpcyBvdmVycmlkZGVuLCBgc3VwZXIuc2NoZWR1bGVVcGRhdGUoKWBcbiAgICAgKiBtdXN0IGJlIGNhbGxlZC5cbiAgICAgKlxuICAgICAqIEZvciBpbnN0YW5jZSwgdG8gc2NoZWR1bGUgdXBkYXRlcyB0byBvY2N1ciBqdXN0IGJlZm9yZSB0aGUgbmV4dCBmcmFtZTpcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogb3ZlcnJpZGUgcHJvdGVjdGVkIGFzeW5jIHNjaGVkdWxlVXBkYXRlKCk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgICAqICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiByZXNvbHZlKCkpKTtcbiAgICAgKiAgIHN1cGVyLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgc2NoZWR1bGVVcGRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBlcmZvcm1VcGRhdGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYW4gZWxlbWVudCB1cGRhdGUuIE5vdGUsIGlmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZVxuICAgICAqIHVwZGF0ZSwgYGZpcnN0VXBkYXRlZGAgYW5kIGB1cGRhdGVkYCB3aWxsIG5vdCBiZSBjYWxsZWQuXG4gICAgICpcbiAgICAgKiBDYWxsIGBwZXJmb3JtVXBkYXRlKClgIHRvIGltbWVkaWF0ZWx5IHByb2Nlc3MgYSBwZW5kaW5nIHVwZGF0ZS4gVGhpcyBzaG91bGRcbiAgICAgKiBnZW5lcmFsbHkgbm90IGJlIG5lZWRlZCwgYnV0IGl0IGNhbiBiZSBkb25lIGluIHJhcmUgY2FzZXMgd2hlbiB5b3UgbmVlZCB0b1xuICAgICAqIHVwZGF0ZSBzeW5jaHJvbm91c2x5LlxuICAgICAqXG4gICAgICogTm90ZTogVG8gZW5zdXJlIGBwZXJmb3JtVXBkYXRlKClgIHN5bmNocm9ub3VzbHkgY29tcGxldGVzIGEgcGVuZGluZyB1cGRhdGUsXG4gICAgICogaXQgc2hvdWxkIG5vdCBiZSBvdmVycmlkZGVuLiBJbiBMaXRFbGVtZW50IDIueCBpdCB3YXMgc3VnZ2VzdGVkIHRvIG92ZXJyaWRlXG4gICAgICogYHBlcmZvcm1VcGRhdGUoKWAgdG8gYWxzbyBjdXN0b21pemluZyB1cGRhdGUgc2NoZWR1bGluZy4gSW5zdGVhZCwgeW91IHNob3VsZCBub3dcbiAgICAgKiBvdmVycmlkZSBgc2NoZWR1bGVVcGRhdGUoKWAuIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIExpdEVsZW1lbnQgMi54LFxuICAgICAqIHNjaGVkdWxpbmcgdXBkYXRlcyB2aWEgYHBlcmZvcm1VcGRhdGUoKWAgY29udGludWVzIHRvIHdvcmssIGJ1dCB3aWxsIG1ha2VcbiAgICAgKiBhbHNvIGNhbGxpbmcgYHBlcmZvcm1VcGRhdGUoKWAgdG8gc3luY2hyb25vdXNseSBwcm9jZXNzIHVwZGF0ZXMgZGlmZmljdWx0LlxuICAgICAqXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICBwZXJmb3JtVXBkYXRlKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAvLyBBYm9ydCBhbnkgdXBkYXRlIGlmIG9uZSBpcyBub3QgcGVuZGluZyB3aGVuIHRoaXMgaXMgY2FsbGVkLlxuICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgYHBlcmZvcm1VcGRhdGVgIGlzIGNhbGxlZCBlYXJseSB0byBcImZsdXNoXCJcbiAgICAgICAgLy8gdGhlIHVwZGF0ZS5cbiAgICAgICAgaWYgKCF0aGlzLmlzVXBkYXRlUGVuZGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7IGtpbmQ6ICd1cGRhdGUnIH0pO1xuICAgICAgICAvLyBjcmVhdGUgcmVuZGVyUm9vdCBiZWZvcmUgZmlyc3QgdXBkYXRlLlxuICAgICAgICBpZiAoIXRoaXMuaGFzVXBkYXRlZCkge1xuICAgICAgICAgICAgLy8gUHJvZHVjZSB3YXJuaW5nIGlmIGFueSBjbGFzcyBwcm9wZXJ0aWVzIGFyZSBzaGFkb3dlZCBieSBjbGFzcyBmaWVsZHNcbiAgICAgICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoYWRvd2VkUHJvcGVydGllcyA9IFtdO1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29uc3RydWN0b3IuX19yZWFjdGl2ZVByb3BlcnR5S2V5cykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwKSAmJiAhKChfYSA9IHRoaXMuX19pbnN0YW5jZVByb3BlcnRpZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5oYXMocCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dlZFByb3BlcnRpZXMucHVzaChwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChzaGFkb3dlZFByb3BlcnRpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIG9uIGVsZW1lbnQgJHt0aGlzLmxvY2FsTmFtZX0gd2lsbCBub3QgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgdHJpZ2dlciB1cGRhdGVzIGFzIGV4cGVjdGVkIGJlY2F1c2UgdGhleSBhcmUgc2V0IHVzaW5nIGNsYXNzIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGZpZWxkczogJHtzaGFkb3dlZFByb3BlcnRpZXMuam9pbignLCAnKX0uIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYE5hdGl2ZSBjbGFzcyBmaWVsZHMgYW5kIHNvbWUgY29tcGlsZWQgb3V0cHV0IHdpbGwgb3ZlcndyaXRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGFjY2Vzc29ycyB1c2VkIGZvciBkZXRlY3RpbmcgY2hhbmdlcy4gU2VlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGh0dHBzOi8vbGl0LmRldi9tc2cvY2xhc3MtZmllbGQtc2hhZG93aW5nIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGZvciBtb3JlIGluZm9ybWF0aW9uLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBNaXhpbiBpbnN0YW5jZSBwcm9wZXJ0aWVzIG9uY2UsIGlmIHRoZXkgZXhpc3QuXG4gICAgICAgIGlmICh0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICAvLyBVc2UgZm9yRWFjaCBzbyB0aGlzIHdvcmtzIGV2ZW4gaWYgZm9yL29mIGxvb3BzIGFyZSBjb21waWxlZCB0byBmb3IgbG9vcHNcbiAgICAgICAgICAgIC8vIGV4cGVjdGluZyBhcnJheXNcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VQcm9wZXJ0aWVzLmZvckVhY2goKHYsIHApID0+ICh0aGlzW3BdID0gdikpO1xuICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlUHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNoYW5nZWRQcm9wZXJ0aWVzID0gdGhpcy5fJGNoYW5nZWRQcm9wZXJ0aWVzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gdGhpcy5zaG91bGRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5fX2NvbnRyb2xsZXJzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoYykgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBjLmhvc3RVcGRhdGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fbWFya1VwZGF0ZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gUHJldmVudCBgZmlyc3RVcGRhdGVkYCBhbmQgYHVwZGF0ZWRgIGZyb20gcnVubmluZyB3aGVuIHRoZXJlJ3MgYW5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBleGNlcHRpb24uXG4gICAgICAgICAgICBzaG91bGRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIEVuc3VyZSBlbGVtZW50IGNhbiBhY2NlcHQgYWRkaXRpb25hbCB1cGRhdGVzIGFmdGVyIGFuIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIHRoaXMuX19tYXJrVXBkYXRlZCgpO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgdXBkYXRlIGlzIG5vIGxvbmdlciBjb25zaWRlcmVkIHBlbmRpbmcgYW5kIGZ1cnRoZXIgdXBkYXRlcyBhcmUgbm93IGFsbG93ZWQuXG4gICAgICAgIGlmIChzaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuXyRkaWRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgYmVmb3JlIGB1cGRhdGUoKWAgdG8gY29tcHV0ZSB2YWx1ZXMgbmVlZGVkIGR1cmluZyB0aGUgdXBkYXRlLlxuICAgICAqXG4gICAgICogSW1wbGVtZW50IGB3aWxsVXBkYXRlYCB0byBjb21wdXRlIHByb3BlcnR5IHZhbHVlcyB0aGF0IGRlcGVuZCBvbiBvdGhlclxuICAgICAqIHByb3BlcnRpZXMgYW5kIGFyZSB1c2VkIGluIHRoZSByZXN0IG9mIHRoZSB1cGRhdGUgcHJvY2Vzcy5cbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogd2lsbFVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcykge1xuICAgICAqICAgLy8gb25seSBuZWVkIHRvIGNoZWNrIGNoYW5nZWQgcHJvcGVydGllcyBmb3IgYW4gZXhwZW5zaXZlIGNvbXB1dGF0aW9uLlxuICAgICAqICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcygnZmlyc3ROYW1lJykgfHwgY2hhbmdlZFByb3BlcnRpZXMuaGFzKCdsYXN0TmFtZScpKSB7XG4gICAgICogICAgIHRoaXMuc2hhID0gY29tcHV0ZVNIQShgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWApO1xuICAgICAqICAgfVxuICAgICAqIH1cbiAgICAgKlxuICAgICAqIHJlbmRlcigpIHtcbiAgICAgKiAgIHJldHVybiBodG1sYFNIQTogJHt0aGlzLnNoYX1gO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgd2lsbFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpIHsgfVxuICAgIC8vIE5vdGUsIHRoaXMgaXMgYW4gb3ZlcnJpZGUgcG9pbnQgZm9yIHBvbHlmaWxsLXN1cHBvcnQuXG4gICAgLy8gQGludGVybmFsXG4gICAgXyRkaWRVcGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl9fY29udHJvbGxlcnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChjKSA9PiB7IHZhciBfYTsgcmV0dXJuIChfYSA9IGMuaG9zdFVwZGF0ZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGMpOyB9KTtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1VwZGF0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzVXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICAgICAgaWYgKERFVl9NT0RFICYmXG4gICAgICAgICAgICB0aGlzLmlzVXBkYXRlUGVuZGluZyAmJlxuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5lbmFibGVkV2FybmluZ3MuaW5kZXhPZignY2hhbmdlLWluLXVwZGF0ZScpID49IDApIHtcbiAgICAgICAgICAgIGlzc3VlV2FybmluZygnY2hhbmdlLWluLXVwZGF0ZScsIGBFbGVtZW50ICR7dGhpcy5sb2NhbE5hbWV9IHNjaGVkdWxlZCBhbiB1cGRhdGUgYCArXG4gICAgICAgICAgICAgICAgYChnZW5lcmFsbHkgYmVjYXVzZSBhIHByb3BlcnR5IHdhcyBzZXQpIGAgK1xuICAgICAgICAgICAgICAgIGBhZnRlciBhbiB1cGRhdGUgY29tcGxldGVkLCBjYXVzaW5nIGEgbmV3IHVwZGF0ZSB0byBiZSBzY2hlZHVsZWQuIGAgK1xuICAgICAgICAgICAgICAgIGBUaGlzIGlzIGluZWZmaWNpZW50IGFuZCBzaG91bGQgYmUgYXZvaWRlZCB1bmxlc3MgdGhlIG5leHQgdXBkYXRlIGAgK1xuICAgICAgICAgICAgICAgIGBjYW4gb25seSBiZSBzY2hlZHVsZWQgYXMgYSBzaWRlIGVmZmVjdCBvZiB0aGUgcHJldmlvdXMgdXBkYXRlLmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9fbWFya1VwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMuXyRjaGFuZ2VkUHJvcGVydGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5pc1VwZGF0ZVBlbmRpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBlbGVtZW50IGhhcyBjb21wbGV0ZWQgdXBkYXRpbmcuXG4gICAgICogVGhlIFByb21pc2UgdmFsdWUgaXMgYSBib29sZWFuIHRoYXQgaXMgYHRydWVgIGlmIHRoZSBlbGVtZW50IGNvbXBsZXRlZCB0aGVcbiAgICAgKiB1cGRhdGUgd2l0aG91dCB0cmlnZ2VyaW5nIGFub3RoZXIgdXBkYXRlLiBUaGUgUHJvbWlzZSByZXN1bHQgaXMgYGZhbHNlYCBpZlxuICAgICAqIGEgcHJvcGVydHkgd2FzIHNldCBpbnNpZGUgYHVwZGF0ZWQoKWAuIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBhblxuICAgICAqIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyB0aGUgdXBkYXRlLlxuICAgICAqXG4gICAgICogVG8gYXdhaXQgYWRkaXRpb25hbCBhc3luY2hyb25vdXMgd29yaywgb3ZlcnJpZGUgdGhlIGBnZXRVcGRhdGVDb21wbGV0ZWBcbiAgICAgKiBtZXRob2QuIEZvciBleGFtcGxlLCBpdCBpcyBzb21ldGltZXMgdXNlZnVsIHRvIGF3YWl0IGEgcmVuZGVyZWQgZWxlbWVudFxuICAgICAqIGJlZm9yZSBmdWxmaWxsaW5nIHRoaXMgUHJvbWlzZS4gVG8gZG8gdGhpcywgZmlyc3QgYXdhaXRcbiAgICAgKiBgc3VwZXIuZ2V0VXBkYXRlQ29tcGxldGUoKWAsIHRoZW4gYW55IHN1YnNlcXVlbnQgc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSBvZiBhIGJvb2xlYW4gdGhhdCByZXNvbHZlcyB0byB0cnVlIGlmIHRoZSB1cGRhdGUgY29tcGxldGVkXG4gICAgICogICAgIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS5cbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGdldCB1cGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VXBkYXRlQ29tcGxldGUoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgcG9pbnQgZm9yIHRoZSBgdXBkYXRlQ29tcGxldGVgIHByb21pc2UuXG4gICAgICpcbiAgICAgKiBJdCBpcyBub3Qgc2FmZSB0byBvdmVycmlkZSB0aGUgYHVwZGF0ZUNvbXBsZXRlYCBnZXR0ZXIgZGlyZWN0bHkgZHVlIHRvIGFcbiAgICAgKiBsaW1pdGF0aW9uIGluIFR5cGVTY3JpcHQgd2hpY2ggbWVhbnMgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGNhbGwgYVxuICAgICAqIHN1cGVyY2xhc3MgZ2V0dGVyIChlLmcuIGBzdXBlci51cGRhdGVDb21wbGV0ZS50aGVuKC4uLilgKSB3aGVuIHRoZSB0YXJnZXRcbiAgICAgKiBsYW5ndWFnZSBpcyBFUzUgKGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMzM4KS5cbiAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgb3ZlcnJpZGRlbiBpbnN0ZWFkLiBGb3IgZXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogY2xhc3MgTXlFbGVtZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgICogICBvdmVycmlkZSBhc3luYyBnZXRVcGRhdGVDb21wbGV0ZSgpIHtcbiAgICAgKiAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VwZXIuZ2V0VXBkYXRlQ29tcGxldGUoKTtcbiAgICAgKiAgICAgYXdhaXQgdGhpcy5fbXlDaGlsZC51cGRhdGVDb21wbGV0ZTtcbiAgICAgKiAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIEEgcHJvbWlzZSBvZiBhIGJvb2xlYW4gdGhhdCByZXNvbHZlcyB0byB0cnVlIGlmIHRoZSB1cGRhdGUgY29tcGxldGVkXG4gICAgICogICAgIHdpdGhvdXQgdHJpZ2dlcmluZyBhbm90aGVyIHVwZGF0ZS5cbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIGdldFVwZGF0ZUNvbXBsZXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3VwZGF0ZVByb21pc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnRyb2xzIHdoZXRoZXIgb3Igbm90IGB1cGRhdGUoKWAgc2hvdWxkIGJlIGNhbGxlZCB3aGVuIHRoZSBlbGVtZW50IHJlcXVlc3RzXG4gICAgICogYW4gdXBkYXRlLiBCeSBkZWZhdWx0LCB0aGlzIG1ldGhvZCBhbHdheXMgcmV0dXJucyBgdHJ1ZWAsIGJ1dCB0aGlzIGNhbiBiZVxuICAgICAqIGN1c3RvbWl6ZWQgdG8gY29udHJvbCB3aGVuIHRvIHVwZGF0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBfY2hhbmdlZFByb3BlcnRpZXMgTWFwIG9mIGNoYW5nZWQgcHJvcGVydGllcyB3aXRoIG9sZCB2YWx1ZXNcbiAgICAgKiBAY2F0ZWdvcnkgdXBkYXRlc1xuICAgICAqL1xuICAgIHNob3VsZFVwZGF0ZShfY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGVsZW1lbnQuIFRoaXMgbWV0aG9kIHJlZmxlY3RzIHByb3BlcnR5IHZhbHVlcyB0byBhdHRyaWJ1dGVzLlxuICAgICAqIEl0IGNhbiBiZSBvdmVycmlkZGVuIHRvIHJlbmRlciBhbmQga2VlcCB1cGRhdGVkIGVsZW1lbnQgRE9NLlxuICAgICAqIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGUgdGhpcyBtZXRob2Qgd2lsbCAqbm90KiB0cmlnZ2VyXG4gICAgICogYW5vdGhlciB1cGRhdGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gX2NoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICB1cGRhdGUoX2NoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmICh0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gVXNlIGZvckVhY2ggc28gdGhpcyB3b3JrcyBldmVuIGlmIGZvci9vZiBsb29wcyBhcmUgY29tcGlsZWQgdG8gZm9yXG4gICAgICAgICAgICAvLyBsb29wcyBleHBlY3RpbmcgYXJyYXlzXG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdGluZ1Byb3BlcnRpZXMuZm9yRWFjaCgodiwgaykgPT4gdGhpcy5fX3Byb3BlcnR5VG9BdHRyaWJ1dGUoaywgdGhpc1trXSwgdikpO1xuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RpbmdQcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19tYXJrVXBkYXRlZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2VkIHdoZW5ldmVyIHRoZSBlbGVtZW50IGlzIHVwZGF0ZWQuIEltcGxlbWVudCB0byBwZXJmb3JtXG4gICAgICogcG9zdC11cGRhdGluZyB0YXNrcyB2aWEgRE9NIEFQSXMsIGZvciBleGFtcGxlLCBmb2N1c2luZyBhbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAgICogYWdhaW4gYWZ0ZXIgdGhpcyB1cGRhdGUgY3ljbGUgY29tcGxldGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgdXBkYXRlZChfY2hhbmdlZFByb3BlcnRpZXMpIHsgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBmaXJzdCB1cGRhdGVkLiBJbXBsZW1lbnQgdG8gcGVyZm9ybSBvbmUgdGltZVxuICAgICAqIHdvcmsgb24gdGhlIGVsZW1lbnQgYWZ0ZXIgdXBkYXRlLlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICogICB0aGlzLnJlbmRlclJvb3QuZ2V0RWxlbWVudEJ5SWQoJ215LXRleHQtYXJlYScpLmZvY3VzKCk7XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogU2V0dGluZyBwcm9wZXJ0aWVzIGluc2lkZSB0aGlzIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhlIGVsZW1lbnQgdG8gdXBkYXRlXG4gICAgICogYWdhaW4gYWZ0ZXIgdGhpcyB1cGRhdGUgY3ljbGUgY29tcGxldGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIF9jaGFuZ2VkUHJvcGVydGllcyBNYXAgb2YgY2hhbmdlZCBwcm9wZXJ0aWVzIHdpdGggb2xkIHZhbHVlc1xuICAgICAqIEBjYXRlZ29yeSB1cGRhdGVzXG4gICAgICovXG4gICAgZmlyc3RVcGRhdGVkKF9jaGFuZ2VkUHJvcGVydGllcykgeyB9XG59XG5fZSA9IGZpbmFsaXplZDtcbi8qKlxuICogTWFya3MgY2xhc3MgYXMgaGF2aW5nIGZpbmlzaGVkIGNyZWF0aW5nIHByb3BlcnRpZXMuXG4gKi9cblJlYWN0aXZlRWxlbWVudFtfZV0gPSB0cnVlO1xuLyoqXG4gKiBNZW1vaXplZCBsaXN0IG9mIGFsbCBlbGVtZW50IHByb3BlcnRpZXMsIGluY2x1ZGluZyBhbnkgc3VwZXJjbGFzcyBwcm9wZXJ0aWVzLlxuICogQ3JlYXRlZCBsYXppbHkgb24gdXNlciBzdWJjbGFzc2VzIHdoZW4gZmluYWxpemluZyB0aGUgY2xhc3MuXG4gKiBAbm9jb2xsYXBzZVxuICogQGNhdGVnb3J5IHByb3BlcnRpZXNcbiAqL1xuUmVhY3RpdmVFbGVtZW50LmVsZW1lbnRQcm9wZXJ0aWVzID0gbmV3IE1hcCgpO1xuLyoqXG4gKiBNZW1vaXplZCBsaXN0IG9mIGFsbCBlbGVtZW50IHN0eWxlcy5cbiAqIENyZWF0ZWQgbGF6aWx5IG9uIHVzZXIgc3ViY2xhc3NlcyB3aGVuIGZpbmFsaXppbmcgdGhlIGNsYXNzLlxuICogQG5vY29sbGFwc2VcbiAqIEBjYXRlZ29yeSBzdHlsZXNcbiAqL1xuUmVhY3RpdmVFbGVtZW50LmVsZW1lbnRTdHlsZXMgPSBbXTtcbi8qKlxuICogT3B0aW9ucyB1c2VkIHdoZW4gY2FsbGluZyBgYXR0YWNoU2hhZG93YC4gU2V0IHRoaXMgcHJvcGVydHkgdG8gY3VzdG9taXplXG4gKiB0aGUgb3B0aW9ucyBmb3IgdGhlIHNoYWRvd1Jvb3Q7IGZvciBleGFtcGxlLCB0byBjcmVhdGUgYSBjbG9zZWRcbiAqIHNoYWRvd1Jvb3Q6IGB7bW9kZTogJ2Nsb3NlZCd9YC5cbiAqXG4gKiBOb3RlLCB0aGVzZSBvcHRpb25zIGFyZSB1c2VkIGluIGBjcmVhdGVSZW5kZXJSb290YC4gSWYgdGhpcyBtZXRob2RcbiAqIGlzIGN1c3RvbWl6ZWQsIG9wdGlvbnMgc2hvdWxkIGJlIHJlc3BlY3RlZCBpZiBwb3NzaWJsZS5cbiAqIEBub2NvbGxhcHNlXG4gKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gKi9cblJlYWN0aXZlRWxlbWVudC5zaGFkb3dSb290T3B0aW9ucyA9IHsgbW9kZTogJ29wZW4nIH07XG4vLyBBcHBseSBwb2x5ZmlsbHMgaWYgYXZhaWxhYmxlXG5wb2x5ZmlsbFN1cHBvcnQgPT09IG51bGwgfHwgcG9seWZpbGxTdXBwb3J0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwb2x5ZmlsbFN1cHBvcnQoeyBSZWFjdGl2ZUVsZW1lbnQgfSk7XG4vLyBEZXYgbW9kZSB3YXJuaW5ncy4uLlxuaWYgKERFVl9NT0RFKSB7XG4gICAgLy8gRGVmYXVsdCB3YXJuaW5nIHNldC5cbiAgICBSZWFjdGl2ZUVsZW1lbnQuZW5hYmxlZFdhcm5pbmdzID0gWydjaGFuZ2UtaW4tdXBkYXRlJ107XG4gICAgY29uc3QgZW5zdXJlT3duV2FybmluZ3MgPSBmdW5jdGlvbiAoY3Rvcikge1xuICAgICAgICBpZiAoIWN0b3IuaGFzT3duUHJvcGVydHkoSlNDb21waWxlcl9yZW5hbWVQcm9wZXJ0eSgnZW5hYmxlZFdhcm5pbmdzJywgY3RvcikpKSB7XG4gICAgICAgICAgICBjdG9yLmVuYWJsZWRXYXJuaW5ncyA9IGN0b3IuZW5hYmxlZFdhcm5pbmdzLnNsaWNlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aXZlRWxlbWVudC5lbmFibGVXYXJuaW5nID0gZnVuY3Rpb24gKHdhcm5pbmcpIHtcbiAgICAgICAgZW5zdXJlT3duV2FybmluZ3ModGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWRXYXJuaW5ncy5pbmRleE9mKHdhcm5pbmcpIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVkV2FybmluZ3MucHVzaCh3YXJuaW5nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVhY3RpdmVFbGVtZW50LmRpc2FibGVXYXJuaW5nID0gZnVuY3Rpb24gKHdhcm5pbmcpIHtcbiAgICAgICAgZW5zdXJlT3duV2FybmluZ3ModGhpcyk7XG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLmVuYWJsZWRXYXJuaW5ncy5pbmRleE9mKHdhcm5pbmcpO1xuICAgICAgICBpZiAoaSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZWRXYXJuaW5ncy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuLy8gSU1QT1JUQU5UOiBkbyBub3QgY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIG9yIHRoZSBhc3NpZ25tZW50IGV4cHJlc3Npb24uXG4vLyBUaGlzIGxpbmUgd2lsbCBiZSB1c2VkIGluIHJlZ2V4ZXMgdG8gc2VhcmNoIGZvciBSZWFjdGl2ZUVsZW1lbnQgdXNhZ2UuXG4oKF9kID0gZ2xvYmFsLnJlYWN0aXZlRWxlbWVudFZlcnNpb25zKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAoZ2xvYmFsLnJlYWN0aXZlRWxlbWVudFZlcnNpb25zID0gW10pKS5wdXNoKCcxLjYuMScpO1xuaWYgKERFVl9NT0RFICYmIGdsb2JhbC5yZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucy5sZW5ndGggPiAxKSB7XG4gICAgaXNzdWVXYXJuaW5nKCdtdWx0aXBsZS12ZXJzaW9ucycsIGBNdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXQgbG9hZGVkLiBMb2FkaW5nIG11bHRpcGxlIHZlcnNpb25zIGAgK1xuICAgICAgICBgaXMgbm90IHJlY29tbWVuZGVkLmApO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3RpdmUtZWxlbWVudC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbnZhciBfYSwgX2IsIF9jO1xuLyoqXG4gKiBUaGUgbWFpbiBMaXRFbGVtZW50IG1vZHVsZSwgd2hpY2ggZGVmaW5lcyB0aGUge0BsaW5rY29kZSBMaXRFbGVtZW50fSBiYXNlXG4gKiBjbGFzcyBhbmQgcmVsYXRlZCBBUElzLlxuICpcbiAqICBMaXRFbGVtZW50IGNvbXBvbmVudHMgY2FuIGRlZmluZSBhIHRlbXBsYXRlIGFuZCBhIHNldCBvZiBvYnNlcnZlZFxuICogcHJvcGVydGllcy4gQ2hhbmdpbmcgYW4gb2JzZXJ2ZWQgcHJvcGVydHkgdHJpZ2dlcnMgYSByZS1yZW5kZXIgb2YgdGhlXG4gKiBlbGVtZW50LlxuICpcbiAqICBJbXBvcnQge0BsaW5rY29kZSBMaXRFbGVtZW50fSBhbmQge0BsaW5rY29kZSBodG1sfSBmcm9tIHRoaXMgbW9kdWxlIHRvXG4gKiBjcmVhdGUgYSBjb21wb25lbnQ6XG4gKlxuICogIGBgYGpzXG4gKiBpbXBvcnQge0xpdEVsZW1lbnQsIGh0bWx9IGZyb20gJ2xpdC1lbGVtZW50JztcbiAqXG4gKiBjbGFzcyBNeUVsZW1lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAqXG4gKiAgIC8vIERlY2xhcmUgb2JzZXJ2ZWQgcHJvcGVydGllc1xuICogICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gKiAgICAgcmV0dXJuIHtcbiAqICAgICAgIGFkamVjdGl2ZToge31cbiAqICAgICB9XG4gKiAgIH1cbiAqXG4gKiAgIGNvbnN0cnVjdG9yKCkge1xuICogICAgIHRoaXMuYWRqZWN0aXZlID0gJ2F3ZXNvbWUnO1xuICogICB9XG4gKlxuICogICAvLyBEZWZpbmUgdGhlIGVsZW1lbnQncyB0ZW1wbGF0ZVxuICogICByZW5kZXIoKSB7XG4gKiAgICAgcmV0dXJuIGh0bWxgPHA+eW91ciAke2FkamVjdGl2ZX0gdGVtcGxhdGUgaGVyZTwvcD5gO1xuICogICB9XG4gKiB9XG4gKlxuICogY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1lbGVtZW50JywgTXlFbGVtZW50KTtcbiAqIGBgYFxuICpcbiAqIGBMaXRFbGVtZW50YCBleHRlbmRzIHtAbGlua2NvZGUgUmVhY3RpdmVFbGVtZW50fSBhbmQgYWRkcyBsaXQtaHRtbFxuICogdGVtcGxhdGluZy4gVGhlIGBSZWFjdGl2ZUVsZW1lbnRgIGNsYXNzIGlzIHByb3ZpZGVkIGZvciB1c2VycyB0aGF0IHdhbnQgdG9cbiAqIGJ1aWxkIHRoZWlyIG93biBjdXN0b20gZWxlbWVudCBiYXNlIGNsYXNzZXMgdGhhdCBkb24ndCB1c2UgbGl0LWh0bWwuXG4gKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cbmltcG9ydCB7IFJlYWN0aXZlRWxlbWVudCB9IGZyb20gJ0BsaXQvcmVhY3RpdmUtZWxlbWVudCc7XG5pbXBvcnQgeyByZW5kZXIsIG5vQ2hhbmdlIH0gZnJvbSAnbGl0LWh0bWwnO1xuZXhwb3J0ICogZnJvbSAnQGxpdC9yZWFjdGl2ZS1lbGVtZW50JztcbmV4cG9ydCAqIGZyb20gJ2xpdC1odG1sJztcbi8vIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBleHBvcnQgUmVhY3RpdmVFbGVtZW50IGFzIFVwZGF0aW5nRWxlbWVudC4gTm90ZSxcbi8vIElFIHRyYW5zcGlsYXRpb24gcmVxdWlyZXMgZXhwb3J0aW5nIGxpa2UgdGhpcy5cbmV4cG9ydCBjb25zdCBVcGRhdGluZ0VsZW1lbnQgPSBSZWFjdGl2ZUVsZW1lbnQ7XG5jb25zdCBERVZfTU9ERSA9IHRydWU7XG5sZXQgaXNzdWVXYXJuaW5nO1xuaWYgKERFVl9NT0RFKSB7XG4gICAgLy8gRW5zdXJlIHdhcm5pbmdzIGFyZSBpc3N1ZWQgb25seSAxeCwgZXZlbiBpZiBtdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXRcbiAgICAvLyBhcmUgbG9hZGVkLlxuICAgIGNvbnN0IGlzc3VlZFdhcm5pbmdzID0gKChfYSA9IGdsb2JhbFRoaXMubGl0SXNzdWVkV2FybmluZ3MpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IChnbG9iYWxUaGlzLmxpdElzc3VlZFdhcm5pbmdzID0gbmV3IFNldCgpKSk7XG4gICAgLy8gSXNzdWUgYSB3YXJuaW5nLCBpZiB3ZSBoYXZlbid0IGFscmVhZHkuXG4gICAgaXNzdWVXYXJuaW5nID0gKGNvZGUsIHdhcm5pbmcpID0+IHtcbiAgICAgICAgd2FybmluZyArPSBgIFNlZSBodHRwczovL2xpdC5kZXYvbXNnLyR7Y29kZX0gZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgaWYgKCFpc3N1ZWRXYXJuaW5ncy5oYXMod2FybmluZykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbiAgICAgICAgICAgIGlzc3VlZFdhcm5pbmdzLmFkZCh3YXJuaW5nKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4vKipcbiAqIEJhc2UgZWxlbWVudCBjbGFzcyB0aGF0IG1hbmFnZXMgZWxlbWVudCBwcm9wZXJ0aWVzIGFuZCBhdHRyaWJ1dGVzLCBhbmRcbiAqIHJlbmRlcnMgYSBsaXQtaHRtbCB0ZW1wbGF0ZS5cbiAqXG4gKiBUbyBkZWZpbmUgYSBjb21wb25lbnQsIHN1YmNsYXNzIGBMaXRFbGVtZW50YCBhbmQgaW1wbGVtZW50IGFcbiAqIGByZW5kZXJgIG1ldGhvZCB0byBwcm92aWRlIHRoZSBjb21wb25lbnQncyB0ZW1wbGF0ZS4gRGVmaW5lIHByb3BlcnRpZXNcbiAqIHVzaW5nIHRoZSB7QGxpbmtjb2RlIExpdEVsZW1lbnQucHJvcGVydGllcyBwcm9wZXJ0aWVzfSBwcm9wZXJ0eSBvciB0aGVcbiAqIHtAbGlua2NvZGUgcHJvcGVydHl9IGRlY29yYXRvci5cbiAqL1xuZXhwb3J0IGNsYXNzIExpdEVsZW1lbnQgZXh0ZW5kcyBSZWFjdGl2ZUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGNhdGVnb3J5IHJlbmRlcmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZW5kZXJPcHRpb25zID0geyBob3N0OiB0aGlzIH07XG4gICAgICAgIHRoaXMuX19jaGlsZFBhcnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBjYXRlZ29yeSByZW5kZXJpbmdcbiAgICAgKi9cbiAgICBjcmVhdGVSZW5kZXJSb290KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBfYjtcbiAgICAgICAgY29uc3QgcmVuZGVyUm9vdCA9IHN1cGVyLmNyZWF0ZVJlbmRlclJvb3QoKTtcbiAgICAgICAgLy8gV2hlbiBhZG9wdGVkU3R5bGVTaGVldHMgYXJlIHNoaW1tZWQsIHRoZXkgYXJlIGluc2VydGVkIGludG8gdGhlXG4gICAgICAgIC8vIHNoYWRvd1Jvb3QgYnkgY3JlYXRlUmVuZGVyUm9vdC4gQWRqdXN0IHRoZSByZW5kZXJCZWZvcmUgbm9kZSBzbyB0aGF0XG4gICAgICAgIC8vIGFueSBzdHlsZXMgaW4gTGl0IGNvbnRlbnQgcmVuZGVyIGJlZm9yZSBhZG9wdGVkU3R5bGVTaGVldHMuIFRoaXMgaXNcbiAgICAgICAgLy8gaW1wb3J0YW50IHNvIHRoYXQgYWRvcHRlZFN0eWxlU2hlZXRzIGhhdmUgcHJlY2VkZW5jZSBvdmVyIHN0eWxlcyBpblxuICAgICAgICAvLyB0aGUgc2hhZG93Um9vdC5cbiAgICAgICAgKF9hID0gKF9iID0gdGhpcy5yZW5kZXJPcHRpb25zKS5yZW5kZXJCZWZvcmUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IChfYi5yZW5kZXJCZWZvcmUgPSByZW5kZXJSb290LmZpcnN0Q2hpbGQpO1xuICAgICAgICByZXR1cm4gcmVuZGVyUm9vdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZWxlbWVudC4gVGhpcyBtZXRob2QgcmVmbGVjdHMgcHJvcGVydHkgdmFsdWVzIHRvIGF0dHJpYnV0ZXNcbiAgICAgKiBhbmQgY2FsbHMgYHJlbmRlcmAgdG8gcmVuZGVyIERPTSB2aWEgbGl0LWh0bWwuIFNldHRpbmcgcHJvcGVydGllcyBpbnNpZGVcbiAgICAgKiB0aGlzIG1ldGhvZCB3aWxsICpub3QqIHRyaWdnZXIgYW5vdGhlciB1cGRhdGUuXG4gICAgICogQHBhcmFtIGNoYW5nZWRQcm9wZXJ0aWVzIE1hcCBvZiBjaGFuZ2VkIHByb3BlcnRpZXMgd2l0aCBvbGQgdmFsdWVzXG4gICAgICogQGNhdGVnb3J5IHVwZGF0ZXNcbiAgICAgKi9cbiAgICB1cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpIHtcbiAgICAgICAgLy8gU2V0dGluZyBwcm9wZXJ0aWVzIGluIGByZW5kZXJgIHNob3VsZCBub3QgdHJpZ2dlciBhbiB1cGRhdGUuIFNpbmNlXG4gICAgICAgIC8vIHVwZGF0ZXMgYXJlIGFsbG93ZWQgYWZ0ZXIgc3VwZXIudXBkYXRlLCBpdCdzIGltcG9ydGFudCB0byBjYWxsIGByZW5kZXJgXG4gICAgICAgIC8vIGJlZm9yZSB0aGF0LlxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucmVuZGVyKCk7XG4gICAgICAgIGlmICghdGhpcy5oYXNVcGRhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlck9wdGlvbnMuaXNDb25uZWN0ZWQgPSB0aGlzLmlzQ29ubmVjdGVkO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgICAgIHRoaXMuX19jaGlsZFBhcnQgPSByZW5kZXIodmFsdWUsIHRoaXMucmVuZGVyUm9vdCwgdGhpcy5yZW5kZXJPcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgYWRkZWQgdG8gdGhlIGRvY3VtZW50J3MgRE9NLlxuICAgICAqXG4gICAgICogSW4gYGNvbm5lY3RlZENhbGxiYWNrKClgIHlvdSBzaG91bGQgc2V0dXAgdGFza3MgdGhhdCBzaG91bGQgb25seSBvY2N1ciB3aGVuXG4gICAgICogdGhlIGVsZW1lbnQgaXMgY29ubmVjdGVkIHRvIHRoZSBkb2N1bWVudC4gVGhlIG1vc3QgY29tbW9uIG9mIHRoZXNlIGlzXG4gICAgICogYWRkaW5nIGV2ZW50IGxpc3RlbmVycyB0byBub2RlcyBleHRlcm5hbCB0byB0aGUgZWxlbWVudCwgbGlrZSBhIGtleWRvd25cbiAgICAgKiBldmVudCBoYW5kbGVyIGFkZGVkIHRvIHRoZSB3aW5kb3cuXG4gICAgICpcbiAgICAgKiBgYGB0c1xuICAgICAqIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAqICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgKiAgIGFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVLZXlkb3duKTtcbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBUeXBpY2FsbHksIGFueXRoaW5nIGRvbmUgaW4gYGNvbm5lY3RlZENhbGxiYWNrKClgIHNob3VsZCBiZSB1bmRvbmUgd2hlbiB0aGVcbiAgICAgKiBlbGVtZW50IGlzIGRpc2Nvbm5lY3RlZCwgaW4gYGRpc2Nvbm5lY3RlZENhbGxiYWNrKClgLlxuICAgICAqXG4gICAgICogQGNhdGVnb3J5IGxpZmVjeWNsZVxuICAgICAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIChfYSA9IHRoaXMuX19jaGlsZFBhcnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRDb25uZWN0ZWQodHJ1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIHJlbW92ZWQgZnJvbSB0aGUgZG9jdW1lbnQncyBET00uXG4gICAgICpcbiAgICAgKiBUaGlzIGNhbGxiYWNrIGlzIHRoZSBtYWluIHNpZ25hbCB0byB0aGUgZWxlbWVudCB0aGF0IGl0IG1heSBubyBsb25nZXIgYmVcbiAgICAgKiB1c2VkLiBgZGlzY29ubmVjdGVkQ2FsbGJhY2soKWAgc2hvdWxkIGVuc3VyZSB0aGF0IG5vdGhpbmcgaXMgaG9sZGluZyBhXG4gICAgICogcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IChzdWNoIGFzIGV2ZW50IGxpc3RlbmVycyBhZGRlZCB0byBub2RlcyBleHRlcm5hbFxuICAgICAqIHRvIHRoZSBlbGVtZW50KSwgc28gdGhhdCBpdCBpcyBmcmVlIHRvIGJlIGdhcmJhZ2UgY29sbGVjdGVkLlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgKiAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICogICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUtleWRvd24pO1xuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEFuIGVsZW1lbnQgbWF5IGJlIHJlLWNvbm5lY3RlZCBhZnRlciBiZWluZyBkaXNjb25uZWN0ZWQuXG4gICAgICpcbiAgICAgKiBAY2F0ZWdvcnkgbGlmZWN5Y2xlXG4gICAgICovXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgKF9hID0gdGhpcy5fX2NoaWxkUGFydCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldENvbm5lY3RlZChmYWxzZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludm9rZWQgb24gZWFjaCB1cGRhdGUgdG8gcGVyZm9ybSByZW5kZXJpbmcgdGFza3MuIFRoaXMgbWV0aG9kIG1heSByZXR1cm5cbiAgICAgKiBhbnkgdmFsdWUgcmVuZGVyYWJsZSBieSBsaXQtaHRtbCdzIGBDaGlsZFBhcnRgIC0gdHlwaWNhbGx5IGFcbiAgICAgKiBgVGVtcGxhdGVSZXN1bHRgLiBTZXR0aW5nIHByb3BlcnRpZXMgaW5zaWRlIHRoaXMgbWV0aG9kIHdpbGwgKm5vdCogdHJpZ2dlclxuICAgICAqIHRoZSBlbGVtZW50IHRvIHVwZGF0ZS5cbiAgICAgKiBAY2F0ZWdvcnkgcmVuZGVyaW5nXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gbm9DaGFuZ2U7XG4gICAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhpcyBjbGFzcyBpcyBtYXJrZWQgYXMgYGZpbmFsaXplZGAgYXMgYW4gb3B0aW1pemF0aW9uIGVuc3VyaW5nXG4gKiBpdCB3aWxsIG5vdCBuZWVkbGVzc2x5IHRyeSB0byBgZmluYWxpemVgLlxuICpcbiAqIE5vdGUgdGhpcyBwcm9wZXJ0eSBuYW1lIGlzIGEgc3RyaW5nIHRvIHByZXZlbnQgYnJlYWtpbmcgQ2xvc3VyZSBKUyBDb21waWxlclxuICogb3B0aW1pemF0aW9ucy4gU2VlIEBsaXQvcmVhY3RpdmUtZWxlbWVudCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqL1xuTGl0RWxlbWVudFsnZmluYWxpemVkJ10gPSB0cnVlO1xuLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbkxpdEVsZW1lbnRbJ18kbGl0RWxlbWVudCQnXSA9IHRydWU7XG4vLyBJbnN0YWxsIGh5ZHJhdGlvbiBpZiBhdmFpbGFibGVcbihfYiA9IGdsb2JhbFRoaXMubGl0RWxlbWVudEh5ZHJhdGVTdXBwb3J0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChnbG9iYWxUaGlzLCB7IExpdEVsZW1lbnQgfSk7XG4vLyBBcHBseSBwb2x5ZmlsbHMgaWYgYXZhaWxhYmxlXG5jb25zdCBwb2x5ZmlsbFN1cHBvcnQgPSBERVZfTU9ERVxuICAgID8gZ2xvYmFsVGhpcy5saXRFbGVtZW50UG9seWZpbGxTdXBwb3J0RGV2TW9kZVxuICAgIDogZ2xvYmFsVGhpcy5saXRFbGVtZW50UG9seWZpbGxTdXBwb3J0O1xucG9seWZpbGxTdXBwb3J0ID09PSBudWxsIHx8IHBvbHlmaWxsU3VwcG9ydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9seWZpbGxTdXBwb3J0KHsgTGl0RWxlbWVudCB9KTtcbi8vIERFViBtb2RlIHdhcm5pbmdzXG5pZiAoREVWX01PREUpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG4gICAgLy8gTm90ZSwgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBjbG9zdXJlIGNvbXBpbGF0aW9uLCB0aGlzIGFjY2Vzc1xuICAgIC8vIG5lZWRzIHRvIGJlIGFzIGEgc3RyaW5nIHByb3BlcnR5IGluZGV4LlxuICAgIExpdEVsZW1lbnRbJ2ZpbmFsaXplJ10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsaXplZCA9IFJlYWN0aXZlRWxlbWVudC5maW5hbGl6ZS5jYWxsKHRoaXMpO1xuICAgICAgICBpZiAoIWZpbmFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdhcm5SZW1vdmVkT3JSZW5hbWVkID0gKG9iaiwgbmFtZSwgcmVuYW1lZCA9IGZhbHNlKSA9PiB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3Rvck5hbWUgPSAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJyA/IG9iaiA6IG9iai5jb25zdHJ1Y3RvcilcbiAgICAgICAgICAgICAgICAgICAgLm5hbWU7XG4gICAgICAgICAgICAgICAgaXNzdWVXYXJuaW5nKHJlbmFtZWQgPyAncmVuYW1lZC1hcGknIDogJ3JlbW92ZWQtYXBpJywgYFxcYCR7bmFtZX1cXGAgaXMgaW1wbGVtZW50ZWQgb24gY2xhc3MgJHtjdG9yTmFtZX0uIEl0IGAgK1xuICAgICAgICAgICAgICAgICAgICBgaGFzIGJlZW4gJHtyZW5hbWVkID8gJ3JlbmFtZWQnIDogJ3JlbW92ZWQnfSBgICtcbiAgICAgICAgICAgICAgICAgICAgYGluIHRoaXMgdmVyc2lvbiBvZiBMaXRFbGVtZW50LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB3YXJuUmVtb3ZlZE9yUmVuYW1lZCh0aGlzLCAncmVuZGVyJyk7XG4gICAgICAgIHdhcm5SZW1vdmVkT3JSZW5hbWVkKHRoaXMsICdnZXRTdHlsZXMnLCB0cnVlKTtcbiAgICAgICAgd2FyblJlbW92ZWRPclJlbmFtZWQodGhpcy5wcm90b3R5cGUsICdhZG9wdFN0eWxlcycpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xufVxuLyoqXG4gKiBFTkQgVVNFUlMgU0hPVUxEIE5PVCBSRUxZIE9OIFRISVMgT0JKRUNULlxuICpcbiAqIFByaXZhdGUgZXhwb3J0cyBmb3IgdXNlIGJ5IG90aGVyIExpdCBwYWNrYWdlcywgbm90IGludGVuZGVkIGZvciB1c2UgYnlcbiAqIGV4dGVybmFsIHVzZXJzLlxuICpcbiAqIFdlIGN1cnJlbnRseSBkbyBub3QgbWFrZSBhIG1hbmdsZWQgcm9sbHVwIGJ1aWxkIG9mIHRoZSBsaXQtc3NyIGNvZGUuIEluIG9yZGVyXG4gKiB0byBrZWVwIGEgbnVtYmVyIG9mIChvdGhlcndpc2UgcHJpdmF0ZSkgdG9wLWxldmVsIGV4cG9ydHMgIG1hbmdsZWQgaW4gdGhlXG4gKiBjbGllbnQgc2lkZSBjb2RlLCB3ZSBleHBvcnQgYSBfJExFIG9iamVjdCBjb250YWluaW5nIHRob3NlIG1lbWJlcnMgKG9yXG4gKiBoZWxwZXIgbWV0aG9kcyBmb3IgYWNjZXNzaW5nIHByaXZhdGUgZmllbGRzIG9mIHRob3NlIG1lbWJlcnMpLCBhbmQgdGhlblxuICogcmUtZXhwb3J0IHRoZW0gZm9yIHVzZSBpbiBsaXQtc3NyLiBUaGlzIGtlZXBzIGxpdC1zc3IgYWdub3N0aWMgdG8gd2hldGhlciB0aGVcbiAqIGNsaWVudC1zaWRlIGNvZGUgaXMgYmVpbmcgdXNlZCBpbiBgZGV2YCBtb2RlIG9yIGBwcm9kYCBtb2RlLlxuICpcbiAqIFRoaXMgaGFzIGEgdW5pcXVlIG5hbWUsIHRvIGRpc2FtYmlndWF0ZSBpdCBmcm9tIHByaXZhdGUgZXhwb3J0cyBpblxuICogbGl0LWh0bWwsIHNpbmNlIHRoaXMgbW9kdWxlIHJlLWV4cG9ydHMgYWxsIG9mIGxpdC1odG1sLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBfJExFID0ge1xuICAgIF8kYXR0cmlidXRlVG9Qcm9wZXJ0eTogKGVsLCBuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgZWwuXyRhdHRyaWJ1dGVUb1Byb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICB9LFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIF8kY2hhbmdlZFByb3BlcnRpZXM6IChlbCkgPT4gZWwuXyRjaGFuZ2VkUHJvcGVydGllcyxcbn07XG4vLyBJTVBPUlRBTlQ6IGRvIG5vdCBjaGFuZ2UgdGhlIHByb3BlcnR5IG5hbWUgb3IgdGhlIGFzc2lnbm1lbnQgZXhwcmVzc2lvbi5cbi8vIFRoaXMgbGluZSB3aWxsIGJlIHVzZWQgaW4gcmVnZXhlcyB0byBzZWFyY2ggZm9yIExpdEVsZW1lbnQgdXNhZ2UuXG4oKF9jID0gZ2xvYmFsVGhpcy5saXRFbGVtZW50VmVyc2lvbnMpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IChnbG9iYWxUaGlzLmxpdEVsZW1lbnRWZXJzaW9ucyA9IFtdKSkucHVzaCgnMy4yLjInKTtcbmlmIChERVZfTU9ERSAmJiBnbG9iYWxUaGlzLmxpdEVsZW1lbnRWZXJzaW9ucy5sZW5ndGggPiAxKSB7XG4gICAgaXNzdWVXYXJuaW5nKCdtdWx0aXBsZS12ZXJzaW9ucycsIGBNdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXQgbG9hZGVkLiBMb2FkaW5nIG11bHRpcGxlIHZlcnNpb25zIGAgK1xuICAgICAgICBgaXMgbm90IHJlY29tbWVuZGVkLmApO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWVsZW1lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqXG4gKiBUaGlzIGZpbGUgZXhwb3J0cyBhIGJvb2xlYW4gY29uc3Qgd2hvc2UgdmFsdWUgd2lsbCBkZXBlbmQgb24gd2hhdCBlbnZpcm9ubWVudFxuICogdGhlIG1vZHVsZSBpcyBiZWluZyBpbXBvcnRlZCBmcm9tLlxuICovXG5jb25zdCBOT0RFX01PREUgPSBmYWxzZTtcbi8qKlxuICogQSBib29sZWFuIHRoYXQgd2lsbCBiZSBgdHJ1ZWAgaW4gc2VydmVyIGVudmlyb25tZW50cyBsaWtlIE5vZGUsIGFuZCBgZmFsc2VgXG4gKiBpbiBicm93c2VyIGVudmlyb25tZW50cy4gTm90ZSB0aGF0IHlvdXIgc2VydmVyIGVudmlyb25tZW50IG9yIHRvb2xjaGFpbiBtdXN0XG4gKiBzdXBwb3J0IHRoZSBgXCJub2RlXCJgIGV4cG9ydCBjb25kaXRpb24gZm9yIHRoaXMgdG8gYmUgYHRydWVgLlxuICpcbiAqIFRoaXMgY2FuIGJlIHVzZWQgd2hlbiBhdXRob3JpbmcgY29tcG9uZW50cyB0byBjaGFuZ2UgYmVoYXZpb3IgYmFzZWQgb25cbiAqIHdoZXRoZXIgb3Igbm90IHRoZSBjb21wb25lbnQgaXMgZXhlY3V0aW5nIGluIGFuIFNTUiBjb250ZXh0LlxuICovXG5leHBvcnQgY29uc3QgaXNTZXJ2ZXIgPSBOT0RFX01PREU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1zZXJ2ZXIuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgX2EsIF9iLCBfYywgX2Q7XG5jb25zdCBERVZfTU9ERSA9IHRydWU7XG5jb25zdCBFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MgPSB0cnVlO1xuY29uc3QgRU5BQkxFX1NIQURZRE9NX05PUEFUQ0ggPSB0cnVlO1xuY29uc3QgTk9ERV9NT0RFID0gZmFsc2U7XG4vLyBVc2Ugd2luZG93IGZvciBicm93c2VyIGJ1aWxkcyBiZWNhdXNlIElFMTEgZG9lc24ndCBoYXZlIGdsb2JhbFRoaXMuXG5jb25zdCBnbG9iYWwgPSBOT0RFX01PREUgPyBnbG9iYWxUaGlzIDogd2luZG93O1xuLyoqXG4gKiBVc2VmdWwgZm9yIHZpc3VhbGl6aW5nIGFuZCBsb2dnaW5nIGluc2lnaHRzIGludG8gd2hhdCB0aGUgTGl0IHRlbXBsYXRlIHN5c3RlbSBpcyBkb2luZy5cbiAqXG4gKiBDb21waWxlZCBvdXQgb2YgcHJvZCBtb2RlIGJ1aWxkcy5cbiAqL1xuY29uc3QgZGVidWdMb2dFdmVudCA9IERFVl9NT0RFXG4gICAgPyAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2hvdWxkRW1pdCA9IGdsb2JhbFxuICAgICAgICAgICAgLmVtaXRMaXREZWJ1Z0xvZ0V2ZW50cztcbiAgICAgICAgaWYgKCFzaG91bGRFbWl0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZ2xvYmFsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdsaXQtZGVidWcnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IGV2ZW50LFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIDogdW5kZWZpbmVkO1xuLy8gVXNlZCBmb3IgY29ubmVjdGluZyBiZWdpblJlbmRlciBhbmQgZW5kUmVuZGVyIGV2ZW50cyB3aGVuIHRoZXJlIGFyZSBuZXN0ZWRcbi8vIHJlbmRlcnMgd2hlbiBlcnJvcnMgYXJlIHRocm93biBwcmV2ZW50aW5nIGFuIGVuZFJlbmRlciBldmVudCBmcm9tIGJlaW5nXG4vLyBjYWxsZWQuXG5sZXQgZGVidWdMb2dSZW5kZXJJZCA9IDA7XG5sZXQgaXNzdWVXYXJuaW5nO1xuaWYgKERFVl9NT0RFKSB7XG4gICAgKF9hID0gZ2xvYmFsLmxpdElzc3VlZFdhcm5pbmdzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoZ2xvYmFsLmxpdElzc3VlZFdhcm5pbmdzID0gbmV3IFNldCgpKTtcbiAgICAvLyBJc3N1ZSBhIHdhcm5pbmcsIGlmIHdlIGhhdmVuJ3QgYWxyZWFkeS5cbiAgICBpc3N1ZVdhcm5pbmcgPSAoY29kZSwgd2FybmluZykgPT4ge1xuICAgICAgICB3YXJuaW5nICs9IGNvZGVcbiAgICAgICAgICAgID8gYCBTZWUgaHR0cHM6Ly9saXQuZGV2L21zZy8ke2NvZGV9IGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgICAgICAgIDogJyc7XG4gICAgICAgIGlmICghZ2xvYmFsLmxpdElzc3VlZFdhcm5pbmdzLmhhcyh3YXJuaW5nKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKHdhcm5pbmcpO1xuICAgICAgICAgICAgZ2xvYmFsLmxpdElzc3VlZFdhcm5pbmdzLmFkZCh3YXJuaW5nKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaXNzdWVXYXJuaW5nKCdkZXYtbW9kZScsIGBMaXQgaXMgaW4gZGV2IG1vZGUuIE5vdCByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiFgKTtcbn1cbmNvbnN0IHdyYXAgPSBFTkFCTEVfU0hBRFlET01fTk9QQVRDSCAmJlxuICAgICgoX2IgPSBnbG9iYWwuU2hhZHlET00pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pblVzZSkgJiZcbiAgICAoKF9jID0gZ2xvYmFsLlNoYWR5RE9NKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Mubm9QYXRjaCkgPT09IHRydWVcbiAgICA/IGdsb2JhbC5TaGFkeURPTS53cmFwXG4gICAgOiAobm9kZSkgPT4gbm9kZTtcbmNvbnN0IHRydXN0ZWRUeXBlcyA9IGdsb2JhbC50cnVzdGVkVHlwZXM7XG4vKipcbiAqIE91ciBUcnVzdGVkVHlwZVBvbGljeSBmb3IgSFRNTCB3aGljaCBpcyBkZWNsYXJlZCB1c2luZyB0aGUgaHRtbCB0ZW1wbGF0ZVxuICogdGFnIGZ1bmN0aW9uLlxuICpcbiAqIFRoYXQgSFRNTCBpcyBhIGRldmVsb3Blci1hdXRob3JlZCBjb25zdGFudCwgYW5kIGlzIHBhcnNlZCB3aXRoIGlubmVySFRNTFxuICogYmVmb3JlIGFueSB1bnRydXN0ZWQgZXhwcmVzc2lvbnMgaGF2ZSBiZWVuIG1peGVkIGluLiBUaGVyZWZvciBpdCBpc1xuICogY29uc2lkZXJlZCBzYWZlIGJ5IGNvbnN0cnVjdGlvbi5cbiAqL1xuY29uc3QgcG9saWN5ID0gdHJ1c3RlZFR5cGVzXG4gICAgPyB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KCdsaXQtaHRtbCcsIHtcbiAgICAgICAgY3JlYXRlSFRNTDogKHMpID0+IHMsXG4gICAgfSlcbiAgICA6IHVuZGVmaW5lZDtcbmNvbnN0IGlkZW50aXR5RnVuY3Rpb24gPSAodmFsdWUpID0+IHZhbHVlO1xuY29uc3Qgbm9vcFNhbml0aXplciA9IChfbm9kZSwgX25hbWUsIF90eXBlKSA9PiBpZGVudGl0eUZ1bmN0aW9uO1xuLyoqIFNldHMgdGhlIGdsb2JhbCBzYW5pdGl6ZXIgZmFjdG9yeS4gKi9cbmNvbnN0IHNldFNhbml0aXplciA9IChuZXdTYW5pdGl6ZXIpID0+IHtcbiAgICBpZiAoIUVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwgIT09IG5vb3BTYW5pdGl6ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdHRlbXB0ZWQgdG8gb3ZlcndyaXRlIGV4aXN0aW5nIGxpdC1odG1sIHNlY3VyaXR5IHBvbGljeS5gICtcbiAgICAgICAgICAgIGAgc2V0U2FuaXRpemVET01WYWx1ZUZhY3Rvcnkgc2hvdWxkIGJlIGNhbGxlZCBhdCBtb3N0IG9uY2UuYCk7XG4gICAgfVxuICAgIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCA9IG5ld1Nhbml0aXplcjtcbn07XG4vKipcbiAqIE9ubHkgdXNlZCBpbiBpbnRlcm5hbCB0ZXN0cywgbm90IGEgcGFydCBvZiB0aGUgcHVibGljIEFQSS5cbiAqL1xuY29uc3QgX3Rlc3RPbmx5Q2xlYXJTYW5pdGl6ZXJGYWN0b3J5RG9Ob3RDYWxsT3JFbHNlID0gKCkgPT4ge1xuICAgIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCA9IG5vb3BTYW5pdGl6ZXI7XG59O1xuY29uc3QgY3JlYXRlU2FuaXRpemVyID0gKG5vZGUsIG5hbWUsIHR5cGUpID0+IHtcbiAgICByZXR1cm4gc2FuaXRpemVyRmFjdG9yeUludGVybmFsKG5vZGUsIG5hbWUsIHR5cGUpO1xufTtcbi8vIEFkZGVkIHRvIGFuIGF0dHJpYnV0ZSBuYW1lIHRvIG1hcmsgdGhlIGF0dHJpYnV0ZSBhcyBib3VuZCBzbyB3ZSBjYW4gZmluZFxuLy8gaXQgZWFzaWx5LlxuY29uc3QgYm91bmRBdHRyaWJ1dGVTdWZmaXggPSAnJGxpdCQnO1xuLy8gVGhpcyBtYXJrZXIgaXMgdXNlZCBpbiBtYW55IHN5bnRhY3RpYyBwb3NpdGlvbnMgaW4gSFRNTCwgc28gaXQgbXVzdCBiZVxuLy8gYSB2YWxpZCBlbGVtZW50IG5hbWUgYW5kIGF0dHJpYnV0ZSBuYW1lLiBXZSBkb24ndCBzdXBwb3J0IGR5bmFtaWMgbmFtZXMgKHlldClcbi8vIGJ1dCB0aGlzIGF0IGxlYXN0IGVuc3VyZXMgdGhhdCB0aGUgcGFyc2UgdHJlZSBpcyBjbG9zZXIgdG8gdGhlIHRlbXBsYXRlXG4vLyBpbnRlbnRpb24uXG5jb25zdCBtYXJrZXIgPSBgbGl0JCR7U3RyaW5nKE1hdGgucmFuZG9tKCkpLnNsaWNlKDkpfSRgO1xuLy8gU3RyaW5nIHVzZWQgdG8gdGVsbCBpZiBhIGNvbW1lbnQgaXMgYSBtYXJrZXIgY29tbWVudFxuY29uc3QgbWFya2VyTWF0Y2ggPSAnPycgKyBtYXJrZXI7XG4vLyBUZXh0IHVzZWQgdG8gaW5zZXJ0IGEgY29tbWVudCBtYXJrZXIgbm9kZS4gV2UgdXNlIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb25cbi8vIHN5bnRheCBiZWNhdXNlIGl0J3Mgc2xpZ2h0bHkgc21hbGxlciwgYnV0IHBhcnNlcyBhcyBhIGNvbW1lbnQgbm9kZS5cbmNvbnN0IG5vZGVNYXJrZXIgPSBgPCR7bWFya2VyTWF0Y2h9PmA7XG5jb25zdCBkID0gTk9ERV9NT0RFICYmIGdsb2JhbC5kb2N1bWVudCA9PT0gdW5kZWZpbmVkXG4gICAgPyB7XG4gICAgICAgIGNyZWF0ZVRyZWVXYWxrZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgfVxuICAgIDogZG9jdW1lbnQ7XG4vLyBDcmVhdGVzIGEgZHluYW1pYyBtYXJrZXIuIFdlIG5ldmVyIGhhdmUgdG8gc2VhcmNoIGZvciB0aGVzZSBpbiB0aGUgRE9NLlxuY29uc3QgY3JlYXRlTWFya2VyID0gKHYgPSAnJykgPT4gZC5jcmVhdGVDb21tZW50KHYpO1xuY29uc3QgaXNQcmltaXRpdmUgPSAodmFsdWUpID0+IHZhbHVlID09PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgIT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlICE9ICdmdW5jdGlvbicpO1xuY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5jb25zdCBpc0l0ZXJhYmxlID0gKHZhbHVlKSA9PiBpc0FycmF5KHZhbHVlKSB8fFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgdHlwZW9mICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsdWVbU3ltYm9sLml0ZXJhdG9yXSkgPT09ICdmdW5jdGlvbic7XG5jb25zdCBTUEFDRV9DSEFSID0gYFsgXFx0XFxuXFxmXFxyXWA7XG5jb25zdCBBVFRSX1ZBTFVFX0NIQVIgPSBgW14gXFx0XFxuXFxmXFxyXCInXFxgPD49XWA7XG5jb25zdCBOQU1FX0NIQVIgPSBgW15cXFxcc1wiJz49L11gO1xuLy8gVGhlc2UgcmVnZXhlcyByZXByZXNlbnQgdGhlIGZpdmUgcGFyc2luZyBzdGF0ZXMgdGhhdCB3ZSBjYXJlIGFib3V0IGluIHRoZVxuLy8gVGVtcGxhdGUncyBIVE1MIHNjYW5uZXIuIFRoZXkgbWF0Y2ggdGhlICplbmQqIG9mIHRoZSBzdGF0ZSB0aGV5J3JlIG5hbWVkXG4vLyBhZnRlci5cbi8vIERlcGVuZGluZyBvbiB0aGUgbWF0Y2gsIHdlIHRyYW5zaXRpb24gdG8gYSBuZXcgc3RhdGUuIElmIHRoZXJlJ3Mgbm8gbWF0Y2gsXG4vLyB3ZSBzdGF5IGluIHRoZSBzYW1lIHN0YXRlLlxuLy8gTm90ZSB0aGF0IHRoZSByZWdleGVzIGFyZSBzdGF0ZWZ1bC4gV2UgdXRpbGl6ZSBsYXN0SW5kZXggYW5kIHN5bmMgaXRcbi8vIGFjcm9zcyB0aGUgbXVsdGlwbGUgcmVnZXhlcyB1c2VkLiBJbiBhZGRpdGlvbiB0byB0aGUgZml2ZSByZWdleGVzIGJlbG93XG4vLyB3ZSBhbHNvIGR5bmFtaWNhbGx5IGNyZWF0ZSBhIHJlZ2V4IHRvIGZpbmQgdGhlIG1hdGNoaW5nIGVuZCB0YWdzIGZvciByYXdcbi8vIHRleHQgZWxlbWVudHMuXG4vKipcbiAqIEVuZCBvZiB0ZXh0IGlzOiBgPGAgZm9sbG93ZWQgYnk6XG4gKiAgIChjb21tZW50IHN0YXJ0KSBvciAodGFnKSBvciAoZHluYW1pYyB0YWcgYmluZGluZylcbiAqL1xuY29uc3QgdGV4dEVuZFJlZ2V4ID0gLzwoPzooIS0tfFxcL1teYS16QS1aXSl8KFxcLz9bYS16QS1aXVtePlxcc10qKXwoXFwvPyQpKS9nO1xuY29uc3QgQ09NTUVOVF9TVEFSVCA9IDE7XG5jb25zdCBUQUdfTkFNRSA9IDI7XG5jb25zdCBEWU5BTUlDX1RBR19OQU1FID0gMztcbmNvbnN0IGNvbW1lbnRFbmRSZWdleCA9IC8tLT4vZztcbi8qKlxuICogQ29tbWVudHMgbm90IHN0YXJ0ZWQgd2l0aCA8IS0tLCBsaWtlIDwveywgY2FuIGJlIGVuZGVkIGJ5IGEgc2luZ2xlIGA+YFxuICovXG5jb25zdCBjb21tZW50MkVuZFJlZ2V4ID0gLz4vZztcbi8qKlxuICogVGhlIHRhZ0VuZCByZWdleCBtYXRjaGVzIHRoZSBlbmQgb2YgdGhlIFwiaW5zaWRlIGFuIG9wZW5pbmdcIiB0YWcgc3ludGF4XG4gKiBwb3NpdGlvbi4gSXQgZWl0aGVyIG1hdGNoZXMgYSBgPmAsIGFuIGF0dHJpYnV0ZS1saWtlIHNlcXVlbmNlLCBvciB0aGUgZW5kXG4gKiBvZiB0aGUgc3RyaW5nIGFmdGVyIGEgc3BhY2UgKGF0dHJpYnV0ZS1uYW1lIHBvc2l0aW9uIGVuZGluZykuXG4gKlxuICogU2VlIGF0dHJpYnV0ZXMgaW4gdGhlIEhUTUwgc3BlYzpcbiAqIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNlbGVtZW50cy1hdHRyaWJ1dGVzXG4gKlxuICogXCIgXFx0XFxuXFxmXFxyXCIgYXJlIEhUTUwgc3BhY2UgY2hhcmFjdGVyczpcbiAqIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNhc2NpaS13aGl0ZXNwYWNlXG4gKlxuICogU28gYW4gYXR0cmlidXRlIGlzOlxuICogICogVGhlIG5hbWU6IGFueSBjaGFyYWN0ZXIgZXhjZXB0IGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIsIChcIiksICgnKSwgXCI+XCIsXG4gKiAgICBcIj1cIiwgb3IgXCIvXCIuIE5vdGU6IHRoaXMgaXMgZGlmZmVyZW50IGZyb20gdGhlIEhUTUwgc3BlYyB3aGljaCBhbHNvIGV4Y2x1ZGVzIGNvbnRyb2wgY2hhcmFjdGVycy5cbiAqICAqIEZvbGxvd2VkIGJ5IHplcm8gb3IgbW9yZSBzcGFjZSBjaGFyYWN0ZXJzXG4gKiAgKiBGb2xsb3dlZCBieSBcIj1cIlxuICogICogRm9sbG93ZWQgYnkgemVybyBvciBtb3JlIHNwYWNlIGNoYXJhY3RlcnNcbiAqICAqIEZvbGxvd2VkIGJ5OlxuICogICAgKiBBbnkgY2hhcmFjdGVyIGV4Y2VwdCBzcGFjZSwgKCcpLCAoXCIpLCBcIjxcIiwgXCI+XCIsIFwiPVwiLCAoYCksIG9yXG4gKiAgICAqIChcIikgdGhlbiBhbnkgbm9uLShcIiksIG9yXG4gKiAgICAqICgnKSB0aGVuIGFueSBub24tKCcpXG4gKi9cbmNvbnN0IHRhZ0VuZFJlZ2V4ID0gbmV3IFJlZ0V4cChgPnwke1NQQUNFX0NIQVJ9KD86KCR7TkFNRV9DSEFSfSspKCR7U1BBQ0VfQ0hBUn0qPSR7U1BBQ0VfQ0hBUn0qKD86JHtBVFRSX1ZBTFVFX0NIQVJ9fChcInwnKXwpKXwkKWAsICdnJyk7XG5jb25zdCBFTlRJUkVfTUFUQ0ggPSAwO1xuY29uc3QgQVRUUklCVVRFX05BTUUgPSAxO1xuY29uc3QgU1BBQ0VTX0FORF9FUVVBTFMgPSAyO1xuY29uc3QgUVVPVEVfQ0hBUiA9IDM7XG5jb25zdCBzaW5nbGVRdW90ZUF0dHJFbmRSZWdleCA9IC8nL2c7XG5jb25zdCBkb3VibGVRdW90ZUF0dHJFbmRSZWdleCA9IC9cIi9nO1xuLyoqXG4gKiBNYXRjaGVzIHRoZSByYXcgdGV4dCBlbGVtZW50cy5cbiAqXG4gKiBDb21tZW50cyBhcmUgbm90IHBhcnNlZCB3aXRoaW4gcmF3IHRleHQgZWxlbWVudHMsIHNvIHdlIG5lZWQgdG8gc2VhcmNoIHRoZWlyXG4gKiB0ZXh0IGNvbnRlbnQgZm9yIG1hcmtlciBzdHJpbmdzLlxuICovXG5jb25zdCByYXdUZXh0RWxlbWVudCA9IC9eKD86c2NyaXB0fHN0eWxlfHRleHRhcmVhfHRpdGxlKSQvaTtcbi8qKiBUZW1wbGF0ZVJlc3VsdCB0eXBlcyAqL1xuY29uc3QgSFRNTF9SRVNVTFQgPSAxO1xuY29uc3QgU1ZHX1JFU1VMVCA9IDI7XG4vLyBUZW1wbGF0ZVBhcnQgdHlwZXNcbi8vIElNUE9SVEFOVDogdGhlc2UgbXVzdCBtYXRjaCB0aGUgdmFsdWVzIGluIFBhcnRUeXBlXG5jb25zdCBBVFRSSUJVVEVfUEFSVCA9IDE7XG5jb25zdCBDSElMRF9QQVJUID0gMjtcbmNvbnN0IFBST1BFUlRZX1BBUlQgPSAzO1xuY29uc3QgQk9PTEVBTl9BVFRSSUJVVEVfUEFSVCA9IDQ7XG5jb25zdCBFVkVOVF9QQVJUID0gNTtcbmNvbnN0IEVMRU1FTlRfUEFSVCA9IDY7XG5jb25zdCBDT01NRU5UX1BBUlQgPSA3O1xuLyoqXG4gKiBHZW5lcmF0ZXMgYSB0ZW1wbGF0ZSBsaXRlcmFsIHRhZyBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBUZW1wbGF0ZVJlc3VsdCB3aXRoXG4gKiB0aGUgZ2l2ZW4gcmVzdWx0IHR5cGUuXG4gKi9cbmNvbnN0IHRhZyA9ICh0eXBlKSA9PiAoc3RyaW5ncywgLi4udmFsdWVzKSA9PiB7XG4gICAgLy8gV2FybiBhZ2FpbnN0IHRlbXBsYXRlcyBvY3RhbCBlc2NhcGUgc2VxdWVuY2VzXG4gICAgLy8gV2UgZG8gdGhpcyBoZXJlIHJhdGhlciB0aGFuIGluIHJlbmRlciBzbyB0aGF0IHRoZSB3YXJuaW5nIGlzIGNsb3NlciB0byB0aGVcbiAgICAvLyB0ZW1wbGF0ZSBkZWZpbml0aW9uLlxuICAgIGlmIChERVZfTU9ERSAmJiBzdHJpbmdzLnNvbWUoKHMpID0+IHMgPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdTb21lIHRlbXBsYXRlIHN0cmluZ3MgYXJlIHVuZGVmaW5lZC5cXG4nICtcbiAgICAgICAgICAgICdUaGlzIGlzIHByb2JhYmx5IGNhdXNlZCBieSBpbGxlZ2FsIG9jdGFsIGVzY2FwZSBzZXF1ZW5jZXMuJyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgIFsnXyRsaXRUeXBlJCddOiB0eXBlLFxuICAgICAgICBzdHJpbmdzLFxuICAgICAgICB2YWx1ZXMsXG4gICAgfTtcbn07XG4vKipcbiAqIEludGVycHJldHMgYSB0ZW1wbGF0ZSBsaXRlcmFsIGFzIGFuIEhUTUwgdGVtcGxhdGUgdGhhdCBjYW4gZWZmaWNpZW50bHlcbiAqIHJlbmRlciB0byBhbmQgdXBkYXRlIGEgY29udGFpbmVyLlxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBoZWFkZXIgPSAodGl0bGU6IHN0cmluZykgPT4gaHRtbGA8aDE+JHt0aXRsZX08L2gxPmA7XG4gKiBgYGBcbiAqXG4gKiBUaGUgYGh0bWxgIHRhZyByZXR1cm5zIGEgZGVzY3JpcHRpb24gb2YgdGhlIERPTSB0byByZW5kZXIgYXMgYSB2YWx1ZS4gSXQgaXNcbiAqIGxhenksIG1lYW5pbmcgbm8gd29yayBpcyBkb25lIHVudGlsIHRoZSB0ZW1wbGF0ZSBpcyByZW5kZXJlZC4gV2hlbiByZW5kZXJpbmcsXG4gKiBpZiBhIHRlbXBsYXRlIGNvbWVzIGZyb20gdGhlIHNhbWUgZXhwcmVzc2lvbiBhcyBhIHByZXZpb3VzbHkgcmVuZGVyZWQgcmVzdWx0LFxuICogaXQncyBlZmZpY2llbnRseSB1cGRhdGVkIGluc3RlYWQgb2YgcmVwbGFjZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBodG1sID0gdGFnKEhUTUxfUkVTVUxUKTtcbi8qKlxuICogSW50ZXJwcmV0cyBhIHRlbXBsYXRlIGxpdGVyYWwgYXMgYW4gU1ZHIGZyYWdtZW50IHRoYXQgY2FuIGVmZmljaWVudGx5XG4gKiByZW5kZXIgdG8gYW5kIHVwZGF0ZSBhIGNvbnRhaW5lci5cbiAqXG4gKiBgYGB0c1xuICogY29uc3QgcmVjdCA9IHN2Z2A8cmVjdCB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIj48L3JlY3Q+YDtcbiAqXG4gKiBjb25zdCBteUltYWdlID0gaHRtbGBcbiAqICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDEwIDEwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICogICAgICR7cmVjdH1cbiAqICAgPC9zdmc+YDtcbiAqIGBgYFxuICpcbiAqIFRoZSBgc3ZnYCAqdGFnIGZ1bmN0aW9uKiBzaG91bGQgb25seSBiZSB1c2VkIGZvciBTVkcgZnJhZ21lbnRzLCBvciBlbGVtZW50c1xuICogdGhhdCB3b3VsZCBiZSBjb250YWluZWQgKippbnNpZGUqKiBhbiBgPHN2Zz5gIEhUTUwgZWxlbWVudC4gQSBjb21tb24gZXJyb3IgaXNcbiAqIHBsYWNpbmcgYW4gYDxzdmc+YCAqZWxlbWVudCogaW4gYSB0ZW1wbGF0ZSB0YWdnZWQgd2l0aCB0aGUgYHN2Z2AgdGFnXG4gKiBmdW5jdGlvbi4gVGhlIGA8c3ZnPmAgZWxlbWVudCBpcyBhbiBIVE1MIGVsZW1lbnQgYW5kIHNob3VsZCBiZSB1c2VkIHdpdGhpbiBhXG4gKiB0ZW1wbGF0ZSB0YWdnZWQgd2l0aCB0aGUge0BsaW5rY29kZSBodG1sfSB0YWcgZnVuY3Rpb24uXG4gKlxuICogSW4gTGl0RWxlbWVudCB1c2FnZSwgaXQncyBpbnZhbGlkIHRvIHJldHVybiBhbiBTVkcgZnJhZ21lbnQgZnJvbSB0aGVcbiAqIGByZW5kZXIoKWAgbWV0aG9kLCBhcyB0aGUgU1ZHIGZyYWdtZW50IHdpbGwgYmUgY29udGFpbmVkIHdpdGhpbiB0aGUgZWxlbWVudCdzXG4gKiBzaGFkb3cgcm9vdCBhbmQgdGh1cyBjYW5ub3QgYmUgdXNlZCB3aXRoaW4gYW4gYDxzdmc+YCBIVE1MIGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBzdmcgPSB0YWcoU1ZHX1JFU1VMVCk7XG4vKipcbiAqIEEgc2VudGluZWwgdmFsdWUgdGhhdCBzaWduYWxzIHRoYXQgYSB2YWx1ZSB3YXMgaGFuZGxlZCBieSBhIGRpcmVjdGl2ZSBhbmRcbiAqIHNob3VsZCBub3QgYmUgd3JpdHRlbiB0byB0aGUgRE9NLlxuICovXG5leHBvcnQgY29uc3Qgbm9DaGFuZ2UgPSBTeW1ib2wuZm9yKCdsaXQtbm9DaGFuZ2UnKTtcbi8qKlxuICogQSBzZW50aW5lbCB2YWx1ZSB0aGF0IHNpZ25hbHMgYSBDaGlsZFBhcnQgdG8gZnVsbHkgY2xlYXIgaXRzIGNvbnRlbnQuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IGJ1dHRvbiA9IGh0bWxgJHtcbiAqICB1c2VyLmlzQWRtaW5cbiAqICAgID8gaHRtbGA8YnV0dG9uPkRFTEVURTwvYnV0dG9uPmBcbiAqICAgIDogbm90aGluZ1xuICogfWA7XG4gKiBgYGBcbiAqXG4gKiBQcmVmZXIgdXNpbmcgYG5vdGhpbmdgIG92ZXIgb3RoZXIgZmFsc3kgdmFsdWVzIGFzIGl0IHByb3ZpZGVzIGEgY29uc2lzdGVudFxuICogYmVoYXZpb3IgYmV0d2VlbiB2YXJpb3VzIGV4cHJlc3Npb24gYmluZGluZyBjb250ZXh0cy5cbiAqXG4gKiBJbiBjaGlsZCBleHByZXNzaW9ucywgYHVuZGVmaW5lZGAsIGBudWxsYCwgYCcnYCwgYW5kIGBub3RoaW5nYCBhbGwgYmVoYXZlIHRoZVxuICogc2FtZSBhbmQgcmVuZGVyIG5vIG5vZGVzLiBJbiBhdHRyaWJ1dGUgZXhwcmVzc2lvbnMsIGBub3RoaW5nYCBfcmVtb3Zlc18gdGhlXG4gKiBhdHRyaWJ1dGUsIHdoaWxlIGB1bmRlZmluZWRgIGFuZCBgbnVsbGAgd2lsbCByZW5kZXIgYW4gZW1wdHkgc3RyaW5nLiBJblxuICogcHJvcGVydHkgZXhwcmVzc2lvbnMgYG5vdGhpbmdgIGJlY29tZXMgYHVuZGVmaW5lZGAuXG4gKi9cbmV4cG9ydCBjb25zdCBub3RoaW5nID0gU3ltYm9sLmZvcignbGl0LW5vdGhpbmcnKTtcbi8qKlxuICogVGhlIGNhY2hlIG9mIHByZXBhcmVkIHRlbXBsYXRlcywga2V5ZWQgYnkgdGhlIHRhZ2dlZCBUZW1wbGF0ZVN0cmluZ3NBcnJheVxuICogYW5kIF9ub3RfIGFjY291bnRpbmcgZm9yIHRoZSBzcGVjaWZpYyB0ZW1wbGF0ZSB0YWcgdXNlZC4gVGhpcyBtZWFucyB0aGF0XG4gKiB0ZW1wbGF0ZSB0YWdzIGNhbm5vdCBiZSBkeW5hbWljIC0gdGhlIG11c3Qgc3RhdGljYWxseSBiZSBvbmUgb2YgaHRtbCwgc3ZnLFxuICogb3IgYXR0ci4gVGhpcyByZXN0cmljdGlvbiBzaW1wbGlmaWVzIHRoZSBjYWNoZSBsb29rdXAsIHdoaWNoIGlzIG9uIHRoZSBob3RcbiAqIHBhdGggZm9yIHJlbmRlcmluZy5cbiAqL1xuY29uc3QgdGVtcGxhdGVDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB3YWxrZXIgPSBkLmNyZWF0ZVRyZWVXYWxrZXIoZCwgMTI5IC8qIE5vZGVGaWx0ZXIuU0hPV197RUxFTUVOVHxDT01NRU5UfSAqLywgbnVsbCwgZmFsc2UpO1xubGV0IHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCA9IG5vb3BTYW5pdGl6ZXI7XG4vKipcbiAqIFJldHVybnMgYW4gSFRNTCBzdHJpbmcgZm9yIHRoZSBnaXZlbiBUZW1wbGF0ZVN0cmluZ3NBcnJheSBhbmQgcmVzdWx0IHR5cGVcbiAqIChIVE1MIG9yIFNWRyksIGFsb25nIHdpdGggdGhlIGNhc2Utc2Vuc2l0aXZlIGJvdW5kIGF0dHJpYnV0ZSBuYW1lcyBpblxuICogdGVtcGxhdGUgb3JkZXIuIFRoZSBIVE1MIGNvbnRhaW5zIGNvbW1lbnQgbWFya2VycyBkZW5vdGluZyB0aGUgYENoaWxkUGFydGBzXG4gKiBhbmQgc3VmZml4ZXMgb24gYm91bmQgYXR0cmlidXRlcyBkZW5vdGluZyB0aGUgYEF0dHJpYnV0ZVBhcnRzYC5cbiAqXG4gKiBAcGFyYW0gc3RyaW5ncyB0ZW1wbGF0ZSBzdHJpbmdzIGFycmF5XG4gKiBAcGFyYW0gdHlwZSBIVE1MIG9yIFNWR1xuICogQHJldHVybiBBcnJheSBjb250YWluaW5nIGBbaHRtbCwgYXR0ck5hbWVzXWAgKGFycmF5IHJldHVybmVkIGZvciB0ZXJzZW5lc3MsXG4gKiAgICAgdG8gYXZvaWQgb2JqZWN0IGZpZWxkcyBzaW5jZSB0aGlzIGNvZGUgaXMgc2hhcmVkIHdpdGggbm9uLW1pbmlmaWVkIFNTUlxuICogICAgIGNvZGUpXG4gKi9cbmNvbnN0IGdldFRlbXBsYXRlSHRtbCA9IChzdHJpbmdzLCB0eXBlKSA9PiB7XG4gICAgLy8gSW5zZXJ0IG1ha2VycyBpbnRvIHRoZSB0ZW1wbGF0ZSBIVE1MIHRvIHJlcHJlc2VudCB0aGUgcG9zaXRpb24gb2ZcbiAgICAvLyBiaW5kaW5ncy4gVGhlIGZvbGxvd2luZyBjb2RlIHNjYW5zIHRoZSB0ZW1wbGF0ZSBzdHJpbmdzIHRvIGRldGVybWluZSB0aGVcbiAgICAvLyBzeW50YWN0aWMgcG9zaXRpb24gb2YgdGhlIGJpbmRpbmdzLiBUaGV5IGNhbiBiZSBpbiB0ZXh0IHBvc2l0aW9uLCB3aGVyZVxuICAgIC8vIHdlIGluc2VydCBhbiBIVE1MIGNvbW1lbnQsIGF0dHJpYnV0ZSB2YWx1ZSBwb3NpdGlvbiwgd2hlcmUgd2UgaW5zZXJ0IGFcbiAgICAvLyBzZW50aW5lbCBzdHJpbmcgYW5kIHJlLXdyaXRlIHRoZSBhdHRyaWJ1dGUgbmFtZSwgb3IgaW5zaWRlIGEgdGFnIHdoZXJlXG4gICAgLy8gd2UgaW5zZXJ0IHRoZSBzZW50aW5lbCBzdHJpbmcuXG4gICAgY29uc3QgbCA9IHN0cmluZ3MubGVuZ3RoIC0gMTtcbiAgICAvLyBTdG9yZXMgdGhlIGNhc2Utc2Vuc2l0aXZlIGJvdW5kIGF0dHJpYnV0ZSBuYW1lcyBpbiB0aGUgb3JkZXIgb2YgdGhlaXJcbiAgICAvLyBwYXJ0cy4gRWxlbWVudFBhcnRzIGFyZSBhbHNvIHJlZmxlY3RlZCBpbiB0aGlzIGFycmF5IGFzIHVuZGVmaW5lZFxuICAgIC8vIHJhdGhlciB0aGFuIGEgc3RyaW5nLCB0byBkaXNhbWJpZ3VhdGUgZnJvbSBhdHRyaWJ1dGUgYmluZGluZ3MuXG4gICAgY29uc3QgYXR0ck5hbWVzID0gW107XG4gICAgbGV0IGh0bWwgPSB0eXBlID09PSBTVkdfUkVTVUxUID8gJzxzdmc+JyA6ICcnO1xuICAgIC8vIFdoZW4gd2UncmUgaW5zaWRlIGEgcmF3IHRleHQgdGFnIChub3QgaXQncyB0ZXh0IGNvbnRlbnQpLCB0aGUgcmVnZXhcbiAgICAvLyB3aWxsIHN0aWxsIGJlIHRhZ1JlZ2V4IHNvIHdlIGNhbiBmaW5kIGF0dHJpYnV0ZXMsIGJ1dCB3aWxsIHN3aXRjaCB0b1xuICAgIC8vIHRoaXMgcmVnZXggd2hlbiB0aGUgdGFnIGVuZHMuXG4gICAgbGV0IHJhd1RleHRFbmRSZWdleDtcbiAgICAvLyBUaGUgY3VycmVudCBwYXJzaW5nIHN0YXRlLCByZXByZXNlbnRlZCBhcyBhIHJlZmVyZW5jZSB0byBvbmUgb2YgdGhlXG4gICAgLy8gcmVnZXhlc1xuICAgIGxldCByZWdleCA9IHRleHRFbmRSZWdleDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICBjb25zdCBzID0gc3RyaW5nc1tpXTtcbiAgICAgICAgLy8gVGhlIGluZGV4IG9mIHRoZSBlbmQgb2YgdGhlIGxhc3QgYXR0cmlidXRlIG5hbWUuIFdoZW4gdGhpcyBpc1xuICAgICAgICAvLyBwb3NpdGl2ZSBhdCBlbmQgb2YgYSBzdHJpbmcsIGl0IG1lYW5zIHdlJ3JlIGluIGFuIGF0dHJpYnV0ZSB2YWx1ZVxuICAgICAgICAvLyBwb3NpdGlvbiBhbmQgbmVlZCB0byByZXdyaXRlIHRoZSBhdHRyaWJ1dGUgbmFtZS5cbiAgICAgICAgLy8gV2UgYWxzbyB1c2UgYSBzcGVjaWFsIHZhbHVlIG9mIC0yIHRvIGluZGljYXRlIHRoYXQgd2UgZW5jb3VudGVyZWRcbiAgICAgICAgLy8gdGhlIGVuZCBvZiBhIHN0cmluZyBpbiBhdHRyaWJ1dGUgbmFtZSBwb3NpdGlvbi5cbiAgICAgICAgbGV0IGF0dHJOYW1lRW5kSW5kZXggPSAtMTtcbiAgICAgICAgbGV0IGF0dHJOYW1lO1xuICAgICAgICBsZXQgbGFzdEluZGV4ID0gMDtcbiAgICAgICAgbGV0IG1hdGNoO1xuICAgICAgICAvLyBUaGUgY29uZGl0aW9ucyBpbiB0aGlzIGxvb3AgaGFuZGxlIHRoZSBjdXJyZW50IHBhcnNlIHN0YXRlLCBhbmQgdGhlXG4gICAgICAgIC8vIGFzc2lnbm1lbnRzIHRvIHRoZSBgcmVnZXhgIHZhcmlhYmxlIGFyZSB0aGUgc3RhdGUgdHJhbnNpdGlvbnMuXG4gICAgICAgIHdoaWxlIChsYXN0SW5kZXggPCBzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIHN0YXJ0IHNlYXJjaGluZyBmcm9tIHdoZXJlIHdlIHByZXZpb3VzbHkgbGVmdCBvZmZcbiAgICAgICAgICAgIHJlZ2V4Lmxhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICAgIG1hdGNoID0gcmVnZXguZXhlYyhzKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdEluZGV4ID0gcmVnZXgubGFzdEluZGV4O1xuICAgICAgICAgICAgaWYgKHJlZ2V4ID09PSB0ZXh0RW5kUmVnZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hbQ09NTUVOVF9TVEFSVF0gPT09ICchLS0nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gY29tbWVudEVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtDT01NRU5UX1NUQVJUXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIHN0YXJ0ZWQgYSB3ZWlyZCBjb21tZW50LCBsaWtlIDwve1xuICAgICAgICAgICAgICAgICAgICByZWdleCA9IGNvbW1lbnQyRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoW1RBR19OQU1FXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyYXdUZXh0RWxlbWVudC50ZXN0KG1hdGNoW1RBR19OQU1FXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlY29yZCBpZiB3ZSBlbmNvdW50ZXIgYSByYXctdGV4dCBlbGVtZW50LiBXZSdsbCBzd2l0Y2ggdG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgcmVnZXggYXQgdGhlIGVuZCBvZiB0aGUgdGFnLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3VGV4dEVuZFJlZ2V4ID0gbmV3IFJlZ0V4cChgPC8ke21hdGNoW1RBR19OQU1FXX1gLCAnZycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoW0RZTkFNSUNfVEFHX05BTUVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JpbmRpbmdzIGluIHRhZyBuYW1lcyBhcmUgbm90IHN1cHBvcnRlZC4gUGxlYXNlIHVzZSBzdGF0aWMgdGVtcGxhdGVzIGluc3RlYWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTZWUgaHR0cHM6Ly9saXQuZGV2L2RvY3MvdGVtcGxhdGVzL2V4cHJlc3Npb25zLyNzdGF0aWMtZXhwcmVzc2lvbnMnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZWdleCA9IHRhZ0VuZFJlZ2V4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2V4ID09PSB0YWdFbmRSZWdleCkge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaFtFTlRJUkVfTUFUQ0hdID09PSAnPicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5kIG9mIGEgdGFnLiBJZiB3ZSBoYWQgc3RhcnRlZCBhIHJhdy10ZXh0IGVsZW1lbnQsIHVzZSB0aGF0XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlZ2V4XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gcmF3VGV4dEVuZFJlZ2V4ICE9PSBudWxsICYmIHJhd1RleHRFbmRSZWdleCAhPT0gdm9pZCAwID8gcmF3VGV4dEVuZFJlZ2V4IDogdGV4dEVuZFJlZ2V4O1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBtYXkgYmUgZW5kaW5nIGFuIHVucXVvdGVkIGF0dHJpYnV0ZSB2YWx1ZSwgc28gbWFrZSBzdXJlIHdlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsZWFyIGFueSBwZW5kaW5nIGF0dHJOYW1lRW5kSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWVFbmRJbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtYXRjaFtBVFRSSUJVVEVfTkFNRV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBBdHRyaWJ1dGUgbmFtZSBwb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZUVuZEluZGV4ID0gLTI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhdHRyTmFtZUVuZEluZGV4ID0gcmVnZXgubGFzdEluZGV4IC0gbWF0Y2hbU1BBQ0VTX0FORF9FUVVBTFNdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgYXR0ck5hbWUgPSBtYXRjaFtBVFRSSUJVVEVfTkFNRV07XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoW1FVT1RFX0NIQVJdID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRhZ0VuZFJlZ2V4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtYXRjaFtRVU9URV9DSEFSXSA9PT0gJ1wiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVnZXggPT09IGRvdWJsZVF1b3RlQXR0ckVuZFJlZ2V4IHx8XG4gICAgICAgICAgICAgICAgcmVnZXggPT09IHNpbmdsZVF1b3RlQXR0ckVuZFJlZ2V4KSB7XG4gICAgICAgICAgICAgICAgcmVnZXggPSB0YWdFbmRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlZ2V4ID09PSBjb21tZW50RW5kUmVnZXggfHwgcmVnZXggPT09IGNvbW1lbnQyRW5kUmVnZXgpIHtcbiAgICAgICAgICAgICAgICByZWdleCA9IHRleHRFbmRSZWdleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE5vdCBvbmUgb2YgdGhlIGZpdmUgc3RhdGUgcmVnZXhlcywgc28gaXQgbXVzdCBiZSB0aGUgZHluYW1pY2FsbHlcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGVkIHJhdyB0ZXh0IHJlZ2V4IGFuZCB3ZSdyZSBhdCB0aGUgY2xvc2Ugb2YgdGhhdCBlbGVtZW50LlxuICAgICAgICAgICAgICAgIHJlZ2V4ID0gdGFnRW5kUmVnZXg7XG4gICAgICAgICAgICAgICAgcmF3VGV4dEVuZFJlZ2V4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIGF0dHJOYW1lRW5kSW5kZXgsIHdoaWNoIGluZGljYXRlcyB0aGF0IHdlIHNob3VsZFxuICAgICAgICAgICAgLy8gcmV3cml0ZSB0aGUgYXR0cmlidXRlIG5hbWUsIGFzc2VydCB0aGF0IHdlJ3JlIGluIGEgdmFsaWQgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBwb3NpdGlvbiAtIGVpdGhlciBpbiBhIHRhZywgb3IgYSBxdW90ZWQgYXR0cmlidXRlIHZhbHVlLlxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTEgfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gdGFnRW5kUmVnZXggfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gc2luZ2xlUXVvdGVBdHRyRW5kUmVnZXggfHxcbiAgICAgICAgICAgICAgICByZWdleCA9PT0gZG91YmxlUXVvdGVBdHRyRW5kUmVnZXgsICd1bmV4cGVjdGVkIHBhcnNlIHN0YXRlIEInKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBoYXZlIGZvdXIgY2FzZXM6XG4gICAgICAgIC8vICAxLiBXZSdyZSBpbiB0ZXh0IHBvc2l0aW9uLCBhbmQgbm90IGluIGEgcmF3IHRleHQgZWxlbWVudFxuICAgICAgICAvLyAgICAgKHJlZ2V4ID09PSB0ZXh0RW5kUmVnZXgpOiBpbnNlcnQgYSBjb21tZW50IG1hcmtlci5cbiAgICAgICAgLy8gIDIuIFdlIGhhdmUgYSBub24tbmVnYXRpdmUgYXR0ck5hbWVFbmRJbmRleCB3aGljaCBtZWFucyB3ZSBuZWVkIHRvXG4gICAgICAgIC8vICAgICByZXdyaXRlIHRoZSBhdHRyaWJ1dGUgbmFtZSB0byBhZGQgYSBib3VuZCBhdHRyaWJ1dGUgc3VmZml4LlxuICAgICAgICAvLyAgMy4gV2UncmUgYXQgdGhlIG5vbi1maXJzdCBiaW5kaW5nIGluIGEgbXVsdGktYmluZGluZyBhdHRyaWJ1dGUsIHVzZSBhXG4gICAgICAgIC8vICAgICBwbGFpbiBtYXJrZXIuXG4gICAgICAgIC8vICA0LiBXZSdyZSBzb21ld2hlcmUgZWxzZSBpbnNpZGUgdGhlIHRhZy4gSWYgd2UncmUgaW4gYXR0cmlidXRlIG5hbWVcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uIChhdHRyTmFtZUVuZEluZGV4ID09PSAtMiksIGFkZCBhIHNlcXVlbnRpYWwgc3VmZml4IHRvXG4gICAgICAgIC8vICAgICBnZW5lcmF0ZSBhIHVuaXF1ZSBhdHRyaWJ1dGUgbmFtZS5cbiAgICAgICAgLy8gRGV0ZWN0IGEgYmluZGluZyBuZXh0IHRvIHNlbGYtY2xvc2luZyB0YWcgZW5kIGFuZCBpbnNlcnQgYSBzcGFjZSB0b1xuICAgICAgICAvLyBzZXBhcmF0ZSB0aGUgbWFya2VyIGZyb20gdGhlIHRhZyBlbmQ6XG4gICAgICAgIGNvbnN0IGVuZCA9IHJlZ2V4ID09PSB0YWdFbmRSZWdleCAmJiBzdHJpbmdzW2kgKyAxXS5zdGFydHNXaXRoKCcvPicpID8gJyAnIDogJyc7XG4gICAgICAgIGh0bWwgKz1cbiAgICAgICAgICAgIHJlZ2V4ID09PSB0ZXh0RW5kUmVnZXhcbiAgICAgICAgICAgICAgICA/IHMgKyBub2RlTWFya2VyXG4gICAgICAgICAgICAgICAgOiBhdHRyTmFtZUVuZEluZGV4ID49IDBcbiAgICAgICAgICAgICAgICAgICAgPyAoYXR0ck5hbWVzLnB1c2goYXR0ck5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcy5zbGljZSgwLCBhdHRyTmFtZUVuZEluZGV4KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm91bmRBdHRyaWJ1dGVTdWZmaXggK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuc2xpY2UoYXR0ck5hbWVFbmRJbmRleCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlciArXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRcbiAgICAgICAgICAgICAgICAgICAgOiBzICtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlciArXG4gICAgICAgICAgICAgICAgICAgICAgICAoYXR0ck5hbWVFbmRJbmRleCA9PT0gLTIgPyAoYXR0ck5hbWVzLnB1c2godW5kZWZpbmVkKSwgaSkgOiBlbmQpO1xuICAgIH1cbiAgICBjb25zdCBodG1sUmVzdWx0ID0gaHRtbCArIChzdHJpbmdzW2xdIHx8ICc8Pz4nKSArICh0eXBlID09PSBTVkdfUkVTVUxUID8gJzwvc3ZnPicgOiAnJyk7XG4gICAgLy8gQSBzZWN1cml0eSBjaGVjayB0byBwcmV2ZW50IHNwb29maW5nIG9mIExpdCB0ZW1wbGF0ZSByZXN1bHRzLlxuICAgIC8vIEluIHRoZSBmdXR1cmUsIHdlIG1heSBiZSBhYmxlIHRvIHJlcGxhY2UgdGhpcyB3aXRoIEFycmF5LmlzVGVtcGxhdGVPYmplY3QsXG4gICAgLy8gdGhvdWdoIHdlIG1pZ2h0IG5lZWQgdG8gbWFrZSB0aGF0IGNoZWNrIGluc2lkZSBvZiB0aGUgaHRtbCBhbmQgc3ZnXG4gICAgLy8gZnVuY3Rpb25zLCBiZWNhdXNlIHByZWNvbXBpbGVkIHRlbXBsYXRlcyBkb24ndCBjb21lIGluIGFzXG4gICAgLy8gVGVtcGxhdGVTdHJpbmdBcnJheSBvYmplY3RzLlxuICAgIGlmICghQXJyYXkuaXNBcnJheShzdHJpbmdzKSB8fCAhc3RyaW5ncy5oYXNPd25Qcm9wZXJ0eSgncmF3JykpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSAnaW52YWxpZCB0ZW1wbGF0ZSBzdHJpbmdzIGFycmF5JztcbiAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gYFxuICAgICAgICAgIEludGVybmFsIEVycm9yOiBleHBlY3RlZCB0ZW1wbGF0ZSBzdHJpbmdzIHRvIGJlIGFuIGFycmF5XG4gICAgICAgICAgd2l0aCBhICdyYXcnIGZpZWxkLiBGYWtpbmcgYSB0ZW1wbGF0ZSBzdHJpbmdzIGFycmF5IGJ5XG4gICAgICAgICAgY2FsbGluZyBodG1sIG9yIHN2ZyBsaWtlIGFuIG9yZGluYXJ5IGZ1bmN0aW9uIGlzIGVmZmVjdGl2ZWx5XG4gICAgICAgICAgdGhlIHNhbWUgYXMgY2FsbGluZyB1bnNhZmVIdG1sIGFuZCBjYW4gbGVhZCB0byBtYWpvciBzZWN1cml0eVxuICAgICAgICAgIGlzc3VlcywgZS5nLiBvcGVuaW5nIHlvdXIgY29kZSB1cCB0byBYU1MgYXR0YWNrcy5cblxuICAgICAgICAgIElmIHlvdSdyZSB1c2luZyB0aGUgaHRtbCBvciBzdmcgdGFnZ2VkIHRlbXBsYXRlIGZ1bmN0aW9ucyBub3JtYWxseVxuICAgICAgICAgIGFuZCBhbmQgc3RpbGwgc2VlaW5nIHRoaXMgZXJyb3IsIHBsZWFzZSBmaWxlIGEgYnVnIGF0XG4gICAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2xpdC9saXQvaXNzdWVzL25ldz90ZW1wbGF0ZT1idWdfcmVwb3J0Lm1kXG4gICAgICAgICAgYW5kIGluY2x1ZGUgaW5mb3JtYXRpb24gYWJvdXQgeW91ciBidWlsZCB0b29saW5nLCBpZiBhbnkuXG4gICAgICAgIGBcbiAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcbiAqL2csICdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIC8vIFJldHVybmVkIGFzIGFuIGFycmF5IGZvciB0ZXJzZW5lc3NcbiAgICByZXR1cm4gW1xuICAgICAgICBwb2xpY3kgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBwb2xpY3kuY3JlYXRlSFRNTChodG1sUmVzdWx0KVxuICAgICAgICAgICAgOiBodG1sUmVzdWx0LFxuICAgICAgICBhdHRyTmFtZXMsXG4gICAgXTtcbn07XG5jbGFzcyBUZW1wbGF0ZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICB7IHN0cmluZ3MsIFsnXyRsaXRUeXBlJCddOiB0eXBlIH0sIG9wdGlvbnMpIHtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLnBhcnRzID0gW107XG4gICAgICAgIGxldCBub2RlO1xuICAgICAgICBsZXQgbm9kZUluZGV4ID0gMDtcbiAgICAgICAgbGV0IGF0dHJOYW1lSW5kZXggPSAwO1xuICAgICAgICBjb25zdCBwYXJ0Q291bnQgPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gdGhpcy5wYXJ0cztcbiAgICAgICAgLy8gQ3JlYXRlIHRlbXBsYXRlIGVsZW1lbnRcbiAgICAgICAgY29uc3QgW2h0bWwsIGF0dHJOYW1lc10gPSBnZXRUZW1wbGF0ZUh0bWwoc3RyaW5ncywgdHlwZSk7XG4gICAgICAgIHRoaXMuZWwgPSBUZW1wbGF0ZS5jcmVhdGVFbGVtZW50KGh0bWwsIG9wdGlvbnMpO1xuICAgICAgICB3YWxrZXIuY3VycmVudE5vZGUgPSB0aGlzLmVsLmNvbnRlbnQ7XG4gICAgICAgIC8vIFJlcGFyZW50IFNWRyBub2RlcyBpbnRvIHRlbXBsYXRlIHJvb3RcbiAgICAgICAgaWYgKHR5cGUgPT09IFNWR19SRVNVTFQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmVsLmNvbnRlbnQ7XG4gICAgICAgICAgICBjb25zdCBzdmdFbGVtZW50ID0gY29udGVudC5maXJzdENoaWxkO1xuICAgICAgICAgICAgc3ZnRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kKC4uLnN2Z0VsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2FsayB0aGUgdGVtcGxhdGUgdG8gZmluZCBiaW5kaW5nIG1hcmtlcnMgYW5kIGNyZWF0ZSBUZW1wbGF0ZVBhcnRzXG4gICAgICAgIHdoaWxlICgobm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpKSAhPT0gbnVsbCAmJiBwYXJ0cy5sZW5ndGggPCBwYXJ0Q291bnQpIHtcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKERFVl9NT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhZyA9IG5vZGUubG9jYWxOYW1lO1xuICAgICAgICAgICAgICAgICAgICAvLyBXYXJuIGlmIGB0ZXh0YXJlYWAgaW5jbHVkZXMgYW4gZXhwcmVzc2lvbiBhbmQgdGhyb3cgaWYgYHRlbXBsYXRlYFxuICAgICAgICAgICAgICAgICAgICAvLyBkb2VzIHNpbmNlIHRoZXNlIGFyZSBub3Qgc3VwcG9ydGVkLiBXZSBkbyB0aGlzIGJ5IGNoZWNraW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIGlubmVySFRNTCBmb3IgYW55dGhpbmcgdGhhdCBsb29rcyBsaWtlIGEgbWFya2VyLiBUaGlzIGNhdGNoZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FzZXMgbGlrZSBiaW5kaW5ncyBpbiB0ZXh0YXJlYSB0aGVyZSBtYXJrZXJzIHR1cm4gaW50byB0ZXh0IG5vZGVzLlxuICAgICAgICAgICAgICAgICAgICBpZiAoL14oPzp0ZXh0YXJlYXx0ZW1wbGF0ZSkkL2kudGVzdCh0YWcpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmlubmVySFRNTC5pbmNsdWRlcyhtYXJrZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtID0gYEV4cHJlc3Npb25zIGFyZSBub3Qgc3VwcG9ydGVkIGluc2lkZSBcXGAke3RhZ31cXGAgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGVsZW1lbnRzLiBTZWUgaHR0cHM6Ly9saXQuZGV2L21zZy9leHByZXNzaW9uLWluLSR7dGFnfSBmb3IgbW9yZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWcgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVXYXJuaW5nKCcnLCBtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBUT0RPIChqdXN0aW5mYWduYW5pKTogZm9yIGF0dGVtcHRlZCBkeW5hbWljIHRhZyBuYW1lcywgd2UgZG9uJ3RcbiAgICAgICAgICAgICAgICAvLyBpbmNyZW1lbnQgdGhlIGJpbmRpbmdJbmRleCwgYW5kIGl0J2xsIGJlIG9mZiBieSAxIGluIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gYW5kIG9mZiBieSB0d28gYWZ0ZXIgaXQuXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuaGFzQXR0cmlidXRlcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGRlZmVyIHJlbW92aW5nIGJvdW5kIGF0dHJpYnV0ZXMgYmVjYXVzZSBvbiBJRSB3ZSBtaWdodCBub3QgYmVcbiAgICAgICAgICAgICAgICAgICAgLy8gaXRlcmF0aW5nIGF0dHJpYnV0ZXMgaW4gdGhlaXIgdGVtcGxhdGUgb3JkZXIsIGFuZCB3b3VsZCBzb21ldGltZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGFuIGF0dHJpYnV0ZSB0aGF0IHdlIHN0aWxsIG5lZWQgdG8gY3JlYXRlIGEgcGFydCBmb3IuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJzVG9SZW1vdmUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIG5vZGUuZ2V0QXR0cmlidXRlTmFtZXMoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYG5hbWVgIGlzIHRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgd2UncmUgaXRlcmF0aW5nIG92ZXIsIGJ1dCBub3RcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIF9uZWNjZXNzYXJpbHlfIHRoZSBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUgd2Ugd2lsbCBjcmVhdGUgYSBwYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IuIFRoZXkgY2FuIGJlIGRpZmZlcmVudCBpbiBicm93c2VycyB0aGF0IGRvbid0IGl0ZXJhdGUgb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gc291cmNlIG9yZGVyLiBJbiB0aGF0IGNhc2UgdGhlIGF0dHJOYW1lcyBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGFpbnMgdGhlIGF0dHJpYnV0ZSBuYW1lIHdlJ2xsIHByb2Nlc3MgbmV4dC4gV2Ugb25seSBuZWVkIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlIG5hbWUgaGVyZSB0byBrbm93IGlmIHdlIHNob3VsZCBwcm9jZXNzIGEgYm91bmQgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbiB0aGlzIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZS5lbmRzV2l0aChib3VuZEF0dHJpYnV0ZVN1ZmZpeCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLnN0YXJ0c1dpdGgobWFya2VyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWxOYW1lID0gYXR0ck5hbWVzW2F0dHJOYW1lSW5kZXgrK107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnNUb1JlbW92ZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWFsTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvd2VyY2FzZSBmb3IgY2FzZS1zZW5zaXRpdmUgU1ZHIGF0dHJpYnV0ZXMgbGlrZSB2aWV3Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbm9kZS5nZXRBdHRyaWJ1dGUocmVhbE5hbWUudG9Mb3dlckNhc2UoKSArIGJvdW5kQXR0cmlidXRlU3VmZml4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGljcyA9IHZhbHVlLnNwbGl0KG1hcmtlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG0gPSAvKFsuP0BdKT8oLiopLy5leGVjKHJlYWxOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBVFRSSUJVVEVfUEFSVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBub2RlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBtWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nczogc3RhdGljcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0b3I6IG1bMV0gPT09ICcuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gUHJvcGVydHlQYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtWzFdID09PSAnPydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBCb29sZWFuQXR0cmlidXRlUGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1bMV0gPT09ICdAJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBFdmVudFBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogQXR0cmlidXRlUGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEVMRU1FTlRfUEFSVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBub2RlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgYXR0cnNUb1JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVE9ETyAoanVzdGluZmFnbmFuaSk6IGJlbmNobWFyayB0aGUgcmVnZXggYWdhaW5zdCB0ZXN0aW5nIGZvciBlYWNoXG4gICAgICAgICAgICAgICAgLy8gb2YgdGhlIDMgcmF3IHRleHQgZWxlbWVudCBuYW1lcy5cbiAgICAgICAgICAgICAgICBpZiAocmF3VGV4dEVsZW1lbnQudGVzdChub2RlLnRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciByYXcgdGV4dCBlbGVtZW50cyB3ZSBuZWVkIHRvIHNwbGl0IHRoZSB0ZXh0IGNvbnRlbnQgb25cbiAgICAgICAgICAgICAgICAgICAgLy8gbWFya2VycywgY3JlYXRlIGEgVGV4dCBub2RlIGZvciBlYWNoIHNlZ21lbnQsIGFuZCBjcmVhdGVcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBUZW1wbGF0ZVBhcnQgZm9yIGVhY2ggbWFya2VyLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdzID0gbm9kZS50ZXh0Q29udGVudC5zcGxpdChtYXJrZXIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0SW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gdHJ1c3RlZFR5cGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0cnVzdGVkVHlwZXMuZW1wdHlTY3JpcHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgdGV4dCBub2RlIGZvciBlYWNoIGxpdGVyYWwgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlc2Ugbm9kZXMgYXJlIGFsc28gdXNlZCBhcyB0aGUgbWFya2VycyBmb3Igbm9kZSBwYXJ0c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgY2FuJ3QgdXNlIGVtcHR5IHRleHQgbm9kZXMgYXMgbWFya2VycyBiZWNhdXNlIHRoZXkncmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vcm1hbGl6ZWQgd2hlbiBjbG9uaW5nIGluIElFIChjb3VsZCBzaW1wbGlmeSB3aGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJRSBpcyBubyBsb25nZXIgc3VwcG9ydGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXN0SW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kKHN0cmluZ3NbaV0sIGNyZWF0ZU1hcmtlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXYWxrIHBhc3QgdGhlIG1hcmtlciBub2RlIHdlIGp1c3QgYWRkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWxrZXIubmV4dE5vZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHsgdHlwZTogQ0hJTERfUEFSVCwgaW5kZXg6ICsrbm9kZUluZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90ZSBiZWNhdXNlIHRoaXMgbWFya2VyIGlzIGFkZGVkIGFmdGVyIHRoZSB3YWxrZXIncyBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub2RlLCBpdCB3aWxsIGJlIHdhbGtlZCB0byBpbiB0aGUgb3V0ZXIgbG9vcCAoYW5kIGlnbm9yZWQpLCBzb1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0byBhZGp1c3Qgbm9kZUluZGV4IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kKHN0cmluZ3NbbGFzdEluZGV4XSwgY3JlYXRlTWFya2VyKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBub2RlLmRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPT09IG1hcmtlck1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goeyB0eXBlOiBDSElMRF9QQVJULCBpbmRleDogbm9kZUluZGV4IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChpID0gbm9kZS5kYXRhLmluZGV4T2YobWFya2VyLCBpICsgMSkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tbWVudCBub2RlIGhhcyBhIGJpbmRpbmcgbWFya2VyIGluc2lkZSwgbWFrZSBhbiBpbmFjdGl2ZSBwYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgYmluZGluZyB3b24ndCB3b3JrLCBidXQgc3Vic2VxdWVudCBiaW5kaW5ncyB3aWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHsgdHlwZTogQ09NTUVOVF9QQVJULCBpbmRleDogbm9kZUluZGV4IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSB0byB0aGUgZW5kIG9mIHRoZSBtYXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgaSArPSBtYXJrZXIubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICBraW5kOiAndGVtcGxhdGUgcHJlcCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcyxcbiAgICAgICAgICAgIGNsb25hYmxlVGVtcGxhdGU6IHRoaXMuZWwsXG4gICAgICAgICAgICBwYXJ0czogdGhpcy5wYXJ0cyxcbiAgICAgICAgICAgIHN0cmluZ3MsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBPdmVycmlkZGVuIHZpYSBgbGl0SHRtbFBvbHlmaWxsU3VwcG9ydGAgdG8gcHJvdmlkZSBwbGF0Zm9ybSBzdXBwb3J0LlxuICAgIC8qKiBAbm9jb2xsYXBzZSAqL1xuICAgIHN0YXRpYyBjcmVhdGVFbGVtZW50KGh0bWwsIF9vcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICBlbC5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVzb2x2ZURpcmVjdGl2ZShwYXJ0LCB2YWx1ZSwgcGFyZW50ID0gcGFydCwgYXR0cmlidXRlSW5kZXgpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICB2YXIgX2Q7XG4gICAgLy8gQmFpbCBlYXJseSBpZiB0aGUgdmFsdWUgaXMgZXhwbGljaXRseSBub0NoYW5nZS4gTm90ZSwgdGhpcyBtZWFucyBhbnlcbiAgICAvLyBuZXN0ZWQgZGlyZWN0aXZlIGlzIHN0aWxsIGF0dGFjaGVkIGFuZCBpcyBub3QgcnVuLlxuICAgIGlmICh2YWx1ZSA9PT0gbm9DaGFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBsZXQgY3VycmVudERpcmVjdGl2ZSA9IGF0dHJpYnV0ZUluZGV4ICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyAoX2EgPSBwYXJlbnQuX19kaXJlY3RpdmVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbYXR0cmlidXRlSW5kZXhdXG4gICAgICAgIDogcGFyZW50Ll9fZGlyZWN0aXZlO1xuICAgIGNvbnN0IG5leHREaXJlY3RpdmVDb25zdHJ1Y3RvciA9IGlzUHJpbWl0aXZlKHZhbHVlKVxuICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICA6IC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgICAgICB2YWx1ZVsnXyRsaXREaXJlY3RpdmUkJ107XG4gICAgaWYgKChjdXJyZW50RGlyZWN0aXZlID09PSBudWxsIHx8IGN1cnJlbnREaXJlY3RpdmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnREaXJlY3RpdmUuY29uc3RydWN0b3IpICE9PSBuZXh0RGlyZWN0aXZlQ29uc3RydWN0b3IpIHtcbiAgICAgICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICAgICAgKF9iID0gY3VycmVudERpcmVjdGl2ZSA9PT0gbnVsbCB8fCBjdXJyZW50RGlyZWN0aXZlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50RGlyZWN0aXZlWydfJG5vdGlmeURpcmVjdGl2ZUNvbm5lY3Rpb25DaGFuZ2VkJ10pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKGN1cnJlbnREaXJlY3RpdmUsIGZhbHNlKTtcbiAgICAgICAgaWYgKG5leHREaXJlY3RpdmVDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjdXJyZW50RGlyZWN0aXZlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudERpcmVjdGl2ZSA9IG5ldyBuZXh0RGlyZWN0aXZlQ29uc3RydWN0b3IocGFydCk7XG4gICAgICAgICAgICBjdXJyZW50RGlyZWN0aXZlLl8kaW5pdGlhbGl6ZShwYXJ0LCBwYXJlbnQsIGF0dHJpYnV0ZUluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0cmlidXRlSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgKChfYyA9IChfZCA9IHBhcmVudCkuX19kaXJlY3RpdmVzKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAoX2QuX19kaXJlY3RpdmVzID0gW10pKVthdHRyaWJ1dGVJbmRleF0gPVxuICAgICAgICAgICAgICAgIGN1cnJlbnREaXJlY3RpdmU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQuX19kaXJlY3RpdmUgPSBjdXJyZW50RGlyZWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjdXJyZW50RGlyZWN0aXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSByZXNvbHZlRGlyZWN0aXZlKHBhcnQsIGN1cnJlbnREaXJlY3RpdmUuXyRyZXNvbHZlKHBhcnQsIHZhbHVlLnZhbHVlcyksIGN1cnJlbnREaXJlY3RpdmUsIGF0dHJpYnV0ZUluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4gKiBBbiB1cGRhdGVhYmxlIGluc3RhbmNlIG9mIGEgVGVtcGxhdGUuIEhvbGRzIHJlZmVyZW5jZXMgdG8gdGhlIFBhcnRzIHVzZWQgdG9cbiAqIHVwZGF0ZSB0aGUgdGVtcGxhdGUgaW5zdGFuY2UuXG4gKi9cbmNsYXNzIFRlbXBsYXRlSW5zdGFuY2Uge1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlLCBwYXJlbnQpIHtcbiAgICAgICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgICAgICB0aGlzLl9wYXJ0cyA9IFtdO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl8kdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICB9XG4gICAgLy8gQ2FsbGVkIGJ5IENoaWxkUGFydCBwYXJlbnROb2RlIGdldHRlclxuICAgIGdldCBwYXJlbnROb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJHBhcmVudC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICAvLyBTZWUgY29tbWVudCBpbiBEaXNjb25uZWN0YWJsZSBpbnRlcmZhY2UgZm9yIHdoeSB0aGlzIGlzIGEgZ2V0dGVyXG4gICAgZ2V0IF8kaXNDb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kcGFyZW50Ll8kaXNDb25uZWN0ZWQ7XG4gICAgfVxuICAgIC8vIFRoaXMgbWV0aG9kIGlzIHNlcGFyYXRlIGZyb20gdGhlIGNvbnN0cnVjdG9yIGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm4gYVxuICAgIC8vIERvY3VtZW50RnJhZ21lbnQgYW5kIHdlIGRvbid0IHdhbnQgdG8gaG9sZCBvbnRvIGl0IHdpdGggYW4gaW5zdGFuY2UgZmllbGQuXG4gICAgX2Nsb25lKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCB7IGVsOiB7IGNvbnRlbnQgfSwgcGFydHM6IHBhcnRzLCB9ID0gdGhpcy5fJHRlbXBsYXRlO1xuICAgICAgICBjb25zdCBmcmFnbWVudCA9ICgoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuY3JlYXRpb25TY29wZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZCkuaW1wb3J0Tm9kZShjb250ZW50LCB0cnVlKTtcbiAgICAgICAgd2Fsa2VyLmN1cnJlbnROb2RlID0gZnJhZ21lbnQ7XG4gICAgICAgIGxldCBub2RlID0gd2Fsa2VyLm5leHROb2RlKCk7XG4gICAgICAgIGxldCBub2RlSW5kZXggPSAwO1xuICAgICAgICBsZXQgcGFydEluZGV4ID0gMDtcbiAgICAgICAgbGV0IHRlbXBsYXRlUGFydCA9IHBhcnRzWzBdO1xuICAgICAgICB3aGlsZSAodGVtcGxhdGVQYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChub2RlSW5kZXggPT09IHRlbXBsYXRlUGFydC5pbmRleCkge1xuICAgICAgICAgICAgICAgIGxldCBwYXJ0O1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wbGF0ZVBhcnQudHlwZSA9PT0gQ0hJTERfUEFSVCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gbmV3IENoaWxkUGFydChub2RlLCBub2RlLm5leHRTaWJsaW5nLCB0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGVtcGxhdGVQYXJ0LnR5cGUgPT09IEFUVFJJQlVURV9QQVJUKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBuZXcgdGVtcGxhdGVQYXJ0LmN0b3Iobm9kZSwgdGVtcGxhdGVQYXJ0Lm5hbWUsIHRlbXBsYXRlUGFydC5zdHJpbmdzLCB0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGVtcGxhdGVQYXJ0LnR5cGUgPT09IEVMRU1FTlRfUEFSVCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gbmV3IEVsZW1lbnRQYXJ0KG5vZGUsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9wYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlUGFydCA9IHBhcnRzWysrcGFydEluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlSW5kZXggIT09ICh0ZW1wbGF0ZVBhcnQgPT09IG51bGwgfHwgdGVtcGxhdGVQYXJ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0ZW1wbGF0ZVBhcnQuaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpO1xuICAgICAgICAgICAgICAgIG5vZGVJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG4gICAgX3VwZGF0ZSh2YWx1ZXMpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgdGhpcy5fcGFydHMpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICBraW5kOiAnc2V0IHBhcnQnLFxuICAgICAgICAgICAgICAgICAgICBwYXJ0LFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVzW2ldLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZUluZGV4OiBpLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlSW5zdGFuY2U6IHRoaXMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnQuc3RyaW5ncyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQuXyRzZXRWYWx1ZSh2YWx1ZXMsIHBhcnQsIGkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgbnVtYmVyIG9mIHZhbHVlcyB0aGUgcGFydCBjb25zdW1lcyBpcyBwYXJ0LnN0cmluZ3MubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSB2YWx1ZXMgYXJlIGluIGJldHdlZW4gdGVtcGxhdGUgc3BhbnMuIFdlIGluY3JlbWVudCBpIGJ5IDFcbiAgICAgICAgICAgICAgICAgICAgLy8gbGF0ZXIgaW4gdGhlIGxvb3AsIHNvIGluY3JlbWVudCBpdCBieSBwYXJ0LnN0cmluZ3MubGVuZ3RoIC0gMiBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGkgKz0gcGFydC5zdHJpbmdzLmxlbmd0aCAtIDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0Ll8kc2V0VmFsdWUodmFsdWVzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBDaGlsZFBhcnQge1xuICAgIGNvbnN0cnVjdG9yKHN0YXJ0Tm9kZSwgZW5kTm9kZSwgcGFyZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy50eXBlID0gQ0hJTERfUEFSVDtcbiAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbm90aGluZztcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBmaWVsZHMgd2lsbCBiZSBwYXRjaGVkIG9udG8gQ2hpbGRQYXJ0cyB3aGVuIHJlcXVpcmVkIGJ5XG4gICAgICAgIC8vIEFzeW5jRGlyZWN0aXZlXG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuXyRzdGFydE5vZGUgPSBzdGFydE5vZGU7XG4gICAgICAgIHRoaXMuXyRlbmROb2RlID0gZW5kTm9kZTtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgLy8gTm90ZSBfX2lzQ29ubmVjdGVkIGlzIG9ubHkgZXZlciBhY2Nlc3NlZCBvbiBSb290UGFydHMgKGkuZS4gd2hlbiB0aGVyZSBpc1xuICAgICAgICAvLyBubyBfJHBhcmVudCk7IHRoZSB2YWx1ZSBvbiBhIG5vbi1yb290LXBhcnQgaXMgXCJkb24ndCBjYXJlXCIsIGJ1dCBjaGVja2luZ1xuICAgICAgICAvLyBmb3IgcGFyZW50IHdvdWxkIGJlIG1vcmUgY29kZVxuICAgICAgICB0aGlzLl9faXNDb25uZWN0ZWQgPSAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaXNDb25uZWN0ZWQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHRydWU7XG4gICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgIC8vIEV4cGxpY2l0bHkgaW5pdGlhbGl6ZSBmb3IgY29uc2lzdGVudCBjbGFzcyBzaGFwZS5cbiAgICAgICAgICAgIHRoaXMuX3RleHRTYW5pdGl6ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gU2VlIGNvbW1lbnQgaW4gRGlzY29ubmVjdGFibGUgaW50ZXJmYWNlIGZvciB3aHkgdGhpcyBpcyBhIGdldHRlclxuICAgIGdldCBfJGlzQ29ubmVjdGVkKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAvLyBDaGlsZFBhcnRzIHRoYXQgYXJlIG5vdCBhdCB0aGUgcm9vdCBzaG91bGQgYWx3YXlzIGJlIGNyZWF0ZWQgd2l0aCBhXG4gICAgICAgIC8vIHBhcmVudDsgb25seSBSb290Q2hpbGROb2RlJ3Mgd29uJ3QsIHNvIHRoZXkgcmV0dXJuIHRoZSBsb2NhbCBpc0Nvbm5lY3RlZFxuICAgICAgICAvLyBzdGF0ZVxuICAgICAgICByZXR1cm4gKF9iID0gKF9hID0gdGhpcy5fJHBhcmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLl8kaXNDb25uZWN0ZWQpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IHRoaXMuX19pc0Nvbm5lY3RlZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIHBhcmVudCBub2RlIGludG8gd2hpY2ggdGhlIHBhcnQgcmVuZGVycyBpdHMgY29udGVudC5cbiAgICAgKlxuICAgICAqIEEgQ2hpbGRQYXJ0J3MgY29udGVudCBjb25zaXN0cyBvZiBhIHJhbmdlIG9mIGFkamFjZW50IGNoaWxkIG5vZGVzIG9mXG4gICAgICogYC5wYXJlbnROb2RlYCwgcG9zc2libHkgYm9yZGVyZWQgYnkgJ21hcmtlciBub2RlcycgKGAuc3RhcnROb2RlYCBhbmRcbiAgICAgKiBgLmVuZE5vZGVgKS5cbiAgICAgKlxuICAgICAqIC0gSWYgYm90aCBgLnN0YXJ0Tm9kZWAgYW5kIGAuZW5kTm9kZWAgYXJlIG5vbi1udWxsLCB0aGVuIHRoZSBwYXJ0J3MgY29udGVudFxuICAgICAqIGNvbnNpc3RzIG9mIGFsbCBzaWJsaW5ncyBiZXR3ZWVuIGAuc3RhcnROb2RlYCBhbmQgYC5lbmROb2RlYCwgZXhjbHVzaXZlbHkuXG4gICAgICpcbiAgICAgKiAtIElmIGAuc3RhcnROb2RlYCBpcyBub24tbnVsbCBidXQgYC5lbmROb2RlYCBpcyBudWxsLCB0aGVuIHRoZSBwYXJ0J3NcbiAgICAgKiBjb250ZW50IGNvbnNpc3RzIG9mIGFsbCBzaWJsaW5ncyBmb2xsb3dpbmcgYC5zdGFydE5vZGVgLCB1cCB0byBhbmRcbiAgICAgKiBpbmNsdWRpbmcgdGhlIGxhc3QgY2hpbGQgb2YgYC5wYXJlbnROb2RlYC4gSWYgYC5lbmROb2RlYCBpcyBub24tbnVsbCwgdGhlblxuICAgICAqIGAuc3RhcnROb2RlYCB3aWxsIGFsd2F5cyBiZSBub24tbnVsbC5cbiAgICAgKlxuICAgICAqIC0gSWYgYm90aCBgLmVuZE5vZGVgIGFuZCBgLnN0YXJ0Tm9kZWAgYXJlIG51bGwsIHRoZW4gdGhlIHBhcnQncyBjb250ZW50XG4gICAgICogY29uc2lzdHMgb2YgYWxsIGNoaWxkIG5vZGVzIG9mIGAucGFyZW50Tm9kZWAuXG4gICAgICovXG4gICAgZ2V0IHBhcmVudE5vZGUoKSB7XG4gICAgICAgIGxldCBwYXJlbnROb2RlID0gd3JhcCh0aGlzLl8kc3RhcnROb2RlKS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl8kcGFyZW50O1xuICAgICAgICBpZiAocGFyZW50ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHBhcmVudE5vZGUubm9kZVR5cGUgPT09IDExIC8qIE5vZGUuRE9DVU1FTlRfRlJBR01FTlQgKi8pIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBwYXJlbnROb2RlIGlzIGEgRG9jdW1lbnRGcmFnbWVudCwgaXQgbWF5IGJlIGJlY2F1c2UgdGhlIERPTSBpc1xuICAgICAgICAgICAgLy8gc3RpbGwgaW4gdGhlIGNsb25lZCBmcmFnbWVudCBkdXJpbmcgaW5pdGlhbCByZW5kZXI7IGlmIHNvLCBnZXQgdGhlIHJlYWxcbiAgICAgICAgICAgIC8vIHBhcmVudE5vZGUgdGhlIHBhcnQgd2lsbCBiZSBjb21taXR0ZWQgaW50byBieSBhc2tpbmcgdGhlIHBhcmVudC5cbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyZW50Tm9kZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIHBhcnQncyBsZWFkaW5nIG1hcmtlciBub2RlLCBpZiBhbnkuIFNlZSBgLnBhcmVudE5vZGVgIGZvciBtb3JlXG4gICAgICogaW5mb3JtYXRpb24uXG4gICAgICovXG4gICAgZ2V0IHN0YXJ0Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRzdGFydE5vZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJ0J3MgdHJhaWxpbmcgbWFya2VyIG5vZGUsIGlmIGFueS4gU2VlIGAucGFyZW50Tm9kZWAgZm9yIG1vcmVcbiAgICAgKiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBnZXQgZW5kTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRlbmROb2RlO1xuICAgIH1cbiAgICBfJHNldFZhbHVlKHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQgPSB0aGlzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKERFVl9NT0RFICYmIHRoaXMucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGlzIFxcYENoaWxkUGFydFxcYCBoYXMgbm8gXFxgcGFyZW50Tm9kZVxcYCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBhY2NlcHQgYSB2YWx1ZS4gVGhpcyBsaWtlbHkgbWVhbnMgdGhlIGVsZW1lbnQgY29udGFpbmluZyB0aGUgcGFydCB3YXMgbWFuaXB1bGF0ZWQgaW4gYW4gdW5zdXBwb3J0ZWQgd2F5IG91dHNpZGUgb2YgTGl0J3MgY29udHJvbCBzdWNoIHRoYXQgdGhlIHBhcnQncyBtYXJrZXIgbm9kZXMgd2VyZSBlamVjdGVkIGZyb20gRE9NLiBGb3IgZXhhbXBsZSwgc2V0dGluZyB0aGUgZWxlbWVudCdzIFxcYGlubmVySFRNTFxcYCBvciBcXGB0ZXh0Q29udGVudFxcYCBjYW4gZG8gdGhpcy5gKTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgdmFsdWUsIGRpcmVjdGl2ZVBhcmVudCk7XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIC8vIE5vbi1yZW5kZXJpbmcgY2hpbGQgdmFsdWVzLiBJdCdzIGltcG9ydGFudCB0aGF0IHRoZXNlIGRvIG5vdCByZW5kZXJcbiAgICAgICAgICAgIC8vIGVtcHR5IHRleHQgbm9kZXMgdG8gYXZvaWQgaXNzdWVzIHdpdGggcHJldmVudGluZyBkZWZhdWx0IDxzbG90PlxuICAgICAgICAgICAgLy8gZmFsbGJhY2sgY29udGVudC5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbm90aGluZyB8fCB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl8kY29tbWl0dGVkVmFsdWUgIT09IG5vdGhpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgbm90aGluZyB0byBjaGlsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogdGhpcy5fJHN0YXJ0Tm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogdGhpcy5fJGVuZE5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHRoaXMuXyRwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl8kY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlID0gbm90aGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlICE9PSB0aGlzLl8kY29tbWl0dGVkVmFsdWUgJiYgdmFsdWUgIT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tbWl0VGV4dCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlWydfJGxpdFR5cGUkJ10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0VGVtcGxhdGVSZXN1bHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlLm5vZGVUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChERVZfTU9ERSAmJiAoKF9hID0gdGhpcy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaG9zdCkgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tbWl0VGV4dChgW3Byb2JhYmxlIG1pc3Rha2U6IHJlbmRlcmVkIGEgdGVtcGxhdGUncyBob3N0IGluIGl0c2VsZiBgICtcbiAgICAgICAgICAgICAgICAgICAgYChjb21tb25seSBjYXVzZWQgYnkgd3JpdGluZyBcXCR7dGhpc30gaW4gYSB0ZW1wbGF0ZV1gKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEF0dGVtcHRlZCB0byByZW5kZXIgdGhlIHRlbXBsYXRlIGhvc3RgLCB2YWx1ZSwgYGluc2lkZSBpdHNlbGYuIFRoaXMgaXMgYWxtb3N0IGFsd2F5cyBhIG1pc3Rha2UsIGFuZCBpbiBkZXYgbW9kZSBgLCBgd2UgcmVuZGVyIHNvbWUgd2FybmluZyB0ZXh0LiBJbiBwcm9kdWN0aW9uIGhvd2V2ZXIsIHdlJ2xsIGAsIGByZW5kZXIgaXQsIHdoaWNoIHdpbGwgdXN1YWxseSByZXN1bHQgaW4gYW4gZXJyb3IsIGFuZCBzb21ldGltZXMgYCwgYGluIHRoZSBlbGVtZW50IGRpc2FwcGVhcmluZyBmcm9tIHRoZSBET00uYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNJdGVyYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdEl0ZXJhYmxlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrLCB3aWxsIHJlbmRlciB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICB0aGlzLl9jb21taXRUZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfaW5zZXJ0KG5vZGUsIHJlZiA9IHRoaXMuXyRlbmROb2RlKSB7XG4gICAgICAgIHJldHVybiB3cmFwKHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkucGFyZW50Tm9kZSkuaW5zZXJ0QmVmb3JlKG5vZGUsIHJlZik7XG4gICAgfVxuICAgIF9jb21taXROb2RlKHZhbHVlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHRoaXMuXyRjb21taXR0ZWRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjbGVhcigpO1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUyAmJlxuICAgICAgICAgICAgICAgIHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCAhPT0gbm9vcFNhbml0aXplcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGVOYW1lID0gKF9hID0gdGhpcy5fJHN0YXJ0Tm9kZS5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eubm9kZU5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudE5vZGVOYW1lID09PSAnU1RZTEUnIHx8IHBhcmVudE5vZGVOYW1lID09PSAnU0NSSVBUJykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9ICdGb3JiaWRkZW4nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnROb2RlTmFtZSA9PT0gJ1NUWUxFJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgTGl0IGRvZXMgbm90IHN1cHBvcnQgYmluZGluZyBpbnNpZGUgc3R5bGUgbm9kZXMuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFRoaXMgaXMgYSBzZWN1cml0eSByaXNrLCBhcyBzdHlsZSBpbmplY3Rpb24gYXR0YWNrcyBjYW4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZXhmaWx0cmF0ZSBkYXRhIGFuZCBzcG9vZiBVSXMuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYENvbnNpZGVyIGluc3RlYWQgdXNpbmcgY3NzXFxgLi4uXFxgIGxpdGVyYWxzIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRvIGNvbXBvc2Ugc3R5bGVzLCBhbmQgbWFrZSBkbyBkeW5hbWljIHN0eWxpbmcgd2l0aCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBjc3MgY3VzdG9tIHByb3BlcnRpZXMsIDo6cGFydHMsIDxzbG90PnMsIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGFuZCBieSBtdXRhdGluZyB0aGUgRE9NIHJhdGhlciB0aGFuIHN0eWxlc2hlZXRzLmA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYExpdCBkb2VzIG5vdCBzdXBwb3J0IGJpbmRpbmcgaW5zaWRlIHNjcmlwdCBub2Rlcy4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgVGhpcyBpcyBhIHNlY3VyaXR5IHJpc2ssIGFzIGl0IGNvdWxkIGFsbG93IGFyYml0cmFyeSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBjb2RlIGV4ZWN1dGlvbi5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgbm9kZScsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IHRoaXMuXyRzdGFydE5vZGUsXG4gICAgICAgICAgICAgICAgcGFyZW50OiB0aGlzLl8kcGFyZW50LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IHRoaXMuX2luc2VydCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2NvbW1pdFRleHQodmFsdWUpIHtcbiAgICAgICAgLy8gSWYgdGhlIGNvbW1pdHRlZCB2YWx1ZSBpcyBhIHByaW1pdGl2ZSBpdCBtZWFucyB3ZSBjYWxsZWQgX2NvbW1pdFRleHQgb25cbiAgICAgICAgLy8gdGhlIHByZXZpb3VzIHJlbmRlciwgYW5kIHdlIGtub3cgdGhhdCB0aGlzLl8kc3RhcnROb2RlLm5leHRTaWJsaW5nIGlzIGFcbiAgICAgICAgLy8gVGV4dCBub2RlLiBXZSBjYW4gbm93IGp1c3QgcmVwbGFjZSB0aGUgdGV4dCBjb250ZW50ICguZGF0YSkgb2YgdGhlIG5vZGUuXG4gICAgICAgIGlmICh0aGlzLl8kY29tbWl0dGVkVmFsdWUgIT09IG5vdGhpbmcgJiZcbiAgICAgICAgICAgIGlzUHJpbWl0aXZlKHRoaXMuXyRjb21taXR0ZWRWYWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB3cmFwKHRoaXMuXyRzdGFydE5vZGUpLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90ZXh0U2FuaXRpemVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGV4dFNhbml0aXplciA9IGNyZWF0ZVNhbml0aXplcihub2RlLCAnZGF0YScsICdwcm9wZXJ0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3RleHRTYW5pdGl6ZXIodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICBraW5kOiAnY29tbWl0IHRleHQnLFxuICAgICAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21taXROb2RlKHRleHROb2RlKTtcbiAgICAgICAgICAgICAgICAvLyBXaGVuIHNldHRpbmcgdGV4dCBjb250ZW50LCBmb3Igc2VjdXJpdHkgcHVycG9zZXMgaXQgbWF0dGVycyBhIGxvdFxuICAgICAgICAgICAgICAgIC8vIHdoYXQgdGhlIHBhcmVudCBpcy4gRm9yIGV4YW1wbGUsIDxzdHlsZT4gYW5kIDxzY3JpcHQ+IG5lZWQgdG8gYmVcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGVkIHdpdGggY2FyZSwgd2hpbGUgPHNwYW4+IGRvZXMgbm90LiBTbyBmaXJzdCB3ZSBuZWVkIHRvIHB1dCBhXG4gICAgICAgICAgICAgICAgLy8gdGV4dCBub2RlIGludG8gdGhlIGRvY3VtZW50LCB0aGVuIHdlIGNhbiBzYW5pdGl6ZSBpdHMgY29udGVudC5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdGV4dFNhbml0aXplciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RleHRTYW5pdGl6ZXIgPSBjcmVhdGVTYW5pdGl6ZXIodGV4dE5vZGUsICdkYXRhJywgJ3Byb3BlcnR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fdGV4dFNhbml0aXplcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCB0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogdGV4dE5vZGUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGV4dE5vZGUuZGF0YSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZShkLmNyZWF0ZVRleHROb2RlKHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAga2luZDogJ2NvbW1pdCB0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgbm9kZTogd3JhcCh0aGlzLl8kc3RhcnROb2RlKS5uZXh0U2libGluZyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgX2NvbW1pdFRlbXBsYXRlUmVzdWx0KHJlc3VsdCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgICAgIGNvbnN0IHsgdmFsdWVzLCBbJ18kbGl0VHlwZSQnXTogdHlwZSB9ID0gcmVzdWx0O1xuICAgICAgICAvLyBJZiAkbGl0VHlwZSQgaXMgYSBudW1iZXIsIHJlc3VsdCBpcyBhIHBsYWluIFRlbXBsYXRlUmVzdWx0IGFuZCB3ZSBnZXRcbiAgICAgICAgLy8gdGhlIHRlbXBsYXRlIGZyb20gdGhlIHRlbXBsYXRlIGNhY2hlLiBJZiBub3QsIHJlc3VsdCBpcyBhXG4gICAgICAgIC8vIENvbXBpbGVkVGVtcGxhdGVSZXN1bHQgYW5kIF8kbGl0VHlwZSQgaXMgYSBDb21waWxlZFRlbXBsYXRlIGFuZCB3ZSBuZWVkXG4gICAgICAgIC8vIHRvIGNyZWF0ZSB0aGUgPHRlbXBsYXRlPiBlbGVtZW50IHRoZSBmaXJzdCB0aW1lIHdlIHNlZSBpdC5cbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0eXBlb2YgdHlwZSA9PT0gJ251bWJlcidcbiAgICAgICAgICAgID8gdGhpcy5fJGdldFRlbXBsYXRlKHJlc3VsdClcbiAgICAgICAgICAgIDogKHR5cGUuZWwgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICh0eXBlLmVsID0gVGVtcGxhdGUuY3JlYXRlRWxlbWVudCh0eXBlLmgsIHRoaXMub3B0aW9ucykpLFxuICAgICAgICAgICAgICAgIHR5cGUpO1xuICAgICAgICBpZiAoKChfYSA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLl8kdGVtcGxhdGUpID09PSB0ZW1wbGF0ZSkge1xuICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICBraW5kOiAndGVtcGxhdGUgdXBkYXRpbmcnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLFxuICAgICAgICAgICAgICAgIGluc3RhbmNlOiB0aGlzLl8kY29tbWl0dGVkVmFsdWUsXG4gICAgICAgICAgICAgICAgcGFydHM6IHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5fcGFydHMsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlLl91cGRhdGUodmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFRlbXBsYXRlSW5zdGFuY2UodGVtcGxhdGUsIHRoaXMpO1xuICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBpbnN0YW5jZS5fY2xvbmUodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICAgICAga2luZDogJ3RlbXBsYXRlIGluc3RhbnRpYXRlZCcsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgICAgICAgcGFydHM6IGluc3RhbmNlLl9wYXJ0cyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgZnJhZ21lbnQsXG4gICAgICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbnN0YW5jZS5fdXBkYXRlKHZhbHVlcyk7XG4gICAgICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAgICAgIGtpbmQ6ICd0ZW1wbGF0ZSBpbnN0YW50aWF0ZWQgYW5kIHVwZGF0ZWQnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlLFxuICAgICAgICAgICAgICAgIGluc3RhbmNlLFxuICAgICAgICAgICAgICAgIHBhcnRzOiBpbnN0YW5jZS5fcGFydHMsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgIGZyYWdtZW50LFxuICAgICAgICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fY29tbWl0Tm9kZShmcmFnbWVudCk7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBPdmVycmlkZGVuIHZpYSBgbGl0SHRtbFBvbHlmaWxsU3VwcG9ydGAgdG8gcHJvdmlkZSBwbGF0Zm9ybSBzdXBwb3J0LlxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJGdldFRlbXBsYXRlKHJlc3VsdCkge1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSB0ZW1wbGF0ZUNhY2hlLmdldChyZXN1bHQuc3RyaW5ncyk7XG4gICAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZUNhY2hlLnNldChyZXN1bHQuc3RyaW5ncywgKHRlbXBsYXRlID0gbmV3IFRlbXBsYXRlKHJlc3VsdCkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuICAgIF9jb21taXRJdGVyYWJsZSh2YWx1ZSkge1xuICAgICAgICAvLyBGb3IgYW4gSXRlcmFibGUsIHdlIGNyZWF0ZSBhIG5ldyBJbnN0YW5jZVBhcnQgcGVyIGl0ZW0sIHRoZW4gc2V0IGl0c1xuICAgICAgICAvLyB2YWx1ZSB0byB0aGUgaXRlbS4gVGhpcyBpcyBhIGxpdHRsZSBiaXQgb2Ygb3ZlcmhlYWQgZm9yIGV2ZXJ5IGl0ZW0gaW5cbiAgICAgICAgLy8gYW4gSXRlcmFibGUsIGJ1dCBpdCBsZXRzIHVzIHJlY3Vyc2UgZWFzaWx5IGFuZCBlZmZpY2llbnRseSB1cGRhdGUgQXJyYXlzXG4gICAgICAgIC8vIG9mIFRlbXBsYXRlUmVzdWx0cyB0aGF0IHdpbGwgYmUgY29tbW9ubHkgcmV0dXJuZWQgZnJvbSBleHByZXNzaW9ucyBsaWtlOlxuICAgICAgICAvLyBhcnJheS5tYXAoKGkpID0+IGh0bWxgJHtpfWApLCBieSByZXVzaW5nIGV4aXN0aW5nIFRlbXBsYXRlSW5zdGFuY2VzLlxuICAgICAgICAvLyBJZiB2YWx1ZSBpcyBhbiBhcnJheSwgdGhlbiB0aGUgcHJldmlvdXMgcmVuZGVyIHdhcyBvZiBhblxuICAgICAgICAvLyBpdGVyYWJsZSBhbmQgdmFsdWUgd2lsbCBjb250YWluIHRoZSBDaGlsZFBhcnRzIGZyb20gdGhlIHByZXZpb3VzXG4gICAgICAgIC8vIHJlbmRlci4gSWYgdmFsdWUgaXMgbm90IGFuIGFycmF5LCBjbGVhciB0aGlzIHBhcnQgYW5kIG1ha2UgYSBuZXdcbiAgICAgICAgLy8gYXJyYXkgZm9yIENoaWxkUGFydHMuXG4gICAgICAgIGlmICghaXNBcnJheSh0aGlzLl8kY29tbWl0dGVkVmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuXyRjbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIExldHMgdXMga2VlcCB0cmFjayBvZiBob3cgbWFueSBpdGVtcyB3ZSBzdGFtcGVkIHNvIHdlIGNhbiBjbGVhciBsZWZ0b3ZlclxuICAgICAgICAvLyBpdGVtcyBmcm9tIGEgcHJldmlvdXMgcmVuZGVyXG4gICAgICAgIGNvbnN0IGl0ZW1QYXJ0cyA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZTtcbiAgICAgICAgbGV0IHBhcnRJbmRleCA9IDA7XG4gICAgICAgIGxldCBpdGVtUGFydDtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAocGFydEluZGV4ID09PSBpdGVtUGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgbm8gZXhpc3RpbmcgcGFydCwgY3JlYXRlIGEgbmV3IG9uZVxuICAgICAgICAgICAgICAgIC8vIFRPRE8gKGp1c3RpbmZhZ25hbmkpOiB0ZXN0IHBlcmYgaW1wYWN0IG9mIGFsd2F5cyBjcmVhdGluZyB0d28gcGFydHNcbiAgICAgICAgICAgICAgICAvLyBpbnN0ZWFkIG9mIHNoYXJpbmcgcGFydHMgYmV0d2VlbiBub2Rlc1xuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9saXQvbGl0L2lzc3Vlcy8xMjY2XG4gICAgICAgICAgICAgICAgaXRlbVBhcnRzLnB1c2goKGl0ZW1QYXJ0ID0gbmV3IENoaWxkUGFydCh0aGlzLl9pbnNlcnQoY3JlYXRlTWFya2VyKCkpLCB0aGlzLl9pbnNlcnQoY3JlYXRlTWFya2VyKCkpLCB0aGlzLCB0aGlzLm9wdGlvbnMpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBSZXVzZSBhbiBleGlzdGluZyBwYXJ0XG4gICAgICAgICAgICAgICAgaXRlbVBhcnQgPSBpdGVtUGFydHNbcGFydEluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW1QYXJ0Ll8kc2V0VmFsdWUoaXRlbSk7XG4gICAgICAgICAgICBwYXJ0SW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydEluZGV4IDwgaXRlbVBhcnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gaXRlbVBhcnRzIGFsd2F5cyBoYXZlIGVuZCBub2Rlc1xuICAgICAgICAgICAgdGhpcy5fJGNsZWFyKGl0ZW1QYXJ0ICYmIHdyYXAoaXRlbVBhcnQuXyRlbmROb2RlKS5uZXh0U2libGluZywgcGFydEluZGV4KTtcbiAgICAgICAgICAgIC8vIFRydW5jYXRlIHRoZSBwYXJ0cyBhcnJheSBzbyBfdmFsdWUgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGVcbiAgICAgICAgICAgIGl0ZW1QYXJ0cy5sZW5ndGggPSBwYXJ0SW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgbm9kZXMgY29udGFpbmVkIHdpdGhpbiB0aGlzIFBhcnQgZnJvbSB0aGUgRE9NLlxuICAgICAqXG4gICAgICogQHBhcmFtIHN0YXJ0IFN0YXJ0IG5vZGUgdG8gY2xlYXIgZnJvbSwgZm9yIGNsZWFyaW5nIGEgc3Vic2V0IG9mIHRoZSBwYXJ0J3NcbiAgICAgKiAgICAgRE9NICh1c2VkIHdoZW4gdHJ1bmNhdGluZyBpdGVyYWJsZXMpXG4gICAgICogQHBhcmFtIGZyb20gIFdoZW4gYHN0YXJ0YCBpcyBzcGVjaWZpZWQsIHRoZSBpbmRleCB3aXRoaW4gdGhlIGl0ZXJhYmxlIGZyb21cbiAgICAgKiAgICAgd2hpY2ggQ2hpbGRQYXJ0cyBhcmUgYmVpbmcgcmVtb3ZlZCwgdXNlZCBmb3IgZGlzY29ubmVjdGluZyBkaXJlY3RpdmVzIGluXG4gICAgICogICAgIHRob3NlIFBhcnRzLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgXyRjbGVhcihzdGFydCA9IHdyYXAodGhpcy5fJHN0YXJ0Tm9kZSkubmV4dFNpYmxpbmcsIGZyb20pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLl8kbm90aWZ5Q29ubmVjdGlvbkNoYW5nZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMsIGZhbHNlLCB0cnVlLCBmcm9tKTtcbiAgICAgICAgd2hpbGUgKHN0YXJ0ICYmIHN0YXJ0ICE9PSB0aGlzLl8kZW5kTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgbiA9IHdyYXAoc3RhcnQpLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgd3JhcChzdGFydCkucmVtb3ZlKCk7XG4gICAgICAgICAgICBzdGFydCA9IG47XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50YXRpb24gb2YgUm9vdFBhcnQncyBgaXNDb25uZWN0ZWRgLiBOb3RlIHRoYXQgdGhpcyBtZXRvZFxuICAgICAqIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBvbiBgUm9vdFBhcnRgcyAodGhlIGBDaGlsZFBhcnRgIHJldHVybmVkIGZyb20gYVxuICAgICAqIHRvcC1sZXZlbCBgcmVuZGVyKClgIGNhbGwpLiBJdCBoYXMgbm8gZWZmZWN0IG9uIG5vbi1yb290IENoaWxkUGFydHMuXG4gICAgICogQHBhcmFtIGlzQ29ubmVjdGVkIFdoZXRoZXIgdG8gc2V0XG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgc2V0Q29ubmVjdGVkKGlzQ29ubmVjdGVkKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHRoaXMuXyRwYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fX2lzQ29ubmVjdGVkID0gaXNDb25uZWN0ZWQ7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLl8kbm90aWZ5Q29ubmVjdGlvbkNoYW5nZWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMsIGlzQ29ubmVjdGVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChERVZfTU9ERSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwYXJ0LnNldENvbm5lY3RlZCgpIG1heSBvbmx5IGJlIGNhbGxlZCBvbiBhICcgK1xuICAgICAgICAgICAgICAgICdSb290UGFydCByZXR1cm5lZCBmcm9tIHJlbmRlcigpLicpO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgQXR0cmlidXRlUGFydCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmFtZSwgc3RyaW5ncywgcGFyZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IEFUVFJJQlVURV9QQVJUO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICAgICAgdGhpcy5fJGRpc2Nvbm5lY3RhYmxlQ2hpbGRyZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIGlmIChzdHJpbmdzLmxlbmd0aCA+IDIgfHwgc3RyaW5nc1swXSAhPT0gJycgfHwgc3RyaW5nc1sxXSAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZSA9IG5ldyBBcnJheShzdHJpbmdzLmxlbmd0aCAtIDEpLmZpbGwobmV3IFN0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMuc3RyaW5ncyA9IHN0cmluZ3M7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBub3RoaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nhbml0aXplciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgdGFnTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC50YWdOYW1lO1xuICAgIH1cbiAgICAvLyBTZWUgY29tbWVudCBpbiBEaXNjb25uZWN0YWJsZSBpbnRlcmZhY2UgZm9yIHdoeSB0aGlzIGlzIGEgZ2V0dGVyXG4gICAgZ2V0IF8kaXNDb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kcGFyZW50Ll8kaXNDb25uZWN0ZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIHRoaXMgcGFydCBieSByZXNvbHZpbmcgdGhlIHZhbHVlIGZyb20gcG9zc2libHkgbXVsdGlwbGVcbiAgICAgKiB2YWx1ZXMgYW5kIHN0YXRpYyBzdHJpbmdzIGFuZCBjb21taXR0aW5nIGl0IHRvIHRoZSBET00uXG4gICAgICogSWYgdGhpcyBwYXJ0IGlzIHNpbmdsZS12YWx1ZWQsIGB0aGlzLl9zdHJpbmdzYCB3aWxsIGJlIHVuZGVmaW5lZCwgYW5kIHRoZVxuICAgICAqIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCB3aXRoIGEgc2luZ2xlIHZhbHVlIGFyZ3VtZW50LiBJZiB0aGlzIHBhcnQgaXNcbiAgICAgKiBtdWx0aS12YWx1ZSwgYHRoaXMuX3N0cmluZ3NgIHdpbGwgYmUgZGVmaW5lZCwgYW5kIHRoZSBtZXRob2QgaXMgY2FsbGVkXG4gICAgICogd2l0aCB0aGUgdmFsdWUgYXJyYXkgb2YgdGhlIHBhcnQncyBvd25pbmcgVGVtcGxhdGVJbnN0YW5jZSwgYW5kIGFuIG9mZnNldFxuICAgICAqIGludG8gdGhlIHZhbHVlIGFycmF5IGZyb20gd2hpY2ggdGhlIHZhbHVlcyBzaG91bGQgYmUgcmVhZC5cbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBvdmVybG9hZGVkIHRoaXMgd2F5IHRvIGVsaW1pbmF0ZSBzaG9ydC1saXZlZCBhcnJheSBzbGljZXNcbiAgICAgKiBvZiB0aGUgdGVtcGxhdGUgaW5zdGFuY2UgdmFsdWVzLCBhbmQgYWxsb3cgYSBmYXN0LXBhdGggZm9yIHNpbmdsZS12YWx1ZWRcbiAgICAgKiBwYXJ0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZSBUaGUgcGFydCB2YWx1ZSwgb3IgYW4gYXJyYXkgb2YgdmFsdWVzIGZvciBtdWx0aS12YWx1ZWQgcGFydHNcbiAgICAgKiBAcGFyYW0gdmFsdWVJbmRleCB0aGUgaW5kZXggdG8gc3RhcnQgcmVhZGluZyB2YWx1ZXMgZnJvbS4gYHVuZGVmaW5lZGAgZm9yXG4gICAgICogICBzaW5nbGUtdmFsdWVkIHBhcnRzXG4gICAgICogQHBhcmFtIG5vQ29tbWl0IGNhdXNlcyB0aGUgcGFydCB0byBub3QgY29tbWl0IGl0cyB2YWx1ZSB0byB0aGUgRE9NLiBVc2VkXG4gICAgICogICBpbiBoeWRyYXRpb24gdG8gcHJpbWUgYXR0cmlidXRlIHBhcnRzIHdpdGggdGhlaXIgZmlyc3QtcmVuZGVyZWQgdmFsdWUsXG4gICAgICogICBidXQgbm90IHNldCB0aGUgYXR0cmlidXRlLCBhbmQgaW4gU1NSIHRvIG5vLW9wIHRoZSBET00gb3BlcmF0aW9uIGFuZFxuICAgICAqICAgY2FwdHVyZSB0aGUgdmFsdWUgZm9yIHNlcmlhbGl6YXRpb24uXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBfJHNldFZhbHVlKHZhbHVlLCBkaXJlY3RpdmVQYXJlbnQgPSB0aGlzLCB2YWx1ZUluZGV4LCBub0NvbW1pdCkge1xuICAgICAgICBjb25zdCBzdHJpbmdzID0gdGhpcy5zdHJpbmdzO1xuICAgICAgICAvLyBXaGV0aGVyIGFueSBvZiB0aGUgdmFsdWVzIGhhcyBjaGFuZ2VkLCBmb3IgZGlydHktY2hlY2tpbmdcbiAgICAgICAgbGV0IGNoYW5nZSA9IGZhbHNlO1xuICAgICAgICBpZiAoc3RyaW5ncyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBTaW5nbGUtdmFsdWUgYmluZGluZyBjYXNlXG4gICAgICAgICAgICB2YWx1ZSA9IHJlc29sdmVEaXJlY3RpdmUodGhpcywgdmFsdWUsIGRpcmVjdGl2ZVBhcmVudCwgMCk7XG4gICAgICAgICAgICBjaGFuZ2UgPVxuICAgICAgICAgICAgICAgICFpc1ByaW1pdGl2ZSh2YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKHZhbHVlICE9PSB0aGlzLl8kY29tbWl0dGVkVmFsdWUgJiYgdmFsdWUgIT09IG5vQ2hhbmdlKTtcbiAgICAgICAgICAgIGlmIChjaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEludGVycG9sYXRpb24gY2FzZVxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWU7XG4gICAgICAgICAgICB2YWx1ZSA9IHN0cmluZ3NbMF07XG4gICAgICAgICAgICBsZXQgaSwgdjtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzdHJpbmdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHYgPSByZXNvbHZlRGlyZWN0aXZlKHRoaXMsIHZhbHVlc1t2YWx1ZUluZGV4ICsgaV0sIGRpcmVjdGl2ZVBhcmVudCwgaSk7XG4gICAgICAgICAgICAgICAgaWYgKHYgPT09IG5vQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyLXByb3ZpZGVkIHZhbHVlIGlzIGBub0NoYW5nZWAsIHVzZSB0aGUgcHJldmlvdXMgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgdiA9IHRoaXMuXyRjb21taXR0ZWRWYWx1ZVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hhbmdlIHx8IChjaGFuZ2UgPSAhaXNQcmltaXRpdmUodikgfHwgdiAhPT0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAodiA9PT0gbm90aGluZykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlICE9PSBub3RoaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICs9ICh2ICE9PSBudWxsICYmIHYgIT09IHZvaWQgMCA/IHYgOiAnJykgKyBzdHJpbmdzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gV2UgYWx3YXlzIHJlY29yZCBlYWNoIHZhbHVlLCBldmVuIGlmIG9uZSBpcyBgbm90aGluZ2AsIGZvciBmdXR1cmVcbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2UgZGV0ZWN0aW9uLlxuICAgICAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZVtpXSA9IHY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZSAmJiAhbm9Db21taXQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbW1pdFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgX2NvbW1pdFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbm90aGluZykge1xuICAgICAgICAgICAgd3JhcCh0aGlzLmVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zYW5pdGl6ZXIgPSBzYW5pdGl6ZXJGYWN0b3J5SW50ZXJuYWwodGhpcy5lbGVtZW50LCB0aGlzLm5hbWUsICdhdHRyaWJ1dGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLl9zYW5pdGl6ZXIodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgICAgICBraW5kOiAnY29tbWl0IGF0dHJpYnV0ZScsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLCAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogJycpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIFByb3BlcnR5UGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBQUk9QRVJUWV9QQVJUO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgX2NvbW1pdFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmIChFTkFCTEVfRVhUUkFfU0VDVVJJVFlfSE9PS1MpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zYW5pdGl6ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Nhbml0aXplciA9IHNhbml0aXplckZhY3RvcnlJbnRlcm5hbCh0aGlzLmVsZW1lbnQsIHRoaXMubmFtZSwgJ3Byb3BlcnR5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuX3Nhbml0aXplcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgcHJvcGVydHknLFxuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICB0aGlzLmVsZW1lbnRbdGhpcy5uYW1lXSA9IHZhbHVlID09PSBub3RoaW5nID8gdW5kZWZpbmVkIDogdmFsdWU7XG4gICAgfVxufVxuLy8gVGVtcG9yYXJ5IHdvcmthcm91bmQgZm9yIGh0dHBzOi8vY3JidWcuY29tLzk5MzI2OFxuLy8gQ3VycmVudGx5LCBhbnkgYXR0cmlidXRlIHN0YXJ0aW5nIHdpdGggXCJvblwiIGlzIGNvbnNpZGVyZWQgdG8gYmUgYVxuLy8gVHJ1c3RlZFNjcmlwdCBzb3VyY2UuIFN1Y2ggYm9vbGVhbiBhdHRyaWJ1dGVzIG11c3QgYmUgc2V0IHRvIHRoZSBlcXVpdmFsZW50XG4vLyB0cnVzdGVkIGVtcHR5U2NyaXB0IHZhbHVlLlxuY29uc3QgZW1wdHlTdHJpbmdGb3JCb29sZWFuQXR0cmlidXRlID0gdHJ1c3RlZFR5cGVzXG4gICAgPyB0cnVzdGVkVHlwZXMuZW1wdHlTY3JpcHRcbiAgICA6ICcnO1xuY2xhc3MgQm9vbGVhbkF0dHJpYnV0ZVBhcnQgZXh0ZW5kcyBBdHRyaWJ1dGVQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gQk9PTEVBTl9BVFRSSUJVVEVfUEFSVDtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF9jb21taXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBkZWJ1Z0xvZ0V2ZW50ID09PSBudWxsIHx8IGRlYnVnTG9nRXZlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRlYnVnTG9nRXZlbnQoe1xuICAgICAgICAgICAga2luZDogJ2NvbW1pdCBib29sZWFuIGF0dHJpYnV0ZScsXG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogISEodmFsdWUgJiYgdmFsdWUgIT09IG5vdGhpbmcpLFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlICE9PSBub3RoaW5nKSB7XG4gICAgICAgICAgICB3cmFwKHRoaXMuZWxlbWVudCkuc2V0QXR0cmlidXRlKHRoaXMubmFtZSwgZW1wdHlTdHJpbmdGb3JCb29sZWFuQXR0cmlidXRlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdyYXAodGhpcy5lbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIEV2ZW50UGFydCBleHRlbmRzIEF0dHJpYnV0ZVBhcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG5hbWUsIHN0cmluZ3MsIHBhcmVudCwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihlbGVtZW50LCBuYW1lLCBzdHJpbmdzLCBwYXJlbnQsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBFVkVOVF9QQVJUO1xuICAgICAgICBpZiAoREVWX01PREUgJiYgdGhpcy5zdHJpbmdzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQSBcXGA8JHtlbGVtZW50LmxvY2FsTmFtZX0+XFxgIGhhcyBhIFxcYEAke25hbWV9PS4uLlxcYCBsaXN0ZW5lciB3aXRoIGAgK1xuICAgICAgICAgICAgICAgICdpbnZhbGlkIGNvbnRlbnQuIEV2ZW50IGxpc3RlbmVycyBpbiB0ZW1wbGF0ZXMgbXVzdCBoYXZlIGV4YWN0bHkgJyArXG4gICAgICAgICAgICAgICAgJ29uZSBleHByZXNzaW9uIGFuZCBubyBzdXJyb3VuZGluZyB0ZXh0LicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEV2ZW50UGFydCBkb2VzIG5vdCB1c2UgdGhlIGJhc2UgXyRzZXRWYWx1ZS9fcmVzb2x2ZVZhbHVlIGltcGxlbWVudGF0aW9uXG4gICAgLy8gc2luY2UgdGhlIGRpcnR5IGNoZWNraW5nIGlzIG1vcmUgY29tcGxleFxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJHNldFZhbHVlKG5ld0xpc3RlbmVyLCBkaXJlY3RpdmVQYXJlbnQgPSB0aGlzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbmV3TGlzdGVuZXIgPVxuICAgICAgICAgICAgKF9hID0gcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCBuZXdMaXN0ZW5lciwgZGlyZWN0aXZlUGFyZW50LCAwKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbm90aGluZztcbiAgICAgICAgaWYgKG5ld0xpc3RlbmVyID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9sZExpc3RlbmVyID0gdGhpcy5fJGNvbW1pdHRlZFZhbHVlO1xuICAgICAgICAvLyBJZiB0aGUgbmV3IHZhbHVlIGlzIG5vdGhpbmcgb3IgYW55IG9wdGlvbnMgY2hhbmdlIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZVxuICAgICAgICAvLyBwYXJ0IGFzIGEgbGlzdGVuZXIuXG4gICAgICAgIGNvbnN0IHNob3VsZFJlbW92ZUxpc3RlbmVyID0gKG5ld0xpc3RlbmVyID09PSBub3RoaW5nICYmIG9sZExpc3RlbmVyICE9PSBub3RoaW5nKSB8fFxuICAgICAgICAgICAgbmV3TGlzdGVuZXIuY2FwdHVyZSAhPT1cbiAgICAgICAgICAgICAgICBvbGRMaXN0ZW5lci5jYXB0dXJlIHx8XG4gICAgICAgICAgICBuZXdMaXN0ZW5lci5vbmNlICE9PVxuICAgICAgICAgICAgICAgIG9sZExpc3RlbmVyLm9uY2UgfHxcbiAgICAgICAgICAgIG5ld0xpc3RlbmVyLnBhc3NpdmUgIT09XG4gICAgICAgICAgICAgICAgb2xkTGlzdGVuZXIucGFzc2l2ZTtcbiAgICAgICAgLy8gSWYgdGhlIG5ldyB2YWx1ZSBpcyBub3Qgbm90aGluZyBhbmQgd2UgcmVtb3ZlZCB0aGUgbGlzdGVuZXIsIHdlIGhhdmVcbiAgICAgICAgLy8gdG8gYWRkIHRoZSBwYXJ0IGFzIGEgbGlzdGVuZXIuXG4gICAgICAgIGNvbnN0IHNob3VsZEFkZExpc3RlbmVyID0gbmV3TGlzdGVuZXIgIT09IG5vdGhpbmcgJiZcbiAgICAgICAgICAgIChvbGRMaXN0ZW5lciA9PT0gbm90aGluZyB8fCBzaG91bGRSZW1vdmVMaXN0ZW5lcik7XG4gICAgICAgIGRlYnVnTG9nRXZlbnQgPT09IG51bGwgfHwgZGVidWdMb2dFdmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVidWdMb2dFdmVudCh7XG4gICAgICAgICAgICBraW5kOiAnY29tbWl0IGV2ZW50IGxpc3RlbmVyJyxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBuZXdMaXN0ZW5lcixcbiAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyOiBzaG91bGRSZW1vdmVMaXN0ZW5lcixcbiAgICAgICAgICAgIGFkZExpc3RlbmVyOiBzaG91bGRBZGRMaXN0ZW5lcixcbiAgICAgICAgICAgIG9sZExpc3RlbmVyLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNob3VsZFJlbW92ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMsIG9sZExpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkQWRkTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIC8vIEJld2FyZTogSUUxMSBhbmQgQ2hyb21lIDQxIGRvbid0IGxpa2UgdXNpbmcgdGhlIGxpc3RlbmVyIGFzIHRoZVxuICAgICAgICAgICAgLy8gb3B0aW9ucyBvYmplY3QuIEZpZ3VyZSBvdXQgaG93IHRvIGRlYWwgdy8gdGhpcyBpbiBJRTExIC0gbWF5YmVcbiAgICAgICAgICAgIC8vIHBhdGNoIGFkZEV2ZW50TGlzdGVuZXI/XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsIHRoaXMsIG5ld0xpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPSBuZXdMaXN0ZW5lcjtcbiAgICB9XG4gICAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl8kY29tbWl0dGVkVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuXyRjb21taXR0ZWRWYWx1ZS5jYWxsKChfYiA9IChfYSA9IHRoaXMub3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhvc3QpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IHRoaXMuZWxlbWVudCwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fJGNvbW1pdHRlZFZhbHVlLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIEVsZW1lbnRQYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBwYXJlbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy50eXBlID0gRUxFTUVOVF9QQVJUO1xuICAgICAgICAvKiogQGludGVybmFsICovXG4gICAgICAgIHRoaXMuXyRkaXNjb25uZWN0YWJsZUNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICAvLyBTZWUgY29tbWVudCBpbiBEaXNjb25uZWN0YWJsZSBpbnRlcmZhY2UgZm9yIHdoeSB0aGlzIGlzIGEgZ2V0dGVyXG4gICAgZ2V0IF8kaXNDb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kcGFyZW50Ll8kaXNDb25uZWN0ZWQ7XG4gICAgfVxuICAgIF8kc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAgICAgIGtpbmQ6ICdjb21taXQgdG8gZWxlbWVudCBiaW5kaW5nJyxcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgb3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB9KTtcbiAgICAgICAgcmVzb2x2ZURpcmVjdGl2ZSh0aGlzLCB2YWx1ZSk7XG4gICAgfVxufVxuLyoqXG4gKiBFTkQgVVNFUlMgU0hPVUxEIE5PVCBSRUxZIE9OIFRISVMgT0JKRUNULlxuICpcbiAqIFByaXZhdGUgZXhwb3J0cyBmb3IgdXNlIGJ5IG90aGVyIExpdCBwYWNrYWdlcywgbm90IGludGVuZGVkIGZvciB1c2UgYnlcbiAqIGV4dGVybmFsIHVzZXJzLlxuICpcbiAqIFdlIGN1cnJlbnRseSBkbyBub3QgbWFrZSBhIG1hbmdsZWQgcm9sbHVwIGJ1aWxkIG9mIHRoZSBsaXQtc3NyIGNvZGUuIEluIG9yZGVyXG4gKiB0byBrZWVwIGEgbnVtYmVyIG9mIChvdGhlcndpc2UgcHJpdmF0ZSkgdG9wLWxldmVsIGV4cG9ydHMgIG1hbmdsZWQgaW4gdGhlXG4gKiBjbGllbnQgc2lkZSBjb2RlLCB3ZSBleHBvcnQgYSBfJExIIG9iamVjdCBjb250YWluaW5nIHRob3NlIG1lbWJlcnMgKG9yXG4gKiBoZWxwZXIgbWV0aG9kcyBmb3IgYWNjZXNzaW5nIHByaXZhdGUgZmllbGRzIG9mIHRob3NlIG1lbWJlcnMpLCBhbmQgdGhlblxuICogcmUtZXhwb3J0IHRoZW0gZm9yIHVzZSBpbiBsaXQtc3NyLiBUaGlzIGtlZXBzIGxpdC1zc3IgYWdub3N0aWMgdG8gd2hldGhlciB0aGVcbiAqIGNsaWVudC1zaWRlIGNvZGUgaXMgYmVpbmcgdXNlZCBpbiBgZGV2YCBtb2RlIG9yIGBwcm9kYCBtb2RlLlxuICpcbiAqIFRoaXMgaGFzIGEgdW5pcXVlIG5hbWUsIHRvIGRpc2FtYmlndWF0ZSBpdCBmcm9tIHByaXZhdGUgZXhwb3J0cyBpblxuICogbGl0LWVsZW1lbnQsIHdoaWNoIHJlLWV4cG9ydHMgYWxsIG9mIGxpdC1odG1sLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBfJExIID0ge1xuICAgIC8vIFVzZWQgaW4gbGl0LXNzclxuICAgIF9ib3VuZEF0dHJpYnV0ZVN1ZmZpeDogYm91bmRBdHRyaWJ1dGVTdWZmaXgsXG4gICAgX21hcmtlcjogbWFya2VyLFxuICAgIF9tYXJrZXJNYXRjaDogbWFya2VyTWF0Y2gsXG4gICAgX0hUTUxfUkVTVUxUOiBIVE1MX1JFU1VMVCxcbiAgICBfZ2V0VGVtcGxhdGVIdG1sOiBnZXRUZW1wbGF0ZUh0bWwsXG4gICAgLy8gVXNlZCBpbiBoeWRyYXRlXG4gICAgX1RlbXBsYXRlSW5zdGFuY2U6IFRlbXBsYXRlSW5zdGFuY2UsXG4gICAgX2lzSXRlcmFibGU6IGlzSXRlcmFibGUsXG4gICAgX3Jlc29sdmVEaXJlY3RpdmU6IHJlc29sdmVEaXJlY3RpdmUsXG4gICAgLy8gVXNlZCBpbiB0ZXN0cyBhbmQgcHJpdmF0ZS1zc3Itc3VwcG9ydFxuICAgIF9DaGlsZFBhcnQ6IENoaWxkUGFydCxcbiAgICBfQXR0cmlidXRlUGFydDogQXR0cmlidXRlUGFydCxcbiAgICBfQm9vbGVhbkF0dHJpYnV0ZVBhcnQ6IEJvb2xlYW5BdHRyaWJ1dGVQYXJ0LFxuICAgIF9FdmVudFBhcnQ6IEV2ZW50UGFydCxcbiAgICBfUHJvcGVydHlQYXJ0OiBQcm9wZXJ0eVBhcnQsXG4gICAgX0VsZW1lbnRQYXJ0OiBFbGVtZW50UGFydCxcbn07XG4vLyBBcHBseSBwb2x5ZmlsbHMgaWYgYXZhaWxhYmxlXG5jb25zdCBwb2x5ZmlsbFN1cHBvcnQgPSBERVZfTU9ERVxuICAgID8gZ2xvYmFsLmxpdEh0bWxQb2x5ZmlsbFN1cHBvcnREZXZNb2RlXG4gICAgOiBnbG9iYWwubGl0SHRtbFBvbHlmaWxsU3VwcG9ydDtcbnBvbHlmaWxsU3VwcG9ydCA9PT0gbnVsbCB8fCBwb2x5ZmlsbFN1cHBvcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBvbHlmaWxsU3VwcG9ydChUZW1wbGF0ZSwgQ2hpbGRQYXJ0KTtcbi8vIElNUE9SVEFOVDogZG8gbm90IGNoYW5nZSB0aGUgcHJvcGVydHkgbmFtZSBvciB0aGUgYXNzaWdubWVudCBleHByZXNzaW9uLlxuLy8gVGhpcyBsaW5lIHdpbGwgYmUgdXNlZCBpbiByZWdleGVzIHRvIHNlYXJjaCBmb3IgbGl0LWh0bWwgdXNhZ2UuXG4oKF9kID0gZ2xvYmFsLmxpdEh0bWxWZXJzaW9ucykgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogKGdsb2JhbC5saXRIdG1sVmVyc2lvbnMgPSBbXSkpLnB1c2goJzIuNi4xJyk7XG5pZiAoREVWX01PREUgJiYgZ2xvYmFsLmxpdEh0bWxWZXJzaW9ucy5sZW5ndGggPiAxKSB7XG4gICAgaXNzdWVXYXJuaW5nKCdtdWx0aXBsZS12ZXJzaW9ucycsIGBNdWx0aXBsZSB2ZXJzaW9ucyBvZiBMaXQgbG9hZGVkLiBgICtcbiAgICAgICAgYExvYWRpbmcgbXVsdGlwbGUgdmVyc2lvbnMgaXMgbm90IHJlY29tbWVuZGVkLmApO1xufVxuLyoqXG4gKiBSZW5kZXJzIGEgdmFsdWUsIHVzdWFsbHkgYSBsaXQtaHRtbCBUZW1wbGF0ZVJlc3VsdCwgdG8gdGhlIGNvbnRhaW5lci5cbiAqXG4gKiBUaGlzIGV4YW1wbGUgcmVuZGVycyB0aGUgdGV4dCBcIkhlbGxvLCBab2UhXCIgaW5zaWRlIGEgcGFyYWdyYXBoIHRhZywgYXBwZW5kaW5nXG4gKiBpdCB0byB0aGUgY29udGFpbmVyIGBkb2N1bWVudC5ib2R5YC5cbiAqXG4gKiBgYGBqc1xuICogaW1wb3J0IHtodG1sLCByZW5kZXJ9IGZyb20gJ2xpdCc7XG4gKlxuICogY29uc3QgbmFtZSA9IFwiWm9lXCI7XG4gKiByZW5kZXIoaHRtbGA8cD5IZWxsbywgJHtuYW1lfSE8L3A+YCwgZG9jdW1lbnQuYm9keSk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gdmFsdWUgQW55IFtyZW5kZXJhYmxlXG4gKiAgIHZhbHVlXShodHRwczovL2xpdC5kZXYvZG9jcy90ZW1wbGF0ZXMvZXhwcmVzc2lvbnMvI2NoaWxkLWV4cHJlc3Npb25zKSxcbiAqICAgdHlwaWNhbGx5IGEge0BsaW5rY29kZSBUZW1wbGF0ZVJlc3VsdH0gY3JlYXRlZCBieSBldmFsdWF0aW5nIGEgdGVtcGxhdGUgdGFnXG4gKiAgIGxpa2Uge0BsaW5rY29kZSBodG1sfSBvciB7QGxpbmtjb2RlIHN2Z30uXG4gKiBAcGFyYW0gY29udGFpbmVyIEEgRE9NIGNvbnRhaW5lciB0byByZW5kZXIgdG8uIFRoZSBmaXJzdCByZW5kZXIgd2lsbCBhcHBlbmRcbiAqICAgdGhlIHJlbmRlcmVkIHZhbHVlIHRvIHRoZSBjb250YWluZXIsIGFuZCBzdWJzZXF1ZW50IHJlbmRlcnMgd2lsbFxuICogICBlZmZpY2llbnRseSB1cGRhdGUgdGhlIHJlbmRlcmVkIHZhbHVlIGlmIHRoZSBzYW1lIHJlc3VsdCB0eXBlIHdhc1xuICogICBwcmV2aW91c2x5IHJlbmRlcmVkIHRoZXJlLlxuICogQHBhcmFtIG9wdGlvbnMgU2VlIHtAbGlua2NvZGUgUmVuZGVyT3B0aW9uc30gZm9yIG9wdGlvbnMgZG9jdW1lbnRhdGlvbi5cbiAqIEBzZWVcbiAqIHtAbGluayBodHRwczovL2xpdC5kZXYvZG9jcy9saWJyYXJpZXMvc3RhbmRhbG9uZS10ZW1wbGF0ZXMvI3JlbmRlcmluZy1saXQtaHRtbC10ZW1wbGF0ZXN8IFJlbmRlcmluZyBMaXQgSFRNTCBUZW1wbGF0ZXN9XG4gKi9cbmV4cG9ydCBjb25zdCByZW5kZXIgPSAodmFsdWUsIGNvbnRhaW5lciwgb3B0aW9ucykgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgaWYgKERFVl9NT0RFICYmIGNvbnRhaW5lciA9PSBudWxsKSB7XG4gICAgICAgIC8vIEdpdmUgYSBjbGVhcmVyIGVycm9yIG1lc3NhZ2UgdGhhblxuICAgICAgICAvLyAgICAgVW5jYXVnaHQgVHlwZUVycm9yOiBDYW5ub3QgcmVhZCBwcm9wZXJ0aWVzIG9mIG51bGwgKHJlYWRpbmdcbiAgICAgICAgLy8gICAgICdfJGxpdFBhcnQkJylcbiAgICAgICAgLy8gd2hpY2ggcmVhZHMgbGlrZSBhbiBpbnRlcm5hbCBMaXQgZXJyb3IuXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBjb250YWluZXIgdG8gcmVuZGVyIGludG8gbWF5IG5vdCBiZSAke2NvbnRhaW5lcn1gKTtcbiAgICB9XG4gICAgY29uc3QgcmVuZGVySWQgPSBERVZfTU9ERSA/IGRlYnVnTG9nUmVuZGVySWQrKyA6IDA7XG4gICAgY29uc3QgcGFydE93bmVyTm9kZSA9IChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yZW5kZXJCZWZvcmUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGNvbnRhaW5lcjtcbiAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgbGV0IHBhcnQgPSBwYXJ0T3duZXJOb2RlWydfJGxpdFBhcnQkJ107XG4gICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAga2luZDogJ2JlZ2luIHJlbmRlcicsXG4gICAgICAgIGlkOiByZW5kZXJJZCxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgcGFydCxcbiAgICB9KTtcbiAgICBpZiAocGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGVuZE5vZGUgPSAoX2IgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucmVuZGVyQmVmb3JlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBudWxsO1xuICAgICAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICBwYXJ0T3duZXJOb2RlWydfJGxpdFBhcnQkJ10gPSBwYXJ0ID0gbmV3IENoaWxkUGFydChjb250YWluZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1hcmtlcigpLCBlbmROb2RlKSwgZW5kTm9kZSwgdW5kZWZpbmVkLCBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCA/IG9wdGlvbnMgOiB7fSk7XG4gICAgfVxuICAgIHBhcnQuXyRzZXRWYWx1ZSh2YWx1ZSk7XG4gICAgZGVidWdMb2dFdmVudCA9PT0gbnVsbCB8fCBkZWJ1Z0xvZ0V2ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWJ1Z0xvZ0V2ZW50KHtcbiAgICAgICAga2luZDogJ2VuZCByZW5kZXInLFxuICAgICAgICBpZDogcmVuZGVySWQsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIHBhcnQsXG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnQ7XG59O1xuaWYgKEVOQUJMRV9FWFRSQV9TRUNVUklUWV9IT09LUykge1xuICAgIHJlbmRlci5zZXRTYW5pdGl6ZXIgPSBzZXRTYW5pdGl6ZXI7XG4gICAgcmVuZGVyLmNyZWF0ZVNhbml0aXplciA9IGNyZWF0ZVNhbml0aXplcjtcbiAgICBpZiAoREVWX01PREUpIHtcbiAgICAgICAgcmVuZGVyLl90ZXN0T25seUNsZWFyU2FuaXRpemVyRmFjdG9yeURvTm90Q2FsbE9yRWxzZSA9XG4gICAgICAgICAgICBfdGVzdE9ubHlDbGVhclNhbml0aXplckZhY3RvcnlEb05vdENhbGxPckVsc2U7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWh0bWwuanMubWFwIiwiaW1wb3J0XCJAbGl0L3JlYWN0aXZlLWVsZW1lbnRcIjtpbXBvcnRcImxpdC1odG1sXCI7ZXhwb3J0KmZyb21cImxpdC1lbGVtZW50L2xpdC1lbGVtZW50LmpzXCI7ZXhwb3J0KmZyb21cImxpdC1odG1sL2lzLXNlcnZlci5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBjc3MsIGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgY2xhc3NuYW1lcyB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvY2xhc3NuYW1lcy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBXQnV0dG9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtpbnRlbnQ9XCJwcmltYXJ5XCJdKSB7XG4gICAgICAgICAgICAtLXctYnV0dG9uLS1jb2xvcjogdmFyKC0tdy1idXR0b24tLWludGVudC1wcmltYXJ5LS1jb2xvcik7XG4gICAgICAgICAgICAtLXctYnV0b29uLS1ib3JkZXItY29sb3I6IHZhcigtLXctYnV0b29uLS1pbnRlbnQtcHJpbWFyeS0tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy1idXR0b24tLXRleHQtLWNvbG9yOiB2YXIoLS13LWJ1dHRvbi0taW50ZW50LXByaW1hcnktLXRleHQtLWNvbG9yKTtcblxuICAgICAgICAgICAgLS13LWJ1dHRvbi0taG92ZXItLWNvbG9yOiB2YXIoLS13LWJ1dHRvbi0taW50ZW50LXByaW1hcnktLWhvdmVyLS1jb2xvcik7XG4gICAgICAgICAgICAtLXctYnV0dG9uLS1ob3Zlci0tYm9yZGVyLWNvbG9yOiB2YXIoLS13LWJ1dHRvbi0taW50ZW50LXByaW1hcnktLWhvdmVyLS1ib3JkZXItY29sb3IpO1xuICAgICAgICAgICAgLS13LWJ1dHRvbi0taG92ZXItLXRleHQtLWNvbG9yOiB2YXIoLS13LWJ1dHRvbi0taW50ZW50LXByaW1hcnktLWhvdmVyLS10ZXh0LS1jb2xvcik7XG5cbiAgICAgICAgICAgIC0tdy1idXR0b24tLWFwcGVhcmFuY2Utb3V0bGluZS0tdGV4dC1jb2xvcjogdmFyKC0tdy1idXR0b24tLWludGVudC1wcmltYXJ5LS1hcHBlYXJhbmNlLW91dGxpbmUtLXRleHQtY29sb3IpO1xuICAgICAgICAgICAgLS13LWJ1dHRvbi0tYXBwZWFyYW5jZS1vdXRsaW5lLS1ob3Zlci0tdGV4dC1jb2xvcjogdmFyKC0tdy1idXR0b24tLWludGVudC1wcmltYXJ5LS1hcHBlYXJhbmNlLW91dGxpbmUtLWhvdmVyLS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtpbnRlbnQ9XCJzdWNjZXNzXCJdKSB7XG4gICAgICAgICAgICAtLXctYnV0dG9uLS1jb2xvcjogdmFyKC0tdy1idXR0b24tLWludGVudC1zdWNjZXNzLS1jb2xvcik7XG4gICAgICAgICAgICAtLXctYnV0b29uLS1ib3JkZXItY29sb3I6IHZhcigtLXctYnV0b29uLS1pbnRlbnQtc3VjY2Vzcy0tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy1idXR0b24tLXRleHQtLWNvbG9yOiB2YXIoLS13LWJ1dHRvbi0taW50ZW50LXN1Y2Nlc3MtLXRleHQtLWNvbG9yKTtcbiAgICAgICAgXG4gICAgICAgICAgICAtLXctYnV0dG9uLS1ob3Zlci0tY29sb3I6IHZhcigtLXctYnV0dG9uLS1pbnRlbnQtc3VjY2Vzcy0taG92ZXItLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy1idXR0b24tLWhvdmVyLS1ib3JkZXItY29sb3I6IHZhcigtLXctYnV0dG9uLS1pbnRlbnQtc3VjY2Vzcy0taG92ZXItLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgICAtLXctYnV0dG9uLS1ob3Zlci0tdGV4dC0tY29sb3I6IHZhcigtLXctYnV0dG9uLS1pbnRlbnQtc3VjY2Vzcy0taG92ZXItLXRleHQtLWNvbG9yKTtcbiAgICAgICAgXG4gICAgICAgICAgICAtLXctYnV0dG9uLS1hcHBlYXJhbmNlLW91dGxpbmUtLXRleHQtY29sb3I6IHZhcigtLXctYnV0dG9uLS1pbnRlbnQtc3VjY2Vzcy0tYXBwZWFyYW5jZS1vdXRsaW5lLS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy1idXR0b24tLWFwcGVhcmFuY2Utb3V0bGluZS0taG92ZXItLXRleHQtY29sb3I6IHZhcigtLXctYnV0dG9uLS1pbnRlbnQtc3VjY2Vzcy0tYXBwZWFyYW5jZS1vdXRsaW5lLS1ob3Zlci0tdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbaW50ZW50PVwiZGFuZ2VyXCJdKSB7XG4gICAgICAgICAgICAtLXctYnV0dG9uLS1jb2xvcjogdmFyKC0tdy1idXR0b24tLWludGVudC1kYW5nZXItLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy1idXRvb24tLWJvcmRlci1jb2xvcjogdmFyKC0tdy1idXRvb24tLWludGVudC1kYW5nZXItLWJvcmRlci1jb2xvcik7XG4gICAgICAgICAgICAtLXctYnV0dG9uLS10ZXh0LS1jb2xvcjogdmFyKC0tdy1idXR0b24tLWludGVudC1kYW5nZXItLXRleHQtLWNvbG9yKTtcbiAgICAgICAgXG4gICAgICAgICAgICAtLXctYnV0dG9uLS1ob3Zlci0tY29sb3I6IHZhcigtLXctYnV0dG9uLS1pbnRlbnQtZGFuZ2VyLS1ob3Zlci0tY29sb3IpO1xuICAgICAgICAgICAgLS13LWJ1dHRvbi0taG92ZXItLWJvcmRlci1jb2xvcjogdmFyKC0tdy1idXR0b24tLWludGVudC1kYW5nZXItLWhvdmVyLS1ib3JkZXItY29sb3IpO1xuICAgICAgICAgICAgLS13LWJ1dHRvbi0taG92ZXItLXRleHQtLWNvbG9yOiB2YXIoLS13LWJ1dHRvbi0taW50ZW50LWRhbmdlci0taG92ZXItLXRleHQtLWNvbG9yKTtcbiAgICAgICAgXG4gICAgICAgICAgICAtLXctYnV0dG9uLS1hcHBlYXJhbmNlLW91dGxpbmUtLXRleHQtY29sb3I6IHZhcigtLXctYnV0dG9uLS1pbnRlbnQtZGFuZ2VyLS1hcHBlYXJhbmNlLW91dGxpbmUtLXRleHQtY29sb3IpO1xuICAgICAgICAgICAgLS13LWJ1dHRvbi0tYXBwZWFyYW5jZS1vdXRsaW5lLS1ob3Zlci0tdGV4dC1jb2xvcjogdmFyKC0tdy1idXR0b24tLWludGVudC1kYW5nZXItLWFwcGVhcmFuY2Utb3V0bGluZS0taG92ZXItLXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3NpemU9XCJzXCJdKSB7XG4gICAgICAgICAgICAtLXctYnV0dG9uLS1saW5lLWhlaWdodDogdmFyKC0tdy1idXR0b24tLXNpemUtcy0tbGluZS1oZWlnaHQpXG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbc2l6ZT1cImxcIl0pIHtcbiAgICAgICAgICAgIC0tdy1idXR0b24tLWxpbmUtaGVpZ2h0OiB2YXIoLS13LWJ1dHRvbi0tc2l6ZS1sLS1saW5lLWhlaWdodClcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtibG9ja10pIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2Jsb2NrXSkgYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2FwcGVhcmFuY2U9XCJkZWZhdWx0XCJdKSBidXR0b24sXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS13LWJ1dHRvbi0tdHJhbnNpdGlvbik7XG5cbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXctYnV0dG9uLS1jb2xvcik7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13LWJ1dG9vbi0tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13LWJ1dHRvbi0tdGV4dC0tY29sb3IpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tdy1idXR0b24tLWZvbnQtd2VpZ2h0KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgdmFyKC0tdy1idXR0b24tLXBhZGRpbmctcmlnaHQpIDBweCB2YXIoLS13LWJ1dHRvbi0tcGFkZGluZy1sZWZ0KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXctYnV0dG9uLS1ib3JkZXItcmFkaXVzKTtcblxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLXctYnV0dG9uLS1saW5lLWhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbYXBwZWFyYW5jZT1cImRlZmF1bHRcIl0pIGJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSksXG4gICAgICAgIGJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1idXR0b24tLWhvdmVyLS1jb2xvcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy1idXR0b24tLWhvdmVyLS10ZXh0LS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b25bZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFthcHBlYXJhbmNlPVwib3V0bGluZVwiXSkgYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctYnV0dG9uLS1hcHBlYXJhbmNlLW91dGxpbmUtLXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2FwcGVhcmFuY2U9XCJvdXRsaW5lXCJdKSBidXR0b246aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdy1idXR0b24tLWhvdmVyLS1ib3JkZXItY29sb3IpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctYnV0dG9uLS1hcHBlYXJhbmNlLW91dGxpbmUtLWhvdmVyLS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFthcHBlYXJhbmNlPVwibGlua1wiXSkgYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMCB2YXIoLS13LWJ1dHRvbi0tYXBwZWFyYW5jZS1saW5rLS1wYWRkaW5nLWxlZnQpIDAgdmFyKC0tdy1idXR0b24tLWFwcGVhcmFuY2UtbGluay0tcGFkZGluZy1yaWdodCk7XG5cbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13LWJ1dHRvbi0tYXBwZWFyYW5jZS1vdXRsaW5lLS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFthcHBlYXJhbmNlPVwibGlua1wiXSkgYnV0dG9uOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy1idXR0b24tLWFwcGVhcmFuY2Utb3V0bGluZS0taG92ZXItLXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgYDtcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBhcHBlYXJhbmNlOiB7IFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJUaGUgc3R5bGUgaW4gd2hpY2ggdGhlIGJ1dHRvbiBzaG91bGQgYmUgZGlzcGxheWVkLiBQb3NzaWJsZSB2YWx1ZXMgYXJlOiBgZGVmYXVsdGAsIGBvdXRsaW5lYCBhbmQgYGxpbmtgLidcIlxuICAgICAgICB9LCBcbiAgICAgICAgaW50ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBoZWxwOiBcIkludGVudHMgbWF5IGluZmx1ZW5jZSB0aGUgY29sb3Jpbmcgb2YgYnV0dG9ucy4gQXZhaWxhYmxlIG9wdGlvbnMgYXJlOiBgbm9uZWAgKGRlZmF1bHQpLCBgcHJpbWFyeWAsIGBkYW5nZXJgIGFuZCBgc3VjY2Vzc2AuXCJcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZTogeyBcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGhlbHA6IFwiVGhlIHNpemUgb2YgdGhlIGJ1dHRvbi4gUG9zc2libGUgdmFsdWVzIGFyZSBgc2AsIGBtYCBhbmQgYGxgLlwiXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVkOiB7IFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGhlbHA6IFwiSW5kaWNhdGUgdGhhdCBhIGJ1dHRvbiBpcyBkaXNhYmxlZC5cIlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFwcGVhcmFuY2UgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgdGhpcy5zaXplID0gXCJtXCI7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGlzYWJsZWQpO1xuXG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICA/ZGlzYWJsZWQ9JHt0aGlzLmRpc2FibGVkfT5cbiAgICAgICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIGA7XG4gICAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndy1idXR0b24nLCBXQnV0dG9uKTsiLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBjc3MsIGh0bWwgfSBmcm9tICdsaXQnO1xuXG5cbmV4cG9ydCBjbGFzcyBXQ29kZSBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAgICAgLnNpemUtMTAwIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgYDtcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBpczogeyBcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGhlbHA6IFwiVGhlIHR5cGUgb2YgdGhlIHRhZy4gUG9zc2libGUgdmFsdWVzIGFyZSBgaDFgLCBgaDJgLCBgaDNgLCBgaDRgLCBgaDVgIG9yIGBoNmAuIERlZmF1bHQgaXMgYGgxYC5cIlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzID0gXCJoMVwiO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgPGNvZGU+PHNsb3Q+PC9zbG90PjwvY29kZT5gO1xuICAgIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctY29kZScsIFdDb2RlKTsiLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBjc3MsIGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgY2xhc3NuYW1lcyB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvY2xhc3NuYW1lcy5qcyc7XG5cblxuZXhwb3J0IGNsYXNzIFdIZWFkaW5nIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICAgICAuc2l6ZS0xMDAge1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS13LWhlYWRpbmctLXNpemUtMTAwLS1mb250LXNpemUpO1xuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS13LWhlYWRpbmctLXNpemUtMTAwLS1tYXJnaW4tdG9wKSAwIDAgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaXplLTIwMCB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXctaGVhZGluZy0tc2l6ZS0yMDAtLWZvbnQtc2l6ZSk7XG4gICAgICAgICAgICBtYXJnaW46IHZhcigtLXctaGVhZGluZy0tc2l6ZS0yMDAtLW1hcmdpbi10b3ApIDAgMCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpemUtMzAwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1oZWFkaW5nLS1zaXplLTMwMC0tZm9udC1zaXplKTtcbiAgICAgICAgICAgIG1hcmdpbjogdmFyKC0tdy1oZWFkaW5nLS1zaXplLTMwMC0tbWFyZ2luLXRvcCkgMCAwIDA7XG4gICAgICAgIH1cblxuICAgICAgICAuc2l6ZS00MDAge1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS13LWhlYWRpbmctLXNpemUtNDAwLS1mb250LXNpemUpO1xuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS13LWhlYWRpbmctLXNpemUtNDAwLS1tYXJnaW4tdG9wKSAwIDAgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaXplLTUwMCB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXctaGVhZGluZy0tc2l6ZS01MDAtLWZvbnQtc2l6ZSk7XG4gICAgICAgICAgICBtYXJnaW46IHZhcigtLXctaGVhZGluZy0tc2l6ZS01MDAtLW1hcmdpbi10b3ApIDAgMCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpemUtNjAwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1oZWFkaW5nLS1zaXplLTYwMC0tZm9udC1zaXplKTtcbiAgICAgICAgICAgIG1hcmdpbjogdmFyKC0tdy1oZWFkaW5nLS1zaXplLTYwMC0tbWFyZ2luLXRvcCkgMCAwIDA7XG4gICAgICAgIH1cblxuICAgICAgICAuc2l6ZS03MDAge1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS13LWhlYWRpbmctLXNpemUtNzAwLS1mb250LXNpemUpO1xuICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS13LWhlYWRpbmctLXNpemUtNzAwLS1tYXJnaW4tdG9wKSAwIDAgMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaXplLTgwMCB7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXctaGVhZGluZy0tc2l6ZS04MDAtLWZvbnQtc2l6ZSk7XG4gICAgICAgICAgICBtYXJnaW46IHZhcigtLXctaGVhZGluZy0tc2l6ZS04MDAtLW1hcmdpbi10b3ApIDAgMCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNpemUtOTAwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1oZWFkaW5nLS1zaXplLTkwMC0tZm9udC1zaXplKTtcbiAgICAgICAgICAgIG1hcmdpbjogdmFyKC0tdy1oZWFkaW5nLS1zaXplLTkwMC0tbWFyZ2luLXRvcCkgMCAwIDA7XG4gICAgICAgIH1cblxuICAgICAgICBoNSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy1tdXRlZC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGg2IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS13LWZvbnQtd2VpZ2h0LXRleHQtcmVndWxhcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy1tdXRlZC1jb2xvcik7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgYDtcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBpczogeyBcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGhlbHA6IFwiVGhlIHR5cGUgb2YgdGhlIHRhZy4gUG9zc2libGUgdmFsdWVzIGFyZSBgaDFgLCBgaDJgLCBgaDNgLCBgaDRgLCBgaDVgIG9yIGBoNmAuIERlZmF1bHQgaXMgYGgxYC5cIlxuICAgICAgICB9LFxuXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGhlbHA6IFwiVGhlIHNpemUgb2YgdGhlIGhlYWRpbmcuIFBvc3NpYmxlIHZhbHVlcyBhcmUgYDEwMGAsIGAyMDBgLCBgMzAwYCwgYDQwMGAsIGA1MDBgLCBgNjAwYCwgYDgwMGAsIG9yIGA5MDBgLiBJZiBub3Qgc2V0LCB0aGUgc2l6ZSB3aWxsIGJlIGRlcml2ZWQgYmFzZWQgb24gYGlzYC5cIlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzID0gXCJoMVwiO1xuICAgIH1cblxuICAgIF9nZXRDYWxjdWxhdGVkU2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzID09IFwiaDFcIikge1xuICAgICAgICAgICAgcmV0dXJuIDgwMDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzID09IFwiaDJcIikge1xuICAgICAgICAgICAgcmV0dXJuIDYwMDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzID09IFwiaDNcIikge1xuICAgICAgICAgICAgcmV0dXJuIDUwMDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzID09IFwiaDRcIikge1xuICAgICAgICAgICAgcmV0dXJuIDQwMDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzID09IFwiaDVcIikge1xuICAgICAgICAgICAgcmV0dXJuIDQwMDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzID09IFwiaDZcIikge1xuICAgICAgICAgICAgcmV0dXJuIDQwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA0MDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuaXMpO1xuICAgICAgICBoZWFkaW5nLmNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoeyBbXCJzaXplLVwiICsgdGhpcy5fZ2V0Q2FsY3VsYXRlZFNpemUoKV06IHRydWUgfSk7XG4gICAgICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gXCI8c2xvdD48L3Nsb3Q+XCI7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaGVhZGluZztcbiAgICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd3LWhlYWRpbmcnLCBXSGVhZGluZyk7IiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgY3NzIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IG1hcmtkb3duIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy9tYXJrZG93bi5qcyc7XG5pbXBvcnQgeyBkZWRlbnQgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL2RlZGVudC5qcyc7XG5cblxuZXhwb3J0IGNsYXNzIFdNYXJrZG93biBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCA6Zmlyc3QtY2hpbGQgeyBcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCA6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtzcGFjaW5nPVwic1wiXSkge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0tdy1tYXJrZG93bi0tc3BhY2luZy1zLS1tYXJnaW4tdG9wKTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXctbWFya2Rvd24tLXNwYWNpbmctcy0tbWFyZ2luLWJvdHRvbSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgKiBIZWFkaW5nc1xuICAgICAgICAgKi9cbiAgICAgICAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gICAgICAgICAgICBtYXJnaW46IDEuMmVtIDAgMWVtIDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtdGV4dC04MDApO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtdGV4dC1zZW1pYm9sZCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtdGV4dC02MDApO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtdGV4dC1zZW1pYm9sZCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtdGV4dC01MDApO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtdGV4dC1zZW1pYm9sZCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtdGV4dC00MDApO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtdGV4dC1zZW1pYm9sZCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGg1IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtdGV4dC00MDApO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtdGV4dC1zZW1pYm9sZCk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy1tdXRlZC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGg2IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdy1mb250LXNpemUtdGV4dC00MDApO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXctZm9udC13ZWlnaHQtdGV4dC1yZWd1bGFyKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13LW11dGVkLWNvbG9yKTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAqIFRleHQgY29udGVudFxuICAgICAgICAgKi9cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvZGUge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXctZm9udC1mYW1pbHktbW9ubyk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tdy1mb250LXdlaWdodC1tb25vLXJlZ3VsYXIpO1xuICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS13LWZvbnQtc2l6ZS1tb25vLTQwMCk7XG4gICAgICAgIFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTYwMCk7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIHZhcigtLXctc3BhY2luZy0xMDApO1xuXG4gICAgICAgICAgICBib3JkZXI6IHZhcigtLXctYm9yZGVyLXdpZHRoLS10aGluKSBzb2xpZCB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItODAwKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXctYm9yZGVyLXJhZGl1cy0xMDApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzZWN0aW9uIDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG4gICAgYDtcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBzcGFjaW5nOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBoZWxwOiBcIlRoZSB2ZXJ0aWNhbCBzcGFjaW5nIG9mIHRoZSBtYXJrZG93biBibG9jay4gUG9zc2libGUgdmFsdWVzIGFyZSBgbm9uZWAgYW5kIGBzYC5cIlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNwYWNpbmcgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MPSBtYXJrZG93bihkZWRlbnQodGhpcy5pbm5lckhUTUwpLnJlcGxhY2UoLzxcXCEtLS4qPy0tPi9nLCBcIlwiKSk7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHdyYXBwZXIuY2hpbGROb2Rlcyk7XG4gICAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndy1tYXJrZG93bicsIFdNYXJrZG93bik7IiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgY3NzLCBodG1sIH0gZnJvbSAnbGl0JztcblxuZXhwb3J0IGNsYXNzIFdQYW5lIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXctcGFuZS0tYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICA6aG9zdChbc3BhY2luZz1cInNcIl0pIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXctcGFuZS0tc3BhY2luZy1zLS1wYWRkaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtzcGFjaW5nPVwibVwiXSkge1xuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tdy1wYW5lLS1zcGFjaW5nLXMtLXBhZGRpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2VsZXZhdGlvbj1cIjUwMFwiXSkge1xuICAgICAgICAgICAgYm9yZGVyOiB2YXIoLS13LXBhbmUtLWVsZXZhdGlvbi01MDAtLWJvcmRlci13aWR0aCkgc29saWQgdmFyKC0tdy1wYW5lLS1lbGV2YXRpb24tNTAwLS1ib3JkZXItY29sb3IpO1xuICAgICAgICB9XG4gICAgYDtcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBlbGV2YXRpb246IHsgXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBoZWxwOiBcIkluZGljYXRlcyBob3cgbXVjaCB0aGUgcGFuZSBzaG91bGQgbG9vayAnZWxldmF0ZWQnLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGA0MDBgLCBgNTAwYCBhbmQgYDYwMGAuIERlZmF1bHQgaXMgYDUwMGAgd2hpY2ggbWVhbnMgbm8gZWxldmF0aW9uLlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgc3BhY2luZzoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJUaGUgc3BhY2luZyBvZiB0aGUgaW5uZXIgY29udGVudCB0byB0aGUgYm9yZGVyIG9mIHRoZSBwYW5lIChwYWRkaW5nKS4gUG9zc2libGUgdmFsdWVzIGFyZSBgbm9uZWAsIGBzYCBhbmQgYG1gLlwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGV2YXRpb24gPSA1MDA7XG4gICAgICAgIHRoaXMuc3BhY2luZyA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIGA7XG4gICAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndy1wYW5lJywgV1BhbmUpOyIsImltcG9ydCB7IExpdEVsZW1lbnQsIGNzcywgaHRtbCB9IGZyb20gJ2xpdCc7XG5cblxuZXhwb3J0IGNsYXNzIFdQYXJhZ3JhcGggZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgICAgIC5zaXplLTEwMCB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIGA7XG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgaXM6IHsgXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBoZWxwOiBcIlRoZSB0eXBlIG9mIHRoZSB0YWcuIFBvc3NpYmxlIHZhbHVlcyBhcmUgYGgxYCwgYGgyYCwgYGgzYCwgYGg0YCwgYGg1YCBvciBgaDZgLiBEZWZhdWx0IGlzIGBoMWAuXCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pcyA9IFwiaDFcIjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYDxwPjxzbG90Pjwvc2xvdD48L3A+YDtcbiAgICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd3LXAnLCBXUGFyYWdyYXBoKTsiLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBjc3MsIGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgZGVkZW50IH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy9kZWRlbnQuanMnO1xuXG5leHBvcnQgY2xhc3MgV1ByZSBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXByZS0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBwcmUge1xuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tdy1wcmUtLXBhZGRpbmcpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXctcHJlLS1mb250LWZhbWlseSk7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLXctcHJlLS1mb250LXNpemUpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctcHJlLS1jb2xvcik7XG5cbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIGBcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBoZWxwOiBcIkF0dHJpYnV0ZSB0byBwYXNzIHRoZSBjb250ZW50IG9mIHRoZSBhdHRyaWJ1dGVcIlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY29udGVudCA9IHRoaXMuY29udGVudCA/IHRoaXMuY29udGVudCA6IHRoaXMuaW5uZXJIVE1MO1xuICAgICAgICBjb250ZW50ID0gZGVkZW50KGNvbnRlbnQpO1xuXG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHByZT48Y29kZT4ke2NvbnRlbnR9PC9jb2RlPjwvcHJlPlxuICAgICAgICBgXG4gICAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndy1wcmUnLCBXUHJlKTsiLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBjc3MsIGh0bWwgfSBmcm9tICdsaXQnO1xuXG5cbmV4cG9ydCBjbGFzcyBXVGFicyBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tdy10YWJzLS1ib3JkZXItYm90dG9tLXdpZHRoKSBzb2xpZCB2YXIoLS13LXRhYnMtLWNvbnRyYXN0LS1ib3JkZXItYm90dG9tLWNvbG9yKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXctdGFicy0tY29udHJhc3QtLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QgOjpzbG90dGVkKHctdGFiKSB7XG4gICAgICAgICAgICAtLXctdGFiLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXRhYnMtLWNvbnRyYXN0LS10YWItLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgLS13LXRhYi0taG92ZXItLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctdGFicy0tY29udHJhc3QtLXRhYi0taG92ZXItLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgLS13LXRhYi0tYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1ib3JkZXItYm90dG9tLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1ib3JkZXItcmlnaHQtY29sb3IpO1xuICAgICAgICAgICAgLS13LXRhYi0tY29sb3I6IHZhcigtLXctdGFicy0tY29udHJhc3QtLXRhYi0tY29sb3IpO1xuICAgICAgICAgICAgLS13LXRhYi0taG92ZXItLWNvbG9yOiB2YXIoLS13LXRhYnMtLWNvbnRyYXN0LS10YWItLWhvdmVyLS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCA6OnNsb3R0ZWQody10YWJbYWN0aXZlXSkge1xuICAgICAgICAgICAgLS13LXRhYi0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1hY3RpdmUtLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgLS13LXRhYi0tYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdy10YWJzLS1jb250cmFzdC0tdGFiLS1hY3RpdmUtLWJvcmRlci1ib3R0b20tY29sb3IpO1xuICAgICAgICAgICAgLS13LXRhYi0taG92ZXItLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctdGFicy0tY29udHJhc3QtLXRhYi0tYWN0aXZlLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWNvbG9yOiB2YXIoLS13LXRhYnMtLWNvbnRyYXN0LS10YWItLWFjdGl2ZS0tY29sb3IpO1xuICAgICAgICAgICAgLS13LXRhYi0taG92ZXItLWNvbG9yOiB2YXIoLS13LXRhYnMtLWNvbnRyYXN0LS10YWItLWFjdGl2ZS0tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2FwcGVhcmFuY2U9XCJsaWdodC1jb250cmFzdFwiXSkge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tdy10YWJzLS1ib3JkZXItYm90dG9tLXdpZHRoKSBzb2xpZCB2YXIoLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS1ib3JkZXItYm90dG9tLWNvbG9yKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2FwcGVhcmFuY2U9XCJsaWdodC1jb250cmFzdFwiXSkgOjpzbG90dGVkKHctdGFiKSB7XG4gICAgICAgICAgICAtLXctdGFiLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS10YWItLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgLS13LXRhYi0taG92ZXItLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLXRhYi0taG92ZXItLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgLS13LXRhYi0tYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1ib3JkZXItYm90dG9tLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1ib3JkZXItcmlnaHQtY29sb3IpO1xuICAgICAgICAgICAgLS13LXRhYi0tY29sb3I6IHZhcigtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLXRhYi0tY29sb3IpO1xuICAgICAgICAgICAgLS13LXRhYi0taG92ZXItLWNvbG9yOiB2YXIoLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS10YWItLWhvdmVyLS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbYXBwZWFyYW5jZT1cImxpZ2h0LWNvbnRyYXN0XCJdKSA6OnNsb3R0ZWQody10YWJbYWN0aXZlXSkge1xuICAgICAgICAgICAgLS13LXRhYi0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1hY3RpdmUtLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgLS13LXRhYi0tYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdy10YWJzLS1saWdodC1jb250cmFzdC0tdGFiLS1hY3RpdmUtLWJvcmRlci1ib3R0b20tY29sb3IpO1xuICAgICAgICAgICAgLS13LXRhYi0taG92ZXItLWJhY2tncm91bmQtY29sb3I6IHZhcigtLXctdGFicy0tbGlnaHQtY29udHJhc3QtLXRhYi0tYWN0aXZlLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWNvbG9yOiB2YXIoLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS10YWItLWFjdGl2ZS0tY29sb3IpO1xuICAgICAgICAgICAgLS13LXRhYi0taG92ZXItLWNvbG9yOiB2YXIoLS13LXRhYnMtLWxpZ2h0LWNvbnRyYXN0LS10YWItLWFjdGl2ZS0tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2FwcGVhcmFuY2U9XCJzaGFkZWRcIl0pIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLXctdGFicy0tYm9yZGVyLWJvdHRvbS13aWR0aCkgc29saWQgdmFyKC0tdy10YWJzLS1zaGFkZWQtLWJvcmRlci1ib3R0b20tY29sb3IpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy10YWJzLS1zaGFkZWQtLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICA6aG9zdChbYXBwZWFyYW5jZT1cInNoYWRlZFwiXSkgOjpzbG90dGVkKHctdGFiKSB7XG4gICAgICAgICAgICAtLXctdGFiLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXRhYnMtLXNoYWRlZC0tdGFiLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWhvdmVyLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXRhYnMtLXNoYWRlZC0tdGFiLS1ob3Zlci0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICAtLXctdGFiLS1ib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS13LXRhYnMtLXNoYWRlZC0tdGFiLS1ib3JkZXItYm90dG9tLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWJvcmRlci1yaWdodC1jb2xvcjogdmFyKC0tdy10YWJzLS1zaGFkZWQtLXRhYi0tYm9yZGVyLXJpZ2h0LWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWNvbG9yOiB2YXIoLS13LXRhYnMtLXNoYWRlZC0tdGFiLS1jb2xvcik7XG4gICAgICAgICAgICAtLXctdGFiLS1ob3Zlci0tY29sb3I6IHZhcigtLXctdGFicy0tc2hhZGVkLS10YWItLWhvdmVyLS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIDpob3N0KFthcHBlYXJhbmNlPVwic2hhZGVkXCJdKSA6OnNsb3R0ZWQody10YWJbYWN0aXZlXSkge1xuICAgICAgICAgICAgLS13LXRhYi0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy10YWJzLS1zaGFkZWQtLXRhYi0tYWN0aXZlLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXctdGFicy0tc2hhZGVkLS10YWItLWFjdGl2ZS0tYm9yZGVyLWJvdHRvbS1jb2xvcik7XG4gICAgICAgICAgICAtLXctdGFiLS1ob3Zlci0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy10YWJzLS1zaGFkZWQtLXRhYi0tYWN0aXZlLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWNvbG9yOiB2YXIoLS13LXRhYnMtLXNoYWRlZC0tdGFiLS1hY3RpdmUtLWNvbG9yKTtcbiAgICAgICAgICAgIC0tdy10YWItLWhvdmVyLS1jb2xvcjogdmFyKC0tdy10YWJzLS1zaGFkZWQtLXRhYi0tYWN0aXZlLS1jb2xvcik7XG4gICAgICAgIH1cbiAgICBgO1xuXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgICAgIGFwcGVhcmFuY2U6IHsgXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBoZWxwOiBcIlRoZSBhcHBlYXJhbmNlIG9mIHRoZSBuYXZiYXIuIFBvc3NpYmxlIHZhbHVlcyBhcmUgYGNvbnRyYXN0YCwgYGxpZ2h0LWNvbnRyYXN0YCBhbmQgYHNoYWRlZGAuXCJcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgaGVscDogXCJXaGV0aGVyIHRoZSB0YWIgc2hvdWxkIGJlIGRpc3BsYXllZCBhcyBhY3RpdmUuXCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBfaGFuZGxlQ2xpY2soZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT0gXCJ3LXRhYlwiKSB7XG4gICAgICAgICAgICBjb25zdCB0YWIgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpIHx8IGUudGFyZ2V0LmlubmVySFRNTDtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJ3LXRhYnMtY2hhbmdlZFwiLCB7IGRldGFpbDogeyB2YWx1ZTogdGFiIH0sIGJ1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlIH0pKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYXBwZWFyYW5jZSA9IFwiY29udHJhc3RcIjtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlQ2xpY2spO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgPHNsb3Q+PC9zbG90PmBcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFdUYWIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMCB2YXIoLS13LXRhYi0tcGFkZGluZy1yaWdodCkgMCB2YXIoLS13LXRhYi0tcGFkZGluZy1sZWZ0KTtcblxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdy10YWJzLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yO1xuXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IHZhcigtLXctdGFicy0tYm9yZGVyLXJpZ2h0LXdpZHRoKSBzb2xpZCB2YXIoLS13LXRhYi0tYm9yZGVyLXJpZ2h0LWNvbG9yKTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLXctdGFicy0tYm9yZGVyLWJvdHRvbS13aWR0aCkgc29saWQgdmFyKC0tdy10YWItLWJvcmRlci1ib3R0b20tY29sb3IpO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygtMSAqIHZhcigtLXctdGFicy0tYm9yZGVyLWJvdHRvbS13aWR0aCkpO1xuICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS13LXRhYnMtLWhlaWdodCk7XG5cbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXctdGFiLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13LXRhYi0tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LXRhYi0taG92ZXItLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctdGFiLS1ob3Zlci0tY29sb3IpO1xuICAgICAgICB9XG4gICAgYDtcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBoZWxwOiBcIlNwZWNpZmllcyB3aGV0aGVyIHRoZSB0YWIgc2hvdWxkIGJlIGRpc3BsYXllZCBhcyBhY3RpdmUuXCJcbiAgICAgICAgfSxcbiAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJUaGUgbmFtZSBvZiB0aGUgdGFiLiBUaGlzIG5hbWUgd2lsbCBiZSB1c2VkIHdoZW4gZGlzcGF0Y2hpbmcgZXZlbnRzIGZyb20gVGFicyBjb21wb25lbnQuXCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJcIjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYDxhIGhyZWY9XCIjXCI+PHNsb3Q+PC9zbG90PjwvYT5gXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBXVGFiUGFuZSBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJUaGUgaWQgb2YgdGhlIGFjdGl2ZSBlbGVtZW50LlwiXG4gICAgICAgIH0sXG4gICAgICAgIGFwcGVhcmFuY2U6IHsgXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBoZWxwOiBcIlRoZSBhcHBlYXJhbmNlIG9mIHRoZSBuYXZiYXIuIFBvc3NpYmxlIHZhbHVlcyBhcmUgYGNvbnRyYXN0YCwgYGxpZ2h0LWNvbnRyYXN0YCBhbmQgYHNoYWRlZGAuXCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJcIjtcbiAgICAgICAgdGhpcy5hcHBlYXJhbmNlID0gXCJjb250cmFzdFwiO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IFwiXCI7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidy10YWJzLWNoYW5nZWRcIiwgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5kZXRhaWwudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmFjdGl2ZSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfcmVuZGVyVGFiKHRhYikge1xuICAgICAgICBjb25zdCBuYW1lID0gdGFiLmdldEF0dHJpYnV0ZSgnc2xvdCcpO1xuICAgICAgICBjb25zdCBsYWJlbCA9IHRhYi5nZXRBdHRyaWJ1dGUoJ2xhYmVsJyk7XG5cbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICBuYW1lID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHctdGFiIFxuICAgICAgICAgICAgICAgIG5hbWU9XCIke25hbWV9XCJcbiAgICAgICAgICAgICAgICA/YWN0aXZlPSR7dGhpcy5hY3RpdmUudG9Mb3dlckNhc2UoKSA9PSBuYW1lLnRvTG93ZXJDYXNlKCl9PlxuXG4gICAgICAgICAgICAgICAgJHtsYWJlbH1cbiAgICAgICAgICAgIDwvdy10YWI+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgX3JlbmRlckNvbnRlbnQodGFicykge1xuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRhYnMuZmlsdGVyKHRhYiA9PiB0YWIuZ2V0QXR0cmlidXRlKCdzbG90JykgJiYgdGFiLmdldEF0dHJpYnV0ZSgnc2xvdCcpLnRvTG93ZXJDYXNlKCkgPT0gdGhpcy5hY3RpdmUudG9Mb3dlckNhc2UoKSlcblxuICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGh0bWxgPHNsb3QgbmFtZT1cIiR7c2VsZWN0ZWRbMF0uZ2V0QXR0cmlidXRlKCdzbG90Jyl9XCI+PC9zbG90PmA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHRhYnMgPSBBcnJheS5mcm9tKHRoaXMucXVlcnlTZWxlY3RvckFsbChcInctdGFicGFuZS1pdGVtXCIpKTtcblxuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDx3LXRhYnMgYXBwZWFyYW5jZT1cIiR7dGhpcy5hcHBlYXJhbmNlfVwiPlxuICAgICAgICAgICAgICAgICR7dGFicy5tYXAodGFiID0+IHRoaXMuX3JlbmRlclRhYih0YWIpKX1cbiAgICAgICAgICAgIDwvdy10YWJzPlxuXG4gICAgICAgICAgICAke3RoaXMuX3JlbmRlckNvbnRlbnQodGFicyl9XG4gICAgICAgIGA7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBXVGFiUGFuZUl0ZW0gZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBzbG90OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBoZWxwOiBcIlRoZSBuYW1lIG9mIHRoZSB0YWIuIFRoaXMgbmFtZSB3aWxsIGJlIHVzZWQgd2hlbiBkaXNwYXRjaGluZyBldmVudHMgZnJvbSBUYWJzIGNvbXBvbmVudC5cIlxuICAgICAgICB9LFxuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJUaGUgbGFiZWwgb2YgdGhlIHRhYiwgYXMgc2hvd24gb24gdGhlIHRhYiBiYXIuXCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYDxzbG90Pjwvc2xvdD5gXG4gICAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndy10YWJzJywgV1RhYnMpO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd3LXRhYicsIFdUYWIpO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd3LXRhYnBhbmUnLCBXVGFiUGFuZSk7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctdGFicGFuZS1pdGVtJywgV1RhYlBhbmVJdGVtKTsiLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBjc3MsIGh0bWwgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgY2xhc3NuYW1lcyB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvY2xhc3NuYW1lcy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBXVGV4dElucHV0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICAgICBkaXYge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbXV0ZWQtY29sb3IpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgICAgICAgICBwYWRkaW5nOiBjYWxjKDAuN3JlbSAtIDFweCk7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYuaW52YWxpZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1kYW5nZXItY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2LmludmFsaWQgaW5wdXQge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlci1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYuYmxvY2sge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2LmZvY3VzLFxuICAgICAgICBkaXYuaW52YWxpZC5mb2N1cyB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdiBpbnB1dDpmb2N1cyxcbiAgICAgICAgZGl2LmludmFsaWQgaW5wdXQ6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0OmRpc2FibGVkIHtcbiAgICAgICAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbi5hY3Rpb24ge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uLmFjdGlvbjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uLmFjdGlvbi5jbGVhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pY29uLWNsb3NlKSBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMHB4IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMHB4ICsgMiowLjdyZW0gLSAxcHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uLmFjdGlvbi5zaG93IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWljb24tZXllKSBjZW50ZXIgbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNXB4IDE1cHg7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxNXB4ICsgMiowLjdyZW0gLSAxcHgpO1xuICAgICAgICB9XG4gICAgYDtcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBraW5kOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgICAgICB2YWx1ZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHsgdHlwZTogU3RyaW5nIH0sXG5cbiAgICAgICAgaW52YWxpZDogeyB0eXBlOiBCb29sZWFuIH0sXG4gICAgICAgIGRpc2FibGVkOiB7IHR5cGU6IEJvb2xlYW4gfSxcbiAgICAgICAgYmxvY2s6IHsgdHlwZTogQm9vbGVhbiB9LFxuXG4gICAgICAgIGNsZWFyYWJsZTogeyB0eXBlOiBCb29sZWFuIH0sXG5cbiAgICAgICAgZm9jdXM6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBhdHRyaWJ1dGU6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFzc3dvcmRWaXNpYmxlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgYXR0cmlidXRlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtpbmQgPSBcInRleHRcIjtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMucGFjZWhvbGRlciA9IFwiXCI7XG4gICAgICAgIHRoaXMuaW52YWxpZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmxvY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXNzd29yZFZpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMucmVuZGVyUm9vdD8ucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb2N1cygpO1xuICAgIH1cblxuICAgIHRvZ2dsZVZpc2liaWxpdHkoKSB7XG4gICAgICAgIHRoaXMucGFzc3dvcmRWaXNpYmxlID0gIXRoaXMucGFzc3dvcmRWaXNpYmxlO1xuICAgIH1cblxuICAgIGdldEtpbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmtpbmQgPT0gXCJwYXNzd29yZFwiICYmIHRoaXMucGFzc3dvcmRWaXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ0ZXh0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5raW5kO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CbHVyKGUpIHtcbiAgICAgICAgdGhpcy5mb2N1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuXG4gICAgb25Gb2N1cyhlKSB7XG4gICAgICAgIHRoaXMuZm9jdXMgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uSW5wdXQoZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9JHtjbGFzc25hbWVzKHsgXCJpbnZhbGlkXCI6IHRoaXMuaW52YWxpZCwgXCJibG9ja1wiOiB0aGlzLmJsb2NrLCBcImRpc2FibGVkXCI6IHRoaXMuZGlzYWJsZWQsIFwiZm9jdXNcIjogdGhpcy5mb2N1cyB9KX0+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiJHt0aGlzLmdldEtpbmQoKX1cIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIke3RoaXMucGxhY2Vob2xkZXJ9XCIgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA/ZGlzYWJsZWQ9JHt0aGlzLmRpc2FibGVkfVxuXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy52YWx1ZX1cIlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgQGZvY3VzPSR7dGhpcy5vbkZvY3VzfVxuICAgICAgICAgICAgICAgICAgICBAYmx1cj0ke3RoaXMub25CbHVyfVxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9JHt0aGlzLm9uSW5wdXR9PlxuICAgICAgICAgICAgICAgIDwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgJHsgdGhpcy5jbGVhcmFibGUgJiYgaHRtbGA8YnV0dG9uIGNsYXNzPVwiYWN0aW9uIGNsZWFyXCIgQGNsaWNrPSR7dGhpcy5jbGVhcn0+PC9idXR0b24+YCB8fCBodG1sYGAgfVxuICAgICAgICAgICAgICAgICR7IHRoaXMua2luZCA9PSBcInBhc3N3b3JkXCIgJiYgaHRtbGA8YnV0dG9uIGNsYXNzPVwiYWN0aW9uIHNob3dcIiBAY2xpY2s9JHt0aGlzLnRvZ2dsZVZpc2liaWxpdHl9PjwvYnV0dG9uPmAgfHwgaHRtbGBgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctdGV4dC1pbnB1dCcsIFdUZXh0SW5wdXQpOyIsImltcG9ydCB7TGl0RWxlbWVudCwgY3NzLCBodG1sfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgY2xhc3MgV0NvbnRhaW5lciBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAgICAgZGl2LmNvbnRhaW5lcixcbiAgICAgICAgZGl2LmNvbnRhaW5lci1mbHVpZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tY29udGFpbmVyLS1jb250ZW50LXNwYWNpbmcpO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1jb250YWluZXItLWNvbnRlbnQtc3BhY2luZyk7XG5cbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICBkaXYuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBkaXYuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgICBkaXYuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgICAgICAgICAgZGl2LmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgO1xuXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgICBmbHVpZDogZmFsc2VcbiAgICB9O1xuICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgfVxuICBcbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIiR7dGhpcy5mbHVpZCA/ICdjb250YWluZXItZmx1aWQnIDogJ2NvbnRhaW5lcid9XCI+XG4gICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9XG5cbn1cbiAgXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctY29udGFpbmVyJywgV0NvbnRhaW5lcik7IiwiaW1wb3J0IHtMaXRFbGVtZW50LCBjc3MsIGh0bWx9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBjbGFzc25hbWVzIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy9jbGFzc25hbWVzLmpzJztcblxuZXhwb3J0IGNsYXNzIFdGaXhlZEhlYWRlciBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgICAgIDpob3N0IHsgXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcblxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGRsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICBuYXYge1xuICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICAgICAgbWFyZ2luOiB2YXIoKVxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdiA6OnNsb3R0ZWQoKikge1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJ0aWNsZSB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IHZhcigtLXctZml4ZWQtaGVhZGVyLS1hcnRpY2xlLW1heC13aWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBhcnRpY2xlLnNwYWNpbmctcyB7XG4gICAgICAgICAgICBtYXJnaW46IHZhcigtLXctZml4ZWQtaGVhZGVyLS1zcGFjaW5nLXMtLWhvcml6b250YWwtc3BhY2luZykgdmFyKC0tdy1maXhlZC1oZWFkZXItLXNwYWNpbmctcy0tdmVydGljYWwtc3BhY2luZyk7XG4gICAgICAgIH1cblxuICAgICAgICBhcnRpY2xlLnNwYWNpbmctbSB7XG4gICAgICAgICAgICBtYXJnaW46IHZhcigtLXctZml4ZWQtaGVhZGVyLS1zcGFjaW5nLW0tLWhvcml6b250YWwtc3BhY2luZykgdmFyKC0tdy1maXhlZC1oZWFkZXItLXNwYWNpbmctbS0tdmVydGljYWwtc3BhY2luZyk7XG4gICAgICAgIH1cblxuICAgICAgICBhc2lkZSB7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZjAwO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11dGVkLWNvbG9yKTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICB9XG4gICAgYFxuXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgICAgIHNwYWNpbmc6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGhlbHA6IFwiU3BlY2lmaWVzIHNwYWNpbmdzIChtYXJnaW5zLCBwYWRkaW5ncywgLi4uKS4gUG9zc2libGUgdmFsdWVzIGFyZSBgc2AsIGBtYCBhbmQgYG5vbmVgLlwiXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3BhY2luZyA9IFwic1wiO1xuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImhlYWRlclwiPjwvc2xvdD5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwibmF2XCI+PC9zbG90PlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICAgICAgPGFydGljbGUgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPSR7Y2xhc3NuYW1lcyh7W1wic3BhY2luZy1cIiArIHRoaXMuc3BhY2luZ106IHRydWUgfSl9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJhcnRpY2xlXCI+PC9zbG90PlxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cblxuICAgICAgICAgICAgICAgIDxhc2lkZVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz0ke2NsYXNzbmFtZXMoe1tcInNwYWNpbmctXCIgKyB0aGlzLnNwYWNpbmddOiB0cnVlIH0pfT5cblxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiYXNpZGVcIj48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICAgIDwvbWFpbj5cblxuICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiZm9vdGVyXCI+PC9zbG90PlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIGBcbiAgICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndy1maXhlZC1oZWFkZXInLCBXRml4ZWRIZWFkZXIpOyIsImltcG9ydCB7TGl0RWxlbWVudCwgY3NzLCBodG1sfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgY2xhc3MgV0dyaWQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXctZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxOyB9XG4gICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtjb2w9XCIxXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDE7IH1cbiAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2NvbD1cIjJcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMjsgfVxuICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bY29sPVwiM1wiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAzOyB9XG4gICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtjb2w9XCI0XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDQ7IH1cbiAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2NvbD1cIjVcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gNTsgfVxuICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bY29sPVwiNlwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA2OyB9XG4gICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtjb2w9XCI3XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDc7IH1cbiAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2NvbD1cIjhcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gODsgfVxuICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bY29sPVwiOVwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA5OyB9XG4gICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtjb2w9XCIxMFwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxMDsgfVxuICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bY29sPVwiMTFcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTE7IH1cbiAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2NvbD1cIjEyXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDEyOyB9XG4gICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtjb2w9XCIxM1wiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxMzsgfVxuICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bY29sPVwiMTRcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTQ7IH1cbiAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2NvbD1cIjE1XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDE1OyB9XG4gICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtjb2w9XCIxNlwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxNjsgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bc209XCIxXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDE7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtzbT1cIjJcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMjsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3NtPVwiM1wiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAzOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bc209XCI0XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDQ7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtzbT1cIjVcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gNTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3NtPVwiNlwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA2OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bc209XCI3XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDc7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtzbT1cIjhcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gODsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3NtPVwiOVwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA5OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bc209XCIxMFwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxMDsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3NtPVwiMTFcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTE7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtzbT1cIjEyXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDEyOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bc209XCIxM1wiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxMzsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3NtPVwiMTRcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTQ7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtzbT1cIjE1XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDE1OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bc209XCIxNlwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxNjsgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVttZD1cIjFcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW21kPVwiMlwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAyOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbWQ9XCIzXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDM7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVttZD1cIjRcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gNDsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW21kPVwiNVwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA1OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbWQ9XCI2XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDY7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVttZD1cIjdcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gNzsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW21kPVwiOFwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA4OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbWQ9XCI5XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDk7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVttZD1cIjEwXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDEwOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbWQ9XCIxMVwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxMTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW21kPVwiMTJcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTI7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVttZD1cIjEzXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDEzOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbWQ9XCIxNFwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxNDsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW21kPVwiMTVcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTU7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVttZD1cIjE2XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDE2OyB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2xnPVwiMVwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbGc9XCIyXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDI7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtsZz1cIjNcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMzsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2xnPVwiNFwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA0OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbGc9XCI1XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDU7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtsZz1cIjZcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gNjsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2xnPVwiN1wiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA3OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbGc9XCI4XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDg7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtsZz1cIjlcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gOTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2xnPVwiMTBcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTA7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtsZz1cIjExXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDExOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbGc9XCIxMlwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxMjsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2xnPVwiMTNcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTM7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVtsZz1cIjE0XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDE0OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1bbGc9XCIxNVwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxNTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW2xnPVwiMTZcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTY7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3hsPVwiMVwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beGw9XCIyXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDI7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4bD1cIjNcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMzsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3hsPVwiNFwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA0OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beGw9XCI1XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDU7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4bD1cIjZcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gNjsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3hsPVwiN1wiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA3OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beGw9XCI4XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDg7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4bD1cIjlcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gOTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3hsPVwiMTBcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTA7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4bD1cIjExXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDExOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beGw9XCIxMlwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxMjsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3hsPVwiMTNcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTM7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4bD1cIjE0XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDE0OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beGw9XCIxNVwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxNTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3hsPVwiMTZcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTY7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3h4bD1cIjFcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3h4bD1cIjJcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMjsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3h4bD1cIjNcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMzsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3h4bD1cIjRcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gNDsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3h4bD1cIjVcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gNTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3h4bD1cIjZcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gNjsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3h4bD1cIjdcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gNzsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3h4bD1cIjhcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gODsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3h4bD1cIjlcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gOTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3h4bD1cIjEwXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDEwOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beHhsPVwiMTFcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTE7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eGw9XCIxMlwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxMjsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3h4bD1cIjEzXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDEzOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beHhsPVwiMTRcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTQ7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eGw9XCIxNVwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxNTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3h4bD1cIjE2XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDE2OyB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNjAwcHgpIHtcbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eHhsPVwiMVwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAxOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beHh4bD1cIjJcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMjsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3h4eGw9XCIzXCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDM7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eHhsPVwiNFwiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA0OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beHh4bD1cIjVcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gNTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3h4eGw9XCI2XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDY7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eHhsPVwiN1wiXSkgeyBncmlkLWNvbHVtbi1zdGFydDogc3BhbiA3OyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQody1ncmlkLWl0ZW1beHh4bD1cIjhcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gODsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKHctZ3JpZC1pdGVtW3h4eGw9XCI5XCJdKSB7IGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDk7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eHhsPVwiMTBcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTA7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eHhsPVwiMTFcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTE7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eHhsPVwiMTJcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTI7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eHhsPVwiMTNcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTM7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eHhsPVwiMTRcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTQ7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eHhsPVwiMTVcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTU7IH1cbiAgICAgICAgICAgIDo6c2xvdHRlZCh3LWdyaWQtaXRlbVt4eHhsPVwiMTZcIl0pIHsgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMTY7IH1cbiAgICAgICAgfVxuICAgIGA7XG4gIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICB9XG4gIFxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICBgO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgV0dyaWRJdGVtIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAgICAgXG4gICAgYDtcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBjb2w6IHsgXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBoZWxwOiBcIk51bWJlciBvZiBjb2x1bW4gc3BhbiBmb3IgYG1heC13aWR0aD1Ob25lYC4gRGVmYXVsdCBpcyBgMWAuXCJcbiAgICAgICAgfSxcblxuICAgICAgICBzbTogeyBcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGhlbHA6IFwiTnVtYmVyIG9mIGNvbHVtbiBzcGFuIGZvciBgbWF4LXdpZHRoID4gdmFyKC0tdy1icmVha3BvaW50LXNtKWAuXCJcbiAgICAgICAgfSxcblxuICAgICAgICBtZDogeyBcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGhlbHA6IFwiTnVtYmVyIG9mIGNvbHVtbiBzcGFuIGZvciBgbWF4LXdpZHRoID4gdmFyKC0tdy1icmVha3BvaW50LW1kKWAuXCJcbiAgICAgICAgfSxcblxuICAgICAgICBsZzogeyBcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGhlbHA6IFwiTnVtYmVyIG9mIGNvbHVtbiBzcGFuIGZvciBgbWF4LXdpZHRoID4gdmFyKC0tdy1icmVha3BvaW50LWxnKWAuXCJcbiAgICAgICAgfSxcblxuICAgICAgICB4bDogeyBcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGhlbHA6IFwiTnVtYmVyIG9mIGNvbHVtbiBzcGFuIGZvciBgbWF4LXdpZHRoID4gdmFyKC0tdy1icmVha3BvaW50LXhsKWAuXCJcbiAgICAgICAgfSxcblxuICAgICAgICB4eGw6IHsgXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBoZWxwOiBcIk51bWJlciBvZiBjb2x1bW4gc3BhbiBmb3IgYG1heC13aWR0aCA+IHZhcigtLXctYnJlYWtwb2ludC14eGwpYC5cIlxuICAgICAgICB9LFxuXG4gICAgICAgIHh4eGw6IHsgXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBoZWxwOiBcIk51bWJlciBvZiBjb2x1bW4gc3BhbiBmb3IgYG1heC13aWR0aCA+IHZhcigtLXctYnJlYWtwb2ludC14eHhsKWAuXCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgIH1cbiAgICBcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICBgO1xuICAgIH1cbn1cbiAgXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctZ3JpZCcsIFdHcmlkKTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndy1ncmlkLWl0ZW0nLCBXR3JpZEl0ZW0pOyIsImltcG9ydCB7TGl0RWxlbWVudCwgY3NzLCBodG1sfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgY2xhc3NuYW1lcyB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvY2xhc3NuYW1lcy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBXQnJhbmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICAgICBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAgICAgICAgICAgIFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGxpbmVhcjtcblxuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEuY29udHJhc3Qge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctYnJhbmQtLWNvbnRyYXN0LS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBhLmNvbnRyYXN0OmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13LWJyYW5kLS1jb250cmFzdC0taG92ZXItLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGEuc2hhZGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13LWJyYW5kLS1zaGFkZWQtLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGEuc2hhZGVkOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13LWJyYW5kLS1zaGFkZWQtLWhvdmVyLS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS13LWJyYW5kLS1sb2dvLS1oZWlnaHQpO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS13LWJyYW5kLS1sb2dvLS1tYXJnaW4tcmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4uYnJhbmQge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXctYnJhbmQtLWZvbnQtd2VpZ2h0KTtcbiAgICAgICAgfVxuICAgIGBcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBhcHA6IHsgXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBoZWxwOiBcIlRoZSBuYW1lIG9mIHRoZSBhcHBsaWNhdGlvbi5cIlxuICAgICAgICB9LFxuICAgICAgICBhcHBlYXJhbmNlOiB7IFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJUaGUgYXBwZWFyYW5jZSBvZiB0aGUgbmF2YmFyLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGBjb250cmFzdGAgYW5kIGBzaGFkZWRgLlwiXG4gICAgICAgIH0sXG4gICAgICAgIGJyYW5kOiB7IFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJUaGUgbmFtZSBvZiB0aGUgYnJhbmQuXCJcbiAgICAgICAgfSxcbiAgICAgICAgaHJlZjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJUaGUgdGFyZ2V0IGxvY2F0aW9uIHdoZW4gcHJlc3NpbmcgdGhlIGJyYW5kLiBVc3VhbGx5IGhvbWUgcGFnZS4gRGVmYXVsdCBpcyBgL2AuXCJcbiAgICAgICAgfSxcbiAgICAgICAgbG9nbzogeyBcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGhlbHA6IFwiT3B0aW9uYWwuIFRoZSBVUkwgb2YgYSBsb2dvIHRvIGJlIGRpc3BsYXllZC5cIlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmJyYW5kID0gXCJcIjtcbiAgICAgICAgdGhpcy5hcHAgPSBcIlwiO1xuICAgICAgICB0aGlzLmxvZ28gPSBcIlwiO1xuICAgICAgICB0aGlzLmFwcGVhcmFuY2UgPSBcImNvbnRyYXN0XCI7XG4gICAgICAgIHRoaXMuaHJlZiA9IFwiL1wiO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICBocmVmPVwiJHt0aGlzLmhyZWZ9XCJcbiAgICAgICAgICAgICAgICBjbGFzcz0ke2NsYXNzbmFtZXMoeyBbdGhpcy5hcHBlYXJhbmNlXTogdHJ1ZSB9KX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt0aGlzLmxvZ299XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJicmFuZFwiPiR7dGhpcy5icmFuZH0mbmJzcDs8L3NwYW4+PHNwYW4gY2xhc3M9XCJhcHBcIj4ke3RoaXMuYXBwfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgYFxuICAgIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd3LWJyYW5kJywgV0JyYW5kKTsiLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sLCBjc3MgfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgY2xhc3MgV0NTU1J1bGVzVGFibGUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG5cbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXctc3BhY2luZy01MDApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGVhZCB0ciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LWJhY2tncm91bmQtY29sb3ItNTAwKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhlYWQgdGgsXG4gICAgICAgIHRib2R5IHRkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXctc3BhY2luZy00MDApO1xuICAgICAgICAgICAgYm9yZGVyOiB2YXIoLS13LWJvcmRlci13aWR0aC0tdGhpbikgc29saWQgdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTgwMCk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGVhZCB0aCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy1tdXRlZC1jb2xvcik7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGVhZCB0aDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhlYWQgdGg6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRib2R5IHRyOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuICAgIGA7XG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgZWxlbWVudE5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGhlbHA6IFwiVGhlIG5hbWUgb2YgdGhlIGVsZW1lbnQgdG8gZGlzcGxheSB0aGUgQ1NTIHZhcmlhYmxlcy5cIlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnROYW1lID0gXCJ3LWhlYWRpbmdcIjtcbiAgICB9XG5cbiAgICBfcmVuZGVyUm93KGNzc1ZhcnMsIHZhcmlhYmxlLCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgZGVmYXVsdFZhbHVlID0gXCJgXCIgKyBkZWZhdWx0VmFsdWUgKyBcImBcIjtcblxuICAgICAgICBpZiAoIXZhcmlhYmxlLmVuZHNXaXRoKFwiLS1oZWxwXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD4ke3ZhcmlhYmxlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48dy1tYXJrZG93biBzcGFjaW5nPVwibm9uZVwiPiR7ZGVmYXVsdFZhbHVlfTwvdy1tYXJrZG93bj48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PHctbWFya2Rvd24gc3BhY2luZz1cIm5vbmVcIj4ke2Nzc1ZhcnNbdmFyaWFibGUgKyBcIi0taGVscFwiXSA/IGNzc1ZhcnNbdmFyaWFibGUgKyBcIi0taGVscFwiXS5zdWJzdHJpbmcoMSwgY3NzVmFyc1t2YXJpYWJsZSArIFwiLS1oZWxwXCJdLmxlbmd0aCAtIDEpIDogXCJcIn08L3ctbWFya2Rvd24+PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgYFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2dldEFsbENTU1ZhcmlhYmxlTmFtZXMoc3R5bGVTaGVldHMgPSBkb2N1bWVudC5zdHlsZVNoZWV0cykge1xuICAgICAgICB2YXIgY3NzVmFycyA9IHt9O1xuICAgICAgICAvLyBsb29wIGVhY2ggc3R5bGVzaGVldFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBsb29wIHN0eWxlc2hlZXQncyBjc3NSdWxlc1xuICAgICAgICAgICAgdHJ5IHsgLy8gdHJ5L2NhdGNoIHVzZWQgYmVjYXVzZSAnaGFzT3duUHJvcGVydHknIGRvZXNuJ3Qgd29ya1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc3R5bGVTaGVldHNbaV0uY3NzUnVsZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvb3Agc3R5bGVzaGVldCdzIGNzc1J1bGVzJyBzdHlsZSAocHJvcGVydHkgbmFtZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVTaGVldHNbaV0uY3NzUnVsZXNbal0uc3R5bGVTaGVldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcnMgPSB0aGlzLl9nZXRBbGxDU1NWYXJpYWJsZU5hbWVzKFtzdHlsZVNoZWV0c1tpXS5jc3NSdWxlc1tqXS5zdHlsZVNoZWV0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzVmFycyA9IHsgLi4uY3NzVmFycywgLi4udmFycyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlID0gLygtLXctW2EtekEtWjAtOS1dKik6IChbXjtdKykvZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBBcnJheS5mcm9tKHN0eWxlU2hlZXRzW2ldLmNzc1J1bGVzW2pdLmNzc1RleHQubWF0Y2hBbGwocmUpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXMuZm9yRWFjaChtYXRjaCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaFsxXS5zdGFydHNXaXRoKFwiLS1cIiArIHRoaXMuZWxlbWVudE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NWYXJzW21hdGNoWzFdXSA9IG1hdGNoWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjc3NWYXJzO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGNzc1ZhcnMgPSB0aGlzLl9nZXRBbGxDU1NWYXJpYWJsZU5hbWVzKCk7XG5cbiAgICAgICAgcmV0dXJuIGh0bWxgPHRhYmxlPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlZhcmlhYmxlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkRlZmF1bHQ8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgJHsgT2JqZWN0LmtleXMoY3NzVmFycykubWFwKCh2YXJpYWJsZSkgPT4gdGhpcy5fcmVuZGVyUm93KGNzc1ZhcnMsIHZhcmlhYmxlLCBjc3NWYXJzW3ZhcmlhYmxlXSkpIH1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+YFxuICAgIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctY3NzLXJ1bGVzLXRhYmxlJywgV0NTU1J1bGVzVGFibGUpOyIsImltcG9ydCB7TGl0RWxlbWVudCwgY3NzLCBodG1sfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgY2xhc3MgV0VsZW1lbnRFeGFtcGxlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICAgICBcbiAgICBgXG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgcHJldmlldzoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGhlbHA6IFwiSWYgdHJ1ZSwgdGhlIGNvZGUgb2YgdGhlIGV4YW1wbGUgd2lsbCBiZSBkaXNwbGF5ZWQuXCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wcmV2aWV3ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgX2J0dFNob3dDb2RlX29uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMucHJldmlldyA9ICF0aGlzLnByZXZpZXc7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDx3LXBhbmUgZWxldmF0aW9uPVwiNTAwXCI+XG4gICAgICAgICAgICAgICAgPHctcGFuZSBzcGFjaW5nPVwic1wiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPC93LXBhbmU+XG5cbiAgICAgICAgICAgICAgICAkeyB0aGlzLnByZXZpZXcgPyBodG1sYDx3LXByZSBjb250ZW50PVwiJHt0aGlzLmlubmVySFRNTH1cIj48L3ctcHJlPmAgOiBodG1sYGAgfVxuICAgICAgICAgICAgPC93LXBhbmU+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OiB2YXIoLS13LXNwYWNpbmctMTAwKVwiPjwvZGl2PlxuICAgICAgICAgICAgPHctYnV0dG9uIHNpemU9XCJzXCIgYXBwZWFyYW5jZT1cImxpbmtcIiBAY2xpY2s9XCIke3RoaXMuX2J0dFNob3dDb2RlX29uQ2xpY2t9XCI+JHsgdGhpcy5wcmV2aWV3ID8gJ0hpZGUgY29kZScgOiAnU2hvdyBjb2RlJyB9PC93LWJ1dHRvbj5cbiAgICAgICAgYFxuICAgIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctZWxlbWVudC1leGFtcGxlJywgV0VsZW1lbnRFeGFtcGxlKTsiLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sLCBjc3MgfSBmcm9tICdsaXQnO1xuXG5pbXBvcnQgeyBXQnV0dG9uIH0gZnJvbSAnLi4vLi4vYXRvbXMvYnV0dG9uL2J1dHRvbi5qcyc7XG5pbXBvcnQgeyBXSGVhZGluZyB9IGZyb20gJy4uLy4uL2F0b21zL2hlYWRpbmcvaGVhZGluZy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBXUHJvcGVydGllc1RhYmxlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS13LXNwYWNpbmctNTAwKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhlYWQgdHIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdy1iYWNrZ3JvdW5kLWNvbG9yLTUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoZWFkIHRoLFxuICAgICAgICB0Ym9keSB0ZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS13LXNwYWNpbmctNDAwKTtcbiAgICAgICAgICAgIGJvcmRlcjogdmFyKC0tdy1ib3JkZXItd2lkdGgtLXRoaW4pIHNvbGlkIHZhcigtLXctYmFja2dyb3VuZC1jb2xvci04MDApO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhlYWQgdGgge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctbXV0ZWQtY29sb3IpO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhlYWQgdGg6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoZWFkIHRoOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0Ym9keSB0cjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cbiAgICBgO1xuXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgICAgIGNsYXNzTmFtZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJUaGUgbmFtZSBvZiB0aGUgY2xhc3NuYW1lIHRvIGRpc3BsYXkgdGhlIHByb3BlcnRpZXMuXCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIldIZWFkaW5nXCI7XG4gICAgfVxuXG4gICAgX2dldENvbXBvbmVudENsYXNzKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiV0J1dHRvblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBXQnV0dG9uO1xuICAgICAgICAgICAgY2FzZSBcIldIZWFkaW5nXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFdIZWFkaW5nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3JlbmRlclJvdyhwcm9wZXJ0eSwgc2V0dGluZ3MpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPiR7cHJvcGVydHl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+JHtzZXR0aW5nc1tcInR5cGVcIl0ubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD48dy1tYXJrZG93biBzcGFjaW5nPVwibm9uZVwiPiR7c2V0dGluZ3NbXCJoZWxwXCJdfTwvdy1tYXJrZG93bj48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgYFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY2xhenogPSB0aGlzLl9nZXRDb21wb25lbnRDbGFzcyh0aGlzLmNsYXNzTmFtZSk7ICAgXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaHRtbGA8dGFibGU+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+UHJvcGVydHk8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+VHlwZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAkeyBPYmplY3Qua2V5cyhjbGF6ei5wcm9wZXJ0aWVzKS5tYXAoKHByb3BlcnR5KSA9PiB0aGlzLl9yZW5kZXJSb3cocHJvcGVydHksIGNsYXp6LnByb3BlcnRpZXNbcHJvcGVydHldKSkgfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5gO1xuICAgIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctZWxlbWVudC1wcm9wZXJ0aWVzLXRhYmxlJywgV1Byb3BlcnRpZXNUYWJsZSk7IiwiaW1wb3J0IHtMaXRFbGVtZW50LCBjc3MsIGh0bWx9IGZyb20gJ2xpdCc7XG5pbXBvcnQge2NsYXNzbmFtZXN9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvY2xhc3NuYW1lcy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBXSG9yaXpvbnRhbE5hdiBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBuYXYgOjpzbG90dGVkKGEpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0tdy1zcGFjaW5nLTUwMCk7XG5cbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gICAgICAgIH1cblxuICAgICAgICBuYXYuY29udHJhc3QgOjpzbG90dGVkKGEpIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13LWhvcml6b250YWwtbmF2LS1jb250cmFzdC0tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2LmNvbnRyYXN0IDo6c2xvdHRlZChhOmhvdmVyKSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy1ob3Jpem9udGFsLW5hdi0tY29udHJhc3QtLWhvdmVyLS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBuYXYuY29udHJhc3QgOjpzbG90dGVkKGE6YWN0aXZlKSxcbiAgICAgICAgbmF2LmNvbnRyYXN0IDo6c2xvdHRlZChhLnctYWN0aXZlKSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy1ob3Jpem9udGFsLW5hdi0tY29udHJhc3QtLWFjdGl2ZS0tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2LnNoYWRlZCA6OnNsb3R0ZWQoYSkge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctaG9yaXpvbnRhbC1uYXYtLXNoYWRlZC0tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2LnNoYWRlZCA6OnNsb3R0ZWQoYTpob3Zlcikge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctaG9yaXpvbnRhbC1uYXYtLXNoYWRlZC0taG92ZXItLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdi5zaGFkZWQgOjpzbG90dGVkKGE6YWN0aXZlKSxcbiAgICAgICAgbmF2LnNoYWRlZCA6OnNsb3R0ZWQoYS53LWFjdGl2ZSkge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctaG9yaXpvbnRhbC1uYXYtLXNoYWRlZC0tYWN0aXZlLS1jb2xvcik7XG4gICAgICAgIH1cbiAgICBgXG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgYXBwZWFyYW5jZTogeyBcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGhlbHA6IFwiVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIG5hdmJhci4gUG9zc2libGUgdmFsdWVzIGFyZSBgY29udHJhc3RgIGFuZCBgc2hhZGVkYC5cIlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFwcGVhcmFuY2UgPSBcImNvbnRyYXN0XCI7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxuYXZcbiAgICAgICAgICAgICAgICBjbGFzcz0ke2NsYXNzbmFtZXMoeyBcbiAgICAgICAgICAgICAgICAgICAgW3RoaXMuYXBwZWFyYW5jZV06IHRydWVcbiAgICAgICAgICAgICAgICB9KX0+XG5cbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaXRlbVwiPjwvc2xvdD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICBgXG4gICAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctaG9yaXpvbnRhbC1uYXYnLCBXSG9yaXpvbnRhbE5hdik7IiwiaW1wb3J0IHtMaXRFbGVtZW50LCBjc3MsIGh0bWx9IGZyb20gJ2xpdCc7XG5pbXBvcnQge2NsYXNzbmFtZXN9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvY2xhc3NuYW1lcy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBXVmVydGljYWxOYXYgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICBuYXYgOjpzbG90dGVkKGgzKSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2IDo6c2xvdHRlZChhKSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tdy1zcGFjaW5nLTIwMCk7XG5cbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBsaW5lYXI7XG4gICAgICAgIH1cblxuICAgICAgICBuYXYuY29udHJhc3QgOjpzbG90dGVkKGEpIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13LXZlcnRpY2FsLW5hdi0tY29udHJhc3QtLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdi5jb250cmFzdCA6OnNsb3R0ZWQoYTpob3Zlcikge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctdmVydGljYWwtbmF2LS1jb250cmFzdC0taG92ZXItLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdi5jb250cmFzdCA6OnNsb3R0ZWQoYTphY3RpdmUpLFxuICAgICAgICBuYXYuY29udHJhc3QgOjpzbG90dGVkKGEudy1hY3RpdmUpIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13LXZlcnRpY2FsLW5hdi0tY29udHJhc3QtLWFjdGl2ZS0tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2LnNoYWRlZCA6OnNsb3R0ZWQoYSkge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctdmVydGljYWwtbmF2LS1zaGFkZWQtLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdi5zaGFkZWQgOjpzbG90dGVkKGE6aG92ZXIpIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13LXZlcnRpY2FsLW5hdi0tc2hhZGVkLS1ob3Zlci0tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2LnNoYWRlZCA6OnNsb3R0ZWQoYTphY3RpdmUpLFxuICAgICAgICBuYXYuc2hhZGVkIDo6c2xvdHRlZChhLnctYWN0aXZlKSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy12ZXJ0aWNhbC1uYXYtLXNoYWRlZC0tYWN0aXZlLS1jb2xvcik7XG4gICAgICAgIH1cbiAgICBgXG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgYXBwZWFyYW5jZTogeyBcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGhlbHA6IFwiVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIG5hdmJhci4gUG9zc2libGUgdmFsdWVzIGFyZSBgY29udHJhc3RgIGFuZCBgc2hhZGVkYC5cIlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFwcGVhcmFuY2UgPSBcImNvbnRyYXN0XCI7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxuYXZcbiAgICAgICAgICAgICAgICBjbGFzcz0ke2NsYXNzbmFtZXMoeyBcbiAgICAgICAgICAgICAgICAgICAgW3RoaXMuYXBwZWFyYW5jZV06IHRydWVcbiAgICAgICAgICAgICAgICB9KX0+XG5cbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaXRlbVwiPjwvc2xvdD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICBgXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgV1ZlcnRpY2FsTmF2VGl0bGUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgPGgzPjxzbG90Pjwvc2xvdD48L2gzPmA7XG4gICAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndy12ZXJ0aWNhbC1uYXYnLCBXVmVydGljYWxOYXYpO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd3LXZlcnRpY2FsLW5hdi0tdGl0bGUnLCBXVmVydGljYWxOYXZUaXRsZSk7IiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgY3NzLCBodG1sIH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IGNsYXNzbmFtZXMgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL2NsYXNzbmFtZXMuanMnO1xuXG5leHBvcnQgY2xhc3MgV0Zvb3RlciBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAgICAgdy1ncmlkIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHctZ3JpZC5jb250cmFzdCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LWZvb3Rlci0tY29udHJhc3QtLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXctZm9vdGVyLS1jb250cmFzdC0tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgdy1ncmlkLmxpZ2h0LWNvbnRyYXN0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXctZm9vdGVyLS1saWdodC1jb250cmFzdC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy1mb290ZXItLWxpZ2h0LWNvbnRyYXN0LS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICB3LWdyaWQuc2hhZGVkIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IHZhcigtLXctZm9vdGVyLS1zaGFkZWQtLWJvcmRlci10b3AtLXdpZHRoKSBzb2xpZCB2YXIoLS13LWZvb3Rlci0tc2hhZGVkLS1ib3JkZXItdG9wLS1jb2xvcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdy1mb290ZXItLXNoYWRlZC0tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgdy1ncmlkLnNwYWNpbmctcyB7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS13LWZvb3Rlci0tc3BhY2luZy1zLS1ob3Jpem9udGFsLXNwYWNpbmcpIHZhcigtLXctZm9vdGVyLS1zcGFjaW5nLXMtLXZlcnRpY2FsLXNwYWNpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdy1ncmlkLnNwYWNpbmctbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS13LWZvb3Rlci0tc3BhY2luZy1tLS1ob3Jpem9udGFsLXNwYWNpbmcpIHZhcigtLXctZm9vdGVyLS1zcGFjaW5nLW0tLXZlcnRpY2FsLXNwYWNpbmcpO1xuICAgICAgICB9XG4gICAgYDtcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBhcHBlYXJhbmNlOiB7IFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJUaGUgYXBwZWFyYW5jZSBvZiB0aGUgbmF2YmFyLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGBjb250cmFzdGAsIGBsaWdodC1jb250cmFzdGAgYW5kIGBzaGFkZWRgLlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgc3BhY2luZzoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJTcGVjaWZpZXMgc3BhY2luZ3MgKG1hcmdpbnMsIHBhZGRpbmdzLCAuLi4pLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGBzYCBhbmQgYG1gLlwiXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYXBwZWFyYW5jZSA9IFwiY29udHJhc3RcIjtcbiAgICAgICAgdGhpcy5zcGFjaW5nID0gXCJzXCI7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDx3LWdyaWRcbiAgICAgICAgICAgIGNsYXNzPSR7Y2xhc3NuYW1lcyh7XG4gICAgICAgICAgICAgICAgW1wic3BhY2luZy1cIiArIHRoaXMuc3BhY2luZ106IHRydWUsXG4gICAgICAgICAgICAgICAgW3RoaXMuYXBwZWFyYW5jZV06IHRydWVcbiAgICAgICAgICAgIH0pfT5cblxuICAgICAgICAgICAgICAgIDx3LWdyaWQtaXRlbSBsZz1cIjNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImNvbC0xXCI+PC9zbG90PlxuICAgICAgICAgICAgICAgIDwvdy1ncmlkLWl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8dy1ncmlkLWl0ZW0gbGc9XCI1XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJjb2wtMlwiPjwvc2xvdD5cbiAgICAgICAgICAgICAgICA8L3ctZ3JpZC1pdGVtPlxuXG4gICAgICAgICAgICAgICAgPHctZ3JpZC1pdGVtIGxnPVwiNVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiY29sLTNcIj48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPC93LWdyaWQtaXRlbT5cblxuICAgICAgICAgICAgICAgIDx3LWdyaWQtaXRlbSBsZz1cIjNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImNvbC00XCI+PC9zbG90PlxuICAgICAgICAgICAgICAgIDwvdy1ncmlkLWl0ZW0+XG4gICAgICAgICAgICA8L3ctZ3JpZD5cbiAgICAgICAgYDtcbiAgICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd3LWZvb3RlcicsIFdGb290ZXIpOyIsImltcG9ydCB7TGl0RWxlbWVudCwgY3NzLCBodG1sfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgY2xhc3NuYW1lcyB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvY2xhc3NuYW1lcy5qcyc7XG5cbmV4cG9ydCBjbGFzcyBXTmF2YmFyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAgICAgOmhvc3QgeyBcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lci5jb250cmFzdCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LW5hdmJhci0tY29udHJhc3QtLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lci5ob3Jpem9udGFsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIuaG9yaXpvbnRhbC5zaXplLXMge1xuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tdy1uYXZiYXItLXNpemUtcy0tdmVydGljYWwtcGFkZGluZykgdmFyKC0tdy1uYXZiYXItLXNpemUtcy0taG9yaXpvbnRhbC1wYWRkaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIuaG9yaXpvbnRhbC5zaXplLW0ge1xuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tdy1uYXZiYXItLXNpemUtbS0tdmVydGljYWwtcGFkZGluZykgdmFyKC0tdy1uYXZiYXItLXNpemUtbS0taG9yaXpvbnRhbC1wYWRkaW5nKTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAuY29udGFpbmVyLmhvcml6b250YWwuc2hhZGVkIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLXctbmF2YmFyLS1zaGFkZWQtLWJvcmRlci1ib3R0b20tLXdpZHRoKSBzb2xpZCB2YXIoLS13LW5hdmJhci0tc2hhZGVkLS1ib3JkZXItYm90dG9tLS1jb2xvcik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13LW5hdmJhci0tc2hhZGVkLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIuaG9yaXpvbnRhbCB3LWhvcml6b250YWwtbmF2Lm1haW4tbmF2IHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIudmVydGljYWwge1xuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyLnZlcnRpY2FsLnNpemUtcyB7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygoMTAwdncgLSAyICogdmFyKC0tdy1uYXZiYXItLXNpemUtcy0taG9yaXpvbnRhbC1wYWRkaW5nKSkgLyAxNiAqIDMgLSAyICogdmFyKC0tdy1uYXZiYXItLXNpemUtbS0taG9yaXpvbnRhbC1wYWRkaW5nKSk7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS13LW5hdmJhci0tc2l6ZS1zLS12ZXJ0aWNhbC1wYWRkaW5nKSB2YXIoLS13LW5hdmJhci0tc2l6ZS1zLS1ob3Jpem9udGFsLXBhZGRpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lci52ZXJ0aWNhbC5zaXplLW0ge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoKDEwMHZ3IC0gMiAqIHZhcigtLXctbmF2YmFyLS1zaXplLW0tLWhvcml6b250YWwtcGFkZGluZykpIC8gMTYgKiAzIC0gMiAqIHZhcigtLXctbmF2YmFyLS1zaXplLW0tLWhvcml6b250YWwtcGFkZGluZykpO1xuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tdy1uYXZiYXItLXNpemUtbS0tdmVydGljYWwtcGFkZGluZykgdmFyKC0tdy1uYXZiYXItLXNpemUtbS0taG9yaXpvbnRhbC1wYWRkaW5nKTtcbiAgICAgICAgfVxuICAgIGBcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBhcHBlYXJhbmNlOiB7IFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgaGVscDogXCJUaGUgYXBwZWFyYW5jZSBvZiB0aGUgbmF2YmFyLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGBjb250cmFzdGAgYW5kIGBzaGFkZWRgLlwiXG4gICAgICAgIH0sXG5cbiAgICAgICAgb3JpZW50YXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGhlbHA6IFwiT3JpZW50YXRpb24gb2YgdGhlIE5hdiBCYXIuIFBvc3NpYmxlIHZhbHVlcyBhcmUgYGhvcml6b250YWxgIGFuZCBgdmVydGljYWxgLiBEZWZhdWx0OiBgaG9yaXpvbnRhbGAuXCJcbiAgICAgICAgfSxcblxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBoZWxwOiBcIlNwZWNpZmllcyB0aGUgYm9sZG5lc3Mgb2YgdGhlIG5hdmJhci4gUG9zc2libGUgdmFsdWVzIGFyZSBgc2AgYW5kIGBtYC5cIlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuYXBwZWFyYW5jZSA9IFwiY29udHJhc3RcIjtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuICAgICAgICB0aGlzLnNpemUgPSBcInNcIjtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz0ke2NsYXNzbmFtZXMoeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLmFwcGVhcmFuY2VdOiB0cnVlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9yaXpvbnRhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250YWluZXJcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcInNpemUtXCIgKyB0aGlzLnNpemVdOiB0cnVlIFxuICAgICAgICAgICAgICAgICAgICB9KX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPHctZ3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx3LWdyaWQtaXRlbSBsZz1cIjNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dy1icmFuZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIiR7dGhpcy5hcHBlYXJhbmNlfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ289XCIvd2VsbG5yLS1kZXNpZ24tc3lzdGVtL2Fzc2V0cy9pbWFnZXMvbG9nby9sb2dvLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcD1cIkRlc2lnbiBTeXN0ZW0uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5kPVwid2VsbG5yLlwiPjwvdy1icmFuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdy1ncmlkLWl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx3LWdyaWQtaXRlbSBsZz1cIjEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHctaG9yaXpvbnRhbC1uYXYgY2xhc3M9XCJtYWluLW5hdlwiIGFwcGVhcmFuY2U9XCIke3RoaXMuYXBwZWFyYW5jZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cIml0ZW1cIiBzbG90PVwiaXRlbVwiPjwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3ctaG9yaXpvbnRhbC1uYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ctZ3JpZC1pdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dy1ncmlkLWl0ZW0gbGc9XCIzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImNvbnRyb2xzXCI+PC9zbG90PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC93LWdyaWQtaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC93LWdyaWQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPSR7Y2xhc3NuYW1lcyh7IFxuICAgICAgICAgICAgICAgICAgICAgICAgW3RoaXMuYXBwZWFyYW5jZV06IHRydWUsIFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250YWluZXJcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcInNpemUtXCIgKyB0aGlzLnNpemVdOiB0cnVlIFxuICAgICAgICAgICAgICAgICAgICB9KX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPHctdmVydGljYWwtbmF2IGFwcGVhcmFuY2U9XCIke3RoaXMuYXBwZWFyYW5jZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJpdGVtXCIgc2xvdD1cIml0ZW1cIj48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvdy12ZXJ0aWNhbC1uYXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ctbmF2YmFyJywgV05hdmJhcik7IiwiZXhwb3J0IGZ1bmN0aW9uIGNsYXNzbmFtZXMoY2xhc3Nlcykge1xuICAgIGNvbnN0IG5hbWVzID0gW11cblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGNsYXNzZXMpKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbmFtZXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWVzLmpvaW4oXCIgXCIpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBkZWRlbnQoc3RyaW5ncywgLi4udmFsdWVzKSB7XG4gICAgLy8gJEZsb3dGaXhNZTogRmxvdyBkb2Vzbid0IHVuZGVzdGFuZCAucmF3XG4gICAgY29uc3QgcmF3ID0gdHlwZW9mIHN0cmluZ3MgPT09IFwic3RyaW5nXCIgPyBbc3RyaW5nc10gOiBzdHJpbmdzLnJhdztcblxuICAgIC8vIGZpcnN0LCBwZXJmb3JtIGludGVycG9sYXRpb25cbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhdy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgKz0gcmF3W2ldXG4gICAgICAgICAgICAvLyBqb2luIGxpbmVzIHdoZW4gdGhlcmUgaXMgYSBzdXBwcmVzc2VkIG5ld2xpbmVcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXFxuWyBcXHRdKi9nLCBcIlwiKVxuICAgICAgICAgICAgLy8gaGFuZGxlIGVzY2FwZWQgYmFja3RpY2tzXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXGAvZywgXCJgXCIpO1xuXG4gICAgICAgIGlmIChpIDwgdmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlc1tpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG5vdyBzdHJpcCBpbmRlbnRhdGlvblxuICAgIGNvbnN0IGxpbmVzID0gcmVzdWx0LnNwbGl0KFwiXFxuXCIpO1xuICAgIGxldCBtaW5kZW50ID0gbnVsbDtcbiAgICBsaW5lcy5mb3JFYWNoKGwgPT4ge1xuICAgICAgICBsZXQgbSA9IGwubWF0Y2goL14oXFxzKylcXFMrLyk7XG4gICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICBsZXQgaW5kZW50ID0gbVsxXS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoIW1pbmRlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBmaXJzdCBpbmRlbnRlZCBsaW5lXG4gICAgICAgICAgICAgICAgbWluZGVudCA9IGluZGVudDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWluZGVudCA9IE1hdGgubWluKG1pbmRlbnQsIGluZGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChtaW5kZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG0gPSBtaW5kZW50OyAvLyBhcHBlYXNlIEZsb3dcbiAgICAgICAgcmVzdWx0ID0gbGluZXMubWFwKGwgPT4gbFswXSA9PT0gXCIgXCIgPyBsLnNsaWNlKG0pIDogbCkuam9pbihcIlxcblwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIC8vIGRlZGVudCBlYXRzIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UgdG9vXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLy8gaGFuZGxlIGVzY2FwZWQgbmV3bGluZXMgYXQgdGhlIGVuZCB0byBlbnN1cmUgdGhleSBkb24ndCBnZXQgc3RyaXBwZWQgdG9vXG4gICAgICAgIC5yZXBsYWNlKC9cXFxcbi9nLCBcIlxcblwiKTtcbn0iLCIvKipcbiAqIEJhc2VkIG9uIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hZGFtdmxlZ2dldHQvZHJhd2Rvd24vbWFzdGVyL2RyYXdkb3duLmpzLlxuICovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtkb3duKHNyYykge1xuICAgIHZhciByeF9sdCA9IC88L2c7XG4gICAgdmFyIHJ4X2d0ID0gLz4vZztcbiAgICB2YXIgcnhfc3BhY2UgPSAvXFx0fFxccnxcXHVmOGZmL2c7XG4gICAgdmFyIHJ4X2VzY2FwZSA9IC9cXFxcKFtcXFxcXFx8YCpfe31cXFtcXF0oKSMrXFwtfl0pL2c7XG4gICAgdmFyIHJ4X2hyID0gL14oWypcXC09X10gKil7Myx9JC9nbTtcbiAgICB2YXIgcnhfYmxvY2txdW90ZSA9IC9cXG4gKiZndDsgKihbXl0qPykoPz0oXFxufCQpezJ9KS9nO1xuICAgIHZhciByeF9saXN0ID0gL1xcbiggKikoPzpbKlxcLStdfCgoXFxkKyl8KFthLXpdKXxbQS1aXSlbLildKSArKFteXSo/KSg/PShcXG58JCl7Mn0pL2c7XG4gICAgdmFyIHJ4X2xpc3Rqb2luID0gLzxcXC8ob2x8dWwpPlxcblxcbjxcXDE+L2c7XG4gICAgdmFyIHJ4X2hpZ2hsaWdodCA9IC8oXnxbXkEtWmEtelxcZFxcXFxdKSgoWypfXSl8KH4pfChcXF4pfCgtLSl8KFxcK1xcKyl8YCkoXFwyPykoW148XSo/KVxcMlxcOCg/IVxcMikoPz1cXFd8X3wkKS9nO1xuICAgIHZhciByeF9jb2RlID0gL1xcbigoYGBgfH5+fikuKlxcbj8oW15dKj8pXFxuP1xcMnwoKCAgICAuKj9cXG4pKykpL2c7XG4gICAgdmFyIHJ4X2xpbmsgPSAvKCghPylcXFsoLio/KVxcXVxcKCguKj8pKCBcIi4qXCIpP1xcKXxcXFxcKFtcXFxcYCpfe31cXFtcXF0oKSMrXFwtLiF+XSkpL2c7XG4gICAgdmFyIHJ4X3RhYmxlID0gL1xcbigoICpcXHwuKj9cXHwgKlxcbikrKS9nO1xuICAgIHZhciByeF90aGVhZCA9IC9eLipcXG4oICpcXHwoICpcXDo/LStcXDo/LStcXDo/ICpcXHwpKiAqXFxufCkvO1xuICAgIHZhciByeF9yb3cgPSAvLipcXG4vZztcbiAgICB2YXIgcnhfY2VsbCA9IC9cXHx8KC4qP1teXFxcXF0pXFx8L2c7XG4gICAgdmFyIHJ4X2hlYWRpbmcgPSAvKD89Xnw+fFxcbikoWz5cXHNdKj8pKCN7MSw2fSkgKC4qPykoICMqKT8gKig/PVxcbnwkKS9nO1xuICAgIHZhciByeF9wYXJhID0gLyg/PV58PnxcXG4pXFxzKlxcbisoW148XSs/KVxcbitcXHMqKD89XFxufDx8JCkvZztcbiAgICB2YXIgcnhfc3Rhc2ggPSAvLVxcZCtcXHVmOGZmL2c7XG5cbiAgICBmdW5jdGlvbiByZXBsYWNlKHJleCwgZm4pIHtcbiAgICAgICAgc3JjID0gc3JjLnJlcGxhY2UocmV4LCBmbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWxlbWVudCh0YWcsIGNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuICc8JyArIHRhZyArICc+JyArIGNvbnRlbnQgKyAnPC8nICsgdGFnICsgJz4nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJsb2NrcXVvdGUoc3JjKSB7XG4gICAgICAgIHJldHVybiBzcmMucmVwbGFjZShyeF9ibG9ja3F1b3RlLCBmdW5jdGlvbihhbGwsIGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50KCdibG9ja3F1b3RlJywgYmxvY2txdW90ZShoaWdobGlnaHQoY29udGVudC5yZXBsYWNlKC9eIComZ3Q7ICovZ20sICcnKSkpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGlzdChzcmMpIHtcbiAgICAgICAgcmV0dXJuIHNyYy5yZXBsYWNlKHJ4X2xpc3QsIGZ1bmN0aW9uKGFsbCwgaW5kLCBvbCwgbnVtLCBsb3csIGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IGVsZW1lbnQoJ2xpJywgaGlnaGxpZ2h0KGNvbnRlbnQuc3BsaXQoXG4gICAgICAgICAgICAgICAgUmVnRXhwKCdcXG4gPycgKyBpbmQgKyAnKD86KD86XFxcXGQrfFthLXpBLVpdKVsuKV18WypcXFxcLStdKSArJywgJ2cnKSkubWFwKGxpc3QpLmpvaW4oJzwvbGk+PGxpPicpKSk7XG5cbiAgICAgICAgICAgIHJldHVybiAnXFxuJyArIChvbFxuICAgICAgICAgICAgICAgID8gJzxvbCBzdGFydD1cIicgKyAobnVtXG4gICAgICAgICAgICAgICAgICAgID8gb2wgKyAnXCI+J1xuICAgICAgICAgICAgICAgICAgICA6IHBhcnNlSW50KG9sLDM2KSAtIDkgKyAnXCIgc3R5bGU9XCJsaXN0LXN0eWxlLXR5cGU6JyArIChsb3cgPyAnbG93JyA6ICd1cHAnKSArICdlci1hbHBoYVwiPicpICsgZW50cnkgKyAnPC9vbD4nXG4gICAgICAgICAgICAgICAgOiBlbGVtZW50KCd1bCcsIGVudHJ5KSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZ2hsaWdodChzcmMpIHtcbiAgICAgICAgcmV0dXJuIHNyYy5yZXBsYWNlKHJ4X2hpZ2hsaWdodCwgZnVuY3Rpb24oYWxsLCBfLCBwMSwgZW1wLCBzdWIsIHN1cCwgc21hbGwsIGJpZywgcDIsIGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfICsgZWxlbWVudChcbiAgICAgICAgICAgICAgICAgIGVtcCA/IChwMiA/ICdzdHJvbmcnIDogJ2VtJylcbiAgICAgICAgICAgICAgICA6IHN1YiA/IChwMiA/ICdzJyA6ICdzdWInKVxuICAgICAgICAgICAgICAgIDogc3VwID8gJ3N1cCdcbiAgICAgICAgICAgICAgICA6IHNtYWxsID8gJ3NtYWxsJ1xuICAgICAgICAgICAgICAgIDogYmlnID8gJ2JpZydcbiAgICAgICAgICAgICAgICA6ICdjb2RlJyxcbiAgICAgICAgICAgICAgICBoaWdobGlnaHQoY29udGVudCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmVzYyhzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKHJ4X2VzY2FwZSwgJyQxJyk7XG4gICAgfVxuXG4gICAgdmFyIHN0YXNoID0gW107XG4gICAgdmFyIHNpID0gMDtcblxuICAgIHNyYyA9ICdcXG4nICsgc3JjICsgJ1xcbic7XG5cbiAgICByZXBsYWNlKHJ4X2x0LCAnJmx0OycpO1xuICAgIHJlcGxhY2UocnhfZ3QsICcmZ3Q7Jyk7XG4gICAgcmVwbGFjZShyeF9zcGFjZSwgJyAgJyk7XG5cbiAgICAvLyBibG9ja3F1b3RlXG4gICAgc3JjID0gYmxvY2txdW90ZShzcmMpO1xuXG4gICAgLy8gaG9yaXpvbnRhbCBydWxlXG4gICAgcmVwbGFjZShyeF9ociwgJzxoci8+Jyk7XG5cbiAgICAvLyBsaXN0XG4gICAgc3JjID0gbGlzdChzcmMpO1xuICAgIHJlcGxhY2UocnhfbGlzdGpvaW4sICcnKTtcblxuICAgIC8vIGNvZGVcbiAgICByZXBsYWNlKHJ4X2NvZGUsIGZ1bmN0aW9uKGFsbCwgcDEsIHAyLCBwMywgcDQpIHtcbiAgICAgICAgc3Rhc2hbLS1zaV0gPSBlbGVtZW50KCdwcmUnLCBlbGVtZW50KCdjb2RlJywgcDN8fHA0LnJlcGxhY2UoL14gICAgL2dtLCAnJykpKTtcbiAgICAgICAgcmV0dXJuIHNpICsgJ1xcdWY4ZmYnO1xuICAgIH0pO1xuXG4gICAgLy8gbGluayBvciBpbWFnZVxuICAgIHJlcGxhY2UocnhfbGluaywgZnVuY3Rpb24oYWxsLCBwMSwgcDIsIHAzLCBwNCwgcDUsIHA2KSB7XG4gICAgICAgIHN0YXNoWy0tc2ldID0gcDRcbiAgICAgICAgICAgID8gcDJcbiAgICAgICAgICAgICAgICA/ICc8aW1nIHNyYz1cIicgKyBwNCArICdcIiBhbHQ9XCInICsgcDMgKyAnXCIvPidcbiAgICAgICAgICAgICAgICA6ICc8YSBocmVmPVwiJyArIHA0ICsgJ1wiPicgKyB1bmVzYyhoaWdobGlnaHQocDMpKSArICc8L2E+J1xuICAgICAgICAgICAgOiBwNjtcbiAgICAgICAgcmV0dXJuIHNpICsgJ1xcdWY4ZmYnO1xuICAgIH0pO1xuXG4gICAgLy8gdGFibGVcbiAgICByZXBsYWNlKHJ4X3RhYmxlLCBmdW5jdGlvbihhbGwsIHRhYmxlKSB7XG4gICAgICAgIHZhciBzZXAgPSB0YWJsZS5tYXRjaChyeF90aGVhZClbMV07XG4gICAgICAgIHJldHVybiAnXFxuJyArIGVsZW1lbnQoJ3RhYmxlJyxcbiAgICAgICAgICAgIHRhYmxlLnJlcGxhY2Uocnhfcm93LCBmdW5jdGlvbihyb3csIHJpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdyA9PSBzZXAgPyAnJyA6IGVsZW1lbnQoJ3RyJywgcm93LnJlcGxhY2UocnhfY2VsbCwgZnVuY3Rpb24oYWxsLCBjZWxsLCBjaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2kgPyBlbGVtZW50KHNlcCAmJiAhcmkgPyAndGgnIDogJ3RkJywgdW5lc2MoaGlnaGxpZ2h0KGNlbGwgfHwgJycpKSkgOiAnJ1xuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgIH0pO1xuXG4gICAgLy8gaGVhZGluZ1xuICAgIHJlcGxhY2UocnhfaGVhZGluZywgZnVuY3Rpb24oYWxsLCBfLCBwMSwgcDIpIHsgcmV0dXJuIF8gKyBlbGVtZW50KCdoJyArIHAxLmxlbmd0aCwgdW5lc2MoaGlnaGxpZ2h0KHAyKSkpIH0pO1xuXG4gICAgLy8gcGFyYWdyYXBoXG4gICAgcmVwbGFjZShyeF9wYXJhLCBmdW5jdGlvbihhbGwsIGNvbnRlbnQpIHsgcmV0dXJuIGVsZW1lbnQoJ3AnLCB1bmVzYyhoaWdobGlnaHQoY29udGVudCkpKSB9KTtcblxuICAgIC8vIHN0YXNoXG4gICAgcmVwbGFjZShyeF9zdGFzaCwgZnVuY3Rpb24oYWxsKSB7IHJldHVybiBzdGFzaFtwYXJzZUludChhbGwpXSB9KTtcblxuICAgIHJldHVybiBzcmMudHJpbSgpO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIEF0b21zXG5pbXBvcnQgXCIuL2pzL2NvbXBvbmVudHMvYXRvbXMvYnV0dG9uL2J1dHRvbi5qc1wiO1xuaW1wb3J0IFwiLi9qcy9jb21wb25lbnRzL2F0b21zL2NvZGUvY29kZS5qc1wiO1xuaW1wb3J0IFwiLi9qcy9jb21wb25lbnRzL2F0b21zL2hlYWRpbmcvaGVhZGluZy5qc1wiO1xuaW1wb3J0IFwiLi9qcy9jb21wb25lbnRzL2F0b21zL21hcmtkb3duL21hcmtkb3duLmpzXCI7XG5pbXBvcnQgXCIuL2pzL2NvbXBvbmVudHMvYXRvbXMvcGFuZS9wYW5lLmpzXCI7XG5pbXBvcnQgXCIuL2pzL2NvbXBvbmVudHMvYXRvbXMvcGFyYWdyYXBoL3BhcmFncmFwaC5qc1wiO1xuaW1wb3J0IFwiLi9qcy9jb21wb25lbnRzL2F0b21zL3ByZS9wcmUuanNcIjtcbmltcG9ydCBcIi4vanMvY29tcG9uZW50cy9hdG9tcy90YWJzL3RhYnMuanNcIjtcbmltcG9ydCBcIi4vanMvY29tcG9uZW50cy9hdG9tcy90ZXh0LWlucHV0L3RleHQtaW5wdXQuanNcIjtcblxuLy8gTGF5b3V0XG5pbXBvcnQgXCIuL2pzL2NvbXBvbmVudHMvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIuanNcIjtcbmltcG9ydCBcIi4vanMvY29tcG9uZW50cy9sYXlvdXQvZml4ZWQtaGVhZGVyL2ZpeGVkLWhlYWRlci5qc1wiO1xuaW1wb3J0IFwiLi9qcy9jb21wb25lbnRzL2xheW91dC9ncmlkL2dyaWQuanNcIjtcblxuLy8gTW9sZWN1bGVzXG5pbXBvcnQgXCIuL2pzL2NvbXBvbmVudHMvbW9sZWN1bGVzL2Nzcy1ydWxlcy10YWJsZS9jc3MtcnVsZXMtdGFibGUuanNcIjtcbmltcG9ydCBcIi4vanMvY29tcG9uZW50cy9tb2xlY3VsZXMvYnJhbmQvYnJhbmQuanNcIjtcbmltcG9ydCBcIi4vanMvY29tcG9uZW50cy9tb2xlY3VsZXMvZWxlbWVudC1leGFtcGxlL2VsZW1lbnQtZXhhbXBsZS5qc1wiO1xuaW1wb3J0IFwiLi9qcy9jb21wb25lbnRzL21vbGVjdWxlcy9lbGVtZW50LXByb3BlcnRpZXMtdGFibGUvZWxlbWVudC1wcm9wZXJ0aWVzLXRhYmxlLmpzXCI7XG5pbXBvcnQgXCIuL2pzL2NvbXBvbmVudHMvbW9sZWN1bGVzL2hvcml6b250YWwtbmF2L2hvcml6b250YWwtbmF2LmpzXCI7XG5pbXBvcnQgXCIuL2pzL2NvbXBvbmVudHMvbW9sZWN1bGVzL3ZlcnRpY2FsLW5hdi92ZXJ0aWNhbC1uYXYuanNcIjtcblxuLy8gT3JnYW5pc21zXG5pbXBvcnQgXCIuL2pzL2NvbXBvbmVudHMvb3JnYW5pc21zL2Zvb3Rlci9mb290ZXIuanNcIjtcbmltcG9ydCBcIi4vanMvY29tcG9uZW50cy9vcmdhbmlzbXMvbmF2YmFyL25hdmJhci5qc1wiO1xuXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuXG5pbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0JztcblxuXG5leHBvcnQgY2xhc3MgV0RvY3NXcmFwcGVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHctZml4ZWQtaGVhZGVyIHNwYWNpbmc9XCJtXCI+XG4gICAgICAgICAgICAgICAgPHctbmF2YmFyIGFwcGVhcmFuY2U9XCJzaGFkZWRcIiBzaXplPVwibVwiIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgc2xvdD1cIml0ZW1cIiBocmVmPVwiL2ludHJvZHVjdGlvblwiIGNsYXNzPVwidy1hY3RpdmVcIj5JbnRyb2R1Y3Rpb248L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIHNsb3Q9XCJpdGVtXCIgaHJlZj1cIi9mb3VuZGF0aW9uc1wiPkZvdW5kYXRpb25zPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBzbG90PVwiaXRlbVwiIGhyZWY9XCIvY29tcG9uZW50c1wiPkNvbXBvbmVudHM8L2E+XG4gICAgICAgICAgICAgICAgPC93LW5hdmJhcj5cblxuICAgICAgICAgICAgICAgIDx3LW5hdmJhciBzbG90PVwibmF2XCIgYXBwZWFyYW5jZT1cInNoYWRlZFwiIG9yaWVudGF0aW9uPVwidmVydGljYWxcIiBzaXplPVwibVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBzbG90PVwiaXRlbVwiIGhyZWY9XCIvaW50cm9kdWN0aW9uXCIgY2xhc3M9XCJ3LWFjdGl2ZVwiPkludHJvZHVjdGlvbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgc2xvdD1cIml0ZW1cIiBocmVmPVwiL2ZvdW5kYXRpb25zXCI+Rm91bmRhdGlvbnM8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIHNsb3Q9XCJpdGVtXCIgaHJlZj1cIi9jb21wb25lbnRzXCI+Q29tcG9uZW50czwvYT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHctdmVydGljYWwtbmF2LS10aXRsZSBzbG90PVwiaXRlbVwiPkF0b21zPC93LXZlcnRpY2FsLW5hdi0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxhIHNsb3Q9XCJpdGVtXCIgaHJlZj1cIi9kb2NzL2NvbXBvbmVudHMvYXRvbXMvaGVhZGluZy5odG1sXCI+SGVhZGluZzwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgc2xvdD1cIml0ZW1cIiBocmVmPVwiL2RvY3MvY29tcG9uZW50cy9hdG9tcy9tYXJrZG93bi5odG1sXCI+TWFya2Rvd248L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIHNsb3Q9XCJpdGVtXCIgaHJlZj1cIi9kb2NzL2NvbXBvbmVudHMvYXRvbXMvdGFicy5odG1sXCI+VGFiczwvYT5cbiAgICAgICAgICAgICAgICA8L3ctbmF2YmFyPlxuXG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImFydGljbGVcIiBzbG90PVwiYXJ0aWNsZVwiPjwvc2xvdD5cblxuICAgICAgICAgICAgICAgIDx3LWZvb3RlciBzbG90PVwiZm9vdGVyXCIgc3BhY2luZz1cIm1cIiBhcHBlYXJhbmNlPVwibGlnaHQtY29udHJhc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzbG90PVwiY29sLTFcIj4mY29weTsgTWljaGFlbCBXZWxsbmVyIDIwMjMuPC9kaXY+XG4gICAgICAgICAgICAgICAgPC93LWZvb3Rlcj5cbiAgICAgICAgICAgIDwvdy1maXhlZC1oZWFkZXI+XG4gICAgICAgIGBcbiAgICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd3LWRvY3Mtd3JhcHBlcicsIFdEb2NzV3JhcHBlcik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9