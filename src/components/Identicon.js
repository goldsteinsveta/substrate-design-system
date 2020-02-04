import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color } from './shared/styles';
import { glow } from './shared/animation';
import { IconFont } from './IconFont';

// TODO: unify w sizes from IconFont
export const sizes = {
  large: 56,
  medium: 32,
  small: 24,
  tiny: 16,
};

const Image = styled.div`
  background: ${color.light};
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  text-transform: uppercase;

  height: ${sizes.medium}px;
  width: ${sizes.medium}px;
  line-height: ${sizes.medium}px;

  ${props =>
    props.size === 'tiny' &&
    css`
      height: ${sizes.tiny}px;
      width: ${sizes.tiny}px;
      line-height: ${sizes.tiny}px;
    `}

  ${props =>
    props.size === 'small' &&
    css`
      height: ${sizes.small}px;
      width: ${sizes.small}px;
      line-height: ${sizes.small}px;
    `}

  ${props =>
    props.size === 'large' &&
    css`
      height: ${sizes.large}px;
      width: ${sizes.large}px;
      line-height: ${sizes.large}px;
    `}

  ${props =>
    props.isLoading &&
    css`
      animation: ${glow} 1.5s ease-in-out infinite;
    `}
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
    <Image size={size} isLoading={isLoading}>
      {identiconFigure}
    </Image>
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
