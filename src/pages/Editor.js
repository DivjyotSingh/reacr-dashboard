import {
  RichTextEditor,
  RichTextEditorComponent,
  Inject,
  HtmlEditor,
  Toolbar,
  Image,
  Link,
  QuickToolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import React from "react";
import Header from "../components/Header";
import { EditorData } from "../data/dummy";

const Editor = () => {
  return (
    <div className="m=2 md:m-10 mt-24 p-2 rounded-3xl bg-white md:p-10">
      <Header category={"App"} title="Editor" />
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
