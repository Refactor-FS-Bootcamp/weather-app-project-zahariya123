
import Sider from "./components/sider";
import "./index.css";
import { ApplicationContextProvider } from "./context/application-context";
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
   <ApplicationContextProvider>
   <AppRoute/>
   </ApplicationContextProvider>
   </div>
     
    </div>
  );
}
