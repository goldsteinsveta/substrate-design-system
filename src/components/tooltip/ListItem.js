import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';

export const APPEARANCES = {
  primary: 'bg-dark-gray white',
  secondary: 'bg-washed-red red',
  text: 'bg-white red',
};

const ItemWrapper = tachyons('li')`
  list dim
`;
const ItemInner = tachyons('span')`
  inline-flex items-center justify-between
  h2
  ${props => props.appearance && APPEARANCES[props.appearance]}
`;
const Item = tachyons('a')`inject-shadow`;

const Left = tachyons('span')`ph1`;
const Title = tachyons('span')`
  ${props => (props.appearance === 'text' ? 'ph1' : 'ph2')}
  code f5 fw1 truncate
`;
const Right = tachyons('span')`
  flex items-center justify-center
  w2 h2
  f3
  ${props => (props.appearance === 'primary' ? 'bg-black' : '')}
  ${props => (props.appearance === 'secondary' ? 'bg-light-red white' : '')}
  ${props => (props.appearance === 'text' ? 'bg-white' : '')}
`;

export function ListItem({ appearance, left, title, center, right, onClick, children }) {
  return (
    <ItemWrapper>
      <Item>
        <ItemInner appearance={appearance} onClick={onClick} role="presentation">
          {left && <Left>{left}</Left>}
          {title && <Title appearance={appearance}>{title}</Title>}
          {center && <Left>center</Left>}
          {right && <Right appearance={appearance}>{right}</Right>}
          {children}
        </ItemInner>
      </Item>
    </ItemWrapper>
  );
}

ListItem.propTypes = {
  appearance: PropTypes.oneOf(['primary', 'secondary', 'text']),
  left: PropTypes.node,
  title: PropTypes.node,
  center: PropTypes.node,
  right: PropTypes.node,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

ListItem.defaultProps = {
  appearance: 'primary',
  left: null,
  title: null,
  center: null,
  right: null,
  onClick: undefined,
  children: null,
};
