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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/expansionPanel.js":
/*!*******************************!*\
  !*** ./src/expansionPanel.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


    let coll = document.getElementById("education");


    coll.addEventListener("click", function() {
    this.classList.toggle("active_ex");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      coll.style.color = 'black';
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      coll.style.color = '#e7fec0';
    } 
  });

  

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _expansionPanel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expansionPanel.js */ "./src/expansionPanel.js");
/* harmony import */ var _expansionPanel_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_expansionPanel_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.js */ "./src/slider.js");
/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider_js__WEBPACK_IMPORTED_MODULE_2__);



//import './frames.js';

const theYalow = document.getElementById('theyalow');
const body = document.getElementById('body');
const wrapper = document.getElementById('wrapper');
const frame = document.getElementById('frame');
const backButton = document.getElementById('back');
const sizeButton = document.getElementById('size');

function addFrame() {
    body.style.width = "1300px";
    frame.style.width = "105%";
    sizeButton.innerHTML = "Mobile";
    backButton.style.marginLeft = "75vw";
    sizeButton.style.marginLeft = "75vw";
    backButton.style.display = "initial";
    sizeButton.style.display = "initial";
    wrapper.style.display = "none";
    frame.style.display = "initial";
    //const iframe = frame.contentWindow.document.body;
    //iframe.append('test');
    //const buttonSize = innerDoc.
   // innerDoc.getElementsByTagName('body').style.width="1024px";
}

theYalow.addEventListener('click', 
    addFrame, false
    //document.body.appendChild
)

backButton.addEventListener('click', () => {
    backButton.style.display = "none";
    sizeButton.style.display = "none";
    wrapper.style.display = "initial";
    frame.style.display = "none";
})

sizeButton.addEventListener('click', () => {
    if (sizeButton.innerHTML === "Mobile") {
        sizeButton.innerHTML = "Desktop";
        frame.style.width = "640px";
        frame.style.height = "100%";
        frame.style.margin = "auto";
        backButton.style.marginLeft = "50vw";
        sizeButton.style.marginLeft = "50vw";
    } else if (sizeButton.innerHTML === "Desktop") {
        sizeButton.innerHTML = "Mobile";
        frame.style.width = "105%";
        frame.style.height = "100%";
        frame.style.margin = "auto";
        backButton.style.marginLeft = "75vw";
        sizeButton.style.marginLeft = "75vw";
    }

})

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

let items = document.querySelectorAll('.carousel .item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.control.left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.control.right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

const swipedetect = (el) => {
  
	let surface = el;
	let startX = 0;
	let startY = 0;
	let distX = 0;
	let distY = 0;
	let startTime = 0;
	let elapsedTime = 0;

	let threshold = 150;
	let restraint = 100;
	let allowedTime = 300;

	surface.addEventListener('mousedown', function(e){
		startX = e.pageX;
		startY = e.pageY;
		startTime = new Date().getTime();
		e.preventDefault();
	}, false);

	surface.addEventListener('mouseup', function(e){
		distX = e.pageX - startX;
		distY = e.pageY - startY;
		elapsedTime = new Date().getTime() - startTime;
		if (elapsedTime <= allowedTime){
			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
				if ((distX > 0)) {
					if (isEnabled) {
						previousItem(currentItem);
					}
				} else {
					if (isEnabled) {
						nextItem(currentItem);
					}
				}
			}
		}
		e.preventDefault();
	}, false);

	surface.addEventListener('touchstart', function(e){
		if (e.target.classList.contains('arrow') || e.target.classList.contains('control')) {
			if (e.target.classList.contains('left')) {
				if (isEnabled) {
					previousItem(currentItem);
				}
			} else {
				if (isEnabled) {
					nextItem(currentItem);
				}
			}
		}
			var touchobj = e.changedTouches[0];
			startX = touchobj.pageX;
			startY = touchobj.pageY;
			startTime = new Date().getTime();
			e.preventDefault();
	}, false);

	surface.addEventListener('touchmove', function(e){
			e.preventDefault();
	}, false);

	surface.addEventListener('touchend', function(e){
			var touchobj = e.changedTouches[0];
			distX = touchobj.pageX - startX;
			distY = touchobj.pageY - startY;
			elapsedTime = new Date().getTime() - startTime;
			if (elapsedTime <= allowedTime){
					if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
							if ((distX > 0)) {
								if (isEnabled) {
									previousItem(currentItem);
								}
							} else {
								if (isEnabled) {
									nextItem(currentItem);
								}
							}
					}
			}
			e.preventDefault();
	}, false);
}

