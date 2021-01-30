import React from 'react'
import { DropDownContainer, DropDownItem, DropDownIcon, DropDownTextContainer, DropDownItemTitle, DropDownItemDesc } from './NavDropDown'
import viewerLogo from '../../images/viewer.svg'
import dvcLogo from '../../images/dvc.svg'
import cmlLogo from '../../images/cml.svg'

const NavDropDown = (props) => {
  return (
    <DropDownContainer active={props.isOpen}>
      <DropDownItem href="#" target="_blank" rel="noreferrer">
        <DropDownIcon src={viewerLogo} alt="Viewer Logo"/>
        <DropDownTextContainer>
          <DropDownItemTitle>Viewer</DropDownItemTitle>
          <DropDownItemDesc>Track andshare insights from ML projects</DropDownItemDesc>
        </DropDownTextContainer>
      </DropDownItem>
      <DropDownItem href="#" target="_blank" rel="noreferrer">
        <DropDownIcon src={dvcLogo} alt="DVC Logo"/>
        <DropDownTextContainer>
          <DropDownItemTitle>DVC</DropDownItemTitle>
          <DropDownItemDesc>Open-source version control system for ML projects</DropDownItemDesc>
        </DropDownTextContainer>
      </DropDownItem>
      <DropDownItem href="#" target="_blank" rel="noreferrer">
        <DropDownIcon src={cmlLogo} alt="CML Logo"/>
        <DropDownTextContainer>
          <DropDownItemTitle>CML</DropDownItemTitle>
          <DropDownItemDesc>Open_source CI?CD for ML projects</DropDownItemDesc>
        </DropDownTextContainer>
      </DropDownItem>
    </DropDownContainer>
  )
}

export default NavDropDown
