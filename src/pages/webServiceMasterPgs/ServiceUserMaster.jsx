import React, { useState } from 'react'
import NavbarHeader from '../../components/headers/NavbarHeader'
import GlobalButtonGroup from '../../components/commons/GlobalButtonGroup'
import InputField from '../../components/commons/InputField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons'
import InputSelect from '../../components/commons/InputSelect'

const ServiceUserMaster = () => {
  const [values, setValues] = useState({
    "username": "", "password": ""
  })
  const [previlegeFor, setPrevilegeFor] = useState('all')
  const [rows, setRows] = useState([{ serviceName: "", numberOfUse: "" }]);

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    if (name) {
      setValues({ ...values, [name]: value })
    }
  }

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
    <div>
      <NavbarHeader />
      <div className='main-master-page'>
      <GlobalButtonGroup isSave={true} isOpen={true} isReset={true} isParams={false} isWeb={false} onSave={null} onOpen={null} onReset={null} onParams={null} onWeb={null} />
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
                      onChange={(e) => setPrevilegeFor("all")}
                      checked={previlegeFor === "all"}
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
                      onChange={(e) => setPrevilegeFor("selected")}
                      checked={previlegeFor === "selected"}
                    />
                    <label className="form-check-label" htmlFor="dbNo">
                      Selected Services
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {previlegeFor !== "selected" &&
            <b><h6 className='header-devider m-1' style={{ padding: "10px" }}></h6></b>
          }
          {previlegeFor === "selected" &&
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
                            options={[{ value: 'query', label: "By Query" }, { value: 'multiRowOption', label: "By Multi Row Option" }]}
                            value={row.serviceName}
                            onChange={(e) => handleInputChange(index, "serviceName", e.target.value)}
                            placeholder="Select Value..."
                          />
                        </td>
                        <td>
                          <InputField
                            type="number"
                            className="backcolorinput w-25 m-auto"
                            name='serverUrl'
                            id='serverUrl'
                            value={row.numberOfUse}
                            onChange={(e) => handleInputChange(index, "numberOfUse", e.target.value)}
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
    </div>
  )
}

export default ServiceUserMaster
