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
  }
`

export const TeamPopup = styled.div`
  position: absolute;
  left: calc(50% - 240px);
  top: calc(50% - 176px);
  width: 480px;
  height: 354px;
  background-color: #fff;
  border-radius: 16px;
  padding: 24px;
`

export const IntroContainer = styled.div``
export const PopupName = styled.h3``
export const PopupTitle = styled.p``
export const PopupLocation = styled.p``
export const PopupDescription = styled.p``
export const PicWrap = styled.div``
export const PopupPic = styled.img``
export const PopupLinks = styled.h3``

export const PopupIcon = styled.h3`
@media ${(props) => props.theme.breakpoints.lg} {
  
}
@media ${(props) => props.theme.breakpoints.md} {
  
}
`
