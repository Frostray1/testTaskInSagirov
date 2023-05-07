import { Container } from "react-bootstrap";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className={styles.App}>
        <Header />
        <Main/>
    </div>
  );
}

export default App;
