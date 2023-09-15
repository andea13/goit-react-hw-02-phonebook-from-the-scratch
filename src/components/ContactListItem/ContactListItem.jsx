import React from 'react';

import {
  ContactsItem,
  ContactsItemName,
  ContactsItemNumber,
  ContactsItemButton,
} from './ContactListItem.styled';

const ContactListItem = () => {
  return (
    <ContactsItem>
      <ContactsItemName></ContactsItemName>
      <ContactsItemNumber></ContactsItemNumber>
      <ContactsItemButton type="button">Delete</ContactsItemButton>
    </ContactsItem>
  );
};

export default ContactListItem;
