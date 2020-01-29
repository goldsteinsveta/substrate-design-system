import React from 'react';
import { action } from '@storybook/addon-actions';
import WithTooltip from './tooltip/WithTooltip';

import { NetworkCard } from './NetworkCard';
import { StoryLinkWrapper } from './StoryLinkWrapper';

export const links = [
  { title: 'Last Block', value: '1.7s' },
  { title: 'Epoch', value: '170' },
  { title: 'Net Staked', value: '20982019 KSM' },
  { title: 'callback', onClick: action('onClick') },
];

export default {
  title: 'Design System/NetworkCard',
  component: NetworkCard,
  decorators: [
    storyFn => (
      <div style={{ height: '300px' }}>
        <WithTooltip placement="bottom-start" trigger="click" startOpen tooltip={storyFn()}>
          <div>Card Here</div>
        </WithTooltip>
      </div>
    ),
  ],
  excludeStories: ['links'],
};

export const story0 = () => <NetworkCard links={links.slice(0, 3)} LinkWrapper={null} />;

story0.story = {
  name: 'links',
};

export const linksAndCallback = () => (
  <NetworkCard links={links.slice(0, 3)} LinkWrapper={StoryLinkWrapper} />
);

linksAndCallback.story = {
  name: 'links and callback',
};
