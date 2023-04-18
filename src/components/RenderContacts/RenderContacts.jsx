import { ItemContact } from 'components/Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Button, Wrapper } from './RenderContacts.styled';
import PropTypes from 'prop-types';

export const RenderContacts = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();
  
  if (!contacts) return;

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul>
      {visibleContacts.map(contact => (
        <Wrapper key={contact.id}>
          <ItemContact contact={contact}></ItemContact>
          <Button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </Button>
        </Wrapper>
      ))}
    </ul>
  );
};

