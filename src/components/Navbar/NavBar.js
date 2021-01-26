import styled from 'styled-components'
import { Link } from 'gatsby'

export const NavBarWrapper = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 40px 48px 0;
  margin: 0 auto;
  box-sizing: content-box;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 24px 48px 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: calc(100vw - 32px);
    padding: 16px 16px 0;
  }
`

export const NavLink = styled(Link)`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 32px;
  margin-right: ${({ isMenu }) => (isMenu ? '8px' : '40px')};
  color: rgba(255, 255, 255, .75);
  transition: 0.4s ease;

  &:hover {
    color: #fff;
    opacity: ${({ logo }) => (logo ? '.8' : '1')};
    transform: ${({ logo }) => (logo ? 'scale(1.05)' : '')};
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 18px;
    line-height: 24px;
    height: 32px;
    margin-right: ${({ isMenu }) => (isMenu ? '8px' : '24px')};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 14px;
    line-height: 16px;
    height: 16px;
    margin: ${({ logo }) => (logo ? '0' : '0 0 0 16px')};
  }
`

export const NavProducts = styled.button`
  border: none;
  display: flex;
  background: none;
  font-size: 24px;
  line-height: 32px;
  color: #fff;
  opacity: 0.75;
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 18px;
    line-height: 24px;
  }
`

export const NavProductsIcon = styled.img`
  margin-left: 8px;
  display: flex;
  align-self: center;

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 2px 0 0;
    height: 6px;
  }
`

export const NavProductsMobile = styled.button`
  border: none;
  display: flex;
  align-items: center;
  background: none;
  cursor: pointer;
  transition: 0.3s ease;
  margin-right: auto;

  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.6;
  }
`

export const NavLogo = styled.img`
  height: ${({ logo }) => (logo ? '32px' : '25px')};
  display: flex;
  margin-right: ${({ logo }) => (logo ? '20px' : '40px')};

  @media ${(props) => props.theme.breakpoints.lg} {
    height: ${({ logo }) => (logo ? '25px' : '20px')};
    margin-right: ${({ logo }) => (logo ? '16px' : '40px')};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ logo }) => (logo ? '19px' : '15px')};
    margin-right: ${({ logo }) => (logo ? '12px' : '7px')};
  }
`

export const NavDivider = styled.div`
  width: 0;
  height: 21px;
  display: flex;
  margin-right: 40px;
  border-right: 1px solid rgba(255, 255, 255, 0.33);

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-right: 24px;
  }
`
export const NavIcon = styled.a`
  margin-left: 16px;
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.4);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-left: 25px;
  }
`

export const NavIconImg = styled.img`
  display: flex;  
  height: 24px;

  @media ${(props) => props.theme.breakpoints.lg} {
    height: 16px;
  }
`

export const NavSocial = styled.div`
  display: flex;
  margin-left: auto;
`