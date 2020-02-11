import namor from 'namor';

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(i);
  }
  return arr;
};

const newAccount = () => {
  function randomBet(min, max) {
    return parseFloat((Math.random() * (max - min + 1) + min).toFixed(3));
  }
  const total = randomBet(0, 10000);
  const bond = randomBet(0, total);

  const controllerTotal = randomBet(0, 1000);

  return {
    accountStash: namor.generate({ words: 1 }),
    accountController: namor.generate({ words: 1 }),
    bondValue: bond,
    bondReturns: parseFloat((bond / 300).toFixed(3)),
    stashFundsTotal: total,
    stashFundsTransferable: (total - bond).toFixed(3),
    controllerFundsTotal: controllerTotal,
    controllerFundsTransferable: randomBet(0, controllerTotal),
  };
};

export function makeAccounts(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(() => {
      return {
        ...newAccount(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}

export const accountsColumns = [
  {
    Header: 'Account',
    columns: [
      {
        Header: 'Stash',
        accessor: 'accountStash',
        sortable: false,
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
        accessor: 'stashFundsTotal',
      },
      {
        Header: 'Transferable',
        accessor: 'stashFundsTransferable',
      },
    ],
  },
  {
    Header: 'ControllerFunds',
    columns: [
      {
        Header: 'ControllerTotal',
        accessor: 'controllerFundsTotal',
      },
      {
        Header: 'ControllerTransferable',
        accessor: 'controllerFundsTransferable',
      },
    ],
  },
];
