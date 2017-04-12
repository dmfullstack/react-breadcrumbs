"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_reactRouter=require("react-router"),_exenv=require("exenv"),_exenv2=_interopRequireDefault(_exenv),Breadcrumbs=function(e){function t(e){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.displayName="Breadcrumbs",r}return _inherits(t,e),_createClass(t,[{key:"_getDisplayName",value:function(e){var t=null;return"function"==typeof e.getDisplayName&&(t=e.getDisplayName()),t=e.indexRoute?t||e.indexRoute.displayName||null:t||e.displayName||null,!t&&Boolean(e.name)&&(t=e.name),!t&&this.props.displayMissing&&(t=this.props.displayMissingText),t}},{key:"_addKeyToElement",value:function(e){return e&&!e.key&&e.type?Object.assign({},e,{key:100*Math.random()}):e}},{key:"_addKeyToArrayElements",value:function(e){var t=this;return e.map(function(e){return t._addKeyToElement(e)})}},{key:"_processCustomElements",value:function(e){var t=this;return e.map(function(e){return e?Array.isArray(e)?t._addKeyToArrayElements(e):t._addKeyToElement(e):null})}},{key:"_appendAndPrependElements",value:function(e){var t=[],r=this._processCustomElements([e.shift(),e.pop()]);return r[0]&&t.unshift(r[0]),t.push(e[0]),r[1]&&t.push(r[1]),t.reduce(function(e,t){return e.concat(t)},[]).filter(function(e){return e})}},{key:"_resolveRouteName",value:function(e){var t=this._getDisplayName(e);return!t&&e.breadcrumbName&&(t=e.breadcrumbName),!t&&e.name&&(t=e.name),t}},{key:"_processRoute",value:function(e,t,r,a){var n=this;if(!e.path&&this.props.hideNoPath)return null;var s="",p=this._resolveRouteName(e);if(p&&"excludes"in this.props&&this.props.excludes.some(function(e){return e===p}))return null;var o=!0;o&&(o=Boolean(e.childRoutes),o=t!==r+1),s=t===r+1?"":this.props.separator,o||(s=""),Object.prototype.hasOwnProperty.call(e,"breadcrumblink")&&(o=e.breadcrumblink);var i=e.path.split("/")[e.path.split("/").length-1],u=void 0;if(e.path.split("/").forEach(function(t){if(":"===t.substring(0,1)&&n.props.params){u=Object.keys(n.props.params).map(function(e){return n.props.params[e]});var r=e.path.split("/").map(function(e){return":"===e.substring(0,1)?u.shift():e});e.path=r.reduce(function(e,t){return e+"/"+t}),e.staticName||":"!==i.substring(0,1)||(p=r.reduce(function(e,t){return t})),"function"==typeof e.prettifyParam&&(p=e.prettifyParam(p,n.props.params))}}),!p)return null;this.props.prettify&&(p=p.replace(/-/g," "),p=p.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}));var l=p,c=this.props.itemClass;return o?a&&(l=_react2["default"].createElement(this.props.Link||_reactRouter.Link,{to:e.path},p)):c+=" "+this.props.activeItemClass,a?_react2["default"].createElement(this.props.itemElement,{className:c,key:100*Math.random()},l,s):l}},{key:"_buildRoutes",value:function(e,t,r,a){var n=this,s=[],p="/";return e=e.map(function(e,t){var r=Object.assign({},e);if("function"==typeof e.prettifyParam&&(r.prettifyParam=e.prettifyParam),"props"in r&&"path"in r.props&&(r.path=r.props.path,r.children=r.props.children,r.name=r.props.name,r.prettifyParam=r.props.prettifyParam),!r.path)return null;"/"===r.path.charAt(0)?p=r.path:("/"!==p.charAt(p.length-1)&&(p+="/"),p+=r.path),t>0&&"/"!==r.path.charAt(0)&&(r.path=p);var a=n._resolveRouteName(r);return!n.props.displayMissing&&!a||"excludes"in n.props&&n.props.excludes.some(function(e){return e===a})?null:r}).filter(function(e){return Boolean(e)}),s=e.map(function(r){return n._processRoute(r,e.length,s.length,t)}).filter(function(e){return Boolean(e)}),_exenv2["default"].canUseDOM&&window&&window.document&&"setDocumentTitle"in this.props&&this.props.setDocumentTitle&&s.length>0&&(window.document.title=s[s.length-1].props.children[0]),(r||a)&&(s=this._appendAndPrependElements([r,s,a])),t?_react2["default"].createElement(this.props.wrapperElement,{className:this.props.customClass||this.props.wrapperClass},s):s}},{key:"render",value:function(){return this._buildRoutes(this.props.routes,this.props.createElement,this.props.prepend,this.props.append)}}]),t}(_react2["default"].Component);Breadcrumbs.propTypes={params:_react2["default"].PropTypes.object,prepend:_react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.node,_react2["default"].PropTypes.bool]),append:_react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.node,_react2["default"].PropTypes.bool]),separator:_react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element,_react2["default"].PropTypes.string]),createElement:_react2["default"].PropTypes.bool,Link:_react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element,_react2["default"].PropTypes.string]),displayMissing:_react2["default"].PropTypes.bool,prettify:_react2["default"].PropTypes.bool,displayMissingText:_react2["default"].PropTypes.string,wrapperElement:_react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element,_react2["default"].PropTypes.string]),wrapperClass:_react2["default"].PropTypes.string,itemElement:_react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.element,_react2["default"].PropTypes.string]),itemClass:_react2["default"].PropTypes.string,customClass:_react2["default"].PropTypes.string,activeItemClass:_react2["default"].PropTypes.string,excludes:_react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.string),hideNoPath:_react2["default"].PropTypes.bool,routes:_react2["default"].PropTypes.arrayOf(_react2["default"].PropTypes.object).isRequired,setDocumentTitle:_react2["default"].PropTypes.bool},Breadcrumbs.defaultProps={prepend:!1,append:!1,separator:" > ",createElement:!0,displayMissing:!0,displayMissingText:"Missing name prop from Route",wrapperElement:"div",wrapperClass:"breadcrumbs",itemElement:"span",itemClass:"",activeItemClass:"",excludes:[""],prettify:!1,hideNoPath:!0,setDocumentTitle:!1},module.exports=Breadcrumbs;
//# sourceMappingURL=dist/react-breadcrumbs.min.js.map