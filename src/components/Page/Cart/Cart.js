import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import SignupForm from "./Form";
import Alert from "react-bootstrap/Alert";
import Example from "./Example";

const Cart = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalPrice = itemsPrice;
  const [show, setShow] = useState(false);

  const [cartIsShown, setCartIsShown] = useState(false); // на форме для записи cartIsShown (по умолчанию отключено)

  // const showCartHandler = () => {
  //   //  на кнопки заказать (включить)
  //   setCartIsShown(true);
  // };

  const hideCartHandler = () => {
    //  на основном меню и на форме для записи (отключить)
    setCartIsShown(false); //  на основном меню
  };

  return (
    <div>
      <br />
      <Container>
        <Card style={{ boxShadow: "1px 1px 1px #f6f6f6" }}>
          <Card.Header>ЗАКАЗ:</Card.Header>
          <Card.Body>
            {setCartIsShown && (
              <blockquote className="blockquote mb-0">
                <div>{cartItems.Length === 0 && <div>Корзина</div>}</div>
                {cartItems.map((item) => (
                  <div key={item.id}>
                    <Row>
                      <Col xs>
                        <img
                          src={item.image}
                          className="card-img-top"
                          alt={item.name}
                          style={{ width: "50px", height: "50px" }}
                        ></img>
                      </Col>
                      <Col xs>
                        <div>
                          <Button
                            variant="outline-dark"
                            onClick={() => onAdd(item)}
                          >
                            +
                          </Button>
                          <Button
                            variant="outline-danger"
                            onClick={() => onRemove(item)}
                          >
                            -
                          </Button>
                        </div>
                      </Col>
                      <Col xs={{ order: 12 }}>
                        <div>{item.name}</div>
                      </Col>
                      <Col xs={{ order: 1 }}>
                        {" "}
                        <div>
                          {item.qty} x {item.price.toFixed(2)} РУБ
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))}
                {cartItems.Length !== 0 && (
                  <>
                    <hr></hr>
                    <div>
                      <div className="">
                        <strong>Итог:</strong>
                      </div>
                      <div className="">
                        <strong>{totalPrice.toFixed(2)} РУБ</strong>
                      </div>
                    </div>
                  </>
                )}
              </blockquote>
            )}
            <br />
            {!show && (
              <Button
                onClick={() => setShow(true)}
                variant="outline-dark"
                href="/"
              >
                К покупкам
              </Button>
            )}
            <Example />
            {/* <Button variant="outline-success" onClick={showCartHandler}>
              Оформить заказ
            </Button> */}
          </Card.Body>
        </Card>
        {cartIsShown && <AlertTest onClick={hideCartHandler}></AlertTest>}
      </Container>
    </div>
  );
};

export default function AlertTest() {
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log();
  // }
  return (
    <div>
      <Alert variant="light">
        <Alert.Heading>Контактные данные</Alert.Heading>
        {/* <SignupForm /> */}

        {/* 
        <div className="d-flex justify-content-end">
          <form onSubmit={handleSubmit}>
            <Button variant="outline-success" type="submit">
              Отправить
            </Button>
          </form>
        </div> */}
      </Alert>
      <hr />
    </div>
  );
}

export { Cart };
