import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../MyContext/AppContext";
import {assets} from "../assets/assets";

function Doctor(){
    let {id}=useParams();
    console.log(id);
    const {doctors}=useContext(AppContext);
   
    const[docinfo,setdocinfo]=useState([]);

    const all_info= doctors.filter((doc)=>doc._id === id)
    console.log(all_info);
    const filterdocinfo=()=>{
       setdocinfo(all_info);
    }
    useEffect(()=>{
      filterdocinfo();
    },[])

    const mydate= new Date();
    console.log(mydate.getDate());

    return(
        <div className="doctor_wrapper">
        <div className="doctor_container">
          {
            docinfo.map((all_data)=>(
            <div className="single_doctor_info">
               <img src={all_data.image} alt="doc_info_img" className="doc_info_img"/> 
               <div className="doc_info">

                <h2 className="doc_name">{all_data.name} <img src={assets.verified_icon} alt="verified_icons" className="verified_icon"/></h2>
                <span className="doc_academic">
                  <span className="doc_degree">{all_data.degree}</span>
                  <span className="doc_speciality">{all_data.speciality}</span>
                  <span className="doc_experience">{all_data.experience}</span>
                </span>
                <span className="about_doc">About</span>
                <p className="doc_about">{all_data.about}</p>
                 <p className="doc_fees">Appointment Fees: ${all_data.fees}</p>
               </div>
             </div>   
            ))
          }
        </div>
            
        </div>
    )
};
export default Doctor;