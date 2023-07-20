/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  getDocs,
  onSnapshot,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
//import { Form } from "react-bootstrap";

const style = {
  button: `bg-dark-gray text-white p-2 rounded-xl shadow-xl hover:bg-gray hover:text-blue hover:shadow-20 cursor-pointer w-full`,
};
function NewConversationModal({ closeModal }) {
  const contactsCollection = collection(db, "contacts");
  //const chatCollection = collection(db, "chats");
  const [isChecked, setIsChecked] = useState(false);
  const [currentUser] = useAuthState(auth);

  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState(null);

  // getting all the datas from the databse and displaying it
  useEffect(() => {
    const getContacts = async () => {
      try {
        const querySnapshot = await getDocs(contactsCollection);
        const documents = querySnapshot.docs.map((doc) => doc.data());
        setContacts(documents);
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    };
    // Listen for changes in the collection and re-fetch contacts
    const unsubscribe = onSnapshot(contactsCollection, () => {
      getContacts();
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const combinedId =
      currentUser.uid > user.id
        ? currentUser.uid + user.id
        : user.id + currentUser.uid;
    console.log(combinedId);
    try {
      //const res = await getDocs(chatCollection, combinedId);

      const docRef = doc(db, "chats", combinedId);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, { messages: [] });
        console.log("Document written successfully!");

        //userChats
        try {
          await setDoc(doc(db, "userChats", currentUser.uid), {
            [combinedId + ".userInfo"]: {
              uid: user.id,
              displayName: user.name,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });
          console.log("Document written successfully!");
        } catch (error) {
          console.log("Error adding document: ", error);
        }
        try {
          await setDoc(doc(db, "userChats", user.id), {
            [combinedId + ".userInfo"]: {
              uid: currentUser.uid,
              displayName: currentUser.name,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });
          console.log("Document written successfully!");
          
        } catch (error) {
          console.log("Error adding document: ", error);
        }

        closeModal();
      }
    } catch (error) {
      console.log("Error adding document: ", error);
    }
  };

  //const newCollection = (e) => {
  //  const value = e.target.value.name;
  //  console.log(value)
  //}

  return (
    <>
      <Modal.Header>
        <button onClick={closeModal}>Conversational model</button>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          {contacts.map((data) => (
            <div key={data.id} className="flex justify-center text-center">
              <input
                value={data}
                type="checkbox"
                className="cursor-pointer"
                onChange={() => {
                  setIsChecked(true);
                  if (isChecked) {
                    setUser(data);
                    console.log(user);
                    setIsChecked(false);
                  }
                }}
              />
              <label>{data.name}</label>
            </div>
          ))}
          <Button className={style.button} type="submit">
            Create
          </Button>
        </form>
      </Modal.Body>
    </>
  );
}

export default NewConversationModal;
