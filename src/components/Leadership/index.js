import React from 'react'
import { Section, SectionTitle, SectionDivider } from '../GlobalStyles'
import {
  LeadershipList, LeadershipItem, LeadershipImageContainer,
  LeadershipImage, LeadershipImageBorder, LeadershipTitle,
  LeadershipText
} from './Leadership'
//import './Leadership.css'

//images
import avatarImg0L from '../../images/avatar/avatar-00.png'
import avatarImg1L from '../../images/avatar/avatar-01.png'
import avatarImg2L from '../../images/avatar/avatar-02.png'
import avatarImg3L from '../../images/avatar/avatar-03.png'
import avatarImg4L from '../../images/avatar/avatar-04.png'
import avatarImg0M from '../../images/avatar/avatar-00-86px.png'
import avatarImg1M from '../../images/avatar/avatar-01-86px.png'
import avatarImg2M from '../../images/avatar/avatar-02-86px.png'
import avatarImg3M from '../../images/avatar/avatar-03-86px.png'
import avatarImg4M from '../../images/avatar/avatar-04-86px.png'
import avatarImg0S from '../../images/avatar/avatar-00-74px.png'
import avatarImg1S from '../../images/avatar/avatar-01-74px.png'
import avatarImg2S from '../../images/avatar/avatar-02-74px.png'
import avatarImg3S from '../../images/avatar/avatar-03-74px.png'
import avatarImg4S from '../../images/avatar/avatar-04-74px.png'
import avatarBgImgBlue from '../../images/avatar/avatar-bg-blue.svg'
import avatarBgImgRed from '../../images/avatar/avatar-bg-red.svg'
import avatarBgImgPurple from '../../images/avatar/avatar-bg-purple.svg'


const data = [
  {
    img: [avatarImg0L,avatarImg0M,avatarImg0S],
    title: "Dmitry Petrov",
    text: "Creator of DVC. Ex-Data Scientist at Microsoft. PhD in Computer Science.",
  },
  {
    img: [avatarImg1L,avatarImg1M,avatarImg1S],
    title: "Ivan Shcheklein",
    text: "Ex co-founder of TweetedTimes - acquired by Yandex. Contributor to Sedna Database.",
  },
  {
    img: [avatarImg2L,avatarImg2M,avatarImg2S],
    title: "Elle O'Brien",
    text: "Quantitative researcher. PhD in Neuroscience. Deep learning and bot enthusiast. Lecturer at University of Michigan.",
  },
  {
    img: [avatarImg3L,avatarImg3M,avatarImg3S],
    title: "Puneet Agarwal",
    text: "Partner at True Ventures. Focused primarily on infrastructure, open-source and applications.",
  },
  {
    img: [avatarImg4L,avatarImg4M,avatarImg4S],
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

    <LeadershipList>
      {data.map((item, index) => {
        return (
          <LeadershipItem key={index}>

            <LeadershipImageContainer>
              <picture>
                <source media="(max-width:767px)" srcset={item.img[1]} />
                <source media="(max-width:413px)" srcset={item.img[2]} />
                <LeadershipImage src={item.img[0]} alt={`profile-pic-${index+1}`}/>
              </picture>
              <LeadershipImageBorder src={avatarColor(index)} alt={`profile-pic-border-${index+1}`} />
            </LeadershipImageContainer>

            <div> {/* this container breaks text and image into two flex columns */}
              <LeadershipTitle>{item.title}</LeadershipTitle>
              <LeadershipText>{item.text}</LeadershipText>
            </div>
          </LeadershipItem>
        )
      })}
    </LeadershipList> 
    <SectionDivider />
    </Section>
)}

export default Leadership