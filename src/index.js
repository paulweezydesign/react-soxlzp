import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './routes/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context';
import Kittens from './routes/Kittens';
import KittenLayout from './routes/KittenLayout';
import About from './routes/About';
import Filaberta from './routes/Filaberta';
import Contact from './routes/Contact';
import Resources from './routes/Resources';
import SharedKittenLayout from './routes/SharedKittenLayout';
import SingleKitten from './routes/SingleKitten';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="kittens" element={<SharedKittenLayout />}>
              <Route index element={<Kittens />} />
              <Route path=":kittenId" element={<SingleKitten />} />
            </Route>
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
