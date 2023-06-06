import { Modal } from "react-bootstrap";

function NewConversationModal({ closeModal }) {
  return (
    <Modal.Header>
      <button onClick={closeModal}>Conversational model</button>
    </Modal.Header>
  );
}

export default NewConversationModal;
