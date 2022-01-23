module.exports = (sequelize, Sequelize) => {
    const Notes = sequelize.define("note", {
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      body: {
        type: Sequelize.TEXT
      }
    });
  
    return Notes;
  };