const styles = {
  container: {
    width: "700px",
    margin: "60px 0 0 80px",
  },
  title: {
    fontSize: "40px",
    marginBottom: "15px",
  },
  text: {
    fontSize: "25px",
    textAlign: "left",
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>&#9742; Phonebook</h1>
      <p style={styles.text}>
        Is an application that allows you to organize and manage your contact
        list on your smartphone. With its help, you can save information about
        the name and phone numbers of your friends, parents, colleagues and
        others.
      </p>
    </div>
  );
}
