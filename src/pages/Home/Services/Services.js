import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  //data loaded from service json
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services" className="container mx-auto my-5">
      <h2 className="text-center">Buy My Packages</h2>
      <div className="row ">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
