import React from 'react';
import PropTypes from 'prop-types';
import tachyons from 'tachyons-components';
import { IconFont } from './IconFont';

const APPEARANCES = {
  primary: 'fw6 ttu',
  secondary: '',
};

const Node = tachyons('div')`
  bg-black dim flex justify-between items-center pa2 
  ${props => (props.current ? 'b--gray ba br2 li green' : 'silver')};
`;
const NodeTitle = tachyons('span')`
  code truncate white ph1
  ${props => APPEARANCES[props.appearance]}
`;

const NodeItem = ({ title, current, appearance }) => {
  return (
    <div className="NodeItemWrap">
      <Node current={current}>
        <IconFont icon="circle" />
        <NodeTitle appearance={appearance}>{title}</NodeTitle>
        <span />
      </Node>
    </div>
  );
};
NodeItem.propTypes = {
  title: PropTypes.string.isRequired,
  current: PropTypes.bool,
  appearance: PropTypes.oneOf(Object.keys(APPEARANCES)),
};
NodeItem.defaultProps = {
  current: false,
  appearance: 'secondary',
};

export function NodeSelector({ nodes, appearance }) {
  const nodeItems = {
    current: [],
    rest: [],
  };

  nodes.forEach(nodeItem => {
    const items = nodeItem.current ? nodeItems.current : nodeItems.rest;
    items.push(nodeItem);
  });

  return (
    <div className="NodeBox hide-child relative w-100">
      {nodeItems.current.map(({ title, current }) => {
        return <NodeItem appearance={appearance} current={current} title={title} />;
      })}
      {nodeItems.rest.length > 0 && (
        <div className="NodeSelector w-100 absolute z-1 child bg-dark-gray shadow-4 br2 overflow-hidden">
          {nodeItems.rest.map(({ title, current }) => {
            return <NodeItem appearance={appearance} current={current} title={title} />;
          })}
        </div>
      )}
    </div>
  );
}

NodeSelector.propTypes = {
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      current: PropTypes.bool,
    })
  ).isRequired,
  appearance: PropTypes.oneOf(Object.keys(APPEARANCES)),
};

NodeSelector.defaultProps = {
  appearance: 'secondary',
};
