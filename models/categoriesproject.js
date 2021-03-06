'use strict';
module.exports = (sequelize, DataTypes) => {
  var categoriesProject = sequelize.define('categoriesProject', {
    categoryId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return categoriesProject;
};