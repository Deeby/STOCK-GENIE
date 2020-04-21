import React, { useState } from 'react';
import styled from 'styled-components';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import { StylesProvider } from '@material-ui/core';
import ModalContents from './ModalContents';

const ModalWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const AddIcon = styled(ShowChartIcon)`
  /* color: red; */
  font-size: 3rem;
`;

const Texts = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: bold;
`;

function AddStockModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <button>
      <ModalWrapper onClick={handleOpen}>
        <StylesProvider injectFirst>
          <AddIcon />
        </StylesProvider>
        <Texts>
          <span>종목 추가</span>
        </Texts>
      </ModalWrapper>
      <ModalContents open={open} onClose={handleClose} />
    </button>
  );
}

export default AddStockModal;
