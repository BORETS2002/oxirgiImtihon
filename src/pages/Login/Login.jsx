import React, { useState } from "react";
import { Container } from "../../style/styleComponent";
import Colleps from "../colleps/Colleps";
import CollepsMobil from "../CollepsMobil/CollepsMobil";
import Header from "../header/header";
import MainSearch from "../main/Main";

const Login = () => {
  const [videosApp, setVideosApp] = useState([]);
  const [selectedVideos, setSelectedVideosApp] = useState([]);

  return (
    <div>
      <Container>
        <Header
          setVideosApp={setVideosApp}
          setSelectedVideosApp={setSelectedVideosApp}
        />
        <div className='wrapper  '>
          <Colleps />
          <div className='boxApp '>
            <MainSearch videos={selectedVideos} videosApp={videosApp} />
            <CollepsMobil />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
