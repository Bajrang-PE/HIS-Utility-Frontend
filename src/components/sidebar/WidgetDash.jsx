import React, { useContext, useEffect, useState } from 'react'
import KpiDash from './KpiDash';
import TabularDash from './TabularDash';
import GraphDash from './GraphDash';
import MapDash from './MapDash';


const WidgetDash = (props) => {
    const { widgetDetail } = props


    return (
        <>
            {/* <p>Widget Name: {widgetDetail.rptId} ---- {widgetDetail?.rptDisplayName}</p> */}
            {widgetDetail.reportViewed === 'KPI' && <KpiDash widgetData={widgetDetail} />}
            {widgetDetail.reportViewed === 'Tabular' && <TabularDash widgetData={widgetDetail} />}
            {widgetDetail.reportViewed === 'Graph' && <GraphDash widgetData={widgetDetail} />}
            {widgetDetail.reportViewed === "Criteria_Map" && <MapDash widgetData={widgetDetail} />}
        </>

    )
}

export default WidgetDash