var el = document.querySelector('.carousel');
swipedetect(el);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4cGFuc2lvblBhbmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzlkOWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEs7QUFDQSxHQUFHOzs7Ozs7Ozs7Ozs7OztBQ2RIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJCO0FBQ0U7QUFDUjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxDOzs7Ozs7Ozs7OztBQ3pERCx1Qzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsZ0IiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcclxuICAgIGxldCBjb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZHVjYXRpb25cIik7XHJcblxyXG5cclxuICAgIGNvbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlX2V4XCIpO1xyXG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLm5leHRFbGVtZW50U2libGluZztcclxuICAgIGlmIChjb250ZW50LnN0eWxlLm1heEhlaWdodCl7XHJcbiAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcclxuICAgICAgY29sbC5zdHlsZS5jb2xvciA9ICdibGFjayc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICBjb2xsLnN0eWxlLmNvbG9yID0gJyNlN2ZlYzAnO1xyXG4gICAgfSBcclxuICB9KTtcclxuXHJcbiAgIiwiaW1wb3J0ICcuL3Njc3Mvc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCAnLi9leHBhbnNpb25QYW5lbC5qcyc7XHJcbmltcG9ydCAnLi9zbGlkZXIuanMnO1xyXG4vL2ltcG9ydCAnLi9mcmFtZXMuanMnO1xyXG5cclxuY29uc3QgdGhlWWFsb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhleWFsb3cnKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5Jyk7XHJcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpO1xyXG5jb25zdCBmcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFtZScpO1xyXG5jb25zdCBiYWNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2snKTtcclxuY29uc3Qgc2l6ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXplJyk7XHJcblxyXG5mdW5jdGlvbiBhZGRGcmFtZSgpIHtcclxuICAgIGJvZHkuc3R5bGUud2lkdGggPSBcIjEzMDBweFwiO1xyXG4gICAgZnJhbWUuc3R5bGUud2lkdGggPSBcIjEwNSVcIjtcclxuICAgIHNpemVCdXR0b24uaW5uZXJIVE1MID0gXCJNb2JpbGVcIjtcclxuICAgIGJhY2tCdXR0b24uc3R5bGUubWFyZ2luTGVmdCA9IFwiNzV2d1wiO1xyXG4gICAgc2l6ZUJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI3NXZ3XCI7XHJcbiAgICBiYWNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcImluaXRpYWxcIjtcclxuICAgIHNpemVCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiO1xyXG4gICAgd3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBmcmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCI7XHJcbiAgICAvL2NvbnN0IGlmcmFtZSA9IGZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuYm9keTtcclxuICAgIC8vaWZyYW1lLmFwcGVuZCgndGVzdCcpO1xyXG4gICAgLy9jb25zdCBidXR0b25TaXplID0gaW5uZXJEb2MuXHJcbiAgIC8vIGlubmVyRG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5Jykuc3R5bGUud2lkdGg9XCIxMDI0cHhcIjtcclxufVxyXG5cclxudGhlWWFsb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBcclxuICAgIGFkZEZyYW1lLCBmYWxzZVxyXG4gICAgLy9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkXHJcbilcclxuXHJcbmJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBiYWNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHNpemVCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgd3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCI7XHJcbiAgICBmcmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn0pXHJcblxyXG5zaXplQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKHNpemVCdXR0b24uaW5uZXJIVE1MID09PSBcIk1vYmlsZVwiKSB7XHJcbiAgICAgICAgc2l6ZUJ1dHRvbi5pbm5lckhUTUwgPSBcIkRlc2t0b3BcIjtcclxuICAgICAgICBmcmFtZS5zdHlsZS53aWR0aCA9IFwiNjQwcHhcIjtcclxuICAgICAgICBmcmFtZS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgICBmcmFtZS5zdHlsZS5tYXJnaW4gPSBcImF1dG9cIjtcclxuICAgICAgICBiYWNrQnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjUwdndcIjtcclxuICAgICAgICBzaXplQnV0dG9uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjUwdndcIjtcclxuICAgIH0gZWxzZSBpZiAoc2l6ZUJ1dHRvbi5pbm5lckhUTUwgPT09IFwiRGVza3RvcFwiKSB7XHJcbiAgICAgICAgc2l6ZUJ1dHRvbi5pbm5lckhUTUwgPSBcIk1vYmlsZVwiO1xyXG4gICAgICAgIGZyYW1lLnN0eWxlLndpZHRoID0gXCIxMDUlXCI7XHJcbiAgICAgICAgZnJhbWUuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICAgICAgZnJhbWUuc3R5bGUubWFyZ2luID0gXCJhdXRvXCI7XHJcbiAgICAgICAgYmFja0J1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI3NXZ3XCI7XHJcbiAgICAgICAgc2l6ZUJ1dHRvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCI3NXZ3XCI7XHJcbiAgICB9XHJcblxyXG59KSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImxldCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbCAuaXRlbScpO1xyXG5sZXQgY3VycmVudEl0ZW0gPSAwO1xyXG5sZXQgaXNFbmFibGVkID0gdHJ1ZTtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUN1cnJlbnRJdGVtKG4pIHtcclxuXHRjdXJyZW50SXRlbSA9IChuICsgaXRlbXMubGVuZ3RoKSAlIGl0ZW1zLmxlbmd0aDtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZUl0ZW0oZGlyZWN0aW9uKSB7XHJcblx0aXNFbmFibGVkID0gZmFsc2U7XHJcblx0aXRlbXNbY3VycmVudEl0ZW1dLmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uKTtcclxuXHRpdGVtc1tjdXJyZW50SXRlbV0uYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScsIGRpcmVjdGlvbik7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dJdGVtKGRpcmVjdGlvbikge1xyXG5cdGl0ZW1zW2N1cnJlbnRJdGVtXS5jbGFzc0xpc3QuYWRkKCduZXh0JywgZGlyZWN0aW9uKTtcclxuXHRpdGVtc1tjdXJyZW50SXRlbV0uYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ25leHQnLCBkaXJlY3Rpb24pO1xyXG5cdFx0dGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdGlzRW5hYmxlZCA9IHRydWU7XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHRJdGVtKG4pIHtcclxuXHRoaWRlSXRlbSgndG8tbGVmdCcpO1xyXG5cdGNoYW5nZUN1cnJlbnRJdGVtKG4gKyAxKTtcclxuXHRzaG93SXRlbSgnZnJvbS1yaWdodCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmV2aW91c0l0ZW0obikge1xyXG5cdGhpZGVJdGVtKCd0by1yaWdodCcpO1xyXG5cdGNoYW5nZUN1cnJlbnRJdGVtKG4gLSAxKTtcclxuXHRzaG93SXRlbSgnZnJvbS1sZWZ0Jyk7XHJcbn1cclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sLmxlZnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdGlmIChpc0VuYWJsZWQpIHtcclxuXHRcdHByZXZpb3VzSXRlbShjdXJyZW50SXRlbSk7XHJcblx0fVxyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9sLnJpZ2h0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRpZiAoaXNFbmFibGVkKSB7XHJcblx0XHRuZXh0SXRlbShjdXJyZW50SXRlbSk7XHJcblx0fVxyXG59KTtcclxuXHJcbmNvbnN0IHN3aXBlZGV0ZWN0ID0gKGVsKSA9PiB7XHJcbiAgXHJcblx0bGV0IHN1cmZhY2UgPSBlbDtcclxuXHRsZXQgc3RhcnRYID0gMDtcclxuXHRsZXQgc3RhcnRZID0gMDtcclxuXHRsZXQgZGlzdFggPSAwO1xyXG5cdGxldCBkaXN0WSA9IDA7XHJcblx0bGV0IHN0YXJ0VGltZSA9IDA7XHJcblx0bGV0IGVsYXBzZWRUaW1lID0gMDtcclxuXHJcblx0bGV0IHRocmVzaG9sZCA9IDE1MDtcclxuXHRsZXQgcmVzdHJhaW50ID0gMTAwO1xyXG5cdGxldCBhbGxvd2VkVGltZSA9IDMwMDtcclxuXHJcblx0c3VyZmFjZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbihlKXtcclxuXHRcdHN0YXJ0WCA9IGUucGFnZVg7XHJcblx0XHRzdGFydFkgPSBlLnBhZ2VZO1xyXG5cdFx0c3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0fSwgZmFsc2UpO1xyXG5cclxuXHRzdXJmYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbihlKXtcclxuXHRcdGRpc3RYID0gZS5wYWdlWCAtIHN0YXJ0WDtcclxuXHRcdGRpc3RZID0gZS5wYWdlWSAtIHN0YXJ0WTtcclxuXHRcdGVsYXBzZWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWU7XHJcblx0XHRpZiAoZWxhcHNlZFRpbWUgPD0gYWxsb3dlZFRpbWUpe1xyXG5cdFx0XHRpZiAoTWF0aC5hYnMoZGlzdFgpID49IHRocmVzaG9sZCAmJiBNYXRoLmFicyhkaXN0WSkgPD0gcmVzdHJhaW50KXtcclxuXHRcdFx0XHRpZiAoKGRpc3RYID4gMCkpIHtcclxuXHRcdFx0XHRcdGlmIChpc0VuYWJsZWQpIHtcclxuXHRcdFx0XHRcdFx0cHJldmlvdXNJdGVtKGN1cnJlbnRJdGVtKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKGlzRW5hYmxlZCkge1xyXG5cdFx0XHRcdFx0XHRuZXh0SXRlbShjdXJyZW50SXRlbSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0fSwgZmFsc2UpO1xyXG5cclxuXHRzdXJmYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihlKXtcclxuXHRcdGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Fycm93JykgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250cm9sJykpIHtcclxuXHRcdFx0aWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGVmdCcpKSB7XHJcblx0XHRcdFx0aWYgKGlzRW5hYmxlZCkge1xyXG5cdFx0XHRcdFx0cHJldmlvdXNJdGVtKGN1cnJlbnRJdGVtKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKGlzRW5hYmxlZCkge1xyXG5cdFx0XHRcdFx0bmV4dEl0ZW0oY3VycmVudEl0ZW0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHR2YXIgdG91Y2hvYmogPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0XHRzdGFydFggPSB0b3VjaG9iai5wYWdlWDtcclxuXHRcdFx0c3RhcnRZID0gdG91Y2hvYmoucGFnZVk7XHJcblx0XHRcdHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0fSwgZmFsc2UpO1xyXG5cclxuXHRzdXJmYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0fSwgZmFsc2UpO1xyXG5cclxuXHRzdXJmYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdHZhciB0b3VjaG9iaiA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHRcdGRpc3RYID0gdG91Y2hvYmoucGFnZVggLSBzdGFydFg7XHJcblx0XHRcdGRpc3RZID0gdG91Y2hvYmoucGFnZVkgLSBzdGFydFk7XHJcblx0XHRcdGVsYXBzZWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydFRpbWU7XHJcblx0XHRcdGlmIChlbGFwc2VkVGltZSA8PSBhbGxvd2VkVGltZSl7XHJcblx0XHRcdFx0XHRpZiAoTWF0aC5hYnMoZGlzdFgpID49IHRocmVzaG9sZCAmJiBNYXRoLmFicyhkaXN0WSkgPD0gcmVzdHJhaW50KXtcclxuXHRcdFx0XHRcdFx0XHRpZiAoKGRpc3RYID4gMCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChpc0VuYWJsZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cHJldmlvdXNJdGVtKGN1cnJlbnRJdGVtKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGlzRW5hYmxlZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRuZXh0SXRlbShjdXJyZW50SXRlbSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHR9LCBmYWxzZSk7XHJcbn1cclxuXHJcbnZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbCcpO1xyXG5zd2lwZWRldGVjdChlbCk7Il0sInNvdXJjZVJvb3QiOiIifQ==