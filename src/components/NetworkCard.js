import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ItemStats } from './ItemStats';

const List = styled.ul`
  display: flex;
  min-width: 180px;
  border-radius: 4px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export function NetworkCard({ links, LinkWrapper, ...rest }) {
  return (
    <List {...rest}>
      {links.map(({ title, value, onClick, active, ...linkRest }, index) => (
        <ItemStats
          /* eslint-disable react/no-array-index-key */
          key={index}
          title={title}
          value={value}
          onClick={onClick}
          active={active}
          LinkWrapper={LinkWrapper || null}
          {...linkRest}
        />
      ))}
    </List>
  );
}

NetworkCard.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string,
      onClick: PropTypes.func,
      active: PropTypes.bool,
    }).isRequired
  ).isRequired,
  LinkWrapper: PropTypes.func,
};

NetworkCard.defaultProps = {
  LinkWrapper: ItemStats.defaultProps.LinkWrapper,
};
