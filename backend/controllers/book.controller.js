import Book from "../models/book.model.js";

// create new Book
export const createNewBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);

    res.json(book);
  } catch (error) {
    return res.status(400).json({ message: "Invalid data", error });
  }
};

//get all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});

    res.json(books);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching all book", error });
  }
};

//get book by id
export const getBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Cannot found book" });
    }

    res.json(book);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching all book", error });
  }
};

//update book by id
export const updateBookById = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!book) {
      return res.status(404).json({ message: "Cannot find book" });
    }

    res.json(book);
  } catch (error) {
    return res.status(500).json({ message: "Error updating book", error });
  }
};

//delete book by id
export const deleteBookById = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "cannot found book" });
    }

    res.status(200).json({ message: "Book successfully deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting book", error });
  }
};
