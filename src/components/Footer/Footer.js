import styled from "styled-components"
import { Link } from 'gatsby'

export const FooterWrapper = styled.section`
	width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 0 48px 40px;
  margin: 0 auto;
  box-sizing: content-box;

  @media ${props => props.theme.breakpoints.md} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`

export const LinkList = styled.ul`
	border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
  padding: 40px 0 28px;

	@media ${props => props.theme.breakpoints.lg} {
		padding: 32px 0 16px;
	}

	@media ${props => props.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 0 16px;
		gap: 16px;
	}
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`

export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 16px;

	@media ${props => props.theme.breakpoints.md} {
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 8px;
	}
`

export const LinkItem = styled(Link)`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;

	@media ${props => props.theme.breakpoints.lg} {
		font-size: 16px;
		line-height: 28px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 10px;
		line-height: 14px;
		margin-bottom: 8px;
	}
`

export const SocialIconsContainer = styled.div`
max-width: 1040px;
display: flex;
justify-content: space-between;

@media ${props => props.theme.breakpoints.md}{
  display: flex;
  justify-content: space-between;
}

@media ${props => props.theme.breakpoints.sm}{
  display: flex;
  flex-direction: column;
}
`

export const CompanyContainer = styled.div`
  display: flex;
	align-items:center;
	flex-wrap: wrap;

	@media ${props => props.theme.breakpoints.md}{
		flex-direction: column;
		align-items: baseline;
	}

	@media ${props => props.theme.breakpoints.sm}{
		display: flex;
		flex-direction: column;
		margin-bottom:32px;
		align-items: center
	}
`

export const CompanyLogo = styled.img`
	width: 190.44px;
	height: 40px;
	margin-right: 32px;
	
	@media ${props => props.theme.breakpoints.md}{
		margin-bottom: 9px;
		width: 152.35px;
	height: 32px;
	}

	@media ${props => props.theme.breakpoints.sm}{
		width: 114.26px;
		height: 24px;
	}
`

export const Slogan = styled.p`
	color: rgba(255, 255, 255, 0.5);
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;

	@media ${props => props.theme.breakpoints.lg}{
		font-size: 16px;
		line-height: 28px;
	}

	@media ${props => props.theme.breakpoints.md}{
		line-height: 22px;
		font-size: 14px;
		min-width: 100px;
	}
`

export const SocialContainer = styled.div`
	width: 336px;
	display: flex;
  align-items: center;
  justify-content: space-between;


	@media ${props => props.theme.breakpoints.md}{
    width: 304px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
	}

	@media ${props => props.theme.breakpoints.sm}{
    width: 224px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
	}
`

export const SocialContainerIcon = styled.img`
	width: 24px;
	height: 24px;
	
	@media ${props => props.theme.breakpoints.md}{
		width: 24px;
		height: 24px;
	}

	@media ${props => props.theme.breakpoints.sm}{
    width: 16px;
    height: 16px;
	}
`