import React, { useState, useEffect } from 'react';

const TabNav = ({ isTabNav, tabNavData, setTabIndex,tabIndex }) => {
  
  const [visibleTabCount, setVisibleTabCount] = useState(4);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const calculateTabCount = () => {
      const availableWidth = window.innerWidth;
      if (availableWidth > 1440) {
        setVisibleTabCount(7);
      } else if (availableWidth >= 1200) {
        setVisibleTabCount(5);
      } else if (availableWidth >= 768) {
        setVisibleTabCount(4);
      } else {
        setVisibleTabCount(0);
      }
    };

    calculateTabCount();
    window.addEventListener('resize', calculateTabCount);

    return () => {
      window.removeEventListener('resize', calculateTabCount);
    };
  }, []);

  const handleTabClick = (value) => {
    setTabIndex(value)
  };

  return (
    <>
      {isTabNav && (
        <div className="text-end py-1 global-tab-group">
          {/* Tabs for larger screens */}
          <div className="tabs d-none d-sm-flex justify-content-end">
            {/* MAIN LIST */}
            {tabNavData.slice(0, visibleTabCount).map((tab) => (
              <button
                key={tab.value}
                className={`btn btn-sm ms-1 nav-tab-btn ${tabIndex === tab.value ? 'active-tab' : ''}`}
                onClick={() => handleTabClick(tab.value)}
              >
                {tab.label}
              </button>
            ))}

            {/* DROPDOWN BUTTON */}
            {tabNavData.length > visibleTabCount && (
              <div className="dropdown">
                <button
                  className="btn btn-sm dropdown-button nav-tab-btn ms-1"
                  onClick={() => setShowDropdown((prev) => !prev)}
                >
                  &#9662;
                </button>

                {/* DROPDOWN LIST */}
                {showDropdown && (
                  <div className="dropdown-menu show" style={{ right: 0, left: "auto" }}>
                    {tabNavData.slice(visibleTabCount).map((tab) => (
                      <button
                        key={tab.value}
                        className="dropdown-item"
                        onClick={() => { handleTabClick(tab.value); setShowDropdown((prev) => !prev);}}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile view: Show only dropdown */}
          <div className="tabs d-sm-none">
            <div className="dropdown">
              <button
                className="btn btn-sm dropdown-button"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                &#9662;
              </button>
              {showDropdown && (
                <div className="dropdown-menu show" style={{ right: 0, left: "auto" }}>
                  {tabNavData.map((tab) => (
                    <button
                      key={tab.value}
                      className="dropdown-item"
                      onClick={() => handleTabClick(tab.value)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TabNav;
