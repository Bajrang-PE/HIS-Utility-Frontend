import React, { useEffect, useState } from "react";
import { Menu, MenuItem, SubMenu, Sidebar } from "react-pro-sidebar";
import { FaBars, FaThLarge, FaStickyNote, FaBook } from "react-icons/fa";
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.min.css";


const DashSidebar = ({ data, setActiveTab, activeTab, dashboardData }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const handleSubMenuClick = (submenu) => {
        setOpenSubMenu(openSubMenu === submenu ? null : submenu);
    };

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    const rootTabs = data?.filter(tab => !tab.jsonData.parentTabId || tab.jsonData.parentTabId === "0");

    const getChildTabs = (parentId) => {
        return data?.filter(tab => tab.jsonData.parentTabId === String(parentId));
    };

    const tabFontColourHover = dashboardData?.jsonData?.tabFontColourHover || "#ffffff";
    const tabColourHover = dashboardData?.jsonData?.tabColourHover || "#ccac7c";
    const tabFont = dashboardData?.jsonData?.tabFont || "#ffffff";
    const textShadowColour = dashboardData?.jsonData?.textShadowColour || "#666666";
    const isSidebarCollapse = dashboardData?.jsonData?.isSidebarCollapse || 'Yes';

    const mouseHover = (id) => {
        const ele = document.getElementById(id);
        if (ele) {
            ele.style.color = tabFontColourHover;
            ele.style.backgroundColor = tabColourHover;
        }
    };

    const mouseOut = (id) => {
        const ele = document.getElementById(id);
        if (ele) {
            ele.style.color = tabFont;
            ele.style.backgroundColor = "transparent";
        }
    };

    const getDynamicIcon = (iconName) => {
        if (!iconName) return SolidIcons.faBarChart;

        let formattedIconName = "fa" + iconName.replace(/-o$/, "")
            .replace("fa-", "")
            .replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
        let iconKey = Object.keys(SolidIcons).find(key => key.toLowerCase() === formattedIconName.toLowerCase());
        if (!iconKey) {
            iconKey = Object.keys(SolidIcons).find(key => key.toLowerCase().includes(formattedIconName.toLowerCase().replace(/[^a-zA-Z]/g, "")));
        }
        return iconKey ? SolidIcons[iconKey] : SolidIcons.faBarChart;
    };

    useEffect(() => {
        if (data?.length > 0) {
         const roots =   data?.filter(tab => !tab.jsonData.parentTabId || tab.jsonData.parentTabId === "0")
            setActiveTab(roots[0]);
            // handleSubMenuClick(rootTabs[0]?.id);
            setOpenSubMenu(roots[0]?.id)
           
        }
    }, [data])

    return (
        <Sidebar width="270px" style={{ minHeight: "100vh", color: "#ECF0F1" }} collapsed={collapsed} toggled backgroundColor="#071b2f">
            <Menu iconShape="square">
                <MenuItem className="menu-item-container">
                    {!collapsed && <span><b>{dashboardData?.jsonData?.groupName || "Dashboard"}</b></span>}
                    {isSidebarCollapse !== 'No' &&
                        <FaBars onClick={toggleSidebar} className="menu-icon-right" />
                    }
                    {/* <i className="fa fa-bar-chart"></i> */}
                </MenuItem>

                <b><h6 className='header-devider'></h6></b>

                {/* Render root tabs and their children */}
                {rootTabs?.map((tab) => {
                    const childTabs = getChildTabs(tab.id);
                    return childTabs.length > 0 ? (
                        <SubMenu
                            key={tab.id}
                            label={!collapsed && tab?.jsonData?.dashboardName}
                            icon={
                                <FontAwesomeIcon icon={getDynamicIcon(tab?.jsonData?.iconName)} />
                                // <i className={`fa ${tab?.jsonData?.iconName}`}></i>
                            }
                            className={`submenu-tab-side ${activeTab?.jsonData?.dashboardId === tab?.jsonData?.dashboardId ? 'activeSideTab' : ''}`}
                            open={activeTab?.jsonData?.parentTabId == tab.id || openSubMenu == tab.id}
                            onClick={() => { handleSubMenuClick(tab.id); setActiveTab(tab); }}
                            style={{
                                color: tabFont,
                                // textShadow: `1px 1px 2px ${textShadowColour}`,
                            }}
                            id={`menu-tab-item${tab.id}`}
                            onMouseOver={() => mouseHover(`menu-tab-item${tab.id}`)}
                            onMouseOut={() => mouseOut(`menu-tab-item${tab.id}`)}
                        >
                            {childTabs.map(child => (
                                <MenuItem
                                    key={child.id}
                                    onClick={() => { setActiveTab(child) }}
                                    className={`menu-tab-item ${activeTab?.jsonData?.dashboardId === child?.jsonData?.dashboardId ? 'activeSideTab' : ''}`}
                                    icon={
                                        <FontAwesomeIcon icon={getDynamicIcon(child?.jsonData?.iconName)} />
                                        // <i className={`fa ${child?.jsonData?.iconName}`}></i>
                                    }
                                    style={{
                                        color: tabFont,
                                        // textShadow: `1px 1px 2px ${textShadowColour}`,
                                    }}
                                    id={`menu-tab-item${child.id}`}
                                    onMouseOver={() => mouseHover(`menu-tab-item${child.id}`)}
                                    onMouseOut={() => mouseOut(`menu-tab-item${child.id}`)}
                                >
                                    {child?.jsonData?.dashboardName}
                                </MenuItem>
                            ))}
                        </SubMenu>
                    ) : (
                        <MenuItem
                            key={tab.id}
                            icon={
                                <FontAwesomeIcon icon={getDynamicIcon(tab?.jsonData?.iconName)} />
                                // <i className={`fa ${tab?.jsonData?.iconName}`}></i>
                            }
                            onClick={() => { setActiveTab(tab); handleSubMenuClick(''); }}
                            className={`menu-tab-item ${activeTab?.jsonData?.dashboardId === tab?.jsonData?.dashboardId ? 'activeSideTab' : ''}`}
                            style={{
                                color: tabFont,
                                // textShadow: `1px 1px 2px ${textShadowColour}`,
                            }}
                            onMouseOver={() => mouseHover(`menu-tab-item${tab.id}`)}
                            onMouseOut={() => mouseOut(`menu-tab-item${tab.id}`)}
                            id={`menu-tab-item${tab.id}`}
                        >
                            {!collapsed && <>  {tab?.jsonData?.dashboardName}</>}
                        </MenuItem>
                    );
                })}
            </Menu>
        </Sidebar>
    );
};

export default DashSidebar;
