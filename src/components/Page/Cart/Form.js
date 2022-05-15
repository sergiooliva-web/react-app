import { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

function ExampleTwo(props) {
  const [show, setShow] = useState(false);

  const handleTwoClose = () => setShow(false);
  const handleTwoShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleTwoShow}>
        Отправить
      </Button>

      <Modal show={show} onHide={handleTwoClose}>
        <Modal.Header closeButton>
          <Modal.Title>Заказа оформлен</Modal.Title>
        </Modal.Header>
        <Modal.Body>Заказа оформлен</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default ExampleTwo;
