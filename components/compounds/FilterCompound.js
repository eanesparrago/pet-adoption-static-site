import { useState } from "react";
import styled, { css } from "styled-components";

import PillButton from "components/elements/PillButton";

const S = {};

S.FilterCompound = styled.div`
  > *:not(:last-child) {
    margin-right: ${(p) => p.theme.size[16]};
  }

  > * {
    margin-bottom: ${(p) => p.theme.size[16]};
  }
`;

S.PillButton = styled(PillButton)`
  ${(p) =>
    p.isActive &&
    css`
      cursor: initial;
    `}
`;

export const useFilterCompound = (options) => {
  const [activeFilter, setActiveOption] = useState(options[0].key);

  const handleClick = (e) => {
    setActiveOption(e.target.name);
  };

  return [activeFilter, handleClick];
};

const FilterCompound = ({
  options,
  activeFilter,
  handleFilterClick,
  ...rest
}) => {
  return (
    <S.FilterCompound {...rest}>
      {options.map((option) => (
        <S.PillButton
          isActive={activeFilter === option.key}
          type={activeFilter === option.key ? "primary" : "secondary"}
          key={option.key}
          name={option.key}
          onClick={handleFilterClick}
        >
          {option.text}
        </S.PillButton>
      ))}
    </S.FilterCompound>
  );
};

export default FilterCompound;
