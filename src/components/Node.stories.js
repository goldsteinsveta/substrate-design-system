import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { NodeSelector } from './NodeSelector';
import { NodeConnector } from './NodeConnector';

export default {
  title: 'Design System/Node/NodeSelector',
  component: NodeSelector,
  decorators: [withKnobs],
};

export const knobbedNodeSelector = () => {
  const nodes = object('nodes', [
    {
      title: 'Kusama',
      current: true,
    },
    {
      title: 'Westend',
      current: false,
    },
    {
      title: 'Chaos Net',
      current: false,
    },
  ]);
  return <NodeSelector nodes={nodes} />;
};

export const knobbedNodeSelectors = () => {
  const nodes1 = object('nodes – 1', [
    {
      title: 'Polkadot',
      current: true,
    },
    {
      title: 'Kusama',
      current: false,
    },
    {
      title: 'Westend',
      current: false,
    },
    {
      title: 'Chaos Net',
      current: false,
    },
  ]);
  const nodes2 = object('nodes – 2', [
    {
      title: 'Light Node',
      current: true,
    },
    {
      title: 'Extension',
      current: false,
    },
    {
      title: 'Web3',
      current: false,
    },
  ]);
  return (
    <div className="NodeWrap flex items-center">
      <NodeSelector nodes={nodes1} />
      <NodeConnector />
      <NodeSelector nodes={nodes2} />
    </div>
  );
};
