import React from 'react'
import InputSelect from '../../commons/InputSelect'
import InputField from '../../commons/InputField'
import Select from 'react-select'

const GraphWidget = (props) => {
    const { handleValueChange, handleRadioChange, radioValues, values, setValues,parentWidget } = props;

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
                                    name="isDisplayGraphPlugin"
                                    id="isDisplayGraphPluginYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isDisplayGraphPlugin === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isDisplayGraphPlugin"
                                    id="isDisplayGraphPluginNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isDisplayGraphPlugin === 'no'}
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
                                name='defaultGraphType'
                                id="defaultGraphType"
                                options={[]}
                                onChange={handleValueChange}
                                value={values?.defaultGraphType}
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
                                name='defaultPluginName'
                                id="defaultPluginName"
                                options={[]}
                                onChange={handleValueChange}
                                value={values?.defaultPluginName}
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
                                    name="isColorByPoint"
                                    id="isColorByPointYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isColorByPoint === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isColorByPoint"
                                    id="isColorByPointNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isColorByPoint === 'no'}
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
                                id='graphTypes'
                                name='graphTypes'
                                options={[{ value: 1, label: "No Parent" }, { value: 2, label: "State" }]}
                                isMulti
                                placeholder="Select value..."
                                className="backcolorinput react-select-multi"
                                value={values?.graphTypes}
                                onChange={(e) => setValues({ ...values, ['graphTypes']: e })}
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
                                name='colorsForBars'
                                id="colorsForBars"
                                onChange={handleValueChange}
                                value={values?.colorsForBars}
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
                                name='graphBottomMargin'
                                id="graphBottomMargin"
                                onChange={handleValueChange}
                                value={values?.graphBottomMargin}
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
                                name='graphBgStartColor'
                                id="graphBgStartColor"
                                onChange={handleValueChange}
                                value={values?.graphBgStartColor}
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
                                name='graphFontColor'
                                id="graphFontColor"
                                onChange={handleValueChange}
                                value={values?.graphFontColor}
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
                                name='graphTypeBgColor'
                                id="graphTypeBgColor"
                                onChange={handleValueChange}
                                value={values?.graphTypeBgColor}
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
                                    name="isGraphScrollBarReq"
                                    id="isGraphScrollBarReqYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isGraphScrollBarReq === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isGraphScrollBarReq"
                                    id="isGraphScrollBarReqNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isGraphScrollBarReq === 'no'}
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
                                name='clmNameForLineGraph'
                                id="clmNameForLineGraph"
                                onChange={handleValueChange}
                                value={values?.clmNameForLineGraph}
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
                                name='graphHeight'
                                id="graphHeight"
                                onChange={handleValueChange}
                                value={values?.graphHeight}
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
                                    name="isShowLegendOnExport"
                                    id="isShowLegendOnExportYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isShowLegendOnExport === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isShowLegendOnExport"
                                    id="isShowLegendOnExportNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isShowLegendOnExport === 'no'}
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
                                name='graphBgEndColor'
                                id="graphBgEndColor"
                                onChange={handleValueChange}
                                value={values?.graphBgEndColor}
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
                                    name="isFullLabelReq"
                                    id="isFullLabelReqYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isFullLabelReq === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isFullLabelReq"
                                    id="isFullLabelReqNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isFullLabelReq === 'no'}
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
                                name='graphTypeFontColor'
                                id="graphTypeFontColor"
                                onChange={handleValueChange}
                                value={values?.graphTypeFontColor}
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
                                name='labelRotation'
                                id="labelRotation"
                                onChange={handleValueChange}
                                value={values?.labelRotation}
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
                                    name="isShowLegend"
                                    id="isShowLegendYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isShowLegend === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isShowLegend"
                                    id="isShowLegendNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isShowLegend === 'no'}
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
                                    name="isThree3D"
                                    id="isThree3DYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isThree3D === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isThree3D"
                                    id="isThree3DNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isThree3D === 'no'}
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
                                    name="isDataLabels"
                                    id="isDataLabelsYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isDataLabels === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isDataLabels"
                                    id="isDataLabelsNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isDataLabels === 'no'}
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
                                name='alphaGraph3D'
                                id="alphaGraph3D"
                                onChange={handleValueChange}
                                value={values?.alphaGraph3D}
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
                                name='xAxisLabel'
                                id="xAxisLabel"
                                onChange={handleValueChange}
                                value={values?.xAxisLabel}
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
                                name='xAxisFontSize'
                                id="xAxisFontSize"
                                onChange={handleValueChange}
                                value={values?.xAxisFontSize}
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
                                name='annotationFontSize'
                                id="annotationFontSize"
                                onChange={handleValueChange}
                                value={values?.annotationFontSize}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Parent Widget : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                className="backcolorinput "
                                placeholder="Enter value..."
                                name='parentWidgetGraph'
                                id="parentWidgetGraph"
                                options={parentWidget}
                                onChange={handleValueChange}
                                value={values?.parentWidgetGraph}
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
                                    name="isDirectDownloadBtnGraph"
                                    id="isDirectDownloadBtnGraphYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isDirectDownloadBtnGraph === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isDirectDownloadBtnGraph"
                                    id="isDirectDownloadBtnGraphNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isDirectDownloadBtnGraph === 'no'}
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
                                    name="isFirstClmGraphHeading"
                                    id="isFirstClmGraphHeadingYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isFirstClmGraphHeading === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isFirstClmGraphHeading"
                                    id="isFirstClmGraphHeadingNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isFirstClmGraphHeading === 'no'}
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
                                name='betaGraph3D'
                                id="betaGraph3D"
                                onChange={handleValueChange}
                                value={values?.betaGraph3D}
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
                                name='yAxisLabel'
                                id="yAxisLabel"
                                onChange={handleValueChange}
                                value={values?.yAxisLabel}
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
                                name='yAxisFontSize'
                                id="yAxisFontSize"
                                onChange={handleValueChange}
                                value={values?.yAxisFontSize}
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
                                name='maxValueOfAxis'
                                id="maxValueOfAxis"
                                onChange={handleValueChange}
                                value={values?.maxValueOfAxis}
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
                                    name="isShowPrntHeadChildGraph"
                                    id="isShowPrntHeadChildGraphYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isShowPrntHeadChildGraph === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isShowPrntHeadChildGraph"
                                    id="isShowPrntHeadChildGraphNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isShowPrntHeadChildGraph === 'no'}
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
                                name='isActionBtnReqGraph'
                                id="isActionBtnReqGraph"
                                options={[]}
                                onChange={handleValueChange}
                                value={values?.isActionBtnReqGraph}
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
                                    name="isHideParent"
                                    id="isHideParentYes"
                                    value={'yes'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isHideParent === 'yes'}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isHideParent"
                                    id="isHideParentNo"
                                    value={'no'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.isHideParent === 'no'}
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
