import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';
import { ItemStats, SIZES } from './ItemStats';

const List = tachyons('ul')`
  flex
  flex-wrap flex-nowrap-l
  mw-100
  ma0 pa0 
  ba b--light-gray
  br2
`;

export function StatsList({ items, size }) {
  return (
    <List>
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
  items: PropTypes.arrayOf(PropTypes.shape(ItemStats.propTypes)).isRequired,
};

StatsList.defaultProps = {
  size: 'small',
};
