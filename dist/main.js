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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_homePg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/homePg */ \"./src/module/homePg.js\");\n/* harmony import */ var _module_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/menu.js */ \"./src/module/menu.js\");\n/* harmony import */ var _module_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/nav.js */ \"./src/module/nav.js\");\n\n\n\n\nlet divCon = document.querySelector('#content')\ndivCon.appendChild((0,_module_nav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\ndivCon.appendChild((0,_module_homePg__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\n\nlet nav = document.querySelectorAll('a')\n\nnav[0].onclick = function () { \n    divCon.lastChild.remove();\n    divCon.appendChild((0,_module_homePg__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\n}\n\nnav[1].onclick = function () { \n    divCon.lastChild.remove();\n    divCon.appendChild((0,_module_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\n}\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/module/homePg.js":
/*!******************************!*\
  !*** ./src/module/homePg.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePg);\n\n\nfunction homePg() {\n    const mainDiv = document.createElement('div');\n    \n    mainDiv.classList.add(`content`)\n  \n    mainDiv.appendChild(title())\n    mainDiv.appendChild(middleContent())\n    mainDiv.appendChild(lastContent()) \n    return mainDiv;\n  }\n\n\nfunction title () {\n    const title = document.createElement(\"span\");\n    title.textContent = `Duck Restaurant`;\n    title.classList.add('title'); \n    return title;\n}\n\nfunction middleContent () {\n    const content = document.createElement('div');\n\n    const img1 = document.createElement('img');\n    img1.src = '../image/images.jpg';\n    img1.setAttribute('style', 'style=\"width:  30%;');\n\n    const text = document.createElement('div');\n    text.textContent= `This restaurant will give the funny experience to eat between the beautiful DUCKS and and pet them. \n    While eating our delicious chicken and beef`;\n\n    content.classList.add('middleContent')\n    content.appendChild(img1);\n    content.appendChild(text);\n    return content\n}\n\nfunction lastContent () {\n    const content = document.createElement('div');\n\n    const section01 = document.createElement('section');\n    section01.innerHTML= `<b>SATURDAY<br>SUNDAY</b><br>MONDAY<br>TUESDAY<br>WEDNESDAY<br>THUESDAY<br><i>FRIDAY</i>`;\n\n    const section02 = document.createElement('section');\n    section02.innerHTML=`<b>9am-10pm<br>9am-10pm<br></b>11am-5pm<br>11am-5pm<br>11am-5pm<br>11am-5pm<br><i>clossed</i>`;\n\n    content.classList.add('lastContent')\n    content.appendChild(section01);\n    content.appendChild(section02);\n\n    return  content;\n}\n\n//# sourceURL=webpack://restaurant/./src/module/homePg.js?");

/***/ }),

/***/ "./src/module/menu.js":
/*!****************************!*\
  !*** ./src/module/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foodMenu);\n\nfunction foodMenu() {\n    let Menu = document.createElement('div');\n    Menu.classList.add(`foodMenu`)\n    let burger = \"../image/food-ham.jpg\"\n    let burgerP = \"this burger is alive but dont worry he already know his destiny and he seems to accept it\"\n    let sandwich =\"../image/cow.jpg\"\n    let sandwichP = \"this sandwich is made by sheep meat no cow is been harmed\"\n    let special = \"../image/Food-face-funny-picture.jpg\";\n    let specialP = \"this meal is to honor our mentor and previous chef. *disclaimer you might feel that the meal is a little bit salty due to whoever is preparing the meal is crying and tears might be involved \"\n    let normalMeal = \"../image/borring.jpg\"\n    let normalMealP = `some costumers is asking for \"normal food\" here is it`\n    Menu.appendChild(foodCard(burger, \"Burger\", burgerP , \"345$\" ))\n    Menu.appendChild(foodCard(sandwich, \"Sandwich\", sandwichP , \"23$\" ))\n    Menu.appendChild(foodCard(special, \"Special Meal\", specialP , \"605$\" ))\n    Menu.appendChild(foodCard(normalMeal, \"Normal Meal\", normalMealP , \"120$\" ))\n    return Menu;\n}\n\n\n\nfunction foodCard (img , name , p , price) {\n    let foodCard = document.createElement('div');\n    let image = document.createElement('img');\n    let title = document.createElement('h1');\n    let par = document.createElement('p');\n    let value = document.createElement('span');\n\n    image.src = img\n    title.innerText = name\n    par.textContent = p \n    value.textContent = price\n\n    foodCard.classList.add(`foodCard`); \n\n    foodCard.appendChild(image);\n    foodCard.appendChild(title);\n    foodCard.appendChild(par);\n    foodCard.appendChild(value);\n\n    return foodCard;\n} \n\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/module/menu.js?");

/***/ }),

/***/ "./src/module/nav.js":
/*!***************************!*\
  !*** ./src/module/nav.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);\n\nfunction navbar() {\n    let nav = document.createElement('nav');\n    nav.classList.add('navContent');\n    \n    let aHome = document.createElement('a');\n    let aMenu = document.createElement('a');\n    \n    aHome.innerHTML = `<img src=\"../image/small-duck-svgrepo-com.svg\" style=\"width:  50px; height : 50px\" alt=\"Company logo\">`\n    aHome.getAttribute('home');\n    \n    aMenu.innerHTML = '<span> MENU</span>'\n    aMenu.getAttribute('menu');\n\n    nav.appendChild(aHome)\n    nav.appendChild(aMenu)\n\n    return nav;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/module/nav.js?");

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