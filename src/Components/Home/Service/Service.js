import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import './Service.css';

const Service = ({service}) =>{
    const {name, img, description, price} = service;
    return (
        <div className="service ">
            {/* <img src={img} alt="" />
            <h3>This is service:{name}</h3>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button>Take your Service:{name}</button> */}

            <CardGroup>
  <Card>
    <Card.Img variant="top" src={img} height="150px" alt=""/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <p>Price:{price}</p>
      <Card.Text>
        {description}
        <button className="bg-primary mt-2 mb-0">Take your Service:{name}</button>
      </Card.Text>
    </Card.Body>
    
  </Card>
  
</CardGroup>
        </div>
        
    );
};

export default Service;