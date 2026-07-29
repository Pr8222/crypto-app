import styles from "./Layout.module.css"

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p><a href="https://pr8222.github.io">Parsa Rohani</a> | Third Project</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Made with determination and dicipline</p>
      </footer>
    </>
  );
}

export default Layout;
