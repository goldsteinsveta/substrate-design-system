import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';

export const BORDERS = {
  light: 'b--light-gray',
  none: '',
};

const List = tachyons('ul')`
  flex
  mw-100
  ma0 pa0 
  ba
  br2
  ${props => BORDERS[props.border]}
`;

export function FlexList({ border, children }) {
  return <List border={border}>{children}</List>;
}

FlexList.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  border: PropTypes.oneOf(Object.keys(BORDERS)),
};

FlexList.defaultProps = {
  border: 'light',
};
