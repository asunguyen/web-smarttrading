"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[9968],{715005:(e,t,s)=>{s.r(t),s.d(t,{StreamNotificationTools:()=>i});var n=s(262078),a=s(707957);const h="tvlive.streams.general";let r=null;class i{constructor(e){return this._pushstreamReconnect=new a.Delegate,this._streamChange=new a.Delegate,this._globalStreamsChange=new a.Delegate,this._pushStreamChannel=null,this._onMessage=e=>{this._streamChange.fire(e)},this._onGlobalStreamChange=e=>{this._globalStreamsChange.fire(e)},this._onReconnect=()=>{this._pushstreamReconnect.fire(!0)},r||(r=this,this.connect(e),r)}streamChange(){return this._streamChange}globalStreamsChange(){return this._globalStreamsChange}pushstreamReconnect(){return this._pushstreamReconnect}destroy(){this._unsubscribe(),r=null}connect(e){this._unsubscribe(),e&&(this._pushStreamChannel=`tvlive.streams.${e}`),this._subscribe()}_subscribe(){this._pushStreamChannel&&n.pushStreamMultiplexer.on(this._pushStreamChannel,this._onMessage),n.pushStreamMultiplexer.onReconnect(this._onReconnect),n.pushStreamMultiplexer.on(h,this._onGlobalStreamChange)}_unsubscribe(){this._pushStreamChannel&&n.pushStreamMultiplexer.off(this._pushStreamChannel),n.pushStreamMultiplexer.offReconnect(this._onReconnect),n.pushStreamMultiplexer.off(h)}}}}]);