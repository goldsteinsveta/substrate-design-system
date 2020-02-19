import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';

import { TableAccounts } from './TableAccounts';
import { mockupBondData, bondsColumns } from '../dataMockups/accountBonds';

export default {
  title: 'Apps/Nomidot/TableAccounts',
  component: TableAccounts,
  decorators: [withKnobs],
};

export const knobbedBonds = () => {
  const data = object('data', mockupBondData(1));
  const columns = object('columns', bondsColumns);

  return <TableAccounts columns={columns} data={data} />;
};

export const Bonds = () => <TableAccounts columns={bondsColumns} data={mockupBondData(5)} />;
