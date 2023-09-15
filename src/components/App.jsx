import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import {
  PhonebookTitle,
  PhonebookContainer,
  ContactsContainer,
  ContactsTitle,
} from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginLeft: 20,
          fontSize: 30,
          color: '#010101',
        }}
      >
        <PhonebookContainer>
          <PhonebookTitle>Phonebook</PhonebookTitle>
          <ContactForm />
        </PhonebookContainer>
        <ContactsContainer>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter />
          <ContactList />
        </ContactsContainer>
      </div>
    );
  }
}

export default App;
