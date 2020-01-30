import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const sizes = {
  large: 40,
  medium: 28,
  small: 20,
  tiny: 11,
};

const LIBRARIES = {
  FA: 'fa',
  WEB3: 'web3',
};

const I = styled.i`
  display: ${props => (props.block ? 'block' : 'inline-block')};
  font-size: ${sizes.medium}px;
  width: 1em;
  height: 1em;

  ${props =>
    props.size === 'tiny' &&
    css`
      font-size: ${sizes.tiny}px;
    `}
  ${props =>
    props.size === 'small' &&
    css`
      font-size: ${sizes.small}px;
    `}
  ${props =>
    props.size === 'large' &&
    css`
      font-size: ${sizes.large}px;
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
  size: 'large',
  lib: 'fa',
};
