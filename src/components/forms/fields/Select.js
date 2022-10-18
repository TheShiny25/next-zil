import React from 'react';
import { useField } from 'formik';
import Select from 'react-dropdown-select';
import styled from 'styled-components';
import CaretDownIcon from '@svg/icons/caret--down.svg';
import breakpoints from '@css/breakpoints';

const Wrapper = styled.div`
  position: relative;
  padding-top: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 1.39rem;
  margin-bottom: 0.6rem;
`;

const StyledSelect = styled(Select)`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  font-size: 1.39rem;
  background: transparent;
  transition: border-color 180ms;
  box-shadow: none;

  ${breakpoints.phoneOnly} {
    font-size: 1.25rem;
  }

  && {
    padding: 1.39rem 1.66rem;

    &:focus,
    &:focus-within {
      outline: none;
      box-shadow: var(--black) 0 0 0 1px;
    }

    &:hover {
      border-color: black;
      box-shadow: var(--black) 0 0 0 1px;
    }

    &[aria-expanded='true'] {
      border-color: var(--black);
      box-shadow: var(--black) 0 0 0 1px;
      background: var(--white);
    }

    &:after {
      content: '';
      display: block;
      background: linear-gradient(to right, rgba(255, 255, 255, 0), white 45%);
      position: absolute;
      right: 0;
      top: 0;
      width: 5.5rem;
      height: 100%;
    }
  }

  .react-dropdown-select-content.react-dropdown-select-type-single {
    line-height: 1.28em;
  }

  .react-dropdown-select-dropdown {
    box-shadow: none;
    border: 2px solid var(--black);
    width: calc(100% + 4px);
    left: -2px;

    &.react-dropdown-select-dropdown-position-bottom {
      padding-top: 2px;
      top: -2px;
    }

    &.react-dropdown-select-dropdown-position-top {
      bottom: 100%;
      border-bottom: none;
      margin-bottom: -1.39rem;
    }
  }

  .react-dropdown-select-item {
    padding: 0.65rem 1.66rem;

    &:first-child {
      padding-top: 1.3rem;
    }

    &:last-child {
      padding-bottom: 1.3rem;
    }

    &.react-dropdown-select-item-selected {
      background: transparent;
      color: var(--black);
    }

    &:hover {
      background: var(--white);
      color: var(--red);
    }
  }

  .react-dropdown-select-input {
    &[placeholder=''] {
      display: none;
    }
  }
`;

const Caret = styled.span.attrs({
  children: <CaretDownIcon />,
})`
  display: block;
  position: absolute;
  top: 50%;
  right: 1.66rem;
  transform: translateY(-50%);
  width: 1rem !important;
  height: auto !important;
  pointer-events: none;
  transform-origin: center;
  transform: translateY(-50%) ${({ isFlipped }) => isFlipped && 'rotate(180deg)'};
  transition: transform 180ms;
  z-index: 100;
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const customSelectOptions = {
  searchable: false,
  dropdownGap: 0,
};

const CustomSelect = ({ label, options, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;

  return (
    <Wrapper>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <SelectWrapper>
        <StyledSelect
          {...field}
          {...customSelectOptions}
          {...props}
          dropdownHandleRenderer={({ state: { dropdown } }) => <Caret isFlipped={dropdown} />}
          onChange={(value) => setValue(value)}
          options={options}
        />
      </SelectWrapper>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </Wrapper>
  );
};

export default CustomSelect;
