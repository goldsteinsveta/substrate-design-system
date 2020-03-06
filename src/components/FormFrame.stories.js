import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { FormFrame } from './FormFrame';

import { Button } from './Button';
import { IconFont } from './IconFont';
import { NewMnemonic } from './Input.stories';

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
