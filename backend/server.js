import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import bookRoutes from "./routes/book.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5555;

app.use(express.json());
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at http://localhost:${PORT}`);
});
