import React from "react";

const FooterLinkUnderline = ({ text, link, color }) => {
  return (
    <a
      className={
        color ? "text-primary underline" : "text-footer-link-color underline"
      }
      href={link}
    >
      {text}
    </a>
  );
};

export default FooterLinkUnderline;
