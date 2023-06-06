const style = {
  // chatroom on right covering 3/4th of inner screen and under navbar
  chatroom: `relative top-5 flex flex-col items-center justify-center h-[80vh] w-[99vh] bg-gray mt-6 shadow-xl border`,

    }

function Chatroom() {
  return (
    <div className={style.chatroom}>Chatroom</div>
  )
}

export default Chatroom