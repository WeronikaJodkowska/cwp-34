module.exports = (sequelize, connection) =>{
    return connection.define('propertie', {
        id:
            {
                type: sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
        heading:
            {
                type: sequelize.STRING,
                allowNull: false,
            },
        price:
            {
                type: sequelize.INTEGER,
                allowNull: false,
            },
        currency:
            {
                type: sequelize.STRING,
                allowNull: false,
            },
        location:
            {
                type: sequelize.STRING,
                allowNull: true,
            }
    });
};