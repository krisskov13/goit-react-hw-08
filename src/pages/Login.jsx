import LoginForm from "../components/LoginForm/LoginForm";
const styles = {
  title: {
    marginBottom: "30px",
    marginRight: "660px",
    fontSize: "30px",
  },
};

export default function Login() {
  return (
    <div>
      <h2 style={styles.title}>Sign in to your account</h2>
      <LoginForm />
    </div>
  );
}
