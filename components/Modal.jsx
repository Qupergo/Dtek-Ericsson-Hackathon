import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components'
import Button from "./Button"

const Modal = () => { 

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

  const handleCancel = (event) => {
    event.preventDefault()
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
        {getTitle ? 
          <form className="flex flex-col items-center" onSubmit={getTitle ? handleTitleSubmission : handlePersonSubmission}>
            <div className="flex flex-row items-center border-b border-primary py-2">
              <label for="title">Leaderboard name:</label><br />
              <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Leaderboard Name" aria-label="Leaderboard Name" type="text" id="title" name="title" onChange={handleTitleChange} value={getTitle ? title : ""}/>
              <Button type="primary" onClick={handleTitleSubmission}>Next</Button>
              <Button type="light" onClick={handleCancel}>Cancel</Button>
            </div>
          </form>
              :
            <form>
              <label for="name">Full name: </label><br />
              <input type="text" id="name" name="name" onChange={handlePersonChange} value={person.name || ""} /><br />
              <label for="score">Score: </label><br />
              <input type="text" id="score" name="score" onChange={handlePersonChange} value={person.score || ""}/><br />
              <button onClick={handlePersonSubmission}>Next</button>
              {/* <button onClick={}>Done</button> */}
              <button onClick={handleCancel}>Cancel</button>
            </form>
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
