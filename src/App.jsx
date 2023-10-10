import "./App.css";
import contactsjson from "./contacts.json";
import Contacts from "./components/Contacts";
import { useState } from 'react';

function App() {
  const [contacts, setContacts]  = useState(contactsjson.slice(0, 5))
  const [remaining, setRemaining] = useState(contactsjson.slice(5))                                                     
  
  function getRandomContact () {
    const randomIndex = Math.floor(Math.random() * remaining.length) + 1; // randomNumber
    const randomContact = remaining[randomIndex]
    setContacts([...contacts, randomContact])
    setRemaining(remaining.filter((element) => element.id !== randomContact.id))
  }
  console.log("contacts", contacts, "remaining", remaining)
  return (
    <div className="App">
      <Contacts  contacts={contacts} getRandomContact={getRandomContact}/>
    </div>
  );
}

export default App;


