import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateBookPage from "./pages/CreateBookPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateBookPage />} />
    </Routes>
  );
}

export default App;
