module.exports = function(sequelize, DataTypes) {
  var Bookmark = sequelize.define("Bookmark", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Bookmark.associate = function(models) {
    // We're saying that a Bookmark should belong to an Category
    // A Bookmark can't be created without an Category due to the foreign key constraint
    Bookmark.belongsTo(models.Category, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Bookmark;
};
