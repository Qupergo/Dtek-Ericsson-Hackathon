import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components'

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
    trigger={<button className="button button py-2 px-4 rounded-lg inline-flex flex-row items-center space-x-2 duration-200 text-black hover:bg-secondary"><span className="font-semibold">Create</span></button>}
    modal
    >
        {getTitle ? 
          <form onSubmit={getTitle ? handleTitleSubmission : handlePersonSubmission}>
              <label for="title">Leaderboard name:</label><br />
              <input type="text" id="title" name="title" onChange={handleTitleChange} value={getTitle ? title : ""}/><br />
              <button onClick={handleTitleSubmission}>Next</button>
              <button onClick={handleCancel}>Cancel</button>
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
