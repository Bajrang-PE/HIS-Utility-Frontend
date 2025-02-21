import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataIndia from "@highcharts/map-collection/countries/in/in-all.geo.json";

const MapDash = () => {

  useEffect(() => {
    Promise.all([
      import("highcharts/modules/map"),
      import("highcharts/modules/drilldown"),
      import("highcharts/modules/exporting"),
      import("highcharts/modules/export-data"),
      import("highcharts/highcharts-more"),
    ])
      .then(([mapModule, drilldownModule, exportingModule, exportDataModule, moreModule]) => {
        const HCMap = mapModule.default || mapModule;
        const HCDrilldown = drilldownModule.default || drilldownModule;
        const HCExporting = exportingModule.default || exportingModule;
        const HCExportData = exportDataModule.default || exportDataModule;
        const HCMore = moreModule.default || moreModule;

        HCMap(Highcharts);
        HCDrilldown(Highcharts);
        HCExporting(Highcharts);
        HCExportData(Highcharts);
        HCMore(Highcharts);
      })
      .catch((error) => {
        console.error("Error loading Highcharts modules:", error);
      });
  }, []);

  const chartOptions = {
    chart: {
      type: "map",
      map: mapDataIndia,
      events: {
        drilldown: function (e) {
          if (!e.seriesOptions) {
            const chart = this;
            const stateData = [
              {
                id: "in-mh",
                name: "Maharashtra",
                data: [
                  { name: "Mumbai", lat: 19.076, lon: 72.8777, z: 45 },
                  { name: "Pune", lat: 18.5204, lon: 73.8567, z: 30 },
                  { name: "Nagpur", lat: 21.1458, lon: 79.0882, z: 15 },
                ],
              },
              {
                id: "in-dl",
                name: "Delhi",
                data: [
                  { name: "New Delhi", lat: 28.6139, lon: 77.209, z: 25 },
                  { name: "South Delhi", lat: 28.5308, lon: 77.2191, z: 20 },
                  { name: "East Delhi", lat: 28.637, lon: 77.3025, z: 15 },
                ],
              },
              {
                id: "in-rj",
                name: "Rajasthan",
                data: [
                  { name: "Jaipur", lat: 26.9124, lon: 75.7873, z: 40 },
                  { name: "Udaipur", lat: 24.5854, lon: 73.7125, z: 25 },
                  { name: "Jodhpur", lat: 26.2389, lon: 73.0243, z: 20 },
                ],
              },
              {
                id: "in-up",
                name: "Uttar Pradesh",
                data: [
                  { name: "Lucknow", lat: 26.8467, lon: 80.9462, z: 35 },
                  { name: "Kanpur", lat: 26.4499, lon: 80.3319, z: 30 },
                  { name: "Agra", lat: 27.1767, lon: 78.0081, z: 25 },
                ],
              },
              {
                id: "in-mp",
                name: "MadyaPradesh",
                data: [
                  { name: "Ahmedabad", lat: 23.0225, lon: 72.5714, z: 35 },
                  { name: "Surat", lat: 21.1702, lon: 72.8311, z: 30 },
                  { name: "Vadodara", lat: 22.3072, lon: 73.1812, z: 20 },
                ],
              },
            ];
            const state = stateData.find((s) => s.id === e.point.drilldown);

            if (state) {
              chart.showLoading("Loading...");
              setTimeout(() => {
                chart.hideLoading();
                chart.addSeriesAsDrilldown(e.point, {
                  type: "mapbubble",
                  name: state.name,
                  data: state.data,
                  sizeBy: "area",
                  minSize: "5%",
                  maxSize: "20%",
                  tooltip: {
                    pointFormat: "{point.name}: {point.z} units",
                  },
                });
              }, 1000);
            }
          }
        },
        drillup: function () {
          this.setTitle(null, { text: "India" });
        },
      },
    },

    title: {
      text: "India Map with Drilldown",
    },

    subtitle: {
      text: "Click states to view cities",
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },

    colorAxis: {
      min: 0,
      max: 100,
      minColor: "#E6E7E8",
      maxColor: "#006400",
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      map: {
        states: {
          hover: {
            color: "#EEDD66",
          },
        },
        allAreas: true,
        nullColor: "#F0F0F0",
      },
    },

    series: [
      {
        name: "India",
        mapData: mapDataIndia,
        data: [
          ["in-mh", 75],
          ["in-dl", 50],
          ["in-mp", 45],
          ["in-rj", 40],
          ["in-up", 60],
        ].map(([hcKey, value]) => ({
          "hc-key": hcKey,
          value,
          drilldown: hcKey,
        })),
        joinBy: "hc-key",
        tooltip: {
          pointFormat: "{point.name}: {point.value}",
        },
      },
    ],

    exporting: {
      enabled: true,
      buttons: {
        contextButton: {
          menuItems: [
            "viewFullscreen",
            "printChart",
            "separator",
            "downloadPNG",
            "downloadJPEG",
            "downloadPDF",
            "downloadSVG",
            "separator",
            "downloadCSV",
            "downloadXLS",
          ],
        },
      },
      filename: "india-map",
    },

    drilldown: {
        activeDataLabelStyle: {
            textDecoration: "none",
            fontWeight: "bold",
            color: "#000000",
          },
      // Simplified to avoid potential undefined properties
      breadcrumbs: {
        position: {
          align: "right",
        },
        buttonTheme: {
          style: {
            color: "#006400",
          },
        },
      },
    },
  };


  return (
    <div style={{ maxWidth: "100%", height: "600px" }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        constructorType={"mapChart"}
      />
    </div>
  );
};

export default MapDash;