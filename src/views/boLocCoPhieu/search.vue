<template>
  <div class="app-container market">
    <el-card>
      <div class="condition-search">
        <el-row>
          <el-col :span="8">
            <div class="grid-content">Giá trị giao dịch ròng của NĐTNN</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">-9.00T</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-slider
                v-model="foreignBuySellValue"
                range
                show-stops
                :max="9.0"
                :min="-9.0"
                :step="0.1"
              >
              </el-slider>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">9.00T</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content">
              <el-select
                v-model="foreignBuySellValuePhien"
                placeholder="Select"
              >
                <el-option
                  v-for="item in foreignBuySellValueOption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content">
              Biên độ giá đóng cửa theo số phiên (%)
            </div>
          </el-col>

          <el-col :span="1">
            <div class="grid-content">0.00</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-slider
                v-model="BienDoGia"
                range
                show-stops
                :max="1000"
                :min="-0"
                :step="0.1"
              >
              </el-slider>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">1.00K</div>
          </el-col>

          <el-col :span="4">
            <div class="grid-content">
              <el-select v-model="BienDoGiaPhien" placeholder="Select">
                <el-option
                  v-for="item in BienDoGiaPhienOption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content">
              Biên độ giá High - Low theo số phiên (%)
            </div>
          </el-col>

          <el-col :span="1">
            <div class="grid-content">0.00</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-slider
                v-model="BienDoGiaHigh"
                range
                show-stops
                :max="1000"
                :min="0"
                :step="0.1"
              >
              </el-slider>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">1.00k</div>
          </el-col>

          <el-col :span="4">
            <div class="grid-content">
              <el-select v-model="BienDoGiaHighLowPhien" placeholder="Select">
                <el-option
                  v-for="item in BienDoGiaHighLowPhienOption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content">P/E (TTM)</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">0.00</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-slider
                v-model="peValue"
                range
                show-stops
                :max="1325"
                :min="-0"
                :step="0.1"
              >
              </el-slider>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">13.25k</div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8">
            <div class="grid-content">EPS (TTM)</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">-30.00K</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-slider
                v-model="Eps_TTMValue"
                range
                show-stops
                :max="150"
                :min="30"
                :step="0.01"
              >
              </el-slider>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">1.50M</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content">Vốn hóa</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">0.00</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-slider
                v-model="MarketCap"
                range
                show-stops
                :max="686"
                :min="-0"
                :step="0.1"
              >
              </el-slider>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">686T</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content">Cổ tức bằng tiền (năm gần nhất)</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">0.00</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-slider
                v-model="CashDividend_LastYear"
                range
                show-stops
                :max="1950"
                :min="-0"
                :step="0.1"
              >
              </el-slider>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">19.50k</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content">Fscore</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">0.00</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-slider
                v-model="Fscore"
                range
                show-stops
                :max="12"
                :min="-0"
                :step="0.1"
              >
              </el-slider>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">12</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content">Mscore</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">0.00</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-slider
                v-model="Mscore"
                range
                show-stops
                :max="141"
                :min="-0"
                :step="0.1"
              >
              </el-slider>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">1.41K</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content">Zscore</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">-978</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-slider
                v-model="Zscore"
                range
                show-stops
                :max="378"
                :min="-978"
                :step="0.1"
              >
              </el-slider>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">378</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content">
              Thu nhập từ cổ tức năm gần nhất (Dividend Yield %)
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">0.00</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-slider
                v-model="DividendYield_LastYear"
                range
                show-stops
                :max="7"
                :min="-0"
                :step="0.001"
              >
              </el-slider>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">7.00</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content">KLTB 3 tháng</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">0.00</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-slider
                v-model="AvgVol3M"
                range
                show-stops
                :max="40"
                :min="-0"
                :step="0.1"
              >
              </el-slider>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">40.00M</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content">RS1m (1 tháng)</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">1.00</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-slider
                v-model="RS1M"
                range
                show-stops
                :max="99"
                :min="1"
                :step="1"
              >
              </el-slider>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">99</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content">RS3m (3 tháng)</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">1</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-slider
                v-model="RS3M"
                range
                show-stops
                :max="99"
                :min="1"
                :step="1"
              >
              </el-slider>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">99</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content">RS6m (6 tháng)</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">1</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-slider
                v-model="RS6M"
                range
                show-stops
                :max="99"
                :min="1"
                :step="1"
              >
              </el-slider>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">99</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content">RS52w (52 tuần)</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">1</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-slider
                v-model="RS52W"
                range
                show-stops
                :max="99"
                :min="1"
                :step="1"
              >
              </el-slider>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">99</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content">Khối lượng</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">0.00</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-slider
                v-model="TotalDealVol"
                range
                show-stops
                :max="50"
                :min="0"
                :step="0.01"
              >
              </el-slider>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">50.00M</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content">Giá trị giao dịch</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">0.00</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-slider
                v-model="TotalDealValue"
                range
                show-stops
                :max="132"
                :min="0"
                :step="0.01"
              >
              </el-slider>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">1.32T</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content">Khối lượng Trung bình theo số phiên</div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">0.00</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-slider
                v-model="TotalVolumeAvg"
                range
                show-stops
                :max="1"
                :min="0"
                :step="0.01"
              >
              </el-slider>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">1.00B</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content">
              <el-select v-model="TotalVolumeAvgPhien" placeholder="Select">
                <el-option
                  v-for="item in TotalVolumeAvgOption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="grid-content">
              Giá trị giao dịch Trung bình theo phiên
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">0.00</div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content">
              <el-slider
                v-model="TotalDealValueAvg"
                range
                show-stops
                :max="1"
                :min="0"
                :step="0.01"
              >
              </el-slider>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="grid-content">1.00T</div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content">
              <el-select v-model="TotalDealValueAvgPhien" placeholder="Select">
                <el-option
                  v-for="item in TotalDealValueAvgOption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card>
      <el-row>
        <el-col :span="12">
          <div class="grid-content">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="Có GD 5 phiên gần nhất"></el-checkbox>
              <el-checkbox label="Có GD 10 phiên gần nhất"></el-checkbox>
              <el-checkbox label="Có BCTC cập nhật thường xuyên"></el-checkbox>
            </el-checkbox-group>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-date-picker
              v-model="timeLoc"
              type="date"
              placeholder="Chọn thời gian lọc"
            >
            </el-date-picker>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">
            <el-button type="primary" plain @click="getData">Lọc</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2">
          <div class="grid-content">
            <el-tag>Kết quả lọc: {{ ketquaLoc }}</el-tag>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-tag type="success">Thời gian lọc: {{ timeLoc }}</el-tag>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-row>
      <el-card>
        <el-table
          :data="dataTable"
          style="width: 100%"
          height="500"
          v-loading="isLoading"
        >
          <el-table-column fixed prop="Symbol" label="Mã"> </el-table-column>
          <el-table-column
            prop="FSCreationTime"
            label="Ngày BC gần nhất"
            width="120"
          >
          </el-table-column>
          <el-table-column prop="quy" label="Quý BC gần nhất">
          </el-table-column>
          <el-table-column
            prop="foreignBuySellValue"
            :label="
              'Giá trị giao dịch ròng của NĐTNN trong ' +
              getLable('ForeignBuySellValue')
            "
          >
          </el-table-column>
          <el-table-column
            prop="BienDoGia"
            :label="'Biên độ giá đóng cửa trong ' + getLable('BienDoGia')"
          >
          </el-table-column>
          <el-table-column
            prop="BienDoGiaHighLow"
            :label="'Biên độ giá HL trong ' + getLable('BienDoGiaHighLow')"
          >
          </el-table-column>
          <el-table-column prop="PE" label="P/E (TTM)"> </el-table-column>
          <el-table-column prop="Eps_TTM" label="EPS (TTM)"> </el-table-column>
          <el-table-column prop="MarketCap" label="Vốn hóa"> </el-table-column>
          <el-table-column
            prop="CashDividend_LastYear"
            label="Cổ tức bằng tiền (năm gần nhất)"
          >
          </el-table-column>
          <el-table-column prop="Fscore" label="Fscore"> </el-table-column>
          <el-table-column prop="Mscore" label="Mscore"> </el-table-column>
          <el-table-column prop="Zscore" label="Zscore"> </el-table-column>
          <el-table-column
            prop="DividendYield_LastYear100"
            label="Thu nhập từ cổ tức năm gần nhất (Dividend Yield %)"
          >
          </el-table-column>
          <el-table-column prop="AvgVol3M" label="KLTB 3 tháng">
          </el-table-column>
          <el-table-column prop="RS1M" label="RS1m (1 tháng)">
          </el-table-column>
          <el-table-column prop="RS3M" label="RS3m (3 tháng)">
          </el-table-column>
          <el-table-column prop="RS6M" label="RS6m (6 tháng)">
          </el-table-column>
          <el-table-column prop="RS52W" label="RS52w (52 tuần)">
          </el-table-column>
          <el-table-column prop="TotalDealVol" label="Khối lượng">
          </el-table-column>
          <el-table-column prop="TotalDealValue" label="Giá trị giao dịch">
          </el-table-column>
          <el-table-column
            prop="TotalVolumeAvg"
            :label="'Khối lượng TB ' + getLable('TotalVolumeAvg')"
          >
          </el-table-column>
          <el-table-column
            prop="TotalDealValueAvg"
            :label="
              'Giá trị giao dịch TB theo ' + getLable('TotalDealValueAvg')
            "
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-row>
  </div>
