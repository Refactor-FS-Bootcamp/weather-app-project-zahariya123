
import {  Route, Routes} from "react-router-dom";
import CustomLayout from "../components/custom-layout";
import "../index.css";
import City from "../Pages/city";
import Home from "../Pages/home";

export default function AppRoute() {
 
  return (
    <div className="App">
   
   <Routes>
      <Route path="/" element={<CustomLayout><Home /></CustomLayout>}>
        
     </Route>
     <Route path="/city" element={<CustomLayout><City /></CustomLayout>}>
        
     </Route></Routes>
     
    </div>
  );
}
