import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ItemStats, SIZES } from './ItemStats';
import { color } from './shared/styles';

const List = styled.ul`
  display: flex;
  min-width: 300px;
  border-radius: 4px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid ${color.mediumlight};
  display: flex;
  background: ${color.lighter};
`;

export function StatsList({ items, size }) {
  return (
    <List>
      {items.map(({ title, value, active }, index) => (
        <ItemStats
          /* eslint-disable react/no-array-index-key */
          key={index}
          title={title}
          value={value}
          active={active}
          size={size}
        />
      ))}
    </List>
  );
}

StatsList.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZES)),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string,
      active: PropTypes.bool,
    }).isRequired
  ).isRequired,
};

StatsList.defaultProps = {
  size: SIZES.SMALL,
};
