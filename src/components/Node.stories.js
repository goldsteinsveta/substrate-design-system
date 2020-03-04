import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { NodeList } from './NodeList';

export default {
  title: 'Design System/Node',
  component: NodeList,
  decorators: [withKnobs],
};

export const knobbedNodeList = () => {
  const nodeData = object('nodeData', [
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
  return <NodeList nodeData={nodeData} />;
};

export const knobbedNodeLists = () => {
  const nodeData1 = object('nodeData', [
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
  const nodeData2 = object('nodeData – 2', [
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
      <NodeList nodeData={nodeData1} />
      <span className="Connection bb h-100 w-50" />
      <NodeList nodeData={nodeData2} />
    </div>
  );
};
