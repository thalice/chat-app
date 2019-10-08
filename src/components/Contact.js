import React from 'react';
import './Contact.css';

  function Contact(props) {
    return (
      <figure className="Contact">
        <img src={props.avatar} alt={props.name} />
        <p>{props.name}</p>
      </figure>
    );
  }

  
export default Contact;