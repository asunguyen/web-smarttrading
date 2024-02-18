var zosignal = {
    name: 'ZO SIGNAL',
    metainfo: {
      _metainfoVersion: 51,

      id: 'advancedcolouringcandles@tv-basicstudies-1',
      name: 'ZO SIGNAL',
      description: 'ZO SIGNAL',
      shortDescription: 'ZO SIGNAL',

      isCustomIndicator: true,

      is_price_study: true,
      linkedToSeries: true,

      format: {
        type: 'price',
        precision: 2
      },

      plots: [
        {
          id: 'plot_open',
          type: 'ohlc_open',
          target: 'plot_candle'
        },
        {
          id: 'plot_high',
          type: 'ohlc_high',
          target: 'plot_candle'
        },
        {
          id: 'plot_low',
          type: 'ohlc_low',
          target: 'plot_candle'
        },
        {
          id: 'plot_close',
          type: 'ohlc_close',
          target: 'plot_candle'
        },
        {
          id: 'plot_bar_color',
          type: 'ohlc_colorer',
          palette: 'palette_bar',
          target: 'plot_candle'
        },
        {
          id: 'plot_wick_color',
          type: 'wick_colorer',
          palette: 'palette_wick',
          target: 'plot_candle'
        },
        {
          id: 'plot_border_color',
          type: 'border_colorer',
          palette: 'palette_border',
          target: 'plot_candle'
        }
      ],

      palettes: {
        palette_bar: {
          colors: [
            { name: 'Bullish Strong Long' },
            { name: 'Bullish Strong Short' },
            { name: 'Bullish Weak Long' },
            { name: 'Bullish Weak Short' },
            { name: 'Bearish Strong Long' },
            { name: 'Bearish Strong Short' },
            { name: 'Bearish Weak Long' },
            { name: 'Bearish Weak Short' },
            { name: 'Candle Color' }
          ],

          valToIndex: {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8
          }
        },
        palette_wick: {
          colors: [
            { name: 'Bullish Strong Long' },
            { name: 'Bullish Strong Short' },
            { name: 'Bullish Weak Long' },
            { name: 'Bullish Weak Short' },
            { name: 'Bearish Strong Long' },
            { name: 'Bearish Strong Short' },
            { name: 'Bearish Weak Long' },
            { name: 'Bearish Weak Short' },
            { name: 'Candle Color' }
          ],

          valToIndex: {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8
          }
        },
        palette_border: {
          colors: [
            { name: 'Bullish Strong Long' },
            { name: 'Bullish Strong Short' },
            { name: 'Bullish Weak Long' },
            { name: 'Bullish Weak Short' },
            { name: 'Bearish Strong Long' },
            { name: 'Bearish Strong Short' },
            { name: 'Bearish Weak Long' },
            { name: 'Bearish Weak Short' },
            { name: 'Candle Color' }
          ],

          valToIndex: {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8
          }
        }
      },

      ohlcPlots: {
        plot_candle: {
          title: 'Candles'
        }
      },

      defaults: {
        ohlcPlots: {
          plot_candle: {
            borderColor: '#000000',
            color: '#000000',
            drawBorder: true,
            drawWick: true,
            plottype: 'ohlc_candles',
            visible: true,
            wickColor: '#000000'
          }
        },

        palettes: {
          palette_bar: {
            colors: [
              { color: '#00F400', width: 1, style: 0 },
              { color: '#006C00', width: 1, style: 0 },
              { color: '#0057AE', width: 1, style: 0 },
              { color: '#1A8CFF', width: 1, style: 0 },
              { color: '#FF917D', width: 1, style: 0 },
              { color: '#FD2600', width: 1, style: 0 },
              { color: '#891289', width: 1, style: 0 },
              { color: '#F29FF2', width: 1, style: 0 },
              { color: '#FFEB3B', width: 1, style: 0 }
            ]
          },
          palette_wick: {
            colors: [
              { color: '#00F400' },
              { color: '#006C00' },
              { color: '#0057AE' },
              { color: '#1A8CFF' },
              { color: '#FF917D' },
              { color: '#FD2600' },
              { color: '#891289' },
              { color: '#F29FF2' },
              { color: '#FFEB3B' }
            ]
          },
          palette_border: {
            colors: [
              { color: '#00F400' },
              { color: '#006C00' },
              { color: '#0057AE' },
              { color: '#1A8CFF' },
              { color: '#FF917D' },
              { color: '#FD2600' },
              { color: '#891289' },
              { color: '#F29FF2' },
              { color: '#FFEB3B' }
            ]
          }
        },
        precision: 2,
        inputs: {}
      },
      styles: {},
      inputs: []
    },
    constructor: function() {
      this.init = function(context, inputCallback) {
        this._context = context
        this._input = inputCallback
        this.f_2 = function(src, len, ctx) {
          var series_0 = ctx.new_var(
            -PineJS.Std.min(PineJS.Std.change(src), 0)
          )
          return PineJS.Std.rma(series_0, len, ctx)
        }
        this.pvsra_security = function(
          overridesym,
          pvsra_sym,
          sresolution,
          sseries
        ) {
          var symbol = overridesym
            ? pvsra_sym
            : window.tvWidget.activeChart().symbol().split(':')[1]
          var realTimeIndex = barstate.isrealtime ? 1 : 0
          var series = sseries[realTimeIndex]
        }
      }
      this.main = function(context, inputCallback) {
        this._context = context
        this._input = inputCallback
        this._context.select_sym(0)
        const o = PineJS.Std.open(this._context)
        const h = PineJS.Std.high(this._context)
        const l = PineJS.Std.low(this._context)
        const c = PineJS.Std.close(this._context)
        const v = PineJS.Std.volume(this._context)

        var overridesym = true
        var pvsra_sym = true
        var pvsra_volume = this._context.new_var(v)
        var pvsra_high = this._context.new_var(h)
        var pvsra_low = this._context.new_var(l)
        var av =
            PineJS.Std.sum(
              this._context.new_var(pvsra_volume.get(1)),
              10,
              this._context
            ) / 10
        var value2 =
            pvsra_volume.get(1) * (pvsra_high.get(1) - pvsra_low.get(1))
        var value2S = this._context.new_var(value2)
        var hivalue2 = PineJS.Std.highest(value2S, 10, this._context)
        var va =
            pvsra_volume.get(1) >= av * 2 || value2 >= hivalue2
              ? 1
              : pvsra_volume.get(1) >= av * 1.5
                ? 2
                : 0
        var hl2 = (h + l) / 2
        var hl2S = this._context.new_var(hl2)
        var ao =
            PineJS.Std.sma(hl2S, 5, this._context) -
            PineJS.Std.sma(hl2S, 34, this._context)
        var aoS = this._context.new_var(ao)
        var diff = ao - aoS.get(1)
        var hashc = (o + h + l + c) / 4
        var hashcS = this._context.new_var(hashc)
        var hasho = (o + c) / 2
        var hashoS = this._context.new_var(hasho)
        hasho =
            (PineJS.Std.nz(hashoS.get(1), 0) +
              PineJS.Std.nz(hashcS.get(1), 0)) /
            2
        hashoS = this._context.new_var(hasho)
        hasho =
            (PineJS.Std.nz(hashoS.get(1), 0) +
              PineJS.Std.nz(hashcS.get(1), 0)) /
            2
        hashoS = this._context.new_var(hasho)
        var hashc1 =
            hashoS.get(0) < hashc
              ? hashc - Math.abs(hashc - hashoS.get(0)) / 2
              : hashc + Math.abs(hashc - hashoS.get(0)) / 2
        var hashh = Math.max(h, Math.max(hashoS.get(0), hashc))
        var hashl = Math.min(l, Math.min(hashoS.get(0), hashc))

        var color1 =
            ao >= 0 &&
            diff >= 0 &&
            ao > aoS.get(1) &&
            hashc1 >= hashoS.get(0)
              ? 0
              : 0 // ao xanh, nến tăng(ao dương)
        var color2 =
            ao >= 0 &&
            diff < 0 &&
            ao < aoS.get(1) &&
            hashc1 <= hashoS.get(0)
              ? 1
              : 0 // ao giảm, nến giảm (ao dương)
        var color3 =
            ao >= 0 &&
            diff >= 0 &&
            ao > aoS.get(1) &&
            hashc1 <= hashoS.get(0)
              ? 2
              : 0 // ao tăng, nến tăng(ao dương)
        var color4 =
            ao >= 0 &&
            diff < 0 &&
            ao < aoS.get(1) &&
            hashc1 >= hashoS.get(0)
              ? 3
              : 0 // ao giảm, nến giảm(ao dương)
        var color5 =
            ao < 0 &&
            diff < 0 &&
            ao < aoS.get(1) &&
            hashc1 >= hashoS.get(0)
              ? 4
              : 0 // ao giảm, nến tăng(ao âm)
        var color6 =
            ao < 0 &&
            diff < 0 &&
            ao < aoS.get(1) &&
            hashc1 <= hashoS.get(0)
              ? 5
              : 0 // ao giảm, nến giảm
        var color7 =
            ao < 0 &&
            diff >= 0 &&
            ao > aoS.get(1) &&
            hashc1 <= hashoS.get(0)
              ? 6
              : 0 // ao tăng, nến giảm
        var color8 =
            ao < 0 &&
            diff >= 0 &&
            ao > aoS.get(1) &&
            hashc1 >= hashoS.get(0)
              ? 7
              : 0 // ao tăng, nến tăng
        var color9 = va == 2 && va == 1.5 ? 8 : 0
        var color = Math.max(
          color1,
          color2,
          color3,
          color4,
          color5,
          color6,
          color7,
          color8,
          color9
        )

        // Color is determined randomly
        const colour = Math.round(Math.random())
        return [
          hashoS.get(0),
          hashh,
          hashl,
          hashc1,
          color /* bar*/,
          color /* wick*/,
          color /* border*/
        ]
      }
    }
  },