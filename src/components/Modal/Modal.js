import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components'

const Modal = () => { 
  const [table, setTable] = useState({});


  return (
    <StyledPopup
        trigger={<button className="button">Create</button>}
        modal
        closeOnDocumentClick
    >
      <form>
        <label for="title">Leaderboard name:</label><br />
        <input type="text" id="title" name="title" /><br />
        <label for="name">Full name: </label><br />
        <input type="text" id="fname" name="fname" /><br />
        <label for="score">Score: </label><br />
        <input type="text" id="score" name="score" /><br />
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
