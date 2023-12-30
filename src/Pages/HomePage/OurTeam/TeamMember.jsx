import PropTypes from "prop-types";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import SocialIcon from "../../../components/SocialIcon";
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
        <div className="flex justify-center gap-3 [&>*]:bg-secondary text-white [&>*]:p-2 [&>*]:rounded-full">
          <SocialIcon>
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon>
            <FaTwitter />
          </SocialIcon>
          <SocialIcon>
            <FaLinkedinIn />
          </SocialIcon>
          <SocialIcon>
            <FaInstagram />
          </SocialIcon>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
TeamMember.propTypes = {
  member: PropTypes.object.isRequired,
};
