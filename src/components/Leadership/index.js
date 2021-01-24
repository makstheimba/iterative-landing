import React from 'react'
import { Section, SectionTitle, SectionDivider } from '../GlobalStyles'
import './Leadership.css'

//images
import avatarImg0 from '../../images/avatar/avatar-00.png'
import avatarImg1 from '../../images/avatar/avatar-01.png'
import avatarImg2 from '../../images/avatar/avatar-02.png'
import avatarImg3 from '../../images/avatar/avatar-03.png'
import avatarImg4 from '../../images/avatar/avatar-04.png'
import avatarBgImgBlue from '../../images/avatar/avatar-bg-blue.svg'
import avatarBgImgRed from '../../images/avatar/avatar-bg-red.svg'
import avatarBgImgPurple from '../../images/avatar/avatar-bg-purple.svg'


const data = [
  {
    img: avatarImg0,
    title: "Dmitry Petrov",
    text: "Creator of DVC. Ex-Data Scientist at Microsoft. PhD in Computer Science.",
  },
  {
    img: avatarImg1,
    title: "Ivan Shcheklein",
    text: "Ex co-founder of TweetedTimes - acquired by Yandex. Contributor to Sedna Database.",
  },
  {
    img: avatarImg2,
    title: "Elle O'Brien",
    text: "Quantitative researcher. PhD in Neuroscience. Deep learning and bot enthusiast. Lecturer at University of Michigan.",
  },
  {
    img: avatarImg3,
    title: "Puneet Agarwal",
    text: "Partner at True Ventures. Focused primarily on infrastructure, open-source and applications.",
  },
  {
    img: avatarImg4,
    title: "Will Freiberg",
    text: "COO at Mesosphere. Technology executive, strategic operator and entrepreneurial leader.",
  },
]

function avatarColor(index){
    if(index == 0 || index % 3 === 0) return avatarBgImgBlue;
    if(index == 1 || index % 3 === 1) return avatarBgImgPurple;
    if(index == 2 || index % 3 === 2) return avatarBgImgRed;
    return avatarBgImgBlue;
}

const Leadership = () => {
  return (
    <Section>
    <SectionTitle>Leadership</SectionTitle>
    <ul className="list">
      {data.map((item, index) => {
        return (
          <li className="list-item" key={index}>
            <div className="list-img-container">
              <img className="list-img" src={item.img}/>
              <img className="list-img-border" src={avatarColor(index)}/>
            </div>
            <h4 className="list-title">{item.title}</h4>
            <p className="list-text">{item.text}</p>
          </li>
        )
      })}
    </ul> 
    <SectionDivider />
    </Section>

)}

export default Leadership