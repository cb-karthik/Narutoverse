import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import CardDetails from "./Components/CardDetails";


function App() {
  return (
    
    <BrowserRouter>
      
      <Routes>
        <Route path="/character/:characterName" element={<CardDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
