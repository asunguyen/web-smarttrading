(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[77314],{259142:function(t,e){var n,r,o;r=[e],n=function(t){"use strict";function e(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(t,"__esModule",{value:!0});var n=!1;if("undefined"!=typeof window){var r={get passive(){n=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var o="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),i=[],s=!1,a=-1,c=void 0,u=void 0,h=function(t){return i.some((function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))}))},d=function(t){var e=t||window.event;return!!h(e.target)||1<e.touches.length||(e.preventDefault&&e.preventDefault(),!1)},l=function(){setTimeout((function(){void 0!==u&&(document.body.style.paddingRight=u,u=void 0),void 0!==c&&(document.body.style.overflow=c,c=void 0)}))};t.disableBodyScroll=function(t,r){if(o){if(!t)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(t&&!i.some((function(e){return e.targetElement===t}))){var l={targetElement:t,options:r||{}};i=[].concat(e(i),[l]),t.ontouchstart=function(t){1===t.targetTouches.length&&(a=t.targetTouches[0].clientY)},t.ontouchmove=function(e){var n,r,o,i;1===e.targetTouches.length&&(r=t,i=(n=e).targetTouches[0].clientY-a,!h(n.target)&&(r&&0===r.scrollTop&&0<i||(o=r)&&o.scrollHeight-o.scrollTop<=o.clientHeight&&i<0?d(n):n.stopPropagation()))},s||(document.addEventListener("touchmove",d,n?{passive:!1}:void 0),s=!0)}}else{v=r,setTimeout((function(){if(void 0===u){var t=!!v&&!0===v.reserveScrollBarGap,e=window.innerWidth-document.documentElement.clientWidth;t&&0<e&&(u=document.body.style.paddingRight,document.body.style.paddingRight=e+"px")}void 0===c&&(c=document.body.style.overflow,document.body.style.overflow="hidden")}));var g={targetElement:t,options:r||{}};i=[].concat(e(i),[g])}var v},t.clearAllBodyScrollLocks=function(){o?(i.forEach((function(t){t.targetElement.ontouchstart=null,t.targetElement.ontouchmove=null})),s&&(document.removeEventListener("touchmove",d,n?{passive:!1}:void 0),s=!1),i=[],a=-1):(l(),i=[])},t.enableBodyScroll=function(t){if(o){if(!t)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");t.ontouchstart=null,t.ontouchmove=null,i=i.filter((function(e){return e.targetElement!==t})),s&&0===i.length&&(document.removeEventListener("touchmove",d,n?{passive:!1}:void 0),s=!1)}else 1===i.length&&i[0].targetElement===t?(l(),i=[]):i=i.filter((function(e){return e.targetElement!==t}))}},void 0===(o="function"==typeof n?n.apply(e,r):n)||(t.exports=o)},305797:()=>{!function(){"use strict"
;if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=window.document,e=[];r.prototype.THROTTLE_TIMEOUT=100,r.prototype.POLL_INTERVAL=null,r.prototype.USE_MUTATION_OBSERVER=!0,r.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},r.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},r.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},r.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},r.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},r.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},r.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(o(window,"resize",this._checkForIntersections,!0),o(t,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in window&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},r.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,i(window,"resize",this._checkForIntersections,!0),i(t,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},r.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(r){var o=r.element,i=s(o),a=this._rootContainsTarget(o),c=r.entry,u=t&&a&&this._computeTargetAndRootIntersection(o,e),h=r.entry=new n({time:window.performance&&performance.now&&performance.now(),
target:o,boundingClientRect:i,rootBounds:e,intersectionRect:u});c?t&&a?this._hasCrossedThreshold(c,h)&&this._queuedEntries.push(h):c&&c.isIntersecting&&this._queuedEntries.push(h):this._queuedEntries.push(h)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},r.prototype._computeTargetAndRootIntersection=function(e,n){if("none"!=window.getComputedStyle(e).display){for(var r,o,i,a,u,h,d,l,g=s(e),v=c(e),p=!1;!p;){var f=null,m=1==v.nodeType?window.getComputedStyle(v):{};if("none"==m.display)return;if(v==this.root||v==t?(p=!0,f=n):v!=t.body&&v!=t.documentElement&&"visible"!=m.overflow&&(f=s(v)),f&&(r=f,o=g,i=void 0,a=void 0,u=void 0,h=void 0,d=void 0,l=void 0,i=Math.max(r.top,o.top),a=Math.min(r.bottom,o.bottom),u=Math.max(r.left,o.left),h=Math.min(r.right,o.right),l=a-i,!(g=(d=h-u)>=0&&l>=0&&{top:i,bottom:a,left:u,right:h,width:d,height:l})))break;v=c(v)}return g}},r.prototype._getRootRect=function(){var e;if(this.root)e=s(this.root);else{var n=t.documentElement,r=t.body;e={top:0,left:0,right:n.clientWidth||r.clientWidth,width:n.clientWidth||r.clientWidth,bottom:n.clientHeight||r.clientHeight,height:n.clientHeight||r.clientHeight}}return this._expandRectByRootMargin(e)},r.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},r.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,r=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==r)for(var o=0;o<this.thresholds.length;o++){var i=this.thresholds[o];if(i==n||i==r||i<n!=i<r)return!0}},r.prototype._rootIsInDom=function(){return!this.root||a(t,this.root)},r.prototype._rootContainsTarget=function(e){return a(this.root||t,e)},r.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},r.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=r,window.IntersectionObserverEntry=n}function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,r=this.intersectionRect,o=r.width*r.height;this.intersectionRatio=n?Number((o/n).toFixed(4)):this.isIntersecting?1:0}function r(t,e){var n,r,o,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),r=this.THROTTLE_TIMEOUT,o=null,function(){o||(o=setTimeout((function(){n(),o=null}),r))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),
this.root=i.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" ")}function o(t,e,n,r){"function"==typeof t.addEventListener?t.addEventListener(e,n,r||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function i(t,e,n,r){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,r||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function s(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function a(t,e){for(var n=e;n;){if(n==t)return!0;n=c(n)}return!1}function c(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e&&e.assignedSlot?e.assignedSlot.parentNode:e}}()},174786:(t,e,n)=>{"use strict";n.d(e,{default:()=>r});const r=function(){}},457825:(t,e,n)=>{"use strict";var r=n(691622).compose;e.composeWithDevTools="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?r:r.apply(null,arguments)},"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__},355682:(t,e,n)=>{"use strict";n.d(e,{default:()=>o});var r=n(711430);function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,(0,r.default)(t,e)}},711430:(t,e,n)=>{"use strict";function r(t,e){return r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(t,e)}n.d(e,{default:()=>r})},298314:(t,e,n)=>{"use strict";let r;function o(){return r||(r=new Image,r.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),r}n.d(e,{getEmptyImage:()=>o})},207809:(t,e,n)=>{"use strict";n.d(e,{TouchBackend:()=>v});var r,o=n(6346);!function(t){t.mouse="mouse",t.touch="touch",t.keyboard="keyboard"}(r||(r={}));class i{get delay(){var t;return null!==(t=this.args.delay)&&void 0!==t?t:0}get scrollAngleRanges(){return this.args.scrollAngleRanges}get getDropTargetElementsAtPoint(){return this.args.getDropTargetElementsAtPoint}get ignoreContextMenu(){var t;return null!==(t=this.args.ignoreContextMenu)&&void 0!==t&&t}get enableHoverOutsideTarget(){var t;return null!==(t=this.args.enableHoverOutsideTarget)&&void 0!==t&&t}get enableKeyboardEvents(){var t;return null!==(t=this.args.enableKeyboardEvents)&&void 0!==t&&t}get enableMouseEvents(){var t;return null!==(t=this.args.enableMouseEvents)&&void 0!==t&&t}get enableTouchEvents(){var t;return null===(t=this.args.enableTouchEvents)||void 0===t||t}get touchSlop(){return this.args.touchSlop||0}get delayTouchStart(){var t,e,n,r;return null!==(r=null!==(n=null===(t=this.args)||void 0===t?void 0:t.delayTouchStart)&&void 0!==n?n:null===(e=this.args)||void 0===e?void 0:e.delay)&&void 0!==r?r:0}get delayMouseStart(){var t,e,n,r
;return null!==(r=null!==(n=null===(t=this.args)||void 0===t?void 0:t.delayMouseStart)&&void 0!==n?n:null===(e=this.args)||void 0===e?void 0:e.delay)&&void 0!==r?r:0}get window(){return this.context&&this.context.window?this.context.window:"undefined"!=typeof window?window:void 0}get document(){var t;return(null===(t=this.context)||void 0===t?void 0:t.document)?this.context.document:this.window?this.window.document:void 0}get rootElement(){var t;return(null===(t=this.args)||void 0===t?void 0:t.rootElement)||this.document}constructor(t,e){this.args=t,this.context=e}}const s=1,a=0;function c(t){return void 0===t.button||t.button===a}function u(t){return!!t.targetTouches}function h(t,e){return u(t)?function(t,e){return 1===t.targetTouches.length?h(t.targetTouches[0]):e&&1===t.touches.length&&t.touches[0].target===e.target?h(t.touches[0]):void 0}(t,e):{x:t.clientX,y:t.clientY}}const d=(()=>{let t=!1;try{addEventListener("test",(()=>{}),Object.defineProperty({},"passive",{get:()=>(t=!0,!0)}))}catch(t){}return t})(),l={[r.mouse]:{start:"mousedown",move:"mousemove",end:"mouseup",contextmenu:"contextmenu"},[r.touch]:{start:"touchstart",move:"touchmove",end:"touchend"},[r.keyboard]:{keydown:"keydown"}};class g{profile(){var t;return{sourceNodes:this.sourceNodes.size,sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,targetNodes:this.targetNodes.size,dragOverTargetIds:(null===(t=this.dragOverTargetIds)||void 0===t?void 0:t.length)||0}}get document(){return this.options.document}setup(){const t=this.options.rootElement;t&&((0,o.invariant)(!g.isSetUp,"Cannot have two Touch backends at the same time."),g.isSetUp=!0,this.addEventListener(t,"start",this.getTopMoveStartHandler()),this.addEventListener(t,"start",this.handleTopMoveStartCapture,!0),this.addEventListener(t,"move",this.handleTopMove),this.addEventListener(t,"move",this.handleTopMoveCapture,!0),this.addEventListener(t,"end",this.handleTopMoveEndCapture,!0),this.options.enableMouseEvents&&!this.options.ignoreContextMenu&&this.addEventListener(t,"contextmenu",this.handleTopMoveEndCapture),this.options.enableKeyboardEvents&&this.addEventListener(t,"keydown",this.handleCancelOnEscape,!0))}teardown(){const t=this.options.rootElement;t&&(g.isSetUp=!1,this._mouseClientOffset={},this.removeEventListener(t,"start",this.handleTopMoveStartCapture,!0),this.removeEventListener(t,"start",this.handleTopMoveStart),this.removeEventListener(t,"move",this.handleTopMoveCapture,!0),this.removeEventListener(t,"move",this.handleTopMove),this.removeEventListener(t,"end",this.handleTopMoveEndCapture,!0),this.options.enableMouseEvents&&!this.options.ignoreContextMenu&&this.removeEventListener(t,"contextmenu",this.handleTopMoveEndCapture),this.options.enableKeyboardEvents&&this.removeEventListener(t,"keydown",this.handleCancelOnEscape,!0),this.uninstallSourceNodeRemovalObserver())}addEventListener(t,e,n,r=!1){const o=d?{capture:r,passive:!1}:r;this.listenerTypes.forEach((function(r){const i=l[r][e];i&&t.addEventListener(i,n,o)}))}
removeEventListener(t,e,n,r=!1){const o=d?{capture:r,passive:!1}:r;this.listenerTypes.forEach((function(r){const i=l[r][e];i&&t.removeEventListener(i,n,o)}))}connectDragSource(t,e){const n=this.handleMoveStart.bind(this,t);return this.sourceNodes.set(t,e),this.addEventListener(e,"start",n),()=>{this.sourceNodes.delete(t),this.removeEventListener(e,"start",n)}}connectDragPreview(t,e,n){return this.sourcePreviewNodeOptions.set(t,n),this.sourcePreviewNodes.set(t,e),()=>{this.sourcePreviewNodes.delete(t),this.sourcePreviewNodeOptions.delete(t)}}connectDropTarget(t,e){const n=this.options.rootElement;if(!this.document||!n)return()=>{};const r=r=>{if(!this.document||!n||!this.monitor.isDragging())return;let o;switch(r.type){case l.mouse.move:o={x:r.clientX,y:r.clientY};break;case l.touch.move:var i,s;o={x:(null===(i=r.touches[0])||void 0===i?void 0:i.clientX)||0,y:(null===(s=r.touches[0])||void 0===s?void 0:s.clientY)||0}}const a=null!=o?this.document.elementFromPoint(o.x,o.y):void 0,c=a&&e.contains(a);return a===e||c?this.handleMove(r,t):void 0};return this.addEventListener(this.document.body,"move",r),this.targetNodes.set(t,e),()=>{this.document&&(this.targetNodes.delete(t),this.removeEventListener(this.document.body,"move",r))}}getTopMoveStartHandler(){return this.options.delayTouchStart||this.options.delayMouseStart?this.handleTopMoveStartDelay:this.handleTopMoveStart}installSourceNodeRemovalObserver(t){this.uninstallSourceNodeRemovalObserver(),this.draggedSourceNode=t,this.draggedSourceNodeRemovalObserver=new MutationObserver((()=>{t&&!t.parentElement&&(this.resurrectSourceNode(),this.uninstallSourceNodeRemovalObserver())})),t&&t.parentElement&&this.draggedSourceNodeRemovalObserver.observe(t.parentElement,{childList:!0})}resurrectSourceNode(){this.document&&this.draggedSourceNode&&(this.draggedSourceNode.style.display="none",this.draggedSourceNode.removeAttribute("data-reactid"),this.document.body.appendChild(this.draggedSourceNode))}uninstallSourceNodeRemovalObserver(){this.draggedSourceNodeRemovalObserver&&this.draggedSourceNodeRemovalObserver.disconnect(),this.draggedSourceNodeRemovalObserver=void 0,this.draggedSourceNode=void 0}constructor(t,e,n){this.getSourceClientOffset=t=>{const e=this.sourceNodes.get(t);return e&&function(t){const e=1===t.nodeType?t:t.parentElement;if(!e)return;const{top:n,left:r}=e.getBoundingClientRect();return{x:r,y:n}}(e)},this.handleTopMoveStartCapture=t=>{c(t)&&(this.moveStartSourceIds=[])},this.handleMoveStart=t=>{Array.isArray(this.moveStartSourceIds)&&this.moveStartSourceIds.unshift(t)},this.handleTopMoveStart=t=>{if(!c(t))return;const e=h(t);e&&(u(t)&&(this.lastTargetTouchFallback=t.targetTouches[0]),this._mouseClientOffset=e),this.waitingForDelay=!1},this.handleTopMoveStartDelay=t=>{if(!c(t))return;const e=t.type===l.touch.start?this.options.delayTouchStart:this.options.delayMouseStart;this.timeout=setTimeout(this.handleTopMoveStart.bind(this,t),e),this.waitingForDelay=!0},this.handleTopMoveCapture=()=>{this.dragOverTargetIds=[]},this.handleMove=(t,e)=>{
this.dragOverTargetIds&&this.dragOverTargetIds.unshift(e)},this.handleTopMove=t=>{if(this.timeout&&clearTimeout(this.timeout),!this.document||this.waitingForDelay)return;const{moveStartSourceIds:e,dragOverTargetIds:n}=this,r=this.options.enableHoverOutsideTarget,o=h(t,this.lastTargetTouchFallback);if(!o)return;if(this._isScrolling||!this.monitor.isDragging()&&function(t,e,n,r,o){if(!o)return!1;const i=180*Math.atan2(r-e,n-t)/Math.PI+180;for(let t=0;t<o.length;++t){const e=o[t];if(e&&(null==e.start||i>=e.start)&&(null==e.end||i<=e.end))return!0}return!1}(this._mouseClientOffset.x||0,this._mouseClientOffset.y||0,o.x,o.y,this.options.scrollAngleRanges))return void(this._isScrolling=!0);var i,s,a,c;if(!this.monitor.isDragging()&&this._mouseClientOffset.hasOwnProperty("x")&&e&&(i=this._mouseClientOffset.x||0,s=this._mouseClientOffset.y||0,a=o.x,c=o.y,Math.sqrt(Math.pow(Math.abs(a-i),2)+Math.pow(Math.abs(c-s),2))>(this.options.touchSlop?this.options.touchSlop:0))&&(this.moveStartSourceIds=void 0,this.actions.beginDrag(e,{clientOffset:this._mouseClientOffset,getSourceClientOffset:this.getSourceClientOffset,publishSource:!1})),!this.monitor.isDragging())return;const u=this.sourceNodes.get(this.monitor.getSourceId());this.installSourceNodeRemovalObserver(u),this.actions.publishDragSource(),t.cancelable&&t.preventDefault();const d=(n||[]).map((t=>this.targetNodes.get(t))).filter((t=>!!t)),l=this.options.getDropTargetElementsAtPoint?this.options.getDropTargetElementsAtPoint(o.x,o.y,d):this.document.elementsFromPoint(o.x,o.y),g=[];for(const t in l){if(!l.hasOwnProperty(t))continue;let e=l[t];for(null!=e&&g.push(e);e;)e=e.parentElement,e&&-1===g.indexOf(e)&&g.push(e)}const v=g.filter((t=>d.indexOf(t)>-1)).map((t=>this._getDropTargetId(t))).filter((t=>!!t)).filter(((t,e,n)=>n.indexOf(t)===e));if(r)for(const t in this.targetNodes){const e=this.targetNodes.get(t);if(u&&e&&e.contains(u)&&-1===v.indexOf(t)){v.unshift(t);break}}v.reverse(),this.actions.hover(v,{clientOffset:o})},this._getDropTargetId=t=>{const e=this.targetNodes.keys();let n=e.next();for(;!1===n.done;){const r=n.value;if(t===this.targetNodes.get(r))return r;n=e.next()}},this.handleTopMoveEndCapture=t=>{this._isScrolling=!1,this.lastTargetTouchFallback=void 0,function(t){return void 0===t.buttons||0==(t.buttons&s)}(t)&&(this.monitor.isDragging()&&!this.monitor.didDrop()?(t.cancelable&&t.preventDefault(),this._mouseClientOffset={},this.uninstallSourceNodeRemovalObserver(),this.actions.drop(),this.actions.endDrag()):this.moveStartSourceIds=void 0)},this.handleCancelOnEscape=t=>{"Escape"===t.key&&this.monitor.isDragging()&&(this._mouseClientOffset={},this.uninstallSourceNodeRemovalObserver(),this.actions.endDrag())},this.options=new i(n,e),this.actions=t.getActions(),this.monitor=t.getMonitor(),this.sourceNodes=new Map,this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.targetNodes=new Map,this.listenerTypes=[],this._mouseClientOffset={},this._isScrolling=!1,this.options.enableMouseEvents&&this.listenerTypes.push(r.mouse),
this.options.enableTouchEvents&&this.listenerTypes.push(r.touch),this.options.enableKeyboardEvents&&this.listenerTypes.push(r.keyboard)}}const v=function(t,e={},n={}){return new g(t,e,n)}},42357:(t,e,n)=>{"use strict";n.d(e,{useDrag:()=>S});var r=n(6346),o=n(191701),i=n(582442),s=n(50959);function a(t){return(0,s.useMemo)((()=>t.hooks.dragSource()),[t])}function c(t){return(0,s.useMemo)((()=>t.hooks.dragPreview()),[t])}var u=n(398789),h=n(71982),d=n(312406);class l{receiveHandlerId(t){this.handlerId!==t&&(this.handlerId=t,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(t){this.dragSourceOptionsInternal=t}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(t){this.dragPreviewOptionsInternal=t}reconnect(){const t=this.reconnectDragSource();this.reconnectDragPreview(t)}reconnectDragSource(){const t=this.dragSource,e=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return e&&this.disconnectDragSource(),this.handlerId?t?(e&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=t,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,t,this.dragSourceOptions)),e):(this.lastConnectedDragSource=t,e):e}reconnectDragPreview(t=!1){const e=this.dragPreview,n=t||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();n&&this.disconnectDragPreview(),this.handlerId&&(e?n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=e,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,e,this.dragPreviewOptions)):this.lastConnectedDragPreview=e)}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!(0,u.shallowEqual)(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!(0,u.shallowEqual)(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(t){this.hooks=(0,d.wrapConnectorHooks)({dragSource:(t,e)=>{this.clearDragSource(),
this.dragSourceOptions=e||null,(0,h.isRef)(t)?this.dragSourceRef=t:this.dragSourceNode=t,this.reconnectDragSource()},dragPreview:(t,e)=>{this.clearDragPreview(),this.dragPreviewOptions=e||null,(0,h.isRef)(t)?this.dragPreviewRef=t:this.dragPreviewNode=t,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=t}}var g=n(284570),v=n(474401);let p=!1,f=!1;class m{receiveHandlerId(t){this.sourceId=t}getHandlerId(){return this.sourceId}canDrag(){(0,r.invariant)(!p,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return p=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{p=!1}}isDragging(){if(!this.sourceId)return!1;(0,r.invariant)(!f,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return f=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{f=!1}}subscribeToStateChange(t,e){return this.internalMonitor.subscribeToStateChange(t,e)}isDraggingSource(t){return this.internalMonitor.isDraggingSource(t)}isOverTarget(t,e){return this.internalMonitor.isOverTarget(t,e)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(t){return this.internalMonitor.subscribeToOffsetChange(t)}canDragSource(t){return this.internalMonitor.canDragSource(t)}canDropOnTarget(t){return this.internalMonitor.canDropOnTarget(t)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.sourceId=null,this.internalMonitor=t.getMonitor()}}var w=n(887408);class b{beginDrag(){const t=this.spec,e=this.monitor;let n=null;return n="object"==typeof t.item?t.item:"function"==typeof t.item?t.item(e):{},null!=n?n:null}canDrag(){const t=this.spec,e=this.monitor;return"boolean"==typeof t.canDrag?t.canDrag:"function"!=typeof t.canDrag||t.canDrag(e)}isDragging(t,e){const n=this.spec,r=this.monitor,{isDragging:o}=n;return o?o(r):e===t.getSourceId()}endDrag(){const t=this.spec,e=this.monitor,n=this.connector,{end:r}=t
;r&&r(e.getItem(),e),n.reconnect()}constructor(t,e,n){this.spec=t,this.monitor=e,this.connector=n}}function y(t,e,n){const o=(0,g.useDragDropManager)(),i=function(t,e,n){const r=(0,s.useMemo)((()=>new b(t,e,n)),[e,n]);return(0,s.useEffect)((()=>{r.spec=t}),[t]),r}(t,e,n),a=function(t){return(0,s.useMemo)((()=>{const e=t.type;return(0,r.invariant)(null!=e,"spec.type must be defined"),e}),[t])}(t);(0,v.useIsomorphicLayoutEffect)((function(){if(null!=a){const[t,r]=(0,w.registerSource)(a,i,o);return e.receiveHandlerId(t),n.receiveHandlerId(t),r}}),[o,e,n,i,a])}function S(t,e){const n=(0,i.useOptionalFactory)(t,e);(0,r.invariant)(!n.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");const u=function(){const t=(0,g.useDragDropManager)();return(0,s.useMemo)((()=>new m(t)),[t])}(),h=function(t,e){const n=(0,g.useDragDropManager)(),r=(0,s.useMemo)((()=>new l(n.getBackend())),[n]);return(0,v.useIsomorphicLayoutEffect)((()=>(r.dragSourceOptions=t||null,r.reconnect(),()=>r.disconnectDragSource())),[r,t]),(0,v.useIsomorphicLayoutEffect)((()=>(r.dragPreviewOptions=e||null,r.reconnect(),()=>r.disconnectDragPreview())),[r,e]),r}(n.options,n.previewOptions);return y(n,u,h),[(0,o.useCollectedProps)(n.collect,u,h),a(h),c(h)]}},85783:(t,e,n)=>{"use strict";n.d(e,{useDragLayer:()=>s});var r=n(50959),o=n(76121),i=n(284570);function s(t){const e=(0,i.useDragDropManager)().getMonitor(),[n,s]=(0,o.useCollector)(e,t);return(0,r.useEffect)((()=>e.subscribeToOffsetChange(s))),(0,r.useEffect)((()=>e.subscribeToStateChange(s))),n}}}]);