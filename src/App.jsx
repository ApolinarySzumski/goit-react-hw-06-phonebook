import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledHeader } from "./StyledComponents/Header";
import { ContactList } from "./components/ContactList";
import { Filter } from "./components/Filter";
import { Phonebook } from "./components/Phonebook";
import { Wrapper } from "./components/Wrapper";
import { loadContacts } from "./redux/contactsSlice";
import { getContacts } from "./redux/selectors";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    const data = window.localStorage.getItem("contacts");
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        dispatch(loadContacts(parsedData));
      } catch (error) {
        console.error("Failed to parse contacts from localStorage", error);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Wrapper>
      <StyledHeader>Phonebook</StyledHeader>
      <Phonebook />
      <StyledHeader>Filter</StyledHeader>
      <Filter />
      <StyledHeader>Contact List</StyledHeader>
      <ContactList />
    </Wrapper>
  );
};

export default App;
