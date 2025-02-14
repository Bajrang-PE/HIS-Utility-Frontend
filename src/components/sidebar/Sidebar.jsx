import React, { useEffect, useState } from "react";
import { Menu, MenuItem, SubMenu, Sidebar } from "react-pro-sidebar";
import { FaBars, FaThLarge, FaStickyNote, FaBook } from "react-icons/fa";

const DashSidebar = ({ data, setActiveTab, activeTab }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const handleSubMenuClick = (submenu) => {
        setOpenSubMenu(openSubMenu === submenu ? null : submenu);
    };

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    // Filter out root tabs (tabs with parentTabId "0" or missing)
    const rootTabs = data?.filter(tab => !tab.jsonData.parentTabId || tab.jsonData.parentTabId === "0");

    // Function to get child tabs for a given parent id
    const getChildTabs = (parentId) => {
        return data?.filter(tab => tab.jsonData.parentTabId === String(parentId));
    };
console.log(activeTab,'activeTab',openSubMenu)
    return (
        <Sidebar width="280px" style={{ minHeight: "100vh", color: "#ECF0F1" }} collapsed={collapsed} toggled backgroundColor="#071b2f">
            <Menu iconShape="square">
                <MenuItem className="menu-item-container">
                    {!collapsed && <span><b>Dashboard</b></span>}
                    <FaBars onClick={toggleSidebar} className="menu-icon-right" />
                </MenuItem>

                <b><h6 className='header-devider'></h6></b>

                {/* Render root tabs and their children */}
                {rootTabs?.map((tab) => {
                    const childTabs = getChildTabs(tab.id);
                    return childTabs.length > 0 ? (
                        <SubMenu
                            key={tab.id}
                            label={!collapsed && tab?.jsonData?.dashboardName}
                            icon={<FaBook />}
                            className={`submenu-tab-side ${activeTab?.jsonData?.dashboardId === tab?.jsonData?.dashboardId ? 'activeSideTab' : ''}`}
                            open={activeTab?.jsonData?.parentTabId == tab.id || openSubMenu == tab.id}
                            onClick={() => { handleSubMenuClick(tab.id); setActiveTab(tab); }}
                        >
                            {childTabs.map(child => (
                                <MenuItem
                                    key={child.id}
                                    onClick={() => { setActiveTab(child) }}
                                    className={`menu-tab-item ${activeTab?.jsonData?.dashboardId === child?.jsonData?.dashboardId ? 'activeSideTab' : ''}`}
                                    icon={<FaThLarge />}
                                >
                                    {!collapsed && <> {child?.jsonData?.dashboardName}</>}
                                </MenuItem>
                            ))}
                        </SubMenu>
                    ) : (
                        <MenuItem
                            key={tab.id}
                            icon={<FaThLarge />}
                            onClick={() => { setActiveTab(tab); handleSubMenuClick('');}}
                            className={`menu-tab-item ${activeTab?.jsonData?.dashboardId === tab?.jsonData?.dashboardId ? 'activeSideTab' : ''}`}
                        >
                            {!collapsed && <>  {tab?.jsonData?.dashboardName}</>}
                        </MenuItem>
                    );
                })}

                <MenuItem
                    icon={<FaStickyNote />}
                    // onClick={() => { setActiveComponent("Components"); }}
                    // className={`${activeComponent === 'Components' ? 'activeSideTab' : ''}`}
                >
                    Components
                </MenuItem>
            </Menu>
        </Sidebar>
    );
};

export default DashSidebar;
