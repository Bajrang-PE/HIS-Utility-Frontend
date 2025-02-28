import React, { useContext, useEffect, useState } from 'react';
import WidgetDash from './WidgetDash';
import { HISContext } from '../../contextApi/HISContext';
import Parameters from './Parameters';
import PdfDownload from '../commons/PdfDownload';
import MapDash from './MapDash';

const TabDash = (props) => {
    const { tabData, dashboardFor } = props;
    const { allWidgetData, getAllWidgetData, setLoading, loading, activeTab } = useContext(HISContext);
    const [presentWidgets, setPresentWidgets] = useState([]);
    const [tabWidgets, setTabWidgets] = useState([]);
    const [paramsValues, setParamsValues] = useState();

    useEffect(() => {
        if (dashboardFor) {
            getAllWidgetData(dashboardFor);
        }
    }, [dashboardFor]);

    useEffect(() => {
        if (tabData?.jsonData?.lstDashboardWidgetMapping?.length > 0) {
            const widgetIds = tabData?.jsonData?.lstDashboardWidgetMapping;
            const availableWidgets = widgetIds
                .map(wid => allWidgetData.find(widget => widget?.rptId === wid?.rptId))
                .filter(widget => widget !== undefined);

            setPresentWidgets(availableWidgets);
            const sortedWidgets = [...widgetIds].sort((a, b) => parseInt(a.displayOrder) - parseInt(b.displayOrder));
            setTabWidgets(sortedWidgets);
            console.log(availableWidgets, 'widgetdata')
        }
    }, [tabData, allWidgetData]);

    const getSingleWidget = (id) => {
        if (!id) {
            return null;
        } else {
            return presentWidgets.find(widget => widget?.rptId === id) || null;
        }
    };


    useEffect(() => {
        setLoading(tabWidgets.length === 0);
    }, [tabWidgets]);

    return (
        <>
            {/* Show Global Loader if Loading */}
            {(loading && tabWidgets?.length > 0) ? null : (
                <div>
                    {/* PDF Download Section */}
                    {activeTab?.jsonData?.docJsonString && (
                        <div className='help-docs'>
                            <PdfDownload docJsonString={activeTab?.jsonData?.docJsonString} />
                        </div>
                    )}

                    {/* Parameters Section */}
                    {activeTab?.jsonData?.allParameters && (
                        <div className='parameter-box'>
                            <Parameters params={activeTab?.jsonData?.allParameters} dashFor={activeTab?.dashboardFor} setParamsValues={setParamsValues} />
                        </div>
                    )}
                    {/* <MapDash /> */}

                    {/* Widgets Section */}
                    <div className='row'>
                        {tabWidgets.map((widget, index) => {
                            const widgetDetail = getSingleWidget(widget.rptId);
                            return (
                                <React.Fragment key={index}>
                                    {widgetDetail &&
                                        <div className={`col-sm-${widget?.widgetWidth}`} style={{ padding: "5px 3px" }}>
                                            <WidgetDash widgetDetail={widgetDetail} />
                                        </div>
                                    }
                                </React.Fragment>
                            );
                        })
                        }
                    </div>
                </div>
            )}
        </>
    );
};

export default TabDash;
