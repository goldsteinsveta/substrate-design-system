import React from 'react';
import styled from 'styled-components';

import { IconWeb3 } from './IconWeb3';

const Meta = styled.div`
  color: #666;
  font-size: 12px;
  margin-left: 10px;
  min-width: 80px;
`;

const Item = styled.li`
  display: inline-flex;
  justify-content: space-evenly;
  border: 1px solid;
  align-items: center;
  padding: 10px;
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;

export default {
  title: 'Design System/IconWeb3',
  component: IconWeb3,
};

export const labels = () => (
  <List>
    <Item minimal>
      <IconWeb3 aria-hidden icon="identicon" />
      <Meta>Identicon</Meta>
    </Item>
    <Item minimal>
      <IconWeb3 lib="fa" icon="address-card" />
      <Meta aria-hidden>Icon FA</Meta>
    </Item>
  </List>
);

export const noLabels = () => (
  <List>
    <Item minimal>
      <IconWeb3 lib="web3" aria-hidden icon="identicon" />
    </Item>
    <Item minimal>
      <IconWeb3 icon="address-card" />
    </Item>
  </List>
);

export const inline = () => (
  <>
    this is an inline <IconWeb3 lib="web3" icon="identicon" aria-label="Identicon" /> icon (default)
  </>
);

export const block = () => (
  <>
    this is a block <IconWeb3 lib="web3" icon="identicon" aria-label="Identicon" block /> icon
  </>
);
