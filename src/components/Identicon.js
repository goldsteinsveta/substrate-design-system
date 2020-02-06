import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';
import { IconFont } from './IconFont';

// TODO: unify w sizes from IconFont
export const sizes = {
  large: 56,
  medium: 32,
  small: 24,
  tiny: 16,
};
const Box = tachyons('div')`
  inline-flex br-100
  justify-center overflow-hidden
  bg-near-white
`;

export function Identicon({ isLoading, size }) {
  const identiconFigure = <IconFont lib="web3" size={size} icon="identicon" />;
  const a11yProps = {};

  if (isLoading) {
    a11yProps['aria-busy'] = true;
    a11yProps['aria-label'] = 'Loading identicon ...';
  }

  // TODO: address ? generate identicon
  //  let identiconFigure
  //  identiconFigure = generate(address, network);

  return (
    <Box size={size} isLoading={isLoading}>
      {identiconFigure}
    </Box>
  );
}

Identicon.propTypes = {
  isLoading: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(sizes)),
};

Identicon.defaultProps = {
  isLoading: false,
  size: 'medium',
};
