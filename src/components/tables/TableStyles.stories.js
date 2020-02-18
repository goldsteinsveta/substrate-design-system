import React from 'react';
import { IconFont } from '../IconFont';
import { AddressCard } from '../AddressCard';

export default {
  title: 'Design System/Table',
  excludeStories: /.*Data$/,
};

const tableData = () => (
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
        <td rowSpan="2" className="f4 fw6 center ph4 pv1">
          XXX.X
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

export const Hello = () => tableData();
