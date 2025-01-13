import React, { useState } from 'react'
import NavbarHeader from '../../components/headers/NavbarHeader'
import InputSelect from '../../components/commons/InputSelect'
import InputField from '../../components/commons/InputField'
import Select from 'react-select'
import { faAdd, faDatabase, faFile, faMinus, faRefresh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GlobalButtonGroup from '../../components/commons/GlobalButtonGroup'
import { itemForDashboard, parameterAlignment, parameterType, parameterWidth, timeOutOptions, validationType } from '../../localData/DropDownData'

const ParameterMaster = () => {
  const [rows, setRows] = useState([{ value: "", text: "" }]);
  const [showAsLabel, setShowAsLabel] = useState(false);
  const [isMultiSelectReq, setIsMultiSelectReq] = useState(false);
  const [values, setValues] = useState({
    "parameterFor": "", "parameterType": "combo", "parameterInternal": "", "parameterDisplay": "", "placeHolder": "", "parameterWidth": "", "parameterAlignment": "", "paraLabelWidth": "", "paraLabelAlignment": "", "paraControlWidth": "", "paraControlAlignment": "", "mandatory": "", "defaultValueIfLeft": "", "defaultValue": "", "validation": "", "maxLength": "", "minLength": "", "parentID": [], "modeForQuery": 'query', "query": "", "defaultOptValue": "", "defaultOptText": "", "defOptFilterVal": "", "defOptFilterTxt": "", "jndiSavingData": "", "stmtTimeOut": ""
  })

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    if (name) {
      setValues({ ...values, [name]: value })
    }
  }

  // Handle input change
  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  // Add a new row
  const handleAddRow = () => {
    setRows([...rows, { value: "", text: "" }]);
  };

  // Remove a row
  const handleRemoveRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  return (
    <>
      <NavbarHeader />
      <div className='main-master-page'>
        <GlobalButtonGroup />
        <div className='form-card m-auto p-2'>
          <div className='p-1'>
            <b><h6 className='header-devider m-0'> Parameter Master</h6></b>
            {/* <div > */}
            {/* SECTION DEVIDER para type and for*/}
            <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
              {/* //left columns */}
              <div className='col-sm-6'>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label pe-0 required-label">Parameter For : </label>
                  <div className="col-sm-7 ps-0 align-content-center">
                    <InputSelect
                      id="parameterFor"
                      name="parameterFor"
                      placeholder="Select value..."
                      options={itemForDashboard}
                      className="backcolorinput"
                      value={values?.parameterFor}
                      onChange={handleValueChange}
                    />
                  </div>
                </div>
              </div>
              {/* right columns */}
              <div className='col-sm-6'>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label pe-0 required-label">Parameter Type : </label>
                  <div className="col-sm-7 ps-0 align-content-center">
                    <InputSelect
                      className="backcolorinput"
                      id="parameterType"
                      name="parameterType"
                      // placeholder="Select value..."
                      options={parameterType}
                      value={values?.parameterType}
                      onChange={handleValueChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION DEVIDER para name and place holder */}
            <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
              {/* //left columns */}
              <div className='col-sm-6'>
                <div className="form-group row" style={{ paddingBottom: "1px" }}>
                  <label className="col-sm-5 col-form-label pe-0 required-label">Parameter (For Internal Use) : </label>
                  <div className="col-sm-7 ps-0 align-content-center">
                    <InputField
                      type="text"
                      className="backcolorinput"
                      placeholder="Enter value..."
                      name='parameterInternal'
                      id="parameterInternal"
                      onChange={handleValueChange}
                      value={values?.parameterInternal}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label pe-0">Place Holder  : </label>
                  <div className="col-sm-7 ps-0 align-content-center">
                    <InputField
                      type="text"
                      className="backcolorinput"
                      placeholder="Enter value..."
                      name='placeHolder'
                      id="placeHolder"
                      onChange={handleValueChange}
                      value={values?.placeHolder}
                    />
                  </div>
                </div>
              </div>
              {/* right columns */}
              <div className='col-sm-6'>
                <div className="form-group row" style={{ paddingBottom: "1px" }}>
                  <label className="col-sm-5 col-form-label fix-label pe-0 required-label">Parameter Name (For Display) : </label>
                  <div className="col-sm-7 ps-0 align-content-center">
                    <InputField
                      type="text"
                      className="backcolorinput"
                      placeholder="Enter value..."
                      name='parameterDisplay'
                      id="parameterDisplay"
                      onChange={handleValueChange}
                      value={values?.parameterDisplay}
                    />
                  </div>
                </div>
                {values?.parameterType === "combo" &&
                  <div className="form-group row">
                    <label className="col-sm-5 col-form-label pe-0">
                      Show As Label If One Data Available :
                    </label>
                    <div className="col-sm-7 ps-0 align-content-center">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="showAsLabel"
                          id="showAsLabelYes"
                          value={showAsLabel}
                          onChange={(e) => setShowAsLabel(true)}
                          checked={showAsLabel}
                        />
                        <label className="form-check-label" htmlFor="dbYes">
                          Yes
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="showAsLabel"
                          id="showAsLabelNo"
                          value={showAsLabel}
                          onChange={(e) => setShowAsLabel(false)}
                          checked={!showAsLabel}
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

            <b><h6 className='header-devider my-1'>Parameter Layout</h6></b>
            {/* SECTION DEVIDER para width to control alignment*/}
            <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
              {/* //left columns */}
              <div className='col-sm-6'>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label pe-0">Parameter Width : </label>
                  <div className="col-sm-7 ps-0 align-content-center">
                    <InputSelect
                      id="parameterWidth"
                      name="parameterWidth"
                      options={parameterWidth}
                      placeholder="Select value..."
                      className="backcolorinput"
                      onChange={handleValueChange}
                      value={values?.parameterWidth}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label pe-0">Parameter Label Width : </label>
                  <div className="col-sm-7 ps-0 align-content-center">
                    <InputSelect
                      id="paraLabelWidth"
                      name="paraLabelWidth"
                      placeholder="Select value..."
                      options={parameterWidth}
                      className="backcolorinput"
                      onChange={handleValueChange}
                      value={values?.paraLabelWidth}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label pe-0">Parameter Control Width : </label>
                  <div className="col-sm-7 ps-0 align-content-center">
                    <InputSelect
                      id="paraControlWidth"
                      name="paraControlWidth"
                      placeholder="Select value..."
                      options={parameterWidth}
                      className="backcolorinput"
                      onChange={handleValueChange}
                      value={values?.paraControlWidth}
                    />
                  </div>
                </div>
              </div>
              {/* right columns */}
              <div className='col-sm-6'>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label pe-0">Parameter Alignment : </label>
                  <div className="col-sm-7 ps-0 align-content-center">
                    <InputSelect
                      id="parameterAlignment"
                      name="parameterAlignment"
                      placeholder="Select value..."
                      options={parameterAlignment}
                      className="backcolorinput"
                      onChange={handleValueChange}
                      value={values?.parameterAlignment}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label pe-0">Parameter Label Alignment : </label>
                  <div className="col-sm-7 ps-0 align-content-center">
                    <InputSelect
                      id="paraLabelAlignment"
                      name="paraLabelAlignment"
                      placeholder="Select value..."
                      options={parameterAlignment}
                      className="backcolorinput"
                      onChange={handleValueChange}
                      value={values?.paraLabelAlignment}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label pe-0">Parameter Control Alignment : </label>
                  <div className="col-sm-7 ps-0 align-content-center">
                    <InputSelect
                      id="paraControlAlignment"
                      name="paraControlAlignment"
                      placeholder="Select value..."
                      options={parameterAlignment}
                      className="backcolorinput"
                      onChange={handleValueChange}
                      value={values?.paraControlAlignment}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION DEVIDER mandatory and default*/}
            <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
              {/* //left columns */}
              <div className='col-sm-6'>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label pe-0 required-label">Mandatory : </label>
                  <div className="col-sm-7 ps-0 align-content-center">
                    <InputSelect
                      id="mandatory"
                      name="mandatory"
                      placeholder="Select "
                      options={[{ value: 1, label: "Yes" }, { value: 0, label: "No" }]}
                      className="backcolorinput"
                      onChange={handleValueChange}
                      value={values?.mandatory}
                    />
                  </div>
                </div>
              </div>
              {/* right columns */}
              {(values?.parameterType === "textBox" || values?.parameterType === "datePick") &&
                <div className='col-sm-6'>
                  <div className="form-group row" style={{ paddingBottom: "1px" }}>
                    <label className="col-sm-5 col-form-label fix-label pe-0 required-label">Default Value (If Left Empty) : </label>
                    <div className="col-sm-7 ps-0 align-content-center">
                      <InputField
                        type="text"
                        className="backcolorinput"
                        placeholder="Enter..."
                        name='defaultValueIfLeft'
                        id='defaultValueIfLeft'
                        onChange={handleValueChange}
                        value={values?.defaultValueIfLeft}
                      />
                    </div>
                  </div>
                </div>
              }
            </div>

            {/* SECTION DEVIDER default value to min length - text*/}
            {values?.parameterType === "textBox" &&
              <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                  <div className="form-group row" style={{ paddingBottom: "1px" }}>
                    <label className="col-sm-5 col-form-label pe-0">Default Value : </label>
                    <div className="col-sm-7 ps-0 align-content-center">
                      <InputField
                        type="text"
                        className="backcolorinput"
                        placeholder="Enter value..."
                        name='defaultValue'
                        id='defaultValue'
                        onChange={handleValueChange}
                        value={values?.defaultValue}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-5 col-form-label pe-0">Max Length  : </label>
                    <div className="col-sm-7 ps-0 align-content-center">
                      <InputField
                        type="text"
                        className="backcolorinput"
                        placeholder="Enter value..."
                        name='maxLength'
                        id='maxLength'
                        onChange={handleValueChange}
                        value={values?.maxLength}
                      />
                    </div>
                  </div>
                </div>
                {/* right columns */}
                <div className='col-sm-6'>
                  <div className="form-group row">
                    <label className="col-sm-5 col-form-label pe-0">Validation : </label>
                    <div className="col-sm-7 ps-0 align-content-center">
                      <InputSelect
                        id="validation"
                        name="validation"
                        placeholder="Select value..."
                        options={validationType}
                        className="backcolorinput"
                        onChange={handleValueChange}
                        value={values?.validation}
                      />
                    </div>
                  </div>
                  <div className="form-group row" style={{ paddingBottom: "1px" }}>
                    <label className="col-sm-5 col-form-label fix-label pe-0">Min Length : </label>
                    <div className="col-sm-7 ps-0 align-content-center">
                      <InputField
                        type="text"
                        className="backcolorinput"
                        placeholder="Enter value..."
                        name='minLength'
                        id='minLength'
                        onChange={handleValueChange}
                        value={values?.minLength}
                      />
                    </div>
                  </div>

                </div>
              </div>
            }

            {/* SECTION DEVIDER parent and mode query*/}
            {(values?.parameterType !== "textBox" && values?.parameterType !== "datePick") &&
              <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                  <div className="form-group row">
                    <label className="col-sm-5 col-form-label pe-0">Parent ID : </label>
                    <div className="col-sm-7 ps-0 align-content-center">
                      <Select
                        id='parentID'
                        name='parentID'
                        options={[{ value: 1, label: "No Parent" }, { value: 2, label: "State" }]}
                        isMulti
                        placeholder="Select value..."
                        className="backcolorinput react-select-multi"
                        value={values?.parentID}
                        onChange={(e) => setValues({ ...values, ['parentID']: e })}
                      // isSearchable={true}
                      />
                    </div>
                  </div>
                </div>
                {/* right columns */}
                <div className='col-sm-6'>
                  <div className="form-group row">
                    <label className="col-sm-5 col-form-label pe-0">Mode For Query : </label>
                    <div className="col-sm-7 ps-0 align-content-center">
                      <InputSelect
                        id="modeForQuery"
                        name="modeForQuery"
                        // placeholder="Select "
                        options={[{ value: 'query', label: "By Query" }, { value: 'multiRowOption', label: "By Multi Row Option" }]}
                        required
                        className="backcolorinput"
                        value={values?.modeForQuery}
                        onChange={handleValueChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            }

            {/* SECTION DEVIDER query */}
            {(values?.modeForQuery === "query" && values?.parameterType !== "textBox") &&
              <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                  <div className="form-group row">
                    <label className="col-sm-5 col-form-label fix-label pe-0 required-label">{values?.parameterType === "datePick" ? "Query For Default Date" : "Query"}: </label>
                    <div className="col-sm-7 ps-0 align-content-center">
                      <textarea
                        className="form-control backcolorinput"
                        placeholder="Enter value..."
                        name="query"
                        id='query'
                        rows="1"
                        onChange={handleValueChange}
                        value={values?.query}
                      ></textarea>
                    </div>

                  </div>
                </div>
                {/* right columns */}
                {/* <div className='col-sm-6'>
                </div> */}
              </div>
            }

            {/* SECTION DEVIDER for date limits*/}
            {values?.parameterType === "datePick" &&
              <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                  <div className="form-group row">
                    <label className="col-sm-5 col-form-label pe-0">Should Be Less Than Field : </label>
                    <div className="col-sm-7 ps-0 align-content-center">
                      <InputSelect
                        id="mandatory"
                        name="mandatory"
                        placeholder="Select "
                        options={[{ value: 1, label: "Yes" }, { value: 0, label: "No" }]}
                        className="backcolorinput"
                        onChange={handleValueChange}
                        value={values?.mandatory}
                      />
                    </div>
                  </div>
                  <div className="form-group row" style={{ paddingBottom: "1px" }}>
                    <label className="col-sm-5 col-form-label fix-label pe-0">Min Days Selection Before Current Date : </label>
                    <div className="col-sm-7 ps-0 align-content-center">
                      <InputField
                        type="text"
                        className="backcolorinput"
                        placeholder="Enter..."
                        name='defaultValueIfLeft'
                        id='defaultValueIfLeft'
                        onChange={handleValueChange}
                        value={values?.defaultValueIfLeft}
                      />
                    </div>
                  </div>
                </div>
                {/* right columns */}
                <div className='col-sm-6'>
                  <div className="form-group row">
                    <label className="col-sm-5 col-form-label pe-0">Should Be Greater Than Field : </label>
                    <div className="col-sm-7 ps-0 align-content-center">
                      <InputSelect
                        id="mandatory"
                        name="mandatory"
                        placeholder="Select "
                        options={[{ value: 1, label: "Yes" }, { value: 0, label: "No" }]}
                        className="backcolorinput"
                        onChange={handleValueChange}
                        value={values?.mandatory}
                      />
                    </div>
                  </div>
                  <div className="form-group row" style={{ paddingBottom: "1px" }}>
                    <label className="col-sm-5 col-form-label fix-label pe-0">Max Date Selection After Current Date : </label>
                    <div className="col-sm-7 ps-0 align-content-center">
                      <InputField
                        type="text"
                        className="backcolorinput"
                        placeholder="Enter..."
                        name='defaultValueIfLeft'
                        id='defaultValueIfLeft'
                        onChange={handleValueChange}
                        value={values?.defaultValueIfLeft}
                      />
                    </div>
                  </div>
                </div>

              </div>
            }

            {/* MAIN DEVIDER for list options */}
            {values?.modeForQuery === "multiRowOption" &&
              <>
                <b><h6 className='header-devider mt-2'> List Options</h6></b>
                <div className="mx-4">
                  <div className="row mb-1">
                    <div className="col-4 text-center">
                      <label className="form-label">Option Value</label>
                    </div>
                    <div className="col-4 text-center">
                      <label className="form-label">Option Text</label>
                    </div>
                    <div className='col-2'>
                      <button
                        className="btn btn-outline-secondary btn-sm me-1 p-1"
                        onClick={handleAddRow}
                      >
                        <FontAwesomeIcon icon={faAdd} className="dropdown-gear-icon" size='sm' />
                      </button>
                    </div>
                  </div>
                  {rows.map((row, index) => (
                    <div className="row mb-1" key={index}>
                      <div className="col-4">
                        <InputField
                          type="text"
                          className="backcolorinput"
                          placeholder="Option Value"
                          value={row.value}
                          onChange={(e) => handleInputChange(index, "value", e.target.value)}
                        />
                      </div>
                      <div className="col-4">
                        <InputField
                          type="text"
                          className="backcolorinput"
                          placeholder="Option Text"
                          value={row.text}
                          onChange={(e) => handleInputChange(index, "text", e.target.value)}
                        />
                      </div>
                      <div className="col-2 d-flex">

                        {rows.length > 0 && (
                          <button
                            className="btn btn-outline-secondary btn-sm me-1 p-1"
                            onClick={() => handleRemoveRow(index)}
                          >
                            <FontAwesomeIcon icon={faMinus} className="dropdown-gear-icon" size='sm' />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <b><h6 className='header-devider m-0' style={{ padding: "10px" }}></h6></b>
              </>
            }
            {/* SECTION DEVIDER for default values */}
            {(values?.parameterType !== "textBox" && values?.parameterType !== "datePick") &&
              <div className="">
                {/* HEADING TEXT */}
                <div className="row">
                  <div className='' style={{ width: "20%" }}>
                  </div>
                  <div className="col-4">
                    <label className="form-label">Option Value</label>
                  </div>
                  <div className="col-4">
                    <label className="form-label">Option Text</label>
                  </div>
                </div>
                {/* DEFAULT OPTION 1 */}
                <div className="row mb-1">
                  <label className="col-form-label fix-label pe-0 required-label" style={{ width: "20%" }}>Default Option : </label>
                  <div className="col-4">
                    <InputField
                      type="text"
                      name='defaultOptValue'
                      id='defaultOptValue'
                      className="backcolorinput"
                      placeholder="Enter value..."
                      value={values?.defaultOptValue}
                      onChange={handleValueChange}
                    />
                  </div>
                  <div className="col-4">
                    <InputField
                      type="text"
                      name="defaultOptText"
                      id='defaultOptText'
                      className="backcolorinput"
                      placeholder="Enter text..."
                      value={values?.defaultOptText}
                      onChange={handleValueChange}
                    />
                  </div>
                </div>
                {/* DEFAULT OPTION FOR FILTER */}
                <div className="row mb-1" >
                  <label className="col-form-label fix-label pe-0 required-label" style={{ width: "20%" }}>Default Option For Filter : </label>
                  <div className="col-4">
                    <InputField
                      type="text"
                      name='defOptFilterVal'
                      id='defOptFilterVal'
                      className="backcolorinput"
                      placeholder="Enter value..."
                      value={values?.defOptFilterVal}
                      onChange={handleValueChange}
                    />
                  </div>
                  <div className="col-4">
                    <InputField
                      type="text"
                      name='defOptFilterTxt'
                      id='defOptFilterTxt'
                      className="backcolorinput"
                      placeholder="Option Text"
                      value={values?.defOptFilterTxt}
                      onChange={handleValueChange}
                    />
                  </div>
                </div>
              </div>
            }

            {/* SECTION DEVIDER is multiple req*/}
            {(values?.parameterType !== "textBox" && values?.parameterType !== "datePick") &&
              <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                  <div className="form-group row">
                    <label className="col-sm-5 col-form-label pe-0">
                      Is Multiple Selection Required :
                    </label>
                    <div className="col-sm-7 ps-0 align-content-center">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="isMultiSelectReq"
                          id="isMultiSelectReqYes"
                          value={isMultiSelectReq}
                          onChange={(e) => setIsMultiSelectReq(true)}
                          checked={isMultiSelectReq}
                        />
                        <label className="form-check-label" htmlFor="dbYes">
                          Yes
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="isMultiSelectReq"
                          id="isMultiSelectReqNo"
                          value={isMultiSelectReq}
                          onChange={(e) => setIsMultiSelectReq(false)}
                          checked={!isMultiSelectReq}
                        />
                        <label className="form-check-label" htmlFor="dbNo">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* right columns */}
              </div>
            }

            {/* MAIN DEVIDER FOR JNDI */}
            <b><h6 className='header-devider m-0'>JNDI Details</h6></b>

            {/* SECTION DEVIDER jndi and time*/}
            <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
              {/* //left columns */}
              <div className='col-sm-6'>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label pe-0 required-label">JNDI For Saving Data : </label>
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
                  <label className="col-sm-5 col-form-label pe-0 required-label">Statement Time Out : </label>
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
          <b><h6 className='header-devider m-0' style={{ padding: "10px" }}></h6></b>
          {/* </div> */}
        </div>

      </div>
    </>
  )
}

export default ParameterMaster
