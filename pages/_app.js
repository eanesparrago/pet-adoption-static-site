import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";
import MadeByIan from "components/elements/MadeByIan";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head></Head>

        <ThemeProvider theme={theme}>
          <GlobalStyle></GlobalStyle>

          <MadeByIan></MadeByIan>

          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
