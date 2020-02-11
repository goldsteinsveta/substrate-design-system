import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';
import { useTable, useSortBy } from 'react-table';
import { AddressCard } from './AddressCard';

function Cell({ header, cellRender, cellData }) {
  const StyleBox = tachyons('span')`fw6 f4 block relative`;

  if (header === 'Stash' || header === 'Controller') {
    return <AddressCard accountData={{ address: cellData.value }} />;
  }
  if (header === 'Controller' && !cellData) {
    return 'select controller';
  }
  if (header === 'Bond') {
    // TODO: action layer: bond-unbond, manage validators
    return <StyleBox>{cellData.value}</StyleBox>;
  }
  if (header === 'Est. Returns') {
    // TODO: action layer: bond-unbond, manage validators
    return <StyleBox>{cellData.value}</StyleBox>;
  }

  return <>{cellRender}</>;
}

Cell.propTypes = {
  header: PropTypes.string.isRequired,
  cellRender: PropTypes.element.isRequired,
  // TODO:
  // eslint-disable-next-line react/forbid-prop-types
  cellData: PropTypes.object.isRequired,
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

  return (
    <table>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                {/* TODO: */}
                {/* eslint-disable-next-line no-nested-ternary */}
                <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td>
                    <Cell
                      header={cell.column.Header}
                      cellData={cell}
                      cellRender={cell.render('Cell')}
                    />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
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
