import React, { useState } from 'react'
import NavbarHeader from '../../components/headers/NavbarHeader'
import InputField from '../../components/commons/InputField'
import InputSelect from '../../components/commons/InputSelect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faDatabase, faEdit, faFile, faRefresh, faTrash } from '@fortawesome/free-solid-svg-icons'
import { itemForDashboard, serverName } from '../../localData/DropDownData'
import { fetchData } from '../../utils/ApiHooks'
import { ToastAlert } from '../../utils/commonFunction'

const DbConfigMaster = () => {
    const [values, setValues] = useState({
        "configurationFor": '', "serverName": "", "jndiServer": '', "jndiServer1": '', "jndiServer2": '', "jndiServer3": '', "driverClass": "", "userName": "", "connectionURL": "", "password": "", "staticReportHead1": "", "staticReportHead2": "", "staticReportHead3": "", "reportHeaderByQuery": "", "logoImageUrl": "", "staticDefaultLimit": ""
    })
    const [serverDetails, setServerDetails] = useState({
        "serviceRefName": "", "serverUrl": "", "defaultMethod": 1, "serviceUserName": "", "servicePassword": ""
    })
    // FOR RADIO BUTTONS
    const [isDbConnReq, setIsDbConnReq] = useState(false);
    const [isDashboardCached, setIsDashboardCached] = useState(false);
    const [isConsoleReq, setIsConsoleReq] = useState(false);
    const [isAccessReq, setIsAccessReq] = useState(false);
    const [isErrorReq, setIsErrorReq] = useState(false);
    const [isLogoReq, setIsLogoReq] = useState(false);
    const [logoPosition, setLogoPosition] = useState("left");
    const [headingAlignment, setHeadingAlignment] = useState("left");
    const [isLimitRecReq, setIsLimitRecReq] = useState(false);

    const handleValueChange = (e) => {
        const { value, name } = e.target;
        if (name) {
            setValues({ ...values, [name]: value })
        }
    }
    const handleServerChange = (e) => {
        const { value, name } = e.target;
        if (name) {
            setServerDetails({ ...serverDetails, [name]: value })
        }
    }

    const checkDatabaseConnection = () => {
        fetchData("http://10.226.29.211:8025/hisutils/check-db-connection").then((data) => {
            if (data) {
                // console.log(data, 'data');
                ToastAlert(data)
            } else {
                console.log('error')
            }
        })
    }


    return (
        <>
            <NavbarHeader />
            <div className='main-master-page'>
                <div className='form-card m-auto p-2'>
                    <b><h6 className='header-devider m-0'> Configuration Master</h6></b>
                    <form action="">
                        <div className='py-2 px-2'>
                            {/* SECTION DEVIDER config for and server*/}
                            <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                                {/* //left columns */}
                                <div className='col-sm-6'>
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label pe-0 required-label">Configuration For : </label>
                                        <div className="col-sm-7 ps-0 align-content-center">
                                            <InputSelect
                                                id="configurationFor"
                                                name="configurationFor"
                                                placeholder="Select value..."
                                                options={itemForDashboard}
                                                className="backcolorinput"
                                                value={values?.configurationFor}
                                                onChange={handleValueChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* right columns */}
                                <div className='col-sm-6'>
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label pe-0 required-label">Server Name : </label>
                                        <div className="col-sm-7 ps-0 align-content-center">
                                            <InputSelect
                                                className="backcolorinput"
                                                placeholder="Select value..."
                                                id="serverName"
                                                name="serverName"
                                                options={serverName}
                                                value={values?.serverName}
                                                onChange={handleValueChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SECTION DEVIDER is dbconn req */}
                            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                                {/* //left columns */}
                                <div className='col-sm-6'>
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label pe-0">
                                            Is DB Connection String Required:
                                        </label>
                                        <div className="col-sm-7 ps-0 align-content-center">
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="isDbConnReq"
                                                    id="isDbConnReqYes"
                                                    value={isDbConnReq}
                                                    onChange={(e) => setIsDbConnReq(true)}
                                                    checked={isDbConnReq}
                                                />
                                                <label className="form-check-label" htmlFor="dbYes">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="isDbConnReq"
                                                    id="isDbConnReqNo"
                                                    value={isDbConnReq}
                                                    onChange={(e) => setIsDbConnReq(false)}
                                                    checked={!isDbConnReq}
                                                />
                                                <label className="form-check-label" htmlFor="dbNo">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* right columns */}
                                {/* <div className='col-sm-6'>
                                </div> */}
                            </div>

                            {/* SECTION DEVIDER */}
                            {/* IF DB CONNECTION STRING NO */}
                            {!isDbConnReq &&
                                <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                                    {/* //left columns */}
                                    <div className='col-sm-6'>
                                        <div className="form-group row">
                                            <label className="col-sm-5 col-form-label pe-0 required-label">JNDI for Primary Server : </label>
                                            <div className="col-sm-7 ps-0 align-content-center">
                                                <InputField
                                                    type="text"
                                                    className="backcolorinput"
                                                    placeholder="For Saving Dashboard Master,Running Data service"
                                                    name='jndiServer'
                                                    id='jndiServer'
                                                    value={values?.jndiServer}
                                                    onChange={handleValueChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-5 col-form-label pe-0 required-label">JNDI for Secondary Server 1(Reporting Server)  : </label>
                                            <div className="col-sm-7 ps-0 align-content-center">
                                                <InputField
                                                    type="text"
                                                    className="backcolorinput"
                                                    placeholder="For Running Dashboard"
                                                    name='jndiServer1'
                                                    id='jndiServer1'
                                                    value={values?.jndiServer1}
                                                    onChange={handleValueChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* right columns */}
                                    <div className='col-sm-6'>
                                        <div className="form-group row">
                                            <label className="col-sm-5 col-form-label fix-label pe-0">JNDI for Secondary Server 2(Reporting Server) : </label>
                                            <div className="col-sm-7 ps-0 align-content-center">
                                                <InputField
                                                    type="text"
                                                    className="backcolorinput"
                                                    placeholder="For Running Dashboard"
                                                    name='jndiServer2'
                                                    id='jndiServer2'
                                                    value={values?.jndiServer2}
                                                    onChange={handleValueChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-5 col-form-label fix-label pe-0">JNDI for Secondary Server 3(Reporting Server) : </label>
                                            <div className="col-sm-7 ps-0 align-content-center">
                                                <InputField
                                                    type="text"
                                                    className="backcolorinput"
                                                    placeholder="For Running Dashboard"
                                                    name='jndiServer3'
                                                    id='jndiServer3'
                                                    value={values?.jndiServer3}
                                                    onChange={handleValueChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {/* SECTION DEVIDER */}
                            {/* IF DB CONNECTION STRING YES */}
                            {isDbConnReq &&
                                <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                                    {/* //left columns */}
                                    <div className='col-sm-6'>
                                        <div className="form-group row">
                                            <label className="col-sm-5 col-form-label pe-0 required-label">Driver Class Name : </label>
                                            <div className="col-sm-7 ps-0 align-content-center">
                                                <InputField
                                                    type="text"
                                                    className="backcolorinput"
                                                    placeholder="Enter..."
                                                    name='driverClass'
                                                    id='driverClass'
                                                    value={values?.driverClass}
                                                    onChange={handleValueChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-5 col-form-label pe-0 required-label">UserName  : </label>
                                            <div className="col-sm-7 ps-0 align-content-center">
                                                <InputField
                                                    type="text"
                                                    className="backcolorinput"
                                                    placeholder="Enter..."
                                                    name='userName'
                                                    id='userName'
                                                    value={values?.userName}
                                                    onChange={handleValueChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* right columns */}
                                    <div className='col-sm-6'>
                                        <div className="form-group row">
                                            <label className="col-sm-5 col-form-label fix-label pe-0 required-label">Connection URL : </label>
                                            <div className="col-sm-7 ps-0 align-content-center">
                                                <InputField
                                                    type="text"
                                                    className="backcolorinput"
                                                    placeholder="Enter..."
                                                    name='connectionURL'
                                                    id='connectionURL'
                                                    value={values?.connectionURL}
                                                    onChange={handleValueChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-5 col-form-label fix-label pe-0 required-label">Password : </label>
                                            <div className="col-sm-7 ps-0 align-content-center">
                                                <InputField
                                                    type="text"
                                                    className="backcolorinput"
                                                    placeholder="Enter..."
                                                    name='password'
                                                    id='password'
                                                    value={values?.password}
                                                    onChange={handleValueChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                            {/* SECTION DEVIDER 4 logs radio*/}
                            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                                {/* //left columns */}
                                <div className='col-sm-6'>
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label pe-0 required-label">
                                            Is Dashboard Configuration Cached :
                                        </label>
                                        <div className="col-sm-7 ps-0 align-content-center">
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="isDashboardCachedYes"
                                                    name="isDashboardCached"
                                                    value={isDashboardCached}
                                                    onChange={(e) => setIsDashboardCached(true)}
                                                    checked={isDashboardCached}
                                                />
                                                <label className="form-check-label" htmlFor="dbYes">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="isDashboardCachedNo"
                                                    name="isDashboardCached"
                                                    value={isDashboardCached}
                                                    onChange={(e) => setIsDashboardCached(false)}
                                                    checked={!isDashboardCached}
                                                />
                                                <label className="form-check-label" htmlFor="dbNo">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label pe-0">
                                            Is Access Log Required :
                                        </label>
                                        <div className="col-sm-7 ps-0 align-content-center">
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="isAccessReqYes"
                                                    name="isAccessReq"
                                                    value={isAccessReq}
                                                    onChange={(e) => setIsAccessReq(true)}
                                                    checked={isAccessReq}
                                                />
                                                <label className="form-check-label" htmlFor="dbYes">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="isAccessReqNo"
                                                    name="isAccessReq"
                                                    value={isAccessReq}
                                                    onChange={(e) => setIsAccessReq(false)}
                                                    checked={!isAccessReq}
                                                />
                                                <label className="form-check-label" htmlFor="dbNo">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* right columns */}
                                <div className='col-sm-6'>
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label pe-0">
                                            Is Console Log Required :
                                        </label>
                                        <div className="col-sm-7 ps-0 align-content-center">
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="isConsoleReqYes"
                                                    name="isConsoleReq"
                                                    value={isConsoleReq}
                                                    onChange={(e) => setIsConsoleReq(true)}
                                                    checked={isConsoleReq}
                                                />
                                                <label className="form-check-label" htmlFor="dbYes">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="isConsoleReqNo"
                                                    name="isConsoleReq"
                                                    value={isConsoleReq}
                                                    onChange={(e) => setIsConsoleReq(false)}
                                                    checked={!isConsoleReq}
                                                />
                                                <label className="form-check-label" htmlFor="dbNo">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label pe-0">
                                            Is Error Log Required :
                                        </label>
                                        <div className="col-sm-7 ps-0 align-content-center">
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="isErrorReqYes"
                                                    name="isErrorReq"
                                                    value={isErrorReq}
                                                    onChange={(e) => setIsErrorReq(true)}
                                                    checked={isErrorReq}
                                                />
                                                <label className="form-check-label" htmlFor="dbYes">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="isErrorReqNo"
                                                    name="isErrorReq"
                                                    value={isErrorReq}
                                                    onChange={(e) => setIsErrorReq(false)}
                                                    checked={!isErrorReq}
                                                />
                                                <label className="form-check-label" htmlFor="dbNo">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SECTION DEVIDER static header and report header*/}
                            <div iv className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                                {/* //left columns */}
                                <div className='col-sm-6'>
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label pe-0 required-label">Static Report Header1 : </label>
                                        <div className="col-sm-7 ps-0 align-content-center">
                                            <InputField
                                                type="text"
                                                className="backcolorinput"
                                                placeholder="Enter..."
                                                name='staticReportHead1'
                                                id='staticReportHead1'
                                                value={values?.staticReportHead1}
                                                onChange={handleValueChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label pe-0">Static Report Header2  : </label>
                                        <div className="col-sm-7 ps-0 align-content-center">
                                            <InputField
                                                type="text"
                                                className="backcolorinput"
                                                placeholder="Enter..."
                                                name='staticReportHead2'
                                                id='staticReportHead2'
                                                value={values?.staticReportHead2}
                                                onChange={handleValueChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* right columns */}
                                <div className='col-sm-6'>
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label fix-label pe-0">Static Report Header3 : </label>
                                        <div className="col-sm-7 ps-0 align-content-center">
                                            <InputField
                                                type="text"
                                                className="backcolorinput"
                                                placeholder="Enter..."
                                                name='staticReportHead3'
                                                id='staticReportHead3'
                                                value={values?.staticReportHead3}
                                                onChange={handleValueChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label fix-label pe-0 required-label">Report Header By Query : </label>
                                        <div className="col-sm-7 ps-0 align-content-center">
                                            <textarea
                                                className="form-control backcolorinput"
                                                placeholder="Enter..."
                                                rows="1"
                                                name='reportHeaderByQuery'
                                                id='reportHeaderByQuery'
                                                value={values?.reportHeaderByQuery}
                                                onChange={handleValueChange}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SECTION DEVIDER logo details*/}
                            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                                {/* //left columns */}
                                <div className='col-sm-6'>
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label pe-0">
                                            Is Logo Required:
                                        </label>
                                        <div className="col-sm-7 ps-0 align-content-center">
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="isLogoReqYes"
                                                    name="isLogoReq"
                                                    value={isLogoReq}
                                                    onChange={(e) => setIsLogoReq(true)}
                                                    checked={isLogoReq}
                                                />
                                                <label className="form-check-label" htmlFor="dbYes">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="isLogoReqNo"
                                                    name="isLogoReq"
                                                    value={isLogoReq}
                                                    onChange={(e) => setIsLogoReq(false)}
                                                    checked={!isLogoReq}
                                                />
                                                <label className="form-check-label" htmlFor="dbNo">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {isLogoReq &&
                                        <div className="form-group row">
                                            <label className="col-sm-5 col-form-label fix-label pe-0 required-label">Logo Image URL : </label>
                                            <div className="col-sm-7 ps-0 align-content-center">
                                                <textarea
                                                    className="form-control backcolorinput"
                                                    placeholder="Enter..."
                                                    rows="1"
                                                    name='logoImageUrl'
                                                    id='logoImageUrl'
                                                    value={values?.logoImageUrl}
                                                    onChange={handleValueChange}
                                                ></textarea>
                                            </div>

                                        </div>
                                    }
                                </div>
                                {/* right columns */}
                                {isLogoReq &&
                                    <div className='col-sm-6'>
                                        <div className="form-group row">
                                            <label className="col-sm-5 col-form-label pe-0">
                                                Logo Position:
                                            </label>
                                            <div className="col-sm-7 ps-0 align-content-center">
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="logoPositionTop"
                                                        name="logoPosition"
                                                        value={logoPosition}
                                                        onChange={(e) => setLogoPosition("top")}
                                                        checked={logoPosition === "top"}
                                                    />
                                                    <label className="form-check-label" htmlFor="dbYes">
                                                        Top
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="logoPositionLeft"
                                                        name="logoPosition"
                                                        value={logoPosition}
                                                        onChange={(e) => setLogoPosition("left")}
                                                        checked={logoPosition === "left"}
                                                    />
                                                    <label className="form-check-label" htmlFor="dbNo">
                                                        Left
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-sm-5 col-form-label pe-0">
                                                Heading Alignment:
                                            </label>
                                            <div className="col-sm-7 ps-0 align-content-center">
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="headingAlignmentCenter"
                                                        name="headingAlignment"
                                                        value={headingAlignment}
                                                        onChange={(e) => setHeadingAlignment("center")}
                                                        checked={headingAlignment === "center"}
                                                    />
                                                    <label className="form-check-label" htmlFor="dbYes">
                                                        Center
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id="headingAlignmentLeft"
                                                        name="headingAlignment"
                                                        value={headingAlignment}
                                                        onChange={(e) => setHeadingAlignment("left")}
                                                        checked={headingAlignment === "left"}
                                                    />
                                                    <label className="form-check-label" htmlFor="dbNo">
                                                        Left
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>

                            {/* SECTION DEVIDER default limits*/}
                            <div className='row role-theme user-form' style={{ paddingBottom: "1px" }}>
                                {/* //left columns */}
                                <div className='col-sm-6'>
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label pe-0">
                                            "Limit Records" Feature Required:
                                        </label>
                                        <div className="col-sm-7 ps-0 align-content-center">
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="isLimitRecReqYes"
                                                    name="isLimitRecReq"
                                                    value={isLimitRecReq}
                                                    onChange={(e) => setIsLimitRecReq(true)}
                                                    checked={isLimitRecReq}
                                                />
                                                <label className="form-check-label" htmlFor="dbYes">
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    id="isLimitRecReqNo"
                                                    name="isLimitRecReq"
                                                    value={isLimitRecReq}
                                                    onChange={(e) => setIsLimitRecReq(false)}
                                                    checked={!isLimitRecReq}
                                                />
                                                <label className="form-check-label" htmlFor="dbNo">
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* right columns */}
                                {isLimitRecReq &&
                                    <div className='col-sm-6'>
                                        <div className="form-group row">
                                            <label className="col-sm-5 col-form-label pe-0">Static Set Default Limit : </label>
                                            <div className="col-sm-7 ps-0 align-content-center">
                                                <InputField
                                                    type="text"
                                                    className="backcolorinput"
                                                    placeholder="Enter..."
                                                    name='staticDefaultLimit'
                                                    id='staticDefaultLimit'
                                                    value={values?.staticDefaultLimit}
                                                    onChange={handleValueChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>

                            <div className="table-responsive row pt-1">
                                <table className="table table-borderless text-center mb-0">
                                    <thead className="text-white">
                                        <tr className='header-devider m-0'>
                                            <th style={{ width: "15%" }}>Service Reference Name</th>
                                            <th style={{ width: "25%" }}>Server URL</th>
                                            <th style={{ width: "15%" }}>Default Method</th>
                                            <th style={{ width: "15%" }}>Service User Name</th>
                                            <th style={{ width: "15%" }}>Service Password</th>
                                            <th style={{ width: "15%" }}>Actions</th>
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
                                                    value={serverDetails?.serviceRefName}
                                                    onChange={handleServerChange}
                                                />
                                            </td>
                                            <td>
                                                <InputField
                                                    type="text"
                                                    className="backcolorinput"
                                                    name='serverUrl'
                                                    id='serverUrl'
                                                    value={serverDetails?.serverUrl}
                                                    onChange={handleServerChange}
                                                />
                                            </td>
                                            <td>
                                                <InputSelect
                                                    className="backcolorinput"
                                                    options={[{ value: 1, label: "GET" }, { value: 2, label: "POST" }]}
                                                    id="defaultMethod"
                                                    name="defaultMethod"
                                                    value={serverDetails?.defaultMethod}
                                                    onChange={handleServerChange}
                                                >
                                                </InputSelect>
                                            </td>
                                            <td>
                                                <InputField
                                                    type="text"
                                                    className="backcolorinput"
                                                    name="serviceUserName"
                                                    id='serviceUserName'
                                                    value={serverDetails?.serviceUserName}
                                                    onChange={handleServerChange}
                                                />
                                            </td>
                                            <td>
                                                <InputField
                                                    type="password"
                                                    className="backcolorinput"
                                                    name="servicePassword"
                                                    id='servicePassword'
                                                    value={serverDetails?.servicePassword}
                                                    onChange={handleServerChange}
                                                />
                                            </td>
                                            <td className='px-0 action-buttons'>
                                                <button className='btn btn-sm me-1 py-0 px-0' style={{ background: "#34495e", color: "white" }}><FontAwesomeIcon icon={faAdd} className="dropdown-gear-icon" size='sm' />Add</button>
                                                <button className='btn btn-sm ms-1 py-0 px-0' style={{ background: "#34495e", color: "white" }}><FontAwesomeIcon icon={faRefresh} className="dropdown-gear-icon" size='sm' />Clear</button>
                                            </td>
                                        </tr>
                                        {/* {services.map((service, index) => ( */}
                                        <tr className='table-row-form text-start'>
                                            <td>{"localhost"}</td>
                                            <td>{"http://localhost:8080"}</td>
                                            <td>{"GET"}</td>
                                            <td>{"admin"}</td>
                                            <td>{"adminabc"}</td>
                                            <td className=''>
                                                <div className='text-center'>
                                                    <button
                                                        className="btn btn-warning btn-sm me-1 py-0 px-1"
                                                        onClick={() => alert("Edit feature coming soon!")}
                                                    >
                                                        <FontAwesomeIcon icon={faEdit} className="dropdown-gear-icon" size='xs' />
                                                    </button>
                                                    <button
                                                        className="btn btn-danger btn-sm ms-1 py-0 px-1"

                                                    >
                                                        <FontAwesomeIcon icon={faTrash} className="dropdown-gear-icon" size='xs' />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className='table-row-form text-start'>
                                            <td >{"localhost"}</td>
                                            <td>{"http://localhost:8080/bajrang"}</td>
                                            <td>{"POST"}</td>
                                            <td>{"Bajrang"}</td>
                                            <td>{"123456"}</td>
                                            <td>
                                                <div className='text-center'>
                                                    <button
                                                        className="btn btn-warning btn-sm me-1 py-0 px-1"
                                                        onClick={() => alert("Edit feature coming soon!")}
                                                    >
                                                        <FontAwesomeIcon icon={faEdit} className="dropdown-gear-icon" size='xs' />
                                                    </button>
                                                    <button
                                                        className="btn btn-danger btn-sm ms-1 py-0 px-1"

                                                    >
                                                        <FontAwesomeIcon icon={faTrash} className="dropdown-gear-icon" size='xs' />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* ))} */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </form>
                    <div className='text-center py-1 rounded-2 configuration-buttons'>
                        <button className='btn btn-sm me-1'><FontAwesomeIcon icon={faFile} className="dropdown-gear-icon me-1" />Save</button>
                        <button className='btn btn-sm ms-1 me-1' onClick={checkDatabaseConnection}><FontAwesomeIcon icon={faDatabase} className="dropdown-gear-icon me-1" />Test DB Connection</button>
                        <button className='btn btn-sm ms-1 me-1'><FontAwesomeIcon icon={faRefresh} className="dropdown-gear-icon me-1" />Reset</button>
                        <button className='btn btn-sm ms-1 me-1'><FontAwesomeIcon icon={faDatabase} className="dropdown-gear-icon me-1" />Port Xml Data</button>
                        <button className='btn btn-sm ms-1'><FontAwesomeIcon icon={faDatabase} className="dropdown-gear-icon me-1" />Clear All Cached Data</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DbConfigMaster
