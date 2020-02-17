import React from 'react';
import styled from 'styled-components';

import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

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
  decorators: [withKnobs],
};

export const knobbedIconFont = () => {
  const icon = text('icon', 'address-card');
  const lib = select('lib', ['fa', 'web3'], 'fa');
  const block = boolean('block', false);
  const size = select('size', ['large', 'medium', 'small', 'tiny'], 'large');
  // TODO: color

  return (
    <>
      <IconFont lib={lib} icon={icon} block={block} size={size} /> IconFont
    </>
  );
};

export const labels = () => (
  <List>
    <Item minimal>
      <IconFont lib="web3" aria-hidden icon="identicon" size="large" />
      <Meta>Identicon</Meta>
    </Item>
    <Item minimal>
      <IconFont lib="fa" icon="address-card" size="large" />
      <Meta aria-hidden>Icon FA</Meta>
    </Item>
  </List>
);

export const noLabels = () => (
  <List>
    <Item minimal>
      <IconFont lib="web3" aria-hidden icon="identicon" size="large" />
    </Item>
    <Item minimal>
      <IconFont icon="address-card" size="large" />
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
