import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from '../redux/selectors';
import css from './contacts.module.css'
import { useEffect } from 'react';
import { getAllContactsThunk } from 'components/redux/thunks';
import { delContact } from 'api';


export const ContactList = () => {
  const dispatch = useDispatch()
  const filteredContacts = useSelector(getFilteredContacts)

  useEffect(() => {
    dispatch(getAllContactsThunk())
  }, [dispatch])
  console.log(filteredContacts);

  const handleDeleteContact = id => {
    dispatch(delContact(id));
  };

  return (
    <div>
      {filteredContacts?.map(({ id, name, phone }) => {
        return (
          <li key={id}>
            <div className={css.name}>
              {name}: {phone}
            </div>
            <button type="button" className={css.del} onClick={() => handleDeleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
      
      
    </div>
  );
};

