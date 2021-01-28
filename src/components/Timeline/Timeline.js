import styled from 'styled-components'

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  background: #0F1624;
  padding: 0rem;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  overflow-x:hidden;

  margin-left: 32px;
  &:first-of-type{
    margin-left: 0px;
  }

  margin-bottom: 80px;

  //remove scrollbar
  scrollbar-width: none;  
   &::-webkit-scrollbar {
     display: none;
   }

  @media ${props => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 0px;

    scrollbar-width: thin;  
    &::-webkit-scrollbar {
      display: block;
    }
  }
`

export const CarouselItem = styled.div`
  background: #0F1624;
  border-radius: 3px;
  max-width: 195.6px;

  @media ${props => props.theme.breakpoints.md} {
    max-width: 108.8px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 32px;

    width: 108px;
    background: #0E131F;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    
    ${(props) => props.active === props.index ? `opacity: 1` : `opacity: 0.5`}; 
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
  z-index: 10;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    overflow: visible;
  }

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
appearance: button;
  background-color: white;
  box-sizing: border-box;
  padding: 0px 0px;
  border-width: 0px;
  border-image: none;

  text-decoration: none;
  border-radius: 100%;
  margin-right: 3px;
  ${(props) => props.active === props.index ? `background-color: #FFFFFF` : `background-color: rgba(255, 255, 255, 0.33)`};
  ${(props) => props.active === props.index ? `width: 4px` : `width: 2px`};
  ${(props) => props.active === props.index ? 'height: 4px' : `height: 2px`};
`