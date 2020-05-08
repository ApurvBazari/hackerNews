import express from "express";
import path from "path";
import fetch from 'node-fetch'
import React from "react";
import {renderToString} from "react-dom/server";
import {ServerStyleSheet, StyleSheetManager} from 'styled-components'
import HomePage from "./public/pages/home";

const app = express();
const sheet = new ServerStyleSheet()

if (process.env.NODE_ENV === 'production') {
app.use(express.static('dist'));
app.get('*', (request, response) => {
response.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
} else {

app.use(express.static(path.resolve( __dirname, "../dist" )));

app.get( "*", (req, res) => {
  const {page = 1} = req.query;
  fetch(`https://hn.algolia.com/api/v1/search?page=${page}`)
    .then(res => res.json())
    .then((data) => {
      const jsx = (
        <StyleSheetManager sheet={sheet.instance}>
          <HomePage data={data} pageNum={page} />
        </StyleSheetManager>    
      );
      const reactDom = renderToString(jsx);
      const styleTags = sheet.getStyleTags()
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(htmlTemplate(reactDom, styleTags, data, page));
    })
});

app.listen(8000);

function htmlTemplate(reactDom, styleTags, data, page) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>React SSR</title>
      <link rel="shortcut icon" href="#">
    </head>
    ${styleTags}
    <body>
      <div id="root">${reactDom}</div>
      <script>
        window.store=${JSON.stringify(data.hits)}
        window.pageNum=${page}
      </script>
      <script src="/public/index.js"></script>
    </body>
    </html>
  `;
}
}