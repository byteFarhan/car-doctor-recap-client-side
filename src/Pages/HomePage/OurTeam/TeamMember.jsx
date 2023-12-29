import PropTypes from "prop-types";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
const TeamMember = ({ member }) => {
  const { job_category, job_title, img } = member;
  return (
    <div className="p-6 space-y-4 rounded-md shadow">
      <figure className="">
        <img
          src={img}
          alt={`person`}
          className="object-cover h-[250px] w-full rounded-md"
        />
      </figure>

      <div className="py-3 space-y-3 text-center">
        <h4 className="">{job_title}</h4>
        <p className="text-xl font-semibold text-neutral">{job_category}</p>
        <div className="flex justify-center gap-5 text-lg [&>*]:bg-secondary text-white [&>*]:p-2 [&>*]:w-[40px] [&>*]:h-[40px] [&>*]:rounded-full">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
TeamMember.propTypes = {
  member: PropTypes.object.isRequired,
};
