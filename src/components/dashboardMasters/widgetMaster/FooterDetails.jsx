import React from 'react'
import InputSelect from '../../commons/InputSelect'
import InputField from '../../commons/InputField'

const FooterDetails = () => {
    return (
        <>
            {/* MAIN DEVIDER FOR JNDI */}
            <b><h6 className='header-devider'>Footer Details</h6></b>

            {/* SECTION DEVIDER jndi and time*/}
            <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Last Updated Query : </label>
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
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Custom Message When Data not Available : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                id="stmtTimeOut"
                                name="stmtTimeOut"
                                placeholder="Enter "
                                // options={timeOutOptions}
                                className="backcolorinput"
                            // onChange={handleValueChange}     
                            // value={values?.stmtTimeOut}
                            />
                        </div>
                    </div>
                </div>
                {/* right columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Footer Text : </label>
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
            </div>
        </>
    )
}

export default FooterDetails
