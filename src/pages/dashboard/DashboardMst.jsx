import React, { useContext, useEffect, useState } from "react";
import DashSidebar from "../../components/sidebar/Sidebar";
import { HISContext } from "../../contextApi/HISContext";
import TabDash from "../../components/sidebar/TabDash";

const Dashboard = () => <h2>Dashboard Content</h2>;
const Components = () => <h2>Components Content</h2>;
const Submenu1 = () => <h2>Submenu 1 Content</h2>;
const Submenu2 = () => <h2>Submenu 2 Content</h2>;

const DashboardMst = () => {
    const { getAllTabsData, allTabsData, activeTab, setActiveTab } = useContext(HISContext);
    const [activeComponent, setActiveComponent] = useState("Dashboard");
    const [presentTabs, setPresentTabs] = useState([]);


    useEffect(() => {
        getAllTabsData('CENTRAL DASHBOARD')
    }, [])

    const dashboardIds = "38,10,7,12,14,17,21,23,88,74,40,41,30,42,31,128,39,76,92,287,289,291,292,288,290,293,294,295,331,333,363,365,368,369,370,372,373,374,377,340,409,411,413";

    useEffect(() => {
        if (allTabsData?.length > 0) {
            const dashboardIdsArray = dashboardIds ? dashboardIds.split(',').map(id => Number(id)) : [];
            // const availableTabs = allTabsData.filter(tab => dashboardIdsArray.includes(tab.id));
            const availableTabs = dashboardIdsArray
                .map(id => allTabsData.find(tab => tab.id === id))
                .filter(tab => tab !== undefined);
            setPresentTabs(availableTabs)
        }
    }, [allTabsData])

    // console.log(activeTab, 'tab')
    // console.log(presentTabs, 'presentTabs')

    const renderComponent = () => {
        switch (activeComponent) {
            case "Dashboard":
                return <Dashboard />;
            case "Components":
                return <Components />;
            case "Submenu1":
                return <Submenu1 />;
            case "Submenu2":
                return <Submenu2 />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div style={{ display: "flex", backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
            <DashSidebar data={presentTabs} setActiveTab={setActiveTab} activeTab={activeTab}/>
            <main style={{ padding: "20px", flex: 1, backgroundColor: "#fff", borderRadius: "10px", margin: "20px" }}>
                {/* {renderComponent()} */}

                <TabDash tabData={activeTab}/>

            </main>
        </div>
    );
};

export default DashboardMst;