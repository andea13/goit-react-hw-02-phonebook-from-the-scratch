import React from 'react';
import PropTypes from 'prop-types';

import { ContactsList } from './ContactList.styled';
import ContactListItem from 'components/ContactListItem/ContactListItem';

const ContactList = ({ contacts }) => {
  console.log(contacts);
  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => (
        <ContactListItem name={name} number={number} id={id} key={id} />
      ))}
    </ContactsList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ).isRequired,
  // handleDeleteClick: PropTypes.func.isRequired,
};
export default ContactList;
