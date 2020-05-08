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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_pages_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public/pages/home */ "./src/public/pages/home/index.js");







var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_5__["ServerStyleSheet"]();
app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a["static"](path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, "../dist")));
app.get("*", function (req, res) {
  var _req$query$page = req.query.page,
      page = _req$query$page === void 0 ? 1 : _req$query$page;
  node_fetch__WEBPACK_IMPORTED_MODULE_2___default()("https://hn.algolia.com/api/v1/search?page=".concat(page)).then(function (res) {
    return res.json();
  }).then(function (data) {
    var jsx = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_5__["StyleSheetManager"], {
      sheet: sheet.instance
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_public_pages_home__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: data,
      pageNum: page
    }));
    var reactDom = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__["renderToString"])(jsx);
    var styleTags = sheet.getStyleTags();
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end(htmlTemplate(reactDom, styleTags, data, page));
  });
});
app.listen(8000);

function htmlTemplate(reactDom, styleTags, data, page) {
  return "\n    <!DOCTYPE html>\n    <html>\n    <head>\n      <meta charset=\"utf-8\">\n      <title>React SSR</title>\n      <link rel=\"shortcut icon\" href=\"#\">\n    </head>\n    ".concat(styleTags, "\n    <body>\n      <div id=\"root\">").concat(reactDom, "</div>\n      <script>\n        window.store=").concat(JSON.stringify(data.hits), "\n        window.pageNum=").concat(page, "\n      </script>\n      <script src=\"/public/index.js\"></script>\n    </body>\n    </html>\n  ");
}

/***/ }),

/***/ "./src/public/components/Button/index.js":
/*!***********************************************!*\
  !*** ./src/public/components/Button/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/public/components/Button/style.js");



var Button = function Button(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    onClick: props.onClick
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/public/components/Button/style.js":
/*!***********************************************!*\
  !*** ./src/public/components/Button/style.js ***!
  \***********************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Container",
  componentId: "sc-1vlljsi-0"
})(["color:#FE6502;cursor:pointer;"]);

/***/ }),

/***/ "./src/public/components/Header/index.js":
/*!***********************************************!*\
  !*** ./src/public/components/Header/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/public/components/Header/style.js");



var Header = function Header(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["Container"], null, props.data.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["Title"], {
      key: i,
      isLast: i === props.data.length - 1
    }, item);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/public/components/Header/style.js":
/*!***********************************************!*\
  !*** ./src/public/components/Header/style.js ***!
  \***********************************************/
/*! exports provided: Container, Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Container",
  componentId: "ltzgfj-0"
})(["display:flex;background-color:#FE6502;height:30px;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Title",
  componentId: "ltzgfj-1"
})(["color:white;font-weight:bold;line-height:30px;margin-right:15px;width:", ";"], function (props) {
  return props.isLast ? 'auto' : '80px';
});

/***/ }),

/***/ "./src/public/components/Image/index.js":
/*!**********************************************!*\
  !*** ./src/public/components/Image/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/public/components/Image/style.js");



var Image = function Image(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    src: props.imgSrc
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./src/public/components/Image/style.js":
/*!**********************************************!*\
  !*** ./src/public/components/Image/style.js ***!
  \**********************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "style__Container",
  componentId: "diicp2-0"
})(["height:100%;cursor:pointer;"]);

/***/ }),

/***/ "./src/public/components/Line/index.js":
/*!*********************************************!*\
  !*** ./src/public/components/Line/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/public/components/Line/style.js");



var Line = function Line(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["Container"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Line);

/***/ }),

/***/ "./src/public/components/Line/style.js":
/*!*********************************************!*\
  !*** ./src/public/components/Line/style.js ***!
  \*********************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Container",
  componentId: "sc-1ru083u-0"
})(["height:auto;border:1px solid #FE6502;margin-left:5px;margin-right:5px;"]);

/***/ }),

/***/ "./src/public/containers/LineChart/index.js":
/*!**************************************************!*\
  !*** ./src/public/containers/LineChart/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg_line_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg-line-chart */ "react-svg-line-chart");
/* harmony import */ var react_svg_line_chart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_svg_line_chart__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Chart = /*#__PURE__*/function (_React$Component) {
  _inherits(Chart, _React$Component);

  var _super = _createSuper(Chart);

  function Chart() {
    var _temp, _this;

    _classCallCheck(this, Chart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.labelsFormatX = function (x) {
      var data = _this.props.data;
      var itemX = data.find(function (item) {
        return item.x === x;
      });
      return itemX.label;
    }, _temp));
  }

  _createClass(Chart, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = this.props.data;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg_line_chart__WEBPACK_IMPORTED_MODULE_1___default.a, {
        data: data,
        labelsFormatX: function labelsFormatX(x) {
          return _this2.labelsFormatX(x);
        },
        labelsStepX: 1,
        pathWidth: 2
      });
    }
  }]);

  return Chart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/public/containers/NewsCol/index.js":
