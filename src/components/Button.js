import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';

const APPEARANCES = {
  secondary: 'bg-light-gray gray',
  outline: 'ba bg-transparent black',
};

const SHAPES = {
  pill: 'br-pill',
  rect: '',
};

const SIZES = {
  tiny: 'bl br b--black',
  small: 'ph2 pv2 f7 fw4',
  medium: 'ph3 pv3 f6 fw6',
};

const StyledButton = tachyons('a')`
  flex items-center
  mh1
  white code 
  bg-black
  dim pointer
  ${props => APPEARANCES[props.appearance]}
  ${props => (props.disabled ? 'cur-na' : '')}
  ${props => SHAPES[props.shape]}
  ${props => SIZES[props.size]}
  ${props => (props.size === 'tiny' && props.shape === 'pill' ? 'bt bb' : '')}
  ${props => (props.isLoading ? 'o-50 cur-progress' : '')}
  ${props => (props.disabled ? 'cur-na' : '')}
`;

const ButtonWrap = tachyons('div')`inline-flex`;

export function Button({ wrapProps, isDisabled, isLoading, loadingText, children, ...props }) {
  const buttonInner = !isLoading ? children : loadingText || 'Loading...';

  return (
    <ButtonWrap {...wrapProps}>
      <StyledButton isLoading={isLoading} disabled={isDisabled} {...props}>
        {buttonInner}
      </StyledButton>
    </ButtonWrap>
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
  wrapProps: PropTypes.shape,
};

Button.defaultProps = {
  isLoading: false,
  loadingText: null,
  appearance: APPEARANCES.PRIMARY,
  isDisabled: false,
  size: 'medium',
  shape: 'rect',
  wrapProps: { className: 'button-wrap' },
};
