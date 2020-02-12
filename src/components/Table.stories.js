import React from 'react';
import { Table } from './Table';
import { makeAccounts, accountsColumns } from './dataMockup/accountBondData';

export default {
  title: 'Design System/Table',
  component: Table,
};

export const all = () => <Table columns={accountsColumns} data={makeAccounts(5)} />;
