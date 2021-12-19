import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SimpleLayout from './layout/Simple';

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./views/Home'))
const About = lazy(() => import('./views/About'))
// const NotFound = lazy(() => import('./views/NotFound'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<SimpleLayout />}>
        <Route index element={
          <React.Suspense fallback={<>...</>}>
            <Home />
          </React.Suspense>
        } />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<>...</>}>
              <About />
            </React.Suspense>
          }
        />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
