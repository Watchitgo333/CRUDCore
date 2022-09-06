const BandController = require('../contollers/band.controller');

module.exports = (app) => {
    app.get("/api/bands", BandController.getBands);
    app.put("/api/bands/:id", BandController.updateBandById);
    app.get("/api/bands/:id", BandController.getBandById);
    app.post("/api/bands", BandController.createBand);
    app.delete("/api/bands/:id", BandController.deleteBandById);
}