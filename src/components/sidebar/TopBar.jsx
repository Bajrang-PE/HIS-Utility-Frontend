import React, { useState, useRef, useEffect } from 'react';
import '../headers/NavbarHeader.css';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopBar = ({ data, setActiveTab, activeTab, dashboardData }) => {
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const rootTabs = data?.filter(tab => !tab.jsonData.parentTabId || tab.jsonData.parentTabId === "0");

    const getChildTabs = (parentId) => data?.filter(tab => tab.jsonData.parentTabId === String(parentId));

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

    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Function to scroll left
    const scrollLeft = () => {
        const sc1 = document.querySelector('.scrollable-navbar-container');
        const sc2 = document.querySelector('.scrollable-navbar');
        if (sc1 && sc2) {
            sc1.style.overflow = 'hidden';
            sc2.style.overflow = 'auto';
        }
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    // Function to scroll right
    const scrollRight = () => {
        const sc1 = document.querySelector('.scrollable-navbar-container');
        const sc2 = document.querySelector('.scrollable-navbar');
        if (sc1 && sc2) {
            sc1.style.overflow = 'hidden';
            sc2.style.overflow = 'auto';
        }
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    const checkScroll = () => {
        if (scrollRef.current) {
            setCanScrollLeft(scrollRef.current.scrollLeft > 0);
            setCanScrollRight(scrollRef.current.scrollLeft < (scrollRef.current.scrollWidth - scrollRef.current.clientWidth));
        }
    };

    const removeScroll = () => {
        const sc1 = document.querySelector('.scrollable-navbar-container');
        const sc2 = document.querySelector('.scrollable-navbar');
        if (sc1 && sc2) {
            sc1.style.overflow = '';
            sc2.style.overflow = '';
        }
    }

     useEffect(() => {
            if (data?.length > 0) {
             const roots =   data?.filter(tab => !tab.jsonData.parentTabId || tab.jsonData.parentTabId === "0")
                setActiveTab(roots[0]);
                // handleSubMenuClick(rootTabs[0]?.id);
                setOpenSubMenu(roots[0]?.id)
               
            }
        }, [data])

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-header">
            <div className="container-fluid">
                <span className='topbar-brand me-4 navbar-brand logo' style={{ whiteSpace: "nowrap" }}>{dashboardData?.jsonData?.groupName || "Dashboard"}</span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                {canScrollLeft && (
                    <button className="scroll-button left" onClick={scrollLeft}>
                        <FontAwesomeIcon icon={SolidIcons.faChevronLeft} />
                    </button>
                )}
                <div className="collapse navbar-collapse scrollable-navbar-container" id="navbarNavDropdown" >
                    <ul className="navbar-nav ms-auto scrollable-navbar" ref={scrollRef} onScroll={checkScroll}>
                        {rootTabs?.map(tab => {
                            const childTabs = getChildTabs(tab.id);
                            return (
                                <li key={tab.id} className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdownAnchor dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle={childTabs?.length > 0 ? 'dropdown' : ''}
                                        id={`dropdownMenu1${tab.id}`}
                                        onClick={() => {
                                            setActiveTab(tab);
                                            setOpenSubMenu(openSubMenu === tab.id ? null : tab.id);
                                            removeScroll()
                                        }}
                                    // style={{ color: tabFont }}
                                    >
                                        <FontAwesomeIcon icon={getDynamicIcon(tab?.jsonData?.iconName)} className="me-2 dropdown-gear-icon" />
                                        {tab?.jsonData?.dashboardName}
                                    </a>
                                    {childTabs.length > 0 && (
                                        <ul className="dropdown-menu drpb-menu" aria-labelledby={`dropdownMenu1${tab.id}`}>
                                            {childTabs?.map(child => (
                                                <li key={child.id} className="dropdown-list">
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                        onClick={() => setActiveTab(child)}
                                                    >
                                                        <FontAwesomeIcon icon={getDynamicIcon(child?.jsonData?.iconName)} className="me-2 dropdown-gear-icon" />
                                                        {child?.jsonData?.dashboardName}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {/* Right Scroll Button */}
                {canScrollRight && (
                    <button className="scroll-button right" onClick={scrollRight}>
                        <FontAwesomeIcon icon={SolidIcons.faChevronRight} />
                    </button>
                )}
            </div>
        </nav>
    );

};

export default TopBar;
