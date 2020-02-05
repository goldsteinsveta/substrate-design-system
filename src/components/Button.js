import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';

const APPEARANCES = {
  secondary: 'bg-light-gray gray',
  outline: 'ba bg-transparent black',
};

const SHAPES = {
  pill: 'br-pill',
};

const SIZES = {
  tiny: 'bl br b--black',
  small: 'ph2 pv2 f7 fw4',
  medium: 'ph3 pv3 f6 fw6',
};

// TODO HOVERS

const StyledButtonX = tachyons('a')`
  inline-flex items-center
  white code 
  bg-black
  ${props => APPEARANCES[props.appearance]}
  ${props => SHAPES[props.shape]}
  ${props => SIZES[props.size]}
  ${props => (props.isLoading ? 'o-50 cur-progress' : '')}
  ${props => (props.disabled ? 'cur-na' : '')}
`;

export function Button({ isDisabled, isLoading, loadingText, children, ...props }) {
  const buttonInner = !isLoading ? children : loadingText || 'Loading...';

  return (
    <StyledButtonX isLoading={isLoading} disabled={isDisabled} {...props}>
      {buttonInner}
    </StyledButtonX>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  appearance: PropTypes.oneOf(Object.keys(APPEARANCES)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  shape: PropTypes.oneOf(Object.keys(SHAPES)),
  isLoading: PropTypes.bool,
  loadingText: PropTypes.node,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  isLoading: false,
  loadingText: null,
  appearance: APPEARANCES.PRIMARY,
  isDisabled: false,
  size: 'medium',
  shape: '',
};
