import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import PageSearch from "containers/PageSearch";
export { default as PageCollection1 } from "./containers/PageCollection1";
export { default as PageCollection2 } from "./containers/PageCollection2";

function App(props) {
    return (
        <HelmetProvider>
            <div className="bg-white text-base dark:bg-slate-900 text-slate-900 dark:text-slate-200">
                <BrowserRouter>
                   {props}
                </BrowserRouter>
            </div>
        </HelmetProvider>
    );
}

export default App;
