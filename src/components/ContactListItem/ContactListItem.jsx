import React from 'react';

import {
  ContactsItem,
  ContactsItemName,
  ContactsItemNumber,
  ContactsItemButton,
} from './ContactListItem.styled';

const ContactListItem = ({ name, number }) => {
  return (
    <ContactsItem>
      <ContactsItemName>{name} : </ContactsItemName>
      <ContactsItemNumber>{number}</ContactsItemNumber>
      <ContactsItemButton type="button">Delete</ContactsItemButton>
    </ContactsItem>
  );
};

export default ContactListItem;
