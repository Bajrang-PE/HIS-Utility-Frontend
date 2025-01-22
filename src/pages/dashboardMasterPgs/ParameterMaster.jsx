import React, { useContext, useEffect, useState } from 'react'
import NavbarHeader from '../../components/headers/NavbarHeader'
import InputSelect from '../../components/commons/InputSelect'
import InputField from '../../components/commons/InputField'
import Select from 'react-select'
import { faAdd, faDatabase, faFile, faMinus, faRefresh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GlobalButtonGroup from '../../components/commons/GlobalButtonGroup'
import { itemForDashboard, parameterAlignment, parameterType, parameterWidth, timeOutOptions, validationType } from '../../localData/DropDownData'
import { HISContext } from '../../contextApi/HISContext'
import GlobalDataTable from '../../components/commons/GlobalDataTable'
import { ToastAlert } from '../../utils/commonFunction'
import DataServiceTable from '../../components/webServiceMasters/dataService/DataServiceTable'
import { fetchPostData } from '../../utils/ApiHooks'

const ParameterMaster = () => {

  const { parameterData, getAllParameterData, selectedOption, setSelectedOption, setShowDataTable, dashboardForDt, getDashboardForDrpData, actionMode, setActionMode, parameterDrpData, getAllServiceData, dataServiceData } = useContext(HISContext);

  const [rows, setRows] = useState([{ optionValue: "", optionText: "" }]);
  const [showAsLabel, setShowAsLabel] = useState(false);
  const [isMultiSelectReq, setIsMultiSelectReq] = useState('No');
  const [singleData, setSingleData] = useState([]);
  const [values, setValues] = useState({
    "parameterFor": "", "parameterType": "1", "parameterInternal": "", "parameterDisplay": "", "placeHolder": "", "parameterWidth": "", "parameterAlignment": "", "paraLabelWidth": "", "paraLabelAlignment": "", "paraControlWidth": "", "paraControlAlignment": "", "mandatory": "", "defaultValueIfLeft": "", "defaultValue": "", "validation": "", "maxLength": "", "minLength": "", "parentID": [], "modeForQuery": 'query', "query": "", "defaultOptValue": "", "defaultOptText": "", "defOptFilterVal": "", "defOptFilterTxt": "", "jndiSavingData": "1", "stmtTimeOut": "", "id": "", "shouldBeLess": "", "shouldBeGreater": "", "minDaysBefore": "", "maxDaysAfter": ""
  })
  const [searchInput, setSearchInput] = useState('');
  const [showParamsTable, setShowParamsTable] = useState(false);
  const [showWebServiceTable, setShowWebServiceTable] = useState(false);

  useEffect(() => {
    if (values?.parameterFor) { getAllParameterData(values?.parameterFor); }
  }, [values?.parameterFor])

  useEffect(() => {
    if (dashboardForDt?.length === 0) { getDashboardForDrpData(); }
    if (dataServiceData?.length === 0) { getAllServiceData(); }
  }, [])

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
    setRows([...rows, { optionValue: "", optionText: "" }]);
  };

  // Remove a row
  const handleRemoveRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  const handleUpdateData = () => {
    if (selectedOption?.length > 0) {
      const selectedRow = parameterData?.filter(dt => dt?.id === selectedOption[0]?.id)
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

  const handleDeleteParams = (id) => {
    if (selectedOption?.length > 0) {
      const val = { "id": id };
      fetchPostData("/hisutils/parameterDelete", val).then((data) => {
        if (data) {
          ToastAlert('Deleted Successfully!', 'success');
          // setLoading(false);
          setSelectedOption([]);
        } else {
          // setLoading(false);
          ToastAlert('Deletion Failed!', 'error');
        }
      })
    } else {
      ToastAlert('Please select a record', 'warning');
    }
  }

  const saveParametersData = () => {
    const {
      parameterFor, parameterType, parameterInternal, parameterDisplay, placeHolder, parameterWidth, parameterAlignment, paraLabelWidth, paraLabelAlignment, paraControlWidth, paraControlAlignment, mandatory, defaultValueIfLeft, defaultValue, validation, maxLength, minLength, parentID, modeForQuery, query, defaultOptValue, defaultOptText, defOptFilterVal, defOptFilterTxt, jndiSavingData, stmtTimeOut,
    } = values;

    const val = {
      dashboardFor: parameterFor, masterName: "ParameterMst", entryUserId: 101, keyName: parameterDisplay,
      jndiIdForGettingData: jndiSavingData, statementTimeout: stmtTimeOut,
      jsonData: {
        JNDIid: jndiSavingData, parentId: parentID, isMandatory: mandatory, modeForQuery: modeForQuery,
        defaultOption: {
          optionText: defaultOptText,
          optionValue: defaultOptValue,
        },
        parameterName: parameterInternal, parameterType: parameterType, labelAlignment: paraLabelAlignment, parameterQuery: query, parentAlignment: parameterAlignment, controlAlignment: paraControlAlignment, statementTimeOut: stmtTimeOut, parameterLabelWidth: paraLabelWidth, parameterDisplayName: parameterDisplay, parameterParentWidth: parameterWidth, showAsLableIfOneData: showAsLabel, parameterControlWidth: paraControlWidth,
        defaultOptionForFilter: {
          optionText: defOptFilterTxt,
          optionValue: defOptFilterVal,
        },
        maxDaysAfterCurrentDate: "0", placeHolder: placeHolder, defaultValueIfEmpty: defaultValueIfLeft,
        defaultValue: defaultValue, textBoxValidation: validation, textboxMaxlength: maxLength,
        textboxMinlength: minLength, isMultipleSelectionRequired: isMultiSelectReq
      }
    };

    fetchPostData("/hisutils/parametersave", val).then((data) => {
      if (data) {
        ToastAlert("Data Saved Successfully", "success");
        getAllParameterData(values?.parameterFor)
        reset();
      } else {
        ToastAlert("Internal Error!", "error");
      }
    });
  };

  const updateParametersData = () => {
    const {
      parameterFor, parameterType, parameterInternal, parameterDisplay, placeHolder, parameterWidth, parameterAlignment, paraLabelWidth, paraLabelAlignment, paraControlWidth, paraControlAlignment, mandatory, defaultValueIfLeft, defaultValue, validation, maxLength, minLength, parentID, modeForQuery, query, defaultOptValue, defaultOptText, defOptFilterVal, defOptFilterTxt, jndiSavingData, stmtTimeOut, id
    } = values;

    const val = {
      id: id, dashboardFor: parameterFor, masterName: "ParameterMst", entryUserId: 101, keyName: parameterDisplay, jndiIdForGettingData: jndiSavingData, statementTimeout: stmtTimeOut,
      jsonData: {
        JNDIid: jndiSavingData, parentId: parentID, isMandatory: mandatory, modeForQuery: modeForQuery,
        defaultOption: {
          optionText: defaultOptText,
          optionValue: defaultOptValue,
        },
        parameterName: parameterInternal, parameterType: parameterType, labelAlignment: paraLabelAlignment, parameterQuery: query, parentAlignment: parameterAlignment, controlAlignment: paraControlAlignment, statementTimeOut: stmtTimeOut, parameterLabelWidth: paraLabelWidth, parameterDisplayName: parameterDisplay, parameterParentWidth: parameterWidth, showAsLableIfOneData: showAsLabel, parameterControlWidth: paraControlWidth,
        defaultOptionForFilter: {
          optionText: defOptFilterTxt,
          optionValue: defOptFilterVal,
        },
        maxDaysAfterCurrentDate: "0", placeHolder: placeHolder, defaultValueIfEmpty: defaultValueIfLeft,
        defaultValue: defaultValue, textBoxValidation: validation, textboxMaxlength: maxLength,
        textboxMinlength: minLength, isMultipleSelectionRequired: isMultiSelectReq
      }
    };

    fetchPostData("/hisutils/parameterUpdate", val).then((data) => {
      if (data) {
        ToastAlert("Data Updated Successfully", "success");
        getAllParameterData(values?.parameterFor)
        reset();
      } else {
        ToastAlert("Internal Error!", "error");
      }
    });
  };


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
      const jsonData = singleData[0]?.jsonData || {};
      setIsMultiSelectReq(jsonData?.isMultipleSelectionRequired || "No")
      setValues({
        ...values,
        id: singleData[0]?.id,
        parameterFor: singleData[0]?.dashboardFor || "",
        parameterType: jsonData.parameterType || "",
        parameterInternal: jsonData.parameterName || "",
        parameterDisplay: jsonData.parameterDisplayName || "",
        placeHolder: jsonData.placeHolder || "",

        parameterWidth: jsonData.parameterParentWidth || "",
        parameterAlignment: returnAlignment(jsonData.parentAlignment) || "",
        paraLabelWidth: jsonData.parameterLabelWidth || "",
        paraLabelAlignment: returnAlignment(jsonData.labelAlignment) || "",
        paraControlWidth: jsonData.parameterControlWidth || "",
        paraControlAlignment: returnAlignment(jsonData.controlAlignment) || "",

        mandatory: jsonData.isMandatory || "",
        defaultValueIfLeft: jsonData.defaultValueIfEmpty || "",
        defaultValue: jsonData.defaultValue || "",
        validation: jsonData.textBoxValidation || "",
        maxLength: jsonData.textboxMaxlength || "",
        minLength: jsonData.textboxMinlength || "",

        parentID: jsonData.parentId || [],
        modeForQuery: jsonData.modeForQuery || "",
        query: jsonData.parameterQuery || "",
        defaultOptValue: jsonData.defaultOption?.optionText || "",
        defaultOptText: jsonData.defaultOption?.optionValue || "",
        defOptFilterVal: jsonData.defaultOptionForFilter?.optionValue || "",
        defOptFilterTxt: jsonData.defaultOptionForFilter?.optionText || "",
        jndiSavingData: singleData[0]?.jndiIdForGettingData || "",
        stmtTimeOut: singleData[0]?.statementTimeout || "",
      });
      ToastAlert("Data Fetched", "success");
    }
  }, [singleData]);


  const onOpenDataTable = () => {
    setShowDataTable(true)
    setShowParamsTable(true)
  }

  const onOpenWebService = () => {
    setShowDataTable(true);
    setShowWebServiceTable(true);
  }

  const onTableClose = () => {
    setShowParamsTable(false);
    setShowWebServiceTable(false);
    setSearchInput('');
    setSelectedOption([]);
  }

  const reset = () => {
    setValues({ "parameterFor": "", "parameterType": "combo", "parameterInternal": "", "parameterDisplay": "", "placeHolder": "", "parameterWidth": "", "parameterAlignment": "", "paraLabelWidth": "", "paraLabelAlignment": "", "paraControlWidth": "", "paraControlAlignment": "", "mandatory": "", "defaultValueIfLeft": "", "defaultValue": "", "validation": "", "maxLength": "", "minLength": "", "parentID": [], "modeForQuery": 'query', "query": "", "defaultOptValue": "", "defaultOptText": "", "defOptFilterVal": "", "defOptFilterTxt": "", "jndiSavingData": "", "stmtTimeOut": "","id": "", "shouldBeLess": "", "shouldBeGreater": "", "minDaysBefore": "", "maxDaysAfter": "" })
    setActionMode('home');
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
      name: 'ID',
      selector: row => row.id,
      sortable: true,
      width: "8%"
    },
    {
      name: 'Parameter Name',
      selector: row => row?.jsonData?.parameterName || "---",
      sortable: true,
    },
    {
      name: 'Display Name',
      selector: row => row?.jsonData?.parameterDisplayName || "---",
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
        {values?.parameterFor &&
          <GlobalButtonGroup isSave={true} isOpen={true} isReset={true} isParams={false} isWeb={true} onSave={actionMode === 'edit' ? updateParametersData : saveParametersData} onOpen={onOpenDataTable} onReset={null} onParams={null} onWeb={onOpenWebService} />
        }
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
                      options={dashboardForDt}
                      className="backcolorinput"
                      value={values?.parameterFor}
                      onChange={handleValueChange}
                      disabled={actionMode === 'edit' ? true : false}
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
                      disabled={actionMode === 'edit' ? true : false}
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
                {values?.parameterType === '1' &&
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
                      options={[{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }]}
                      className="backcolorinput"
                      onChange={handleValueChange}
                      value={values?.mandatory}
                    />
                  </div>
                </div>
              </div>
              {/* right columns */}
              {(values?.parameterType === '2' || values?.parameterType === '3') &&
                <div className='col-sm-6'>
                  <div className="form-group row" style={{ paddingBottom: "1px" }}>
                    <label className="col-sm-5 col-form-label fix-label pe-0">Default Value (If Left Empty) : </label>
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
            {values?.parameterType === '2' &&
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
            {(values?.parameterType !== '2' && values?.parameterType !== '3') &&
              <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                  <div className="form-group row">
                    <label className="col-sm-5 col-form-label pe-0">Parent ID : </label>
                    <div className="col-sm-7 ps-0 align-content-center">
                      <Select
                        id='parentID'
                        name='parentID'
                        options={parameterDrpData}
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
            {(values?.modeForQuery === "query" && values?.parameterType !== '2') &&
              <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                  <div className="form-group row">
                    <label className="col-sm-5 col-form-label fix-label pe-0">{values?.parameterType === "3" ? "Query For Default Date" : "Query"}: </label>
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
            {values?.parameterType === '3' &&
              <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                  <div className="form-group row">
                    <label className="col-sm-5 col-form-label pe-0">Should Be Less Than Field : </label>
                    <div className="col-sm-7 ps-0 align-content-center">
                      <InputSelect
                        id="shouldBeLess"
                        name="shouldBeLess"
                        placeholder="Select "
                        options={[{ value: 1, label: "Yes" }, { value: 0, label: "No" }]}
                        className="backcolorinput"
                        onChange={handleValueChange}
                        value={values?.shouldBeLess}
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
                        name='minDaysBefore'
                        id='minDaysBefore'
                        onChange={handleValueChange}
                        value={values?.minDaysBefore}
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
                        id="shouldBeGreater"
                        name="shouldBeGreater"
                        placeholder="Select "
                        options={[{ value: 1, label: "Yes" }, { value: 0, label: "No" }]}
                        className="backcolorinput"
                        onChange={handleValueChange}
                        value={values?.shouldBeGreater}
                      />
                    </div>
                  </div>
                  <div className="form-group row" style={{ paddingBottom: "1px" }}>
                    <label className="col-sm-5 col-form-label fix-label pe-0">Max Days Selection After Current Date : </label>
                    <div className="col-sm-7 ps-0 align-content-center">
                      <InputField
                        type="text"
                        className="backcolorinput"
                        placeholder="Enter..."
                        name='maxDaysAfter'
                        id='maxDaysAfter'
                        onChange={handleValueChange}
                        value={values?.maxDaysAfter}
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
                          value={row.optionValue}
                          onChange={(e) => handleInputChange(index, "optionValue", e.target.value)}
                        />
                      </div>
                      <div className="col-4">
                        <InputField
                          type="text"
                          className="backcolorinput"
                          placeholder="Option Text"
                          value={row.optionText}
                          onChange={(e) => handleInputChange(index, "optionText", e.target.value)}
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
            {(values?.parameterType !== '2' && values?.parameterType !== '3') &&
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
            {(values?.parameterType !== '2' && values?.parameterType !== '3') &&
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
                          value={'Yes'}
                          onChange={(e) => setIsMultiSelectReq('Yes')}
                          checked={isMultiSelectReq === 'Yes'}
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
                          value={'No'}
                          onChange={(e) => setIsMultiSelectReq("No")}
                          checked={isMultiSelectReq === 'No'}
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
                  <label className="col-sm-5 col-form-label pe-0">JNDI For Saving Data : </label>
                  <div className="col-sm-7 ps-0 align-content-center">
                    <InputSelect
                      id="jndiSavingData"
                      name="jndiSavingData"
                      // placeholder="Select"
                      options={[{ value: '1', label: "CDWH" }, { value: '2', label: "CDWH" }]}
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
          <b><h6 className='header-devider m-0' style={{ padding: "10px" }}></h6></b>
          {/* </div> */}
        </div>

        {showParamsTable &&
          <GlobalDataTable title={"Parameter List"} column={column} data={parameterData} onModify={handleUpdateData} onDelete={handleDeleteParams} setSearchInput={setSearchInput} onClose={onTableClose} isShowBtn={true} />
        }
        {showWebServiceTable &&
          <DataServiceTable data={dataServiceData} onModify={null} onDelete={null} setSearchInput={setSearchInput} onClose={onTableClose} isShowBtn={false} />
        }

      </div>
    </>
  )
}

export default ParameterMaster
