import React from 'react';
import tachyons from 'tachyons-components';
import { MainMenu } from './MainMenu';
import { Button } from './Button';

import { IconFont } from './IconFont';

import WithTooltip from './tooltip/WithTooltip';
import { ListItem } from './tooltip/ListItem';
import { StatsList } from './StatsList';

export default {
  title: 'Apps/Nomidot',
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

const Layout = tachyons('div')`center flex mw8 flex-column mv4`;

export const tabsData = [<Button>Tab</Button>, <Button appearance="secondary">Tab2</Button>];

export const app = () => (
  <>
    <MainMenu contentLeft={<LogoData />} contentRight={<NetworkData />} tabs={tabsData} />
    <Layout>
      <StatsList items={itemsData} size="large" />
    </Layout>
  </>
);
