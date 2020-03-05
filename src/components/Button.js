import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';

const APPEARANCES = {
  primary: '',
  secondary: 'bg-light-gray near-black',
  color: 'bg-washed-red red',
  outline: 'ba bg-transparent black',
  outlineColor: 'ba bg-transparent blue b--blue',
  none: 'bg-transparent black',
};

const SHAPES = {
  pill: 'br-pill',
  rect: '',
};

const SIZES = {
  inherit: 'ph3 pv2 fw1 mh2',
  tiny: 'bl br f8',
  small: 'ph1 pv1 f6 fw4',
  medium: 'ph3 pv3 f6 fw1',
};

const WIDTHS = {
  content: 'mh1 inline-flex',
  full: 'w-100 block',
};

const StyledButton = tachyons('a')`
  flex items-center justify-center
  white code 
  bg-black
  pointer
  dim
  boxFT

  ${props => APPEARANCES[props.appearance]}
  ${props => SHAPES[props.shape]}
  ${props => SIZES[props.size]}
  
  ${props => (props.disabled ? 'cur-na' : '')}
  ${props => (props.size === 'tiny' && props.shape === 'pill' ? 'bt bb b--black' : '')}
  ${props => (props.size === 'tiny' && props.appearance === 'outline' ? 'pa1' : '')}
  ${props => (props.size === 'tiny' && props.appearance === 'outlineColor' ? 'pa1' : '')}
  ${props => (props.isloading ? 'o-50 cur-progress' : '')}
  ${props => (props.disabled ? 'cur-na' : '')}
`;

const ButtonWrap = tachyons('div')`
  ${props => WIDTHS[props.width]}
`;

export function Button({
  children,
  wrapProps,
  toggled,
  toggleTo,
  isLoading,
  loadingText,
  isDisabled,
  width,
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
    <span className="boxFT" toggled={toggled ? 'true' : 'false'}>
      <ButtonWrap {...wrapProps} width={width}>
        <StyledButton isloading={isLoading ? 'true' : undefined} disabled={isDisabled} {...props}>
          {buttonInner}
        </StyledButton>
      </ButtonWrap>
    </span>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  appearance: PropTypes.oneOf(Object.keys(APPEARANCES)),
  width: PropTypes.oneOf(Object.keys(WIDTHS)),
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
  width: 'content',
  size: 'medium',
  shape: 'rect',
  wrapProps: { className: 'button-wrap' },
};
