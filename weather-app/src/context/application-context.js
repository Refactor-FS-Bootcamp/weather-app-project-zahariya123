import React, { useState } from "react";
import { Cities } from "../Helper/constant";

export const MyContext = React.createContext();

export const ApplicationContextProvider = ({ children }) => {
    const [selectedCities, setSelectedCities] = useState([]);
    const [allCity, setAllCity] = useState(Cities);
    const [currentCity,setCurrentCity]= useState();
    const [cardState, setCardState] = useState(false);
    const [favCity,setFavCity]=useState([])
  
  
    const value = {
      selectedCities,
      setSelectedCities,
      allCity,
      setAllCity,
      currentCity,
      setCurrentCity,
      cardState,
      setCardState,
      favCity,
      setFavCity,

    };
  
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
  };
  