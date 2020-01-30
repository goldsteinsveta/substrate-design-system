import React from 'react';
import styled from 'styled-components';

import { IconFont } from './IconFont';

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
  title: 'Design System/IconFont',
  component: IconFont,
};

export const labels = () => (
  <List>
    <Item minimal>
      <IconFont lib="web3" aria-hidden icon="identicon" />
      <Meta>Identicon</Meta>
    </Item>
    <Item minimal>
      <IconFont lib="fa" icon="address-card" />
      <Meta aria-hidden>Icon FA</Meta>
    </Item>
  </List>
);

export const noLabels = () => (
  <List>
    <Item minimal>
      <IconFont lib="web3" aria-hidden icon="identicon" />
    </Item>
    <Item minimal>
      <IconFont icon="address-card" />
    </Item>
  </List>
);

export const inline = () => (
  <>
    this is an inline <IconFont lib="web3" icon="identicon" aria-label="Identicon" /> icon (default)
  </>
);

export const block = () => (
  <>
    this is a block <IconFont lib="web3" icon="identicon" aria-label="Identicon" block /> icon
  </>
);
