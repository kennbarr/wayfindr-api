var appRouter = function(app) {
  app.get("/beacon/:beaconId", function(req, res) {
    if (Object.keys(locations).includes(req.params.beaconId)) {
      return res.send(locations[req.params.beaconId]);
    }
  });

  const locations = {
    b12: {x: 3, y: 5},
    b13: {x: 4, y: 6}
  }
}

module.exports = appRouter;
