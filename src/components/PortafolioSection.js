import React from 'react';
import '../App.css';
import { Button } from './Button.js';
import './PortafolioSection.css';


function PortafolioSection() {
  return (
    <div className='portafolio-container'>
  
      <h1>REACT DEVELOPER
      <i class="fa-brands fa-react"></i>
      </h1>
      <p>The virtual tour</p>
      <div className="portafolio-btns">
        <Button className='btns' buttonStyle='btn--outline' 
        buttonSize='btn--large'>
            GET STARTED
        </Button>
        <Button className='btns' buttonStyle='btn--primary' 
        buttonSize='btn--large'>
            WATCH TRAILER <i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  )
}

export default PortafolioSection
