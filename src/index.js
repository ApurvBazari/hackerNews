import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import HomePage from "./public/pages/home";

const app = express();

app.use( express.static( path.resolve( __dirname, "../dist" ) ) );

app.get( "/*", ( req, res ) => {
  const jsx = ( <HomePage /> );
  const reactDom = renderToString( jsx );

  res.writeHead( 200, { "Content-Type": "text/html" } );
  res.end( htmlTemplate( reactDom ) );
} );

app.listen( 8000 );

function htmlTemplate( reactDom ) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>React SSR</title>
    </head>
    
    <body>
      <div id="root">${ reactDom }</div>
      <script src="./public/home.js"></script>
    </body>
    </html>
  `;
}