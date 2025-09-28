import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../MyContext/AppContext";
import {assets} from "../assets/assets";

function Doctor(){
    let {id}=useParams();
    console.log(id);
    const {doctors}=useContext(AppContext);
    const[docinfo,setdocinfo]=useState([]);
    const[docSlots,setdocSlots]=useState([]);
    const[slotTime,setslotTime]=useState(0);
    const all_info= doctors.filter((doc)=>doc._id === id)
    const filterdocinfo=()=>{
       setdocinfo(all_info);
    }

    const week=['SUN','MON','TUE','WED','THRU','FRI','SAT','SUN'];
    const doctorSlots=async()=>{
      setdocSlots([]);
      let today= new Date();
      for(let i=0;i<7;i++){
        
        let currentDate= new Date(today);
        currentDate.setDate(today.getDate()+i);

        let Endtime= new Date();
        Endtime.setDate(today.getDate()+i);
        Endtime.setHours(21,0,0,0);

        if(today.getDate() === currentDate.getDate()){
          currentDate.setHours(currentDate.getHours()>10 ? currentDate.getDate()+1 : 10);
          currentDate.setMinutes(currentDate.getMinutes()>30 ? 30: 0);
        }
        else 
        {
          currentDate.setHours(10);
          currentDate.setMinutes(0);
        }

        let timeSlots=[];
        while(currentDate < Endtime){
          let formattedTime= currentDate.toLocaleTimeString([],{ hour:'2-digit',minute:'2-digit'})
          
          timeSlots.push({
            datetime:new Date(currentDate),
            time:formattedTime
          })
          currentDate.setMinutes(currentDate.getMinutes()+30);
        }
        setdocSlots((prev)=>([...prev,timeSlots]));

      }

    }


    useEffect(()=>{
      filterdocinfo();
    },[])

    useEffect(()=>{
     doctorSlots();
    },[])

    useEffect(()=>{
      console.log(docSlots);
    },[docinfo]);

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

          <div className="all_slots">
            {
              docSlots.length && docSlots.map((slots, index)=>(
                 <div key={index} onClick={()=> setslotTime(index)}>
                  <span className="day">{slots[0] && week[slots[0].datetime.getDay()]}</span>
                  <span className="date">{slots[0] && slots[0].datetime.getDate()}</span>
                 </div>
              ))
            }
          </div>
          <div className="slottime">
             {
              docSlots.length && docSlots[slotTime].map((only_time,index)=>(
                <div key={index}>
                  <span className="timming">{only_time.time.toLowerCase()}</span>
                </div>
              ))
             }
           </div>
        </div>
            
        </div>
    )
};
export default Doctor;