import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import InputField from './InputField';


const GlobalDataTable = (props) => {
    const { showDataTable, setShowDataTable, title, column, data, onModify, onDelete } = props;

    const handleClose = () => setShowDataTable(false);

    // const data = [
    //     { id: 1, name: 'John Doe', age: 28, email: 'johndoe@example.com' },
    //     { id: 2, name: 'Jane Smith', age: 34, email: 'janesmith@example.com' },
    //     { id: 3, name: 'Sam Wilson', age: 23, email: 'samwilson@example.com' },
    //     { id: 3, name: 'Sam Wilson', age: 23, email: 'samwilson@example.com' },
    //     { id: 3, name: 'Sam Wilson', age: 23, email: 'samwilson@example.com' },
    //     { id: 3, name: 'Sam Wilson', age: 23, email: 'samwilson@example.com' },
    //     { id: 3, name: 'Sam Wilson', age: 23, email: 'samwilson@example.com' },
    //     { id: 3, name: 'Sam Wilson', age: 23, email: 'samwilson@example.com' },
    //     { id: 3, name: 'Sam Wilson', age: 23, email: 'samwilson@example.com' },
    //     { id: 3, name: 'Sam Wilson', age: 23, email: 'samwilson@example.com' },
    //     { id: 3, name: 'Sam Wilson', age: 23, email: 'samwilson@example.com' },
    //     { id: 3, name: 'Sam Wilson', age: 23, email: 'samwilson@example.com' },
    //     { id: 3, name: 'Sam Wilson', age: 23, email: 'samwilson@example.com' },
    //     { id: 3, name: 'Sam Wilson', age: 23, email: 'samwilson@example.com' },
    //     { id: 3, name: 'Sam Wilson', age: 23, email: 'samwilson@example.com' },
    //     { id: 3, name: 'Sam Wilson', age: 23, email: 'samwilson@example.com' },
    //     // Add more rows as needed
    // ];

    const tableCustomStyles = {
        headRow: {
            style: {
                color: '#fff',
                backgroundColor: '#05396c ',
                borderBottomColor: '#FFFFFF',
                // outline: '1px solid #FFFFFF',
            },
        },
    }

    // const columns = [
    //     {
    //         name: <input
    //             type="checkbox"
    //             // checked={selectAll}
    //             // onChange={(e) => handleSelectAll(e.target.checked, "gnumUserId")}
    //             disabled={true}
    //             className="form-check-input log-select"
    //         />,
    //         cell: row =>
    //             <div style={{ position: 'absolute', top: 4, left: 10 }}>
    //                 <span className="btn btn-sm text-white px-1 py-0 mr-1" >
    //                     <input
    //                         type="checkbox"
    //                     // checked={selectedRows.includes(row.gnumUserId)}
    //                     // onChange={(e) => { handleRowSelect(row.gnumUserId) }}
    //                     />
    //                 </span>
    //             </div>,
    //         width: "8%"
    //     },
    //     {
    //         name: 'ID',
    //         selector: row => row.id,
    //     },
    //     {
    //         name: 'Name',
    //         selector: row => row.name,
    //     },
    //     {
    //         name: 'Age',
    //         selector: row => row.age,
    //     },
    //     {
    //         name: 'Email',
    //         selector: row => row.email,
    //     },
    // ]

    return (
        <div>
            <Modal show={showDataTable} onHide={handleClose} size='xl'>
                <Modal.Header closeButton className='p-2'></Modal.Header>
                <b><h4 className='datatable-header mx-3 py-1 mt-1 px-1'>{title}Widget List</h4></b>
                <div className='datatable-btns row mx-3 my-1'>
                    <div className='col-6'>
                        <button className='btn btn-sm me-1' onClick={onModify}><FontAwesomeIcon icon={faEdit}
                            className="dropdown-gear-icon me-1" />Modify</button>
                        <button className='btn btn-sm ms-1' onClick={onModify}><FontAwesomeIcon icon={faRemove}
                            className="dropdown-gear-icon me-1" />Delete</button>
                    </div>
                    <div className="col-6 d-flex justify-content-end align-items-center">
                        <label className="col-form-label me-2">Search :</label>
                        <div className=''>
                            <InputField
                                type="text"
                                id="customMsgForNoData"
                                name="customMsgForNoData"
                                placeholder="Enter"
                                className="backcolorinput"
                            // onChange={handleValueChange}
                            // value={values?.customMsgForNoData}
                            />
                        </div>
                    </div>

                </div>
                <Modal.Body className='px-3 py-0'>
                    <DataTable
                        // title="User Data"
                        dense
                        striped
                        fixedHeader
                        persistTableHead={true}
                        selectableRowsHighlight
                        highlightOnHover
                        responsive
                        fixedHeaderScrollHeight='auto'
                        columns={column}
                        data={data}
                        pagination
                        pointerOnHover
                        customStyles={tableCustomStyles}
                    />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default GlobalDataTable;
