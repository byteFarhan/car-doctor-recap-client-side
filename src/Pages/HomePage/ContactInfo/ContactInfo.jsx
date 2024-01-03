// import calenderIcon from "../../../../assets/icons/calenderIcon.svg";
import calenderIcon from "../../../assets/icons/calenderIcon.svg";
import phoneIcon from "../../../assets/icons/phoneIcon.svg";
import locationIcon from "../../../assets/icons/locationIcon.svg";
const ContactInfo = () => {
  return (
    <>
      <section
        id="contactInfo"
        className="flex flex-col items-center justify-center gap-8 px-5 py-10 my-20 text-white rounded-md md:p-20 lg:gap-0 lg:justify-between lg:flex-row bg-secondary"
      >
        <div className="flex gap-5">
          <img src={calenderIcon} alt="calender Icon" />
          <div className="space-y-2">
            <p className="text-white">We are open monday-friday</p>
            <h4 className="text-white">7:00 am - 9:00 pm</h4>
          </div>
        </div>
        <div className="flex gap-5">
          <img src={phoneIcon} alt="phone Icon" />
          <div className="space-y-2">
            <p className="text-white">Have a question?</p>
            <h4 className="text-white">
              <a href="tel:+2546 251 2658">+2546 251 2658</a>
            </h4>
          </div>
        </div>
        <div className="flex gap-5">
          <img src={locationIcon} alt="location Icon" />
          <div className="space-y-2">
            <p className="text-white">Need a repair? our address</p>
            <h4 className="text-white">Liza Street, New York</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
