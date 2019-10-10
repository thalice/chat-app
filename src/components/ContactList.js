import React from 'react';
import Contact from './Contact';

const list = [
    {name:"Wandar Franklin", avatar: "./images/wanda.jpg", status:"true"},
    {name:"John Hart",avatar: "./images/john.jpg", status:""},
    {name:"Sam Mitchell",avatar: "./images/sam.jpg", status:"true"},
    {name:"Jordan Lee",avatar: "./images/jordan.jpg", status:""},
    {name:"Kelly Austin",avatar: "./images/kelly.jpg", status:"true"}
];

function ContactList(){

    return(
        <div>
        {list.map((person) => {
            return (
                <Contact 
                    name={person.name} 
                    avatar={person.avatar}
                    status={person.status}
                    />
                    )
        })}
        </div>
    )
}


export default ContactList;

/*Le paramètre de ma fonction correspond à ce avec quoi je travaille :'un wilder" ici.
=> Pour chaque wilder
return Renvoie moi
derrière return: ce qu'il doit renvoyer, ex: une phrase en plus, une action en plus, 

Quand on déclare une nouvelle fonction: on met les paramètres. Mais qd c'est une callback function
(une function qui doit retourner qq chose), alors on met la fonction à l'intérieur comme si c etait des
paramètres*/