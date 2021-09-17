const user_Router = require('./user')
const duration_Router = require('./duration')
const hall_Router = require('./hall')
const purchase_Router = require('./purchase')
const schedule_Router = require('./schedule')
const movie_Router = require('./movie')


function initializeRoutes(app){
    app.use("/api", user_Router);
    app.use("/api", duration_Router);
    app.use("/api", hall_Router);
    app.use("/api", purchase_Router);
    app.use("/api", schedule_Router);
    app.use("/api", movie_Router);
}

module.exports={initializeRoutes}