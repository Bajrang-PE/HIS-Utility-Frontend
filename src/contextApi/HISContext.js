import React, { createContext, useState } from 'react'
import { fetchData } from '../utils/ApiHooks';

export const HISContext = createContext();

const HISContextData = ({ children }) => {
  //GLOBALS
  const [showDataTable, setShowDataTable] = useState(false);

  // ALL DATA
  const [parameterData, setParameterData] = useState([]);
  const [allWidgetData, setAllWidgetData] = useState([]);
  // const [allWidgetData, setAllWidgetData] = useState([]);

  //DROPDOWN DATA
  const [dashboardForDt, setDashboardForDt] = useState([])

  // dropdowns api call

  const getDashboardForDrpData = () => {
    fetchData("hisutils/dashboardfor").then((data) => {
      if (data) {
        setDashboardForDt(data);
      } else {
        setDashboardForDt([]);
      }
    })
  }

  const getAllParameterData = (dashFor) => {
    fetchData("/hisutils/parameterAll", { 'masterName': dashFor }).then((data) => {
      if (data) {
        setParameterData(data);
      } else {
        setParameterData([]);
      }
    })
  }

  const getAllWidgetData = (dashFor) => {
    fetchData("http://10.226.29.211:8025/hisutils/allWidgetConfiguration", { 'dashboardFor': dashFor }).then((data) => {
      if (data) {
        setAllWidgetData(data);
      } else {
        setAllWidgetData([]);
      }
    })
  }

  return (
    <HISContext.Provider value={{
      //GLOBALS-----------------------------------
      // show table status
      showDataTable, setShowDataTable,

      // DROP DOWNS-------------------------------
      // DASHBOARD FOR
      dashboardForDt, getDashboardForDrpData,

      // ALL DATA----------------------------------
      //PARAMETER DATA
      parameterData, getAllParameterData,
      // WIDGET DATA
      allWidgetData, getAllWidgetData
    }}>
      {children}
    </HISContext.Provider>
  )
}

export default HISContextData
