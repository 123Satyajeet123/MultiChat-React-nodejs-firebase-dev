import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Chatroom from "./Chatroom";
//const style = {
  // navbar at top of the screen sidebar on left covering 1/4th of the screen and chatroom on right covering 3/4th of the screen
  //dashboard: `flex flex-row items-center justify-center h-screen w-screen bg-dark-gray`,
//};
function Dashboard() {
  return (
    <div className="d-flex flex-col h-[100vh]">
      <Navbar />
      <Sidebar />
      <Chatroom/>
    </div>
  );
}

export default Dashboard;
