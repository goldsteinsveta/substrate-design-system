import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Link } from './Link';
import { IconFont } from './IconFont';

export default {
  title: 'Design System/Link',
  component: Link,
  decorators: [withKnobs],
};

export const knbbedLink = () => {
  const children = text('Link Content', 'Click Me!');
  const appearance = select('appearance', ['underline', 'color', 'inverted'], 'underline');
  const href = text('href', '');
  const target = text('target', '');

  return (
    <Link appearance={appearance} href={href} target={target}>
      {children}
    </Link>
  );
};
export const all = () => (
  <>
    <Link href="https://parity.io">Underline</Link>
    <Link appearance="color" href="https://parity.io" target="_blank">
      Color
    </Link>
    <Link appearance="inverted" href="https://parity.io">
      Inverted <IconFont block={false} icon="times" size="small" />
    </Link>
  </>
);
