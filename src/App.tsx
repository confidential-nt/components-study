import { useState } from "react";
import "./App.css";

import Modal from "./components/Modal/Modal";

function App() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <main>
      <button onClick={() => setShow(true)}>모달 보기</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
        cupiditate error esse excepturi totam labore expedita repellendus,
        dolorum quasi velit adipisci similique, quidem quis? Quidem assumenda
        odit quae pariatur sed.
      </p>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        animation={false}
        aria-labelledby="modal"
      >
        <>
          <Modal.Header closeButton>
            <Modal.Title id="modal">이것은 모달이다.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h1>모달 본문.</h1>
            <input type="text" placeholder="내용을 입력하세요." autoFocus />
          </Modal.Body>
          <Modal.Footer>
            <button onClick={() => setShow(false)}>확인</button>
            <button onClick={() => setShow(false)}>취소</button>
          </Modal.Footer>
        </>
      </Modal>
    </main>
  );
}

export default App;
