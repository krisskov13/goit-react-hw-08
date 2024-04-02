import { Formik, Form } from "formik";
import SearchBar from "../SearchBar/SearchBar";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  return (
    <Formik>
      <Form className={css.form}>
        <label>Find contacts by name</label>
        <SearchBar />
      </Form>
    </Formik>
  );
}
