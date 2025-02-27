import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import KpiDash from './KpiDash';
import TabularDash from './TabularDash';
import GraphDash from './GraphDash';
import MapDash from './MapDash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { HISContext } from '../../contextApi/HISContext';
import { fetchQueryData } from '../../utils/commonFunction';


const WidgetDash = (props) => {
    const { widgetDetail } = props
    const { setLoading } = useContext(HISContext);
    const [graphData, setGraphData] = useState([]);

    const processedQueryData = useMemo(() => {
        return widgetDetail?.queryVO?.length > 0 ? widgetDetail.queryVO : [];
    }, [widgetDetail?.queryVO]);

    const fetchData = useCallback(async () => {
        if (!processedQueryData.length) return;
        try {
            setLoading(true);
            const data = await fetchQueryData(processedQueryData);
            // console.log(data,'datatatatd')
            setGraphData( data);
        } catch (error) {
            console.error("Error loading query data:", error);
        } finally {
            setLoading(false);
        }
    }, [processedQueryData, setLoading]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);


    return (
        <>
            {/* {widgetDetail?.widgetShowOrDownload === 'HTML' ? */}
            <>
                {/* <p>Widget Name: {widgetDetail.rptId} ---- {widgetDetail?.rptDisplayName}</p> */}
                {widgetDetail.reportViewed === 'KPI' && <KpiDash widgetData={widgetDetail} tabData={graphData} />}
                {widgetDetail.reportViewed === 'Tabular' && <TabularDash widgetData={widgetDetail} kpiData={graphData} />}
                {widgetDetail.reportViewed === 'Graph' && <GraphDash widgetData={widgetDetail} graphData={graphData} />}
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
