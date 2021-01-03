import React, { createContext, useState } from "react";

const ColorContext = createContext({
  state: { color: "black", subcolor: "red", twocolor: "yellow" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
    setTwocolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");
  const [twocolor, setTwocolor] = useState("yellow");
  const value = {
    state: { color, subcolor, twocolor },
    actions: { setColor, setSubcolor, setTwocolor },
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
//const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

//ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };
export default ColorContext;
