import React, { useState } from "react";
import contacts from "./contacts.json";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));
  const addRandomContact = () => {
    const remainingContacts = contacts.filter(
      (contact) => !contactList.includes(contact)
    );
    const randomContact =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    setContactList([...contactList, randomContact]);
  };
  const sortByName = () => {
    const sortedContacts = [...contactList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContactList(sortedContacts);
  };
  
  const sortByPopularity = () => {
    const sortedContacts = [...contactList].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContactList(sortedContacts);
  };
  const deleteContact = (id) => {
    const updatedContacts = contactList.filter((contact) => contact.id !== id);
    setContactList(updatedContacts);
  };
  
  
  return (
    <div className="App">
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  width="50"
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🏆" : ""}</td>
              <td>
              <button onClick={() => deleteContact(contact.id)}
                className="btn btn-danger delete-button">Delete</button>
              </td>
            </tr>
          ))}
           <button onClick={addRandomContact}
           className="btn btn-success">Add Random Contact</button>
           <button onClick={sortByName}
            className="btn btn-primary">Sort by Name</button>
          <button onClick={sortByPopularity}
          className="btn btn-warning">Sort by Popularity</button>
        </tbody>
      </table>
    </div>
  );
}

export default App;
