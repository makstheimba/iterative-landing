import styled from 'styled-components'
import map from '../../images/map2.svg';

export const TeamMap = styled.div`
  width: 100%;
  max-width: 1200px;
  background: url(${map}) no-repeat center;
  background-size: 1200px;
  height: 600px;
  margin: 64px auto 32px;
  position: relative;

  @media ${(props) => props.theme.breakpoints.xl} {
    background-size: 100%;
    height: 50vw;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin: 64px 0 32px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 40px 0 0px;
  }
`
export const MemberContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 600px;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 100%;
    height: 50vw;
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

  @media ${(props) => props.theme.breakpoints.md} {
    width: 24px;
    height: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
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
  display: flex;
  flex-direction: column;

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
  padding: 8px;
  position: relative;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 104px;
    height: 104px;
  }
`
export const PopupPicFrame = styled.div`
  border-radius: 32px;
  overflow: hidden;
  height: 112px;
  width: 112px;
  transform: rotate(-15deg);

  @media ${(props) => props.theme.breakpoints.lg} {
    height: 80px;
    width: 80px;
    border-radius: 24px;
  }
`

export const PopupPic = styled.img`
  transform: rotate(15deg) scale(1.2);
  z-index: 10;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`

export const PopupPicAccent = styled.img`
  transform: scale(1.4);
  position: absolute;
  bottom: 20px;
  right: 16px;

  @media ${(props) => props.theme.breakpoints.lg} {
    transform: scale(1);
    bottom: 4px;
    right: 4px;
  }
`

export const IntroDescription = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(15, 22, 36, 0.75);
  margin-bottom: auto;

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: 16px;
    line-height: 28px;
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
export const TeamStats = styled.div`
  display: flex;
`

export const StatColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 74px;
  padding: 0 16px 40px 0;
`

export const StatNum = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 26px;
  background: linear-gradient(121.57deg, #FFFFFF 10.77%, rgba(255, 255, 255, 0.5) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
`
export const StatText = styled.p`
  font-size: 10px;
  line-height: 14px;
  color: rgba(255,255,255,0.5);
`