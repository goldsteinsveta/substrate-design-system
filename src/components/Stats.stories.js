import React from 'react';
import { action } from '@storybook/addon-actions';
import WithTooltip from './tooltip/WithTooltip';

import { StatsList } from './StatsList';

import { ListItem } from './tooltip/ListItem';
import { Icon } from './Icon';

export const items = [
  { title: 'Last Block', value: '1.7s' },
  { title: 'Epoch', value: '170' },
  { title: 'Net Staked', value: '20982019 KSM' },
  { title: 'callback', onClick: action('onClick') },
];

export default {
  title: 'Design System/Stats',
  component: StatsList,
  excludeStories: ['items'],
};

export const Stats = () => <StatsList items={items.slice(0, 3)} />;

export const asTooltip = () => (
  <WithTooltip placement="bottom-start" trigger="click" tooltip={Stats}>
    <ListItem active title="Kusama" right={<Icon icon="chevrondown" />} />
  </WithTooltip>
);

export const sizes = () => <StatsList items={items.slice(0, 3)} />;
