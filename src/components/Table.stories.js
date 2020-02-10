import React from 'react';
import { Table } from './Table';
import makeData from './makeData';

export default {
  title: 'Design System/Table',
  component: Table,
};

const columns = [
  {
    Header: 'Name',
    columns: [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
    ],
  },
  {
    Header: 'Info',
    columns: [
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Visits',
        accessor: 'visits',
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
      },
    ],
  },
];

const data = makeData(20);

export const all = () => <Table columns={columns} data={data} />;
