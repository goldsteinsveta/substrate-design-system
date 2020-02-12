import namor from 'namor';

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(i);
  }
  return arr;
};

// random number between min and max
function randomBet(min, max) {
  return parseFloat((Math.random() * (max - min + 1) + min).toFixed(3));
}

// stash object
const newStash = () => {
  const total = randomBet(0, 10000);
  const bond = randomBet(0, total);

  return {
    accountStash: namor.generate({ words: 1 }),
    accountController: '',
    bondValue: bond,
    bondReturns: parseFloat((bond / 300).toFixed(3)),
    total,
    stashFundsTransferable: (total - bond).toFixed(3),
  };
};

// controller object
const newController = () => {
  const total = randomBet(0, 1000);

  return {
    accountStash: '',
    accountController: namor.generate({ words: 1 }),
    total,
    stashFundsTransferable: randomBet(0, total),
  };
};

// stash-controller toggle return
let even = true;
const newBondPart = () => {
  even = !even;
  if (even) return newController();
  return newStash();
};

export function makeAccounts(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth] * 2;
    return range(len).map(() => {
      return {
        ...newBondPart(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}

// table fields
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
        accessor: 'total',
      },
      {
        Header: 'Transferable',
        accessor: 'stashFundsTransferable',
      },
    ],
  },
];
