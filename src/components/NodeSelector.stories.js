import React from 'react';
import { withKnobs, object, select } from '@storybook/addon-knobs';
import { NodeSelector } from './NodeSelector';
import { NodeConnector } from './NodeConnector';

export default {
  title: 'Design System/Node/NodeSelector',
  component: NodeSelector,
  decorators: [withKnobs],
};

export const knobbedNodeSelector = () => {
  const appearance = select('appearance', ['primary', 'secondary'], 'secondary');
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
  return <NodeSelector nodes={nodes} appearance={appearance} />;
};

export const NodeSelectorsLichen = () => {
  const nodes1 = [
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
  ];
  const nodes2 = [
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
  ];
  return (
    // TODO: NodeSelectorList
    <div className="NodeWrap w-100 flex items-center">
      <NodeSelector nodes={nodes1} appearance="primary" />
      <NodeConnector />
      <NodeSelector nodes={nodes2} />
    </div>
  );
};
