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

const WidgetMaster = () => {


  const { showDataTable, setShowDataTable, allWidgetData, getAllWidgetData, dashboardForDt, getDashboardForDrpData, } = useContext(HISContext);

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
  const [isShowTable, setIsShowTable] = useState(false);
  const [tabIndex, setTabIndex] = useState(1);


  useEffect(() => {
    if (values?.widgetFor) { getAllWidgetData(values?.widgetFor); }
  }, [values?.widgetFor])

  useEffect(() => {
    if (dashboardForDt?.length === 0) { getDashboardForDrpData(); }
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
    const tabAvail = tabNavMenus[tabIndex];
    console.log(tabAvail, "tb")
    while (tabIndex < tabNavMenus.length) {
      nextTab++;
      alert('a')
    }

    // Update tabIndex only if the next tab exists
    if (nextTab <= tabNavMenus.length) {
      setTabIndex(nextTab);
    }

    // if (tabIndex < tabNavMenus?.length) {
    //   setTabIndex(tabIndex + 1)
    // }
  }

  const onOpenDataTable = () => {
    setShowDataTable(true)
  }

  const column = [
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
        selector: row => row?.rptDisplayName ,
        sortable: true,
      },
      {
        name: 'Type',
        selector: row => row?.reportViewed,
        sortable: true,
      },
      // {
      //     name: 'Email',
      //     selector: row => row.email,
      // },
    ]

  return (
    <>
      <NavbarHeader />
      <div className='main-master-page'>
        <div className='row w-100 m-0'>
          <div className='col-sm-6 p-0'>
            <GlobalButtonGroup isSave={true} isOpen={true} isReset={true} isParams={true} isWeb={true} onSave={null} onOpen={onOpenDataTable} onReset={null} onParams={null} onWeb={null} />
          </div>
          <div className='col-sm-6 p-0'>
            <TabNav isTabNav={true} tabNavData={tabNavMenus} setTabIndex={setTabIndex} tabIndex={tabIndex} />
          </div>
        </div>
        <div className='form-card m-auto p-2'>
          <div className='p-1'>

            {tabIndex === 1 &&
              <AboutWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} dashboardForDt={dashboardForDt}/>
            }

            {tabIndex === 2 &&
              <QueryDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />
            }

            {tabIndex === 3 &&
              <>
                {radioValues?.widgetViewed === "tabular" &&
                  <TableDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />
                }

                {radioValues?.widgetViewed === "graph" &&
                  <GraphWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} />
                }

                {radioValues?.widgetViewed === "kpi" &&
                  <KpiWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} />
                }

                {radioValues?.widgetViewed === "map" &&
                  <MapWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} />
                }

                {radioValues?.widgetViewed === "newsTicker" &&
                  <NewsTickWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} />
                }
              </>

            }

            {(tabIndex === 4 && (radioValues?.widgetViewed === "map" || radioValues?.widgetViewed === "graph" || radioValues?.widgetViewed === "tabular")) &&
              <ParamDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />}

            {tabIndex === 5 &&
              <JndiDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />}

            {tabIndex === 6 &&
              <FooterDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />}

            {showDataTable &&
              <GlobalDataTable showDataTable={showDataTable} setShowDataTable={setShowDataTable} title={"Widget List"} column={column} data={allWidgetData} onModify={null} onDelete={null} />
            }


            <b><h6 className='header-devider mt-4'></h6></b>

            <div className='text-center mt-2 pre-nxt-btn'>
              <button className='btn btn-sm ms-1'
                // onClick={() => setTabIndex(tabIndex > 1 ? tabIndex - 1 : 1)} 
                onClick={() => {
                  let prevTabIndex = tabIndex - 1;

                  // Find the previous valid tab index
                  while (prevTabIndex > 0 && !tabNavMenus[prevTabIndex - 1]) {
                    prevTabIndex--;
                  }

                  setTabIndex(prevTabIndex);
                }}
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
