import React, { useEffect, useState } from "react";
import Service from "../Home/Service/Service";
import './Services.css';

const Services = () => {
    const [services, setServices] =useState([]);
    useEffect( ()=> {
        fetch('http://localhost:5000/book')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return(
        <div className="container">
            <h1 className="services-title"> Services we Provide!!!</h1>
            <div className="services-container ">
            {
                services.map(service => <Service
                key={service._id}
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;