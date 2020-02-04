import React from 'react';
import { MainMenu } from './MainMenu';
import { Button } from './Button';

import { IconFont } from './IconFont';

import WithTooltip from './tooltip/WithTooltip';
import { ListItem } from './tooltip/ListItem';
import { StatsList } from './StatsList';

export default {
  title: 'Design System/MainMenu',
  component: MainMenu,
  excludeStories: /.*Data$/,
};

const LogoData = () => {
  return (
    <h3>
      NOM
      <IconFont aria-hidden icon="bolt" />
      DOT
    </h3>
  );
};

const itemsData = [
  { title: 'Last Block', value: '1.7s' },
  { title: 'Epoch', value: '170' },
  { title: 'Net Staked', value: '20982019 KSM' },
];

const StatsData = () => <StatsList items={itemsData} />;

const NetworkData = () => {
  return (
    <>
      {/* TODO: should be own component */}
      <WithTooltip placement="bottom-start" trigger="click" tooltip={StatsData}>
        <ListItem
          title="Kusama"
          left={<IconFont color="springgreen" icon="circle" />}
          right={<IconFont icon="chevron-down" />}
        />
      </WithTooltip>
    </>
  );
};

export const tabsData = [<Button>Tab</Button>, <Button appearance="secondary">Tab2</Button>];

export const justStripe = () => <MainMenu contentLeft={<LogoData />} />;

export const withContent = () => (
  <MainMenu contentLeft={<LogoData />} contentRight={<NetworkData />} />
);

export const withContentAndTabs = () => (
  <MainMenu contentLeft={<LogoData />} tabs={tabsData} contentRight="helloWorld" />
);
