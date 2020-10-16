import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import ExcelPage from "./components/excelPage";
import UploadPage from './components/uploadPage'
import './styles.css'

function App() {
  return (
    <>
      {/* <ExcelPage /> */}
      <UploadPage />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
