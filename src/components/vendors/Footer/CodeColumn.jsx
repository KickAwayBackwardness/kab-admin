import React from "react";

const CodeColumn = () => {
  return (
    <div
      className="w-footer_column_width h-full p-[var(--footer-column-padding)] 
  flex flex-col justify-between
  border-b-frame border-r-frame border-frame_color"
    >
      <div></div>
      <div
        className="min-h-[var(--footer-main-text-block-min-height)] flex items-start opacity-[var(--footer-text-gray-opacity)]
    "
      >
        <div className=" text-footer_code_text leading-[var(--footer-code-text-line-height)] tracking-[var(--footer-code-text-letter-spacing)]">
          <div>
            <p>// INITIALIZING </p>
            <p>NEW FILES IN DATABASE </p>
          </div>
          <div className="p-5">
            <p>KAI_53815.JPG </p>
            <p>AUDIO_LOG_2018116.WAV</p>
          </div>
          <p>ACTIVATE CONSOLE FOR ACCESS...</p>
        </div>
      </div>
    </div>
  );
};

export default CodeColumn;
