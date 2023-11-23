import PropTypes from "prop-types";
// import React, { Component } from "react";
// import {
//   FaGoogle,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedin,
//   FaFacebook,
// } from "react-icons/fa";

// const iconComponents = {
//   instagram: FaInstagram,
//   twitter: FaTwitter,
//   facebook: FaFacebook,
//   linkedin: FaLinkedin,
//   google: FaGoogle,
// };

const SocialIcon = ({ children }) => {
  // const makeElement = (elementName)=>{
  //     return <{elementName}/>
  // }
  //   const IconComponent = iconName && React.createElement(iconName);
  //   console.log(IconComponent);
  //   const IconComponent = iconComponents[iconName];
  return (
    <>
      <a
        href="#"
        target="_blank"
        className="hover:scale-125 transition-transform duration-300"
      >
        {/* < ${iconName}/>   */}
        {/* {React.createElement(Component, { name: iconName })} */}
        {/* {IconComponent} */}
        {/* {IconComponent && <IconComponent />} */}
        {children}
      </a>
    </>
  );
};

export default SocialIcon;
SocialIcon.propTypes = {
  children: PropTypes.node.isRequired,
};
