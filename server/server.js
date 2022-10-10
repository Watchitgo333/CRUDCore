require('./config/mongoose.config');
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
app.use(cors());
const PORT = process.env.PORT || 4000;
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const user_routes = require("./routes/user.routes");
const band_routes = require("./routes/band.routes");
const discog_routes = require("./routes/discography.routes");
user_routes(app);
band_routes(app);
discog_routes(app);
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})