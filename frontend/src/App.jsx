import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateBookPage from "./pages/CreateBookPage";
import DeleteBookPage from "./pages/DeleteBookPage";
import EditBookPage from "./pages/EditBookPage";
import ShowBookPage from "./pages/ShowBookPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/books/create" element={<CreateBookPage />} />
      <Route path="/books/delete/:id" element={<DeleteBookPage />} />
      <Route path="/books/edit/:id" element={<EditBookPage />} />
      <Route path="/books/details/:id" element={<ShowBookPage />} />
    </Routes>
  );
}

export default App;
