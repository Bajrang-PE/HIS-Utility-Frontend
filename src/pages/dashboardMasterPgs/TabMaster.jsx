import React, { useContext, useEffect, useState } from 'react'
import GlobalButtonGroup from '../../components/commons/GlobalButtonGroup'
import NavbarHeader from '../../components/headers/NavbarHeader'
import { HISContext } from '../../contextApi/HISContext';
import InputSelect from '../../components/commons/InputSelect';
import InputField from '../../components/commons/InputField';
import TabNav from '../../components/commons/TabNav';
import AboutTab from '../../components/dashboardMasters/tabMaster/AboutTab';
import TabDetails from '../../components/dashboardMasters/tabMaster/TabDetails';
import WidgetMapping from '../../components/dashboardMasters/tabMaster/WidgetMapping';
import ParamsDetail from '../../components/dashboardMasters/tabMaster/ParamsDetail';
import JndiDetails from '../../components/dashboardMasters/widgetMaster/JndiDetails';
import FooterDetails from '../../components/dashboardMasters/tabMaster/FooterDetails';
import HelpDocs from '../../components/dashboardMasters/tabMaster/HelpDocs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import GlobalDataTable from '../../components/commons/GlobalDataTable';
import { fetchPostData } from '../../utils/ApiHooks';
import { ToastAlert } from '../../utils/commonFunction';

