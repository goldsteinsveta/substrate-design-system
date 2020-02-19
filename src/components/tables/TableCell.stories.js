import React from 'react';
import tachyons from 'tachyons-components';
import { IconFont } from '../IconFont';
import { AddressCard } from '../AddressCard';
import { Button } from '../Button';

export default {
  title: 'Apps/Nomidot/TableCell',
  excludeStories: /.*Data$/,
};

export const CellControls = () => {
  const RowEdit = tachyons('div')`flex w-100 h-100 justify-end`;
  const RowBond = tachyons('div')`flex w-100 h-100 justify-between items-center mv2`;
  const RowSum = tachyons('div')`flex w-100 h-100 justify-center items-center`;

  const controlsEdit = () => {
    return (
      <>
        <Button size="tiny" shape="pill" wrapProps={{ className: 'ma0' }}>
          <IconFont icon="times" size="tiny" />
        </Button>
        <Button size="tiny" shape="pill">
          <IconFont icon="check" size="tiny" />
        </Button>
        <Button size="small" shape="pill" appearance="none" wrapProps={{ className: 'nt1' }}>
          <IconFont icon="edit" size="small" />
        </Button>
      </>
    );
  };

  const controlsBond = () => {
    return (
      <>
        <Button
          shape="pill"
          size="small"
          toggleTo={<IconFont icon="circle" size="small" />}
          appearance="secondary"
        >
          <IconFont icon="hand-scissors-o" aria-label="identicon" size="small" />
        </Button>
        9477133.53
        <Button
          shape="pill"
          size="small"
          toggleTo={<IconFont icon="hand-paper-o" size="small" />}
          appearance="secondary"
        >
          <IconFont icon="hand-rock-o" aria-label="identicon" size="small" />
        </Button>
      </>
    );
  };

  const controlsAmount = () => {
    return (
      <>
        <Button appearance="outlineColor" size="tiny">
          25%
        </Button>
        <Button appearance="outlineColor" size="tiny">
          50%
        </Button>
        <Button appearance="outlineColor" size="tiny">
          75%
        </Button>
        <Button appearance="outlineColor" size="tiny">
          100%
        </Button>
      </>
    );
  };

  return (
    <>
      <RowEdit>{controlsEdit()}</RowEdit>
      <RowBond>{controlsBond()}</RowBond>
      <RowSum>{controlsAmount()}</RowSum>
    </>
  );
};

export const CellControlsInContext = () => (
  <table className="substrateTable">
    <thead>
      <th>
        Stash <IconFont icon="chevron-down" size="tiny" />
      </th>
      <th>Controller</th>
      <th>Bond</th>
      <th>
        Est. Returns <IconFont icon="circle" size="tiny" />
      </th>
      <th>Funds</th>
      <th>Transferable</th>
    </thead>
    <tbody>
      <tr>
        <td className="tl ph2">
          <AddressCard />
        </td>
        <td />
        <td rowSpan="2" className="f5 fw6 center pa0">
          {CellControls()}
        </td>
        <td rowSpan="2" className="f5 fw6 center ph4 pv1">
          X.X
        </td>
        <td>xxx.x</td>
        <td>x.x</td>
      </tr>
      <tr>
        <td />
        <td className="tl ph2">
          <AddressCard />
        </td>
        <td>xxx.x</td>
        <td>x.x</td>
      </tr>
    </tbody>
  </table>
);
