import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import InputSelect from '../../commons/InputSelect';
import InputField from '../../commons/InputField';

const WidgetMapping = () => {

    const [rows, setRows] = useState([{ widgetName: "", DisplayOrder: "", widgetWidth: "", widgetHeight: "", widgetColor: "", widgetDisplay: "" }]);

    const handleInputChange = (index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
    };

    const handleAddRow = (name) => {
        if (name === 'query') {
            setRows([...rows, { widgetName: "", DisplayOrder: "", widgetWidth: "", widgetHeight: "", widgetColor: "", widgetDisplay: "" }]);
        }
    };

    const handleRemoveRow = (index, name) => {
        if (name === "query") {
            const updatedRows = rows.filter((_, i) => i !== index);
            setRows(updatedRows);
        }
    };

    return (
        <>
            <b><h6 className='header-devider my-1'>Widget Mapping Details</h6></b>

            <div className="table-responsive row my-1 mx-0">
                <table className="table table-borderless text-center mb-0">
                    <thead className="text-white">
                        <tr className='header-devider m-0   rounded-2'>
                            <th style={{ width: "20%" }}>Widget Name</th>
                            <th style={{ width: "10%" }}>Display Order</th>
                            <th style={{ width: "15%" }}>Widget Width</th>
                            <th style={{ width: "20%" }}>Widget Height(px)</th>
                            <th style={{ width: "15%" }}>Widget Color</th>
                            <th style={{ width: "15%" }}>Widget Display</th>
                            <th >
                                <button
                                    className="btn btn-secondary btn-sm"
                                    onClick={() => handleAddRow('query')}
                                    style={{ padding: "0 4px" }}
                                >
                                    <FontAwesomeIcon icon={faAdd} className="dropdown-gear-icon" size='sm' />
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <td>
                                    <InputSelect
                                        id="parameterFor"
                                        name="parameterFor"
                                        // placeholder="Select value..."
                                        options={[{ value: 1, label: "Widget" }]}
                                        className="backcolorinput"
                                    // value={values?.parameterFor}
                                    // onChange={handleValueChange}
                                    />
                                </td>
                                <td>
                                    <InputField
                                        type="text"
                                        className="backcolorinput"
                                        name='serviceRefName'
                                        id='serviceRefName'
                                    // value={serverDetails?.serviceRefName}
                                    // onChange={handleServerChange}
                                    />
                                </td>
                                <td>
                                    <InputSelect
                                        id="parameterFor"
                                        name="parameterFor"
                                        // placeholder="Select value..."
                                        options={[{ value: 1, label: "Yes" }, { value: 0, label: "No" }]}
                                        className="backcolorinput"
                                    // value={values?.parameterFor}
                                    // onChange={handleValueChange}
                                    />
                                </td>
                                <td>
                                    <InputField
                                        type="text"
                                        className="backcolorinput"
                                        name='serviceRefName'
                                        id='serviceRefName'
                                    // value={serverDetails?.serviceRefName}
                                    // onChange={handleServerChange}
                                    />
                                </td>
                                <td>
                                    <InputSelect
                                        id="parameterFor"
                                        name="parameterFor"
                                        // placeholder="Select value..."
                                        options={[{ value: 1, label: "Horizontal" }, { value: 0, label: "Vertical" }]}
                                        className="backcolorinput"
                                    // value={values?.parameterFor}
                                    // onChange={handleValueChange}
                                    />
                                </td>
                                <td>
                                    <InputSelect
                                        id="parameterFor"
                                        name="parameterFor"
                                        // placeholder="Select value..."
                                        options={[{ value: 1, label: "Horizontal" }, { value: 0, label: "Vertical" }]}
                                        className="backcolorinput"
                                    // value={values?.parameterFor}
                                    // onChange={handleValueChange}
                                    />
                                </td>

                                <td className='px-0'>
                                    {rows.length > 0 && (
                                        <div>
                                            <button
                                                className="btn btn-outline-secondary btn-sm ms-1"
                                                onClick={() => handleRemoveRow(index, "query")}
                                                style={{ padding: "0 4px" }}
                                            >
                                                <FontAwesomeIcon icon={faMinus} className="dropdown-gear-icon" size='sm' />
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default WidgetMapping
