import React from 'react';
import { Table } from './Table';
import makeData from './makeData';

export default {
  title: 'Design System/Table',
  component: Table,
};

const columns = [
  {
    Header: 'Account',
    columns: [
      {
        Header: 'Stash',
        accessor: 'accountStash',
      },
      {
        Header: 'Controller',
        accessor: 'accountController',
      },
    ],
  },
  {
    Header: 'Bond',
    columns: [
      {
        Header: 'Bond',
        accessor: 'bondValue',
      },
      {
        Header: 'Est. Returns',
        accessor: 'bondReturns',
      },
    ],
  },
  {
    Header: 'Funds',
    columns: [
      {
        Header: 'Total',
        accessor: 'fundsTotal',
      },
      {
        Header: 'Transferable',
        accessor: 'fundsTransferable',
      },
    ],
  },
];

const data = makeData(5);

export const all = () => <Table columns={columns} data={data} />;
