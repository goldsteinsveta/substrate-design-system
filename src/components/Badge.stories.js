import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Badge } from './Badge';
import { IconFont } from './IconFont';

export default {
  title: 'Design System/Badge',
  component: Badge,
  decorators: [withKnobs],
};

export const knobbedBadge = () => {
  const children = text('Badge Content', '123');
  const status = select('status', ['positive', 'negative', 'neutral', 'error', 'warning'], 'error');
  return <Badge status={status}>{children}</Badge>;
};

export const colors = () => (
  <div>
    <Badge status="positive">Positive</Badge>
    <Badge status="negative">Negative</Badge>
    <Badge status="neutral">Neutral</Badge>
    <Badge status="error">Error</Badge>
    <Badge status="warning">Warning</Badge>
  </div>
);

export const withIconNode = () => (
  <Badge status="positive">
    <IconFont icon="check" inline size="tiny" />
    with icon
  </Badge>
);
