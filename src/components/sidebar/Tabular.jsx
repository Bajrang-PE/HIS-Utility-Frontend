import React from 'react'
import DataTable from 'react-data-table-component';

const Tabular = ({
    columns,
    data,
    pagination,
    recordsPerPage,
    fixedHeader = true,
    scrollHeight = "400px",
    headingFontColor = "#ffffff",
    headingBgColor = "#007bff",
    headingAlignment,
    recordsPerPageOptions,
    isTableHeadingRequired
}) => {

    const customStyles = {
        headCells: {
            style: {
                backgroundColor: headingBgColor,
                color: headingFontColor,
                textAlign: headingAlignment, // Align header text
                fontWeight: "bold",
                padding: "10px",
            },
        },
    };

    return (
        <div>
            <DataTable
                persistTableHead={true}
                dense
                columns={columns}
                data={data}
                pagination={pagination}
                fixedHeader={fixedHeader}
                fixedHeaderScrollHeight={scrollHeight + 'px'}
                paginationPerPage={recordsPerPage}
                paginationRowsPerPageOptions={recordsPerPageOptions}
                // paginationPerPage={'5'}
                // paginationRowsPerPageOptions={[5,10, 15, 20, 50]}
                highlightOnHover
                striped
                customStyles={customStyles}
                responsive
                noTableHead={isTableHeadingRequired}
            />
        </div>
    )
}

export default Tabular
