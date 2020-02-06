import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';

const statuses = {
  positive: 'dark-green bg-light-green',
  negative: 'dark-red bg-washed-red',
  error: 'white bg-dark-red',
  warning: 'washed-yellow bg-orange',
  neutral: 'gray bg-light-gray',
};

const BadgeWrapper = tachyons('div')`
  inline-flex br-pill
  pv1 ph3 
  f7 fw7
  ${props => (props.status ? statuses[props.status] : statuses.neutral)}
`;

/**
 * **Badges?!** We don't need no stinkin' badges!!
 */
export function Badge({ ...props }) {
  return <BadgeWrapper {...props} />;
}
Badge.propTypes = {
  status: PropTypes.oneOf(Object.keys(statuses)),
};

Badge.defaultProps = {
  status: 'neutral',
};
