const express = require("express");
const port = 3000;
const notificationRoutes = require("./routes/notificationRoutes");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", notificationRoutes);

app.listen(port);

console.log(`Server listening at http://localhost:${port}`);
