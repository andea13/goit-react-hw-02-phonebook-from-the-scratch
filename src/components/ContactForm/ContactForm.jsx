import React, { Component } from 'react';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';
class ContactForm extends Component {
  state = {
    name: '',
  };

  handleChange = event => {
    this.setState({
      name: event.currentTarget.value,
    });
  };

  handleSubmit() {}

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormLabel>
          <FormInput
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    );
  }
}

export default ContactForm;
