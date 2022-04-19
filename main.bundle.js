/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const options = {\n  method: 'GET',\n  headers: {\n    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',\n    'X-RapidAPI-Key': '838b0eeb18msh840203b450993abp154a9fjsnea041f3d274c',\n  },\n};\n\nfetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter', options)\n  .then((response) => response.json())\n  .then((response) => console.log(response))\n  .catch((err) => console.error(err));\n\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;