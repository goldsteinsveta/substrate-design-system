import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';
import { IconFont } from './IconFont';

const APPEARANCES = {
  primary: {
    Label: '',
    InputWrapper: 'ba b--washed-red',
  },
  secondary: {
    Label: '',
    InputWrapper: 'ba b--near-white bg-near-white',
  },
  text: {
    Label: '',
    InputWrapper: 'b--none',
  },
  code: {
    Label: 'code green',
    InputWrapper: 'ba b--transparent bg-dark-gray light-green',
  },
};

const SHAPES = {
  pill: '',
  rect: '',
};

const InputContainer = tachyons('div')`
  mb3
  ${props => props.wrapClass}
  ${props => (props.orientation === 'vertical' ? 'flex-column' : 'flex items-center')}
`;
const Label = tachyons('label')`
  fw6 f7 ph2
  ${props => props.appearance && APPEARANCES[props.appearance].Label}
  ${props => (props.hideLabel ? 'dn' : '')}
`;
const InputWrapper = tachyons('div')`
  inline-flex relative 
  w-100
  ma0 pa2
  ${props => props.appearance && APPEARANCES[props.appearance].InputWrapper}
  ${props => (props.shape === 'pill' ? 'br-pill' : '')}
`;
const InputText = tachyons('input')`
  input-reset
  w-100
  b--none bg-transparent dim
  ${props => (props.appearance === 'code' ? 'code' : '')}
  ${props => (props.disabled ? 'cur-na' : '')}
  ${props => (props.error !== null ? 'fw6 red' : '')}
  ${props => (props.center ? 'tc' : '')}
`;
const Error = tachyons('div')`
  absolute 
  flex items-center 
  h-100 right-1 top-0 bottom-0 
  f7 red
`;
const ErrorMessage = tachyons('span')`
  ${props => (props.appearance === 'code' ? 'code' : '')}
`;

export function Input({
  id,
  value,
  label,
  hideLabel,
  orientation,
  icon,
  error,
  appearance,
  wrapClass,
  lastErrorValue,
  center,
  shape,
  ...props
}) {
  const errorId = `${id}-error`;
  let errorMessage = error;
  if (lastErrorValue) {
    if (value !== lastErrorValue) {
      errorMessage = null;
    }
  }

  return (
    <InputContainer orientation={orientation} appearance={appearance} wrapClass={wrapClass}>
      <Label htmlFor={id} appearance={appearance} hideLabel={hideLabel}>
        {label}
      </Label>
      <InputWrapper
        error={errorMessage}
        data-error={error}
        icon={icon}
        appearance={appearance}
        shape={shape}
      >
        {icon && <IconFont size="small" icon={icon} aria-hidden mr2 />}
        <InputText
          type="text"
          id={id}
          value={value}
          aria-describedby={errorId}
          aria-invalid={!!error}
          appearance={appearance}
          error={error}
          center={center}
          {...props}
        />
        <Error id={errorId}>
          <ErrorMessage appearance={appearance}>{error}</ErrorMessage>
        </Error>
      </InputWrapper>
    </InputContainer>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  appearance: PropTypes.oneOf(Object.keys(APPEARANCES)),
  shape: PropTypes.oneOf(Object.keys(SHAPES)),
  center: PropTypes.bool,
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  icon: PropTypes.string,
  error: PropTypes.string,
  lastErrorValue: PropTypes.string,
  focused: PropTypes.bool,
  wrapClass: PropTypes.string,
};

Input.defaultProps = {
  value: '',
  appearance: 'primary',
  shape: 'rect',
  hideLabel: false,
  orientation: 'vertical',
  icon: null,
  error: null,
  focused: false,
  lastErrorValue: null,
  center: false,
  wrapClass: null,
};
