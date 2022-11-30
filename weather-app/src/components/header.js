import Button from "./btn";
import "../index.css"
const Header = (props) => {
  const {heading} = props

  const handleAddNewCityClick = () => {
    console.log("Clicking on Contact");
  };

  return (
    <div className="wrapper">
      <div className="text-container">{heading}</div>
      <div className="right-container">
        <div className="btn-addcity">
          <Button data={"Add New City"} handleClick={handleAddNewCityClick} />
        </div>
        
      </div>
    </div>
  );
};

export default Header;
