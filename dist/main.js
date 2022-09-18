/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_files_onPageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js-files/onPageLoad */ \"./src/js-files/onPageLoad.js\");\n/* harmony import */ var _js_files_addList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-files/addList */ \"./src/js-files/addList.js\");\n/* harmony import */ var _js_files_completed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js-files/completed */ \"./src/js-files/completed.js\");\n/* harmony import */ var _js_files_trash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js-files/trash */ \"./src/js-files/trash.js\");\n\r\n\r\n\r\n\r\n\r\nconst pageContent = (() => {\r\n    const container = document.querySelector(\".container\");\r\n\r\n//    const completedTab = document.querySelector(\"#completed\");\r\n//    completedTab.addEventListener(\"click\", () => {\r\n//         const rmElement = document.querySelector(\".todoItems\");\r\n//         console.log(rmElement);\r\n//         const addElementToCompleted = document.querySelector(\"#completedListTwo\");\r\n//         console.log(addElementToCompleted);\r\n//      });\r\n\r\n   const trashTab = document.querySelector(\"#trash\");\r\n   trashTab.addEventListener(\"click\", () => {\r\n        console.log(\"Trash button has been clicked\");\r\n   })\r\n\r\n})();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/js-files/addList.js":
/*!*********************************!*\
  !*** ./src/js-files/addList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addList\": () => (/* binding */ addList)\n/* harmony export */ });\nconst addList = (() => {\r\n    const button = document.querySelector(\"#button\");\r\n\r\n    button.addEventListener(\"click\", () => {\r\n        // retrieve users list text\r\n        const inputField = document.querySelector(\"#inputField\");\r\n        let userText = inputField.value;\r\n\r\n        // retrieve and create a new list\r\n        const display = document.querySelector(\".displayedItem\");\r\n\r\n        const newList = document.createElement(\"div\");\r\n        newList.classList.add(\"todoItems\")\r\n        newList.innerHTML = `\r\n            <div class=\"todoItems\">\r\n                <div id=\"text\">${userText}</div>\r\n                <div>\r\n                    <button id=\"completed\">Completed</button>\r\n                    <button id=\"trash\">Trash</button>\r\n                </div>\r\n            </div>\r\n        `;\r\n\r\n        display.appendChild(newList);\r\n\r\n    })\r\n\r\n    \r\n})();\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/js-files/addList.js?");

/***/ }),

/***/ "./src/js-files/completed.js":
/*!***********************************!*\
  !*** ./src/js-files/completed.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"completedTasks\": () => (/* binding */ completedTasks)\n/* harmony export */ });\nconst completedTasks = (() => {\r\n    const completedTab = document.querySelector(\".completed\");\r\n\r\n    completedTab.addEventListener(\"click\", () => {\r\n        //removes the background color on the current tab\r\n        const general = document.querySelector(\".general\");\r\n        const trash = document.querySelector(\".trash\");\r\n        if(general.classList = \"currentTab\" || 0) {\r\n            general.classList.remove(\"currentTab\");\r\n            general.classList.add(\"items\");\r\n            general.classList.add(\"general\");\r\n            const completed = document.querySelector(\".completed\");\r\n            completed.classList.add(\"currentTab\");\r\n        };\r\n\r\n        // add the (currentTab) class to the completed tab\r\n\r\n\r\n        const sectionTwo = document.querySelector(\".two\");\r\n\r\n        const completedTab = document.querySelector(\"#completed\");\r\n        completedTab.addEventListener(\"click\", () => {\r\n            const rmElement = document.querySelector(\".todoItems\");\r\n            console.log(rmElement);\r\n            const addElementToCompleted = document.querySelector(\"#completedListTwo\");\r\n            console.log(addElementToCompleted);\r\n        });\r\n        \r\n        sectionTwo.innerHTML = `\r\n            <div id=\"completedListOne\">\r\n                <h1>Completed Tasks</h1>\r\n            </div>\r\n            <hr>\r\n            <div id=\"completedListTwo\"></div>\r\n        `;\r\n    })\r\n\r\n    completedTab.addEventListener(\"click\", () => {\r\n            const rmElement = document.querySelector(\".todoItems\");\r\n            console.log(rmElement);\r\n            const addElementToCompleted = document.querySelector(\"#completedListTwo\");\r\n            console.log(addElementToCompleted);\r\n        });\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/js-files/completed.js?");

/***/ }),

/***/ "./src/js-files/onPageLoad.js":
/*!************************************!*\
  !*** ./src/js-files/onPageLoad.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\nconst pageLoad = (() => {\r\n    const container = document.querySelector(\".container\");\r\n\r\n    container.innerHTML = `\r\n        <div class=\"subContainerItem one\">\r\n            <h1>Shopping List</h1>\r\n            <div id=\"tabs\">\r\n                <h3 class=\"items general\">General List</h3>\r\n                <br>\r\n                <h3 class=\"items completed\">Completed</h3>\r\n                <br>\r\n                <h3 class=\"items trash\">Trash</h3>\r\n            </div>\r\n            <div>\r\n                <h2>Projects</h2>\r\n            </div>\r\n            <div id=\"addProjectDiv\">\r\n                <button id=\"addProject\">+ Create Project</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"subContainerItem two\">\r\n            <div>\r\n                <form>\r\n                    <input id=\"inputField\" placeholder=\"Enter Item here\"/>\r\n                    <button id=\"button\" type=\"button\">Submit</button>\r\n                </form>\r\n            </div>\r\n            <hr>\r\n            <div class=\"displayedItem\">\r\n                <div class=\"todoItems\">\r\n                    <div id=\"text\">Bananas</div>\r\n                    <div>\r\n                        <button id=\"completed\">Completed</button>\r\n                        <button id=\"trash\">Trash</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    `;\r\n\r\n    const general = document.querySelector(\".general\");\r\n    general.classList.add(\"currentTab\");\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/js-files/onPageLoad.js?");

/***/ }),

/***/ "./src/js-files/trash.js":
/*!*******************************!*\
  !*** ./src/js-files/trash.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"trashedTasks\": () => (/* binding */ trashedTasks)\n/* harmony export */ });\nconst trashedTasks = (() => {\r\n    const trashTab =  document.querySelector(\".trash\");\r\n    \r\n    trashTab.addEventListener(\"click\", () => {\r\n        trashTab.addEventListener(\"click\", () => {\r\n\r\n            const general = document.querySelector(\".general\");\r\n            const completed = document.querySelector(\".completed\");\r\n            const trash = document.querySelector(\".trash\");\r\n            if(completed.classList = \"currentTab\" || 0) {\r\n                completed.classList.remove(\"currentTab\");\r\n                completed.classList.add(\"items\");\r\n                completed.classList.add(\"completed\");\r\n                trash.classList.add(\"currentTab\");\r\n            };\r\n\r\n            const sectionTwo = document.querySelector(\".two\");\r\n            \r\n            sectionTwo.innerHTML = `\r\n                <div id=\"trashedListOne\">\r\n                    <h1>Trashed Tasks</h1>\r\n                </div>\r\n                <hr>\r\n                <div id=\"trashedListTwo\"></div>\r\n            `;\r\n        })\r\n    })\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/js-files/trash.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;