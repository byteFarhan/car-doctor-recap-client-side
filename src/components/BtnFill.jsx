import PropTypes from "prop-types";
const BtnFill = ({ btnText,eventListner,eventFunc }) => {
  return (
    <>
      <button
      {eventListner}={eventFunc}
       className="btn-default btn-fill">{btnText}</button>
    </>
  );
};

export default BtnFill;
BtnFill.propTypes = {
  btnText: PropTypes.string.isRequired,
  eventListner: PropTypes.string,
};
