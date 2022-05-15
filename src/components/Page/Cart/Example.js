import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import "./styles.css";
import ExampleTwo from "./Form";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      count: "",
      address: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      console.log(typeof formik);
      return <ExampleTwo />;
    },
  });

  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        Оформить заказ
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={formik.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Форма заказа</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <div className="field ">
                <label htmlFor="firstName">Имя</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <div className="field ">
                <label htmlFor="lastName">Фамилия</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="field ">
                <Form.Label>Email address</Form.Label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <div className="field ">
                <Form.Label>Почтовый адрес</Form.Label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <div className="field ">
                <Form.Label>Номер</Form.Label>
                <input
                  id="count"
                  name="count"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.count}
                />
              </div>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-dark" onClick={handleClose}>
              Закрыть
            </Button>
            <Button variant="outline-dark" type="submit" onClick={handleClose}>
              Закрыть
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default Example;
