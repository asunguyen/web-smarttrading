(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[45553],{281026:e=>{e.exports={container:"container-WDZ0PRNh","container-xxsmall":"container-xxsmall-WDZ0PRNh","container-xsmall":"container-xsmall-WDZ0PRNh","container-small":"container-small-WDZ0PRNh","container-medium":"container-medium-WDZ0PRNh","container-large":"container-large-WDZ0PRNh","intent-default":"intent-default-WDZ0PRNh",focused:"focused-WDZ0PRNh",readonly:"readonly-WDZ0PRNh",disabled:"disabled-WDZ0PRNh","with-highlight":"with-highlight-WDZ0PRNh",grouped:"grouped-WDZ0PRNh","adjust-position":"adjust-position-WDZ0PRNh","first-row":"first-row-WDZ0PRNh","first-col":"first-col-WDZ0PRNh",stretch:"stretch-WDZ0PRNh","font-size-medium":"font-size-medium-WDZ0PRNh","font-size-large":"font-size-large-WDZ0PRNh","no-corner-top-left":"no-corner-top-left-WDZ0PRNh","no-corner-top-right":"no-corner-top-right-WDZ0PRNh","no-corner-bottom-right":"no-corner-bottom-right-WDZ0PRNh","no-corner-bottom-left":"no-corner-bottom-left-WDZ0PRNh","size-xxsmall":"size-xxsmall-WDZ0PRNh","size-xsmall":"size-xsmall-WDZ0PRNh","size-small":"size-small-WDZ0PRNh","size-medium":"size-medium-WDZ0PRNh","size-large":"size-large-WDZ0PRNh","intent-success":"intent-success-WDZ0PRNh","intent-warning":"intent-warning-WDZ0PRNh","intent-danger":"intent-danger-WDZ0PRNh","intent-primary":"intent-primary-WDZ0PRNh","border-none":"border-none-WDZ0PRNh","border-thin":"border-thin-WDZ0PRNh","border-thick":"border-thick-WDZ0PRNh",highlight:"highlight-WDZ0PRNh",shown:"shown-WDZ0PRNh"}},7236:e=>{e.exports={"inner-slot":"inner-slot-W53jtLjw",interactive:"interactive-W53jtLjw",icon:"icon-W53jtLjw","inner-middle-slot":"inner-middle-slot-W53jtLjw","before-slot":"before-slot-W53jtLjw","after-slot":"after-slot-W53jtLjw"}},330930:e=>{e.exports={input:"input-RUSovanF","size-xxsmall":"size-xxsmall-RUSovanF","size-xsmall":"size-xsmall-RUSovanF","size-small":"size-small-RUSovanF","size-medium":"size-medium-RUSovanF","size-large":"size-large-RUSovanF","with-start-slot":"with-start-slot-RUSovanF","with-end-slot":"with-end-slot-RUSovanF"}},520817:e=>{e.exports={autocomplete:"autocomplete-uszkUMOz",caret:"caret-uszkUMOz",icon:"icon-uszkUMOz",suggestions:"suggestions-uszkUMOz",suggestion:"suggestion-uszkUMOz",noResults:"noResults-uszkUMOz",selected:"selected-uszkUMOz",opened:"opened-uszkUMOz"}},452395:(e,t,n)=>{"use strict";n.d(t,{ControlSkeleton:()=>v,InputClasses:()=>m});var s=n(50959),o=n(497754),r=n(650151),i=n(662929),a=n(8626),l=n(301792),u=n(307754);var c=n(281026),h=n.n(c);function d(e){let t="";return 0!==e&&(1&e&&(t=o(t,h()["no-corner-top-left"])),2&e&&(t=o(t,h()["no-corner-top-right"])),4&e&&(t=o(t,h()["no-corner-bottom-right"])),8&e&&(t=o(t,h()["no-corner-bottom-left"]))),t}function p(e,t,n,s){const{removeRoundBorder:r,className:i,intent:a="default",borderStyle:l="thin",size:c,highlight:p,disabled:g,readonly:m,stretch:f,noReadonlyStyles:y,isFocused:v}=e,_=d(null!=r?r:(0,u.getGroupCellRemoveRoundBorders)(n))
;return o(h().container,h()[`container-${c}`],h()[`intent-${a}`],h()[`border-${l}`],c&&h()[`size-${c}`],_,p&&h()["with-highlight"],g&&h().disabled,m&&!y&&h().readonly,v&&h().focused,f&&h().stretch,t&&h().grouped,!s&&h()["adjust-position"],n.isTop&&h()["first-row"],n.isLeft&&h()["first-col"],i)}function g(e,t,n){const{highlight:s,highlightRemoveRoundBorder:r}=e;if(!s)return h().highlight;const i=d(null!=r?r:(0,u.getGroupCellRemoveRoundBorders)(t));return o(h().highlight,h().shown,h()[`size-${n}`],i)}const m={FontSizeMedium:(0,r.ensureDefined)(h()["font-size-medium"]),FontSizeLarge:(0,r.ensureDefined)(h()["font-size-large"])},f={passive:!1};function y(e,t){const{style:n,id:o,role:r,onFocus:u,onBlur:c,onMouseOver:h,onMouseOut:d,onMouseDown:m,onMouseUp:y,onKeyDown:v,onClick:_,tabIndex:w,startSlot:b,middleSlot:C,endSlot:D,onWheel:R,onWheelNoPassive:E=null,size:S}=e,{isGrouped:k,cellState:N,disablePositionAdjustment:P=!1}=(0,s.useContext)(l.ControlGroupContext),z=function(e,t=null,n){const o=(0,s.useRef)(null),r=(0,s.useRef)(null),i=(0,s.useCallback)((()=>{if(null===o.current||null===r.current)return;const[e,t,n]=r.current;null!==t&&o.current.addEventListener(e,t,n)}),[]),a=(0,s.useCallback)((()=>{if(null===o.current||null===r.current)return;const[e,t,n]=r.current;null!==t&&o.current.removeEventListener(e,t,n)}),[]),l=(0,s.useCallback)((e=>{a(),o.current=e,i()}),[]);return(0,s.useEffect)((()=>(r.current=[e,t,n],i(),a)),[e,t,n]),l}("wheel",E,f);return s.createElement("span",{style:n,id:o,role:r,className:p(e,k,N,P),tabIndex:w,ref:(0,i.useMergedRefs)([t,z]),onFocus:u,onBlur:c,onMouseOver:h,onMouseOut:d,onMouseDown:m,onMouseUp:y,onKeyDown:v,onClick:_,onWheel:R,...(0,a.filterDataProps)(e),...(0,a.filterAriaProps)(e)},b,C,D,s.createElement("span",{className:g(e,N,S)}))}y.displayName="ControlSkeleton";const v=s.forwardRef(y)},514420:(e,t,n)=>{"use strict";n.d(t,{AfterSlot:()=>h,BeforeSlot:()=>a,EndSlot:()=>c,MiddleSlot:()=>u,StartSlot:()=>l});var s=n(50959),o=n(497754),r=n(7236),i=n.n(r);function a(e){const{className:t,children:n}=e;return s.createElement("span",{className:o(i()["before-slot"],t)},n)}function l(e){const{className:t,interactive:n=!0,icon:r=!1,children:a}=e;return s.createElement("span",{className:o(i()["inner-slot"],n&&i().interactive,r&&i().icon,t)},a)}function u(e){const{className:t,children:n}=e;return s.createElement("span",{className:o(i()["inner-slot"],i()["inner-middle-slot"],t)},n)}function c(e){const{className:t,interactive:n=!0,icon:r=!1,children:a}=e;return s.createElement("span",{className:o(i()["inner-slot"],n&&i().interactive,r&&i().icon,t)},a)}function h(e){const{className:t,children:n}=e;return s.createElement("span",{className:o(i()["after-slot"],t)},n)}},142135:(e,t,n)=>{"use strict";n.d(t,{Input:()=>s.Input,InputControl:()=>s.InputControl});var s=n(314551)},314551:(e,t,n)=>{"use strict";n.d(t,{Input:()=>y,InputControl:()=>v});var s=n(50959),o=n(497754),r=n(8626),i=n(763341),a=n(151057),l=n(662929),u=n(207357),c=n(405964),h=n(633750),d=n(452395),p=n(514420),g=n(330930),m=n.n(g);function f(e){
return!(0,r.isAriaAttribute)(e)&&!(0,r.isDataAttribute)(e)}function y(e){const{id:t,title:n,role:i,tabIndex:a,placeholder:l,name:u,type:c,value:h,defaultValue:g,draggable:y,autoComplete:v,autoFocus:_,maxLength:w,min:b,max:C,step:D,pattern:R,inputMode:E,onSelect:S,onFocus:k,onBlur:N,onKeyDown:P,onKeyUp:z,onKeyPress:O,onChange:M,onDragStart:W,size:x="small",className:I,inputClassName:F,disabled:U,readonly:A,containerTabIndex:Z,startSlot:K,endSlot:L,reference:V,containerReference:j,onContainerFocus:B,...H}=e,T=(0,r.filterProps)(H,f),q={...(0,r.filterAriaProps)(H),...(0,r.filterDataProps)(H),id:t,title:n,role:i,tabIndex:a,placeholder:l,name:u,type:c,value:h,defaultValue:g,draggable:y,autoComplete:v,autoFocus:_,maxLength:w,min:b,max:C,step:D,pattern:R,inputMode:E,onSelect:S,onFocus:k,onBlur:N,onKeyDown:P,onKeyUp:z,onKeyPress:O,onChange:M,onDragStart:W};return s.createElement(d.ControlSkeleton,{...T,disabled:U,readonly:A,tabIndex:Z,className:o(m().container,I),size:x,ref:j,onFocus:B,startSlot:K,middleSlot:s.createElement(p.MiddleSlot,null,s.createElement("input",{...q,className:o(m().input,m()[`size-${x}`],F,K&&m()["with-start-slot"],L&&m()["with-end-slot"]),disabled:U,readOnly:A,ref:V})),endSlot:L})}function v(e){e=(0,u.useControl)(e);const{disabled:t,autoSelectOnFocus:n,tabIndex:o=0,onFocus:r,onBlur:d,reference:p,containerReference:g=null}=e,m=(0,s.useRef)(null),f=(0,s.useRef)(null),[v,_]=(0,c.useFocus)(),w=t?void 0:v?-1:o,b=t?void 0:v?o:-1,{isMouseDown:C,handleMouseDown:D,handleMouseUp:R}=(0,h.useIsMouseDown)(),E=(0,i.createSafeMulticastEventHandler)(_.onFocus,(function(e){n&&!C.current&&(0,a.selectAllContent)(e.currentTarget)}),r),S=(0,i.createSafeMulticastEventHandler)(_.onBlur,d),k=(0,s.useCallback)((e=>{m.current=e,p&&("function"==typeof p&&p(e),"object"==typeof p&&(p.current=e))}),[m,p]);return s.createElement(y,{...e,isFocused:v,containerTabIndex:w,tabIndex:b,onContainerFocus:function(e){f.current===e.target&&null!==m.current&&m.current.focus()},onFocus:E,onBlur:S,reference:k,containerReference:(0,l.useMergedRefs)([f,g]),onMouseDown:D,onMouseUp:R})}},207357:(e,t,n)=>{"use strict";n.d(t,{useControl:()=>r});var s=n(763341),o=n(405964);function r(e){const{onFocus:t,onBlur:n,intent:r,highlight:i,disabled:a}=e,[l,u]=(0,o.useFocus)(void 0,a),c=(0,s.createSafeMulticastEventHandler)(a?void 0:u.onFocus,t),h=(0,s.createSafeMulticastEventHandler)(a?void 0:u.onBlur,n);return{...e,intent:r||(l?"primary":"default"),highlight:null!=i?i:l,onFocus:c,onBlur:h}}},633750:(e,t,n)=>{"use strict";n.d(t,{useIsMouseDown:()=>o});var s=n(50959);function o(){const e=(0,s.useRef)(!1),t=(0,s.useCallback)((()=>{e.current=!0}),[e]),n=(0,s.useCallback)((()=>{e.current=!1}),[e]);return{isMouseDown:e,handleMouseDown:t,handleMouseUp:n}}},151057:(e,t,n)=>{"use strict";function s(e){null!==e&&e.setSelectionRange(0,e.value.length)}n.d(t,{selectAllContent:()=>s})},45553:(e,t,n)=>{"use strict";n.d(t,{Autocomplete:()=>g});var s=n(444372),o=n(50959),r=n(497754),i=n(416293),a=n(514420),l=n(142135),u=n(58407),c=n(733410),h=n(636098),d=n(520817)
;function p(e,t){return""===e||-1!==t.toLowerCase().indexOf(e.toLowerCase())}class g extends o.PureComponent{constructor(e){if(super(e),this._containerInputElement=null,this._raf=null,this._resize=()=>{null===this._raf&&(this._raf=requestAnimationFrame((()=>{this.setState({appearingWidth:void 0,appearingPosition:void 0,isMeasureValid:void 0}),this._raf=null})))},this._handleMeasure=()=>{if(this.state.isMeasureValid||!this.props.suggestionsInPortal||!this._containerInputElement)return;const{bottom:e,left:t,width:n}=this._containerInputElement.getBoundingClientRect();this.setState({appearingWidth:n,appearingPosition:{x:t,y:e},isMeasureValid:!0})},this._setInputRef=e=>{e&&(this._inputElement=e,this.props.setupHTMLInput&&this.props.setupHTMLInput(e),this._inputElement.addEventListener("keyup",this._handleKeyUpEnter))},this._setContainerInputRef=e=>{this._containerInputElement=e},this._handleCaretClick=()=>{this.state.isOpened?(this._close(),this.props.preventOnFocusOpen&&this._focus()):this.props.preventOnFocusOpen?this._open():this._focus()},this._handleOutsideClick=()=>{const{allowUserDefinedValues:e,value:t,onChange:n}=this.props,{queryValue:s}=this.state;e?n&&s!==t&&n(s):this.setState(this._valueToQuery(t)),this._close()},this._handleFocus=e=>{this.props.preventOnFocusOpen||this._open(),this.props.onFocus&&this.props.onFocus(e)},this._handleChange=e=>{const{preventSearchOnEmptyQuery:t,allowUserDefinedValues:n,onChange:s,onSuggestionsOpen:o,onSuggestionsClose:r}=this.props,i=e.currentTarget.value;if(t&&""===i)this.setState({queryValue:i,isOpened:!1,active:void 0}),r&&r();else{const e=this._suggestions(i),t=Object.keys(e).length>0;this.setState({queryValue:i,isOpened:t,active:n?void 0:this._getActiveKeyByValue(i)}),t&&o&&o()}n&&s&&s(i)},this._handleItemClick=e=>{const t=e.currentTarget.id;this.setState({queryValue:m(this.props.source)[t]}),this.props.onChange&&this.props.onChange(t),this._close()},this._handleKeyDown=e=>{if(-1===[c.KeyCode.DownArrow,c.KeyCode.UpArrow,c.KeyCode.Enter,c.KeyCode.Escape].indexOf(e.which))return;const{allowUserDefinedValues:t,value:n,onChange:s,onSuggestionsOpen:o}=this.props,{active:r,isOpened:i,queryValue:a}=this.state;i&&(e.preventDefault(),e.stopPropagation());const l=this._suggestions(a);switch(e.which){case c.KeyCode.DownArrow:case c.KeyCode.UpArrow:const u=Object.keys(l);if(!i&&u.length&&e.which===c.KeyCode.DownArrow){this.setState({isOpened:!0,active:u[0]}),o&&o();break}let h;if(void 0===r){if(e.which===c.KeyCode.UpArrow){this._close();break}h=0}else h=u.indexOf(r)+(e.which===c.KeyCode.UpArrow?-1:1);h<0&&(h=0),h>u.length-1&&(h=u.length-1);const d=u[h];this.setState({active:d});const p=document.getElementById(d);p&&this._scrollIfNotVisible(p,this._suggestionsElement);break;case c.KeyCode.Escape:this._close(),i||this._blur();break;case c.KeyCode.Enter:let g=r;t&&(i&&g?this.setState(this._valueToQuery(g)):g=a),void 0!==g&&(this._close(),i||this._blur(),g!==n?s&&s(g):this.setState(this._valueToQuery(g)))}},this._setSuggestionsRef=e=>{e&&(this._suggestionsElement=e)},
this._scrollIfNotVisible=(e,t)=>{const n=t.scrollTop,s=t.scrollTop+t.clientHeight,o=e.offsetTop,r=o+e.clientHeight;o<=n?e.scrollIntoView(!0):r>=s&&e.scrollIntoView(!1)},!(e=>Array.isArray(e.source)||!e.allowUserDefinedValues)(e))throw new Error("allowUserDefinedProps === true cay only be used if source is array");this.state={valueFromProps:e.value,isOpened:!1,active:e.value,queryValue:m(e.source)[e.value]||(e.allowUserDefinedValues?e.value:"")}}componentDidMount(){this.props.suggestionsInPortal&&window.addEventListener("resize",this._resize)}componentDidUpdate(){this.state.isOpened&&this._handleMeasure()}componentWillUnmount(){this._inputElement&&this._inputElement.removeEventListener("keyup",this._handleKeyUpEnter),null!==this._raf&&(cancelAnimationFrame(this._raf),this._raf=null),window.removeEventListener("resize",this._resize)}render(){return o.createElement(u.OutsideEvent,{handler:this._handleOutsideClick,click:!0},(e=>o.createElement("div",{className:r(d.autocomplete,"js-dialog-skip-escape"),ref:e},o.createElement(l.InputControl,{id:this.props.id,name:this.props.name,endSlot:Object.keys(this._suggestions(this.state.queryValue)).length?o.createElement(a.EndSlot,null,o.createElement("span",{className:d.caret,onClick:this._handleCaretClick,tabIndex:-1},o.createElement(i.ToolWidgetCaret,{className:d.icon,dropped:this.state.isOpened}))):void 0,maxLength:this.props.maxLength,reference:this._setInputRef,containerReference:this._setContainerInputRef,stretch:!0,placeholder:this.props.placeholder,value:this.state.queryValue,intent:this.props.error?"danger":void 0,onChange:this._handleChange,onFocus:this._handleFocus,onBlur:this.props.onBlur,onMouseOver:this.props.onMouseOver,onMouseOut:this.props.onMouseOut,onKeyDown:this._handleKeyDown,autoComplete:"off",size:this.props.size}),this._renderSuggestions())))}static getDerivedStateFromProps(e,t){const{allowUserDefinedValues:n,value:s,source:o}=e;if(s===t.valueFromProps&&t.isOpened)return null;const r=n?s:""===s?"":m(o)[s]||t.queryValue;return{...t,valueFromProps:s,active:s,queryValue:r}}_renderSuggestions(){return this.props.suggestionsInPortal?this.state.isOpened?this._renderPortalSuggestions():null:this._renderSuggestionsItems()}_renderPortalSuggestions(){return o.createElement(h.Portal,null,this._renderSuggestionsItems())}_focus(){this._inputElement.focus()}_blur(){this._inputElement.blur()}_open(){const{onSuggestionsOpen:e}=this.props;this._focus(),this.setState({isOpened:!0,active:this.props.value}),e&&e()}_close(){const{onSuggestionsClose:e}=this.props;this.setState({isOpened:!1,active:void 0}),e&&e()}_suggestions(e){const{filter:t=p}=this.props,n=m(this.props.source),s={};return Object.keys(n).filter((s=>t(e,n[s]))).forEach((e=>s[e]=n[e])),s}_renderSuggestionsItems(){const e=this._suggestions(this.state.queryValue),t=Object.keys(e).map((t=>{const n=r(d.suggestion,this.state.active===t&&d.selected);return o.createElement("li",{id:t,key:t,className:n,onClick:this._handleItemClick},e[t])})),i=o.createElement("li",{className:d.noResults},s.t(null,void 0,n(356614)))
;if(!t.length&&this.props.noEmptyText)return null;const{appearingPosition:a,appearingWidth:l}=this.state;return o.createElement("ul",{className:r(d.suggestions,this.state.isOpened&&d.opened),ref:this._setSuggestionsRef,style:{left:a&&a.x,top:a&&a.y,width:l&&l}},t.length?t:i)}_handleKeyUpEnter(e){e.which===c.KeyCode.Enter&&e.stopImmediatePropagation()}_getActiveKeyByValue(e){const{filter:t=p}=this.props,n=this._suggestions(e),s=Object.keys(n);for(const o of s)if(t(e,n[o]))return o;return s[0]}_valueToQuery(e){return{queryValue:m(this.props.source)[e]||""}}}function m(e){let t={};return Array.isArray(e)?e.forEach((e=>{t[e]=e})):t=e,t}},733410:(e,t,n)=>{"use strict";n.d(t,{KeyCode:()=>s,KeyboardListener:()=>r,makeKeyboardListener:()=>i});var s,o=n(50959);!function(e){e[e.Enter=13]="Enter",e[e.Space=32]="Space",e[e.Backspace=8]="Backspace",e[e.DownArrow=40]="DownArrow",e[e.UpArrow=38]="UpArrow",e[e.RightArrow=39]="RightArrow",e[e.LeftArrow=37]="LeftArrow",e[e.Escape=27]="Escape",e[e.Tab=9]="Tab"}(s||(s={}));class r{constructor(){this._handlers=new Map}registerHandlers(e){Object.keys(e).forEach((t=>{const n=parseInt(t);let s=e[n];if(Array.isArray(s)||(s=[s]),this._handlers.has(n)){const e=this._handlers.get(n);e&&s.forEach((t=>e.add(t)))}else this._handlers.set(n,new Set(s))}))}unregisterHandlers(e){Object.keys(e).forEach((t=>{const n=parseInt(t);let s=e[n];if(Array.isArray(s)||(s=[s]),this._handlers.has(n)){const e=this._handlers.get(n);e&&s.forEach((t=>e.delete(t)))}}))}deleteAllHandlers(){this._handlers=new Map}registerHandler(e,t){if(this._handlers.has(e)){const n=this._handlers.get(e);n&&n.add(t)}else this._handlers.set(e,new Set([t]))}unregisterHandler(e,t){if(this._handlers.has(e)){const n=this._handlers.get(e);n&&n.delete(t)}}listen(e){if(this._handlers.has(e.keyCode)){const t=this._handlers.get(e.keyCode);t&&t.forEach((t=>t(e)))}}}function i(e){var t,n,s;return(s=class extends o.PureComponent{constructor(e){super(e),this._keyboardListener=new r,this._listener=this._keyboardListener.listen.bind(this._keyboardListener)}componentDidMount(){this._registerHandlers(this.props.keyboardEventHandlers)}componentDidUpdate(e){e.keyboardEventHandlers!==this.props.keyboardEventHandlers&&this._registerHandlers(this.props.keyboardEventHandlers)}render(){const{keyboardEventHandlers:t,...n}=this.props;return o.createElement(e,{...n,onKeyDown:this._listener})}_registerHandlers(e){e&&(this._keyboardListener.deleteAllHandlers(),this._keyboardListener.registerHandlers(e))}}).displayName=`KeyboardListener(${null!==(n=null!==(t=e.displayName)&&void 0!==t?t:e.name)&&void 0!==n?n:"Component"})`,s}}}]);