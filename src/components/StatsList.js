import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ItemStats } from './ItemStats';
import { color } from './shared/styles';

const List = styled.ul`
  display: flex;
  min-width: 180px;
  border-radius: 4px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid ${color.mediumlight};
  display: flex;
`;

export function StatsList({ items }) {
  return (
    <List>
      {items.map(({ title, value, onClick, active }, index) => (
        <ItemStats
          /* eslint-disable react/no-array-index-key */
          key={index}
          title={title}
          value={value}
          onClick={onClick}
          active={active}
        />
      ))}
    </List>
  );
}

StatsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string,
      onClick: PropTypes.func,
      active: PropTypes.bool,
    }).isRequired
  ).isRequired,
};

StatsList.defaultProps = {};
