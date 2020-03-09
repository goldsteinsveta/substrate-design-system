import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';
import { Button } from './Button';

const FrameWrap = tachyons('div')``;
const Frame = tachyons('div')`
  flex flex-column content-between justify-between
  w-100 pa3 
  b--black b--solid bw1  
`;
const FrameActions = tachyons('div')`
  self-end nr3 nb3
`;

export const FormFrame = ({ tabs, actionButtons, children, frameClass, wrapClass }) => {
  return (
    <FrameWrap className={wrapClass}>
      {tabs}
      <Frame className={frameClass}>
        <div>{children}</div>
        <FrameActions>{actionButtons}</FrameActions>
      </Frame>
    </FrameWrap>
  );
};

FormFrame.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  tabs: PropTypes.oneOfType([PropTypes.instanceOf(Button), PropTypes.arrayOf(Button)]),
  actionButtons: PropTypes.oneOfType([PropTypes.instanceOf(Button), PropTypes.arrayOf(Button)]),
  frameClass: PropTypes.string,
  wrapClass: PropTypes.string,
};

FormFrame.defaultProps = {
  tabs: null,
  frameClass: null,
  wrapClass: null,
  actionButtons: null,
  children: null,
};
