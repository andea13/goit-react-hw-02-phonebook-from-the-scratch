import React from 'react';
import { ContactsList } from './ContactList.styled';
import ContactListItem from 'components/ContactListItem/ContactListItem';

const ContactList = () => {
  return (
    <ContactsList>
      <ContactListItem />
    </ContactsList>
  );
};
export default ContactList;
