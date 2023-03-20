import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  const contactList = [];

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
