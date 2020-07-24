import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link rel="stylesheet" href="/static/css/destyle.css" />

          <link
            href="https://fonts.googleapis.com/css2?family=Faustina&family=Open+Sans:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <ThemeProvider theme={theme}>
          <GlobalStyle></GlobalStyle>

          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
