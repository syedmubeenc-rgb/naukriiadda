import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "NaukriiAdda API is running",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "ok",
    service: "naukriiadda-backend",
  });
});

export default app;
