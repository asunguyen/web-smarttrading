(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[32077],{281026:e=>{e.exports={container:"container-WDZ0PRNh","container-xxsmall":"container-xxsmall-WDZ0PRNh","container-xsmall":"container-xsmall-WDZ0PRNh","container-small":"container-small-WDZ0PRNh","container-medium":"container-medium-WDZ0PRNh","container-large":"container-large-WDZ0PRNh","intent-default":"intent-default-WDZ0PRNh",focused:"focused-WDZ0PRNh",readonly:"readonly-WDZ0PRNh",disabled:"disabled-WDZ0PRNh","with-highlight":"with-highlight-WDZ0PRNh",grouped:"grouped-WDZ0PRNh","adjust-position":"adjust-position-WDZ0PRNh","first-row":"first-row-WDZ0PRNh","first-col":"first-col-WDZ0PRNh",stretch:"stretch-WDZ0PRNh","font-size-medium":"font-size-medium-WDZ0PRNh","font-size-large":"font-size-large-WDZ0PRNh","no-corner-top-left":"no-corner-top-left-WDZ0PRNh","no-corner-top-right":"no-corner-top-right-WDZ0PRNh","no-corner-bottom-right":"no-corner-bottom-right-WDZ0PRNh","no-corner-bottom-left":"no-corner-bottom-left-WDZ0PRNh","size-xxsmall":"size-xxsmall-WDZ0PRNh","size-xsmall":"size-xsmall-WDZ0PRNh","size-small":"size-small-WDZ0PRNh","size-medium":"size-medium-WDZ0PRNh","size-large":"size-large-WDZ0PRNh","intent-success":"intent-success-WDZ0PRNh","intent-warning":"intent-warning-WDZ0PRNh","intent-danger":"intent-danger-WDZ0PRNh","intent-primary":"intent-primary-WDZ0PRNh","border-none":"border-none-WDZ0PRNh","border-thin":"border-thin-WDZ0PRNh","border-thick":"border-thick-WDZ0PRNh",highlight:"highlight-WDZ0PRNh",shown:"shown-WDZ0PRNh"}},7236:e=>{e.exports={"inner-slot":"inner-slot-W53jtLjw",interactive:"interactive-W53jtLjw",icon:"icon-W53jtLjw","inner-middle-slot":"inner-middle-slot-W53jtLjw","before-slot":"before-slot-W53jtLjw","after-slot":"after-slot-W53jtLjw"}},330930:e=>{e.exports={input:"input-RUSovanF","size-xxsmall":"size-xxsmall-RUSovanF","size-xsmall":"size-xsmall-RUSovanF","size-small":"size-small-RUSovanF","size-medium":"size-medium-RUSovanF","size-large":"size-large-RUSovanF","with-start-slot":"with-start-slot-RUSovanF","with-end-slot":"with-end-slot-RUSovanF"}},705734:e=>{e.exports={dialog:"dialog-aRAWUDhF",rounded:"rounded-aRAWUDhF",shadowed:"shadowed-aRAWUDhF",fullscreen:"fullscreen-aRAWUDhF",darker:"darker-aRAWUDhF",backdrop:"backdrop-aRAWUDhF"}},496302:e=>{e.exports={container:"container-zLVm6B4t",content:"content-zLVm6B4t",arrowHolder:"arrowHolder-zLVm6B4t","arrowHolder--below":"arrowHolder--below-zLVm6B4t","arrowHolder--above":"arrowHolder--above-zLVm6B4t","arrowHolder--before":"arrowHolder--before-zLVm6B4t","arrowHolder--after":"arrowHolder--after-zLVm6B4t","arrowHolder--above-fix":"arrowHolder--above-fix-zLVm6B4t","arrowHolder--before-rtl-fix":"arrowHolder--before-rtl-fix-zLVm6B4t","arrowHolder--after-ltr-fix":"arrowHolder--after-ltr-fix-zLVm6B4t",label:"label-zLVm6B4t",closeButton:"closeButton-zLVm6B4t"}},301792:(e,t,n)=>{"use strict";n.d(t,{ControlGroupContext:()=>r});const r=n(50959).createContext({isGrouped:!1,cellState:{isTop:!0,isRight:!0,isBottom:!0,isLeft:!0}})},307754:(e,t,n)=>{"use strict";function r(e){let t=0
;return e.isTop&&e.isLeft||(t+=1),e.isTop&&e.isRight||(t+=2),e.isBottom&&e.isLeft||(t+=8),e.isBottom&&e.isRight||(t+=4),t}n.d(t,{getGroupCellRemoveRoundBorders:()=>r})},452395:(e,t,n)=>{"use strict";n.d(t,{ControlSkeleton:()=>D,InputClasses:()=>f});var r=n(50959),o=n(497754),i=n(650151),a=n(662929),s=n(8626),l=n(301792),u=n(307754);var c=n(281026),d=n.n(c);function h(e){let t="";return 0!==e&&(1&e&&(t=o(t,d()["no-corner-top-left"])),2&e&&(t=o(t,d()["no-corner-top-right"])),4&e&&(t=o(t,d()["no-corner-bottom-right"])),8&e&&(t=o(t,d()["no-corner-bottom-left"]))),t}function m(e,t,n,r){const{removeRoundBorder:i,className:a,intent:s="default",borderStyle:l="thin",size:c,highlight:m,disabled:p,readonly:f,stretch:g,noReadonlyStyles:v,isFocused:D}=e,y=h(null!=i?i:(0,u.getGroupCellRemoveRoundBorders)(n));return o(d().container,d()[`container-${c}`],d()[`intent-${s}`],d()[`border-${l}`],c&&d()[`size-${c}`],y,m&&d()["with-highlight"],p&&d().disabled,f&&!v&&d().readonly,D&&d().focused,g&&d().stretch,t&&d().grouped,!r&&d()["adjust-position"],n.isTop&&d()["first-row"],n.isLeft&&d()["first-col"],a)}function p(e,t,n){const{highlight:r,highlightRemoveRoundBorder:i}=e;if(!r)return d().highlight;const a=h(null!=i?i:(0,u.getGroupCellRemoveRoundBorders)(t));return o(d().highlight,d().shown,d()[`size-${n}`],a)}const f={FontSizeMedium:(0,i.ensureDefined)(d()["font-size-medium"]),FontSizeLarge:(0,i.ensureDefined)(d()["font-size-large"])},g={passive:!1};function v(e,t){const{style:n,id:o,role:i,onFocus:u,onBlur:c,onMouseOver:d,onMouseOut:h,onMouseDown:f,onMouseUp:v,onKeyDown:D,onClick:y,tabIndex:w,startSlot:b,middleSlot:H,endSlot:k,onWheel:S,onWheelNoPassive:W=null,size:M}=e,{isGrouped:C,cellState:x,disablePositionAdjustment:N=!1}=(0,r.useContext)(l.ControlGroupContext),E=function(e,t=null,n){const o=(0,r.useRef)(null),i=(0,r.useRef)(null),a=(0,r.useCallback)((()=>{if(null===o.current||null===i.current)return;const[e,t,n]=i.current;null!==t&&o.current.addEventListener(e,t,n)}),[]),s=(0,r.useCallback)((()=>{if(null===o.current||null===i.current)return;const[e,t,n]=i.current;null!==t&&o.current.removeEventListener(e,t,n)}),[]),l=(0,r.useCallback)((e=>{s(),o.current=e,a()}),[]);return(0,r.useEffect)((()=>(i.current=[e,t,n],a(),s)),[e,t,n]),l}("wheel",W,g);return r.createElement("span",{style:n,id:o,role:i,className:m(e,C,x,N),tabIndex:w,ref:(0,a.useMergedRefs)([t,E]),onFocus:u,onBlur:c,onMouseOver:d,onMouseOut:h,onMouseDown:f,onMouseUp:v,onKeyDown:D,onClick:y,onWheel:S,...(0,s.filterDataProps)(e),...(0,s.filterAriaProps)(e)},b,H,k,r.createElement("span",{className:p(e,x,M)}))}v.displayName="ControlSkeleton";const D=r.forwardRef(v)},514420:(e,t,n)=>{"use strict";n.d(t,{AfterSlot:()=>d,BeforeSlot:()=>s,EndSlot:()=>c,MiddleSlot:()=>u,StartSlot:()=>l});var r=n(50959),o=n(497754),i=n(7236),a=n.n(i);function s(e){const{className:t,children:n}=e;return r.createElement("span",{className:o(a()["before-slot"],t)},n)}function l(e){const{className:t,interactive:n=!0,icon:i=!1,children:s}=e;return r.createElement("span",{
className:o(a()["inner-slot"],n&&a().interactive,i&&a().icon,t)},s)}function u(e){const{className:t,children:n}=e;return r.createElement("span",{className:o(a()["inner-slot"],a()["inner-middle-slot"],t)},n)}function c(e){const{className:t,interactive:n=!0,icon:i=!1,children:s}=e;return r.createElement("span",{className:o(a()["inner-slot"],n&&a().interactive,i&&a().icon,t)},s)}function d(e){const{className:t,children:n}=e;return r.createElement("span",{className:o(a()["after-slot"],t)},n)}},142135:(e,t,n)=>{"use strict";n.d(t,{Input:()=>r.Input,InputControl:()=>r.InputControl});var r=n(314551)},314551:(e,t,n)=>{"use strict";n.d(t,{Input:()=>v,InputControl:()=>D});var r=n(50959),o=n(497754),i=n(8626),a=n(763341),s=n(151057),l=n(662929),u=n(207357),c=n(405964),d=n(633750),h=n(452395),m=n(514420),p=n(330930),f=n.n(p);function g(e){return!(0,i.isAriaAttribute)(e)&&!(0,i.isDataAttribute)(e)}function v(e){const{id:t,title:n,role:a,tabIndex:s,placeholder:l,name:u,type:c,value:d,defaultValue:p,draggable:v,autoComplete:D,autoFocus:y,maxLength:w,min:b,max:H,step:k,pattern:S,inputMode:W,onSelect:M,onFocus:C,onBlur:x,onKeyDown:N,onKeyUp:E,onKeyPress:R,onChange:z,onDragStart:_,size:P="small",className:I,inputClassName:O,disabled:L,readonly:B,containerTabIndex:F,startSlot:T,endSlot:U,reference:j,containerReference:A,onContainerFocus:Z,...V}=e,G=(0,i.filterProps)(V,g),K={...(0,i.filterAriaProps)(V),...(0,i.filterDataProps)(V),id:t,title:n,role:a,tabIndex:s,placeholder:l,name:u,type:c,value:d,defaultValue:p,draggable:v,autoComplete:D,autoFocus:y,maxLength:w,min:b,max:H,step:k,pattern:S,inputMode:W,onSelect:M,onFocus:C,onBlur:x,onKeyDown:N,onKeyUp:E,onKeyPress:R,onChange:z,onDragStart:_};return r.createElement(h.ControlSkeleton,{...G,disabled:L,readonly:B,tabIndex:F,className:o(f().container,I),size:P,ref:A,onFocus:Z,startSlot:T,middleSlot:r.createElement(m.MiddleSlot,null,r.createElement("input",{...K,className:o(f().input,f()[`size-${P}`],O,T&&f()["with-start-slot"],U&&f()["with-end-slot"]),disabled:L,readOnly:B,ref:j})),endSlot:U})}function D(e){e=(0,u.useControl)(e);const{disabled:t,autoSelectOnFocus:n,tabIndex:o=0,onFocus:i,onBlur:h,reference:m,containerReference:p=null}=e,f=(0,r.useRef)(null),g=(0,r.useRef)(null),[D,y]=(0,c.useFocus)(),w=t?void 0:D?-1:o,b=t?void 0:D?o:-1,{isMouseDown:H,handleMouseDown:k,handleMouseUp:S}=(0,d.useIsMouseDown)(),W=(0,a.createSafeMulticastEventHandler)(y.onFocus,(function(e){n&&!H.current&&(0,s.selectAllContent)(e.currentTarget)}),i),M=(0,a.createSafeMulticastEventHandler)(y.onBlur,h),C=(0,r.useCallback)((e=>{f.current=e,m&&("function"==typeof m&&m(e),"object"==typeof m&&(m.current=e))}),[f,m]);return r.createElement(v,{...e,isFocused:D,containerTabIndex:w,tabIndex:b,onContainerFocus:function(e){g.current===e.target&&null!==f.current&&f.current.focus()},onFocus:W,onBlur:M,reference:C,containerReference:(0,l.useMergedRefs)([g,p]),onMouseDown:k,onMouseUp:S})}},600234:(e,t,n)=>{"use strict";n.d(t,{Dialog:()=>u});var r=n(50959),o=n(497754),i=n(692822),a=n(351290),s=n(8626),l=n(705734)
;class u extends r.PureComponent{constructor(){super(...arguments),this._manager=new a.OverlapManager,this._handleSlot=e=>{this._manager.setContainer(e)}}render(){const{rounded:e=!0,shadowed:t=!0,fullscreen:n=!1,darker:a=!1,className:u,backdrop:c,containerTabIndex:d=-1}=this.props,h=o(u,l.dialog,e&&l.rounded,t&&l.shadowed,n&&l.fullscreen,a&&l.darker),m=(0,s.filterDataProps)(this.props),p=this.props.style?{...this._createStyles(),...this.props.style}:this._createStyles();return r.createElement(r.Fragment,null,r.createElement(i.SlotContext.Provider,{value:this._manager},c&&r.createElement("div",{onClick:this.props.onClickBackdrop,className:l.backdrop}),r.createElement("div",{...m,className:h,style:p,ref:this.props.reference,onFocus:this.props.onFocus,onMouseDown:this.props.onMouseDown,onMouseUp:this.props.onMouseUp,onClick:this.props.onClick,onKeyDown:this.props.onKeyDown,tabIndex:d,"aria-label":this.props.containerAriaLabel},this.props.children)),r.createElement(i.Slot,{reference:this._handleSlot}))}_createStyles(){const{bottom:e,left:t,width:n,right:r,top:o,zIndex:i,height:a}=this.props;return{bottom:e,left:t,right:r,top:o,zIndex:i,maxWidth:n,height:a}}}},207357:(e,t,n)=>{"use strict";n.d(t,{useControl:()=>i});var r=n(763341),o=n(405964);function i(e){const{onFocus:t,onBlur:n,intent:i,highlight:a,disabled:s}=e,[l,u]=(0,o.useFocus)(void 0,s),c=(0,r.createSafeMulticastEventHandler)(s?void 0:u.onFocus,t),d=(0,r.createSafeMulticastEventHandler)(s?void 0:u.onBlur,n);return{...e,intent:i||(l?"primary":"default"),highlight:null!=a?a:l,onFocus:c,onBlur:d}}},405964:(e,t,n)=>{"use strict";n.d(t,{useFocus:()=>o});var r=n(50959);function o(e,t){const[n,o]=(0,r.useState)(!1);(0,r.useEffect)((()=>{t&&n&&o(!1)}),[t,n]);const i={onFocus:(0,r.useCallback)((function(t){void 0!==e&&e.current!==t.target||o(!0)}),[e]),onBlur:(0,r.useCallback)((function(t){void 0!==e&&e.current!==t.target||o(!1)}),[e])};return[n,i]}},633750:(e,t,n)=>{"use strict";n.d(t,{useIsMouseDown:()=>o});var r=n(50959);function o(){const e=(0,r.useRef)(!1),t=(0,r.useCallback)((()=>{e.current=!0}),[e]),n=(0,r.useCallback)((()=>{e.current=!1}),[e]);return{isMouseDown:e,handleMouseDown:t,handleMouseUp:n}}},662929:(e,t,n)=>{"use strict";n.d(t,{useMergedRefs:()=>i});var r=n(50959),o=n(551080);function i(e){return(0,r.useCallback)((0,o.mergeRefs)(e),e)}},940194:(e,t,n)=>{"use strict";function r(e,t,n,r,o){function i(o){if(e>o.timeStamp)return;const i=o.target;void 0!==n&&null!==t&&null!==i&&i.ownerDocument===r&&(t.contains(i)||n(o))}return o.click&&r.addEventListener("click",i,!1),o.mouseDown&&r.addEventListener("mousedown",i,!1),o.touchEnd&&r.addEventListener("touchend",i,!1),o.touchStart&&r.addEventListener("touchstart",i,!1),()=>{r.removeEventListener("click",i,!1),r.removeEventListener("mousedown",i,!1),r.removeEventListener("touchend",i,!1),r.removeEventListener("touchstart",i,!1)}}n.d(t,{addOutsideEventListener:()=>r})},385806:(e,t,n)=>{"use strict";n.d(t,{useOutsideEvent:()=>i});var r=n(50959),o=n(940194);function i(e){
const{click:t,mouseDown:n,touchEnd:i,touchStart:a,handler:s,reference:l,ownerDocument:u=document}=e,c=(0,r.useRef)(null),d=(0,r.useRef)(new CustomEvent("timestamp").timeStamp);return(0,r.useLayoutEffect)((()=>{const e={click:t,mouseDown:n,touchEnd:i,touchStart:a},r=l?l.current:c.current;return(0,o.addOutsideEventListener)(d.current,r,s,u,e)}),[t,n,i,a,s]),l||c}},692822:(e,t,n)=>{"use strict";n.d(t,{Slot:()=>o,SlotContext:()=>i});var r=n(50959);class o extends r.Component{shouldComponentUpdate(){return!1}render(){return r.createElement("div",{style:{position:"fixed",zIndex:150,left:0,top:0},ref:this.props.reference})}}const i=r.createContext(null)},8626:(e,t,n)=>{"use strict";function r(e){return i(e,a)}function o(e){return i(e,s)}function i(e,t){const n=Object.entries(e).filter(t),r={};for(const[e,t]of n)r[e]=t;return r}function a(e){const[t,n]=e;return 0===t.indexOf("data-")&&"string"==typeof n}function s(e){return 0===e[0].indexOf("aria-")}n.d(t,{filterAriaProps:()=>o,filterDataProps:()=>r,filterProps:()=>i,isAriaAttribute:()=>s,isDataAttribute:()=>a})},151057:(e,t,n)=>{"use strict";function r(e){null!==e&&e.setSelectionRange(0,e.value.length)}n.d(t,{selectAllContent:()=>r})},551080:(e,t,n)=>{"use strict";function r(e){return t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}}function o(e){return r([e])}n.d(t,{isomorphicRef:()=>o,mergeRefs:()=>r})},58407:(e,t,n)=>{"use strict";n.d(t,{OutsideEvent:()=>o});var r=n(385806);function o(e){const{children:t,...n}=e;return t((0,r.useOutsideEvent)(n))}},351290:(e,t,n)=>{"use strict";n.d(t,{OverlapManager:()=>i,getRootOverlapManager:()=>s});var r=n(650151);class o{constructor(){this._storage=[]}add(e){this._storage.push(e)}remove(e){this._storage=this._storage.filter((t=>e!==t))}has(e){return this._storage.includes(e)}getItems(){return this._storage}}class i{constructor(e=document){this._storage=new o,this._windows=new Map,this._index=0,this._document=e,this._container=e.createDocumentFragment()}setContainer(e){const t=this._container,n=null===e?this._document.createDocumentFragment():e;!function(e,t){Array.from(e.childNodes).forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&t.appendChild(e)}))}(t,n),this._container=n}registerWindow(e){this._storage.has(e)||this._storage.add(e)}ensureWindow(e,t={position:"fixed",direction:"normal"}){const n=this._windows.get(e);if(void 0!==n)return n;this.registerWindow(e);const r=this._document.createElement("div");if(r.style.position=t.position,r.style.zIndex=this._index.toString(),r.dataset.id=e,void 0!==t.index){const e=this._container.childNodes.length;if(t.index>=e)this._container.appendChild(r);else if(t.index<=0)this._container.insertBefore(r,this._container.firstChild);else{const e=this._container.childNodes[t.index];this._container.insertBefore(r,e)}}else"reverse"===t.direction?this._container.insertBefore(r,this._container.firstChild):this._container.appendChild(r);return this._windows.set(e,r),++this._index,r}unregisterWindow(e){this._storage.remove(e);const t=this._windows.get(e)
;void 0!==t&&(null!==t.parentElement&&t.parentElement.removeChild(t),this._windows.delete(e))}getZindex(e){const t=this.ensureWindow(e);return parseInt(t.style.zIndex||"0")}moveToTop(e){if(this.getZindex(e)!==this._index){this.ensureWindow(e).style.zIndex=(++this._index).toString()}}removeWindow(e){this.unregisterWindow(e)}}const a=new WeakMap;function s(e=document){const t=e.getElementById("overlap-manager-root");if(null!==t)return(0,r.ensureDefined)(a.get(t));{const t=new i(e),n=function(e){const t=e.createElement("div");return t.style.position="absolute",t.style.zIndex=150..toString(),t.style.top="0px",t.style.left="0px",t.id="overlap-manager-root",t}(e);return a.set(n,t),t.setContainer(n),e.body.appendChild(n),t}}},763341:(e,t,n)=>{"use strict";function r(...e){return t=>{for(const n of e)void 0!==n&&n(t)}}n.d(t,{createSafeMulticastEventHandler:()=>r})},531327:(e,t,n)=>{"use strict";function r(e){return o()?0:i()?45:Math.min(Math.max(e,45),450)}n.d(t,{getWidgetBarPadding:()=>r,isWidgetBarFullscreen:()=>o});const o=()=>!window.matchMedia("screen and (min-width: 768px)").matches,i=()=>!window.matchMedia("screen and (min-width: 1280px)").matches},575658:(e,t,n)=>{"use strict";n.d(t,{setFixedBodyState:()=>s});var r=n(76107),o=n(531327);let i=0,a=!1;function s(e){const{body:t}=document,n=t.querySelector(".widgetbar-wrap");if(e&&1==++i){const e=(0,r.getCSSProperty)(t,"overflow"),o=(0,r.getCSSPropertyNumericValue)(t,"padding-right");"hidden"!==e.toLowerCase()&&t.scrollHeight>t.offsetHeight&&((0,r.setStyle)(n,"right",`${(0,r.getScrollbarWidth)()}px`),t.style.paddingRight=`${o+(0,r.getScrollbarWidth)()}px`,a=!0),t.classList.add("i-no-scroll")}else if(!e&&i>0&&0==--i&&(t.classList.remove("i-no-scroll"),a)){(0,r.setStyle)(n,"right","0px");let e=0;e=n?(0,o.getWidgetBarPadding)((0,r.getContentWidth)(n)):0,t.scrollHeight<=t.clientHeight&&(e-=(0,r.getScrollbarWidth)()),t.style.paddingRight=(e<0?0:e)+"px",a=!1}}},322654:(e,t,n)=>{"use strict";n.d(t,{DialogsOpenerManager:()=>r,dialogsOpenerManager:()=>o});class r{constructor(){this._storage=new Map}setAsOpened(e,t){this._storage.set(e,t)}setAsClosed(e){this._storage.delete(e)}isOpened(e){return this._storage.has(e)}getDialogPayload(e){return this._storage.get(e)}}const o=new r},368337:(e,t,n)=>{"use strict";n.d(t,{makeOverlapable:()=>i});var r=n(50959),o=n(636098);function i(e){return class extends r.PureComponent{render(){const{isOpened:t,root:n}=this.props;if(!t)return null;const i=r.createElement(e,{...this.props,zIndex:150});return"parent"===n?i:r.createElement(o.Portal,null,i)}}}},636098:(e,t,n)=>{"use strict";n.d(t,{Portal:()=>l,PortalContext:()=>u});var r=n(50959),o=n(500962),i=n(925931),a=n(351290),s=n(692822);class l extends r.PureComponent{constructor(){super(...arguments),this._uuid=(0,i.nanoid)()}componentWillUnmount(){this._manager().removeWindow(this._uuid)}render(){const e=this._manager().ensureWindow(this._uuid,this.props.layerOptions);return e.style.top=this.props.top||"",e.style.bottom=this.props.bottom||"",e.style.left=this.props.left||"",
e.style.right=this.props.right||"",e.style.pointerEvents=this.props.pointerEvents||"",this.props.className&&e.classList.add(this.props.className),this.props["aria-hidden"]&&e.setAttribute("aria-hidden","true"),o.createPortal(r.createElement(u.Provider,{value:this},this.props.children),e)}moveToTop(){this._manager().moveToTop(this._uuid)}_manager(){return null===this.context?(0,a.getRootOverlapManager)():this.context}}l.contextType=s.SlotContext;const u=r.createContext(null)},12173:(e,t,n)=>{"use strict";n.d(t,{TooltipWidget:()=>c,TooltipWizard:()=>u});var r=n(50959),o=n(497754),i=n(83436),a=n(636098),s=n(333765),l=n(496302);class u extends r.PureComponent{render(){const{children:e,popperChildrenProps:t,onClose:n,reference:i,containerClassName:s,arrowClassName:u}=this.props;return r.createElement(a.Portal,null,r.createElement("div",{ref:i},r.createElement(c,{reference:t.ref,style:t.style,arrowClassName:o(l.arrowHolder,this._getArrowDirectionClass(),u),arrowReference:t.arrowProps.ref,arrowStyle:t.arrowProps.style,"data-placement":t.placement,onClose:n,containerClassName:s},e)))}_getArrowDirectionClass(){const{popperChildrenProps:e}=this.props;switch(e.placement){case"left":case"left-start":return o(l["arrowHolder--after"],l["arrowHolder--after-ltr-fix"]);case"top":return o(l["arrowHolder--above"],l["arrowHolder--above-fix"]);case"bottom":case"bottom-start":case"bottom-end":return l["arrowHolder--below"];default:return o(l["arrowHolder--before"],l["arrowHolder--before-rtl-fix"])}}}function c(e){const{className:t,containerClassName:n,contentClassName:a,reference:u,style:c,arrow:d=!0,arrowClassName:h,arrowReference:m,onClose:p,arrowStyle:f,children:g,...v}=e;return r.createElement("div",{...v,className:t,ref:u,style:c},d&&r.createElement("div",{className:h,ref:m,style:f}),r.createElement("div",{className:o(l.container,n)},r.createElement("div",{className:o(l.content,a)},g),p&&r.createElement(i.Icon,{className:l.closeButton,icon:s,onClick:p})))}},176894:e=>{e.exports={dialog:"dialog-UGdC69sw",dialogInner:"dialogInner-UGdC69sw",titleWrapper:"titleWrapper-UGdC69sw",title:"title-UGdC69sw",infoHint:"infoHint-UGdC69sw",form:"form-UGdC69sw",inputWrapper:"inputWrapper-UGdC69sw",input:"input-UGdC69sw",hint:"hint-UGdC69sw",error:"error-UGdC69sw"}},880880:(e,t,n)=>{"use strict";n.r(t),n.d(t,{showChangeIntervalDialog:()=>H});var r=n(50959),o=n(500962),i=n(497754),a=n.n(i),s=n(444372),l=n(142135),u=n(452395),c=n(583912),d=n(500745),h=n(83436),m=n(785508);const p=s.t(null,void 0,n(252143)),f=s.t(null,void 0,n(135668));function g(e){const{className:t,isSecondsEnabled:n}=e;return r.createElement(h.Icon,{icon:m,className:a()("apply-common-tooltip",t),title:n?f:p})}var v=n(731042),D=n(223699);var y=n(176894);function w(e){const{initVal:t,selectOnInit:o,onClose:i}=e,h=(0,r.useRef)(null),[m,p]=(0,r.useState)(t.toUpperCase()),f=(0,r.useMemo)((()=>(0,v.parseIntervalValue)(m)),[m]),w=function(e,t){return(0,r.useMemo)((()=>{if(t.error||!(0,v.intervalIsSupported)(e))return!1;const n=D.Interval.normalize(e);return null!==n&&(0,
v.isResolutionMultiplierValid)(n)}),[e,t])}(m,f),b=(0,r.useMemo)((()=>{if(!w)return null;const e=f.qty+(f.unit||"");return(0,v.getTranslatedResolutionModel)(e).hint}),[w,f]);return(0,r.useLayoutEffect)((()=>{var e,t;o?null===(e=h.current)||void 0===e||e.select():null===(t=h.current)||void 0===t||t.focus()}),[o]),r.createElement(d.PopupDialog,{className:y.dialog,"data-dialog-name":"change-interval-dialog",isOpened:!0,onClickOutside:i,onFocus:function(){var e;null===(e=h.current)||void 0===e||e.focus()},onKeyDown:function(e){27===e.keyCode&&(null==i||i())}},r.createElement("div",{className:y.dialogInner},r.createElement("div",{className:y.titleWrapper},r.createElement("div",{className:y.title},s.t(null,void 0,n(699374))),r.createElement(g,{className:y.infoHint,isSecondsEnabled:(0,v.isSecondsEnabled)()})),r.createElement("form",{className:y.form,onSubmit:function(e){e.preventDefault();const t=c.linking.interval.value(),n=D.Interval.normalize(m);n&&t!==n&&w&&(r=n,(0,v.setLastUsedResolution)(r),c.linking.interval.setValue(r));var r;null==i||i()}},r.createElement(l.InputControl,{className:a()(y.inputWrapper,u.InputClasses.FontSizeLarge),inputClassName:y.input,type:"text",size:"large",reference:h,value:m,maxLength:8,intent:w?void 0:"danger",onChange:function(e){const{value:t}=e.target;p(t.toUpperCase())}})),w?r.createElement("div",{className:y.hint},b):r.createElement("div",{className:a()(y.hint,y.error)},s.t(null,void 0,n(972572)))))}var b=n(322654);function H(e){if(b.dialogsOpenerManager.isOpened("ChangeIntervalDialog")||b.dialogsOpenerManager.isOpened("SymbolSearch"))return;const t=document.createElement("div"),{initVal:n,selectOnInit:i,onClose:a}=e,s=r.createElement(w,{initVal:n,selectOnInit:i,onClose:function(){o.unmountComponentAtNode(t),b.dialogsOpenerManager.setAsClosed("ChangeIntervalDialog"),null==a||a()}});o.render(s,t),b.dialogsOpenerManager.setAsOpened("ChangeIntervalDialog")}},333765:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>'},785508:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M8 8.5h1.5V14"/><circle fill="currentColor" cx="9" cy="5" r="1"/><path stroke="currentColor" d="M16.5 9a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"/></svg>'},925931:(e,t,n)=>{"use strict";n.d(t,{nanoid:()=>r});let r=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),"")},972572:e=>{e.exports={ar:["لا يمكن تطبيقه"],ca_ES:["No aplicable"],cs:["Nelze použít"],de:["Nicht anwendbar"],el:["Μη εφαρμόσιμο"],en:"Not applicable",es:["No aplicable"],fa:["غیر قابل قبول"],fr:["Non applicable"],he_IL:["בלתי קביל"],hu_HU:["Nem alkalmazható"],id_ID:["Tidak dapat diterapkan"],it:["Non applicabile"],ja:["適用できません"],ko:["쓸 수 없음"],ms_MY:["Tidak berkenaan"],
nl_NL:["Niet van toepassingen"],pl:["Nie dotyczy"],pt:["Não aplicável"],ro:"Not applicable",ru:["Не поддерживается"],sv:["Ej applicerbar"],th:["ไม่สามารถใช้ได้"],tr:["Uygun Değil"],vi:["Không áp dụng được"],zh:["不适用"],zh_TW:["不適用"]}},252143:e=>{e.exports={ar:["اكتب رقم الفاصل الزمني للرسم البياني لدقيقة (مثلا أكتب رقم 5 إذا كان الرسم البياني لخمس دقائق). أو أكتب رقم وإضافة حرف بعد ك حرف الـ H (للساعة)، و حرف الـ D (لليوم)، و حرف الـW (للأسبوع)، و حرف الـ M (للشهر) مثلاً (D أو 2H)."],ca_ES:["Escriviu el número d'interval per a gràfics de minuts (és a dir, 5 si serà un gràfic de cinc minuts). O número més lletra per a H (per hora), D (diari), S (setmanal), M (mensual) intervals (es a dir, D o 2H)."],cs:"Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",de:["Geben Sie die Intervall-Nummer für Minuten-Charts ein (z.B. 5, wenn es sich um einen Fünf-Minuten-Chart handelt). Oder Zahl plus Buchstabe für H (stündlich), D (täglich), W (wöchentlich), M (monatlich) Intervalle (d.h. D oder 2H)"],el:"Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",en:"Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",es:["Escriba el número de intervalo para gráficos de minutos (es decir, 5 si va a ser un gráfico de cinco minutos). O número más letra para H (por hora), D (diario), S (semanal), M (mensual) intervalos (es decir, D o 2H)"],fa:"Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",fr:["Tapez le numéro d'intervalle pour les diagrammes de minutes (c'est-à-dire 5 si le graphique doit être de cinq minutes). Ou un nombre plus une lettre pour les intervalles H (horaires), D (journaliers), W (hebdomadaires), M (mensuels) (c'est-à-dire D ou 2H)"],he_IL:["הקלד את מספר האינטרוול  לגרף דקה (כלומר, 5 במידה וזה גרף חמש דקות). או מספר פלוס אות H (לשעה), D (יום), W (שבוע) M (חודש) אינטרוולים. (כלומר D ליום או 2H ל2שעות)"],hu_HU:"Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",id_ID:["Ketik angka interval untuk chart menit (cth: 5 untuk chart lima menit). Atau tanda plus untuk interval H (Jam), D (Harian), W (Mingguan), M (Bulanan) (cth: D atau 2H)."],it:["Scrivi il numero di minuti del timeframe desiderato (ad esempio, scrivi 5 se vuoi il grafico a 5 minuti). Altrimenti aggiungi la lettera per gli altri timeframe: 'H' per l'orario, 'D' per il giornaliero, 'W' per il settimanale, 'M' per il mensile (ad esempio, puoi scrivere 'D' o '2H')"],
ja:["分足チャートの分数を入力します（5分足チャートの場合であれば5）。他の時間足の場合には、時間の数値に続けて文字（H (時間)、D (日)、W (週)、M (月)）を入力して下さい（例．D や 2H）。"],ko:["분 차트에 대한 인터벌 숫자를 타이핑하십시오 (보기: 5분 차트는 5). 또는 숫자와 함께 H (시간), D(날), W(주), M(달) 인터벌값을 넣으십시오 (보기: D 또는 2H)"],ms_MY:["Masukkan angka selang masa untuk carta minit (contohnya seperti 5 jika anda perlukan carta 5 minit). Atau nombor dengan abjad untuk J (Jam), H (Harian), M (Mingguan), B (Bulanan) (contoh H atau 2j)"],nl_NL:"Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",pl:["Wprowadź wybraną wartość liczbową interwału dla wykresów minutowych (np. wartość 5 dla wykresu o interwale 5 minutowym) bądź wartość liczbową i/lub jedną z liter: H (interwał godzinny), D (dzienny), W (tygodniowy), M (miesięczny), czyli np. D, 2H, itd."],pt:["Digite o número de intervalo para gráficos de minutos (ou seja, cinco para um gráfico de cinco minutos). Ou número mais a letra para os intervalos H (Por hora), D (Diário), S (Semanal), M (Mensal) (ou seja, D ou 2H)"],ro:"Type the interval number for minute charts (i.e. 5 if it is going to be a five minute chart). Or number plus letter for H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",ru:["Введите нужное число для минутных графиков (например, 5 если нужен 5-минутный график), или число и букву для соответствующих интервалов: H (часы), D (дни), W (недели), M (месяцы), например, D или 2H"],sv:["Skriv intervallnumret för minutdiagram (dvs 5 om det ska vara ett femminuters diagram). Eller nummer plus bokstav för H (Timmars), D (Dag), W (Vecko), M (Månads) intervaller (dvs D eller 2H)"],th:["พิมพ์ช่วงเวลาในหน่วยของชาร์ตนาที (ตัวอย่างเช่น พิมพ์ 5 ก็จะแสดงชาร์ตราย 5 นาที) หรือ ตัวเลขตามด้วยอักษร H สำหรับช่วงเวลา (รายชั่วโมง) D (รายวัน) W (รายสัปดาห์) M (รายเดือน) (เช่น D หรือ 2H)"],tr:["Dakika grafikleri için aralık sayısını girin (örn beş dakikalık grafik için 5). Veya sayı artı; saat için H harfi (saatlik), D (günlük), W(haftalık), M (aylık) aralıklarını kullanın(örn D veya 2H gibi)"],vi:["Nhập số khoảng thời gian cho biểu đồ phút (ví dụ 5 nếu đó sẽ là biểu đồ năm phút). Hoặc số cộng cho chữ H (Hàng giờ), D (Hàng ngày), W (Hàng tuần), M (Hàng tháng) (ví dụ D hoặc 2H)"],zh:["在分钟图表上输入时间周期数值（即5代表5分钟的图表）。或H（小时）、D（日）、W（周）、M（月）时间周期（即D或2H）的数字加字母。"],zh_TW:["鍵入分鐘圖表的間隔時間 (如果是五分鐘圖表，則為5)。或數字加字母 H (小時)、D (日)、W (週)、M (月) 的間隔時間 (即D或2H)"]}},135668:e=>{e.exports={ar:['اكتب رقم الإطار الزمني للرسوم البيانية بالدقائق (مثلاً: 5 إذا كان إطار الرسم البياني هو 5 دقائق). أو رقم مع حروف للأطر الزمنية الأخرى: حرف "ث" للرسم البياني بإطار 1 ثانية (15 "ث" للرسم البياني 15 ثانية، إلخ)، و"س" (ساعة)، و"ي" (يوم)، و"أ" (أسبوعي)، و"ش" (شهر) (مثلاً: "ي" أو "2س")'],
ca_ES:["Introduïu el número de l'interval per als gràfics de minuts (per exemple, 5 si és un gràfic de cinc minuts). També podeu introduir un número més una lletra per aconseguir diferents intervals: S per a un gràfic d'un segon (15S correspon a un gràfic de 15 segons); H (hores), W (setmanes) o M (mesos). A continuació teniu un exemple: 1D o 2H."],cs:"Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",de:["Geben Sie die Intervallnummer für Minuten-Charts ein (d.h. 5, wenn es sich um ein Fünf-Minuten-Chart handeln soll). Oder Nummer und Buchstabe für andere Intervalle: S für 1-Sekunden-Chart (15S für 15-Sekunden-Chart, etc.), H (stündliche), D (tägliche), W (wöchentliche), M (monatliche) Intervalle (z.B. D oder 2H)"],el:"Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",en:"Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",es:["Introduzca el número del intervalo para los gráficos de minutos (por ejemplo, 5 si va a ser un gráfico de cinco minutos). También puede introducir un número, más una letra, para conseguir diferentes intervalos: S para un gráfico de 1 segundo (15S corresponde a un gráfico de 15 segundos); H (horas), W (semanas) o M (meses). A continuación se muestra un ejemplo: 1D o 2H."],fa:"Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",fr:["Tapez le numéro d'intervalle pour les graphiques en minutes (c'est-à-dire 5 s'il s'agit d'un graphique de cinq minutes). Ou un chiffre plus une lettre pour les autres intervalles: S pour 1 seconde (15S pour 15 secondes, etc.), H (horaire), D (quotidien), W (hebdomadaire), M (mensuel) (c.-à-d. D ou 2H)"],he_IL:["הקלד את מספר האינטרוול עבור גרפי דקות (כלומר 5 אם זה יהיה גרף של חמש דקות). או מספר אותיות במרווחי זמן אחרים: S בגרף שניה (15S לגרף 15 שניות וכו'), H (שעה), D (יומי), W (שבועי), M (חודשי) באינטרוולים (כלומר D או 2H)"],hu_HU:"Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",
id_ID:["Ketik angka interval untuk chart menit (cth: 5 untuk chart lima menit). Atau angka dengan huruf untuk interval lainnya: S untuk chart 1 detik (15S untuk chart 15 detik, dsb), H (Jam), D (Harian), W (Mingguan), M (Bulanan) (cth: D atau 2H)."],it:["Scrivi il numero di minuti del timeframe desiderato (ad esempio, scrivi 5 se vuoi il grafico a 5 minuti). Altrimenti aggiungi la lettera per gli altri timeframe: 'S' per i secondi, 'H' per l'orario, 'D' per il giornaliero, 'W' per il settimanale, 'M' per il mensile (ad esempio, puoi scrivere '15S', '1D' o '2H')"],ja:["分足チャートの分数を入力します（例．5分足チャートの場合であれば5）。他の時間足の場合には、時間の数値に続けて時間足を表す文字を入力して下さい: 秒足チャート (15Sは15秒チャート), H (時間), D (日), W (週), M (月)、（例．D や 2H）。"],ko:["분 차트에 대한 인터벌 숫자를 타이핑하십시오 (보기: 5분 차트는 5). 또는 숫자와 함께 S (1초, 15초는 15S 등),  H (시간), D(날), W(주), M(달) 인터벌값을 넣으십시오 (보기: D 또는 2H)"],ms_MY:["Taipkan nombor selang masa untuk carta minit (i.e. 5 jika ia merupakan carta lima minit). Atau kombinasi nombor dengan huruf bagi selang lain: selang masa s untuk carta 1 saat (15s untuk carta 15 saat, dll.), j (Jam), H (Harian), M (Mingguan), B (Bulanan) (contohnya H atau 2j)"],nl_NL:"Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",pl:["Wpisz numer interwału dla wykresów minutowych (np. 5, jeśli ma to być wykres pięciominutowy). Lub numer plus litera dla innych interwałów: S dla wykresu jednosekundowego (15S dla wykresu 15-sekundowego itd.) H (Godzinowy), D (dzienny), W (tygodniowy), M (miesięczny) (np. D lub 2H)"],pt:["Digite o número do tempo gráfico de minutos (ou seja, 5 se for um gráfico de cinco minutos). Ou número mais letra para outros intervalos: S para 1 segundo (15S para 15 segundos, etc.), H (Para Hora), D (Diário), W (Semanal), M (Mensal) intervalos (ou seja, D ou 2H)"],ro:"Type the interval number for minute charts (i.e. 5 if it's going to be a five minute chart). Or number plus letter for other intervals: S for 1 second chart (15S for 15 second chart, etc.), H (Hourly), D (Daily), W (Weekly), M (Monthly) intervals (i.e. D or 2H)",ru:["Введите нужное число для минутных графиков (например, 5, если нужен 5-минутный график). Или число и букву для других интервалов: S для 1-секундного графика (15S для 15-секундного и т. д.), H (часы), D (дни), W (недели), M (месяцы). Например, D или 2H"],sv:["Ange intervallnumret för minutdiagram (t.ex. 5 om det är ett femminutersdiagram). Eller så anger du nummer och bokstav för andra intervall: S för 1-sekundsdiagram (15S för 15-sekundersdiagram osv.), H (varje timme), D (varje dag), W (varje vecka), M (varje månad) intervaller (t.ex. D eller 2H)"],th:["พิมพ์ตัวเลขช่วงเวลาสำหรับชาร์ตรายนาที (ตัวอย่าง 5 ถ้าต้องการชาร์ตรายห้านาที) หรือตัวเลขบวกตัวอักษรสำหรับช่วงเวลาอื่นๆ: S สำหรับชาร์ตราย 1 วินาที (15S สำหรับชาร์ตราย 15 วินาที เป็นต้น) H (รายชั่วโมง) D (รายวัน) W (รายสัปดาห์) M (รายเดือน) (ตัวอย่าง D หรือ 2H)"],
tr:["Dakika grafiği için aralık numarasını yazın (yani, beş dakikalık bir grafik olacaksa 5). Veya diğer aralıklar için sayı ve sayının yanında harf: 1 saniye grafik için s (15 saniye grafik için 15s, vb.), S (Saatlik), G (Günlük), H (Haftalık), A (Aylık) aralıkları (yani G veya 2S)"],vi:["Nhập số khoảng cho các biểu đồ phút (tức là 5 nếu nó sẽ là biểu đồ năm phút). Hoặc số cộng chữ cái cho các khoảng thời gian khác: S cho biểu đồ 1 giây (15S cho biểu đồ 15 giây, v.v.), H (Hàng giờ), D (Hàng ngày), W (Hàng tuần), M (Hàng tháng) (tức là D hoặc 2H)"],zh:["在分钟图表上输入时间周期数值（即5代表5分钟的图表）。或H（小时）、D（日）、W（周）、M（月）时间周期（即D或2H）的数字加字母。"],zh_TW:["鍵入分鐘圖表的間隔時間(如果是五分鐘圖表，則輸入5)。或其他間隔的數字加字母：S為1秒圖表(15S為15秒圖表等)、H(小時)、D(日)、W(週)、M(月)間隔時間(即D或2H)"]}}}]);