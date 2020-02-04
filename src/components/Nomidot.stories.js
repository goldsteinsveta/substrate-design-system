import React from 'react';
import { MainMenu } from './MainMenu';
import { Button } from './Button';

import { IconFont } from './IconFont';

import WithTooltip from './tooltip/WithTooltip';
import { ListItem } from './tooltip/ListItem';
import { StatsList } from './StatsList';

export default {
  title: 'Dummy/001',
  component: MainMenu,
  excludeStories: /.*Data$/,
};

const LogoData = () => {
  return (
    <h3>
      NOM
      <IconFont aria-hidden icon="bolt" color="white" />
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
      <WithTooltip placement="bottom-start" trigger="click" tooltip={StatsData}>
        <ListItem
          title="Kusama"
          left={<IconFont color="positive" icon="circle" />}
          colors
          right={<IconFont icon="chevron-down" color="white" />}
        />
      </WithTooltip>
    </>
  );
};

export const tabsData = [<Button>Tab</Button>, <Button appearance="secondary">Tab2</Button>];

export const app = () => (
  <>
    <MainMenu contentLeft={<LogoData />} contentRight={<NetworkData />} tabs={tabsData} />
    <StatsList items={itemsData} size="large" />
  </>
);
