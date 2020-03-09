import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { FormFrame } from './FormFrame';

import { Button } from './Button';
import { IconFont } from './IconFont';
import { NewMnemonic } from './Input.stories';
import { TransactionControlsInContext } from './tables/TransactionControls.stories';

export default {
  title: 'Design System/forms/FormFrame',
  component: FormFrame,
  decorators: [withKnobs],
};

export const FormFrameNewMnemonic = () => {
  const actionButtons = [
    <Button appearance="secondary">
      <IconFont icon="copy" size="small" />
    </Button>,
    <Button appearance="secondary">
      <IconFont icon="address-card" size="small" />
    </Button>,
  ];
  const tabs = [<Button>12 words</Button>, <Button appearance="none">24 words</Button>];

  return (
    <FormFrame tabs={tabs} actionButtons={actionButtons}>
      <NewMnemonic />
    </FormFrame>
  );
};

export const FormFrameTransfer = () => {
  const actionButtons = [
    <Button appearance="secondary">
      <IconFont icon="download" size="small" />
    </Button>,
  ];
  const tabs = [<Button>Transaction</Button>];

  return (
    <div className="mw6">
      <FormFrame tabs={tabs} actionButtons={actionButtons}>
        <TransactionControlsInContext />
      </FormFrame>
    </div>
  );
};
