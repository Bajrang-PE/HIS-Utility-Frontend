import React from 'react'
import InputField from '../../commons/InputField'
import InputSelect from '../../commons/InputSelect'

const KpiWidget = (props) => {
    const { handleValueChange, handleRadioChange, radioValues, values, setValues } = props;

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
                                name='kpiType'
                                id="kpiType"
                                options={[]}
                                onChange={handleValueChange}
                                value={values?.kpiType}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">KPI Icon Type : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='kpiIconType'
                                id="kpiIconType"
                                options={[]}
                                onChange={handleValueChange}
                                value={values?.kpiIconType}
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
                                name='kpiDefaultBgColor'
                                id="kpiDefaultBgColor"
                                onChange={handleValueChange}
                                value={values?.kpiDefaultBgColor}
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
                                name='kpiDefaultHoverBg'
                                id="kpiDefaultHoverBg"
                                onChange={handleValueChange}
                                value={values?.kpiDefaultHoverBg}
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
                                    name="isWidgetShadowReq"
                                    id="isWidgetShadowReqYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isWidgetShadowReq === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isWidgetShadowReq"
                                    id="isWidgetShadowReqNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isWidgetShadowReq === 'no'}
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
                                name='kpiBoxClickOptions'
                                id="kpiBoxClickOptions"
                                options={[]}
                                onChange={handleValueChange}
                                value={values?.kpiBoxClickOptions}
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
                                name='kpiTabLinkName'
                                id="kpiTabLinkName"
                                onChange={handleValueChange}
                                value={values?.kpiTabLinkName}
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
                                name='kpiLinkColor'
                                id="kpiLinkColor"
                                onChange={handleValueChange}
                                value={values?.kpiLinkColor}
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
                                name='kpiBorderWidth'
                                id="kpiBorderWidth"
                                onChange={handleValueChange}
                                value={values?.kpiBorderWidth}
                            />
                        </div>
                        <div className="col-sm-4 ps-0 align-content-center">
                            <InputField
                                type={'color'}
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='kpiBorderColor'
                                id="kpiBorderColor"
                                onChange={handleValueChange}
                                value={values?.kpiBorderColor}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Tab Icon Image : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='kpiTabIconImage'
                                id="kpiTabIconImage"
                                options={[]}
                                onChange={handleValueChange}
                                value={values?.kpiTabIconImage}
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
                                name='kpiDefaultFontColor'
                                id="kpiDefaultFontColor"
                                onChange={handleValueChange}
                                value={values?.kpiDefaultFontColor}
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
                                name='kpiIconColor'
                                id="kpiIconColor"
                                onChange={handleValueChange}
                                value={values?.kpiIconColor}
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
                                    name="isDownloadDataFromKpi"
                                    id="isDownloadDataFromKpiYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isDownloadDataFromKpi === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isDownloadDataFromKpi"
                                    id="isDownloadDataFromKpiNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isDownloadDataFromKpi === 'no'}
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
                                name='kpiTabOpenOnClick'
                                id="kpiTabOpenOnClick"
                                options={[]}
                                onChange={handleValueChange}
                                value={values?.kpiTabOpenOnClick}
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
                                name='kpiWidgetLinkName'
                                id="kpiWidgetLinkName"
                                onChange={handleValueChange}
                                value={values?.kpiWidgetLinkName}
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
                                name='kpiLinkFontColor'
                                id="kpiLinkFontColor"
                                onChange={handleValueChange}
                                value={values?.kpiLinkFontColor}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KpiWidget
