import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';

// TODO: unify sizes
export const sizes = {
  large: 'f-6',
  medium: 'f2',
  small: 'f4',
  tiny: 'f7',
};

const LIBRARIES = {
  FA: 'fa',
  WEB3: 'web3',
};

const I = tachyons('i')`
  items-center justify-center
  
  ${props => (props.size ? sizes[props.size] : '')}
  ${props => (props.block === 'true' ? 'flex' : 'inline-flex')}
`;

export function IconFont({ icon, block, lib, ...props }) {
  const libClass = lib === LIBRARIES.WEB3 ? '-web3' : '';
  return <I block={block.toString()} {...props} className={`fa fa${libClass}-${icon}`} />;
}

IconFont.propTypes = {
  icon: PropTypes.string.isRequired,
  lib: PropTypes.oneOf(Object.values(LIBRARIES)),
  block: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'medium', 'small', 'tiny']),
  color: PropTypes.string,
};

IconFont.defaultProps = {
  lib: 'fa',
  block: false,
  size: '',
  color: 'black',
};
