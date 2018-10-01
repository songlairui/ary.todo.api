module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'allTodo',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.STRING
    },
    { tableName: 'all_todo' }
  )
