import { Form, Label, Input, Button } from './FormContact.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import Notiflix from 'notiflix';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleClickChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
      return;
    }
    if (name === 'number') {
    }
    setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const filterName = contacts.find(contact => contact.name === name);
    if (filterName) {
      Notiflix.Notify.failure(
        `You have already added ${name} to Contact list!!!`
      );
      resetForm();
      return;
    }
    dispatch(
      addContact({
        name: name,
        number: number,
      })
    );
    resetForm();
  };

  const resetForm = e => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleClickChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleClickChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add Contact</Button>
      </Form>
    </>
  );
};

// ContactForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.number.isRequired,
// };
