import { Label, Input } from 'components/FormContact/FormContact.styled';
import { Title } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = ({ visibeleContact }) => {
  const dispatch = useDispatch();
  const changeFilter = e => {
    const filter = e.currentTarget.value;
    dispatch(setFilter(filter));
  };

  return (
    <>
      <Label>
        <Title>Find contacts by name:</Title>
        <Input type="text" onChange={changeFilter} />
      </Label>
    </>
  );
};

