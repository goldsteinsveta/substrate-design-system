import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';

export const SIZES = {
  small: 'f4 fw1',
  large: 'f3 fw6',
};
export const COLORS = {
  light: 'bg-near-white b--moon-gray',
  dark: 'bg-dark-gray white b--dark-gray',
};
export const WIDTHS = {
  even: 'w-100',
  measure: 'w4',
  min: 'w1',
};

const Title = tachyons('div')`
  flex items-center justify-between
  f7 code fw1
`;
const Value = tachyons('div')`
  flex items-center justify-between mt1 mb3
  ${props => props.size && SIZES[props.size]}
`;
const Subtitle = tachyons('span')`
  flex items-center justify-between
  f6 silver
`;
const ItemInner = tachyons('li')`
  flex flex-column
  ${props => props.width && WIDTHS[props.width]}
  list 
  ph3 pv2
  br bb
  ${props => COLORS[props.theme]}
`;

export function ItemStats({ width, children, title, value, subtitle, size, theme, onClick }) {
  return (
    <ItemInner onClick={onClick} role="presentation" theme={theme} width={width}>
      {children && <div className="flex items-center">{children}</div>}
      <div>
        {title && <Title size={size}>{title}</Title>}
        {value && <Value size={size}>{value}</Value>}
      </div>
      {subtitle && <Subtitle size={size}>{subtitle}</Subtitle>}
    </ItemInner>
  );
}

ItemStats.propTypes = {
  // TODO: isLoading
  // isLoading: PropTypes.bool,
  title: PropTypes.string,
  value: PropTypes.node,
  subtitle: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  onClick: PropTypes.func,
  children: PropTypes.node,
  theme: PropTypes.oneOf(Object.keys(COLORS)),
  width: PropTypes.oneOf(Object.keys(WIDTHS)),
};

ItemStats.defaultProps = {
  // isLoading: false,
  title: null,
  value: null,
  subtitle: null,
  size: 'large',
  onClick: undefined,
  children: null,
  theme: 'light',
  width: 'even',
};
