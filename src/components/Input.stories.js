import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Input } from './Input';

export default {
  title: 'Design System/forms/Input',
  component: Input,
  decorators: [withKnobs],
};

export const KnobbedInput = () => {
  const value = text('value', 'hello world');
  const appearance = select(
    'appearance',
    ['primary', 'secondary', 'underline', 'text', 'code'],
    'primary'
  );
  const shape = select('shape', ['rect', 'pill'], 'rect');
  const center = boolean('center', false);
  const label = text('label', 'input label');
  const hideLabel = boolean('hideLabel', false);
  const orientation = select('orientation', ['vertical', 'horizontal'], 'vertical');
  const icon = text('icon', 'envelope');
  const error = text('error', null);
  const lastErrorValue = text('lastErrorValue', null);
  const wrapClass = text('wrapClass', null);

  return (
    <Input
      id="id"
      value={value}
      appearance={appearance}
      shape={shape}
      center={center}
      label={label}
      hideLabel={hideLabel}
      orientation={orientation}
      icon={icon}
      error={error}
      lastErrorValue={lastErrorValue}
      wrapClass={wrapClass}
    />
  );
};

export const CheckMnemonic = () => {
  return (
    <>
      <Input appearance="secondary" label="1&nbsp;" wrapClass="red" orientation="horisontal" />
      <Input appearance="secondary" label="10" wrapClass="red" orientation="horisontal" />
      <Input appearance="secondary" label="7&nbsp;" wrapClass="red" orientation="horisontal" />
      <Input appearance="secondary" label="5&nbsp;" wrapClass="red" orientation="horisontal" />
    </>
  );
};
