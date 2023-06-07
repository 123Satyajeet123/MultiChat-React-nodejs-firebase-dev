import Button from "react-bootstrap/Button";
import Chats from "./Chats";

const style = {
  // chatroom on right covering 3/4th of inner screen and under navbar
  chatroom: `flex flex-col relative top-[15vh] left-[20vh] h-[70vh] w-[50vw] bg-gray shadow-2xl rounded-xl text-white p-2`,
  // making the chatroom box width decrease as the screen size decreases
};

function Chatroom() {
  return (
    <div className={style.chatroom}>
      <Chats />

      <input
        type="text"
        placeholder="Write your message!"
        className="absolute top-4 w-[47vw] focus:outline-none focus:placeholder-gray-400 text-black placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3 mt-[60vh] h-11 ml-2 "
      />
      <Button className="absolute w-15 h-10 top-[62.5vh] left-[44vw] bg-dark-blue">
        Send
      </Button>
    </div>
  );
}

export default Chatroom;
