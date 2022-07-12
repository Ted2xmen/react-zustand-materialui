import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Details from "./pages/Details";
import People from "./pages/People";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/people" element={<People />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
