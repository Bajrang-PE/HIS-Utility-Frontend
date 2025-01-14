import React, { useState } from 'react'
import InputField from '../../commons/InputField'
import InputSelect from '../../commons/InputSelect'
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const TableDetails = (props) => {
    const { handleValueChange, handleRadioChange, radioValues, values } = props;

    const [rows, setRows] = useState([{ queryLabel: "", mainQuery: "", dataTableReq: "", tableDataDisplay: "" }]);

    // Handle input change
    const handleInputChange = (index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
    };

    // Add a new row
    const handleAddRow = () => {
        setRows([...rows, { serviceName: "", numberOfUse: "" }]);
    };

    // Remove a row
    const handleRemoveRow = (index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };

    return (
        <>
            <b><h6 className='header-devider m-0'>Table Heading Related Details</h6></b>
            {/* SECTION DEVIDER table heading*/}
            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Table Heading Required :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isTableHeadingReq"
                                    id="isTableHeadingReqYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isTableHeadingReq === "yes"}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isTableHeadingReq"
                                    id="isTableHeadingReqNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isTableHeadingReq === "no"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Heading Background Color : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type="color"
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='headingBgColor'
                                id="headingBgColor"
                                onChange={handleValueChange}
                                value={values?.headingBgColor}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Heading Display Style : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                className="backcolorinput "
                                placeholder="select value..."
                                name='headingDisplayStyle'
                                id="headingDisplayStyle"
                                options={[]}
                                onChange={handleValueChange}
                                value={values?.headingDisplayStyle}
                            />
                        </div>
                    </div>

                </div>

                {/* right columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Table Heading Alignment :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="tableHeadingAlignDType"
                                    name="tableHeadingAlign"
                                    value={'datatype'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.tableHeadingAlign === "datatype"}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    As per Data Type
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="tableHeadingAlignCenter"
                                    name="tableHeadingAlign"
                                    value={'center'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.tableHeadingAlign === "center"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    Center
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Heading Font Color : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type="color"
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='headingFontColor'
                                id="headingFontColor"
                                onChange={handleValueChange}
                                value={values?.headingFontColor}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is First Row Heading :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isFirstRowHeading"
                                    id="isFirstRowHeadingYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isFirstRowHeading === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isFirstRowHeading"
                                    id="isFirstRowHeadingNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isFirstRowHeading === 'no'}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <b><h6 className='header-devider m-0'>Table - Pagination and Records</h6></b>
            {/* SECTION DEVIDER pagination and records*/}
            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Data Table Required :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isDataTblReq"
                                    id="isDataTblReqYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isDataTblReq === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isDataTblReq"
                                    id="isDataTblReqNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isDataTblReq === 'no'}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Pagination Required :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isPaginationReq"
                                    id="isPaginationReqYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isPaginationReq === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isPaginationReq"
                                    id="isPaginationReqNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isPaginationReq === 'no'}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Records per Page : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type="text"
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='recordsPerPage'
                                id="recordsPerPage"
                                onChange={handleValueChange}
                                value={values?.recordsPerPage}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Heading Fixed :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isHeadingFixed"
                                    id="isHeadingFixedYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isHeadingFixed === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isHeadingFixed"
                                    id="isHeadingFixedNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isHeadingFixed === 'no'}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Last row Total :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isLastRowTotal"
                                    id="isLastRowTotalYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isLastRowTotal === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isLastRowTotal"
                                    id="isLastRowTotalNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isLastRowTotal === 'no'}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Index Number Required :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCacheData"
                                    id="isCacheDataYes"
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(true)}
                                // checked={isCacheData}
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
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(false)}
                                // checked={!isCacheData}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Search Required :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCacheData"
                                    id="isCacheDataYes"
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(true)}
                                // checked={isCacheData}
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
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(false)}
                                // checked={!isCacheData}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Page per Block : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type="text"
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='mobilebgColor'
                                id="mobilebgColor"
                            // onChange={handleValueChange}
                            // value={values?.mobilebgColor}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Data Scroll Height : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type="text"
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='mobilebgColor'
                                id="mobilebgColor"
                            // onChange={handleValueChange}
                            // value={values?.mobilebgColor}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Card view(for Mobile) :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCacheData"
                                    id="isCacheDataYes"
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(true)}
                                // checked={isCacheData}
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
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(false)}
                                // checked={!isCacheData}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <b><h6 className='header-devider m-0'>Table - Parent and Widgets</h6></b>
            {/* SECTION DEVIDER parents and widgets*/}
            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Parent Widget : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='mobilebgColor'
                                id="mobilebgColor"
                                options={[]}
                            // onChange={handleValueChange}
                            // value={values?.mobilebgColor}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Column Nos. to Display : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='mobilebgColor'
                                id="mobilebgColor"
                            // onChange={handleValueChange}
                            // value={values?.mobilebgColor}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Left Column Nos. to be fixed : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='mobilebgColor'
                                id="mobilebgColor"
                            // onChange={handleValueChange}
                            // value={values?.mobilebgColor}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Linked Widget : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <Select
                                id='parentID'
                                name='parentID'
                                options={[{ value: 1, label: "No Parent" }, { value: 2, label: "State" }]}
                                isMulti
                                placeholder="Select value..."
                                className="backcolorinput react-select-multi"
                            // value={values?.parentID}
                            // onChange={(e) => setValues({ ...values, ['parentID']: e })}
                            // isSearchable={true}
                            />
                        </div>
                    </div>
                </div>
                {/* right columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Show Parent Heading in Child :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCacheData"
                                    id="isCacheDataYes"
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(true)}
                                // checked={isCacheData}
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
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(false)}
                                // checked={!isCacheData}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Show Parent Parameter details in Child :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCacheData"
                                    id="isCacheDataYes"
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(true)}
                                // checked={isCacheData}
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
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(false)}
                                // checked={!isCacheData}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Right Column Nos. to be fixed : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='mobilebgColor'
                                id="mobilebgColor"
                            // onChange={handleValueChange}
                            // value={values?.mobilebgColor}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Action Button Required : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='mobilebgColor'
                                id="mobilebgColor"
                                options={[]}
                            // onChange={handleValueChange}
                            // value={values?.mobilebgColor}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <b><h6 className='header-devider m-0'>Table - PDF</h6></b>
            {/* SECTION DEVIDER parents and widgets*/}
            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 required-label">
                            Print PDF In :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeQuery"
                                    name="selectedMode"
                                // value={selectedMode}
                                // onChange={(e) => setSelectedMode("query")}
                                // checked={selectedMode === "query"}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Landscape
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeProcedure"
                                    name="selectedMode"
                                // value={selectedMode}
                                // onChange={(e) => setSelectedMode("procedure")}
                                // checked={selectedMode === "procedure"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    Potrait
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 required-label">
                            PDF Theme :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeQuery"
                                    name="selectedMode"
                                // value={selectedMode}
                                // onChange={(e) => setSelectedMode("query")}
                                // checked={selectedMode === "query"}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Grid
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeProcedure"
                                    name="selectedMode"
                                // value={selectedMode}
                                // onChange={(e) => setSelectedMode("procedure")}
                                // checked={selectedMode === "procedure"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    Striped
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeProcedure"
                                    name="selectedMode"
                                // value={selectedMode}
                                // onChange={(e) => setSelectedMode("procedure")}
                                // checked={selectedMode === "procedure"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    Plain
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">PDF Table Header Bar Color : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='color'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='mobilebgColor'
                                id="mobilebgColor"
                            // onChange={handleValueChange}
                            // value={values?.mobilebgColor}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Show Filter Details In PDF/Print :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCacheData"
                                    id="isCacheDataYes"
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(true)}
                                // checked={isCacheData}
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
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(false)}
                                // checked={!isCacheData}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Report Print Date Required :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCacheData"
                                    id="isCacheDataYes"
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(true)}
                                // checked={isCacheData}
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
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(false)}
                                // checked={!isCacheData}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Table Border Required :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCacheData"
                                    id="isCacheDataYes"
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(true)}
                                // checked={isCacheData}
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
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(false)}
                                // checked={!isCacheData}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Positive Widget :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCacheData"
                                    id="isCacheDataYes"
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(true)}
                                // checked={isCacheData}
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
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(false)}
                                // checked={!isCacheData}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Popup Based On Data Click Required :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCacheData"
                                    id="isCacheDataYes"
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(true)}
                                // checked={isCacheData}
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
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(false)}
                                // checked={!isCacheData}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">PDF Table Font Size : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='mobilebgColor'
                                id="mobilebgColor"
                            // onChange={handleValueChange}
                            // value={values?.mobilebgColor}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is PDF Header Required in all pages :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCacheData"
                                    id="isCacheDataYes"
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(true)}
                                // checked={isCacheData}
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
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(false)}
                                // checked={!isCacheData}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">PDF Table Heading Text Font Color : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='color'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='mobilebgColor'
                                id="mobilebgColor"
                            // onChange={handleValueChange}
                            // value={values?.mobilebgColor}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Report By jsPDF Plugin :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCacheData"
                                    id="isCacheDataYes"
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(true)}
                                // checked={isCacheData}
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
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(false)}
                                // checked={!isCacheData}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Global Header Required :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCacheData"
                                    id="isCacheDataYes"
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(true)}
                                // checked={isCacheData}
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
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(false)}
                                // checked={!isCacheData}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Group Column No.(commaseparated) : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='mobilebgColor'
                                id="mobilebgColor"
                            // onChange={handleValueChange}
                            // value={values?.mobilebgColor}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Direct Download Button Required :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCacheData"
                                    id="isCacheDataYes"
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(true)}
                                // checked={isCacheData}
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
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(false)}
                                // checked={!isCacheData}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Tree Child Required :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCacheData"
                                    id="isCacheDataYes"
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(true)}
                                // checked={isCacheData}
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
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(false)}
                                // checked={!isCacheData}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <b><h6 className='header-devider m-0'>Table - Popup Details</h6></b> */}
            <b>Popup Details:-</b><br />
            {/* SECTION DEVIDER parents and widgets*/}
            <div className="table-responsive row p-1">
                <table className="table table-borderless text-center mb-0">
                    <thead className="text-white">
                        <tr className='header-devider m-0'>
                            <th style={{ width: "15%" }}>Mode No.</th>
                            <th style={{ width: "25%" }}>Drill Down Type</th>
                            <th style={{ width: "25%" }}>Widget</th>
                            <th style={{ width: "15%" }}>Title Message</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <InputField
                                    type="text"
                                    className="backcolorinput"
                                    name='serviceRefName'
                                    id='serviceRefName'
                                // value={serverDetails?.serviceRefName}
                                // onChange={handleServerChange}
                                />
                            </td>
                            <td>
                                <InputSelect
                                    // type="text"
                                    className="backcolorinput"
                                    name='serverUrl'
                                    id='serverUrl'
                                    options={[]}
                                // value={serverDetails?.serverUrl}
                                // onChange={handleServerChange}
                                />
                            </td>
                            <td>
                                <InputSelect
                                    className="backcolorinput"
                                    options={[]}
                                    id="defaultMethod"
                                    name="defaultMethod"
                                // value={serverDetails?.defaultMethod}
                                // onChange={handleServerChange}
                                >
                                </InputSelect>
                            </td>
                            <td>
                                <InputField
                                    type="text"
                                    className="backcolorinput"
                                    name="serviceUserName"
                                    id='serviceUserName'
                                // value={serverDetails?.serviceUserName}
                                // onChange={handleServerChange}
                                />
                            </td>
                            <td className='px-0 action-buttons'>
                                <button className='btn btn-sm me-1 py-0 px-0' style={{ background: "#34495e", color: "white" }} onClick={handleAddRow}><FontAwesomeIcon icon={faAdd} className="dropdown-gear-icon" size='sm' />Add</button>
                            </td>
                        </tr>
                        {rows.map((row, index) => (
                            <tr className='table-row-form text-start' key={index}>
                                <td>{"localhost"}</td>
                                <td>{"http://localhost:8080"}</td>
                                <td>{"GET"}</td>
                                <td>{"admin"}</td>
                                <td className=''>
                                    <div className='text-center'>
                                        <button
                                            className="btn btn-warning btn-sm me-1 py-0 px-1"
                                            onClick={() => alert("Edit feature coming soon!")}
                                        >
                                            <FontAwesomeIcon icon={faEdit} className="dropdown-gear-icon" size='xs' />
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm ms-1 py-0 px-1"
                                            onClick={() => handleRemoveRow(index)}
                                        >
                                            <FontAwesomeIcon icon={faTrash} className="dropdown-gear-icon" size='xs' />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <b><h6 className='header-devider m-0'>Table - Tree Child</h6></b>
            {/* SECTION DEVIDER parents and widgets*/}
            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Tree Child Data By :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeQuery"
                                    name="selectedMode"
                                // value={selectedMode}
                                // onChange={(e) => setSelectedMode("query")}
                                // checked={selectedMode === "query"}
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
                                // value={selectedMode}
                                // onChange={(e) => setSelectedMode("procedure")}
                                // checked={selectedMode === "procedure"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    By Procedure
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Datatable Required :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCacheData"
                                    id="isCacheDataYes"
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(true)}
                                // checked={isCacheData}
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
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(false)}
                                // checked={!isCacheData}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Pagination Required :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCacheData"
                                    id="isCacheDataYes"
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(true)}
                                // checked={isCacheData}
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
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(false)}
                                // checked={!isCacheData}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Query : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <textarea
                                className="form-control backcolorinput"
                                placeholder="Enter value..."
                                name="query"
                                id='query'
                                rows="2"
                            // onChange={handleValueChange}
                            // value={values?.query}
                            ></textarea>
                        </div>
                    </div>
                </div>
                {/* //right columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Data Display :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeQuery"
                                    name="selectedMode"
                                // value={selectedMode}
                                // onChange={(e) => setSelectedMode("query")}
                                // checked={selectedMode === "query"}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Horizontal
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeProcedure"
                                    name="selectedMode"
                                // value={selectedMode}
                                // onChange={(e) => setSelectedMode("procedure")}
                                // checked={selectedMode === "procedure"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    Vertical
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Search Required :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCacheData"
                                    id="isCacheDataYes"
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(true)}
                                // checked={isCacheData}
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
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(false)}
                                // checked={!isCacheData}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Record Per Page : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='mobilebgColor'
                                id="mobilebgColor"
                            // onChange={handleValueChange}
                            // value={values?.mobilebgColor}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TableDetails
