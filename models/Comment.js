module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    Comment.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Comment.belongsTo(models.Restauraunt, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Comment;
  };