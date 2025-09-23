import viteLogo from '/vite.svg'
import './App.css'
// import NewComponents from './Components/FirstComponent';
import { Routes,Route } from 'react-router-dom';
import Home from '../src/Pages/Home';
import About from '../src/Pages/About';
import Contact from '../src/Pages/Contact';
import Doctor from '../src/Pages/Doctor';
import Signup from '../src/Authentication/Signup';
import Login from '../src/Authentication/Login';
import NewComponent from './Components/NewComponent';
function App() {
  return (
  <div className='App'>
  <Routes>
    <Route path='/' element={<NewComponent/>}>
    <Route index element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/doctor' element={<Doctor/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    
    
    </Route>
  </Routes>
    </div>
  )
}

export default App