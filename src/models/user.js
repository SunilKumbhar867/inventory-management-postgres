module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      confirm_password: {
        type: Sequelize.STRING
      },
    },
    {
      sequelize, // We need to pass the connection instance

      modelName: "User", // We need to choose the model name

      //freezeTableName: true,

      // I don't want createdAt
      // createdAt: false,

      // I want updatedAt to actually be called updateTimestamp
      //updatedAt: 'updateTimestamp',
    }
  );

  return User;
};
