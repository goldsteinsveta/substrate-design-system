import React from 'react';
import PropTypes from 'prop-types';
import { IconFont } from './IconFont';

const NodeItem = ({ title, current }) => {
  return (
    <div className="NodeItemWrap w-100 inline-flex b--red ba br2">
      <div className="NodeItem w-100 bg-black dim flex justify-between items-center ph3 pv2 white">
        {current ? <IconFont icon="circle" size="small" /> : <IconFont icon="circle" size="tiny" />}
        {title}
      </div>
    </div>
  );
};
NodeItem.propTypes = {
  title: PropTypes.string.isRequired,
  current: PropTypes.bool,
};
NodeItem.defaultProps = {
  current: false,
};

export function NodeSelector({ nodes }) {
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
        return <NodeItem current={current} title={title} />;
      })}
      {nodeItems.rest.length > 0 && (
        <div className="NodeSelector w-100 absolute child bg-dark-gray shadow-4">
          {nodeItems.rest.map(({ title, current }) => {
            return <NodeItem current={current} title={title} />;
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
};

NodeSelector.defaultProps = {};
