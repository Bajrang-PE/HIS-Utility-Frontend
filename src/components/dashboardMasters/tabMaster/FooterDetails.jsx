import React from 'react'
import InputField from '../../commons/InputField'
import InputSelect from '../../commons/InputSelect'

const FooterDetails = () => {
    return (
        <>

            <b><h6 className='header-devider'>Footer Details</h6></b>

            {/* SECTION DEVIDER */}
            <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Footer Alignment : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                id="parameterFor"
                                name="parameterFor"
                                placeholder="Select value..."
                                // options={dashboardForDt}
                                className="backcolorinput"
                            // value={values?.parameterFor}
                            // onChange={handleValueChange}
                            // disabled={actionMode === 'edit' ? true : false}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Legend Collapes :
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
                        <label className="col-sm-5 col-form-label pe-0">Footer Query : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <textarea
                                className="form-control backcolorinput"
                                placeholder="Enter value..."
                                name="lastUpdatedQuery"
                                id='lastUpdatedQuery'
                                rows="2"
                            // onChange={handleValueChange}
                            // value={values?.lastUpdatedQuery}
                            ></textarea>
                        </div>
                    </div>
                </div>
                {/* right columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Marquee Required :
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
                            Is Legend Border Required :
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
                        <label className="col-sm-5 col-form-label pe-0">Footer Text : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <textarea
                                className="form-control backcolorinput"
                                placeholder="Enter value..."
                                name="FooterText"
                                id='FooterText'
                                rows="2"
                            // onChange={handleValueChange}
                            // value={values?.FooterText}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <b>Footer by WebService Details:</b>
            <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Webservice Reference Name : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                id="parameterFor"
                                name="parameterFor"
                                placeholder="Select value..."
                                // options={dashboardForDt}
                                className="backcolorinput"
                            // value={values?.parameterFor}
                            // onChange={handleValueChange}
                            // disabled={actionMode === 'edit' ? true : false}
                            />
                        </div>
                    </div>
                </div>
                {/* right columns */}
                <div className='col-sm-6'>

                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Webservice Name : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                id="customMsgForNoData"
                                name="customMsgForNoData"
                                placeholder="Enter "
                                className="backcolorinput"
                            // onChange={handleValueChange}
                            // value={values?.customMsgForNoData}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FooterDetails
