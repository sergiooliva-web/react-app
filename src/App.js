import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About } from "./components/Page/About";
import { Cart } from "./components/Page/Cart/Cart";
import Main from "./components/Main";
import data from "./components/data";
import { Navbar, Nav, Container } from "react-bootstrap";

import "./index.css";
import Footer from "./components/Page/Footer";

export default function App(props) {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div>
      <div>
        <div className="header">
          <Router>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand className="Link" href="/">
                  ПРЯМО В ЦЕЛЬ
                </Navbar.Brand>
                <Nav className="me-auto">
                  <li>
                    <Link className="Link" to="/about">
                      О нас
                    </Link>
                  </li>
                </Nav>
                <li>
                  <Link className="Link" to="/users">
                    Корзина
                  </Link>
                </li>
                <div style={divStyle}>
                  <Footer countCrtItems={cartItems.length}></Footer>
                </div>
              </Container>
            </Navbar>

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Cart
                  onAdd={onAdd}
                  onRemove={onRemove}
                  cartItems={cartItems}
                ></Cart>
              </Route>
              <Route path="/">
                <Main onAdd={onAdd} products={products}></Main>
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
      <div>
        <div className="footer">
          <Container>
            <footer>
              <p>© forcecom.ru 2022</p>
            </footer>
          </Container>
        </div>
      </div>
    </div>
  );
}

const divStyle = {
  marginLeft: "6px",
};
