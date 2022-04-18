import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const { id, name, img, price, description } = service;
  return (
    <div className=" g-4 p-1 col-sm-12 col-md-6  container-fluid col-lg-4 ">
      <Card className="p-2  " style={{ width: "100%" }}>
        <Card.Img variant="top" className="" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
            <br />
            <p className="fw-bold">Price:${price}</p>
          </Card.Text>
          <Button onClick={()=>navigate('/checkout')} variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
