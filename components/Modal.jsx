import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components'
import Button from "./Button"
import ButtonGroup from './ButtonGroup';


const Modal = ({board}) => { 

  const [getTitle, setGetTitle] = useState(true)

  const [title, setTitle] = useState()

  const [person, setPerson] = useState({});

  const [persons, setPersons] = useState([]);


  const handleTitleSubmission = () => {
    setGetTitle(false);
  }

  const handlePersonSubmission = (event) => {
      event.preventDefault()
      setPersons([...persons, person]);
      setPerson({})
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handlePersonChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPerson(values => ({...values, [name]: value}))
  }

  const handleBoardSubmission = () => {
    let board = {}
    let _persons = [...persons, person]
    board[title] = _persons
    updateBoard(board)
    handleCancel()
  }

  const updateBoard = board => {

  }

  const handleCancel = () => {
    setGetTitle(true)
    setTitle("")
    setPerson({})
    setPersons([])
  }

  return (
    <StyledPopup
    trigger={
      props => <span><Button type="light" props={{...props}}>Create</Button></span>}
    modal
    >
      {close =>  
      <>
        {getTitle ? 
          <form className="flex flex-col items-center" onSubmit={getTitle ? handleTitleSubmission : handlePersonSubmission}>
            <div className="flex flex-row items-center border-b border-primary py-2">
              <label for="title"></label><br />
              <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Leaderboard Name" aria-label="Leaderboard Name" type="text" id="title" name="title" onChange={handleTitleChange} value={getTitle ? title : ""}/>
              <Button type="primary" onClick={handleTitleSubmission}>Next</Button>
              <Button type="light" onClick={() => {
                handleCancel();
                close();
              }}>Cancel</Button>
            </div>
          </form>
              :
            <form>
              <div className="">
                <input className="shadow-md rounded appearance-none bg-gray-100 border-none w-full text-gray-700 mb-2 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Nick" aria-label="Nick" type="text" id="name" name="name" onChange={handlePersonChange} value={person.name || ""} /><br />
                <input className="shadow-md rounded appearance-none bg-gray-100 border-none w-full text-gray-700 mb-4 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Score" aria-label="Score" type="text" id="score" name="score" onChange={handlePersonChange} value={person.score || ""} /><br />
              </div>
                <div className="w-full flex flex-row justify-between items-center space-x-2">
                  <div className="flex flex-row space-x-2">
                  <Button type="secondary" onClick={handlePersonSubmission}>Next</Button>
                  <Button type="primary" onClick={() => {handleBoardSubmission(); close()}}>Done</Button>
                  </div>
                  <Button type="light" onClick={() => {handleCancel(); close()}}>Cancel</Button>
                </div>
            </form>
        }
      </>
      }
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
