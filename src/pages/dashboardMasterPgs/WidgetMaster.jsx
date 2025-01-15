import React, { useState } from 'react'
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

const WidgetMaster = () => {

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
    "xAxisFontSize": "",
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

  const handleRadioChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(e.target);
    setRadioValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  console.log(radioValues, 'rf')

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    if (name) {
      setValues({ ...values, [name]: value })
    }
  }

  const tabNavMenus = [
    { value: 1, label: "About Widget" },
    { value: 2, label: "Query Details" },
    { value: 3, label: "Table Details" },
    { value: 4, label: "Parameter Detail" },
    { value: 5, label: "JNDI Details" },
    { value: 6, label: "Footer Details" },

  ]

  const saveTabsData = () => {
    if (tabIndex < tabNavMenus?.length) {
      setTabIndex(tabIndex + 1)
    }
  }

  return (
    <>
      <NavbarHeader />
      <div className='main-master-page'>
        <div className='row w-100 m-0'>
          <div className='col-sm-6 p-0'>
            <GlobalButtonGroup isSave={true} isOpen={true} isReset={true} isParams={true} isWeb={true} onSave={null} onOpen={null} onReset={null} onParams={null} onWeb={null} />
          </div>
          <div className='col-sm-6 p-0'>
            <TabNav isTabNav={true} tabNavData={tabNavMenus} setTabIndex={setTabIndex} tabIndex={tabIndex} />
          </div>
        </div>
        <div className='form-card m-auto p-2'>
          <div className='p-1'>

            {tabIndex === 1 &&
              // <AboutWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />
              <GraphWidget />
              // <KpiWidget/>
              // <MapWidget/>
              // <NewsTickWidget/>
            }

            {tabIndex === 2 &&
              <QueryDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />}

            {tabIndex === 3 &&
              <TableDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />}

            {tabIndex === 4 &&
              <ParamDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />}

            {tabIndex === 5 &&
              <JndiDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />}

            {tabIndex === 6 &&
              <FooterDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />}


            <b><h6 className='header-devider mt-4'></h6></b>

            <div className='text-center mt-2 pre-nxt-btn'>
              <button className='btn btn-sm ms-1' onClick={() => setTabIndex(tabIndex > 1 ? tabIndex - 1 : 1)} disabled={tabIndex > 1 ? false : true}>
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
