import { auth } from "../firebase";

const style={
  // make to font bold and change the font family to discord font
  heading: `absolute left-3 font-bold font-discord text-2xl`,
  logout: `absolute right-5 bg-white text-gray p-2 rounded-xl shadow-xl hover:bg-gray hover:text-blue hover:shadow-20 cursor-pointer`,
  // navbar component on top of the chatroom component
  navbar: `flex absolute top-0 left-0 items-center justify-between h-16 w-full bg-dark-gray border border-black rounded-xl p-4 text-white p-2 shadow-xl`, 
}

function Navbar() {
  return (
    // display signout button if user is signed in


    <div className={style.navbar}>
        {<SignOut className/>}
        <h2 className={style.heading}>WELOME TO CHATTERS-SPACE🔥</h2>
    </div>
  )
}
function SignOut (){
  return (
     auth.currentUser && (
      <button className={style.logout} onClick={googleSignOut}>
        Sign Out
      </button>
    )
  );
}
const googleSignOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.log(error.message);
  }
};


export default Navbar