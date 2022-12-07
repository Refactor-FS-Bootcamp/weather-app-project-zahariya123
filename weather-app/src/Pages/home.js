import Button from "../components/btn";
import Model from "../components/Model";
import "../index.css";
import { useContext, useState } from "react";
import { MyContext } from "../context/application-context";
import { toast, ToastContainer } from "react-toastify";
import { AiTwotoneStar } from "react-icons/ai";

const Home = () => {
  const context = useContext(MyContext);
  const [show, setShow] = useState(false);
  const addCity = () => {
    setShow(true);
    context.setResetModal(true);
  };

  const newcitybtncontainer = {
    backgroundColor: "#633ea5",
    height: "50px",
    width: "150px",
    color: "wheat",
    marginTop: "20px",
    marginRight: "30px",
    fontFamily: "'Times New Roman', Times, serif",
  };

  const removeFavouriteCity = (city) => {
    toast("City Removed", {
      position: toast.POSITION.TOP_CENTER,
      className: 'toast-message'
    });
    const favCity = context.favCity.filter((c) => c.id !== city.id);
    context.setFavCity(favCity);
  };
  const handleCityBox = (close) => {
    if (!close) {
      setShow(false);
    }
  };

  return (
    <div>
      <ToastContainer
      />
      <div className="wrapper">
        <div className="text-container">{"My Favorite City"}</div>
        <div className="right-container">
          <div className="btn-addcity">
            <Button
              data={"Add New City"}
              handleClick={addCity}
              customStyle={newcitybtncontainer}
            />
          </div>
        </div>
      </div>
      <div className="body-container">
        {context.favCity.length === 0 ? (
          <div>
            You have not selected any city as a favorite yet.
          </div>
        ) : (
          <>
            {context.favCity.map((city) => {
              return (
                <div className="favorite-city-box">
                  <div className="favorite-city-header">
                    <div>{city.name}</div>
                    <div onClick={() => removeFavouriteCity(city)}>
                      <AiTwotoneStar />
                    </div>
                  </div>
                  <div className="favorite-city-content">
                    <div>{city.desc}</div>
                    <div>
                      <b>Temperature: </b>
                      {city.temp}
                    </div>
                    <div>
                      <b>Humidity: </b>
                      {city.humidity}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      {show ? <Model onClose={handleCityBox} /> : null}
    </div>
  );
};

export default Home;
