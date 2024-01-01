import PropTypes from "prop-types";
const Feature = ({ featureName, featureIcon }) => {
  return (
    <div
      className={`p-8 space-y-5 rounded-md shadow ${
        featureName === "Timely Delivery" && "bg-primary"
      }`}
    >
      <img src={featureIcon} alt="" className="mx-auto" />
      <h5
        className={`text-lg text-center ${
          featureName === "Timely Delivery" && "text-white"
        }`}
      >
        {featureName}
      </h5>
    </div>
  );
};

export default Feature;
Feature.propTypes = {
  featureName: PropTypes.string.isRequired,
  featureIcon: PropTypes.node.isRequired,
  //   featureIcon: PropTypes.string.isRequired, // Assuming the prop is a string representing a file path
  //   featureIcon: PropTypes.oneOfType([
  //     PropTypes.string, // Assuming your image or icon is represented by a string (URL or icon class, for example)
  //     PropTypes.element, // Assuming your icon is a React element
  //   ]).isRequired,
};
