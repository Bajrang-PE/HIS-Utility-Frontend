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

const TabMaster = () => {

  const { dashboardForDt, getDashboardForDrpData, widgetDrpData, getAllWidgetData, getAllParameterData, parameterDrpData } = useContext(HISContext);
  const [tabIndex, setTabIndex] = useState(1);
  const [tabName, setTabName] = useState({ value: 1, label: "About Tab" });

  const [values, setValues] = useState({
    "tabFor": "", "tabNameDisplay": "", "tabNameInternal": "", "parentTab": "", "ellipseInDisplay": "",
    "tabIconImage": "",
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

  const [radioValues, setRadioValues] = useState({
    "isTabUsedForDrill": "No", "isTabNameInReportReq": "No", "isCssTabIconReq": "No",
    //tab details
    "showTabNameInDetail": "Yes", "widgetMaxMin": "",
    //footer detail
    "isLegendCollapes": "Yes", "isMarqueeReq": "No", "isLegendBorderReq": "Yes",
  })

  useEffect(() => {
    if (dashboardForDt?.length === 0) { getDashboardForDrpData(); }
  }, [])

  useEffect(() => {
    if (values?.tabFor) {
      getAllWidgetData(values?.tabFor);
      getAllParameterData(values?.tabFor)
    }
  }, [values?.tabFor])

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

  const [tabNavMenus, setTabNavMenus] = useState([
    { value: 1, label: "About Tab" },
    { value: 2, label: "Configuration" },
    { value: 3, label: "Widget Mapping" },
    { value: 4, label: "Parameter Detail" },
    { value: 5, label: "JNDI Details" },
    { value: 6, label: "Footer Details" },
    { value: 7, label: "Help Docs" },

  ]);

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

  return (
    <>

      <NavbarHeader />
      <div className='main-master-page'>
        <div className='row w-100 m-0'>
          <div className='col-sm-6 p-0 global-button-group'>
            <GlobalButtonGroup isSave={true} isOpen={true} isReset={true} isParams={false} isWeb={false} onSave={null} onOpen={null} onReset={null} onParams={null} onWeb={null} />
          </div>
          <div className='col-sm-6 p-0 global-tabs'>
            <TabNav isTabNav={true} tabNavData={tabNavMenus} setTabIndex={setTabIndex} tabName={tabName} setTabName={setTabName} />
          </div>
        </div>

        <div className='form-card m-auto p-2'>
          <div className='p-1'>
            {tabName?.value === 1 &&
              <AboutTab handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} dashboardForDt={dashboardForDt} />
            }
            {tabName?.value === 2 &&
              <TabDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />
            }
            {tabName?.value === 3 &&
              <WidgetMapping handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} widgetDrpData={widgetDrpData} />
            }
            {tabName?.value === 4 &&
              <ParamsDetail handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} parameterDrpData={parameterDrpData} pageName={'tab'}/>
            }
            {tabName?.value === 5 &&
              <JndiDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />
            }
            {tabName?.value === 6 &&
              <FooterDetails handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />
            }
            {tabName?.value === 7 &&
              <HelpDocs handleValueChange={handleValueChange} handleRadioChange={handleRadioChange} radioValues={radioValues} values={values} />
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

export default TabMaster
