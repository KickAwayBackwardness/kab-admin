import React from "react";

const NewsItemTitle = ({ title }) => {
  return (
    <p className=" group-hover:text-white font-[500] text-whyteInktrap text-news_item_title capitalize  mt-[var(--news-title-margin-top)] leading-[var(--news-title-line-height)] tracking-[var(--news-title-letter-spacing)]">
      {title}
    </p>
  );
};

export default NewsItemTitle;
