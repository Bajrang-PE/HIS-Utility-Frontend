import React, { useContext, useEffect, useState } from 'react'
import NavbarHeader from '../../components/headers/NavbarHeader'
import GlobalButtonGroup from '../../components/commons/GlobalButtonGroup'
import InputField from '../../components/commons/InputField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons'
import InputSelect from '../../components/commons/InputSelect'
import { HISContext } from '../../contextApi/HISContext'
import { ToastAlert } from '../../utils/commonFunction'
import GlobalDataTable from '../../components/commons/GlobalDataTable'

const ServiceUserMaster = () => {
  const { setShowDataTable, getAllServiceData, dataServiceDrpData, selectedOption, setSelectedOption, setActionMode, actionMode, getUserServiceData, userServiceData } = useContext(HISContext);

  const [values, setValues] = useState({
    "username": "", "password": "", "id": '', "dashboardFor": ""
  })
  const [previlegeFor, setPrevilegeFor] = useState('allServices')
  const [rows, setRows] = useState([{ serviceId: "", noOfServiceUsageAllowed: "" }]);
  const [showServiceUserTable, setShowServiceUserTable] = useState(false)
  const [singleData, setSingleData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (dataServiceDrpData?.length === 0) { getAllServiceData(); }
    if (userServiceData?.length === 0) { getUserServiceData(); }
  }, [])

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    if (name) {
      setValues({ ...values, [name]: value })
    }
  }

  const handleUpdateData = () => {
    if (selectedOption?.length > 0) {
      const selectedRow = userServiceData?.filter(dt => dt?.id === selectedOption[0]?.id)
      setSingleData(selectedRow);
      setActionMode('edit');
      setShowDataTable(false);
      setShowServiceUserTable(false);
      setSelectedOption([]);
    } else {
      ToastAlert('Please select a record', 'warning');
    }
  }

  useEffect(() => {
    if (singleData?.length > 0) {
      const jsonData = singleData[0]?.jsonData || {};
      setValues({
        ...values,
        id: singleData[0]?.id,
        dashboardFor: singleData[0]?.dashboardFor,
        username: jsonData?.userName,
        password: jsonData?.password
      })
      setPrevilegeFor(jsonData?.previlege);
      setRows(jsonData?.lstServiceMapped);
    }
  }, [singleData])

  console.log(singleData, 'single')

  // Handle input change
  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  // Add a new row
  const handleAddRow = () => {
    setRows([...rows, { serviceId: "", noOfServiceUsageAllowed: "" }]);
  };

  // Remove a row
  const handleRemoveRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  const column = [
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
              checked={selectedOption[0]?.id === row?.id}
              onChange={(e) => { setSelectedOption([row]) }}
            />
          </span>
        </div>,
      width: "8%"
    },
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
      width: "10%"
    },
    {
      name: 'Service User Name',
      selector: row => row?.jsonData?.userName || "---",
      sortable: true,
    },
    {
      name: 'Previlege For',
      selector: row => row?.jsonData?.previlege || "---",
      sortable: true,
    },
  ]


  const onOpenUserService = () => {
    setShowDataTable(true);
    setShowServiceUserTable(true);
  }

  const onTableClose = () => {
    setShowServiceUserTable(false);
    setSearchInput('');
    setSelectedOption([]);
  }

  return (
    <div>
      <NavbarHeader />
      <div className='main-master-page'>
        <GlobalButtonGroup isSave={true} isOpen={true} isReset={true} isParams={false} isWeb={false} onSave={null} onOpen={onOpenUserService} onReset={null} onParams={null} onWeb={null} />
        <div className='form-card m-auto p-3'>
          <b><h6 className='header-devider mt-0 mb-1'>Service User Master</h6></b>
          {/* SECTION DEVIDER*/}
          <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
            {/* //left columns */}
            <div className='col-sm-6'>
              <div className="form-group row">
                <label className="col-sm-5 col-form-label pe-0 required-label">UserName : </label>
                <div className="col-sm-7 ps-0 align-content-center">
                  <InputField
                    type="text"
                    className="backcolorinput"
                    placeholder="Enter value..."
                    name='username'
                    id="username"
                    onChange={handleValueChange}
                    value={values?.username}
                  />
                </div>
              </div>
            </div>
            {/* right columns */}
            <div className='col-sm-6'>
              <div className="form-group row">
                <label className="col-sm-5 col-form-label pe-0 required-label">Password : </label>
                <div className="col-sm-7 ps-0 align-content-center">
                  <InputField
                    type="text"
                    className="backcolorinput"
                    placeholder="Enter value..."
                    name='password'
                    id="password"
                    onChange={handleValueChange}
                    value={values?.password}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SECTION DEVIDER Previlege For */}
          <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
            {/* //left columns */}
            <div className='col-sm-6'>
              <div className="form-group row">
                <label className="col-sm-5 col-form-label pe-0">
                  Previlege For :
                </label>
                <div className="col-sm-7 ps-0 align-content-center">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="previlegeForAll"
                      name="previlegeFor"
                      value={previlegeFor}
                      onChange={(e) => setPrevilegeFor("allServices")}
                      checked={previlegeFor === "allServices"}
                    />
                    <label className="form-check-label" htmlFor="dbYes">
                      All Services
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="previlegeFor"
                      id="previlegeForSelected"
                      value={previlegeFor}
                      onChange={(e) => setPrevilegeFor("selectedServices")}
                      checked={previlegeFor === "selectedServices"}
                    />
                    <label className="form-check-label" htmlFor="dbNo">
                      Selected Services
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {previlegeFor !== "selectedServices" &&
            <b><h6 className='header-devider m-1' style={{ padding: "10px" }}></h6></b>
          }
          {previlegeFor === "selectedServices" &&
            <>
              <b><h6 className='header-devider mt-0 mb-1'>Service Previleges</h6></b>
              <div className="table-responsive">
                <table className="table text-center mb-0 table-bordered">
                  <thead className="text-white">
                    <tr className='m-0' style={{ fontSize: "smaller" }}>
                      <th style={{ width: "40%" }}>
                        <span className='required-label'>
                          Service Name
                        </span>
                      </th>
                      <th style={{ width: "20%" }}>
                        <span className='required-label'>
                          No. of use in one day
                          ( "-1" means indefinite usage)
                        </span>
                      </th>
                      <th style={{ width: "10%" }}>
                        <button
                          className="btn btn-outline-secondary btn-sm"
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
                          <InputSelect
                            type="text"
                            className="backcolorinput w-50 m-auto"
                            name='serviceName'
                            id='serviceName'
                            options={dataServiceDrpData}
                            value={row.serviceId}
                            onChange={(e) => handleInputChange(index, "serviceId", e.target.value)}
                            placeholder="Select Value..."
                          />
                        </td>
                        <td>
                          <InputField
                            type="number"
                            className="backcolorinput w-25 m-auto"
                            name='serverUrl'
                            id='serverUrl'
                            value={row.noOfServiceUsageAllowed}
                            onChange={(e) => handleInputChange(index, "noOfServiceUsageAllowed", e.target.value)}
                            placeholder="Enter counts..."
                          />
                        </td>
                        <td className='px-0'>
                          {rows.length > 0 && (
                            <button
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() => handleRemoveRow(index)}
                              style={{ padding: "0 4px" }}
                            >
                              <FontAwesomeIcon icon={faMinus} className="dropdown-gear-icon" size='sm' />
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          }

        </div>
      </div>
      {showServiceUserTable &&
        <GlobalDataTable title={"Service User List"} column={column} data={userServiceData} onModify={handleUpdateData} onDelete={null} setSearchInput={setSearchInput} onClose={onTableClose} isShowBtn={true} />
      }
    </div>
  )
}

export default ServiceUserMaster
