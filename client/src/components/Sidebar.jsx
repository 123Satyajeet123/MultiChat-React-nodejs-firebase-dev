import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Tab, Nav,Modal } from "react-bootstrap";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import NewConversationModal from "./NewConversationModal";
import NewContactModal from "./NewContactModal";

const conversations = "conversations";
const contacts = "contacts";

function Sidebar() {
  const [activeKey, setActiveKey] = useState(conversations);

  const [modalOpen, setModalOpen] = useState(false);

  const conversationsOpen = activeKey === conversations;

function closeModal(){
    setModalOpen(false);
}

  return (
    // create a sidebar with two tabs conversations and contacts using tailwind css
    <div className="d-flex flex-col absolute top-16 left-0 border h-[81vh] w-[40vh]">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center ">
          <Nav.Item className="w-1/2">
            <Nav.Link eventKey={conversations}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item className="w-1/2">
            <Nav.Link eventKey={contacts}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={conversations}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={contacts}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small text-white">
            <span>id</span>
        </div>
        <button onClick={()=>setModalOpen(true)} className="btn bg-white hover:bg-gray text-lg btn-sm rounded-0">
            New {conversationsOpen ? "Conversation" : "Contact"}
        </button>
      </Tab.Container>
      <Modal show={modalOpen} onHide ={closeModal}>
        {conversationsOpen ? <NewConversationModal closeModal={closeModal}/> : <NewContactModal closeModal={closeModal}/>}
      </Modal>
    </div>
  );
}

export default Sidebar;
