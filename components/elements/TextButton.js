import styled from "styled-components";

const TextButton = ({ children, ...rest }) => {
  return <S.TextButton {...rest}>{children}</S.TextButton>;
};

const S = {};

S.TextButton = styled.button`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  height: ${(p) => p.theme.size[48]};
  font-weight: 700;
  font-size: 1.1875rem;
  color: ${(p) => p.theme.color.primary.main};
`;

export default TextButton;
