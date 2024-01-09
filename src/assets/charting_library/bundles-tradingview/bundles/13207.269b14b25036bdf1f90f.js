"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[13207],{422300:(t,e,n)=>{n.d(e,{cubicBezierHitTest:()=>l,cubicBezierPoint:()=>o,extendQuadroBezier:()=>r,quadroBezierHitTest:()=>a});var i=n(204652),s=n(678515);function a(t,e,n,s,a){const o=n.subtract(t).length()+n.subtract(e).length(),l=Math.max(3/o,.02);let r;for(let o=0;;o+=l){o>1&&(o=1);const l=t.scaled((1-o)*(1-o)),h=n.scaled(2*o*(1-o)),d=e.scaled(o*o),c=l.add(h).add(d);if(void 0!==r){if((0,i.distanceToSegment)(c,r,s).distance<a)return!0}else if(c.subtract(s).length()<a)return!0;if(r=c,1===o)break}return!1}function o(t,e,n,i,a){a=(0,s.clamp)(a,0,1);const o=t.scaled((1-a)*(1-a)*(1-a)),l=e.scaled(3*(1-a)*(1-a)*a),r=n.scaled(3*(1-a)*a*a),h=i.scaled(a*a*a);return o.add(l).add(r).add(h)}function l(t,e,n,s,a,l){const r=e.subtract(t).length()+n.subtract(e).length()+s.subtract(n).length(),h=Math.max(3/r,.02);let d;for(let r=0;;r+=h){const h=o(t,e,n,s,r);if(void 0!==d){if((0,i.distanceToSegment)(h,d,a).distance<l)return!0}else if(h.subtract(a).length()<l)return!0;if(d=h,r>=1)break}return!1}function r(t,e,n,i,s){const a=n.subtract(t).length()+n.subtract(e).length();if(!a)return[];const o=function(t,e,n,i,s){const a=[],o=h(t.y,e.y,n.y,0).concat(h(t.y,e.y,n.y,s));for(let s=0;s<o.length;s++){const l=d(t.x,e.x,n.x,o[s]);l>=0&&l<=i&&a.push(o[s])}const l=h(t.x,e.x,n.x,0).concat(h(t.x,e.x,n.x,i));for(let i=0;i<l.length;i++){const o=d(t.y,e.y,n.y,l[i]);o>=0&&o<=s&&a.push(l[i])}return a}(t,e,n,i,s).filter((t=>t>1)).sort(((t,e)=>t-e));e.x>=0&&e.x<=i&&e.y>=0&&e.y<=s&&o.unshift(1);const l=3/a,r=[];for(let i=0;i<o.length-1;i+=2){let s=l,a=o[i],h=o[i+1]+s;const d=[];for(;a<=h;){const i=t.scaled((1-a)*(1-a)),o=n.scaled(2*a*(1-a)),l=e.scaled(a*a),r=i.add(o).add(l);if(d.length>0){d[d.length-1].subtract(r).length()<2&&(h+=s,s*=2)}d.push(r),a+=s}d.length>0&&r.push(d)}return r}function h(t,e,n,i){const s=[],a=t-2*n+e,o=2*n-2*t,l=t-i;if(Math.abs(a)>1e-8){const t=o*o-4*a*l;t>=0&&(s.push((-o+Math.sqrt(t))/(2*a)),s.push((-o-Math.sqrt(t))/(2*a)))}else s.push(-l/o);return s}function d(t,e,n,i){return(1-i)*(1-i)*t+2*(1-i)*i*n+i*i*e}},466289:(t,e,n)=>{n.d(e,{intersectLineWithViewport:()=>o});var i=n(86441);function s(t,e,n){return t>=e&&t<=n?t:null}function a(t,e,n,i){return Math.sign(t.x-e.x)===Math.sign(n.x-i.x)&&Math.sign(t.y-e.y)===Math.sign(n.y-i.y)}function o(t,e,n,o,l,r,h){const d=t.x>=0&&t.x<=l&&t.y>=0&&t.y<=r,c=e.x>=0&&e.x<=l&&e.y>=0&&e.y<=r;if(d&&c&&!n&&!o)return[t,e];if(t.x<0&&e.x<0&&(t.x<e.x?!o:!n)||t.x>l&&e.x>l&&(t.x<e.x?!n:!o)||t.y<0&&e.y<0&&(t.y<e.y?!o:!n)||t.y>r&&e.y>r&&(t.y<e.y?!n:!o))return null;const u=[];if(t.x===e.x){if(t.x<0||t.x>l)return null;t.y<e.y?u.push(new i.Point(t.x,0===h?0:t.y<0?t.y%h:-(h-t.y%h)),new i.Point(e.x,r)):u.push(new i.Point(t.x,0===h?r:t.y>r?r+(t.y-r)%h:r+(h-(r-t.y)%h)),new i.Point(e.x,0))}else if(t.y===e.y){if(t.y<0||t.y>r)return null;t.x<e.x?u.push(new i.Point(0===h?0:t.x<0?t.x%h:-(h-t.x%h),t.y),new i.Point(l,e.y)):u.push(new i.Point(0===h?l:t.x>l?l+(t.x-l)%h:l+(h-(l-t.x)%h),t.y),new i.Point(0,e.y))}else{
const a=(e.y-t.y)/(e.x-t.x),o=t.y-a*t.x;let d=0,c=0;const p=s(o,0,r);if(null!==p)if(h>0&&(t.x<=0||n&&t.x<e.x)){const e=t.x<=0?Math.sqrt(Math.pow(0-t.x,2)+Math.pow(p-t.y,2))%h:h-Math.sqrt(Math.pow(0-t.x,2)+Math.pow(p-t.y,2))%h;d=Math.cos(Math.atan(a))*e,c=a*d,u.push(new i.Point(-d,p-c))}else u.push(new i.Point(0,p));const _=s(a*l+o,0,r);if(null!==_)if(h>0&&(t.x>=l||n&&t.x>e.x)){const e=t.x>=l?Math.sqrt(Math.pow(t.x-l,2)+Math.pow(t.y-_,2))%h:h-Math.sqrt(Math.pow(t.x-l,2)+Math.pow(t.y-_,2))%h;d=Math.cos(Math.atan(a))*e,c=a*d,u.push(new i.Point(l+d,_+c))}else u.push(new i.Point(l,_));const f=s(-o/a,0,l);if(null!==f&&(0!==f||0!==p))if(h>0&&(t.y<=0||n&&t.y<e.y)){const e=t.y<=0?Math.sqrt(Math.pow(t.x-f,2)+Math.pow(t.y-0,2))%h:h-Math.sqrt(Math.pow(t.x-f,2)+Math.pow(t.y-0,2))%h;d=Math.cos(Math.atan(a))*e,c=a*d,u.push(new i.Point(f-Math.sign(a)*d,-Math.sign(a)*c))}else u.push(new i.Point(f,0));const g=s((r-o)/a,0,l);if(null!==g&&(0!==g||_!==r))if(h>0&&(t.y>=r||n&&t.y>e.y)){const e=t.y>=r?Math.sqrt(Math.pow(t.x-g,2)+Math.pow(t.y-r,2))%h:h-Math.sqrt(Math.pow(t.x-g,2)+Math.pow(t.y-r,2))%h;d=Math.cos(Math.atan(a))*e,c=a*d,u.push(new i.Point(g+Math.sign(a)*d,r+Math.sign(a)*c))}else u.push(new i.Point(g,r))}if(u.length<1)return null;if(u.length<2&&u.push(u[0]),!n&&d){return[t,a(u[0],u[1],t,e)?u[1]:u[0]]}if(!o&&c){return[a(u[0],u[1],t,e)?u[0]:u[1],e]}return a(u[0],u[1],t,e)?[u[0],u[1]]:[u[1],u[0]]}},402776:(t,e,n)=>{n.d(e,{ParallelChannelRenderer:()=>g});const i=function(t,e){for(var n,i=-1,s=t.length;++i<s;){var a=e(t[i]);void 0!==a&&(n=void 0===n?a:n+a)}return n};var s=n(999097);const a=function(t){return t&&t.length?i(t,s.default):0};var o=n(327714),l=n(934026),r=n(86441),h=n(204652),d=n(5531),c=n(315801),u=n(239589),p=n(710455),_=n(787123),f=n(466289);class g extends p.MediaCoordinatesPaneRenderer{constructor(t,e){super(),this._data=null,this._backgroundPolygon=null,this._clippedLines=new Map,this._hittestResult=t||new c.HitTestResult(c.HitTarget.MovePoint),this._backHittestResult=e||new c.HitTestResult(c.HitTarget.MovePointBackground)}setData(t){this._data=t,this._backgroundPolygon=null,this._clippedLines.clear()}hitTest(t,e){if(null===this._data)return null;const{line1:n,line2:i,middleLine:s}=this._data,a=(0,o.size)({width:e.cssWidth,height:e.cssHeight}),r=(0,u.interactionTolerance)().line;for(const e of[n,i,s]){if(!e)continue;const n=this._getClippedLine(e,this._data,a);if(n){if((0,h.distanceToSegment)(n.points[0],n.points[1],t).distance<=r)return this._hittestResult}}if(this._data.hittestOnBackground&&this._data.fillBackground){const e=this._getBackgroundPolygon(this._data,a);if(e.length>0&&(0,l.pointInPolygon)(t,e))return this._backHittestResult}return null}_drawImpl(t){if(null===this._data)return;const{line1:e,line2:n,middleLine:i,skipLines:s,skipTopLine:a,fillBackground:o,backColor:l}=this._data,r=t.context;if(r.lineCap="round",s||this._drawLine(r,e,this._data,t.mediaSize),s||a||!n||this._drawLine(r,n,this._data,t.mediaSize),o&&n){const e=this._getBackgroundPolygon(this._data,t.mediaSize);if(e.length>0){r.beginPath(),
r.moveTo(e[0].x,e[0].y);for(let t=1;t<e.length;t++)r.lineTo(e[t].x,e[t].y);r.fillStyle=l,r.fill()}}i&&!this._data.skipLines&&this._drawLine(r,i,this._data,t.mediaSize)}_drawLine(t,e,n,i){const s=this._getClippedLine(e,n,i);if(!s)return;t.strokeStyle=s.color,t.lineWidth=s.lineWidth,(0,_.setLineStyle)(t,s.lineStyle),t.strokeStyle=s.color;const[a,o]=s.points;(0,_.drawPixelPerfectLine)(t,a.x,a.y,o.x,o.y)}_getClippedLine(t,e,n){let i=this._clippedLines.get(t);if(void 0===i){const{lineWidth:s,lineStyle:o,points:l}=t,{extendLeft:r,extendRight:h}=e,d=(0,f.intersectLineWithViewport)(l[0],l[1],r,h,n.width,n.height,a((0,_.computeDashPattern)(s,o)));i=null==d?null:{...t,points:d},this._clippedLines.set(t,i)}return i}_getBackgroundPolygon(t,e){var n;return this._backgroundPolygon||(this._backgroundPolygon=null!==(n=this._getBackgroundPolygonImpl(t,e))&&void 0!==n?n:[]),this._backgroundPolygon}_getBackgroundPolygonImpl(t,e){if(void 0===t.line2)return null;const[n,i]=t.line1.points,[s,a]=t.line2.points;if((0,r.equalPoints)(n,i)||(0,r.equalPoints)(s,a)||(0,h.distanceToLine)(n,i,s).distance<1e-6||(0,h.distanceToLine)(n,i,a).distance<1e-6)return null;if(e.width<=0||e.height<=0)return null;let o=[new r.Point(0,0),new r.Point(e.width,0),new r.Point(e.width,e.height),new r.Point(0,e.height)];return o=y(o,n,i,a),t.extendRight||(o=y(o,i,a,s)),o=y(o,a,s,n),t.extendLeft||(o=y(o,s,n,i)),o}}function y(t,e,n,i){return null!==t?(0,d.intersectPolygonAndHalfplane)(t,(0,r.halfplaneThroughPoint)((0,r.lineThroughPoints)(e,n),i)):null}},194483:(t,e,n)=>{n.d(e,{PolygonRenderer:()=>p});var i=n(934026),s=n(204652),a=n(541801),o=n(855152),l=n(315801),r=n(246733),h=n(710455),d=n(239589),c=n(787123),u=n(458963);class p extends h.MediaCoordinatesPaneRenderer{constructor(t){super(),this._data=null,this._backHittest=new l.HitTestResult(l.HitTarget.MovePointBackground),this._points=[],this._hittest=null!=t?t:new l.HitTestResult(l.HitTarget.MovePoint)}setData(t){this._data=t,this._points=t.points}hitTest(t){if(null===this._data||void 0!==this._data.mouseTouchable&&!this._data.mouseTouchable)return null;const e=Math.max((0,d.interactionTolerance)().line,Math.ceil(this._data.linewidth/2)),n=this._points.length;if(1===n){return(0,i.pointInCircle)(t,this._points[0],e)?this._hittest:null}for(let i=1;i<n;i++){const n=this._points[i-1],a=this._points[i];if((0,s.distanceToSegment)(n,a,t).distance<=e)return this._hittest}if(this._data.filled&&this._data.fillBackground&&n>0){const i=this._points[0],a=this._points[n-1];if((0,s.distanceToSegment)(i,a,t).distance<=e)return this._hittest}return this._data.filled&&this._data.fillBackground&&(0,i.pointInPolygon)(t,this._data.points)?this._backHittest:null}_drawImpl(t){var e,n;const i=t.context,s=this._points.length;if(null===this._data||0===s)return;if(1===s)return void this._drawPoint(i,this._points[0],this._data.linewidth/2,this._data.color);i.beginPath();const l=this._data.linestyle===u.LINESTYLE_SOLID?"round":"butt",h=null!==(e=this._data.linecap)&&void 0!==e?e:l;i.lineCap=h,i.strokeStyle=this._data.color,
i.lineWidth=this._data.linewidth,i.lineJoin=null!==(n=this._data.linejoin)&&void 0!==n?n:"round",(0,c.setLineStyle)(i,this._data.linestyle);const d=this._points[0];i.moveTo(d.x,d.y);for(const t of this._points)i.lineTo(t.x,t.y);if(this._data.filled&&this._data.fillBackground&&(i.fillStyle=(0,r.generateColor)(this._data.backcolor,this._data.transparency),i.fill()),this._data.filled&&!this._data.skipClosePath&&i.closePath(),s>1){if(this._data.leftend===o.LineEnd.Arrow){const t=this._correctArrowPoints(this._points[1],this._points[0],i.lineWidth,h);(0,a.drawArrow)(t[0],t[1],i,i.lineWidth,1)}if(this._data.rightend===o.LineEnd.Arrow){const t=this._correctArrowPoints(this._points[s-2],this._points[s-1],i.lineWidth,h);(0,a.drawArrow)(t[0],t[1],i,i.lineWidth,1)}}this._data.linewidth>0&&i.stroke()}_drawPoint(t,e,n,i){0!==n&&(t.beginPath(),t.fillStyle=i,t.arc(e.x,e.y,n,0,2*Math.PI,!0),t.fill(),t.closePath())}_correctArrowPoints(t,e,n,i){const s=e.subtract(t),a=s.length();if("butt"===i||a<1)return[t,e];const o=a+n/2;return[t,s.scaled(o/a).add(t)]}}},541801:(t,e,n)=>{n.d(e,{TrendLineRenderer:()=>p,drawArrow:()=>u});var i=n(650151),s=n(204652),a=n(855152),o=n(315801),l=n(787123),r=n(239589),h=n(199471),d=n(458963);function c(t,e,n,i,s){e.save(),e.fillStyle="#000000",e.beginPath(),e.arc(t.x*s,t.y*s,n*s,0,2*Math.PI,!1),e.fill(),i.strokeWidth&&(e.lineWidth=i.strokeWidth,e.stroke()),e.restore()}function u(t,e,n,i,s,a=!1){if(e.subtract(t).length()<1)return;const o=(0,r.getArrowPoints)(t,e,i,a,!0).slice(0,2);let l=null;for(let t=0;t<o.length;++t){const e=o[t][0],i=o[t][1];(null===l||l.subtract(e).length()>1)&&n.moveTo(e.x*s,e.y*s),n.lineTo(i.x*s,i.y*s),l=i}}class p{constructor(){this._data=null,this._hittest=new o.HitTestResult(o.HitTarget.MovePoint)}setData(t){this._data=t}setHitTest(t){this._hittest=t}draw(t,e){const n=this._data;if(null===n)return;if("points"in n&&n.points.length<2)return;const i=e.pixelRatio;void 0!==n.excludeBoundaries&&(t.save(),(0,h.addExclusionArea)(t,e,n.excludeBoundaries));const{linestyle:s,lineCap:a=(s===d.LINESTYLE_SOLID?"round":"butt")}=n;t.lineCap=a,t.lineJoin="round",t.strokeStyle=n.color,t.lineWidth=Math.max(1,Math.floor(n.linewidth*i)),(0,l.setLineStyle)(t,s);const o=n.points[0],r=n.points[1];let c=[];t.beginPath(),n.overlayLineEndings?c=[o.clone(),r.clone()]:this._drawEnds(t,[o,r],n.linewidth,i);const u=this._extendAndClipLineSegment(o,r,e);null!==u&&n.linewidth>0&&(0,l.addPixelPerfectLineToPath)(t,u[0].x,u[0].y,u[1].x,u[1].y,i),n.overlayLineEndings&&this._drawEnds(t,c,n.linewidth,i),t.stroke(),void 0!==n.excludeBoundaries&&t.restore()}hitTest(t,e){const n=this._data;if(null===n)return null;if("points"in n&&n.points.length<2)return null;const i=(0,r.interactionTolerance)().line,a=n.points[0],o=n.points[1],l=this._extendAndClipLineSegment(a,o,e);if(null!==l){if((0,s.distanceToSegment)(l[0],l[1],t).distance<=i)return this._hittest}return null}_extendAndClipLineSegment(t,e,n){const s=(0,i.ensureNotNull)(this._data);return(0,
r.extendAndClipLineSegment)(t,e,n.cssWidth,n.cssHeight,s.extendleft,s.extendright)}_drawEnds(t,e,n,s){const o=e[0],l=e[1],r=(0,i.ensureNotNull)(this._data);switch(r.leftend){case a.LineEnd.Arrow:u(l,o,t,n,s);break;case a.LineEnd.Circle:c(o,t,n,(0,i.ensureDefined)(r.endstyle),s)}switch(r.rightend){case a.LineEnd.Arrow:u(o,l,t,n,s);break;case a.LineEnd.Circle:c(l,t,n,(0,i.ensureDefined)(r.endstyle),s)}}}},758363:(t,e,n)=>{n.d(e,{VerticalLineRenderer:()=>r});var i=n(315801),s=n(787123),a=n(239589),o=n(199471),l=n(43192);class r extends l.BitmapCoordinatesPaneRenderer{constructor(){super(...arguments),this._data=null,this._hitTest=new i.HitTestResult(i.HitTarget.MovePoint)}setData(t){this._data=t}setHitTest(t){this._hitTest=t}hitTest(t){if(null===this._data||null===this._hitTest)return null;const e=(0,a.interactionTolerance)().line,n=Math.abs(t.x-this._data.x)<=e+this._data.linewidth/2,i=void 0===this._data.top||this._data.top-t.y<=e,s=void 0===this._data.bottom||t.y-this._data.bottom<=e;return n&&i&&s?this._hitTest:null}_drawImpl(t){if(null===this._data||this._data.linewidth<=0)return;const{context:e,horizontalPixelRatio:n,verticalPixelRatio:i,mediaSize:a}=t;if(this._data.x<-this._data.linewidth/2||this._data.x>a.width+this._data.linewidth/2)return;e.lineCap="butt",e.strokeStyle=this._data.color,e.lineWidth=Math.max(1,Math.floor(this._data.linewidth*n)),void 0!==this._data.linestyle&&(0,s.setLineStyle)(e,this._data.linestyle);const l=void 0!==this._data.top?Math.max(this._data.top,0):0,r=void 0!==this._data.bottom?Math.min(this._data.bottom,a.height):a.height,h=Math.round(this._data.x*n),d=Math.floor(l*i),c=Math.ceil(r*i),u=this._data.excludeBoundaries;void 0!==u&&(0,o.addExclusionAreaByScope)(t,u),(0,s.drawVerticalLine)(e,h,d,c)}}},295906:(t,e,n)=>{n.d(e,{prepareLinearRegressionRenderersData:()=>l});var i=n(650151),s=n(86441),a=n(855152),o=n(422333);function l(t,e){const n={lines:[],pearsons:null};if(!e.properties().visible.value())return n;const l=t.timeScale(),r=e.priceScale(),h=t.mainSeries().firstBar();if(!r||r.isEmpty()||l.isEmpty()||!h)return n;const d=e.startIndex(),c=e.endIndex();if(null===d||null===c)return n;const u=[e.baseLine(),e.downLine(),e.upLine()],p=Math.round(l.indexToCoordinate(d)),_=Math.round(l.indexToCoordinate(c)),f=e.properties(),g=[f.styles.baseLine,f.styles.downLine,f.styles.upLine],y=h[4];for(let o=0;o<u.length;o++){if(1!=(1&g[o].display.value()))continue;const l=(0,i.ensureNotNull)(u[o]).startPrice,h=(0,i.ensureNotNull)(u[o]).endPrice;if(void 0===l||void 0===h)continue;const d=r.priceToCoordinate(l,y),c=r.priceToCoordinate(h,y),x=new s.Point(p,d),w=new s.Point(_,c),P=g[o].color.value(),M=g[o].linewidth.value(),L=g[o].linestyle.value(),v={points:[x,w],width:t.timeScale().width(),height:(0,i.ensureNotNull)(e.priceScale()).height(),color:P,linewidth:M,linestyle:L,extendleft:!1,extendright:f.styles.extendLines.value(),leftend:a.LineEnd.Normal,rightend:a.LineEnd.Normal};n.lines.push(v)}const x=(0,i.ensureNotNull)(e.downLine());if(f.styles.showPearsons.value()&&void 0!==x.startPrice){
const t=r.priceToCoordinate(x.startPrice,y),i=new s.Point(p,t);n.pearsons={points:[i],text:""+e.pearsons(),color:f.styles.downLine.color.value(),vertAlign:"top",horzAlign:"center",font:o.CHART_FONT_FAMILY,offsetX:0,offsetY:4,fontsize:12}}return n}}}]);