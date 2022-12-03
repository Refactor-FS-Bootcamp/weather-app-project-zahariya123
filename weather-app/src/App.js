
import Sider from "./components/sider";
import "./index.css";

import AppRoute from "./Routes/app-routes";

export default function App() {
  const sidebarTab = [
    {
      tab: "Home"
    },
    {
      tab: "City"
    },
    
  ];

  return (
    <div className="App">
      <Sider  sidebarTab={sidebarTab}/>
   <div className="dashboard">

   <AppRoute/>
   </div>
     
    </div>
  );
}
