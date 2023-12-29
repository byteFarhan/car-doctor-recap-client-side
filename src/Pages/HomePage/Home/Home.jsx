import { Helmet } from "react-helmet-async";
import Carousel from "../Carousel/Carousel";
// import SectionIntro from "../SectionIntro/SectionIntro";
import About from "../About/About";
import Services from "../Services/Services";
import ContactInfo from "./ContactInfo/ContactInfo";
// import { useLoaderData } from "react-router-dom";

const Home = () => {
  // const services = useLoaderData();
  // console.log(services);
  return (
    <section className="container">
      <Helmet>
        <title>Home || Car Doctors</title>
      </Helmet>
      {/* slider or carousel section */}
      <Carousel />
      {/* <h1>Home... </h1>
      <button className="btn-default btn-fill">Text</button> */}
      {/* <BtnFill btnText="Test" onClick={() => console.log("clicked")} /> */}
      <About />
      <Services />
      <ContactInfo />
    </section>
  );
};

export default Home;
