import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components'
import Button from "./Button"

const Modal = () => { 
  const [table, setTable] = useState({});


  return (
    <StyledPopup
    trigger={
      props => <span><Button type="light" props={{...props}}>Create</Button></span>}
    modal
        closeOnDocumentClick
    >
      <form className="flex flex-col items-center">
        <div className="flex flex-row items-center border-b border-primary py-2">
          <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Leaderboard Name" aria-label="Leaderboard Name" />
          <Button type="primary">Submit</Button>
          <Button type="light">Cancel</Button>
        </div>
      </form>
    </StyledPopup>
  )};

export default Modal

const StyledPopup = styled(Popup)`
  &-overlay {
    width: 100%;
    background-color: rgba(0,0,0,0.7);
  }
  &-content {
    background-color: white;
    width: 50%;
    padding: 30px;
  }
`;
