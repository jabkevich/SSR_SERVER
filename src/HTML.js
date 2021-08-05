import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter as Router } from "react-router-dom";
import App from "/src/client/App";
const css = new Set() // CSS for all rendered React components
const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
import StyleContext from 'isomorphic-style-loader/StyleContext'

console.log(css)
const HTML = (req, context) => {
    const body = renderToString(
        <StyleContext.Provider value={{ insertCss }}>
            <Router location={req.url} context={context}>
                <App />
            </Router>
        </StyleContext.Provider>
    );

    return `<html>
    <head>
        <title>React basic SSR</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
               <script src="client.js" defer></script>
        <style>${[...css].join('')}</style>
    </head>
    <body style="margin:0;">
        <div id="app">
      
           ${body}
        </div>
 
    </body>
    </html>`;
};


export default HTML;