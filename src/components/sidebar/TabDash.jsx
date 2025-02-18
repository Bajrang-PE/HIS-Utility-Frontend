import React, { useContext, useEffect, useState } from 'react'
import WidgetDash from './WidgetDash';
import { HISContext } from '../../contextApi/HISContext';
import Parameters from './Parameters';

const TabDash = (props) => {
    const { tabData, dashboardFor } = props;
    const { allWidgetData, getAllWidgetData, } = useContext(HISContext);
    const [presentWidgets, setPresentWidgets] = useState([]);
    const [tabWidgets, setTabWidgets] = useState([])

    useEffect(() => {
        if (dashboardFor) {
            getAllWidgetData(dashboardFor)
        }
    }, [dashboardFor])

    useEffect(() => {
        if (tabData?.jsonData?.lstDashboardWidgetMapping?.length > 0) {
            const widgetIds = tabData?.jsonData?.lstDashboardWidgetMapping;
            const availableWidgetss = widgetIds
                .map(wid => allWidgetData.find(widget => widget?.rptId === wid?.rptId))
                .filter(widget => widget !== undefined);
            setPresentWidgets(availableWidgetss)
            const sortedWidgets = [...widgetIds].sort((a, b) => parseInt(a.displayOrder) - parseInt(b.displayOrder));
            setTabWidgets(sortedWidgets)
        }
    }, [tabData])

    const getSingleWidget = (id) => {
        if (id) {
            const availableWidget = presentWidgets.find(widget => widget?.rptId === id);
            return availableWidget || null;
        }
        return null;
    };


    return (
        <>
            {tabData?.jsonData?.allParameters &&
                <div className='parameter-box'>
                    <Parameters params={tabData?.jsonData?.allParameters} dashFor={tabData?.dashboardFor} />
                </div>
            }
            <div className='row'>
                {tabWidgets.map((widget, index) => {
                    const widgetDetail = getSingleWidget(widget.rptId);
                    return (
                        <React.Fragment key={index} >
                            {widgetDetail ? (
                                <>
                                    {/* <p>Widget Name: {widgetDetail.rptName}</p> */}
                                    <div className={`col-sm-${widget?.widgetWidth}`} style={{ padding: "5px 3px" }}>
                                        <WidgetDash widgetDetail={widgetDetail} />
                                    </div>
                                </>
                            ) : (
                                <p>Widget details not found</p>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </>
    )
}

export default TabDash
