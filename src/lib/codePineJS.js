study("ZO POWER")
//
fast_rsi_period = input(title="RSI PERIOD", type=input.integer, defval=14)
slow_rsi_period = input(title="Fast PERIOD", type=input.integer, defval=26)
ma_period = input(title="SLOW PERIOD", type=input.integer, defval=52)
rsi_fast = rsi(hl2, fast_rsi_period) - 50
rsi_slow = rsi(hl2, slow_rsi_period) - 50
Slow = wma(rsi_slow, ma_period)
Fast = wma(rsi_fast, ma_period)
// plot(rsi_, title = "INDICATOR BUFFER", style = plot.style_columns)
strong_long = Fast > Fast[1] and Slow > Slow[1] and Fast > 0
weak_long = (Fast < Fast[1] and Slow > Slow[1] and Fast > 0) or (Fast > Fast[1] and Slow > Slow[1] and Fast < 0 and Fast > Slow )
strong_short = Fast < Fast[1] and Slow < Slow[1] and Fast < 0
weak_short = (Fast > Fast[1] and Fast < 0 and Fast < Slow ) or (Fast < Fast[1] and Slow < Slow[1] and Fast > 0 and Fast < Slow)
color_power =  strong_long ? #00FF00 : weak_long ? #1e90ff : strong_short ? #ff0000 : weak_short ? #e39ff6 : #cfcfcf

// fill(plot(Slow), plot(0), color = color_power, transp = 50)
plot(Slow, title="Histogram", style=plot.style_columns, color = color_power, linewidth = 2)
//
hline(5)
hline(-5)




study("ZO Signal", overlay = true)
overridesym = true
pvsra_sym = syminfo.tickerid
pvsra_security(sresolution,sseries) => security(overridesym ? pvsra_sym : syminfo.tickerid ,sresolution,sseries[barstate.isrealtime?1:0], barmerge.gaps_off,barmerge.lookahead_off)
pvsra_volume = iff(overridesym == true, pvsra_security("",volume), volume)
pvsra_high = iff(overridesym == true, pvsra_security("",high), high)
pvsra_low = iff(overridesym == true, pvsra_security("",low), low)
pvsra_close = iff(overridesym == true, pvsra_security("",close), close)
pvsra_open = iff(overridesym == true, pvsra_security("",open), open)

// The below math matches MT4 PVSRA indicator source
// average volume from last 10 candles
av = iff(overridesym == true,(sum(pvsra_volume,10))/10,(sum(volume,10))/10)
//climax volume on the previous candle
value2 = iff(overridesym == true,pvsra_volume*(pvsra_high-pvsra_low),volume*(high-low))
// highest climax volume of the last 10 candles
hivalue2 = highest(value2,10) 
// VA value determines the bar color. va = 0: normal. va = 1: climax.  va = 2: rising
va = iff(overridesym == true,iff(pvsra_volume >= (av * 2) or value2 >= hivalue2, 1, iff(pvsra_volume >= av * 1.5, 2, 0)),iff(volume >= (av * 2) or value2 >= hivalue2, 1, iff(volume >= av * 1.5, 2, 0)))

// Bullish or bearish coloring
// isBull = iff(overridesym == true,pvsra_close > pvsra_open,close > open)

// CUColor = color.lime // Climax up (bull) bull and bear both start with b so it would be weird hence up down
// CDColor = color.red // Climax down (bear)

// AUColor = color.blue //Avobe average up (bull)
// ADColor = color.fuchsia //Above average down (bear))

// NUColor = #FF66FF
// NDColor = #3B55D5


// candleColor = iff(isBull,iff(va == 1,CUColor,iff(va == 2,AUColor,NUColor)),iff(va == 1,CDColor,iff(va == 2,ADColor,NDColor)))

ao = security(syminfo.tickerid, timeframe.period, sma(hl2,5)) - security(syminfo.tickerid, timeframe.period, sma(hl2,34))
diff = ao - ao[1]

// Hash Calc
hashc  = (open+high+low+close)/4
hasho  = float(na)
hasho  := na(hasho[1]) ? (open + close) / 2 : (nz(hasho[1]) + nz(hashc[1])) / 2
hashc1 = hasho < hashc ? hashc - abs(hashc-hasho)/2 : hashc + abs(hashc-hasho)/2
hashh  = max(high, max(hasho, hashc))
hashl  = min(low, min(hasho, hashc))
//
BullishStrongLong = ao >= 0 and diff >= 0 and ao[0] > ao[1] and hashc1 >= hasho ? #00F400 : na // ao xanh, nến tăng(ao dương)
BullishStrongShort = ao >= 0 and diff < 0 and ao[0] < ao[1] and hashc1 <= hasho ? #006C00 : na // ao giảm, nến giảm (ao dương)
BullishWeakLong = ao >= 0 and diff >= 0 and ao[0] > ao[1] and hashc1 <= hasho ? #0057AE : na // ao tăng, nến tăng(ao dương)
BullishWeakShort = ao >= 0 and diff < 0 and ao[0] < ao[1] and hashc1 >= hasho ? #1A8CFF : na // ao giảm, nến giảm(ao dương)

