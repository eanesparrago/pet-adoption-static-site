import styled from "styled-components";

const S = {};

S.SpecialIndicator = styled.figure``;

const SpecialIndicator = ({ petType, ...rest }) => {
  const petTypeCapitalized = petType.charAt(0).toUpperCase() + petType.slice(1);

  return (
    <S.SpecialIndicator {...rest}>
      <svg
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="special_indicator"
      >
        <title id="gender_indicator">Special Needs {petTypeCapitalized}</title>

        <g clipPath="url(#clip0)">
          <path
            d="M28.8937 4.4125C25.4687 1.49375 20.3749 2.01875 17.2312 5.2625L15.9999 6.53125L14.7687 5.2625C11.6312 2.01875 6.53116 1.49375 3.10616 4.4125C-0.818838 7.7625 -1.02509 13.775 2.48741 17.4062L14.5812 29.8937C15.3624 30.7 16.6312 30.7 17.4124 29.8937L29.5062 17.4062C33.0249 13.775 32.8187 7.7625 28.8937 4.4125V4.4125Z"
            fill="#F44336"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="32"
              height="32"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </S.SpecialIndicator>
  );
};

export default SpecialIndicator;
