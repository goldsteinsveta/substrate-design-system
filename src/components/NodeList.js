// TODO:
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
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

export function NodeList({ nodeData }) {
  return (
    <>
      <div className="NodeBox hide-child relative w-100">
        {nodeData.map(({ title, current }) => {
          if (current) {
            return <NodeItem current={current} title={title} />;
          }
        })}

        <div className="NodeList w-100 absolute child bg-dark-gray shadow-4">
          {nodeData.map(({ title, current }) => {
            if (!current) {
              return <NodeItem current={current} title={title} />;
            }
          })}
        </div>
      </div>
    </>
  );
}
NodeList.propTypes = {
  nodeData: PropTypes.shape({
    title: PropTypes.string,
    current: PropTypes.bool,
  }).isRequired,
};

NodeList.defaultProps = {};
