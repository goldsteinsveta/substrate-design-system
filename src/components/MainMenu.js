import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from './Button';
import { color } from './shared/styles';

const BoxLogo = styled.div`
  align-items: center;
  background: ${color.black};
  color: white;
  display: flex;
  justify-content: space-between;
  height: 38px;
  padding: 0 calc(50vw - 400px);
`;

const BoxTabs = styled.div`
  align-items: center;
  display: flex;
  background: ${color.light};
  padding: 0 calc(50vw - 400px);
  box-shadow: inset 0 0 10px -8px;
`;

export const Logo = () => {
  return <span>Nomidot</span>;
};

export const ContentRight = () => {
  return <div>Content Right</div>;
};

// Either pass the full list of users, or a userCount if known
export function MainMenu({ tabs }) {
  return (
    <>
      <BoxLogo>
        <Logo />
        <ContentRight />
      </BoxLogo>
      <BoxTabs>{tabs}</BoxTabs>
    </>
  );
}

MainMenu.propTypes = {
  tabs: PropTypes.oneOfType([PropTypes.instanceOf(Button), PropTypes.arrayOf(Button)]),
};

MainMenu.defaultProps = {
  tabs: [],
};
