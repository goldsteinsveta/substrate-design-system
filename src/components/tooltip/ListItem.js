import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';

export const APPEARANCES = {
  primary: {
    ItemInner: 'bg-dark-gray white',
    Title: 'ph2',
    Right: 'bg-black',
  },
  secondary: {
    ItemInner: 'bg-washed-red red',
    Title: 'ph2',
    Right: 'bg-light-red white',
  },
  text: {
    ItemInner: 'bg-white red',
    Title: 'ph1',
    Right: 'bg-white',
  },
};

const ItemWrapper = tachyons('li')`
  list dim
`;
const ItemInner = tachyons('span')`
  inline-flex items-center justify-between
  h2
  ${props => props.appearance && APPEARANCES[props.appearance].ItemInner}
`;
const Item = tachyons('a')`inject-shadow`;
const Left = tachyons('span')`ph1`;
const Title = tachyons('span')`
  ${props => props.appearance && APPEARANCES[props.appearance].Title}
  code f5 fw1 truncate
`;
const Right = tachyons('span')`
  flex items-center justify-center
  w2 h2
  f3
  ${props => props.appearance && APPEARANCES[props.appearance].Right}
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
