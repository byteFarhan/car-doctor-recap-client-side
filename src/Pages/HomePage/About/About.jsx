import partsImg from "../../../assets/images/about_us/parts.jpg";
import personImg from "../../../assets/images/about_us/person.jpg";
const About = () => {
  return (
    <>
      <div className="my-20">
        <div className="flex-col hero-content lg:flex-row">
          <div className="relative w-2/4">
            <img
              src={personImg}
              className="rounded-lg shadow-2xl h-[470px] object-cover w-[460px]"
            />
            <img
              src={partsImg}
              className="absolute rounded-lg shadow-2xl h-[330px]  w-[330px] object-cover border-8 border-white top-1/2 left-1/3"
            />
          </div>

          <div className="w-2/4 space-y-5">
            <h5 className="text-xl font-bold text-primary">About Us</h5>
            <h2 className="w-4/6 text-5xl font-bold leading-[60px]">
              We are qualified & of experience in this field
            </h2>
            <p className="py-6 leading-7 capitalize">
              {`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}
              <br />
              <br />
              {`The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}
            </p>
            {/* <p className="py-6 leading-7">
              {``}
            </p> */}
            <button className="font-medium btn-fill">Get More Info</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
