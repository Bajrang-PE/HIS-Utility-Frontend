import React from 'react'
import InputSelect from '../../commons/InputSelect'
import InputField from '../../commons/InputField'

const AboutTab = (props) => {
    const { dashboardForDt } = props;
    return (
        <>
            <b><h6 className='header-devider m-0'> Tab Master</h6></b>

            {/* SECTION DEVIDER tab for*/}
            <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 required-label">Tab For : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                id="parameterFor"
                                name="parameterFor"
                                placeholder="Select value..."
                                options={dashboardForDt}
                                className="backcolorinput"
                            // value={values?.parameterFor}
                            // onChange={handleValueChange}
                            // disabled={actionMode === 'edit' ? true : false}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION DEVIDER tab name,parent,ellipse,css,icon */}
            <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row" style={{ paddingBottom: "1px" }}>
                        <label className="col-sm-5 col-form-label pe-0 required-label">Tab Name (For Internal) : </label>
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
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Parent Tab : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                // type="text"
                                className="backcolorinput"
                                placeholder="Enter value..."
                                name='placeHolder'
                                id="placeHolder"
                                // onChange={handleValueChange}
                                // value={values?.placeHolder}
                                options={[]}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Tab name in Report Required :
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
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is CSS Tab Icon Required :
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
                {/* right columns */}
                <div className='col-sm-6'>
                    <div className="form-group row" style={{ paddingBottom: "1px" }}>
                        <label className="col-sm-5 col-form-label fix-label pe-0 required-label">Tab Name (For Display) : </label>
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
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Tab Used For Drill Down :
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
                        <label className="col-sm-5 col-form-label fix-label pe-0">Ellipse After No. Of Character In Tab Display Name : </label>
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
                        <label className="col-sm-5 col-form-label pe-0">Tab Icon Image : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                // type="text"
                                className="backcolorinput"
                                placeholder="Enter value..."
                                name='placeHolder'
                                id="placeHolder"
                                // onChange={handleValueChange}
                                // value={values?.placeHolder}
                                options={[]}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutTab
