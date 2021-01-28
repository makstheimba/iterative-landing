import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import DeveloperCard from '../DeveloperCard/DeveloperCard';
import './WorldMap.css';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

export default function WorldMap({ developers = [] }) {
  const [isDeveloperCardOpen, setIsDeveloperCardOpen] = useState(false);
  const [DeveloperCardData, setDeveloperCardData] = useState({});

  function closeDeveloperCardPopup() {
    setIsDeveloperCardOpen(false);
  }

  return (
    <>
      <DeveloperCard
        isOpen={isDeveloperCardOpen}
        title={DeveloperCardData.title}
        job={DeveloperCardData.job}
        location={DeveloperCardData.location}
        text={DeveloperCardData.text}
        image={DeveloperCardData.image}
        globeLink={DeveloperCardData.globeLink}
        twitterLink={DeveloperCardData.twitterLink}
        linkedinLink={DeveloperCardData.linkedinLink}
      />
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 10],
          scale: 220,
        }}
        onClick={closeDeveloperCardPopup}
      >
        <defs>
          <pattern
            id="dotPattern"
            x="5"
            y="5"
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="3"
              cy="3"
              r="1.5"
              stroke="none"
              fill="#fff"
              fillOpacity="0.5"
            />
          </pattern>
        </defs>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter((d) => d.properties.REGION_UN !== 'Antarctica')
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="url(#dotPattern)"
                  stroke="none"
                  className="worldmap__geography"
                />
              ))
          }
        </Geographies>
        {developers.map((developer, i) => {
          function openDeveloperCardPopup() {
            setIsDeveloperCardOpen(true);
            setDeveloperCardData(developer);
          }
          return (
            <Marker
              key={i}
              coordinates={developer.coordinates}
              onMouseEnter={openDeveloperCardPopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                aria-labelledby="alt-span-id"
                x={developer.markerOffsetX}
                y={developer.markerOffsetY}
              >
                <defs>
                  <pattern
                    id={`markerImg${i}`}
                    patternUnits="userSpaceOnUse"
                    width="65"
                    height="65"
                  >
                    <image
                      href={developer.image}
                      x="-5"
                      y="-13"
                      width="65"
                      height="65"
                    />
                  </pattern>
                </defs>
                <circle
                  cx="25"
                  cy="25"
                  fill={`url(#markerImg${i})`}
                  className="worldmap__marker"
                />
              </svg>
              <span className="worldmap__hidden-el">
                developer's avatar that hover the information popup
              </span>
            </Marker>
          );
        })}
      </ComposableMap>
    </>
  );
}

WorldMap.propTypes = {
  developers: PropTypes.arrayOf(
    PropTypes.shape({
      coordinates: PropTypes.array.isRequired,
      markerOffsetX: PropTypes.number,
      markerOffsety: PropTypes.number,
      title: PropTypes.string.isRequired,
      job: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      globeLink: PropTypes.string.isRequired,
      twitterLink: PropTypes.string.isRequired,
      linkedinLink: PropTypes.string.isRequired,
    })
  ).isRequired,
};
