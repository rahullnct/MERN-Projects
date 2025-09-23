import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
function NewComponent(){
    return(
        <div>
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
    )
};
export default NewComponent;