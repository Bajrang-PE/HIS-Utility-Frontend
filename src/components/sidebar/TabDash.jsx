import React, { useCallback, useContext, useEffect, useState } from 'react';
import WidgetDash from './WidgetDash';
import { HISContext } from '../../contextApi/HISContext';
import Parameters from './Parameters';
import PdfDownload from '../commons/PdfDownload';
import MapDash from './MapDash';

const TabDash = React.memo(({ tabData }) => {
    const { allWidgetData, setLoading, loading, activeTab } = useContext(HISContext);
    const [presentWidgets, setPresentWidgets] = useState([]);
    const [paramsValues, setParamsValues] = useState();
    const [presentTabs, setPresentTabs] = useState([]);

    const handleSetParamsValues = useCallback((values) => {
        setParamsValues(values);
    }, []);

    useEffect(() => {
        if (tabData?.jsonData?.lstDashboardWidgetMapping?.length > 0) {
            const widgetIds = tabData?.jsonData?.lstDashboardWidgetMapping;
            const sortedWidgets = [...widgetIds].sort((a, b) => parseInt(a.displayOrder) - parseInt(b.displayOrder));
            const availableWidgets = sortedWidgets
                .map(wid => allWidgetData.find(widget => widget?.rptId == wid?.rptId))
                .filter(widget => widget);

            setPresentWidgets(availableWidgets);
            setPresentTabs(sortedWidgets)
        }
    }, [tabData, allWidgetData]);

    console.log(JSON.parse(activeTab?.jsonData?.docJsonString), 'presentWidgets')

    return (
        <>
            {loading ? null : (
                <div>
                    {JSON.parse(activeTab?.jsonData?.docJsonString)?.length > 0 && (
                        <div className='help-docs'>
                            <PdfDownload docJsonString={activeTab?.jsonData?.docJsonString} />
                        </div>
                    )}

                    {activeTab?.jsonData?.allParameters && (
                        <div className='parameter-box'>
                            <Parameters params={activeTab?.jsonData?.allParameters} dashFor={activeTab?.dashboardFor} setParamsValues={handleSetParamsValues} />
                        </div>
                    )}

                    <div className='row'>
                        {presentWidgets?.length > 0 && presentWidgets.map((widget, index) => (
                            <React.Fragment key={index}>
                                {widget &&
                                    <div className={`col-sm-${presentTabs[index]?.widgetWidth}`} style={{ padding: "5px 3px" }}>
                                        <WidgetDash widgetDetail={widget} />
                                    </div>
                                }
                            </React.Fragment>
                        ))
                        }
                    </div>
                </div>
            )}
        </>
    );
});

export default TabDash;
