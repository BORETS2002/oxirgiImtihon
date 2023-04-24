import "./App.css";

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
    </>
  );
}

export default App;
