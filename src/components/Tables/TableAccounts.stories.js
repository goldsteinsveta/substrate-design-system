import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';

import { TableAccounts } from './TableAccounts';
import { mockupBondData, bondsColumns } from '../dataMockups/accountBonds';

export default {
  title: 'Design System/TableAccounts',
  component: TableAccounts,
  decorators: [withKnobs],
};

export const knobbedTableAccounts = () => {
  const data = object('data', mockupBondData(1));
  const columns = object('columns', bondsColumns);

  return <TableAccounts columns={columns} data={data} />;
};

export const tableAccounts = () => (
  <TableAccounts columns={bondsColumns} data={mockupBondData(5)} />
);
