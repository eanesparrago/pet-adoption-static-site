import styled, { css } from "styled-components";

const StyledPillButton = styled.button`
  display: inline-block;
  height: ${(p) => p.theme.size[48]};
  padding: 0 ${(p) => p.theme.size[32]};
  border-radius: 1000px;
  font-size: 1.1875rem;
  font-weight: 600;
  box-shadow: ${(p) => p.theme.shadow.small};

  ${(p) =>
    (true || p.type === "primary") &&
    css`
      background-color: ${(p) => p.theme.color.primary.dark};
      color: ${(p) => p.theme.color.white};
      border: 2px solid ${(p) => p.theme.color.primary.dark};
    `}

  ${(p) =>
    p.type === "secondary" &&
    css`
      background-color: unset;
      color: ${(p) => p.theme.color.primary.main};
      border: 2px solid ${(p) => p.theme.color.primary.main};
    `}
`;

const PillButton = ({ type, children, ...rest }) => {
  return (
    <StyledPillButton type={type} {...rest}>
      {children}
    </StyledPillButton>
  );
};

export default PillButton;
