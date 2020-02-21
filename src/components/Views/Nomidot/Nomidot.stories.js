import React from 'react';
import tachyons from 'tachyons-components';

import { MainMenu } from '../../MainMenu';
import { NomidotLogo } from './NomidotLogo';
import { Button } from '../../Button';
import { IconFont } from '../../IconFont';

import { CellControlsInContext } from '../../tables/TableCell.stories';

import { ListItemStats, ListItemStatsAsTooltip } from '../../ItemStats.stories';

export default {
  title: 'Apps/Nomidot',
  component: MainMenu,
  excludeStories: /.*Data$/,
};

const tabsData = [<Button>Tab</Button>, <Button appearance="secondary">Tab2</Button>];

const contentRight = (
  <div className="flex items-center">
    <ListItemStatsAsTooltip />
    <Button wrapProps={{ className: 'nl1 nr1' }}>
      <IconFont icon="chevron-down" size="tiny" />
    </Button>
    <Button className="ml2" appearance="secondary" shape="pill" size="small">
      <IconFont icon="info" color="white" size="small" />
    </Button>
  </div>
);

// TODO: components for this kind of things
const LayoutBox = tachyons('div')`center flex box1000 flex-column mv4`;

export const start = () => (
  <>
    <MainMenu contentLeft={<NomidotLogo />} contentRight={contentRight} tabs={tabsData} />
    <LayoutBox>
      <ListItemStats />
    </LayoutBox>
    <LayoutBox>
      <CellControlsInContext />
    </LayoutBox>
    <Button shape="pill" wrapProps={{ className: 'absolute right-2 bottom-2' }}>
      <IconFont icon="space-shuttle" size="medium" />
    </Button>
  </>
);
