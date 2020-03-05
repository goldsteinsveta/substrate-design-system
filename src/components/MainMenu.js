import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';
import { Button } from './Button';

const BoxTop = tachyons('div')`
  flex justify-between items-center h3
  box1000 pv2 white ph5-m
  bg-black
`;

const Div = tachyons('div')``;

const BoxTabs = tachyons('div')`
  substrate-tabsMenu
  flex items-center
  box1000 bg-near-white shadow-1
`;

// Either pass the full list of users, or a userCount if known
export function MainMenu({ tabs, contentLeft, contentRight }) {
  return (
    <>
      <BoxTabs>{tabs}</BoxTabs>
      <BoxTop>
        <Div w-50>{contentLeft}</Div>
        <Div w-100 flex justify-end>
          {contentRight}
        </Div>
      </BoxTop>
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
