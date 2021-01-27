import React from 'react';
import DeveloperInfo from './DeveloperInfo';
import testAvatar from '../../images/temp-avatar.jpg';

const Template = (args) => <DeveloperInfo {...args} />;

const AboutDeveloperInfo = {
  title: 'About/DeveloperInfo',
  component: DeveloperInfo,
};
export default AboutDeveloperInfo;

export const Default = Template.bind({});
Default.args = {
  developers: [
    {
      image: testAvatar,
      color: '#13ADC7',
      name: 'Dmitry Petrov',
      description:
        'Creator of DVC. Ex-Data Scientist at Microsoft. PhD in Computer Science.',
    },
    {
      image: testAvatar,
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
  ],
};
