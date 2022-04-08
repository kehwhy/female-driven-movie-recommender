import { Heading} from 'evergreen-ui';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap'
import './App.css';
import FilmFinder from './features/FilmFinder/FilmFinder';
import { selectCurrentMovie } from './features/CurrentMovieDisplay/CurrentMovieSlice';
import CurrentMovieDisplay from './features/CurrentMovieDisplay/CurrentMovieDisplay.js'
import { closeDialog, selectIsDialogShown } from './features/CurrentMovieDisplay/CurrentMovieSlice';
import title from './title.png'

function App() {
  // dispatch to store
  const dispatch = useDispatch()

  // selecting data from store
  const isShown = useSelector(selectIsDialogShown)
  const currentMovie = useSelector(selectCurrentMovie)

  return (
    <div className="App">
    <Modal show={isShown} fullscreen={true} onHide={() => dispatch(closeDialog())}>
    {/* <Modal.Title><Heading size={900}>{currentMovie.Title}</Heading></Modal.Title> */}
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body><CurrentMovieDisplay/></Modal.Body>
      </Modal>
      <img className="App_heading" src={title} alt="Female-Driven films"></img>
      <div className="App_review_button_wrapper">
      </div>
      <FilmFinder />
    </div>
  );
}

export default App;
