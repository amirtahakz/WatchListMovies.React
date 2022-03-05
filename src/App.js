import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
