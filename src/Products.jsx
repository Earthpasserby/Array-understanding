import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image } from "react-bootstrap";

const Products = (props) => {
  return (
    <>
      <Container>
        <div>
          <Image src={props.Image} />
          <div className="text-center">
            <p>{props.category}</p>
            <p>{props.price}</p>
          </div>
          <button>update me</button>
        </div>
      </Container>
    </>
  );
};
export default Products;
