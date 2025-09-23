import { useState } from "react"; 
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../Authentication/Login.css';
function Login()
{
    const [loginsetup, setloginsetup] = useState({ username: "", password: "" }) 
    const [showpassword, setshowpassword] = useState(false);
    function changehandler(event) 
    {
     setloginsetup((prev) =>
         ({ ...prev,
             [event.target.name]: event.target.value })) 
    } 
    function submithandler(event)
    { 
       event.preventDefault();
        setloginsetup({ username: "", password: "" }) 
    }
    return (
    <div className="login_wrapper">
        <div className="login_container">
            <div className="login_left">
                <h1 className="login_heading">Welcome Back</h1> 
                <p className="login_subheading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur fugiat ea libero a magnam! Porro officia ratione quia autem quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, deserunt.</p>
                </div>
                <form onSubmit={submithandler} className="login_form">
                <label htmlFor="username" className="for_username">Username Or Email</label>
                <input className="inp_username" 
                type="text"
                name="username" 
                value={loginsetup.username}
                onChange={changehandler}
                required />
                <label htmlFor="password" className="for_password">Password</label> 
                <input className="inp_password"
                type={showpassword ? "text" : "password"} 
                name="password" 
                value={loginsetup.password} 
                onChange={changehandler}
                required />
                {
                 showpassword ? (<FaEye onClick={() => setshowpassword(!showpassword)} className="show_icon" />) :
                  (<FaEyeSlash onClick={() => setshowpassword(!showpassword)} className="show_icon" />)
                }
                <Link to='/forgot_password' className="forgot_password">Forgotten password</Link> 
                <button className="login_btn">Login</button> 
                 <p className="new_user">Don't have an account <Link to='/signup' className="signup_link">Signup</Link></p>
                </form> 
                </div> 
                </div>);
} 
                export default Login;