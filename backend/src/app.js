const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contact.routes");

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Kairos API is running",
    });
});

app.use("/api/contact", contactRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

module.exports = app;