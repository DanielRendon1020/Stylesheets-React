import "./App.css";
import Container from "./components/Container";
import Menu from "./components/Menu";
import StyleContext from "./contexts/StyleContext";
import Aside from "./components/Aside";
import { DEFAULT_STYLE } from "./contexts/StyleContext";

const menu = {
  backgroundColor: "#aaa",
};

const menuItem = {
  backgroundColor: "#eee",
  color: "grey",
  listStyle: "none",
  padding: ".5rem",
  margin: ".5rem",
};

function App() {
  return (
    <StyleContext.Provider value={DEFAULT_STYLE}>
      <div className="App">
        <Aside />
        <Container>
          <Menu menu={menu} menuItem={menuItem} />
          <h1>Hello World</h1>
        </Container>
      </div>
    </StyleContext.Provider>
  );
}

export default App;
