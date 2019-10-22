import React from "react";
import Contact from "./Contact";

const list = [
  { name: "Wanda Franklin", avatar: "./images/wanda.jpg", status: true },
  { name: "John Hart", avatar: "./images/john.jpg", status: false },
  { name: "Sam Mitchell", avatar: "./images/sam.jpg", status: true },
  { name: "Jordan Lee", avatar: "./images/jordan.jpg", status: false },
  { name: "Kelly Austin", avatar: "./images/kelly.jpg", status: true }
];

function ContactList() {
  return (
    <div>
      {list.map((person, i) => {
        return (
          <Contact
            key={i}
            name={person.name}
            avatar={person.avatar}
            status={person.status}
          />
        );
      })}
    </div>
  );
}

export default ContactList;
