import viteLogo from '/vite.svg'
import './App.css'
// import NewComponents from './Components/FirstComponent';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Doctor from './Pages/Doctor';
import Signup from './Authentication/Signup';
import Login from './Authentication/Login';
import NewComponent from './Components/NewComponent';
function App() {
  return (
  <div className='main_wrapper'>
  <Routes>
  <Route path="/" element={<NewComponent />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />}/>
  <Route path="contact" element={<Contact />}/>
  <Route path="doctor" element={<Doctor />} />
  <Route path="signup" element={<Signup />} />
  <Route path="login" element={<Login />} />
  </Route>
  </Routes>
    </div>
  )
}

export default App;