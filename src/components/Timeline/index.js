import React from 'react'
import { Section, SectionTitle, SectionText } from '../GlobalStyles/index'
import { Link } from "gatsby"
import TimelineImg from '../../images/timeline.svg'
import './Timeline.css'


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
// const [currentPos, setcurrentPos] = React.useState(0);

//  const carouselRef = React.useRef();
//   const scrollerRef = React.useRef();

//   function handleScroll(){
//   setcurrentPos(carouselRef.current.scrollLeft);
//   findSetActive();
// }

// function findSetActive(){
//   //actually it would be better if these elements were created and inserted at the beggining
//   //so that the array would only be created once
//   const carouselItems = Array.from(carouselRef.querySelectorAll('.carousel__item'));
//   carouselItems.forEach(item => {
//     if(currentPos >= item.offset.left){
//       item.classList.add('carousel__button_active');
//     }
//   })
// }

  // function handleClick(index){
  //   const elemPos = carouselRef.current.querySelectorAll('.carousel__item')[index].offset.left;
  //   scrollerRef.current.scrollTo({
  //     left: elemPos,
  //     behavior: 'smooth'
  //   })
  // }

  return (
  <Section>
    <SectionTitle main>About Us</SectionTitle>
    <SectionText>
      Data Science = Highly Iterative Metrics-driven Process With Data and Code
    </SectionText>

    
    <ul className="carousel__container" >
    {data.map((item, index) => {
          return (
            <li key={index} className="carousel__item" id={`carousel__item-${index}`}>
              <h1 className="carousel__item-title">{`${item.year}`}
                <img className="carousel__item-img" src={TimelineImg}/>
              </h1>
              <p className="carousel__item-text">{item.text}</p>
            </li>
          )
        })}
    </ul>

    <div className="carousel__buttons" >
    {data.map((item, index) => {
          return (
            <Link key={index} className="carousel__button" href={`#carousel__item-${index}`}></Link>
            // <Link key={index} className="carousel__button" onClick={handleClick(index)}></Link>
            )
        })}
    </div>
  </Section>
  )
}

export default Timeline
