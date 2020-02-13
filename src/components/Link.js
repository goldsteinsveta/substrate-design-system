import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';

const APPEARANCES = {
  underline: 'black',
  color: 'blue no-underline',
  inverted: 'bg-black white ph1 no-underline',
};

const StyledLink = tachyons('a')`
  dim
  ${props => APPEARANCES[props.appearance]}
`;

export function Link({ children, ...props }) {
  return <StyledLink {...props}>{children}</StyledLink>;
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  appearance: PropTypes.oneOf(['underline', 'color', 'inverted']),
};

Link.defaultProps = {
  appearance: 'underline',
};
