
const { PineJS } = __webpack_require__(/*! ../tradingview/index */ "./.src/tradingview/index.js");

//////////////////////////////////////////////////////////////////////
// custom study
getPineJS = function () {
    initPineJS(PineJS);
    return PineJS;
}

initPineJS = function (ref) {
    if (ref._initPineJS)
        return;

    if (window && !window.PineJS) {
        window.PineJS = ref;
    }

    PineJS.Std.context_fix = function (ctx) {
        ctx.symbol.open = parseFloat(ctx.symbol.open);
        ctx.symbol.high = parseFloat(ctx.symbol.high);
        ctx.symbol.low = parseFloat(ctx.symbol.low);
        ctx.symbol.close = parseFloat(ctx.symbol.close);
        ctx.symbol.volume = parseFloat(ctx.symbol.volume);
    }

    PineJS.Std.symbolName = function (ctx) {
        var symbol = PineJS.Std.ticker(ctx);
        symbol = symbol.replaceAll("\"","");
        symbol = symbol.replaceAll("{","");
        symbol = symbol.replaceAll("}","");

        return symbol;
    }

    PineJS.Std.ref = function (e, periods) {
        return e.get(periods);
    }

    PineJS.Std.accdist2 = function(ctx) {
        var std = PineJS.Std;
        var h = std.high(ctx),
            l = std.low(ctx),
            c = std.close(ctx),
            v = std.volume(ctx);
        //return (c === h && c === l || h === l ? 0 : v * (2 * c - l - h) / (h - l));
        return Std.cum(c === h && c === l || h === l ? 0 : v * (2 * c - l - h) / (h - l), e);
    };


    PineJS.Std.rsi2 = function(arr, p, ctx) {
        var std = PineJS.Std;
        var x0 = arr.get(0); x1 = arr.get(1);

        var u = Math.max(x0-x1, 0); // upward change
        var d = Math.max(x1-x0, 0); // downward change

        aU = ctx.new_unlimited_var(u);
        aD = ctx.new_unlimited_var(d);

        var k = std.rma(aU, p, ctx);
        var l = std.rma(aD, p, ctx);

        return l!=0 ? (100 - (100 / (1 + (k/l)))) : NaN;
    }

    PineJS.Std.saveTicker = function (sym, res, time, open, high, low, close, volume) {
        var url = "https://stock.depvui.com/tv/index.php?act=ticker_save";
        var postData = {
            symbol : sym,
            resolution : res,
            time : time,
            open : open,
            high : high,
            low : low,
            close : close,
            volume : volume
        };

        $.post(url, postData, function (data){

        });
    }

    ref._initPineJS = true;
}

initPineJS(PineJS);


