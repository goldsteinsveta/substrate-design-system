import React from 'react';

import { Link } from './Link';
import { IconFont } from './IconFont';

export default {
  title: 'Design System/Link',
  component: Link,
};

export const all = () => (
  <>
    <Link href="https://parity.io">Underline</Link>
    <Link appearance="color" href="https://parity.io" target="_blank">
      Color
    </Link>
    <Link appearance="inverted" href="https://parity.io">
      Inverted <IconFont block={false} icon="times" size="tiny" />
    </Link>
  </>
);
