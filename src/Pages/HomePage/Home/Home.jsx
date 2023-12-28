import { Helmet } from "react-helmet-async";
import Carousel from "../Carousel/Carousel";

const Home = () => {
  return (
    <section className="container">
      <Helmet>
        <title>Home || Car Doctors</title>
      </Helmet>
      {/* slider or carousel section */}
      <Carousel />
      <h1>Home...</h1>
      <button className="btn-default btn-fill">Text</button>
      {/* <BtnFill btnText="Test" onClick={() => console.log("clicked")} /> */}
    </section>
  );
};

export default Home;
