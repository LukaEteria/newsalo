
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const photos = require("./photos.json");

// CORS-ის საშუალებით ხელმისაწვდომობა
app.use(cors());

// Photos endpoint
app.get("/api/photos", (req, res) => {
  res.json(photos);
});

// სერვერის გაწვდვა
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