BearishStrongLong = ao < 0 and diff < 0 and ao[0] < ao[1] and hashc1 >= hasho ? #FF917D : na // ao giảm, nến tăng(ao âm)
BearishStrongShort = ao < 0 and diff < 0 and ao[0] < ao[1] and hashc1 <= hasho ? #FD2600 : na // ao giảm, nến giảm
BearishWeakLong = ao < 0 and diff >= 0 and ao[0] > ao[1] and hashc1 <= hasho ? #891289 : na // ao tăng, nến giảm
BearishWeakShort = ao < 0 and diff >= 0 and ao[0] > ao[1] and hashc1 >= hasho ? #F29FF2 : na // ao tăng, nến tăng

candleColor = (va == 2 or va == 1.5) ? color.yellow : na

plotcandle(hasho, hashh, hashl, hashc1,color = BullishStrongLong, bordercolor = BullishStrongLong  , wickcolor=color.gray)
plotcandle(hasho, hashh, hashl, hashc1,color = BullishStrongShort, bordercolor = BullishStrongShort  , wickcolor=color.gray)
plotcandle(hasho, hashh, hashl, hashc1,color = BullishWeakLong, bordercolor = BullishWeakLong  , wickcolor=color.gray)
plotcandle(hasho, hashh, hashl, hashc1,color = BullishWeakShort, bordercolor = BullishWeakShort  , wickcolor=color.gray)
plotcandle(hasho, hashh, hashl, hashc1,color = BearishStrongLong, bordercolor = BearishStrongLong  , wickcolor=color.gray)
plotcandle(hasho, hashh, hashl, hashc1,color = BearishStrongShort, bordercolor = BearishStrongShort  , wickcolor=color.gray)
plotcandle(hasho, hashh, hashl, hashc1,color = BearishWeakLong, bordercolor = BearishWeakLong  , wickcolor=color.gray)
plotcandle(hasho, hashh, hashl, hashc1,color = BearishWeakShort, bordercolor = BearishWeakShort  , wickcolor=color.gray)
plotcandle(hasho, hashh, hashl, hashc1,color = candleColor, bordercolor = candleColor  , wickcolor=color.gray)



study("Trend volume")
fast_rsi_period = input(title="RSI PERIOD", type=input.integer, defval=14)
slow_rsi_period = input(title="Fast PERIOD", type=input.integer, defval=26)
ma_period = input(title="SLOW PERIOD", type=input.integer, defval=52)
rsi_fast = rsi(accdist, fast_rsi_period) - 50
rsi_slow = rsi(accdist, slow_rsi_period) - 50
Slow = wma(rsi_slow, ma_period)
Fast = wma(rsi_fast, ma_period)
// plot(rsi_, title = "INDICATOR BUFFER", style = plot.style_columns)
strong_long = Fast > Fast[1] and Slow > Slow[1] and Fast > 0
weak_long = (Fast < Fast[1] and Slow > Slow[1] and Fast > 0) or (Fast > Fast[1] and Slow > Slow[1] and Fast < 0 and Fast > Slow )
strong_short = Fast < Fast[1] and Slow < Slow[1] and Fast < 0
weak_short = (Fast > Fast[1] and Fast < 0 and Fast < Slow ) or (Fast < Fast[1] and Slow < Slow[1] and Fast > 0 and Fast < Slow)
color_power =  strong_long ? #00FF00 : weak_long ? #1e90ff : strong_short ? #ff0000 : weak_short ? #e39ff6 : #cfcfcf

// fill(plot(Slow), plot(0), color = color_power, transp = 50)
plot(Slow, title="Histogram", style=plot.style_columns, color = color_power, linewidth = 2)





study("ZO TREND", overlay = true)
highMA = 13
lowMA = 50
ShowShortLabel = input(title="Show Short Label?", type=input.bool, defval=true)
Next1(from) => 
    next = from
    next := from == "1"? "5" : next
    next := from == "5"? "30" : next
    next := from == "30"? "60" : next
    next := from == "15"? "60" : next
    next := from == "60"? "240" : next
    next := from == "240"? "D" : next
    next := from == "D"? "W" : next 
    next := from == "W"? "M" : next
    next
    
Next2(from) => Next1(Next1(from))
Next3(from) => Next1(Next2(from))
Next4(from) => Next1(Next3(from))

Next(from, step) =>
    step == 0 ? from: step == 1 ? Next1(from): step == 2 ? Next2(from): step == 3 ? Next3(from): Next4(from)
//
close_tf0 = close
mtf1 = 1
tf1 = Next(timeframe.period, mtf1)    
mtf2 = 2
tf2 = Next(timeframe.period, mtf2)

