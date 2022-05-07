import './index.css';
import App from './App';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { UseStateDemo } from './components/UseStateDemo';
import UseEffectDemo from './components/UseEffectDemo';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<UseStateDemo />} />
          <Route path="state-demo" element={<UseStateDemo />} />
          <Route path="effect-demo" element={<UseEffectDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
