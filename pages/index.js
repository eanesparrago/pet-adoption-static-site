import { useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";

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
  const router = useRouter();

  useEffect(() => {
    router.back();
  }, []);
  
  return (
    <S.Home>
      <Head>
        <title>Home | PAWS</title>

        <meta name="description" content="PAWS cat and dog adoption website" />
      </Head>

      <div className="Home__wrapper">
        <p className="Home__text">Peekaboo :)</p>
      </div>
    </S.Home>
  );
}
