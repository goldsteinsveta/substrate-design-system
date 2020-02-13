import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';

// TODO: unify sizes
export const sizes = {
  large: 56,
  medium: 32,
  small: 24,
  tiny: 16,
};

const LIBRARIES = {
  FA: 'fa',
  WEB3: 'web3',
};

const I = tachyons('i')`
  items-center justify-center
  ${props => (props.size === 'tiny' ? 'f7' : '')}
  ${props => (props.size === 'small' ? 'f3' : '')}
  ${props => (props.size === 'medium' ? 'f1' : '')}
  ${props => (props.size === 'large' ? 'f-6' : '')}
  ${props => (props.block === 'true' ? 'flex' : 'inline-flex')}
`;

export function IconFont({ icon, block, lib, ...props }) {
  const libClass = lib === LIBRARIES.WEB3 ? '-web3' : '';
  return <I block={block.toString()} {...props} className={`fa fa${libClass}-${icon}`} />;
}

IconFont.propTypes = {
  icon: PropTypes.string.isRequired,
  block: PropTypes.bool,
  size: PropTypes.string,
  lib: PropTypes.oneOf(Object.values(LIBRARIES)),
  color: PropTypes.string,
};

IconFont.defaultProps = {
  block: false,
  size: '',
  lib: 'fa',
  color: 'black',
};
