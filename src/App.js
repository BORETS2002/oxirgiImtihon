import "./App.css";
import { useState, useEffect } from "react";
import Colleps from "./pages/colleps/Colleps";
import CollepsMobil from "./pages/CollepsMobil/CollepsMobil";
import Header from "./pages/header/header";
import { Container } from "./style/styleComponent";
import MainSearch from "./pages/main/Main";
import { Route, Routes } from "react-router-dom";
import NotFont from "./components/notFont";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/*' element={<NotFont />} />
      </Routes>
      {/* <Container>
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
      </Container> */}
    </>
  );
}

export default App;
