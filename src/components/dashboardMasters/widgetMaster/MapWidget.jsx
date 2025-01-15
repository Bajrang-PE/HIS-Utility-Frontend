import React from 'react'
import InputSelect from '../../commons/InputSelect'

const MapWidget = () => {
    return (
        <div>
            <b><h6 className='header-devider mb-1'>Map Details</h6></b>
            {/* SECTION DEVIDER */}
            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Map Name : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='parentWidget'
                                id="parentWidget"
                                options={[]}
                            // onChange={handleValueChange}
                            // value={values?.parentWidget}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Hide Parent :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isShowPrntHeadChild"
                                    id="isShowPrntHeadChildYes"
                                    value={'yes'}
                                // onChange={handleRadioChange}
                                // checked={radioValues?.isShowPrntHeadChild === 'yes'}
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
                                // onChange={handleRadioChange}
                                // checked={radioValues?.isShowPrntHeadChild === 'no'}
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
                        <label className="col-sm-5 col-form-label pe-0">Parent Widget : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='parentWidget'
                                id="parentWidget"
                                options={[]}
                            // onChange={handleValueChange}
                            // value={values?.parentWidget}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Hide Parent :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isShowPrntHeadChild"
                                    id="isShowPrntHeadChildYes"
                                    value={'yes'}
                                // onChange={handleRadioChange}
                                // checked={radioValues?.isShowPrntHeadChild === 'yes'}
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
                                // onChange={handleRadioChange}
                                // checked={radioValues?.isShowPrntHeadChild === 'no'}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
              {/* SECTION DEVIDER*/}
            <b><h6 className='header-devider mb-1'>Legend Details</h6></b>
            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Increasing intensity of Green color shows : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='parentWidget'
                                id="parentWidget"
                                options={[]}
                            // onChange={handleValueChange}
                            // value={values?.parentWidget}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapWidget
