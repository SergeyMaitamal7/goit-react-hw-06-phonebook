import { ItemContact } from 'components/Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { List, Button, Wrapper } from './RenderContacts.styled';
import PropTypes from 'prop-types';
import { getContacts, getFilter } from 'redux/selector';

export const RenderContacts = () => {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilter);
  const dispatch = useDispatch();

  if (!contacts) return;

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <List>
      {visibleContacts.map(contact => (
        <Wrapper key={contact.id}>
          <ItemContact contact={contact}></ItemContact>
          <Button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </Button>
        </Wrapper>
      ))}
    </List>
  );
};

RenderContacts.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};
