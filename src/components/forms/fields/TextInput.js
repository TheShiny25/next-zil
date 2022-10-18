/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useField } from 'formik';
import styled from 'styled-components';
import CheckIcon from '@svg/icons/check--circle.svg';
import CrossIcon from '@svg/icons/cross--circle.svg';
import ErrorMessage from './ErrorMessage';

const Wrapper = styled.div`
  position: relative;
  padding-top: 1.5rem;
  padding-bottom: 1.7rem;
`;

const Label = styled.label`
  display: block;
  position: absolute;
  pointer-events: none;
  transition: transform 180ms, font-size 180ms;
  transform-origin: left bottom;
  font-size: ${({ isPlaceholder }) => (isPlaceholder ? '1.39rem' : '0.77rem')};
  transform: translateY(${({ isPlaceholder }) => (isPlaceholder ? 0 : 'calc(-100% - .25rem)')});
`;

const StyledInput = styled.input`
  background: transparent;
  width: 100%;
  border: none;
  border-bottom: 1px solid
    ${({ validation }) =>
      validation ? (validation === 'valid' ? 'var(--black)' : 'var(--red)') : 'rgba(0, 0, 0, 0.3)'};
  font-size: 1.39rem;
  font-weight: bold;
  transition: border-color 180ms;

  &[type] {
    padding-bottom: 0.17rem;
  }

  &:-webkit-autofill {
    &::first-line {
      font-family: 'Circular', sans-serif;
      font-weight: bold;
      font-size: 1.39rem;
    }
    transition: background-color 31536000s;
  }

  &::selection {
    background: black;
    color: white;
  }

  &:hover {
    border-width: 2px;
    border-color: ${({ validation }) => (validation === 'invalid' ? 'var(--red)' : 'var(--black)')};
    margin-bottom: -1px;
  }

  &:focus {
    outline: none;
    border-width: 2px;
    border-color: black;
    margin-bottom: -1px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

const ValidationIcon = styled.span.attrs(({ status }) => ({
  children: status === 'valid' ? <CheckIcon /> : <CrossIcon />,
}))`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-65%);
  width: calc(22rem / 18);
  height: calc(22rem / 18);

  ${({ status }) => status === 'invalid' && 'color: var(--red);'}

  svg {
    width: 100%;
    height: 100%;
  }
`;

const TextInput = ({ label, ...props }) => {
  const [inputHasFocus, setInputHasFocus] = useState(false);
  const [field, meta, helpers] = useField(props);
  const { setTouched } = helpers;

  const handleInputFocus = () => {
    setInputHasFocus(true);
  };

  const handleInputBlur = () => {
    setInputHasFocus(false);
    setTouched(true, true);
  };

  return (
    <Wrapper>
      <Label htmlFor={props.id || props.name} isPlaceholder={!inputHasFocus && field.value?.length === 0}>
        {label}
      </Label>
      <InputWrapper>
        <StyledInput
          {...field}
          {...props}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          validation={meta.touched && (meta.error ? 'invalid' : 'valid')}
        />
        {meta.touched && <ValidationIcon status={meta.error ? 'invalid' : 'valid'} />}
      </InputWrapper>
      {meta.touched && meta.error ? <ErrorMessage>{meta.error}</ErrorMessage> : null}
    </Wrapper>
  );
};

export default TextInput;
