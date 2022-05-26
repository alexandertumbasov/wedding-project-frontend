import React, { FC, useEffect, useLayoutEffect } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, closeModal }) => {
  return (
    <ReactModal isOpen={isOpen} appElement={document.body}>
      <div>
        <span onClick={closeModal}>CLOSE</span>
      </div>
      body
    </ReactModal>
  );
};

export default Modal;
