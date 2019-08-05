import React from 'react';
import { Helmet } from 'react-helmet';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import DefaultStyles from '../atoms/defaults';
import Nav from './nav';
import theme from '../../theme/theme';
import globalStyles from '../../theme/global';
import useSiteMetadata from '../../hooks/use-site-metadata';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display|Roboto:400,700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Nav />
      <DefaultStyles>{children}</DefaultStyles>
    </ThemeProvider>
  );
};

export default TemplateWrapper;
