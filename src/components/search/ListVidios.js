import React, { useEffect, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
const ListVidios = () => {
  const [chanel, setCHanel] = useState();
  async function getChannelData() {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/channels",
      {
        params: {
          part: "snippet",
          id: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
          key: "AIzaSyD7EniwfEGF3v-RWvKHdsJUBCyIfApQH3I",
          maxResults: 5,
        },
      },
    );
    setCHanel(response.data);
  }

  console.log(chanel);
  useEffect(() => {
    getChannelData();
  }, []);
  // console.log({ ...chanel.items.id });
  return (
    <>
      {
        // chanel.map((videos) => {
        // return (
        // <div key={chanel.snippet.channelTitle}>
        //   <YouTube
        //     videoId={chanel.items.id}
        //     className='miniVideos'
        //     iframeClassName={"miniVideosIfrem"}
        //     title={""}
        //     loading={undefined}
        //   />
        //   <h5> {chanel.snippet.channelTitle}</h5>
        // </div>
        // );
        // })
      }
    </>
  );
};

export default ListVidios;
