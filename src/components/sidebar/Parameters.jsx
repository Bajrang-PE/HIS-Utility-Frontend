import React, { useContext, useEffect, useState } from "react";
import { HISContext } from "../../contextApi/HISContext";
import InputField from "../commons/InputField";
import InputSelect from "../commons/InputSelect";
import Select from "react-select";
import { convertToISODate } from "../../utils/commonFunction";

const Parameters = ({ params, dashFor }) => {
    const { parameterData, getAllParameterData } = useContext(HISContext);
    const [presentParams, setPresentParams] = useState([]);
    const [selectedValues, setSelectedValues] = useState({});

    console.log(presentParams, 'presentParams')

    useEffect(() => {
        if (dashFor) {
            getAllParameterData(dashFor);
        }
    }, [dashFor]);

    // Function to get default selected values
    const getDefaultValues = (lstOption) => {
        return lstOption?.filter(option => option.optionValue.includes("#DEFAULT"));
    };

    // Function to handle multi-select change
    const handleMultiSelectChange = (parameterName, selectedOptions) => {
        setSelectedValues((prev) => ({
            ...prev,
            [parameterName]: selectedOptions,
        }));
    };

    useEffect(() => {
        if (parameterData?.length > 0) {
            const dashboardIdsArray = params ? params.split(",").map(Number) : [];
            const availableTabs = dashboardIdsArray
                .map((id) => parameterData.find((tab) => tab.id === id))
                .filter(Boolean);
            setPresentParams(availableTabs);
        }
    }, [parameterData]);

    const getDateConstraint = (fieldId) => {
        if (!fieldId) return ""; 
        const field = document.getElementById(fieldId);
        if (field && field.value) {
            console.log(fieldId, field?.value)
            return field.value; 
        }
        return ""; 
    };

    const renderInputField = (param) => {
        const {
            parameterType, parameterDisplayName, parameterName, lstOption, isMandatory, defaultOption,
            parameterParentWidth, parentAlignment,
            parameterLabelWidth, labelAlignment,
            parameterControlWidth, controlAlignment, isMultipleSelectionRequired, defaultValueIfEmpty, parameterId, shouldBeLessThanField, shouldBeGreaterThanField
        } = param?.jsonData || {};

        return (
            <div
                className={`col-md-${parameterParentWidth || 6} d-flex align-items-center justify-content-${parentAlignment?.toLowerCase() || 'start'}`}
                key={parameterName}
            >
                {/* Label */}
                <label
                    className={`col-${parameterLabelWidth || 6} col-form-label text-${labelAlignment?.toLowerCase() || 'left'} ${isMandatory === "Yes" ? 'required-label' : ''}`}
                >
                    {parameterDisplayName} :
                </label>

                {/* Input Container */}
                <div className={`col-${parameterControlWidth || 6} text-${controlAlignment?.toLowerCase() || 'left'}`}>

                    {/* Dropdown */}
                    {parameterType === "1" &&
                        <>
                            {isMultipleSelectionRequired === 'Yes' ?
                                <Select
                                    id={parameterId}
                                    name={parameterName}
                                    options={lstOption}
                                    isMulti
                                    placeholder="Select value..."
                                    className="backcolorinput react-select-multi"
                                    getOptionLabel={(e) => e.optionText}
                                    getOptionValue={(e) => e.optionValue}
                                    value={selectedValues[parameterName] || getDefaultValues(lstOption)}
                                    onChange={(selectedOptions) => handleMultiSelectChange(parameterName, selectedOptions)}
                                /> :
                                <select
                                    id={parameterName}
                                    name={parameterName}
                                    className="form-select form-select-sm backcolorinput"
                                    defaultValue=""
                                >
                                    <option value="">Select an option</option>
                                    {lstOption?.map((option, index) => (
                                        <option key={index} value={option.optionValue}>
                                            {option.optionText}
                                        </option>
                                    ))}
                                </select>
                            }
                        </>
                    }

                    {/* Text Box */}
                    {parameterType === "2" && (
                        <InputField
                            type="text"
                            className="backcolorinput"
                            placeholder="Enter value..."
                            name={parameterName}
                            id={parameterId}
                        />
                    )}

                    {/* Date Picker */}
                    {parameterType === "4" && (
                        <input
                            type="date"
                            className="form-control form-control-sm backcolorinput"
                            name={parameterName}
                            id={parameterId}
                            defaultValue={convertToISODate(defaultValueIfEmpty)}
                            min={getDateConstraint(shouldBeGreaterThanField)}
                            max={getDateConstraint(shouldBeLessThanField)}
                            // onChange={}

                        />
                    )}

                    {/* CheckBox */}
                    {parameterType === "6" && (
                        <div className="form-check form-check-inline">
                            <input
                                type="checkbox"
                                id={parameterId}
                                name={parameterName}
                                className="form-check-input"
                            />
                            <label className="form-check-label" htmlFor={parameterName}>
                                {defaultOption.optionText}
                            </label>
                        </div>
                    )}

                    {/* Radio Button */}
                    {parameterType === "7" && (
                        <div className="form-check form-check-inline">
                            <input
                                type="radio"
                                id={parameterId}
                                name={parameterName}
                                value={defaultOption.optionValue}
                                className="form-check-input"
                            />
                        </div>
                    )}
                </div>
            </div>
        );
    };


    return (
        <div className="container">
            <div className="row">
                {presentParams?.length > 0 && presentParams.map((param, index) => renderInputField(param))}
            </div>
        </div>
    );
};

export default Parameters;
