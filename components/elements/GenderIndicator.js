import React from "react";
import styled, { css } from "styled-components";

const StyledGenderIndicator = styled.figure`
  width: ${(p) => p.theme.size[48]};
  height: ${(p) => p.theme.size[48]};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.color.white};
  border-radius: 1000px;

  ${(p) =>
    (p.gender === "male" &&
      css`
        border: 2px solid ${(p) => p.theme.color.blue};
      `) ||
    (p.gender === "female" &&
      css`
        border: 2px solid ${(p) => p.theme.color.pink};
      `)}

  .GenderIndicator__svg {
    width: ${(p) => p.theme.size[24]};
    height: ${(p) => p.theme.size[24]};
  }

  .GenderIndicator__svg--male {
    fill: ${(p) => p.theme.color.blue};
  }

  .GenderIndicator__svg--female {
    fill: ${(p) => p.theme.color.pink};
  }
`;

const GenderIndicator = ({ gender = "male", ...rest }) => {
  return (
    <StyledGenderIndicator gender={gender} {...rest}>
      {(gender === "male" && (
        <svg
          className="GenderIndicator__svg GenderIndicator__svg--male"
          viewBox="0 0 25 25"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="gender_indicator"
        >
          <title id="gender_indicator">Male Gender</title>
          <path d="M24.0499 0.994385H19.1124C18.4437 0.994385 18.1124 1.80063 18.5812 2.27563L19.6374 3.33188L14.5937 8.37564C13.2062 7.50064 11.5624 6.99438 9.79993 6.99438C4.83118 6.99438 0.799927 11.0256 0.799927 15.9944C0.799927 20.9631 4.83118 24.9944 9.79993 24.9944C14.7687 24.9944 18.7999 20.9631 18.7999 15.9944C18.7999 14.2319 18.2937 12.5881 17.4187 11.2006L22.4624 6.15689L23.5187 7.21313C23.9937 7.68813 24.7999 7.35063 24.7999 6.68188V1.74438C24.7999 1.33188 24.4624 0.994385 24.0499 0.994385V0.994385ZM9.79993 20.9944C7.04368 20.9944 4.79993 18.7506 4.79993 15.9944C4.79993 13.2381 7.04368 10.9944 9.79993 10.9944C12.5562 10.9944 14.7999 13.2381 14.7999 15.9944C14.7999 18.7506 12.5562 20.9944 9.79993 20.9944Z" />
        </svg>
      )) ||
        (gender === "female" && (
          <svg
            className="GenderIndicator__svg GenderIndicator__svg--female"
            viewBox="0 0 18 29"
            aria-labelledby="gender_indicator"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id="gender_indicator">Female Gender</title>
            <path d="M18 9.19556C18 4.22681 13.9688 0.195557 9 0.195557C4.03125 0.195557 0 4.22681 0 9.19556C0 13.4768 2.99375 17.0643 7 17.9706V21.1956H4.75C4.3375 21.1956 4 21.5331 4 21.9456V24.4456C4 24.8581 4.3375 25.1956 4.75 25.1956H7V27.4456C7 27.8581 7.3375 28.1956 7.75 28.1956H10.25C10.6625 28.1956 11 27.8581 11 27.4456V25.1956H13.25C13.6625 25.1956 14 24.8581 14 24.4456V21.9456C14 21.5331 13.6625 21.1956 13.25 21.1956H11V17.9706C15.0062 17.0643 18 13.4768 18 9.19556V9.19556ZM4 9.19556C4 6.43931 6.24375 4.19556 9 4.19556C11.7562 4.19556 14 6.43931 14 9.19556C14 11.9518 11.7562 14.1956 9 14.1956C6.24375 14.1956 4 11.9518 4 9.19556Z" />
          </svg>
        ))}
    </StyledGenderIndicator>
  );
};

export default GenderIndicator;
