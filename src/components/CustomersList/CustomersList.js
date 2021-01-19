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
      <Icon
        icon={standard}
        widthPixelSizes={[55, 0, 0]}
        heightPixelSizes={[16, 0, 0]}
      />
      <Icon
        icon={rubrik}
        widthPixelSizes={[50, 0, 0]}
        heightPixelSizes={[16, 0, 0]}
      />
      <Icon
        icon={warbyparker}
        widthPixelSizes={[74, 0, 0]}
        heightPixelSizes={[16, 0, 0]}
      />
      <Icon
        icon={odnoklassniki}
        widthPixelSizes={[11.57, 0, 0]}
        heightPixelSizes={[22, 0, 0]}
      />
      <Icon
        icon={smithsonian}
        widthPixelSizes={[70, 0, 0]}
        heightPixelSizes={[22, 0, 0]}
      />
      <Icon
        icon={neosensory}
        widthPixelSizes={[56, 0, 0]}
        heightPixelSizes={[22, 0, 0]}
      />
    </ul>
  );
}
