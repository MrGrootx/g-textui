import React from "react";
import "../index.css";
import { debugData } from "../utils/debugData";
import TextUI from "./TextUi/Text.UI";


debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

const App: React.FC = () => {
  return (
    <>
      <TextUI />
    </>
  );
};

export default App;
