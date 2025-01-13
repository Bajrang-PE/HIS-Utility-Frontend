import React, { useState } from 'react'
import NavbarHeader from '../../components/headers/NavbarHeader'
import GlobalButtonGroup from '../../components/commons/GlobalButtonGroup'
import TabNav from '../../components/commons/TabNav'
import { itemForDashboard } from '../../localData/DropDownData'
import InputSelect from '../../components/commons/InputSelect'
import InputField from '../../components/commons/InputField'
import AboutWidget from '../../components/dashboardMasters/widgetMaster/AboutWidget'
import QueryDetails from '../../components/dashboardMasters/widgetMaster/QueryDetails'


const WidgetMaster = () => {

  const [values, setValues] = useState({

  })
  const [isWidgetNameReq, setIsWidgetNameReq] = useState(false);
  const [isRecordLimitReq, setIsRecordLimitReq] = useState(false);

  const tabNavMenus = [
    { value: 1, label: "About Widget" },
    { value: 2, label: "JNDI Details" },
    { value: 3, label: "Footer Details" },
    { value: 4, label: "About Widget" },
    { value: 5, label: "JNDI Details" },
    { value: 6, label: "Footer Details" }
  ]

  return (
    <>
      <NavbarHeader />
      <div className='main-master-page'>
        <div className='row w-100 m-0'>
          <div className='col-sm-6 p-0'>
            <GlobalButtonGroup isSave={true} isOpen={true} isReset={true} isParams={true} isWeb={true} onSave={null} onOpen={null} onReset={null} onParams={null} onWeb={null} />
          </div>
          <div className='col-sm-6 p-0'>
            <TabNav isTabNav={true} tabNavData={tabNavMenus} />
          </div>
        </div>
        <div className='form-card m-auto p-2'>
          <div className='p-1'>
            <AboutWidget />
            <QueryDetails />
          </div>
        </div>
      </div>
    </>
  )
}

export default WidgetMaster
