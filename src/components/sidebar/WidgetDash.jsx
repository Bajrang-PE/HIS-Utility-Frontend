import React, { useEffect, useState } from 'react'
import KpiDash from './KpiDash';
import TabularDash from './TabularDash';
import GraphDash from './GraphDash';

const WidgetDash = (props) => {
    const { widgetDetail } = props
     

    // console.log(tabWidgets, 'tabs')
    // console.log(getSingleWidget(tabWidgets[0]?.rptId),"bgbg")

    return (
        <>
            {/* <p>Widget Name: {widgetDetail.rptId}</p> */}
            {widgetDetail.reportViewed === 'KPI' && <KpiDash widgetData={widgetDetail} />}
            {widgetDetail.reportViewed === 'Tabular' && <TabularDash widgetData={widgetDetail} />}
            {widgetDetail.reportViewed === 'Graph' && <GraphDash widgetData={widgetDetail} />}
        </>

    )
}

export default WidgetDash
