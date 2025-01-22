import React, { useContext, useEffect, useState } from 'react'
import NavbarHeader from '../../components/headers/NavbarHeader'
import GlobalButtonGroup from '../../components/commons/GlobalButtonGroup'
import TabNav from '../../components/commons/TabNav'
import AboutWidget from '../../components/dashboardMasters/widgetMaster/AboutWidget'
import QueryDetails from '../../components/dashboardMasters/widgetMaster/QueryDetails'
import TableDetails from '../../components/dashboardMasters/widgetMaster/TableDetails'
import ParamDetails from '../../components/dashboardMasters/widgetMaster/ParamDetails'
import JndiDetails from '../../components/dashboardMasters/widgetMaster/JndiDetails'
import FooterDetails from '../../components/dashboardMasters/widgetMaster/FooterDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import GraphWidget from '../../components/dashboardMasters/widgetMaster/GraphWidget'
import KpiWidget from '../../components/dashboardMasters/widgetMaster/KpiWidget'
import MapWidget from '../../components/dashboardMasters/widgetMaster/MapWidget'
import NewsTickWidget from '../../components/dashboardMasters/widgetMaster/NewsTickWidget'
import GlobalDataTable from '../../components/commons/GlobalDataTable'
import { HISContext } from '../../contextApi/HISContext'
import DataServiceTable from '../../components/webServiceMasters/dataService/DataServiceTable'
import { parameterType } from '../../localData/DropDownData'

