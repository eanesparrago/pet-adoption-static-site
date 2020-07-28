import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

import PawsLogo from "./elements/PawsLogo";

const Header = () => {
  const router = useRouter();

  return (
    <S.Header>
      <PawsLogo></PawsLogo>

      <S.Nav>
        <Link href="/" passHref={true}>
          <S.Anchor isActive={router.pathname === "/"}>Home</S.Anchor>
        </Link>

        <Link href="/adoptable-cats" passHref={true}>
          <S.Anchor isActive={router.pathname === "/adoptable-cats"}>
            Adoptable Cats
          </S.Anchor>
        </Link>

        <Link href="/adoptable-dogs" passHref={true}>
          <S.Anchor isActive={router.pathname === "/adoptable-dogs"}>
            Adoptable Dogs
          </S.Anchor>
        </Link>
      </S.Nav>
    </S.Header>
  );
};

const S = {};

S.Header = styled.header`
  padding-top: ${(p) => p.theme.size[32]};
  padding-bottom: ${(p) => p.theme.size[32]};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    flex-flow: column;
    border-bottom: 1px solid ${(p) => p.theme.color.grey[500]};
    margin-bottom: ${(p) => p.theme.size[64]};
    padding-bottom: ${(p) => p.theme.size[48]};
  }
`;

S.Nav = styled.nav`
  *:not(:last-child) {
    margin-right: ${(p) => p.theme.size[64]};
  }

  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    * {
      display: block;
      width: 100%;
      text-align: center;
      margin: 0;
      font-size: 1rem;
    }

    *:not(:last-child) {
      margin-bottom: ${(p) => p.theme.size[16]};
    }
  }
`;

S.Anchor = styled.a`
  font-family: ${(p) => p.theme.font.sansSerif};
  color: ${(p) => p.theme.color.primary.main};
  font-weight: 600;
  cursor: pointer;

  ${(p) =>
    p.isActive &&
    css`
      color: ${(p) => p.theme.color.primary.dark};
      font-weight: 700;
    `}
`;

export default Header;
