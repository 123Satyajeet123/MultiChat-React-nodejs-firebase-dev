//import Navbar from "./components/Navbar";
import { GoogleButton } from "react-google-button";
import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "./components/Navbar";
const style = {
  appContainer: `flex items-center justify-center h-screen text-center bg-dark-gray`,
  sectionContainer: `flex flex-col items-center justify-center h-[90vh] w-[150vh] bg-gray mt-6 shadow-xl border relative rounded-xl`,
  SignIn: `flex flex-col items-center justify-center h-[80vh] w-[60vh] bg-white shadow-xl border relative rounded-xl z-10 -mt-6`,
  logout: `absolute top-0 right-0 bg-white text-gray p-2 rounded-xl shadow-xl hover:bg-gray hover:text-blue hover:shadow-20 cursor-pointer`,
  button: `bg-dark-gray text-white p-2 rounded-xl shadow-xl hover:bg-gray hover:text-blue hover:shadow-20 cursor-pointer`,
};

// const handleSignOut = async () => {
//   await auth
//     .signOut()
//     .then(() => {
//       // Sign-out successful.
//       console.log("User signed out");
//     })
//     .catch((error) => {
//       // An error happened.
//       console.error("Error signing out:", error);
//     });
// };

function App() {
  // checking if user is signed in or not
  const [user] = useAuthState(auth);

  return (
    // creating a div and applying tailwind css classes
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {user ? (
          <>
            <SignOut />
            <Navbar />
          </>
        ) : (
          <SignIn />
        )}
      </section>
    </div>
  );
}

function SignIn() {
  return (
    <div className={style.SignIn}>
      <GoogleButton onClick={() => signInWithPopup(auth, googleProvider)} />
    </div>
  );
}
function SignOut() {
  return (
    auth.currentUser && (
      <button className={style.logout} onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

export default App;
