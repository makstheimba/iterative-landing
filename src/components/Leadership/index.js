import React from 'react'
import { Section, SectionTitle, SectionDivider } from '../GlobalStyles'
import './Leadership.css'

//images
import avatarImg1 from '../../images/avatar/avatar-01.png'
import avatarImg2 from '../../images/avatar/avatar-02.png'
import avatarImg3 from '../../images/avatar/avatar-03.png'
import avatarImg4 from '../../images/avatar/avatar-04.png'
import avatarImg5 from '../../images/avatar/avatar-05.png'
import avatarBgImgBlue from '../../images/avatar/avatar-bg-blue.svg'
import avatarBgImgRed from '../../images/avatar/avatar-bg-red.svg'
import avatarBgImgPurple from '../../images/avatar/avatar-bg-purple.svg'


const data = [
  {
    img: {avatarImg1},
    title: "Dmitry Petrov",
    text: "Creator of DVC. Ex-Data Scientist at Microsoft. PhD in Computer Science.",
    color: 'blue'
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
            <img src={item.color}/>
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