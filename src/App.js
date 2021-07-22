import './App.css';
import Header from "./components/header/header";
import Content from "./components/content/content";
import Menu from "./components/menu/menu";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header />
            <div className="content">
                <Menu />
                <Content />
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
