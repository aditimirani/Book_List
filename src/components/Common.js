import React from 'react'
import { ElementR } from './CommonStyles'
export {
  ModalRoot as Modal,
  ModelContentR as ModelContent,
  PageR as Page,
  SectionR as Section,
  SegmentR as Segment,
  LandingPageR as LandingPage,
  LandingSectionR as LandingSection,
  LandingSegmentR as LandingSegment
} from './CommonStyles'

export const Element = props => {
  const {
    children,
    mobile = 12,
    tablet,
    laptop,
    desktop = 12,
    mobileOffset = 0,
    tabletOffset,
    laptopOffset,
    desktopOffset = 0
  } = props
  return (
    <ElementRoot
      {...props}
      xs={mobile}
      sm={tablet || mobile}
      md={laptop || desktop}
      lg={desktop}
      xsOffset={mobileOffset}
      smOffset={tabletOffset || mobileOffset}
      mdOffset={laptopOffset || desktopOffset}
      lgOffset={desktopOffset}
    >
      {children}
    </ElementRoot>
  )
}
