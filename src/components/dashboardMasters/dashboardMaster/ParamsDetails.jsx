import React, { useEffect, useState } from 'react'
import { ToastAlert } from '../../../utils/commonFunction';
import { leftCaret, rightCaret } from '../../../utils/commonSVG';
import { parameterOptions } from '../../../localData/DropDownData';
import InputSelect from '../../commons/InputSelect';

const ParamsDetails = (props) => {
    const { availableOptions, setAvailableOptions, mapedDt, isMulti, selectedOptions, setSelectedOptions, handleValueChange, handleRadioChange, radioValues, values, parameterDrpData, pageName } = props;

    // const [selectedOptions, setSelectedOptions] = useState();
    const [leftSelectedValues, setLeftSelectedValues] = useState([]);
    const [rightSelectedValues, setRightSelectedValues] = useState([]);

    const leftSelectEle = document.getElementById('leftRightSelect');
    const rightSelectEle = document.getElementById('leftRightSelect1');

    useEffect(() => {
        // setSelectedOptions(mapedDt)
    }, [mapedDt])


    const handleLeftSelect = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setLeftSelectedValues(value);
    };

    const handleRightSelect = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setRightSelectedValues(value);
    };

    //FUNCTION TO MOVE SELECTED VALUES RIGHT
    const moveRight = () => {
        if (leftSelectedValues?.length > 0) {

            const selected = availableOptions.filter(option => leftSelectedValues.includes(option.value?.toString()));
            const chkDuplicate = selectedOptions?.filter(option => leftSelectedValues?.includes(option.value?.toString()));

            if (chkDuplicate?.length > 0) {
                ToastAlert('Value Already Exist!', 'warning');
            } else if ((selectedOptions?.length >= 1 && !isMulti) || (leftSelectedValues?.length > 1 && !isMulti)) {
                ToastAlert('Can not assign multiple roles!', 'warning');
            } else {
                // setSelectedOptions([...selectedOptions, ...selected]);
                setAvailableOptions(availableOptions.filter(option => !leftSelectedValues.includes(option.value.toString())));
                setLeftSelectedValues([]);
                leftSelectEle.value = null;
            }
        } else {
            ToastAlert('Please select a value!', 'warning');
        }
    };


    //FUNCTION TO MOVE SELECTED VALUES LEFT
    const moveLeft = () => {
        if (rightSelectedValues?.length > 0) {
            const selected = selectedOptions.filter(option => rightSelectedValues.includes(option.value.toString()));
            setAvailableOptions([...availableOptions, ...selected]);
            // setSelectedOptions(selectedOptions.filter(option => !rightSelectedValues.includes(option.value.toString())));
            setRightSelectedValues([]);
            rightSelectEle.value = null;
        } else {
            ToastAlert('Please select a value!', 'warning');
        }
    };
    return (
        <>
            <b><h6 className='header-devider m-0'>Parameter Details</h6></b>
            <div className='d-flex justify-content-center mt-1 mb-2 role-theme'>
                <div className='' style={{ width: "30%" }}>
                    <b><h6 className='mb-2 text-center'>Parameter Name</h6></b>
                    <select className="form-select form-select-sm backcolorinput" id='leftRightSelect' multiple size="6" aria-label="size 4 select example" onChange={handleLeftSelect}>
                        {parameterDrpData?.map((opt, index) => (
                            <option value={opt.value} key={index}>{opt.label}</option>
                        ))}
                    </select>
                </div>

                <div className='align-self-center' style={{ marginLeft: "2%", marginRight: "2%" }}>

                    <div className='d-flex justify-content-center'>
                        <button type='button' className='btn btn-outline-secondary btn-sm m-1' disabled={availableOptions?.length > 0 ? false : true} onClick={moveRight}>
                            <svg dangerouslySetInnerHTML={{ __html: rightCaret }} height={16} width={16} />
                        </button>

                    </div>

                    <div className='d-flex justify-content-center'>
                        <button type='button' className='btn btn-outline-secondary btn-sm m-1' disabled={selectedOptions?.length > 0 ? false : true} onClick={moveLeft}>
                            <svg dangerouslySetInnerHTML={{ __html: leftCaret }} height={16} width={16} />
                        </button>
                    </div>
                </div>

                <div className='' style={{ width: "30%" }}>
                    <b><h6 className='mb-2 text-center'>Selected Parameter Name</h6></b>
                    <select className="form-select form-select-sm backcolorinput" id='leftRightSelect1' multiple size="6" aria-label="size 4 select example" onChange={handleRightSelect}>
                        {selectedOptions?.map((opt, index) => (
                            <option value={opt.value} key={index}>{opt.label}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* SECTION DEVIDER parameter details*/}
            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">Parameter Options : </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <InputSelect
                                className="backcolorinput "
                                // placeholder="Enter value..."
                                name='parameterOption'
                                id="parameterOption"
                                options={parameterOptions}
                                onChange={handleValueChange}
                                value={values?.parameterOption}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ParamsDetails
