import React from "react";

const FooterLinkNoUnderline = ({ link, text }) => {
  return (
    <a
      href={link}
      className="text-footer-link-color no-underline hover:underline"
    >
      {text}
    </a>
  );
};

export default FooterLinkNoUnderline;
