import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';

export const SIZES = {
  small: 'f5',
  large: 'f3',
};

const Value = tachyons('div')`
  mt1 fw6
  ${props => props.size && SIZES[props.size]}
`;
const Subtitle = tachyons('span')`
  f6 silver
`;
const Title = tachyons('span')`
  f7 code
`;
const ItemInner = tachyons('li')`
  w-100 w-50-m
  list 
  ph3 pv2
  br bb b--light-gray
`;

export function ItemStats({ title, value, subtitle, size, onClick }) {
  return (
    <ItemInner onClick={onClick} role="presentation">
      <Title size={size}>{title}</Title>
      <Value size={size}>{value}</Value>
      <Subtitle size={size}>{subtitle}</Subtitle>
    </ItemInner>
  );
}

ItemStats.propTypes = {
  // TODO: isLoading
  // isLoading: PropTypes.bool,
  title: PropTypes.node,
  value: PropTypes.string,
  subtitle: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  onClick: PropTypes.func,
};

ItemStats.defaultProps = {
  // isLoading: false,
  title: <span>Loading</span>,
  value: '',
  subtitle: '',
  size: SIZES.SMALL,
  onClick: undefined,
};
