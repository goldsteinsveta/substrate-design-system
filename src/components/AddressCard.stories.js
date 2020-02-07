import React from 'react';

import { AddressCard } from './AddressCard';
import { Identicon } from './Identicon';

export const accountData = {
  name: 'N4m3',
  address: '4ddR355',
  network: 'network',
  isLoading: true,
};

export default {
  title: 'Design System/Address/AddressCard',
  component: AddressCard,
  parameters: {
    subcomponents: { Identicon },
  },
  excludeStories: /.*Data$/,
};

export const defaultAddressCard = () => <AddressCard {...accountData} />;
defaultAddressCard.story = {
  name: 'default',
};
