import namor from 'namor';

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  function randomBet(min, max) {
    return parseFloat((Math.random() * (max - min + 1) + min).toFixed(3));
  }
  const total = randomBet(0, 10000);
  const bond = randomBet(0, total);

  return {
    accountStash: namor.generate({ words: 1 }),
    accountController: namor.generate({ words: 1 }),
    bondValue: bond,
    bondReturns: bond / 300,
    fundsTotal: total,
    fundsTransferable: total - bond,
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(() => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
