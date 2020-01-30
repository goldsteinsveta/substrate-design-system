import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const sizes = {
  large: 40,
  medium: 28,
  small: 20,
  tiny: 16,
};

const I = styled.i`
  display: ${props => (props.block ? 'block' : 'inline-block')};
  font-size: ${sizes.medium}px;

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

export function IconWeb3({ icon, block, ...props }) {
  return <I block={block} {...props} className={`fa-web3-${icon}`} />;
}

IconWeb3.propTypes = {
  icon: PropTypes.string.isRequired,
  block: PropTypes.bool,
  size: PropTypes.string,
};

IconWeb3.defaultProps = {
  block: false,
  size: 'large',
};
