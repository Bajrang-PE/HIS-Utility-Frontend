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

  //DROPDOWN DATA
  const [dashboardForDt, setDashboardForDt] = useState([]);
  const [parameterDrpData, setParameterDrpData] = useState([]);
  const [widgetDrpData, setWidgetDrpData] = useState([]);

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
    fetchData("/hisutils/DataService").then((data) => {
      if (data) {
        setDataServiceData(data);
        // setParameterDrpData(DrpDataValLab(data, 'parameterId', 'parameterName',true))
      } else {
        setDataServiceData([]);
        // setParameterDrpData([]);
      }
    })
  }

  const getAllTabsData = (dashFor) => {
    fetchData("/hisutils/TabDetails", { 'masterName': dashFor }).then((data) => {
      if (data) {
        setAllTabsData(data);
        // setParameterDrpData(DrpDataValLab(data, 'parameterId', 'parameterName',true))
      } else {
        setAllTabsData([]);
        // setParameterDrpData([]);
      }
    })
  }

  const getAllWidgetData = (dashFor) => {
    fetchData("http://10.226.29.211:8025/hisutils/allWidgetConfiguration", { 'dashboardFor': dashFor }).then((data) => {
      if (data) {
        console.log(data?.filter(dt=>dt?.rptId === 11600025),'fdt')
      const fdt =  data.filter(dt => dt?.rptId !== undefined && dt?.rptId !== null && dt?.rptId !== '');
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

      // ALL DATA----------------------------------
      //PARAMETER DATA
      parameterData, getAllParameterData,
      // WIDGET DATA
      allWidgetData, getAllWidgetData,
      //data/web services
      getAllServiceData, dataServiceData,
      //tabs data
      getAllTabsData, allTabsData
    }}>
      {children}
    </HISContext.Provider>
  )
}

export default HISContextData
