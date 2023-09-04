import React from 'react';
import styled from 'styled-components';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  // Add more props as needed
}

const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  /* Add more styling here */
`;

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, className }) => {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};

export default Input;
