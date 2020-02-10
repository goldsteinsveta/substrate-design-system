import React from 'react';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';

function Cell({ header, cellRender, cellData }) {
  let x = '';
  if (header === 'Stash' || header === 'Controller') {
    x = 'account card for';
    // return
    // <AccountCard accountAddress="value">
  }
  if (header === 'Controller' && !cellData) {
    // return
    // <SelectController>
  }
  if (header === 'Bond') {
    x = 'big text and control icons';
    // return
    // <>
    //   <BondCard
    //   bondData={
    //     account:
    //     controller:
    //   }
    //   >
    // </>
  }
  if (header === 'Est. Returns') {
    x = 'big text';
    // <ReturnsCard>
  }
  return (
    <>
      {x} {cellRender}
    </>
  );
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
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
