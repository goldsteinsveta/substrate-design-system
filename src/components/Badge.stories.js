import React from 'react';
import { Badge } from './Badge';
import { IconFont } from './IconFont';

export default {
  title: 'Design System/Badge',
  component: Badge,
};

export const all = () => (
  <div>
    <Badge status="positive">Positive</Badge>
    <Badge status="negative">Negative</Badge>
    <Badge status="neutral">Neutral</Badge>
    <Badge status="error">Error</Badge>
    <Badge status="warning">Warning</Badge>
  </div>
);

export const withIcon = () => (
  <Badge status="warning">
    <IconFont icon="check" inline size="tiny" /> with icon
  </Badge>
);

withIcon.story = {
  name: 'with icon',
};
