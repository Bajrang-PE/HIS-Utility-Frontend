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
import { fetchPostData, fetchUpdateData } from '../../utils/ApiHooks'
import IconPicker from '../../components/commons/IconPicker'

const WidgetMaster = () => {

  const { setShowDataTable, allWidgetData, getAllWidgetData, dashboardForDt, getDashboardForDrpData, parameterData, getAllParameterData, widgetDrpData, getAllServiceData, dataServiceData, selectedOption, setSelectedOption, actionMode, setActionMode, } = useContext(HISContext);

  const [values, setValues] = useState({
    "id": "", "widgetFor": "", "widgetType": "", "widgetNameDisplay": "", "widgetNameInternal": "", "widgetRefreshTime": "", "widgetRefreshDelayTime": "", "cachingStatus": "", "limit": "", "widgetHadingClr": "", "widgetTopMargin": "", "headingBgColor": "", "headingFontColor": "", "headingDisplayStyle": "", "recordsPerPage": "", "pagePerBlock": "", "DataScrollHeight": "", "parentWidget": "", "columnNoToDisplay": "", "leftClmNoToFixed": "", "rightClmNoToFixed": "", "linkedWidget": [], "actionBtnReq": "", "pdfTableFontSize": "", "pdfTableHeadBarClr": "", "pdfTableHeadTxtFontClr": "", "groupClmNoComma": "", "query": "", "webQuery": "", "procedureName": "", "recordsPerPageTreeCh": "", "parameterOption": "", "loadOption": "ONWINDOWLOAD", "paraComboBgColor": "", "paraComboFontColor": "", "paraLabelFontColor": "", "jndiSavingData": "", "stmtTimeOut": "", "lastUpdatedQuery": "", "FooterText": "", "customMsgForNoData": "", "treeChildQuery": "", "treeChildProcedure": "", "popUpDetails": [], "queryLabel": '', "htmlText": '', 'iconName': "",
    //graphs fields
    "defaultPluginName": "highchart", "defaultGraphType": "BAR_GRAPH", "graphTypes": [], "clmNameForLineGraph": "", "colorsForBars": "", "graphHeight": "", "graphBottomMargin": "", "graphBgStartColor": "", "graphBgEndColor": "", "graphFontColor": "", "graphTypeBgColor": "", "graphTypeFontColor": "", "labelRotation": "", "alphaGraph3D": "", "betaGraph3D": "", "xAxisLabel": "", "yAxisLabel": "", "xAxisFontSize": "", "yAxisFontSize": "", "annotationFontSize": "", "maxValueOfAxis": "", "parentWidgetGraph": "", "isActionBtnReqGraph": "Yes", "minValueOfAxis": '',
    //kpi details
    "kpiType": "", "kpiBorderWidth": "", "kpiBorderColor": "", "kpiIconType": "FONT_ICON", "kpiTabIconImage": "", "kpiDefaultBgColor": "", "kpiDefaultFontColor": "", "kpiDefaultHoverBg": "", "kpiIconColor": "", "kpiBoxClickOptions": "0", "kpiTabOpenOnClick": "", "kpiWidgetOpenOnClick": "", "kpiDashboardOpenOnClick": "",
    "kpiTabLinkName": "", "kpiWidgetLinkName": "", "kpiLinkColor": "", "kpiLinkFontColor": "",
    //map fields
    "mapName": "", "parentWidgetMap": "", "mapIncreasingIntensity": "",
    //newsTicker Fields
    "noOfNewsVisible": "", "newsSpeed": "normal", "newsInterval": "5000",
    //iframe
    "urlForIframe": "",
    // other link
    "lstOtherLink": []

  })

  const [radioValues, setRadioValues] = useState({
    widgetViewed: 'Tabular', isWidgetNameVisible: 'Yes', selectedModeQuery: 'Query', widgetPurpose: 'Download',
    widgetHeadingAlign: 'left', isRecordLimitReq: 'Yes', isWidgetBorderReq: 'Yes',

    isTableHeadingReq: 'Yes',
    tableHeadingAlign: "0", isFirstRowHeading: 'Yes', isDataTblReq: 'Yes', isIndexNumReq: 'Yes',
    isPaginationReq: 'Yes', isSearchReq: 'Yes', isHeadingFixed: 'Yes', isLastRowTotal: 'Yes', isCardViewMobile: 'Yes', isShowPrntHeadChild: 'Yes', isShowPrntParamsChild: 'Yes', printPdfIn: 'landscape', pdfTheme: 'grid', isPdfHeadReqAllPgs: 'Yes', showFilterDtlsInPdf: 'Yes', isReportByJsPdfPlug: 'Yes', isReportPrintDtReq: 'Yes', isGlobalHeaderReq: 'Yes', isTableBorderReq: 'Yes', isPositiveWidget: 'Yes', isDirectDownloadBtn: 'Yes', isPopupBasedReq: 'No', isTreeChildReq: 'No', treeChildDataBy: "Query", dataDisplay: "horizontal", isDataTblReqTree: 'Yes', isPaginationReqTree: 'Yes', isSearchReqTree: 'Yes',
    //graphs fields
    isDisplayGraphPlugin: "Yes", isColorByPoint: "Yes", isShowLegendOnExport: "Yes", isFullLabelReq: "Yes", isGraphScrollBarReq: "Yes", isShowLegend: "Yes", isDataLabels: "Yes", isThree3D: "Yes", isDirectDownloadBtnGraph: 'Yes', isFirstClmGraphHeading: 'Yes', isShowPrntHeadChildGraph: 'Yes', isHideParent: 'Yes', isRowClickable: "No",
    //kpi
    isWidgetShadowReq: "Yes", isDownloadDataFromKpi: "Yes",
    //map
    isChildBasedPrimaryKey: "Yes", isHideParentMap: "Yes",
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
      Tabular: { value: 3, label: "Table Details" },
      Graph: { value: 3, label: "Graph Details" },
      Criteria_Map: { value: 3, label: "Map Details" },
      KPI: { value: 3, label: "KPI Details" },
      News_Ticker: { value: 3, label: "News Details" },
    };
    const removeParamTabsFor = ["Tabular", "Graph", "Criteria_Map"];

    let updatedTabs = [...tabNavMenus];
    if (radioValues?.widgetViewed === "Other_Link" || radioValues?.widgetViewed === "Iframe") {
      const removeTabs = tabNavMenus.filter(dt => dt?.value !== 3 && dt?.value !== 4 && dt?.value !== 2);
      setTabNavMenus(removeTabs);
    } else {
      const selectedTab = widgetTabMapping[radioValues?.widgetViewed];
      const isValue3Present = tabNavMenus.some(dt => dt.value === 3);
      const isParamsPresent = tabNavMenus.some(dt => dt.value === 4);
      const isQueryPresent = tabNavMenus.some(dt => dt.value === 2);
      if (selectedTab) {
        if (isValue3Present) {
          updatedTabs = updatedTabs.map(dt =>
            dt.value === 3 ? { ...dt, label: selectedTab?.label } : dt
          );
        } else {
          updatedTabs.splice(1, 0, selectedTab);
          // setTabNavMenus(updatedTabs);
        }
      }
      // Remove "value: 4" Parameter tab for specific widgets
      if (!removeParamTabsFor.includes(radioValues?.widgetViewed) && isParamsPresent) {
        updatedTabs = updatedTabs.filter(dt => dt.value !== 4);
      } else if (removeParamTabsFor.includes(radioValues?.widgetViewed) && !isParamsPresent) {
        updatedTabs.splice(3, 0, { value: 4, label: "Parameter Detail" });
      }

      if (!isQueryPresent) {
        updatedTabs.splice(1, 0, { value: 2, label: "Query Details" });
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
        "id": "", "widgetFor": "", "widgetType": "", "widgetNameDisplay": "", "widgetNameInternal": "", "widgetRefreshTime": "", "widgetRefreshDelayTime": "", "cachingStatus": "", "limit": "", "widgetHadingClr": "", "widgetTopMargin": "", "headingBgColor": "", "headingFontColor": "", "headingDisplayStyle": "", "recordsPerPage": "", "pagePerBlock": "", "DataScrollHeight": "", "parentWidget": "", "columnNoToDisplay": "", "leftClmNoToFixed": "", "rightClmNoToFixed": "", "linkedWidget": [], "actionBtnReq": "", "pdfTableFontSize": "", "pdfTableHeadBarClr": "", "pdfTableHeadTxtFontClr": "", "groupClmNoComma": "", "query": "", "procedureName": "", "recordsPerPageTreeCh": "", "parameterOption": "", "loadOption": "ONWINDOWLOAD", "paraComboBgColor": "", "paraComboFontColor": "", "paraLabelFontColor": "", "jndiSavingData": "", "stmtTimeOut": "", "lastUpdatedQuery": "", "FooterText": "", "customMsgForNoData": "", "treeChildQuery": "", "treeChildProcedure": "", "popUpDetails": [], "webQuery": "", "queryLabel": '', "htmlText": '', 'iconName': "",
        //graphs fields
        "defaultPluginName": "highchart", "defaultGraphType": "BAR_GRAPH", "graphTypes": [], "clmNameForLineGraph": "", "colorsForBars": "", "graphHeight": "", "graphBottomMargin": "", "graphBgStartColor": "", "graphBgEndColor": "", "graphFontColor": "", "graphTypeBgColor": "", "graphTypeFontColor": "", "labelRotation": "", "alphaGraph3D": "", "betaGraph3D": "", "xAxisLabel": "", "yAxisLabel": "", "xAxisFontSize": "", "yAxisFontSize": "", "annotationFontSize": "", "maxValueOfAxis": "", "parentWidgetGraph": "", "isActionBtnReqGraph": "Yes", "minValueOfAxis": "",
        //kpi details
        "kpiType": "", "kpiBorderWidth": "", "kpiBorderColor": "", "kpiIconType": "FONT_ICON", "kpiTabIconImage": "", "kpiDefaultBgColor": "", "kpiDefaultFontColor": "", "kpiDefaultHoverBg": "", "kpiIconColor": "", "kpiBoxClickOptions": "0", "kpiTabOpenOnClick": "", "kpiWidgetOpenOnClick": "", "kpiDashboardOpenOnClick": "",
        "kpiTabLinkName": "", "kpiWidgetLinkName": "", "kpiLinkColor": "", "kpiLinkFontColor": "",
        //map fields
        "mapName": "", "parentWidgetMap": "", "mapIncreasingIntensity": "",
        //newsTicker Fields
        "noOfNewsVisible": "", "newsSpeed": "normal", "newsInterval": "5000",
        //iframe
        "urlForIframe": "",
        "lstOtherLink": []
      });
      setRadioValues({
        widgetViewed: 'Tabular', isWidgetNameVisible: 'Yes', selectedModeQuery: 'Query', widgetPurpose: 'Download',
        widgetHeadingAlign: 'left', isRecordLimitReq: 'Yes', isWidgetBorderReq: 'Yes',

        isTableHeadingReq: 'Yes',
        tableHeadingAlign: "0", isFirstRowHeading: 'Yes', isDataTblReq: 'Yes', isIndexNumReq: 'Yes',
        isPaginationReq: 'Yes', isSearchReq: 'Yes', isHeadingFixed: 'Yes', isLastRowTotal: 'Yes', isCardViewMobile: 'Yes', isShowPrntHeadChild: 'Yes', isShowPrntParamsChild: 'Yes', printPdfIn: 'landscape', pdfTheme: 'grid', isPdfHeadReqAllPgs: 'Yes', showFilterDtlsInPdf: 'Yes', isReportByJsPdfPlug: 'Yes', isReportPrintDtReq: 'Yes', isGlobalHeaderReq: 'Yes', isTableBorderReq: 'Yes', isPositiveWidget: 'Yes', isDirectDownloadBtn: 'Yes', isPopupBasedReq: 'No', isTreeChildReq: 'No', treeChildDataBy: "Query", dataDisplay: "horizontal", isDataTblReqTree: 'Yes', isPaginationReqTree: 'Yes', isSearchReqTree: 'Yes',
        //graphs fields
        isDisplayGraphPlugin: "Yes", isColorByPoint: "Yes", isShowLegendOnExport: "Yes", isFullLabelReq: "Yes", isGraphScrollBarReq: "Yes", isShowLegend: "Yes", isDataLabels: "Yes", isThree3D: "Yes", isDirectDownloadBtnGraph: 'Yes', isFirstClmGraphHeading: 'Yes', isShowPrntHeadChildGraph: 'Yes', isHideParent: 'Yes',
        //kpi
        isWidgetShadowReq: "Yes", isDownloadDataFromKpi: "Yes",
        //map
        isChildBasedPrimaryKey: "Yes", isHideParentMap: "Yes",
        //iframe
        isSsoUrl: "Yes"
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
        id: singleData[0]?.rptId,
        widgetFor: singleData[0]?.dashboardFor,//
        widgetType: singleData[0]?.widgetType,//
        widgetNameDisplay: singleData[0]?.rptDisplayName,//
        widgetNameInternal: singleData[0]?.rptName,//
        widgetRefreshTime: singleData[0]?.widgetRefreshTime,//
        widgetRefreshDelayTime: singleData[0]?.widgetRefreshDelayTime,//
        cachingStatus: singleData[0]?.cachingStatusForWidget,//
        limit: singleData[0]?.limitHTMLFromDb,//
        widgetHadingClr: singleData[0]?.widgetHeadingColor,//
        widgetTopMargin: singleData[0]?.widgetTopMargin,//
        //table
        headingBgColor: singleData[0]?.headingBackgroundColour,//
        headingFontColor: singleData[0]?.headingFontColour,//
        headingDisplayStyle: singleData[0]?.headingDisplayStyle,//
        recordsPerPage: singleData[0]?.recordPerPage,//
        pagePerBlock: singleData[0]?.pagePerBlock,//
        DataScrollHeight: singleData[0]?.scrollYValue,//
        parentWidget: singleData[0]?.parentReport,//
        columnNoToDisplay: singleData[0]?.parentDisplaycolumnno,//
        leftClmNoToFixed: singleData[0]?.leftColumnsToBeFixed,//
        rightClmNoToFixed: singleData[0]?.rightColumnsToBeFixed,//
        linkedWidget: singleData[0]?.linkWidget,//
        actionBtnReq: singleData[0]?.isActionButtonReq,//
        pdfTableFontSize: singleData[0]?.pdfTableFontSize,//
        pdfTableHeadBarClr: singleData[0]?.pdfTableheaderBarColor,//
        pdfTableHeadTxtFontClr: singleData[0]?.pdfTableheadingFontColour,//
        groupClmNoComma: singleData[0]?.groupColumnNo,//

        query: singleData[0]?.modeOfQuery !== 'WebSevice' ? singleData[0]?.queryVO : [],//
        webQuery: singleData[0]?.modeOfQuery === 'WebSevice' ? singleData[0]?.queryVO : [],//
        procedureName: singleData[0]?.procedureMode,//
        treeChildQuery: singleData[0]?.treeChildQuery,
        treeChildProcedure: singleData[0]?.treeChildProcedure,
        popUpDetails: singleData[0]?.drillDownJsonString?.length > 0 ? JSON?.parse(singleData[0]?.drillDownJsonString) : [],//
        queryLabel: singleData[0]?.queryLabel,//
        htmlText: singleData[0]?.htmlText,//

        recordsPerPageTreeCh: singleData[0]?.treeChildrecordPerPage,//
        parameterOption: singleData[0]?.parameterOptions,//
        loadOption: singleData[0]?.widgetLoadOption,//
        paraComboBgColor: singleData[0]?.widgetParameterComboBGColor,//
        paraComboFontColor: singleData[0]?.widgetParameterComboFontColor,//
        paraLabelFontColor: singleData[0]?.widgetParameterLabelFontColor,//
        jndiSavingData: singleData[0]?.JNDIid,//
        stmtTimeOut: singleData[0]?.statementTimeOut,//
        lastUpdatedQuery: singleData[0]?.lastUpdatedQuery,//
        FooterText: singleData[0]?.footerText,//
        customMsgForNoData: singleData[0]?.customMessage,//
        //graph
        defaultPluginName: singleData[0]?.graphPluginName,//
        defaultGraphType: singleData[0]?.defaultgraphType,//
        graphTypes: singleData[0]?.graphChangeOptions,//
        clmNameForLineGraph: singleData[0]?.lineGraphColumnName,//
        colorsForBars: singleData[0]?.colorForBars,//
        graphHeight: singleData[0]?.graphHeight,//
        graphBottomMargin: singleData[0]?.graphBottomMargin,//
        graphBgStartColor: singleData[0]?.graphStartColor,//
        graphBgEndColor: singleData[0]?.graphEndColor,//
        graphFontColor: singleData[0]?.graphFontColor,//
        graphTypeBgColor: singleData[0]?.graphTypeBGColor,//
        graphTypeFontColor: singleData[0]?.graphTypeFontColor,//
        labelRotation: singleData[0]?.rotation,//
        alphaGraph3D: singleData[0]?.alpha,//
        betaGraph3D: singleData[0]?.beta,//
        xAxisLabel: singleData[0]?.xAxisLabel,//
        yAxisLabel: singleData[0]?.yAxisLabel,//
        xAxisFontSize: singleData[0]?.XAxisFontSize,//
        yAxisFontSize: singleData[0]?.YAxisFontSize,//
        annotationFontSize: singleData[0]?.annotationFontSize,//
        maxValueOfAxis: singleData[0]?.maxValueOfAxis,//
        minValueOfAxis: singleData[0]?.minValueOfAxis,//
        parentWidgetGraph: singleData[0]?.parentReport,//
        isActionBtnReqGraph: singleData[0]?.isActionButtonReq,//
        //kpi
        kpiType: singleData[0]?.kpiType,//================
        kpiBorderWidth: singleData[0]?.kpiBorderWidth,//
        kpiBorderColor: singleData[0]?.kpiBorderColor,//
        kpiIconType: singleData[0]?.iconType,//
        kpiTabIconImage: singleData[0]?.iconImageName,//
        iconName: singleData[0]?.iconName,//
        kpiDefaultBgColor: singleData[0]?.widgetBackgroundColour,//
        kpiDefaultFontColor: singleData[0]?.widgetFontColour,//
        kpiDefaultHoverBg: singleData[0]?.widgetHoverBackground,//
        kpiIconColor: singleData[0]?.widgetIconColour,//
        kpiBoxClickOptions: singleData[0]?.onClickKPITypeOption,//======
        kpiTabOpenOnClick: singleData[0]?.onClickOfKPITabId,//
        kpiWidgetOpenOnClick: singleData[0]?.onClickOfKPIWidgetId,//
        kpiDashboardOpenOnClick: singleData[0]?.onClickOfKPIDashboardId,//
        kpiTabLinkName: singleData[0]?.linkTab,//
        kpiWidgetLinkName: singleData[0]?.linkWidget,//
        kpiLinkColor: singleData[0]?.kpiLinkColor,//
        kpiLinkFontColor: singleData[0]?.kpiLinkFontColor,//
        //map
        mapName: singleData[0]?.mapName,//
        parentWidgetMap: singleData[0]?.parentReport,//
        mapIncreasingIntensity: singleData[0]?.legendText,//
        //news
        noOfNewsVisible: singleData[0]?.newsVisible,//
        newsSpeed: singleData[0]?.newsSpeed,//
        newsInterval: singleData[0]?.newsTimeInterval,//
        //iframe
        urlForIframe: singleData[0]?.iframeURL,//
        lstOtherLink: singleData[0]?.lstOtherLink//
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

        isTableHeadingReq: singleData[0]?.tableHeadingRequired === 'yes' || singleData[0]?.tableHeadingRequired === 'Yes' ? 'Yes' : 'No',//
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
        isDisplayGraphPlugin: singleData[0]?.isDisplayPluginCombo,//
        isColorByPoint: singleData[0]?.isColorByPoint,//==========
        isShowLegendOnExport: singleData[0]?.showLegendOnExport,//
        isFullLabelReq: singleData[0]?.isFullLabelRequired,//
        isGraphScrollBarReq: singleData[0]?.isScrollbarRequired,//
        isShowLegend: singleData[0]?.showInLegend === 'true' ? 'Yes' : 'No',//
        isDataLabels: singleData[0]?.dataLabels === 'true' ? "Yes" : 'No',//
        isThree3D: singleData[0]?.is3d === 'true' ? 'Yes' : 'No',//
        isDirectDownloadBtnGraph: singleData[0]?.isDirectDownloadRequired,//
        isFirstClmGraphHeading: singleData[0]?.isFirstClmGraphHeading,//========
        isShowPrntHeadChildGraph: singleData[0]?.showParentDetailsinChild,//
        isHideParent: singleData[0]?.isHideParent,//
        isRowClickable: singleData[0]?.isRowClickable,//
        // KPI fields
        isWidgetShadowReq: singleData[0]?.isWidgetShadowRequired,//
        isDownloadDataFromKpi: singleData[0]?.downloadDataFromKPI,//
        // Map fields
        isChildBasedPrimaryKey: singleData[0]?.isChildBasedOnPK,//
        isHideParentMap: singleData[0]?.isHideParent,//
        // Iframe fields
        isSsoUrl: singleData[0]?.isSSOUrl,//
      });
    }
  }, [singleData]);

  const saveWidgetData = () => {
    const {
      widgetFor, widgetType, widgetNameDisplay, widgetNameInternal, widgetRefreshTime, widgetRefreshDelayTime, cachingStatus, limit, widgetHadingClr, widgetTopMargin,
      //table
      headingBgColor, headingFontColor, headingDisplayStyle, recordsPerPage, pagePerBlock, DataScrollHeight, parentWidget, columnNoToDisplay, leftClmNoToFixed, rightClmNoToFixed, linkedWidget, actionBtnReq, pdfTableFontSize, pdfTableHeadBarClr, pdfTableHeadTxtFontClr, groupClmNoComma, query, procedureName, recordsPerPageTreeCh, parameterOption, loadOption, paraComboBgColor, paraComboFontColor, paraLabelFontColor, jndiSavingData, stmtTimeOut, lastUpdatedQuery, FooterText, customMsgForNoData, treeChildQuery, treeChildProcedure, popUpDetails, webQuery, htmlText, queryLabel,
      // graph fields
      defaultPluginName, defaultGraphType, graphTypes, clmNameForLineGraph, colorsForBars, graphHeight, graphBottomMargin, graphBgStartColor, graphBgEndColor, graphFontColor, graphTypeBgColor, graphTypeFontColor, labelRotation, alphaGraph3D, betaGraph3D, xAxisLabel, yAxisLabel, xAxisFontSize,
      yAxisFontSize, annotationFontSize, maxValueOfAxis, parentWidgetGraph, isActionBtnReqGraph, minValueOfAxis,
      // KPI fields
      kpiType, kpiBorderWidth, kpiBorderColor, kpiIconType, kpiTabIconImage, kpiDefaultBgColor, kpiDefaultFontColor, kpiDefaultHoverBg, kpiIconColor, kpiBoxClickOptions, kpiTabOpenOnClick, kpiWidgetOpenOnClick, kpiDashboardOpenOnClick, kpiTabLinkName, kpiWidgetLinkName, kpiLinkColor, kpiLinkFontColor, iconName,
      // map fields
      mapName, parentWidgetMap, mapIncreasingIntensity,
      // newsTicker fields
      noOfNewsVisible, newsSpeed, newsInterval,
      // iframe
      urlForIframe, lstOtherLink } = values;

    const {
      widgetViewed, isWidgetNameVisible, selectedModeQuery, widgetPurpose, widgetHeadingAlign, isRecordLimitReq, isWidgetBorderReq,
      //table
      isTableHeadingReq, tableHeadingAlign, isFirstRowHeading, isDataTblReq, isIndexNumReq, isPaginationReq, isSearchReq, isHeadingFixed, isLastRowTotal, isCardViewMobile, isShowPrntHeadChild, isShowPrntParamsChild, printPdfIn, pdfTheme, isPdfHeadReqAllPgs, showFilterDtlsInPdf,
      isReportByJsPdfPlug, isReportPrintDtReq, isGlobalHeaderReq, isTableBorderReq, isPositiveWidget, isDirectDownloadBtn, isPopupBasedReq, isTreeChildReq, treeChildDataBy, dataDisplay, isDataTblReqTree,
      isPaginationReqTree, isSearchReqTree,
      // Graph fields
      isDisplayGraphPlugin, isColorByPoint, isShowLegendOnExport, isFullLabelReq, isGraphScrollBarReq, isShowLegend,
      isDataLabels, isThree3D, isDirectDownloadBtnGraph, isFirstClmGraphHeading, isShowPrntHeadChildGraph, isHideParent, isRowClickable,
      // KPI fields
      isWidgetShadowReq, isDownloadDataFromKpi,
      // Map fields
      isChildBasedPrimaryKey, isHideParentMap,
      // Iframe fields
      isSsoUrl
    } = radioValues;

    const val = {
      dashboardFor: widgetFor,
      masterName: "DashboardWidgetMst",
      keyName: widgetNameDisplay,
      jndiIdForGettingData: jndiSavingData,
      statementTimeout: stmtTimeOut,
      entryUserId: 101,
      // lastModifiedUserId: 2,
      jsonData: {
        dashboardFor: widgetFor,
        widgetType: widgetType,
        rptDisplayName: widgetNameDisplay,
        rptName: widgetNameInternal,
        widgetRefreshTime: widgetRefreshTime,
        widgetRefreshDelayTime: widgetRefreshDelayTime,
        cachingStatusForWidget: cachingStatus,
        limitHTMLFromDb: limit,
        widgetHeadingColor: widgetHadingClr,
        widgetTopMargin: widgetTopMargin,
        //table
        headingBackgroundColour: headingBgColor,
        headingFontColour: headingFontColor,
        headingDisplayStyle: headingDisplayStyle,
        recordPerPage: recordsPerPage,
        pagePerBlock: pagePerBlock,
        scrollYValue: DataScrollHeight,
        parentReport: parentWidget,
        parentDisplaycolumnno: columnNoToDisplay,
        leftColumnsToBeFixed: leftClmNoToFixed,
        rightColumnsToBeFixed: rightClmNoToFixed,
        linkWidget: linkedWidget?.length > 0 ? linkedWidget : kpiWidgetLinkName?.length > 0 ? kpiWidgetLinkName : [],
        isActionButtonReq: actionBtnReq,
        pdfTableFontSize: pdfTableFontSize,
        pdfTableheaderBarColor: pdfTableHeadBarClr,
        pdfTableheadingFontColour: pdfTableHeadTxtFontClr,
        groupColumnNo: groupClmNoComma,
        query: selectedModeQuery === 'Query' ? query : selectedModeQuery === 'WebSevice' ? webQuery : [],
        queryLabel: queryLabel,//
        htmlText: htmlText,//
        procedureMode: procedureName,
        treeChildQuery: treeChildQuery,
        treeChildProcedure: treeChildProcedure,
        drillDownJsonString: popUpDetails,
        treeChildrecordPerPage: recordsPerPageTreeCh,
        parameterOptions: parameterOption,
        widgetLoadOption: loadOption,
        widgetParameterComboBGColor: paraComboBgColor,
        widgetParameterComboFontColor: paraComboFontColor,
        widgetParameterLabelFontColor: paraLabelFontColor,
        JNDIid: jndiSavingData,
        statementTimeOut: stmtTimeOut,
        lastUpdatedQuery: lastUpdatedQuery,
        footerText: FooterText,
        customMessage: customMsgForNoData,
        //graph
        graphPluginName: defaultPluginName,
        defaultgraphType: defaultGraphType,
        graphChangeOptions: graphTypes,
        lineGraphColumnName: clmNameForLineGraph,
        colorForBars: colorsForBars,
        graphHeight: graphHeight,
        graphBottomMargin: graphBottomMargin,
        graphStartColor: graphBgStartColor,
        graphEndColor: graphBgEndColor,
        graphFontColor: graphFontColor,
        graphTypeBGColor: graphTypeBgColor,
        graphTypeFontColor: graphTypeFontColor,
        rotation: labelRotation,
        alpha: alphaGraph3D,
        beta: betaGraph3D,
        xAxisLabel: xAxisLabel,
        yAxisLabel: yAxisLabel,
        XAxisFontSize: xAxisFontSize,
        YAxisFontSize: yAxisFontSize,
        annotationFontSize: annotationFontSize,
        maxValueOfAxis: maxValueOfAxis,
        minValueOfAxis: minValueOfAxis,
        parentReportGraph: parentWidgetGraph,
        isActionButtonReqGraph: isActionBtnReqGraph,
        //kpi
        kpiType: kpiType,
        kpiBorderWidth: kpiBorderWidth,
        kpiBorderColor: kpiBorderColor,
        iconType: kpiIconType,
        iconImageName: kpiTabIconImage,
        widgetBackgroundColour: kpiDefaultBgColor,
        widgetFontColour: kpiDefaultFontColor,
        widgetHoverBackground: kpiDefaultHoverBg,
        widgetIconColour: kpiIconColor,
        onClickKPITypeOption: kpiBoxClickOptions,
        onClickOfKPITabId: kpiTabOpenOnClick,
        onClickOfKPIWidgetId: kpiWidgetOpenOnClick,
        onClickOfKPIDashboardId: kpiDashboardOpenOnClick,
        linkTab: kpiTabLinkName,
        // linkWidget: kpiWidgetLinkName,
        kpiLinkColor: kpiLinkColor,
        kpiLinkFontColor: kpiLinkFontColor,
        iconName: iconName,//
        //map
        mapName: mapName,
        parentReportMap: parentWidgetMap,
        legendText: mapIncreasingIntensity,
        //news
        newsVisible: noOfNewsVisible,
        newsSpeed: newsSpeed,
        newsTimeInterval: newsInterval,
        //iframe
        iframeURL: urlForIframe,
        lstOtherLink: lstOtherLink,//

        //RADIOVALUES
        reportViewed: widgetViewed,
        isWidgetNameVisible: isWidgetNameVisible,
        widgetShowOrDownload: widgetPurpose,
        widgetHeadingAlignment: widgetHeadingAlign,
        isRecordsLimitedLineRequired: isRecordLimitReq,
        isWidgetBorderRequired: isWidgetBorderReq,
        modeOfQuery: selectedModeQuery,
        //table
        tableHeadingRequired: isTableHeadingReq,
        tableHeadingAlignment: tableHeadingAlign,
        isFirstRowWidgetHeading: isFirstRowHeading,
        isDataTableRequired: isDataTblReq,
        isIndexNumberRequired: isIndexNumReq,
        isPaginationReq: isPaginationReq,
        isDataSearchReq: isSearchReq,
        isHeadingFixed: isHeadingFixed,
        isLastRowTotal: isLastRowTotal,
        isCardViewMobile: isCardViewMobile,
        showParentDetailsinChild: isShowPrntHeadChild,
        showParentParameterDetailsinChild: isShowPrntParamsChild,
        printPDFIn: printPdfIn,
        pdfTheme: pdfTheme,
        isPdfHeaderReqInAllPages: isPdfHeadReqAllPgs,
        showFilterDetailsInPDF: showFilterDtlsInPdf,
        isReportByjsPDFPlugin: isReportByJsPdfPlug,
        isReportPrintDateRequired: isReportPrintDtReq,
        isGlobalHeaderRequired: isGlobalHeaderReq,
        isTableBorderRequired: isTableBorderReq,
        isPositiveWidget: isPositiveWidget,
        isDirectDownloadRequired: isDirectDownloadBtn,
        isPopupBasedOnDataClickRequired: isPopupBasedReq,
        isTreeChildRequired: isTreeChildReq,
        treeChildDataBy: treeChildDataBy,
        treeChildDataDisplay: dataDisplay,
        treeChildIsDataTableRequired: isDataTblReqTree,
        treeChildIsPaginationRequired: isPaginationReqTree,
        treeChildIsSearchRequired: isSearchReqTree,
        //graph
        isDisplayPluginCombo: isDisplayGraphPlugin,
        isColorByPoint: isColorByPoint,
        showLegendOnExport: isShowLegendOnExport,
        isFullLabelRequired: isFullLabelReq,
        isScrollbarRequired: isGraphScrollBarReq,
        showInLegend: isShowLegend,
        dataLabels: isDataLabels,
        is3d: isThree3D,
        isDirectDownloadRequiredGraph: isDirectDownloadBtnGraph,
        isFirstClmGraphHeading: isFirstClmGraphHeading,
        showParentDetailsinChildGraph: isShowPrntHeadChildGraph,
        isHideParent: isHideParent,
        isRowClickable: isRowClickable,
        //kpi
        isWidgetShadowRequired: isWidgetShadowReq,
        downloadDataFromKPI: isDownloadDataFromKpi,
        //map
        isChildBasedOnPK: isChildBasedPrimaryKey,
        isHideParentMap: isHideParentMap,
        //iframe
        isSSOUrl: isSsoUrl
      }
    };
    fetchPostData("http://10.226.29.211:8025/hisutils/createWidget", val).then((data) => {
      if (data) {
        ToastAlert("Data Saved Successfully", "success");
        getAllWidgetData(values?.widgetFor)
        reset();
      } else {
        ToastAlert("Internal Error!", "error");
      }
    });
  };

  const updateWidgetData = () => {
    const {
      id, widgetFor, widgetType, widgetNameDisplay, widgetNameInternal, widgetRefreshTime, widgetRefreshDelayTime, cachingStatus, limit, widgetHadingClr, widgetTopMargin,
      //table
      headingBgColor, headingFontColor, headingDisplayStyle, recordsPerPage, pagePerBlock, DataScrollHeight, parentWidget, columnNoToDisplay, leftClmNoToFixed, rightClmNoToFixed, linkedWidget, actionBtnReq, pdfTableFontSize, pdfTableHeadBarClr, pdfTableHeadTxtFontClr, groupClmNoComma, query, procedureName, recordsPerPageTreeCh, parameterOption, loadOption, paraComboBgColor, paraComboFontColor, paraLabelFontColor, jndiSavingData, stmtTimeOut, lastUpdatedQuery, FooterText, customMsgForNoData, treeChildQuery, treeChildProcedure, popUpDetails, webQuery, htmlText, queryLabel,
      // graph fields
      defaultPluginName, defaultGraphType, graphTypes, clmNameForLineGraph, colorsForBars, graphHeight, graphBottomMargin, graphBgStartColor, graphBgEndColor, graphFontColor, graphTypeBgColor, graphTypeFontColor, labelRotation, alphaGraph3D, betaGraph3D, xAxisLabel, yAxisLabel, xAxisFontSize,
      yAxisFontSize, annotationFontSize, maxValueOfAxis, parentWidgetGraph, isActionBtnReqGraph, minValueOfAxis,
      // KPI fields
      kpiType, kpiBorderWidth, kpiBorderColor, kpiIconType, kpiTabIconImage, kpiDefaultBgColor, kpiDefaultFontColor, kpiDefaultHoverBg, kpiIconColor, kpiBoxClickOptions, kpiTabOpenOnClick, kpiWidgetOpenOnClick, kpiDashboardOpenOnClick, kpiTabLinkName, kpiWidgetLinkName, kpiLinkColor, kpiLinkFontColor, iconName,
      // map fields
      mapName, parentWidgetMap, mapIncreasingIntensity,
      // newsTicker fields
      noOfNewsVisible, newsSpeed, newsInterval,
      // iframe
      urlForIframe, lstOtherLink } = values;

    const {
      widgetViewed, isWidgetNameVisible, selectedModeQuery, widgetPurpose, widgetHeadingAlign, isRecordLimitReq, isWidgetBorderReq,
      //table
      isTableHeadingReq, tableHeadingAlign, isFirstRowHeading, isDataTblReq, isIndexNumReq, isPaginationReq, isSearchReq, isHeadingFixed, isLastRowTotal, isCardViewMobile, isShowPrntHeadChild, isShowPrntParamsChild, printPdfIn, pdfTheme, isPdfHeadReqAllPgs, showFilterDtlsInPdf,
      isReportByJsPdfPlug, isReportPrintDtReq, isGlobalHeaderReq, isTableBorderReq, isPositiveWidget, isDirectDownloadBtn, isPopupBasedReq, isTreeChildReq, treeChildDataBy, dataDisplay, isDataTblReqTree,
      isPaginationReqTree, isSearchReqTree,
      // Graph fields
      isDisplayGraphPlugin, isColorByPoint, isShowLegendOnExport, isFullLabelReq, isGraphScrollBarReq, isShowLegend,
      isDataLabels, isThree3D, isDirectDownloadBtnGraph, isFirstClmGraphHeading, isShowPrntHeadChildGraph, isHideParent, isRowClickable,
      // KPI fields
      isWidgetShadowReq, isDownloadDataFromKpi,
      // Map fields
      isChildBasedPrimaryKey, isHideParentMap,
      // Iframe fields
      isSsoUrl
    } = radioValues;

    const val = {
      dashboardFor: widgetFor,
      masterName: "DashboardWidgetMst",
      keyName: widgetNameDisplay,
      jndiIdForGettingData: jndiSavingData,
      statementTimeout: stmtTimeOut,
      entryUserId: 101,
      // lastModifiedUserId: 2,
      id: id,
      jsonData: {
        dashboardFor: widgetFor,
        widgetType: widgetType,
        rptDisplayName: widgetNameDisplay,
        rptName: widgetNameInternal,
        rptId: id,
        widgetRefreshTime: widgetRefreshTime,
        widgetRefreshDelayTime: widgetRefreshDelayTime,
        cachingStatusForWidget: cachingStatus,
        limitHTMLFromDb: limit,
        widgetHeadingColor: widgetHadingClr,
        widgetTopMargin: widgetTopMargin,
        //table
        headingBackgroundColour: headingBgColor,
        headingFontColour: headingFontColor,
        headingDisplayStyle: headingDisplayStyle,
        recordPerPage: recordsPerPage,
        pagePerBlock: pagePerBlock,
        scrollYValue: DataScrollHeight,
        parentReport: parentWidget,
        parentDisplaycolumnno: columnNoToDisplay,
        leftColumnsToBeFixed: leftClmNoToFixed,
        rightColumnsToBeFixed: rightClmNoToFixed,
        linkWidget: linkedWidget?.length > 0 ? linkedWidget : kpiWidgetLinkName?.length > 0 ? kpiWidgetLinkName : [],
        isActionButtonReq: actionBtnReq,
        pdfTableFontSize: pdfTableFontSize,
        pdfTableheaderBarColor: pdfTableHeadBarClr,
        pdfTableheadingFontColour: pdfTableHeadTxtFontClr,
        groupColumnNo: groupClmNoComma,
        // query: query,
        query: selectedModeQuery === 'Query' ? query : selectedModeQuery === 'WebSevice' ? webQuery : [],
        queryLabel: queryLabel,//
        htmlText: htmlText,//
        procedureMode: procedureName,
        treeChildQuery: treeChildQuery,
        treeChildProcedure: treeChildProcedure,
        drillDownJsonString: popUpDetails,
        treeChildrecordPerPage: recordsPerPageTreeCh,
        parameterOptions: parameterOption,
        widgetLoadOption: loadOption,
        widgetParameterComboBGColor: paraComboBgColor,
        widgetParameterComboFontColor: paraComboFontColor,
        widgetParameterLabelFontColor: paraLabelFontColor,
        JNDIid: jndiSavingData,
        statementTimeOut: stmtTimeOut,
        lastUpdatedQuery: lastUpdatedQuery,
        footerText: FooterText,
        customMessage: customMsgForNoData,
        //graph
        graphPluginName: defaultPluginName,
        defaultgraphType: defaultGraphType,
        graphChangeOptions: graphTypes,
        lineGraphColumnName: clmNameForLineGraph,
        colorForBars: colorsForBars,
        graphHeight: graphHeight,
        graphBottomMargin: graphBottomMargin,
        graphStartColor: graphBgStartColor,
        graphEndColor: graphBgEndColor,
        graphFontColor: graphFontColor,
        graphTypeBGColor: graphTypeBgColor,
        graphTypeFontColor: graphTypeFontColor,
        rotation: labelRotation,
        alpha: alphaGraph3D,
        beta: betaGraph3D,
        xAxisLabel: xAxisLabel,
        yAxisLabel: yAxisLabel,
        XAxisFontSize: xAxisFontSize,
        YAxisFontSize: yAxisFontSize,
        annotationFontSize: annotationFontSize,
        maxValueOfAxis: maxValueOfAxis,
        minValueOfAxis: minValueOfAxis,
        parentReportGraph: parentWidgetGraph,
        isActionButtonReqGraph: isActionBtnReqGraph,
        //kpi
        kpiType: kpiType,
        kpiBorderWidth: kpiBorderWidth,
        kpiBorderColor: kpiBorderColor,
        iconType: kpiIconType,
        iconImageName: kpiTabIconImage,
        widgetBackgroundColour: kpiDefaultBgColor,
        widgetFontColour: kpiDefaultFontColor,
        widgetHoverBackground: kpiDefaultHoverBg,
        widgetIconColour: kpiIconColor,
        onClickKPITypeOption: kpiBoxClickOptions,
        onClickOfKPITabId: kpiTabOpenOnClick,
        onClickOfKPIWidgetId: kpiWidgetOpenOnClick,
        onClickOfKPIDashboardId: kpiDashboardOpenOnClick,
        linkTab: kpiTabLinkName,
        // linkWidget: kpiWidgetLinkName,
        kpiLinkColor: kpiLinkColor,
        kpiLinkFontColor: kpiLinkFontColor,
        iconName: iconName,//
        //map
        mapName: mapName,
        parentReportMap: parentWidgetMap,
        legendText: mapIncreasingIntensity,
        //news
        newsVisible: noOfNewsVisible,
        newsSpeed: newsSpeed,
        newsTimeInterval: newsInterval,
        //iframe
        iframeURL: urlForIframe,
        lstOtherLink: lstOtherLink,  //

        //RADIOVALUES
        reportViewed: widgetViewed,
        isWidgetNameVisible: isWidgetNameVisible,
        widgetShowOrDownload: widgetPurpose,
        widgetHeadingAlignment: widgetHeadingAlign,
        isRecordsLimitedLineRequired: isRecordLimitReq,
        isWidgetBorderRequired: isWidgetBorderReq,
        modeOfQuery: selectedModeQuery,
        //table
        tableHeadingRequired: isTableHeadingReq,
        tableHeadingAlignment: tableHeadingAlign,
        isFirstRowWidgetHeading: isFirstRowHeading,
        isDataTableRequired: isDataTblReq,
        isIndexNumberRequired: isIndexNumReq,
        isPaginationReq: isPaginationReq,
        isDataSearchReq: isSearchReq,
        isHeadingFixed: isHeadingFixed,
        isLastRowTotal: isLastRowTotal,
        isCardViewMobile: isCardViewMobile,
        showParentDetailsinChild: isShowPrntHeadChild,
        showParentParameterDetailsinChild: isShowPrntParamsChild,
        printPDFIn: printPdfIn,
        pdfTheme: pdfTheme,
        isPdfHeaderReqInAllPages: isPdfHeadReqAllPgs,
        showFilterDetailsInPDF: showFilterDtlsInPdf,
        isReportByjsPDFPlugin: isReportByJsPdfPlug,
        isReportPrintDateRequired: isReportPrintDtReq,
        isGlobalHeaderRequired: isGlobalHeaderReq,
        isTableBorderRequired: isTableBorderReq,
        isPositiveWidget: isPositiveWidget,
        isDirectDownloadRequired: isDirectDownloadBtn,
        isPopupBasedOnDataClickRequired: isPopupBasedReq,
        isTreeChildRequired: isTreeChildReq,
        treeChildDataBy: treeChildDataBy,
        treeChildDataDisplay: dataDisplay,
        treeChildIsDataTableRequired: isDataTblReqTree,
        treeChildIsPaginationRequired: isPaginationReqTree,
        treeChildIsSearchRequired: isSearchReqTree,
        //graph
        isDisplayPluginCombo: isDisplayGraphPlugin,
        isColorByPoint: isColorByPoint,
        showLegendOnExport: isShowLegendOnExport,
        isFullLabelRequired: isFullLabelReq,
        isScrollbarRequired: isGraphScrollBarReq,
        showInLegend: isShowLegend,
        dataLabels: isDataLabels,
        is3d: isThree3D,
        isDirectDownloadRequiredGraph: isDirectDownloadBtnGraph,
        isFirstClmGraphHeading: isFirstClmGraphHeading,
        showParentDetailsinChildGraph: isShowPrntHeadChildGraph,
        isHideParent: isHideParent,
        isRowClickable: isRowClickable,
        //kpi
        isWidgetShadowRequired: isWidgetShadowReq,
        downloadDataFromKPI: isDownloadDataFromKpi,
        //map
        isChildBasedOnPK: isChildBasedPrimaryKey,
        isHideParentMap: isHideParentMap,
        //iframe
        isSSOUrl: isSsoUrl
      }
    };
    fetchUpdateData("http://10.226.29.211:8025/hisutils/modifyWidget", val).then((data) => {
      if (data) {
        ToastAlert("Data Updated Successfully", "success");
        getAllWidgetData(values?.widgetFor)
        reset();
      } else {
        ToastAlert("Internal Error!", "error");
      }
    });
  };

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
      selector: row => parseInt(row?.rptId),
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

  console.log(values, 'values')
  // console.log(radioValues, 'rdovalues')
  console.log(singleData)
  // console.log(allWidgetData?.filter(dt=>dt?.rptId == 11600023))

  return (
    <>
      <NavbarHeader />
      <div className='main-master-page'>
        {values?.widgetFor &&
          <div className='row w-100 m-0'>
            <div className='col-sm-6 p-0 global-button-group'>
              <GlobalButtonGroup isSave={true} isOpen={true} isReset={true} isParams={true} isWeb={true} onSave={actionMode === 'edit' ? updateWidgetData : saveWidgetData} onOpen={onOpenDataTable} onReset={reset} onParams={onOpenParams} onWeb={onOpenWebService} />
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
                <AboutWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} dashboardForDt={dashboardForDt} setValues={setValues} />
              }

              {tabName?.value === 2 &&
                <QueryDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} singleData={singleData} />
              }

              {tabName?.value === 3 &&
                <>
                  {radioValues?.widgetViewed === "Tabular" &&
                    <TableDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} parentWidget={widgetDrpData} setValues={setValues} />
                  }

                  {radioValues?.widgetViewed === "Graph" &&
                    <GraphWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} parentWidget={widgetDrpData} />
                  }

                  {radioValues?.widgetViewed === "KPI" &&
                    <KpiWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} />
                  }

                  {radioValues?.widgetViewed === "Criteria_Map" &&
                    <MapWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} parentWidget={widgetDrpData} />
                  }

                  {radioValues?.widgetViewed === "News_Ticker" &&
                    <NewsTickWidget handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} />
                  }
                </>

              }

              {(tabName?.value === 4 && (radioValues?.widgetViewed === "Criteria_Map" || radioValues?.widgetViewed === "Graph" || radioValues?.widgetViewed === "Tabular")) &&
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
