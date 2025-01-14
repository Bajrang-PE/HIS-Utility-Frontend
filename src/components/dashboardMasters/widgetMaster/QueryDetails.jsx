import React, { useState } from 'react'
import InputField from '../../commons/InputField'
import InputSelect from '../../commons/InputSelect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons'

const QueryDetails = () => {
    const [rows, setRows] = useState([{ queryLabel: "", mainQuery: "", dataTableReq: "", tableDataDisplay: "" }]);

    // Handle input change
    const handleInputChange = (index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
    };

    // Add a new row
    const handleAddRow = () => {
        setRows([...rows, { serviceName: "", numberOfUse: "" }]);
    };

    // Remove a row
    const handleRemoveRow = (index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };

    return (
        <>
           <b><h6 className='header-devider m-0'>Query or Procedure or Webservice Details</h6></b>
            <div className="table-responsive row p-1">
                <table className="table table-borderless text-center mb-0">
                    <thead className="text-white">
                        <tr className='header-devider m-0'>
                            <th style={{ width: "15%" }}>Query Label</th>
                            <th style={{ width: "25%" }}>Main Query</th>
                            <th style={{ width: "15%" }}>Data Table Required</th>
                            <th style={{ width: "15%" }}>Data Table Display</th>
                            <th style={{ width: "15%" }}>
                                <button
                                    className="btn btn-secondary btn-sm"
                                    onClick={handleAddRow}
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
                                    <textarea
                                        className="form-control backcolorinput"
                                        placeholder="Enter value..."
                                        name="query"
                                        id='query'
                                        rows="1"
                                    // onChange={handleValueChange}
                                    // value={values?.query}
                                    ></textarea>
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
                                                className="btn btn-outline-secondary btn-sm me-1"
                                                // onClick={() => handleRemoveRow(index)}
                                                style={{ padding: "0 4px" }}
                                            >
                                                Format
                                            </button>
                                            <button
                                                className="btn btn-outline-secondary btn-sm ms-1"
                                                onClick={() => handleRemoveRow(index)}
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

export default QueryDetails
