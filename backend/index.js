import express from "express";

import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import packageRoute from "./routes/package.route.js";
import ratingRoute from "./routes/rating.route.js";
import bookingRoute from "./routes/booking.route.js";
import paymentRoutes from "./routes/payment.routes.js";
import uploadRoute from "./routes/upload.route.js";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { connectDB } from "./config/connectDB.js";
import cookieParser from "cookie-parser";

const app = express();

connectDB();
app.use(
  cors({
    origin: ["http://localhost:5173", "https://fsd-project-2-1.onrender.com"], // Allow requests from frontend URLs
    credentials: true, // Allow cookies to be sent and received
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/images", express.static("uploads"));
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/package", packageRoute);
app.use("/api/rating", ratingRoute);
app.use("/api/booking", bookingRoute);
app.use("/payment", paymentRoutes);
app.use("/api/upload", uploadRoute);

// API-only server - no static file serving
app.get("/", (req, res) => {
  res.json({
    message: "Travel and Tourism API Server",
    version: "1.0.0",
    endpoints: {
      auth: "/api/auth",
      users: "/api/user",
      packages: "/api/package",
      bookings: "/api/booking",
      ratings: "/api/rating",
      payments: "/payment",
      uploads: "/api/upload"
    }
  });
});

const PORT = 8000;

//port
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
