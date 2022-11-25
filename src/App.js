
import React, { useEffect, useState } from 'react';

import './index.css';
import Login from './Login';

import Header from "./resources/components/Header";
import Home from './Home';
import About from './resources/components/About';
import Footer from "./resources/components/Footer";
import Bookings from './resources/components/Bookings';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Support from './resources/components/Support';
import { YourRides } from './resources/components/YourRides';
import fire from './fire';
import Partner from './resources/components/Partner';

import ClimbingBoxLoader from "react-spinners/HashLoader";
function App(){
   

  const [userstatus,setUserStatus]=useState('');
  


  const handleLogout = (event) => {
  
    setUserStatus('');
    fire.auth().signOut();
    };


const [loading,setLoading]=useState(false);
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
         setLoading(false);
      },4000)
    },[])
  return (


   <>
   
   {loading?(
   <div className="loader">
   <ClimbingBoxLoader
    color={"red"}
    loading={loading}
    size={80}
  />
  
  </div>
   ):
   (
    <BrowserRouter>
    <header>
    {/* handleLogout={props.handleLogout} user={props.user} */}
    {console.log(userstatus)}
          <Header  handleLogout={handleLogout} setUserStatus={setUserStatus} user={userstatus}/>
        </header>
    <Routes>
    
      <Route path='/' element={<Home/>}></Route>
      <Route  path='/login' element={<Login setUserStatus={setUserStatus} user={userstatus}/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/support' element={<Support/>}></Route>
      <Route exact path='/yourrides' element={<YourRides user={userstatus}/>}></Route>
      <Route  path='/bookings' element={<Bookings user={userstatus}/>}></Route>
      <Route  path='/becomemember' element={<Partner user={userstatus}/>}></Route>
    </Routes>
    
    <footer>
          <Footer />
        </footer>
    </BrowserRouter>
    
   )
  }
   
   </>
  )
}
export default App;