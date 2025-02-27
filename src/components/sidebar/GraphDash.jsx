import React, { useState, useEffect, useContext, useCallback, useMemo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Exporting from "highcharts/modules/exporting";
import ExportData from "highcharts/modules/export-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faFileCsv, faFilePdf, faRefresh } from "@fortawesome/free-solid-svg-icons";
import Parameters from "./Parameters";
import { fetchQueryData } from "../../utils/commonFunction";
import { HISContext } from "../../contextApi/HISContext";


const GraphDash = ({ widgetData, graphData }) => {

  const { setLoading } = useContext(HISContext);

  const [paramsValues, setParamsValues] = useState();
  const [chartData, setChartData] = useState([]);
  const [chartType, setChartType] = useState('BAR_GRAPH');

  useEffect(() => {
    Promise.all([
      import("highcharts/modules/offline-exporting"),
      import("highcharts/modules/exporting"),
      import("highcharts/modules/export-data"),
      import('highcharts/modules/no-data-to-display')
    ])
      .then(([OfflineExporting, exportingModule, exportDataModule, HighchartsNoData]) => {
        [OfflineExporting, exportingModule, exportDataModule, HighchartsNoData].forEach(
          (mod) => (mod.default || mod)(Highcharts)
        );
      })
      .catch((error) => {
        console.error("Error loading Highcharts modules:", error);
      });
  }, []);

  useEffect(() => {
    if (graphData?.length > 0) {
      setChartData(
        graphData.map((item) => ({
          name: item.column_1,
          y: item.column_2,
        })));
    }
  }, [graphData])

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

  useEffect(() => {
    if (widgetData.defaultgraphType) {
      setChartType(widgetData.defaultgraphType)
    }
  }, [widgetData])

  // const processedQueryData = useMemo(() => {
  //   return widgetData?.queryVO?.length > 0 ? widgetData.queryVO : [];
  // }, [widgetData?.queryVO]);

  // const fetchData = useCallback(async () => {
  //   if (!processedQueryData.length) return;
  //   try {
  //     setLoading(true);
  //     const data = await fetchQueryData(processedQueryData);
  //     console.log(data, 'datatatatd')
  //     // setGraphData(data);
  //     setGraphData(
  //       data.map((item) => ({
  //         name: item.column_1,
  //         y: item.column_2,
  //       })));
  //   } catch (error) {
  //     console.error("Error loading query data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [processedQueryData, setLoading]);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  const is3D = widgetData.is3d === "true";
  const xAxisLabel = widgetData.xAxisLabel || "X Axis";
  const yAxisLabel = widgetData.yAxisLabel || "Y Axis";
  const showLegend = widgetData.showInLegend === "true";
  const dataLabelsEnabled = widgetData.dataLabels === "true";
  const colorList = widgetData.colorForBars ? widgetData.colorForBars.split(",") : ["red", "blue", "green"];
  const mainQuery = widgetData.queryVO?.length > 0 ? widgetData.queryVO[0]?.mainQuery : "";
  const alpha = widgetData.alpha || 15;
  const beta = widgetData.beta || 15;

  const xAxisFontSize = parseInt(widgetData?.XAxisFontSize, 10) || 10;
  const yAxisFontSize = parseInt(widgetData?.YAxisFontSize, 10) || 10;
  const annotationFontSize = parseInt(widgetData?.annotationFontSize, 10) || 12;
  const isDirectDownloadRequired = widgetData?.isDirectDownloadRequired || 'No';

  const minAxisValue = widgetData?.minValueOfAxis && widgetData?.minValueOfAxis !== '0' ? parseInt(widgetData.minValueOfAxis, 10) : undefined;
  const maxAxisValue = widgetData?.maxValueOfAxis && widgetData?.maxValueOfAxis !== '0' ? parseInt(widgetData.maxValueOfAxis, 10) : undefined;

  const isActionButtonReq = widgetData?.isActionButtonReq || "Yes";
  const labelRotation = parseInt(widgetData.rotation, 10) || 0;
  const isScrollbarRequired = widgetData.isScrollbarRequired === "Yes";
  const paramsData = widgetData.selFilterIds || "";
  const footerText = widgetData.footerText || "";


  const exportingOptions = {
    enabled: isActionButtonReq !== "No" && isActionButtonReq !== "None",
    allowHTML: true,
    useHTML: true,
    fallbackToExportServer: false,
    libURL: "https://code.highcharts.com/modules/",
    buttons: {
      contextButton: {
        menuItems: (() => {
          switch (isActionButtonReq) {
            case "pdf":
              return ["downloadPDF"];
            case "csv":
              return ["downloadCSV"];
            case "pdfAndcsv":
              return ["downloadPDF", "downloadCSV"];
            case "advanced":
              return ["viewFullscreen", "downloadXLS", "downloadPNG", "downloadJPEG"];
            case "All":
            case "Yes":
              return ["downloadPDF", "downloadCSV", "viewFullscreen", "downloadXLS", "downloadPNG", "downloadJPEG"];
            default:
              return [];
          }
        })()
      }
    }
  };

  // Highcharts options
  const options = {
    chart: {
      type: chartTypeMapping[chartType],
      height: parseInt(widgetData.graphHeight, 10) || 350,
      backgroundColor: "#ffffff",
      options3d: {
        enabled: is3D,
        alpha: alpha,
        beta: beta,
        depth: 50,
      },
    },
    title: {
      text: widgetData.rptName || "",
    },
    xAxis: {
      type: "category",
      title: {
        text: xAxisLabel,
        style: { fontSize: `${xAxisFontSize}px` }
      },
      labels: {
        rotation: widgetData.rotation ? parseInt(widgetData.rotation, 10) : -45,
        style: {
          fontSize: "10px",
        },
        step: 1,
      },
      scrollbar: {
        enabled: isScrollbarRequired,
      },
    },
    yAxis: {
      title: {
        text: yAxisLabel,
        style: { fontSize: `${yAxisFontSize}px` }
      },
      // min: minAxisValue,
      // max: maxAxisValue,
    },
    annotations: [{
      labels: [{
        point: { x: 0, y: 0 },
        text: "Annotation",
        style: { fontSize: `${annotationFontSize}px` }
      }]
    }],
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
    exporting: exportingOptions,
    // exporting: {
    //   enabled: true
    // },
    // series: seriesData,
    series: chartData.length > 0
      ? [
        {
          name: yAxisLabel || "Value",
          data: chartData,
          colorByPoint: true,
        },
      ]
      : [],
    lang: {
      noData: "No data available for this graph",
    },
    noData: {
      position: {
        align: "center",
        verticalAlign: "middle",
        x: 0,
        y: 0,
      },
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        color: "#ff0000",
        textAlign: "center"
      },
    },
  };

  return (
    <div className="high-chart-main">
      {paramsData && (
        <div className='parameter-box'>
          <Parameters params={paramsData} setParamsValues={setParamsValues} />
        </div>
      )}

      {isDirectDownloadRequired === 'Yes' &&
        <div className="row px-2 py-2 border-bottom">
          <div class="col-md-8 col-xs-7 fw-medium fs-6 pe-0">
            {widgetData?.rptDisplayName}
          </div>
          <div className="col-md-4">
            <button
              type="button"
              className="small-box-btn-dwn"
              aria-expanded="false"
              data-bs-toggle="dropdown"
            >
              <FontAwesomeIcon icon={faCog} className="dropdown-gear-icon" />
            </button>
            <ul className="dropdown-menu p-2">
              <li className="p-1 dropdown-item text-primary" style={{ cursor: "pointer" }}>
                <FontAwesomeIcon icon={faRefresh} className="dropdown-gear-icon me-2" />Refresh Data
              </li>
            </ul>
            <button type="button" className="small-box-btn-dwn"
            >
              <FontAwesomeIcon icon={faFilePdf} className="dropdown-gear-icon" />
            </button>
            <button type="button" className="small-box-btn-dwn"
            >
              <FontAwesomeIcon icon={faFileCsv} className="dropdown-gear-icon" />
            </button>
          </div>
        </div>
      }

      <div className="px-2 py-2">
        <h4 style={{ fontWeight: "500", fontSize: "20px" }}>Query :{widgetData?.rptId}</h4>
        <span>{mainQuery}</span>
      </div>
      <div className="high-chart-box">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      {availableGraphs?.length > 0 &&
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
      {footerText !== '' &&
        <div className="px-2 py-2">
          <span>{footerText}</span>
        </div>
      }
    </div>
  );
};

export default GraphDash;
