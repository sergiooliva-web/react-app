import React from "react";

import Alert from "react-bootstrap/Alert";
import FormAlert from "./Form";
import { Button } from "react-bootstrap";

export default function AlertTest() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Отправлена форма.");
  }
  return (
    <div>
      <Alert variant="light">
        <Alert.Heading>Контактные данные</Alert.Heading>
        <FormAlert />
        <hr />
        <div className="d-flex justify-content-end">
          <form onSubmit={handleSubmit}>
            <Button variant="outline-success" type="submit">
              Отправить
            </Button>
          </form>
        </div>
      </Alert>
    </div>
  );
}
