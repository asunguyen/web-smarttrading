var zotrend = {
    name: "ST HTF",
    metainfo: {
      _metainfoVersion: 51,
      description: "ST HTF",
      shortDescription: "ST HTF",
      is_hidden_study: false,
      is_price_study: false,
      isCustomIndicator: true,
      linkedToSeries: true,

      id: "ST HTF@luuvietha",

      format: {
        type: "price",
        precision: 2,
      },
      plots: [
        {
          id: "plot_0",
          type: "line",
        },
        {
          id: "plot_1",
          type: "line",
        },
        {
          id: "plot_2",
          type: "line",
        },
        {
          id: "plot_3",
          type: "line",
        },
      ],
      styles: {
        plot_0: {
          title: "Trend MTF",
          histogramBase: 1,
        },
        plot_1: {
          title: "Current Trend TF",
          histogramBase: 1,
        },
        plot_2: {
          title: "High IZE Trend",
          histogramBase: 1,
        },
        plot_3: {
          title: "Low IZE Trend",
          histogramBase: 1,
        },
      },
      defaults: {
        styles: {
          plot_0: {
            linestyle: 0,
            visible: true,
            linewidth: 1,
            plottype: 0,
            trackPrice: false,
            transparency: 0,
            color: "#008FFF",
          },
          plot_1: {
            linestyle: 0,
            visible: true,
            linewidth: 1,
            plottype: 0,
            trackPrice: false,
            transparency: 0,
            color: "#04FF00",
          },
          plot_2: {
            linestyle: 0,
            visible: true,
            linewidth: 1,
            plottype: 0,
            trackPrice: false,
            transparency: 0,
            color: "#FF0000",
          },
        },
        inputs: {
          av: 30,
          pr: 14,
        },
        precision: 2,
      },
      inputs: [
        {
          id: "av",
          name: "AV",
          type: "integer",
          min: 1,
          max: 2e3,
        },
        {
          id: "pr",
          name: "PR",
          type: "integer",
          min: 1,
          max: 2e3,
        },
      ],
    },
    constructor: function () {
      this.init = function(context, input) {

      };
      this.main = function (context, inputCallback) {
        this._context = context;
        this._input = inputCallback;

        var AV = 13;
        var PR = 50;

        var high = PineJS.Std.high(this._context);
        var highS = this._context.new_var(high);
        var low = PineJS.Std.low(this._context);
        var lowS = this._context.new_var(low);
        var upMove = highS.get(0) - highS.get(1);
        var downMove = lowS.get(0) - lowS.get(1);
        var plusDM = upMove > downMove && upMove > 0 ? upMove : 0;
        var plusDMS = this._context.new_var(plusDM);
        var minusDM = downMove > upMove && downMove > 0 ? downMove : 0;
        var minusDMS = this._context.new_var(minusDM);

        var tr1 = highS.get(0) - lowS.get(0);
        var close = PineJS.Std.low(this._context);
        var closeS = this._context.new_var(close);
        var tr2 = Math.abs(highS.get(0) - closeS.get(1));
        var tr3 = Math.abs(lowS.get(0) - closeS.get(1));
        var trueRange = Math.max(Math.max(tr1, tr2), tr3);
        var trueRangeS = this._context.new_var(trueRange);
        var plusDI =
          (PineJS.Std.sma(plusDMS, AV, this._context) /
            PineJS.Std.sma(trueRangeS, AV, this._context)) *
          100;
        var minusDI =
          (PineJS.Std.sma(minusDMS, PR, this._context) /
            PineJS.Std.sma(trueRangeS, PR, this._context)) *
          100;

        var DX =
          (Math.abs(plusDI - minusDI) / (plusDI + minusDI)) * 100;
        var DXS = this._context.new_var(DX);
        var ADX = PineJS.Std.sma(DXS, PR, this._context);

        const A = plusDI < 20;
        const B = minusDI < 20;
        const E = ADX > AV;
        const P = plusDI;
        const Q = minusDI;

        const HL = P > Q;
        const LH = Q > P;
        const X = E && HL && B;
        const Y = E && LH && A;
        return [ADX, P, Q];

        
      };
    },
  }





