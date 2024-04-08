<template>
  <div class="app-container market">
    <div class="condition-search">
      <el-row>
        <el-col :span="8">
          <div class="grid-content">Giá trị giao dịch ròng của NĐTNN</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMin"
              :min="-9000000000"
              :max="9000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMax"
              :min="-9000000000"
              :max="9000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-select v-model="foreignBuySellValuePhien" placeholder="Select">
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
          <div class="grid-content">Biên độ giá đóng cửa theo số phiên (%)</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="BienDoGiaMin"
              :min="0"
              :max="999"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="BienDoGiaMax"
              :min="1"
              :max="1000"
            ></el-input-number>
          </div>
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
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="BienDoGiaHighLowMin"
              :min="0"
              :max="999"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMax"
              :min="0"
              :max="1000"
            ></el-input-number>
          </div>
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
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="peMin"
              :min="0"
              :max="13000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="peMax"
              :min="0"
              :max="13000"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="grid-content">EPS (TTM)</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="Eps_TTMMin"
              :min="-29710"
              :max="1500000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="Eps_TTMMax"
              :min="-29710"
              :max="1500000"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="grid-content">Vốn hóa</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="MarketCapMin"
              :min="0"
              :max="690"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="MarketCapMax"
              :min="0"
              :max="690"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="grid-content">Cổ tức bằng tiền (năm gần nhất)</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMin"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMax"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-select v-model="foreignBuySellValuePhien" placeholder="Select">
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
          <div class="grid-content">Fscore</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMin"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMax"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-select v-model="foreignBuySellValuePhien" placeholder="Select">
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
          <div class="grid-content">Mscore</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMin"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMax"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-select v-model="foreignBuySellValuePhien" placeholder="Select">
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
          <div class="grid-content">Zscore</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMin"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMax"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-select v-model="foreignBuySellValuePhien" placeholder="Select">
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
            Thu nhập từ cổ tức năm gần nhất (Dividend Yield %)
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMin"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMax"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-select v-model="foreignBuySellValuePhien" placeholder="Select">
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
          <div class="grid-content">KLTB 3 tháng</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMin"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMax"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-select v-model="foreignBuySellValuePhien" placeholder="Select">
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
          <div class="grid-content">RS1m (1 tháng)</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMin"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMax"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-select v-model="foreignBuySellValuePhien" placeholder="Select">
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
          <div class="grid-content">RS3m (3 tháng)</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMin"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMax"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-select v-model="foreignBuySellValuePhien" placeholder="Select">
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
          <div class="grid-content">RS6m (6 tháng)</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMin"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMax"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-select v-model="foreignBuySellValuePhien" placeholder="Select">
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
          <div class="grid-content">RS52w (52 tuần)</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMin"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMax"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-select v-model="foreignBuySellValuePhien" placeholder="Select">
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
          <div class="grid-content">Khối lượng</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMin"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMax"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-select v-model="foreignBuySellValuePhien" placeholder="Select">
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
          <div class="grid-content">Giá trị giao dịch</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMin"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMax"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-select v-model="foreignBuySellValuePhien" placeholder="Select">
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
          <div class="grid-content">Khối lượng Trung bình theo số phiên</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMin"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMax"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-select v-model="foreignBuySellValuePhien" placeholder="Select">
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
            Giá trị giao dịch Trung bình theo phiên
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMin"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-input-number
              v-model="foreignBuySellValueMax"
              :min="-9000000000000"
              :max="9000000000000"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-select v-model="foreignBuySellValuePhien" placeholder="Select">
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
    </div>
    <el-row>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="Có GD 5 phiên gần nhất"></el-checkbox>
        <el-checkbox label="Có GD 10 phiên gần nhất"></el-checkbox>
        <el-checkbox label="Có BCTC cập nhật thường xuyên"></el-checkbox>
      </el-checkbox-group>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content">
          <el-date-picker
            v-model="timeLoc"
            type="date"
            placeholder="Chọn thời gian lọc"
          >
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <el-button type="primary" plain>Lọc</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      checkList: [],
      timeLoc: new Date(),
      foreignBuySellValueMin: -0,
      foreignBuySellValueMax: 1000,
      foreignBuySellValuePhien: "foreignBuySellValue_5",
      foreignBuySellValueOption: [
        {
          value: "foreignBuySellValue_5",
          label: "5 phiên",
        },
        {
          value: "foreignBuySellValue_10",
          label: "10 phiên",
        },
        {
          value: "foreignBuySellValue_20",
          label: "20 phiên",
        },
        {
          value: "foreignBuySellValue_60",
          label: "60 phiên",
        },
        {
          value: "foreignBuySellValue_120",
          label: "120 phiên",
        },
      ],

      //BienDoGia
      BienDoGiaMin: 0,
      BienDoGiaMax: 10,
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
      BienDoGiaHighLowMin: 0,
      BienDoGiaHighLowMax: 100,
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
      peMin: 0,
      peMax: 100,
      Eps_TTMMin: 0,
      Eps_TTMMax: 1000,
      MarketCapMin:0,
      MarketCapMax: 500,
    };
  },
  created() {},
  mounted() {},
  methods: {},
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
</style>
  