import Button from "../components/btn";
import Model from "../components/Model"
import "../index.css"
import { useState } from "react";
import Content from "../components/content"
const Header = (props) => {

  const {heading} = props
  const [showCity, setShowCity] =useState(0);
  const handleAddNewCityClick = () => {
    setShowCity("show_city");
  };

  return (
    <div>
    <div className="wrapper">
      <div className="text-container">{heading}</div>
      <div className="right-container">
        <div className="btn-addcity">
          <Button data={"Add New City"} handleClick={handleAddNewCityClick} />
        </div>
        
      </div>
     
      {showCity === "show_city" ? <Model/>:<></>}
    </div>
    <div><Content/></div>
    </div>
    
  
  );


};

export default Header;
