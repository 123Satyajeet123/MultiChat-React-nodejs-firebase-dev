const style = {
  // individual message box appears on the right side of the screen
  chat: "flex flex-col items-end justify-end border bg-gray-200 rounded-xl shadow-xl m-2",
  // chatInfo contains the name of the user who sent the message
  chatInfo: "flex flex-row items-center justify-end mr-2",
  // chatContent contains the message sent by the user
  chatContent: "flex flex-row justify-left max-w-[40%] text-left w-[40%]  p-1",
};

function Chat() {
  return (
    <div className={style.chat}>
      <div className={style.chatInfo}>
        <p>John Doe</p>
      </div>
      <div className={style.chatContent}>
      Heyguys! How are you Is everything going fine
      </div>
    </div>
  );
}

export default Chat;
