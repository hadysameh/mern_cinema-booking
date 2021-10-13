const user_Router = require('./user')
const duration_Router = require('./duration')
const hall_Router = require('./hall')
const purchase_Router = require('./purchase')
const schedule_Router = require('./schedule')
const movie_Router = require('./movie')
const schedulesCreate_Router = require('./schedulesCreate')
const home_Router = require('./customer/home')


function initializeRoutes(app){
    app.use("/api", user_Router);
    app.use("/api", schedulesCreate_Router);
    app.use("/api", duration_Router);
    app.use("/api", hall_Router);
    app.use("/api", purchase_Router);
    app.use("/api", schedule_Router);
    app.use("/api", movie_Router);
    app.use("/api", home_Router);

}

module.exports={initializeRoutes}