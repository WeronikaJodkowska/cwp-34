module.exports = (sequelize, connection) =>{
    return connection.define('agent', {
        id:
            {
                type: sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
        name:
            {
                type: sequelize.STRING,
                allowNull: false
            },
        email:
            {
                type: sequelize.STRING,
                allowNull: false
            },
        tel:
            {
                type: sequelize.STRING,
                allowNull: false
            }
    });
};