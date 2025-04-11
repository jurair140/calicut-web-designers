
import './App.css'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicePage'
import TrustedClients from "./pages/TrustedClients"; 
import ContactPage from './pages/ContactPage'
import { ToastContainer, toast } from 'react-toastify';
import GalleryPage from './pages/GalleryPage'


function App() {

  return (
    <>
    
    <div className="w-full overflow-hidden">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path='/gallery' element={<GalleryPage/>}/>
        <Route path="/clients" element={<TrustedClients />} /> 
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>

    <Footer/>

    <ToastContainer />


    </div>
   
    </>
  )
}

export default App
