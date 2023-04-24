import "./App.css";
import { useState, useEffect } from "react";
import Colleps from "./pages/colleps/Colleps";
import CollepsMobil from "./pages/CollepsMobil/CollepsMobil";
import Header from "./pages/header/header";
import { Container } from "./style/styleComponent";
import Login from "./pages/Login/Login";
import LoginGoogle from "./pages/Login/LoginGoogle";

import MainSearch from "./pages/main/Main";
import ListVidios from "./components/search/ListVidios";
// import firebase from "firebase";

function App() {
  const [videosApp, setVideosApp] = useState([]);
  const [selectedVideos, setSelectedVideosApp] = useState([]);

  return (
    <>
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
            <ListVidios />
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
