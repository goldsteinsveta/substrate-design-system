import React from 'react';
import { MainMenu } from './MainMenu';
import { Button } from './Button';

export default {
  title: 'Design System/MainMenu',
  component: MainMenu,
  excludeStories: /.*Data$/,
};

export const tabsData = [<Button>Tab</Button>, <Button appearance="secondary">Tab2</Button>];

export const all = () => <MainMenu tabs={tabsData} />;

export const noTabs = () => <MainMenu />;
