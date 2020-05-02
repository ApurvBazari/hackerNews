import React from 'react'
import ReactDOM from 'react-dom'

import HomePage from './pages/home'

ReactDOM.hydrate(
  <HomePage />,
  document.getElementById("root")
);