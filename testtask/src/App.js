import { Container } from "react-bootstrap";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className={styles.App}>
        <Header />
    </div>
  );
}

export default App;
