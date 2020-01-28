import React from 'react';

import { IdenticonList } from './IdenticonList';
import { Identicon } from './Identicon';

export const users = [
  {
    id: '1',
    name: 'Dominic Nguyen',
    identiconUrl: 'https://avatars2.githubusercontent.com/u/263385',
  },
  {
    id: '2',
    name: 'Tom Coleman',
    identiconUrl: 'https://avatars2.githubusercontent.com/u/132554',
  },
  {
    id: '3',
    name: 'Zoltan Olah',
    identiconUrl: 'https://avatars0.githubusercontent.com/u/81672',
  },
  {
    id: '4',
    name: 'Tim Hingston',
    identiconUrl: 'https://avatars3.githubusercontent.com/u/1831709',
  },
];

export default {
  title: 'Design System/Address/IdenticonList',
  component: IdenticonList,
  parameters: {
    subcomponents: { Identicon },
  },
  excludeStories: ['users'],
};

export const bond = () => <IdenticonList users={users.slice(0, 2)} />;
export const ellipsized = () => <IdenticonList users={users} />;
export const bigUserCount = () => <IdenticonList users={users} userCount={100} />;

bigUserCount.story = {
  name: 'big userCount',
};

export const smallSize = () => <IdenticonList users={users} userCount={100} size="small" />;

smallSize.story = {
  name: 'small size',
};

export const loading = () => <IdenticonList isLoading />;
export const empty = () => <IdenticonList users={[]} />;
