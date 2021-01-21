import React from 'react';
import Icon from '../Icon/Icon';
import './CustomersList.css';
import standard from '../../images/client-standard.svg';
import rubrik from '../../images/client-rubrik.svg';
import warbyparker from '../../images/client-warby-parker.svg';
import odnoklassniki from '../../images/client-odnoklassniki.svg';
import smithsonian from '../../images/client-smithsonian.svg';
import neosensory from '../../images/client-neosensory.svg';

export default function CustomersList() {
  return (
    <ul className="customerslist">
      <li className="customerslist__item">
        <Icon
          icon={standard}
          widthPixelSizes={[55, 78, 130]}
          heightPixelSizes={[20, 48, 80]}
          linkDescription="Standard"
        />
      </li>
      <li className="customerslist__item">
        <Icon
          icon={rubrik}
          widthPixelSizes={[50, 75, 122]}
          heightPixelSizes={[19, 48, 80]}
          linkDescription="Rubrick"
        />
      </li>
      <li className="customerslist__item">
        <Icon
          icon={warbyparker}
          widthPixelSizes={[74, 109, 185]}
          heightPixelSizes={[20, 48, 80]}
          linkDescription="Warby Parker"
        />
      </li>
      <li className="customerslist__item">
        <Icon
          icon={odnoklassniki}
          widthPixelSizes={[12, 18, 30]}
          heightPixelSizes={[27, 56, 94]}
          linkDescription="Odnoklassniki"
        />
      </li>
      <li className="customerslist__item">
        <Icon
          icon={smithsonian}
          widthPixelSizes={[68, 99, 162]}
          heightPixelSizes={[20, 48, 80]}
          linkDescription="Smithsonian"
        />
      </li>
      <li className="customerslist__item">
        <Icon
          icon={neosensory}
          widthPixelSizes={[56, 85, 141]}
          heightPixelSizes={[32, 67, 112]}
          linkDescription="Neosensory"
        />
      </li>
    </ul>
  );
}
