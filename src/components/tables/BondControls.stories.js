import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { BondControls } from './BondControls';

import { IconFont } from '../IconFont';
import { AddressCard } from '../AddressCard';

import { ListItem } from '../tooltip/ListItem';

export default {
  title: 'Design System/BondControls',
  excludeStories: /.*Data$/,
  component: BondControls,
  decorators: [withKnobs],
};

export const KnobbedBondControls = () => {
  const value = text('value', 'fetching value');
  const mode = select('mode', ['idle', 'edit'], 'idle');
  return <BondControls value={value} mode={mode} />;
};

export const BondControlsInContext = () => (
  <table className="substrateTable">
    <thead>
      <tr>
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
      </tr>
    </thead>
    <tbody>
      <tr className="tr-stash">
        <td className="tl ph2">
          <AddressCard />
        </td>
        <td />
        <td rowSpan="2" className="f5 fw6 center pa0">
          <BondControls value="3726.392" />
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
      <tr className="tr-stash">
        <td className="tl ph2">
          <AddressCard />
        </td>
        <td />
        <td rowSpan="2" className="f5 fw6 center pa0">
          <BondControls mode="edit" value="3726.392" />
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
      <tr className="tr-stash">
        <td className="tl ph2">
          <AddressCard />
        </td>
        <td colSpan="3" className="f5 fw6 tc pa0">
          <ListItem
            title="to stake select controller"
            appearance="secondary"
            right={<IconFont icon="hand-rock-o" />}
          />
        </td>
        <td>xxx.x</td>
        <td>x.x</td>
      </tr>
    </tbody>
  </table>
);
