const UserController = require('../contollers/user.controller')

module.exports = (app) => {
    app.post('/register', UserController.registerUser)
    app.post('/login', UserController.loginUser)
    app.get('/getLoggedInUser', UserController.getLoggedInUser)
    app.get('/logout', UserController.logoutUser)
}