var db = require("../models");

module.exports = function(app) {
  app.get("/api/categories", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Bookmark
    console.log("api route 1");
    db.Category.findAll({
      order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ['id', 'ASC']
      ],
      include: [db.Bookmark]
    }).then(function(dbCategory) {
      console.log("api route 2");
      res.json(dbCategory);
    });
  });

  app.get("/api/categories/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Bookmark
    db.Category.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Bookmark]
    }).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  app.post("/api/categories", function(req, res) {
    db.Category.create(req.body).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  app.delete("/api/categories/:id", function(req, res) {
    db.Category.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCategory) {
      res.json(dbCategory);
      // res.json({status:'ok'})
    });
  });

};
