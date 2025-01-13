import React, { useState } from 'react'
import NavbarHeader from '../../components/headers/NavbarHeader'
import InputField from '../../components/commons/InputField'
import GlobalButtonGroup from '../../components/commons/GlobalButtonGroup'

const DbSubmenuMaster = () => {
  const [values, setValues] = useState({
    "subMenuValue": "", "mobileIcon": "", "mobilebgColor": "", "mobileFontColor": ""
  })

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    if (name) {
      setValues({ ...values, [name]: value })
    }
  }
  return (
    <div>
      <NavbarHeader />
      <div className='main-master-page'>
      <GlobalButtonGroup isSave={true} isOpen={true} isReset={true} isParams={false} isWeb={false} onSave={null} onOpen={null} onReset={null} onParams={null} onWeb={null} />
        <div className='form-card m-auto p-3'>
          <b><h6 className='header-devider mt-0 mb-1'> Dashboard SubMenu Master</h6></b>
          {/* SECTION DEVIDER*/}
          <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
            {/* //left columns */}
            <div className='col-sm-6'>
              <div className="form-group row">
                <label className="col-sm-5 col-form-label pe-0 required-label">SubMenu Value : </label>
                <div className="col-sm-7 ps-0 align-content-center">
                  <InputField
                    type="text"
                    className="backcolorinput"
                    placeholder="Enter value..."
                    name='subMenuValue'
                    id="subMenuValue"
                    onChange={handleValueChange}
                    value={values?.subMenuValue}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-5 col-form-label pe-0 required-label">Mobile BgColor : </label>
                <div className="col-sm-7 ps-0 align-content-center">
                  <InputField
                    type="color"
                    className="backcolorinput "
                    placeholder="Enter value..."
                    name='mobilebgColor'
                    id="mobilebgColor"
                    onChange={handleValueChange}
                    value={values?.mobilebgColor}
                  />
                </div>
              </div>
            </div>
            {/* right columns */}
            <div className='col-sm-6'>
              <div className="form-group row">
                <label className="col-sm-5 col-form-label pe-0 required-label">Mobile Icon : </label>
                <div className="col-sm-7 ps-0 align-content-center">
                  <InputField
                    type="text"
                    className="backcolorinput"
                    placeholder="Enter value..."
                    name='mobileIcon'
                    id="mobileIcon"
                    onChange={handleValueChange}
                    value={values?.mobileIcon}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-5 col-form-label pe-0 required-label">Mobile FontColor : </label>
                <div className="col-sm-7 ps-0 align-content-center">
                  <InputField
                    type="color"
                    className="backcolorinput"
                    placeholder="Enter value..."
                    name='mobileFontColor'
                    id="mobileFontColor"
                    onChange={handleValueChange}
                    value={values?.mobileFontColor}
                  />
                </div>
              </div>
            </div>
          </div>
          <b><h6 className='header-devider m-1' style={{ padding: "10px" }}></h6></b>
        </div>
      </div>
    </div>
  )
}

export default DbSubmenuMaster
