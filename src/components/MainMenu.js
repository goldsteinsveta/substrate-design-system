import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';
import { Button } from './Button';

const BoxLogoX = tachyons('div')`
  flex justify-between items center
  box1000 pv2 white
  bg-black
  
`;
const BoxTabsX = tachyons('div')`
  flex items-center
  box1000 bg-near-white shadow-1
`;

// Either pass the full list of users, or a userCount if known
export function MainMenu({ tabs, contentLeft, contentRight }) {
  return (
    <>
      <BoxLogoX>
        {contentLeft}
        {contentRight}
      </BoxLogoX>
      <BoxTabsX>{tabs}</BoxTabsX>
    </>
  );
}

MainMenu.propTypes = {
  tabs: PropTypes.oneOfType([PropTypes.instanceOf(Button), PropTypes.arrayOf(Button)]),
  contentLeft: PropTypes.node,
  contentRight: PropTypes.node,
};

MainMenu.defaultProps = {
  tabs: [],
  contentLeft: '',
  contentRight: '',
};
