import { Contact } from './Contact.styled';
import PropTypes from 'prop-types';

export const ItemContact = ({ contact }) => {
  const { name, number } = contact;
  console.log(contact);
  return (
    <>
      <Contact type="button" name={name}>
        {name} : {number}
      </Contact>
    </>
  );
};
ItemContact.prototype = {
  contacts: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
