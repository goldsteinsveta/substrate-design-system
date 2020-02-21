import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';

const List = tachyons('ul')`
  flex
  mw-100
  ma0 pa0 
  ba b--light-gray
  br2
`;

export function FlexList({ children }) {
  return <List>{children}</List>;
}

FlexList.propTypes = {
  children: PropTypes.node.isRequired,
};

FlexList.defaultProps = {};
