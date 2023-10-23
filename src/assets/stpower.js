export function st_power() {
    return {
        name: 'ST POWER',
        metainfo: {
            _metainfoVersion: 51,
            description: 'ST POWER',
            shortDescription: 'ST POWER',
            is_hidden_study: false,
            is_price_study: false,
            isCustomIndicator: true,
            linkedToSeries: true,

            id: 'ST POWER@tv-basicstudies-1',

            format: {
                type: 'price',
                precision: 2,
            },
            plots: [
                {
                    id: 'plot_0',
                    type: 'line'
                },
                {
                    id: "palette_0",
                    type: "colorer",
                    palette: "palette_0",
                    target: "plot_0",
                }
            ],
            palettes: {
                palette_0: {
                    colors: [
                        {
                            name: "Strong Long"
                        },
                        {
                            name: "Weak Long"
                        },
                        {
                            name: "Strong Short"
                        },
                        {
                            name: "Weak Short"
                        },
                        {
                            name: "None"
                        }
                    ],
                    valToIndex: {
                        0: 0,
                        1: 1,
                        2: 2,
                        3: 3,
                        4: 4,
                    }
                }
            },
            styles: {
                plot_0: {
                    title: "Histogram",
                    histogramBase: 1,
                }
            },
            defaults: {
                styles: {
                    plot_0: {
                        linestyle: 0,
                        visible: true,
                        linewidth: 1,
                        plottype: 5,
                        trackPrice: false,
                        transparency: 0,
                    }
                },
                inputs: {
                    rsi_pre: 14,
                    fast_pre: 26,
                    slow_pre: 52,
                },
                precision: 2,
                palettes: {
                    palette_0: {
                        colors: {
                            0: {
                                color: '#00FF00',
                                width: 1,
                                style: 0
                            },
                            1: {
                                color: '#1e90ff',
                                width: 1,
                                style: 0
                            },
                            2: {
                                color: '#ff0000',
                                width: 1,
                                style: 0
                            },
                            3: {
                                color: '#e39ff6',
                                width: 1,
                                style: 0
                            },
                            4: {
                                color: '#cfcfcf',
                                width: 1,
                                style: 0
                            }
                        }
                    }
                },
                bands: [{
                    color: '#808080',
                    linestyle: 2,
                    linewidth: 1,
                    visible: true,
                    value: 5
                },
                {
                    color: '#808080',
                    linestyle: 2,
                    linewidth: 1,
                    visible: true,
                    value: -5
                }],
                filledAreasStyle: {
                    fill_0: {
                        color: '#FFFFFF',
                        transparency: 80,
                        visible: true
                    }
                },
            },
            inputs: [
                {
                    id: "rsi_pre",
                    name: "RSI PERIOD",
                    type: "integer",
                    min: 1,
                    max: 2e3
                }, {
                    id: "fast_pre",
                    name: "Fast PERIOD",
                    type: "integer",
                    min: 1,
                    max: 2e3
                }, {
                    id: "slow_pre",
                    name: "SLOW PERIOD",
                    type: "integer",
                    min: 1,
                    max: 2e3
                },
            ],
            bands: [{
                id: 'hline_0',
                name: 'Upper Limit'
            },
            {
                id: 'hline_1',
                name: 'Lower Limit'
            }],
            filledAreas: [{
                id: 'fill_0',
                objAId: 'hline_0',
                objBId: 'hline_1',
                type: 'hline_hline',
                title: 'Hlines Background'
            }],
        },
        constructor: function () {
            this.init = function (context, inputCallback) {
                this._context = context;
                this._input = inputCallback;
                this.f_1 = function (src, len, ctx) {
                    var series_0 = ctx.new_var(PineJS.Std.max(PineJS.Std.change(src), 0));
                    return PineJS.Std.rma(series_0, len, ctx);
                };

                this.f_2 = function (src, len, ctx) {
                    var series_0 = ctx.new_var(
                        -PineJS.Std.min(PineJS.Std.change(src), 0)
                    );
                    return PineJS.Std.rma(series_0, len, ctx);
                };
            };
            this.main = function (context, inputCallback) {
                this._context = context;
                this._input = inputCallback;
                var fast_rsi_period = this._input(0);
                var slow_rsi_period = this._input(1);
                var ma_period = this._input(2);
                var hl2 = PineJS.Std.hl2(this._context);
                var hl2S = this._context.new_var(hl2);
                var rsi_fast = PineJS.Std.rsi(this.f_1(hl2S, fast_rsi_period, this._context), this.f_2(hl2S, fast_rsi_period, this._context)) - 50;
                var rsi_slow = PineJS.Std.rsi(this.f_1(hl2S, slow_rsi_period, this._context), this.f_2(hl2S, slow_rsi_period, this._context)) - 50;
                var rsi_fast_series = this._context.new_var(rsi_fast);
                var rsi_slow_series = this._context.new_var(rsi_slow);
                var slowX = PineJS.Std.wma(rsi_slow_series, ma_period, this._context);
                var fastX = PineJS.Std.wma(rsi_fast_series, ma_period, this._context);
                var slowS = this._context.new_var(slowX);
                var fastS = this._context.new_var(fastX);
                var slow = [slowS.get(0), slowS.get(1)];
                var fast = [fastS.get(0), fastS.get(1)];
                var strong_long = false;
                if (fast[0] > fast[1] && slow[0] > slow[1] && fast[0] > 0) strong_long = true;
                var strong_short = false;
                if (fast[0] < fast[1] && slow[0] < slow[1] && fast[0] < 0) strong_short = true;
                var weak_long = false;
                if ((fast[0] < fast[1] && slow[0] > slow[1] && fast[0] > 0) || (fast[0] > fast[1] && slow[0] > slow[1] && fast[0] < 0 && fast[0] > slow[0])) weak_long = true;
                var weak_short = false;
                if ((fast[0] > fast[1] && fast[0] < 0 && fast[0] < slow[0]) || (fast[0] < fast[1] && slow[0] < slow[1] && fast[0] > 0 && fast[0] < slow[0])) weak_short = true;
                var color_power;
                if (strong_long) color_power = 0;
                else if (weak_long) color_power = 1;
                else if (strong_short) color_power = 2;
                else if (weak_short) color_power = 3;
                else color_power = 4;
                return [slowS.get(0), color_power];
            };
        }
    };
}