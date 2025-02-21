import React, { useState } from "react";
import Tabular from "./Tabular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faBarChart, faCog, faFileCsv, faFilePdf, faRefresh, faSortAmountDesc } from "@fortawesome/free-solid-svg-icons";

const initialStates = [
  { id: 1, name: "Rajasthan" },
  { id: 2, name: "Uttar Pradesh" },
  { id: 3, name: "Rajasthan" },
  { id: 4, name: "Uttar Pradesh" },
  { id: 5, name: "Rajasthan" },
  { id: 6, name: "Uttar Pradesh" },
  { id: 7, name: "Rajasthan" },
  { id: 8, name: "Uttar Pradesh" },
  { id: 9, name: "Rajasthan" },
  { id: 11, name: "Uttar Pradesh" },
  { id: 12, name: "Rajasthan" },
  { id: 13, name: "Uttar Pradesh" },
  { id: 15, name: "Rajasthan" },
  { id: 16, name: "Rajasthan" },
  { id: 17, name: "Rajasthan" },
  { id: 18, name: "Rajasthan" },
  { id: 19, name: "Rajasthan" },
  { id: 20, name: "Rajasthan" },
];

const districtData = {
  1: [
    { id: 101, name: "Jaipur", stateId: 1 },
    { id: 102, name: "Jodhpur", stateId: 1 },
  ],
  2: [
    { id: 201, name: "Lucknow", stateId: 2 },
    { id: 202, name: "Varanasi", stateId: 2 },
  ],
};

const hospitalData = {
  101: [{ id: 1001, name: "Jaipur Hospital" }],
  102: [{ id: 1002, name: "Jodhpur Hospital" }],
  201: [{ id: 2001, name: "Lucknow Hospital" }],
  202: [{ id: 2002, name: "Varanasi Hospital" }],
};

const TabularDash = ({ widgetData }) => {

  const [currentLevel, setCurrentLevel] = useState("state");
  const [currentData, setCurrentData] = useState(initialStates);
  const [previousData, setPreviousData] = useState([]);

  const handleStateClick = (stateId) => {
    if (districtData[stateId]) {
      setPreviousData([...previousData, { level: currentLevel, data: currentData }]);
      setCurrentData(districtData[stateId]);
      setCurrentLevel("district");
    }
  };

  const handleDistrictClick = (districtId) => {
    if (hospitalData[districtId]) {
      setPreviousData([...previousData, { level: currentLevel, data: currentData }]);
      setCurrentData(hospitalData[districtId]);
      setCurrentLevel("hospital");
    }
  };

  const handleBack = () => {
    if (previousData.length > 0) {
      const lastState = previousData.pop();
      setCurrentLevel(lastState.level);
      setCurrentData(lastState.data);
      setPreviousData([...previousData]); // Update state
    }
  };

  const stateColumns = [
    {
      name: "Action",
      cell: (row) => (
        <button className="rounded-4 border-1" onClick={() => handleStateClick(row.id)}><FontAwesomeIcon icon={faSortAmountDesc} /></button>
      ),
    },
    { name: "State Name", selector: (row) => row.name, sortable: true }
  ];

  const districtColumns = [
    {
      name: "Action",
      cell: (row) => (
        <button className="rounded-4 border-1" onClick={() => handleDistrictClick(row.id)}><FontAwesomeIcon icon={faSortAmountDesc} /></button>
      ),
    },
    { name: "District Name", selector: (row) => row.name, sortable: true },

  ];

  const hospitalColumns = [{ name: "Hospital Name", selector: (row) => row.name, sortable: true }];

  return (
    <div className={`tabular-box tabular-box-border ${widgetData?.isTableBorderRequired === 'No' ? '' : 'tabular-box-border'}`}>
      <div className="row px-2 py-2 border-bottom">
        <div class="col-md-7 col-xs-7 fw-medium fs-6 pe-0">
          {widgetData?.rptDisplayName}
        </div>
        <div className="col-md-5">
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
            <li className="p-1 dropdown-item text-primary" style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faFilePdf} className="dropdown-gear-icon me-2" />Download PDF
            </li>
            <li className="p-1 dropdown-item text-primary" style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faFileCsv} className="dropdown-gear-icon me-2" />Download CSV
            </li>
            <li className="p-1 dropdown-item text-primary" style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faBarChart} className="dropdown-gear-icon me-2" />Outliers
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

          {currentLevel !== "state" && (
            <button type="button" className="small-box-btn-dwn" onClick={handleBack}
            >
              <FontAwesomeIcon icon={faArrowCircleLeft} className="dropdown-gear-icon" />
            </button>
          )}

        </div>

      </div>
      <div className="px-2 py-2">
        <h4 style={{ fontWeight: "500", fontSize: "20px" }}>Query :</h4>
        <span>{widgetData?.procedureMode}</span>
      </div>

      <Tabular
        columns={
          currentLevel === "state"
            ? stateColumns
            : currentLevel === "district"
              ? districtColumns
              : hospitalColumns
        }
        data={currentData}
        pagination
        recordsPerPage={widgetData?.recordPerPage || 5}
        fixedHeader
        scrollHeight={widgetData?.scrollYValue || "500"}
        headingFontColor={widgetData?.headingFontColour || "#ffffff"}
        headingBgColor={widgetData?.headingBackgroundColour || "#000000"} // Example: Orange header
        headingAlignment={widgetData?.tableHeadingAlignment === '0' ? "center" : 'left' || 'center'}
        recordsPerPageOptions={[widgetData?.recordPerPage || 5, 10, 20, 50]}
        isTableHeadingRequired={widgetData?.tableHeadingRequired === 'yes' ? false : true || false}
      />
    </div>
  );
};

export default TabularDash;
