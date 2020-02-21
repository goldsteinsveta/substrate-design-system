import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import WithTooltip from './tooltip/WithTooltip';

import { ItemStats } from './ItemStats';
import { FlexList } from './layout/flex';

import { ListItem } from './tooltip/ListItem';
import { IconFont } from './IconFont';
import { Button } from './Button';

export default {
  title: 'Design System/ItemStats',
  component: ItemStats,
  excludeStories: /.*Data$/,
  decorators: [withKnobs],
};

export const KnobbedItemStats = () => {
  const size = select('size', ['small', 'large'], 'large');
  return <ItemStats title="title" value="value" subtitle="subtitle" size={size} />;
};

export const ListItemStats = () => {
  return (
    <FlexList>
      <ItemStats title="title" value="value" subtitle="subtitle" />
      <ItemStats title="title" value="value" subtitle="subtitle" />
      <ItemStats title="title" value="value" subtitle="subtitle" />
    </FlexList>
  );
};

export const ListItemStatsAsTooltip = () => {
  const ListItemStatsNetwork = () => {
    return (
      <FlexList>
        <ItemStats>
          <Button appearance="none">
            <IconFont icon="hand-spock-o" size="medium" />
          </Button>
        </ItemStats>
        <ItemStats title="title" value="value" subtitle="subtitle" />
        <ItemStats title="title" value="value" subtitle="subtitle" />
      </FlexList>
    );
  };
  return (
    <WithTooltip placement="bottom-start" trigger="click" tooltip={ListItemStatsNetwork}>
      <ListItem active title="Kusama" right={<IconFont icon="chevron-down" size="tiny" />} />
    </WithTooltip>
  );
};
