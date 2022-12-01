import { useLocation } from "react-router-dom";

const City = () =>{
    const { state } = useLocation()
    console.log(state)
    return(
        
        <div><span>{state?.sample}</span></div>
    )
}

export default City;