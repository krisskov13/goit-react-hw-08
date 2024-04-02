import { Formik, Field } from "formik";
import css from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Formik initialValues={{ contact: "" }}>
      <Field
        className={css.input}
        type="text"
        name="contact"
        value={filter}
        onChange={handleFilterChange}
      />
    </Formik>
  );
}
