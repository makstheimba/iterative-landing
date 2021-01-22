import React from 'react';
import Header from './Header';
import Button from '../Button/Button';

const Template = (args) => <Header {...args} />;

const CommonHeader = {
  title: 'Common/Header',
  component: Header,
};
export default CommonHeader;

export const Main = Template.bind({});
Main.args = {
  isMain: true,
  title: 'Open platform to&nbsp;operationalize AI',
  text:
    'AI teams face challenges that require new technologies. We build these technologies. Existing data warehouses and data lakes do not fit unstructured datasets like text, images, and videos.',
  children: (
    <Button onClick={() => console.log('open demo form')}>
      Request a Demo
    </Button>
  ),
};

export const About = Template.bind({});
About.args = {
  title: 'About Us',
  text: (
    <p className="header__text">
      Data Science = Highly Iterative Metrics-driven Process With{' '}
      <br className="header__break_for_tablet"></br>
      Data <br className="header__break_for_desktop"></br>and Code
    </p>
  ),
};

export const Pricing = Template.bind({});
Pricing.args = {
  title: 'Pricing',
  text:
    'Existing data warehouses and data lakes do not fit unstructured datasets like text, images, and videos. AI teams face challenges that require new technologies. We build these technologies.',
};
