import React from "react";
import Product from "./Product";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import ImageText from "./images";
import "../index.css";

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <Container>
      <ImageText />
      <main className="card-group">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </main>
    </Container>
  );
}
