import React from 'react';
import './Team.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import WorldMap from '../WorldMap/WorldMap';
import { developers } from '../../utils/data';

export default function Team() {
  let countriesTemp = [];
  let timezoneTemp = [];
  developers.map((item) => {
    countriesTemp.push(item.location.split(',')[1]);
    timezoneTemp.push(item.timezone);
  });
  const countries = Array.from(new Set(countriesTemp));
  const timezone = Array.from(new Set(timezoneTemp));
  const teamSummary = [
    { count: developers.length, text: 'teammates' },
    { count: countries.length, text: 'countries' },
    { count: timezone.length, text: 'time zones' },
  ];

  return (
    <section className="team">
      <SectionTitle
        title="The team"
        subtitle="Built with data scientists, ML engeneers, and data engeneers in mind."
        text="Building contextual assistants & chatbots that really help customers is hard. Rasa provides infrastructure & tools necessary for high-performing, resilient, proprietary contextual assistants that work. With Iterative, all developers can create better text- and voice-based assistants."
      />
      <div className="team__map-container">
        <WorldMap developers={developers} />
      </div>
      <ul className="team__list">
        {teamSummary.map((item, i) => (
          <li className="team__item" key={i}>
            <h4 className="team__item_count">{item.count}</h4>
            <p className="team__item_text">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
