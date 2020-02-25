import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import WithTooltip from './WithTooltip';

import { ListItem } from './ListItem';
import { IconFont } from '../IconFont';

export default {
  title: 'Design System/tooltip/ListItem',
  decorators: [withKnobs],
  parameters: {
    component: ListItem,
  },
};

export const knobbedListItem = () => {
  const appearance = select('appearance', ['primary', 'secondary', 'text'], 'primary');
  const left = text('left', 'left');
  const title = text('title', 'title');
  const center = text('center', 'center');
  const right = text('right', 'right');
  return (
    <ListItem appearance={appearance} left={left} center={center} right={right} title={title} />
  );
};

export const all = () => (
  <>
    <ListItem title="Default" />
    <ListItem title="Secondary" appearance="secondary" />
    <ListItem title="Text" appearance="text" />
    <ListItem
      active
      left="✅"
      title="lorem ipsum dolor sit amet consectatur"
      center="center"
      right={<IconFont icon="eye" />}
    />
  </>
);

export const ContextMenu = ({ ...rest }) => {
  const appearance = 'secondary';

  return (
    <span {...rest}>
      <WithTooltip
        placement="bottom-start"
        trigger="click"
        tooltip={<ListItem appearance={appearance} title="network average" />}
      >
        <ListItem title="own stake" appearance={appearance} />
      </WithTooltip>
    </span>
  );
};
