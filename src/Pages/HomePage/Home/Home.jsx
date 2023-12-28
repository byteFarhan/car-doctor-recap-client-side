import { Helmet } from "react-helmet-async";
import Carousel from "../Carousel/Carousel";
import SectionIntro from "../SectionIntro/SectionIntro";
import About from "../About/About";

const Home = () => {
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
      <section className="mt-32 mb-20">
        <SectionIntro
          sectionCategory="Service"
          sectionTitle="Our Service Area"
          sectionDescription="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        />
      </section>
    </section>
  );
};

export default Home;
