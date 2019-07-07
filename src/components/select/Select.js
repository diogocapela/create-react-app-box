import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import theme from '../../theme';

const SelectElement = styled.select`
  align-items: center;
  justify-content: center;
  display: inline-flex;
  padding: 0 1rem;
  color: ${theme.colors.white};
  background: ${theme.colors.black};
  min-width: 15rem;
  height: 5rem;
  border: 0.1rem solid black;
  border-radius: 0.4rem;
  letter-spacing: 0.05rem;
  transition: all 0.2s ease-in;

  &:hover {
    color: ${theme.colors.black};
    background: ${theme.colors.white};
  }
`;

const Option = styled.option``;

const Select = ({ options = [], ...remainingProps }) => {
  return (
    <SelectElement {...remainingProps}>
      {options.map(({ label, value }, i) => (
        <Option key={i} value={value}>
          {label}
        </Option>
      ))}
    </SelectElement>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string.isRequired,
    })
  ),
};

export default Select;