const TabMaster = () => {

  const { dashboardForDt, getDashboardForDrpData, widgetDrpData, getAllWidgetData, getAllParameterData, parameterDrpData, getAllTabsData, allTabsData, setShowDataTable, setSelectedOption, selectedOption, actionMode, setActionMode, tabDrpData, showConfirmSave, setShowConfirmSave, confirmSave, setConfirmSave } = useContext(HISContext);
  const [tabIndex, setTabIndex] = useState(1);
  const [tabName, setTabName] = useState({ value: 1, label: "About Tab" });
  const [showTabsTable, setShowTabsTable] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [singleData, setSingleData] = useState([]);
  const [filterData, setFilterData] = useState(allTabsData)
  const [rows, setRows] = useState([{ rptId: "", displayOrder: "", widgetWidth: "", widgetHeight: "0", widgetColor: "", widgetDisplay: "", sectionId: "1", animation: "" }]);

  const [values, setValues] = useState({
    "tabFor": "", "tabNameDisplay": "", "tabNameInternal": "", "parentTab": "", "ellipseInDisplay": "",
    "tabIconImage": "", "iconName": "", "id": '',
    //tab details
    "tabNameFontWeight": "", "tabDetailBgColor": "", "tabTopPadding": "", "buttonMarginHeading": "",
    "tabNameFontSize": "", "tabNameTxtDecorat": "", "tabDetailTitleColor": "",
    //parameter detail
    "parameterOption": "1", "loadOption": "ONWINDOWLOAD", "paraComboBgColor": "", "paraComboFontColor": "", "paraLabelFontColor": "", "paraRemark": "", "selectedPara": "",
    //jndi
    "jndiSavingData": "", "stmtTimeOut": "",
    //footer
    "footerAlignment": "", "footerQuery": "", "footerText": "", "webRefName": "", "webServiceName": "",
    //helpDocs
    "helpDocs": [],
    //widget
    "widgetMappingDetail": []
  })

  const [radioValues, setRadioValues] = useState({
    "isTabUsedForDrill": "No", "isTabNameInReportReq": "No", "isCssTabIconReq": "No",
    //tab details
    "showTabNameInDetail": "Yes", "widgetMaxMin": "",
    //footer detail
    "isLegendCollapes": "Yes", "isMarqueeReq": "No", "isLegendBorderReq": "Yes",
  })

  const [errors, setErrors] = useState({ tabForErr: "", tabNameDisplayErr: "", tabNameInternalErr: "", tabNameFontWeightErr: "", tabNameFontSizeErr: "", tabNameTxtDecoratErr: "", showTabNameInDetailErr: "", displayOrderErr: "", widgetWidthErr: "", widgetHeightErr: "" });

  useEffect(() => {
    if (dashboardForDt?.length === 0) { getDashboardForDrpData(); }
  }, [])

  useEffect(() => {
    if (values?.tabFor) {
      getAllWidgetData(values?.tabFor);
      getAllParameterData(values?.tabFor)
      getAllTabsData(values?.tabFor)
    }
  }, [values?.tabFor])

  //parameter search
  useEffect(() => {
    if (!searchInput) {
      setFilterData(allTabsData);
    } else {
      const lowercasedText = searchInput.toLowerCase();
      const newFilteredData = allTabsData.filter(row => {
        const paramId = row?.id?.toString() || "";
        const paramName = row?.jsonData?.dashboardName?.toLowerCase() || "";
        const paramDisplayName = row?.jsonData?.dashboardActualName?.toLowerCase() || "";

        return paramId?.includes(lowercasedText) || paramName.includes(lowercasedText) || paramDisplayName.includes(lowercasedText);
      });
      setFilterData(newFilteredData);
      console.log(newFilteredData, 'newFilteredData')
    }
  }, [searchInput, allTabsData]);

  const handleRadioChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRadioValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    const error = name + 'Err'
    if (name) {
      setValues({ ...values, [name]: value })
    }
    if (error && name) {
      setErrors({ ...errors, [error]: '' })
    }
  }

  const [tabNavMenus, setTabNavMenus] = useState([
    { value: 1, label: "About Tab" },
    { value: 2, label: "Configuration" },
    { value: 3, label: "Widget Mapping" },
    { value: 4, label: "Parameter Detail" },
    { value: 5, label: "JNDI Details" },
    { value: 6, label: "Footer Details" },
    { value: 7, label: "Help Docs" },

  ]);

  const saveMenuTabsData = () => {
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
    setShowDataTable(true)
    setShowTabsTable(true)
  }

  const onTableClose = () => {
    setShowTabsTable(false);
    setSearchInput('');
    setSelectedOption([]);
  }

  const handleUpdateData = () => {
    if (selectedOption?.length > 0) {
      const selectedRow = allTabsData?.filter(dt => dt?.id === selectedOption[0]?.id)
      setSingleData(selectedRow);
      setActionMode('edit');
      setShowDataTable(false);
      setShowTabsTable(false);
      setSelectedOption([]);
    } else {
      ToastAlert('Please select a record', 'warning');
    }
  }

  useEffect(() => {
    if (singleData?.length > 0) {
      const jsonData = singleData[0]?.jsonData || {};
      setValues({
        ...values,
        id: singleData[0]?.id,//
        tabFor: singleData[0]?.dashboardFor,//
        tabNameDisplay: jsonData?.dashboardName,///
        tabNameInternal: jsonData?.dashboardActualName,//
        parentTab: jsonData?.parentTabId,//
        ellipseInDisplay: jsonData?.ellipseAfterNoOfCharacterInTabDisplayName,//
        tabIconImage: jsonData?.iconImageName,//
        iconName: jsonData?.iconName,//
        // tab details:
        tabNameFontWeight: jsonData?.tabnameFontWeight,//
        tabDetailBgColor: jsonData?.tabBackgroundColor,
        tabTopPadding: jsonData?.tabTopPadding,//
        buttonMarginHeading: jsonData?.marginBottom,//
        tabNameFontSize: jsonData?.tabnameFontSize,//
        tabNameTxtDecorat: jsonData?.tabnameDecoration,//
        tabDetailTitleColor: jsonData?.tabTitleFontColor,//
        // parameter detail
        parameterOption: jsonData?.parameterOptions,//
        loadOption: jsonData?.tabLoadOption,//
        paraComboBgColor: jsonData?.tabParameterComboBGColor,//
        paraComboFontColor: jsonData?.tabParameterComboFontColor,//
        paraLabelFontColor: jsonData?.tabParameterLabelFontColor,//
        paraRemark: jsonData?.parameterRemarks,//
        selectedPara: jsonData?.allParameters,//
        // jndi
        jndiSavingData: jsonData?.JNDIid,//
        stmtTimeOut: jsonData?.statementTimeOut,//
        // footer
        footerAlignment: jsonData?.footerAlign,//
        footerQuery: jsonData?.lastUpdatedQuery,//
        footerText: jsonData?.footerText,//
        webRefName: jsonData?.footerserviceReferenceNo,//
        webServiceName: jsonData?.footerwebserviceUrl,//
        // helpDocs
        helpDocs: JSON.parse(jsonData?.docJsonString) || [],
        // widget
        widgetMappingDetail: jsonData?.lstDashboardWidgetMapping || [],
      });

      setRadioValues({
        ...radioValues,
        isTabUsedForDrill: jsonData?.isTabUsedForDrillDown,//
        isTabNameInReportReq: jsonData?.tabNameInReportRequired,//
        isCssTabIconReq: jsonData?.isCSSTabIconRequired,//

        showTabNameInDetail: jsonData?.isShowTabNameInDetailTitle,//
        widgetMaxMin: jsonData?.widgetMaxMinSize,//

        isLegendCollapes: jsonData?.isLegendCollapes,//
        isMarqueeReq: jsonData?.isMarqueeRequired,//
        isLegendBorderReq: jsonData?.isLegendBorderRequired,//

      })
    }
  }, [singleData]);


  const saveTabData = () => {
    const {
      tabFor, tabNameDisplay, tabNameInternal, parentTab, ellipseInDisplay, tabIconImage, iconName,

      tabNameFontWeight, tabDetailBgColor, tabTopPadding, buttonMarginHeading, tabNameFontSize, tabNameTxtDecorat, tabDetailTitleColor,

      parameterOption, loadOption, paraComboBgColor, paraComboFontColor, paraLabelFontColor, paraRemark, selectedPara,

      footerAlignment, footerQuery, footerText, webRefName, webServiceName,
      // helpDocs
      helpDocs,
      // widget
      widgetMappingDetail,
      jndiSavingData, stmtTimeOut
    } = values;

    const {
      isTabUsedForDrill, isTabNameInReportReq, isCssTabIconReq,
      showTabNameInDetail, widgetMaxMin, isLegendCollapes,
      isMarqueeReq, isLegendBorderReq, } = radioValues;

    const val = {
      dashboardFor: tabFor,
      masterName: "DashboardMst",
      entryUserId: 101,
      jndiIdForGettingData: jndiSavingData,
      statementTimeout: stmtTimeOut,
      keyName: tabNameDisplay,
      jsonData: {
        //about
        dashboardName: tabNameDisplay, dashboardActualName: tabNameInternal, parentTabId: parentTab, ellipseAfterNoOfCharacterInTabDisplayName: ellipseInDisplay, iconImageName: tabIconImage, iconName: iconName, isTabUsedForDrillDown: isTabUsedForDrill, tabNameInReportRequired: isTabNameInReportReq, isCSSTabIconRequired: isCssTabIconReq,
        //tab
        tabnameFontWeight: tabNameFontWeight, tabBackgroundColor: tabDetailBgColor, tabTopPadding: tabTopPadding, marginBottom: buttonMarginHeading, tabnameFontSize: tabNameFontSize, tabnameDecoration: tabNameTxtDecorat, tabTitleFontColor: tabDetailTitleColor,
        //params
        parameterOptions: parameterOption, tabLoadOption: loadOption, tabParameterComboBGColor: paraComboBgColor, tabParameterComboFontColor: paraComboFontColor, tabParameterLabelFontColor: paraLabelFontColor, parameterRemarks: paraRemark, allParameters: selectedPara,
        //jndi
        statementTimeOut: stmtTimeOut, JNDIid: jndiSavingData,
        //footer and list
        footerAlign: footerAlignment, lastUpdatedQuery: footerQuery, footerText: footerText, footerserviceReferenceNo: webRefName, footerwebserviceUrl: webServiceName, docJsonString: JSON.stringify(helpDocs),
        lstDashboardWidgetMapping: widgetMappingDetail,

        //radios
        isShowTabNameInDetailTitle: showTabNameInDetail,
        widgetMaxMinSize: widgetMaxMin,
        isLegendCollapes: isLegendCollapes,
        isMarqueeRequired: isMarqueeReq,
        isLegendBorderRequired: isLegendBorderReq,

      }
    };

    fetchPostData("/hisutils/Tabsave", val).then((data) => {
      if (data) {
        ToastAlert("Data Saved Successfully", "success");
        getAllTabsData(values?.tabFor)
        setActionMode('home');
        reset();
      } else {
        ToastAlert("Internal Error!", "error");
      }
    });
  };

  const updateTabData = () => {
    const {
      tabFor, tabNameDisplay, tabNameInternal, parentTab, ellipseInDisplay, tabIconImage, iconName, id,

      tabNameFontWeight, tabDetailBgColor, tabTopPadding, buttonMarginHeading, tabNameFontSize, tabNameTxtDecorat, tabDetailTitleColor,

      parameterOption, loadOption, paraComboBgColor, paraComboFontColor, paraLabelFontColor, paraRemark, selectedPara,

      footerAlignment, footerQuery, footerText, webRefName, webServiceName,
      // helpDocs
      helpDocs,
      // widget
      widgetMappingDetail,
      jndiSavingData, stmtTimeOut
    } = values;

    const {
      isTabUsedForDrill, isTabNameInReportReq, isCssTabIconReq,
      showTabNameInDetail, widgetMaxMin, isLegendCollapes,
      isMarqueeReq, isLegendBorderReq, } = radioValues;

    const val = {
      id: id,
      dashboardFor: tabFor,
      masterName: "DashboardMst",
      entryUserId: 101,
      jndiIdForGettingData: jndiSavingData,
      statementTimeout: stmtTimeOut,
      keyName: tabNameDisplay,
      jsonData: {
        //about
        dashboardName: tabNameDisplay, dashboardActualName: tabNameInternal, parentTabId: parentTab, ellipseAfterNoOfCharacterInTabDisplayName: ellipseInDisplay, iconImageName: tabIconImage, iconName: iconName, isTabUsedForDrillDown: isTabUsedForDrill, tabNameInReportRequired: isTabNameInReportReq, isCSSTabIconRequired: isCssTabIconReq,
        //tab
        tabnameFontWeight: tabNameFontWeight, tabBackgroundColor: tabDetailBgColor, tabTopPadding: tabTopPadding, marginBottom: buttonMarginHeading, tabnameFontSize: tabNameFontSize, tabnameDecoration: tabNameTxtDecorat, tabTitleFontColor: tabDetailTitleColor,
        //params
        parameterOptions: parameterOption, tabLoadOption: loadOption, tabParameterComboBGColor: paraComboBgColor, tabParameterComboFontColor: paraComboFontColor, tabParameterLabelFontColor: paraLabelFontColor, parameterRemarks: paraRemark, allParameters: selectedPara,
        //jndi
        statementTimeOut: stmtTimeOut, JNDIid: jndiSavingData,
        //footer and list
        footerAlign: footerAlignment, lastUpdatedQuery: footerQuery, footerText: footerText, footerserviceReferenceNo: webRefName, footerwebserviceUrl: webServiceName, docJsonString: JSON.stringify(helpDocs),
        lstDashboardWidgetMapping: widgetMappingDetail,

        //radios
        isShowTabNameInDetailTitle: showTabNameInDetail,
        widgetMaxMinSize: widgetMaxMin,
        isLegendCollapes: isLegendCollapes,
        isMarqueeRequired: isMarqueeReq,
        isLegendBorderRequired: isLegendBorderReq,

      }
    };


    fetchPostData("/hisutils/parameterUpdate", val).then((data) => {
      if (data) {
        ToastAlert("Data Updated Successfully", "success");
        getAllTabsData(values?.tabFor)
        reset();
        setActionMode('home');
      } else {
        ToastAlert("Internal Error!", "error");
      }
    });
  };

  const handleDeleteTab = () => {
    if (selectedOption?.length > 0) {
      const val = { "id": selectedOption[0]?.id, "dashboardFor": values?.tabFor, "masterName": "DashboardMst" };
      fetchPostData("/hisutils/TabDelete", val).then((data) => {
        if (data) {
          ToastAlert('Deleted Successfully!', 'success');
          getAllTabsData(values?.tabFor)
          setSelectedOption([]);
          reset();
        } else {
          ToastAlert('Deletion Failed!', 'error');
        }
      })
    } else {
      ToastAlert('Please select a record', 'warning');
    }
  }

  const handleSaveUpdate = () => {
    let isValid = true;
    if (!values?.tabFor?.trim()) {
      setErrors(prev => ({ ...prev, 'tabForErr': "tab for is required" }));
      isValid = false;
    }
    if (!values?.tabNameDisplay?.trim()) {
      setErrors(prev => ({ ...prev, 'tabNameDisplayErr': "display name is required" }));
      isValid = false;
    }
    if (!values?.tabNameInternal?.trim()) {
      setErrors(prev => ({ ...prev, 'tabNameInternalErr': "internal name is required" }));
      isValid = false;
    }
    if (!values?.tabNameFontWeight?.trim()) {
      setErrors(prev => ({ ...prev, 'tabNameFontWeightErr': "font weight is required" }));
      isValid = false;
    }
    if (!values?.tabNameFontSize?.trim()) {
      setErrors(prev => ({ ...prev, 'tabNameFontSizeErr': "font size is required" }));
      isValid = false;
    }
    if (!values?.tabNameTxtDecorat?.trim()) {
      setErrors(prev => ({ ...prev, 'tabNameTxtDecoratErr': "decoration is required" }));
      isValid = false;
    }
    if (!radioValues?.showTabNameInDetail?.trim()) {
      setErrors(prev => ({ ...prev, 'showTabNameInDetailErr': "tab name in detail is required" }));
      isValid = false;
    }
    if (rows?.length > 0 && !rows[rows?.length - 1]?.displayOrder) {
      setErrors(prev => ({ ...prev, 'displayOrderErr': "required" }));
      isValid = false;
    }
    if (rows?.length > 0 && !rows[rows?.length - 1]?.widgetWidth) {
      setErrors(prev => ({ ...prev, 'widgetWidthErr': "required" }));
      isValid = false;
    }
    if (rows?.length > 0 && !rows[rows?.length - 1]?.widgetHeight) {
      setErrors(prev => ({ ...prev, 'widgetHeightErr': "required" }));
      isValid = false;
    }

    if (isValid) {
      setShowConfirmSave(true);
    }
  }

  useEffect(() => {
    if (confirmSave) {
      if (actionMode === 'edit') {
        updateTabData();
      } else {
        saveTabData();
      }
    }
  }, [confirmSave])

  const reset = () => {
    setValues({
      "tabFor": "", "tabNameDisplay": "", "tabNameInternal": "", "parentTab": "", "ellipseInDisplay": "",
      "tabIconImage": "", "iconName": "",
      //tab details
      "tabNameFontWeight": "", "tabDetailBgColor": "", "tabTopPadding": "", "buttonMarginHeading": "",
      "tabNameFontSize": "", "tabNameTxtDecorat": "", "tabDetailTitleColor": "",
      //parameter detail
      "parameterOption": "1", "loadOption": "ONWINDOWLOAD", "paraComboBgColor": "", "paraComboFontColor": "", "paraLabelFontColor": "", "paraRemark": "",
      //jndi
      "jndiSavingData": "", "stmtTimeOut": "",
      //footer
      "footerAlignment": "", "footerQuery": "", "footerText": "", "webRefName": "", "webServiceName": "",
      //helpDocs
      "helpDocs": [],
      //widget
      "widgetMappingDetail": []
    })
    setRadioValues({
      "isTabUsedForDrill": "No", "isTabNameInReportReq": "No", "isCssTabIconReq": "No",
      //tab details
      "showTabNameInDetail": "Yes", "widgetMaxMin": "",
      //footer detail
      "isLegendCollapes": "Yes", "isMarqueeReq": "No", "isLegendBorderReq": "Yes",
    })
    setActionMode('home');
    setShowTabsTable(false);
    setShowDataTable(false);
    setTabIndex(1);
    // setTabName({ value: 1, label: "About Widget" })
    setTabName({ value: 1, label: "About Tab" });
    setErrors({ tabForErr: "", tabNameDisplayErr: "", tabNameInternalErr: "", tabNameFontWeightErr: "", tabNameFontSizeErr: "", tabNameTxtDecoratErr: "", showTabNameInDetailErr: "" });
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
              checked={selectedOption[0]?.id === row?.id}
              onChange={(e) => { setSelectedOption([row]) }}
            />
          </span>
        </div>,
      width: "8%"
    },
    {
      name: 'Tab ID',
      selector: row => row.id,
      sortable: true,
      width: "8%"
    },
    {
      name: 'Tab Name',
      selector: row => row?.jsonData?.dashboardName || "---",
      sortable: true,
    },
    {
      name: 'Tab Display Name',
      selector: row => row?.jsonData?.dashboardActualName || "---",
      sortable: true,
    },
    {
      name: 'Parent Name',
      selector: row => allTabsData.filter(dt => dt?.jsonData?.parentTabId && dt?.jsonData?.dashboardId === row?.jsonData?.parentTabId)[0]?.jsonData?.dashboardName || "No Parent",
      // selector: row => row?.jsonData?.parentTabId || "---",
      sortable: true,
    },
  ]

  // console.log(singleData, 'single')
  // console.log(values, 'values')

  return (
    <>

      <NavbarHeader />
      <div className='main-master-page'>
        {values?.tabFor &&
          <div className='row w-100 m-0'>
            <div className='col-sm-6 p-0 global-button-group'>
              <GlobalButtonGroup isSave={true} isOpen={true} isReset={true} isParams={false} isWeb={false} onSave={handleSaveUpdate} onOpen={onOpenDataTable} onReset={reset} onParams={null} onWeb={null} />
            </div>
            <div className='col-sm-6 p-0 global-tabs'>
              <TabNav isTabNav={true} tabNavData={tabNavMenus} setTabIndex={setTabIndex} tabName={tabName} setTabName={setTabName} />
            </div>
          </div>
        }

        <div className='form-card m-auto p-2'>
          <div className='p-1'>
            {tabName?.value === 1 &&
              <AboutTab handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} dashboardForDt={dashboardForDt} setValues={setValues} tabDrpData={tabDrpData} errors={errors} />
            }
            {tabName?.value === 2 &&
              <TabDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} errors={errors} />
            }
            {tabName?.value === 3 &&
              <WidgetMapping handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} widgetDrpData={widgetDrpData} setValues={setValues} rows={rows} setRows={setRows} errors={errors} setErrors={setErrors}/>
            }
            {tabName?.value === 4 &&
              <ParamsDetail handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} parameterDrpData={parameterDrpData} pageName={'tab'} />
            }
            {tabName?.value === 5 &&
              <JndiDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />
            }
            {tabName?.value === 6 &&
              <FooterDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />
            }
            {tabName?.value === 7 &&
              <HelpDocs handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} />
            }


            <b><h6 className='header-devider mt-4'></h6></b>
            {values?.tabFor &&
              <div className='text-center mt-2 pre-nxt-btn'>
                <button className='btn btn-sm ms-1'
                  onClick={previousTab}
                  disabled={tabIndex > 1 ? false : true}
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="dropdown-gear-icon me-2" />
                  Previous
                </button>
                <button className='btn btn-sm ms-1' onClick={saveMenuTabsData}>
                  {`${tabIndex < tabNavMenus?.length ? 'Save & Next' : 'Save'}`}
                  {tabIndex < tabNavMenus?.length &&
                    <FontAwesomeIcon icon={faArrowRight} className="dropdown-gear-icon ms-2" />
                  }
                </button>
              </div>
            }
          </div>
        </div>
        {showTabsTable &&
          <GlobalDataTable title={"Tab List"} column={column} data={filterData} onModify={handleUpdateData} onDelete={handleDeleteTab} setSearchInput={setSearchInput} onClose={onTableClose} isShowBtn={true} />
        }
      </div>
    </>
  )
}

export default TabMaster
