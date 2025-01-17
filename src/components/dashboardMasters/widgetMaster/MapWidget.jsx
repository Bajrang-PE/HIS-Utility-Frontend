import React from 'react'
import InputSelect from '../../commons/InputSelect'
import Select from 'react-select';

const MapWidget = (props) => {
    const { handleValueChange, handleRadioChange, radioValues, values, parentWidget,setValues } = props;

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
                                name='mapName'
                                id="mapName"
                                options={[]}
                                onChange={handleValueChange}
                                value={values?.mapName}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Is Child Based On Primary Key :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isChildBasedPrimaryKey"
                                    id="isChildBasedPrimaryKeyYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isChildBasedPrimaryKey === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isChildBasedPrimaryKey"
                                    id="isChildBasedPrimaryKeyNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isChildBasedPrimaryKey === 'no'}
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
                    {/* <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Parent Widget : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='parentWidgetMap'
                                id="parentWidgetMap"
                                options={parentWidget}
                                onChange={handleValueChange}
                                value={values?.parentWidgetMap}

                            />
                        </div>
                    </div> */}

                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Parent Widget : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <Select
                                id='parentWidgetMap'
                                name='parentWidgetMap'
                                options={parentWidget}
                                placeholder="Select value..."
                                className="backcolorinput react-select-multi"
                                onChange={(e) => setValues({ ...values, ['parentWidgetMap']: e })}
                                value={values?.parentWidgetMap}
                            // isSearchable={true}
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
                                    name="isHideParentMap"
                                    id="isHideParentMapYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isHideParentMap === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isHideParentMap"
                                    id="isHideParentMapNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isHideParentMap === 'no'}
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
                                name='mapIncreasingIntensity'
                                id="mapIncreasingIntensity"
                                options={[]}
                                onChange={handleValueChange}
                                value={values?.mapIncreasingIntensity}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapWidget
