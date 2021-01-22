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
  height: 500px;
  margin-bottom: 32px;
  position: relative;
`

export const MemberBubble = styled.div`
  display: flex;
  position: absolute;
  left: ${(props) => props.x};
  bottom: ${(props) => props.y};
  background: url(${(props) => props.img}) center;
  background-size: cover;
  width: 32px;
  height: 32px;
  box-sizing: content-box;
  border-radius: 32px;
  border: 2px solid #FFF;
  filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15));
  
`
