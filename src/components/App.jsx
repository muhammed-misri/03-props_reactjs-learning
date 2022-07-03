// the main component is APP
// then we import Card component >> then contects >> and avatar

import React from "react";
import Card from "./Card.jsx";
import contacts from "../contacts";
import Avatar from "./Avatar";

// we have 3 card
// data came from contacts file as a
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* after making card, contects and avatar components: 
        .... we can use it as custom react component 
        .... how we can use it ??
        .... with pascal casing and self closing tag 
        .... example : <Card />
        */}

      {/*  we now made the dataflow 
          around the components and files a little better
          but is still worse for react development standard 
          .. so we will change this format below 
          .. ({contacts[0].name} . . . . . .)
      */}
      <Avatar img={contacts[1].imgURL} />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />

      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />

      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
