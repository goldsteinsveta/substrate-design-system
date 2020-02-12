import React from 'react';
import { TableAccounts } from './TableAccounts';
import { mockupBondData, bondsColumns } from '../dataMockups/accountBonds';

export default {
  title: 'Design System/TableAccounts',
  component: TableAccounts,
};

export const all = () => <TableAccounts columns={bondsColumns} data={mockupBondData(5)} />;
