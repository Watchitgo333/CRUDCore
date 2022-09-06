require('./config/mongoose.config');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const PORT = 8000;
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const band_routes = require("./routes/band.routes");
const discog_routes = require("./routes/discography.routes");
band_routes(app);
discog_routes(app);
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})