import "./App.css";
import Background from "./components/background/Background";
import Button from "./components/button/Button";
import Container from "./components/container/Container";
import Navbar from "./components/navbar/Navbar";
import Articles from "./pages/articles/Articles";

function App() {
  // let isBlue = color {blue};
  return (
    <>
      <Navbar />
      <Container>
        {/* <h1>Hello</h1>
        <Background color="red" text="Hello"></Background>
        <Background color="purple" text="Hello"></Background>
        <Background color="blue" text="Hello" isBlue={true}></Background> */}
        <Articles />
      </Container>
    </>
  );
}

export default App;
