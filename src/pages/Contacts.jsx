import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { selectError, selectLoading } from "../redux/contacts/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";

const styles = {
  title: {
    fontSize: "30px",
    fontWeight: "700",
    marginRight: "25px",
    marginBottom: "20px",
  },
  container: {
    display: "flex",
  },
  contacts: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "50px",
  },
};
export default function Contacts() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading contacts...</p>}
      {error && <p>Sorry, an error occurred</p>}
      <div style={styles.container}>
        <div style={styles.contacts}>
          <p style={styles.title}>Your contacts</p>
          <SearchBox />
          <ContactList />
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
