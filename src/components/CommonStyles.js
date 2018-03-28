import { injectGlobal, css } from 'styled-components'

const styleVars = {
  app: {
    // Assets path to map images and fonts
    'assets-path': '../assets/'
  },
  color: {
    // Color theme
    'darkGrey': 'grey',
    
  },

  dimensions: {
    maxPageWidth: '968px',
    border: '1px',
    gap3: '3px',
    gap4: '4px',
    gap12: '12px',
    gap14: '14px',
    gap16: '16px',
    gap20: '20px',
    gap24: '24px',
    gap28: '28px',
    gap32: '32px',
    gap36: '36px',
    gap40: '40px',
    gap44: '44px',
    gap60: '60px',
    gap64: '64px',
    font30: '30px',
    font14: '14px',
    font16: '16px',
    width32: '32px',
    height32: '32px',
    height60: '60px',
    height212: '212px',
    height280: '280px'
  },
  screen: {
    desktop: (...args) => css`
      @media screen and (min-width: 980px){
        ${css(...args)}
      }
    `,
    laptop: (...args) => css`
      @media screen and (min-width: 768px) {
        ${css(...args)}
      }
    `,
    tablet: (...args) => css`
      @media screen and (min-width:480px) {
        ${css(...args)}
      }
    `
  }
}

injectGlobal`
  *, ::after, ::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'myriad-pro', sans-serif;
    color: ${styleVars.color.darkGrey};
    -webkit-font-smoothing: antialiased;
    min-width: 320px;
  }

  a {
    color: ${styleVars.color.htmlLink};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`

export default styleVars
