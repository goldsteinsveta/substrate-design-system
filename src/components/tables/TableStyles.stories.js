import React from 'react';
import tachyons from 'tachyons-components';
import { IconFont } from '../IconFont';
import { AddressCard } from '../AddressCard';
import { Button } from '../Button';

export default {
  title: 'Design System/Table',
  excludeStories: /.*Data$/,
};

export const CellControls = () => {
  const BoxPosition = tachyons('div')`absolute w-100 h-100 top-0 left-0`;
  const Box = tachyons('div')`flex w-100 h-100 flex-column`;
  const RowEdit = tachyons('div')`flex w-100 h-100 justify-end`;
  const RowBond = tachyons('div')`flex w-100 h-100 justify-between items-center`;
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
        <Button size="small" shape="pill" appearance="secondary">
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
        <Button appearance="outline" size="tiny">
          25%
        </Button>
        <Button appearance="outline" size="tiny">
          50%
        </Button>
        <Button appearance="outline" size="tiny">
          75%
        </Button>
        <Button appearance="outline" size="tiny">
          100%
        </Button>
      </>
    );
  };

  return (
    <BoxPosition>
      <Box>
        <RowEdit>{controlsEdit()}</RowEdit>
        <RowBond>{controlsBond()}</RowBond>
        <RowSum>{controlsAmount()}</RowSum>
      </Box>
    </BoxPosition>
  );
};

export const InContext = () => (
  <table>
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
        <td className="tl">
          <AddressCard />
        </td>
        <td />
        <td rowSpan="2" className="f5 fw6 center ph4 pv1">
          {CellControls()}
          9477133.53
        </td>
        <td rowSpan="2" className="f4 fw6 center ph4 pv1">
          X.X
        </td>
        <td>xxx.x</td>
        <td>x.x</td>
      </tr>
      <tr>
        <td />
        <td className="tl">
          <AddressCard />
        </td>
        <td>xxx.x</td>
        <td>x.x</td>
      </tr>
    </tbody>
  </table>
);
