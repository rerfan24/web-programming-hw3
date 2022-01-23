module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isAdmin : {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });

    return User;
};