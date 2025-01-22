import React, { useContext } from 'react'
import GlobalDataTable from '../../commons/GlobalDataTable'
import { HISContext } from '../../../contextApi/HISContext';

const DataServiceTable = (props) => {
    const { data, onModify, onDelete, onClose, setSearchInput, isShowBtn } = props;

    const webServiceColumn = [
        {
            name: <input
                type="checkbox"
                // checked={selectAll}
                // onChange={(e) => handleSelectAll(e.target.checked, "gnumUserId")}
                disabled={true}
                className="form-check-input log-select"
            />,
            cell: row =>
                <div style={{ position: 'absolute', top: 4, left: 10 }}>
                    <span className="btn btn-sm text-white px-1 py-0 mr-1" >
                        <input
                            type="checkbox"
                        // checked={selectedRows.includes(row.gnumUserId)}
                        // onChange={(e) => { handleRowSelect(row.gnumUserId) }}
                        />
                    </span>
                </div>,
            width: "8%"
        },
        {
            name: 'Service ID',
            selector: row => row.serviceId,
            sortable: true,
            width: "10%"
        },
        {
            name: 'Service Name',
            selector: row => row?.serviceName,
            sortable: true,
        },
        {
            name: 'Service Display Name',
            selector: row => row?.serviceDisplayName,
            sortable: true,
        },
        {
            name: 'Service Category',
            selector: row => row?.parameterType || "---",
            sortable: true,
        },
    ]
    return (
        <div>
            <GlobalDataTable title={"Data Service List"} column={webServiceColumn} data={data} onModify={onModify} onDelete={onDelete} setSearchInput={setSearchInput} onClose={onClose} isShowBtn={isShowBtn} />
        </div>
    )
}

export default DataServiceTable
