import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sider = (props) => {
  const { sidebarTab } = props;
  const navigate = useNavigate();
  const sample = "City description details";
  const [selectedTab, setSelectedTab] = useState("Home")
  
  const handleClick = (tab) => {
    setSelectedTab(tab)
    if (tab === "Home") {
      console.log("home");
      navigate("/");
    
    } else if (tab === "City") {
      console.log("Cities");
      navigate("/city",
      {state:
        {
          sample:sample,
        }
      });
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