</template>
  
<script>
import { bolocSearch } from "@/api/bolocApi";

export default {
  data() {
    return {
      isLoading: false,
      checkList: [],
      timeLoc: new Date(),
      foreignBuySellValue: [-9, 9],
      foreignBuySellValuePhien: "ForeignBuySellValue_5",
      foreignBuySellValueOption: [
        {
          value: "ForeignBuySellValue_5",
          label: "5 phiên",
        },
        {
          value: "ForeignBuySellValue_10",
          label: "10 phiên",
        },
        {
          value: "ForeignBuySellValue_20",
          label: "20 phiên",
        },
        {
          value: "ForeignBuySellValue_60",
          label: "60 phiên",
        },
        {
          value: "ForeignBuySellValue_120",
          label: "120 phiên",
        },
      ],

      //BienDoGia
      BienDoGia: [0, 1000],
      BienDoGiaPhien: "BienDoGia_5",
      BienDoGiaPhienOption: [
        {
          value: "BienDoGia_5",
          label: "5 phiên",
        },
        {
          value: "BienDoGia_10",
          label: "10 phiên",
        },
        {
          value: "BienDoGia_20",
          label: "20 phiên",
        },
        {
          value: "BienDoGia_60",
          label: "60 phiên",
        },
        {
          value: "BienDoGia_120",
          label: "120 phiên",
        },
      ],
      //BienDoGiaHighLow
      BienDoGiaHigh: [0, 1000],
      BienDoGiaHighLowPhien: "BienDoGiaHighLow_5",
      BienDoGiaHighLowPhienOption: [
        {
          value: "BienDoGiaHighLow_5",
          label: "5 phiên",
        },
        {
          value: "BienDoGiaHighLow_10",
          label: "10 phiên",
        },
        {
          value: "BienDoGiaHighLow_20",
          label: "20 phiên",
        },
        {
          value: "BienDoGiaHighLow_60",
          label: "60 phiên",
        },
        {
          value: "BienDoGiaHighLow_120",
          label: "120 phiên",
        },
      ],
      peValue: [0, 1000],
      Eps_TTMValue: [-2971, 15000],
      MarketCap: [0, 686],
      CashDividend_LastYear: [0, 1950],
      Fscore: [0, 12],
      Mscore: [0, 141],
      Zscore: [-978, 378],
      DividendYield_LastYear: [0, 7],
      AvgVol3M: [0, 40],
      RS1M: [1, 99],
      RS3M: [1, 99],
      RS6M: [1, 99],
      RS52W: [1, 99],
      TotalDealVol: [0, 50],
      TotalDealValue: [0, 132],
      TotalDealValueAvg: [0, 1],
      TotalDealValueAvgPhien: "TotalDealValueAvg_5",
      TotalDealValueAvgOption: [
        {
          value: "TotalDealValueAvg_5",
          label: "5 phiên",
        },
        {
          value: "TotalDealValueAvg_10",
          label: "10 phiên",
        },
        {
          value: "TotalDealValueAvg_20",
          label: "20 phiên",
        },
        {
          value: "TotalDealValueAvg_60",
          label: "60 phiên",
        },
        {
          value: "TotalDealValueAvg_120",
          label: "120 phiên",
        },
      ],
      TotalVolumeAvg: [0, 1],
      TotalVolumeAvgPhien: "TotalVolumeAvg_5",
      TotalVolumeAvgOption: [
        {
          value: "TotalVolumeAvg_5",
          label: "5 phiên",
        },
        {
          value: "TotalVolumeAvg_10",
          label: "10 phiên",
        },
        {
          value: "TotalVolumeAvg_20",
          label: "20 phiên",
        },
        {
          value: "TotalVolumeAvg_60",
          label: "60 phiên",
        },
        {
          value: "TotalVolumeAvg_120",
          label: "120 phiên",
        },
      ],
      params: {},
      dataTable: [],
      ketquaLoc: 0,
    };
  },
  created() {},
  mounted() {},
  watch:{
    "checkList": function(){
      this.getData();
    }
  },
  methods: {
    getLable(type) {
      let str = "";
      switch (type) {
        case "ForeignBuySellValue":
          str = this.foreignBuySellValueOption.find(
            (x) => x.value == this.foreignBuySellValuePhien
          ).label;
          break;
        case "BienDoGia":
          str = this.BienDoGiaPhienOption.find(
            (x) => x.value == this.BienDoGiaPhien
          ).label;
          break;
        case "BienDoGiaHighLow":
          str = this.BienDoGiaHighLowPhienOption.find(
            (x) => x.value == this.BienDoGiaHighLowPhien
          ).label;
          break;
        case "TotalDealValueAvg":
          str = this.TotalDealValueAvgOption.find(
            (x) => x.value == this.TotalDealValueAvgPhien
          ).label;
          break;
        case "TotalVolumeAvg":
          str = this.TotalVolumeAvgOption.find(
            (x) => x.value == this.TotalVolumeAvgPhien
          ).label;
          break;
      }
      return str;
    },
    convertDate(dt) {
      let str = dt;
      if (str < 10) {
        str = "0" + dt;
      }
      return str;
    },
    convertTime(time) {
      let timeCv = "";
      timeCv +=
        time.getFullYear() +
        "-" +
        this.convertDate(time.getMonth() + 1) +
        "-" +
        this.convertDate(time.getDate()) +
        "T" +
        this.convertDate(time.getHours()) +
        ":" +
        this.convertDate(time.getMinutes()) +
        ":" +
        this.convertDate(time.getSeconds()) +
        ".325"; //2024-04-03T23:19:16.325
      return timeCv;
    },
    async getData() {
      this.isLoading = true;
      var thisVue = this;
      thisVue.params = {
        faFilter: {
          PE: {
            min: 0,
            max: 13249,
          },
          Eps_TTM: {
            min: -29710,
            max: 1495536,
          },
          MarketCap: {
            min: 0,
            max: 687346443400760,
          },
          CashDividend_LastYear: {
            min: 0,
            max: 19500,
          },
          Fscore: {
            min: 0,
            max: 12,
          },
          Mscore: {
            min: -127,
            max: 1411,
          },
          Zscore: {
            min: -978,
            max: 378,
          },
          DividendYield_LastYear: {
            min: 0,
            max: 7,
          },
          AvgVol3M: {
            min: 0,
            max: 38706194,
          },
          RS1M: {
            min: 1,
            max: 99,
          },
          RS3M: {
            min: 1,
            max: 99,
          },
          RS6M: {
            min: 1,
            max: 99,
          },
          RS52W: {
            min: 1,
            max: 99,
          },
          TotalDealVol: {
            min: 0,
            max: 37761880,
          },
          TotalDealValue: {
            min: 0,
            max: 1088339226000,
          },
        },
        taFilter: null,
        booleanFilter: {
          
        },
        pageNumber: 1,
        pageSize: 10000,
        exchanges: ["HSX", "HNX", "UPCOM"],
        icbCodes: null,
        sortColumn: "Symbol",
        isDesc: false,
        fAFilterSub: {},
        faKeys: null,
        wlOrPId: null,
        tradingTime: thisVue.convertTime(thisVue.timeLoc) + "",
      };
      this.params.fAFilterSub[this.foreignBuySellValuePhien] = {
        min: "-" + this.foreignBuySellValue[0] * (0 - 10) + "12345678912.51",
        max: this.foreignBuySellValue[1] * 10 + "12345678912.26",
      };
      this.params.fAFilterSub[this.BienDoGiaPhien] = {
        min: this.BienDoGia[0],
        max: this.BienDoGia[1],
      };
      this.params.fAFilterSub[this.BienDoGiaHighLowPhien] = {
        min: this.BienDoGiaHigh[0],
        max: this.BienDoGiaHigh[1],
      };
      this.params.fAFilterSub[this.TotalDealValueAvgPhien] = {
        min: this.TotalDealValueAvg[0],
        max: this.TotalDealValueAvg[1],
      };
      this.params.fAFilterSub[this.TotalVolumeAvgPhien] = {
        min: this.TotalVolumeAvg[0],
        max: this.TotalVolumeAvg[1],
      };
      if(this.checkList.length > 0) {
        for (var i = 0; i < this.checkList.length; i++) {
          if (this.checkList[i] == "Có GD 5 phiên gần nhất") {
            this.params.booleanFilter.Has5ConsecutiveTradingDays = true;
          }
          if (this.checkList[i] == "Có GD 10 phiên gần nhất") {
            this.params.booleanFilter.Has10ConsecutiveTradingDays = true;
          }
          if (this.checkList[i] == "Có BCTC cập nhật thường xuyên") {
            this.params.booleanFilter.AvailableForFASearching = true;
          }
        }
      }
      const res = await bolocSearch(this.params);
      if (res && res.code == 200) {
        this.dataTable = res.data.result.items;
        this.dataTable.map((x) => {
          x["quy"] = x.Quarter + "." + x.Year;
          x["DividendYield_LastYear100"] = x.DividendYield_LastYear * 100;
          x["foreignBuySellValue"] = x[this.foreignBuySellValuePhien];
          x["BienDoGia"] = x[this.BienDoGiaPhien];
          x["BienDoGiaHighLow"] = x[this.BienDoGiaHighLowPhien];
          x["TotalDealValueAvg"] = x[this.TotalDealValueAvgPhien];
          x["TotalVolumeAvg"] = x[this.TotalVolumeAvgPhien];
        });
        this.ketquaLoc = res.data.result.totalCount;
      }
      this.isLoading = false;
    },
  },
};
</script>
  
<style>
.condition-search {
  max-height: 300px;
  overflow: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  background: #eee;
  padding: 10px;
}
.el-row {
  margin: 5px 0;
}
.el-slider {
  padding-right: 10px;
  box-sizing: border-box;
}
</style>
  