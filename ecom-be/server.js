import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

// Configure env
dotenv.config();

// Database config
connectDB();

// Create an Express app
const app = express();

// Middleware
app.use(cors({
  origin: 'https://eccomerce-s49e.onrender.com',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true // Enable credentials if needed (e.g., for cookies, authorization headers)
}));
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// REST API
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the ecommerce app</h1>");
});

// Define the port
const PORT = process.env.PORT || 8080;

// Run the server
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white
  );
});
