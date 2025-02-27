// import React, { useEffect, useState } from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import mapDataIndia from "@highcharts/map-collection/countries/in/in-all.geo.json";
// import maharashtraMap from "../../localData/mapJson/maharashtra.json";
// import delhiMap from "../../localData/mapJson/delhi.json";
// import rajasthanMap from "../../localData/mapJson/rajasthan.json";
// import uttarPradeshMap from "../../localData/mapJson/uttarpradesh.json";
// import madhyaPradeshMap from "../../localData/mapJson/madhyapradesh.json";

// const MapDash = () => {
//   const [currentMap, setCurrentMap] = useState(mapDataIndia);

//   useEffect(() => {
//     Promise.all([
//       import("highcharts/modules/map"),
//       import("highcharts/modules/drilldown"),
//       import("highcharts/modules/exporting"),
//       import("highcharts/modules/export-data"),
//       import("highcharts/highcharts-more"),
//     ])
//       .then(([mapModule, drilldownModule, exportingModule, exportDataModule, moreModule]) => {
//         [mapModule, drilldownModule, exportingModule, exportDataModule, moreModule].forEach(
//           (mod) => (mod.default || mod)(Highcharts)
//         );
//       })
//       .catch((error) => {
//         console.error("Error loading Highcharts modules:", error);
//       });
//   }, []);

//   const transformMapData = (mapData) => {
//     if (!mapData?.objects?.rajasthan?.geometries) return mapData;

//     return {
//       ...mapData,
//       objects: {
//         rajasthan: {
//           ...mapData.objects.rajasthan,
//           geometries: mapData.objects.rajasthan.geometries.map((geo) => ({
//             ...geo,
//             properties: {
//               ...geo.properties,
//               "hc-key": `ra-${geo.properties.district.toLowerCase().replace(/\s+/g, "-")}`,
//               name: geo.properties.district,
//             },
//           })),
//         },
//       },
//     };
//   };


//   const stateMapData = {
//     "in-mh": { name: "Maharashtra", mapData: maharashtraMap },
//     "in-dl": { name: "Delhi", mapData: delhiMap },
//     "in-rj": {
//       name: "Rajasthan",
//       mapData: transformMapData(rajasthanMap),
//       data: [
//         ["ra-churu", 80],
//         ["ra-jhunjhunu", 60],
//         ["ra-jaipur", 90],
//         ["ra-udaipur", 50],
//       ],
//     },
//     "in-up": { name: "Uttar Pradesh", mapData: uttarPradeshMap },
//     "in-mp": { name: "Madhya Pradesh", mapData: madhyaPradeshMap },
//   };

//   const chartOptions = {
//     chart: {
//       type: "map",
//       map: currentMap,
//       events: {
//         drilldown: function (e) {
//           if (!e.seriesOptions) {
//             const chart = this;
//             const state = stateMapData[e.point.drilldown];

//             if (state) {
//               chart.showLoading("Loading...");
//               setTimeout(() => {
//                 chart.hideLoading();
//                 chart.addSeriesAsDrilldown(e.point, {
//                   type: "map",
//                   name: state.name,
//                   mapData: state.mapData,
//                   joinBy: "hc-key",
//                   data: state.data?.map(([hcKey, value, name]) => ({
//                     "hc-key": hcKey,
//                     value,
//                     name
//                   })),
//                   colorAxis: true,
//                   tooltip: {
//                     pointFormat: "{point.name}: {point.value}",
//                   },
//                 });
//               }, 1000);
//             }
//           }
//         },
//         drillup: function () {
//           console.log("Drilling up...");
//         },
//       },
//     },
//     title: {
//       text: "India Map with Drilldown",
//     },
//     subtitle: {
//       text: "Click states to view districts",
//     },
//     mapNavigation: {
//       enabled: true,
//       buttonOptions: {
//         verticalAlign: "bottom",
//       },
//     },
//     colorAxis: {
//       min: 0,
//       max: 100,
//       minColor: "#E6E7E8",
//       maxColor: "#006400",
//     },
//     legend: {
//       enabled: false
//     },
//     plotOptions: {
//       map: {
//         states: {
//           hover: {
//             color: "#EEDD66",
//           },
//         },
//         allAreas: true,
//         nullColor: "#F0F0F0",
//         dataLabels: {
//           enabled: true,
//           format: "{point.name}",
//           style: {
//             fontWeight: "bold",
//             color: "black",
//           },
//         },
//       },
//     },
//     series: [
//       {
//         name: "India",
//         mapData: mapDataIndia,
//         data: [
//           ["in-mh", 75],
//           ["in-dl", 50],
//           ["in-mp", 45],
//           ["in-rj", 40],
//           ["in-up", 60],
//         ].map(([hcKey, value]) => ({
//           "hc-key": hcKey,
//           value,
//           drilldown: hcKey,
//         })),
//         joinBy: "hc-key",
//         tooltip: {
//           pointFormat: "{point.name}: {point.value}",
//         },
//       },
//     ],
//     exporting: {
//       enabled: true,
//       buttons: {
//         contextButton: {
//           menuItems: [
//             "viewFullscreen",
//             "printChart",
//             "separator",
//             "downloadPNG",
//             "downloadJPEG",
//             "downloadPDF",
//             "downloadSVG",
//             "separator",
//             "downloadCSV",
//             "downloadXLS",
//           ],
//         },
//       },
//       filename: "india-map",
//     },
//     drilldown: {
//       breadcrumbs: {
//         position: {
//           align: "right",
//         },
//         buttonTheme: {
//           style: {
//             color: "#006400",
//           },
//         },
//       },
//     },
//   };


//   return (
//     <div style={{ maxWidth: "100%", height: "600px" }}>
//       <HighchartsReact
//         highcharts={Highcharts}
//         options={chartOptions}
//         constructorType={"mapChart"}
//       />
//     </div>
//   );
// };

// export default MapDash;

import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataIndia from "@highcharts/map-collection/countries/in/in-all.geo.json";

const MapDash = () => {
  const [breadcrumb, setBreadcrumb] = useState("India");

  useEffect(() => {
    Promise.all([
      import("highcharts/modules/map"),
      import("highcharts/modules/exporting"),
      import("highcharts/modules/export-data"),
      import("highcharts/highcharts-more"),
    ])
      .then(([mapModule, exportingModule, exportDataModule, moreModule]) => {
        mapModule(Highcharts);
        exportingModule(Highcharts);
        exportDataModule(Highcharts);
        moreModule(Highcharts);
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
        click: function (event) {
          if (event.point && event.point.name) {
            setBreadcrumb(`India / ${event.point.name}`);
          }
        },
      },
    },

    title: {
      text: "India Map",
    },

    subtitle: {
      text: breadcrumb, 
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
        dataLabels: {
          enabled: false, // Removed state names
        },
        point: {
          events: {
            click: function () {
              setBreadcrumb(`India / ${this.name}`);
            },
          },
        },
      },
    },

    series: [
      {
        name: "India",
        mapData: mapDataIndia,
        data: mapDataIndia.features.map((feature) => ({
          "hc-key": feature.properties["hc-key"],
          value: Math.floor(Math.random() * 100),
        })),
        joinBy: "hc-key",
        tooltip: {
          pointFormat: "Click to select: <b>{point.name}</b>",
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
  };

  return (
    <div style={{ maxWidth: "100%", height: "600px" }}>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} constructorType={"mapChart"} />
    </div>
  );
};

export default MapDash;

