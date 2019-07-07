import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const InputElement = styled.input``;

const Input = ({
  type = 'text',
  placeholder,
  required,
  disabled,
  ...remainingProps
}) => {
  return (
    <InputElement
      type={type}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      {...remainingProps}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Input;
