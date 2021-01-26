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

const [activeItem, setactiveItem] = React.useState(0);
const carouselRef = React.useRef();


function smoothScroll (node, left) {
  return node.scrollTo({
    'left': left,
    behavior: 'smooth'
  })
} 

function handleClick(e, i){
  e.preventDefault();

  if(carouselRef.current){
    const scrollLeft = Math.floor(carouselRef.current.scrollWidth * (i  / data.length ));
    smoothScroll(carouselRef.current, scrollLeft);
  }
}

function debounce(func, ms) {
	let timeout
	return () => {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			timeout = null
      func()
		}, ms)
	}
}

function handleScroll(){
  if(carouselRef.current){
    debounce(() => {
      let index = Math.round((carouselRef.current.scrollLeft / carouselRef.current.scrollWidth) * data.length)
      setactiveItem(index)
    }, 200)
  }
}

  return (
  <Section>
    <SectionTitle main>About Us</SectionTitle>
    <SectionText>
      Data Science = Highly Iterative Metrics-driven Process With Data and Code
    </SectionText>

    
    <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
    {data.map((item, index) => {
          return (
            <CarouselItem 
              key={index} 
              index={index} 
              id={`carousel__item-${index}`}
              active={activeItem}>
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
            <CarouselButton 
              key={index}
              index={index} 
              onClick={e => handleClick(e, index)}
              active={activeItem}
              type="button">
            </CarouselButton>
            )
        })}
    </CarouselButtons>
    <SectionDivider />
  </Section>
  )
}

export default Timeline
