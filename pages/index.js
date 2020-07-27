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
      <div className="Home__wrapper">
        <p className="Home__text">Home page :)</p>
      </div>
    </S.Home>
  );
}
