import React from "react";
import { HelmetProvider } from "react-helmet-async";

function App(props) {
    return (
        <HelmetProvider>
            <div className="bg-white text-base dark:bg-slate-900 text-slate-900 dark:text-slate-200">
                {props}
            </div>
        </HelmetProvider>
    );
}

export default App;
