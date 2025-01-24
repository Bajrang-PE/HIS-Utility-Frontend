import React, { useState } from 'react'
import InputSelect from '../../commons/InputSelect'
import InputField from '../../commons/InputField'
import { itemForDashboard, widgetTypeOptions } from '../../../localData/DropDownData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faEdit, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons'

const AboutWidget = (props) => {
    const { handleValueChange, handleRadioChange, radioValues, values, dashboardForDt } = props;

    const [rows, setRows] = useState([{ columnNo: "", widget: "" }]);
    const [otherLinkData, setOtherLinkData] = useState([{ otherLinkName: "", otherLinkUrl: "" }]);

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
                                options={dashboardForDt}
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
                        <label className="col-sm-5 col-form-label pe-0">Widget Type : </label>
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
                                                className="btn btn-secondary btn-sm me-1 py-0 px-1"
                                                onClick={() => alert("Edit feature coming soon!")}
                                            >Edit
                                                {/* <FontAwesomeIcon icon={faEdit} className="dropdown-gear-icon" size='xs' /> */}
                                            </button>
                                            <button
                                                className="btn btn-secondary btn-sm ms-1 py-0 px-1"
                                                onClick={() => handleRemoveRow(index)}
                                            >Delete
                                                {/* <FontAwesomeIcon icon={faTrash} className="dropdown-gear-icon" size='xs' /> */}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <b><h6 className='header-devider mt-1'></h6></b>
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
                                    value={"Tabular"}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.widgetViewed === "Tabular"}
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
                        <label className="col-sm-5 col-form-label pe-0 required-label">
                            Is Widget Name Visible? :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isWidgetNameVisible"
                                    id="isWidgetNameVisibleYes"
                                    value={'Yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isWidgetNameVisible === "Yes"}
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
                                    value={'No'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isWidgetNameVisible === 'No'}
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
                        <label className="col-sm-5 col-form-label pe-0 required-label">Widget Name(Internal) : </label>
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

            {/* SECTION DEVIDER widget purpose*/}
            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
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
                                    value={'Download'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.widgetPurpose === "Download"}
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
                                    value={'HTML'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.widgetPurpose === "HTML"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    HTML
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
                                    value={'Yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isRecordLimitReq === "Yes"}
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
                                    value={'No'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isRecordLimitReq === "No"}
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
                                    value={'Yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isWidgetBorderReq === 'Yes'}
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
                                    value={'No'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isWidgetBorderReq === 'No'}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* IF OTHER LINK SELECTED */}
            {radioValues?.widgetViewed === "otherLink" &&
                <div className="table-responsive row p-2">
                    <table className="table table-borderless text-center mb-0">
                        <thead className="text-white">
                            <tr className='header-devider m-0'>
                                <th style={{ width: "40%" }}>Other Link Name</th>
                                <th style={{ width: "40%" }}>Other Link URL</th>
                                <th >
                                    <button
                                        className="btn btn-secondary btn-sm"
                                        // onClick={() => handleAddRow('procedure')}
                                        style={{ padding: "0 4px" }}
                                    >
                                        <FontAwesomeIcon icon={faAdd} className="dropdown-gear-icon" size='sm' />
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {otherLinkData.map((row, index) => (
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
                                        <InputField
                                            type="text"
                                            className="backcolorinput"
                                            name='serviceRefName'
                                            id='serviceRefName'
                                        // value={serverDetails?.serviceRefName}
                                        // onChange={handleServerChange}
                                        />
                                    </td>

                                    <td className='px-0'>
                                        {/* {procedureRows.length > 0 && ( */}
                                        <div>
                                            <button
                                                className="btn btn-outline-secondary btn-sm ms-1"
                                                // onClick={() => handleRemoveRow(index, "procedure")}
                                                style={{ padding: "0 4px" }}
                                            >
                                                <FontAwesomeIcon icon={faMinus} className="dropdown-gear-icon" size='sm' />
                                            </button>
                                        </div>
                                        {/* )} */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }

            {/* IF IFRAME SELECTED */}
            {radioValues?.widgetViewed === "iframe" &&
                <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                    {/* //left columns */}
                    <div className='col-sm-6'>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label pe-0">Enter URL for Iframe : </label>
                            <div className="col-sm-7 ps-0 align-content-center">
                                <InputField
                                    type={'text'}
                                    className="backcolorinput "
                                    placeholder="Enter value..."
                                    name='urlForIframe'
                                    id="urlForIframe"
                                    onChange={handleValueChange}
                                    value={values?.urlForIframe}
                                />
                            </div>
                        </div>
                    </div>
                    {/* right columns */}
                    <div className='col-sm-6'>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label pe-0">
                                Is SSO Url :
                            </label>
                            <div className="col-sm-7 ps-0 align-content-center">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="isSsoUrl"
                                        id="isSsoUrlYes"
                                        value={'Yes'}
                                        onChange={handleRadioChange}
                                        checked={radioValues?.isSsoUrl === 'Yes'}
                                    />
                                    <label className="form-check-label" htmlFor="dbYes">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="isSsoUrl"
                                        id="isSsoUrlNo"
                                        value={'No'}
                                        onChange={handleRadioChange}
                                        checked={radioValues?.isSsoUrl === 'No'}
                                    />
                                    <label className="form-check-label" htmlFor="dbNo">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default AboutWidget
