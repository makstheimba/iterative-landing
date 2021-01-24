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

const Leadership = () => {
  return (
    <Section>
    <SectionTitle>Leadership</SectionTitle>
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.img}/>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        )
      })}
    </div> 
    <SectionDivider />
    </Section>

)}

export default Leadership