import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import React from "react";
import Header from "../components/Header";

const change = (args) => {
  document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex;
};
const ColorPicker = () => {
  return (
    <div className="m=2 md:m-10 mt-24 p-2 rounded-3xl bg-white md:p-10">
      <Header category={"App"} title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
          <ColorPickerComponent
            id="inline-palette"
            mode="Palette"
            modeSwitcher={false}
            inline
            showButtons={false}
            change={change}
          />
        </div>
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
          <ColorPickerComponent
            id="inline-palette"
            mode="Picker"
            modeSwitcher={false}
            inline
            showButtons={false}
            change={change}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
