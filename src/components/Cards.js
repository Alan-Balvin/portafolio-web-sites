import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
      
        <h1>Check out my Web Sites</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem 
                
                src="/images/useState.jpg"
                text="Enjoy the relaxing design"
                label="Landscape"
                path="/profile"
                />
                <CardItem 
                
                src="/images/Instalación Eléctrica Novotel.png"
                text="Comprenhend the MEP designs in 3D"
                label="Electrical Systems"
                path="/profile"
                />
            </ul>
            <ul className="cards__items">
                <CardItem 
                
                src="/images/Museo Interactivo.jpg"
                text="Futuristic proposals"
                label="Contemporary "
                path="/profile"
                />
                <CardItem 
                
                src="/images/Palacete Marismeño.jpg"
                text="Restore Architecture"
                label="Old Architecture"
                path="/profile"
                />
                <CardItem 
                
                src="/images/Party Room.png"
                text="Discover the beauty"
                label="Original Designs"
                path="/profile"
                />
            </ul>
        </div>
        </div>  
      
    </div>
  )
}

export default Cards; 