/*!************************************************!*\
  !*** ./src/public/containers/NewsCol/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Image */ "./src/public/components/Image/index.js");
/* harmony import */ var _images_arrow_up_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/arrow_up.svg */ "./src/public/images/arrow_up.svg");
/* harmony import */ var _images_arrow_up_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_arrow_up_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/public/containers/NewsCol/style.js");





var NewsCol = function NewsCol(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    isEven: props.isEven
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["Comments"], null, props.commentsNum), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["VoteCount"], null, props.voteCount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["UpVote"], {
    onClick: function onClick() {
      return props.onVote(props.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_1__["default"], {
    imgSrc: _images_arrow_up_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["News"], null, props.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["NewsDetails"], null, "(", !!props.showUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["Url"], {
    target: "_blank",
    href: props.fullUrl
  }, props.showUrl) : '', ") by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["Author"], null, props.author), " 5 hrs ago", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_3__["Hide"], {
    onClick: function onClick() {
      return props.onHide(props.id);
    }
  }, "[ hide ]"))));
};

/* harmony default export */ __webpack_exports__["default"] = (NewsCol);

/***/ }),

/***/ "./src/public/containers/NewsCol/style.js":
/*!************************************************!*\
  !*** ./src/public/containers/NewsCol/style.js ***!
  \************************************************/
/*! exports provided: Container, Url, Hide, Author, NewsDetails, News, UpVote, VoteCount, Comments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hide", function() { return Hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return Author; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetails", function() { return NewsDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "News", function() { return News; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpVote", function() { return UpVote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteCount", function() { return VoteCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comments", function() { return Comments; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Container",
  componentId: "sc-1fbo26z-0"
})(["display:flex;height:25px;line-height:25px;background-color:", ";"], function (props) {
  return props.isEven ? '#E5E6E0' : '#F5F6F0';
});
var Url = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "style__Url",
  componentId: "sc-1fbo26z-1"
})(["cursor:pointer;color:darkgray;"]);
var Hide = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Hide",
  componentId: "sc-1fbo26z-2"
})(["color:black;font-weight:bold;cursor:pointer;margin-left:5px;&:hover{text-decoration:underline;}"]);
var Author = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Author",
  componentId: "sc-1fbo26z-3"
})(["color:black;font-weight:bold;margin-left:5px;margin-right:5px;"]);
var NewsDetails = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__NewsDetails",
  componentId: "sc-1fbo26z-4"
})(["margin-left:5px;display:flex;font-size:12px;color:darkgray;"]);
var News = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__News",
  componentId: "sc-1fbo26z-5"
})(["display:flex;"]);
var UpVote = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__UpVote",
  componentId: "sc-1fbo26z-6"
})(["width:80px;text-align:center;margin-right:15px;"]);
var VoteCount = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__VoteCount",
  componentId: "sc-1fbo26z-7"
})(["width:80px;text-align:center;margin-right:15px;"]);
var Comments = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Comments",
  componentId: "sc-1fbo26z-8"
})(["width:80px;text-align:center;margin-right:15px;"]);

/***/ }),

/***/ "./src/public/images/arrow_up.svg":
/*!****************************************!*\
  !*** ./src/public/images/arrow_up.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black' width='18px' height='18px'%3E%3Cpath d='M7 14l5-5 5 5z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E"

/***/ }),

/***/ "./src/public/pages/home/index.js":
/*!****************************************!*\
  !*** ./src/public/pages/home/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header */ "./src/public/components/Header/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Button */ "./src/public/components/Button/index.js");
/* harmony import */ var _components_Line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Line */ "./src/public/components/Line/index.js");
/* harmony import */ var _containers_NewsCol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../containers/NewsCol */ "./src/public/containers/NewsCol/index.js");
/* harmony import */ var _containers_LineChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../containers/LineChart */ "./src/public/containers/LineChart/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./src/public/pages/home/style.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Absolute imports here */


/** Components imports here */




/** Containers Imports here */



/** Styles imports here */



