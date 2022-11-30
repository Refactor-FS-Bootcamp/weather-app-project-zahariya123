import { useState } from "react";

const Sider = (props) => {
  const { sidebarTab } = props;
  
  const [selectedTab, setSelectedTab] = useState("Home")
  
  const handleClick = (tab) => {
    setSelectedTab(tab)
    if (tab === "Home") {
      console.log("home");
     
    } else if (tab === "City") {
      console.log("Cities");
    }
  };

  return (
    <div className="sider">
      {sidebarTab.map((tab) => {
        return (
          <>
            <div className={selectedTab === tab.tab ? "active-container" : "deactive-container"} onClick={() => handleClick(tab.tab)}>{tab.tab}</div>
         
          </>
        );
      })}
    </div>
  );
};

export default Sider;
