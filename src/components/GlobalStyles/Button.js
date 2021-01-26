import React from 'react'
import { ButtonBack, ButtonFront } from './index'

const Button = (props) => {
  return (
    <ButtonBack>{props.children}
      <ButtonFront onClick={props.onClick}>{props.children}</ButtonFront>
    </ButtonBack>
  )
}

export default Button
