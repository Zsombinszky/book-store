import express from "express";
import {
  createNewBook,
  deleteBookById,
  getAllBooks,
  getBookById,
  updateBookById,
} from "../controllers/book.controller.js";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", createNewBook);
router.get("/:id", getBookById);
router.put("/:id", updateBookById);
router.delete("/:id", deleteBookById);

export default router;
