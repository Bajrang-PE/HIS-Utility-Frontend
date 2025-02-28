import React, { useContext, useEffect, useState, useMemo, useCallback } from "react";
import DashSidebar from "../../components/sidebar/Sidebar";
import { HISContext } from "../../contextApi/HISContext";
import TabDash from "../../components/sidebar/TabDash";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../../utils/ApiHooks";
import TopBar from "../../components/sidebar/TopBar";

const DashboardMst = () => {
    const { getAllTabsData, allTabsData, activeTab, setActiveTab, theme, setTheme } = useContext(HISContext);
    const [searchParams] = useSearchParams();
    const [dashboardData, setDashboardData] = useState(null);

    const groupId = searchParams.get("groupId");
    const dashboardFor = searchParams.get("dashboardFor");

    const getDashboardData = useCallback((groupId, dashFor) => {
        fetchData(`hisutils/singleDashboard/${groupId}/${dashFor}/DashboardGroupingMst`)
            .then((data) => {
                if (data) setDashboardData(data);
            });
    }, []);

    useEffect(() => {
        if (dashboardFor && groupId) {
            getAllTabsData(dashboardFor);
            getDashboardData(groupId, dashboardFor);
        }
    }, [dashboardFor, groupId]);

    const presentTabs = useMemo(() => {
        if (!dashboardData || !allTabsData?.length) return [];
        const dashboardIdsArray = dashboardData?.jsonData?.dashboardIds?.split(',').map(Number) || [];
        const themes = dashboardData?.jsonData?.dashboardTheme || 'Default'
        setTheme(themes);
        return dashboardIdsArray
            .map(id => allTabsData.find(tab => tab.id === id))
            .filter(Boolean);
    }, [allTabsData, dashboardData]);

    // Set active tab handler
    const handleSetActiveTab = useCallback((tab) => {
        setActiveTab(tab);
    }, [setActiveTab]);

    const isTopBarLayout = dashboardData?.jsonData?.tabDisplayStyle === 'TOP';

    console.log(dashboardData, 'dashb')

    return (
        <div className={`${theme === 'Dark' ? 'dark-theme' : ''}`} style={{
            display: isTopBarLayout ? "block" : 'flex',
            backgroundColor: "#f4f4f4",
            minHeight: "100vh"
        }}>
            {isTopBarLayout ? (
                <TopBar
                    data={presentTabs}
                    setActiveTab={handleSetActiveTab}
                    activeTab={activeTab}
                    dashboardData={dashboardData}
                />
            ) : (
                <DashSidebar
                    data={presentTabs}
                    setActiveTab={handleSetActiveTab}
                    activeTab={activeTab}
                    dashboardData={dashboardData}
                />
            )}

            <main style={{ padding: "10px 20px", flex: 1 }}>
                <TabDash tabData={activeTab} dashboardFor={dashboardFor} />
            </main>
        </div>
    );
};

export default DashboardMst;
