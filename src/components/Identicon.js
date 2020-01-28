import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { color, typography } from './shared/styles';
import { glow } from './shared/animation';
import { IconWeb3 } from './IconWeb3';

export const sizes = {
  large: 40,
  medium: 28,
  small: 20,
  tiny: 16,
};

const Image = styled.div`
  background: ${props => (!props.isLoading ? 'transparent' : color.light)};
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  text-transform: uppercase;

  height: ${sizes.large}px;
  width: ${sizes.large}px;
  line-height: ${sizes.large}px;

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
    props.size === 'medium' &&
    css`
      height: ${sizes.medium}px;
      width: ${sizes.medium}px;
      line-height: ${sizes.medium}px;
    `}

  ${props =>
    !props.src &&
    css`
      background: ${!props.isLoading && '#37D5D3'};
    `}

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  i {
    animation: ${glow} 1.5s ease-in-out infinite;
  }
`;

// prettier-ignore
const Initial = styled.div`
  color: ${color.lightest};
  text-align: center;

  font-size: ${typography.size.s2}px;
  line-height: ${sizes.medium}px;

  ${props => props.size === "tiny" && css`
    font-size: ${typography.size.s1 - 2}px;
    line-height: ${sizes.tiny}px;
  `}

  ${props => props.size === "small" && css`
    font-size: ${typography.size.s1}px;
    line-height: ${sizes.small}px;
  `}

  ${props => props.size === "large" && css`
    font-size: ${typography.size.s3}px;
    line-height: ${sizes.large}px;
  `}
`;

/**
 * The `Identicon` component is where all your avatars come to play.
 */
export function Identicon({ isLoading, username, src, size, ...props }) {
  let identiconFigure = <IconWeb3 size={size} icon="identicon" />;
  const a11yProps = {};

  if (isLoading) {
    a11yProps['aria-busy'] = true;
    a11yProps['aria-label'] = 'Loading avatar ...';
  } else if (src) {
    identiconFigure = <img src={src} alt={username} />;
  } else {
    a11yProps['aria-label'] = username;
    identiconFigure = (
      <Initial size={size} aria-hidden="true">
        {username.substring(0, 1)}
      </Initial>
    );
  }

  return (
    <Image size={size} isLoading={isLoading} src={src} {...a11yProps} {...props}>
      {identiconFigure}
    </Image>
  );
}

Identicon.propTypes = {
  isLoading: PropTypes.bool,
  /**
   The name of the user (not the nicename)
  */
  username: PropTypes.string,
  src: PropTypes.string,
  /**
   Specify size
  */
  size: PropTypes.oneOf(Object.keys(sizes)),
};

Identicon.defaultProps = {
  isLoading: false,
  username: 'loading',
  src: null,
  size: 'large',
};
