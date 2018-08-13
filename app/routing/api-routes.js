var connection = require("../../config/connection.js");

module.exports = function (app) {

    // setting route to get ALL bikes from database and send to front end home page to pupulate columns with bikes ridden and not.
    app.get("/api/bikes", function (req, res) {
        // console.log(req.body);
        connection.query("SELECT * FROM bikeList", function (err, data) {
            if (err) console.log(err);

            res.json(data);

        })
    });

    // setting route to receive data from front end and store in database
    app.post("/api/bikes", function (req, res) {
        connection.query("INSERT INTO bikeList (name, bikeType, photo) VALUES(?, ?, ?)", [
            [req.body.newBikeName],
            [req.body.newBikeType],
            [req.body.newBikePhoto],
        ],function (err, result) {
            if (err){
                return res.status(500).end();
            }
            //res.redirect("/api/bikes");
            // console.log(req.body);
        })

    });

    // post to update Boolean in database from NOT RIDDEN to RIDDEN
    app.post("/api/bikeRid", function (req, res) {
        console.log(req.body.bikeid);

        let bikeid = req.body.bikeid;

        connection.query(`UPDATE bikeList SET ridden = 1 WHERE ID = ${bikeid}`, function (err, data) {
            if (err) console.log(err);

            res.json(data);
        });
    })
}
