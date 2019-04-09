import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  };
  
const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.black};
`;

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
`;

injectGlobal`
@font-face {
    font-display: swap;
    font-family: 'Miriam Libre';
    font-style: normal;
    font-weight: 400;
    src: local('Miriam Libre Regular'), local('MiriamLibre-Regular'), url(https://fonts.gstatic.com/s/miriamlibre/v5/DdTh798HsHwubBAqfkcBTL_fZ5P7.ttf) format('truetype');
}
@font-face {
    font-display: swap;
    font-family: 'Miriam Libre';
    font-style: normal;
    font-weight: 700;
    src: local('Miriam Libre Bold'), local('MiriamLibre-Bold'), url(https://fonts.gstatic.com/s/miriamlibre/v5/DdT-798HsHwubBAqfkcBTL_X3LbrQsq_.ttf) format('truetype');
}


html {
    box-sizing: border-box;
    font-size: 10px;
}
*, *:before, *:after {
    box-sizing: inherit;
}

body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Miriam Libre';
}

a {
    text-decoration: none;
    color: ${theme.black};
}

button {  font-family: 'Miriam Libre'; }
`;

class Page extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}> 
            <StyledPage>
                <Meta />
                <Header />
                <Inner>{this.props.children}</Inner>
            </StyledPage>
        </ThemeProvider>
      </div>
    )
  }
}
export default Page;