//
indexHighTfTime = barstate.isrealtime ? 1 : 0
indexCurrTfTime = barstate.isrealtime ? 1 : 0
//

ema_high = ema(high, highMA)
ema_low = ema(low, highMA)
//
close_tf1 = security(syminfo.tickerid, tf1, close_tf0[indexHighTfTime])[indexCurrTfTime]
close_tf2= security(syminfo.tickerid, tf2, close_tf0[indexHighTfTime])[indexCurrTfTime]

//
ema_50_high = ema(high, lowMA)
ema_high_in_up = ema_50_high 
ema_high_in_down = ema_50_high
ema_50_high_tf1 = security(syminfo.tickerid, tf1, ema_50_high[indexHighTfTime])[indexCurrTfTime]
ema_50_low = ema(low,lowMA) 
ema_50_low_tf1 = security(syminfo.tickerid, tf1, ema_50_low[indexHighTfTime])[indexCurrTfTime]
ema_low_in_up = ema_50_low
ema_low_in_down = ema_50_low
//

ema_13_high_tf1 = security(syminfo.tickerid, tf1, ema_high[indexHighTfTime])[indexCurrTfTime] 
ema_13_low_tf1 = security(syminfo.tickerid, tf1, ema_low[indexHighTfTime])[indexCurrTfTime] 
//
ema_13_high_tf2 = security(syminfo.tickerid, tf2, ema_high[indexHighTfTime])[indexCurrTfTime] 
ema_13_low_tf2 = security(syminfo.tickerid, tf2, ema_low[indexHighTfTime])[indexCurrTfTime]
//
var trend_tf2 = 1
var trend_tf1 = 1
trend_tf2 := trend_tf2 == 1 and close_tf2 > ema_13_high_tf2 and close_tf2[1] < ema_13_high_tf2[1]  ? -1 : trend_tf2 == -1 and close_tf2 < ema_13_low_tf2 and close_tf2[1] > ema_13_low_tf2[1] ? 1 : trend_tf2
trend_tf1 := trend_tf1 == 1 and close_tf1 > ema_13_high_tf1 and close_tf1[1] < ema_13_high_tf1[1]  ? -1 : trend_tf1 == -1 and close_tf1 < ema_13_low_tf1 and close_tf1[1] > ema_13_low_tf1[1] ? 1 : trend_tf1
//

// trend_tf2_line_resever() =>
//     res = float(na)
//     if trend_tf2 == -1
//         res := ema_13_high_tf2
//     else if trend_tf2 == 1
//         res := ema_13_low_tf2
//     res
//
// plot(trend_tf2_line_resever(),color = trend_tf2 == 1 ? #FF0000 : #00ff11 , style = plot.style_line, linewidth = 1)
trend_tf2_line() =>
    res = float(na)
    if trend_tf2 == -1
        res := ema_13_low_tf2
    else if trend_tf2 == 1
        res := ema_13_high_tf2
    res
//
trend_tf1_line() =>
    res = float(na)
    if trend_tf1 == -1
        res := ema_13_low_tf1
    else if trend_tf1 == 1
        res := ema_13_high_tf1
    res
plot_trend_tf2 = plot(trend_tf2_line(),"Trend MTF", color = trend_tf2 == 1 ? #FF0000 : #00ff11 , style = plot.style_line, linewidth = 2)
plot_trend_tf1 = plot(trend_tf1_line(), "Current Trend TF", color = trend_tf1 == 1 ? #FA8072 : #008080 , style = plot.style_line, linewidth = 3)

// plot_ma_50_high = plot(ema_50_high_tf1, "High IZE Trend MTF", color = trend_tf2 == 1 ? color.yellow : na)
// plot_ma_50_low = plot(ema_50_low_tf1, "Low IZE Trend MTF", color = trend_tf2 == -1 ? #0080ff : na)

plot_ema_50_high_in_down = plot(ema_50_high, "High IZE Trend Down", color = ema_50_high < trend_tf1_line() ? #FA8072 : na, style = plot.style_line)
plot_ema_50_low_in_down = plot(ema_50_low, "Low IZE Trend Down", color = ema_50_high < trend_tf1_line() ? #FA8072 : na, style = plot.style_line)
plot_ema_50_high_in_up = plot(ema_50_high, "High IZE Trend Up", color = ema_50_low > trend_tf1_line() ? #008080 : na, style = plot.style_line)
plot_ema_50_low_in_up = plot(ema_50_low, "Low IZE Trend Up", color = ema_50_low > trend_tf1_line() ? #008080 : na, style = plot.style_line)

fill(plot_ema_50_high_in_down, plot_trend_tf1, color = trend_tf1_line() > ema_50_high ? #FA8072 : na, transp = 50 )
fill(plot_ema_50_low_in_up, plot_trend_tf1, color = trend_tf1_line() < ema_50_low ? #008080 : na, transp = 50)