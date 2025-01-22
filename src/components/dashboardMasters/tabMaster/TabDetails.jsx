import React from 'react'
import InputField from '../../commons/InputField'

const TabDetails = () => {
    return (
        <>
            <b><h6 className='header-devider my-1'>Tab Details Configuration</h6></b>
            {/* SECTION DEVIDER tab name,parent,ellipse,css,icon */}
            <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 required-label">
                            Show Tab Name In Detail Title :
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
                    <div className="form-group row" style={{ paddingBottom: "1px" }}>
                        <label className="col-sm-5 col-form-label pe-0 required-label">Tab Name Font Weight : </label>
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
                    <div className="form-group row" style={{ paddingBottom: "1px" }}>
                        <label className="col-sm-5 col-form-label pe-0">Tab Detail Background color : </label>
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
                        <label className="col-sm-5 col-form-label pe-0">Tab Top Padding (in pixel) : </label>
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
                    <div className="form-group row" style={{ paddingBottom: "1px" }}>
                        <label className="col-sm-5 col-form-label pe-0">Bottom Margin (For Tab Heading) : </label>
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
                    <div className="form-group row" style={{ paddingBottom: "1px" }}>
                        <label className="col-sm-5 col-form-label fix-label pe-0 required-label">Tab Name Font Size (in percentage) : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type="text"
                                className="backcolorinput"
                                placeholder="Enter value..."
                                name='parameterDisplay'
                                id="parameterDisplay"
                            // onChange={handleValueChange}
                            // value={values?.parameterDisplay}
                            />
                        </div>
                    </div>

                    <div className="form-group row" style={{ paddingBottom: "1px" }}>
                        <label className="col-sm-5 col-form-label fix-label pe-0 required-label">Tab Name Text Decoration : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type="text"
                                className="backcolorinput"
                                placeholder="Enter value..."
                                name='parameterDisplay'
                                id="parameterDisplay"
                            // onChange={handleValueChange}
                            // value={values?.parameterDisplay}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Tab Detail Title Color : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type="color"
                                className="backcolorinput"
                                placeholder="Enter value..."
                                name='placeHolder'
                                id="placeHolder"
                            // onChange={handleValueChange}
                            // value={values?.placeHolder}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Widget Maximize/Minimize :
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

export default TabDetails
