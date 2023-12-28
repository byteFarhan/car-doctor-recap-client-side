import PropTypes from "prop-types";
const SectionIntro = ({
  sectionCategory,
  sectionTitle,
  sectionDescription,
}) => {
  return (
    <>
      <div className="w-2/4 mx-auto my-10 space-y-2 text-center">
        <h5 className="text-primary">{sectionCategory}</h5>
        <h2>{sectionTitle}</h2>
        <p className="leading-7">{sectionDescription}</p>
      </div>
    </>
  );
};

export default SectionIntro;
SectionIntro.propTypes = {
  sectionCategory: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string.isRequired,
  sectionDescription: PropTypes.string.isRequired,
};
