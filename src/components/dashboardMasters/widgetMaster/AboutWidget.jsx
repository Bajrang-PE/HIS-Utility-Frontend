import React from 'react'
import InputSelect from '../../commons/InputSelect'
import InputField from '../../commons/InputField'
import { itemForDashboard } from '../../../localData/DropDownData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

const AboutWidget = () => {
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
                                id="parameterFor"
                                name="parameterFor"
                                placeholder="Select value..."
                                options={itemForDashboard}
                                className="backcolorinput"
                            // value={values?.parameterFor}
                            // onChange={handleValueChange}
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
                                id="parameterType"
                                name="parameterType"
                            // placeholder="Select value..."
                            // options={parameterType}
                            // value={values?.parameterType}
                            // onChange={handleValueChange}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION DEVIDER for child details single query selected*/}
            <div className="">
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
                {/* {rows.map((row, index) => ( */}
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
            </div>

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
                                    id="selectedModeQuery"
                                    name="selectedMode"
                                // value={selectedMode}
                                // onChange={(e) => setSelectedMode("query")}
                                // checked={selectedMode === "query"}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Tabular
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
                                    Graph
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeFunction"
                                    name="selectedMode"
                                // value={selectedMode}
                                // onChange={(e) => setSelectedMode("function")}
                                // checked={selectedMode === "function"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    KPI
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeHtml"
                                    name="selectedMode"
                                // value={selectedMode}
                                // onChange={(e) => setSelectedMode("html")}
                                // checked={selectedMode === "html"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    Map
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeProcedureDml"
                                    name="selectedMode"
                                // value={selectedMode}
                                // onChange={(e) => setSelectedMode("procedureDml")}
                                // checked={selectedMode === "procedureDml"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    News Ticker
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeFunctionDml"
                                    name="selectedMode"
                                // value={selectedMode}
                                // onChange={(e) => setSelectedMode("functionDml")}
                                // checked={selectedMode === "functionDml"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    Other Link
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeFunctionDml"
                                    name="selectedMode"
                                // value={selectedMode}
                                // onChange={(e) => setSelectedMode("functionDml")}
                                // checked={selectedMode === "functionDml"}
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
                                name='serviceDisplayName'
                                id="serviceDisplayName"
                            // onChange={handleValueChange}
                            // value={values?.serviceDisplayName}
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
                                name='serviceCallingName'
                                id="serviceCallingName"
                            // onChange={handleValueChange}
                            // value={values?.serviceCallingName}
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
                                id="parameterFor"
                                name="parameterFor"
                                placeholder="Select value..."
                                // options={itemForDashboard}
                                className="backcolorinput"
                            // value={values?.parameterFor}
                            // onChange={handleValueChange}
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
                                id="parameterType"
                                name="parameterType"
                            // placeholder="Select value..."
                            // options={parameterType}
                            // value={values?.parameterType}
                            // onChange={handleValueChange}
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
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeFunction"
                                    name="selectedMode"
                                // value={selectedMode}
                                // onChange={(e) => setSelectedMode("function")}
                                // checked={selectedMode === "function"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    By Webservice
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeHtml"
                                    name="selectedMode"
                                // value={selectedMode}
                                // onChange={(e) => setSelectedMode("html")}
                                // checked={selectedMode === "html"}
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
                                    name="isCacheData"
                                    id="isCacheDataYes"
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(true)}
                                // checked={isCacheData}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Download
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
                                id="parameterWidth"
                                name="parameterWidth"
                                // options={parameterWidth}
                                placeholder="Select value..."
                                className="backcolorinput"
                            // onChange={handleValueChange}
                            // value={values?.parameterWidth}
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
                                    name="isCacheData"
                                    id="isCacheDataYes"
                                // value={isCacheData}
                                // onChange={(e) => setIsCacheData(true)}
                                // checked={isCacheData}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Left
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
                                    Center
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
                                name='parameterInternal'
                                id="parameterInternal"
                            // onChange={handleValueChange}
                            // value={values?.parameterInternal}
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
                                    name="showAsLabel"
                                    id="showAsLabelYes"
                                // value={showAsLabel}
                                // onChange={(e) => setShowAsLabel(true)}
                                // checked={showAsLabel}
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
                                // value={showAsLabel}
                                // onChange={(e) => setShowAsLabel(false)}
                                // checked={!showAsLabel}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
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
                        <label className="col-sm-5 col-form-label pe-0">Widget Heading Color : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type="color"
                                className="backcolorinput"
                                placeholder="Enter value..."
                                name='parameterInternal'
                                id="parameterInternal"
                            // onChange={handleValueChange}
                            // value={values?.parameterInternal}
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
                                name='parameterInternal'
                                id="parameterInternal"
                            // onChange={handleValueChange}
                            // value={values?.parameterInternal}
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
                                    name="showAsLabel"
                                    id="showAsLabelYes"
                                // value={showAsLabel}
                                // onChange={(e) => setShowAsLabel(true)}
                                // checked={showAsLabel}
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
                                // value={showAsLabel}
                                // onChange={(e) => setShowAsLabel(false)}
                                // checked={!showAsLabel}
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