const WidgetMaster = () => {


  const { setShowDataTable, allWidgetData, getAllWidgetData, dashboardForDt, getDashboardForDrpData, parameterData, getAllParameterData,widgetDrpData,getAllServiceData,dataServiceData } = useContext(HISContext);

  const [values, setValues] = useState({
    "widgetFor": "",
    "widgetType": "",
    "widgetNameDisplay": "",
    "widgetNameInternal": "",
    "widgetRefreshTime": "",
    "widgetRefreshDelayTime": "",
    "cachingStatus": "",
    "limit": "",
    "widgetHadingClr": "",
    "widgetTopMargin": "",
    "headingBgColor": "",
    "headingFontColor": "",
    "headingDisplayStyle": "",
    "recordsPerPage": "",
    "pagePerBlock": "",
    "DataScrollHeight": "",
    "parentWidget": "",
    "columnNoToDisplay": "",
    "leftClmNoToFixed": "",
    "rightClmNoToFixed": "",
    "linkedWidget": [],
    "actionBtnReq": "",
    "pdfTableFontSize": "",
    "pdfTableHeadBarClr": "",
    "pdfTableHeadTxtFontClr": "",
    "groupClmNoComma": "",
    "query": "",
    "procedureName": "",
    "recordsPerPageTreeCh": "",
    "parameterOption": "",
    "widgetLoadOption": "",
    "paraComboBgColor": "",
    "paraComboFontColor": "",
    "paraLabelFontColor": "",
    "jndiSavingData": "",
    "stmtTimeOut": "",
    "lastUpdatedQuery": "",
    "FooterText": "",
    "customMsgForNoData": "",
    //graphs fields
    "defaultPluginName": "",
    "defaultGraphType": "",
    "graphTypes": [],
    "clmNameForLineGraph": "",
    "colorsForBars": "",
    "graphHeight": "",
    "graphBottomMargin": "",
    "graphBgStartColor": "",
    "graphBgEndColor": "",
    "graphFontColor": "",
    "graphTypeBgColor": "",
    "graphTypeFontColor": "",
    "labelRotation": "",
    "alphaGraph3D": "",
    "betaGraph3D": "",
    "xAxisLabel": "",
    "yAxisLabel": "",
    "xAxisFontSize": "",
    "yAxisFontSize": "",
    "annotationFontSize": "",
    "maxValueOfAxis": "",
    "parentWidgetGraph": "",
    "isActionBtnReqGraph": "",
    //kpi details
    "kpiType": "",
    "kpiBorderWidth": "",
    "kpiBorderColor": "",
    "kpiIconType": "",
    "kpiTabIconImage": "",
    "kpiDefaultBgColor": "",
    "kpiDefaultFontColor": "",
    "kpiDefaultHoverBg": "",
    "kpiIconColor": "",
    "kpiBoxClickOptions": "",
    "kpiTabOpenOnClick": "",
    "kpiWidgetOpenOnClick": "",
    "kpiDashboardOpenOnClick": "",
    "kpiTabLinkName": "",
    "kpiWidgetLinkName": "",
    "kpiLinkColor": "",
    "kpiLinkFontColor": "",
    //map fields
    "mapName": "",
    "parentWidgetMap": "",
    "mapIncreasingIntensity": "",
    //newsTicker Fields
    "noOfNewsVisible": "",
    "newsSpeed": "",
    "newsInterval": "",
    //iframe
    "urlForIframe": ""

  })

  const [radioValues, setRadioValues] = useState({
    widgetViewed: 'tabular',
    isWidgetNameVisible: 'yes',
    selectedModeQuery: 'query',
    widgetPurpose: 'download',
    widgetHeadingAlign: 'left',
    isRecordLimitReq: 'yes',
    isWidgetBorderReq: 'yes',
    isTableHeadingReq: 'yes',
    tableHeadingAlign: "datatype",
    isFirstRowHeading: 'yes',
    isDataTblReq: 'yes',
    isIndexNumReq: 'yes',
    isPaginationReq: 'yes',
    isSearchReq: 'yes',
    isHeadingFixed: 'yes',
    isLastRowTotal: 'yes',
    isCardViewMobile: 'yes',
    isShowPrntHeadChild: 'yes',
    isShowPrntParamsChild: 'yes',
    printPdfIn: 'landscape',
    pdfTheme: 'grid',
    isPdfHeadReqAllPgs: 'yes',
    showFilterDtlsInPdf: 'yes',
    isReportByJsPdfPlug: 'yes',
    isReportPrintDtReq: 'yes',
    isGlobalHeaderReq: 'yes',
    isTableBorderReq: 'yes',
    isPositiveWidget: 'yes',
    isDirectDownloadBtn: 'yes',
    isPopupBasedReq: 'yes',
    isTreeChildReq: 'yes',
    treeChildDataBy: "query",
    dataDisplay: "horizontal",
    isDataTblReqTree: 'yes',
    isPaginationReqTree: 'yes',
    isSearchReqTree: 'yes',
    //graphs fields
    isDisplayGraphPlugin: "yes",
    isColorByPoint: "yes",
    isShowLegendOnExport: "yes",
    isFullLabelReq: "yes",
    isGraphScrollBarReq: "yes",
    isShowLegend: "yes",
    isDataLabels: "yes",
    isThree3D: "yes",
    isDirectDownloadBtnGraph: 'yes',
    isFirstClmGraphHeading: 'yes',
    isShowPrntHeadChildGraph: 'yes',
    isHideParent: 'yes',
    //kpi
    isWidgetShadowReq: "yes",
    isDownloadDataFromKpi: "yes",
    //map
    isChildBasedPrimaryKey: "yes",
    isHideParentMap: "yes",
    //iframe
    isSsoUrl: "yes"

  })

  const [tabIndex, setTabIndex] = useState(1);
  const [tabName, setTabName] = useState({ value: 1, label: "About Widget" });
  const [showWidgetTable, setShowWidgetTable] = useState(false);
  const [showParamsTable, setShowParamsTable] = useState(false);
  const [showWebServiceTable, setShowWebServiceTable] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (values?.widgetFor) {
      getAllWidgetData(values?.widgetFor);
      getAllParameterData(values?.widgetFor);

    }
  }, [values?.widgetFor])

  useEffect(() => {
    if (dashboardForDt?.length === 0) { getDashboardForDrpData(); }
    if (dataServiceData?.length === 0) { getAllServiceData(); }
  }, [])


  const handleRadioChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRadioValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    if (name) {
      setValues({ ...values, [name]: value })
    }
  }

  // TAB MENUS
  const [tabNavMenus, setTabNavMenus] = useState([
    { value: 1, label: "About Widget" },
    { value: 2, label: "Query Details" },
    { value: 3, label: "Table Details" },
    { value: 4, label: "Parameter Detail" },
    { value: 5, label: "JNDI Details" },
    { value: 6, label: "Footer Details" },

  ]);

  // HANDLE TAB MENUS ACCORDING TO WIDGET
  useEffect(() => {
    const widgetTabMapping = {
      tabular: { value: 3, label: "Table Details" },
      graph: { value: 3, label: "Graph Details" },
      map: { value: 3, label: "Map Details" },
      kpi: { value: 3, label: "KPI Details" },
      newsTicker: { value: 3, label: "News Details" },
    };
    const removeParamTabsFor = ["tabular", "graph", "map"];

    let updatedTabs = [...tabNavMenus];
    if (radioValues?.widgetViewed === "otherLink" || radioValues?.widgetViewed === "iframe") {
      const removeTabs = tabNavMenus.filter(dt => dt?.value !== 3);
      setTabNavMenus(removeTabs);
    } else {
      const selectedTab = widgetTabMapping[radioValues?.widgetViewed];
      const isValue3Present = tabNavMenus.some(dt => dt.value === 3);
      const isParamsPresent = tabNavMenus.some(dt => dt.value === 4);
      if (selectedTab) {
        if (isValue3Present) {
          updatedTabs = updatedTabs.map(dt =>
            dt.value === 3 ? { ...dt, label: selectedTab?.label } : dt
          );
        } else {
          updatedTabs.splice(2, 0, selectedTab);
          // setTabNavMenus(updatedTabs);
        }
      }
      // Remove "value: 4" Parameter tab for specific widgets
      if (!removeParamTabsFor.includes(radioValues?.widgetViewed) && isParamsPresent) {
        updatedTabs = updatedTabs.filter(dt => dt.value !== 4);
      } else if (removeParamTabsFor.includes(radioValues?.widgetViewed) && !isParamsPresent) {
        updatedTabs.splice(3, 0, { value: 4, label: "Parameter Detail" });
      }

      setTabNavMenus(updatedTabs);
    }
  }, [radioValues?.widgetViewed])


  const saveTabsData = () => {
    let nextTab = tabIndex + 1;
    if (tabNavMenus?.length >= nextTab) {
      setTabName(tabNavMenus[nextTab - 1])
      setTabIndex(nextTab)
    }
  }

  const previousTab = () => {
    let nextTab = tabIndex - 1;
    if (nextTab >= 1) {
      setTabName(tabNavMenus[nextTab-1])
      setTabIndex(nextTab);
    }
  }

  const onOpenDataTable = () => {
    setShowDataTable(true);
    setShowWidgetTable(true);
  }
  const onOpenParams = () => {
    setShowDataTable(true);
    setShowParamsTable(true);
  }
  const onOpenWebService = () => {
    setShowDataTable(true);
    setShowWebServiceTable(true);
  }

  const onTableClose = () => {
    setShowWidgetTable(false);
    setShowParamsTable(false);
    setShowWebServiceTable(false);
    setSearchInput('');

  }
  const widgetColumn = [
    {
      name: <input
        type="checkbox"
        // checked={selectAll}
        // onChange={(e) => handleSelectAll(e.target.checked, "gnumUserId")}
        disabled={true}
        className="form-check-input log-select"
      />,
      cell: row =>
        <div style={{ position: 'absolute', top: 4, left: 10 }}>
          <span className="btn btn-sm text-white px-1 py-0 mr-1" >
            <input
              type="checkbox"
            // checked={selectedRows.includes(row.gnumUserId)}
            // onChange={(e) => { handleRowSelect(row.gnumUserId) }}
            />
          </span>
        </div>,
      width: "8%"
    },
    {
      name: 'Widget ID',
      selector: row => parseInt(row.rptId),
      sortable: true,
      width: "10%"
    },
    {
      name: 'Widget Name',
      selector: row => row?.rptName,
      sortable: true,
    },
    {
      name: 'Display Name',
      selector: row => row?.rptDisplayName,
      sortable: true,
    },
    {
      name: 'Type',
      selector: row => row?.reportViewed,
      sortable: true,
    }
  ]

  const paramsColumn = [
    {
      name: <input
        type="checkbox"
        // checked={selectAll}
        // onChange={(e) => handleSelectAll(e.target.checked, "gnumUserId")}
        disabled={true}
        className="form-check-input log-select"
      />,
      cell: row =>
        <div style={{ position: 'absolute', top: 4, left: 10 }}>
          <span className="btn btn-sm text-white px-1 py-0 mr-1" >
            <input
              type="checkbox"
            // checked={selectedRows.includes(row.gnumUserId)}
            // onChange={(e) => { handleRowSelect(row.gnumUserId) }}
            />
          </span>
        </div>,
      width: "8%"
    },
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
      width: "8%"
    },
    {
      name: 'Parameter Name',
      selector: row => row?.jsonData?.parameterName,
      sortable: true,
    },
    {
      name: 'Display Name',
      selector: row => row?.jsonData?.parameterDisplayName,
      sortable: true,
    },
    {
          name: 'Type',
          selector: row => parameterType?.filter(dt => dt?.value === row?.jsonData?.parameterType)[0]?.label || "---",
          sortable: true,
        },
  ]

  return (
    <>
      <NavbarHeader />
      <div className='main-master-page'>
        <div className='row w-100 m-0'>
          <div className='col-sm-6 p-0 global-button-group'>
            {values?.widgetFor &&
              <GlobalButtonGroup isSave={true} isOpen={true} isReset={true} isParams={true} isWeb={true} onSave={null} onOpen={onOpenDataTable} onReset={null} onParams={onOpenParams} onWeb={onOpenWebService} />
            }
          </div>
          <div className='col-sm-6 p-0 global-tabs'>
            <TabNav isTabNav={true} tabNavData={tabNavMenus} setTabIndex={setTabIndex} tabName={tabName} setTabName={setTabName} />
          </div>
        </div>
        <div className='form-card m-auto p-2'>
          <div className='p-1'>

            {tabName?.value === 1 &&
              <AboutWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} dashboardForDt={dashboardForDt} />
            }

            {tabName?.value === 2 &&
              <QueryDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />
            }

            {tabName?.value === 3 &&
              <>
                {radioValues?.widgetViewed === "tabular" &&
                  <TableDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} parentWidget={widgetDrpData} setValues={setValues}/>
                }

                {radioValues?.widgetViewed === "graph" &&
                  <GraphWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} parentWidget={widgetDrpData}/>
                }

                {radioValues?.widgetViewed === "kpi" &&
                  <KpiWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} />
                }

                {radioValues?.widgetViewed === "map" &&
                  <MapWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} parentWidget={widgetDrpData}/>
                }

                {radioValues?.widgetViewed === "newsTicker" &&
                  <NewsTickWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} />
                }
              </>

            }

            {(tabName?.value === 4 && (radioValues?.widgetViewed === "map" || radioValues?.widgetViewed === "graph" || radioValues?.widgetViewed === "tabular")) &&
              <ParamDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />}

            {tabName?.value === 5 &&
              <JndiDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />}

            {tabName?.value === 6 &&
              <FooterDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />}

            {showWidgetTable &&
              <GlobalDataTable title={"Widget List"} column={widgetColumn} data={allWidgetData} onModify={null} onDelete={null} onClose={onTableClose} setSearchInput={setSearchInput} isShowBtn={true}/>
            }
            {showParamsTable &&
              <GlobalDataTable title={"Parameter List"} column={paramsColumn} data={parameterData} onModify={null} onDelete={null} onClose={onTableClose} setSearchInput={setSearchInput} isShowBtn={false}/>
            }
            {showWebServiceTable &&
              <DataServiceTable data={dataServiceData} onModify={null} onDelete={null} setSearchInput={setSearchInput} onClose={onTableClose} isShowBtn={false}/>
            }


            <b><h6 className='header-devider mt-4'></h6></b>

            <div className='text-center mt-2 pre-nxt-btn'>
              <button className='btn btn-sm ms-1'
                onClick={previousTab}
                disabled={tabIndex > 1 ? false : true}
              >
                <FontAwesomeIcon icon={faArrowLeft} className="dropdown-gear-icon me-2" />
                Previous
              </button>
              <button className='btn btn-sm ms-1' onClick={saveTabsData}>
                {`${tabIndex < tabNavMenus?.length ? 'Save & Next' : 'Save'}`}
                {tabIndex < tabNavMenus?.length &&
                  <FontAwesomeIcon icon={faArrowRight} className="dropdown-gear-icon ms-2" />
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WidgetMaster