var HomePage = /*#__PURE__*/function (_React$Component) {
  _inherits(HomePage, _React$Component);

  var _super = _createSuper(HomePage);

  function HomePage(props) {
    var _this;

    _classCallCheck(this, HomePage);

    _this = _super.call(this, props);

    _this.onPrevClick = function () {
      var pageNum = _this.state.pageNum;
      node_fetch__WEBPACK_IMPORTED_MODULE_1___default()("https://hn.algolia.com/api/v1/search?page=".concat(pageNum - 1)).then(function (res) {
        return res.json();
      }).then(function (data) {
        _this.setState({
          data: data.hits,
          pageNum: pageNum - 1
        }, function () {
          return window.history.pushState(data, '', "?page=".concat(pageNum - 1));
        });
      });
    };

    _this.onNextClick = function () {
      var pageNum = _this.state.pageNum;
      node_fetch__WEBPACK_IMPORTED_MODULE_1___default()("https://hn.algolia.com/api/v1/search?page=".concat(pageNum + 1)).then(function (res) {
        return res.json();
      }).then(function (data) {
        _this.setState({
          data: data.hits,
          pageNum: pageNum + 1
        }, function () {
          return window.history.pushState(data, '', "?page=".concat(pageNum + 1));
        });
      });
    };

    _this.getChartData = function (data) {
      var chartData = [];
      data.forEach(function (news, i) {
        return chartData.push({
          x: i + 1,
          y: news.points,
          label: news.objectID
        });
      });
      return chartData;
    };

    _this.hideNews = function (id) {
      var data = _this.state.data;
      var newData = data.filter(function (item) {
        return item.objectID !== id;
      });
      var storageIds = JSON.parse(localStorage.getItem('hideNewsIds'));

      if (storageIds) {
        if (storageIds.indexOf(id) < 0) {
          storageIds.push(id);
          localStorage.setItem('hideNewsIds', JSON.stringify(storageIds));
        }
      } else {
        localStorage.setItem('hideNewsIds', JSON.stringify([id]));
      }

      _this.setState({
        data: newData,
        initialClientRender: false
      });
    };

    _this.onVote = function (id) {
      var data = _this.state.data;
      var voteIds = JSON.parse(localStorage.getItem('voteNewsIds'));
      var newData = [];
      data.forEach(function (news) {
        if (news.objectID === id) {
          news.points++;
        }

        newData.push(news);
      });

      if (voteIds) {
        var flag = true;
        voteIds.forEach(function (vote) {
          if (Object.keys(vote)[0] === id) {
            vote[Object.keys(vote)[0]]++;
            flag = false;
          }
        });

        if (flag) {
          voteIds.push(_defineProperty({}, id, 1));
        }

        localStorage.setItem('voteNewsIds', JSON.stringify(voteIds));
      } else {
        localStorage.setItem('voteNewsIds', JSON.stringify([_defineProperty({}, id, 1)]));
      }

      _this.setState({
        data: newData,
        initialClientRender: false
      });
    };

    _this.getDataWithLocal = function () {
      var _this$state = _this.state,
          data = _this$state.data,
          initialClientRender = _this$state.initialClientRender;
      var hideIds = JSON.parse(localStorage.getItem('hideNewsIds'));
      var voteIds = JSON.parse(localStorage.getItem('voteNewsIds'));
      var updatedData = data;
      initialClientRender && voteIds && voteIds.forEach(function (vote) {
        updatedData.forEach(function (news, i) {
          if (Object.keys(vote)[0] === news.objectID) {
            news.points = news.points + vote[Object.keys(vote)[0]];
          }
        });
      });
      initialClientRender && hideIds && hideIds.forEach(function (id) {
        updatedData.forEach(function (news, i) {
          if (id === news.objectID) {
            updatedData.splice(i, 1);
          }
        });
      });
      return updatedData;
    };

    _this.state = {
      data: props.data ? props.data.hits : window.store,
      pageNum: props.pageNum || window.pageNum,
      initialClientRender: true
    };
    return _this;
  }

  _createClass(HomePage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var pageNum = this.state.pageNum;
      var data = typeof window !== 'undefined' ? this.getDataWithLocal() : this.state.data;
      var chartData = typeof window !== 'undefined' ? this.getChartData(data) : null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__["Table"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        data: ['Comments', 'Vote Count', 'UpVote', 'News Details']
      }), data && data.map(function (news, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_NewsCol__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: i,
          id: news.objectID,
          isEven: i === 0 || i % 2 === 0,
          data: news,
          title: news.title,
          commentsNum: news.num_comments,
          voteCount: news.points,
          author: news.author,
          fullUrl: news.url,
          showUrl: news.url && news.url.split('/')[2],
          onHide: _this2.hideNews,
          onVote: _this2.onVote
        });
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_7__["Buttons"], null, pageNum !== 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: this.onPrevClick
      }, "Previous"), pageNum !== 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Line__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: this.onNextClick
      }, "Next")), chartData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_LineChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
        data: chartData
      }));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/public/pages/home/style.js":
/*!****************************************!*\
  !*** ./src/public/pages/home/style.js ***!
  \****************************************/
/*! exports provided: Table, Container, Buttons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buttons", function() { return Buttons; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var Table = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Table",
  componentId: "sc-4reuc7-0"
})([""]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Container",
  componentId: "sc-4reuc7-1"
})([""]);
var Buttons = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__Buttons",
  componentId: "sc-4reuc7-2"
})(["display:flex;float:right;margin-top:10px;margin-bottom:10px;"]);

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-svg-line-chart":
/*!***************************************!*\
  !*** external "react-svg-line-chart" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-svg-line-chart");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map