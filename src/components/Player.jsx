import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const serverIP = "109.169.23.123";
const serverPort = "9987";

const urlSrc = `https://fps4.listen2myradio.com:2199/listen.php?ip=${serverIP}&port=${serverPort}&type=s1`;

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
