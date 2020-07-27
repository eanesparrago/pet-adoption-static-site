import styled from "styled-components";
import Header from "./Header";

const S = {};

S.Layout = styled.div`
  height: 100%;
  padding-left: ${(p) => p.theme.size.pixel(384)};
  padding-right: ${(p) => p.theme.size.pixel(384)};

  display: flex;
  flex-flow: column;

  @media (max-width: ${(p) => p.theme.breakpoint.desktopXL}) {
    padding-left: ${(p) => p.theme.size.pixel(96)};
    padding-right: ${(p) => p.theme.size.pixel(96)};
  }

  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    padding-left: ${(p) => p.theme.size.pixel(24)};
    padding-right: ${(p) => p.theme.size.pixel(24)};
  }

  .Layout__paw-graphic {
    fill: ${(p) => p.theme.color.primary.main};
    opacity: 0.5;
    width: ${(p) => p.theme.size.pixel(512)};
    position: fixed;
    right: -${(p) => p.theme.size[48]};
    bottom: -${(p) => p.theme.size[48]};
    z-index: -100;
  }
`;

const Layout = ({ children, ...rest }) => {
  return (
    <S.Layout {...rest}>
      <Header></Header>

      {children}

      <svg
        className="Layout__paw-graphic"
        viewBox="0 0 512 449"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M256.005 193.003C176.596 193.003 64.007 315.761 64.007 393.251C64.007 428.15 90.8167 449 135.746 449C184.586 449 216.835 423.92 256.005 423.92C295.515 423.92 327.854 449 376.264 449C421.193 449 448.003 428.15 448.003 393.251C448.003 315.761 335.414 193.003 256.005 193.003ZM108.727 180.393C98.3266 145.743 66.287 123.303 37.1673 130.263C8.04759 137.223 -7.12225 170.953 3.27764 205.603C13.6775 240.252 45.7172 262.692 74.8369 255.732C103.957 248.772 119.126 215.042 108.727 180.393V180.393ZM193.446 159.613C224.385 151.473 239.865 109.674 228.025 66.254C216.185 22.8345 181.506 -5.7552 150.566 2.38472C119.626 10.5246 104.147 52.3242 115.986 95.7437C127.826 139.163 162.516 167.763 193.446 159.613ZM474.833 130.273C445.713 123.313 413.683 145.753 403.273 180.403C392.874 215.052 408.043 248.782 437.163 255.742C466.283 262.702 498.312 240.262 508.722 205.613C519.122 170.963 503.952 137.233 474.833 130.273V130.273ZM318.564 159.613C349.504 167.753 384.184 139.163 396.023 95.7437C407.863 52.3242 392.384 10.5346 361.444 2.38472C330.504 -5.7652 295.825 22.8345 283.985 66.254C272.145 109.674 287.625 151.473 318.564 159.613V159.613Z" />
      </svg>
    </S.Layout>
  );
};

export default Layout;
