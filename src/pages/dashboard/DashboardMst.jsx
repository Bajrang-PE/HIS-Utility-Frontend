import React, { useContext, useEffect, useState } from "react";
import DashSidebar from "../../components/sidebar/Sidebar";
import { HISContext } from "../../contextApi/HISContext";
import TabDash from "../../components/sidebar/TabDash";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../../utils/ApiHooks";

const DashboardMst = () => {
    const { getAllTabsData, allTabsData, activeTab, setActiveTab } = useContext(HISContext);
    const [activeComponent, setActiveComponent] = useState("Dashboard");
    const [presentTabs, setPresentTabs] = useState([]);
    const [searchParams] = useSearchParams();
    const [dashboardData, setDashboardData] = useState()

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
    }, [searchParams])


    useEffect(() => {
        if (allTabsData?.length > 0 && dashboardData) {
            const dashboardIdsArray = dashboardData?.jsonData?.dashboardIds ? dashboardData?.jsonData?.dashboardIds.split(',').map(id => Number(id)) : [];
            // const availableTabs = allTabsData.filter(tab => dashboardIdsArray.includes(tab.id));
            const availableTabs = dashboardIdsArray
                .map(id => allTabsData.find(tab => tab.id === id))
                .filter(tab => tab !== undefined);
            setPresentTabs(availableTabs)
        }
    }, [allTabsData, dashboardData])


    return (
        <div style={{ display: "flex", backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
            <DashSidebar data={presentTabs} setActiveTab={setActiveTab} activeTab={activeTab} dashboardName={dashboardData?.jsonData?.groupName} />
            <main style={{ padding: "20px", flex: 1, backgroundColor: "#fff", borderRadius: "10px", margin: "20px" }}>
                <TabDash tabData={activeTab} dashboardFor={dashboardFor} />
            </main>
        </div>
    );
};

export default DashboardMst;