import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const ipServer = "109.169.23.123";
const port = "9987";

const urlSrc = `https://Fps3.listen2myradio.com:2199/listen.php?ip=${ipServer}&port=${port}&type=s1`;

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
