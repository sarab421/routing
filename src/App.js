import { Route, Routes } from "react-router-dom";
import Home from "./home.js";
import Books from "./books.js";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/singlePage:id" element={<Books />} />
      </Routes>
    </>
  );
}

export default App;
