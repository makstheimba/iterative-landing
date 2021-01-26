import React from 'react'
import { Section, SectionTitle, SectionText, SectionDivider } from '../GlobalStyles/index'
import {
  CarouselContainer, CarouselItem, CarouselItemTitle, CarouselItemImg,
  CarouselItemText, CarouselButtons, CarouselButton
  } from './Timeline'
import TimelineImg from '../../images/timeline.svg'

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

const carouselRef = React.useRef();

function smoothScroll (node, topOrLeft, horizontal) {
  return node.scrollTo({
    [horizontal ? 'left' : 'top']: topOrLeft,
    behavior: 'smooth'
  })
} 

function handleClick(e, i){
  e.preventDefault();
  
  if(carouselRef.current){
    const scrollLeft = Math.floor(carouselRef.current.scrollWidth * (i / data.length ))
    smoothScroll(carouselRef.current, scrollLeft, true)
  }
}

  return (
  <Section>
    <SectionTitle main>About Us</SectionTitle>
    <SectionText>
      Data Science = Highly Iterative Metrics-driven Process With Data and Code
    </SectionText>

    
    <CarouselContainer ref={carouselRef}>
    {data.map((item, index) => {
          return (
            <CarouselItem key={index} id={`carousel__item-${index}`}>
              <CarouselItemTitle>{`${item.year}`}
                <CarouselItemImg src={TimelineImg}/>
              </CarouselItemTitle>
              <CarouselItemText>{item.text}</CarouselItemText>
            </CarouselItem>
          )
        })}
    </CarouselContainer>

    <CarouselButtons >
    {data.map((item, index) => {
          return (
             <CarouselButton key={index} type="button" onClick={e => handleClick(e, index)}></CarouselButton>
            )
        })}
    </CarouselButtons>
    <SectionDivider />
  </Section>
  )
}

export default Timeline
