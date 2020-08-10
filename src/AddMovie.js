import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import MovieRating from "./MovieRating";
import Notifications, {notify} from 'react-notify-toast';

const AddMovie = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const [newMovie, setNewMovie] = useState({rating:1});

  const toggle = () => setModal(!modal);
  const handelChange = (e) =>
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  const Rating = (Rate) => setNewMovie({ ...newMovie, rating: Rate });
const myColor = {background: 'red', text: "#000000"}

  return (
    <div>
      <Button onClick={toggle}>New Movie {buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <Notifications options={{zIndex: 200, top: '92px'}}/>
        <ModalHeader toggle={toggle} className="AddForm">
          Add New Movie
        </ModalHeader>
        <ModalBody className="AddForm">
          <div>
            <label className="AddFormItem">Title:</label>
            <input
              type="text"
              name="title"
              className="form-control"
              onChange={handelChange}
              value={newMovie.title}
            />
          </div>
          <div>
            <label className="AddFormItem">Year:</label>
            <input
              type="number"
              name="year"
              className="form-control"
              onChange={handelChange}
              value={newMovie.year}
            />
          </div>
          <div>
            <label className="AddFormItem">Director:</label>
            <input
              type="text"
              name="director"
              className="form-control"
              onChange={handelChange}
              value={newMovie.director}
              pattern="[A-Za-z]{3}"
            />
          </div>
          <div>
            <label className="AddFormItem">Image:</label>
            <input
              type="text"
              name="image"
              className="form-control"
              onChange={handelChange}
              value={newMovie.image}
            />
          </div>
          <div>
            <label className="AddFormItem">Synopsis:</label>
            <input
              type="text"
              name="synopsis"
              className="form-control"
              onChange={handelChange}
              value={newMovie.synopsis}
            />
          </div>
          <div>
            <MovieRating Rating={(R) => Rating(R)} />
          </div>
        </ModalBody>
        <ModalFooter className="AddForm">
          <Button
            type="submit"
            color="success"
            onClick={() => {
              if (
                newMovie.synopsis &&
                newMovie.director &&
                newMovie.year &&
                newMovie.title
              ) {
                props.add(newMovie);
                toggle();
              }
              else {notify.show("All fields are required!", "custom", 5000, myColor
              )}
            }}
          >
            Add
          </Button>
          <Button color="info" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddMovie;
