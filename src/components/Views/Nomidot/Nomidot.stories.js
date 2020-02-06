import React from 'react';
import tachyons from 'tachyons-components';
import { MainMenu } from '../../MainMenu';
import { Button } from '../../Button';

import { IconFont } from '../../IconFont';

import WithTooltip from '../../tooltip/WithTooltip';
import { ListItem } from '../../tooltip/ListItem';
import { StatsList } from '../../StatsList';

import { NomidotLogo } from './NomidotLogo';

export default {
  title: 'Apps/Nomidot',
  component: MainMenu,
  excludeStories: /.*Data$/,
};

const itemsData = [
  { title: 'total funds', value: '17906,868 KSM', subtitle: '~ 26’000’12 USD' },
  { title: 'at stake', value: '20’001 KSM', subtitle: '~ 26’00’12 USD' },
  { title: 'in the period of', value: '365 Days', subtitle: '' },
  { title: 'est. returns', value: '760.5 KSM', subtitle: '~ 2600’12 USD' },
];

const networkData = [
  { title: 'Last Block', value: '1.7s', subtitle: '/ target 6s' },
  { title: 'Epoch', value: '170', subtitle: '/ target 6s' },
  { title: 'Net Staked', value: '20982019 KSM', subtitle: '/ target 6s' },
];

const StatsData = () => <StatsList items={networkData} />;

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

export const start = () => (
  <>
    <MainMenu contentLeft={<NomidotLogo />} contentRight={<NetworkData />} tabs={tabsData} />
    <Layout>
      <StatsList items={itemsData} size="large" />
    </Layout>
  </>
);