//   study("ZO TREND", overlay = true)
// highMA = 13
// lowMA = 50
// ShowShortLabel = input(title="Show Short Label?", type=input.bool, defval=true)
// Next1(from) => 
//     next = from
//     next := from == "1"? "5" : next
//     next := from == "5"? "30" : next
//     next := from == "30"? "60" : next
//     next := from == "15"? "60" : next
//     next := from == "60"? "240" : next
//     next := from == "240"? "D" : next
//     next := from == "D"? "W" : next 
//     next := from == "W"? "M" : next
//     next
    
// Next2(from) => Next1(Next1(from))
// Next3(from) => Next1(Next2(from))
// Next4(from) => Next1(Next3(from))

// Next(from, step) =>
//     step == 0 ? from: step == 1 ? Next1(from): step == 2 ? Next2(from): step == 3 ? Next3(from): Next4(from)
// //
// close_tf0 = close
// mtf1 = 1
// tf1 = Next(timeframe.period, mtf1)    
// mtf2 = 2
// tf2 = Next(timeframe.period, mtf2)

// //
// indexHighTfTime = barstate.isrealtime ? 1 : 0
// indexCurrTfTime = barstate.isrealtime ? 1 : 0
// //

// ema_high = ema(high, highMA)
// ema_low = ema(low, highMA)
// //
// close_tf1 = security(syminfo.tickerid, tf1, close_tf0[indexHighTfTime])[indexCurrTfTime]
// close_tf2= security(syminfo.tickerid, tf2, close_tf0[indexHighTfTime])[indexCurrTfTime]

// //
// ema_50_high = ema(high, lowMA)
// ema_high_in_up = ema_50_high 
// ema_high_in_down = ema_50_high
// ema_50_high_tf1 = security(syminfo.tickerid, tf1, ema_50_high[indexHighTfTime])[indexCurrTfTime]
// ema_50_low = ema(low,lowMA) 
// ema_50_low_tf1 = security(syminfo.tickerid, tf1, ema_50_low[indexHighTfTime])[indexCurrTfTime]
// ema_low_in_up = ema_50_low
// ema_low_in_down = ema_50_low
// //

// ema_13_high_tf1 = security(syminfo.tickerid, tf1, ema_high[indexHighTfTime])[indexCurrTfTime] 
// ema_13_low_tf1 = security(syminfo.tickerid, tf1, ema_low[indexHighTfTime])[indexCurrTfTime] 
// //
// ema_13_high_tf2 = security(syminfo.tickerid, tf2, ema_high[indexHighTfTime])[indexCurrTfTime] 
// ema_13_low_tf2 = security(syminfo.tickerid, tf2, ema_low[indexHighTfTime])[indexCurrTfTime]
// //
// var trend_tf2 = 1
// var trend_tf1 = 1
// trend_tf2 := trend_tf2 == 1 and close_tf2 > ema_13_high_tf2 and close_tf2[1] < ema_13_high_tf2[1]  ? -1 : trend_tf2 == -1 and close_tf2 < ema_13_low_tf2 and close_tf2[1] > ema_13_low_tf2[1] ? 1 : trend_tf2
// trend_tf1 := trend_tf1 == 1 and close_tf1 > ema_13_high_tf1 and close_tf1[1] < ema_13_high_tf1[1]  ? -1 : trend_tf1 == -1 and close_tf1 < ema_13_low_tf1 and close_tf1[1] > ema_13_low_tf1[1] ? 1 : trend_tf1

// trend_tf2_line() =>
//     res = float(na)
//     if trend_tf2 == -1
//         res := ema_13_low_tf2
//     else if trend_tf2 == 1
//         res := ema_13_high_tf2
//     res
// //
// trend_tf1_line() =>
//     res = float(na)
//     if trend_tf1 == -1
//         res := ema_13_low_tf1
//     else if trend_tf1 == 1
//         res := ema_13_high_tf1
//     res
// plot_trend_tf2 = plot(trend_tf2_line(),"Trend MTF", color = trend_tf2 == 1 ? #FF0000 : #00ff11 , style = plot.style_line, linewidth = 2)
// plot_trend_tf1 = plot(trend_tf1_line(), "Current Trend TF", color = trend_tf1 == 1 ? #FA8072 : #008080 , style = plot.style_line, linewidth = 3)

