import styled from "styled-components";
import Header from "components/Header";
import Layout from "components/Layout";

const S = {};

S.Home = styled.div`
  height: 100%;
  padding-left: ${(p) => p.theme.size.pixel(384)};
  padding-right: ${(p) => p.theme.size.pixel(384)};

  display: flex;
  flex-flow: column;

  .home {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: ${(p) => p.theme.color.primary.main};
      font-weight: 600;
    }
  }

  .paw-graphic {
    fill: ${(p) => p.theme.color.primary.main};
    opacity: 0.5;
    width: ${(p) => p.theme.size.pixel(512)};
    position: fixed;
    right: -${(p) => p.theme.size[48]};
    bottom: -${(p) => p.theme.size[48]};
  }
`;

export default function Home() {
  return (
    <Layout>
      <div className="home">
        <p>Home page :)</p>
      </div>
    </Layout>
  );
}
