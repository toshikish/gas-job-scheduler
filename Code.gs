var global = this;function callHello() {
}
function onOpen() {
}
function showSidebar() {
}(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
'use strict';

var hello = require('./src/hello');

global.callHello = function () {
  Logger.log(hello('world'));
};

global.onOpen = function () {
  SpreadsheetApp.getUi().createMenu('Custom Menu').addItem('Show sidebar', 'showSidebar').addToUi();
};

global.showSidebar = function () {
  var html = HtmlService.createHtmlOutputFromFile('Sidebar').setTitle('My custom sidebar').setWidth(300);
  SpreadsheetApp.getUi().showSidebar(html);
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./src/hello":2}],2:[function(require,module,exports){
"use strict";

module.exports = function (name) {
  return "Hello " + name;
};

},{}]},{},[1]);
