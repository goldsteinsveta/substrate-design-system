import React from 'react';

import { Identicon } from './Identicon';

export default {
  title: 'Design System/Address/Identicon',

  parameters: {
    component: Identicon,
  },
};

export const medium = () => (
  <div>
    <Identicon />
    <Identicon isLoading />
  </div>
);

export const large = () => (
  <div>
    <Identicon size="large" />
    <Identicon isLoading size="large" />
  </div>
);

export const small = () => (
  <div>
    <Identicon size="small" />
    <Identicon isLoading size="small" />
  </div>
);

export const tiny = () => (
  <div>
    <Identicon size="tiny" />
    <Identicon isLoading size="tiny" />
  </div>
);
