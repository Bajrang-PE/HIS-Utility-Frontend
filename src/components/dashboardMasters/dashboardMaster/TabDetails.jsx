import React from 'react'
import InputSelect from '../../commons/InputSelect'
import InputField from '../../commons/InputField'
import { leftCaret, rightCaret } from '../../../utils/commonSVG'
import { iconType, tabDisplayOptions, tabShapeOptions, widgetRefreshTimeOptions } from '../../../localData/DropDownData'

const TabDetails = (props) => {
    const { handleValueChange, handleRadioChange, radioValues, values, setValues, tabDrpData } = props;

    return (
        <div>
            <b><h6 className='header-devider m-0'> Dashboard Master - Tab Details</h6></b>

            {/* SECTION DEVIDER*/}
            <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 ">Tab Display Style : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                id="tabDisplayStyle"
                                name="tabDisplayStyle"
                                // placeholder="Select value..."
                                options={tabDisplayOptions}
                                className="backcolorinput"
                                value={values?.tabDisplayStyle}
                                onChange={handleValueChange}
                            // disabled={actionMode === 'edit' ? true : false}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 ">Time Interval : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                id="timeInterval"
                                name="timeInterval"
                                // placeholder="Not Required"
                                options={widgetRefreshTimeOptions}
                                className="backcolorinput"
                                value={values?.timeInterval}
                                onChange={handleValueChange}
                            // disabled={actionMode === 'edit' ? true : false}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 ">Tab Icon Type : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                id="tabIconType"
                                name="tabIconType"
                                // placeholder="Select value..."
                                options={iconType}
                                className="backcolorinput"
                                value={values?.tabIconType}
                                onChange={handleValueChange}
                            // disabled={actionMode === 'edit' ? true : false}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0 ">Change Interval Time : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                id="changeIntervalTime"
                                name="changeIntervalTime"
                                // placeholder="Not Required"
                                options={widgetRefreshTimeOptions}
                                className="backcolorinput"
                                value={values?.changeIntervalTime}
                                onChange={handleValueChange}
                            // disabled={actionMode === 'edit' ? true : false}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION DEVIDER*/}
            {values?.tabDisplayStyle === 'TOP' &&
                <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                    {/* //left columns */}
                    <div className='col-sm-6'>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label pe-0">
                                Is Top Tab Bar Visible :
                            </label>
                            <div className="col-sm-7 ps-0 align-content-center">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="isTopBarVisible"
                                        id="isTopBarVisibleYes"
                                        value={'Yes'}
                                        onChange={handleRadioChange}
                                        checked={radioValues?.isTopBarVisible === 'Yes'}
                                    />
                                    <label className="form-check-label" htmlFor="dbYes">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="isTopBarVisible"
                                        id="isTopBarVisibleNo"
                                        value={'No'}
                                        onChange={handleRadioChange}
                                        checked={radioValues?.isTopBarVisible === 'No'}
                                    />
                                    <label className="form-check-label" htmlFor="dbNo">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* SECTION DEVIDER*/}
            {values?.tabDisplayStyle === 'SIDE' &&
                <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                    {/* //left columns */}
                    <div className='col-sm-6'>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label pe-0">
                                is Fixed Layout :
                            </label>
                            <div className="col-sm-7 ps-0 align-content-center">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="isFixedLayout"
                                        id="isFixedLayoutYes"
                                        value={'Yes'}
                                        onChange={handleRadioChange}
                                        checked={radioValues?.isFixedLayout === 'Yes'}
                                    />
                                    <label className="form-check-label" htmlFor="dbYes">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="isFixedLayout"
                                        id="isFixedLayoutNo"
                                        value={'No'}
                                        onChange={handleRadioChange}
                                        checked={radioValues?.isFixedLayout === 'No'}
                                    />
                                    <label className="form-check-label" htmlFor="dbNo">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row" style={{ paddingBottom: "1px" }}>
                            <label className="col-sm-5 col-form-label pe-0">Text Shadow Color : </label>
                            <div className="col-sm-7 ps-0 align-content-center">
                                <InputField
                                    type="color"
                                    className="backcolorinput"
                                    placeholder="Enter value..."
                                    name='textshadowColor'
                                    id="textshadowColor"
                                    onChange={handleValueChange}
                                    value={values?.textshadowColor}
                                />
                            </div>
                        </div>
                        <div className="form-group row" style={{ paddingBottom: "1px" }}>
                            <label className="col-sm-5 col-form-label pe-0 ">Tab Background Color On hover: </label>
                            <div className="col-sm-7 ps-0 align-content-center">
                                <InputField
                                    type="color"
                                    className="backcolorinput"
                                    placeholder="Enter value..."
                                    name='tabBgColorOnHover'
                                    id="tabBgColorOnHover"
                                    onChange={handleValueChange}
                                    value={values?.tabBgColorOnHover}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label pe-0">
                                Is Sidebar Collapse :
                            </label>
                            <div className="col-sm-7 ps-0 align-content-center">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="isSidebarCollapse"
                                        id="isSidebarCollapseYes"
                                        value={'Yes'}
                                        onChange={handleRadioChange}
                                        checked={radioValues?.isSidebarCollapse === 'Yes'}
                                    />
                                    <label className="form-check-label" htmlFor="dbYes">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="isSidebarCollapse"
                                        id="isSidebarCollapseNo"
                                        value={'No'}
                                        onChange={handleRadioChange}
                                        checked={radioValues?.isSidebarCollapse === 'No'}
                                    />
                                    <label className="form-check-label" htmlFor="dbNo">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row" style={{ paddingBottom: "1px" }}>
                            <label className="col-sm-5 col-form-label pe-0">Tab Font Color : </label>
                            <div className="col-sm-7 ps-0 align-content-center">
                                <InputField
                                    type="color"
                                    className="backcolorinput"
                                    placeholder="Enter value..."
                                    name='tabFontColor'
                                    id="tabFontColor"
                                    onChange={handleValueChange}
                                    value={values?.tabFontColor}
                                />
                            </div>
                        </div>
                        <div className="form-group row" style={{ paddingBottom: "1px" }}>
                            <label className="col-sm-5 col-form-label pe-0 ">Tab Font Color On hover: </label>
                            <div className="col-sm-7 ps-0 align-content-center">
                                <InputField
                                    type="color"
                                    className="backcolorinput"
                                    placeholder="Enter value..."
                                    name='tabFontColorOnHover'
                                    id="tabFontColorOnHover"
                                    onChange={handleValueChange}
                                    value={values?.tabFontColorOnHover}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            }

            {/* SECTION DEVIDER*/}
            {values?.tabDisplayStyle === 'BIG_ICON' &&
                <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                    {/* //left columns */}
                    <div className='col-sm-6'>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label pe-0 ">Tab Menu Width (For Big Icon) : </label>
                            <div className="col-sm-7 ps-0 align-content-center">
                                <InputSelect
                                    id="tabMenuWidthBigIcon"
                                    name="tabMenuWidthBigIcon"
                                    // placeholder="Select value..."
                                    options={[{value:'2',label:"2"},{value:'3',label:"3"},{value:'4',label:"4"},{value:'5',label:"5"},{value:'6',label:"6"}]}
                                    className="backcolorinput"
                                    value={values?.tabMenuWidthBigIcon}
                                    onChange={handleValueChange}
                                // disabled={actionMode === 'edit' ? true : false}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label pe-0 ">Tab shapes (For Big Icon) : </label>
                            <div className="col-sm-7 ps-0 align-content-center">
                                <InputSelect
                                    id="tabShapesBigIcon"
                                    name="tabShapesBigIcon"
                                    placeholder="Select value..."
                                    options={tabShapeOptions}
                                    className="backcolorinput"
                                    value={values?.tabShapesBigIcon}
                                    onChange={handleValueChange}
                                // disabled={actionMode === 'edit' ? true : false}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className="form-group row" style={{ paddingBottom: "1px" }}>
                            <label className="col-sm-5 col-form-label pe-0 ">Tab Menu Height (For Big Icon) : </label>
                            <div className="col-sm-7 ps-0 align-content-center">
                                <InputField
                                    type="text"
                                    className="backcolorinput"
                                    placeholder="Enter value..."
                                    name='tabMenuHeightBigIcon'
                                    id="tabMenuHeightBigIcon"
                                    onChange={handleValueChange}
                                    value={values?.tabMenuHeightBigIcon}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            }

            <b><h6 className='header-devider  my-1'>Tab Mapping Details</h6></b>
            <div className='d-flex justify-content-center mt-1 mb-2 role-theme'>
                <div className='' style={{ width: "30%" }}>
                    <b><h6 className='mb-2 text-center'>All Tabs</h6></b>
                    <select className="form-select form-select-sm backcolorinput" id='leftRightSelect' multiple size="6" aria-label="size 4 select example">
                        {tabDrpData?.map((opt, index) => (
                            <option value={opt.value} key={index}>{opt.label}</option>
                        ))}
                    </select>
                </div>

                <div className='align-self-center' style={{ marginLeft: "2%", marginRight: "2%" }}>

                    <div className='d-flex justify-content-center'>
                        <button type='button' className='btn btn-outline-secondary btn-sm m-1'>
                            <svg dangerouslySetInnerHTML={{ __html: rightCaret }} height={16} width={16} />
                        </button>

                    </div>

                    <div className='d-flex justify-content-center'>
                        <button type='button' className='btn btn-outline-secondary btn-sm m-1'>
                            <svg dangerouslySetInnerHTML={{ __html: leftCaret }} height={16} width={16} />
                        </button>
                    </div>
                </div>

                <div className='' style={{ width: "30%" }}>
                    <b><h6 className='mb-2 text-center'>Selected Dashboard Tabs</h6></b>
                    <select className="form-select form-select-sm backcolorinput" id='leftRightSelect1' multiple size="6" aria-label="size 4 select example">
                        {/* {selectedOptions?.map((opt, index) => (
                            <option value={opt.value} key={index}>{opt.label}</option>
                        ))} */}
                    </select>
                </div>
            </div>


        </div>
    )
}

export default TabDetails
