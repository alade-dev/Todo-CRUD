//connect express and mongoose
const express = require("express");
const connect = require("./config/database");

//Import functions
const { json } = require("express");
const todo = require("./controllers/todoController");
const models = require("./models/Todo");
const routes = require("./routes/todoRoute");

//Initialize express and mongoose
connect();
const app = express();

app.use(json());

app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
