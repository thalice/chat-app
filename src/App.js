import React from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <Contact
        
        avatar="./images/emma.jpg"
        name="Emma Sanders"
        status="true"

      />
      
      <Contact
        name="Dave Jenkins"
        avatar="./images/dave.jpg"
        status=""
      />

      <Contact
        name="Eva Shaw"
        avatar="./images/eva.jpg"
        status="true"
      />

      <ContactList
      />
     
    </div>
  );
}



export default App;






