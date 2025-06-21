import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:5555/api/books/${id}`);
        const data = await res.json();
        setAuthor(data.author);
        setTitle(data.title);
        setPublishYear(data.publishYear);
      } catch (error) {
        setLoading(false);
        alert("An error happened. Please Check console");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const handleEditBook = async (e) => {
    e.preventDefault();
    const data = {
      title,
      author,
      publishYear,
    };

    setLoading(true);

    try {
      const res = await fetch(`http://localhost:5555/api/books/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to update book");
      }
      enqueueSnackbar("Book edited successfully", { variant: "success" });
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.error(error);
      enqueueSnackbar("Error", { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading && <Spinner />}
      <form
        onSubmit={handleEditBook}
        className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto"
      >
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500" htmlFor="author">
            Author
          </label>
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500" htmlFor="publishYear">
            Publish Year
          </label>
          <input
            type="number"
            name="publishYear"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditBook;
