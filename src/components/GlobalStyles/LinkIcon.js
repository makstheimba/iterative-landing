import React from 'react'
import { LinkContainer, LinkIconImg } from './index'

const LinkIcon = (props) => {
  return (
    <LinkContainer href={props.href} large={props.large} target="_blank" rel="noreferrer">
      <LinkIconImg src={props.src} large={props.large} nav={props.nav} />
    </LinkContainer>
  )
}

export default LinkIcon
