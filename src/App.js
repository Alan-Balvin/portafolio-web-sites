import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Profile from './components/pages/Profile';
import Portafolio from './components/pages/Portafolio';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App () {
    return (
       <>
       <Router>
        <Navbar/>
        <Routes>
            <Route path='/' exact element={<Home/>}> </Route>
            <Route path='/profile' element={<Profile/>}/ >
            <Route path='/portafolio' element={<Portafolio/>} />
            <Route path='/sign-up' element={<SignUp/>} />

        </Routes>
        <Footer/>
       </Router>
       </>
    )
}
export default App;