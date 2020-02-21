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
  const theme = select('theme', ['light', 'dark'], 'light');
  return <ItemStats title="title" value="value" subtitle="subtitle" size={size} theme={theme} />;
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
export const Themes = () => {
  return (
    <FlexList>
      <ItemStats title="title" value="light" subtitle="subtitle" />
      <ItemStats title="title" value="dark" subtitle="subtitle" theme="dark" />
    </FlexList>
  );
};

export const ListItemStatsAsTooltip = () => {
  const ListItemStatsNetwork = () => {
    return (
      <FlexList border="none">
        <ItemStats theme="dark">
          <Button shape="pill">
            <IconFont icon="hand-spock-o" size="medium" />
          </Button>
        </ItemStats>
        <ItemStats title="title" value="value" subtitle="subtitle" theme="dark" />
        <ItemStats title="title" value="value" subtitle="subtitle" theme="dark" />
      </FlexList>
    );
  };
  return (
    <WithTooltip placement="bottom-start" trigger="click" tooltip={ListItemStatsNetwork}>
      <ListItem active title="Kusama" right={<IconFont icon="chevron-down" size="tiny" />} />
    </WithTooltip>
  );
};
