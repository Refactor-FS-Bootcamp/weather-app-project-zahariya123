import Content from "./components/content";
import Header from "./components/header";
import Sidebar from "./components/sider";
import {  Route, Routes,BrowserRouter } from "react-router-dom";
import "./index.css";
import City from "./pages/city";
import Home from "./pages/home";

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
     <Sidebar sidebarTab={sidebarTab}/>
     <Content/>
     <Header heading={"My Favorite Cities"}/>
     <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home />}>
        
     </Route>
     <Route path="/city" element={<City />}>
        
     </Route></Routes>
     </BrowserRouter>
    </div>
  );
}
