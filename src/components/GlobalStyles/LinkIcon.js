import React from 'react'
import { LinkContainer, LinkIconImg } from './index'

const LinkIcon = (props) => {
  return (
    <LinkContainer href={props.href} target="_blank" rel="noreferrer">
      <LinkIconImg src={props.src} />
    </LinkContainer>
  )
}

export default LinkIcon
