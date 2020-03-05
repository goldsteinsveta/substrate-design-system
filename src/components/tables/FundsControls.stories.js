import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { AddressCard } from '../AddressCard';

import { Button } from '../Button';

export default {
  title: 'Design System/FundsControls',
  excludeStories: /.*Data$/,
  decorators: [withKnobs],
};

const buttonProps = {
  appearance: 'outlineColor',
  size: 'small',
  wrapProps: { className: 'mr2' },
};

export const FundsControlsInContext = () => (
  <table className="fundsTable collapse">
    <thead>
      <tr>
        <th className="tl code f6 pb2"> </th>
        <th className="tl code f6 pb2">Funds</th>
        <th className="tl code f6 pb2">Transferable</th>
        {/* TODO: collapsable columns */}
        <th className="tl code f6 pb2">...</th>
        <th className="tl code f6 pb2">TX</th>
        <th className="tl code f6 pb2"> </th>
      </tr>
    </thead>
    <tbody>
      <tr className="striped--near-white">
        <td className="tl ph2">
          <AddressCard />
        </td>
        <td>xxx.x</td>
        <td>xxx.x</td>
        <td>...</td>
        <td>X</td>
        <td>
          <Button {...buttonProps}>Send</Button>
          <Button {...buttonProps}>Import</Button>
          <Button {...buttonProps}>Forget</Button>
        </td>
      </tr>
      <tr className="striped--near-white">
        <td className="tl ph2">
          <AddressCard />
        </td>
        <td>xxx.x</td>
        <td>xxx.x</td>
        <td>...</td>
        <td>X</td>
        <td>
          <Button {...buttonProps}>Send</Button>
          <Button {...buttonProps}>Import</Button>
          <Button {...buttonProps}>Forget</Button>
        </td>
      </tr>
    </tbody>
  </table>
);
