import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faAdd, faDatabase, faEarth, faEye, faFile, faFolderOpen, faGlobe, faMinus, faRefresh } from '@fortawesome/free-solid-svg-icons'

const GlobalButtonGroup = () => {
    return (
        <div className='text-start py-1 global-button-group'>
            <button className='btn btn-sm'><FontAwesomeIcon icon={faFile}
                className="dropdown-gear-icon me-1" />Save</button>

            <button className='btn btn-sm ms-1'><FontAwesomeIcon icon={faFolderOpen} className="dropdown-gear-icon me-1" />Open</button>

            <button className='btn btn-sm ms-1'><FontAwesomeIcon icon={faRefresh} className="dropdown-gear-icon me-1" />Reset</button>

            <button className='btn btn-sm ms-1'><FontAwesomeIcon icon={faEye} className="dropdown-gear-icon me-1" />Parameters</button>

            <button className='btn btn-sm ms-1'><FontAwesomeIcon icon={faEarth} className="dropdown-gear-icon me-1" />Web Services</button>
        </div>
    )
}

export default GlobalButtonGroup
