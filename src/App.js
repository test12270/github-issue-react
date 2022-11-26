import styles from "./App.module.css";

import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./Header";
import ListContainer from "./ListContainer";

function App() {
  return (
    <>
      <div className={styles.nav}>Nav</div>
      <Header />
      <ListContainer />
      <Footer />
    </>
  );
}

export default App;
