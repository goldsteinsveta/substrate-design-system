import React from 'react';

import { Button } from './Button';
import { IconFont } from './IconFont';

export default {
  title: 'Design System/Button',
  component: Button,
};

export const buttons = () => (
  <>
    <Button appearance="primary">Primary</Button>
    <Button appearance="secondary">Secondary</Button>
    <Button appearance="outline">Outline</Button>
  </>
);

export const sizes = () => (
  <>
    <Button appearance="primary">Default</Button>
    <Button appearance="outline" size="small">
      Small Outline
    </Button>
    <Button appearance="primary" size="tiny" shape="pill">
      <IconFont icon="times" size="tiny" />
    </Button>
  </>
);

export const loading = () => (
  <>
    <Button appearance="primary" isLoading>
      Primary
    </Button>
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
    <Button appearance="primary" isDisabled>
      Primary
    </Button>
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
    <Button appearance="primary" shape="pill" size="small">
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
