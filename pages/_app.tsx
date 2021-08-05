/* eslint-disable @typescript-eslint/no-explicit-any */
import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'app-common/globalStyles';
import { lightTheme } from 'app-common/globalStyles/variables';
import {NextSeo} from 'next-seo';
interface Props {
  pageProps: any;
  Component: any;
}

export class AtaraxiaApp extends App<Props> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <NextSeo
          title="Ataraxia"
          description="We build tech products inspired by ancient philosophy and modern psychology that help you cultivate mental and emotional well-being."
          canonical={'http://getataraxia.com'}
          openGraph={{
            type: 'website',
            description:
              'We build tech products inspired by ancient philosophy and modern psychology that help you cultivate mental and emotional well-being.',
            locale: 'en_IE',
            url: 'http://getataraxia.com',
            site_name: 'Ataraxia',
          }}
          twitter={{
            handle: '@getataraxia',
            site: '@getataraxia',
            cardType: 'app',
          }}
        />
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default AtaraxiaApp;
