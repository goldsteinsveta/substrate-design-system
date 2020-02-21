import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';

export const BORDERS = {
  light: 'ba b--light-gray br2',
  none: '',
};

const List = tachyons('ul')`
  flex
  mw-100-l
  ma0 pa0 
  ${props => BORDERS[props.border]}
`;

export function FlexList({ border, children }) {
  return <List border={border}>{children}</List>;
}

FlexList.propTypes = {
  children: PropTypes.node.isRequired,
  border: PropTypes.oneOf(Object.keys(BORDERS)),
};

FlexList.defaultProps = {
  border: 'light',
};
