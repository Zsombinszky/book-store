import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";

const CreateBookPage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = async (e) => {
    e.preventDefault();
    const data = {
      title,
      author,
      publishYear,
    };

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5555/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to create book");
      }

      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSaveBook}>
        <label htmlFor="title">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
        />

        <label htmlFor="author">Author</label>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          id="author"
        />

        <label htmlFor="publishYear">Publish Year</label>
        <input
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
          type="number"
          id="publishYear"
        />

        <button type="submit">
          {loading ? (
            <ImSpinner9 size={20} className="animate-spin" />
          ) : (
            "Create"
          )}
        </button>
      </form>
    </div>
  );
};

export default CreateBookPage;
