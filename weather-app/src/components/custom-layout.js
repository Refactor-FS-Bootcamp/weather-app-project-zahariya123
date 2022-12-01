import Header from "./header";
import Sidebar from "./sider";

const CustomLayout = (props) =>{
    const sidebarTab = [
        {
          tab: "Home"
        },
        {
          tab: "City"
        },
        
      ];
    
    return(
        <>
        <Sidebar sidebarTab={sidebarTab}/>
        <Header heading={"My Favorite Cities"}/>
        {props?.children}
        </>
    )
}
export default CustomLayout;