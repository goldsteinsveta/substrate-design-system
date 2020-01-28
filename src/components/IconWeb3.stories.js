import React from 'react';
import styled from 'styled-components';

import { IconWeb3 } from './IconWeb3';

const Meta = styled.div`
  color: #666;
  font-size: 12px;
`;

const Item = styled.li`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
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
  </List>
);

export const noLabels = () => (
  <List>
    <Item minimal>
      <IconWeb3 aria-hidden icon="identicon" />
    </Item>
  </List>
);

export const inline = () => (
  <>
    this is an inline <IconWeb3 icon="identicon" aria-label="Identicon" /> icon (default)
  </>
);

export const block = () => (
  <>
    this is a block <IconWeb3 icon="identicon" aria-label="Identicon" block /> icon
  </>
);
