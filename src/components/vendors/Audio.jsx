import React from "react";

const Audio = () => {
  return (
    <div className="hidden">
      <audio
        id="auto-click"
        className="text-animation-effect"
        src="/audio/FX_text_animation_loop.mp3"
        type="audio/ogg"
      ></audio>
      {/* <audio id="auto-click" className="text-animation-effect">
        <source src="/audio/FX_text_animation_loop.mp3"></source>
      </audio> */}
      <div id="test-audio"></div>
    </div>
  );
};

export default Audio;
