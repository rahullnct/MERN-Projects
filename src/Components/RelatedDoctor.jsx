import { useContext, useEffect, useState } from "react";
import { AppContext } from "../MyContext/AppContext";
import { useNavigate } from "react-router-dom";
function RelatedDoctor({id,speciality}){
    const navigate=useNavigate();
     const [relatedDoc,setfilterDoc]=useState([]);
    const {doctors}=useContext(AppContext);
      const relatedDoctors=()=>{
       const relDoc= doctors.filter((doc)=> doc.speciality === speciality && doc._id !== id);
       setfilterDoc(relDoc);
    }
    useEffect(()=>{
        relatedDoctors();
    },[doctors,id,speciality])
    
    return(
                   <div className="related_doctors">
             <h1 className="related_doc_head">Realted Doctors</h1>
             <p className="related_doc_subhead">Experience Doctors are here</p>
            <div className="some_related_doc">
              {
                relatedDoc.slice(0,5).map((rel_doc,index)=>(
                  <div className="related_doc_info" key={index} onClick={()=>navigate(`/doctor/${rel_doc._id}`)}>
                  <img src={rel_doc.image} alt='rel_doctor_image' className="rel_doctor_image"/>
                                 <li className="rel_available_or_not">Available</li>
                                 <span className="rel_doctor_name">{rel_doc.name}</span>
                                 <span className="rel_doctor_speciality">{rel_doc.speciality}</span>
                </div>
                ))
              }
            </div>
          </div>
    )
};
export default RelatedDoctor;