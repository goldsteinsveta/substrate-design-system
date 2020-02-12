/* eslint-disable array-callback-return */
// TODO: on the data to table level
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';
import { useTable, useSortBy } from 'react-table';
import { AddressCard } from './AddressCard';

const Row = ({ row }) => (
  <tr {...row.getRowProps()}>
    {row.cells.map(cell => {
      // console.log(cell.column.Header, cell.value);
      if (cell.value !== undefined) {
        return (
          <Cell header={cell.column.Header} cellData={cell} cellRender={cell.render('Cell')} />
        );
      }
    })}
  </tr>
);

const Cell = ({ header, cellRender, cellData }) => {
  const StyleBox = tachyons('span')`
    dib w-100
    tc fw6 f5
  `;
  const Td = tachyons('td')`b--light-silver ba ph2 pv1`;
  const tdProps = { rowSpan: 1 };

  let content = cellRender;

  if (header === 'Stash' || header === 'Controller') {
    content = <AddressCard accountData={{ address: cellData.value }} />;
  }
  if (header === 'Controller' && !cellData) {
    // TODO: data for its
    content = 'select controller';
  }
  if (header === 'Bond') {
    tdProps.rowSpan = 2;
    // TODO: action layer: bond-unbond, manage validators
    content = <StyleBox>{cellData.value}</StyleBox>;
  }
  if (header === 'Est. Returns') {
    tdProps.rowSpan = 2;
    // TODO: action layer: bond-unbond, manage validators
    content = <StyleBox>{cellData.value}</StyleBox>;
  }

  return <Td {...tdProps}>{content}</Td>;
};

export function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const TableEl = tachyons('table')`w-100 ba b--light-silver br3 collapse`;
  const Th = tachyons('th')`bg-near-white ba b--light-silver code f7 fw5 pv1`;

  return (
    <TableEl>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => {
              return (
                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* TODO: */}
                  {/* eslint-disable-next-line no-nested-ternary */}
                  <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                </Th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return <Row row={row} {...row.getRowProps()} />;
        })}
      </tbody>
    </TableEl>
  );
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string,
      columns: PropTypes.array,
    })
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      accountStash: PropTypes.string,
      accountController: PropTypes.string,
      bondValue: PropTypes.number,
      bondReturns: PropTypes.number,
      fundTotal: PropTypes.number,
      fundTransferable: PropTypes.number,
    })
  ).isRequired,
};

Table.defaultProps = {};
