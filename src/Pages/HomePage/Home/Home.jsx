import { Helmet } from "react-helmet-async";
import Carousel from "../Carousel/Carousel";
import About from "../About/About";
import Services from "../Services/Services";
import PopularProducts from "../PopularProducts/PopularProducts";
import ContactInfo from "../ContactInfo/ContactInfo";
import OurTeam from "../OurTeam/OurTeam";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import Testimonial from "../Testimonial/Testimonial";
// import { useLoaderData } from "react-router-dom";
// import img2 from "../../../assets/images/team/2.jpg";
// import img from "../../../assets/images/team/1.jpg";

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
      <About />
      <Services />
      <ContactInfo />
      <PopularProducts />
      <OurTeam />
      <CoreFeatures />
      <Testimonial />

      {/* Experiments */}
      {/* <h1>Home... </h1>
      <button className="btn-default btn-fill">Text</button> */}
      {/* <BtnFill btnText="Test" onClick={() => console.log("clicked")} /> */}

      {/* <a className="btn btn-primary" href={img} download={img2}>
        Download
      </a> */}
      {/* <button className="btn btn-primary">
        <a href="https://example.com/sophia_white.jpg" download>
          Downlode
        </a>
      </button> */}
    </section>
  );
};

export default Home;
