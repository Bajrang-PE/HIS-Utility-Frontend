import React, { createContext, useState } from 'react'
import { fetchData } from '../utils/ApiHooks';
import { DrpDataValLab } from '../utils/commonFunction';

export const HISContext = createContext();

const HISContextData = ({ children }) => {
  //GLOBALS
  const [showDataTable, setShowDataTable] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);
  const [actionMode, setActionMode] = useState('home');

  // ALL DATA
  const [parameterData, setParameterData] = useState([]);
  const [allWidgetData, setAllWidgetData] = useState([]);
  const [dataServiceData, setDataServiceData] = useState([]);
  const [allTabsData, setAllTabsData] = useState([]);
  const [userServiceData, setUserServiceData] = useState([]);

  //DROPDOWN DATA
  const [dashboardForDt, setDashboardForDt] = useState([]);
  const [parameterDrpData, setParameterDrpData] = useState([]);
  const [widgetDrpData, setWidgetDrpData] = useState([]);
  const [tabDrpData, setTabDrpData] = useState([]);
  const [dataServiceDrpData, setDataServiceDrpData] = useState([]);

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


  //all data
  const getAllParameterData = (dashFor) => {
    fetchData("/hisutils/parameterAll", { 'masterName': dashFor }).then((data) => {
      if (data) {
        setParameterData(data);
        setParameterDrpData(DrpDataValLab(data, 'parameterId', 'parameterName', true))
      } else {
        setParameterData([]);
        setParameterDrpData([]);
      }
    })
  }

  const getAllServiceData = () => {
    fetchData("/hisutils/DataServiceDetails", { 'masterName': "GLOBAL" }).then((data) => {
      if (data) {
        setDataServiceData(data);
        setDataServiceDrpData(DrpDataValLab(data, 'serviceId', 'serviceName',true))
      } else {
        setDataServiceData([]);
        setDataServiceDrpData([]);
      }
    })
  }

  const getUserServiceData = () => {
    fetchData("/hisutils/ServiceUserDetails", { 'masterName': "GLOBAL" }).then((data) => {
      if (data) {
        setUserServiceData(data);
        // setParameterDrpData(DrpDataValLab(data, 'parameterId', 'parameterName',true))
      } else {
        setUserServiceData([]);
        // setParameterDrpData([]);
      }
    })
  }

  const getAllTabsData = (dashFor) => {
    fetchData("/hisutils/TabDetails", { 'masterName': dashFor }).then((data) => {
      if (data) {
        setAllTabsData(data);
        setTabDrpData(DrpDataValLab(data, 'dashboardId', 'dashboardName', true))
      } else {
        setAllTabsData([]);
        setTabDrpData([]);
      }
    })
  }

  const getAllWidgetData = (dashFor) => {
    fetchData("http://10.226.29.211:8025/hisutils/allWidgetConfiguration", { 'dashboardFor': dashFor }).then((data) => {
      if (data) {
        console.log(data?.filter(dt => dt?.rptId === 11600025), 'fdt')
        const fdt = data.filter(dt => dt?.rptId !== undefined && dt?.rptId !== null && dt?.rptId !== '');
        setAllWidgetData(fdt);
        setWidgetDrpData(DrpDataValLab(fdt, 'rptId', 'rptName', false))
      } else {
        setAllWidgetData([]);
        setWidgetDrpData([]);
      }
    })
  }

  return (
    <HISContext.Provider value={{
      //GLOBALS-----------------------------------
      // show table status
      showDataTable, setShowDataTable,
      selectedOption, setSelectedOption,
      actionMode, setActionMode,

      // DROP DOWNS-------------------------------
      // DASHBOARD FOR
      dashboardForDt, getDashboardForDrpData,
      parameterDrpData,
      widgetDrpData,
      tabDrpData,
      dataServiceDrpData,

      // ALL DATA----------------------------------
      //PARAMETER DATA
      parameterData, getAllParameterData,
      // WIDGET DATA
      allWidgetData, getAllWidgetData,
      //data/web services
      getAllServiceData, dataServiceData,
      //tabs data
      getAllTabsData, allTabsData,
      //userservice
      getUserServiceData, userServiceData
    }}>
      {children}
    </HISContext.Provider>
  )
}

export default HISContextData
