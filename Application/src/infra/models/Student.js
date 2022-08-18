const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Student.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      career : {
        type: DataTypes.STRING,
      },
      faculty: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Student',
      underscored: true,
      tableName: 'student',
    }
  );

  return Student;
};