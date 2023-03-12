const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const { version } = require("../package.json");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

require("./routes/transaction")(app);
require("./routes/user")(app);
require("./routes/question")(app);

app.get("/", (req, res) => {
  res.send(
    `<h1>Rockcat Server</h1> <h4>Message: Success</h4> <p>Version: ${version}</p>`
  );
});

app.listen(PORT, () => {
  console.log(`Server port ${PORT} is running`);
});
