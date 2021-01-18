import React from 'react'
import mainImageL from '../../images/Enterprise/main-l.png'
import mainImageM from '../../images/Enterprise/main-m.png'
import mainImageS from '../../images/Enterprise/main-s.png'
import '../Enterprise/Enterprise.css'

const Enterprise = () => {
  return (
    <section className="enterprise">
      <hr className="enterprise__accent"></hr>
      <h2 className="enterprise__title">Enterprise</h2>
      <p className="enterprise__subtitle">
        AI hand in hand with software development. 
        Built with data scientists, ML engineers, and data engineers in mind.
      </p>
      <div className="enterprise__image-container">
        <picture>
          <source media="(min-width:1076px)" srcset={mainImageL}/>
          <source media="(min-width:768px)" srcset={mainImageM}/>
          <source media="(min-width:414px)" srcset={mainImageS}/>
          <img className="enterprise__main-image" src={mainImageS} alt="enterprise"/>
        </picture>
      </div>
      <ul className="enterprise__list">
        <li className="enterprise__list-item">
        <i className="enterprise__list-icon enterprise__list-icon_gear"></i>
        <div className="enterprise__list-container">
          <h4 class="enterprise__list-title">Familiar</h4>
          <p class="enterprise__list-paragraph">
            Don’t reinvent the wheel! 
            Fast and cost-efficient path to production 
          </p>
        </div>
        </li>
        <li className="enterprise__list-item">
        <i className="enterprise__list-icon enterprise__list-icon_code"></i> 
        <div className="enterprise__list-container">
          <h4 class="enterprise__list-title">Open source</h4>
          <p class="enterprise__list-paragraph">
            Lightweight. Open-source. No-strings attached. 
          </p>
        </div>
        </li>
        <li className="enterprise__list-item">
        <i className="enterprise__list-icon enterprise__list-icon_shield"></i>
        <div className="enterprise__list-container">
          <h4 class="enterprise__list-title">Secure</h4>
          <p class="enterprise__list-paragraph">
            You data is always stored by you. 
            Your models are trained on your machines
          </p>
        </div>
        </li>
      </ul>
    </section>
  )
}

export default Enterprise
