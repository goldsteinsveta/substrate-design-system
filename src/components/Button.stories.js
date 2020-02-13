import React from 'react';

import { Button } from './Button';
import { IconFont } from './IconFont';

export default {
  title: 'Design System/Button',
  component: Button,
};

export const buttons = () => (
  <>
    <Button>Default</Button>
    <Button appearance="secondary">Secondary</Button>
    <Button appearance="outline">Outline</Button>
  </>
);

const wrapProps = { className: 'w-100 justify-center' };

export const wrap = () => <Button wrapProps={wrapProps}>Default</Button>;

export const sizes = () => (
  <>
    <Button>Default</Button>
    <Button appearance="outline" size="small">
      Small Outline
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
