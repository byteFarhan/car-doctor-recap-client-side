import { useEffect, useState } from "react";
import SectionIntro from "../SectionIntro/SectionIntro";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("data/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <>
      <section className="mt-32 mb-20">
        <SectionIntro
          sectionCategory="Service"
          sectionTitle="Our Service Area"
          sectionDescription="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServicesCard key={service.service_id} service={service} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
