import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const urlSrc =
  "https://Fps3.listen2myradio.com:2199/listen.php?ip=109.169.23.124&port=8399&type=s1";

const Player = () => {
  return (
    <>
      <div>
        <AudioPlayer
          autoPlay={true}
          src={urlSrc}
          showJumpControls={false}
          hasDefaultKeyBindings={false}
          autoPlayAfterSrcChange={true}
          layout={"horizontal"}
        />
      </div>
    </>
  );
};

export default Player;
