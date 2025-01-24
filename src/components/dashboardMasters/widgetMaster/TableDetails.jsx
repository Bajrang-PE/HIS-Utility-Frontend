import React, { useState } from 'react'
import InputField from '../../commons/InputField'
import InputSelect from '../../commons/InputSelect'
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const TableDetails = (props) => {
    const { handleValueChange, handleRadioChange, radioValues, values, setValues, parentWidget } = props;

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
                                    value={'Yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isTableHeadingReq === "Yes"}
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
                                    value={'No'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isTableHeadingReq === "No"}
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
                                    value={'Yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isFirstRowHeading === 'Yes'}
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
                                    value={'No'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isFirstRowHeading === 'No'}
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
                                    value={'Yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isDataTblReq === 'Yes'}
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
                                    value={'No'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isDataTblReq === 'No'}
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
                                    value={'Yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isPaginationReq === 'Yes'}
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
                                    value={'No'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isPaginationReq === 'No'}
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
                                    value={'Yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isHeadingFixed === 'Yes'}
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
                                    value={'No'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isHeadingFixed === 'No'}
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
                                    value={'Yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isLastRowTotal === 'Yes'}
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
                                    value={'No'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isLastRowTotal === 'No'}
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
                                    name="isIndexNumReq"
                                    id="isIndexNumReqYes"
                                    value={'Yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isIndexNumReq === 'Yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isIndexNumReq"
                                    id="isIndexNumReqNo"
                                    value={'No'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isIndexNumReq === 'No'}
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
                                    name="isSearchReq"
                                    id="isSearchReqYes"
                                    value={'Yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isSearchReq === 'Yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isSearchReq"
                                    id="isSearchReqNo"
                                    value={'No'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isSearchReq === 'No'}
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
                                name='pagePerBlock'
                                id="pagePerBlock"
                                onChange={handleValueChange}
                                value={values?.pagePerBlock}
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
                                name='DataScrollHeight'
                                id="DataScrollHeight"
                                onChange={handleValueChange}
                                value={values?.DataScrollHeight}
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
                                    name="isCardViewMobile"
                                    id="isCardViewMobileYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isCardViewMobile === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCardViewMobile"
                                    id="isCardViewMobileNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isCardViewMobile === 'no'}
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
                                name='parentWidget'
                                id="parentWidget"
                                options={parentWidget}
                                onChange={handleValueChange}
                                value={values?.parentWidget}
                            />
                        </div>
                    </div>
                    {values?.parentWidget &&
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label pe-0">
                                Is Hide Parent :
                            </label>
                            <div className="col-sm-7 ps-0 align-content-center">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="isHideParent"
                                        id="isHideParentYes"
                                        value={'Yes'}
                                        onChange={handleRadioChange}
                                        checked={radioValues?.isHideParent === 'Yes'}
                                    />
                                    <label className="form-check-label" htmlFor="dbYes">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="isHideParent"
                                        id="isHideParentNo"
                                        value={'No'}
                                        onChange={handleRadioChange}
                                        checked={radioValues?.isHideParent === 'No'}
                                    />
                                    <label className="form-check-label" htmlFor="dbNo">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Column Nos. to Display : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='columnNoToDisplay'
                                id="columnNoToDisplay"
                                onChange={handleValueChange}
                                value={values?.columnNoToDisplay}
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
                                name='leftClmNoToFixed'
                                id="leftClmNoToFixed"
                                onChange={handleValueChange}
                                value={values?.leftClmNoToFixed}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Linked Widget : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <Select
                                id='linkedWidget'
                                name='linkedWidget'
                                options={[{ value: 1, label: "No Parent" }, { value: 2, label: "State" }]}
                                isMulti
                                placeholder="Select value..."
                                className="backcolorinput react-select-multi"
                                value={values?.linkedWidget}
                                onChange={(e) => setValues({ ...values, ['linkedWidget']: e })}
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
                                    name="isShowPrntHeadChild"
                                    id="isShowPrntHeadChildYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isShowPrntHeadChild === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isShowPrntHeadChild"
                                    id="isShowPrntHeadChildNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isShowPrntHeadChild === 'no'}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    {values?.parentWidget &&
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label pe-0">
                                Is Row Clickable :
                            </label>
                            <div className="col-sm-7 ps-0 align-content-center">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="isRowClickable"
                                        id="isRowClickableYes"
                                        value={'Yes'}
                                        onChange={handleRadioChange}
                                        checked={radioValues?.isRowClickable === 'Yes'}
                                    />
                                    <label className="form-check-label" htmlFor="dbYes">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="isRowClickable"
                                        id="isRowClickableNo"
                                        value={'No'}
                                        onChange={handleRadioChange}
                                        checked={radioValues?.isRowClickable === 'No'}
                                    />
                                    <label className="form-check-label" htmlFor="dbNo">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Show Parent Parameter details in Child :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isShowPrntParamsChild"
                                    id="isShowPrntParamsChildYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isShowPrntParamsChild === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isShowPrntParamsChild"
                                    id="isShowPrntParamsChildNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isShowPrntParamsChild === 'no'}
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
                                name='rightClmNoToFixed'
                                id="rightClmNoToFixed"
                                onChange={handleValueChange}
                                value={values?.rightClmNoToFixed}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Action Button Required : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='actionBtnReq'
                                id="actionBtnReq"
                                options={[]}
                                onChange={handleValueChange}
                                value={values?.actionBtnReq}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <b><h6 className='header-devider mt-2'>Table - PDF</h6></b>
            {/* SECTION DEVIDER pdf*/}
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
                                    name="printPdfIn"
                                    id="printPdfInLandscape"
                                    value={'landscape'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.printPdfIn === 'landscape'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Landscape
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="printPdfIn"
                                    id="printPdfInPotrait"
                                    value={'potrait'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.printPdfIn === 'potrait'}
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
                                    name="pdfTheme"
                                    id="pdfThemeGrid"
                                    value={'grid'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.pdfTheme === 'grid'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Grid
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="pdfTheme"
                                    id="pdfThemeStriped"
                                    value={'striped'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.pdfTheme === 'striped'}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    Striped
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="pdfTheme"
                                    id="pdfThemePlain"
                                    value={'plain'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.pdfTheme === 'plain'}
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
                                name='pdfTableHeadBarClr'
                                id="pdfTableHeadBarClr"
                                onChange={handleValueChange}
                                value={values?.pdfTableHeadBarClr}
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
                                    name="showFilterDtlsInPdf"
                                    id="showFilterDtlsInPdfYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.showFilterDtlsInPdf === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="showFilterDtlsInPdf"
                                    id="showFilterDtlsInPdfNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.showFilterDtlsInPdf === 'no'}
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
                                    name="isReportPrintDtReq"
                                    id="isReportPrintDtReqYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isReportPrintDtReq === 'yes'}

                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isReportPrintDtReq"
                                    id="isReportPrintDtReqNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isReportPrintDtReq === 'no'}
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
                                    name="isTableBorderReq"
                                    id="isTableBorderReqYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isTableBorderReq === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isTableBorderReq"
                                    id="isTableBorderReqNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isTableBorderReq === 'no'}
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
                                    name="isPositiveWidget"
                                    id="isPositiveWidgetYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isPositiveWidget === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isPositiveWidget"
                                    id="isPositiveWidgetNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isPositiveWidget === 'no'}
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
                                    name="isPopupBasedReq"
                                    id="isPopupBasedReqYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isPopupBasedReq === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isPopupBasedReq"
                                    id="isPopupBasedReqNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isPopupBasedReq === 'no'}
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
                                name='pdfTableFontSize'
                                id="pdfTableFontSize"
                                onChange={handleValueChange}
                                value={values?.pdfTableFontSize}
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
                                    name="isPdfHeadReqAllPgs"
                                    id="isPdfHeadReqAllPgsYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isPdfHeadReqAllPgs === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isPdfHeadReqAllPgs"
                                    id="isPdfHeadReqAllPgsNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isPdfHeadReqAllPgs === 'no'}
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
                                name='pdfTableHeadTxtFontClr'
                                id="pdfTableHeadTxtFontClr"
                                onChange={handleValueChange}
                                value={values?.pdfTableHeadTxtFontClr}
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
                                    name="isReportByJsPdfPlug"
                                    id="isReportByJsPdfPlugYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isReportByJsPdfPlug === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isReportByJsPdfPlug"
                                    id="isReportByJsPdfPlugNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isReportByJsPdfPlug === 'no'}
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
                                    name="isGlobalHeaderReq"
                                    id="isGlobalHeaderReqYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isGlobalHeaderReq === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isGlobalHeaderReq"
                                    id="isGlobalHeaderReqNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isGlobalHeaderReq === 'no'}
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
                                name='groupClmNoComma'
                                id="groupClmNoComma"
                                onChange={handleValueChange}
                                value={values?.groupClmNoComma}
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
                                    name="isDirectDownloadBtn"
                                    id="isDirectDownloadBtnYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isDirectDownloadBtn === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isDirectDownloadBtn"
                                    id="isDirectDownloadBtnNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isDirectDownloadBtn === 'no'}
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
                                    name="isTreeChildReq"
                                    id="isTreeChildReqYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isTreeChildReq === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isTreeChildReq"
                                    id="isTreeChildReqNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isTreeChildReq === 'no'}
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
                                            className="btn btn-secondary btn-sm me-1 py-0 px-1"
                                            onClick={() => alert("Edit feature coming soon!")}
                                        >
                                            <FontAwesomeIcon icon={faEdit} className="dropdown-gear-icon" size='xs' />
                                        </button>
                                        <button
                                            className="btn btn-secondary btn-sm ms-1 py-0 px-1"
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
                                    name="treeChildDataBy"
                                    id="treeChildDataByQuery"
                                    value={'query'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.treeChildDataBy === 'query'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    By Query
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="treeChildDataBy"
                                    id="treeChildDataByProcedure"
                                    value={'procedure'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.treeChildDataBy === 'procedure'}
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
                                    name="isDataTblReqTree"
                                    id="isDataTblReqTreeYes"
                                    value={'Yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isDataTblReqTree === 'Yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isDataTblReqTree"
                                    id="isDataTblReqTreeNo"
                                    value={'No'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isDataTblReqTree === 'No'}
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
                                    name="isPaginationReqTree"
                                    id="isPaginationReqTreeYes"
                                    value={'Yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isPaginationReqTree === 'Yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isPaginationReqTree"
                                    id="isPaginationReqTreeNo"
                                    value={'No'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isPaginationReqTree === 'No'}
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
                                onChange={handleValueChange}
                                value={values?.query}
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
                                    name="dataDisplay"
                                    id="dataDisplayHorizontal"
                                    value={'horizontal'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.dataDisplay === 'horizontal'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Horizontal
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="dataDisplay"
                                    id="dataDisplayVertical"
                                    value={'vertical'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.dataDisplay === 'vertical'}
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
                                    name="isSearchReqTree"
                                    id="isSearchReqTreeYes"
                                    value={'Yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isSearchReqTree === 'Yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isSearchReqTree"
                                    id="isSearchReqTreeNo"
                                    value={'No'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isSearchReqTree === 'No'}
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
                                name='recordsPerPageTreeCh'
                                id="recordsPerPageTreeCh"
                                onChange={handleValueChange}
                                value={values?.recordsPerPageTreeCh}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TableDetails
