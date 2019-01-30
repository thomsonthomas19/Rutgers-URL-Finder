// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
// const session = require("express-session");
// Requiring passport as we've configured it
// const passport = require("./config/passport");
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3009;

// Requiring our models for syncing
const db = require("./models");

//========================================================

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());


// Routes
// =============================================================
require("./routes/bookmark-api-routes.js")(app);
require("./routes/category-api-routes.js")(app);
// require("./routes/html-routes.js")(app);

router.use(function(req,res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.get("*", function(req,res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// ======================================================
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {
  // as we have used server here for socket.io we will use server.listen instead of app.listen
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
