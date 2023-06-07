import { useEffect ,useState} from "react";
import { db } from "../firebase";
import { collection, getDocs ,onSnapshot} from "firebase/firestore";

const style = {
  // individual contacts white font bold text hover effect font size 1.5rem
  list: `text-white text-lg font-bold hover:text-blue cursor-pointer`,
};

function Contacts() {
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


  return(
    <div>
      <h2>Contacts</h2>
      <ul className={style.list}>
        {contacts.map((data) => (
          <li key={data.id}>{data.name}</li> 
        ))}
      </ul>
    </div>
  );

}


export default Contacts;
