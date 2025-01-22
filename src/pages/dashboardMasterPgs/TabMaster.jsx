import React, { useContext, useEffect } from 'react'
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

const TabMaster = () => {

  const { parameterData, getAllParameterData, selectedOption, setSelectedOption, setShowDataTable, dashboardForDt, getDashboardForDrpData, actionMode, setActionMode, parameterDrpData, getAllServiceData, dataServiceData } = useContext(HISContext);

  useEffect(() => {
    if (dashboardForDt?.length === 0) { getDashboardForDrpData(); }
  }, [])

  return (
    <>

      <NavbarHeader />
      <div className='main-master-page'>
        <div className='row w-100 m-0'>
          <div className='col-sm-6 p-0 global-button-group'>
            <GlobalButtonGroup isSave={true} isOpen={true} isReset={true} isParams={false} isWeb={false} onSave={null} onOpen={null} onReset={null} onParams={null} onWeb={null} />
          </div>
          <div className='col-sm-6 p-0 global-tabs'>
            <TabNav isTabNav={true} tabNavData={null} setTabIndex={null} tabName={''} setTabName={null} />
          </div>
        </div>

        <div className='form-card m-auto p-2'>
          <div className='p-1'>
            <AboutTab dashboardForDt={dashboardForDt}/>
            <TabDetails />
            <WidgetMapping/>
            <ParamsDetail/>
            <JndiDetails/>
            <FooterDetails/>
          </div>
        </div>
      </div>
    </>
  )
}

export default TabMaster
