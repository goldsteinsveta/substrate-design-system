import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

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

const I = styled.i`
  display: ${props => (props.block ? 'block' : 'inline-block')};
  font-size: 1em;

  ${props =>
    props.size &&
    css`
      font-size: ${sizes[props.size]}px;
    `}
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

export function IconFont({ icon, block, lib, ...props }) {
  const libClass = lib === LIBRARIES.WEB3 ? '-web3' : '';
  return <I block={block} {...props} className={`fa fa${libClass}-${icon}`} />;
}

IconFont.propTypes = {
  icon: PropTypes.string.isRequired,
  block: PropTypes.bool,
  size: PropTypes.string,
  lib: PropTypes.oneOf(Object.values(LIBRARIES)),
};

IconFont.defaultProps = {
  block: false,
  size: '',
  lib: 'fa',
};
