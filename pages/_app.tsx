/* eslint-disable @typescript-eslint/no-explicit-any */
import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'app-common/globalStyles';
import { lightTheme } from 'app-common/globalStyles/variables';

interface Props {
  pageProps: any;
  Component: any;
}

export class AtaraxiaApp extends App<Props> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default AtaraxiaApp;
