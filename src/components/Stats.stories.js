import React from 'react';
import WithTooltip from './tooltip/WithTooltip';

import { StatsList } from './StatsList';

import { ListItem } from './tooltip/ListItem';
import { IconFont } from './IconFont';

export const itemsData = [
  { title: 'Last Block', value: '1.7s', subtitle: '/ target 6s' },
  { title: 'Epoch', value: '170', subtitle: '/ target 6s' },
  { title: 'Net Staked', value: '20982019 KSM', subtitle: '/ target 6s' },
];

export default {
  title: 'Design System/Stats',
  component: StatsList,
  excludeStories: /.*Data$/,
};

export const Stats = () => <StatsList items={itemsData} />;

export const asTooltip = () => (
  <WithTooltip placement="bottom-start" trigger="click" tooltip={Stats}>
    <ListItem active title="Kusama" right={<IconFont icon="chevron-down" size="tiny" />} />
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
