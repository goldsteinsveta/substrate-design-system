import React, { Children } from 'react';
import { PropTypes } from 'prop-types';
import tachyons from 'tachyons-components';
import ReactModal from 'react-modal';

const Card = tachyons('div')`
  absolute 
  w-50-l w-70-m w-90-s 
  top-0 pv4 ph5 
  bg-white shadow-4 
`;
const CardWrapper = tachyons('div')`
  flex items-center justify-center 
  absolute
  bottom-0 left-0 right-0 top-0
`;

export function Modal({ isOpen, onClose, children }) {
  const actions = {
    onClose,
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      ariaHideApp={false}
      closeTimeoutMS={200}
      style={{
        overlay: {
          backgroundColor: 'rgba(255, 255, 255, .7)',
          // 1 less that max, to allow intercom over the top
          zIndex: 2147483646,
          overflowX: 'hidden',
          overflowY: 'auto',
        },
        content: {
          left: '0',
          top: '7rem',
          right: '0',
          backgroundColor: 'transparent',
          border: 'none',
          overflow: 'visible',
          padding: '0',
          width: '100%',
          margin: 'auto',
        },
      }}
    >
      <CardWrapper onClick={onClose}>
        <Card>{Children.only(children(actions))}</Card>
      </CardWrapper>
    </ReactModal>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};
