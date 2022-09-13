const DiscogController = require("../contollers/discography.controller")

module.exports = (app) => {
    app.get("/api/discog", DiscogController.getAllAlbumsInDb);
    app.put("/api/discog/:id", DiscogController.updateAlbumById);
    app.get("/api/discog/:id", DiscogController.getAlbumById);
    app.post("/api/discog", DiscogController.addBandToDiscog);
    app.delete("/api/discog/:id", DiscogController.deleteAlbumById);
}