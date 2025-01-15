import React from 'react'
import InputSelect from '../../commons/InputSelect'
import InputField from '../../commons/InputField'
import Select from 'react-select'

const GraphWidget = () => {
    return (
        <div>
            <b><h6 className='header-devider m-0'>Graph Master</h6></b>
            {/* SECTION DEVIDER graph plugin and color*/}
            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 required-label">
                            Display Graph Plugin Name Option :
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
                        <label className="col-sm-5 col-form-label pe-0 required-label">Default Graph Type : </label>
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
                        <label className="col-sm-5 col-form-label pe-0 required-label">Default Plugin Name : </label>
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
                            Is Color By Point (graph color) :
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

            {/* SECTION DEVIDER graph rest all*/}
            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 required-label">Graph Type : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <Select
                                id='linkedWidget'
                                name='linkedWidget'
                                options={[{ value: 1, label: "No Parent" }, { value: 2, label: "State" }]}
                                isMulti
                                placeholder="Select value..."
                                className="backcolorinput react-select-multi"
                            // value={values?.linkedWidget}
                            // onChange={(e) => setValues({ ...values, ['linkedWidget']: e })}
                            // isSearchable={true}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Color For Bars : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='columnNoToDisplay'
                                id="columnNoToDisplay"
                            // onChange={handleValueChange}
                            // value={values?.columnNoToDisplay}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Graph Bottom Margin : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='columnNoToDisplay'
                                id="columnNoToDisplay"
                            // onChange={handleValueChange}
                            // value={values?.columnNoToDisplay}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Graph Background Start Color : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='color'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='columnNoToDisplay'
                                id="columnNoToDisplay"
                            // onChange={handleValueChange}
                            // value={values?.columnNoToDisplay}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Graph Font Color : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='color'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='columnNoToDisplay'
                                id="columnNoToDisplay"
                            // onChange={handleValueChange}
                            // value={values?.columnNoToDisplay}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Graph Type Background Color : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='color'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='columnNoToDisplay'
                                id="columnNoToDisplay"
                            // onChange={handleValueChange}
                            // value={values?.columnNoToDisplay}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 required-label">
                            Is Graph Scrollbar Required:
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
                        <label className="col-sm-5 col-form-label pe-0 required-label">Column Name for Line graph : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='rightClmNoToFixed'
                                id="rightClmNoToFixed"
                            // onChange={handleValueChange}
                            // value={values?.rightClmNoToFixed}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Graph Height : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='rightClmNoToFixed'
                                id="rightClmNoToFixed"
                            // onChange={handleValueChange}
                            // value={values?.rightClmNoToFixed}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Show Legend On Export :
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
                        <label className="col-sm-5 col-form-label pe-0">Graph Background End Color : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='color'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='columnNoToDisplay'
                                id="columnNoToDisplay"
                            // onChange={handleValueChange}
                            // value={values?.columnNoToDisplay}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 required-label">
                            Is Full Label Required:
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
                        <label className="col-sm-5 col-form-label pe-0">Graph Type Font Color : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='color'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='columnNoToDisplay'
                                id="columnNoToDisplay"
                            // onChange={handleValueChange}
                            // value={values?.columnNoToDisplay}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">label rotation : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='columnNoToDisplay'
                                id="columnNoToDisplay"
                            // onChange={handleValueChange}
                            // value={values?.columnNoToDisplay}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <b><h6 className='header-devider m-0'>Graph Parameters</h6></b>
            {/* SECTION DEVIDER graph params legend label 3d*/}
            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 required-label">
                            Show Legend :
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
                        <label className="col-sm-5 col-form-label pe-0 required-label">
                            Is 3D :
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
                        <label className="col-sm-5 col-form-label pe-0 required-label">
                            Data Labels :
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

            {/* SECTION DEVIDER graph params rest all*/}
            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 required-label">Alpha : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='columnNoToDisplay'
                                id="columnNoToDisplay"
                            // onChange={handleValueChange}
                            // value={values?.columnNoToDisplay}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 required-label">X-axis Label : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='columnNoToDisplay'
                                id="columnNoToDisplay"
                            // onChange={handleValueChange}
                            // value={values?.columnNoToDisplay}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">X-axis Font Size : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='columnNoToDisplay'
                                id="columnNoToDisplay"
                            // onChange={handleValueChange}
                            // value={values?.columnNoToDisplay}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Annotation Font Size : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='columnNoToDisplay'
                                id="columnNoToDisplay"
                            // onChange={handleValueChange}
                            // value={values?.columnNoToDisplay}
                            />
                        </div>
                    </div>
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
                        <label className="col-sm-5 col-form-label pe-0 required-label">
                            Is Direct Download Button Required :
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
                        <label className="col-sm-5 col-form-label pe-0 required-label">
                            Is First Column Graph Heading :
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
                        <label className="col-sm-5 col-form-label pe-0 required-label">Beta : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='columnNoToDisplay'
                                id="columnNoToDisplay"
                            // onChange={handleValueChange}
                            // value={values?.columnNoToDisplay}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 required-label">Y-axis Label : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='columnNoToDisplay'
                                id="columnNoToDisplay"
                            // onChange={handleValueChange}
                            // value={values?.columnNoToDisplay}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Y-axis Font Size : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='columnNoToDisplay'
                                id="columnNoToDisplay"
                            // onChange={handleValueChange}
                            // value={values?.columnNoToDisplay}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 required-label">Maximum value of axis : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputField
                                type='text'
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='columnNoToDisplay'
                                id="columnNoToDisplay"
                            // onChange={handleValueChange}
                            // value={values?.columnNoToDisplay}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 required-label">
                            Show Parent Heading in Child :
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
                        <label className="col-sm-5 col-form-label pe-0">Is Action Button Required : </label>
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
                        <label className="col-sm-5 col-form-label pe-0 required-label">
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

        </div>
    )
}

export default GraphWidget
