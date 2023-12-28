import RouteStyle from "../../../components/RouteStyle";
// import logo from "../../../assets/logo.svg";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navLinks = [
    { routeName: "Home", routePath: "/" },
    { routeName: "About", routePath: "/about" },
    { routeName: "Services", routePath: "/services" },
    { routeName: "Blog", routePath: "/blog" },
    { routeName: "Contact", routePath: "/contact" },
  ];
  // const navLinks = (
  //   <>
  //     <RouteStyle routeName="Home" routePath="/" />
  //     <RouteStyle routeName="About" routePath="/about" />
  //     <RouteStyle routeName="Services" routePath="/Services" />
  //     <RouteStyle routeName="Blog" routePath="/blog" />
  //     <RouteStyle routeName="Contact" routePath="/contact" />
  //   </>
  // );
  return (
    <nav className="container navbar bg-base-100 max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box font-medium w-52">
            {navLinks.map((navLink) => (
              <RouteStyle
                key={navLink.routeName}
                routeName={navLink.routeName}
                routePath={navLink.routePath}
              />
            ))}
          </ul>
        </div>
        {/* <a className="text-xl btn btn-ghost">{logo}</a> */}
        <img src={logo} alt="logo..." className="w-16 h-16 lg:w-24 lg:h-24" />
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="gap-5 px-1 text-lg font-medium menu-horizontal">
          {navLinks.map((navLink) => (
            <RouteStyle
              key={navLink.routeName}
              routeName={navLink.routeName}
              routePath={navLink.routePath}
            />
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        {/* <a className="btn">Button</a> */}
        <Link to={"/appointment"}>
          {/* <button className="bg-transparent px-7 border-primary btn btn-outline text-primary hover:bg-transparent hover:text-primary hover:border-primary">
            Appointment
          </button> */}
          <button className="btn-transparent btn-transparent-red">
            Appointment
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
