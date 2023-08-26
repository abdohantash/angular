import { Component, OnInit } from '@angular/core';
import { EChartsOption, graphic } from 'echarts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ticket-2';
  // chart
  chartOption: EChartsOption = {
    color: ["#8A74F9"],
    tooltip: {
      trigger: "axis",
      backgroundColor: '#1E1B39',
      borderRadius: 10,
      textStyle: {
        fontFamily: 'Neo Sans Arabic',
        color: '#fff',
      },
      axisPointer: {
        type: "line",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    grid: {
      top: "3%",
      left: "3%",
      right: "3%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: [
          "ديسمبر",
          "نوفمبر",
          "اكتوبر",
          "سبتمبر",
          "اغسطس",
          "يوليو",
          "يونيو",
          "مايو",
          "ابريل",
          "مارس",
          "فبراير",
          "يناير",
        ],
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          fontSize: 14,
          fontFamily: 'Neo Sans Arabic'
        }
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "إستخدام",
        type: "line",
        stack: "Total",
        smooth: true,
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#8A74F9",
            },
            {
              offset: 0.5,
              color: "rgba(138, 116, 249, 0.26)",
            },
            {
              offset: 1,
              color: "rgba(138, 116, 249, 0.00)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: [100, 200, 60, 150, 90, 250, 140, 200, 80, 115, 50, 179],
      },
    ],
  };

  ngOnInit(): void { }
}
