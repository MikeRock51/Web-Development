import React from "react";
import Card from "./Card";
import contacts from "../contacts";


function createCard(contact) {
  return (
    <Card
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  const contactList = [];

  contacts.map(createCard)

  for (let i = 0; i < contacts.length; i++) {
    contactList.push(
      <div>
        <Card
          name={contacts[i].name}
          imgURL={contacts[i].imgURL}
          phone={contacts[i].phone}
          email={contacts[i].email} 
        />
      </div>
    );
  }

  return contactList;
}

export default App;
