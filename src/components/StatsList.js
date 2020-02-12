import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';
import { ItemStats } from './ItemStats';

const SIZES = {
  small: 'f5',
  large: 'f3',
};

const List = tachyons('ul')`
  flex
  mw-100
  ma0 pa0 
  ba b--light-gray
  br2
  ${props => (props.size === 'small' ? 'flex-nowrap' : 'flex-wrap flex-nowrap-l')}
`;

export function StatsList({ items, size }) {
  return (
    <List size={size}>
      {items.map(({ title, value, subtitle, onClick }, index) => (
        <ItemStats
          /* eslint-disable react/no-array-index-key */
          key={index}
          title={title}
          value={value}
          subtitle={subtitle}
          size={size}
          onClick={onClick}
        />
      ))}
    </List>
  );
}

StatsList.propTypes = {
  size: PropTypes.oneOf(Object.keys(SIZES)),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node,
      value: PropTypes.string,
      subtitle: PropTypes.string,
      size: PropTypes.oneOf(Object.keys(SIZES)),
      onClick: PropTypes.func,
    })
  ).isRequired,
};

StatsList.defaultProps = {
  size: 'small',
};
