import { useNavigate } from "react-router-dom"; 
import { assets,specialityData,doctors} from "../assets/assets.js";
 import '../CSS_Folders/Home.css';
  function Home(){
     const navigate=useNavigate(); 
     return( 
     <div className="home_wrapper">
         <div className="home_container">
             <div className="main_part">
                 <div className="headings_subheadings">
                    <h1 className="heading">Book Appointment with Trusted Doctors</h1>
                    <div className="subpart"> 
                        <img src={assets.group_profiles} className="home_group_img" alt='home_left_group_image'/>
                        <p className="subheading">Simply Browse through the extensive list of trusted doctors. Schedule you appointment hasiie free</p> 
                        </div> 
                        <button className="home_main_btn" onClick={()=> navigate('/appointment')}>Book Appointment Now</button> 
                        </div> 
                        <img src={assets.header_img} alt="homepage_main_image" className="main_img"/> 
                        </div> 
                        <section className="speciality">
                            <div className="speciality_wrapper">
                            <h3 className="speciality_heading">Find by Speciality</h3> 
                            <p className="speciality_subheading">Simply browse through our extensive list ot trusted doctors, shedule your appointment free </p> 
                            <div className="main_speciality">
                                {
                                 specialityData.map((special,index)=>(
                                    <div className="speciality_img_heading"  onClick={()=>navigate(`/alldoctors/${special.speciality}`)}>
                                    <img src={special.image} alt='speciality_image' className="speciality_image"/>
                                     <span className="special_heading">{special.speciality}</span> </div> )) 
                                     }
                                      
                                      </div>
                                       </div>
                                    </section>
                    <section className="doctors_view_wrapper">
                 <div className="doctor_view_container">
                   <h1 className="doctor_view_heading">Top Doctor to Book</h1>
                   <p className="doctor_view_subheading">Simply browse through Our extensive list of Trusted doctors</p>
                   <div className="all_doctors">
                    {
                        doctors.slice(0,12).map((only_doctor)=>(
                        <div className="single_doctor_container" onClick={()=> navigate(`/doctor/${only_doctor._id}`)}>
                                <img src={only_doctor.image} alt='doctor_image' className="doctor_image"/>
                                 <li className="available_or_not">Available</li>
                                 <span className="doctor_name">{only_doctor.name}</span>
                                 <span className="doctor_speciality">{only_doctor.speciality}</span>
                        </div>
                        ))
                    }
                   </div>
                   <button className='show_all_doctors_btn' onClick={()=>navigate('/alldoctors')}>Show More</button>
                 </div>
             </section> 
             <section className="second_last_wrapper">
                 <div className="second_last_container">
                     <div className="first_part"> 
                        <div className="second_last_headings">
                            <h1 className="heading">Book Appointment with 100+ Trusted Doctors</h1>
                            <button className="second_last_btn" onClick={()=> navigate('/signup')}>Create Account</button> 
                        </div>
                    <img src={assets.appointment_img} alt="second_lst_image" className="second_lst_image"/>
                </div> 
                </div>
              </section>
            </div>
            </div> 
            ) 
    }; 
export default Home;