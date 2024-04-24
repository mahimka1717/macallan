import { createGlobalStyle } from 'styled-components';
import Header from './Header';
import HeaderOuter from './HeaderOuter';
import Disclaimer from './Disclaimer';
import { device } from '~/config/utils';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }



  body {  §
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:1.5;
    color: #333;
    font-family: MetricWeb, sans-serif;

    background: #001217;
    // background: radial-gradient(66.38% 57.45% at 95.28% 58.19%, #011319 0%, rgba(1, 19, 25, 0.00) 100%);


  }
  a {
    color: black;
    font-weight: bold;
    text-decoration: none;
    

  }
  a:hover {
    text-decoration: none;
    color: black;

  }
  button {
  }
  
  .o-footer {
    margin-top: 0;
    position: relative;
    z-index: 3;

  }

  .o-footer a {
    font-weight: normal;
  }

  .o-header {
    position: relative;
    z-index: 3;
  }

  
  h1 {
    margin: 0;
    line-height: 1.2;
    font-weight: 500;

    @media ${device.tablet} {
      }
  }


  
  h2 {
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    @media ${device.tablet} {
       font-size: 36px;
       margin-bottom: 0;
      }
    }
  
  p {
    font-size: 20px;
    @media ${device.tablet} {
    
      }
  }

  main {
    position: relative;
  }

  .o-cookie-message {
    display: none;
  }

  .o-cookie-message {
    z-index: 10;
    p {
      font-size: initial;
    }
  }
  .o-cookie-message__heading {
    h1 {
      color: black;
    }
  }

`;

// font-family: bellefair, sans-serif;  400
// font-family: effra, sans-serif; 300, 400, 700

export default function Page({ children }) {
    return (
        <>
            <GlobalStyles />
            <div className="bodyContainer">
                 {/* <Header /> */}
                {/*<Disclaimer client="The Macallan" /> */}
                {children}
                {/* <HeaderOuter /> */}
            </div>
        </>
    );
}
