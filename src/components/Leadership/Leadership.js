import React from 'react';
import './Leadership.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import DeveloperInfo from '../DeveloperInfo/DeveloperInfo';
import testAvatar from '../../images/temp-avatar.jpg';

const developers = [
  {
    image: testAvatar,
    color: '#13ADC7',
    name: 'Dmitry Petrov',
    description:
      'Creator of DVC. Ex-Data Scientist at Microsoft. PhD in Computer Science.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
    color: '#945DD6',
    name: 'Ivan Shcheklein',
    description:
      'Ex co-founder of TweetedTimes - acquired by Yandex. Contributor to Sedna Database.',
  },
  {
    image: testAvatar,
    color: '#F46737',
    name: "Elle O'Brien",
    description:
      'Quantitative researcher. PhD in Neuroscience. Deep learning and bot enthusiast. Lecturer at University of Michigan.',
  },
  {
    image: testAvatar,
    color: '#13ADC7',
    name: 'Puneet Agarwal',
    description:
      'Partner at True Ventures. Focused primarily on infrastructure, open-source and applications.',
  },
  {
    image: testAvatar,
    color: '#945DD6',
    name: 'Will Freiberg',
    description:
      'COO at Mesosphere. Technology executive, strategic operator and entrepreneurial leader.',
  },
];

export default function Leadership() {
  return (
    <section className="leadership">
      <SectionTitle title="Leadership" />
      <DeveloperInfo developers={developers} />
    </section>
  );
}
