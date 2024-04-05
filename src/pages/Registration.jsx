import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
const styles = {
  title: {
    marginBottom: "30px",
    marginRight: "660px",
    fontSize: "30px",
  },
};

export default function Registration() {
  return (
    <div>
      <h2 style={styles.title}>Сreate your account</h2>
      <RegistrationForm />
    </div>
  );
}
