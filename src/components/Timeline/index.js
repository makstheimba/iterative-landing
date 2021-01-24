import React from 'react'
import { Section, SectionTitle, SectionText } from '../GlobalStyles/index'
import {
  CarouselContainer, CarouselItem, CarouselItemTitle, CarouselItemImg,
  CarouselItemText, CarouselButtons, CarouselButton
  } from './Timeline'
import TimelineImg from '../../images/timeline.svg'
//import './Timeline.css' //used for id anchors. will delete later

const data = [
  {
    year: 2017,
    text: "First version of DVC was created and open sourced. First users",
  },
  {
    year: 2018,
    text: "Iterative, Inc was incorporated. First hires",
  },
  {
    year: 2019,
    text: "More development on DVC. Adoption of the tool significantly increased",
  },
  {
    year: 2020,
    text: "DVC 1.0 was released. New product CML was released",
  },
  {
    year: 2021,
    text: "Viewer product release. First enterprise customers",
  },
]

const Timeline = () => {

  return (
  <Section>
    <SectionTitle main>About Us</SectionTitle>
    <SectionText>
      Data Science = Highly Iterative Metrics-driven Process With Data and Code
    </SectionText>

    
    <CarouselContainer>
    {data.map((item, index) => {
          return (
            //anchor id will have to be replicated somehow in a functional component
            //until then, we'll use jsx and css file
            //ideally the buttons will use onClick and scrollTo in the future anyways,
            //so the anchors will become moot
            // <li key={index} className="carousel__item" id={`carousel__item-${index}`}>
            <CarouselItem key={index} className="carousel__item" id={`carousel__item-${index}`}>
              <CarouselItemTitle>{`${item.year}`}
                <CarouselItemImg src={TimelineImg}/>
              </CarouselItemTitle>
              <CarouselItemText>{item.text}</CarouselItemText>
            {/* </li> */}
            </CarouselItem>
          )
        })}
    </CarouselContainer>

    <CarouselButtons >
    {data.map((item, index) => {
          return (
            <CarouselButton key={index} href={`#carousel__item-${index}`}></CarouselButton>
            )
        })}
    </CarouselButtons>
  </Section>
  )
}

export default Timeline
