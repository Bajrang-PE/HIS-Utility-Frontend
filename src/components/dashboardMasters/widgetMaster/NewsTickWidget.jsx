import React from 'react'
import InputField from '../../commons/InputField'
import InputSelect from '../../commons/InputSelect'

const NewsTickWidget = () => {
    return (
        <div>
            <b><h6 className='header-devider mb-1'>News Ticker Details</h6></b>
            {/* SECTION DEVIDER */}
            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 required-label">No. of News visible at a time : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type={'text'}
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='parentWidget'
                                id="parentWidget"
                            // onChange={handleValueChange}
                            // value={values?.parentWidget}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">News Speed : </label>
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
                {/* right columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">News Interval : </label>
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

export default NewsTickWidget
