import { useRef, useState } from "react";
import "./App.css";
import Alert from "./components/Alert/Alert";

function App() {
  const [show, setShow] = useState<boolean>(true);
  const alertRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <Alert
        show={show}
        onClose={() => setShow(false)}
        variant="danger"
        dismissible
        ref={alertRef}
      >
        <Alert.Heading>경고문</Alert.Heading>
        <p>
          배가 고파요
          <Alert.Link href="#">요기요</Alert.Link>
        </p>
      </Alert>
    </main>
  );
}

export default App;
