import React from "react";
import "./App.scss";
import { useSelector } from "react-redux";
import { QuoteItems } from "./features/QuoteItems";
import { Header } from "./features/Header";
import Loader from "../src/assets/loader.gif";

function App() {
  const { quotes, loading } = useSelector((state) => state.quotes);

  //Add a case for when tag is empty.
  return (
    <div className="container">
      <Header />

      {loading ? (
        <div className="loading-img">
          {" "}
          <img src={Loader} alt="" />
        </div>
      ) : (
        <QuoteItems quotes={quotes} />
      )}
    </div>
  );
}

export default App;
