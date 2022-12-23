import React, { useState } from "react";
import { VideoContext } from "./VideoContext";

const VideoProvider = ({ children }) => {
  const [video, setVideo] = useState({
    id: null,
    name: null,
    description: null,
    author: null,
    videoCastNumber: null,
    image: null,
    date: null,
    duration: null,
    category: null,
    url: null,
  });

  const createVideo = (data) => {
    try {
      if (data.ok === true) {
        setVideo({
          id: data.data.uid,
          name: data.data.name,
          description: data.data.description,
          author: data.data.author,
          videoCastNumber: data.data.videoCastNumber,
          image: data.data.image,
          date: data.data.date,
          duration: data.data.duration,
          category: data.data.category,
          url: data.data.url,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getVideo = (data) => {
    try {
      if (data.ok === true) {
        setVideo({
          id: data.data.uid,
          name: data.data.name,
          description: data.data.description,
          author: data.data.author,
          videoCastNumber: data.data.videoCastNumber,
          image: data.data.image,
          date: data.data.date,
          duration: data.data.duration,
          category: data.data.category,
          url: data.data.url,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getVideoById = (data) => {
    try {
      if (data.ok === true) {
        setVideo({
          id: data.data.uid,
          name: data.data.name,
          description: data.data.description,
          author: data.data.author,
          videoCastNumber: data.data.videoCastNumber,
          image: data.data.image,
          date: data.data.date,
          duration: data.data.duration,
          category: data.data.category,
          url: data.data.url,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getVideoByCategory = (data) => {
    try {
      if (data.ok === true) {
        setVideo({
          id: data.data.uid,
          name: data.data.name,
          description: data.data.description,
          author: data.data.author,
          videoCastNumber: data.data.videoCastNumber,
          image: data.data.image,
          date: data.data.date,
          duration: data.data.duration,
          category: data.data.category,
          url: data.data.url,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getVideoByAuthor = (data) => {
    try {
      if (data.ok === true) {
        setVideo({
          id: data.data.uid,
          name: data.data.name,
          description: data.data.description,
          author: data.data.author,
          videoCastNumber: data.data.videoCastNumber,
          image: data.data.image,
          date: data.data.date,
          duration: data.data.duration,
          category: data.data.category,
          url: data.data.url,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getVideoByVideoCastNumber = (data) => {
    try {
      if (data.ok === true) {
        setVideo({
          id: data.data.uid,
          name: data.data.name,
          description: data.data.description,
          author: data.data.author,
          videoCastNumber: data.data.videoCastNumber,
          image: data.data.image,
          date: data.data.date,
          duration: data.data.duration,
          category: data.data.category,
          url: data.data.url,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateVideo = (data) => {
    try {
      if (data.ok === true) {
        setVideo({
          id: data.data.uid,
          name: data.data.name,
          description: data.data.description,
          author: data.data.author,
          videoCastNumber: data.data.videoCastNumber,
          image: data.data.image,
          date: data.data.date,
          duration: data.data.duration,
          category: data.data.category,
          url: data.data.url,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVideo = (data) => {
    try {
      if (data.ok === true) {
        setVideo({
          id: null,
          name: null,
          description: null,
          author: null,
          videoCastNumber: null,
          image: null,
          date: null,
          duration: null,
          category: null,
          url: null,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VideoContext.Provider
      value={{
        video,
        createVideo,
        getVideo,
        getVideoById,
        getVideoByCategory,
        getVideoByAuthor,
        getVideoByVideoCastNumber,
        updateVideo,
        deleteVideo,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
