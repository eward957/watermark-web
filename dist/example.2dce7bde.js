parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"o2+O":[function(require,module,exports) {
"use strict";var t=this&&this.__assign||function(){return(t=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var s in e=arguments[n])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e){if(this.setting=null,this.styleSheetIndex=0,this.styleSheet=null,this.setting=t({id:"watermark-web",text:"",gutterX:15,gutterY:15,size:15,alpha:.35,width:200,angle:15},e),0===document.styleSheets.length){var n=document.createElement("style");document.head.appendChild(n)}this.styleSheetIndex=document.styleSheets.length-1,this.styleSheet=document.styleSheets[this.styleSheetIndex]}return e.prototype.init=function(){this.gWrapperDOM().gWatermarkDOM()},e.prototype.destory=function(){var t=document.getElementById(this.setting.id);t&&(t.innerHTML="")},e.prototype.gWrapperDOM=function(){var t=this.setting.id,e=document.getElementById(t),n="#"+t+" {\n      pointer-events: none;\n      position: fixed;\n      top: 0;\n      z-index: 9999;\n      width: 100vw;\n      height: 100vh;\n      display: flex;\n      justify-content: space-around;\n      align-content: space-around;\n      flex-wrap: wrap;\n    }";return e||(this.styleSheet.insertRule(n,this.styleSheetIndex),(e=document.createElement("div")).setAttribute("id",t),document.body.appendChild(e)),this},e.prototype.gWatermarkDOM=function(){var t=Math.max(document.body.scrollWidth,document.body.clientWidth),e=Math.max(document.body.scrollHeight,document.body.clientHeight),n=Math.cos(this.setting.angle)*this.setting.size+Math.sin(this.setting.angle)*this.setting.width,i=Math.ceil(e/(n+2*this.setting.gutterY))*Math.ceil(t/(this.setting.width+2*this.setting.gutterX)),s=document.createDocumentFragment(),h="#"+this.setting.id+" > div {\n      transform: rotate(-"+this.setting.angle+"deg);\n      width: "+this.setting.width+"px;\n      margin: "+this.setting.gutterY+"px "+this.setting.gutterX+"px;\n      opacity: "+this.setting.alpha+"\n    }";this.styleSheet.insertRule(h,this.styleSheetIndex);for(var r=1;r<=i;r++){var d=document.createElement("div"),o=document.createTextNode(this.setting.text);d.appendChild(o),s.appendChild(d)}document.getElementById(this.setting.id).appendChild(s)},e}();exports.default=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("../index.ts"),t=r(e);function r(e){return e&&e.__esModule?e:{default:e}}var n=new t.default({text:"ewardwang"});n.init();
},{"../index.ts":"o2+O"}]},{},["Focm"], null)
//# sourceMappingURL=/example.2dce7bde.map