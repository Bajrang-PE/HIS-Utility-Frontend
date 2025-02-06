import React, { useContext, useEffect, useState } from 'react'
import NavbarHeader from '../../components/headers/NavbarHeader'
import GlobalButtonGroup from '../../components/commons/GlobalButtonGroup'
import TabNav from '../../components/commons/TabNav'
import AboutDashboard from '../../components/dashboardMasters/dashboardMaster/AboutDashboard'
import TabDetails from '../../components/dashboardMasters/dashboardMaster/TabDetails'
import HeaderDetails from '../../components/dashboardMasters/dashboardMaster/HeaderDetails'
import ParamsDetails from '../../components/dashboardMasters/dashboardMaster/ParamsDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { HISContext } from '../../contextApi/HISContext'
import { ToastAlert } from '../../utils/commonFunction'
import GlobalDataTable from '../../components/commons/GlobalDataTable'
import { fetchPostData } from '../../utils/ApiHooks'

const DashboardMaster = () => {

  const { dashboardForDt, getDashboardForDrpData, getAllParameterData, parameterDrpData, getAllTabsData, setShowDataTable, setSelectedOption, selectedOption, actionMode, setActionMode, tabDrpData, getAllDashboardData, dashboardData } = useContext(HISContext);

  const [tabIndex, setTabIndex] = useState(1);
  const [tabName, setTabName] = useState({ value: 1, label: "About Dashboard" });
  const [showDashboardTable, setShowDashboardTable] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [singleData, setSingleData] = useState([]);
  const [filterData, setFilterData] = useState(dashboardData)

  const [values, setValues] = useState({
    "dashboardFor": "", "dashNameDisplay": "", "dashNameInternal": "", "menuContainerBgColor": "", "dashTitlefontColor": "", "iconColor": "", "menuContainerBgImage": "", "cachingStatus": '', "dataLoad": "ALL", "id": "",
    //tab
    "tabDisplayStyle": "TOP", "tabIconType": "IMAGE", "timeInterval": "", "changeIntervalTime": "", "textshadowColor": "", "tabFontColor": "", "tabBgColorOnHover": "", "tabFontColorOnHover": '', "tabMenuWidthBigIcon": "3",
    "tabMenuHeightBigIcon": "", "tabShapesBigIcon": "",
    //header
    "headerHtml": "", "headerCss": "", "rptHeaderbyQuery": "",
    //parameter
    "parameterOption": ""
  })

  const [radioValues, setRadioValues] = useState({
    "isPrintBtnReq": "Yes", "dashboardTheme": "Default",
    //tab
    "isTopBarVisible": "No", "isFixedLayout": "Yes", "isSidebarCollapse": "Yes",
    //header
    "isHeaderReq": "No", "showHeader": "Only in Big Icon Menu", "showHeaderInGlobalDash": "No", "rptHeaderTypePdfExl": "1", "isActive": "Yes",
  })

  const [tabNavMenus, setTabNavMenus] = useState([
    { value: 1, label: "About Dashboard" },
    { value: 2, label: "Tab Details" },
    { value: 3, label: "Header Details" },
    { value: 4, label: "Parameter Detail" }
  ]);

  useEffect(() => {
    if (dashboardForDt?.length === 0) { getDashboardForDrpData(); }
  }, [])

  //parameter search
  useEffect(() => {
    if (!searchInput) {
      setFilterData(dashboardData);
    } else {
      const lowercasedText = searchInput.toLowerCase();
      const newFilteredData = dashboardData.filter(row => {
        const paramId = row?.id?.toString() || "";
        const paramName = row?.jsonData?.groupName?.toLowerCase() || "";
        const paramDisplayName = row?.jsonData?.groupUrl?.toLowerCase() || "";

        return paramId?.includes(lowercasedText) || paramName.includes(lowercasedText) || paramDisplayName.includes(lowercasedText);
      });
      setFilterData(newFilteredData);
      console.log(newFilteredData, 'newFilteredData')
    }
  }, [searchInput, dashboardData]);

  useEffect(() => {
    if (values?.dashboardFor) {
      getAllDashboardData(values?.dashboardFor);
      getAllParameterData(values?.dashboardFor)
      getAllTabsData(values?.dashboardFor)
    }
  }, [values?.dashboardFor])

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

  useEffect(() => {
    if (singleData?.length > 0) {
      const jsonData = singleData[0]?.jsonData || {};
      setValues({
        ...values,
        id: singleData[0]?.id,//
        dashboardFor: singleData[0]?.dashboardFor,//
        dashNameDisplay: jsonData?.groupName,//
        dashNameInternal: jsonData?.groupNameInternal,//
        menuContainerBgColor: jsonData?.dashboardMenuContainerBackground,//
        dashTitlefontColor: jsonData?.dashboardHeadingFontColor,//
        iconColor: jsonData?.iconColor,//
        menuContainerBgImage: jsonData?.dashboardMenuContainerBackgroundImage,//
        cachingStatus: jsonData?.cachingStatus,//
        dataLoad: jsonData?.dashboardDataLoad,//
        //tab  
        tabDisplayStyle: jsonData?.tabDisplayStyle,//
        tabIconType: jsonData?.iconType,//
        timeInterval: jsonData?.timeInterval,//
        changeIntervalTime: jsonData?.changeInterval,//
        textshadowColor: jsonData?.textShadowColour,//
        tabFontColor: jsonData?.tabFont,//
        tabBgColorOnHover: jsonData?.tabColourHover,//
        tabFontColorOnHover: jsonData?.tabFontColourHover,//
        tabMenuWidthBigIcon: jsonData?.tabIconWidth,//
        tabMenuHeightBigIcon: jsonData?.tabIconHeight,//
        tabShapesBigIcon: jsonData?.tabShape,//
        //header  
        headerHtml: jsonData?.headerHTML,//
        headerCss: jsonData?.headerCSS,//
        rptHeaderbyQuery: jsonData?.reportHeaderByQuery,//
        //parameter  
        parameterOption: jsonData?.parameterOptions  //
        // "dashboardIds": "107,3,4",
        // "allSelectedParaList": "159,148",
      });

      setRadioValues({
        ...radioValues,
        isPrintBtnReq: jsonData?.printButton, // 
        dashboardTheme: jsonData?.dashboardTheme,  //

        //tab  
        isTopBarVisible: jsonData?.isTopTabBarVisible, // 
        isFixedLayout: jsonData?.isFixedLayout,  //
        isSidebarCollapse: jsonData?.isSidebarCollapse,  //

        //header  
        isHeaderReq: jsonData?.isHeaderRequired,  //
        showHeader: jsonData?.showHeader,  //
        showHeaderInGlobalDash: jsonData?.showHeaderGlobalDashboardOnly,  //
        rptHeaderTypePdfExl: jsonData?.isStaticHeaderRequired, // 
        isActive: jsonData?.isActive,  //

      })
    }
  }, [singleData]);

  const saveDashboardData = () => {
    const {
      dashboardFor, dashNameDisplay, dashNameInternal, menuContainerBgColor, dashTitlefontColor, iconColor, menuContainerBgImage, cachingStatus, dataLoad,
      //tab  
      tabDisplayStyle, tabIconType, timeInterval, changeIntervalTime, textshadowColor, tabFontColor,
      tabBgColorOnHover, tabFontColorOnHover, tabMenuWidthBigIcon, tabMenuHeightBigIcon, tabShapesBigIcon,
      //header  
      headerHtml, headerCss, rptHeaderbyQuery,
      //parameter  
      parameterOption } = values;

    const {
      isPrintBtnReq, dashboardTheme,
      //tab  
      isTopBarVisible, isFixedLayout, isSidebarCollapse,
      //header  
      isHeaderReq, showHeader, showHeaderInGlobalDash, rptHeaderTypePdfExl, isActive, } = radioValues;

    const val = {
      dashboardFor: dashboardFor,
      masterName: "DashboardGroupingMst",
      entryUserId: 101,
      // jndiIdForGettingData: jndiSavingData,
      // statementTimeout: stmtTimeOut,
      keyName: dashNameDisplay,
      jsonData: {
        groupName: dashNameDisplay,
        groupNameInternal: dashNameInternal,
        dashboardMenuContainerBackground: menuContainerBgColor,
        dashboardHeadingFontColor: dashTitlefontColor,
        iconColor: iconColor,
        dashboardMenuContainerBackgroundImage: menuContainerBgImage,
        cachingStatus: cachingStatus,
        dashboardDataLoad: dataLoad,

        tabDisplayStyle: tabDisplayStyle,
        iconType: tabIconType,
        timeInterval: timeInterval,
        changeInterval: changeIntervalTime,
        textShadowColour: textshadowColor,
        tabFont: tabFontColor,
        tabColourHover: tabBgColorOnHover,
        tabFontColourHover: tabFontColorOnHover,
        tabIconWidth: tabMenuWidthBigIcon,
        tabIconHeight: tabMenuHeightBigIcon,
        tabShape: tabShapesBigIcon,

        headerHTML: headerHtml,
        headerCSS: headerCss,
        reportHeaderByQuery: rptHeaderbyQuery,
        parameterOptions: parameterOption,

        dashboardIds: "",
        allSelectedParaList: "",

        printButton: isPrintBtnReq,
        dashboardTheme: dashboardTheme,
        isTopTabBarVisible: isTopBarVisible,
        isFixedLayout: isFixedLayout,
        isSidebarCollapse: isSidebarCollapse,
        isHeaderRequired: isHeaderReq,
        showHeader: showHeader,
        showHeaderGlobalDashboardOnly: showHeaderInGlobalDash,
        isStaticHeaderRequired: rptHeaderTypePdfExl,
        isActive: isActive,

      }
    };

    fetchPostData("/hisutils/dashboardSave", val).then((data) => {
      if (data) {
        ToastAlert("Data Saved Successfully", "success");
        getAllDashboardData(values?.dashboardFor)
        setActionMode('home');
        reset();
      } else {
        ToastAlert("Internal Error!", "error");
      }
    });
  };

  const updateDashboardData = () => {
    const {
      dashboardFor, dashNameDisplay, dashNameInternal, menuContainerBgColor, dashTitlefontColor, iconColor, menuContainerBgImage, cachingStatus, dataLoad, id,
      //tab  
      tabDisplayStyle, tabIconType, timeInterval, changeIntervalTime, textshadowColor, tabFontColor,
      tabBgColorOnHover, tabFontColorOnHover, tabMenuWidthBigIcon, tabMenuHeightBigIcon, tabShapesBigIcon,
      //header  
      headerHtml, headerCss, rptHeaderbyQuery,
      //parameter  
      parameterOption } = values;

    const {
      isPrintBtnReq, dashboardTheme,
      //tab  
      isTopBarVisible, isFixedLayout, isSidebarCollapse,
      //header  
      isHeaderReq, showHeader, showHeaderInGlobalDash, rptHeaderTypePdfExl, isActive, } = radioValues;

    const val = {
      id: id,
      dashboardFor: dashboardFor,
      masterName: "DashboardGroupingMst",
      entryUserId: 101,
      // jndiIdForGettingData: jndiSavingData,
      // statementTimeout: stmtTimeOut,
      keyName: dashNameDisplay,
      jsonData: {
        groupName: dashNameDisplay,
        groupNameInternal: dashNameInternal,
        dashboardMenuContainerBackground: menuContainerBgColor,
        dashboardHeadingFontColor: dashTitlefontColor,
        iconColor: iconColor,
        dashboardMenuContainerBackgroundImage: menuContainerBgImage,
        cachingStatus: cachingStatus,
        dashboardDataLoad: dataLoad,

        tabDisplayStyle: tabDisplayStyle,
        iconType: tabIconType,
        timeInterval: timeInterval,
        changeInterval: changeIntervalTime,
        textShadowColour: textshadowColor,
        tabFont: tabFontColor,
        tabColourHover: tabBgColorOnHover,
        tabFontColourHover: tabFontColorOnHover,
        tabIconWidth: tabMenuWidthBigIcon,
        tabIconHeight: tabMenuHeightBigIcon,
        tabShape: tabShapesBigIcon,

        headerHTML: headerHtml,
        headerCSS: headerCss,
        reportHeaderByQuery: rptHeaderbyQuery,
        parameterOptions: parameterOption,

        dashboardIds: "",
        allSelectedParaList: "",

        printButton: isPrintBtnReq,
        dashboardTheme: dashboardTheme,
        isTopTabBarVisible: isTopBarVisible,
        isFixedLayout: isFixedLayout,
        isSidebarCollapse: isSidebarCollapse,
        isHeaderRequired: isHeaderReq,
        showHeader: showHeader,
        showHeaderGlobalDashboardOnly: showHeaderInGlobalDash,
        isStaticHeaderRequired: rptHeaderTypePdfExl,
        isActive: isActive,

      }
    };

    fetchPostData("/hisutils/dashboardUpdate", val).then((data) => {
      if (data) {
        ToastAlert("Data Updated Successfully", "success");
        getAllDashboardData(values?.dashboardFor)
        reset();
        setActionMode('home');
      } else {
        ToastAlert("Internal Error!", "error");
      }
    });
  };

  const handleDeleteDashboard = () => {
    if (selectedOption?.length > 0) {
      const val = { "id": selectedOption[0]?.id, "dashboardFor": values?.dashboardFor, "masterName": "DashboardGroupingMst" };
      fetchPostData("/hisutils/dashboardDelete", val).then((data) => {
        if (data) {
          ToastAlert('Deleted Successfully!', 'success');
          getAllDashboardData(values?.dashboardFor)
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
    setShowDashboardTable(true)
  }

  const onTableClose = () => {
    setShowDashboardTable(false);
    setSearchInput('');
    setSelectedOption([]);
  }

  const handleUpdateData = () => {
    if (selectedOption?.length > 0) {
      const selectedRow = dashboardData?.filter(dt => dt?.id === selectedOption[0]?.id)
      setSingleData(selectedRow);
      setActionMode('edit');
      setShowDataTable(false);
      setShowDashboardTable(false);
      setSelectedOption([]);
    } else {
      ToastAlert('Please select a record', 'warning');
    }
  }

  const reset = () => {
    setValues({
      "dashboardFor": "", "dashNameDisplay": "", "dashNameInternal": "", "menuContainerBgColor": "", "dashTitlefontColor": "", "iconColor": "", "menuContainerBgImage": "", "cachingStatus": '', "dataLoad": "ALL",
      //tab
      "tabDisplayStyle": "TOP", "tabIconType": "IMAGE", "timeInterval": "", "changeIntervalTime": "", "textshadowColor": "", "tabFontColor": "", "tabBgColorOnHover": "", "tabFontColorOnHover": '', "tabMenuWidthBigIcon": "3",
      "tabMenuHeightBigIcon": "", "tabShapesBigIcon": "",
      //header
      "headerHtml": "", "headerCss": "", "rptHeaderbyQuery": "",
      //parameter
      "parameterOption": ""
    });

    setRadioValues({
      "isPrintBtnReq": "Yes", "dashboardTheme": "Default",
      //tab
      "isTopBarVisible": "No", "isFixedLayout": "Yes", "isSidebarCollapse": "Yes",
      //header
      "isHeaderReq": "No", "showHeader": "Only in Big Icon Menu", "showHeaderInGlobalDash": "No", "rptHeaderTypePdfExl": "1", "isActive": "Yes",
    });
    setActionMode('home');
    setShowDashboardTable(false);
    setShowDataTable(false);
    setTabIndex(1);
    // setTabName({ value: 1, label: "About Widget" })
    setTabName({ value: 1, label: "About Dashboard" });
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
      name: 'Group ID',
      selector: row => row.id,
      sortable: true,
      width: "8%"
    },
    {
      name: 'Group Name',
      selector: row => row?.jsonData?.groupName || "---",
      sortable: true,
    },
    {
      name: 'URL',
      selector: row => row?.jsonData?.groupUrl || "---",
      sortable: true,
    }
  ]

  console.log(singleData, 'single')

  return (
    <div>
      <NavbarHeader />
      <div className='main-master-page'>
        {values?.dashboardFor &&
          <div className='row w-100 m-0'>
            <div className='col-sm-6 p-0 global-button-group'>
              <GlobalButtonGroup isSave={true} isOpen={true} isReset={true} isParams={false} isWeb={false} onSave={actionMode === 'edit' ? updateDashboardData : saveDashboardData} onOpen={onOpenDataTable} onReset={reset} onParams={null} onWeb={null} />
            </div>
            <div className='col-sm-6 p-0 global-tabs'>
              <TabNav isTabNav={true} tabNavData={tabNavMenus} setTabIndex={setTabIndex} tabName={tabName} setTabName={setTabName} />
            </div>
          </div>
        }

        <div className='form-card m-auto p-2'>
          <div className='p-1'>
            {tabName?.value === 1 &&
              <AboutDashboard handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} dashboardForDt={dashboardForDt} />}
            {tabName?.value === 2 &&
              <TabDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} tabDrpData={tabDrpData} />}
            {tabName?.value === 3 &&
              <HeaderDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} />}
            {tabName?.value === 4 &&
              <ParamsDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} setValues={setValues} parameterDrpData={parameterDrpData} />}

            <b><h6 className='header-devider mt-4'></h6></b>
            {values?.dashboardFor &&
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
      </div>
      {showDashboardTable &&
        <GlobalDataTable title={"Group List"} column={column} data={filterData} onModify={handleUpdateData} onDelete={handleDeleteDashboard} setSearchInput={setSearchInput} onClose={onTableClose} isShowBtn={true} />
      }
    </div>
  )
}

export default DashboardMaster
