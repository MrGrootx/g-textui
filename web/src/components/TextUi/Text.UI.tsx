import React, { useState } from "react";
import { useNuiEvent } from "../../hooks/useNuiEvent";

interface TextUIProps {
  id: string;
  label: string;
  keybind: string;
}

const TextUI: React.FC = () => {
  const [textUIs, setTextUIs] = useState<TextUIProps[]>([]);

  useNuiEvent<TextUIProps>("showTextUi", (data) => {
    showTextUi(data.id, data.label, data.keybind);
  });

  useNuiEvent<{ id: string }>("hideTextUi", (data) => {
    hideTextUi(data.id);
  });

  const showTextUi = (id: string, label: string, keybind: string) => {
    const existingTextUI = textUIs.find((t) => t.id === id);
    if (!existingTextUI) {
      const newTextUI: TextUIProps = { id, label, keybind };
      setTextUIs((prevTextUIs) => [...prevTextUIs, newTextUI]);
    }
  };

  const hideTextUi = (id: string) => {
    setTextUIs((prevTextUIs) =>
      prevTextUIs.filter((t) => t.id !== id)
    );
  };

  return (
    <div className="fixed top-0 right-0 h-screen flex flex-col-reverse justify-center items-center">
      {textUIs.map((textUI) => (
        <div
          className="p-2 mb-1"
          key={textUI.id}
          style={{
            display: textUIs.some((t) => t.id === textUI.id) ? "block" : "none",
          }}
        >
          <div className="bg-gradient-to-r from-[#25262bff] to-[#25262bff] inline-block py-2 px-3 rounded shadow-lg">
            <div className="flex gap-x-2 font-Rubik items-center">
              <span className="bg-[#EEEEEE] text-[#373A40] font-bold px-2 rounded uppercase">
                {textUI.keybind}
              </span>
              <h4 className="text-gray-100 capitalize">
                {textUI.label}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TextUI;

