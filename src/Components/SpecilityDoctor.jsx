import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../MyContext/AppContext";

function SpecilityDoctor(){
    let {specility}=useParams();
    const {doctors}=useContext(AppContext);
// let newDoctor=doctors.filter((ter)=> ter.specility === specility);
// console.log(newDoctor);
    return(
        <div>
        <h1>{specility}</h1>
        </div>
    )
};
export default SpecilityDoctor;