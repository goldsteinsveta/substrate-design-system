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

// TODO: find place for mockup data
const nomiData = [
  { title: 'total funds', value: '17906,868 KSM', subtitle: '~ 26’000’12 USD' },
  { title: 'at stake', value: '20001,005 KSM', subtitle: '~ 26’00’12 USD' },
  { title: 'in the period of', value: '365 Days', subtitle: '' },
  { title: 'est. returns', value: '760,588 KSM', subtitle: '~ 2600’12 USD' },
];

const networkData = [
  { title: 'Last Block', value: '1.7s', subtitle: '/ target 6s' },
  { title: 'Epoch', value: '170', subtitle: '/ target 6s' },
  { title: 'Net Staked', value: '20982019 KSM', subtitle: '/ target 6s' },
];

const NetworkInfo = () => {
  return (
    <>
      <WithTooltip
        placement="bottom-start"
        trigger="click"
        tooltip={<StatsList items={networkData} />}
      >
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

// TODO: components for this kind of things
const LayoutBox = tachyons('div')`center flex box1000 flex-column mv4`;

const tabsData = [<Button>Tab</Button>, <Button appearance="secondary">Tab2</Button>];

export const start = () => (
  <>
    <MainMenu contentLeft={<NomidotLogo />} contentRight={<NetworkInfo />} tabs={tabsData} />
    <LayoutBox>
      <StatsList items={nomiData} size="large" />
    </LayoutBox>
  </>
);
