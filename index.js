const Sequelize = require('sequelize');
const config = require('./config.json');
const port = process.env.PORT || 3000;

const db = require('./context')(Sequelize, config);
const server = require('./appManager')(db, config);
const tempDataToDb = require('./helpers/dataToDb');

(async function () {
    await db.sequelize.sync({force: true});
    await tempDataToDb(db);

    server.listen(port, () => {
        console.log(`Server running on port:${port}`)
    });
})();