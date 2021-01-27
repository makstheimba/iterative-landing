import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import Avatar from '../Avatar/Avatar';
import tempAvatar from '../../images/temp-avatar.jpg';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const markers = [
  {
    markerOffset: -30,
    name: 'Buenos Aires',
    coordinates: [-58.3816, -34.6037],
  },
  { markerOffset: 15, name: 'Lima', coordinates: [-77.0428, -12.0464] },
];

export default function WorldMap() {
  return (
    <ComposableMap projection="geoEqualEarth">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            //.filter((d) => d.properties.REGION_UN === 'Americas')
            .map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}
          >
            {name}
          </text>
          <svg
            aria-labelledby="alt-span-id"
            width="114"
            height="114"
            viewBox="0 0 114 114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="avatar__square_item avatar__square_item_shift"
          >
            <defs>
              <pattern
                id="avatarImg"
                patternUnits="userSpaceOnUse"
                width="150"
                height="150"
              >
                <image
                  href={tempAvatar}
                  x="-15"
                  y="-20"
                  width="150"
                  height="150"
                />
              </pattern>
            </defs>
            <path
              fill="url(#avatarImg)"
              d="M2.24814 50.7004C-2.18305 34.163 7.631 17.1645 24.1685 12.7333L63.2996 2.24814C79.837 -2.18305 96.8355 7.631 101.267 24.1685L111.752 63.2996C116.183 79.837 106.369 96.8355 89.8316 101.267L50.7004 111.752C34.163 116.183 17.1645 106.369 12.7333 89.8316L2.24814 50.7004Z"
              stroke="green"
              strokeWidth="0.5"
            />
          </svg>
        </Marker>
      ))}
    </ComposableMap>
  );
}
