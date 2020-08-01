import styled from "styled-components";

const PawsLogo = (props) => {
  return (
    <S.PawsLogo src="/static/images/paws_logo.png" alt="PAW logo" {...props} />
  );
};

const S = {};

S.PawsLogo = styled.img`
  width: ${(p) => p.theme.size.pixel(128)};

  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    margin-bottom: ${(p) => p.theme.size[32]};
  }
`;

export default PawsLogo;
