import { Modal, Form, Button } from "react-bootstrap";
import { db } from "../firebase";
import { useState } from "react";
import {
  collection,
  addDoc,
} from "firebase/firestore";

// eslint-disable-next-line react/prop-types
function NewContactModal({ closeModal }) {
  const [username, setName] = useState("");
  const [userid, setId] = useState("");
  const Collection = collection(db, "contacts");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add the contact to Firestore collection
    try {
      await addDoc(Collection, {
        id: userid,
        name: username,
      });

      console.log("Document written successfully!");
    } catch (error) {
      console.log("Error adding document: ", error);
    }

    // Clear the form inputs
    setName("");
    setId("");

    console.log("Form cleared successfully!", username, userid);
    closeModal();
  };

  return (
    <>
      <Modal.Header>
        <h1>Contact Modal</h1>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              value={userid}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" className={"bg-dark-blue mt-3"}>
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
}

export default NewContactModal;
