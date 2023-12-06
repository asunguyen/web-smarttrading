const customeIndicators = function(PineJS) {
  return Promise.resolve([
    {
      name: 'SMT Trend+',
      metainfo: {
        _metainfoVersion: 51,
        description: 'SMT Trend+',
        shortDescription: 'SMT Trend+',
        is_hidden_study: false,
        is_price_study: true,
        isCustomIndicator: true,
        linkedToSeries: true,
        isTVScript: false,
        id: 'SMT Trend+@tv-basicstudies-1',

        format: {
          type: 'price',
          precision: 2
        },
        plots: [
          {
            id: 'plot_2',
            type: 'line'
          },
          {
            id: 'palette_0',
            type: 'colorer',
            palette: 'palette_0',
            target: 'plot_2'
          },
          {
            id: 'plot_3',
            type: 'line'
          },
          {
            id: 'plot_0',
            type: 'shapes'
          },
          {
            id: 'plot_1',
            type: 'shapes'
          }
        ],
        palettes: {
          palette_0: {
            colors: [
              {
                name: 'Buy'
              },
              {
                name: 'Sell'
              }
            ],
            valToIndex: {
              0: 0,
              1: 1
            }
          }
        },
        styles: {
          plot_0: {
            isHidden: false,
            // location: 'Bottom',
            size: 'normal', // size of the shape, possible values are 'auto', 'tiny', 'small', 'normal', 'large', 'huge'
            text: 'SHORT',
            title: 'SHORT'
          },
          plot_1: {
            isHidden: false,
            // location: 'Bottom',
            size: 'normal', // size of the shape, possible values are 'auto', 'tiny', 'small', 'normal', 'large', 'huge'
            text: 'LONG',
            title: 'LONG'
          },
          plot_2: {
            linestyle: 0,
            visible: true,
            linewidth: 2,
            plottype: 0,
            trackPrice: false,
            transparency: 0,
            color: '#008FFF'
          },
          plot_3: {
            linestyle: 0,
            visible: true,
            linewidth: 2,
            plottype: 0,
            trackPrice: false,
            transparency: 0,
            color: '#AB2DFF'
          }
        },
        defaults: {
          styles: {
            plot_0: {
              color: '#B22222',
              textColor: '#FFFFFF',
              plottype: 'shape_label_down',
              location: 'AboveBar',
              visible: true,
              transparency: 0
            },
            plot_1: {
              color: '#32CD32',
              textColor: '#FFFFFF',
              plottype: 'shape_label_up',
              location: 'BelowBar',
              visible: true,
              transparency: 0
            },
            plot_2: {
              linestyle: 0,
              visible: true,
              linewidth: 2,
              plottype: 0,
              trackPrice: false,
              transparency: 0,
              color: '#FF0000'
            },
            plot_3: {
              linestyle: 0,
              visible: true,
              linewidth: 2,
              plottype: 0,
              trackPrice: false,
              transparency: 0,
              color: '#AB2DFF'
            }
          },
          inputs: {
            atrPeriod: 10,
            factor: 3
          },
          precision: 2,
          palettes: {
            palette_0: {
              colors: {
                0: {
                  color: '#642C94',
                  width: 2,
                  style: 0
                },
                1: {
                  color: '#32CD32',
                  width: 2,
                  style: 0
                }
              }
            }
          }
        },
        inputs: [
          {
            id: 'atrPeriod',
            name: 'ATR Length',
            type: 'integer',
            min: 1,
            max: 50
          },
          {
            id: 'factor',
            name: 'Factor',
            type: 'float',
            min: 1,
            step: 0.1,
            max: 2e3
          }
        ]
      },
      constructor: function() {
        this.init = function(context, inputCallback) {
          this._context = context
          this._input = inputCallback
          this.macd = function(source, fastMA, slowMA) {
            const fast = PineJS.Std.ema(source, fastMA, this._context)
            const slow = PineJS.Std.ema(source, slowMA, this._context)
            return slow - fast
          }
        }
        this.main = function(context, inputCallback) {
          this._context = context
          this._input = inputCallback

          const atrPeriod = this._input(0)
          const factor = this._input(1)
          const low = PineJS.Std.low(this._context)
          const high = PineJS.Std.high(this._context)
          const close = PineJS.Std.low(this._context)
          const closeS = this._context.new_var(close)
          const close1 = closeS.get(1)
          const sma = PineJS.Std.sma(closeS, 150, this._context)
          const currMacd = this.macd(closeS, 120, 260)
          const hl2 = (high + low) / 2
          const atr = PineJS.Std.atr(atrPeriod, this._context)
          const atr1 = this._context.new_var(atr).get(1)

          var upperBand = hl2 + factor * atr
          var upperBandS = this._context.new_var()
          var prevUpperBand = isNaN(upperBandS.get(1))
            ? 0
            : upperBandS.get(1)
          var lowerBand = hl2 - factor * atr
          var lowerBandS = this._context.new_var()
          var prevLowerBand = isNaN(lowerBandS.get(1))
            ? 0
            : lowerBandS.get(1)

          lowerBand =
            lowerBand > prevLowerBand
              ? lowerBand
              : close1 < prevLowerBand
                ? lowerBand
                : prevLowerBand
          lowerBandS.set(lowerBand)
          lowerBand = PineJS.Std.highest(lowerBandS, 10, this._context)

          upperBand =
            upperBand < prevUpperBand
              ? upperBand
              : close1 > prevUpperBand
                ? upperBand
                : prevUpperBand
          upperBandS.set(upperBand)
          upperBand = PineJS.Std.lowest(upperBandS, 10, this._context)

          var direction = NaN
          var superTrend = NaN
          var superTrendS = this._context.new_var()
          var prevSuperTrend = superTrendS.get(1)
          if (isNaN(atr1)) direction = 1
          else if (prevSuperTrend == prevUpperBand) {
            direction = close > upperBand ? -1 : 1
          } else direction = close < lowerBand ? 1 : -1
          superTrend = direction == -1 ? lowerBand : upperBand
          superTrendS.set(superTrend)

          var color = NaN
          if (direction < 0) color = 1
          else if (direction > 0) color = 0
          var long = NaN
          var short = NaN
          var signal = NaN
          var signalS = this._context.new_var()
          signal = isNaN(signalS.get(0))
            ? signalS.get(1)
            : signalS.get(0)
          if (
            currMacd > 0 &&
            color == 1 &&
            high > sma &&
            signalS.get(1) != 1
          ) {
            long = 1
            signal = 1
          } else if (
            currMacd < 0 &&
            color == 0 &&
            high < sma &&
            signalS.get(1) != 0
          ) {
            short = 1
            signal = 0
          }
          signalS.set(signal)

          return [superTrend, color, sma, short, long]
        }
      }
    },
    
  ])
}

