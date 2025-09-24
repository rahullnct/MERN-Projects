import { useContext } from "react";
import { AppContext } from "../MyContext/AppContext";

function AllDoctor(){
    const {doctors}=useContext(AppContext);
    return(
        <div>
            {
                doctors.map((new_doctors)=>(
                    <img src={new_doctors.image} alt="all_doctors_img"/>
                ))
            }
        </div>
    )
};
export default AllDoctor;