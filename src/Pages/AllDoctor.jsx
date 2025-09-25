import { useContext, useEffect, useState } from "react";
import { AppContext } from "../MyContext/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import '../CSS_Folders/AllDoc.css';

function AllDoctor(){
    const navigate=useNavigate();
    let {speciality}=useParams();
    const {doctors}=useContext(AppContext);
    const specilities= new Set(doctors.map((new_doc)=> new_doc.speciality));
    const specilities_array= [...specilities];

    const[filterdoc,setfilterdoc]=useState([]);

    const filterDoctor=()=>{
        if(speciality){
            setfilterdoc(doctors.filter((doc)=> doc.speciality === speciality))
        }
        else{
            setfilterdoc(doctors);
        }
    }
    useEffect(()=>{
         filterDoctor();
    },[speciality , doctors]);
    console.log(filterdoc);
    return(
        <div className="all_doctors_wrapper">
            <div className="all_doctors_container">
              <aside className="only_specilities">
                 {
                    specilities_array.map((new_specility)=> (
                        <p className={`specility ${speciality === new_specility ? "active_specility" : ""}`} 
                        onClick={()=>navigate(`/alldoctors/${new_specility}`)}>{new_specility}</p>
                    ))
                 }
              </aside>
              <div className="select_doc">
                  {
                    filterdoc.map((all_dc)=>(
                        <div className="all_doc_info">
                          <img src={all_dc.image} alt='doctor_image' className="doc_img"/>
                                 <li className="avil_not">Available</li>
                                 <span className="doc_name">{all_dc.name}</span>
                                 <span className="doc_specility">{all_dc.speciality}</span>
                        </div>
                    ))
                  }
            </div>
           </div>
        </div>
    )
};
export default AllDoctor;