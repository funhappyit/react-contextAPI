import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./conponents/ColorBox";
import ColorContext, { ColorProvider } from "./contexts/color";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
