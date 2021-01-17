import styled from 'styled-components'
import {Link} from 'gatsby'

export const NavBarWrapper = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 40px 80px 0;
`

export const NavLink = styled(Link)`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 32px;
  margin-right: 40px;
  color: rgba(255, 255, 255, .75);
  transition: 0.3s ease;

  &:hover {
    color: #fff;
  }
`

export const NavLogo = styled.img`
  height: ${({ logo }) => (logo ? '32px' : '25px')};
  display: flex;
  margin-right: ${({ logo }) => (logo ? '20px' : '40px')};
`

export const NavDivider = styled.div`
  width: 0;
  height: 21px;
  display: flex;
  margin-right: 40px;
  border-right: 1px solid rgba(255, 255, 255, 0.33);
`
export const NavSocial = styled.div``