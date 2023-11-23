import logo from "../../../assets/logo.svg";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import SocialIcon from "../../../components/SocialIcon";
const Footer = () => {
  return (
    <footer className=" py-20 p-10 bg-[#151515] text-[#E8E8E8]">
      <div className="max-w-7xl mx-auto footer">
        <aside className="[&>*]:max-w-[200px] lg:[&>*]:max-w-[300px]">
          <img src={logo} alt="logo..." />
          {/* <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p> */}
          <p>
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial.
          </p>
          <div className="flex gap-3 text-lg my-1 text-white [&>*]:p-2 [&>*]:rounded-full  [&>*]:bg-slate-800">
            {/* <a
              href="#"
              target="_blank"
              className="hover:scale-125 transition-transform duration-300"
            >
              <FaGoogle />
            </a> */}
            <SocialIcon>
              <FaGoogle />
            </SocialIcon>
            <SocialIcon>
              <FaTwitter />
            </SocialIcon>
            <SocialIcon>
              <FaInstagram />
            </SocialIcon>
            <SocialIcon>
              <FaLinkedin />
            </SocialIcon>
          </div>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
