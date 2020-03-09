import React from 'react';
import { withKnobs, text, array } from '@storybook/addon-knobs';

import { MainMenu } from './MainMenu';
import { Button } from './Button';
import { IconFont } from './IconFont';

import { ListItemStatsAsTooltip } from './ItemStats.stories';
import { NodeSelectorsLichen } from './NodeSelector.stories';

import { NomidotLogo } from './Views/Nomidot/NomidotLogo';

export default {
  title: 'Design System/MainMenu',
  component: MainMenu,
  excludeStories: /.*Data$/,
  decorators: [withKnobs],
};

const tabsNomidotData = [
  <Button>Accounts</Button>,
  <Button appearance="secondary">Stakes</Button>,
  <Button appearance="secondary">Settings</Button>,
];
const tabsLichenData = [
  <Button>Accounts</Button>,
  <Button appearance="secondary">Send Funds</Button>,
];

const ContentRight = (
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

export const knobbedMainMenu = () => {
  const contentLeft = text('ContentLeft', 'ContentLeft');
  const contentRight = text('ContentRight', 'ContentRight');

  const tabs = array('tabs titles', ['tab1', 'tab2']);
  const arrayOfButtons = [];
  let t = 0;
  tabs.forEach(tab => {
    arrayOfButtons.push(<Button appearance={t === 0 ? 'primary' : 'secondary'}>{tab}</Button>);
    t = +1;
  });

  return <MainMenu contentLeft={contentLeft} tabs={arrayOfButtons} contentRight={contentRight} />;
};

export const ContentLeft = () => <MainMenu contentLeft={<NomidotLogo />} />;

export const ContentLeftAndRight = () => {
  return <MainMenu contentLeft={<NomidotLogo />} contentRight={ContentRight} />;
};

export const ContentAndTabsNomidot = () => (
  <MainMenu contentLeft={<NomidotLogo />} tabs={tabsNomidotData} contentRight={ContentRight} />
);

export const ContentAndTabsLichen = () => (
  <MainMenu contentLeft="Lichen" tabs={tabsLichenData} contentRight={<NodeSelectorsLichen />} />
);
