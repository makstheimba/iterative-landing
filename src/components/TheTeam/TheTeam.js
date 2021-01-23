import styled from 'styled-components'
import map from '../../images/map2.svg';

export const TeamSubtext = styled.p`
  font-size: 18px;
  line-height: 26px;
  max-width: 800px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 64px;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 100px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 40px;
  }
`
export const TeamMap = styled.div`
  width: 100%;
  background: url(${map}) no-repeat center;
  background-size: 1200px;
  height: 600px;
  margin-bottom: 32px;
  position: relative;

  @media ${(props) => props.theme.breakpoints.xl} {
    background-size: 960px;
    height: 480px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    background-size: 720px;
    height: 360px
  }
  @media ${(props) => props.theme.breakpoints.md} {
    background-size: 360px;
    height: 180px
  }
`
export const MemberContainer = styled.div`
  position: relative;
  width: 1200px;
  height: 500px;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 960px;
    height: 400px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 720px;
    height: 300px
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 360px;
    height: 150px
  }
`

export const MemberBubble = styled.button`
  display: flex;
  position: absolute;
  left: ${(props) => props.x};
  top: ${(props) => props.y};
  background: url(${(props) => props.img}) center;
  background-size: 100%;
  width: 32px;
  height: 32px;
  margin: 2px;
  box-sizing: content-box;
  border-radius: 32px;
  border: 2px solid #FFF;
  transition: 0.1s ease;
  cursor: pointer;

  &:hover {
    background-size: 120%;
  }

  &:focus {
    outline: none;
    background-size: 120%;
    border: 4px solid #FFF;
    margin: 0;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 24px;
    height: 24px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 16px;
    height: 16px;
    border: 1px solid #FFF;
    cursor: initial;

    &:hover {
      background-size: 100%;
    }
    &:focus {
    outline: none;
    background-size: 100%;
    border: 1px solid #FFF;
    margin: 2px;
    }
  }
`
export const PopupContainer = styled.div`
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: 0.3s ease;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.1);
`

export const TeamPopup = styled.div`
  position: absolute;
  left: ${({ open }) => (open ? 'calc(50% - 240px)' : 'calc(50% - 340px)')};
  top: calc(50% - 176px);
  width: 480px;
  height: 354px;
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;
  transition: 0.4s ease-out;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 400px;
    height: 308px;
    padding: 24px;
    left: ${({ open }) => (open ? 'calc(50% - 200px)' : 'calc(50% - 300px)')};
    top: calc(50% - 154px);
  }
`

export const IntroContainer = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 24px;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding-bottom: 16px;
  }
`

export const IntroText = styled.div`
  display: flex;
  flex-direction: column;

`

export const IntroName = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #0f1624;
  padding-bottom: 16px;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 12px;
  }
  
`
export const IntroTitle = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding-bottom: 20px;
  max-width: 272px;
  color: rgba(15, 22, 36, 0.75);

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 12px;
    line-height: 18px;
    padding-bottom: 12px;
    max-width: 232px;
    padding-right: 16px;
  }
`

export const IntroLocation = styled.p`
  display: flex;
  font-size: 14px;
  line-height: 22px;
  color: rgba(15, 22, 36, 0.5);
  align-items: center;
  padding-bottom: 16px;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 12px;
    line-height: 18px;
  }
`

export const IntroDivider = styled.div`
  width: 32px;
  height: 1px;
  background-color: rgba(15,22,36, .1);
`

export const IntroAvatar = styled.div`
  width: 136px;
  height: 136px;
  margin-left: auto;
  background-color: rgba(0,0,0,.4);

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 104px;
    height: 104px;
  }
`
export const PopupPic = styled.img``

export const IntroDescription = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(15, 22, 36, 0.75);
  padding-bottom: 24px;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 16px;
    line-height: 28px;
    padding-bottom: 16px;
  }
`

export const PopupLinks = styled.div`
  display: flex;
`

export const PopupLink = styled.a`
  display: flex;
  margin-right: 12px;
  opacity: 0.5;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 1;
    transform: scale(1.3);
  }
`

export const PopupIcon = styled.img`
  height: 16px;
  width: 16px;
  margin-right: ${(props) => props.loc ? '8px' : '0'}; 
`
