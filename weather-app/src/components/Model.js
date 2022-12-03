import { useState } from "react";
import { Cities } from "../ListItems/citylist"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";

const Modal = () => {
    
  const [searchText, setSearchText] = useState("");
  const [allCity, setAllCity] = useState(Cities);
  const [selectedCities, setSelectedCities] = useState([]);
  const [unSelectedCities, setUnSelectedCities] = useState(Cities);

  const handleChange = (e) => {
    setSearchText(e.target.value);
    const filterCities = unSelectedCities.filter((city) =>
      city.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setAllCity(filterCities);
  };
  const handleAddCity = (city) => {
    const unselected= unSelectedCities.filter((c) => c.id !== city.id);     
    setAllCity(unselected);
    setUnSelectedCities(unselected);
    let selectedCity = [...selectedCities, city];
    setSelectedCities(selectedCity);
    setSearchText("")
    toast.success("City Added", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true           
    });
  };
  
  return (
        <div className="modal-wrapper">
          <ToastContainer/>
          <div className="modal-content">
            <div className="modal-header">
              <div className="header-tittle">
               Add City Modal
              </div>
              <button className="icon">&#43;</button>
              </div>
            <div className="content">
              <div className="search-box">
                <input
                  placeholder="Search city here"
                  type="text"
                  class="input"
                  value={searchText}
                  onChange={handleChange}
                  style={{padding: '10px'}}/>
              </div>
              <div className="cities-list">
                {allCity.map((city) => {
                  return (
                    <div
                      className="city-container"
                      onClick={() => handleAddCity(city)}
                    >
                      <div>{city.name}</div>
                      <button className="icon">&#43;</button>
                    </div>
                  );
                })}
                {allCity.length === 0 && <div>Data Not Exist!!! </div>}
              </div>
            </div>
          </div>
        </div>
      
  );
};
export default Modal;
