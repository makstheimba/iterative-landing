import React from 'react'
import { Section, SectionTitle, SectionText } from '../GlobalStyles/index'
import { Link } from "gatsby"
import TimelineImg from '../../images/timeline.svg'
import './Timeline.css'

const Timeline = () => {
  return (
  <Section>
    <SectionTitle main>About Us</SectionTitle>
    <SectionText>
      Data Science = Highly Iterative Metrics-driven Process With Data and Code
    </SectionText>
    <ul className="carousel__container">
      
      <li className="carousel__item" id="carousel__item-1">
        <h1 className="carousel__item-title">2017<img className="carousel__item-img" src={TimelineImg} /></h1>
        <p className="carousel__item-text"> First version of DVC was created and open sourced. First users
        </p>
    </li>

      
          <li className="carousel__item" id="carousel__item-2">
        <h1 className="carousel__item-title">2018<img className="carousel__item-img" src={TimelineImg} /></h1>
        <p className="carousel__item-text"> Iterative, Inc was incorporated. First hires
        </p>
      </li>
      
          <li className="carousel__item" id="carousel__item-3">
        <h1 className="carousel__item-title">2019<img className="carousel__item-img" src={TimelineImg} /></h1>
        <p className="carousel__item-text"> More development on DVC. Adoption of the tool significantly increased
        </p>
      </li>
      
              <li className="carousel__item" id="carousel__item-4">
        <h1 className="carousel__item-title">2020<img className="carousel__item-img" src={TimelineImg} /></h1>
        <p className="carousel__item-text"> DVC 1.0 was released. New product CML was released
        </p>
      </li>
      
                  <li className="carousel__item" id="carousel__item-5">
        <h1 className="carousel__item-title">2021<img className="carousel__item-img" src={TimelineImg} /></h1>
        <p className="carousel__item-text"> Viewer product release. First enterprise customers
        </p>
      </li>
      
    </ul>

    <div className="carousel__buttons">
      <Link className="carousel__button" href="#carousel__item-1"></Link>
      <Link className="carousel__button" href="#carousel__item-2"></Link>
      <Link className="carousel__button" href="#carousel__item-3"></Link>
      <Link className="carousel__button" href="#carousel__item-4"></Link>
      <Link className="carousel__button" href="#carousel__item-5"></Link>
    </div>
  </Section>
  )
}

export default Timeline
