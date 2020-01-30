import React from 'react';
import WithTooltip from './tooltip/WithTooltip';

import { StatsList } from './StatsList';

import { ListItem } from './tooltip/ListItem';
import { Icon } from './Icon';

export const itemsData = [
  { title: 'Last Block', value: '1.7s' },
  { title: 'Epoch', value: '170' },
  { title: 'Net Staked', value: '20982019 KSM' },
];

export default {
  title: 'Design System/Stats',
  component: StatsList,
  excludeStories: /.*Data$/,
};

export const Stats = () => <StatsList items={itemsData} />;

export const asTooltip = () => (
  <WithTooltip placement="bottom-start" trigger="click" tooltip={Stats}>
    <ListItem active title="Kusama" right={<Icon icon="chevrondown" />} />
  </WithTooltip>
);

export const sizes = () => (
  <>
    <StatsList items={itemsData} />
    <br />
    <StatsList items={itemsData} size="large" />
  </>
);

// TODO:
export const editable = () => <StatsList items={itemsData} />;
