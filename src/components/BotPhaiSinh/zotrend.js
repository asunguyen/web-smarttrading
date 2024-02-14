var zotrend = {
    name: "ZO TREND",
    metainfo: {
      _metainfoVersion: 51,
      description: "ZO TREND",
      shortDescription: "ZO TREND",
      is_hidden_study: false,
      is_price_study: false,
      isCustomIndicator: true,
      linkedToSeries: true,

      id: "ZO TREND@luuvietha",

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
      this.main = function (context, inputCallback) {
        this._context = context;
        this._input = inputCallback;
        var AV = this._input(0);
        var PR = this._input(1);
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
          (PineJS.Std.sma(plusDMS, PR, this._context) /
            PineJS.Std.sma(trueRangeS, PR, this._context)) *
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