import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Exporting from "highcharts/modules/exporting";
import ExportData from "highcharts/modules/export-data";

const GraphDash = ({ widgetData }) => {
  const chartTypeMapping = {
    BAR_GRAPH: "bar",
    STACKED_GRAPH: "column",
    STACKED_BAR_GRAPH: "column",
    VERTICAL_BAR_GRAPH: "bar",
    VERTICAL_STACKED_BAR_GRAPH: "bar",
    PIE_CHART: "pie",
    DONUT_CHART: "pie",
    LINE_GRAPH: "line",
    AREA_GRAPH: "area",
    AREA_STACKED_GRAPH: "area",
    COLUMN_LINE_PIE_GRAPH: "column",
    DUAL_AXES_LINE_COLUMN: "column",
    BAR_RACE: "bar"
  };

  const availableGraphs = widgetData.graphChangeOptions || [];

  const [chartType, setChartType] = useState('BAR_GRAPH');

  useEffect(() => {
    if (widgetData.defaultgraphType) {
      setChartType(widgetData.defaultgraphType)
    }
  }, [widgetData])

  const is3D = widgetData.is3d === "true";
  const xAxisLabel = widgetData.xAxisLabel || "X Axis";
  const yAxisLabel = widgetData.yAxisLabel || "Y Axis";
  const showLegend = widgetData.showInLegend === "true";
  const dataLabelsEnabled = widgetData.dataLabels === "true";
  const colorList = widgetData.colorForBars ? widgetData.colorForBars.split(",") : ["red", "blue", "green"];
  const mainQuery = widgetData.queryVO?.length > 0 ? widgetData.queryVO[0]?.mainQuery : "";

  const seriesData = [
    {
      name: yAxisLabel,
      data: [
        { name: "AP", y: 900 },
        { name: "AS", y: 600 },
        { name: "BIH", y: 800 },
        { name: "CG", y: 1000 },
        { name: "GJ", y: 1100 },
        { name: "HAR", y: 300 },
        { name: "HP", y: 500 },
        { name: "JH", y: 400 },
        { name: "JK", y: 300 },
        { name: "KL", y: 200 },
        { name: "MH", y: 0 },
        { name: "ML", y: 100 },
        { name: "MN", y: 200 },
      ],
      colorByPoint: chartType !== "LINE_GRAPH",
    },
  ];

  // Highcharts options
  const options = {
    chart: {
      type: chartTypeMapping[chartType],
      height: parseInt(widgetData.graphHeight, 10) || 350,
      backgroundColor: "#ffffff",
      options3d: {
        enabled: is3D,
        alpha: 15,
        beta: 15,
        depth: 50,
      },
    },
    title: {
      text: widgetData.rptDisplayName || "",
    },
    xAxis: {
      type: "category",
      title: { text: xAxisLabel },
    },
    yAxis: {
      title: { text: yAxisLabel },
      min: parseInt(widgetData.minValueOfAxis, 10) || 0,
      max: undefined,
    },
    legend: {
      enabled: showLegend,
    },
    plotOptions: {
      series: {
        dataLabels: { enabled: dataLabelsEnabled },
        colorByPoint: chartType === "PIE_CHART" || chartType === "BAR_GRAPH",
      },
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        colors: colorList,
        dataLabels: { enabled: true, format: "<b>{point.name}</b>: {point.y}" },
        innerSize: chartType === "DONUT_CHART" ? "50%" : "0%",
      },
      bar: {
        colors: colorList,
      },
      column: {
        colors: colorList,
        stacking: chartType === "STACKED_BAR_GRAPH" || chartType === "STACKED_GRAPH" ? "normal" : undefined,
      },
      line: {
        marker: {
          enabled: true,
          fillColor: "red",
          lineColor: "black",
          lineWidth: 2,
          radius: 4,
        },
      },
      area: {
        stacking: chartType === "AREA_STACKED_GRAPH" ? "normal" : undefined,
      }
    },
    tooltip: {
      shared: true,
      valueSuffix: " units",
    },
    exporting: {
      enabled: true,
    },
    series: seriesData,
  };

  return (
    <div className="high-chart-main">
      <div className="px-2 py-2">
        <h4 style={{ fontWeight: "500", fontSize: "20px" }}>Query :{widgetData?.rptId}</h4>
        <span>{mainQuery}</span>
      </div>
      <div className="high-chart-box">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <select
        value={chartType}
        onChange={(e) => setChartType(e.target.value)}
        style={{ marginBottom: "10px" }}
        className="form-select form-select-sm w-50 mt-1 ms-1"
      >
        {availableGraphs.map((graph) => (
          <option key={graph} value={graph}>
            {graph.replace(/_/g, " ")}
          </option>
        ))}
      </select>
      {widgetData?.isDisplayPluginCombo === "" &&

        <select
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
          style={{ marginBottom: "10px" }}
          className="form-select form-select-sm w-50 mt-1 ms-1"
        >
          {availableGraphs.map((graph) => (
            <option key={graph} value={graph}>
              {graph.replace(/_/g, " ")}
            </option>
          ))}
        </select>
      }
    </div>
  );
};

export default GraphDash;
