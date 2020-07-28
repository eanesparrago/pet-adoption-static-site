import Head from "next/head";
import styled from "styled-components";

import Header from "components/Header";
import Layout from "components/Layout";

const S = {};

S.Home = styled(Layout)`
  .Home__wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .Home__text {
      color: ${(p) => p.theme.color.primary.main};
      font-weight: 600;
    }
  }
`;

export default function Home() {
  return (
    <S.Home>
      <Head>
        <title>Home | PAWS</title>

        <meta name="description" content="PAWS cat and dog adoption website" />
      </Head>

      <div className="Home__wrapper">
        <p className="Home__text">Home page :)</p>
      </div>
    </S.Home>
  );
}
