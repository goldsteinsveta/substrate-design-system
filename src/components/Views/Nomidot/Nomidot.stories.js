import React from 'react';
import tachyons from 'tachyons-components';

import { Button } from '../../Button';
import { IconFont } from '../../IconFont';

import { TableCellControlsInContext as TableCell } from '../../tables/TableCell.stories';

import { ContentAndTabs as MainMenu } from '../../MainMenu.stories';
import { ListItemStats as ItemStats } from '../../ItemStats.stories';
import { ContextMenu as ListItem } from '../../tooltip/ListItem.stories';

export default {
  title: 'Apps/Nomidot',
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
        Staking stats for
        <ListItem className="mh2" />
      </h3>
      <ItemStats />
    </LayoutBox>
    <LayoutBox>
      <h5 className="mb3">My accounts</h5>
      <TableCell />
    </LayoutBox>
    <Button shape="pill" wrapProps={{ className: 'absolute right-2 bottom-2' }}>
      <IconFont icon="space-shuttle" size="medium" />
    </Button>
  </>
);
