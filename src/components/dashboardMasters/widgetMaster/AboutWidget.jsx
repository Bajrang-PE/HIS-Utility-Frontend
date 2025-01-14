import React, { useState } from 'react'
import InputSelect from '../../commons/InputSelect'
import InputField from '../../commons/InputField'
import { itemForDashboard, widgetTypeOptions } from '../../../localData/DropDownData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const AboutWidget = (props) => {
    const { handleValueChange, handleRadioChange, radioValues, values } = props;

    const [rows, setRows] = useState([{ columnNo: "", widget: "" }]);

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
            <b><h6 className='header-devider m-0'>Widget Master - Basic Details</h6></b>
            {/* SECTION DEVIDER widget type and for*/}
            <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 required-label">Widget For : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                id="widgetFor"
                                name="widgetFor"
                                placeholder="Select value..."
                                options={itemForDashboard}
                                className="backcolorinput"
                                value={values?.widgetFor}
                                onChange={handleValueChange}
                            />
                        </div>
                    </div>
                </div>
                {/* right columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 required-label">Widget Type : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                className="backcolorinput"
                                id="widgetType"
                                name="widgetType"
                                placeholder="Select value..."
                                options={widgetTypeOptions}
                                value={values?.widgetType}
                                onChange={handleValueChange}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION DEVIDER for child details single query selected*/}
            {/* <div className="">
                <b>Child details:-</b><br />
                <div className="row mx-0 mb-1 header-devider p-0">
                    <div className="col-4 text-center">
                        <label className="form-label p-0 m-0">Column No.</label>
                    </div>
                    <div className="col-4 text-center ">
                        <label className="form-label m-0">Widget</label>
                    </div>
                    <div className='col-4'>

                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-4">
                        <InputField
                            type="text"
                            className="backcolorinput"
                            placeholder="Option Value"
                        //   value={row.value}
                        //   onChange={(e) => handleInputChange(index, "value", e.target.value)}
                        />
                    </div>
                    <div className="col-4">
                        <InputSelect
                            type="text"
                            className="backcolorinput"
                            placeholder="Option Text"
                        //   value={row.text}
                        //   onChange={(e) => handleInputChange(index, "text", e.target.value)}
                        />
                    </div>
                    <div className="col-4 text-center">
                        <button
                            className="btn btn-secondary btn-sm me-1"
                        // onClick={() => handleRemoveRow(index)}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div> */}
            {values?.widgetType === "singleQueryParent" &&
                <div className="table-responsive row p-1">
                    <table className="table table-borderless text-center mb-0">
                        <thead className="text-white">
                            <tr className='header-devider m-0'>
                                <th style={{ width: "35%" }}>Column No.</th>
                                <th style={{ width: "45%" }}>Widget</th>
                                <th></th>
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
                                <td className='px-0 action-buttons'>
                                    <button className='btn btn-sm me-1 py-0 px-0' style={{ background: "#34495e", color: "white" }} onClick={handleAddRow}><FontAwesomeIcon icon={faAdd} className="dropdown-gear-icon" size='sm' />Add</button>
                                </td>
                            </tr>
                            {rows.map((row, index) => (
                                <tr className='table-row-form text-start' key={index}>
                                    <td>{"localhost"}</td>
                                    <td>{"http://localhost:8080"}</td>
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
                </div>}

            {/* SECTION DEVIDER widget viewed and is visible*/}
            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 required-label">
                            Widget Viewed :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="widgetViewedTabular"
                                    name="widgetViewed"
                                    value={"tabular"}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.widgetViewed === "tabular"}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Tabular
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="widgetViewedGraph"
                                    name="widgetViewed"
                                    value={"graph"}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.widgetViewed === "graph"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    Graph
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="widgetViewedKpi"
                                    name="widgetViewed"
                                    value={"kpi"}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.widgetViewed === "kpi"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    KPI
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="widgetViewedMap"
                                    name="widgetViewed"
                                    value={"map"}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.widgetViewed === "map"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    Map
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="widgetViewedNewsTicker"
                                    name="widgetViewed"
                                    value={"newsTicker"}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.widgetViewed === "newsTicker"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    News Ticker
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="widgetViewedOtherLink"
                                    name="widgetViewed"
                                    value={"otherLink"}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.widgetViewed === "otherLink"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    Other Link
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="widgetViewedIframe"
                                    name="widgetViewed"
                                    value={"iframe"}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.widgetViewed === "iframe"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    Iframe
                                </label>
                            </div>

                        </div>
                    </div>
                </div>
                {/* right columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Widget Name Visible? :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isWidgetNameVisible"
                                    id="isWidgetNameVisibleYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isWidgetNameVisible === "yes"}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isWidgetNameVisible"
                                    id="isWidgetNameVisibleNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isWidgetNameVisible === 'no'}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION DEVIDER widget name*/}
            <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 required-label">Widget Name(For Display) : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type="text"
                                className="backcolorinput"
                                placeholder="Enter value..."
                                name='widgetNameDisplay'
                                id="widgetNameDisplay"
                                onChange={handleValueChange}
                                value={values?.widgetNameDisplay}
                            />
                        </div>
                    </div>
                </div>
                {/* right columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Widget Name(Internal) : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type="text"
                                className="backcolorinput"
                                placeholder="Enter value..."
                                name='widgetNameInternal'
                                id="widgetNameInternal"
                                onChange={handleValueChange}
                                value={values?.widgetNameInternal}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION DEVIDER widget refresh and delay time*/}
            <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Widget Refresh Time : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                id="widgetRefreshTime"
                                name="widgetRefreshTime"
                                placeholder="Select value..."
                                options={[]}
                                className="backcolorinput"
                                value={values?.widgetRefreshTime}
                                onChange={handleValueChange}
                            />
                        </div>
                    </div>
                </div>
                {/* right columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Widget Refresh Delay Time : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                className="backcolorinput"
                                id="widgetRefreshDelayTime"
                                name="widgetRefreshDelayTime"
                                placeholder="Select value..."
                                options={[]}
                                value={values?.widgetRefreshDelayTime}
                                onChange={handleValueChange}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION DEVIDER widget mode of query and purpose*/}
            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Select Mode for Query :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeQueryQuery"
                                    name="selectedModeQuery"
                                    value={'query'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.selectedModeQuery === "query"}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    By Query
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeQueryProcedure"
                                    name="selectedModeQuery"
                                    value={'procedure'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.selectedModeQuery === "procedure"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    By Procedure
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeQueryWebService"
                                    name="selectedModeQuery"
                                    value={'webService'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.selectedModeQuery === "webService"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    By Webservice
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeQueryParent"
                                    name="selectedModeQuery"
                                    value={'parent'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.selectedModeQuery === "parent"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    By Parent
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Widget Purpose :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="widgetPurposeDownload"
                                    name="widgetPurpose"
                                    value={'download'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.widgetPurpose === "download"}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Download
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="widgetPurposeHtml"
                                    name="widgetPurpose"
                                    value={'html'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.widgetPurpose === "html"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    HTML
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION DEVIDER caching status and alignment*/}
            <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Caching Status : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                id="cachingStatus"
                                name="cachingStatus"
                                options={[]}
                                placeholder="Select value..."
                                className="backcolorinput"
                                onChange={handleValueChange}
                                value={values?.cachingStatus}
                            />
                        </div>
                    </div>
                </div>
                {/* right columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Widget Heading Alignment :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="widgetHeadingAlignLeft"
                                    name="widgetHeadingAlign"
                                    value={'left'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.widgetHeadingAlign === "left"}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Left
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="widgetHeadingAlignCenter"
                                    name="widgetHeadingAlign"
                                    value={'center'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.widgetHeadingAlign === "center"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    Center
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="widgetHeadingAlignRight"
                                    name="widgetHeadingAlign"
                                    value={'right'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.widgetHeadingAlign === "right"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    Right
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION DEVIDER LIMIT and record required */}
            <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row" style={{ paddingBottom: "1px" }}>
                        <label className="col-sm-5 col-form-label pe-0">LIMIT : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type="text"
                                className="backcolorinput"
                                placeholder="Enter value..."
                                name='limit'
                                id="limit"
                                onChange={handleValueChange}
                                value={values?.limit}
                            />
                        </div>
                    </div>
                </div>
                {/* right columns */}
                <div className='col-sm-6'>

                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Records Limited Line Required :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="isRecordLimitReqYes"
                                    name="isRecordLimitReq"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isRecordLimitReq === "yes"}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="isRecordLimitReqNo"
                                    name="isRecordLimitReq"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isRecordLimitReq === "no"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* SECTION DEVIDER heading border margin */}
            <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row" style={{ paddingBottom: "1px" }}>
                        <label className="col-sm-5 col-form-label pe-0">Widget Heading Color : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type="color"
                                className="backcolorinput"
                                placeholder="Enter value..."
                                name='widgetHadingClr'
                                id="widgetHadingClr"
                                onChange={handleValueChange}
                                value={values?.widgetHadingClr}
                            />
                        </div>
                    </div>
                    <div className="form-group row" style={{ paddingBottom: "1px" }}>
                        <label className="col-sm-5 col-form-label pe-0">Widget Top Margin : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type="text"
                                className="backcolorinput"
                                placeholder="Enter value..."
                                name='widgetTopMargin'
                                id="widgetTopMargin"
                                onChange={handleValueChange}
                                value={values?.widgetTopMargin}
                            />
                        </div>
                    </div>
                </div>
                {/* right columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Widget Border Required :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isWidgetBorderReq"
                                    id="isWidgetBorderReqYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isWidgetBorderReq === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isWidgetBorderReq"
                                    id="isWidgetBorderReqNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isWidgetBorderReq === 'no'}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutWidget
