import React from 'react';
import SectionTitle from './SectionTitle';
import Button from '../Button/Button';

const Template = (args) => <SectionTitle {...args} />;

const ElementSectionTitle = {
  title: 'Element/SectionTitle',
  component: SectionTitle,
};
export default ElementSectionTitle;

export const Main = Template.bind({});

Main.args = {
  title: 'Enterprise',
  subtitle:
    'AI hand in hand with software development. Built with data scientists, ML engineers, and data engineers in mind.',
};

export const AboutTeam = Template.bind({});

AboutTeam.args = {
  title: 'The team',
  subtitle:
    'Built with data scientists, ML engeneers, and data engeneers in mind.',
  text:
    'Building contextual assistants & chatbots that really help customers is hard. Rasa provides infrastructure & tools necessary for high-performing, resilient, proprietary contextual assistants that work. With Iterative, all developers can create better text- and voice-based assistants.',
};

export const AboutLeadership = Template.bind({});

AboutLeadership.args = {
  title: 'Leadership',
  subtitle:
    'Built with data scientists, ML engeneers, and data engeneers in mind.',
  text:
    'Building contextual assistants & chatbots that really help customers is hard. Rasa provides infrastructure & tools necessary for high-performing, resilient, proprietary contextual assistants that work. With Iterative, all developers can create better text- and voice-based assistants.',
  children: (
    <Button onClick={() => console.log('open demo form')}>
      Request a Demo
    </Button>
  ),
};

export const AboutCareer = Template.bind({});

AboutCareer.args = {
  title: 'Career',
  subtitle:
    'Built with data scientists, ML engeneers, and data engeneers in mind.',
  text:
    'Building contextual assistants & chatbots that really help customers is hard. Rasa provides infrastructure & tools necessary for high-performing, resilient, proprietary contextual assistants that work. With Iterative, all developers can create better text- and voice-based assistants.',
  children: (
    <Button onClick={() => console.log('open demo form')}>
      Drop us a line
    </Button>
  ),
};
