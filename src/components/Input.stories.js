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
  const appearance = select('appearance', ['primary', 'secondary', 'text', 'code'], 'primary');
  const shape = select('shape', ['rect', 'pill'], 'rect');
  const center = boolean('center', false);
  const label = text('lable', 'input label');
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
