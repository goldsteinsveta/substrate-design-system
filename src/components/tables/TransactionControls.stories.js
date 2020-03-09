import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { AddressCard } from '../AddressCard';

export default {
  title: 'Design System/TransactionControls',
  excludeStories: /.*Data$/,
  decorators: [withKnobs],
};

export const TransactionControlsInContext = () => (
  <>
    <table className="transactionTable collapse w-100">
      <tbody>
        <tr>
          <th className="tl code f7 fw3 ph2">From</th>
          <td>
            <AddressCard />
          </td>
        </tr>
        <tr>
          <th className="tl code f7 fw3 ph2">To</th>
          <td>
            <AddressCard />
          </td>
        </tr>
        <tr className="row-total">
          <th className="tl code f7 fw3 ph2 pv3">Ammount</th>
          <td>
            <h3 className="pl3 ml4 red f5">765KSM</h3>
          </td>
        </tr>
        <tr>
          <th className="tl code f7 fw3 ph2 pv3">Fee</th>
          <td>
            <h3 className="pl3 ml4 red f5">0.765KSM</h3>
          </td>
        </tr>
        <tr className="row-total">
          <th className="tl code f7 fw3 ph2 pv3">Total</th>
          <td>
            <h3 className="pl3 ml4 red">766.765KSM</h3>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);
