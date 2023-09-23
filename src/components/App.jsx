import React, { Component } from 'react';
import { nanoid } from 'nanoid';
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
  };

  handleSubmit = data => {
    const { name, number } = data;

    if (!name.trim() || !number.trim()) {
      alert('Please fill in all the fields');
      return;
    }

    const newContact = {
      ...data,
      id: nanoid(),
    };

    console.log(newContact);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  // reset = () => {
  //   this.setState({
  //     name: '',
  //     number: '',
  //   });
  // };

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
          <ContactForm onSubmit={this.handleSubmit} />
        </PhonebookContainer>
        <ContactsContainer>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter />
          <ContactList contacts={this.state.contacts} />
        </ContactsContainer>
      </div>
    );
  }
}

export default App;
