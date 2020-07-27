import { useState } from "react";
import styled from "styled-components";

import PillButton from "components/elements/PillButton";

const StyledFilterCompound = styled.div`
  > *:not(:last-child) {
    margin-right: ${(p) => p.theme.size[16]};
  }

  > * {
    margin-bottom: ${(p) => p.theme.size[16]};
  }
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
    <StyledFilterCompound {...rest}>
      {options.map((option) => (
        <PillButton
          type={activeFilter === option.key ? "primary" : "secondary"}
          key={option.key}
          name={option.key}
          onClick={handleFilterClick}
        >
          {option.text}
        </PillButton>
      ))}
    </StyledFilterCompound>
  );
};

export default FilterCompound;