const BAlgo = {

    _hasError : false,
    onStudyCompleted : false,

    _onStudyCompleted : async function (source, study, result) {
        if (BAlgo.onStudyCompleted) {
            const std = PineJS.Std;
            const ctx = study._context;
            const input = {
                time: std.time(ctx),
                close: std.close(ctx),
                
                isLastBar: ctx.symbol.isLastBar,
            };
            
            BAlgo.onStudyCompleted({
                source,
                input, 
                result
            });
        }
    },

    max: (e) => {
        return defaultCompare.Std.max(e, 0)
    },
    
    min: (e) => {
        return -defaultCompare.Std.min(e, 0)
    },

    rsiVal: (rmaMinChange, rmaMaxChange) => {
        var pine = PineJS;
        return pine.Std.eq(rmaMinChange, 0) ? 100 : pine.Std.eq(rmaMaxChange, 0) ? 0 : 100 - 100 / (1 + rmaMaxChange / rmaMinChange)
    },
    
    rsi: (period, context) => {
        ctx = context;
        
        var close = std.close(ctx);

        var C0 = ctx.new_var(close)
        var r1Diff = std.change(C0)
        var maxChange = std.max(r1Diff);
        var MAXCHANGE = ctx.new_var(maxChange);
        var rmaMaxChange = std.rma(MAXCHANGE, period, ctx);
        var minChange = this.min(r1Diff);
        var MINCHANGE = ctx.new_var(minChange);
        var rmaMinChange = std.rma(MINCHANGE, period, ctx);
        
        return std.eq(rmaMinChange, 0) ? 100 : std.eq(rmaMaxChange, 0) ? 0 : 100 - 100 / (1 + rmaMaxChange / rmaMinChange);

        //return [this.rsiVal(rmaMinChange, rmaMaxChange)]
    },

    accdist: (e) => {
        var std = PineJS.Std;

        var h = std.high(e);
        var l = std.low(e);
        var c = std.close(e);
        var v = std.volume(e);

        var ad = (c === h && c === l || h === l ? 0 : v * (2 * c - l - h) / (h - l));
        
        return std.cum(ad, e);							
    },

    getHigherTimeframe:  (period) => {
        period = parseInt(period);

        if (period == 1) {
            return 5;
        } else if (period == 3) {
            return 10;
        } else if (period == 5) {
            return 30;
        } else if (period == 10) {
            return 30;
        } else if (period == 15) {
            return 60;
        } else if (period == 30) {
            return 120;
        } else if (period == 60) {
            return 180;
        } else if (period == 240) {
            return "D";
        }

        return NaN;
    },

    stTrend: (context, input) => {
        const ctx = context, std = PineJS.Std;
        var values = [];
        var iFast = 13;
        var iSlow = 50;
        var symbol;
        var hour, min, minOdd;
        var eh1s, el1s;

        var data = {};
        
        var tf0, tf1, tf1_mul;

        var h0, H0, h1, H1, eh1, EH1, EH1S,
            l0, L0, l1, L1, el1, EL1, EL1S,
            c0, C0, c1h, C1H, c1l, C1L, 
            rc1h, rc1l, reh1, rel1,
            eh0, el0, SIDE, side,
            trend, clr, cloud1, cloud2;

        try {
            symbol = ctx.symbol;
            hour = isNaN(symbol.time) ? NaN : std.hour(ctx);
            min = isNaN(symbol.time) ? NaN : std.minute(ctx);
            //console.log(`${hour}:${min} => ${hour*60+min}`);
            min = hour*60 + min;

            iFast = input && input(0) ? input(0) : iFast;
            iSlow = input && input(1) ? input(1) : iSlow;

            tf0 = std.interval(ctx);
            tf1 = BAlgo.getHigherTimeframe(tf0);
            if (Number.isInteger(tf1) && tf1<240) {
                tf1_mul = Math.round(tf1/tf0);
                if (std.isdwm(ctx)) { // day, week, month
                    minOdd = symbol.index % tf1_mul;
                } else { // intraday
                    minOdd = min % tf1_mul;
                }
            } else if (tf1>=240 || tf1 == "W" || tf1 == "D") {
                tf1_mul = 5;
                minOdd = (symbol.index % tf1_mul);
                //console.log(minOdd);
            } else {
                return [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, ];
            }

            h0 = std.high(ctx);
            H0 = ctx.new_var(h0);

            h1 = std.highest(H0, tf1_mul);
            H1 = ctx.new_var(h1);

            eh1 = std.ema(H1, iFast*tf1_mul, ctx);
            EH1 = ctx.new_var(eh1);
            
            EH1S = ctx.new_var(eh1);
            if (minOdd==0) {
                EH1S.set((eh1s=eh1));
            } else {
                eh1s = std.ref(EH1S, 1);
                EH1S.set(eh1s);
            }

            l0 = std.low(ctx);
            L0 = ctx.new_var(l0);

            l1 = std.lowest(L0, tf1_mul);
            L1 = ctx.new_var(l1);

            el1 = std.ema(L1, iFast*tf1_mul, ctx);
            EL1 = ctx.new_var(el1);

            EL1S = ctx.new_var(el1);
            if (minOdd==0) {
                EL1S.set((el1s=el1));
            } else {
                el1s = std.ref(EL1S, 1);
                EL1S.set(el1s);
            }

            c0 = std.close(ctx);
            C0 = ctx.new_var(c0);

            c1h = std.highest(C0, tf1_mul);
            C1H = ctx.new_var(c1h);

            c1l = std.lowest(C0, tf1_mul);
            C1L = ctx.new_var(c1l);
            
            rc1h = std.ref(C1H, 1);
            rc1l = std.ref(C1L, 1);
            
            reh1 = std.ref(EH1, 1);
            rel1 = std.ref(EL1, 1);

            eh0 = std.ema(H0, iSlow, ctx);
            el0 = std.ema(L0, iSlow, ctx);

            SIDE = ctx.new_var(NaN);
            side = SIDE.get(1);
            const o0 = std.open(ctx);
            var oc2 = (o0+c0)/2;
            var OC2 = ctx.new_var(oc2);
            var ma = std.sma(OC2, 5, ctx);
            var MA = ctx.new_var(ma);
            var rma = MA.get(1);

            SIDE = ctx.new_var(NaN);
            side = SIDE.get(1);

            if (ma < el1)
                side = -1;
            else if (ma > eh1)
                side = 1;
            
            // update trend side
            SIDE.set(side);

            trend = isNaN(side) ? NaN : (side > 0 ? el1 : eh1);
            trend = isNaN(side) ? NaN : (side > 0 ? el1s : eh1s);
            clr = isNaN(side) ? 0 : (side > 0 ? 1 : 0);

            cloud1 = trend;
            cloud2 = side>0 ? el0 : eh0;

            data = {
                side: side,
                eh1 : eh1,
                el1 : el1,

                eh1s : eh1s,
                el1s : el1s,

                eh0 : eh0,
                el0 : el0
            };

            values = [cloud1, clr, cloud2, clr, eh0, clr, el0, clr, 
                side, eh1, el1, eh1s, el1s, eh0, el0, ma];
        } catch (e) { 
            console.log(e);
        }

        return values;        
    },

    stPower: (context, input) => {
        var std = PineJS.Std;
        var ctx = context;
        var hl2, aHL2;
        var rsiFast, fast, Fast, rsiSlow, slow, Slow;
        var f0, s0, f1, s1;
        var o, c;
        
        var result = [NaN, 0, 0];

        try {

            var iFast=14, iSlow=26, iMA=52;

            var iFast = input && input(0) ? input(0) : iFast;
            var iSlow = input && input(1) ? input(1) : iSlow;
            var iMA = input && input(2) ? input(2) : iMA;

            std.context_fix(ctx);
            o = std.open(ctx); 
            c = std.close(ctx);

            hl2 = std.hl2(ctx);
            aHL2 = ctx.new_var(hl2);

            rsiFast = std.rsi2(aHL2, iFast, ctx) - 50;
            fast = std.wma(ctx.new_var(rsiFast), iMA, ctx);
            Fast = ctx.new_var(fast);

            rsiSlow = std.rsi2(aHL2, iSlow, ctx) - 50;
            slow = std.wma(ctx.new_var(rsiSlow), iMA, ctx);
            Slow = ctx.new_var(slow);

            f0 = Fast.get(0); f1 = Fast.get(1);
            s0 = Slow.get(0); s1 = Slow.get(1);

            var strong_long = (f0>f1 && s0>s1 && f0>0) ? 1 : 0;
            var weak_long = ((f0 < f1 && s0 > s1 && f0 > 0) || (f0 > f1 && s0 > s1 && f0 < 0 && f0 > s0 )) ? 1 : 0;
            var strong_short = (f0 < f1 && s0 < s1 && f0 < 0) ? 1 : 0;
            var weak_short = ((f0 > f1 && f0 < 0 && f0 < s0 ) || (f0 < f1 && s0 < s1 && f0 > 0 && f0 < s0)) ? 1 : 0;

            var color = strong_long ? 0 : weak_long ? 1 : strong_short ? 2 : weak_short ? 3 : 4;
            
            result = [slow, color, fast];
        
        } catch (e) {
            if (BAlgo._hasError)
                return result;
            BAlgo._hasError = !0;
            console.log(e);
        }

        return result;
    },

    stVolume: (context, input) => {
        var std = PineJS.Std;
        var ctx = context;
        var ac, aAC;
        var rsiFast, fast, Fast, rsiSlow, slow, Slow;
        var f0, s0, f1, s1;
        var time;

        var result = [NaN, 0, 0];

        try {
            var iFast=14, iSlow=26, iMA=52;

            var iFast = input && input(0) ? input(0) : iFast;
            var iSlow = input && input(1) ? input(1) : iSlow;
            var iMA = input && input(2) ? input(2) : iMA;

            time = ctx.symbol.time;

            ac = BAlgo.accdist(ctx);
            aAC = ctx.new_var(ac);

            rsiFast = std.rsi2(aAC, iFast, ctx) - 50;
            //rsiFast = std.rsi(aAC, iFast) - 50;
            fast = std.wma(ctx.new_var(rsiFast), iMA, ctx);
            Fast = ctx.new_var(fast);

            rsiSlow = std.rsi2(aAC, iSlow, ctx) - 50;
            //rsiSlow = std.rsi(aAC, iSlow) - 50;
            slow = std.wma(ctx.new_var(rsiSlow), iMA, ctx);
            Slow = ctx.new_var(slow);

            f0 = Fast.get(0); f1 = Fast.get(1);
            s0 = Slow.get(0); s1 = Slow.get(1);

            var strong_long = (f0>f1 && s0>s1 && f0>0) ? 1 : 0;
            var weak_long = ((f0 < f1 && s0 > s1 && f0 > 0) || (f0 > f1 && s0 > s1 && f0 < 0 && f0 > s0 )) ? 1 : 0;
            var strong_short = (f0 < f1 && s0 < s1 && f0 < 0) ? 1 : 0;
            var weak_short = ((f0 > f1 && f0 < 0 && f0 < s0 ) || (f0 < f1 && s0 < s1 && f0 > 0 && f0 < s0)) ? 1 : 0;

            var color = strong_long ? 0 : weak_long ? 1 : strong_short ? 2 : weak_short ? 3 : 4;
            result = [slow, color, fast];
        } catch (e) {
            if (BAlgo._hasError)
                return result;
            BAlgo._hasError = !0;
            console.log(e);
        }

        return result;
    },

    stSignal: (context, input) => {
        var ctx = context, std = PineJS.Std;
        var result = [NaN, NaN, NaN, NaN, NaN, NaN, NaN];

        var iPeriod, symbol;
        var HH, ii, hi, lo, hl2, vol, aVol, 
            av, value2, aValue2, hiValue2,
            va, aHL2, sma1, sma2, ao, a0, a1, aAO, diff,
            hasho, hashc, hashc1, hashh, hashl,
            HO1, HC1, dx, clrFin, oref, cref, 
            clr;

        try {

            iPeriod = 50;
            iPeriod = input && input(0) ? input(0) : iPeriod;

            symbol = ctx.symbol;
            HH = !isNaN(symbol.time) ? std.hour(ctx) : NaN;
            ii = !isNaN(symbol.time) ? std.minute(ctx) : NaN;

            open = std.open(ctx);
            close = std.close(ctx);
            hi = std.high(ctx);
            lo = std.low(ctx);
            hl2 = (hi+lo)/2;
            vol = std.volume(ctx);

            aVol = ctx.new_var(vol);
            av = std.sum(aVol, 10, ctx) / 10;

            value2 = vol*(hi-lo);
            aValue2 = ctx.new_var(value2);

            hiValue2 = std.highest(aValue2, 10);
            va =  (vol>=2*av) || (value2>hiValue2) ? 1 : ((vol>=1.5*av) ? 2 : 0);

            aHL2 = ctx.new_var(hl2);
            sma1 = std.sma(aHL2, 5, ctx);
            sma2 = std.sma(aHL2, 34, ctx);
            
            ao = sma1 - sma2;
            aAO = ctx.new_var(ao);
            
            a0 = aAO.get(0); a1 = aAO.get(1);
            diff = a0 - a1;

            // calculate hashc
            hashc = (open+hi+lo+close)/4;
            HC1 = ctx.new_var(hashc);
            
            // calculate hasho
            HO1 = ctx.new_var(NaN);

            cref = HO1.get(1);
            oref = HC1.get(1);

            hasho = isNaN(oref) ? (open+close)/2 : (oref+cref)/2;
            
            HO1.set(hasho);
            
            // calculate hashc1
            dx = Math.abs(hashc-hasho)/2;
            hashc1 = hasho < hashc ? (hashc - dx) : (hashc + dx);
            
            // calculate hash high
            hashh = Math.max(hi, Math.max(hasho, hashc));

            // calculate hash open
            hashl = Math.min(lo, Math.min(hasho, hashc));

            //console.log(`STSignal, ${HH}:${ii}, ${oref}, ${cref}, ${hasho}, ${hashc}, ${hashc1}, ${hashh}, ${hashl}`);

            clrFin = 0;

            if (ao >= 0) {
                // BullishStrongLong
                clr = 1;
                clrFin = clrFin==0 && diff >= 0 && a0 > a1 && (hashc >= hasho) ? clr : clrFin; // ao tang, n?n tang(ao duong)

                // BullishStrongShort
                clr = 2;
                clrFin = clrFin==0 && diff < 0 && a0 < a1 && (hashc1 <= hasho) ? clr : clrFin;// ao gi?m, n?n gi?m (ao duong)

                //BullishWeakLong
                clr = 3;
                clrFin = clrFin==0 && diff >= 0 && a0 > a1 && hashc1 <= hasho ? clr : clrFin; // ao tang, n?n tang(ao duong)

                // BullishWeakShort
                clr = 4;
                clrFin = clrFin==0 && diff < 0 && a0 < a1 && hashc1 >= hasho ? clr : clrFin; // ao gi?m, n?n gi?m(ao duong)
            } else if (ao < 0) {
                // BearishStrongLong
                clr = 5;
                clrFin = clrFin==0 && diff < 0 && a0 < a1 && hashc1 >= hasho ? clr : clrFin; // ao gi?m, n?n tang(ao âm)

                // BearishStrongShort
                clr = 6;
                clrFin = clrFin==0 && diff < 0 && a0 < a1 && hashc1 <= hasho ? clr : clrFin; // ao gi?m, n?n gi?m

                // BearishWeakLong
                clr = 7;
                clrFin = clrFin==0 && diff >= 0 && a0 > a1 && hashc1 <= hasho ? clr : clrFin;// ao tang, n?n gi?m

                // BearishWeakShort
                clr = 8;
                clrFin = clrFin==0 && diff >= 0 && a0 > a1 && hashc1 >= hasho ? clr : clrFin; // ao tang, n?n tang
            }
            
            //clrFin = (clrFin ? clrFin : 0);
            //clrFin = va > 0 ? 9 : clrFin;

            result = [hasho, hashh, hashl, hashc1, clrFin, va];
        } catch (e) {
            if (BAlgo._hasError)
                return [NaN, NaN, NaN, NaN, 1]; 
            BAlgo._hasError = !0;
            console.log(e);
        }

        return result;
    },

    stBotSignal: (context, input, trend, signal, volume, power) => {
        var ctx = context, std = PineJS.Std;
        var result = [NaN, NaN];
        var buy = NaN, sell = NaN, short=NaN, cover=NaN;
        var index, side, vol, pow;

        var SIG, s1, s0=NaN;
        var time, symbol=ctx.symbol, isLastBar=false;
        var c0, h0, l0, eh0, el0, eh1, el1, eh1s, el1s;
        var EH1S, EL1S;
        var so, sh, sl, sc;
        var SO, SH, SL, SC;
        var b2c = NaN, B2C, b2c1;

        try {
            
            time = symbol.time;
            isLastBar = symbol.isLastBar;
        
            SIG = ctx.new_var(s0);
            s1 = std.ref(SIG, 1);

            b2c = NaN;
            B2C = ctx.new_var(b2c);
            b2c1 = std.ref(B2C, 1);
            
            //trend = trend ? trend[trend.length-1] : NaN;
            //console.log(trend);

            index = 8;
            side = (trend && trend[index++]) || NaN;
            eh1 = (trend && trend[index++]) || NaN;
            el1 = (trend && trend[index++]) || NaN;

            eh1s = (trend && trend[index++]) || NaN;
            el1s = (trend && trend[index++]) || NaN;

            eh0 = (trend && trend[index++]) || NaN;
            el0 = (trend && trend[index++]) || NaN;

            so = (signal && signal[0] || NaN);
            sh = (signal && signal[1] || NaN);
            sl = (signal && signal[2] || NaN);
            sc = (signal && signal[3] || NaN);

            vol = volume ? volume[0] : NaN;
            pow = power ? power[0] : NaN;

            // SH = ctx.new_var(sh);
            // SL = ctx.new_var(sl);

            // EH1S = ctx.new_var(eh1s);
            // EL1S = ctx.new_var(el1s);

            if (isNaN(s1) || s1==0) { // chưa có vị thế
            
                // đồng pha        
                buy = side>0 && vol>0 && pow>0;
                short = side<0 && vol<0 && pow<0;
                
                // hồi mây
                h0 = std.high(ctx);
                l0 = std.low(ctx);
                c0 = std.close(ctx);

                if (short) { // SHORT
                    h0 = std.high(ctx);
                    short = h0>= el1 ? 1 : 0;
                } else if (buy) {  // LONG
                    l0 = std.low(ctx)
                    buy = l0 <= eh1 ? 1 : 0;
                }

                // ex-rem
                s0 = buy ? 1 : (short ? -1 : s1);
                SIG.set(s0);

            } else { // đã có vị thế
            
                s0 = s1;

                // kiểm tra 5M đảo chiều
                if (s0 < 0 && side > 0) { // short => long
                    cover = 1;
                    s0 = 0;
                } else if (s0 > 0 && side < 0) { // long => short
                    sell = 1;
                    s0 = 0;
                } else { // stop loss

                    // h0 = std.high(ctx);
                    // l0 = std.low(ctx);
                    // h0 = l0 = c0 = Math.max(std.open(ctx), std.close(ctx));

                    h0 = sh; //l0 = c0 = Math.max(so, sc);

                    if (s0 < 0) { // short => cover
                        if (h0 >= eh1s) {
                            cover = 1;
                            s0 = 0;
                        } 
                    } else if (s0 < 0) { // long => sell
                        if (l0 <= el1s) {
                            sell = 1;
                            s0 = 0;
                        }
                    }
                }
                
                // // PP này không đúng
                // // kiểm tra đảo chiều đồng pha
                // if (s0<0 && side>0 && vol>0 && pow>0) {
                //     cover = 1;
                //     s0 = 0;
                // } else if (s0>0 && side<0 && vol<0 && pow<0) {
                //     sell = 1;
                //     s0 = 0;
                // }

                SIG.set(s0);
            }

            
            //var dt = new Date(time);
            //console.log(`${dt}: ${side}, ${vol}, ${pow}, s0=${s0}, s1=${s1}`);
            

            // if (s1 === s0) {
            //     buy = 0; short = 0;
            // }
            buy = sell = short = cover = 0;
            eh1s = side > 0 ? eh0 + 4 : el0 - 4;
            return [buy ? 1 : NaN, sell ? 1 : NaN, short ? 1 : NaN, cover ? 1 : NaN, eh1s, s0+1];
        } catch (e) {
            if (BAlgo._hasError)
                return [NaN, NaN, NaN, NaN, 1]; 
            BAlgo._hasError = !0;
            console.log(e);
        }
    },

    donchian: (range, ctx) => {
        var s = PineJS.std;
        var l0 = std.low(ctx);
        var L0 = ctx.new_var(l0);
        var h0 = std.high(ctx);
        var H0 = ctx.new_var(h0);
        var ll = std.lowest(L0, range, ctx);
        var hh = std.highest(H0, range, ctx);
        return std.avg(ll, hh);
    },
    
    ///////////////////////////////////////////////////////////////////
    // macd used by fansi bots
    macd: (arr, iFast=12, iSlow=26, iSignal=9, ctx) => {
        var std = PineJS.Std;

        // calculate MACD
        const emaFast = std.ema(arr, iFast, ctx);
        const emaSlow = std.ema(arr, iSlow, ctx);

        const macd = emaFast - emaSlow;

        // calculate Signal
        const MACD = ctx.new_var(macd);
        const signal = std.ema(MACD, iSignal, ctx);

        return { macd, signal };
    }
}

window.BAlgo = BAlgo;

module.exports = {
    BAlgo,
    getPineJS,
    initPineJS,
};