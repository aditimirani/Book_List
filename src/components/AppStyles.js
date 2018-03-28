import styled from 'styled-components'
import styleVars from './CommonStyles'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

export const ElementR= styled(Col)`
  background-color: transparent;
  padding-bottom: ${({ paddingBottom = '20px' }) => paddingBottom};
  padding-top: ${({ paddingTop = '0px' }) => paddingTop};
`

export const PageRoot = styled.div`
 
  ${styleVars.screen.laptop`
   
  `};
`
export const LandingPageR = styled(PageRoot)`
  background-color: ${styleVars.color.white};
  padding: 0;
  ${styleVars.screen.laptop`
    padding: 0;
  `};
`
export const SectionR = styled(Grid)`
  
  ${styleVars.screen.tablet`
    width:100%;
    padding-left: 24px;
    padding-right: 24px;
  `}
  ${styleVars.screen.laptop`
    width:100%;
    padding-left: 75px;
    padding-right: 75px;
  `}
`

export const LandingSectionR = styled(Grid)`
  max-width: 1164px;
  padding-top:0;
  padding-bottom:0;
  width: 100%;
`

export const SegmentR = styled(Row)`
  margin:0px;
  width: 100%;
  margin-bottom: ${({ sectionPadding = '0px' }) => sectionPadding};
`
export const LandingSegmentR = styled(Row)`
  }
`

export const ModalR= styled(Row)`
  justify-content: center;
  padding: 0;
  margin: 0;
`

export const ModelContentR = styled(Col)`
  max-width: 800px;
  background: white;
  padding: 20px 12px 0px 12px;
  width: 100%;
  ${styleVars.screen.laptop`
    padding: 48px 56px 28px 56px;
  `}
  ${styleVars.screen.desktop`
    padding: 48px 56px 28px 56px;
  `}
`
