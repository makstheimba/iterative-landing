import React from 'react';
import './Career.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Button from '../Button/Button';

export default function Career() {
  return (
    <section className="career">
      <SectionTitle
        title="Career"
        subtitle="Built with data scientists, ML engeneers, and data engeneers in mind."
        text="Building contextual assistants & chatbots that really help customers is hard. Rasa provides infrastructure & tools necessary for high-performing, resilient, proprietary contextual assistants that work. With Iterative, all developers can create better text- and voice-based assistants."
      >
        <Button
          size="medium"
          type="black"
          onClick={() => console.log('open demo form')}
        >
          Drop us a line
        </Button>
      </SectionTitle>
    </section>
  );
}
