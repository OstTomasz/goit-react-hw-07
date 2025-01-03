import { ContactForm } from "./ContactForm/ContactForm";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactList } from "./ContactList/ContactList";
// import { Loader } from "./Loader";
// import { Error } from "./Error";

export const App = () => {
  return (
    <main>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {/* <Loader />
      <Error /> */}
    </main>
  );
};
