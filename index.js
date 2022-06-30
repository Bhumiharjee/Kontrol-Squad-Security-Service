require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

//Imort Routes
const home = require("./src/routes/web.js");
const contact = require("./src/routes/contact.js");
const career = require("./src/routes/career.js")
const policies = require("./src/routes/policies.js");
const services = require("./src/routes/services.js");
const profile = require("./src/routes/profile.js")
const notfound = require("./src/routes/notfound.js");

// DATABASE RELATED STUFF
require("./src/db/connection");

// FOR EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static")); // for serving static files
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// FOR hbs SPECIFIC STUFF
app.set("view engine", "hbs"); // set the template engine
app.set("views", path.join(__dirname, "views")); // set the views directory

// User Routes
app.use("/", home);
app.use("/home", home);
app.use("/contact", contact);
app.use("/career", career);
app.use("/policies", policies);
app.use("/services", services);
app.use("/profile", profile);
app.use("*", notfound);

// START THE SERVER
app.listen(port, () => {
    console.log(`Website has been successfully started on port ${port}`);
});