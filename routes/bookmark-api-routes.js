// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the bookmarks
  app.get("/api/bookmarks", function(req, res) {
    var query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Bookmark.findAll({
      where: query,
      include: [db.Author]
    }).then(function(dbBookmark) {
      res.json(dbBookmark);
    });
  });

  // Get route for retrieving a single Bookmark
  app.get("/api/bookmarks/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Bookmark.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Author]
    }).then(function(dbBookmark) {
      res.json(dbBookmark);
    });
  });

  // Bookmark route for saving a new Bookmark
  app.post("/api/bookmarks", function(req, res) {
    db.Bookmark.create(req.body).then(function(dbBookmark) {
      res.json(dbBookmark);
    });
  });

  // DELETE route for deleting bookmarks
  app.delete("/api/bookmarks/:id", function(req, res) {
    db.Bookmark.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBookmark) {
      res.json(dbBookmark);
    });
  });

  // PUT route for updating bookmarks
  app.put("/api/bookmarks", function(req, res) {
    db.Bookmark.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbBookmark) {
      res.json(dbBookmark);
    });
  });
};
