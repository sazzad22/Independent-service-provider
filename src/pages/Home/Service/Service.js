import React from "react";
import { Button, Card } from "react-bootstrap";

const Service = ({service}) => {
  const { id, name, img, price, description } = service;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
            <br />
            <p className="fw-bold">Price:${price}</p>
          </Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
