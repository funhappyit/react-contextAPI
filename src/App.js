import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./conponents/ColorBox";
import ColorContext, { ColorProvider } from "./contexts/color";
import SelectColors from "./conponents/SelectColors";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
