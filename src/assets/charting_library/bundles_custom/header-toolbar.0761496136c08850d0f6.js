(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[63005,58409],{164553:e=>{e.exports={wrap:"wrap-wXGVFOC9",wrapWithArrowsOuting:"wrapWithArrowsOuting-wXGVFOC9",wrapOverflow:"wrapOverflow-wXGVFOC9",scrollWrap:"scrollWrap-wXGVFOC9",noScrollBar:"noScrollBar-wXGVFOC9",icon:"icon-wXGVFOC9",scrollLeft:"scrollLeft-wXGVFOC9",scrollRight:"scrollRight-wXGVFOC9",isVisible:"isVisible-wXGVFOC9",iconWrap:"iconWrap-wXGVFOC9",fadeLeft:"fadeLeft-wXGVFOC9",fadeRight:"fadeRight-wXGVFOC9"}},267521:(e,t,s)=>{"use strict";s.d(t,{useFunctionalRefObject:()=>r});var i=s(50959),a=s(774218);function r(e){const t=(0,i.useMemo)((()=>function(e){const t=s=>{e(s),t.current=s};return t.current=null,t}((e=>{o.current(e)}))),[]),s=(0,i.useRef)(null),r=t=>{if(null===t)return n(s.current,t),void(s.current=null);s.current!==e&&(s.current=e,n(s.current,t))},o=(0,i.useRef)(r);return o.current=r,(0,a.useIsomorphicLayoutEffect)((()=>{if(null!==t.current)return o.current(t.current),()=>o.current(null)}),[e]),t}function n(e,t){null!==e&&("function"==typeof e?e(t):e.current=t)}},662464:(e,t,s)=>{"use strict";s.d(t,{hoverMouseEventFilter:()=>r,useAccurateHover:()=>n,useHover:()=>a});var i=s(50959);function a(){const[e,t]=(0,i.useState)(!1);return[e,{onMouseOver:function(e){r(e)&&t(!0)},onMouseOut:function(e){r(e)&&t(!1)}}]}function r(e){return!e.currentTarget.contains(e.relatedTarget)}function n(e){const[t,s]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const t=t=>{if(null===e.current)return;const i=e.current.contains(t.target);s(i)};return document.addEventListener("mouseover",t),()=>document.removeEventListener("mouseover",t)}),[]),t}},774218:(e,t,s)=>{"use strict";s.d(t,{useIsomorphicLayoutEffect:()=>a});var i=s(50959);function a(e,t){("undefined"==typeof window?i.useEffect:i.useLayoutEffect)(e,t)}},444530:(e,t,s)=>{"use strict";s.d(t,{useResizeObserver:()=>o});var i=s(50959),a=s(159255),r=s(774218),n=s(267521);function o(e,t=[]){const{callback:s,ref:o=null}=function(e){return"function"==typeof e?{callback:e}:e}(e),l=(0,i.useRef)(null),c=(0,i.useRef)(s);c.current=s;const d=(0,n.useFunctionalRefObject)(o),u=(0,i.useCallback)((e=>{d(e),null!==l.current&&(l.current.disconnect(),null!==e&&l.current.observe(e))}),[d,l]);return(0,r.useIsomorphicLayoutEffect)((()=>(l.current=new a.default(((e,t)=>{c.current(e,t)})),d.current&&u(d.current),()=>{var e;null===(e=l.current)||void 0===e||e.disconnect()})),[d,...t]),u}},184277:(e,t,s)=>{"use strict";function i(e){return 0===e.detail}s.d(t,{isKeyboardClick:()=>i})},763341:(e,t,s)=>{"use strict";function i(...e){return t=>{for(const s of e)void 0!==s&&s(t)}}s.d(t,{createSafeMulticastEventHandler:()=>i})},170873:(e,t,s)=>{"use strict";s.d(t,{FragmentMap:()=>a});var i=s(50959);function a(e){if(e.map){return i.Children.toArray(e.children).map(e.map)}return e.children}},389401:(e,t,s)=>{"use strict";s.d(t,{Measure:()=>a});var i=s(444530);function a(e){const{children:t,onResize:s}=e;return t((0,i.useResizeObserver)(s||(()=>{}),[null===s]))}},962624:(e,t,s)=>{"use strict";s.d(t,{
hoverMouseEventFilter:()=>i.hoverMouseEventFilter,useAccurateHover:()=>i.useAccurateHover,useHover:()=>i.useHover});var i=s(662464)},156614:(e,t,s)=>{"use strict";s.d(t,{HorizontalScroll:()=>E,horizontalScrollFactory:()=>v});var i=s(50959),a=s(497754),r=s(650151),n=s(83436),o=s(764005),l=s(81979),c=s(31341),d=s(389401),u=s(661380),h=s(164553);const m={isVisibleScrollbar:!0,shouldMeasure:!0,hideButtonsFrom:1};function v(e=f,t=b,s=p,n=S){var u;return(u=class extends i.PureComponent{constructor(e){super(e),this._scroll=i.createRef(),this._handleScrollLeft=()=>{if(this.props.onScrollButtonClick)return void this.props.onScrollButtonClick("left");const e=this.props.scrollStepSize||this.state.widthWrap-50;this.animateTo(Math.max(0,this.currentPosition()-e))},this._handleScrollRight=()=>{if(this.props.onScrollButtonClick)return void this.props.onScrollButtonClick("right");const e=this.props.scrollStepSize||this.state.widthWrap-50;this.animateTo(Math.min((this.state.widthContent||0)-(this.state.widthWrap||0),this.currentPosition()+e))},this._handleResizeWrap=([e])=>{const t=e.target.getBoundingClientRect();this.props.onMeasureWrap&&this.props.onMeasureWrap(t),this.setState({widthWrap:t.width}),this._checkButtonsVisibility()},this._handleResizeContent=([e])=>{const t=e.target.getBoundingClientRect();this.props.onMeasureContent&&this.props.onMeasureContent(t);const{shouldDecreaseWidthContent:s,buttonsWidthIfDecreasedWidthContent:i}=this.props;s&&i?this.setState({widthContent:t.width+2*i}):this.setState({widthContent:t.width})},this._handleScroll=()=>{const{onScroll:e}=this.props;e&&e(this.currentPosition(),this.isAtLeft(),this.isAtRight()),this._checkButtonsVisibility()},this._checkButtonsVisibility=()=>{const{isVisibleLeftButton:e,isVisibleRightButton:t}=this.state,s=this.isAtLeft(),i=this.isAtRight();s||e?s&&e&&this.setState({isVisibleLeftButton:!1}):this.setState({isVisibleLeftButton:!0}),i||t?i&&t&&this.setState({isVisibleRightButton:!1}):this.setState({isVisibleRightButton:!0})},this.state={widthContent:0,widthWrap:0,isVisibleRightButton:!1,isVisibleLeftButton:!1}}componentDidMount(){this._checkButtonsVisibility()}componentDidUpdate(e,t){t.widthWrap===this.state.widthWrap&&t.widthContent===this.state.widthContent||this._handleScroll()}currentPosition(){return this._scroll.current?(0,c.isRtl)()?(0,c.getLTRScrollLeft)(this._scroll.current):this._scroll.current.scrollLeft:0}isAtLeft(){return!this._isOverflowed()||this.currentPosition()<=(0,r.ensureDefined)(this.props.hideButtonsFrom)}isAtRight(){return!this._isOverflowed()||this.currentPosition()+this.state.widthWrap>=this.state.widthContent-(0,r.ensureDefined)(this.props.hideButtonsFrom)}animateTo(e,t=l.dur){const s=this._scroll.current;s&&((0,c.isRtl)()&&(e=(0,c.getLTRScrollLeftOffset)(s,e)),t<=0?s.scrollLeft=Math.round(e):(0,o.doAnimate)({onStep(e,t){s.scrollLeft=Math.round(t)},from:s.scrollLeft,to:Math.round(e),easing:l.easingFunc.easeInOutCubic,duration:t}))}render(){
const{children:r,isVisibleScrollbar:o,isVisibleFade:l,isVisibleButtons:c,shouldMeasure:u,shouldDecreaseWidthContent:m,buttonsWidthIfDecreasedWidthContent:v,onMouseOver:p,onMouseOut:S,scrollWrapClassName:f,fadeClassName:b}=this.props,{isVisibleRightButton:C,isVisibleLeftButton:E}=this.state,g=m&&v;return i.createElement(d.Measure,{onResize:u?this._handleResizeWrap:null},(m=>i.createElement("div",{className:h.wrapOverflow,onMouseOver:p,onMouseOut:S,ref:m},i.createElement("div",{className:a(h.wrap,g?h.wrapWithArrowsOuting:"")},i.createElement("div",{className:a(h.scrollWrap,f,{[h.noScrollBar]:!o}),onScroll:this._handleScroll,ref:this._scroll},i.createElement(d.Measure,{onResize:u?this._handleResizeContent:null},r)),l&&i.createElement(s,{isVisible:E,className:b}),l&&i.createElement(n,{isVisible:C,className:b}),c&&i.createElement(e,{onClick:this._handleScrollLeft,isVisible:E}),c&&i.createElement(t,{onClick:this._handleScrollRight,isVisible:C})))))}_isOverflowed(){const{widthContent:e,widthWrap:t}=this.state;return e>t}}).defaultProps=m,u}function p(e){return i.createElement("div",{className:a(h.fadeLeft,e.className,{[h.isVisible]:e.isVisible})})}function S(e){return i.createElement("div",{className:a(h.fadeRight,e.className,{[h.isVisible]:e.isVisible})})}function f(e){return i.createElement(C,{...e,className:h.scrollLeft})}function b(e){return i.createElement(C,{...e,className:h.scrollRight})}function C(e){return i.createElement("div",{className:a(e.className,{[h.isVisible]:e.isVisible}),onClick:e.onClick},i.createElement("div",{className:h.iconWrap},i.createElement(n.Icon,{icon:u,className:h.icon})))}const E=v(f,b,p,S)},721043:e=>{e.exports={group:"group-MBOVGQRI",separator:"separator-MBOVGQRI",noLeftDecoration:"noLeftDecoration-MBOVGQRI",noRightDecoration:"noRightDecoration-MBOVGQRI",noMinimalWidth:"noMinimalWidth-MBOVGQRI",separatorWrap:"separatorWrap-MBOVGQRI"}},63869:e=>{e.exports={separator:"separator-xVhBjD5m"}},120694:e=>{e.exports={"css-value-header-toolbar-height":"38px",toolbar:"toolbar-qqNP9X6e",isHidden:"isHidden-qqNP9X6e",overflowWrap:"overflowWrap-qqNP9X6e",customButton:"customButton-qqNP9X6e",hover:"hover-qqNP9X6e",clicked:"clicked-qqNP9X6e"}},759468:e=>{e.exports={wrap:"wrap-_psvpUP2",icon:"icon-_psvpUP2"}},740620:e=>{e.exports={"css-value-header-toolbar-height":"38px",innerWrap:"innerWrap-OhqNVIYA",inner:"inner-OhqNVIYA",fake:"fake-OhqNVIYA",fill:"fill-OhqNVIYA",collapse:"collapse-OhqNVIYA",button:"button-OhqNVIYA",iconButton:"iconButton-OhqNVIYA",hidden:"hidden-OhqNVIYA",content:"content-OhqNVIYA",desktopPublish:"desktopPublish-OhqNVIYA",mobilePublish:"mobilePublish-OhqNVIYA"}},810476:(e,t,s)=>{"use strict";function i(e){e.dispatchEvent(new CustomEvent("roving-tabindex:main-element"))}function a(e){e.dispatchEvent(new CustomEvent("roving-tabindex:secondary-element"))}s.d(t,{becomeMainElement:()=>i,becomeSecondaryElement:()=>a})},121807:(e,t,s)=>{"use strict";s.d(t,{useMouseClickAutoBlur:()=>n});var i=s(50959),a=s(184277),r=s(580602);function n(e,t=!0){(0,i.useEffect)((()=>{
if(!r.PLATFORM_ACCESSIBILITY_ENABLED||!t)return;const s=t=>{const s=e.current;null!==s&&document.activeElement instanceof HTMLElement&&((0,a.isKeyboardClick)(t)||s.contains(document.activeElement)&&"INPUT"!==document.activeElement.tagName&&document.activeElement.blur())};return window.addEventListener("click",s,!0),()=>window.removeEventListener("click",s,!0)}),[t])}},604364:(e,t,s)=>{"use strict";s.d(t,{Toolbar:()=>u});var i=s(50959),a=s(650151),r=s(763341),n=s(591800),o=s(580602),l=s(810476),c=s(267521),d=s(121807);const u=(0,i.forwardRef)((function(e,t){const{onKeyDown:s,orientation:u,blurOnEscKeydown:h=!0,blurOnClick:m=!0,...v}=e,p=o.PLATFORM_ACCESSIBILITY_ENABLED?{role:"toolbar","aria-orientation":u}:{},S=(0,c.useFunctionalRefObject)(t);return(0,i.useLayoutEffect)((()=>{if(!o.PLATFORM_ACCESSIBILITY_ENABLED)return;const e=(0,a.ensureNotNull)(S.current),t=()=>{const t=(0,o.queryTabbableElements)(e).sort(o.navigationOrderComparator);if(0===t.length){const[t]=(0,o.queryFocusableElements)(e).sort(o.navigationOrderComparator);if(void 0===t)return;(0,l.becomeMainElement)(t)}if(t.length>1){const[,...e]=t;for(const t of e)(0,l.becomeSecondaryElement)(t)}};return window.addEventListener("keyboard-navigation-activation",t),()=>window.removeEventListener("keyboard-navigation-activation",t)}),[]),(0,d.useMouseClickAutoBlur)(S,m),i.createElement("div",{...v,...p,ref:S,onKeyDown:(0,r.createSafeMulticastEventHandler)((function(e){if(!o.PLATFORM_ACCESSIBILITY_ENABLED)return;if(e.defaultPrevented)return;if(!(document.activeElement instanceof HTMLElement))return;const t=(0,n.hashFromEvent)(e);if(h&&27===t)return e.preventDefault(),void document.activeElement.blur();if("vertical"!==u&&37!==t&&39!==t)return;if("vertical"===u&&38!==t&&40!==t)return;const s=e.currentTarget,i=(0,o.queryFocusableElements)(s).sort(o.navigationOrderComparator);if(0===i.length)return;const a=i.indexOf(document.activeElement);if(-1===a)return;e.preventDefault();const r=()=>{const e=(a+i.length-1)%i.length;(0,l.becomeSecondaryElement)(i[a]),(0,l.becomeMainElement)(i[e]),i[e].focus()},c=()=>{const e=(a+i.length+1)%i.length;(0,l.becomeSecondaryElement)(i[a]),(0,l.becomeMainElement)(i[e]),i[e].focus()};switch((0,o.mapKeyCodeToDirection)(t)){case"inlinePrev":"vertical"!==u&&r();break;case"inlineNext":"vertical"!==u&&c();break;case"blockPrev":"vertical"===u&&r();break;case"blockNext":"vertical"===u&&c()}}),s)})}))},364367:(e,t,s)=>{"use strict";var i;s.d(t,{HeaderToolbarComponentIds:()=>i}),function(e){e.SymbolSearch="header-toolbar-symbol-search",e.Intervals="header-toolbar-intervals",e.ChartStyles="header-toolbar-chart-styles",e.Compare="header-toolbar-compare",e.Indicators="header-toolbar-indicators",e.StudyTemplates="header-toolbar-study-templates",e.Dropdown="header-toolbar-dropdown",e.Alerts="header-toolbar-alerts",e.Layouts="header-toolbar-layouts",e.SaveLoad="header-toolbar-save-load",e.UndoRedo="header-toolbar-undo-redo",e.Properties="header-toolbar-properties",e.QuickSearch="header-toolbar-quick-search",e.PublishDesktop="header-toolbar-publish-desktop",
e.PublishMobile="header-toolbar-publish-mobile",e.Fullscreen="header-toolbar-fullscreen",e.Screenshot="header-toolbar-screenshot",e.Replay="header-toolbar-replay",e.Financials="header-toolbar-financials"}(i||(i={}))},917692:(e,t,s)=>{"use strict";s.r(t),s.d(t,{HeaderToolbarRenderer:()=>re});var i=s(50959),a=s(500962),r=s(650151),n=s(497754),o=s.n(n),l=s(685459),c=s.n(l),d=s(343370),u=s(77122),h=s(251954),m=s(719036),v=s(778785),p=s(170873),S=s(63869);function f(e){return i.createElement("div",{className:o()(S.separator,e.className)})}var b=s(721043);function C(e){const{children:t,className:s,noLeftDecoration:a,noRightDecoration:r,noMinimalWidth:o,onClick:l,removeSeparator:c}=e;return i.createElement(i.Fragment,null,!c&&i.createElement("div",{className:b.separatorWrap},i.createElement(f,{className:b.separator})),i.createElement("div",{className:n(s,b.group,{[b.noMinimalWidth]:o,[b.noLeftDecoration]:a,[b.noRightDecoration]:r}),onClick:l},t))}var E=s(389401),g=s(444372),y=s(83436),_=s(759468),w=s(245820);const M={text:g.t(null,void 0,s(255646))};function T(e){return i.createElement("div",{className:_.wrap},i.createElement(y.Icon,{className:_.icon,icon:w}),M.text)}var I=s(156614),R=s(777466),D=s(364367),F=s(962624),V=s(847564),O=s(604364),k=s(580602),A=s(345848),W=s(740620);const L=(0,V.registryContextType)(),B=u.enabled("widget");class N extends i.PureComponent{constructor(e,t){super(e,t),this._handleMouseOver=e=>{(0,F.hoverMouseEventFilter)(e)&&this.setState({isHovered:!0})},this._handleMouseOut=e=>{(0,F.hoverMouseEventFilter)(e)&&this.setState({isHovered:!1})},this._handleInnerResize=([e])=>{const t=e.contentRect.width,{onWidthChange:s}=this.props;s&&s(t)},this._handleMeasureAvailableSpace=e=>{const{onAvailableSpaceChange:t}=this.props;t&&t(e.width)},this._processCustoms=e=>{const{isFake:t,displayMode:s}=this.props,{tools:a}=this.context;return e.map((e=>i.createElement(C,{key:e.id},(e=>{switch(e.type){case"Button":return i.createElement(a.Custom,{...e.params,isFake:t});case"TradingViewStyledButton":return i.createElement(a.CustomTradingViewStyledButton,{...e.params,className:W.button,displayMode:s});case"Dropdown":return i.createElement(a.Dropdown,{displayMode:s,params:e.params});default:return null}})(e))))},this._fixLastGroup=(e,t,s)=>{if(t===s.length-1&&i.isValidElement(e)&&e.type===C){const t=void 0!==this.context.tools.Publish&&!this.props.readOnly;return i.cloneElement(e,{noRightDecoration:t})}return e},(0,V.validateRegistry)(t,{tools:m.any.isRequired}),this.state={isHovered:!1}}render(){const{tools:e}=this.context,{features:t,displayMode:s,chartSaver:a,studyMarket:r,readOnly:o,saveLoadSyncEmitter:l,leftCustomElements:c,rightCustomElements:d,showScrollbarWhen:u,isFake:h=!1}=this.props,{isHovered:m}=this.state,S=this._processCustoms(c),f=this._processCustoms(d),b=u.includes(s);return i.createElement(O.Toolbar,{className:n(W.inner,{[W.fake]:h}),onContextMenu:R.preventDefaultForContextMenu,"data-is-fake-main-panel":h,"aria-hidden":k.PLATFORM_ACCESSIBILITY_ENABLED?h:void 0},i.createElement(I.HorizontalScroll,{
isVisibleFade:v.mobiletouch&&b,isVisibleButtons:!v.mobiletouch&&b&&m,isVisibleScrollbar:!1,shouldMeasure:!h,onMouseOver:this._handleMouseOver,onMouseOut:this._handleMouseOut,onMeasureWrap:this._handleMeasureAvailableSpace},(c=>i.createElement("div",{className:W.content,ref:c,role:k.PLATFORM_ACCESSIBILITY_ENABLED?"none":void 0},i.createElement(E.Measure,{onResize:h?this._handleInnerResize:null},(c=>i.createElement("div",{className:W.innerWrap,ref:c},i.createElement(p.FragmentMap,{map:this._fixLastGroup},!o&&i.Children.toArray([(e.SymbolSearch||!B&&e.Compare)&&i.createElement(C,{key:"symbol"},e.SymbolSearch&&i.createElement(e.SymbolSearch,{id:h?void 0:D.HeaderToolbarComponentIds.SymbolSearch,isActionsVisible:t.allowSymbolSearchSpread}),e.Compare&&i.createElement(e.Compare,{id:h?void 0:D.HeaderToolbarComponentIds.Compare,className:W.button,displayMode:s})),e.DateRange&&i.createElement(C,{key:"range"},i.createElement(e.DateRange,null)),e.Intervals&&i.createElement(C,{key:"intervals"},i.createElement(e.Intervals,{id:h?void 0:D.HeaderToolbarComponentIds.Intervals,isShownQuicks:t.allowFavoriting,isFavoritingAllowed:t.allowFavoriting,displayMode:s,isFake:h})),e.Bars&&i.createElement(C,{key:"styles"},i.createElement(e.Bars,{id:h?void 0:D.HeaderToolbarComponentIds.ChartStyles,isShownQuicks:t.allowFavoriting,isFavoritingAllowed:t.allowFavoriting,displayMode:s,isFake:h})),B&&e.Compare&&!e.SymbolSearch&&i.createElement(C,{key:"compare"},i.createElement(e.Compare,{id:h?void 0:D.HeaderToolbarComponentIds.Compare,className:W.button,displayMode:s})),e.Indicators&&i.createElement(C,{key:"indicators"},i.createElement(e.Indicators,{id:h?void 0:D.HeaderToolbarComponentIds.Indicators,className:W.button,studyMarket:r,displayMode:s}),e.Templates&&i.createElement(e.Templates,{id:h?void 0:D.HeaderToolbarComponentIds.StudyTemplates,isShownQuicks:t.allowFavoriting,isFavoritingAllowed:t.allowFavoriting,displayMode:s})),e.Alert&&i.createElement(C,{key:"alert"},i.createElement(e.Alert,{id:h?void 0:D.HeaderToolbarComponentIds.Alerts,className:W.button,displayMode:s}),e.Replay&&i.createElement(e.Replay,{id:h?void 0:D.HeaderToolbarComponentIds.Replay,className:W.button,displayMode:s})),e.AlertReferral&&i.createElement(C,{key:"alert-referral"},i.createElement(e.AlertReferral,{className:W.button,displayMode:s})),e.ScalePercentage&&i.createElement(C,{key:"percentage"},i.createElement(e.ScalePercentage,null)),e.ScaleLogarithm&&i.createElement(C,{key:"logarithm"},i.createElement(e.ScaleLogarithm,null)),...S]),function(e){const t=e.findIndex((e=>i.isValidElement(e)&&!!e.key&&-1!==e.key.toString().indexOf("view-only-badge")));return[t].filter((e=>e>=0)).forEach((t=>{e=i.Children.map(e,((e,s)=>{if(i.isValidElement(e)){switch([t-1,t,t+1].indexOf(s)){case 0:const t={noRightDecoration:!0};e=i.cloneElement(e,t);break;case 1:const s={noLeftDecoration:!0,noRightDecoration:!0};e=i.cloneElement(e,s);break;case 2:const a={noLeftDecoration:!0};e=i.cloneElement(e,a)}}return e}))})),e}(i.Children.toArray([o&&i.createElement(C,{key:"view-only-badge",removeSeparator:!0
},i.createElement(T,null)),!o&&e.UndoRedo&&i.createElement(C,{key:"undo-redo"},i.createElement(e.UndoRedo,{id:h?void 0:D.HeaderToolbarComponentIds.UndoRedo})),i.createElement(C,{removeSeparator:!0,key:"gap-1",className:n(W.fill,h&&W.collapse)}),(e.Layout||e.SaveLoad)&&i.createElement(C,{key:"layout",removeSeparator:!0},!o&&e.Layout&&i.createElement(e.Layout,{id:h?void 0:D.HeaderToolbarComponentIds.Layouts}),e.SaveLoad&&i.createElement(e.SaveLoad,{id:h?void 0:D.HeaderToolbarComponentIds.SaveLoad,chartSaver:a,isReadOnly:o,displayMode:s,isFake:h,stateSyncEmitter:l})),e.SaveLoadReferral&&i.createElement(C,{key:"save-load-referral"},i.createElement(e.SaveLoadReferral,{isReadOnly:o,displayMode:s})),t.showLaunchInPopupButton&&e.OpenPopup&&i.createElement(C,{key:"popup"},i.createElement(e.OpenPopup,null)),!o&&(e.Properties||e.Fullscreen||!B&&e.Screenshot)&&i.createElement(C,{key:"properties"},!o&&e.QuickSearch&&i.createElement(e.QuickSearch,{id:h?void 0:D.HeaderToolbarComponentIds.QuickSearch,className:W.iconButton}),!o&&e.Properties&&i.createElement(e.Properties,{id:h?void 0:D.HeaderToolbarComponentIds.Properties,className:W.iconButton}),i.createElement(i.Fragment,null,!o&&e.Fullscreen&&i.createElement(C,{key:"fullscreen",onClick:this._trackFullscreenButtonClick,removeSeparator:!0},i.createElement(e.Fullscreen,{id:h?void 0:D.HeaderToolbarComponentIds.Fullscreen})),!B&&e.Screenshot&&i.createElement(e.Screenshot,{id:h?void 0:D.HeaderToolbarComponentIds.Screenshot,className:W.iconButton}))),B&&!o&&e.Fullscreen&&i.createElement(C,{key:"fullscreen",onClick:this._trackFullscreenButtonClick,removeSeparator:!0},i.createElement(e.Fullscreen,{id:h?void 0:D.HeaderToolbarComponentIds.Fullscreen})),B&&e.Screenshot&&i.createElement(C,{key:"screenshot",removeSeparator:!0},i.createElement(e.Screenshot,{id:h?void 0:D.HeaderToolbarComponentIds.Screenshot,className:W.iconButton})),!o&&e.Publish&&i.createElement(C,{key:"publish",className:W.mobilePublish,removeSeparator:!0},i.createElement(e.Publish,{id:h?void 0:D.HeaderToolbarComponentIds.PublishMobile})),...f]))))))))),e.Publish&&!o&&!h&&i.createElement(e.Publish,{id:D.HeaderToolbarComponentIds.PublishDesktop,className:W.desktopPublish}))}_trackFullscreenButtonClick(){(0,A.trackEvent)("GUI","Chart Header Toolbar","fullscreen")}}N.contextType=L;var P=s(129025),H=s(574283),x=s(151363),z=s(661797),q=s(226722),G=s(62802),X=s(205533),Y=s(158409),U=s(223699),K=s(699466);const Q={[U.ResolutionKind.Ticks]:!1,[U.ResolutionKind.Seconds]:!1,[U.ResolutionKind.Minutes]:!1,[U.SpecialResolutionKind.Hours]:!1,[U.ResolutionKind.Days]:!1,[U.ResolutionKind.Range]:!1};class j extends K.CommonJsonStoreService{constructor(e,t,s=Q){super(e,t,"INTERVALS_MENU_VIEW_STATE_CHANGED","IntervalWidget.menu.viewState",s)}isAllowed(e){return Object.keys(Q).includes(e)}}const J={defaultsCollapsed:!1};class $ extends K.CommonJsonStoreService{constructor(e,t,s=J){super(e,t,"TEMPLATES_MENU_VIEW_STATE_CHANGED","TemplatesWidget.menu.viewState",s)}}var Z=s(559773);const ee={tools:m.any.isRequired,isFundamental:m.any,
chartApiInstance:m.any,availableTimeFrames:m.any,chartWidgetCollection:m.any,windowMessageService:m.any,favoriteChartStylesService:m.any,favoriteIntervalsService:m.any,intervalService:m.any,favoriteStudyTemplatesService:m.any,studyTemplates:m.any,chartChangesWatcher:m.any,saveChartService:m.any,sharingChartService:m.any,loadChartService:m.any,chartWidget:m.any,favoriteScriptsModel:m.any,intervalsMenuViewStateService:m.any,templatesMenuViewStateService:m.any,openGlobalSearch:m.any,snapshotUrl:m.any};var te=s(571690),se=s(120694);const ie=[];class ae extends i.PureComponent{constructor(e){super(e),this._saveLoadSyncEmitter=new(c()),this._handleFullWidthChange=e=>{this._fullWidth=e,this.setState({measureValid:!1})},this._handleFavoritesWidthChange=e=>{this._favoritesWidth=e,this.setState({measureValid:!1})},this._handleCollapseWidthChange=e=>{this._collapseWidth=e,this.setState({measureValid:!1})},this._handleMeasure=e=>{this.setState({availableWidth:e,measureValid:!1})};const{tools:t,windowMessageService:s,chartWidgetCollection:i,chartApiInstance:a,availableTimeFrames:n,isFundamental:o,favoriteIntervalsService:l,favoriteChartStylesService:h,favoriteStudyTemplatesService:m,studyTemplates:v,saveChartService:p,sharingChartService:S,loadChartService:f,snapshotUrl:b,openGlobalSearch:C}=e;this._showScrollbarWhen=(0,r.ensureDefined)(e.allowedModes).slice(-1),this._panelWidthChangeHandlers={full:this._handleFullWidthChange,medium:this._handleFavoritesWidthChange,small:this._handleCollapseWidthChange};const{chartChangesWatcher:E}=e;this._chartChangesWatcher=E;const g=(0,Z.getDefaultFavoriteChartStyles)(this.props.defaultFavoriteStyles);this._favoriteChartStylesService=h||new H.FavoriteChartStylesService(q.TVXWindowEvents,G,g);const y=(0,Z.getDefaultFavoriteResolutions)(this.props.defaultFavoriteIntervals);this._favoriteIntervalsService=l||new x.FavoriteIntervalsService(q.TVXWindowEvents,G,y),this._intervalsMenuViewStateService=new j(q.TVXWindowEvents,G),this._intervalService=new z.IntervalsService(a),this._templatesMenuVuewStateService=new $(q.TVXWindowEvents,G),this._registry={tools:t,isFundamental:o,chartWidgetCollection:i,windowMessageService:s,chartApiInstance:a,availableTimeFrames:n,favoriteStudyTemplatesService:m,studyTemplates:v,saveChartService:p,sharingChartService:S,loadChartService:f,intervalsMenuViewStateService:this._intervalsMenuViewStateService,favoriteChartStylesService:this._favoriteChartStylesService,favoriteIntervalsService:this._favoriteIntervalsService,intervalService:this._intervalService,chartChangesWatcher:this._chartChangesWatcher,chartWidget:i.activeChartWidget.value(),favoriteScriptsModel:Y.FavoriteScriptsModel.getInstance(),templatesMenuViewStateService:this._templatesMenuVuewStateService,snapshotUrl:b,openGlobalSearch:C},this.state={isVisible:!0,availableWidth:0,displayMode:"full",measureValid:!1,leftCustomElements:[],rightCustomElements:[]},this._readOnly=i.readOnly(),this._features={allowFavoriting:u.enabled("items_favoriting"),showIdeasButton:Boolean(this.props.ideas),
showLaunchInPopupButton:Boolean(this.props.popupButton),allowSymbolSearchSpread:u.enabled("header_symbol_search")&&!0,allowToolbarHiding:u.enabled("collapsible_header")},this._setDisplayMode=(0,d.default)(this._setDisplayMode,100),this._negotiateResizer()}componentDidUpdate(e,t){const{isVisible:s,measureValid:i}=this.state;s!==t.isVisible&&(h.emit("toggle_header",s),this._negotiateResizer()),i||this._setDisplayMode()}render(){const{resizerBridge:e,allowedModes:t,...s}=this.props,{displayMode:a,isVisible:o,leftCustomElements:l,rightCustomElements:c}=this.state,d={features:this._features,readOnly:this._readOnly,isFake:!1,saveLoadSyncEmitter:this._saveLoadSyncEmitter,leftCustomElements:l,rightCustomElements:c,...s},u={...d,isFake:!0,showScrollbarWhen:ie},h=(0,r.ensureDefined)(t),m=this.props.tools.PublishButtonManager||i.Fragment;return i.createElement(V.RegistryProvider,{value:this._registry,validation:ee},i.createElement(m,null,i.createElement("div",{className:n(se.toolbar,{[se.isHidden]:!o}),onClick:this.props.onClick},i.createElement("div",{className:se.overflowWrap},h.map((e=>i.createElement(N,{key:e,displayMode:e,onWidthChange:this._panelWidthChangeHandlers[e],...u}))),i.createElement(N,{key:"live",showScrollbarWhen:this._showScrollbarWhen,displayMode:a,onAvailableSpaceChange:this._handleMeasure,...d})))))}addButton(e,t){if(!t.useTradingViewStyle)return this._addCustomHTMLButton(e,t.align);this._addCustomTradingViewStyledButton(e,t)}addDropdown(e,t){const{leftCustomElements:s,rightCustomElements:i}=this.state,a={type:"Dropdown",id:e,params:t};"left"===t.align?this.setState({leftCustomElements:[...s,a]}):this.setState({rightCustomElements:[...i,a]})}updateDropdown(e,t){const s=t=>"Dropdown"===t.type&&t.id===e,i=this.state.leftCustomElements.find(s)||this.state.rightCustomElements.find(s);void 0!==i&&(i.params={...i.params,...t},this.setState({leftCustomElements:this.state.leftCustomElements.slice(),rightCustomElements:this.state.rightCustomElements.slice()}))}removeDropdown(e){const t=t=>"Dropdown"===t.type&&t.id!==e,s=this.state.leftCustomElements.filter(t),i=this.state.rightCustomElements.filter(t);this.setState({leftCustomElements:s,rightCustomElements:i})}_negotiateResizer(){this.props.resizerBridge.negotiateHeight(this.state.isVisible?X.HEADER_TOOLBAR_HEIGHT_EXPANDED:X.HEADER_TOOLBAR_HEIGHT_COLLAPSED)}_setDisplayMode(){const{availableWidth:e}=this.state,{allowedModes:t}=this.props,s={full:this._fullWidth,medium:this._favoritesWidth,small:this._collapseWidth},i=(0,r.ensureDefined)(t);let a=i.map((e=>s[e])).findIndex((t=>e>=t));-1===a&&(a=i.length-1);const n=i[a];this.setState({measureValid:!0,displayMode:n})}_addCustomHTMLButton(e,t="left"){const s=new P.WatchedValue(0),i=(0,te.parseHtmlElement)(`<div class="apply-common-tooltip ${se.customButton}">`),a={type:"Button",id:e,params:{key:Number(new Date),element:i,width:s}};return this._addCustomElementToState(t,a),i}_addCustomTradingViewStyledButton(e,t){const s={type:"TradingViewStyledButton",id:e,params:{key:Number(new Date),text:t.text,title:t.title,
onClick:t.onClick}};this._addCustomElementToState(t.align,s)}_addCustomElementToState(e,t){const{leftCustomElements:s,rightCustomElements:i}=this.state;"left"===e?this.setState({leftCustomElements:[...s,t]}):this.setState({rightCustomElements:[...i,t]})}}ae.defaultProps={allowedModes:["full","medium"]};class re{constructor(e,t){this._component=null,this._handleRef=e=>{this._component=e},this._container=e,a.render(i.createElement(ae,{...t,ref:this._handleRef}),this._container)}destroy(){a.unmountComponentAtNode(this._container)}getComponent(){return(0,r.ensureNotNull)(this._component)}}},574283:(e,t,s)=>{"use strict";s.d(t,{FavoriteChartStylesService:()=>a});var i=s(699466);class a extends i.CommonJsonStoreService{constructor(e,t,s=[]){super(e,t,"FAVORITE_CHART_STYLES_CHANGED","StyleWidget.quicks",s)}}},151363:(e,t,s)=>{"use strict";s.d(t,{FavoriteIntervalsService:()=>n});var i=s(699466),a=s(731042),r=s(337779);class n extends i.AbstractJsonStoreService{constructor(e,t,s){super(e,t,"FAVORITE_INTERVALS_CHANGED","IntervalWidget.quicks",s)}_serialize(e){return(0,r.uniq)(e.map(a.normalizeIntervalString))}_deserialize(e){return(0,r.uniq)((0,a.convertResolutionsFromSettings)(e).filter(a.isResolutionMultiplierValid).map(a.normalizeIntervalString))}}},847564:(e,t,s)=>{"use strict";s.d(t,{RegistryProvider:()=>l,registryContextType:()=>d,useRegistry:()=>c,validateRegistry:()=>o});var i=s(50959),a=s(719036),r=s.n(a);const n=i.createContext({});function o(e,t){r().checkPropTypes(t,e,"context","RegistryContext")}function l(e){const{validation:t,value:s}=e;return o(s,t),i.createElement(n.Provider,{value:s},e.children)}function c(e){const t=(0,i.useContext)(n);return o(t,e),t}function d(){return n}},559773:(e,t,s)=>{"use strict";s.d(t,{favoriteChartStylesService:()=>p,favoriteIntervalsService:()=>v,favoriteStudyTemplatesService:()=>S,getDefaultFavoriteChartStyles:()=>h,getDefaultFavoriteResolutions:()=>m});var i=s(226722),a=s(62802),r=s(77122),n=s(731042),o=s(151363),l=s(574283),c=s(515105);const d={Area:3,"HLC area":16,Bars:0,Candles:1,"Heiken Ashi":8,"Hollow Candles":9,Line:2,Renko:4,Kagi:5,"Point & figure":6,"Line Break":7,Baseline:10,LineWithMarkers:14,Stepline:15,Columns:13,"High-low":12},u=["1","30","60"];function h(e=[]){let t=e.map((e=>d[e]))||[1,4,5,6];return r.enabled("widget")&&(t=[0,1,3]),t}function m(e=[]){return(0,n.mergeResolutions)(e,r.enabled("star_some_intervals_by_default")?u:[])}const v=new o.FavoriteIntervalsService(i.TVXWindowEvents,a,m()),p=new l.FavoriteChartStylesService(i.TVXWindowEvents,a,h()),S=new c.FavoriteStudyTemplateService(i.TVXWindowEvents,a)},158409:(e,t,s)=>{"use strict";s.r(t),s.d(t,{FavoriteScriptsModel:()=>u});var i=s(62802),a=s(226722),r=s(827523),n=s(971417)
;const o=JSON.parse('{"ACCD@tv-basicstudies":"STD;Accumulation_Distribution","studyADR@tv-basicstudies":"STD;Advance_Decline_Ratio_Bars","AROON@tv-basicstudies":"STD;Aroon","ATR@tv-basicstudies":"STD;Average_True_Range","AwesomeOscillator@tv-basicstudies":"STD;Awesome_Oscillator","BB@tv-basicstudies":"STD;Bollinger_Bands","BollingerBandsR@tv-basicstudies":"STD;Bollinger_Bands_B","BollingerBandsWidth@tv-basicstudies":"STD;Bollinger_Bands_Width","CMF@tv-basicstudies":"STD;Chaikin_Money_Flow","ChaikinOscillator@tv-basicstudies":"STD;Chaikin_Oscillator","ChoppinessIndex@tv-basicstudies":"STD;Choppiness_Index","DoubleEMA@tv-basicstudies":"STD;DEMA","WilliamR@tv-basicstudies":"STD;Willams_R","CCI@tv-basicstudies":"STD;CCI","CRSI@tv-basicstudies":"STD;Connors_RSI","DetrendedPriceOscillator@tv-basicstudies":"STD;DPO","DM@tv-basicstudies":"STD;DMI","DONCH@tv-basicstudies":"STD;Donchian_Channels","EaseOfMovement@tv-basicstudies":"STD;EOM","EFI@tv-basicstudies":"STD;EFI","ENV@tv-basicstudies":"STD;ENV","FisherTransform@tv-basicstudies":"STD;Fisher_Transform","HV@tv-basicstudies":"STD;Historical_Volatility","KLTNR@tv-basicstudies":"STD;Keltner_Channels","MOM@tv-basicstudies":"STD;Momentum","MF@tv-basicstudies":"STD;Money_Flow","UltimateOsc@tv-basicstudies":"STD;Ultimate_Oscillator","Trix@tv-basicstudies":"STD;TRIX","Stochastic@tv-basicstudies":"STD;Stochastic","StochasticRSI@tv-basicstudies":"STD;Stochastic_RSI","RSI@tv-basicstudies":"STD;RSI","ROC@tv-basicstudies":"STD;ROC","PriceOsc@tv-basicstudies":"STD;Price_Oscillator","MASimple@tv-basicstudies":"STD;SMA","OBV@tv-basicstudies":"STD;On_Balance_Volume","PSAR@tv-basicstudies":"STD;PSAR","VigorIndex@tv-basicstudies":"STD;Relative_Vigor_Index","VolatilityIndex@tv-basicstudies":"STD;Relative_Volatility_Index","SMIErgodicIndicator@tv-basicstudies":"STD;SMI_Ergodic_Indicator_Oscillator","SMIErgodicOscillator@tv-basicstudies":"STD;SMI_Ergodic_Oscillator","MACD@tv-basicstudies":"STD;MACD","MAWeighted@tv-basicstudies":"STD;WMA","MAExp@tv-basicstudies":"STD;EMA","hullMA@tv-basicstudies":"STD;Hull%1MA","chandeMO@tv-basicstudies":"STD;Chande_Momentum_Oscillator","TripleEMA@tv-basicstudies":"STD;TEMA","MAVolumeWeighted@tv-basicstudies":"STD;VWMA","WilliamsAlligator@tv-basicstudies":"STD;Williams_Alligator","WilliamsFractal@tv-basicstudies":"STD;Whilliams_Fractals"}');var l=s(707957);const c=o;let d=null;class u{constructor(e=i){this._favorites=[],this._favoritesChanged=new l.Delegate,this._settings=e,a.TVXWindowEvents.on("StudyFavoritesChanged",(e=>{const t=JSON.parse(e);this._loadFromState(t.favorites||[])})),this._settings.onSync.subscribe(this,this._loadFavs),this._loadFavs()}isFav(e){const t=this.favId(e);return-1!==this._findFavIndex(t)}toggleFavorite(e){this.isFav(e)?this.removeFavorite(e):this.addFavorite(e)}addFavorite(e){const t=this.favId(e);this._favorites.push(m(t)),this._favoritesChanged.fire(t),this._saveFavs()}removeFavorite(e){const t=this.favId(e),s=this._findFavIndex(t);-1!==s&&(this._favorites.splice(s,1),this._favoritesChanged.fire(t)),this._saveFavs()}favId(e){
return(0,n.isPineIdString)(e)?e:(0,n.extractPineId)(e)||(0,r.extractStudyId)(e)}favorites(){return this._favorites}favoritePineIds(){return this._favorites.filter((e=>"pine"===e.type)).map((e=>e.pineId))}favoritesChanged(){return this._favoritesChanged}static getInstance(){return null===d&&(d=new u),d}static create(e){return new u(e)}_loadFavs(){const e=this._settings.getJSON("studyMarket.favorites",[]);this._loadFromState(e)}_saveFavs(){const e=this._stateToSave();this._settings.setJSON("studyMarket.favorites",e,{forceFlush:!0}),a.TVXWindowEvents.emit("StudyFavoritesChanged",JSON.stringify({favorites:e}))}_stateToSave(){return this._favorites.map(h)}_loadFromState(e){this._favorites=e.map((e=>m(function(e){return e in c?c[e]:e}(e)))),this._favoritesChanged.fire()}_findFavIndex(e){return this._favorites.findIndex((t=>e===h(t)))}}function h(e){return"java"===e.type?e.studyId:e.pineId}function m(e){return(0,n.isPineIdString)(e)?{type:"pine",pineId:e}:{type:"java",studyId:e}}},661380:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10" width="20" height="10"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M2 1l8 8 8-8"/></svg>'},245820:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M4.56 14a10.05 10.05 0 00.52.91c.41.69 1.04 1.6 1.85 2.5C8.58 19.25 10.95 21 14 21c3.05 0 5.42-1.76 7.07-3.58A17.18 17.18 0 0023.44 14a9.47 9.47 0 00-.52-.91c-.41-.69-1.04-1.6-1.85-2.5C19.42 8.75 17.05 7 14 7c-3.05 0-5.42 1.76-7.07 3.58A17.18 17.18 0 004.56 14zM24 14l.45-.21-.01-.03a7.03 7.03 0 00-.16-.32c-.11-.2-.28-.51-.5-.87-.44-.72-1.1-1.69-1.97-2.65C20.08 7.99 17.45 6 14 6c-3.45 0-6.08 2-7.8 3.92a18.18 18.18 0 00-2.64 3.84v.02h-.01L4 14l-.45-.21-.1.21.1.21L4 14l-.45.21.01.03a5.85 5.85 0 00.16.32c.11.2.28.51.5.87.44.72 1.1 1.69 1.97 2.65C7.92 20.01 10.55 22 14 22c3.45 0 6.08-2 7.8-3.92a18.18 18.18 0 002.64-3.84v-.02h.01L24 14zm0 0l.45.21.1-.21-.1-.21L24 14zm-10-3a3 3 0 100 6 3 3 0 000-6zm-4 3a4 4 0 118 0 4 4 0 01-8 0z"/></svg>'},255646:e=>{e.exports={ar:["وضع العرض فقط"],ca_ES:["Mode només lectura"],cs:"View Only Mode",de:["Ansichtsmodus"],el:"View Only Mode",en:"View Only Mode",es:["Modo sólo lectura"],fa:"View Only Mode",fr:["Mode Voir uniquement"],he_IL:["מצב תצוגה בלבד"],hu_HU:"View Only Mode",id_ID:["Mode Hanya Melihat"],it:["Modalità di sola visualizzazione"],ja:["表示専用モード"],ko:["뷰 온리 모드"],ms_MY:["Mod Lihat Sahaja"],nl_NL:"View Only Mode",pl:["Tryb Podglądu"],pt:["Modo de Visualização"],ro:"View Only Mode",ru:['Режим "Только просмотр"'],sv:["Endast visningsläge"],th:["โหมดแบบดูอย่างเดียว"],tr:["Sadece Görme Modu"],vi:["Chế độ chỉ xem"],zh:["仅查看模式"],zh_TW:["僅查看模式"]}}}]);