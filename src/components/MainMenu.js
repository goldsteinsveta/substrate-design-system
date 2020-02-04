import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from './Button';
import { color, spacing } from './shared/styles';

const BoxLogo = styled.div`
  align-items: center;
  background: ${color.black};
  color: white;
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding: ${spacing.max1000};
`;

const BoxTabs = styled.div`
  align-items: center;
  display: flex;
  background: ${color.light};
  padding: ${spacing.max1000};
  box-shadow: inset 0 0 10px -8px;
`;

export const ContentRight = () => {
  return <div>Content Right</div>;
};

// Either pass the full list of users, or a userCount if known
export function MainMenu({ tabs, contentLeft, contentRight }) {
  return (
    <>
      <BoxLogo>
        {contentLeft}
        {contentRight}
      </BoxLogo>
      <BoxTabs>{tabs}</BoxTabs>
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
