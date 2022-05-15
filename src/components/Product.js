import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import "../index.css";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="card">
      <div className="body">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.title}</p>
          <p className="card-text"> РУБ{product.price}</p>
          <div>
            <Button onClick={() => onAdd(product)} variant="outline-dark">
              Купить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
