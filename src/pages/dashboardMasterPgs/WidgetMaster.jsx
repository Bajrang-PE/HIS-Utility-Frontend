import React, { useContext, useEffect, useState } from 'react'
import NavbarHeader from '../../components/headers/NavbarHeader'
import GlobalButtonGroup from '../../components/commons/GlobalButtonGroup'
import TabNav from '../../components/commons/TabNav'
import AboutWidget from '../../components/dashboardMasters/widgetMaster/AboutWidget'
import QueryDetails from '../../components/dashboardMasters/widgetMaster/QueryDetails'
import TableDetails from '../../components/dashboardMasters/widgetMaster/TableDetails'
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
import ParamsDetail from '../../components/dashboardMasters/tabMaster/ParamsDetail'
import InputSelect from '../../components/commons/InputSelect'
import { ToastAlert } from '../../utils/commonFunction'

const WidgetMaster = () => {


  const { setShowDataTable, allWidgetData, getAllWidgetData, dashboardForDt, getDashboardForDrpData, parameterData, getAllParameterData, widgetDrpData, getAllServiceData, dataServiceData, selectedOption, setSelectedOption, actionMode, setActionMode, } = useContext(HISContext);

  const [values, setValues] = useState({
    "widgetFor": "", "widgetType": "", "widgetNameDisplay": "", "widgetNameInternal": "", "widgetRefreshTime": "", "widgetRefreshDelayTime": "", "cachingStatus": "", "limit": "", "widgetHadingClr": "", "widgetTopMargin": "", "headingBgColor": "", "headingFontColor": "", "headingDisplayStyle": "", "recordsPerPage": "", "pagePerBlock": "", "DataScrollHeight": "", "parentWidget": "", "columnNoToDisplay": "", "leftClmNoToFixed": "", "rightClmNoToFixed": "", "linkedWidget": [], "actionBtnReq": "", "pdfTableFontSize": "", "pdfTableHeadBarClr": "", "pdfTableHeadTxtFontClr": "", "groupClmNoComma": "", "query": "", "procedureName": "", "recordsPerPageTreeCh": "", "parameterOption": "", "loadOption": "ONWINDOWLOAD", "paraComboBgColor": "", "paraComboFontColor": "", "paraLabelFontColor": "", "jndiSavingData": "", "stmtTimeOut": "", "lastUpdatedQuery": "", "FooterText": "", "customMsgForNoData": "",
    //graphs fields
    "defaultPluginName": "", "defaultGraphType": "", "graphTypes": [], "clmNameForLineGraph": "", "colorsForBars": "", "graphHeight": "", "graphBottomMargin": "", "graphBgStartColor": "", "graphBgEndColor": "", "graphFontColor": "", "graphTypeBgColor": "", "graphTypeFontColor": "", "labelRotation": "", "alphaGraph3D": "", "betaGraph3D": "", "xAxisLabel": "", "yAxisLabel": "", "xAxisFontSize": "", "yAxisFontSize": "", "annotationFontSize": "", "maxValueOfAxis": "", "parentWidgetGraph": "", "isActionBtnReqGraph": "",
    //kpi details
    "kpiType": "", "kpiBorderWidth": "", "kpiBorderColor": "", "kpiIconType": "", "kpiTabIconImage": "", "kpiDefaultBgColor": "", "kpiDefaultFontColor": "", "kpiDefaultHoverBg": "", "kpiIconColor": "", "kpiBoxClickOptions": "", "kpiTabOpenOnClick": "", "kpiWidgetOpenOnClick": "", "kpiDashboardOpenOnClick": "",
    "kpiTabLinkName": "", "kpiWidgetLinkName": "", "kpiLinkColor": "", "kpiLinkFontColor": "",
    //map fields
    "mapName": "", "parentWidgetMap": "", "mapIncreasingIntensity": "",
    //newsTicker Fields
    "noOfNewsVisible": "", "newsSpeed": "", "newsInterval": "",
    //iframe
    "urlForIframe": ""

  })

  const [radioValues, setRadioValues] = useState({
    widgetViewed: 'Tabular', isWidgetNameVisible: 'Yes', selectedModeQuery: 'Query', widgetPurpose: 'Download',
    widgetHeadingAlign: 'left', isRecordLimitReq: 'Yes', isWidgetBorderReq: 'Yes',

    isTableHeadingReq: 'Yes',
    tableHeadingAlign: "datatype", isFirstRowHeading: 'Yes', isDataTblReq: 'Yes', isIndexNumReq: 'Yes',
    isPaginationReq: 'Yes', isSearchReq: 'Yes', isHeadingFixed: 'Yes', isLastRowTotal: 'Yes', isCardViewMobile: 'yes', isShowPrntHeadChild: 'yes', isShowPrntParamsChild: 'yes', printPdfIn: 'landscape', pdfTheme: 'grid', isPdfHeadReqAllPgs: 'yes', showFilterDtlsInPdf: 'yes', isReportByJsPdfPlug: 'yes', isReportPrintDtReq: 'yes', isGlobalHeaderReq: 'yes', isTableBorderReq: 'yes', isPositiveWidget: 'yes', isDirectDownloadBtn: 'yes', isPopupBasedReq: 'yes', isTreeChildReq: 'yes', treeChildDataBy: "query", dataDisplay: "horizontal", isDataTblReqTree: 'Yes', isPaginationReqTree: 'Yes', isSearchReqTree: 'Yes',
    //graphs fields
    isDisplayGraphPlugin: "yes", isColorByPoint: "yes", isShowLegendOnExport: "yes", isFullLabelReq: "yes", isGraphScrollBarReq: "yes", isShowLegend: "yes", isDataLabels: "yes", isThree3D: "yes", isDirectDownloadBtnGraph: 'yes', isFirstClmGraphHeading: 'yes', isShowPrntHeadChildGraph: 'yes', isHideParent: 'Yes', isRowClickable: "No",
    //kpi
    isWidgetShadowReq: "yes", isDownloadDataFromKpi: "yes",
    //map
    isChildBasedPrimaryKey: "yes", isHideParentMap: "yes",
    //iframe
    isSsoUrl: "Yes"

  })

  const [tabIndex, setTabIndex] = useState(1);
  const [tabName, setTabName] = useState({ value: 1, label: "About Widget" });
  const [showWidgetTable, setShowWidgetTable] = useState(false);
  const [showParamsTable, setShowParamsTable] = useState(false);
  const [showWebServiceTable, setShowWebServiceTable] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [singleData, setSingleData] = useState([]);

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
    const removeParamTabsFor = ["Tabular", "graph", "map"];

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
      setTabName(tabNavMenus[nextTab - 1])
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
    setSelectedOption([]);
  }

  const reset = () => {
    const isReset = window.confirm('Do you want to reset whole form!');
    if (isReset) {
      setValues({
        "widgetFor": "", "widgetType": "", "widgetNameDisplay": "", "widgetNameInternal": "", "widgetRefreshTime": "", "widgetRefreshDelayTime": "", "cachingStatus": "", "limit": "", "widgetHadingClr": "", "widgetTopMargin": "", "headingBgColor": "", "headingFontColor": "", "headingDisplayStyle": "", "recordsPerPage": "", "pagePerBlock": "", "DataScrollHeight": "", "parentWidget": "", "columnNoToDisplay": "", "leftClmNoToFixed": "", "rightClmNoToFixed": "", "linkedWidget": [], "actionBtnReq": "", "pdfTableFontSize": "", "pdfTableHeadBarClr": "", "pdfTableHeadTxtFontClr": "", "groupClmNoComma": "", "query": "", "procedureName": "", "recordsPerPageTreeCh": "", "parameterOption": "", "loadOption": "ONWINDOWLOAD", "paraComboBgColor": "", "paraComboFontColor": "", "paraLabelFontColor": "", "jndiSavingData": "", "stmtTimeOut": "", "lastUpdatedQuery": "", "FooterText": "", "customMsgForNoData": "",
        //graphs fields
        "defaultPluginName": "", "defaultGraphType": "", "graphTypes": [], "clmNameForLineGraph": "", "colorsForBars": "", "graphHeight": "", "graphBottomMargin": "", "graphBgStartColor": "", "graphBgEndColor": "", "graphFontColor": "", "graphTypeBgColor": "", "graphTypeFontColor": "", "labelRotation": "", "alphaGraph3D": "", "betaGraph3D": "", "xAxisLabel": "", "yAxisLabel": "", "xAxisFontSize": "", "yAxisFontSize": "", "annotationFontSize": "", "maxValueOfAxis": "", "parentWidgetGraph": "", "isActionBtnReqGraph": "",
        //kpi details
        "kpiType": "", "kpiBorderWidth": "", "kpiBorderColor": "", "kpiIconType": "", "kpiTabIconImage": "", "kpiDefaultBgColor": "", "kpiDefaultFontColor": "", "kpiDefaultHoverBg": "", "kpiIconColor": "", "kpiBoxClickOptions": "", "kpiTabOpenOnClick": "", "kpiWidgetOpenOnClick": "", "kpiDashboardOpenOnClick": "",
        "kpiTabLinkName": "", "kpiWidgetLinkName": "", "kpiLinkColor": "", "kpiLinkFontColor": "",
        //map fields
        "mapName": "", "parentWidgetMap": "", "mapIncreasingIntensity": "",
        //newsTicker Fields
        "noOfNewsVisible": "", "newsSpeed": "", "newsInterval": "",
        //iframe
        "urlForIframe": ""
      });
      setRadioValues({
        widgetViewed: 'Tabular', isWidgetNameVisible: 'Yes', selectedModeQuery: 'Query', widgetPurpose: 'download',
        widgetHeadingAlign: 'left', isRecordLimitReq: 'Yes', isWidgetBorderReq: 'Yes',

        isTableHeadingReq: 'Yes',
        tableHeadingAlign: "datatype", isFirstRowHeading: 'Yes', isDataTblReq: 'Yes', isIndexNumReq: 'Yes',
        isPaginationReq: 'Yes', isSearchReq: 'Yes', isHeadingFixed: 'Yes', isLastRowTotal: 'Yes', isCardViewMobile: 'yes', isShowPrntHeadChild: 'yes', isShowPrntParamsChild: 'yes', printPdfIn: 'landscape', pdfTheme: 'grid', isPdfHeadReqAllPgs: 'yes', showFilterDtlsInPdf: 'yes', isReportByJsPdfPlug: 'yes', isReportPrintDtReq: 'yes', isGlobalHeaderReq: 'yes', isTableBorderReq: 'yes', isPositiveWidget: 'yes', isDirectDownloadBtn: 'yes', isPopupBasedReq: 'yes', isTreeChildReq: 'yes', treeChildDataBy: "query", dataDisplay: "horizontal", isDataTblReqTree: 'Yes', isPaginationReqTree: 'Yes', isSearchReqTree: 'Yes',
        //graphs fields
        isDisplayGraphPlugin: "yes", isColorByPoint: "yes", isShowLegendOnExport: "yes", isFullLabelReq: "yes", isGraphScrollBarReq: "yes", isShowLegend: "yes", isDataLabels: "yes", isThree3D: "yes", isDirectDownloadBtnGraph: 'yes', isFirstClmGraphHeading: 'yes', isShowPrntHeadChildGraph: 'yes', isHideParent: 'yes',
        //kpi
        isWidgetShadowReq: "yes", isDownloadDataFromKpi: "yes",
        //map
        isChildBasedPrimaryKey: "yes", isHideParentMap: "yes",
        //iframe
        isSsoUrl: "yes"
      });
      setTabIndex(1);
      setTabName({ value: 1, label: "About Widget" })
    }
  }

  const handleUpdateData = () => {
    if (selectedOption?.length > 0) {
      const selectedRow = allWidgetData?.filter(dt => dt?.rptId === selectedOption[0]?.rptId)
      setSingleData(selectedRow);
      setActionMode('edit');
      setShowParamsTable(false);
      setShowDataTable(false);
      setShowWebServiceTable(false);
      setSelectedOption([]);
    } else {
      ToastAlert('Please select a record', 'warning');
    }
  }

  const returnAlignment = (val) => {
    if (val === "left" || val === "Left") {
      return "left";
    } else if (val === 'right' || val === "Right") {
      return 'right';
    } else if (val === 'center' || val === "Center") {
      return 'center';
    }
  }

  useEffect(() => {
    if (singleData?.length > 0) {
      setValues({
        ...values,
        widgetFor: singleData[0]?.dashboardFor,//
        widgetType: singleData[0]?.widgetType,//
        widgetNameDisplay: singleData[0]?.rptDisplayName,//
        widgetNameInternal: singleData[0]?.rptName,//
        widgetRefreshTime: singleData[0]?.widgetRefreshTime,//
        widgetRefreshDelayTime: singleData[0]?.widgetRefreshDelayTime,//
        cachingStatus: singleData[0]?.cachingStatusForWidget,//
        limit: singleData[0]?.limit,//======
        widgetHadingClr: singleData[0]?.widgetHeadingColor,//
        widgetTopMargin: singleData[0]?.widgetTopMargin,//
        //table
        headingBgColor: singleData[0]?.headingBackgroundColour,//
        headingFontColor: singleData[0]?.headingFontColour,//
        headingDisplayStyle: singleData[0]?.headingDisplayStyle,//
        recordsPerPage: singleData[0]?.recordPerPage,//
        pagePerBlock: singleData[0]?.pagePerBlock,//
        DataScrollHeight: singleData[0]?.DataScrollHeight,//===============
        parentWidget: singleData[0]?.parentWidget,//==============
        columnNoToDisplay: singleData[0]?.columnNoToDisplay,//=============
        leftClmNoToFixed: singleData[0]?.leftClmNoToFixed,//===========
        rightClmNoToFixed: singleData[0]?.rightClmNoToFixed,//==========
        linkedWidget: singleData[0]?.linkWidget,//
        actionBtnReq: singleData[0]?.isActionButtonReq,//
        pdfTableFontSize: singleData[0]?.pdfTableFontSize,//
        pdfTableHeadBarClr: singleData[0]?.pdfTableheaderBarColor,//
        pdfTableHeadTxtFontClr: singleData[0]?.pdfTableheadingFontColour,//
        groupClmNoComma: singleData[0]?.groupClmNoComma,//================
        query: singleData[0]?.query,//===============
        procedureName: singleData[0]?.procedureName,//=============
        recordsPerPageTreeCh: singleData[0]?.treeChildrecordPerPage,//
        parameterOption: singleData[0]?.parameterOptions,//
        loadOption: singleData[0]?.widgetLoadOption,//
        paraComboBgColor: singleData[0]?.widgetParameterComboBGColor,//
        paraComboFontColor: singleData[0]?.widgetParameterComboFontColor,//
        paraLabelFontColor: singleData[0]?.widgetParameterLabelFontColor,//
        jndiSavingData: singleData[0]?.JNDIid,//
        stmtTimeOut: singleData[0]?.statementTimeOut,//
        lastUpdatedQuery: singleData[0]?.lastUpdatedQuery,//===========
        FooterText: singleData[0]?.FooterText,//============
        customMsgForNoData: singleData[0]?.customMsgForNoData,//===============
        //graph
        defaultPluginName: singleData[0]?.defaultPluginName,
        defaultGraphType: singleData[0]?.defaultGraphType,
        graphTypes: singleData[0]?.graphTypes,
        clmNameForLineGraph: singleData[0]?.clmNameForLineGraph,
        colorsForBars: singleData[0]?.colorsForBars,
        graphHeight: singleData[0]?.graphHeight,
        graphBottomMargin: singleData[0]?.graphBottomMargin,
        graphBgStartColor: singleData[0]?.graphBgStartColor,
        graphBgEndColor: singleData[0]?.graphBgEndColor,
        graphFontColor: singleData[0]?.graphFontColor,
        graphTypeBgColor: singleData[0]?.graphTypeBgColor,
        graphTypeFontColor: singleData[0]?.graphTypeFontColor,
        labelRotation: singleData[0]?.labelRotation,
        alphaGraph3D: singleData[0]?.alphaGraph3D,
        betaGraph3D: singleData[0]?.betaGraph3D,
        xAxisLabel: singleData[0]?.xAxisLabel,
        yAxisLabel: singleData[0]?.yAxisLabel,
        xAxisFontSize: singleData[0]?.xAxisFontSize,
        yAxisFontSize: singleData[0]?.yAxisFontSize,
        annotationFontSize: singleData[0]?.annotationFontSize,
        maxValueOfAxis: singleData[0]?.maxValueOfAxis,
        parentWidgetGraph: singleData[0]?.parentWidgetGraph,
        isActionBtnReqGraph: singleData[0]?.isActionBtnReqGraph,
        //kpi
        kpiType: singleData[0]?.kpiType,
        kpiBorderWidth: singleData[0]?.kpiBorderWidth,
        kpiBorderColor: singleData[0]?.kpiBorderColor,
        kpiIconType: singleData[0]?.kpiIconType,
        kpiTabIconImage: singleData[0]?.kpiTabIconImage,
        kpiDefaultBgColor: singleData[0]?.kpiDefaultBgColor,
        kpiDefaultFontColor: singleData[0]?.kpiDefaultFontColor,
        kpiDefaultHoverBg: singleData[0]?.kpiDefaultHoverBg,
        kpiIconColor: singleData[0]?.kpiIconColor,
        kpiBoxClickOptions: singleData[0]?.kpiBoxClickOptions,
        kpiTabOpenOnClick: singleData[0]?.kpiTabOpenOnClick,
        kpiWidgetOpenOnClick: singleData[0]?.kpiWidgetOpenOnClick,
        kpiDashboardOpenOnClick: singleData[0]?.kpiDashboardOpenOnClick,
        kpiTabLinkName: singleData[0]?.kpiTabLinkName,
        kpiWidgetLinkName: singleData[0]?.kpiWidgetLinkName,
        kpiLinkColor: singleData[0]?.kpiLinkColor,
        kpiLinkFontColor: singleData[0]?.kpiLinkFontColor,
        //map
        mapName: singleData[0]?.mapName,
        parentWidgetMap: singleData[0]?.parentWidgetMap,
        mapIncreasingIntensity: singleData[0]?.mapIncreasingIntensity,
        //news
        noOfNewsVisible: singleData[0]?.noOfNewsVisible,
        newsSpeed: singleData[0]?.newsSpeed,
        newsInterval: singleData[0]?.newsInterval,
        //iframe
        urlForIframe: singleData[0]?.urlForIframe,
      });
      setRadioValues({
        ...radioValues,
        widgetViewed: singleData[0]?.reportViewed,//
        isWidgetNameVisible: singleData[0]?.isWidgetNameVisible,//
        widgetPurpose: singleData[0]?.widgetShowOrDownload,//
        widgetHeadingAlign: returnAlignment(singleData[0]?.widgetHeadingAlignment),//
        isRecordLimitReq: singleData[0]?.isRecordsLimitedLineRequired,//
        isWidgetBorderReq: singleData[0]?.isWidgetBorderRequired,//

        selectedModeQuery: singleData[0]?.modeOfQuery,//

        isTableHeadingReq: singleData[0]?.tableHeadingRequired,//
        tableHeadingAlign: singleData[0]?.tableHeadingAlignment,//
        isFirstRowHeading: singleData[0]?.isFirstRowWidgetHeading,//
        isDataTblReq: singleData[0]?.isDataTableRequired,//
        isIndexNumReq: singleData[0]?.isIndexNumberRequired,//
        isPaginationReq: singleData[0]?.isPaginationReq,//
        isSearchReq: singleData[0]?.isDataSearchReq,//
        isHeadingFixed: singleData[0]?.isHeadingFixed,//
        isLastRowTotal: singleData[0]?.isLastRowTotal,//
        isCardViewMobile: singleData[0]?.isCardViewMobile,//=============

        isShowPrntHeadChild: singleData[0]?.showParentDetailsinChild,//
        isShowPrntParamsChild: singleData[0]?.showParentParameterDetailsinChild,//

        printPdfIn: singleData[0]?.printPDFIn,//
        pdfTheme: singleData[0]?.pdfTheme,//
        isPdfHeadReqAllPgs: singleData[0]?.isPdfHeaderReqInAllPages,//
        showFilterDtlsInPdf: singleData[0]?.showFilterDetailsInPDF,//
        isReportByJsPdfPlug: singleData[0]?.isReportByjsPDFPlugin,//
        isReportPrintDtReq: singleData[0]?.isReportPrintDateRequired,//
        isGlobalHeaderReq: singleData[0]?.isGlobalHeaderRequired,//
        isTableBorderReq: singleData[0]?.isTableBorderRequired,//
        isPositiveWidget: singleData[0]?.isPositiveWidget,//
        isDirectDownloadBtn: singleData[0]?.isDirectDownloadRequired,//
        isPopupBasedReq: singleData[0]?.isPopupBasedOnDataClickRequired,//
        isTreeChildReq: singleData[0]?.isTreeChildRequired,//

        treeChildDataBy: singleData[0]?.treeChildDataBy,//
        dataDisplay: singleData[0]?.treeChildDataDisplay,//
        isDataTblReqTree: singleData[0]?.treeChildIsDataTableRequired,//
        isPaginationReqTree: singleData[0]?.treeChildIsPaginationRequired,//
        isSearchReqTree: singleData[0]?.treeChildIsSearchRequired,//
        // Graph fields
        isDisplayGraphPlugin: singleData[0]?.isDisplayGraphPlugin,
        isColorByPoint: singleData[0]?.isColorByPoint,
        isShowLegendOnExport: singleData[0]?.isShowLegendOnExport,
        isFullLabelReq: singleData[0]?.isFullLabelReq,
        isGraphScrollBarReq: singleData[0]?.isGraphScrollBarReq,
        isShowLegend: singleData[0]?.isShowLegend,
        isDataLabels: singleData[0]?.isDataLabels,
        isThree3D: singleData[0]?.isThree3D,
        isDirectDownloadBtnGraph: singleData[0]?.isDirectDownloadBtnGraph,
        isFirstClmGraphHeading: singleData[0]?.isFirstClmGraphHeading,
        isShowPrntHeadChildGraph: singleData[0]?.isShowPrntHeadChildGraph,
        isHideParent: singleData[0]?.isHideParent,//
        isRowClickable: singleData[0]?.isRowClickable,//
        // KPI fields
        isWidgetShadowReq: singleData[0]?.isWidgetShadowReq,
        isDownloadDataFromKpi: singleData[0]?.isDownloadDataFromKpi,
        // Map fields
        isChildBasedPrimaryKey: singleData[0]?.isChildBasedPrimaryKey,
        isHideParentMap: singleData[0]?.isHideParentMap,
        // Iframe fields
        isSsoUrl: singleData[0]?.isSsoUrl,
      });
    }
  }, [singleData]);


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
              checked={selectedOption[0]?.rptId === row?.rptId}
              onChange={(e) => { setSelectedOption([row]) }}
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
        {values?.widgetFor &&
          <div className='row w-100 m-0'>
            <div className='col-sm-6 p-0 global-button-group'>
              <GlobalButtonGroup isSave={true} isOpen={true} isReset={true} isParams={true} isWeb={true} onSave={null} onOpen={onOpenDataTable} onReset={reset} onParams={onOpenParams} onWeb={onOpenWebService} />
            </div>
            <div className='col-sm-6 p-0 global-tabs'>
              <TabNav isTabNav={true} tabNavData={tabNavMenus} setTabIndex={setTabIndex} tabName={tabName} setTabName={setTabName} />
            </div>
          </div>
        }
        <div className='form-card m-auto p-2'>
          {values?.widgetFor ?
            <div className='p-1'>

              {tabName?.value === 1 &&
                <AboutWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} dashboardForDt={dashboardForDt} />
              }

              {tabName?.value === 2 &&
                <QueryDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />
              }

              {tabName?.value === 3 &&
                <>
                  {radioValues?.widgetViewed === "Tabular" &&
                    <TableDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} parentWidget={widgetDrpData} setValues={setValues} />
                  }

                  {radioValues?.widgetViewed === "graph" &&
                    <GraphWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} parentWidget={widgetDrpData} />
                  }

                  {radioValues?.widgetViewed === "kpi" &&
                    <KpiWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} />
                  }

                  {radioValues?.widgetViewed === "map" &&
                    <MapWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} parentWidget={widgetDrpData} />
                  }

                  {radioValues?.widgetViewed === "newsTicker" &&
                    <NewsTickWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} />
                  }
                </>

              }

              {(tabName?.value === 4 && (radioValues?.widgetViewed === "map" || radioValues?.widgetViewed === "graph" || radioValues?.widgetViewed === "Tabular")) &&
                <ParamsDetail handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} pageName={'widget'} />}

              {tabName?.value === 5 &&
                <JndiDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />}

              {tabName?.value === 6 &&
                <FooterDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />}

              {showWidgetTable &&
                <GlobalDataTable title={"Widget List"} column={widgetColumn} data={allWidgetData} onModify={handleUpdateData} onDelete={null} onClose={onTableClose} setSearchInput={setSearchInput} isShowBtn={true} />
              }
              {showParamsTable &&
                <GlobalDataTable title={"Parameter List"} column={paramsColumn} data={parameterData} onModify={null} onDelete={null} onClose={onTableClose} setSearchInput={setSearchInput} isShowBtn={false} />
              }
              {showWebServiceTable &&
                <DataServiceTable data={dataServiceData} onModify={null} onDelete={null} setSearchInput={setSearchInput} onClose={onTableClose} isShowBtn={false} />
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
            :
            <>
              <b><h6 className='header-devider m-0'>Widget Master - Basic Details</h6></b>
              <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                <div className='col-sm-6'>
                  <div className="form-group row">
                    <label className="col-sm-5 col-form-label pe-0 required-label">Widget For : </label>
                    <div className="col-sm-7 ps-0 align-content-center">
                      <InputSelect
                        id="widgetFor"
                        name="widgetFor"
                        placeholder="Select value..."
                        options={dashboardForDt}
                        className="backcolorinput"
                        value={values?.widgetFor}
                        onChange={handleValueChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
        </div>
      </div>

    </>
  )
}

export default WidgetMaster
