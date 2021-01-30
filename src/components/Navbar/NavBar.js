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

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
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
  margin-right: 40px;
  color: rgba(255, 255, 255, .75);
  transition: 0.4s ease;
  white-space: nowrap;

  &:hover {
    color: #fff;
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 18px;
    line-height: 24px;
    height: 32px;
    margin-right: ${({ mobile }) => mobile ? '0' : '24px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 16px;
    height: 16px;
    margin: 0 0 0 16px;
  }
`

export const NavProducts = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 24px;
  line-height: 32px;
  color: rgba(255,255,255,0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
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
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => isOpen ? '1' : '.75'};
  transform: ${({ isOpen }) => isOpen ? 'scaleY(-1)' : 'scaleY(1)'};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
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
  position: relative;

  &:focus {
    outline: none;
  }
`

export const NavLogoWrap = styled(Link)`
  display: flex;
  align-items: center;
  padding-right: ${({ mobile }) => (mobile ? '0' : '40px')};
`

export const NavLogo = styled.img`
  height: ${({ logo }) => (logo ? '32px' : '25px')};
  display: flex;
  margin-right: ${({ logo }) => (logo ? '20px' : '80px')};

  @media ${(props) => props.theme.breakpoints.lg} {
    height: ${({ logo }) => (logo ? '25px' : '20px')};
    margin-right: ${({ logo }) => (logo ? '16px' : '0px')};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
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

export const NavSocial = styled.div`
  display: flex;
  margin-left: auto;
`
