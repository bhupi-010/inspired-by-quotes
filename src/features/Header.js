import React from 'react'
import { useEffect } from "react";
import "../App.scss";
import { useDispatch ,useSelector} from "react-redux";
import { getQuotes } from "./quoteSlice";
import { themeChanged } from "./themeSlice";


import { SearchQuoteForm } from "./SearchQuoteForm";

export const Header = () => {
    const distpatch = useDispatch();
    const theme = useSelector((state) => state.theme);
    console.log(theme.darkmode);
  

    useEffect(() => {
      distpatch(getQuotes("inspirational"));
    }, [distpatch]);
  
    const onChangeThemeClicked = () => {
        distpatch(themeChanged());
      };

      if (theme.darkmode === true) {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
      }
    
  return (
   
    <div className="header">
      <button onClick={onChangeThemeClicked} >
        {theme.darkmode ? "light mode" : "dark mode"}
      </button>

      <h1>Inspired by Quotes</h1>
      <p className="quote-info">
       Get required quotes by searching below
       
      </p>

      <SearchQuoteForm />
    </div>
  )
}

