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
      <ItemStats title="total funds" value="17906,868 KSM" subtitle="~ 26’000’12 USD" />
      <ItemStats title="at stake" value="20001,005 KSM" subtitle="~ 26000,12 USD" />
      <ItemStats title="in the period of" value="365 Days" />
      <ItemStats title="est. returns" value="365 Days" subtitle="~ 2600,12 USD" />
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
  const smallDarkMeasuredItemProps = { theme: 'dark', size: 'small', width: 'measure' };

  const ListItemStatsNetworkCollapsed = () => {
    return (
      <FlexList border="none">
        <ItemStats theme="dark" width="min">
          <IconFont icon="circle" size="small" />
        </ItemStats>
        <ItemStats title={<span className="f5 fw6">Kusama</span>} {...smallDarkMeasuredItemProps} />
        <ItemStats title="Last Block" {...smallDarkMeasuredItemProps} />
        <ItemStats title="Epoch" {...smallDarkMeasuredItemProps} />
      </FlexList>
    );
  };
  const ListItemStatsNetworkExpanded = () => {
    return (
      <FlexList border="none">
        <ItemStats theme="dark" size="small" width="min" />
        <ItemStats {...smallDarkMeasuredItemProps}>
          <Button shape="pill">
            <IconFont icon="hand-spock-o" />
          </Button>
        </ItemStats>
        <ItemStats value="1.7s" subtitle="/ taget 6s" {...smallDarkMeasuredItemProps} />
        <ItemStats value="value" subtitle="/ 600" {...smallDarkMeasuredItemProps} />
      </FlexList>
    );
  };
  return (
    <WithTooltip placement="bottom-start" trigger="click" tooltip={ListItemStatsNetworkExpanded}>
      <ListItem active title={<ListItemStatsNetworkCollapsed />} />
    </WithTooltip>
  );
};
