import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import s from './Contacts.module.css';

const Contacts = () => {
  return (
    <main className={s.MainContainer}>
      <h1 className={s.Title}>Phonebook</h1>
      <Form />
      <h2 className={s.Title}>Contacts</h2>
      <Filter />
      <ContactList />
    </main>
  );
};

export default Contacts;
