import { useNavigate } from "react-router-dom"; 
import { assets,specialityData} from "../assets/assets.js";
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
                                    <div className="speciality_img_heading" key={index}>
                                    <img src={special.image} alt='speciality_image' className="speciality_image"/>
                                     <span className="special_heading">{special.speciality}</span> </div> )) 
                                     }
                                      
                                      </div>
                                       </div>
                                    </section>
                                    <section className="doctors_view">
                                         </section> 
            </div>
            </div> 
            ) 
    }; 
export default Home;