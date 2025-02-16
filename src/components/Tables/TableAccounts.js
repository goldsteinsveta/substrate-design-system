// TODO:
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';
import { useTable, useSortBy } from 'react-table';
import { AddressCard } from '../AddressCard';

export function Row({ row }) {
  return (
    <>
      <tr>
        {row.cells.map(cell => {
          if (cell.column.Header === 'Controller') return <td {...cell.getCellProps()} />;
          if (cell.column.Header === 'ControllerTotal') return;
          if (cell.column.Header === 'ControllerTransferable') return;

          return (
            <Cell
              header={cell.column.Header}
              cellData={cell}
              cellRender={cell.render('Cell')}
              {...cell.getCellProps()}
            />
          );
        })}
      </tr>
      <tr>
        {row.cells.map(cell => {
          if (cell.column.Header === 'Stash') return <td {...cell.getCellProps()} />;
          if (cell.column.Header === 'Bond') return;
          if (cell.column.Header === 'Est. Returns') return;
          if (cell.column.Header === 'Total') return;
          if (cell.column.Header === 'Transferable') return;

          return (
            <Cell
              header={cell.column.Header}
              cellData={cell}
              cellRender={cell.render('Cell')}
              {...cell.getCellProps()}
            />
          );
        })}
      </tr>
    </>
  );
}
export function Cell({ header, cellRender, cellData }) {
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
    // TODO: data for it
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
}

Cell.propTypes = {
  header: PropTypes.string.isRequired,
  cellRender: PropTypes.element.isRequired,
  // TODO:
  // eslint-disable-next-line react/forbid-prop-types
  cellData: PropTypes.object.isRequired,
};

export function TableAccounts({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const Table = tachyons('table')`w-100 ba b--light-silver br3 collapse`;
  const Th = tachyons('th')`bg-near-white ba b--light-silver code f7 fw5 pv1`;

  return (
    <Table>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => {
              if (column.Header === 'ControllerFunds') return;
              if (column.Header === 'ControllerTotal') return;
              if (column.Header === 'ControllerTransferable') return;
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
          return <Row {...row.getRowProps()} row={row} />;
        })}
      </tbody>
    </Table>
  );
}

TableAccounts.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string,
      columns: PropTypes.arrayOf(
        PropTypes.shape({
          Header: PropTypes.string,
          accessor: PropTypes.string,
          sortable: PropTypes.bool,
        })
      ),
    })
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      accountStash: PropTypes.string,
      accountController: PropTypes.string,
      bondValue: PropTypes.number,
      bondReturns: PropTypes.number,
      stashFundsTotal: PropTypes.number,
      stashFundsTransferable: PropTypes.number,
      controllerFundsTotal: PropTypes.number,
      controllerFundsTransferable: PropTypes.number,
    })
  ).isRequired,
};

// TODO default empty state
TableAccounts.defaultProps = {};
