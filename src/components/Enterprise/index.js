import React from 'react'
import mainImage from '../../images/Enterprise/main.png'

const Enterprise = () => {
  return (
    <section className="enterprise">
      <div class="enterprise__accent"></div>
      <h2 class="enterprise__title">Enterprise</h2>
      <p class="enterprise__subtitle">
        AI hand in hand with software development. 
        Built with data scientists, ML engineers, and data engineers in mind.
      </p>
      <image src={mainImage} alt="Iterative Enterprise"></image>
      <div className="enterprise__list-container">
        <ul className="enterprise__list">
          <li className="enterprise__list-item">
            <i className="enterprise__list-icon enterprise__list-icon_gear"></i>
            <h3 class="enterprise__list-title">Familiar</h3>
            <p class="enterprise__list-text">
              Don’t reinvent the wheel! 
              Fast and cost-efficient path to production 
            </p>
          </li>
          <li className="enterprise__list-item">
            <i className="enterprise__list-icon enterprise__list-icon_code"></i>
              <h3 class="enterprise__list-title">Open source</h3>
              <p class="enterprise__list-text">
                Lightweight. Open-source. No-strings attached. 
              </p>
          </li>
          <li className="enterprise__list-item">
            <i className="enterprise__list-icon enterprise__list-icon_shield"></i>
              <h3 class="enterprise__list-title">Secure</h3>
              <p class="enterprise__list-text">
                You data is always stored by you. 
                Your models are trained on your machines
              </p>
          </li>
        </ul>
      </div>

    </section>
  )
}

export default Enterprise
