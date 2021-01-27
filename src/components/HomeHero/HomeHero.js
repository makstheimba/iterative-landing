import React from 'react';
import './HomeHero.css';
import Icon from '../../images/Animationent-icon.svg'

export default function HomeHero(){
    return(
        <div className='hero'>
            <div className="hero__content"> 
                <h1 className="hero__header">Open platform to operationalize AI</h1>
                <p className="hero__paragraph">AI teams face challenges that require new technologies. We build these technologies. Existing data warehouses and data lakes do not fit unstructured datasets like text, images, and videos.</p>
                <button className="hero__button">Request a Demo</button>
            </div>
           
                <img className="hero__image" src={Icon}/>
        
            
            
        </div>
    )
}