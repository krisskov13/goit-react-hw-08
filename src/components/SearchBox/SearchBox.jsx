import { Formik, Form } from "formik";
import SearchBar from "../SearchBar/SearchBar";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  return (
    <Formik>
      <Form className={css.form}>
        <p className={css.text}>Find contacts by name or number</p>
        <SearchBar />
      </Form>
    </Formik>
  );
}
