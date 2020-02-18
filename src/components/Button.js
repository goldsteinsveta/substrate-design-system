import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';

const APPEARANCES = {
  primary: '',
  secondary: 'bg-light-gray near-black',
  outline: 'ba bg-transparent black',
};

const SHAPES = {
  pill: 'br-pill',
  rect: '',
};

const SIZES = {
  tiny: 'bl br b--black f8',
  small: 'ph1 pv1 f6 fw4',
  medium: 'ph3 pv3 f5 fw6',
};

const StyledButton = tachyons('a')`
  flex items-center
  white code 
  bg-black
  pointer
  dim
  boxFT

  ${props => APPEARANCES[props.appearance]}
  ${props => (props.disabled ? 'cur-na' : '')}
  ${props => SHAPES[props.shape]}
  ${props => SIZES[props.size]}
  ${props => (props.size === 'tiny' && props.shape === 'pill' ? 'bt bb' : '')}
  ${props => (props.size === 'tiny' && props.appearance === 'outline' ? 'pa1' : '')}
  ${props => (props.isloading ? 'o-50 cur-progress' : '')}
  ${props => (props.disabled ? 'cur-na' : '')}
`;

const ButtonWrap = tachyons('div')`inline-flex mh1`;

export function Button({
  children,
  wrapProps,
  toggled,
  toggleTo,
  isLoading,
  loadingText,
  isDisabled,
  ...props
}) {
  let buttonInner = !isLoading ? children : loadingText || 'Loading...';

  if (toggleTo !== Button.defaultProps.toggleTo) {
    buttonInner = (
      <>
        <div className="F">{buttonInner}</div>
        <div className="T">{toggleTo}</div>
      </>
    );
  }

  return (
    <div className="boxFT" toggled={toggled.toString()}>
      <ButtonWrap {...wrapProps}>
        <StyledButton isloading={isLoading} disabled={isDisabled} {...props}>
          {buttonInner}
        </StyledButton>
      </ButtonWrap>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  appearance: PropTypes.oneOf(Object.keys(APPEARANCES)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  shape: PropTypes.oneOf(Object.keys(SHAPES)),
  toggled: PropTypes.bool,
  toggleTo: PropTypes.node,
  isLoading: PropTypes.bool,
  loadingText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isDisabled: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  wrapProps: PropTypes.object,
};

Button.defaultProps = {
  isLoading: false,
  loadingText: 'Loading...',
  appearance: 'primary',
  toggled: false,
  toggleTo: '',
  isDisabled: false,
  size: 'medium',
  shape: 'rect',
  wrapProps: { className: 'button-wrap' },
};
