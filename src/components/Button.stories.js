import React from 'react';
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs';

import { Button } from './Button';
import { IconFont } from './IconFont';

export default {
  title: 'Design System/Button',
  component: Button,
  decorators: [withKnobs],
};

export const Knobs = () => {
  const children = text('Button Content', 'Click Me!');

  // select args: label, options, default, *groupID*
  const appearance = select('appearance', ['primary', 'secondary', 'outline'], 'primary');
  const size = select('size', ['tiny', 'small', 'medium'], 'medium');
  const isDisabled = boolean('isDisabled', false);
  const isLoading = boolean('isLoading', false);
  const loadingText = text('loadingText', 'Loading...');

  const wrapProps = object('wrapProps', { className: 'w-100 justify-center' });

  return (
    <Button
      appearance={appearance}
      size={size}
      isDisabled={isDisabled}
      isLoading={isLoading}
      loadingText={loadingText}
      wrapProps={wrapProps}
    >
      {children}
    </Button>
  );
};

export const appearances = () => (
  <>
    <Button>Default</Button>
    <Button appearance="secondary">Secondary</Button>
    <Button appearance="outline">Outline</Button>
  </>
);

export const sizes = () => (
  <>
    <Button>Default</Button>
    <Button appearance="outline" size="small">
      Small Outline
    </Button>
    <Button appearance="outline" size="tiny">
      Tiny Outline
    </Button>
    <Button size="tiny" shape="pill">
      <IconFont icon="times" size="tiny" />
    </Button>
  </>
);

export const loading = () => (
  <>
    <Button isLoading>Default</Button>
    <Button appearance="secondary" isLoading>
      Secondary
    </Button>
    <Button appearance="outline" isLoading loadingText="Wait...">
      Outline
    </Button>
  </>
);

export const disabled = () => (
  <>
    <Button isDisabled>Default</Button>
    <Button appearance="secondary" isDisabled>
      Secondary
    </Button>
    <Button appearance="outline" isDisabled>
      Outline
    </Button>
  </>
);

export const shapePill = () => (
  <>
    <Button shape="pill" size="small">
      <IconFont lib="web3" icon="identicon" aria-label="identicon" size="small" />
    </Button>
    <Button appearance="secondary" shape="pill">
      <IconFont lib="web3" icon="identicon" aria-label="identicon" size="medium" />
    </Button>
    <Button appearance="outline" shape="pill">
      <IconFont lib="web3" icon="identicon" aria-label="identicon" size="medium" />
    </Button>
  </>
);
