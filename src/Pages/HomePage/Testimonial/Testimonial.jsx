import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import SectionIntro from "../SectionIntro/SectionIntro";
import TestimonialItem from "./TestimonialItem";
// import "./testimonial.css";

// const Arrow = function (props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "#151515" }}
//       onClick={onClick}
//     />
//   );
// };

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/data/testimonial.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // console.log(reviews);
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   pauseOnHover: true,
  //   centerMode: true,
  // };

  const Arrow = function (props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#151515" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // initialSlide: 0,
    pauseOnHover: true,
    autoplay: true,
    centerMode: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="testimonial" className="my-40">
      <SectionIntro
        sectionCategory="Testimonial"
        sectionTitle="What Customer Says"
        sectionDescription="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      />
      <div className="mt-12 space-x-5">
        <Slider {...settings}>
          {reviews.map((review) => (
            <TestimonialItem key={review.id} review={review} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
// Arrow.propTypes = {
//   onClick: PropTypes.func,
//   style: PropTypes.object,
//   className: PropTypes.string,
// };
