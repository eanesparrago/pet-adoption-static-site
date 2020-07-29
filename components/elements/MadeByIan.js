import styled from "styled-components";

const S = {};

S.MadeByIan = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${(p) => p.theme.size[16]};
  height: ${(p) => p.theme.size[48]};
  background-color: ${(p) => p.theme.color.primary.dark};
  color: ${(p) => p.theme.color.white};
  font-family: ${(p) => p.theme.font.serif};
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1000;
`;

const MadeByIan = () => {
  return (
    <S.MadeByIan
      href="https://github.com/iansanwich/practice-202007-paw_adoption"
      target="_blank"
    >
      Made By Ian
    </S.MadeByIan>
  );
};

export default MadeByIan;
