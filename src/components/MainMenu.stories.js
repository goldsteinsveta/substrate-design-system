import React from 'react';
import { MainMenu } from './MainMenu';
import { Button } from './Button';
import { IconFont } from './IconFont';

import WithTooltip from './tooltip/WithTooltip';
import { ListItem } from './tooltip/ListItem';
import { StatsList } from './StatsList';

import { NomidotLogo } from './Views/Nomidot/NomidotLogo';

export default {
  title: 'Design System/MainMenu',
  component: MainMenu,
  excludeStories: /.*Data$/,
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
          left={<IconFont color="green" icon="circle" />}
          right={<IconFont icon="chevron-down" color="white" />}
        />
      </WithTooltip>
    </>
  );
};

export const tabsData = [<Button>Tab</Button>, <Button appearance="secondary">Tab2</Button>];

export const justStripe = () => <MainMenu contentLeft={<NomidotLogo />} />;

export const withContent = () => (
  <MainMenu contentLeft={<NomidotLogo />} contentRight={<NetworkData />} />
);

export const withContentAndTabs = () => (
  <MainMenu contentLeft={<NomidotLogo />} tabs={tabsData} contentRight="helloWorld" />
);
