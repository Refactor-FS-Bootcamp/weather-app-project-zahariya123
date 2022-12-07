import { useContext, useState } from "react";
import { MyContext } from "../context/application-context";
import Modal from "../components/Model";
import { toast, ToastContainer } from "react-toastify";
import "../index.css";
import { AiOutlineStar,AiTwotoneStar } from "react-icons/ai";

const City = () => {
  const context = useContext(MyContext);
  const [show, setShow] = useState(false);

  const addCity = () => {
    setShow(true);
    context.setResetModal(true);
  };
  const showCityDetils = (city) => {
    context.setCurrentCity(city);
    context.setCardState(true);
  };
  const addFavouriteCity = () => {
    if (!context.favCity.includes(context.currentCity)) {
      const current = [...context.favCity, context.currentCity];
      context.setFavCity(current);
      toast("City added to favorites", {
      position: toast.POSITION.TOP_CENTER,
      className: 'toast-message'
      });
    } else {
      const fav = context.favCity.filter(
        (c) => c.id !== context.currentCity.id
      );
      context.setFavCity(fav);
      toast("City removed from favorites", {
        position: toast.POSITION.TOP_CENTER,
        className: 'toast-message'
      });
    }
  };
  const handleCityBox = (close) => {
    if (!close) {
      setShow(false);
    }
  };
  return (
    <div className="main-content">
      <ToastContainer     
      />
      <div className="main-wrapper">
        <div className="left-container">
          <div className="left-container-header">
            <div>Cities</div>
            <div>
              <button className="icon" onClick={addCity}>+</button>
            </div>
          </div>
          <div className="left-container-layout">
            {context.selectedCities.length === 0 ? (
              <div style={{margin:"10px"}}>You have not selected any city!.</div>
            ) : (
              <>
                {context.selectedCities.map((city) => {
                  return (
                    <div
                      className="city-box"
                      onClick={() => showCityDetils(city)}
                    >
                      <div className="city-name">{city.name}</div>
                      <div className="city-temp">{city.temp}</div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
        {context.cardState ? (
          <div className="city-detail-container">
            <div className="city-detail-container-header">
              <div>{context.currentCity.name}</div>
              <div onClick={addFavouriteCity}>
                {!context.favCity.includes(context.currentCity) ? (
                  <AiOutlineStar />
                ) : (
                  <AiTwotoneStar />
                )}
              </div>
            </div>
            <div className="city-detail-container-content">
              <div style={{ color: "green" }}>{context.currentCity.desc}</div>
              <hr />
              <div>Temperature:{context.currentCity.temp}</div>
              <div>Humidity:{context.currentCity.humidity}</div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      {show ? <Modal onClose={handleCityBox} /> : <></>}
    </div>
  );
};

export default City;
