import React from 'react';
import './Contact.css';

 

  function Contact(props) {
    return (
    
      <figure class ="Contact">
          <img class= "avatar" src={props.avatar} alt={props.name} />
          
  

        <div class="status">
          <p>{props.name}</p>
          <span class = "status-text">{props.status ? "online":"offline"}</span>
          <span class= {props.status ? "status-online":"status-offline"}>    </span> 
        </div>
        
      </figure>
    

    );
  }

  
export default Contact;