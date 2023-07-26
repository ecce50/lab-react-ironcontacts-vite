import "./App.css";
import { useState } from "react";
import contactsData from "./contacts.json";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5)); // creating a variable consisting of the first five contact in the contactsData array
  const [contactsDataFiltered, setContactsDataFiltered] = // I need to create a new array of filtered contacts here
 

  function addRandomContact() { // declaring new function to add a random contact from the contactsData array
    const contactsFiltered = contactsData.filter( // filtering the data
      (contactData) =>
        !contacts.some((contact) => contact.id === contactData.id) 
    );
    setContactsDataFiltered(contactsFiltered);
    setContacts([
      ...contacts,
      contactsFiltered[Math.floor(Math.random() * contactsFiltered.length)],
    ]);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((oneContact) => {
            return (
              <tr>
                <td>
                  <img
                    src={oneContact.pictureUrl}
                    alt={oneContact.name}
                    style={{ height: "200px" }}
                  />
                </td>
                <td>
                  <h3>{oneContact.name}</h3>
                </td>
                <td>
                  <h3>{Math.round(oneContact.popularity * 100) / 100}</h3>
                </td>
                <td>
                  <h3>{oneContact.wonOscar === true ? "🏆" : ""}</h3>
                </td>
                <td>
                  <h3>{oneContact.wonEmmy === true ? "🏆" : ""}</h3>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={() => addRandom()}></button>
    </div>
  );
}

export default App;
