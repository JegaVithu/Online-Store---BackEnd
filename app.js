const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use("/", routes);
app.use((req, res) => res.redirect('/'));

const port = process.env.PORT;

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log(`Server running on port ${port}`);
});