import React from 'react'
import { Section, SectionTitle, SectionText, SectionDivider } from '../GlobalStyles/index'
import {
  CarouselContainer, CarouselItem, CarouselItemTitle, CarouselItemImg,
  CarouselItemText, CarouselButtons, CarouselButton, CarouselButtonDot, CarouselMobileScrollNode
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

const TOTAL_CAROUSEL_COUNT = data.length;

const Timeline = () => {

  const [activeItem, setactiveItem] = React.useState(0);
  const carouselRef = React.useRef();

  function scroll(node, left) {
    return node.scrollTo({
      'left': left,
      behavior: 'smooth'
    })
  }

  function handleClick(e, i) {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / data.length));
      scroll(carouselRef.current, scrollLeft);
    }
  }

  function handleScroll() {
    if (carouselRef.current) {
      let index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * data.length);
      setactiveItem(index);
    }
  }

  //snap back to beginning of scroll when window is resized 
  //avoids a bug where content is covered up if coming from smaller screen
  React.useEffect(() => {
    function handleResize() {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section>
      <SectionTitle main>About Us</SectionTitle>
      <SectionText>
        Data Science = Highly Iterative Metrics-driven Process With Data and Code
      </SectionText>

      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {data.map((item, index) => {
            return (
              <CarouselMobileScrollNode final={(index === (TOTAL_CAROUSEL_COUNT - 1))}>
                <CarouselItem
                  key={index}
                  index={index}
                  id={`carousel__item-${index}`}
                  active={activeItem}>
                  <CarouselItemTitle>{`${item.year}`}
                    <CarouselItemImg src={TimelineImg} />
                  </CarouselItemTitle>
                  <CarouselItemText>{item.text}</CarouselItemText>
                </CarouselItem>
              </CarouselMobileScrollNode>
            )
          })}
        </>
      </CarouselContainer>

      <CarouselButtons >
        {data.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={e => handleClick(e, index)}
              type="button">
                <CarouselButtonDot active={activeItem}/>
            </CarouselButton>
          )
        })}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  )
}

export default Timeline
