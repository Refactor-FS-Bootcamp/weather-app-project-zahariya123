import { useState } from "react";
import { Cities } from "../Helper/constant";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";
//import { ClosePopupStyled } from "./modelcss";
import { useContext } from "react";
import { MyContext } from "../context/application-context";
import { BsXLg } from "react-icons/bs";

const Modal = (props) => {
  const [searchText, setSearchText] = useState("");
  const [unSelectedCities] = useState(Cities);
  const [close] = useState(false);
  const context = useContext(MyContext); 

  const handleChange = (e) => {
    setSearchText(e.target.value);
    const filterCities = unSelectedCities.filter(
      (city) =>
        city.name.toLowerCase().includes(e.target.value.toLowerCase()) &&
        !context.selectedCities.includes(city)
    );
    context.setAllCity(filterCities);
  };
  const handleClose = (e) => {
    props.onClose(close);
  };

  const handleAddCity = (city) => {
    if (!context.selectedCities.includes(city)) {
      const selected = [...context.selectedCities, city];
      context.setSelectedCities(selected);
      const unselectedCities = context.allCity.filter((c) => c.id !== city.id);
      context.setAllCity(unselectedCities);
      
      toast("City Added", {
        position: toast.POSITION.TOP_CENTER,
        className: 'toast-message'
      });
    }
  };
  if (!close) {
    return (
      <div className="modal-wrapper">
        <ToastContainer />
        <div className="modal-content">
          <div className="modal-header">
            <div className="header-tittle">Add City Modal</div>
            {/*<ClosePopupStyled>
              <Button data='X' handleClick={handleClose} customStyle={cityPopupClose}/>
  </ClosePopupStyled>*/}
  
  <div onClick={handleClose}> <BsXLg  /> </div>
           
          </div>
          <div className="content">
            <div className="search-box">
              <input
                placeholder="Search city here"
                type="text"
                class="input"
                value={searchText}
                onChange={handleChange}
                style={{ padding: "10px" }}
              />
            </div>
            <div className="cities-list">
              {context.allCity.map((city) => {
                return (
                  <div
                    className="city-container-modal"
                    onClick={() => handleAddCity(city)}
                  >
                    <div>{city.name}</div>
                    <button className="icon">+</button>
                  </div>
                );
              })}
              {context.allCity.length === 0 && <div>Data not exist!!!</div>}
            </div>
          </div>
        </div>
        <div
          className="close-clicked"
          onClick={(e) => {
            e.preventDefault();
            handleClose();
          }}
        ></div>
      </div>
    );
  }
};
export default Modal;
