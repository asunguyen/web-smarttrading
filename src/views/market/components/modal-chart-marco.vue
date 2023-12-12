<template>
  <el-dialog
    v-loading="isLoading"
    :visible.sync="dialogVisible"
    width="60%"
    destroy-on-close
    :before-close="closeModal"
    @open="getMacroOverviewChart"
  >
    <span slot="title">{{ chart.name }} ({{ chart.unit }})</span>
    <div id="chart-macro" />
  </el-dialog>
</template>

<script>
/* eslint-disable no-undef */
import { getMacroOverviewChart } from '@/api/stock'

export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    chart: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    async getMacroOverviewChart() {
      try {
        this.isLoading = true
        const { type, top } = this.chart
        const response = await getMacroOverviewChart({ type, top })
        const reversedData = response.data.reverse()
        const dataXAxis = reversedData.map(item => item.ReportTerm)

        switch (type) {
          // Chi so gia tieu dung
          case 2: {
            const dataCpiMom = reversedData.map(item => item.Value1 > 100 ? item.Value1 - 100 : -(100 - item.Value1))
            const dataCpiYoy = reversedData.map(item => item.Value2 - 100)
            this.createChartChiSoGiaTieuDung(dataXAxis, dataCpiMom, dataCpiYoy)
            break
          }
          // Tang truong GDP
          case 8: {
            const data = reversedData.map(item => item.Value1)
            this.createChartTangTruongGDP(dataXAxis, data)
            break
          }
          // GDP theo gia hien hanh
          case 3: {
            const data = reversedData.map(item => item.Value1)
            this.createChartGDPTheoGiaHienHanh(dataXAxis, data)
            break
          }
          // Tong gia tri xuat nhap khau
          case 7: {
            const dataXuatKhau = reversedData.map(item => item.Value1)
            const dataNhapKhau = reversedData.map(item => item.Value2)
            const dataCanCanThuongMai = reversedData.map(item => Math.abs(item.Value1 - item.Value2))
            this.createChartTongGiaTriXuatNhapKhau(dataXAxis, dataXuatKhau, dataNhapKhau, dataCanCanThuongMai)
            break
          }
          // Toan nganh cong nghiep
          case 4: {
            const data = reversedData.map(item => item.Value1)
            this.createChartToanNganhCongNghiep(dataXAxis, data)
            break
          }
          // FDI giai ngan
          case 6: {
            const dataDangKy = reversedData.map(item => item.Value1)
            const dataGiaiNgan = reversedData.map(item => item.Value2)
            this.createChartFDIGiaiNgan(dataXAxis, dataDangKy, dataGiaiNgan)
            break
          }
          // Cung tien M2
          case 51: {
            const data = reversedData.map(item => item.Value1)
            this.createChartCungTienM2(dataXAxis, data)
            break
          }
          // Ty gia trung tam
          case 11: {
            const dataTyGiaLienNganHang = reversedData.map(item => item.Value1)
            const dataTyLeThayDoi = reversedData.map((item, index) => {
              const tyGiaHienTai = item.Value1
              const tyGiaTruoc = reversedData[index - 1]?.Value1
              const tyLeThayDoi = (tyGiaHienTai - tyGiaTruoc) / tyGiaTruoc * 100
              return tyLeThayDoi
            })
            dataXAxis.shift()
            dataTyGiaLienNganHang.shift()
            dataTyLeThayDoi.shift()
            this.createChartTyGiaTrungTam(dataXAxis, dataTyGiaLienNganHang, dataTyLeThayDoi)
            break
          }
          // Tang truong ban le
          case 1: {
            const dataKhachSanNhaHang = reversedData.map(item => item.Value2)
            const dataDichVuDuLich = reversedData.map(item => item.Value3 + item.Value4)
            const dataTocDoTangTruong = reversedData.map((item, index) => {
              const valueHienTai = item.Value5
              const valueTruoc = reversedData[index - 1]?.Value5
              const tocDoTangTruong = (valueHienTai - valueTruoc) / valueTruoc * 100
              return tocDoTangTruong
            })
            dataXAxis.shift()
            dataKhachSanNhaHang.shift()
            dataDichVuDuLich.shift()
            dataTocDoTangTruong.shift()
            this.createChartTangTruongBanLe(dataXAxis, dataKhachSanNhaHang, dataDichVuDuLich, dataTocDoTangTruong)
            break
          }
          // Dan so
          case 9: {
            const dataDanSo = reversedData.map(item => item.Value1)
            const dataTocDoTangTruong = reversedData.map((item, index) => {
              const danSoHienTai = item.Value1
              const danSoNamTruoc = reversedData[index - 1]?.Value1
              const tocDoTangTruong = (danSoHienTai - danSoNamTruoc) / danSoNamTruoc * 100
              return tocDoTangTruong
            })
            dataXAxis.shift()
            dataDanSo.shift()
            dataTocDoTangTruong.shift()
            this.createChartDanSo(dataXAxis, dataDanSo, dataTocDoTangTruong)
            break
          }
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    createChartChiSoGiaTieuDung(dataXAxis, dataCpiMom, dataCpiYoy) {
      Highcharts.chart('chart-macro', {
        chart: {
          zoomType: 'xy'
        },
        title: {
          text: ''
        },
        xAxis: [{
          categories: dataXAxis,
          crosshair: true
        }],
        yAxis: [
          { // Primary yAxis
            title: {
              text: ''
            }
          },
          { // Secondary yAxis
            title: {
              text: ''
            },
            labels: {
              format: '{value} %'
            },
            opposite: true
          }
        ],
        credits: {
          enabled: false
        },
        tooltip: {
          shared: true,
          valueDecimals: 2
        },
        series: [
          {
            name: 'CPI (MoM)',
            type: 'column',
            data: dataCpiMom
          },
          {
            name: 'CPI (YoY)',
            type: 'spline',
            yAxis: 1,
            data: dataCpiYoy,
            color: '#50B432'
          }
        ]
      })
    },
    createChartTangTruongGDP(dataXAxis, data) {
      Highcharts.chart('chart-macro', {
        chart: {
          type: 'column'
        },
        title: {
          text: ''
        },
        xAxis: {
          categories: dataXAxis,
          crosshair: true
        },
        yAxis: {
          title: {
            text: ''
          }
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [
          {
            name: 'Thu nhập GDP',
            data
          }
        ]
      })
    },
    createChartGDPTheoGiaHienHanh(dataXAxis, data) {
      Highcharts.chart('chart-macro', {
        chart: {
          type: 'spline'
        },
        title: {
          text: ''
        },
        xAxis: {
          categories: dataXAxis,
          crosshair: true
        },
        yAxis: {
          title: {
            text: ''
          }
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: 'GDP',
            data
          }
        ]
      })
    },
    createChartTongGiaTriXuatNhapKhau(dataXAxis, dataXuatKhau, dataNhapKhau, dataCanCanThuongMai) {
      Highcharts.chart('chart-macro', {
        chart: {
          type: 'column'
        },
        title: {
          text: ''
        },
        xAxis: {
          categories: dataXAxis,
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: ''
          }
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        tooltip: {
          shared: true
        },
        series: [
          {
            name: 'Xuất khẩu',
            data: dataXuatKhau,
            color: '#058DC7'
          },
          {
            name: 'Nhập khẩu',
            data: dataNhapKhau,
            color: '#50B432'
          },
          {
            name: 'Cán cân thương mại',
            data: dataCanCanThuongMai,
            color: '#ED561B'
          }
        ]
      })
    },
    createChartToanNganhCongNghiep(dataXAxis, data) {
      Highcharts.chart('chart-macro', {
        chart: {
          type: 'spline'
        },
        title: {
          text: ''
        },
        xAxis: {
          categories: dataXAxis,
          crosshair: true
        },
        yAxis: {
          title: {
            text: ''
          }
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: 'Sản xuất công nghiệp',
            data
          }
        ]
      })
    },
    createChartFDIGiaiNgan(dataXAxis, dataDangKy, dataGiaiNgan) {
      Highcharts.chart('chart-macro', {
        chart: {
          type: 'column'
        },
        title: {
          text: ''
        },
        xAxis: {
          categories: dataXAxis,
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: ''
          }
        },
        credits: {
          enabled: false
        },
        tooltip: {
          shared: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [
          {
            name: 'FDI đăng ký',
            data: dataDangKy,
            color: '#058DC7'
          },
          {
            name: 'FDI giải ngân',
            data: dataGiaiNgan,
            color: '#50B432'
          }
        ]
      })
    },
    createChartCungTienM2(dataXAxis, data) {
      Highcharts.chart('chart-macro', {
        chart: {
          type: 'spline'
        },
        title: {
          text: ''
        },
        xAxis: {
          categories: dataXAxis,
          crosshair: true
        },
        yAxis: {
          title: {
            text: ''
          }
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: 'Cung tiền M2 (MoM)',
            data
          }
        ]
      })
    },
    createChartTyGiaTrungTam(dataXAxis, dataTyGiaLienNganHang, dataTyLeThayDoi) {
      Highcharts.chart('chart-macro', {
        chart: {
          zoomType: 'xy'
        },
        title: {
          text: ''
        },
        xAxis: [{
          categories: dataXAxis,
          crosshair: true
        }],
        yAxis: [
          { // Primary yAxis
            title: {
              text: ''
            }
          },
          { // Secondary yAxis
            title: {
              text: ''
            },
            labels: {
              format: '{value} %'
            },
            opposite: true
          }
        ],
        credits: {
          enabled: false
        },
        tooltip: {
          shared: true,
          valueDecimals: 2
        },
        series: [
          {
            name: 'Tỷ giá liên ngân hàng',
            type: 'column',
            data: dataTyGiaLienNganHang

          },
          {
            name: 'Tỷ lệ thay đổi',
            type: 'spline',
            yAxis: 1,
            data: dataTyLeThayDoi,
            color: '#50B432'
          }
        ]
      })
    },
    createChartTangTruongBanLe(dataXAxis, dataKhachSanNhaHang, dataDichVuDuLich, dataTocDoTangTruong) {
      Highcharts.chart('chart-macro', {
        chart: {
          zoomType: 'xy'
        },
        title: {
          text: ''
        },
        xAxis: [{
          categories: dataXAxis,
          crosshair: true
        }],
        yAxis: [
          { // Primary yAxis
            title: {
              text: ''
            }
          },
          { // Secondary yAxis
            title: {
              text: ''
            },
            labels: {
              format: '{value} %'
            },
            opposite: true
          }
        ],
        credits: {
          enabled: false
        },
        tooltip: {
          shared: true,
          valueDecimals: 2
        },
        series: [
          {
            name: 'Khách sạn nhà hàng',
            type: 'column',
            data: dataKhachSanNhaHang
          },
          {
            name: 'Dịch vụ & Du lịch',
            type: 'column',
            data: dataDichVuDuLich,
            color: '#50B432'
          },
          {
            name: 'Tốc độ tăng trưởng',
            type: 'spline',
            yAxis: 1,
            data: dataTocDoTangTruong,
            color: '#ED561B'
          }
        ]
      })
    },
    createChartDanSo(dataXAxis, dataDanSo, dataTocDoTangTruong) {
      Highcharts.chart('chart-macro', {
        chart: {
          zoomType: 'xy'
        },
        title: {
          text: ''
        },
        xAxis: [{
          categories: dataXAxis,
          crosshair: true
        }],
        yAxis: [
          { // Primary yAxis
            title: {
              text: ''
            }
          },
          { // Secondary yAxis
            title: {
              text: ''
            },
            labels: {
              format: '{value} %'
            },
            opposite: true
          }
        ],
        credits: {
          enabled: false
        },
        tooltip: {
          shared: true,
          valueDecimals: 2
        },
        series: [
          {
            name: 'Dân số',
            type: 'column',
            data: dataDanSo
          },
          {
            name: 'Tốc độ tăng trưởng',
            type: 'spline',
            yAxis: 1,
            data: dataTocDoTangTruong,
            color: '#50B432'
          }
        ]
      })
    },
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