// plot_ema_50_high_in_down = plot(ema_50_high, "High IZE Trend Down", color = ema_50_high < trend_tf1_line() ? #FA8072 : na, style = plot.style_line)
// plot_ema_50_low_in_down = plot(ema_50_low, "Low IZE Trend Down", color = ema_50_high < trend_tf1_line() ? #FA8072 : na, style = plot.style_line)
// plot_ema_50_high_in_up = plot(ema_50_high, "High IZE Trend Up", color = ema_50_low > trend_tf1_line() ? #008080 : na, style = plot.style_line)
// plot_ema_50_low_in_up = plot(ema_50_low, "Low IZE Trend Up", color = ema_50_low > trend_tf1_line() ? #008080 : na, style = plot.style_line)

// fill(plot_ema_50_high_in_down, plot_trend_tf1, color = trend_tf1_line() > ema_50_high ? #FA8072 : na, transp = 50 )
// fill(plot_ema_50_low_in_up, plot_trend_tf1, color = trend_tf1_line() < ema_50_low ? #008080 : na, transp = 50)


// HTF convert demo

// var highMA = 13;
// var lowMA = 50;
// var close_tf0 = close;
// var trend_tf2 = 1;
// var trend_tf1 = 1;

// // Hàm Next1
// function Next1(from) {
//     var next = from;
//     next = from === "1" ? "5" : next;
//     next = from === "5" ? "30" : next;
//     next = from === "30" ? "60" : next;
//     next = from === "15" ? "60" : next;
//     next = from === "60" ? "240" : next;
//     next = from === "240" ? "D" : next;
//     next = from === "D" ? "W" : next;
//     next = from === "W" ? "M" : next;
//     return next;
// }

// // Hàm Next2
// function Next2(from) {
//     return Next1(Next1(from));
// }

// // Hàm Next3
// function Next3(from) {
//     return Next1(Next2(from));
// }

// // Hàm Next4
// function Next4(from) {
//     return Next1(Next3(from));
// }

// // Hàm Next
// function Next(from, step) {
//     return step === 0 ? from : step === 1 ? Next1(from) : step === 2 ? Next2(from) : step === 3 ? Next3(from) : Next4(from);
// }

// // Các phép toán khác
// var ema_high = ema(high, highMA);
// var ema_low = ema(low, highMA);

// var ema_50_high = ema(high, lowMA);
// var ema_50_low = ema(low, lowMA);

// var ema_13_high_tf1 = ema_high; // Giả sử giá trị ema_13_high_tf1 bằng ema_high
// var ema_13_low_tf1 = ema_low; // Giả sử giá trị ema_13_low_tf1 bằng ema_low
// var ema_13_high_tf2 = ema_high; // Giả sử giá trị ema_13_high_tf2 bằng ema_high
// var ema_13_low_tf2 = ema_low; // Giả sử giá trị ema_13_low_tf2 bằng ema_low

// // Cập nhật trend_tf2 và trend_tf1
// if (trend_tf2 === 1 && close_tf2 > ema_13_high_tf2 && close_tf2[1] < ema_13_high_tf2[1]) {
//     trend_tf2 = -1;
// } else if (trend_tf2 === -1 && close_tf2 < ema_13_low_tf2 && close_tf2[1] > ema_13_low_tf2[1]) {
//     trend_tf2 = 1;
// }

// if (trend_tf1 === 1 && close_tf1 > ema_13_high_tf1 && close_tf1[1] < ema_13_high_tf1[1]) {
//     trend_tf1 = -1;
// } else if (trend_tf1 === -1 && close_tf1 < ema_13_low_tf1 && close_tf1[1] > ema_13_low_tf1[1]) {
//     trend_tf1 = 1;
// }


// // Vẽ đồ thị
// plot(trend_tf2, "Trend MTF", color = trend_tf2 === 1 ? Color.red : Color.green, style = plot.style_line, linewidth = 2);
// plot(trend_tf1, "Current Trend TF", color = trend_tf1 === 1 ? Color.orange : Color.blue, style = plot.style_line, linewidth = 3);

// plot(ema_50_high - ema_50_low, "High IZE Trend", color = ema_50_high > ema_50_low ? Color.red : Color.blue, style = plot.style_histogram);
