import { useSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const DeleteBookPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:5555/api/books/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete book");
      enqueueSnackbar("Book deleted successfully", { variant: "success" });
      navigate("/");
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("Error", { variant: "error" });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1>Delete Book</h1>
      {loading && <Spinner />}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to delete this book?</h3>
        <button
          onClick={handleDeleteBook}
          className="p-4 font-bold bg-red-600 border-2 border-black text-white m-8 w-full cursor-pointer"
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBookPage;
