
var burgers = require("../models/burgers.js");

var express = require("express");
var router = express.Router();

// Import the model (burgers.js) to use its database functions.

// Create all our routes and set up logic within those routes where required.
router.get("/index", function (req, res) {
    burgers.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/index", function (req, res) {
    burgers.insertOne([
        "burger_name", "devoured"
    ], [
            req.body.name, false
        ], function () {
            res.redirect("/index");
        });
});

router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burgers.updateOne({
        devoured: true
    }, condition, function () {
        res.redirect("/");
    });
});


// Export routes for server.js to use.
module.exports = router;
