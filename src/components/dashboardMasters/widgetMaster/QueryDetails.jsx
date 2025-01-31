import React, { useContext, useEffect, useState } from 'react'
import InputField from '../../commons/InputField'
import InputSelect from '../../commons/InputSelect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons'
import FormatColumn from '../../commons/FormatColumn'
import { HISContext } from '../../../contextApi/HISContext'

const QueryDetails = (props) => {

    const { showDataTable, setShowDataTable } = useContext(HISContext);
    const { handleValueChange, handleRadioChange, radioValues, values, setValues } = props;

    const [rows, setRows] = useState([{ queryLabel: "", mainQuery: "", isMultiRowDataTable: "", tableDataDisplay: "", totalRecordCountQuery: "" }]);

    const [procedureRows, setProcedureRows] = useState([{ queryLabel: "", serviceReferenceNumber: "", webserviceName: "", isMultiRowDataTable: "", tableDataDisplay: "" }]);

    const [showFormatModal, setShowFormatModal] = useState(false);

    useEffect(() => {
        if (values?.query?.length > 0 && radioValues?.selectedModeQuery === 'Query') {
            setRows(values?.query);
        } else if (values?.query?.length > 0 && radioValues?.selectedModeQuery === 'WebSevice') {
            setProcedureRows(values?.query);
        }
    }, [values?.query, radioValues?.selectedModeQuery])

    // Handle input change
    const handleInputRowChange = (index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
        setValues({ ...values, ['query']: updatedRows })
    };

    const handleInputWebChange = (index, field, value) => {
        const updatedRows = [...procedureRows];
        updatedRows[index][field] = value;
        setProcedureRows(updatedRows);
        setValues({ ...values, ['query']: updatedRows })
    };

    // Add a new row
    const handleAddRow = (name) => {
        if (name === 'query') {
            setRows([...rows, { queryLabel: "", mainQuery: "", dataTableReq: "", tableDataDisplay: "" }]);
        } else if (name === "procedure") {
            setProcedureRows([...procedureRows, { queryLabel: "", serviceReferenceNumber: "", webserviceName: "", isMultiRowDataTable: "", tableDataDisplay: "" }])
        }
    };

    // Remove a row
    const handleRemoveRow = (index, name) => {
        if (name === "query") {
            const updatedRows = rows.filter((_, i) => i !== index);
            setRows(updatedRows);
        } else if (name === 'procedure') {
            const updatedRows = procedureRows.filter((_, i) => i !== index);
            setProcedureRows(updatedRows);
        }
    };

    const closeFormatModal = () => {
        setShowFormatModal(false);
    }

    console.log(procedureRows, 'rows');

    return (
        <>
            <b><h6 className='header-devider m-0'>Query or Procedure or Webservice Details</h6></b>

            {/* SECTION DEVIDER widget mode of query */}
            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                {/* //left columns */}
                <div className='col-sm-6'>
                    <div className="form-group row">
                        <label className="col-sm-5 col-form-label pe-0">
                            Select Mode for Query :
                        </label>
                        <div className="col-sm-7 ps-0 align-content-center">
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeQueryQuery"
                                    name="selectedModeQuery"
                                    value={'Query'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.selectedModeQuery === "Query"}
                                />
                                <label className="form-check-label" htmlFor="dbYes">
                                    By Query
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeQueryProcedure"
                                    name="selectedModeQuery"
                                    value={'Procedure'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.selectedModeQuery === "Procedure"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    By Procedure
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeQueryWebService"
                                    name="selectedModeQuery"
                                    value={'WebSevice'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.selectedModeQuery === "WebSevice"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    By Webservice
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    id="selectedModeQueryParent"
                                    name="selectedModeQuery"
                                    value={'Parent'}
                                    onChange={handleRadioChange}
                                    checked={radioValues?.selectedModeQuery === "Parent"}
                                />
                                <label className="form-check-label" htmlFor="dbNo">
                                    By Parent
                                </label>
                            </div>
                            {radioValues?.widgetViewed === 'KPI' &&
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        id="selectedModeQueryHtmlText"
                                        name="selectedModeQuery"
                                        value={'HTML'}
                                        onChange={handleRadioChange}
                                        checked={radioValues?.selectedModeQuery === "HTML"}
                                    />
                                    <label className="form-check-label" htmlFor="dbNo">
                                        By HTML Text
                                    </label>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                {radioValues?.widgetViewed === "Tabular" &&
                    <div className='col-sm-6'>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label pe-0">
                                Is Data Table Required :
                            </label>
                            <div className="col-sm-7 ps-0 align-content-center">
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="isDataTblReq"
                                        id="isDataTblReqYes"
                                        value={'Yes'}
                                        onChange={handleRadioChange}
                                        checked={radioValues?.isDataTblReq === 'Yes'}
                                    />
                                    <label className="form-check-label" htmlFor="dbYes">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="isDataTblReq"
                                        id="isDataTblReqNo"
                                        value={'No'}
                                        onChange={handleRadioChange}
                                        checked={radioValues?.isDataTblReq === 'No'}
                                    />
                                    <label className="form-check-label" htmlFor="dbNo">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            {/* FOR QUERY */}
            {(radioValues?.widgetViewed === "Tabular" && radioValues?.selectedModeQuery === "Query") &&
                <div className="table-responsive row p-1">
                    <table className="table table-borderless text-center mb-0">
                        <thead className="text-white">
                            <tr className='header-devider m-0'>
                                <th style={{ width: "15%" }}>Query Label</th>
                                <th style={{ width: "20%" }}>Main Query</th>
                                {radioValues?.isDataTblReq === 'Yes' &&
                                    <th style={{ width: "20%" }}>Data Table Required</th>
                                }
                                {radioValues?.isDataTblReq === 'No' &&
                                    <th style={{ width: "20%" }}>Total Record Count Query</th>
                                }

                                <th style={{ width: "15%" }}>Data Table Display</th>
                                <th style={{ width: "15%" }}>
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
                                        <InputField
                                            type="text"
                                            className="backcolorinput"
                                            name='queryLabel'
                                            id={`queryLabel-${index}`}
                                            value={row?.queryLabel}
                                            onChange={(e) => handleInputRowChange(index, 'queryLabel', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <textarea
                                            className="form-control backcolorinput"
                                            placeholder="Enter value..."
                                            name="mainQuery"
                                            id={`mainQuery-${index}`}
                                            rows="1"
                                            value={row?.mainQuery}
                                            onChange={(e) => handleInputRowChange(index, 'mainQuery', e.target.value)}
                                        ></textarea>
                                    </td>
                                    <td>
                                        {radioValues?.isDataTblReq === 'Yes' &&
                                            <InputSelect
                                                name="isMultiRowDataTable"
                                                options={[{ value: 'Yes', label: "Yes" }, { value: 'No', label: "No" }]}
                                                className="backcolorinput"
                                                id={`isMultiRowDataTable-${index}`}
                                                value={row?.isMultiRowDataTable}
                                                onChange={(e) => handleInputRowChange(index, 'isMultiRowDataTable', e.target.value)}
                                            />
                                        }
                                        {radioValues?.isDataTblReq === 'No' &&
                                            <textarea
                                                className="form-control backcolorinput"
                                                placeholder="Enter value..."
                                                name="totalRecordCountQuery"
                                                rows="1"
                                                id={`totalRecordCountQuery-${index}`}
                                                value={row?.totalRecordCountQuery}
                                                onChange={(e) => handleInputRowChange(index, 'totalRecordCountQuery', e.target.value)}
                                            ></textarea>}
                                    </td>
                                    <td>
                                        <InputSelect
                                            name="tableDataDisplay"
                                            // placeholder="Select value..."
                                            options={[{ value: 'horizontal', label: "Horizontal" }, { value: 'vertical', label: "Vertical" }]}
                                            className="backcolorinput"
                                            id={`tableDataDisplay-${index}`}
                                            value={row?.tableDataDisplay}
                                            onChange={(e) => handleInputRowChange(index, 'tableDataDisplay', e.target.value)}
                                        />
                                    </td>

                                    <td className='px-0'>
                                        {rows.length > 0 && (
                                            <div>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm me-1"
                                                    onClick={() => { setShowDataTable(true); setShowFormatModal(true) }}
                                                    style={{ padding: "0 4px" }}
                                                >
                                                    Format
                                                </button>
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
            }

            {/* FOR PROCEDURE */}
            {radioValues?.selectedModeQuery === "Procedure" &&
                <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                    {/* //left columns */}
                    <div className='col-sm-6'>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label pe-0">Procedure Name : </label>
                            <div className="col-sm-7 ps-0 align-content-center">
                                <InputField
                                    type='text'
                                    className="backcolorinput"
                                    placeholder="Enter value..."
                                    name='procedureName'
                                    id="procedureName"
                                    onChange={handleValueChange}
                                    value={values?.procedureName}
                                />
                            </div>
                        </div>
                    </div>
                    {/* right columns */}
                    {radioValues?.widgetViewed === "Tabular" &&
                        <div className='col-sm-6 text-center'>
                            <button
                                className="btn btn-outline-secondary btn-sm me-1"
                                onClick={() => { setShowDataTable(true); setShowFormatModal(true) }}
                                style={{ padding: "0 4px" }}
                            >
                                Format Column
                            </button>
                        </div>
                    }
                </div>
            }

            {/* FOR WEBSERVICE tabular */}
            {(radioValues?.widgetViewed === "Tabular" && radioValues?.selectedModeQuery === "WebSevice") &&
                <div className="table-responsive row p-1">
                    <table className="table table-borderless text-center mb-0">
                        <thead className="text-white">
                            <tr className='header-devider m-0'>
                                <th style={{ width: "15%" }}>Query Label</th>
                                <th style={{ width: "20%" }}>Webservice Reference Name</th>
                                <th style={{ width: "15%" }}>Webservice Id</th>
                                {radioValues?.isDataTblReq === 'Yes' &&
                                    <th style={{ width: "15%" }}>Data Table Required</th>
                                }
                                <th style={{ width: "15%" }}>Table Data Display</th>
                                <th style={{ width: "10%" }}>
                                    <button
                                        className="btn btn-secondary btn-sm"
                                        onClick={() => { setShowDataTable(true); setShowFormatModal(true) }}
                                        style={{ padding: "0 4px" }}
                                    >
                                        Format Column
                                    </button>
                                </th>
                                <th >
                                    <button
                                        className="btn btn-secondary btn-sm"
                                        onClick={() => handleAddRow('procedure')}
                                        style={{ padding: "0 4px" }}
                                    >
                                        <FontAwesomeIcon icon={faAdd} className="dropdown-gear-icon" size='sm' />
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {procedureRows.map((row, index) => (
                                <tr key={index}>
                                    <td>
                                        <InputField
                                            type="text"
                                            className="backcolorinput"
                                            name='queryLabel'
                                            id={`queryLabel-${index}`}
                                            value={row?.queryLabel}
                                            onChange={(e) => handleInputWebChange(index, 'queryLabel', e.target.value)}
                                        />
                                    </td>

                                    <td>
                                        <InputSelect
                                            name="serviceReferenceNumber"
                                            placeholder="Select value..."
                                            options={[{ value: 'local', label: "Localhost" }]}
                                            className="backcolorinput"
                                            id={`serviceReferenceNumber-${index}`}
                                            value={row?.serviceReferenceNumber}
                                            onChange={(e) => handleInputWebChange(index, 'serviceReferenceNumber', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <InputField
                                            type="text"
                                            className="backcolorinput"
                                            name='webserviceName'
                                            id={`webserviceName-${index}`}
                                            value={row?.webserviceName}
                                            onChange={(e) => handleInputWebChange(index, 'webserviceName', e.target.value)}
                                        />
                                    </td>
                                    {radioValues?.isDataTblReq === 'Yes' &&
                                        <td>
                                            <InputSelect
                                                name="isMultiRowDataTable"
                                                // placeholder="Select value..."
                                                options={[{ value: 'Yes', label: "Yes" }, { value: 'No', label: "No" }]}
                                                className="backcolorinput"
                                                id={`isMultiRowDataTable-${index}`}
                                                value={row?.isMultiRowDataTable}
                                                onChange={(e) => handleInputWebChange(index, 'isMultiRowDataTable', e.target.value)}
                                            />
                                        </td>
                                    }
                                    <td>
                                        <InputSelect
                                            name="tableDataDisplay"
                                            // placeholder="Select value..."
                                            options={[{ value: 'horizontal', label: "Horizontal" }, { value: 'vertical', label: "Vertical" }]}
                                            className="backcolorinput"
                                            id={`tableDataDisplay-${index}`}
                                            value={row?.tableDataDisplay}
                                            onChange={(e) => handleInputWebChange(index, 'tableDataDisplay', e.target.value)}
                                        />
                                    </td>
                                    <td></td>

                                    <td className='px-0'>
                                        {procedureRows.length > 0 && (
                                            <div>
                                                <button
                                                    className="btn btn-outline-secondary btn-sm ms-1"
                                                    onClick={() => handleRemoveRow(index, "procedure")}
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
            }

            {/* FOR GRAPH AND QUERY */}
            {((radioValues?.widgetViewed === "Graph" || radioValues?.widgetViewed === "Map") && radioValues?.selectedModeQuery === "Query") &&
                <div className="table-responsive row p-1">
                    <table className="table table-borderless text-center mb-0">
                        <thead className="text-white">
                            <tr className='header-devider m-0'>
                                <th style={{ width: "40%" }}>Query Label</th>
                                <th style={{ width: "50%" }}>Main Query</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
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
                            </tr>
                        </tbody>
                    </table>
                </div>
            }

            {/* FOR GRAPH AND WEBSERVICE */}
            {/* SECTION DEVIDER*/}
            {(radioValues?.widgetViewed !== "Tabular" && radioValues?.selectedModeQuery === "WebSevice") &&
                <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                    {/* //left columns */}
                    <div className='col-sm-6'>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label pe-0">Webservice Reference Name : </label>
                            <div className="col-sm-7 ps-0 align-content-center">
                                <InputSelect
                                    className="backcolorinput "
                                    placeholder="Enter value..."
                                    name='parameterOption'
                                    id="parameterOption"
                                    options={[]}
                                    onChange={handleValueChange}
                                    value={values?.parameterOption}
                                />
                            </div>
                        </div>
                    </div>
                    {/* right columns */}
                    <div className='col-sm-6'>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label pe-0">Webservice ID : </label>
                            <div className="col-sm-7 ps-0 align-content-center">
                                <InputField
                                    type='text'
                                    className="backcolorinput "
                                    placeholder="Enter value..."
                                    name='paraComboFontColor'
                                    id="paraComboFontColor"
                                    onChange={handleValueChange}
                                    value={values?.paraComboFontColor}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            }

            {/* FOR KPI AND QUERY AND HTML TEXT */}
            {/* SECTION DEVIDER*/}
            {((radioValues?.widgetViewed === "KPI" || radioValues?.widgetViewed === "newsTicker") && radioValues?.selectedModeQuery === "Query") &&
                <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                    {/* //left columns */}
                    <div className='col-sm-6'>
                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label pe-0">Main Query : </label>
                            <div className="col-sm-7 ps-0 align-content-center">
                                <textarea
                                    className="form-control backcolorinput"
                                    placeholder="Enter value..."
                                    name="lastUpdatedQuery"
                                    id='lastUpdatedQuery'
                                    rows="2"
                                    onChange={handleValueChange}
                                    value={values?.lastUpdatedQuery}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {showFormatModal &&
                <FormatColumn title={"Format Display columns"} onClose={closeFormatModal} />
            }
        </>
    )
}

export default QueryDetails
