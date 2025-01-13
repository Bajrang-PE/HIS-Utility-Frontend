import React, { useState } from 'react'
import NavbarHeader from '../../components/headers/NavbarHeader'
import GlobalButtonGroup from '../../components/commons/GlobalButtonGroup'
import InputSelect from '../../components/commons/InputSelect'
import InputField from '../../components/commons/InputField'
import { serviceCategories, timeOutOptions } from '../../localData/DropDownData'

const DataServiceMaster = () => {
  const [isCacheData, setIsCacheData] = useState(false);
  const [selectedMode, setSelectedMode] = useState("query");
  const [values, setValues] = useState({
    "serviceCategory": "", "serviceDisplayName": "", "serviceCallingName": "", "procedureFuncName": "", "fetchQuery": "", "webJsonType": "dataHeadingColumnType", "jndiSavingData": "", "stmtTimeOut": ""
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
        <GlobalButtonGroup isSave={true} isOpen={true} isReset={true} isParams={true} isWeb={false} onSave={null} onOpen={null} onReset={null} onParams={null} onWeb={null} />
        <div className='form-card m-auto p-3'>
          <b><h6 className='header-devider mt-0 mb-1'>Data Service Master</h6></b>

          {/* SECTION DEVIDER service category*/}
          <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
            {/* //left columns */}
            <div className='col-sm-6'>
              <div className="form-group row">
                <label className="col-sm-5 col-form-label pe-0 required-label">Service Category : </label>
                <div className="col-sm-7 ps-0 align-content-center">
                  <InputSelect
                    id="serviceCategory"
                    name="serviceCategory"
                    placeholder="Select value..."
                    options={serviceCategories}
                    className="backcolorinput"
                    value={values?.serviceCategory}
                    onChange={handleValueChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION DEVIDER for service name*/}
          <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
            {/* //left columns */}
            <div className='col-sm-6'>
              <div className="form-group row">
                <label className="col-sm-5 col-form-label pe-0 required-label">Service Display Name : </label>
                <div className="col-sm-7 ps-0 align-content-center">
                  <InputField
                    type="text"
                    className="backcolorinput"
                    placeholder="Enter value..."
                    name='serviceDisplayName'
                    id="serviceDisplayName"
                    onChange={handleValueChange}
                    value={values?.serviceDisplayName}
                  />
                </div>
              </div>
            </div>
            {/* right columns */}
            <div className='col-sm-6'>
              <div className="form-group row">
                <label className="col-sm-5 col-form-label pe-0">Service Name(For Calling Service) : </label>
                <div className="col-sm-7 ps-0 align-content-center">
                  <InputField
                    type="text"
                    className="backcolorinput"
                    placeholder="Enter value..."
                    name='serviceCallingName'
                    id="serviceCallingName"
                    onChange={handleValueChange}
                    value={values?.serviceCallingName}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION DEVIDER mode of selection */}
          <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
            {/* //left columns */}
            <div className='col-sm-6'>
              <div className="form-group row">
                <label className="col-sm-5 col-form-label pe-0 required-label">
                  Select Mode For Data :
                </label>
                <div className="col-sm-7 ps-0 align-content-center">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="selectedModeQuery"
                      name="selectedMode"
                      value={selectedMode}
                      onChange={(e) => setSelectedMode("query")}
                      checked={selectedMode === "query"}
                    />
                    <label className="form-check-label" htmlFor="dbYes">
                      By Query
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="selectedModeProcedure"
                      name="selectedMode"
                      value={selectedMode}
                      onChange={(e) => setSelectedMode("procedure")}
                      checked={selectedMode === "procedure"}
                    />
                    <label className="form-check-label" htmlFor="dbNo">
                      By Procedure For Query
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="selectedModeFunction"
                      name="selectedMode"
                      value={selectedMode}
                      onChange={(e) => setSelectedMode("function")}
                      checked={selectedMode === "function"}
                    />
                    <label className="form-check-label" htmlFor="dbNo">
                      By Function For Query
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="selectedModeHtml"
                      name="selectedMode"
                      value={selectedMode}
                      onChange={(e) => setSelectedMode("html")}
                      checked={selectedMode === "html"}
                    />
                    <label className="form-check-label" htmlFor="dbNo">
                      By HTML/Content Text
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="selectedModeProcedureDml"
                      name="selectedMode"
                      value={selectedMode}
                      onChange={(e) => setSelectedMode("procedureDml")}
                      checked={selectedMode === "procedureDml"}
                    />
                    <label className="form-check-label" htmlFor="dbNo">
                      By Procedure For DML
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="selectedModeFunctionDml"
                      name="selectedMode"
                      value={selectedMode}
                      onChange={(e) => setSelectedMode("functionDml")}
                      checked={selectedMode === "functionDml"}
                    />
                    <label className="form-check-label" htmlFor="dbNo">
                      By Function For DML
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* right columns */}
            <div className='col-sm-6'>
              {(selectedMode !== "procedureDml" && selectedMode !== "functionDml") &&
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label pe-0">
                    Is Cache Data :
                  </label>
                  <div className="col-sm-7 ps-0 align-content-center">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="isCacheData"
                        id="isCacheDataYes"
                        value={isCacheData}
                        onChange={(e) => setIsCacheData(true)}
                        checked={isCacheData}
                      />
                      <label className="form-check-label" htmlFor="dbYes">
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="isCacheData"
                        id="isCacheDataNo"
                        value={isCacheData}
                        onChange={(e) => setIsCacheData(false)}
                        checked={!isCacheData}
                      />
                      <label className="form-check-label" htmlFor="dbNo">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>

          {/* SECTION DEVIDER query and json type*/}
          <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
            {/* //left columns */}
            <div className='col-sm-6'>
              {(selectedMode !== "query" && selectedMode !== "html") &&
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label pe-0 required-label">Procedure/Function Name : </label>
                  <div className="col-sm-7 ps-0 align-content-center">
                    <InputField
                      type="text"
                      className="backcolorinput"
                      placeholder="Enter..."
                      name='procedureFuncName'
                      id='procedureFuncName'
                      value={values?.procedureFuncName}
                      onChange={handleValueChange}
                    />
                  </div>
                </div>
              }
              {(selectedMode === "query" || selectedMode === "html") &&
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label fix-label pe-0 required-label">Fetch Query : </label>
                  <div className="col-sm-7 ps-0 align-content-center">
                    <textarea
                      className="form-control backcolorinput"
                      placeholder="Enter..."
                      rows="2"
                      name='fetchQuery'
                      id='fetchQuery'
                      value={values?.fetchQuery}
                      onChange={handleValueChange}
                    ></textarea>
                  </div>
                </div>
              }
            </div>
            {/* right columns */}
            <div className='col-sm-6'>
              <div className="form-group row">
                <label className="col-sm-5 col-form-label pe-0">Webservice Json Type : </label>
                <div className="col-sm-7 ps-0 align-content-center">
                  <InputSelect
                    id="webJsonType"
                    name="webJsonType"
                    // placeholder="Select value..."
                    options={[{ value: "dataHeadingColumnType", label: "DataHeadingColumn Type" }, { value: "keyValueType", label: "KeyValue Type" }]}
                    className="backcolorinput"
                    value={values?.webJsonType}
                    onChange={handleValueChange}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION DEVIDER for json preview*/}
          <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
            {/* //left columns */}
            <div className='col-sm-6'>
              <div className="form-group row">
                <label className="col-sm-5 col-form-label pe-0">Webservice Json Preview : </label>
                {values?.webJsonType === "dataHeadingColumnType" &&
                  <div className="col-sm-7 ps-0 align-content-center">
                    <b><u>DATAHEADING-DATAVALUE FORMAT:-</u></b><br />
                    <br />
                    {"{"}
                    <br />
                    &nbsp;&nbsp;'dataHeading': ['parent_store', 'store_name'],
                    <br />
                    &nbsp;&nbsp;'dataValue': [
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;['Anuppur-CMHO', 'Anuppur-CMHO'],<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;['Neemuch-CMHO', 'Neemuch-CMHO']
                    <br />
                    &nbsp;&nbsp;]
                    <br />
                    {"}"}
                  </div>
                }
                {values?.webJsonType === "keyValueType" &&
                  <div className="col-sm-7 ps-0 align-content-center">
                    <b><u>KEY-VALUE FORMAT:-</u></b><br />
                    <br />
                    [
                    <br />
                    &nbsp;&nbsp;{`{`}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;'parent_store': 'Anuppur-CMHO',
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;'store_name': 'Anuppur-CMHO'
                    <br />
                    &nbsp;&nbsp;{`},`}
                    <br />
                    &nbsp;&nbsp;{`{`}
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;'parent_store': 'Neemuch-CMHO',
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;'store_name': 'Neemuch'
                    <br />
                    &nbsp;&nbsp;{`}`}
                    <br />
                    ]
                  </div>
                }

              </div>
            </div>
          </div>

          {/* MAIN DEVIDER FOR JNDI */}
          <b><h6 className='header-devider m-0'>JNDI Details</h6></b>

          {/* SECTION DEVIDER jndi and time*/}
          <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
            {/* //left columns */}
            <div className='col-sm-6'>
              <div className="form-group row">
                <label className="col-sm-5 col-form-label pe-0">JNDI For Saving Data : </label>
                <div className="col-sm-7 ps-0 align-content-center">
                  <InputSelect
                    id="jndiSavingData"
                    name="jndiSavingData"
                    // placeholder="Select"
                    options={[{ value: 'cdwh', label: "CDWH" }]}
                    className="backcolorinput"
                    onChange={handleValueChange}
                    value={values?.jndiSavingData}
                  />
                </div>
              </div>
            </div>
            {/* right columns */}
            <div className='col-sm-6'>
              <div className="form-group row">
                <label className="col-sm-5 col-form-label pe-0">Statement Time Out : </label>
                <div className="col-sm-7 ps-0 align-content-center">
                  <InputSelect
                    id="stmtTimeOut"
                    name="stmtTimeOut"
                    // placeholder="Select "
                    options={timeOutOptions}
                    className="backcolorinput"
                    onChange={handleValueChange}
                    value={values?.stmtTimeOut}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataServiceMaster
