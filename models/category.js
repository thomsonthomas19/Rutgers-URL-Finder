module.exports = function (sequelize, DataTypes) {
  var Category = sequelize.define("Category", {

    Category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

    }

  });

  Category.associate = function (models) {

    Category.hasMany(models.Bookmark, {
      onDelete: "cascade"
    });
  };

  return Category;
};
