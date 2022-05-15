import React from "react";
// import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

function Footer(props) {
  const { countCrtItems } = props;
  return (
    <div>
      {" "}
      {countCrtItems ? (
        <Button className="button" variant="outline-success">
          {countCrtItems}
        </Button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Footer;
