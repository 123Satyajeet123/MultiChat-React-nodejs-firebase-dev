import Button from "react-bootstrap/Button";

const style = {
  // chatroom on right covering 3/4th of inner screen and under navbar
  chatroom:
    "absolute flex top-20 right-4 h-[75vh] w-[105vh] shadow-2xl bg-gray rounded-xl text-white p-2",
};

function Chatroom() {
  
  return (
    <div className={style.chatroom}>
      <input
        type="text"
        placeholder="Write your message!"
        className="absolute top-10 w-[90vh] focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3 mt-[60vh] h-11 ml-2 "
      />
      <Button className="w-15 h-10 left-[94vh] inline-block absolute bg-dark-blue top-[66vh]">Send</Button>
    </div>
  );
}

export default Chatroom;
