import React from 'react';

import { Identicon } from './Identicon';

export default {
  title: 'Design System/Address/Identicon',

  parameters: {
    component: Identicon,
  },
};

export const large = () => (
  <div>
    <Identicon isLoading size="large" />
    <Identicon size="large" username="Tom Coleman" />
    <Identicon
      size="large"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
  </div>
);

export const medium = () => (
  <div>
    <Identicon isLoading />
    <Identicon username="Tom Coleman" />
    <Identicon username="Tom Coleman" src="https://avatars2.githubusercontent.com/u/132554" />
  </div>
);

export const small = () => (
  <div>
    <Identicon isLoading size="small" />
    <Identicon size="small" username="Dominic Nguyen" />
    <Identicon
      size="small"
      username="Dominic Nguyen"
      src="https://avatars2.githubusercontent.com/u/263385"
    />
  </div>
);

export const tiny = () => (
  <div>
    <Identicon isLoading size="tiny" />
    <Identicon size="tiny" username="Dominic Nguyen" />
    <Identicon
      size="tiny"
      username="Dominic Nguyen"
      src="https://avatars2.githubusercontent.com/u/263385"
    />
  </div>
);
