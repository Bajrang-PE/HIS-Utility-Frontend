import React, { useContext, useEffect, useState } from 'react'
import KpiDash from './KpiDash';
import TabularDash from './TabularDash';
import GraphDash from './GraphDash';
import MapDash from './MapDash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';


const WidgetDash = (props) => {
    const { widgetDetail } = props
// console.log(widgetDetail,'bg')
    return (
        <>
            {/* {widgetDetail?.widgetShowOrDownload === 'HTML' ? */}
                <>
                    {/* <p>Widget Name: {widgetDetail.rptId} ---- {widgetDetail?.rptDisplayName}</p> */}
                    {widgetDetail.reportViewed === 'KPI' && <KpiDash widgetData={widgetDetail} />}
                    {widgetDetail.reportViewed === 'Tabular' && <TabularDash widgetData={widgetDetail} />}
                    {widgetDetail.reportViewed === 'Graph' && <GraphDash widgetData={widgetDetail} />}
                    {widgetDetail.reportViewed === "Criteria_Map" && 
                    <MapDash widgetData={widgetDetail} />
                    }
                </>
                {/* :
                <>
                    <button type="button" className="small-box-btn-dwn"
                    >
                        <FontAwesomeIcon icon={faFilePdf} className="dropdown-gear-icon" />
                    </button>
                </>
            }  */}
        </>

    )
}

export default WidgetDash
