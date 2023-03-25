"use client";
import Chart, { Props } from "react-apexcharts";
import dynamic from "next/dynamic";

// const Chart = dynamic(() => import('react-apexcharts";'), { ssr: false });
interface ILineChart extends Props {
  width?: number;
}
export default function LineChart() {
  const options: Props = {
    chart: {
      height: 380,
      type: "area",
      stacked: false,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
        autoSelected: "pan",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: [3, 2.8],
    },
    xaxis: {
      show: true,
      tooltip: {
        enabled: true,
        offsetY: 5,
        style: {
          fontSize: 12,
          fontFamily: "FuturaMdBT",
        },
      },
      labels: {
        show: true,
        align: "right",
        // minWidth: 0,
        // maxWidth: 160,
        style: {
          // colors: [
          //   "#374062",
          //   "#374062",
          //   "#374062",
          //   "#374062",
          //   "#374062",
          //   "#374062",
          //   "#374062",
          // ],
          // fontSize: "13px",
          // fontFamily: "FuturaBQ",
          // fontWeight: 400,
          // cssClass: "apexcharts-yaxis-label",
        },
        // offsetY: 0,
      },
      // tickAmount: 10,
      tickPlacement: "between",
      // tickPlacement: 'on',
    },
    yaxis: {
      type: "numeric",
      opposite: false,
      tickAmount: 7,
      // min: 10000,
      // max: 1,
      labels: {
        show: true,
        // align: 'right',
        // minWidth: 0,
        // maxWidth: 160,
        style: {
          colors: ["#7B87AF"],
          fontSize: "10px",
          fontFamily: "FuturaMdBT",
          fontWeight: 400,
          // cssClass: 'apexcharts-yaxis-label',
        },
        offsetY: 0,
      },
    },
    legend: {
      show: false,
    },

    tooltip: {
      enabled: true,
      shared: true,

      // y: {
      //   title: {
      //     formatter: (seriesName, { series, seriesIndex, dataPointIndex }) =>
      //       `${seriesName.split(",")[dataPointIndex]}:`,
      //   },
      // },
      z: {
        formatter: undefined,
        title: "Size: ",
      },
    },

    fixed: {
      enabled: true,
      position: "topLeft",
      offsetX: 60,
      offsetY: 50,
    },

    onDatasetHover: {
      highlightDataSeries: false,
    },
    grid: {
      show: true,
    },
    markers: {
      size: [8, 5],
      colors: ["#59C75C", "#DFE0EB"],
      strokeColors: "#fff",
      strokeWidth: 3,
      hover: {
        size: 9,
      },
    },
    colors: ["#59C75C", "#DFE0EB"],
    selection: "one_year",
  };

  const series = [
    {
      name: "series-1",
      data: [10, 20, 22, 50, 20, 30],
    },
    {
      name: "series-1",
      data: [20, 17, 10, 30, 18, 40],
    },
  ];
  return <Chart options={options} series={series} type="line" width="800px" />;

  // return <div>a</div>;
}
