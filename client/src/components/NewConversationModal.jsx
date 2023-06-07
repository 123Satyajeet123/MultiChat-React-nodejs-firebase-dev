/* eslint-disable react/prop-types */
import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
const style = {
  button: `bg-dark-gray text-white p-2 rounded-xl shadow-xl hover:bg-gray hover:text-blue hover:shadow-20 cursor-pointer w-full`,
};
function NewConversationModal({ closeModal }) {
  const Collection = collection(db, "contacts");

  const [contacts, setContacts] = useState([]);
  // getting all the datas from the databse and displaying it
  useEffect(() => {
    const getContacts = async () => {
      try {
        const querySnapshot = await getDocs(Collection);
        const documents = querySnapshot.docs.map((doc) => doc.data());
        setContacts(documents);
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    };
    // Listen for changes in the collection and re-fetch contacts
    const unsubscribe = onSnapshot(Collection, () => {
      getContacts();
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Modal.Header>
        <button onClick={closeModal}>Conversational model</button>
      </Modal.Header>
      <Modal.Body>
        <form>
          {contacts.map((data) => (
            <div key={data.id} className="flex justify-center text-center">
              <input type="checkbox" />
              <label>{data.name}</label>
            </div>
          ))}
          <Button className={style.button}>Create</Button>
        </form>
      </Modal.Body>
    </>
  );
}

export default NewConversationModal;
