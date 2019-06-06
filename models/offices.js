module.exports = (sequelize, connection) =>{
    return connection.define('office', {
        id:
            {
                type: sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
        title:
            {
                type: sequelize.STRING,
                allowNull: false
            },
        website:
            {
                type: sequelize.STRING,
                allowNull: false
            },
        address:
            {
                type: sequelize.STRING,
                allowNull: false
            }
    });
};