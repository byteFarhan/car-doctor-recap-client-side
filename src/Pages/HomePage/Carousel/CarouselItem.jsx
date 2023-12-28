import Proptypes from "prop-types";
import { Link } from "react-router-dom";
const CarouselItem = ({
  sliderNo,
  img,
  title,
  description,
  rightBtnText,
  rightBtnPath,
  leftBtnText,
  leftBtnPath,
  rightSlideIconPath,
  leftSlideIconPath,
}) => {
  //   const backgroundImageStyle = {
  //     backgroundImage: `url('${img}')`,
  //   };
  return (
    <>
      <div
        id={sliderNo}
        className="relative flex w-full bg-center bg-cover carousel-item"
        // style={backgroundImageStyle}
      >
        <img src={img} className="object-cover w-full" />
        <div className="absolute flex flex-col w-1/2 h-full justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] bg-blend-overlay">
          <div className="w-2/3 space-y-7">
            <h1>{title}</h1>
            <p className="text-white">{description}</p>
            <div className="space-x-5">
              <Link to={rightBtnPath}>
                <button className="btn-fill">{rightBtnText}</button>
              </Link>
              <Link to={leftBtnPath}>
                <button className="btn-transparent btn-transparent-gray">
                  {leftBtnText}
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="absolute flex w-1/2 items-center justify-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] bg-blend-overlay">
          <div className="w-2/3 text-white space-y-7">
            <h1 className="text-5xl font-semibold">{title}</h1>
            <p className="text-xl text-white">{description}</p>
            <div className="space-x-5">
              <Link to={rightBtnPath}>
                <button className="btn-fill">{rightBtnText}</button>
              </Link>
              <Link to={leftBtnPath}>
                <button className="btn-transparent btn-transparent-gray">
                  {leftBtnText}
                </button>
              </Link>
            </div>
          </div>
        </div> */}
        <div className="absolute bottom-0 flex items-end justify-end gap-5 transform -translate-y-1/2 left-5 right-5">
          <a href={`${rightSlideIconPath}`} className="btn btn-circle">
            ❮
          </a>
          <a href={`${leftSlideIconPath}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </>
  );
};

export default CarouselItem;
CarouselItem.propTypes = {
  img: Proptypes.node.isRequired,
  sliderNo: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  rightBtnText: Proptypes.string.isRequired,
  rightBtnPath: Proptypes.string.isRequired,
  leftBtnText: Proptypes.string.isRequired,
  leftBtnPath: Proptypes.string.isRequired,
  rightSlideIconPath: Proptypes.string.isRequired,
  leftSlideIconPath: Proptypes.string.isRequired,
};
