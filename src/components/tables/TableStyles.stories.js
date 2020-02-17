import React from 'react';
import { IconFont } from '../IconFont';

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
        <td>Stash Card</td>
        <td>Controller Card</td>
        <td>XXX.X</td>
        <td>X.X</td>
        <td>xxx.x</td>
        <td>x.x</td>
      </tr>
    </tbody>
  </table>
);

export const Hello = () => tableData();
