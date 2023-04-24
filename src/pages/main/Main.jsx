import React from "react";
import YouTube from "react-youtube";
import ListVidios from "../../components/search/ListVidios";

const MainSearch = ({ videos, videosApp }) => {
  if (!videos.id) {
    return <ListVidios />;
  }
  if (videos.id) {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        videoSrc: `https//www.youtube.com/embed/${videos.id}`,
        autoplay: 0,
      },
    };

    return (
      <div className='wraperSearch'>
        <div className='w-100 h-100'>
          <YouTube
            videoId={videos.id.videoId}
            className='YoutubeSearch'
            iframeClassName={"YoutubeSearchIfrem"}
            title={""}
            loading={undefined}
            opts={opts}
          />

          <div className='box-videos'>
            <h4 className='mt-3'>{videos.snippet.title}</h4>
            <h5> {videos.snippet.channelTitle}</h5>
            <p>{videos.snippet.description}</p>
          </div>
        </div>
        <div className='option-videos'>
          {videosApp.map((videos) => {
            return (
              <div key={videos.snippet.channelTitle}>
                <YouTube
                  videoId={videos.id.videoId}
                  className='miniVideos'
                  iframeClassName={"miniVideosIfrem"}
                  title={""}
                  opts={opts}
                  loading={undefined}
                />
                <h5> {videos.snippet.channelTitle}</h5>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default MainSearch;
