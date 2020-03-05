import React from 'react';
import tachyons from 'tachyons-components';

import { Button } from '../../Button';
import { IconFont } from '../../IconFont';

import { FundsControlsInContext as FundsTable } from '../../tables/FundsControls.stories';

import { ContentAndTabsLichen as MainMenu } from '../../MainMenu.stories';
import { ContextMenu as ListItem } from '../../tooltip/ListItem.stories';

export default {
  title: 'Apps/Lichen',
  component: MainMenu,
  excludeStories: /.*Data$/,
};

// TODO: components for this kind of things
const LayoutBox = tachyons('div')`center flex box1000 flex-column mv4`;

export const start = () => (
  <>
    <MainMenu />
    <LayoutBox>
      <h3 className="mb3">
        Your Accounts
        <ListItem className="mh2" />
      </h3>
      <FundsTable />
    </LayoutBox>
    <Button shape="pill" wrapProps={{ className: 'absolute right-2 bottom-2' }}>
      <IconFont icon="space-shuttle" size="medium" />
    </Button>
  </>
);
