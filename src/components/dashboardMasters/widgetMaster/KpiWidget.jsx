import React from 'react'
import InputField from '../../commons/InputField'
import InputSelect from '../../commons/InputSelect'

const KpiWidget = () => {
    return (
        <div>
            <b><h6 className='header-devider m-0'>KPI Details</h6></b>
            {/* SECTION DEVIDER graph plugin and color*/}
            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">KPI TYPE : </label>
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
                        <label className="col-sm-5 col-form-label pe-0">KPI Icon Type : </label>
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
                        <label className="col-sm-5 col-form-label pe-0">Default Background Color : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type={'color'}
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
                        <label className="col-sm-5 col-form-label pe-0">Default hover Background : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type={'color'}
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
                        <label className="col-sm-5 col-form-label pe-0">
                        Is Widget Shadow Required :
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
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">KPI Box click Options : </label>
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
                        <label className="col-sm-5 col-form-label pe-0">Tab link name : </label>
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
                        <label className="col-sm-5 col-form-label pe-0">KPI link color : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type={'color'}
                                className="backcolorinput"
                                placeholder="Enter value..."
                                name='parentWidget'
                                id="parentWidget"
                            // onChange={handleValueChange}
                            // value={values?.parentWidget}
                            />
                        </div>
                    </div>
                </div>
                {/* right columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">KPI Border Width (In Pixels) and Color : </label>
                        <div className="col-sm-3 ps-0 align-content-center">
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
                        <div className="col-sm-4 ps-0 align-content-center">
                            <InputField
                                type={'color'}
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
                        <label className="col-sm-5 col-form-label pe-0">Tab Icon Image : </label>
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
                        <label className="col-sm-5 col-form-label pe-0">Default Font Color : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type={'color'}
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
                        <label className="col-sm-5 col-form-label pe-0">Icon Color : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type={'color'}
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
                        <label className="col-sm-5 col-form-label pe-0">
                        Download data from KPI :
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
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Tab open on click : </label>
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
                        <label className="col-sm-5 col-form-label pe-0">Widget link name : </label>
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
                        <label className="col-sm-5 col-form-label pe-0">KPI link Font color : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type={'color'}
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='parentWidget'
                                id="parentWidget"
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

export default KpiWidget
