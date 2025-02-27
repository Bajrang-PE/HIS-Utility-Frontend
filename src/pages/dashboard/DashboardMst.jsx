import React, { useContext, useEffect, useState } from "react";
import DashSidebar from "../../components/sidebar/Sidebar";
import { HISContext } from "../../contextApi/HISContext";
import TabDash from "../../components/sidebar/TabDash";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../../utils/ApiHooks";
import TopBar from "../../components/sidebar/TopBar";

const DashboardMst = () => {
    const { getAllTabsData, allTabsData, activeTab, setActiveTab, setLoading } = useContext(HISContext);
    const [presentTabs, setPresentTabs] = useState([]);
    const [searchParams] = useSearchParams();
    const [dashboardData, setDashboardData] = useState();

    // Get values from query params
    const groupId = searchParams.get("groupId");
    const dashboardFor = searchParams.get("dashboardFor");

    const getDashboardData = (groupId, dashFor) => {
        fetchData(`hisutils/singleDashboard/${groupId}/${dashFor}/DashboardGroupingMst`).then((data) => {
            if (data) {
                setDashboardData(data)
            }
        })
    }

    useEffect(() => {
        if (dashboardFor && groupId) {
            getAllTabsData(dashboardFor)
            getDashboardData(groupId, dashboardFor)
        }
    }, [dashboardFor, groupId])


    useEffect(() => {
        if (allTabsData?.length > 0 && dashboardData) {
            const dashboardIdsArray = dashboardData?.jsonData?.dashboardIds ? dashboardData?.jsonData?.dashboardIds.split(',').map(id => Number(id)) : [];
            const availableTabs = dashboardIdsArray
                .map(id => allTabsData.find(tab => tab.id === id))
                .filter(tab => tab !== undefined);
            setPresentTabs(availableTabs)
        }
    }, [allTabsData, dashboardData])


    return (
        <div style={{ display: dashboardData?.jsonData?.tabDisplayStyle === 'TOP' ? "block" : 'flex', backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
            {dashboardData?.jsonData?.tabDisplayStyle === 'TOP' ?
                <TopBar data={presentTabs} setActiveTab={setActiveTab} activeTab={activeTab} dashboardData={dashboardData} />
                :
                <DashSidebar data={presentTabs} setActiveTab={setActiveTab} activeTab={activeTab} dashboardData={dashboardData} />
            }

            <main style={{ padding: "10px", flex: 1, margin: "10px" }}>
                <TabDash tabData={activeTab} dashboardFor={dashboardFor} />
            </main>
        </div>
    );
};

export default DashboardMst;