import React from 'react';
import TimeLine from './TimeLine';

const Template = (args) => <TimeLine {...args} />;

const AboutTimeLine = {
  title: 'About/TimeLine',
  component: TimeLine,
};
export default AboutTimeLine;

export const DefaultTimeLine = Template.bind({});
DefaultTimeLine.args = {
  times: [
    {
      title: '2017',
      subtitle:
        'First version of DVC was created and open sourced. First users.',
    },
    { title: '2018', subtitle: 'Iterative, Inc was incorporated. First hires' },
    {
      title: '2019',
      subtitle:
        'More development on DVC. Adoption of the tool significantly increased',
    },
    {
      title: '2020',
      subtitle: 'DVC 1.0 was released. New product CML was released',
    },
    {
      title: '2021',
      subtitle: 'Viewer product release. First enterprise customers',
    },
  ],
};
