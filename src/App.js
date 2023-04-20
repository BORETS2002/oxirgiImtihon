import "./App.css";
import Colleps from "./pages/colleps/Colleps";
import CollepsMobil from "./pages/CollepsMobil/CollepsMobil";
import Header from "./pages/header/header";
import { Container } from "./style/styleComponent";
function App() {
  return (
    <>
      <Container>
        <Header />
        <Colleps />
        <CollepsMobil />
      </Container>
    </>
  );
}

export default App;
