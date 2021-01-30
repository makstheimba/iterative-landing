import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import DeveloperCard from '../DeveloperCard/DeveloperCard';
import './WorldMap.css';
import { defaultDeveloperData } from '../../utils/data';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

export default function WorldMap({ developers = [] }) {
  const [isDeveloperCardOpen, setIsDeveloperCardOpen] = useState(false);
  const [developerCardData, setDeveloperCardData] = useState(
    defaultDeveloperData
  );
  const [positionY, setPositionY] = useState(0);
  const worldMapEl = useRef(null);

  function closeDeveloperCardPopup() {
    setIsDeveloperCardOpen(false);
  }

  return (
    <div ref={worldMapEl} className="worldmap">
      <DeveloperCard
        isOpen={isDeveloperCardOpen}
        title={developerCardData.title}
        job={developerCardData.job}
        location={developerCardData.location}
        text={developerCardData.text}
        image={developerCardData.image}
        globeLink={developerCardData.globeLink}
        twitterLink={developerCardData.twitterLink}
        linkedinLink={developerCardData.linkedinLink}
        style={{
          '--top-px': `${positionY + 20}px`,
        }}
      />
      <ComposableMap
        projectionConfig={{
          scale: 100,
        }}
        style={{ width: '100%', height: 'auto', marginBottom: '-70px' }}
        projection="geoMercator"
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
                  tabIndex="-1"
                  fill="url(#dotPattern)"
                  stroke="none"
                  className="worldmap__geography"
                />
              ))
          }
        </Geographies>
        {developers.map((developer, i) => {
          function handlePosition(e) {
            setPositionY(e.pageY - worldMapEl.current.offsetTop);
          }

          function openDeveloperCardPopup(e) {
            handlePosition(e);
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
                width="80"
                height="80"
                viewBox="0 0 80 80"
                aria-labelledby="alt-span-id"
                x={developer.markerOffsetX}
                y={developer.markerOffsetY}
              >
                <defs>
                  <pattern
                    id={`markerImg${i}`}
                    patternUnits="userSpaceOnUse"
                    width="80"
                    height="80"
                  >
                    <image
                      href={developer.image}
                      x="-20"
                      y="-20"
                      width="80"
                      height="80"
                    />
                  </pattern>
                </defs>
                <circle
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
    </div>
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
      timezone: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      globeLink: PropTypes.string.isRequired,
      twitterLink: PropTypes.string.isRequired,
      linkedinLink: PropTypes.string.isRequired,
    })
  ).isRequired,
};
