import React, { useEffect } from 'react';
import { Backdrop, ModalWindovDiv } from './ModalWindow.styled';
import { useDispatch } from 'react-redux';

import { createPortal } from 'react-dom';
import { modalShow } from '../../redux/slice';

const modalRoot = document.querySelector('#modal-root');
const ModalWindow = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleClick = e => {
      if (e.code === 'Escape') dispatch(modalShow(false));
    };
    window.addEventListener('keydown', handleClick);
    // 👇️ remove the event listener when the component unmounts
    return () => window.removeEventListener('keydown', handleClick);
  }, [dispatch]);
  const handleBackdrop = e => {
    if (e.target === e.currentTarget) dispatch(modalShow(false));
  };
  return createPortal(
    <Backdrop onClick={handleBackdrop}>
      <ModalWindovDiv>
        <button onClick={() => dispatch(modalShow(false))}>Close</button>
        {children}
      </ModalWindovDiv>
    </Backdrop>,
    modalRoot
  );
};

export default ModalWindow;
