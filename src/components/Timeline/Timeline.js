import styled from 'styled-components'

export const CarouselContainer = styled.ul`
  background: #0F1624;
  padding: 1rem;
  list-style:none;
  display: flex;
  justify-content: space-evenly; 
  overflow-x:auto;

  //remove scrollbar
  -ms-overflow-style: none;  
  scrollbar-width: none;  
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 288px;

    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
  }
`
export const CarouselItem = styled.div`
  background: #0F1624;
  border-radius: 3px;
  max-width: 195.6px;

  @media ${props => props.theme.breakpoints.md} {
    width: 108.8px;
    max-width: 195.6px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    max-width: 108px;
    background: #0E131F;
    scroll-snap-align: start;
    border-radius: 3px;
    margin-right: 32px;
    overflow: visible;
  }
`

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24x;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  width: max-content;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`
export const CarouselItemImg = styled.img`
  margin-left: 8px;
  overflow: visible;
  z-index: 10;
`

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
  }
`
export const CarouselButtons = styled.div`
  width: 288px;

  display: none;
  visibility: hidden;

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`

export const CarouselButton = styled.button`
  text-decoration: none;
  background: ${(props) => props.active ? '#FFFFFF' : 'rgba(255, 255, 255, 0.33)'};
  width: ${(props) => props.active ? '4px' : '2px'};
  height: ${(props) => props.active ? '4px' : '2px'};
  border-radius: 100%;
  margin-right: 3px;
`