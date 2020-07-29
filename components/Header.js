import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSpring, animated } from "react-spring";

import PawsLogo from "./elements/PawsLogo";

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleChangeStart = (url) => {
      setIsLoading(true);
    };
    const handleChangeComplete = (url) => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleChangeStart);
    router.events.on("routeChangeComplete", handleChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleChangeStart);
      router.events.off("routeChangeComplete", handleChangeComplete);
    };
  }, []);

  const loaderSpring = useSpring({
    transform: isLoading ? "scale(1)" : "scale(0)",
    opacity: isLoading ? 1 : 0,
  });

  return (
    <S.Header>
      <PawsLogo></PawsLogo>

      <animated.div style={loaderSpring} className="Header__loader">
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M256.005 193.003C176.596 193.003 64.007 315.761 64.007 393.251C64.007 428.15 90.8167 449 135.746 449C184.586 449 216.835 423.92 256.005 423.92C295.515 423.92 327.854 449 376.264 449C421.193 449 448.003 428.15 448.003 393.251C448.003 315.761 335.414 193.003 256.005 193.003ZM108.727 180.393C98.3266 145.743 66.287 123.303 37.1673 130.263C8.04759 137.223 -7.12225 170.953 3.27764 205.603C13.6775 240.252 45.7172 262.692 74.8369 255.732C103.957 248.772 119.126 215.042 108.727 180.393V180.393ZM193.446 159.613C224.385 151.473 239.865 109.674 228.025 66.254C216.185 22.8345 181.506 -5.7552 150.566 2.38472C119.626 10.5246 104.147 52.3242 115.986 95.7437C127.826 139.163 162.516 167.763 193.446 159.613ZM474.833 130.273C445.713 123.313 413.683 145.753 403.273 180.403C392.874 215.052 408.043 248.782 437.163 255.742C466.283 262.702 498.312 240.262 508.722 205.613C519.122 170.963 503.952 137.233 474.833 130.273V130.273ZM318.564 159.613C349.504 167.753 384.184 139.163 396.023 95.7437C407.863 52.3242 392.384 10.5346 361.444 2.38472C330.504 -5.7652 295.825 22.8345 283.985 66.254C272.145 109.674 287.625 151.473 318.564 159.613V159.613Z" />
        </svg>
      </animated.div>

      <S.Nav>
        {/* <Link href="/" passHref={true}>
          <S.Anchor isActive={router.pathname === "/"}>Home</S.Anchor>
        </Link> */}

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

  .Header__loader {
    width: ${(p) => p.theme.size[96]};
    height: ${(p) => p.theme.size[96]};
    background-color: ${(p) => p.theme.color.primary.main};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1000px;
    box-shadow: ${(p) => p.theme.shadow.big};
    position: fixed;
    top: ${(p) => p.theme.size[32]};
    right: ${(p) => p.theme.size[96]};
    z-index: 100;

    > svg {
      fill: ${(p) => p.theme.color.white};
      width: ${(p) => p.theme.size[48]};
      height: ${(p) => p.theme.size[48]};
      animation-name: rotate;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      width: ${(p) => p.theme.size[64]};
      height: ${(p) => p.theme.size[64]};
      top: ${(p) => p.theme.size[32]};
      right: ${(p) => p.theme.size[24]};

      > svg {
        width: ${(p) => p.theme.size[24]};
        height: ${(p) => p.theme.size[24]};
      }
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
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
  display: inline-block;
  height: ${(p) => p.theme.size[48]};
  display: inline-flex;
  justify-content: center;
  align-items: center;

  ${(p) =>
    p.isActive &&
    css`
      color: ${(p) => p.theme.color.primary.dark};
      font-weight: 700;
    `}
`;

export default Header;
