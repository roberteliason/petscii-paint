/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/application.js":
/*!*******************************!*\
  !*** ./src/js/application.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function range(start, end) {
  return Array(end - start + 1).fill().map(function (_, idx) {
    return start + idx;
  });
}

function unicodeChar(hex) {
  return parseInt(hex, 16);
}

var screen = document.getElementById('screen');
var chars = range(unicodeChar('0021'), unicodeChar('007e')).concat([unicodeChar('00a3'), unicodeChar('00b7'), unicodeChar('03c0'), unicodeChar('2014'), unicodeChar('2019'), unicodeChar('2022'), unicodeChar('2026'), unicodeChar('2190'), unicodeChar('2191'), unicodeChar('2500'), unicodeChar('2502'), unicodeChar('250c'), unicodeChar('2510'), unicodeChar('2514'), unicodeChar('2518'), unicodeChar('251c'), unicodeChar('2524'), unicodeChar('252c'), unicodeChar('2534'), unicodeChar('253c')]).concat(range(unicodeChar('256d'), unicodeChar('2573'))).concat(range(unicodeChar('2580'), unicodeChar('2588'))).concat(range(unicodeChar('258a'), unicodeChar('2590'))).concat(unicodeChar('2592')).concat(range(unicodeChar('2592'), unicodeChar('259f'))).concat([unicodeChar('25c6'), unicodeChar('25cb'), unicodeChar('25cf')]).concat(range(unicodeChar('25e2'), unicodeChar('25e5'))).concat([unicodeChar('2660'), unicodeChar('2663'), unicodeChar('2665'), unicodeChar('2666'), unicodeChar('2713')]);

for (var i = 0; i < chars.length; i++) {
  screen.innerHTML += '<span class="char" data-char-no="' + chars[i] + '">' + String.fromCharCode(chars[i]) + '</span>';
}

/***/ }),

/***/ "./src/scss/application.scss":
/*!***********************************!*\
  !*** ./src/scss/application.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************************************!*\
  !*** multi ./src/js/application.js ./src/scss/application.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/roberteliason/Code/PETSCII-paint/src/js/application.js */"./src/js/application.js");
module.exports = __webpack_require__(/*! /Users/roberteliason/Code/PETSCII-paint/src/scss/application.scss */"./src/scss/application.scss");


/***/ })

/******/ });