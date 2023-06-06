//import Navbar from "./components/Navbar";
import { GoogleButton } from "react-google-button";
import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Dashboard from "./components/Dashboard";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const style = {
  appContainer: `flex items-center justify-center h-screen text-center bg-dark-gray`,
  sectionContainer: `flex flex-col items-center justify-center h-[90vh] w-[150vh] bg-gray mt-6 shadow-xl border relative rounded-xl`,
  SignIn: `flex flex-col items-center justify-center h-[80vh] w-[60vh] bg-white shadow-xl border relative rounded-xl z-10 -mt-6`,
  button: `bg-dark-gray text-white p-2 rounded-xl shadow-xl hover:bg-gray hover:text-blue hover:shadow-20 cursor-pointer`,
};

function App() {
  // checking if user is signed in or not
  const [user] = useAuthState(auth);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      cookies.set("auth-token", result.user.uid);
    } catch (error) {
      console.log(error.message);
    }
  };

  function SignIn() {
    return (
      <div className={style.SignIn}>
        <GoogleButton onClick={signInWithGoogle} />
      </div>
    );
  }
  return (
    // creating a div and applying tailwind css classes
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {user ? (
          <>
            {/*if user is signed in then show the navbar and pass the user as props */}
            <Dashboard />
          </>
        ) : (
          <SignIn />
        )}
      </section>
    </div>
  );
}

export default App;
